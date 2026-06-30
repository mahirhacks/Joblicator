"""
Stage 3 — cover letter / job letter content (one LLM loop per field).

Reads stage 1 letter brief and stage 2 resume draft for context.
Processes applications one by one with separate loops per letter section.

Run from project root:
    python engine/dynamic_engine/3_stage.py

Output: engine/dynamic_engine/3_stage_letter.json
"""

from __future__ import annotations

import json
import sys
from pathlib import Path
from typing import Any

from _stage_common import (
    CONFIG_PATH,
    call_ollama,
    ensure_project_path,
    export_json,
    load_config,
    load_json,
    parse_llm_json,
    profile_for_prompt,
    resolve_output_path,
    resolve_path,
    build_payload_header,
)

STAGE3_SYSTEM = """You are an expert cover letter writer. Draft honest, compelling job application letters.

## Rules
- Use only facts from candidate_cv and prior resume_draft content.
- Sound human and specific — reference the company and role naturally.
- Do not exaggerate fit or hide material gaps; address gaps briefly and honestly when asked.
- Reply with valid JSON only. No markdown fences or commentary.
- Respect the exact output shape in the user message."""


def _messages(system: str, user: str) -> list[dict[str, str]]:
    return [{"role": "system", "content": system}, {"role": "user", "content": user}]


def static_addressee() -> str:
    return "Hiring Manager"


def static_subject_line(stage1_letter: dict[str, Any]) -> str:
    role = stage1_letter.get("fit_review", {}).get("role") or stage1_letter.get("title", "Role")
    company = stage1_letter.get("fit_review", {}).get("company", "")
    if company:
        return f"Application — {role} at {company}"
    return f"Application — {role}"


def static_claims_to_avoid(stage1_letter: dict[str, Any]) -> list[str]:
    brief = stage1_letter.get("cover_letter_brief", {})
    return brief.get("claims_to_avoid", [])


def generate_opening_hook(
    config: dict,
    slug: str,
    stage1_letter: dict[str, Any],
    stage2_cv: dict[str, Any] | None,
    profile: dict,
) -> str:
    prompt = {
        "task": "Write the opening paragraph (2-4 sentences) of the cover letter.",
        "rules": [
            "Open with a specific hook about the company or role (use cover_letter_brief.company_hook).",
            "State the position applied for and one strongest CV-backed reason to read on.",
            "Do not repeat the entire resume.",
        ],
        "letter_context": stage1_letter,
        "resume_draft": (stage2_cv or {}).get("resume_draft", {}),
        "candidate_cv": profile_for_prompt(profile),
        "output_format": {"opening_hook": "2-4 sentences"},
    }

    raw = call_ollama(
        config,
        _messages(
            STAGE3_SYSTEM,
            f"Stage 3 — opening_hook for {slug}.\n{json.dumps(prompt, indent=2, ensure_ascii=False)}",
        ),
    )
    try:
        return str(parse_llm_json(raw).get("opening_hook", "")).strip()
    except (json.JSONDecodeError, ValueError):
        return raw.strip()


def generate_body_paragraph(
    config: dict,
    slug: str,
    paragraph_index: int,
    total_paragraphs: int,
    prior_paragraphs: list[str],
    stage1_letter: dict[str, Any],
    stage2_cv: dict[str, Any] | None,
    profile: dict,
) -> str:
    prompt = {
        "task": f"Write body paragraph {paragraph_index} of {total_paragraphs}.",
        "rules": [
            "Each paragraph should cover a distinct theme: fit evidence, relevant project/experience, motivation.",
            "Do not repeat prior_paragraphs verbatim.",
            "Use cover_letter_brief.lead_with themes across the letter.",
        ],
        "paragraph_index": paragraph_index,
        "prior_paragraphs": prior_paragraphs,
        "letter_context": stage1_letter,
        "resume_draft": (stage2_cv or {}).get("resume_draft", {}),
        "evidence_map": (stage2_cv or {}).get("evidence_map", []),
        "candidate_cv": profile_for_prompt(profile),
        "output_format": {"body_paragraph": "4-6 sentences"},
    }

    raw = call_ollama(
        config,
        _messages(
            STAGE3_SYSTEM,
            f"Stage 3 — body paragraph {paragraph_index}/{total_paragraphs} for {slug}.\n"
            f"{json.dumps(prompt, indent=2, ensure_ascii=False)}",
        ),
    )
    try:
        return str(parse_llm_json(raw).get("body_paragraph", "")).strip()
    except (json.JSONDecodeError, ValueError):
        return raw.strip()


def generate_closing(
    config: dict,
    slug: str,
    letter_so_far: dict[str, Any],
    stage1_letter: dict[str, Any],
    profile: dict,
) -> str:
    prompt = {
        "task": "Write the closing paragraph (2-3 sentences) plus sign-off line.",
        "rules": [
            "Reiterate enthusiasm and availability for interview.",
            "Include candidate name from contact if present.",
        ],
        "letter_so_far": letter_so_far,
        "letter_context": stage1_letter,
        "candidate_cv": {"contact": profile.get("contact", {})},
        "output_format": {"closing": "closing paragraph with sign-off"},
    }

    raw = call_ollama(
        config,
        _messages(
            STAGE3_SYSTEM,
            f"Stage 3 — closing for {slug}.\n{json.dumps(prompt, indent=2, ensure_ascii=False)}",
        ),
    )
    try:
        return str(parse_llm_json(raw).get("closing", "")).strip()
    except (json.JSONDecodeError, ValueError):
        return raw.strip()


