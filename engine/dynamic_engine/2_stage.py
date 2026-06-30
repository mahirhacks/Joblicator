"""
Stage 2 — tailored resume content (one LLM loop per field / collection item).

Reads stage 1 CV requirements and the candidate profile; processes applications one by one.
cv_source in evidence_map is static (from stage 1); proof_points and resume_angle use the LLM.

Run from project root:
    python engine/dynamic_engine/2_stage.py

Output: engine/dynamic_engine/2_stage_cv.json
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

STAGE2_SYSTEM = """You are an expert resume writer. Draft honest, ATS-friendly resume content tailored to one job posting.

## Rules
- Use only evidence from candidate_cv. Never invent employers, degrees, tools, or outcomes.
- Write in third person implied (no "I"); use strong action verbs and quantified impact when the CV supports numbers.
- Mirror job language naturally — do not keyword-stuff.
- Reply with valid JSON only. No markdown fences or commentary.
- Respect the exact output shape requested in the user message."""


def _messages(system: str, user: str) -> list[dict[str, str]]:
    return [{"role": "system", "content": system}, {"role": "user", "content": user}]


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
    try:
        parsed = parse_llm_json(raw)
    except (json.JSONDecodeError, ValueError):
        parsed = {}

    return {
        "job_requirement": entry.get("job_requirement", ""),
        "cv_source": cv_source,
        "proof_points": parsed.get("proof_points", []),
        "resume_angle": parsed.get("resume_angle", ""),
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

    raw = call_ollama(
        config,
        _messages(
            STAGE2_SYSTEM,
            f"Stage 2 — professional_summary for {slug}.\n{json.dumps(prompt, indent=2, ensure_ascii=False)}",
        ),
    )
    try:
        return str(parse_llm_json(raw).get("professional_summary", "")).strip()
    except (json.JSONDecodeError, ValueError):
        return raw.strip()


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

    raw = call_ollama(
        config,
        _messages(
            STAGE2_SYSTEM,
            f"Stage 2 — education_line for {slug}.\n{json.dumps(prompt, indent=2, ensure_ascii=False)}",
        ),
    )
    try:
        return str(parse_llm_json(raw).get("education_line", "")).strip()
    except (json.JSONDecodeError, ValueError):
        return raw.strip()


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

    raw = call_ollama(
        config,
        _messages(
            STAGE2_SYSTEM,
            f"Stage 2 — certifications_highlight for {slug}.\n{json.dumps(prompt, indent=2, ensure_ascii=False)}",
        ),
    )
    try:
        items = parse_llm_json(raw).get("certifications_highlight", [])
        return [str(i).strip() for i in items if str(i).strip()]
    except (json.JSONDecodeError, ValueError):
        return []


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

    raw = call_ollama(
        config,
        _messages(
            STAGE2_SYSTEM,
            f"Stage 2 — skills_grouped for {slug}.\n{json.dumps(prompt, indent=2, ensure_ascii=False)}",
        ),
    )
    try:
        grouped = parse_llm_json(raw).get("skills_grouped", {})
        if isinstance(grouped, dict):
            return {
                str(k): [str(v).strip() for v in vals if str(v).strip()]
                for k, vals in grouped.items()
                if isinstance(vals, list)
            }
    except (json.JSONDecodeError, ValueError):
        pass
    return {}


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

    raw = call_ollama(
        config,
        _messages(
            STAGE2_SYSTEM,
            f"Stage 2 — experience_bullets {source_id} for {slug}.\n"
            f"{json.dumps(prompt, indent=2, ensure_ascii=False)}",
        ),
    )
    try:
        bullets = parse_llm_json(raw).get("bullets", [])
        bullet_list = [str(b).strip() for b in bullets if str(b).strip()]
    except (json.JSONDecodeError, ValueError):
        bullet_list = []

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

    raw = call_ollama(
        config,
        _messages(
            STAGE2_SYSTEM,
            f"Stage 2 — project_bullets {source_id} for {slug}.\n"
            f"{json.dumps(prompt, indent=2, ensure_ascii=False)}",
        ),
    )
    try:
        bullets = parse_llm_json(raw).get("bullets", [])
        bullet_list = [str(b).strip() for b in bullets if str(b).strip()]
    except (json.JSONDecodeError, ValueError):
        bullet_list = []

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
