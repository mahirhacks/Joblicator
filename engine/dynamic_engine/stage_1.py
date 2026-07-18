"""
Stage 1 — job context + job-derived resume keywords per application.

Loop 1: context (one call per application, job description + profile)
Loop 2: resume_keywords (one call per section, extracted from job description only)
Loop 3: keyword variants (one call per application — 2 variants per extracted keyword, merged in place)

Run from project root:
    python engine/dynamic_engine/stage_1.py

Output:
    engine/dynamic_engine/data/stage_1.json
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path
from typing import Any

from batch_resilience import payload_status, process_with_resilience
from grounding import sanitize_profile
from ollama import call_ollama
from plain_text import (
    PLAIN_TEXT_REPLY,
    parse_comma_list,
    parse_keyword_variants as parse_keyword_variants_text,
    parse_stage1_context,
)
from prompts.prompt_stage_1 import (
    KEYWORD_SECTION_ORDER,
    LOOP_1_SYSTEM,
    LOOP_2_SECTION_LABELS,
    LOOP_2_SYSTEMS,
    LOOP_3_KEYWORD_VARIANTS_SYSTEM,
)
from utils import (
    CONFIG_PATH,
    append_unique_keywords,
    application_text,
    build_payload_header,
    dedupe_keywords,
    distribute_keyword_cap,
    drop_placeholder_keywords,
    ensure_project_path,
    export_json,
    is_duplicate_keyword,
    iter_applications,
    load_config,
    load_json,
    profile_for_prompt,
    resolve_output_path,
    resolve_path,
)

STAGE_1_OUTPUT_DEFAULT = "engine/dynamic_engine/data/stage_1.json"
META_KEYS = frozenset({"generated_at", "sources"})


def _messages(system: str, user: str) -> list[dict[str, str]]:
    return [{"role": "system", "content": system}, {"role": "user", "content": user}]


def _application_key(index: int) -> str:
    return f"application_{index}"


def _parse_context(raw: str) -> dict[str, Any]:
    return parse_stage1_context(raw)


def loop1_context(
    config: dict,
    app_key: str,
    slug: str,
    application: dict,
    profile: dict,
) -> dict[str, Any]:
    job_text = application_text(application)
    prompt = {
        "task": "Extract job context for resume tailoring.",
        "application_key": app_key,
        "source_slug": slug,
        "job_posting": {
            "title": application.get("title", ""),
            "location": application.get("location", ""),
            "text": job_text,
        },
        "candidate_cv": profile_for_prompt(profile),
        "reply_format": (
            "Plain text with labeled sections COMPANY_SUMMARY, ROLE_SUMMARY, WORK_MODE, "
            "MUST_HAVE (comma-separated), NICE_TO_HAVE (comma-separated) — see system prompt."
        ),
    }

    print(f"Stage 1 — {app_key}: loop 1 context ...", file=sys.stderr)
    raw = call_ollama(
        config,
        _messages(
            LOOP_1_SYSTEM,
            (
                f"Stage 1 loop 1 — context for {app_key}.\n"
                f"{json.dumps(prompt, indent=2, ensure_ascii=False)}\n\n"
                f"{PLAIN_TEXT_REPLY}"
            ),
        ),
    )
    return _parse_context(raw)


def loop2_section_keywords(
    config: dict,
    app_key: str,
    section_key: str,
    pick_count: int,
    application: dict,
    context: dict[str, Any],
) -> list[str]:
    if pick_count <= 0:
        return []

    system_prompt = LOOP_2_SYSTEMS[section_key]
    label = LOOP_2_SECTION_LABELS[section_key]
    job_text = application_text(application)

    prompt = {
        "task": f"Extract {pick_count} keyword(s) for {label} from the job posting.",
        "section_key": section_key,
        "pick_count": pick_count,
        "rules": [
            f"Return at most {pick_count} items.",
            "Extract from the job posting and context only.",
            "Reply with a single comma-separated line of keywords.",
        ],
        "job_posting": {
            "title": application.get("title", ""),
            "location": application.get("location", ""),
            "text": job_text,
        },
        "context": context,
    }

    print(f"Stage 1 — {app_key}: loop 2 {section_key} (cap {pick_count}) ...", file=sys.stderr)
    raw = call_ollama(
        config,
        _messages(
            system_prompt,
            (
                f"Stage 1 loop 2 — {section_key} for {app_key}.\n"
                f"{json.dumps(prompt, indent=2, ensure_ascii=False)}\n\n"
                f"{PLAIN_TEXT_REPLY}"
            ),
        ),
    )

    keywords = drop_placeholder_keywords(parse_comma_list(raw, max_items=pick_count))
    capped = append_unique_keywords([], keywords, pick_count)
    return dedupe_keywords(capped)


def loop2_resume_keywords(
    config: dict,
    app_key: str,
    application: dict,
    context: dict[str, Any],
    section_caps: dict[str, int],
) -> dict[str, list[str]]:
    resume_keywords: dict[str, list[str]] = {}

    for section_key in KEYWORD_SECTION_ORDER:
        cap = section_caps.get(section_key, 0)
        resume_keywords[section_key] = loop2_section_keywords(
            config,
            app_key,
            section_key,
            cap,
            application,
            context,
        )

    return resume_keywords


def _normalize_keyword_key(keyword: str) -> str:
    return re.sub(r"\s+", " ", keyword.lower().strip())


def _coerce_variant_list(items: Any) -> list[str]:
    if not isinstance(items, list):
        return []
    return [str(item).strip() for item in items if str(item).strip()]


def _parse_keyword_variants(
    raw: str,
    resume_keywords: dict[str, list[str]],
) -> dict[str, dict[str, list[str]]]:
    return parse_keyword_variants_text(raw, resume_keywords)


def _lookup_variants(keyword: str, variants_map: dict[str, list[str]]) -> list[str]:
    if keyword in variants_map:
        return variants_map[keyword][:2]

    target = _normalize_keyword_key(keyword)
    for key, values in variants_map.items():
        if _normalize_keyword_key(key) == target:
            return values[:2]
    return []


def _merge_keyword_variants(
    resume_keywords: dict[str, list[str]],
    variants_by_section: dict[str, dict[str, list[str]]],
) -> dict[str, list[str]]:
    merged: dict[str, list[str]] = {}

    for section_key, base_keywords in resume_keywords.items():
        section_variants = variants_by_section.get(section_key, {})
        section_merged: list[str] = []

        for keyword in base_keywords:
            if not keyword:
                continue
            if not is_duplicate_keyword(keyword, section_merged):
                section_merged.append(keyword)

            for variant in _lookup_variants(keyword, section_variants):
                if not is_duplicate_keyword(variant, section_merged):
                    section_merged.append(variant)

        merged[section_key] = section_merged

    return merged


def _build_keyword_groups(
    resume_keywords: dict[str, list[str]],
    variants_by_section: dict[str, dict[str, list[str]]],
) -> dict[str, list[dict[str, Any]]]:
    """Preserve original-to-variant relationships instead of relying on flat-list offsets."""
    grouped: dict[str, list[dict[str, Any]]] = {}
    for section_key, base_keywords in resume_keywords.items():
        section_variants = variants_by_section.get(section_key, {})
        grouped[section_key] = [
            {
                "original": keyword,
                "variants": _lookup_variants(keyword, section_variants),
            }
            for keyword in base_keywords
            if str(keyword).strip()
        ]
    return grouped


def loop3_keyword_variants(
    config: dict,
    app_key: str,
    application: dict,
    context: dict[str, Any],
    resume_keywords: dict[str, list[str]],
    *,
    include_groups: bool = False,
) -> dict[str, list[str]] | tuple[dict[str, list[str]], dict[str, list[dict[str, Any]]]]:
    keywords_for_variants = {
        section_key: keywords
        for section_key, keywords in resume_keywords.items()
        if keywords
    }
    if not keywords_for_variants:
        groups = _build_keyword_groups(resume_keywords, {})
        return (resume_keywords, groups) if include_groups else resume_keywords

    prompt = {
        "task": (
            "For every keyword in resume_keywords, produce exactly 2 alternative phrasings "
            "that mean the same thing in a resume/ATS context."
        ),
        "rules": [
            "Return exactly 2 variants per main keyword — no more, no fewer.",
            "Variants must be genuinely different wording: abbreviations, expanded forms, "
            "synonyms, or common ATS phrasings — not trivial casing changes.",
            "Keep the same meaning as the source keyword. Do not broaden or invent new skills.",
            "Use the same section keys as resume_keywords. Do not add new sections.",
            "Map each variant list to its exact source keyword string as the object key.",
        ],
        "job_posting": {
            "title": application.get("title", ""),
            "location": application.get("location", ""),
            "text": application_text(application),
        },
        "context": context,
        "resume_keywords": keywords_for_variants,
        "reply_format": (
            "Plain text: one [section_key] block per resume_keywords key; "
            "each line: source keyword | variant 1 | variant 2"
        ),
    }

    print(f"Stage 1 — {app_key}: loop 3 keyword variants ...", file=sys.stderr)
    raw = call_ollama(
        config,
        _messages(
            LOOP_3_KEYWORD_VARIANTS_SYSTEM,
            (
                f"Stage 1 loop 3 — keyword variants for {app_key}.\n"
                f"{json.dumps(prompt, indent=2, ensure_ascii=False)}\n\n"
                f"{PLAIN_TEXT_REPLY}"
            ),
        ),
    )

    try:
        variants_by_section = _parse_keyword_variants(raw, keywords_for_variants)
    except (json.JSONDecodeError, ValueError) as exc:
        print(f"  warning: could not parse keyword variants for {app_key}: {exc}", file=sys.stderr)
        groups = _build_keyword_groups(resume_keywords, {})
        return (resume_keywords, groups) if include_groups else resume_keywords

    merged = _merge_keyword_variants(resume_keywords, variants_by_section)
    groups = _build_keyword_groups(resume_keywords, variants_by_section)
    return (merged, groups) if include_groups else merged


def build_section_caps(config: dict) -> dict[str, int]:
    loops_cfg = config.get("loops", {})
    total = int(loops_cfg.get("max_keywords_total", 20))
    caps_list = distribute_keyword_cap(total, len(KEYWORD_SECTION_ORDER))
    return dict(zip(KEYWORD_SECTION_ORDER, caps_list, strict=True))


def process_application(
    config: dict,
    app_key: str,
    slug: str,
    application: dict,
    profile: dict,
    section_caps: dict[str, int],
) -> dict[str, Any]:
    context = loop1_context(config, app_key, slug, application, profile)
    resume_keywords = loop2_resume_keywords(
        config, app_key, application, context, section_caps
    )
    resume_keywords, resume_keyword_groups = loop3_keyword_variants(
        config,
        app_key,
        application,
        context,
        resume_keywords,
        include_groups=True,
    )

    return {
        "source_slug": slug,
        "title": application.get("title", ""),
        "context": context,
        "resume_keywords": resume_keywords,
        "resume_keyword_groups": resume_keyword_groups,
    }


def _load_existing_stage1(path: Path) -> dict[str, Any]:
    if not path.is_file():
        return {}
    try:
        return load_json(path)
    except json.JSONDecodeError:
        return {}


def _merge_payload(existing: dict[str, Any], header: dict[str, Any], updates: dict[str, Any]) -> dict[str, Any]:
    merged = {**existing, **header}
    for key, value in updates.items():
        merged[key] = value
    return merged


def run(config_path: Path = CONFIG_PATH) -> dict[str, Any]:
    config = load_config(config_path)

    apps_path = resolve_path(config, "applications", "json", "applications/local_applications.json")
    profile_path = resolve_path(config, "profile", "json", "settings/local_profile.json")
    out_path = resolve_output_path(config, "stage_1", STAGE_1_OUTPUT_DEFAULT)

    applications = load_json(apps_path)
    profile = load_json(profile_path)
    profile = sanitize_profile(profile)

    if not applications:
        raise ValueError(f"No applications found in {apps_path}")
    if not profile:
        raise ValueError(f"No profile found in {profile_path}")

    section_caps = build_section_caps(config)
    header = build_payload_header(config)
    existing = _load_existing_stage1(out_path)

    updates: dict[str, Any] = {}
    for index, app_key, slug, application in iter_applications(applications):
        updates[app_key] = process_with_resilience(
            config,
            stage="stage_1",
            app_key=app_key,
            title=str(application.get("title", "")),
            previous=existing.get(app_key) if isinstance(existing.get(app_key), dict) else None,
            generate=lambda app_key=app_key, slug=slug, application=application: process_application(
                config, app_key, slug, application, profile, section_caps
            ),
        )
        partial_payload = _merge_payload(existing, header, updates)
        partial_payload["pipeline_status"] = "RUNNING"
        export_json(partial_payload, out_path)

    payload = _merge_payload(existing, header, updates)
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

    app_count = sum(1 for key in payload if key not in META_KEYS and key.startswith("application_"))
    print(f"Stage 1 complete: {app_count} application(s) -> {STAGE_1_OUTPUT_DEFAULT}")


if __name__ == "__main__":
    main()
