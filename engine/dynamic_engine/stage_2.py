"""
PURPOSE: Collect all the information about the application and store it in a structured format json file.

Run from project root:
    python engine/dynamic_engine/2_stage.py

Outputs:
    engine/dynamic_engine/data/stage_2.json
"""

from __future__ import annotations

import json
import sys
from pathlib import Path
from typing import Any

from _stage_common import (
    CONFIG_PATH,
    call_ollama,
    coerce_llm_bullets,
    coerce_llm_dict_map,
    coerce_llm_string,
    coerce_llm_string_list,
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

STAGE2_SYSTEM = """You are an expert resume writer. Draft honest, ATS-friendly resume content tailored to one job posting.

## Rules
- Use only evidence from candidate_cv. Never invent employers, degrees, tools, or outcomes.
- Write in third person implied (no "I"); use strong action verbs and quantified impact when the CV supports numbers.
- Mirror job language naturally — do not keyword-stuff.
- Reply with valid JSON only. No markdown fences or commentary.
- Respect the exact output shape requested in the user message."""

RAW_LOG_MAX_CHARS = 500


def _messages(system: str, user: str) -> list[dict[str, str]]:
    return [{"role": "system", "content": system}, {"role": "user", "content": user}]


def _log_progress(slug: str, loop: str, source_id: str = "") -> None:
    label = f"{loop} {source_id}".strip()
    print(f"Stage 2 — {slug}: {label} ...", file=sys.stderr)


def _log_llm_issue(
    slug: str,
    loop: str,
    reason: str,
    raw: str = "",
    *,
    source_id: str = "",
    exc: Exception | None = None,
) -> None:
    label = f"{loop} [{source_id}]" if source_id else loop
    message = f"Stage 2 FAILED {slug} — {label}: {reason}"
    if exc is not None:
        message = f"{message} ({exc})"
    print(message, file=sys.stderr)
    if raw:
        snippet = raw if len(raw) <= RAW_LOG_MAX_CHARS else raw[:RAW_LOG_MAX_CHARS] + "..."
        print(f"RAW OUTPUT:\n{snippet}\n---", file=sys.stderr)


def _parse_bullets(raw: str, slug: str, loop: str, source_id: str = "") -> list[str]:
    try:
        parsed = parse_llm_json(raw)
        bullets = coerce_llm_bullets(parsed)
        if not bullets:
            _log_llm_issue(
                slug,
                loop,
                "parsed OK but bullets empty",
                raw,
                source_id=source_id,
            )
        return bullets
    except (json.JSONDecodeError, ValueError) as exc:
        _log_llm_issue(slug, loop, "JSON parse failed", raw, source_id=source_id, exc=exc)
        return []


def _parse_string(raw: str, slug: str, loop: str, key: str) -> str:
    try:
        parsed = parse_llm_json(raw)
        if isinstance(parsed, list):
            value = " ".join(str(item).strip() for item in parsed if str(item).strip())
        elif isinstance(parsed, dict):
            field = parsed.get(key, "")
            if isinstance(field, list):
                value = " ".join(str(item).strip() for item in field if str(item).strip())
            else:
                value = coerce_llm_string(parsed, key)
        else:
            value = str(parsed).strip()
        if not value:
            _log_llm_issue(slug, loop, f"parsed OK but {key} empty", raw)
        return value
    except (json.JSONDecodeError, ValueError) as exc:
        _log_llm_issue(slug, loop, "JSON parse failed", raw, exc=exc)
        return raw.strip()


def _parse_string_list(raw: str, slug: str, loop: str, key: str) -> list[str]:
    try:
        items = coerce_llm_string_list(parse_llm_json(raw), key)
        if not items:
            _log_llm_issue(slug, loop, f"parsed OK but {key} empty", raw)
        return items
    except (json.JSONDecodeError, ValueError) as exc:
        _log_llm_issue(slug, loop, "JSON parse failed", raw, exc=exc)
        return []


def _parse_dict_map(raw: str, slug: str, loop: str, key: str) -> dict[str, list[str]]:
    try:
        grouped = coerce_llm_dict_map(parse_llm_json(raw), key)
        if not grouped:
            _log_llm_issue(slug, loop, f"parsed OK but {key} empty", raw)
        return grouped
    except (json.JSONDecodeError, ValueError) as exc:
        _log_llm_issue(slug, loop, "JSON parse failed", raw, exc=exc)
        return {}


def _parse_evidence_entry(raw: str, slug: str, requirement: str) -> tuple[list[str], str]:
    loop = "evidence_map"
    try:
        parsed = parse_llm_json(raw)
        proof_points = coerce_llm_string_list(parsed, "proof_points")
        resume_angle = coerce_llm_string(parsed, "resume_angle")
        if not proof_points and not resume_angle:
            _log_llm_issue(
                slug,
                loop,
                "parsed OK but proof_points and resume_angle empty",
                raw,
                source_id=requirement[:60],
            )
        return proof_points, resume_angle
    except (json.JSONDecodeError, ValueError) as exc:
        _log_llm_issue(
            slug,
            loop,
            "JSON parse failed",
            raw,
            source_id=requirement[:60],
            exc=exc,
        )
        return [], ""


def generate_evidence_entry(
    config: dict,
    slug: str,
    entry: dict[str, Any],
    stage1: dict[str, Any],
    profile: dict,
) -> dict[str, Any]:
    cv_source = entry.get("cv_source", "profile")
    source_parts = cv_source.split(".", 1)
    source_data: Any = profile
    if len(source_parts) == 2:
        section, key = source_parts
        source_data = profile.get(section, {}).get(key, {})

    prompt = {
        "task": "Fill proof_points and resume_angle for one job requirement.",
        "job_requirement": entry.get("job_requirement", ""),
        "cv_source": cv_source,
        "source_excerpt": source_data,
        "job_context": {
            "title": stage1.get("title", ""),
            "job_brief": stage1.get("job_brief", {}),
            "fit_review": stage1.get("fit_review", {}),
            "loop2_keywords": stage1.get("loop2_keywords", {}),
        },
        "output_format": {
            "proof_points": ["2-4 short bullets citing real CV facts"],
            "resume_angle": "one sentence on how to frame this on the resume",
        },
    }

    _log_progress(slug, "evidence_map", entry.get("job_requirement", "")[:40])

    raw = call_ollama(
        config,
        _messages(
            STAGE2_SYSTEM,
            (
                f"Stage 2 — evidence map entry for {slug}.\n"
                f"{json.dumps(prompt, indent=2, ensure_ascii=False)}\n\n"
                "Return JSON only."
            ),
        ),
    )
    proof_points, resume_angle = _parse_evidence_entry(
        raw, slug, entry.get("job_requirement", "")
    )

    return {
        "job_requirement": entry.get("job_requirement", ""),
        "cv_source": cv_source,
        "proof_points": proof_points,
        "resume_angle": resume_angle,
    }


def generate_professional_summary(
    config: dict,
    slug: str,
    stage1: dict[str, Any],
    profile: dict,
) -> str:
    prompt = {
        "task": "Write a 3-4 sentence professional summary for the resume.",
        "rules": [
            "Lead with the strongest CV-backed fit for this role.",
            "Weave in loop2_keywords.summary naturally.",
            "Do not claim tools or experience absent from candidate_cv.",
        ],
        "job_context": stage1,
        "candidate_cv": profile_for_prompt(profile),
        "output_format": {"professional_summary": "3-4 sentences"},
    }

    _log_progress(slug, "professional_summary")

    raw = call_ollama(
        config,
        _messages(
            STAGE2_SYSTEM,
            f"Stage 2 — professional_summary for {slug}.\n{json.dumps(prompt, indent=2, ensure_ascii=False)}",
        ),
    )
    return _parse_string(raw, slug, "professional_summary", "professional_summary")


def generate_education_line(
    config: dict,
    slug: str,
    stage1: dict[str, Any],
    profile: dict,
) -> str:
    prompt = {
        "task": "Write one resume education line (degree, school, dates, optional honours note).",
        "job_context": stage1,
        "candidate_cv": {"education": profile.get("education", {})},
        "output_format": {"education_line": "single line string"},
    }

    _log_progress(slug, "education_line")

    raw = call_ollama(
        config,
        _messages(
            STAGE2_SYSTEM,
            f"Stage 2 — education_line for {slug}.\n{json.dumps(prompt, indent=2, ensure_ascii=False)}",
        ),
    )
    return _parse_string(raw, slug, "education_line", "education_line")


def generate_certifications_highlight(
    config: dict,
    slug: str,
    stage1: dict[str, Any],
    profile: dict,
) -> list[str]:
    prompt = {
        "task": "List certifications to highlight for this job (most relevant first).",
        "job_context": stage1,
        "candidate_cv": {"certifications": profile.get("certifications", {})},
        "output_format": {"certifications_highlight": ["cert name — issuer or context"]},
    }

    _log_progress(slug, "certifications_highlight")

    raw = call_ollama(
        config,
        _messages(
            STAGE2_SYSTEM,
            f"Stage 2 — certifications_highlight for {slug}.\n{json.dumps(prompt, indent=2, ensure_ascii=False)}",
        ),
    )
    return _parse_string_list(raw, slug, "certifications_highlight", "certifications_highlight")


def generate_skills_grouped(
    config: dict,
    slug: str,
    stage1: dict[str, Any],
    profile: dict,
) -> dict[str, list[str]]:
    prompt = {
        "task": "Group relevant skills into 3-5 resume categories with bullet terms.",
        "rules": [
            "Only include skills evidenced in candidate_cv.",
            "Prioritize loop2_keywords.skills and job_brief.tools_and_tech overlap.",
        ],
        "job_context": stage1,
        "candidate_cv": {
            "skills": profile.get("skills", {}),
            "titles": profile.get("titles", {}),
        },
        "output_format": {
            "skills_grouped": {
                "Category Name": ["skill1", "skill2"],
            }
        },
    }

    _log_progress(slug, "skills_grouped")

    raw = call_ollama(
        config,
        _messages(
            STAGE2_SYSTEM,
            f"Stage 2 — skills_grouped for {slug}.\n{json.dumps(prompt, indent=2, ensure_ascii=False)}",
        ),
    )
    return _parse_dict_map(raw, slug, "skills_grouped", "skills_grouped")


def generate_experience_bullets(
    config: dict,
    slug: str,
    source_id: str,
    experience: dict[str, Any],
    stage1: dict[str, Any],
    profile: dict,
) -> dict[str, Any]:
    prompt = {
        "task": f"Write 3-5 resume bullets for experience entry {source_id}.",
        "rules": [
            "Start each bullet with a strong verb.",
            "Tie duties to job_brief.responsibilities where honestly supported.",
            "Use loop2_keywords.experience themes when applicable.",
        ],
        "experience_entry": experience,
        "job_context": stage1,
        "candidate_cv": profile_for_prompt(profile),
        "output_format": {"bullets": ["bullet strings"]},
    }

    _log_progress(slug, "experience_bullets", source_id)

    raw = call_ollama(
        config,
        _messages(
            STAGE2_SYSTEM,
            f"Stage 2 — experience_bullets {source_id} for {slug}.\n"
            f"{json.dumps(prompt, indent=2, ensure_ascii=False)}",
        ),
    )
    bullet_list = _parse_bullets(raw, slug, "experience_bullets", source_id)

    return {
        "source_id": source_id,
        "company": experience.get("company", ""),
        "position": experience.get("position", ""),
        "bullets": bullet_list,
    }


def generate_project_bullets(
    config: dict,
    slug: str,
    source_id: str,
    project: dict[str, Any],
    stage1: dict[str, Any],
    profile: dict,
) -> dict[str, Any]:
    prompt = {
        "task": f"Write 2-4 resume bullets for project {source_id}.",
        "rules": [
            "Highlight technical outcomes and relevance to the target role.",
            "Reference technologies only if listed in the project or CV.",
        ],
        "project_entry": project,
        "job_context": stage1,
        "output_format": {"bullets": ["bullet strings"]},
    }

    _log_progress(slug, "project_bullets", source_id)

    raw = call_ollama(
        config,
        _messages(
            STAGE2_SYSTEM,
            f"Stage 2 — project_bullets {source_id} for {slug}.\n"
            f"{json.dumps(prompt, indent=2, ensure_ascii=False)}",
        ),
    )
    bullet_list = _parse_bullets(raw, slug, "project_bullets", source_id)

    return {
        "source_id": source_id,
        "name": project.get("name", ""),
        "bullets": bullet_list,
    }


def process_application(
    config: dict,
    slug: str,
    stage1_entry: dict[str, Any],
    profile: dict,
) -> dict[str, Any]:
    evidence_map: list[dict[str, Any]] = []
    for entry in stage1_entry.get("evidence_map", []):
        evidence_map.append(generate_evidence_entry(config, slug, entry, stage1_entry, profile))

    experience_bullets: list[dict[str, Any]] = []
    for source_id, experience in profile.get("experience", {}).items():
        if isinstance(experience, dict):
            experience_bullets.append(
                generate_experience_bullets(
                    config, slug, source_id, experience, stage1_entry, profile
                )
            )

    project_bullets: list[dict[str, Any]] = []
    for source_id, project in profile.get("projects", {}).items():
        if isinstance(project, dict):
            project_bullets.append(
                generate_project_bullets(config, slug, source_id, project, stage1_entry, profile)
            )

    return {
        "title": stage1_entry.get("title", ""),
        "evidence_map": evidence_map,
        "resume_draft": {
            "professional_summary": generate_professional_summary(
                config, slug, stage1_entry, profile
            ),
            "education_line": generate_education_line(config, slug, stage1_entry, profile),
            "certifications_highlight": generate_certifications_highlight(
                config, slug, stage1_entry, profile
            ),
            "skills_grouped": generate_skills_grouped(config, slug, stage1_entry, profile),
            "experience_bullets": experience_bullets,
            "project_bullets": project_bullets,
        },
    }


def run(config_path: Path = CONFIG_PATH) -> dict[str, Any]:
    config = load_config(config_path)

    apps_path = resolve_path(config, "applications", "json", "applications/local_applications.json")
    profile_path = resolve_path(config, "profile", "json", "settings/profile.json")
    stage1_path = resolve_output_path(
        config, "stage1_cv", "engine/dynamic_engine/1_stage_req_cv.json"
    )

    applications = load_json(apps_path)
    profile = load_json(profile_path)
    stage1 = load_json(stage1_path)

    if not applications:
        raise ValueError(f"No applications found in {apps_path}")
    if not profile:
        raise ValueError(f"No profile found in {profile_path}")
    if not stage1.get("applications"):
        raise ValueError(f"Run 1_stage.py first — missing {stage1_path}")

    results: dict[str, Any] = {}
    for slug in applications:
        stage1_entry = stage1.get("applications", {}).get(slug)
        if not stage1_entry:
            print(f"Warning: no stage 1 CV data for {slug}, skipping.", file=sys.stderr)
            continue
        results[slug] = process_application(config, slug, stage1_entry, profile)

    payload = {**build_payload_header(config), "applications": results}
    out_path = resolve_output_path(config, "stage2_cv", "engine/dynamic_engine/2_stage_cv.json")
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
    print(f"Stage 2 complete: {count} application(s) -> engine/dynamic_engine/2_stage_cv.json")


if __name__ == "__main__":
    main()
