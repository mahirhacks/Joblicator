"""
Stage 2 — tailored resume document per application.

Static header from profile (no LLM).
Loop 1: fit_review per application
Loop 2+: one LLM call per resume field (inter-loops for each experience/project entry)
Keywords: one shared pool per application (no per-section reset); terms scatter across the CV
Verification: after generation, score each section 1-10; refine sections below min_quality
Parser verification: after LLM verification, scan for empty required fields and force-regenerate

Run from project root:
    python engine/dynamic_engine/stage_2.py

Reads:  data/stage_1.json, profile, applications
Output: data/stage_2.json
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path
from typing import Any

from grounding import (
    build_claims_ledger,
    build_gap_disclosures,
    build_profile_skill_keys,
    build_skills_from_profile,
    claims_guidance_block,
    derive_claims_to_avoid,
    sanitize_profile,
    scan_content_grounding,
)
from certifications_validator import (
    build_certification_description_fallback,
    validate_certifications_output,
)
from ollama import (
    call_ollama,
    coerce_llm_bullets,
    coerce_llm_dict_map,
    coerce_llm_string,
    coerce_llm_string_list,
)
from plain_text import (
    PLAIN_TEXT_REPLY,
    clean_raw,
    parse_achievement_entry,
    parse_certifications,
    parse_comma_list,
    parse_fit_review,
    parse_plain_paragraph,
    parse_project_entry,
    parse_quality_review,
    parse_skills_domains,
    parse_volunteer,
    parse_work_experience_entry,
)
from prompts.prompt_stage_2 import (
    INTERLOOP_SYSTEMS,
    KEYWORD_PICK_MAX,
    LOOP_1_SYSTEM,
    LOOP_2_ACHIEVEMENTS_SYSTEM_KEY,
    LOOP_2_CERTIFICATIONS_SYSTEM,
    LOOP_2_EXECUTIVE_SUMMARY_SYSTEM,
    LOOP_2_INTERESTS_SYSTEM,
    LOOP_2_PROJECTS_SYSTEM_KEY,
    LOOP_2_SKILLS_SYSTEM,
    LOOP_2_VOLUNTEER_SYSTEM,
    LOOP_2_WORK_EXPERIENCE_SYSTEM_KEY,
    SKILL_DOMAIN_COUNT,
    SKILL_SUBSKILL_MAX,
    SKILL_SUBSKILL_MIN,
    VERIFICATION_SYSTEM,
)
from utils import (
    CONFIG_PATH,
    application_text,
    build_parser_improvement_block,
    build_payload_header,
    build_quality_improvement_block,
    build_sources,
    dedupe_keywords,
    drop_placeholder_keywords,
    ensure_project_path,
    export_json,
    generation_options,
    load_config,
    load_json,
    profile_for_prompt,
    record_parser_issues,
    record_reviewer_feedback,
    resolve_output_path,
    resolve_path,
)
from verification import (
    clear_pipeline_failure_report,
    default_failure_report_path,
    enforce_parser_gate,
    fail_on_unresolved_enabled,
)
from skills_validator import enforce_skill_keys_only, validate_skills_output
from style_validator import scan_cv_style

STAGE_1_DEFAULT = "engine/dynamic_engine/data/stage_1.json"
STAGE_2_DEFAULT = "engine/dynamic_engine/data/stage_2.json"
META_KEYS = frozenset({"generated_at", "sources"})
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
_MASTER_KEYWORD_SPLITS: dict[str, list[str]] = {
    "static dynamic sast dast tools": ["SAST", "DAST", "Static Analysis (SAST)", "Dynamic Analysis (DAST)"],
}
VERIFIED_SECTIONS = (
    "fit_review",
    "executive_summary",
    "work_experience",
    "projects",
    "skills",
    "achievements",
    "certifications",
    "volunteer_experience",
    "interests",
)
META_CONTENT_KEYS = frozenset({"quality_review", "parser_review"})


class KeywordPool:
    """Shared keyword pool for the whole resume — deducts as sections consume terms."""

    def __init__(self, master: list[str]) -> None:
        self._master = list(master)
        self._available = list(master)

    def reset(self) -> None:
        self._available = list(self._master)

    def available(self) -> list[str]:
        return list(self._available)

    def remaining_count(self) -> int:
        return len(self._available)

    def deduct_from_text(self, text: str) -> list[str]:
        used = trace_keywords_in_text(text, self._available)
        used_lower = {item.lower() for item in used}
        self._available = [kw for kw in self._available if kw.lower() not in used_lower]
        return used

    def deduct_from_content(self, content: Any) -> list[str]:
        return self.deduct_from_text(content_to_text(content))


def _keyword_settings(config: dict) -> dict[str, int]:
    raw = config.get("stage_2", {}).get("keywords", {})
    try:
        max_original = int(raw.get("max_original_keyword", 15))
    except (TypeError, ValueError):
        max_original = 15
    try:
        max_synonym = int(raw.get("max_synonym_keyword_per_original_keyword", 2))
    except (TypeError, ValueError):
        max_synonym = 2
    return {
        "max_original_keyword": max(1, max_original),
        "max_synonym_keyword_per_original_keyword": max(0, max_synonym),
    }


def _iter_section_keyword_groups(
    section_keywords: list[str],
    synonyms_per_original: int,
) -> list[tuple[str, list[str]]]:
    """Parse stage_1 interleaved lists: original, then up to N synonym variants."""
    groups: list[tuple[str, list[str]]] = []
    index = 0
    while index < len(section_keywords):
        original = str(section_keywords[index]).strip()
        if not original:
            index += 1
            continue
        synonyms: list[str] = []
        for offset in range(synonyms_per_original):
            syn_index = index + 1 + offset
            if syn_index >= len(section_keywords):
                break
            synonym = str(section_keywords[syn_index]).strip()
            if synonym:
                synonyms.append(synonym)
        groups.append((original, synonyms))
        index += 1 + len(synonyms)
    return groups


def _append_unique_to_master(master: list[str], seen: set[str], keyword: str) -> None:
    for text in _expand_master_keyword(keyword):
        key = text.lower()
        if text and key not in seen:
            seen.add(key)
            master.append(text)


def build_master_keywords(
    resume_keywords: dict[str, Any],
    config: dict | None = None,
) -> list[str]:
    settings = _keyword_settings(config or {})
    max_original = settings["max_original_keyword"]
    max_synonym = settings["max_synonym_keyword_per_original_keyword"]

    seen_originals: set[str] = set()
    seen_terms: set[str] = set()
    master: list[str] = []
    if not isinstance(resume_keywords, dict):
        return master

    for values in resume_keywords.values():
        if not isinstance(values, list):
            continue
        cleaned = drop_placeholder_keywords([str(item) for item in values])
        for original, synonyms in _iter_section_keyword_groups(cleaned, max_synonym):
            orig_key = _normalize_term_key(original)
            if not orig_key or orig_key in seen_originals:
                continue
            if len(seen_originals) >= max_original:
                return master

            seen_originals.add(orig_key)
            _append_unique_to_master(master, seen_terms, original)
            for synonym in synonyms[:max_synonym]:
                _append_unique_to_master(master, seen_terms, synonym)

        if len(seen_originals) >= max_original:
            break

    return master


_KEYWORD_SECTIONS = (
    "executive_summary",
    "work_experience",
    "projects",
    "skills",
    "achievements",
    "certifications",
    "volunteer_experience",
    "interests",
)


def _keyword_pool_for_regeneration(
    master_keywords: list[str],
    content: dict[str, Any],
    exclude_section: str,
) -> KeywordPool:
    """Pool seeded from master minus keywords already used in other resume sections."""
    pool = KeywordPool(master_keywords)
    scan = _content_without_meta(content)
    for section in _KEYWORD_SECTIONS:
        if section == exclude_section or section not in scan:
            continue
        pool.deduct_from_content(scan[section])
    return pool


def _normalize_term_key(term: str) -> str:
    return re.sub(r"\s+", " ", term.lower().strip())


def _expand_master_keyword(keyword: str) -> list[str]:
    if not keyword:
        return []
    key = _normalize_term_key(keyword)
    if key in _MASTER_KEYWORD_SPLITS:
        return list(_MASTER_KEYWORD_SPLITS[key])
    return [keyword]


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
    """Uppercase the first letter of an entry title without touching the rest (acronym-safe)."""
    cleaned = str(text).strip()
    if cleaned and cleaned[0].islower():
        return cleaned[0].upper() + cleaned[1:]
    return cleaned


def polish_skill_subskills(subskills: list[str]) -> list[str]:
    expanded: list[str] = []
    for term in subskills:
        expanded.extend(expand_skill_term(term))
    cleaned = [polish_text(item) for item in expanded]
    return dedupe_keywords([item for item in cleaned if item])


def trace_keywords_in_text(text: str, keywords: list[str]) -> list[str]:
    haystack = text.lower()
    used: list[str] = []
    used_lower: set[str] = set()

    for keyword in sorted(keywords, key=len, reverse=True):
        norm = keyword.lower()
        if norm in used_lower:
            continue
        # Word-boundary match — bare substring check made "KG" match inside "background".
        if re.search(rf"(?<!\w){re.escape(norm)}(?!\w)", haystack):
            used.append(keyword)
            used_lower.add(norm)

    return used


def content_to_text(content: Any) -> str:
    if isinstance(content, str):
        return content
    if isinstance(content, list):
        return " ".join(str(item) for item in content)
    return json.dumps(content, ensure_ascii=False)


def keyword_prompt_block(pool: KeywordPool) -> dict[str, Any]:
    available = pool.available()
    return {
        "available_keywords": available,
        "keyword_pick_guidance": {
            "suggested_max_per_section": KEYWORD_PICK_MAX,
            "required_minimum": 0,
        },
        "keyword_rules": [
            f"You may use up to {KEYWORD_PICK_MAX} keywords from available_keywords in this section — fewer or none is fine.",
            "Only select a keyword if it is honestly supported by candidate_cv AND relevant to the job posting in tailoring.",
            "Skip any keyword that would imply skills, tools, employers, or outcomes not evidenced in candidate_cv.",
            "Never force keywords to hit a count — honest fit matters more than keyword density.",
            "available_keywords is shared across the entire resume — scatter unique terms; do not use every keyword in one section.",
            "When a keyword fits, use it word-for-word exactly as written in available_keywords.",
            "Do not paraphrase, abbreviate, or invent keywords outside available_keywords.",
        ],
    }


def skills_keyword_prompt_block(pool: KeywordPool, skills_settings: dict[str, int]) -> dict[str, Any]:
    domain_count = skills_settings["domain_count"]
    subskill_min = skills_settings["subskill_min"]
    subskill_max = skills_settings["subskill_max"]
    available = pool.available()
    return {
        "available_keywords": available,
        "keyword_pick_guidance": {
            "suggested_max_per_section": KEYWORD_PICK_MAX,
            "required_minimum": 0,
        },
        "skills_structure": {
            "domain_count": domain_count,
            "subskills_per_domain": f"{subskill_min}-{subskill_max}",
        },
        "keyword_rules": [
            f"Build exactly {domain_count} skill domains with {subskill_min}-{subskill_max} sub-skills each.",
            "available_keywords is shared across the entire resume — prefer terms not already used elsewhere.",
            "Use available_keywords only when honestly evidenced in candidate_cv and relevant to the job — skip overstated terms.",
            "You do not need to consume every available keyword; omit any that would create a false claim.",
            "Each sub-skill should prefer an exact match from available_keywords when relevant and CV-backed.",
            "Use available_keywords word-for-word when selected — do not paraphrase.",
            "When available_keywords runs out or none fit honestly, add CV-grounded related terms from candidate_cv.",
            "Never invent tools, frameworks, or outcomes not evidenced in candidate_cv.",
            "For sub-skills: every item MUST be copied exactly from allowed_skills — no JD-invented skills.",
        ],
    }


def _log_keywords_used(section: str, used: list[str], remaining: int) -> None:
    if used:
        joined = ", ".join(used)
        print(f"  keywords used ({section}): {joined} | remaining: {remaining}", file=sys.stderr)


def _prompt_with_claims(prompt: dict[str, Any], claims_guidance: dict[str, Any] | None) -> dict[str, Any]:
    if not claims_guidance:
        return prompt
    return {**prompt, **claims_guidance}


def build_application_claims(
    fit_review: dict[str, Any],
    profile: dict[str, Any],
) -> tuple[list[str], list[str], dict[str, dict[str, Any]]]:
    gaps = coerce_llm_string_list(fit_review, "gaps")
    claims_to_avoid = derive_claims_to_avoid(gaps)
    gaps_addressed = build_gap_disclosures(gaps)
    claims_ledger = build_claims_ledger(profile, gaps)
    return claims_to_avoid, gaps_addressed, claims_ledger


def _grounding_settings(config: dict) -> dict[str, bool]:
    raw = config.get("stage_2", {}).get("grounding", {})
    return {
        "skills_from_profile_only": bool(raw.get("skills_from_profile_only", True)),
        "enforce_claims_manifest": bool(raw.get("enforce_claims_manifest", True)),
    }


def _certifications_settings(config: dict) -> dict[str, int]:
    raw = config.get("stage_2", {}).get("certifications", {})
    return {
        "description_min_chars": max(1, int(raw.get("description_min_chars", 24))),
    }


def _style_verification_enabled(config: dict) -> bool:
    raw = config.get("stage_2", {}).get("style_verification", {})
    return bool(raw.get("enabled", True))


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


def _prompt_with_improvement(prompt: dict[str, Any], improvement: dict[str, Any] | None) -> dict[str, Any]:
    if not improvement:
        return prompt
    return {**prompt, "improvement": improvement}


def _verification_settings(config: dict) -> dict[str, Any]:
    return config.get("stage_2", {}).get("verification", {})


def _messages(system: str, user: str) -> list[dict[str, str]]:
    return [{"role": "system", "content": system}, {"role": "user", "content": user}]


def _application_key(index: int) -> str:
    return f"application_{index}"


def _numbered_key(prefix: str, index: int) -> str:
    return f"{prefix} {index}"


def _format_month(date_str: str) -> str:
    text = str(date_str or "").strip()
    upper = text.upper()
    if upper in _INVALID_DATE_TOKENS or re.fullmatch(r"Y{4}-M{2}", upper):
        return ""
    if upper in ("PRESENT", "CURRENT", "NOW"):
        return ""
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
    """Education is static candidate data — copied verbatim from the profile, no LLM."""
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
    """Recruiter-style location line: 'City, Country' — dedupes overlapping region parts, drops zip."""
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


def _stage1_block(stage1: dict[str, Any], app_key: str) -> dict[str, Any]:
    block = stage1.get(app_key)
    if not isinstance(block, dict):
        raise ValueError(f"Missing {app_key} in stage_1.json — run stage_1.py first")
    return block


def _tailoring_context(stage1_entry: dict[str, Any], application: dict) -> dict[str, Any]:
    return {
        "title": stage1_entry.get("title", application.get("title", "")),
        "source_slug": stage1_entry.get("source_slug", ""),
        "context": stage1_entry.get("context", {}),
        "resume_keywords": stage1_entry.get("resume_keywords", {}),
        "job_posting": {
            "title": application.get("title", ""),
            "location": application.get("location", ""),
            "text": application_text(application),
        },
    }


def _achievement_tailoring(stage1_entry: dict[str, Any], application: dict) -> dict[str, Any]:
    context = stage1_entry.get("context", {})
    if not isinstance(context, dict):
        context = {}
    return {
        "title": stage1_entry.get("title", application.get("title", "")),
        "role_summary": context.get("role_summary", ""),
    }


def _call_loop(
    config: dict,
    app_key: str,
    loop_name: str,
    system: str,
    prompt: dict[str, Any],
    *,
    options: dict[str, Any] | None = None,
) -> str:
    print(f"Stage 2 — {app_key}: {loop_name} ...", file=sys.stderr)
    return call_ollama(
        config,
        _messages(
            system,
            (
                f"Stage 2 {loop_name} for {app_key}.\n"
                f"{json.dumps(prompt, indent=2, ensure_ascii=False)}\n\n"
                f"{PLAIN_TEXT_REPLY}"
            ),
        ),
        options=options,
    )


def _parse_fit_review(raw: str) -> dict[str, Any]:
    parsed = parse_fit_review(raw)
    return {
        "fit_score": parsed["fit_score"],
        "fit_summary": polish_text(parsed["fit_summary"]),
        "strengths": polish_bullets(parsed["strengths"]),
        "gaps": polish_bullets(parsed["gaps"]),
    }


def loop1_fit_review(
    config: dict,
    app_key: str,
    stage1_entry: dict[str, Any],
    application: dict,
    profile: dict,
    improvement: dict[str, Any] | None = None,
) -> dict[str, Any]:
    prompt = _prompt_with_improvement(
        {
            "task": "Honest fit review for this application.",
            "tailoring": _tailoring_context(stage1_entry, application),
            "candidate_cv": profile_for_prompt(profile),
            "reply_format": (
                "Plain text: FIT_SCORE, FIT_SUMMARY, STRENGTHS (bullets), GAPS (bullets) — see system prompt."
            ),
        },
        improvement,
    )
    raw = _call_loop(
        config,
        app_key,
        "loop 1 fit_review",
        LOOP_1_SYSTEM,
        prompt,
        options=generation_options(config, "precise"),
    )
    return _parse_fit_review(raw)


def loop2_executive_summary(
    config: dict,
    app_key: str,
    stage1_entry: dict[str, Any],
    application: dict,
    profile: dict,
    fit_review: dict[str, Any],
    keyword_pool: KeywordPool,
    improvement: dict[str, Any] | None = None,
    claims_guidance: dict[str, Any] | None = None,
) -> str:
    prompt = _prompt_with_improvement(
        _prompt_with_claims(
            {
                "task": "Write executive_summary.",
                "tailoring": _tailoring_context(stage1_entry, application),
                "fit_review": fit_review,
                "candidate_cv": profile_for_prompt(profile),
                **keyword_prompt_block(keyword_pool),
                "reply_format": (
                    "Plain text paragraph only (3-4 sentences, pronoun-free implied first person) — see system prompt."
                ),
            },
            claims_guidance,
        ),
        improvement,
    )
    raw = _call_loop(
        config,
        app_key,
        "loop 2 executive_summary",
        LOOP_2_EXECUTIVE_SUMMARY_SYSTEM,
        prompt,
        options=generation_options(config, "creative"),
    )
    summary = parse_plain_paragraph(raw)

    used = keyword_pool.deduct_from_text(summary)
    _log_keywords_used("executive_summary", used, len(keyword_pool.available()))
    return polish_text(summary)


def _coerce_numbered_dict(parsed: Any, field_name: str, key_prefix: str) -> dict[str, Any]:
    if not isinstance(parsed, dict):
        return {}

    nested = parsed.get(field_name, parsed)
    if not isinstance(nested, dict):
        nested = parsed

    result: dict[str, Any] = {}
    for index, value in enumerate(nested.values(), start=1):
        if isinstance(value, dict):
            result[_numbered_key(key_prefix, index)] = value
    return result


def _is_valid_achievement_entry(value: Any) -> bool:
    if not isinstance(value, dict):
        return False
    if ACHIEVEMENT_BAD_KEYS.intersection(value.keys()):
        return False
    if not ACHIEVEMENT_ENTRY_KEYS.intersection(value.keys()):
        return False
    name = coerce_llm_string(value, "name")
    description = coerce_llm_string(value, "description")
    return bool(name or description)


def _normalize_achievement_entry(parsed: dict[str, Any], fallback: dict[str, Any]) -> dict[str, str]:
    return {
        "name": polish_text(coerce_llm_string(parsed, "name") or str(fallback.get("name", "")).strip()),
        "description": polish_text(
            coerce_llm_string(parsed, "description") or str(fallback.get("description", "")).strip()
        ),
        "date": _format_month(coerce_llm_string(parsed, "date") or str(fallback.get("date", "")).strip()),
    }


def _is_valid_certification_entry(value: Any) -> bool:
    if not isinstance(value, dict):
        return False
    if ACHIEVEMENT_BAD_KEYS.intersection(value.keys()):
        return False
    return bool(coerce_llm_string(value, "name"))


def _normalize_certification_entry(parsed: dict[str, Any], fallback: dict[str, Any]) -> dict[str, str]:
    name = polish_text(coerce_llm_string(parsed, "name") or str(fallback.get("name", "")).strip())
    issuer = polish_text(
        coerce_llm_string(parsed, "issuer") or str(fallback.get("issuer", "")).strip()
    )
    raw_description = coerce_llm_string(parsed, "description")
    profile_description = str(fallback.get("description", "")).strip()
    description = polish_text(raw_description)
    if (
        not description
        or (name and description.lower() == name.lower())
        or (issuer and description.lower() == issuer.lower())
    ):
        description = polish_text(
            build_certification_description_fallback(name, issuer, profile_description)
        )
    return {
        "name": name,
        "issuer": issuer,
        "description": description,
        "date": _format_month(coerce_llm_string(parsed, "date") or str(fallback.get("date", "")).strip()),
        "url": str(parsed.get("url", fallback.get("url", ""))).strip(),
    }


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


def finalize_application_content(
    content: dict[str, Any],
    profile: dict,
    skills_settings: dict[str, int],
    cert_settings: dict[str, int] | None = None,
) -> dict[str, Any]:
    """Deterministic fixes for fields parser checks — applied before parser gate."""
    cert_cfg = cert_settings or {"description_min_chars": 24}
    certs = content.get("certifications")
    if isinstance(certs, dict):
        fallbacks = [item for item in (profile.get("certifications") or {}).values() if isinstance(item, dict)]
        for index, (key, entry) in enumerate(certs.items()):
            if not isinstance(entry, dict):
                continue
            fallback = fallbacks[index] if index < len(fallbacks) else {}
            name = str(entry.get("name", fallback.get("name", ""))).strip()
            issuer = str(entry.get("issuer", fallback.get("issuer", ""))).strip()
            if not str(entry.get("issuer", "")).strip():
                entry["issuer"] = issuer
            description = str(entry.get("description", "")).strip()
            if (
                not description
                or (name and description.lower() == name.lower())
                or (issuer and description.lower() == issuer.lower())
            ):
                entry["description"] = polish_text(
                    build_certification_description_fallback(
                        name,
                        issuer,
                        str(fallback.get("description", "")).strip(),
                    )
                )

        ok, _ = validate_certifications_output(
            certs,
            min_description_chars=cert_cfg["description_min_chars"],
        )
        if not ok:
            for index, (key, entry) in enumerate(certs.items()):
                if not isinstance(entry, dict):
                    continue
                fallback = fallbacks[index] if index < len(fallbacks) else {}
                entry["description"] = polish_text(
                    build_certification_description_fallback(
                        str(entry.get("name", fallback.get("name", ""))).strip(),
                        str(entry.get("issuer", fallback.get("issuer", ""))).strip(),
                        str(fallback.get("description", "")).strip(),
                    )
                )

    interests = content.get("interests")
    if isinstance(interests, list):
        content["interests"] = polish_bullets(_ensure_interests(interests, profile, min_items=3))

    skills = content.get("skills")
    if isinstance(skills, dict):
        cleaned = enforce_skill_keys_only(skills, profile)
        schema_ok, _ = validate_skills_output(cleaned, profile)
        if not schema_ok or len(cleaned) < skills_settings["domain_count"]:
            cleaned = build_skills_from_profile(profile, domain_count=skills_settings["domain_count"])
        content["skills"] = cleaned

    return content


def polish_application_output(data: dict[str, Any]) -> dict[str, Any]:
    fit_review = data.get("fit_review")
    if isinstance(fit_review, dict):
        fit_review["fit_summary"] = polish_text(str(fit_review.get("fit_summary", "")))
        fit_review["strengths"] = polish_bullets(coerce_llm_string_list(fit_review, "strengths"))
        fit_review["gaps"] = polish_bullets(coerce_llm_string_list(fit_review, "gaps"))

    if "executive_summary" in data:
        data["executive_summary"] = polish_text(str(data.get("executive_summary", "")))

    for section_key, date_keys in (
        ("work_experience", ("start_date", "end_date")),
        ("projects", ("start_date", "end_date")),
        ("certifications", ("date",)),
        ("achievements", ("date",)),
    ):
        section = data.get(section_key)
        if not isinstance(section, dict):
            continue
        for entry in section.values():
            if not isinstance(entry, dict):
                continue
            if section_key == "work_experience" and "points" in entry:
                entry["points"] = polish_bullets(coerce_llm_string_list(entry, "points"))
            for field in ("name", "title", "company", "description", "field", "degree", "school"):
                if field in entry and isinstance(entry[field], str):
                    entry[field] = polish_text(entry[field])
            for date_key in date_keys:
                if date_key in entry:
                    entry[date_key] = _format_month(str(entry.get(date_key, "")))

    skills = data.get("skills")
    if isinstance(skills, dict):
        data["skills"] = {
            domain: polish_skill_subskills(vals if isinstance(vals, list) else [])
            for domain, vals in skills.items()
        }

    interests = data.get("interests")
    if isinstance(interests, list):
        data["interests"] = polish_bullets(interests)

    return data


def _drop_domain_echo_subskills(category: str, subskills: list[str]) -> list[str]:
    """Drop sub-skills that just repeat the domain name ('Security' under 'Security Operations')."""
    category_tokens = {token for token in _normalize_term_key(category).split() if len(token) > 2}
    kept: list[str] = []
    for skill in subskills:
        skill_tokens = {token for token in _normalize_term_key(skill).split() if token}
        if skill_tokens and skill_tokens <= category_tokens:
            continue
        kept.append(skill)
    return kept


def _coerce_skills_map(parsed: Any, skills_settings: dict[str, int]) -> dict[str, list[str]]:
    domain_count = skills_settings["domain_count"]
    subskill_min = skills_settings["subskill_min"]
    subskill_max = skills_settings["subskill_max"]
    grouped = _extract_skills_grouped(parsed)
    skills: dict[str, list[str]] = {}

    for name, vals in grouped.items():
        category = str(name).strip()
        if not category:
            continue
        subskills = polish_skill_subskills(vals)
        subskills = _drop_domain_echo_subskills(category, subskills)
        if not subskills:
            continue
        skills[category] = subskills[:subskill_max]

    if len(skills) > domain_count:
        skills = dict(list(skills.items())[:domain_count])

    if len(skills) < domain_count:
        print(
            f"  skills warning: expected {domain_count} domains, got {len(skills)}",
            file=sys.stderr,
        )

    for category, subskills in skills.items():
        count = len(subskills)
        if count < subskill_min or count > subskill_max:
            print(
                f"  skills warning: '{category}' has {count} sub-skills "
                f"(expected {subskill_min}-{subskill_max})",
                file=sys.stderr,
            )

    return skills


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

    return coerce_llm_dict_map(parsed, "skills")


def loop2_work_experience_entry(
    config: dict,
    app_key: str,
    entry_index: int,
    source_id: str,
    experience: dict[str, Any],
    stage1_entry: dict[str, Any],
    application: dict,
    profile: dict,
    keyword_pool: KeywordPool,
    improvement: dict[str, Any] | None = None,
    claims_guidance: dict[str, Any] | None = None,
) -> dict[str, Any]:
    prompt = _prompt_with_improvement(
        _prompt_with_claims(
            {
                "task": f"Write bullets for work experience entry {entry_index}.",
                "source_id": source_id,
                "experience_entry": experience,
                "tailoring": _tailoring_context(stage1_entry, application),
                "candidate_cv": profile_for_prompt(profile),
                **keyword_prompt_block(keyword_pool),
                "reply_format": (
                    "Plain text: TITLE, COMPANY, START_DATE, END_DATE, BULLETS — see system prompt."
                ),
            },
            claims_guidance,
        ),
        improvement,
    )
    loop_name = f"loop 2 work_experience {_numbered_key('experience', entry_index)}"
    raw = _call_loop(
        config,
        app_key,
        loop_name,
        INTERLOOP_SYSTEMS[LOOP_2_WORK_EXPERIENCE_SYSTEM_KEY],
        prompt,
        options=generation_options(config, "creative"),
    )
    parsed = parse_work_experience_entry(raw, experience)
    points = parsed.get("points", [])
    entry = {
        "title": capitalize_title(polish_text(parsed.get("title", "") or str(experience.get("position", "")))),
        "company": polish_text(parsed.get("company", "") or str(experience.get("company", ""))),
        "start_date": _format_month(parsed.get("start_date", "") or str(experience.get("startDate", ""))),
        "end_date": _format_month(parsed.get("end_date", "") or str(experience.get("endDate", ""))),
        "points": polish_bullets(points),
    }

    used = keyword_pool.deduct_from_content(entry)
    _log_keywords_used(f"work_experience/{entry_index}", used, len(keyword_pool.available()))
    return entry


def loop2_work_experience(
    config: dict,
    app_key: str,
    stage1_entry: dict[str, Any],
    application: dict,
    profile: dict,
    keyword_pool: KeywordPool,
    improvement: dict[str, Any] | None = None,
    claims_guidance: dict[str, Any] | None = None,
) -> dict[str, Any]:
    entries: dict[str, Any] = {}
    experiences = profile.get("experience", {})
    if not isinstance(experiences, dict):
        return entries

    for index, (source_id, experience) in enumerate(experiences.items(), start=1):
        if not isinstance(experience, dict):
            continue
        entries[_numbered_key("experience", index)] = loop2_work_experience_entry(
            config,
            app_key,
            index,
            source_id,
            experience,
            stage1_entry,
            application,
            profile,
            keyword_pool,
            improvement,
            claims_guidance,
        )
    return entries


def loop2_project_entry(
    config: dict,
    app_key: str,
    entry_index: int,
    source_id: str,
    project: dict[str, Any],
    stage1_entry: dict[str, Any],
    application: dict,
    profile: dict,
    keyword_pool: KeywordPool,
    improvement: dict[str, Any] | None = None,
    claims_guidance: dict[str, Any] | None = None,
) -> dict[str, Any]:
    prompt = _prompt_with_improvement(
        _prompt_with_claims(
            {
                "task": f"Write project entry {entry_index}.",
                "source_id": source_id,
                "project_entry": project,
                "tailoring": _tailoring_context(stage1_entry, application),
                "candidate_cv": profile_for_prompt(profile),
                **keyword_prompt_block(keyword_pool),
                "reply_format": (
                    "Plain text: TITLE, DESCRIPTION, START_DATE, END_DATE, TECH_STACK — see system prompt."
                ),
            },
            claims_guidance,
        ),
        improvement,
    )
    loop_name = f"loop 2 projects {_numbered_key('project', entry_index)}"
    raw = _call_loop(
        config,
        app_key,
        loop_name,
        INTERLOOP_SYSTEMS[LOOP_2_PROJECTS_SYSTEM_KEY],
        prompt,
        options=generation_options(config, "creative"),
    )
    parsed = parse_project_entry(raw, project)
    entry = {
        "title": capitalize_title(polish_text(parsed.get("title", "") or str(project.get("name", "")))),
        "description": polish_text(parsed.get("description", "") or str(project.get("description", ""))),
        "start_date": _format_month(parsed.get("start_date", "") or str(project.get("startDate", ""))),
        "end_date": _format_month(parsed.get("end_date", "") or str(project.get("endDate", ""))),
    }
    used = keyword_pool.deduct_from_content(entry)
    _log_keywords_used(f"projects/{entry_index}", used, len(keyword_pool.available()))
    return entry


def loop2_projects(
    config: dict,
    app_key: str,
    stage1_entry: dict[str, Any],
    application: dict,
    profile: dict,
    keyword_pool: KeywordPool,
    improvement: dict[str, Any] | None = None,
    claims_guidance: dict[str, Any] | None = None,
) -> dict[str, Any]:
    entries: dict[str, Any] = {}
    projects = profile.get("projects", {})
    if not isinstance(projects, dict):
        return entries

    for index, (source_id, project) in enumerate(projects.items(), start=1):
        if not isinstance(project, dict):
            continue
        entries[_numbered_key("project", index)] = loop2_project_entry(
            config,
            app_key,
            index,
            source_id,
            project,
            stage1_entry,
            application,
            profile,
            keyword_pool,
            improvement,
            claims_guidance,
        )
    return entries


def loop2_skills(
    config: dict,
    app_key: str,
    stage1_entry: dict[str, Any],
    application: dict,
    profile: dict,
    keyword_pool: KeywordPool,
    improvement: dict[str, Any] | None = None,
    claims_guidance: dict[str, Any] | None = None,
) -> dict[str, list[str]]:
    skills_settings = _skills_settings(config)
    domain_count = skills_settings["domain_count"]
    subskill_min = skills_settings["subskill_min"]
    subskill_max = skills_settings["subskill_max"]
    allowed_skills = build_profile_skill_keys(profile)
    prompt = _prompt_with_improvement(
        _prompt_with_claims(
            {
                "task": (
                    f"Group the candidate's skill NAMES into exactly {domain_count} domains with "
                    f"{subskill_min}-{subskill_max} sub-skills each."
                ),
                "allowed_skills": allowed_skills,
                "tailoring": _tailoring_context(stage1_entry, application),
                "candidate_skill_names": allowed_skills,
                "skills_rules": [
                    "allowed_skills lists skill NAMES only — not description text from the profile.",
                    "Every sub-skill MUST be copied verbatim from allowed_skills.",
                    "Do NOT pull strings from job titles, certifications, achievements, or experience.",
                    "Do NOT use description values (e.g. 'Scripting, ML pipelines') — use the key (e.g. 'Python').",
                ],
                **skills_keyword_prompt_block(keyword_pool, skills_settings),
                "reply_format": (
                    f"Plain text: exactly {domain_count} lines, each Domain: skill1, skill2, ... "
                    "(skills copied verbatim from allowed_skills)."
                ),
            },
            claims_guidance,
        ),
        improvement,
    )
    raw = _call_loop(
        config,
        app_key,
        "loop 2 skills",
        LOOP_2_SKILLS_SYSTEM,
        prompt,
        options=generation_options(config, "precise"),
    )
    parsed = {"skills": parse_skills_domains(raw)}
    skills = _coerce_skills_map(parsed, skills_settings)
    grounding = _grounding_settings(config)
    if grounding["skills_from_profile_only"]:
        skills = enforce_skill_keys_only(skills, profile)
        schema_ok, schema_errors = validate_skills_output(skills, profile)
        if not schema_ok:
            if schema_errors:
                preview = "; ".join(schema_errors[:3])
                print(f"  skills: schema validation failed — {preview}", file=sys.stderr)
            skills = build_skills_from_profile(profile, domain_count=domain_count)
        if len(skills) < domain_count:
            print(
                f"  skills: insufficient domains after key-only filter — using profile-only fallback",
                file=sys.stderr,
            )
            skills = build_skills_from_profile(profile, domain_count=domain_count)

    used = keyword_pool.deduct_from_content(skills)
    _log_keywords_used("skills", used, len(keyword_pool.available()))
    return skills


def loop2_achievement_entry(
    config: dict,
    app_key: str,
    entry_index: int,
    source_id: str,
    achievement: dict[str, Any],
    stage1_entry: dict[str, Any],
    application: dict,
    profile: dict,
    keyword_pool: KeywordPool,
    improvement: dict[str, Any] | None = None,
) -> dict[str, str]:
    prompt = _prompt_with_improvement(
        {
            "task": f"Format achievement entry {entry_index} for the resume.",
            "source_id": source_id,
            "achievement_entry": achievement,
            "tailoring": _achievement_tailoring(stage1_entry, application),
            "candidate_cv": {"achievements": profile.get("achievements", {})},
            **keyword_prompt_block(keyword_pool),
            "reply_format": "Plain text: NAME, DESCRIPTION, DATE — see system prompt.",
        },
        improvement,
    )
    loop_name = f"loop 2 achievements {_numbered_key('achievement', entry_index)}"
    raw = _call_loop(
        config,
        app_key,
        loop_name,
        INTERLOOP_SYSTEMS[LOOP_2_ACHIEVEMENTS_SYSTEM_KEY],
        prompt,
        options=generation_options(config, "precise"),
    )
    parsed = parse_achievement_entry(raw, achievement)
    if _is_valid_achievement_entry(parsed):
        entry = _normalize_achievement_entry(parsed, achievement)
    else:
        entry = _normalize_achievement_entry({}, achievement)

    used = keyword_pool.deduct_from_content(entry)
    _log_keywords_used(f"achievements/{entry_index}", used, len(keyword_pool.available()))
    return entry


def loop2_achievements(
    config: dict,
    app_key: str,
    stage1_entry: dict[str, Any],
    application: dict,
    profile: dict,
    keyword_pool: KeywordPool,
    improvement: dict[str, Any] | None = None,
) -> dict[str, Any]:
    entries: dict[str, Any] = {}
    achievements = profile.get("achievements", {})
    if not isinstance(achievements, dict):
        return entries

    for index, (source_id, achievement) in enumerate(achievements.items(), start=1):
        if not isinstance(achievement, dict):
            continue
        entries[_numbered_key("achievement", index)] = loop2_achievement_entry(
            config,
            app_key,
            index,
            source_id,
            achievement,
            stage1_entry,
            application,
            profile,
            keyword_pool,
            improvement,
        )
    return entries


def _coerce_certifications(parsed: Any, profile_certs: dict[str, Any]) -> dict[str, Any]:
    fallbacks = [cert for cert in profile_certs.values() if isinstance(cert, dict)]
    raw_entries: list[dict[str, Any]] = []

    if isinstance(parsed, dict):
        certs = parsed.get("certifications", parsed)
        if isinstance(certs, list):
            raw_entries = [item for item in certs if isinstance(item, dict)]
        elif isinstance(certs, dict):
            raw_entries = [item for item in certs.values() if isinstance(item, dict)]

    entries: dict[str, Any] = {}
    for index, cert in enumerate(raw_entries, start=1):
        if not _is_valid_certification_entry(cert):
            continue
        fallback = fallbacks[index - 1] if index <= len(fallbacks) else {}
        entries[_numbered_key("certification", index)] = _normalize_certification_entry(cert, fallback)

    return entries


def loop2_certifications(
    config: dict,
    app_key: str,
    stage1_entry: dict[str, Any],
    application: dict,
    profile: dict,
    keyword_pool: KeywordPool,
    improvement: dict[str, Any] | None = None,
    claims_guidance: dict[str, Any] | None = None,
) -> dict[str, Any]:
    prompt = _prompt_with_improvement(
        _prompt_with_claims(
            {
                "task": "Format the most job-relevant certifications (up to 5).",
                "tailoring": _tailoring_context(stage1_entry, application),
                "candidate_cv": {"certifications": profile.get("certifications", {})},
                **keyword_prompt_block(keyword_pool),
                "certification_rules": [
                    "Each certification needs a 1-2 sentence description of job relevance.",
                    "description must NOT repeat the certification name or issuer verbatim.",
                ],
                "reply_format": (
                    "Plain text: up to 5 certification blocks (NAME, ISSUER, DESCRIPTION, DATE) "
                    "separated by --- — see system prompt."
                ),
            },
            claims_guidance,
        ),
        improvement,
    )
    raw = _call_loop(
        config,
        app_key,
        "loop 2 certifications",
        LOOP_2_CERTIFICATIONS_SYSTEM,
        prompt,
        options=generation_options(config, "precise"),
    )
    parsed = {"certifications": parse_certifications(raw)}
    certifications = _coerce_certifications(parsed, profile.get("certifications", {}))

    for key, entry in certifications.items():
        used = keyword_pool.deduct_from_content(entry)
        _log_keywords_used(f"certifications/{key}", used, len(keyword_pool.available()))

    return certifications


def loop2_volunteer(
    config: dict,
    app_key: str,
    stage1_entry: dict[str, Any],
    application: dict,
    profile: dict,
    keyword_pool: KeywordPool,
    improvement: dict[str, Any] | None = None,
) -> dict[str, Any]:
    volunteer = profile.get("volunteer", profile.get("volunteer_experience", {}))
    if not volunteer:
        return {}

    prompt = _prompt_with_improvement(
        {
            "task": "Format volunteer experience.",
            "tailoring": _tailoring_context(stage1_entry, application),
            "candidate_cv": {"volunteer": volunteer},
            **keyword_prompt_block(keyword_pool),
            "reply_format": (
                "Plain text volunteer blocks (ORGANIZATION, ROLE, dates, DESCRIPTION) separated by ---, "
                "or NONE if no volunteer experience."
            ),
        },
        improvement,
    )
    raw = _call_loop(
        config,
        app_key,
        "loop 2 volunteer_experience",
        LOOP_2_VOLUNTEER_SYSTEM,
        prompt,
        options=generation_options(config, "precise"),
    )
    if clean_raw(raw).upper() == "NONE":
        return {}
    records = parse_volunteer(raw)
    entries: dict[str, Any] = {}
    for index, record in enumerate(records, start=1):
        entries[_numbered_key("volunteer", index)] = {
            "name": polish_text(record.get("organization", "")),
            "role": polish_text(record.get("role", "")),
            "start_date": _format_month(record.get("start_date", "")),
            "end_date": _format_month(record.get("end_date", "")),
            "description": polish_text(record.get("description", "")),
        }

    for key, entry in entries.items():
        used = keyword_pool.deduct_from_content(entry)
        _log_keywords_used(f"volunteer/{key}", used, len(keyword_pool.available()))

    return entries


def loop2_interests(
    config: dict,
    app_key: str,
    stage1_entry: dict[str, Any],
    application: dict,
    profile: dict,
    keyword_pool: KeywordPool,
    improvement: dict[str, Any] | None = None,
) -> list[str]:
    prompt = _prompt_with_improvement(
        {
            "task": "Select interests for the resume.",
            "tailoring": _tailoring_context(stage1_entry, application),
            "candidate_cv": {"interests": profile.get("interests", {})},
            **keyword_prompt_block(keyword_pool),
            "reply_format": "Plain text: one comma-separated line of 3-6 interests.",
        },
        improvement,
    )
    raw = _call_loop(
        config,
        app_key,
        "loop 2 interests",
        LOOP_2_INTERESTS_SYSTEM,
        prompt,
        options=generation_options(config, "precise"),
    )
    interests = parse_comma_list(raw)
    if isinstance(profile.get("interests"), dict) and not interests:
        interests = [str(k).strip() for k in profile["interests"] if str(k).strip()]
    interests = _ensure_interests(polish_bullets(interests), profile, min_items=3)

    used = keyword_pool.deduct_from_content(interests)
    _log_keywords_used("interests", used, len(keyword_pool.available()))
    return interests


def _has_volunteer_profile(profile: dict) -> bool:
    volunteer = profile.get("volunteer", profile.get("volunteer_experience", {}))
    return bool(volunteer)


def _resume_sections_for_review(content: dict[str, Any], profile: dict) -> dict[str, Any]:
    sections: dict[str, Any] = {}
    for key in VERIFIED_SECTIONS:
        if key == "volunteer_experience" and not _has_volunteer_profile(profile):
            continue
        sections[key] = content.get(key)
    return sections


def _apply_skipped_quality_scores(
    quality_review: dict[str, dict[str, Any]],
    profile: dict,
) -> dict[str, dict[str, Any]]:
    if not _has_volunteer_profile(profile):
        quality_review["volunteer_experience"] = {
            "quality": 10,
            "feedback": "No volunteer experience in profile.",
        }
    return quality_review


def _failing_sections(
    quality_review: dict[str, dict[str, Any]],
    min_quality: int,
    locked_sections: dict[str, dict[str, Any]] | None = None,
) -> list[str]:
    locked_sections = locked_sections or {}
    return [
        section
        for section, result in quality_review.items()
        if section not in locked_sections and int(result.get("quality", 0)) < min_quality
    ]


def _merge_quality_review(
    locked_sections: dict[str, dict[str, Any]],
    fresh_review: dict[str, dict[str, Any]],
    profile: dict,
) -> dict[str, dict[str, Any]]:
    merged: dict[str, dict[str, Any]] = {}

    for section in VERIFIED_SECTIONS:
        if section == "volunteer_experience" and not _has_volunteer_profile(profile):
            continue
        if section in locked_sections:
            merged[section] = {**locked_sections[section], "locked": True}
        elif section in fresh_review:
            merged[section] = dict(fresh_review[section])

    return _apply_skipped_quality_scores(merged, profile)


def verify_application(
    config: dict,
    app_key: str,
    stage1_entry: dict[str, Any],
    application: dict,
    profile: dict,
    content: dict[str, Any],
    locked_sections: dict[str, dict[str, Any]] | None = None,
) -> dict[str, dict[str, Any]]:
    locked_sections = locked_sections or {}
    resume_sections = _resume_sections_for_review(_content_without_meta(content), profile)
    sections_to_rate = {
        key: value for key, value in resume_sections.items() if key not in locked_sections
    }

    fresh_review: dict[str, dict[str, Any]] = {}
    if sections_to_rate:
        prompt = {
            "task": "Rate each resume section and provide improvement feedback.",
            "job_description": application_text(application),
            "job_title": stage1_entry.get("title", application.get("title", "")),
            "job_context": stage1_entry.get("context", {}),
            "candidate_cv": profile_for_prompt(profile),
            "resume_sections": sections_to_rate,
            "already_approved_sections": list(locked_sections.keys()),
            "note": (
                "Only rate sections listed in resume_sections. "
                "already_approved_sections passed a prior review and must not be re-scored."
            ),
            "reply_format": (
                "Plain text: one [section_name] block per resume_sections entry with "
                "QUALITY: <1-10> and FEEDBACK: <text> — see system prompt."
            ),
            "sections_to_rate": list(sections_to_rate.keys()),
        }
        raw = _call_loop(
            config,
            app_key,
            "verification quality review",
            VERIFICATION_SYSTEM,
            prompt,
            options=generation_options(config, "precise"),
        )
        fresh_review = parse_quality_review(raw, list(sections_to_rate))
        for key, item in fresh_review.items():
            item["feedback"] = polish_text(item.get("feedback", ""))
    elif locked_sections:
        print(
            f"Stage 2 — {app_key}: all sections locked — skipping LLM verification",
            file=sys.stderr,
        )

    return _merge_quality_review(locked_sections, fresh_review, profile)


def _claims_guidance_from_content(content: dict[str, Any]) -> dict[str, Any] | None:
    claims = content.get("claims_to_avoid", [])
    gaps = content.get("gaps_addressed", [])
    ledger = content.get("claims_ledger", {})
    if not isinstance(claims, list):
        claims = []
    if not isinstance(gaps, list):
        gaps = []
    if not isinstance(ledger, dict):
        ledger = {}
    if not claims and not gaps and not ledger:
        return None
    return claims_guidance_block(claims, gaps, ledger)


def run_content_section(
    section: str,
    config: dict,
    app_key: str,
    stage1_entry: dict[str, Any],
    application: dict,
    profile: dict,
    content: dict[str, Any],
    keyword_pool: KeywordPool,
    improvement: dict[str, Any] | None = None,
) -> Any:
    claims_guidance = _claims_guidance_from_content(content)

    if section == "fit_review":
        return loop1_fit_review(config, app_key, stage1_entry, application, profile, improvement)

    if section == "executive_summary":
        return loop2_executive_summary(
            config,
            app_key,
            stage1_entry,
            application,
            profile,
            content["fit_review"],
            keyword_pool,
            improvement,
            claims_guidance,
        )

    if section == "work_experience":
        return loop2_work_experience(
            config,
            app_key,
            stage1_entry,
            application,
            profile,
            keyword_pool,
            improvement,
            claims_guidance,
        )

    if section == "projects":
        return loop2_projects(
            config,
            app_key,
            stage1_entry,
            application,
            profile,
            keyword_pool,
            improvement,
            claims_guidance,
        )

    if section == "skills":
        return loop2_skills(
            config,
            app_key,
            stage1_entry,
            application,
            profile,
            keyword_pool,
            improvement,
            claims_guidance,
        )

    if section == "achievements":
        return loop2_achievements(
            config, app_key, stage1_entry, application, profile, keyword_pool, improvement
        )

    if section == "certifications":
        return loop2_certifications(
            config, app_key, stage1_entry, application, profile, keyword_pool, improvement
        )

    if section == "volunteer_experience":
        return loop2_volunteer(
            config, app_key, stage1_entry, application, profile, keyword_pool, improvement
        )

    if section == "interests":
        return loop2_interests(
            config, app_key, stage1_entry, application, profile, keyword_pool, improvement
        )

    raise ValueError(f"Unknown content section: {section}")


def verify_and_refine_application(
    config: dict,
    app_key: str,
    stage1_entry: dict[str, Any],
    application: dict,
    profile: dict,
    content: dict[str, Any],
) -> dict[str, Any]:
    settings = _verification_settings(config)
    if not settings.get("enabled", True):
        return content

    min_quality = int(settings.get("min_quality", 7))
    max_passes = int(settings.get("max_passes", 3))
    skills_settings = _skills_settings(config)
    master_keywords = build_master_keywords(stage1_entry.get("resume_keywords", {}), config)
    locked_sections: dict[str, dict[str, Any]] = {}
    feedback_history: dict[str, list[str]] = {}

    quality_review = verify_application(
        config, app_key, stage1_entry, application, profile, content, locked_sections
    )
    _try_lock_sections(content, profile, quality_review, locked_sections, min_quality, skills_settings)
    _log_quality_review(app_key, quality_review, locked_sections)

    for section in _failing_sections(quality_review, min_quality, locked_sections):
        record_reviewer_feedback(
            feedback_history, section, quality_review[section].get("feedback", "")
        )

    refine_pass = 0
    while _failing_sections(quality_review, min_quality, locked_sections) and refine_pass < max_passes:
        failing = _failing_sections(quality_review, min_quality, locked_sections)
        refine_pass += 1
        print(
            f"Stage 2 — {app_key}: refinement pass {refine_pass}/{max_passes} — "
            f"{', '.join(failing)}",
            file=sys.stderr,
        )

        for section in failing:
            locked_sections.pop(section, None)
            keyword_pool = _keyword_pool_for_regeneration(master_keywords, content, section)
            improvement = build_quality_improvement_block(
                section,
                content.get(section),
                feedback_history.get(section, []),
                extra_rules=(
                    "Keep only facts from candidate_cv. "
                    "Do not invent employers, tools, or outcomes."
                ),
            )
            content[section] = run_content_section(
                section,
                config,
                app_key,
                stage1_entry,
                application,
                profile,
                content,
                keyword_pool,
                improvement,
            )

        meta = {key: content[key] for key in META_CONTENT_KEYS if key in content}
        content = polish_application_output(_content_without_meta(content))
        content.update(meta)
        quality_review = verify_application(
            config, app_key, stage1_entry, application, profile, content, locked_sections
        )
        _try_lock_sections(content, profile, quality_review, locked_sections, min_quality, skills_settings)
        _log_quality_review(app_key, quality_review, locked_sections)

        for section in _failing_sections(quality_review, min_quality, locked_sections):
            record_reviewer_feedback(
                feedback_history, section, quality_review[section].get("feedback", "")
            )

    if _failing_sections(quality_review, min_quality, locked_sections):
        print(
            f"Stage 2 — {app_key}: verification finished with sections below {min_quality} "
            f"after {refine_pass} refinement pass(es)",
            file=sys.stderr,
        )
    else:
        print(f"Stage 2 — {app_key}: verification passed", file=sys.stderr)

    content["quality_review"] = quality_review
    return content


def _log_quality_review(
    app_key: str,
    quality_review: dict[str, dict[str, Any]],
    locked_sections: dict[str, dict[str, Any]] | None = None,
) -> None:
    locked_sections = locked_sections or {}
    for section, result in sorted(quality_review.items()):
        locked = section in locked_sections or result.get("locked")
        suffix = " [locked]" if locked else ""
        print(f"  verify {app_key}/{section}: {result['quality']}/10{suffix}", file=sys.stderr)


def _parser_verification_settings(config: dict) -> dict[str, Any]:
    return config.get("stage_2", {}).get("parser_verification", {})


def _content_without_meta(content: dict[str, Any]) -> dict[str, Any]:
    return {key: value for key, value in content.items() if key not in META_CONTENT_KEYS}


def _is_empty_field(value: Any) -> bool:
    if value is None:
        return True
    if isinstance(value, str):
        return not value.strip()
    if isinstance(value, (list, dict)):
        return len(value) == 0
    return False


def _profile_expects_section(profile: dict, section: str) -> bool:
    if section == "volunteer_experience":
        return _has_volunteer_profile(profile)
    profile_keys = {
        "work_experience": "experience",
        "projects": "projects",
        "achievements": "achievements",
        "certifications": "certifications",
        "interests": "interests",
    }
    if section in profile_keys:
        data = profile.get(profile_keys[section], {})
        return bool(data)
    return True


def _scan_fit_review(section: Any) -> list[str]:
    if not isinstance(section, dict):
        return ["fit_review is missing or invalid"]
    issues: list[str] = []
    if _is_empty_field(section.get("fit_summary")):
        issues.append("fit_review.fit_summary is empty")
    if _is_empty_field(section.get("strengths")):
        issues.append("fit_review.strengths is empty")
    try:
        if int(section.get("fit_score", 0)) < 1:
            issues.append("fit_review.fit_score is missing or zero")
    except (TypeError, ValueError):
        issues.append("fit_review.fit_score is invalid")
    return issues


def _scan_string_section(value: Any, section_name: str) -> list[str]:
    if _is_empty_field(value):
        return [f"{section_name} is empty"]
    return []


def _scan_numbered_entries(
    section: Any,
    section_name: str,
    required_fields: tuple[str, ...],
    list_fields: tuple[str, ...] = (),
) -> list[str]:
    issues: list[str] = []
    if not isinstance(section, dict) or _is_empty_field(section):
        return [f"{section_name} has no entries"]

    for entry_key, entry in section.items():
        if not isinstance(entry, dict):
            issues.append(f"{section_name}.{entry_key} is not a valid object")
            continue
        for field in required_fields:
            if _is_empty_field(entry.get(field)):
                issues.append(f"{section_name}.{entry_key}.{field} is empty")
        for field in list_fields:
            items = entry.get(field, [])
            if not isinstance(items, list) or _is_empty_field(items):
                issues.append(f"{section_name}.{entry_key}.{field} is empty")
                continue
            for index, item in enumerate(items):
                if _is_empty_field(item):
                    issues.append(f"{section_name}.{entry_key}.{field}[{index}] is empty")
    return issues


def _scan_skills_schema(section: Any, profile: dict) -> list[str]:
    _, errors = validate_skills_output(section if isinstance(section, dict) else None, profile)
    return errors


def _scan_skills_section(
    section: Any,
    profile: dict | None = None,
    skills_settings: dict[str, int] | None = None,
) -> list[str]:
    settings = skills_settings or {
        "domain_count": SKILL_DOMAIN_COUNT,
        "subskill_min": SKILL_SUBSKILL_MIN,
        "subskill_max": SKILL_SUBSKILL_MAX,
    }
    domain_count = settings["domain_count"]
    subskill_min = settings["subskill_min"]
    issues: list[str] = []
    if not isinstance(section, dict) or _is_empty_field(section):
        return ["skills is empty"]

    if len(section) < domain_count:
        issues.append(f"skills has fewer than {domain_count} domains")

    for domain, subskills in section.items():
        if _is_empty_field(domain):
            issues.append("skills has an empty domain name")
        if not isinstance(subskills, list) or _is_empty_field(subskills):
            issues.append(f"skills.{domain} has no sub-skills")
            continue
        if len(subskills) < subskill_min:
            issues.append(
                f"skills.{domain} has fewer than {subskill_min} sub-skills"
            )
        for index, skill in enumerate(subskills):
            if _is_empty_field(skill):
                issues.append(f"skills.{domain}[{index}] is empty")

    if profile is not None:
        issues.extend(_scan_skills_schema(section, profile))
    return issues


def _scan_list_section(section: Any, section_name: str, min_items: int = 1) -> list[str]:
    issues: list[str] = []
    if not isinstance(section, list):
        return [f"{section_name} is missing or not a list"]
    if len(section) < min_items:
        issues.append(f"{section_name} has fewer than {min_items} items")
    for index, item in enumerate(section):
        if _is_empty_field(item):
            issues.append(f"{section_name}[{index}] is empty")
    return issues


def _scan_certifications_section(
    section: Any,
    cert_settings: dict[str, int] | None = None,
) -> list[str]:
    issues = _scan_numbered_entries(
        section,
        "certifications",
        ("name", "description", "date"),
    )
    min_chars = (cert_settings or {}).get("description_min_chars", 24)
    _, schema_errors = validate_certifications_output(
        section if isinstance(section, dict) else None,
        min_description_chars=min_chars,
    )
    issues.extend(schema_errors)
    return issues


def parse_content_issues(
    content: dict[str, Any],
    profile: dict,
    skills_settings: dict[str, int] | None = None,
    cert_settings: dict[str, int] | None = None,
    style_check: bool = True,
) -> dict[str, list[str]]:
    issues_by_section: dict[str, list[str]] = {}

    scanners: list[tuple[str, Any]] = [
        ("fit_review", lambda: _scan_fit_review(content.get("fit_review"))),
        ("executive_summary", lambda: _scan_string_section(content.get("executive_summary"), "executive_summary")),
        (
            "work_experience",
            lambda: _scan_numbered_entries(
                content.get("work_experience"),
                "work_experience",
                ("title", "company", "start_date"),
                ("points",),
            ),
        ),
        (
            "projects",
            lambda: _scan_numbered_entries(
                content.get("projects"),
                "projects",
                ("title", "description", "start_date"),
            ),
        ),
        ("skills", lambda: _scan_skills_section(content.get("skills"), profile, skills_settings)),
        (
            "achievements",
            lambda: _scan_numbered_entries(
                content.get("achievements"),
                "achievements",
                ("name", "description", "date"),
            ),
        ),
        (
            "certifications",
            lambda: _scan_certifications_section(content.get("certifications"), cert_settings),
        ),
        (
            "volunteer_experience",
            lambda: _scan_numbered_entries(
                content.get("volunteer_experience"),
                "volunteer_experience",
                ("name", "description", "start_date"),
            ),
        ),
        ("interests", lambda: _scan_list_section(content.get("interests"), "interests", min_items=3)),
    ]

    for section_name, scanner in scanners:
        if not _profile_expects_section(profile, section_name):
            continue
        issues = scanner()
        if issues:
            issues_by_section[section_name] = issues

    claims = content.get("claims_to_avoid", [])
    ledger = content.get("claims_ledger", {})
    if isinstance(claims, list) and claims:
        for section, grounding_issues in scan_content_grounding(
            content, profile, claims, ledger if isinstance(ledger, dict) else {}
        ).items():
            issues_by_section.setdefault(section, []).extend(grounding_issues)

    if style_check:
        style_issues = scan_cv_style(content)
        if style_issues:
            issues_by_section["_document_style"] = style_issues

    return issues_by_section


def _build_parser_review(
    issues_by_section: dict[str, list[str]],
    profile: dict,
) -> dict[str, dict[str, Any]]:
    review: dict[str, dict[str, Any]] = {}
    for section in VERIFIED_SECTIONS:
        if section == "volunteer_experience" and not _has_volunteer_profile(profile):
            review[section] = {
                "ok": True,
                "issues": [],
                "skipped": "No volunteer experience in profile.",
            }
            continue
        issues = issues_by_section.get(section, [])
        review[section] = {"ok": not issues, "issues": issues}
    if "_document_style" in issues_by_section:
        style_issues = issues_by_section["_document_style"]
        review["_document_style"] = {"ok": not style_issues, "issues": style_issues}
    return review


def _style_regen_targets(issues_by_section: dict[str, list[str]], stage: str) -> list[str]:
    if "_document_style" not in issues_by_section:
        return []
    issues = issues_by_section["_document_style"]
    targets: set[str] = set()
    for issue in issues:
        if "projects/" in issue:
            targets.add("projects")
        if "work_experience/" in issue:
            targets.add("work_experience")
        if "achievements/" in issue:
            targets.add("achievements")
        if "executive_summary" in issue:
            targets.add("executive_summary")
        if "opening_paragraph" in issue or "body_paragraphs" in issue:
            targets.add("opening_paragraph")
            targets.add("body_paragraphs")
    if targets:
        return sorted(targets)
    if stage == "stage_2":
        return ["executive_summary", "work_experience"]
    return ["opening_paragraph", "body_paragraphs"]


def _parser_improvement_block(section: str, prior_draft: Any, issues: list[str]) -> dict[str, Any]:
    return build_parser_improvement_block(
        section,
        prior_draft,
        issues,
        extra_rules="All required fields must be non-empty. Use only facts from candidate_cv.",
    )


def _log_parser_review(app_key: str, parser_review: dict[str, dict[str, Any]]) -> None:
    for section, result in sorted(parser_review.items()):
        if result.get("ok"):
            continue
        issues = result.get("issues", [])
        joined = "; ".join(issues[:3])
        if len(issues) > 3:
            joined += f" (+{len(issues) - 3} more)"
        print(f"  parser {app_key}/{section}: FAIL — {joined}", file=sys.stderr)


def _try_lock_sections(
    content: dict[str, Any],
    profile: dict,
    quality_review: dict[str, dict[str, Any]],
    locked_sections: dict[str, dict[str, Any]],
    min_quality: int,
    skills_settings: dict[str, int] | None = None,
) -> None:
    """Lock sections scored >= min_quality with no parser empty-field issues."""
    parser_issues = parse_content_issues(_content_without_meta(content), profile, skills_settings)

    for section, result in quality_review.items():
        if section in locked_sections:
            continue
        if int(result.get("quality", 0)) < min_quality:
            continue
        if parser_issues.get(section):
            continue

        locked_sections[section] = {
            "quality": int(result["quality"]),
            "feedback": result.get("feedback", ""),
        }
        print(
            f"  lock {section} at {result['quality']}/10 (LLM + parser approved)",
            file=sys.stderr,
        )


def parser_verify_and_regenerate(
    config: dict,
    app_key: str,
    stage1_entry: dict[str, Any],
    application: dict,
    profile: dict,
    content: dict[str, Any],
) -> dict[str, Any]:
    settings = _parser_verification_settings(config)
    if not settings.get("enabled", True):
        return content

    max_passes = int(settings.get("max_passes", 2))
    skills_settings = _skills_settings(config)
    master_keywords = build_master_keywords(stage1_entry.get("resume_keywords", {}), config)
    scan_content = _content_without_meta(content)

    cert_settings = _certifications_settings(config)
    style_check = _style_verification_enabled(config)
    parser_issue_history: dict[str, list[str]] = {}

    for pass_num in range(1, max_passes + 1):
        issues_by_section = parse_content_issues(
            scan_content,
            profile,
            skills_settings,
            cert_settings,
            style_check=style_check,
        )
        parser_review = _build_parser_review(issues_by_section, profile)

        if not issues_by_section:
            print(f"Stage 2 — {app_key}: parser verification passed", file=sys.stderr)
            content["parser_review"] = parser_review
            return content

        _log_parser_review(app_key, parser_review)
        print(
            f"Stage 2 — {app_key}: parser pass {pass_num}/{max_passes} — "
            f"regenerating: {', '.join(issues_by_section)}",
            file=sys.stderr,
        )

        regen_plan: dict[str, list[str]] = {}
        for section, issues in issues_by_section.items():
            if section == "_document_style":
                continue
            regen_plan.setdefault(section, []).extend(issues)
        if "_document_style" in issues_by_section:
            for target in _style_regen_targets(issues_by_section, "stage_2"):
                regen_plan.setdefault(target, []).extend(issues_by_section["_document_style"])

        for section, issues in regen_plan.items():
            keyword_pool = _keyword_pool_for_regeneration(master_keywords, content, section)
            prior_issues = parser_issue_history.get(section, [])
            improvement = build_parser_improvement_block(
                section,
                content.get(section),
                issues,
                issue_history=prior_issues,
                extra_rules="All required fields must be non-empty. Use only facts from candidate_cv.",
            )
            content[section] = run_content_section(
                section,
                config,
                app_key,
                stage1_entry,
                application,
                profile,
                scan_content,
                keyword_pool,
                improvement,
            )

        for section, issues in regen_plan.items():
            record_parser_issues(parser_issue_history, section, issues)

        polished = polish_application_output(_content_without_meta(content))
        polished = finalize_application_content(polished, profile, skills_settings, cert_settings)
        for key, value in polished.items():
            content[key] = value
        scan_content = _content_without_meta(content)

    issues_by_section = parse_content_issues(
        scan_content,
        profile,
        skills_settings,
        cert_settings,
        style_check=style_check,
    )
    content["parser_review"] = _build_parser_review(issues_by_section, profile)
    if issues_by_section:
        print(
            f"Stage 2 — {app_key}: parser verification finished with unresolved issues "
            f"after {max_passes} pass(es)",
            file=sys.stderr,
        )
    enforce_parser_gate(
        app_key,
        content.get("parser_review"),
        stage_label="Stage 2",
        fail_on_unresolved=fail_on_unresolved_enabled(config, "stage_2"),
        failure_report_path=default_failure_report_path(),
    )
    return content


def _generate_application_content(
    config: dict,
    app_key: str,
    stage1_entry: dict[str, Any],
    application: dict,
    profile: dict,
) -> dict[str, Any]:
    master_keywords = build_master_keywords(stage1_entry.get("resume_keywords", {}), config)
    keyword_pool = KeywordPool(master_keywords)

    fit_review = loop1_fit_review(config, app_key, stage1_entry, application, profile)
    claims_to_avoid, gaps_addressed, claims_ledger = build_application_claims(fit_review, profile)
    claims_guidance = claims_guidance_block(claims_to_avoid, gaps_addressed, claims_ledger)

    executive_summary = loop2_executive_summary(
        config,
        app_key,
        stage1_entry,
        application,
        profile,
        fit_review,
        keyword_pool,
        claims_guidance=claims_guidance,
    )

    work_experience = loop2_work_experience(
        config,
        app_key,
        stage1_entry,
        application,
        profile,
        keyword_pool,
        claims_guidance=claims_guidance,
    )

    projects = loop2_projects(
        config,
        app_key,
        stage1_entry,
        application,
        profile,
        keyword_pool,
        claims_guidance=claims_guidance,
    )

    skills = loop2_skills(
        config,
        app_key,
        stage1_entry,
        application,
        profile,
        keyword_pool,
        claims_guidance=claims_guidance,
    )

    achievements = loop2_achievements(
        config, app_key, stage1_entry, application, profile, keyword_pool
    )

    certifications = loop2_certifications(
        config,
        app_key,
        stage1_entry,
        application,
        profile,
        keyword_pool,
        claims_guidance=claims_guidance,
    )

    volunteer_experience = loop2_volunteer(
        config, app_key, stage1_entry, application, profile, keyword_pool
    )

    interests = loop2_interests(config, app_key, stage1_entry, application, profile, keyword_pool)

    skills_settings = _skills_settings(config)
    cert_settings = _certifications_settings(config)
    return finalize_application_content(
        polish_application_output(
            {
                "fit_review": fit_review,
                "role_title": str(stage1_entry.get("title", application.get("title", ""))).strip(),
                "claims_to_avoid": claims_to_avoid,
                "gaps_addressed": gaps_addressed,
                "claims_ledger": claims_ledger,
                "executive_summary": executive_summary,
                "work_experience": work_experience,
                "projects": projects,
                "skills": skills,
                "achievements": achievements,
                "certifications": certifications,
                "volunteer_experience": volunteer_experience,
                "interests": interests,
            }
        ),
        profile,
        skills_settings,
        cert_settings,
    )


def process_application(
    config: dict,
    app_key: str,
    stage1_entry: dict[str, Any],
    application: dict,
    profile: dict,
) -> dict[str, Any]:
    content = _generate_application_content(config, app_key, stage1_entry, application, profile)
    content = verify_and_refine_application(config, app_key, stage1_entry, application, profile, content)
    return parser_verify_and_regenerate(config, app_key, stage1_entry, application, profile, content)


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


def _build_header(config: dict, stage1_path: Path) -> dict[str, Any]:
    header = build_payload_header(config)
    header["sources"] = {
        **build_sources(config),
        "stage_1": str(stage1_path),
    }
    return header


def run(config_path: Path = CONFIG_PATH) -> dict[str, Any]:
    config = load_config(config_path)

    apps_path = resolve_path(config, "applications", "json", "applications/local_applications.json")
    profile_path = resolve_path(config, "profile", "json", "settings/local_profile.json")
    stage1_path = resolve_output_path(config, "stage_1", STAGE_1_DEFAULT)
    out_path = resolve_output_path(config, "stage_2", STAGE_2_DEFAULT)

    applications = load_json(apps_path)
    profile = load_json(profile_path)
    profile = sanitize_profile(profile)
    stage1 = load_json(stage1_path)

    if not applications:
        raise ValueError(f"No applications found in {apps_path}")
    if not profile:
        raise ValueError(f"No profile found in {profile_path}")
    if not stage1:
        raise ValueError(f"Run stage_1.py first — missing {stage1_path}")

    static_header = build_static_header(profile)
    header = _build_header(config, stage1_path)
    existing = _load_existing(out_path)

    slug_to_application = dict(applications.items())
    updates: dict[str, Any] = {}

    for index, (slug, application) in enumerate(applications.items(), start=1):
        app_key = _application_key(index)
        try:
            stage1_entry = _stage1_block(stage1, app_key)
        except ValueError as exc:
            print(f"Warning: {exc}", file=sys.stderr)
            continue

        if stage1_entry.get("source_slug") and stage1_entry["source_slug"] != slug:
            application = slug_to_application.get(stage1_entry["source_slug"], application)

        updates[app_key] = process_application(
            config, app_key, stage1_entry, application, profile
        )

    payload = _merge_payload(existing, header, static_header, updates)
    payload["pipeline_status"] = "OK"
    export_json(payload, out_path)
    clear_pipeline_failure_report(default_failure_report_path())
    return payload


def main() -> None:
    ensure_project_path()

    try:
        payload = run()
    except (FileNotFoundError, ValueError, RuntimeError, ImportError) as exc:
        print(f"Error: {exc}", file=sys.stderr)
        raise SystemExit(1) from exc

    app_count = sum(
        1 for key in payload if key not in META_KEYS and key not in STATIC_KEYS and key.startswith("application_")
    )
    print(f"Stage 2 complete: {app_count} application(s) -> {STAGE_2_DEFAULT}")


if __name__ == "__main__":
    main()