def generate_gaps_to_address(
    config: dict,
    slug: str,
    stage1_letter: dict[str, Any],
    profile: dict,
) -> list[str]:
    gaps = stage1_letter.get("cover_letter_brief", {}).get("gaps_to_address", [])
    if not gaps:
        return []

    prompt = {
        "task": "For each gap, write one honest sentence the letter may use (or empty if should stay silent).",
        "gaps": gaps,
        "candidate_cv": profile_for_prompt(profile),
        "output_format": {"gaps_to_address_honestly": ["one sentence per gap"]},
    }

    raw = call_ollama(
        config,
        _messages(
            STAGE3_SYSTEM,
            f"Stage 3 — gaps_to_address_honestly for {slug}.\n"
            f"{json.dumps(prompt, indent=2, ensure_ascii=False)}",
        ),
    )
    try:
        items = parse_llm_json(raw).get("gaps_to_address_honestly", [])
        return [str(i).strip() for i in items if str(i).strip()]
    except (json.JSONDecodeError, ValueError):
        return []


def generate_tone_notes(
    config: dict,
    slug: str,
    stage1_letter: dict[str, Any],
) -> str:
    tone = stage1_letter.get("cover_letter_brief", {}).get("tone", "unknown")
    prompt = {
        "task": "One sentence guidance on voice/tone for this letter.",
        "target_tone": tone,
        "job_brief": stage1_letter.get("job_brief", {}),
        "output_format": {"tone_notes": "one sentence"},
    }

    raw = call_ollama(
        config,
        _messages(
            STAGE3_SYSTEM,
            f"Stage 3 — tone_notes for {slug}.\n{json.dumps(prompt, indent=2, ensure_ascii=False)}",
        ),
    )
    try:
        return str(parse_llm_json(raw).get("tone_notes", "")).strip()
    except (json.JSONDecodeError, ValueError):
        return raw.strip()


def process_application(
    config: dict,
    slug: str,
    stage1_letter: dict[str, Any],
    stage2_cv: dict[str, Any] | None,
    profile: dict,
    body_paragraph_count: int = 3,
) -> dict[str, Any]:
    opening_hook = generate_opening_hook(config, slug, stage1_letter, stage2_cv, profile)

    body_paragraphs: list[str] = []
    for index in range(1, body_paragraph_count + 1):
        paragraph = generate_body_paragraph(
            config,
            slug,
            index,
            body_paragraph_count,
            body_paragraphs,
            stage1_letter,
            stage2_cv,
            profile,
        )
        body_paragraphs.append(paragraph)

    letter_so_far = {"opening_hook": opening_hook, "body_paragraphs": body_paragraphs}
    closing = generate_closing(config, slug, letter_so_far, stage1_letter, profile)

    return {
        "title": stage1_letter.get("title", ""),
        "cover_letter": {
            "addressee": static_addressee(),
            "subject_line": static_subject_line(stage1_letter),
            "opening_hook": opening_hook,
            "body_paragraphs": body_paragraphs,
            "closing": closing,
            "claims_to_avoid": static_claims_to_avoid(stage1_letter),
            "gaps_to_address_honestly": generate_gaps_to_address(
                config, slug, stage1_letter, profile
            ),
            "tone_notes": generate_tone_notes(config, slug, stage1_letter),
        },
    }


def run(config_path: Path = CONFIG_PATH) -> dict[str, Any]:
    config = load_config(config_path)

    apps_path = resolve_path(config, "applications", "json", "applications/local_applications.json")
    profile_path = resolve_path(config, "profile", "json", "settings/profile.json")
    stage1_letter_path = resolve_output_path(
        config, "stage1_letter", "engine/dynamic_engine/1_stage_req_letter.json"
    )
    stage2_path = resolve_output_path(config, "stage2_cv", "engine/dynamic_engine/2_stage_cv.json")

    applications = load_json(apps_path)
    profile = load_json(profile_path)
    stage1_letter = load_json(stage1_letter_path)

    stage2: dict[str, Any] = {}
    try:
        stage2 = load_json(stage2_path)
    except (FileNotFoundError, json.JSONDecodeError):
        print("Warning: 2_stage_cv.json not found; continuing without resume draft context.", file=sys.stderr)

    if not applications:
        raise ValueError(f"No applications found in {apps_path}")
    if not profile:
        raise ValueError(f"No profile found in {profile_path}")
    if not stage1_letter.get("applications"):
        raise ValueError(f"Run 1_stage.py first — missing {stage1_letter_path}")

    body_count = config.get("stages", {}).get("letter_body_paragraphs", 3)
    results: dict[str, Any] = {}

    for slug in applications:
        letter_entry = stage1_letter.get("applications", {}).get(slug)
        if not letter_entry:
            print(f"Warning: no stage 1 letter data for {slug}, skipping.", file=sys.stderr)
            continue
        stage2_entry = stage2.get("applications", {}).get(slug)
        results[slug] = process_application(
            config, slug, letter_entry, stage2_entry, profile, body_count
        )

    payload = {**build_payload_header(config), "applications": results}
    out_path = resolve_output_path(
        config, "stage3_letter", "engine/dynamic_engine/3_stage_letter.json"
    )
    export_json(payload, out_path)
    return payload


def main() -> None:
    ensure_project_path()

    try:
        payload = run()
    except (FileNotFoundError, ValueError, RuntimeError, ImportError) as exc:
        print(f"Error: {exc}", file=sys.stderr)
        raise SystemExit(1) from exc

    count = len(payload.get("applications", {}))
    print(f"Stage 3 complete: {count} application(s) -> engine/dynamic_engine/3_stage_letter.json")


if __name__ == "__main__":
    main()
