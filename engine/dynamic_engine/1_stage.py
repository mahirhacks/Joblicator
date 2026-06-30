"""
Stage 1 — job requirement analysis, fit review, keyword extraction, evidence map skeleton.

Loop 1  : Per application — job_brief + honest fit review.
Loop 2  : Per application — sequential inter-batch keyword picks per resume section.

Run from project root:
    python engine/dynamic_engine/1_stage.py

Outputs:
    engine/dynamic_engine/1_stage_req_cv.json
    engine/dynamic_engine/1_stage_req_letter.json
"""

from __future__ import annotations

import json
import sys
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any

from _stage_common import (
    CONFIG_PATH,
    DescriptionParser,
    JobBatch,
    append_unique_keywords,
    application_text,
    build_ats_block,
    build_evidence_map_skeleton,
    build_payload_header,
    build_tailoring_strategy,
    call_ollama,
    cv_slice,
    ensure_project_path,
    export_json,
    load_config,
    load_json,
    parse_keyword_list,
    parse_llm_json,
    picks_for_batch,
    post_filter_keywords,
    profile_for_prompt,
    resolve_output_path,
    resolve_path,
    build_cv_text,
    build_cv_vocabulary,
)

SYSTEM_PROMPT = """You are an expert hiring manager and resume strategist. Your job is to help tailor a candidate's resume to a specific job posting by extracting keywords and short phrases that belong on a resume.

## Your role
- Read the job description batch and the candidate CV slice provided in each request.
- Extract only resume-worthy keywords and short phrases (typically 1-4 words).
- Work for any industry or seniority level. Do not assume a technical background unless the CV and job support it.
- Be honest and conservative. Never invent experience, credentials, tools, domains, or achievements that are not supported by the candidate CV.

## Evidence rules
- Return only items the candidate can honestly claim today, based on evidence in candidate_cv.
- Put an item in the list only when candidate_cv clearly supports it through skills, experience, education, projects, certifications, titles, or achievements.
- When already_selected is provided, every new item must be completely different — no repeats, rephrasings, synonyms, or overlapping phrases of prior picks.

## What to extract
- Skills, tools, methods, domains, responsibilities, and outcomes relevant to the target role and resume section.
- Phrasing that would look natural on a resume, not copied verbatim from marketing or legal boilerplate in the job ad.

## What to ignore
- Company perks, benefits, culture fluff, EEO statements, application instructions, and salary or location unless explicitly relevant.
- Generic filler unless the CV provides concrete evidence and the job batch makes it a clear requirement.
- Anything listed in already_selected or anything too similar to it.

## Output rules
- Reply with valid JSON only. No markdown fences, no commentary, no preamble, no explanation.
- Use this shape exactly: {"matched": ["..."]}
- Return exactly the number of items requested in pick_count (or fewer only if the batch truly has nothing new to add).
- Keep items deduplicated, ordered with the strongest matches first.
- Respect per-request limits and section-specific instructions in the user message; those override generic guidance when they conflict."""

LOOP1_SYSTEM = """You are an expert hiring manager performing an honest job-fit review. Your task is to compare one job posting against one candidate CV and return a structured assessment that downstream resume tailoring can trust.

## Your role
- Evaluate fit based only on evidence in the candidate CV and requirements stated in the job posting.
- Work for any industry, role type, or seniority level. Do not assume technical, academic, or corporate context unless the materials support it.
- Be direct, fair, and conservative. The goal is accuracy, not optimism.
- Also produce a structured job_brief summarizing what the employer is asking for.

## Evidence rules
- Never invent or assume experience, certifications, education, tools, languages, clearance, work authorization, or achievements that are not in the CV.
- Do not treat related skills as proof of unrelated requirements. Name gaps explicitly when the job asks for something the CV does not show.
- Distinguish clearly between:
  - strengths: CV-backed reasons the candidate could succeed in this role
  - gaps: job requirements or preferences not evidenced in the CV
  - mismatches: conflicts in seniority, domain, eligibility, location, or career direction
  - hard_requirements: explicit must-haves from the posting (years of experience, degree level, citizenship, certifications, etc.)

## fit_score guidance
- Return fit_score as an integer from 1 (poor fit) to 10 (excellent fit).
- Score the realistic chance this candidate could credibly apply and interview, not how much they might learn on the job.
- Be conservative when the CV suggests a very different seniority or domain than the role.
- A high score requires strong overlap on core requirements, not just generic transferable skills.

## job_brief guidance
Summarize the posting for downstream tailoring:
- company_summary: 2-3 sentences on the employer and context
- role_summary: 2-3 sentences on what the role does day-to-day
- work_mode: onsite|hybrid|remote|unknown
- must_have: explicit requirements with category (skill|knowledge|experience|eligibility|other)
- nice_to_have: preferred but optional requirements (same shape as must_have)
- responsibilities: concrete duties from the posting
- tools_and_tech: named tools, languages, frameworks, platforms
- domain_keywords: industry/domain terms useful for ATS
- eligibility: degree, years, work authorization, location constraints
- tone: startup|enterprise|consulting|academic|unknown

## Field expectations
Return one JSON object with these top-level fields:
- company, role, location, seniority, primary_domain, fit_score, fit_summary
- hard_requirements, strengths, gaps, mismatches: arrays of short strings
- job_brief: object as described above

## Output rules
- Reply with valid JSON only. No markdown fences, no commentary, no preamble, no explanation.
- Respect any additional rules or output_format details in the user message; those override generic guidance when they conflict."""


