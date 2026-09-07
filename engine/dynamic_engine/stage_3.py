"""
Stage 3 — cover-letter JSON: writer → reviewer feedback → rewrite (max two review rounds).

Header fields (addressee, company, role, date, sign-off) are deterministic.
When a CV JSON already exists for the job, it is passed as resume_draft evidence.
Letter-only runs do not require Stage 2.

Run from project root:
    python engine/dynamic_engine/stage_3.py
"""

from __future__ import annotations

import json
import re
import sys
from datetime import UTC, datetime
from pathlib import Path
from typing import Any

from batch_resilience import is_buildable, payload_status, process_with_resilience
from grounding import sanitize_profile
from json_loop import run_write_review_loop
from prompts.prompt_stage_3 import DEFAULT_BODY_PARAGRAPHS, LETTER_REVIEWER_SYSTEM, LETTER_WRITER_SYSTEM
from stage_2 import compose_location, polish_text
from utils import (
    CONFIG_PATH,
    application_text,
    bind_source_slug,
    build_payload_header,
    build_sources,
    enforce_max_words,
    ensure_project_path,
    export_json,
    iter_applications,
    load_config,
    load_json,
    previous_payload_for_slug,
    profile_for_prompt,
    resolve_output_path,
    resolve_path,
    stage_block_for,
)

STAGE_2_DEFAULT = "engine/dynamic_engine/data/stage_2.json"
STAGE_3_DEFAULT = "engine/dynamic_engine/data/stage_3.json"
META_KEYS = frozenset({"generated_at", "sources", "pipeline_status"})
STATIC_KEYS = frozenset({"first_name", "last_name", "email", "linkedin", "contact", "address"})
_SALUTATION_RE = re.compile(r"^\s*(?:dear\b[^\n,]*,?\s*)", re.IGNORECASE)
_SIGN_OFF_RE = re.compile(
    r"(?:\n|^)\s*(?:sincerely|best regards|kind regards|yours truly|respectfully)[,.\s]*$",
    re.IGNORECASE,
)


def _body_count(config: dict) -> int:
    raw = config.get("stage_3", {}).get("body_paragraphs", DEFAULT_BODY_PARAGRAPHS)
    try:
        return max(1, min(4, int(raw)))
    except (TypeError, ValueError):
        return DEFAULT_BODY_PARAGRAPHS


def _body_max_words(config: dict) -> int:
    raw = config.get("stage_3", {}).get("body_paragraph", {}).get("max_words", 120)
    try:
        return max(20, int(raw))
    except (TypeError, ValueError):
        return 120


def _split_name(full_name: str) -> tuple[str, str]:
    parts = full_name.strip().split()
    if not parts:
        return "", ""
    if len(parts) == 1:
        return parts[0], ""
    return parts[0], " ".join(parts[1:])


def build_letter_header(profile: dict) -> dict[str, Any]:
    contact = profile.get("contact", {})
    first, last = _split_name(str(contact.get("name", "")))
    return {
        "first_name": first,
        "last_name": last,
        "email": str(contact.get("email", "")).strip(),
        "linkedin": str(contact.get("linkedin", "")).strip(),
        "contact": str(contact.get("phone", "")).strip(),
        "address": compose_location(contact),
    }


def _company_from_application(application: dict, slug: str = "") -> str:
    generic = {"", "company", "the company", "employer", "the employer", "organization"}
    for key in ("company", "company_name", "employer", "organization"):
        value = str(application.get(key, "")).strip()
        if value.lower() not in generic:
            return value
    if slug:
        words = slug.split("_")
        return " ".join(word.upper() if word.lower() in {"lgms", "ib", "ibm"} else word.title() for word in words)
    return "Hiring Team"


def _profile_display_name(profile: dict) -> str:
    contact = profile.get("contact", {})
    name = str(contact.get("name", "")).strip()
    if name:
        return name
    first, last = _split_name(str(contact.get("name", "")))
    return " ".join(part for part in (first, last) if part).strip() or "Applicant"


def _strip_prose(text: str) -> str:
    cleaned = _SALUTATION_RE.sub("", polish_text(str(text or "")))
    cleaned = _SIGN_OFF_RE.sub("", cleaned).strip()
    return cleaned


def _normalize_letter_json(parsed: dict[str, Any], body_count: int, max_words: int) -> dict[str, Any]:
    raw_bodies = parsed.get("body_paragraphs")
    if isinstance(raw_bodies, str):
        bodies = [raw_bodies]
    elif isinstance(raw_bodies, list):
        bodies = [str(item) for item in raw_bodies]
    else:
        bodies = []
    normalized: list[str] = []
    for item in bodies[:body_count]:
        paragraph, _trimmed = enforce_max_words(_strip_prose(item), max_words)
        if paragraph:
            normalized.append(paragraph)
    while len(normalized) < body_count:
        normalized.append("")
    opening, _ = enforce_max_words(_strip_prose(str(parsed.get("opening_paragraph", ""))), max_words)
    closing, _ = enforce_max_words(_strip_prose(str(parsed.get("closing_paragraph", ""))), max_words)
    return {
        "opening_paragraph": opening,
        "body_paragraphs": normalized,
        "closing_paragraph": closing,
    }


