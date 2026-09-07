"""
Stage 2 — tailored CV JSON: writer → reviewer feedback → rewrite (max two review rounds).

Contact, education, and languages come from the profile (no LLM).
The static renderer later places this JSON into the CV template.

Run from project root:
    python engine/dynamic_engine/stage_2.py
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path
from typing import Any

SOURCE_ROOT = Path(__file__).resolve().parents[2]
if str(SOURCE_ROOT) not in sys.path:
    sys.path.insert(0, str(SOURCE_ROOT))

from joblication_runtime import DATA_ROOT, RESOURCE_ROOT

PROJECT_ROOT = DATA_ROOT
if str(RESOURCE_ROOT) not in sys.path:
    sys.path.insert(0, str(RESOURCE_ROOT))

from engine.template_contract import resolve_cv_template, visible_generation_keys

from batch_resilience import payload_status, process_with_resilience
from certifications_validator import build_certification_description_fallback
from grounding import (
    build_profile_skill_keys,
    build_skills_from_profile,
    sanitize_profile,
)
from json_loop import run_write_review_loop
from ollama import coerce_llm_dict_map, coerce_llm_string, coerce_llm_string_list
from prompts.prompt_stage_2 import (
    CV_REVIEWER_SYSTEM,
    CV_WRITER_SYSTEM,
    SKILL_DOMAIN_COUNT,
    SKILL_SUBSKILL_MAX,
    SKILL_SUBSKILL_MIN,
)
from skills_validator import enforce_skill_keys_only, validate_skills_output
from model_json import string_list
from utils import (
    CONFIG_PATH,
    application_text,
    bind_source_slug,
    build_payload_header,
    build_sources,
    dedupe_keywords,
    ensure_project_path,
    export_json,
    iter_applications,
    load_config,
    load_json,
    previous_payload_for_slug,
    profile_for_prompt,
    resolve_output_path,
    resolve_path,
)

STAGE_2_DEFAULT = "engine/dynamic_engine/data/stage_2.json"
META_KEYS = frozenset({"generated_at", "sources", "pipeline_status"})
STATIC_KEYS = frozenset(
    {
        "first_name",
        "last_name",
        "email",
        "linkedin",
        "github",
        "portfolio",
        "contact",
        "address",
        "languages",
        "education",
    }
)
ACHIEVEMENT_BAD_KEYS = frozenset(
    {
        "achievements",
        "context",
        "job_posting",
        "resume_keywords",
        "source_slug",
        "tailoring",
        "title",
    }
)
ACHIEVEMENT_ENTRY_KEYS = frozenset({"name", "description", "date"})
_INVALID_DATE_TOKENS = frozenset({"", "YYYY-MM", "TBD", "N/A", "NA", "PENDING", "UNKNOWN"})
_PLACEHOLDER_COUNT_RE = re.compile(r"\b[XxNn]\+")
_SKILL_TERM_SPLITS: dict[str, list[str]] = {
    "static dynamic sast dast tools": ["SAST", "DAST"],
}


def _skills_settings(config: dict) -> dict[str, int]:
    raw = config.get("stage_2", {}).get("skills", {})
    domain_count = max(1, int(raw.get("domain_count", SKILL_DOMAIN_COUNT)))
    subskill_min = max(1, int(raw.get("subskill_min", SKILL_SUBSKILL_MIN)))
    subskill_max = max(subskill_min, int(raw.get("subskill_max", SKILL_SUBSKILL_MAX)))
    return {
        "domain_count": domain_count,
        "subskill_min": subskill_min,
        "subskill_max": subskill_max,
    }


def _numbered_key(prefix: str, index: int) -> str:
    return f"{prefix} {index}"


def _normalize_term_key(term: str) -> str:
    return re.sub(r"\s+", " ", term.lower().strip())


def expand_skill_term(term: str) -> list[str]:
    key = _normalize_term_key(term)
    if key in _SKILL_TERM_SPLITS:
        return list(_SKILL_TERM_SPLITS[key])
    return [term.strip()] if term.strip() else []


def polish_text(text: str) -> str:
    if not text:
        return ""
    result = _PLACEHOLDER_COUNT_RE.sub("multiple", str(text))
    result = re.sub(r"\bTBD\b", "", result, flags=re.IGNORECASE)
    result = re.sub(r"\bTODO\b", "", result, flags=re.IGNORECASE)
    result = re.sub(r"\s{2,}", " ", result)
    result = re.sub(r"\s+([,.;])", r"\1", result)
    return result.strip()


def polish_bullets(bullets: list[str]) -> list[str]:
    cleaned = [polish_text(item) for item in bullets]
    return dedupe_keywords([item for item in cleaned if item])


def capitalize_title(text: str) -> str:
    cleaned = str(text).strip()
    if cleaned and cleaned[0].islower():
        return cleaned[0].upper() + cleaned[1:]
    return cleaned


def polish_skill_subskills(subskills: list[str]) -> list[str]:
    expanded: list[str] = []
    for term in subskills:
        expanded.extend(expand_skill_term(term))
    return dedupe_keywords([polish_text(item) for item in expanded if polish_text(item)])


def _format_month(date_str: str) -> str:
    text = str(date_str or "").strip()
    upper = text.upper()
    if upper in _INVALID_DATE_TOKENS or re.fullmatch(r"Y{4}-M{2}", upper):
        return ""
    if upper in ("PRESENT", "CURRENT", "NOW"):
        return "Present"
    if len(text) >= 7:
        return text[:7]
    return text


def _split_name(full_name: str) -> tuple[str, str]:
    parts = full_name.strip().split()
    if not parts:
        return "", ""
    if len(parts) == 1:
        return parts[0], ""
    return parts[0], " ".join(parts[1:])


def _build_languages(profile: dict) -> dict[str, dict[str, str]]:
    raw = profile.get("languages", {})
    languages: dict[str, dict[str, str]] = {}
    if isinstance(raw, dict):
        for index, (name, level) in enumerate(raw.items(), start=1):
            languages[_numbered_key("language", index)] = {
                "name": str(name).strip(),
                "level": str(level).strip(),
            }
    return languages


def _build_education(profile: dict) -> dict[str, dict[str, str]]:
    raw = profile.get("education", {})
    education: dict[str, dict[str, str]] = {}
    if isinstance(raw, dict):
        for index, item in enumerate(raw.values(), start=1):
            if not isinstance(item, dict):
                continue
            education[_numbered_key("education", index)] = {
                "degree": polish_text(str(item.get("degree", "")).strip()),
                "field": polish_text(str(item.get("field", "")).strip()),
                "school": polish_text(str(item.get("school", item.get("institution", ""))).strip()),
                "cgpa": str(item.get("cgpa", item.get("gpa", ""))).strip(),
                "courses": polish_text(str(item.get("courses", "")).strip()),
                "start_date": _format_month(str(item.get("start_date", item.get("startDate", ""))).strip()),
                "end_date": _format_month(str(item.get("end_date", item.get("endDate", ""))).strip()),
            }
    return education


def compose_location(contact: dict[str, Any]) -> str:
    parts: list[str] = []
    for key in ("city", "address", "state", "country"):
        value = str(contact.get(key, "")).strip()
        if not value:
            continue
        lower = value.lower()
        if any(kept.lower() in lower or lower in kept.lower() for kept in parts):
            continue
        parts.append(value)
    if parts:
        return ", ".join(parts)
    return str(contact.get("address", "")).strip()


def build_static_header(profile: dict) -> dict[str, Any]:
    contact = profile.get("contact", {})
    first, last = _split_name(str(contact.get("name", "")))
    return {
        "first_name": first,
        "last_name": last,
        "email": str(contact.get("email", "")).strip(),
        "linkedin": str(contact.get("linkedin", "")).strip(),
        "github": str(contact.get("github", "")).strip(),
        "portfolio": str(contact.get("portfolio", "")).strip(),
        "contact": str(contact.get("phone", "")).strip(),
        "address": compose_location(contact),
        "languages": _build_languages(profile),
        "education": _build_education(profile),
    }


def _profile_item_list(profile: dict, key: str) -> list[tuple[str, dict[str, Any]]]:
    raw = profile.get(key, {})
    if not isinstance(raw, dict):
        return []
    return [(str(source_id), item) for source_id, item in raw.items() if isinstance(item, dict)]


def _model_entry_list(value: Any) -> list[dict[str, Any]]:
    if isinstance(value, list):
        return [item for item in value if isinstance(item, dict)]
    if isinstance(value, dict):
        return [item for item in value.values() if isinstance(item, dict)]
    return []


def _match_model_entries(
    model_entries: list[dict[str, Any]],
    source_items: list[tuple[str, dict[str, Any]]],
) -> list[tuple[str, dict[str, Any], dict[str, Any]]]:
    unused = list(enumerate(model_entries))
    matched: list[tuple[str, dict[str, Any], dict[str, Any]]] = []
    used: set[int] = set()
    for source_id, source in source_items:
        found: int | None = None
        for index, entry in unused:
            if index in used:
                continue
            if str(entry.get("source_id", "")).strip() == source_id:
                found = index
                break
        if found is None:
            for index, _entry in unused:
                if index not in used:
                    found = index
                    break
        if found is None:
            matched.append((source_id, source, {}))
        else:
            used.add(found)
            matched.append((source_id, source, model_entries[found]))
    return matched


def _writer_source_payload(profile: dict) -> dict[str, Any]:
    volunteer = profile.get("volunteer", profile.get("volunteer_experience", {}))
    return {
        "experience": [
            {"source_id": source_id, **entry}
            for source_id, entry in _profile_item_list(profile, "experience")
        ],
        "projects": [
            {"source_id": source_id, **entry}
            for source_id, entry in _profile_item_list(profile, "projects")
        ],
        "achievements": [
            {"source_id": source_id, **entry}
            for source_id, entry in _profile_item_list(profile, "achievements")
        ],
        "certifications": [
            {"source_id": source_id, **entry}
            for source_id, entry in _profile_item_list(profile, "certifications")
        ],
        "volunteer": volunteer if volunteer else {},
        "interests": profile.get("interests", {}),
    }


def _candidate_cv_for_writer(profile: dict) -> dict[str, Any]:
    payload = dict(profile_for_prompt(profile))
    payload["volunteer"] = profile.get("volunteer", profile.get("volunteer_experience", {}))
    payload["interests"] = profile.get("interests", {})
    payload["languages"] = profile.get("languages", {})
    return payload


def _job_context(application: dict) -> dict[str, Any]:
    return {
        "title": application.get("title", ""),
        "company": application.get("company", application.get("company_name", "")),
        "location": application.get("location", ""),
        "about": application.get("about", ""),
        "text": application_text(application),
    }


def _fallback_work_entry(source: dict[str, Any]) -> dict[str, Any]:
    description = polish_text(str(source.get("description", "")).strip())
    return {
        "title": capitalize_title(polish_text(str(source.get("position", "")).strip())),
        "company": polish_text(str(source.get("company", "")).strip()),
        "location": polish_text(str(source.get("location", "")).strip()),
        "start_date": _format_month(str(source.get("startDate", source.get("start_date", ""))).strip()),
        "end_date": _format_month(str(source.get("endDate", source.get("end_date", ""))).strip()),
        "points": [description] if description else [],
    }


def _normalize_work_experience(parsed: Any, profile: dict) -> dict[str, Any]:
    source_items = _profile_item_list(profile, "experience")
    entries: dict[str, Any] = {}
    for index, (_source_id, source, model_entry) in enumerate(
        _match_model_entries(_model_entry_list(parsed), source_items),
        start=1,
    ):
        fallback = _fallback_work_entry(source)
        points = polish_bullets(string_list(model_entry.get("points", model_entry.get("bullets"))))
        entries[_numbered_key("experience", index)] = {
            "title": capitalize_title(
                polish_text(str(source.get("position", "")).strip()) or polish_text(str(model_entry.get("title", "")))
            ),
            "company": polish_text(str(source.get("company", "")).strip())
            or polish_text(str(model_entry.get("company", ""))),
            "location": fallback["location"] or polish_text(str(model_entry.get("location", "")).strip()),
            "start_date": fallback["start_date"]
            or _format_month(str(model_entry.get("start_date", "")).strip()),
            "end_date": fallback["end_date"] or _format_month(str(model_entry.get("end_date", "")).strip()),
            "points": points or fallback["points"],
        }
    return entries


def _normalize_projects(parsed: Any, profile: dict) -> dict[str, Any]:
    source_items = _profile_item_list(profile, "projects")
    entries: dict[str, Any] = {}
    for index, (_source_id, source, model_entry) in enumerate(
        _match_model_entries(_model_entry_list(parsed), source_items),
        start=1,
    ):
        entries[_numbered_key("project", index)] = {
            "title": capitalize_title(
                polish_text(str(source.get("name", "")).strip()) or polish_text(str(model_entry.get("title", "")))
            ),
            "description": polish_text(
                str(model_entry.get("description", "")).strip() or str(source.get("description", "")).strip()
            ),
            "start_date": _format_month(str(source.get("startDate", source.get("start_date", ""))).strip())
            or _format_month(str(model_entry.get("start_date", "")).strip()),
            "end_date": _format_month(str(source.get("endDate", source.get("end_date", ""))).strip())
            or _format_month(str(model_entry.get("end_date", "")).strip()),
        }
    return entries


def _is_valid_achievement_entry(value: Any) -> bool:
    if not isinstance(value, dict):
        return False
    if ACHIEVEMENT_BAD_KEYS.intersection(value.keys()):
        return False
    if not ACHIEVEMENT_ENTRY_KEYS.intersection(value.keys()):
        return False
    return bool(coerce_llm_string(value, "name") or coerce_llm_string(value, "description"))


def _normalize_achievement_entry(parsed: dict[str, Any], fallback: dict[str, Any]) -> dict[str, str]:
    return {
        "name": polish_text(coerce_llm_string(parsed, "name") or str(fallback.get("name", "")).strip()),
        "description": polish_text(
            coerce_llm_string(parsed, "description") or str(fallback.get("description", "")).strip()
        ),
        "date": _format_month(coerce_llm_string(parsed, "date") or str(fallback.get("date", "")).strip()),
    }


def _normalize_achievements(parsed: Any, profile: dict) -> dict[str, Any]:
    source_items = _profile_item_list(profile, "achievements")
    model_entries = _model_entry_list(parsed)
    if not model_entries:
        return {
            _numbered_key("achievement", index): {
                "name": polish_text(str(source.get("name", source.get("title", ""))).strip()),
                "description": polish_text(str(source.get("description", "")).strip()),
                "date": _format_month(str(source.get("date", source.get("startDate", ""))).strip()),
            }
            for index, (_source_id, source) in enumerate(source_items, start=1)
        }
    entries: dict[str, Any] = {}
    for index, (_source_id, source, model_entry) in enumerate(
        _match_model_entries(model_entries, source_items),
        start=1,
    ):
        entries[_numbered_key("achievement", index)] = _normalize_achievement_entry(model_entry, source)
    return entries


def _is_valid_certification_entry(value: Any) -> bool:
    if not isinstance(value, dict):
        return False
    if ACHIEVEMENT_BAD_KEYS.intersection(value.keys()):
        return False
    return bool(coerce_llm_string(value, "name"))


def _normalize_certification_entry(parsed: dict[str, Any], fallback: dict[str, Any]) -> dict[str, str]:
    name = polish_text(coerce_llm_string(parsed, "name") or str(fallback.get("name", "")).strip())
    issuer = polish_text(coerce_llm_string(parsed, "issuer") or str(fallback.get("issuer", "")).strip())
    raw_description = coerce_llm_string(parsed, "description")
    profile_description = str(fallback.get("description", "")).strip()
    description = polish_text(raw_description)
    if (
        not description
        or (name and description.lower() == name.lower())
        or (issuer and description.lower() == issuer.lower())
    ):
        description = polish_text(build_certification_description_fallback(name, issuer, profile_description))
    return {
        "name": name,
        "issuer": issuer,
        "description": description,
        "date": _format_month(coerce_llm_string(parsed, "date") or str(fallback.get("date", "")).strip()),
        "url": str(parsed.get("url", fallback.get("url", ""))).strip(),
    }


def _coerce_certifications(parsed: Any, profile_certs: dict[str, Any]) -> dict[str, Any]:
    fallbacks = [cert for cert in profile_certs.values() if isinstance(cert, dict)]
    raw_entries: list[dict[str, Any]] = []
    if isinstance(parsed, dict):
        certs = parsed.get("certifications", parsed)
        if isinstance(certs, list):
            raw_entries = [item for item in certs if isinstance(item, dict)]
        elif isinstance(certs, dict):
            raw_entries = [item for item in certs.values() if isinstance(item, dict)]
    elif isinstance(parsed, list):
        raw_entries = [item for item in parsed if isinstance(item, dict)]

    entries: dict[str, Any] = {}
    for index, cert in enumerate(raw_entries, start=1):
        if not _is_valid_certification_entry(cert):
            continue
        fallback = fallbacks[index - 1] if index <= len(fallbacks) else {}
        entries[_numbered_key("certification", index)] = _normalize_certification_entry(cert, fallback)
    return entries


def _normalize_writer_certifications(parsed: Any, profile: dict) -> dict[str, Any]:
    source_items = _profile_item_list(profile, "certifications")
    coerced = _coerce_certifications(parsed, dict(source_items))
    if coerced:
        return coerced
    entries: dict[str, Any] = {}
    for index, source in enumerate([item for _sid, item in source_items][:5], start=1):
        entries[_numbered_key("certification", index)] = _normalize_certification_entry({}, source)
    return entries


def _volunteer_source_items(profile: dict) -> list[tuple[str, dict[str, Any]]]:
    items = _profile_item_list(profile, "volunteer")
    if items:
        return items
    return _profile_item_list(profile, "volunteer_experience")


def _volunteer_fields(record: dict[str, Any], source: dict[str, Any] | None = None) -> dict[str, Any]:
    source = source or {}
    title = polish_text(
        str(record.get("title", record.get("role", source.get("role", source.get("title", ""))))).strip()
    )
    company = polish_text(
        str(
            record.get(
                "company",
                record.get(
                    "organization",
                    record.get("name", source.get("organization", source.get("name", source.get("company", "")))),
                ),
            )
        ).strip()
    )
    description = polish_text(
        str(record.get("description", source.get("description", ""))).strip()
    )
    points = polish_bullets(string_list(record.get("points")))
    if not points and description:
        points = [description]
    return {
        "title": title,
        "company": company,
        "organization": company,
        "start_date": _format_month(
            str(record.get("start_date", source.get("startDate", source.get("start_date", "")))).strip()
        ),
        "end_date": _format_month(
            str(record.get("end_date", source.get("endDate", source.get("end_date", "")))).strip()
        ),
        "points": points,
        "description": description,
    }


def _normalize_volunteer(parsed: Any, profile: dict) -> dict[str, Any]:
    source_items = _volunteer_source_items(profile)
    model_entries = _model_entry_list(parsed)
    if not model_entries and source_items:
        return {
            _numbered_key("volunteer", index): _volunteer_fields({}, source)
            for index, (_source_id, source) in enumerate(source_items, start=1)
        }
    if source_items:
        entries: dict[str, Any] = {}
        for index, (_source_id, source, model_entry) in enumerate(
            _match_model_entries(model_entries, source_items),
            start=1,
        ):
            entries[_numbered_key("volunteer", index)] = _volunteer_fields(model_entry, source)
        return entries
    entries = {}
    for index, record in enumerate(model_entries, start=1):
        entries[_numbered_key("volunteer", index)] = _volunteer_fields(record, {})
    return entries


def _drop_domain_echo_subskills(category: str, subskills: list[str]) -> list[str]:
    category_tokens = set(_normalize_term_key(category).split())
    kept: list[str] = []
    for skill in subskills:
        skill_tokens = set(_normalize_term_key(skill).split())
        if skill_tokens and skill_tokens <= category_tokens:
            continue
        kept.append(skill)
    return kept


def _extract_skills_grouped(parsed: Any) -> dict[str, list[str]]:
    if not isinstance(parsed, dict):
        return {}
    raw = parsed.get("skills", parsed)
    grouped: dict[str, list[str]] = {}
    if isinstance(raw, list):
        for item in raw:
            if not isinstance(item, dict):
                continue
            domain = str(item.get("domain", item.get("name", ""))).strip()
            subskills = item.get("sub_skills", item.get("skills", item.get("subskills", [])))
            if domain and isinstance(subskills, list):
                grouped[domain] = coerce_llm_string_list({"items": subskills}, "items")
        return grouped
    return coerce_llm_dict_map(parsed if "skills" in parsed else {"skills": parsed}, "skills")


def _coerce_skills_map(parsed: Any, skills_settings: dict[str, int]) -> dict[str, list[str]]:
    domain_count = skills_settings["domain_count"]
    subskill_max = skills_settings["subskill_max"]
    grouped = _extract_skills_grouped(parsed if isinstance(parsed, dict) else {"skills": parsed})
    skills: dict[str, list[str]] = {}
    for name, vals in grouped.items():
        category = str(name).strip()
        if not category:
            continue
        subskills = _drop_domain_echo_subskills(category, polish_skill_subskills(vals))
        if not subskills:
            continue
        skills[category] = subskills[:subskill_max]
    if len(skills) > domain_count:
        skills = dict(list(skills.items())[:domain_count])
    return skills


def _normalize_writer_skills(parsed: Any, profile: dict, skills_settings: dict[str, int]) -> dict[str, list[str]]:
    if isinstance(parsed, dict) and parsed and "skills" not in parsed:
        skills = _coerce_skills_map({"skills": parsed}, skills_settings)
    else:
        skills = _coerce_skills_map(parsed if isinstance(parsed, dict) else {"skills": parsed}, skills_settings)
    skills = enforce_skill_keys_only(skills, profile)
    schema_ok, _schema_errors = validate_skills_output(skills, profile)
    if not schema_ok or len(skills) < skills_settings["domain_count"]:
        skills = build_skills_from_profile(profile, domain_count=skills_settings["domain_count"])
    return skills


def _ensure_interests(interests: list[str], profile: dict, min_items: int = 3) -> list[str]:
    result = dedupe_keywords([str(item).strip() for item in interests if str(item).strip()])
    profile_interests = profile.get("interests", {})
    if isinstance(profile_interests, dict):
        for key in profile_interests:
            if len(result) >= min_items:
                break
            label = str(key).strip()
            if label and label not in result:
                result.append(label)
    return result


def normalize_writer_cv(
    parsed: dict[str, Any],
    profile: dict,
    enabled: set[str],
    skills_settings: dict[str, int],
    *,
    only_keys: set[str] | None = None,
) -> dict[str, Any]:
    wanted = set(enabled) if only_keys is None else set(only_keys) & set(enabled)
    generated: dict[str, Any] = {}
    if "executive_summary" in wanted:
        generated["executive_summary"] = polish_text(str(parsed.get("executive_summary", "")).strip())
    if "work_experience" in wanted:
        generated["work_experience"] = _normalize_work_experience(parsed.get("work_experience"), profile)
    if "projects" in wanted:
        generated["projects"] = _normalize_projects(parsed.get("projects"), profile)
    if "skills" in wanted:
        raw_skills = parsed.get("skills")
        if raw_skills:
            generated["skills"] = _normalize_writer_skills(raw_skills, profile, skills_settings)
        else:
            generated["skills"] = build_skills_from_profile(profile, domain_count=skills_settings["domain_count"])
    if "achievements" in wanted:
        generated["achievements"] = _normalize_achievements(parsed.get("achievements"), profile)
    if "certifications" in wanted:
        generated["certifications"] = _normalize_writer_certifications(parsed.get("certifications"), profile)
    if "volunteer_experience" in wanted:
        generated["volunteer_experience"] = _normalize_volunteer(parsed.get("volunteer_experience"), profile)
    if "interests" in wanted:
        interests = string_list(parsed.get("interests"))
        generated["interests"] = _ensure_interests(polish_bullets(interests), profile, min_items=3)
    return generated


def process_application(
    config: dict,
    app_key: str,
    application: dict,
    profile: dict,
    cv_template: dict[str, Any] | None = None,
    slug: str = "",
) -> dict[str, Any]:
    template = cv_template or resolve_cv_template(PROJECT_ROOT, slug=slug or None)
    enabled = visible_generation_keys(template.get("layout"))
    skills_settings = _skills_settings(config)
    allowed_skills = build_profile_skill_keys(profile)

    def _normalize(parsed: dict[str, Any]) -> dict[str, Any]:
        return normalize_writer_cv(parsed, profile, enabled, skills_settings)

    generated, review = run_write_review_loop(
        config,
        app_key=app_key,
        document_label="CV",
        writer_system=CV_WRITER_SYSTEM,
        reviewer_system=CV_REVIEWER_SYSTEM,
        base_prompt={
            "enabled_sections": sorted(enabled),
            "source_entries": _writer_source_payload(profile),
            "allowed_skills": allowed_skills,
            "job": _job_context(application),
            "candidate_cv": _candidate_cv_for_writer(profile),
            "domain_count": skills_settings["domain_count"],
            "subskill_min": skills_settings["subskill_min"],
            "subskill_max": skills_settings["subskill_max"],
        },
        normalize=_normalize,
    )
    visible = [
        section["id"]
        for section in template.get("layout", {}).get("sections", [])
        if isinstance(section, dict) and section.get("visible", True)
    ]
    return {
        "role_title": str(application.get("title", "")).strip(),
        **generated,
        "_template": {"id": template.get("id", ""), "components": visible},
        "quality_review": review,
    }


def _load_existing(path: Path) -> dict[str, Any]:
    if not path.is_file():
        return {}
    try:
        return load_json(path)
    except json.JSONDecodeError:
        return {}


def _merge_payload(
    existing: dict[str, Any],
    header: dict[str, Any],
    static_header: dict[str, Any],
    updates: dict[str, Any],
) -> dict[str, Any]:
    merged = {**existing, **header, **static_header}
    for key, value in updates.items():
        merged[key] = value
    return merged


def run(config_path: Path = CONFIG_PATH) -> dict[str, Any]:
    config = load_config(config_path)

    apps_path = resolve_path(config, "applications", "json", "applications/local_applications.json")
    profile_path = resolve_path(config, "profile", "json", "settings/local_profile.json")
    out_path = resolve_output_path(config, "stage_2", STAGE_2_DEFAULT)

    applications = load_json(apps_path)
    profile = sanitize_profile(load_json(profile_path))
    if not applications:
        raise ValueError(f"No applications found in {apps_path}")
    if not profile:
        raise ValueError(f"No profile found in {profile_path}")

    static_header = build_static_header(profile)
    header = build_payload_header(config)
    header["sources"] = build_sources(config)
    existing = _load_existing(out_path)
    updates: dict[str, Any] = {}

    for _index, app_key, slug, application in iter_applications(applications):
        cv_template = resolve_cv_template(PROJECT_ROOT, slug=slug)
        updates[app_key] = bind_source_slug(
            process_with_resilience(
                config,
                stage="stage_2",
                app_key=app_key,
                title=str(application.get("title", "")),
                previous=previous_payload_for_slug(existing, app_key=app_key, slug=slug),
                generate=lambda app_key=app_key, application=application, cv_template=cv_template, slug=slug: process_application(
                    config, app_key, application, profile, cv_template, slug
                ),
            ),
            slug,
        )
        partial_payload = _merge_payload(existing, header, static_header, updates)
        partial_payload["pipeline_status"] = "RUNNING"
        export_json(partial_payload, out_path)

    payload = _merge_payload(existing, header, static_header, updates)
    payload["pipeline_status"] = payload_status(updates)
    export_json(payload, out_path)
    return payload


def main() -> None:
    ensure_project_path()
    try:
        payload = run()
    except (FileNotFoundError, ValueError, RuntimeError, ImportError) as exc:
        print(f"Error: {exc}", file=sys.stderr)
        raise SystemExit(1) from exc

    app_count = sum(
        1
        for key in payload
        if key not in META_KEYS and key not in STATIC_KEYS and str(key).startswith("application_")
    )
    print(f"Stage 2 complete: {app_count} application(s) -> {STAGE_2_DEFAULT}")


if __name__ == "__main__":
    main()