@dataclass
class SectionKeywords:
    skills: list[str] = field(default_factory=list)
    experience: list[str] = field(default_factory=list)
    summary: list[str] = field(default_factory=list)
    education: list[str] = field(default_factory=list)
    projects: list[str] = field(default_factory=list)


LOOP2_SPECS: dict[str, dict[str, str]] = {
    "2.1": {
        "section": "skills",
        "resume_section": "Skills",
        "instruction": (
            "Extract hard and soft skills, tools, methods, and competencies from this job batch "
            "that belong in the Skills section and are evidenced in candidate_cv."
        ),
    },
    "2.2": {
        "section": "experience",
        "resume_section": "Work Experience",
        "instruction": (
            "Extract responsibility themes, deliverables, and impact phrases from this job batch "
            "that the candidate can honestly reflect in Work Experience bullets."
        ),
    },
    "2.3": {
        "section": "summary",
        "resume_section": "Professional Summary",
        "instruction": (
            "Extract headline-style phrases for the Professional Summary tied to this posting."
        ),
    },
    "2.4": {
        "section": "education",
        "resume_section": "Education",
        "instruction": (
            "Extract degree levels, fields of study, certifications, and formal training "
            "from this job batch that the candidate holds or is completing."
        ),
    },
    "2.5": {
        "section": "projects",
        "resume_section": "Projects",
        "instruction": (
            "Extract project-worthy themes from this job batch that the candidate can point to "
            "in candidate_cv projects, achievements, or relevant experience."
        ),
    },
}

LOOP2_SECTION_ORDER = ("2.1", "2.2", "2.3", "2.4", "2.5")
LOOP2_ATTR_MAP = {
    "2.1": "skills",
    "2.2": "experience",
    "2.3": "summary",
    "2.4": "education",
    "2.5": "projects",
}


def section_keywords_to_dict(section: SectionKeywords) -> dict[str, list[str]]:
    return {
        "skills": section.skills,
        "experience": section.experience,
        "summary": section.summary,
        "education": section.education,
        "projects": section.projects,
    }


def loop1_review_application(
    config: dict,
    slug: str,
    application: dict,
    profile: dict,
) -> dict[str, Any]:
    prompt = {
        "task": "Review this job posting against the candidate CV and produce job_brief + fit assessment.",
        "rules": [
            "Do not invent experience, certifications, or activities not present in the CV.",
            "job_brief must reflect the posting, not the candidate's wishes.",
            "fit_score must be an integer from 1 (poor fit) to 10 (excellent fit).",
            "Be conservative on fit_score for graduate or entry roles if CV shows senior titles.",
        ],
        "output_format": {
            "company": "company name inferred from posting",
            "role": "job title",
            "location": "location if present",
            "seniority": "junior|mid|senior|lead|unknown",
            "primary_domain": "short domain label for the role",
            "fit_score": "integer 1-10",
            "fit_summary": "2 sentences max, honest assessment",
            "hard_requirements": ["explicit must-have requirements from the job"],
            "strengths": ["CV-backed strengths for this role"],
            "gaps": ["job requirements not evidenced in the CV"],
            "mismatches": ["seniority, domain, or eligibility conflicts"],
            "job_brief": {
                "company_summary": "2-3 sentences",
                "role_summary": "2-3 sentences",
                "work_mode": "onsite|hybrid|remote|unknown",
                "must_have": [{"requirement": "", "category": "skill|knowledge|experience|eligibility|other"}],
                "nice_to_have": [{"requirement": "", "category": "skill|knowledge|experience|eligibility|other"}],
                "responsibilities": ["concrete duties"],
                "tools_and_tech": ["named tools and technologies"],
                "domain_keywords": ["industry/domain terms"],
                "eligibility": ["degree, years, authorization, location"],
                "tone": "startup|enterprise|consulting|academic|unknown",
            },
        },
        "job_posting": application,
        "candidate_cv": profile_for_prompt(profile),
    }

    messages = [
        {"role": "system", "content": LOOP1_SYSTEM},
        {
            "role": "user",
            "content": (
                "Stage 1 Loop 1 — Job requirement summary + fit review.\n"
                f"Application slug: {slug}\n\n"
                f"{json.dumps(prompt, indent=2, ensure_ascii=False)}\n\n"
                "Return one JSON object only."
            ),
        },
    ]

    raw = call_ollama(config, messages)
    try:
        return parse_llm_json(raw)
    except (json.JSONDecodeError, ValueError):
        return {"fit_summary": raw.strip(), "role": application.get("title", ""), "job_brief": {}}