def _resume_draft(stage2_entry: dict[str, Any] | None) -> dict[str, Any] | None:
    if not isinstance(stage2_entry, dict) or not is_buildable(stage2_entry):
        return None
    keys = (
        "role_title",
        "executive_summary",
        "work_experience",
        "projects",
        "skills",
        "achievements",
        "certifications",
        "volunteer_experience",
    )
    draft = {key: stage2_entry[key] for key in keys if key in stage2_entry}
    return draft or None


def _letter_static_fields(application: dict, profile: dict, slug: str) -> dict[str, Any]:
    company = _company_from_application(application, slug)
    role = str(application.get("title", "")).strip()
    return {
        "addressee": "Hiring Manager",
        "company_name": company,
        "role_title": role,
        "subject_line": f"Application — {role} at {company}" if role else f"Application — {company}",
        "date": datetime.now(UTC).date().isoformat(),
        "sign_off": f"Sincerely,\n{_profile_display_name(profile)}",
    }


def process_application(
    config: dict,
    app_key: str,
    application: dict,
    profile: dict,
    stage2_entry: dict[str, Any] | None = None,
    slug: str = "",
) -> dict[str, Any]:
    body_count = _body_count(config)
    max_words = _body_max_words(config)
    resume_draft = _resume_draft(stage2_entry)
    static_fields = _letter_static_fields(application, profile, slug)

    def _normalize(parsed: dict[str, Any]) -> dict[str, Any]:
        return _normalize_letter_json(parsed, body_count, max_words)

    generated, review = run_write_review_loop(
        config,
        app_key=app_key,
        document_label="Letter",
        writer_system=LETTER_WRITER_SYSTEM,
        reviewer_system=LETTER_REVIEWER_SYSTEM,
        base_prompt={
            "body_paragraph_count": body_count,
            "word_limit": {"max_words": max_words},
            "job": {
                "title": application.get("title", ""),
                "company": static_fields["company_name"],
                "location": application.get("location", ""),
                "about": application.get("about", ""),
                "text": application_text(application),
            },
            "candidate_cv": profile_for_prompt(profile),
            "resume_draft": resume_draft,
        },
        normalize=_normalize,
    )
    return {
        **static_fields,
        **generated,
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


def _optional_stage2(config: dict) -> dict[str, Any]:
    path = resolve_output_path(config, "stage_2", STAGE_2_DEFAULT)
    if not path.is_file():
        return {}
    try:
        payload = load_json(path)
    except json.JSONDecodeError:
        return {}
    return payload if isinstance(payload, dict) else {}


def run(config_path: Path = CONFIG_PATH) -> dict[str, Any]:
    config = load_config(config_path)

    apps_path = resolve_path(config, "applications", "json", "applications/local_applications.json")
    profile_path = resolve_path(config, "profile", "json", "settings/local_profile.json")
    out_path = resolve_output_path(config, "stage_3", STAGE_3_DEFAULT)

    applications = load_json(apps_path)
    profile = sanitize_profile(load_json(profile_path))
    if not applications:
        raise ValueError(f"No applications found in {apps_path}")
    if not profile:
        raise ValueError(f"No profile found in {profile_path}")

    stage2 = _optional_stage2(config)
    static_header = build_letter_header(profile)
    header = build_payload_header(config)
    sources = build_sources(config)
    if stage2:
        sources["stage_2"] = str(resolve_output_path(config, "stage_2", STAGE_2_DEFAULT))
    header["sources"] = sources
    existing = _load_existing(out_path)
    updates: dict[str, Any] = {}

    for _index, app_key, slug, application in iter_applications(applications):
        try:
            stage2_entry = stage_block_for(stage2, app_key, slug) if stage2 else None
        except ValueError:
            stage2_entry = None
        updates[app_key] = bind_source_slug(
            process_with_resilience(
                config,
                stage="stage_3",
                app_key=app_key,
                title=str(application.get("title", "")),
                previous=previous_payload_for_slug(existing, app_key=app_key, slug=slug),
                generate=lambda app_key=app_key, application=application, stage2_entry=stage2_entry, slug=slug: process_application(
                    config, app_key, application, profile, stage2_entry, slug
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
    print(f"Stage 3 complete: {app_count} application(s) -> {STAGE_3_DEFAULT}")


if __name__ == "__main__":
    main()