def loop2_extract_keywords(
    config: dict,
    loop_id: str,
    batch: JobBatch,
    application: dict,
    profile: dict,
    loop1_review: dict[str, Any],
    vocabulary: set[str],
    cv_text: str = "",
    already_selected: list[str] | None = None,
    pick_count: int = 5,
) -> list[str]:
    spec = LOOP2_SPECS[loop_id]
    cv = cv_slice(profile, spec["section"])
    prior = already_selected or []

    prompt = {
        "loop": loop_id,
        "resume_section": spec["resume_section"],
        "instruction": spec["instruction"],
        "pick_count": pick_count,
        "already_selected": prior,
        "rules": [
            f"Return exactly {pick_count} items in matched (or fewer only if this batch has nothing new).",
            'Return JSON object only: {"matched": ["..."]}',
            "Every item must be evidenced in candidate_cv.",
            "Every item must be completely unique vs already_selected.",
            "Keep items short (1-4 words each).",
        ],
        "batch": {"index": batch.index, "total": batch.total, "text": batch.text},
        "job_context": {
            "title": application.get("title", ""),
            "location": application.get("location", ""),
            "about": application.get("about", ""),
            "loop1_review": {
                "fit_score": loop1_review.get("fit_score"),
                "fit_summary": loop1_review.get("fit_summary"),
                "strengths": loop1_review.get("strengths", []),
                "job_brief": loop1_review.get("job_brief", {}),
            },
        },
        "candidate_cv": cv,
    }

    messages = [
        {"role": "system", "content": SYSTEM_PROMPT},
        {
            "role": "user",
            "content": (
                f"Loop {loop_id} — {spec['resume_section']} keywords.\n"
                f"Inter-batch {batch.index} of {batch.total}.\n"
                f"Pick {pick_count} new unique keyword(s).\n\n"
                f"{json.dumps(prompt, indent=2, ensure_ascii=False)}\n\n"
                'Return {"matched": [...]} only.'
            ),
        },
    ]

    raw = call_ollama(config, messages)
    keywords = parse_keyword_list(raw)
    return post_filter_keywords(keywords, vocabulary, cv_text)


def loop2_process_section(
    config: dict,
    loop_id: str,
    batches: list[JobBatch],
    application: dict,
    profile: dict,
    loop1_review: dict[str, Any],
    vocabulary: set[str],
    cv_text: str,
    section_cap: int,
    per_batch_max: int,
) -> list[str]:
    accumulated: list[str] = []

    for batch in batches:
        pick_count = picks_for_batch(
            batch.index,
            batch.total,
            len(accumulated),
            section_cap,
            per_batch_max,
        )
        if pick_count <= 0:
            break

        batch_keywords = loop2_extract_keywords(
            config,
            loop_id,
            batch,
            application,
            profile,
            loop1_review,
            vocabulary,
            cv_text,
            already_selected=accumulated,
            pick_count=pick_count,
        )
        accumulated = append_unique_keywords(accumulated, batch_keywords, section_cap)

    return accumulated


def loop2_process_application(
    config: dict,
    application: dict,
    profile: dict,
    loop1_review: dict[str, Any],
    parser: DescriptionParser,
) -> tuple[SectionKeywords, int]:
    full_text = application_text(application)
    raw_batches = parser.parse(full_text)
    if not raw_batches:
        return SectionKeywords(), 0

    batches = [
        JobBatch(index=i + 1, total=len(raw_batches), text=text)
        for i, text in enumerate(raw_batches)
    ]

    loop_cfg = config.get("loops", {})
    section_cap = loop_cfg.get("max_keywords_per_section", 20)
    per_batch_max = loop_cfg.get("max_keywords_per_inter_batch", 5)

    vocabulary = build_cv_vocabulary(profile)
    cv_text = build_cv_text(profile)
    keywords = SectionKeywords()

    for loop_id in LOOP2_SECTION_ORDER:
        section_keywords = loop2_process_section(
            config,
            loop_id,
            batches,
            application,
            profile,
            loop1_review,
            vocabulary,
            cv_text,
            section_cap,
            per_batch_max,
        )
        setattr(keywords, LOOP2_ATTR_MAP[loop_id], section_keywords)

    return keywords, len(batches)


def build_fit_review(loop1: dict[str, Any]) -> dict[str, Any]:
    return {
        "company": loop1.get("company", ""),
        "role": loop1.get("role", ""),
        "location": loop1.get("location", ""),
        "seniority": loop1.get("seniority", "unknown"),
        "primary_domain": loop1.get("primary_domain", ""),
        "fit_score": loop1.get("fit_score", 0),
        "fit_summary": loop1.get("fit_summary", ""),
        "hard_requirements": loop1.get("hard_requirements", []),
        "strengths": loop1.get("strengths", []),
        "gaps": loop1.get("gaps", []),
        "mismatches": loop1.get("mismatches", []),
    }


def build_cover_letter_brief(loop1: dict[str, Any], job_brief: dict[str, Any]) -> dict[str, Any]:
    gaps = loop1.get("gaps", [])
    mismatches = loop1.get("mismatches", [])
    claims_to_avoid = list(dict.fromkeys([*gaps, *mismatches]))

    return {
        "lead_with": loop1.get("strengths", [])[:3],
        "gaps_to_address": gaps,
        "claims_to_avoid": claims_to_avoid,
        "tone": job_brief.get("tone", "unknown"),
        "company_hook": job_brief.get("company_summary", ""),
        "role_hook": job_brief.get("role_summary", ""),
    }


def process_application(
    config: dict,
    slug: str,
    application: dict,
    profile: dict,
    parser: DescriptionParser,
) -> tuple[dict[str, Any], dict[str, Any]]:
    loop1 = loop1_review_application(config, slug, application, profile)
    loop2_keywords, batch_count = loop2_process_application(
        config, application, profile, loop1, parser
    )

    job_brief = loop1.get("job_brief", {}) or {}
    fit_review = build_fit_review(loop1)
    keywords = section_keywords_to_dict(loop2_keywords)
    evidence_map = build_evidence_map_skeleton(job_brief, profile)
    tailoring_strategy = build_tailoring_strategy(loop1)
    ats = build_ats_block(job_brief, keywords)

    cv_entry = {
        "title": application.get("title", ""),
        "job_brief": job_brief,
        "fit_review": fit_review,
        "evidence_map": evidence_map,
        "tailoring_strategy": tailoring_strategy,
        "ats": ats,
        "loop2_keywords": keywords,
        "batches_processed": batch_count,
    }

    letter_entry = {
        "title": application.get("title", ""),
        "job_brief": job_brief,
        "fit_review": {
            "company": fit_review["company"],
            "role": fit_review["role"],
            "fit_score": fit_review["fit_score"],
            "fit_summary": fit_review["fit_summary"],
            "strengths": fit_review["strengths"],
            "gaps": fit_review["gaps"],
            "mismatches": fit_review["mismatches"],
        },
        "cover_letter_brief": build_cover_letter_brief(loop1, job_brief),
    }

    return cv_entry, letter_entry


def run(config_path: Path = CONFIG_PATH) -> tuple[dict[str, Any], dict[str, Any]]:
    config = load_config(config_path)

    apps_path = resolve_path(config, "applications", "json", "applications/local_applications.json")
    profile_path = resolve_path(config, "profile", "json", "settings/profile.json")

    applications = load_json(apps_path)
    profile = load_json(profile_path)

    if not applications:
        raise ValueError(f"No applications found in {apps_path}")
    if not profile:
        raise ValueError(f"No profile found in {profile_path}")

    max_chars = config.get("batching", {}).get("max_chars", 1200)
    parser = DescriptionParser(max_chars=max_chars)

    cv_results: dict[str, Any] = {}
    letter_results: dict[str, Any] = {}

    for slug, application in applications.items():
        cv_entry, letter_entry = process_application(
            config, slug, application, profile, parser
        )
        cv_results[slug] = cv_entry
        letter_results[slug] = letter_entry

    header = build_payload_header(config)
    cv_payload = {**header, "applications": cv_results}
    letter_payload = {**header, "applications": letter_results}

    cv_path = resolve_output_path(config, "stage1_cv", "engine/dynamic_engine/1_stage_req_cv.json")
    letter_path = resolve_output_path(
        config, "stage1_letter", "engine/dynamic_engine/1_stage_req_letter.json"
    )
    export_json(cv_payload, cv_path)
    export_json(letter_payload, letter_path)

    return cv_payload, letter_payload


def main() -> None:
    ensure_project_path()

    try:
        cv_payload, letter_payload = run()
    except (FileNotFoundError, ValueError, RuntimeError, ImportError) as exc:
        print(f"Error: {exc}", file=sys.stderr)
        raise SystemExit(1) from exc

    cv_count = len(cv_payload.get("applications", {}))
    print(f"Stage 1 complete: {cv_count} application(s)")
    print(f"  CV output     -> engine/dynamic_engine/1_stage_req_cv.json")
    print(f"  Letter output -> engine/dynamic_engine/1_stage_req_letter.json")


if __name__ == "__main__":
    main()
