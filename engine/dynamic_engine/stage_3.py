"""
Stage 3 — tailored cover / job application letter per application.

Static header from profile (no LLM).
Claims + gaps from stage_2 (deterministic manifest).
Loop 1: full letter prose (opening + body + closing) in one LLM call
Verification: holistic LLM quality review + parser scan; whole-letter refinement passes

Run from project root:
    python engine/dynamic_engine/stage_3.py

Reads:  data/stage_1.json, data/stage_2.json, profile, applications
Output: data/stage_3.json
"""

from __future__ import annotations

import json
import re
import sys
from datetime import UTC, datetime
from pathlib import Path
from typing import Any

from grounding import (
    build_claims_ledger,
    build_gap_disclosures,
    derive_claims_to_avoid,
    find_claim_violations,
    find_ledger_violations,
    letter_has_claim_violations,
    sanitize_profile,
    strip_letter_claim_violations,
)
from letter_autofix import autofix_letter_prose, autofix_until_clean, finalize_letter_repairs
from style_validator import scan_letter_style
from ollama import (
    call_ollama,
    coerce_llm_string_list,
    terminate_ollama,
)
from plain_text import (
    PLAIN_TEXT_REPLY,
    parse_letter_prose,
    parse_line_list,
    parse_ordered_lines,
    parse_quality_review,
)
from prompts.prompt_stage_3 import (
    DEFAULT_BODY_PARAGRAPHS,
    LETTER_PROSE_SECTION,
    LOOP_CLAIMS_SYSTEM,
    LOOP_GAPS_SYSTEM,
    LOOP_LETTER_PROSE_SYSTEM,
    LOOP_SMOOTH_GAP_SYSTEM,
    PARSER_SECTIONS,
    VERIFICATION_SYSTEM,
    VERIFIED_SECTIONS,
)
from stage_2 import (
    KeywordPool,
    _split_name,
    build_master_keywords,
    compose_location,
    keyword_prompt_block,
    polish_bullets,
    polish_text,
)
from verification import (
    clear_pipeline_failure_report,
    default_failure_report_path,
    enforce_parser_gate,
    fail_on_unresolved_enabled,
)
from utils import (
    CONFIG_PATH,
    application_text,
    build_parser_improvement_block,
    build_payload_header,
    build_quality_improvement_block,
    build_sources,
    ensure_project_path,
    export_json,
    enforce_max_words,
    count_words,
    generation_options,
    iter_applications,
    load_config,
    load_json,
    profile_for_prompt,
    record_parser_issues,
    record_reviewer_feedback,
    resolve_output_path,
    resolve_path,
)

STAGE_1_DEFAULT = "engine/dynamic_engine/data/stage_1.json"
STAGE_2_DEFAULT = "engine/dynamic_engine/data/stage_2.json"
STAGE_3_DEFAULT = "engine/dynamic_engine/data/stage_3.json"
META_KEYS = frozenset({"generated_at", "sources"})
STATIC_KEYS = frozenset(
    {"first_name", "last_name", "email", "linkedin", "contact", "address"}
)
META_CONTENT_KEYS = frozenset({"quality_review", "parser_review"})
_PLACEHOLDER_COUNT_RE = re.compile(r"\b[XxNn]\+")


def _honesty_settings(config: dict) -> dict[str, Any]:
    raw = config.get("stage_3", {}).get("honesty", {})
    try:
        gap_index = int(raw.get("gap_paragraph_index", 2))
    except (TypeError, ValueError):
        gap_index = 2
    try:
        max_gaps = int(raw.get("max_gaps_in_letter", 3))
    except (TypeError, ValueError):
        max_gaps = 3
    return {
        "use_stage_2_claims": bool(raw.get("use_stage_2_claims", True)),
        "deterministic_gap_paragraph": bool(raw.get("deterministic_gap_paragraph", True)),
        "gap_paragraph_index": max(1, gap_index),
        "smooth_gap_paragraph": bool(raw.get("smooth_gap_paragraph", True)),
        "max_gaps_in_letter": max(1, max_gaps),
    }


def _gaps_for_letter(config: dict, gaps_addressed: list[str]) -> list[str]:
    """Cap how many gap disclosures reach the letter — full honesty stays in the JSON payload."""
    cleaned = [str(item).strip() for item in gaps_addressed if str(item).strip()]
    return cleaned[: _honesty_settings(config)["max_gaps_in_letter"]]


def _style_verification_enabled(config: dict) -> bool:
    raw = config.get("stage_3", {}).get("style_verification", {})
    return bool(raw.get("enabled", True))


def _resolve_shared_claims(
    config: dict,
    stage2_entry: dict[str, Any],
    profile: dict[str, Any],
) -> tuple[list[str], list[str], dict[str, dict[str, Any]]]:
    """Reuse stage_2 claims manifest so CV and cover letter stay aligned."""
    gaps = coerce_llm_string_list(stage2_entry.get("fit_review", {}), "gaps")
    honesty = _honesty_settings(config)

    claims = stage2_entry.get("claims_to_avoid")
    gaps_addressed = stage2_entry.get("gaps_addressed")
    ledger = stage2_entry.get("claims_ledger")

    if honesty["use_stage_2_claims"] and isinstance(claims, list) and claims:
        claims_to_avoid = claims
    else:
        claims_to_avoid = derive_claims_to_avoid(gaps)

    if honesty["use_stage_2_claims"] and isinstance(gaps_addressed, list) and gaps_addressed:
        resolved_gaps = gaps_addressed
    else:
        resolved_gaps = build_gap_disclosures(gaps)

    if not isinstance(ledger, dict) or not ledger:
        ledger = build_claims_ledger(profile, gaps)

    return claims_to_avoid, resolved_gaps, ledger


def _messages(system: str, user: str) -> list[dict[str, str]]:
    return [{"role": "system", "content": system}, {"role": "user", "content": user}]


def _application_key(index: int) -> str:
    return f"application_{index}"


def _prompt_with_improvement(prompt: dict[str, Any], improvement: dict[str, Any] | None) -> dict[str, Any]:
    if not improvement:
        return prompt
    return {**prompt, "improvement": improvement}


def _parser_improvement_block(section: str, prior_draft: Any, issues: list[str]) -> dict[str, Any]:
    return build_parser_improvement_block(
        section,
        prior_draft,
        issues,
        extra_rules="All required fields must be non-empty. Use only CV and resume_draft facts.",
    )


def _verification_settings(config: dict) -> dict[str, Any]:
    return config.get("stage_3", {}).get("verification", {})


def _parser_verification_settings(config: dict) -> dict[str, Any]:
    return config.get("stage_3", {}).get("parser_verification", {})


def _parser_autofix_enabled(config: dict) -> bool:
    return bool(config.get("stage_3", {}).get("parser_autofix", {}).get("enabled", True))


def _apply_deterministic_letter_autofix(
    config: dict,
    app_key: str,
    content: dict[str, Any],
    body_count: int,
    *,
    aggressive: bool = False,
) -> bool:
    """Strip bad claims, label leaks, and opener collisions without another LLM call."""
    if not _parser_autofix_enabled(config):
        return False

    gaps = content.get("gaps_addressed", [])
    if not isinstance(gaps, list):
        gaps = []
    gaps = _gaps_for_letter(config, gaps)
    skip = _gap_paragraph_skip_index(config)
    max_words = _body_paragraph_max_words(config)

    print(f"Stage 3 — {app_key}: applying deterministic letter auto-fix ...", file=sys.stderr)
    if aggressive:
        changed = autofix_until_clean(
            content,
            body_count,
            gaps_addressed=gaps,
            skip_body_indices=skip,
            max_words=max_words,
        )
    else:
        changed = autofix_letter_prose(
            content,
            body_count,
            gaps_addressed=gaps,
            skip_body_indices=skip,
            max_words=max_words,
        )
        if finalize_letter_repairs(
            content,
            body_count,
            max_words=max_words,
            gaps_addressed=gaps,
            skip_body_indices=skip,
        ):
            changed = True
    if changed:
        print(f"  auto-fix: letter prose patched (claims/style/labels)", file=sys.stderr)
    return changed


def _body_paragraph_count(config: dict) -> int:
    count = config.get("stage_3", {}).get("body_paragraphs", DEFAULT_BODY_PARAGRAPHS)
    try:
        return max(1, int(count))
    except (TypeError, ValueError):
        return DEFAULT_BODY_PARAGRAPHS


def _body_paragraph_max_words(config: dict) -> int:
    raw = config.get("stage_3", {}).get("body_paragraph", {}).get("max_words", 120)
    try:
        return max(20, int(raw))
    except (TypeError, ValueError):
        return 120


def _normalize_body_paragraphs(body: Any, body_count: int) -> list[str]:
    """Preserve paragraph slots — never collapse the list when a paragraph is empty."""
    items = [str(item) for item in body] if isinstance(body, list) else []
    normalized = [_fix_paragraph_spacing(item) for item in items[:body_count]]
    while len(normalized) < body_count:
        normalized.append("")
    return normalized


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


def _fix_paragraph_spacing(text: str) -> str:
    result = polish_text(text)
    result = re.sub(r"\.([A-Z])", r". \1", result)
    result = re.sub(r"\s{2,}", " ", result)
    return result.strip()


_SALUTATION_RE = re.compile(r"^\s*dear\s+[^,.:;\n]{1,60}[,.:;]\s*", re.IGNORECASE)


def _strip_salutation(text: str) -> str:
    """The template renders 'Dear <addressee>,' — remove any salutation the model baked into prose."""
    return _SALUTATION_RE.sub("", str(text)).strip()


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


def _infer_company_name(stage1_entry: dict[str, Any], application: dict) -> str:
    for key in ("company", "company_name", "employer", "organization"):
        value = application.get(key)
        if value and str(value).strip():
            return str(value).strip()

    summary = str(stage1_entry.get("context", {}).get("company_summary", "")).strip()
    if "|" in summary:
        return summary.split("|")[0].strip()
    lower = summary.lower()
    if " is " in lower:
        return summary[: lower.index(" is ")].strip()
    if summary:
        return summary.split(".")[0].strip()[:100]

    slug = str(stage1_entry.get("source_slug", "")).strip()
    return slug.replace("_", " ").title() if slug else "Company"


def _build_sign_off(profile: dict) -> str:
    name = str(profile.get("contact", {}).get("name", "")).strip()
    return f"Sincerely,\n{name}" if name else "Sincerely,"


def _letter_date() -> str:
    return datetime.now(UTC).strftime("%Y-%m-%d")


def _stage1_block(stage1: dict[str, Any], app_key: str) -> dict[str, Any]:
    block = stage1.get(app_key)
    if not isinstance(block, dict):
        raise ValueError(f"Missing {app_key} in stage_1.json — run stage_1.py first")
    return block


def _stage2_block(stage2: dict[str, Any], app_key: str) -> dict[str, Any]:
    block = stage2.get(app_key)
    if not isinstance(block, dict):
        raise ValueError(f"Missing {app_key} in stage_2.json — run stage_2.py first")
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


def _resume_draft(stage2_entry: dict[str, Any]) -> dict[str, Any]:
    keys = (
        "executive_summary",
        "education",
        "work_experience",
        "projects",
        "skills",
        "achievements",
        "certifications",
        "interests",
        "claims_to_avoid",
        "gaps_addressed",
        "claims_ledger",
    )
    return {key: stage2_entry[key] for key in keys if key in stage2_entry}


def _letter_guidance_block(
    claims_to_avoid: list[str],
    gaps_addressed: list[str],
    claims_ledger: dict[str, dict[str, Any]] | None = None,
) -> dict[str, Any]:
    block: dict[str, Any] = {
        "letter_guidance": {
            "claims_to_avoid": claims_to_avoid,
            "gaps_addressed": gaps_addressed,
        "rules": [
                "Never state or imply anything in claims_to_avoid.",
                "Use gaps_addressed phrasing when acknowledging weaknesses — do not invent new gap language.",
            ],
        },
    }
    if claims_ledger:
        block["letter_guidance"]["claims_ledger"] = claims_ledger
        block["letter_guidance"]["ledger_rules"] = [
            "Stay consistent with claims_ledger canonical_framing — do not drift from the CV wording.",
            "Never use forbidden_phrases from claims_ledger.",
        ]
    return block


def _letter_guidance_from_content(content: dict[str, Any]) -> dict[str, Any]:
    claims = content.get("claims_to_avoid", [])
    gaps = content.get("gaps_addressed", [])
    ledger = content.get("claims_ledger", {})
    if not isinstance(claims, list):
        claims = []
    if not isinstance(gaps, list):
        gaps = []
    if not isinstance(ledger, dict):
        ledger = {}
    return _letter_guidance_block(claims, gaps, ledger)


def _letter_prose_snapshot(content: dict[str, Any], body_count: int) -> dict[str, Any]:
    return {
        "opening_paragraph": str(content.get("opening_paragraph", "")).strip(),
        "body_paragraphs": _normalize_body_paragraphs(content.get("body_paragraphs", []), body_count),
        "closing_paragraph": str(content.get("closing_paragraph", "")).strip(),
    }


def _apply_letter_prose(content: dict[str, Any], prose: dict[str, Any], body_count: int) -> None:
    content["opening_paragraph"] = _fix_paragraph_spacing(
        _strip_salutation(str(prose.get("opening_paragraph", "")))
    )
    content["body_paragraphs"] = _normalize_body_paragraphs(prose.get("body_paragraphs", []), body_count)
    content["closing_paragraph"] = _fix_paragraph_spacing(str(prose.get("closing_paragraph", "")))


def _parse_smooth_gap_response(raw: str) -> str:
    text = str(raw).strip()
    text = re.sub(r"^(?:SMOOTHED|PARAGRAPH|BODY(?:_\d+)?)\s*:\s*", "", text, flags=re.IGNORECASE)
    return _fix_paragraph_spacing(text)


def smooth_gap_paragraph(
    config: dict,
    app_key: str,
    raw_gap_text: str,
    gaps_addressed: list[str],
    max_words: int,
    strengths: list[str] | None = None,
) -> str:
    """Rewrite a stitched gap-disclosure block into one cohesive paragraph."""
    draft = _fix_paragraph_spacing(raw_gap_text)
    if not draft or not _honesty_settings(config).get("smooth_gap_paragraph", True):
        return draft

    if draft.lower().count("i want to be upfront") < 2 and count_words(draft) <= max_words:
        return draft

    prompt = {
        "task": (
            "Rewrite draft_gap_paragraph into one smooth gap-disclosure paragraph "
            "that preserves every limitation in gaps_to_preserve."
        ),
        "draft_gap_paragraph": draft,
        "gaps_to_preserve": [str(item).strip() for item in gaps_addressed if str(item).strip()],
        "word_limit": {
            "max_words": max_words,
            "rule": f"Hard limit: {max_words} words.",
        },
        "reply_format": "Plain text only — the paragraph itself, no label or commentary.",
    }
    if strengths:
        prompt["strengths_context"] = [str(item).strip() for item in strengths if str(item).strip()][:2]
    try:
        raw = _call_loop(
            config,
            app_key,
            "smooth gap disclosure paragraph",
            LOOP_SMOOTH_GAP_SYSTEM,
            prompt,
            options=generation_options(config, "creative"),
        )
        smoothed = _parse_smooth_gap_response(raw)
        if count_words(smoothed) >= 12:
            smoothed, _ = enforce_max_words(smoothed, max_words)
            print("  letter_prose: smoothed gap disclosure paragraph", file=sys.stderr)
            return smoothed
    except Exception as exc:
        print(f"  warning: gap paragraph smooth failed: {exc}", file=sys.stderr)
    return draft


def _finalize_letter_prose(
    prose: dict[str, Any],
    config: dict,
    gaps_addressed: list[str],
    body_count: int,
    *,
    app_key: str | None = None,
    strengths: list[str] | None = None,
) -> dict[str, Any]:
    max_words = _body_paragraph_max_words(config)
    opening = _strip_salutation(str(prose.get("opening_paragraph", "")).strip())
    body = _normalize_body_paragraphs(prose.get("body_paragraphs", []), body_count)
    closing = str(prose.get("closing_paragraph", "")).strip()

    honesty = _honesty_settings(config)
    letter_gaps = _gaps_for_letter(config, gaps_addressed)
    if honesty["deterministic_gap_paragraph"] and letter_gaps:
        gap_index = honesty["gap_paragraph_index"]
        if 1 <= gap_index <= len(body):
            gap_text = _fix_paragraph_spacing(" ".join(letter_gaps))
            if app_key:
                gap_text = smooth_gap_paragraph(
                    config, app_key, gap_text, letter_gaps, max_words, strengths=strengths
                )
            gap_text, was_trimmed = enforce_max_words(gap_text, max_words)
            if was_trimmed:
                print(
                    f"  letter_prose: deterministic gap paragraph trimmed to "
                    f"{count_words(gap_text)}/{max_words} words",
                    file=sys.stderr,
                )
            body[gap_index - 1] = gap_text
            print("  letter_prose: applied deterministic gap disclosure paragraph", file=sys.stderr)

    trimmed_body: list[str] = []
    for index, paragraph in enumerate(body, start=1):
        text, was_trimmed = enforce_max_words(paragraph, max_words)
        if was_trimmed:
            print(
                f"  letter_prose: body paragraph {index} trimmed to "
                f"{count_words(text)}/{max_words} words",
                file=sys.stderr,
            )
        trimmed_body.append(text)

    return {
        "opening_paragraph": _fix_paragraph_spacing(opening),
        "body_paragraphs": trimmed_body,
        "closing_paragraph": _fix_paragraph_spacing(closing),
    }


def loop_letter_prose(
    config: dict,
    app_key: str,
    stage1_entry: dict[str, Any],
    application: dict,
    profile: dict,
    stage2_entry: dict[str, Any],
    keyword_pool: KeywordPool,
    body_count: int,
    letter_guidance: dict[str, Any],
    gaps_addressed: list[str],
    improvement: dict[str, Any] | None = None,
) -> dict[str, Any]:
    max_words = _body_paragraph_max_words(config)
    prior = improvement.get("prior_draft") if isinstance(improvement, dict) else None
    prior_prose = prior if isinstance(prior, dict) else {}

    prompt = _prompt_with_improvement(
        {
            "task": (
                f"Write the complete cover letter prose: opening, {body_count} body paragraph(s), "
                "and closing — as one cohesive letter."
            ),
            "total_paragraphs": body_count,
            "word_limit": {
                "max_words": max_words,
                "rule": f"Each body paragraph: hard limit of {max_words} words.",
            },
            "tailoring": _tailoring_context(stage1_entry, application),
            "fit_review": stage2_entry.get("fit_review", {}),
            "resume_draft": _resume_draft(stage2_entry),
            "cross_document_note": (
                "resume_draft and claims_manifest are the source of truth from stage_2. "
                "Do not contradict claims_to_avoid or overstate beyond gaps_addressed honesty level."
            ),
        "candidate_cv": profile_for_prompt(profile),
            **letter_guidance,
            **keyword_prompt_block(keyword_pool),
            "reply_format": (
                f"Plain text: OPENING, BODY_1..BODY_{body_count}, CLOSING labeled sections — see system prompt."
            ),
        },
        improvement,
    )
    if prior_prose:
        prompt["prior_letter_prose"] = prior_prose

    loop_name = "loop letter_prose"
    if isinstance(improvement, dict) and improvement.get("parser_issues"):
        loop_name = "loop letter_prose (parser fix)"
    elif isinstance(improvement, dict) and improvement.get("reviewer_feedback"):
        loop_name = "loop letter_prose (quality rewrite)"

    raw = _call_loop(
        config,
        app_key,
        loop_name,
        LOOP_LETTER_PROSE_SYSTEM,
        prompt,
        options=generation_options(config, "creative"),
    )
    prose = parse_letter_prose(raw, body_count)
    strengths = coerce_llm_string_list(stage2_entry.get("fit_review", {}), "strengths")
    prose = _finalize_letter_prose(
        prose, config, gaps_addressed, body_count, app_key=app_key, strengths=strengths
    )
    guidance = letter_guidance.get("letter_guidance", {})
    temp = {
        **prose,
        "claims_to_avoid": guidance.get("claims_to_avoid", []),
        "claims_ledger": guidance.get("claims_ledger", {}),
    }
    if strip_letter_claim_violations(temp, body_count, skip_body_indices=_gap_paragraph_skip_index(config)):
        prose = {
            "opening_paragraph": temp["opening_paragraph"],
            "body_paragraphs": temp["body_paragraphs"],
            "closing_paragraph": temp["closing_paragraph"],
        }

    blob = " ".join(
        [prose["opening_paragraph"], *prose["body_paragraphs"], prose["closing_paragraph"]]
    )
    used = keyword_pool.deduct_from_text(blob)
    if used:
        print(f"  keywords used (letter_prose): {', '.join(used)}", file=sys.stderr)
    return prose


def regenerate_letter_prose(
    config: dict,
    app_key: str,
    stage1_entry: dict[str, Any],
    application: dict,
    profile: dict,
    stage2_entry: dict[str, Any],
    content: dict[str, Any],
    keyword_pool: KeywordPool,
    body_count: int,
    improvement: dict[str, Any] | None = None,
) -> None:
    gaps_addressed = content.get("gaps_addressed", [])
    if not isinstance(gaps_addressed, list):
        gaps_addressed = []
    prose = loop_letter_prose(
        config,
        app_key,
        stage1_entry,
        application,
        profile,
        stage2_entry,
        keyword_pool,
        body_count,
        _letter_guidance_from_content(content),
        gaps_addressed,
        improvement,
    )
    _apply_letter_prose(content, prose, body_count)


def _call_loop(
    config: dict,
    app_key: str,
    loop_name: str,
    system: str,
    prompt: dict[str, Any],
    *,
    options: dict[str, Any] | None = None,
) -> str:
    print(f"Stage 3 — {app_key}: {loop_name} ...", file=sys.stderr)
    return call_ollama(
        config,
        _messages(
            system,
            (
                f"Stage 3 {loop_name} for {app_key}.\n"
                f"{json.dumps(prompt, indent=2, ensure_ascii=False)}\n\n"
                f"{PLAIN_TEXT_REPLY}"
            ),
        ),
        options=options,
    )


def build_static_letter_fields(
    stage1_entry: dict[str, Any],
    stage2_entry: dict[str, Any],
    application: dict,
    profile: dict,
) -> dict[str, Any]:
    role_title = str(stage1_entry.get("title", application.get("title", ""))).strip()
    company_name = _infer_company_name(stage1_entry, application)
    subject_line = f"Application — {role_title} at {company_name}" if company_name else f"Application — {role_title}"

    return {
        "fit_review": dict(stage2_entry.get("fit_review", {})),
        "addressee": "Hiring Manager",
        "company_name": company_name,
        "role_title": role_title,
        "subject_line": subject_line,
        "date": _letter_date(),
        "sign_off": _build_sign_off(profile),
    }


def loop_claims_to_avoid(
    config: dict,
    app_key: str,
    stage2_entry: dict[str, Any],
    improvement: dict[str, Any] | None = None,
) -> list[str]:
    gaps = coerce_llm_string_list(stage2_entry.get("fit_review", {}), "gaps")
    if not gaps:
        return []

    prompt = _prompt_with_improvement(
        {
            "task": "List claims the letter must not make based on fit_review gaps.",
            "gaps": gaps,
            "fit_review": stage2_entry.get("fit_review", {}),
            "reply_format": "One short phrase per line, same order as gaps. Empty line = no claim to avoid.",
        },
        improvement,
    )
    raw = _call_loop(
        config,
        app_key,
        "loop 1 claims_to_avoid",
        LOOP_CLAIMS_SYSTEM,
        prompt,
        options=generation_options(config, "precise"),
    )
    claims = polish_bullets(parse_ordered_lines(raw, len(gaps)))
    return [c for c in claims if c] if any(c for c in claims) else gaps


def loop_gaps_addressed(
    config: dict,
    app_key: str,
    stage2_entry: dict[str, Any],
    profile: dict,
    claims_to_avoid: list[str],
    improvement: dict[str, Any] | None = None,
) -> list[str]:
    gaps = coerce_llm_string_list(stage2_entry.get("fit_review", {}), "gaps")
    if not gaps:
        return []

    prompt = _prompt_with_improvement(
        {
            "task": "Write honest gap-addressing sentences for the letter.",
        "gaps": gaps,
            "claims_to_avoid": claims_to_avoid,
            "fit_review": stage2_entry.get("fit_review", {}),
        "candidate_cv": profile_for_prompt(profile),
            "reply_format": "One honest first-person sentence per line, same order as gaps. Empty line = skip.",
        },
        improvement,
    )
    raw = _call_loop(
        config,
        app_key,
        "loop 2 gaps_addressed",
        LOOP_GAPS_SYSTEM,
        prompt,
        options=generation_options(config, "precise"),
    )
    addressed = parse_ordered_lines(raw, len(gaps))
    return [
        _fix_paragraph_spacing(str(item))
        for item in addressed[: len(gaps)]
        if _fix_paragraph_spacing(str(item))
    ]


def polish_letter_output(content: dict[str, Any], body_count: int | None = None) -> dict[str, Any]:
    if "opening_paragraph" in content:
        content["opening_paragraph"] = _fix_paragraph_spacing(
            _strip_salutation(str(content.get("opening_paragraph", "")))
        )
    if isinstance(content.get("body_paragraphs"), list):
        count = body_count if body_count is not None else len(content["body_paragraphs"])
        content["body_paragraphs"] = _normalize_body_paragraphs(content["body_paragraphs"], max(1, count))
    if "closing_paragraph" in content:
        content["closing_paragraph"] = _fix_paragraph_spacing(str(content.get("closing_paragraph", "")))
    if isinstance(content.get("gaps_addressed"), list):
        content["gaps_addressed"] = polish_bullets(content["gaps_addressed"])
    if isinstance(content.get("claims_to_avoid"), list):
        content["claims_to_avoid"] = polish_bullets(content["claims_to_avoid"])
    return content


_GARBLED_VALUE_PHRASE = re.compile(
    r"\bvalue of (?!(?:the|a|an)\b)[\w]+(?:\s+[\w]+){1,4}\b",
    re.IGNORECASE,
)


def _paragraph_opener(text: str, words: int = 8) -> str:
    tokens = re.findall(r"\w+(?:'\w+)?", str(text).lower())
    return " ".join(tokens[:words])


def _scan_paragraph_redundancy(body: list[str]) -> list[str]:
    issues: list[str] = []
    if not isinstance(body, list) or len(body) < 2:
        return issues
    openers = [_paragraph_opener(paragraph) for paragraph in body]
    for index in range(len(openers)):
        for later in range(index + 1, len(openers)):
            left, right = openers[index], openers[later]
            if not left or not right:
                continue
            if left == right or (len(left) > 20 and (left in right or right in left)):
                issues.append(
                    f"body_paragraphs[{index}] and [{later}] open with redundant claims "
                    f'("{left[:60]}")'
                )
    return issues


def _scan_garbled_keyword_phrases(text: str) -> list[str]:
    issues: list[str] = []
    for match in _GARBLED_VALUE_PHRASE.finditer(str(text)):
        issues.append(
            f'garbled keyword insertion: "{match.group(0)}" — '
            "rephrase company values as grammatical English, not raw JD fragments"
        )
    return issues


def parse_letter_issues(
    content: dict[str, Any],
    body_count: int,
    has_gaps: bool,
    max_body_words: int = 0,
    style_check: bool = True,
    config: dict | None = None,
) -> dict[str, list[str]]:
    issues_by_section: dict[str, list[str]] = {}

    opening = content.get("opening_paragraph", "")
    if _is_empty_field(opening):
        issues_by_section["opening_paragraph"] = ["opening_paragraph is empty"]
    else:
        garbled = _scan_garbled_keyword_phrases(str(opening))
        if garbled:
            issues_by_section["opening_paragraph"] = garbled

    body = content.get("body_paragraphs", [])
    body_issues: list[str] = []
    if not isinstance(body, list) or len(body) < body_count:
        body_issues.append(f"body_paragraphs has fewer than {body_count} paragraphs")
    elif isinstance(body, list):
        for index, paragraph in enumerate(body):
            if _is_empty_field(paragraph):
                body_issues.append(f"body_paragraphs[{index}] is empty")
            elif max_body_words > 0 and count_words(str(paragraph)) > max_body_words:
                body_issues.append(
                    f"body_paragraphs[{index}] exceeds {max_body_words} words "
                    f"({count_words(str(paragraph))} words)"
                )
            else:
                body_issues.extend(_scan_garbled_keyword_phrases(str(paragraph)))
        body_issues.extend(_scan_paragraph_redundancy(body))
    if body_issues:
        issues_by_section["body_paragraphs"] = body_issues

    closing = content.get("closing_paragraph", "")
    if _is_empty_field(closing):
        issues_by_section["closing_paragraph"] = ["closing_paragraph is empty"]
    else:
        garbled = _scan_garbled_keyword_phrases(str(closing))
        if garbled:
            issues_by_section["closing_paragraph"] = garbled

    if has_gaps:
        gaps_addressed = content.get("gaps_addressed", [])
        if not isinstance(gaps_addressed, list) or _is_empty_field(gaps_addressed):
            issues_by_section["gaps_addressed"] = ["gaps_addressed is empty but fit_review has gaps"]

    claims = content.get("claims_to_avoid", [])
    ledger = content.get("claims_ledger", {})
    if isinstance(claims, list) and claims:
        for section, text in (
            ("opening_paragraph", content.get("opening_paragraph", "")),
            ("closing_paragraph", content.get("closing_paragraph", "")),
        ):
            violations = find_claim_violations(str(text), claims)
            if isinstance(ledger, dict):
                violations.extend(find_ledger_violations(str(text), ledger))
            if violations:
                issues_by_section.setdefault(section, []).extend(violations)
        body = content.get("body_paragraphs", [])
        if isinstance(body, list):
            skip = _gap_paragraph_skip_index(config) if config else set()
            for index, paragraph in enumerate(body):
                if index in skip:
                    continue
                violations = find_claim_violations(str(paragraph), claims)
                if isinstance(ledger, dict):
                    violations.extend(find_ledger_violations(str(paragraph), ledger))
                if violations:
                    issues_by_section.setdefault("body_paragraphs", []).extend(violations)

    if style_check:
        style_issues = scan_letter_style(content)
        if style_issues:
            issues_by_section["_document_style"] = style_issues

    return issues_by_section


def _build_parser_review(
    issues_by_section: dict[str, list[str]],
) -> dict[str, dict[str, Any]]:
    review: dict[str, dict[str, Any]] = {}
    prose_issues = _prose_parser_issues(issues_by_section)
    review[LETTER_PROSE_SECTION] = {"ok": not prose_issues, "issues": prose_issues}
    gap_issues = issues_by_section.get("gaps_addressed", [])
    if gap_issues:
        review["gaps_addressed"] = {"ok": False, "issues": gap_issues}
    return review


def _letter_style_regen_targets(issues_by_section: dict[str, list[str]]) -> list[str]:
    del issues_by_section
    return [LETTER_PROSE_SECTION]


def _letter_sections_for_review(content: dict[str, Any], body_count: int) -> dict[str, Any]:
    return {LETTER_PROSE_SECTION: _letter_prose_snapshot(content, body_count)}


def _sections_to_rate(
    letter_sections: dict[str, Any],
    locked_sections: dict[str, dict[str, Any]],
) -> dict[str, Any]:
    rated: dict[str, Any] = {}
    for key, value in letter_sections.items():
        if key not in locked_sections:
            rated[key] = value
    return rated


def _merge_quality_review(
    locked_sections: dict[str, dict[str, Any]],
    fresh_review: dict[str, dict[str, Any]],
) -> dict[str, dict[str, Any]]:
    merged: dict[str, dict[str, Any]] = {}
    for section in VERIFIED_SECTIONS:
        if section in locked_sections:
            merged[section] = {**locked_sections[section], "locked": True}
        elif section in fresh_review:
            merged[section] = dict(fresh_review[section])
    return merged


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


def _try_lock_sections(
    content: dict[str, Any],
    quality_review: dict[str, dict[str, Any]],
    locked_sections: dict[str, dict[str, Any]],
    min_quality: int,
    body_count: int,
    has_gaps: bool,
    config: dict,
    max_body_words: int = 0,
) -> None:
    parser_issues = parse_letter_issues(
        _content_without_meta(content), body_count, has_gaps, max_body_words, config=config
    )
    prose_blocked = bool(_prose_parser_issues(parser_issues))
    for section, result in quality_review.items():
        if section in locked_sections:
            continue
        if int(result.get("quality", 0)) < min_quality:
            continue
        if section == LETTER_PROSE_SECTION and prose_blocked:
            continue
        if parser_issues.get(section):
            continue
        locked_sections[section] = {
            "quality": int(result["quality"]),
            "feedback": result.get("feedback", ""),
        }
        print(f"  lock {section} at {result['quality']}/10 (LLM + parser approved)", file=sys.stderr)


def _expected_review_keys(sections_to_rate: dict[str, Any]) -> set[str]:
    return set(sections_to_rate.keys())


def _gap_paragraph_skip_index(config: dict) -> set[int]:
    honesty = _honesty_settings(config)
    if not honesty["deterministic_gap_paragraph"]:
        return set()
    gap_index = honesty["gap_paragraph_index"]
    if gap_index < 1:
        return set()
    return {gap_index - 1}


def _paragraph_needs_rewrite(paragraph: str, min_words: int = 18) -> bool:
    return not str(paragraph).strip() or count_words(str(paragraph)) < min_words


def _resolve_claim_violations_in_letter(
    config: dict,
    app_key: str,
    stage1_entry: dict[str, Any],
    application: dict,
    profile: dict,
    stage2_entry: dict[str, Any],
    content: dict[str, Any],
    keyword_pool: KeywordPool,
    body_count: int,
) -> bool:
    """
    On forbidden-claim parser hits: strip offending sentences, then rewrite the letter if needed.
    Never raises — used instead of failing the parser gate for claim phrasing drift.
    """
    if not letter_has_claim_violations(content):
        return False

    print(f"Stage 3 — {app_key}: resolving forbidden claim phrasing in letter prose", file=sys.stderr)
    skip = _gap_paragraph_skip_index(config)
    if strip_letter_claim_violations(content, body_count, skip_body_indices=skip):
        print(f"  stripped sentence(s) echoing claims_to_avoid", file=sys.stderr)

    if _apply_deterministic_letter_autofix(config, app_key, content, body_count):
        return not letter_has_claim_violations(content)

    body = _normalize_body_paragraphs(content.get("body_paragraphs", []), body_count)
    needs_rewrite = (
        letter_has_claim_violations(content)
        or _paragraph_needs_rewrite(str(content.get("opening_paragraph", "")))
        or _paragraph_needs_rewrite(str(content.get("closing_paragraph", "")))
        or any(_paragraph_needs_rewrite(str(p)) for p in body)
    )
    if not needs_rewrite:
        return True

    print(f"Stage 3 — {app_key}: rewriting letter prose after claim strip", file=sys.stderr)
    regenerate_letter_prose(
        config,
        app_key,
        stage1_entry,
        application,
        profile,
        stage2_entry,
        content,
        keyword_pool,
        body_count,
        {
            "prior_draft": _letter_prose_snapshot(content, body_count),
            "parser_issues": [
                "Letter must not quote claims_to_avoid or gap labels verbatim.",
                "Acknowledge gaps only via gaps_addressed phrasing — stay honest without repeating forbidden claim strings.",
            ],
            "instruction": (
                "Rewrite the full letter. Remove any line that restates claims_to_avoid literally. "
                "Keep gap honesty using gaps_addressed tone, not the raw gap text."
            ),
        },
    )
    return not letter_has_claim_violations(content)


def _prose_parser_issues(parser_issues: dict[str, list[str]]) -> list[str]:
    issues: list[str] = []
    for key in (*PARSER_SECTIONS, "_document_style"):
        issues.extend(parser_issues.get(key, []))
    return issues


def verify_letter(
    config: dict,
    app_key: str,
    stage1_entry: dict[str, Any],
    application: dict,
    profile: dict,
    stage2_entry: dict[str, Any],
    content: dict[str, Any],
    body_count: int,
    locked_sections: dict[str, dict[str, Any]] | None = None,
) -> dict[str, dict[str, Any]]:
    locked_sections = locked_sections or {}
    letter_sections = _letter_sections_for_review(content, body_count)
    sections_to_rate = _sections_to_rate(letter_sections, locked_sections)
    expected_keys = _expected_review_keys(sections_to_rate)

    fresh_review: dict[str, dict[str, Any]] = {}
    if sections_to_rate:
        prompt = {
            "task": "Rate each cover letter section and provide improvement feedback.",
            "job_description": application_text(application),
            "job_title": stage1_entry.get("title", application.get("title", "")),
            "job_context": stage1_entry.get("context", {}),
            "candidate_cv": profile_for_prompt(profile),
            "resume_draft": _resume_draft(stage2_entry),
            "cross_document_note": (
                "resume_draft and claims_manifest are the source of truth from stage_2. "
                "Do not contradict claims_to_avoid or overstate beyond gaps_addressed honesty level."
            ),
            "claims_to_avoid": content.get("claims_to_avoid", []),
            "letter_sections": sections_to_rate,
            "already_approved_sections": list(locked_sections.keys()),
            "note": (
                "Rate letter_prose as one unit — opening, all body paragraphs, and closing together. "
                "Do not re-score already_approved_sections."
            ),
            "reply_format": (
                "Plain text: one [section_name] block per letter_sections entry with "
                "QUALITY: <1-10> and FEEDBACK: <text> — see system prompt."
            ),
            "sections_to_rate": list(sections_to_rate.keys()),
        }
        for attempt in range(2):
            raw = _call_loop(
                config,
                app_key,
                "verification quality review",
                VERIFICATION_SYSTEM,
                prompt,
                options=generation_options(config, "precise"),
            )
            fresh_review = parse_quality_review(raw, list(sections_to_rate.keys()))

            if expected_keys <= set(fresh_review.keys()):
                break
            if attempt == 0:
                print(
                    f"  warning: incomplete quality review for {app_key}; retrying",
                    file=sys.stderr,
                )
                continue
            for key in expected_keys:
                fresh_review.setdefault(
                    key,
                    {
                        "quality": 5,
                        "feedback": "Verification response could not be parsed; manual review recommended.",
                    },
                )
            print(
                f"  warning: using fallback quality scores for {app_key}",
                file=sys.stderr,
            )
    elif locked_sections:
        print(f"Stage 3 — {app_key}: all letter sections locked — skipping LLM verification", file=sys.stderr)

    return _merge_quality_review(locked_sections, fresh_review)


def run_letter_section(
    section: str,
    config: dict,
    app_key: str,
    stage1_entry: dict[str, Any],
    application: dict,
    profile: dict,
    stage2_entry: dict[str, Any],
    content: dict[str, Any],
    keyword_pool: KeywordPool,
    body_count: int,
    improvement: dict[str, Any] | None = None,
    only_body_indices: list[int] | None = None,
) -> Any:
    del only_body_indices  # whole-letter regen only
    claims = content.get("claims_to_avoid", [])
    if not isinstance(claims, list):
        claims = []

    if section in (LETTER_PROSE_SECTION, "opening_paragraph", "body_paragraphs", "closing_paragraph", "_document_style"):
        if isinstance(improvement, dict) and "prior_draft" not in improvement:
            improvement = {
                **improvement,
                "prior_draft": _letter_prose_snapshot(content, body_count),
            }
        regenerate_letter_prose(
        config,
            app_key,
            stage1_entry,
            application,
            profile,
            stage2_entry,
            content,
            keyword_pool,
            body_count,
            improvement,
        )
        return _letter_prose_snapshot(content, body_count)
    if section == "gaps_addressed":
        return loop_gaps_addressed(config, app_key, stage2_entry, profile, claims, improvement)
    if section == "claims_to_avoid":
        return loop_claims_to_avoid(config, app_key, stage2_entry, improvement)
    raise ValueError(f"Unknown letter section: {section}")


def verify_and_refine_letter(
    config: dict,
    app_key: str,
    stage1_entry: dict[str, Any],
    application: dict,
    profile: dict,
    stage2_entry: dict[str, Any],
    content: dict[str, Any],
    master_keywords: list[str],
    body_count: int,
    has_gaps: bool,
) -> dict[str, Any]:
    settings = _verification_settings(config)
    if not settings.get("enabled", True):
        return content

    min_quality = int(settings.get("min_quality", 7))
    max_passes = int(settings.get("max_passes", 3))
    max_body_words = _body_paragraph_max_words(config)
    locked_sections: dict[str, dict[str, Any]] = {}
    feedback_history: dict[str, list[str]] = {}

    quality_review = verify_letter(
        config, app_key, stage1_entry, application, profile, stage2_entry, content, body_count, locked_sections
    )
    _try_lock_sections(
        content, quality_review, locked_sections, min_quality, body_count, has_gaps, config, max_body_words
    )
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
            f"Stage 3 — {app_key}: refinement pass {refine_pass}/{max_passes} — {', '.join(failing)}",
            file=sys.stderr,
        )
        for section in failing:
            locked_sections.pop(section, None)
            keyword_pool = KeywordPool(master_keywords)
            keyword_pool.reset()
            improvement = build_quality_improvement_block(
                LETTER_PROSE_SECTION,
                _letter_prose_snapshot(content, body_count),
                feedback_history.get(section, []),
                extra_rules=(
                    "Keep only facts from candidate_cv and resume_draft. "
                    "Maintain consistency across opening, body, and closing."
                ),
            )
            regenerate_letter_prose(
            config,
                app_key,
                stage1_entry,
                application,
            profile,
                stage2_entry,
                content,
                keyword_pool,
                body_count,
                improvement,
            )

        meta = {key: content[key] for key in META_CONTENT_KEYS if key in content}
        content.update(polish_letter_output(_content_without_meta(content), body_count))
        content.update(meta)

        quality_review = verify_letter(
            config, app_key, stage1_entry, application, profile, stage2_entry, content, body_count, locked_sections
        )
        _try_lock_sections(
            content, quality_review, locked_sections, min_quality, body_count, has_gaps, config, max_body_words
        )
        _log_quality_review(app_key, quality_review, locked_sections)

        for section in _failing_sections(quality_review, min_quality, locked_sections):
            record_reviewer_feedback(
                feedback_history, section, quality_review[section].get("feedback", "")
            )

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


def parser_verify_and_regenerate_letter(
    config: dict,
    app_key: str,
    stage1_entry: dict[str, Any],
    application: dict,
    profile: dict,
    stage2_entry: dict[str, Any],
    content: dict[str, Any],
    master_keywords: list[str],
    body_count: int,
    has_gaps: bool,
) -> dict[str, Any]:
    settings = _parser_verification_settings(config)
    if not settings.get("enabled", True):
        return content

    max_passes = int(settings.get("max_passes", 2))
    max_body_words = _body_paragraph_max_words(config)
    style_check = _style_verification_enabled(config)
    scan_content = _content_without_meta(content)
    parser_issue_history: dict[str, list[str]] = {}

    for pass_num in range(1, max_passes + 1):
        issues_by_section = parse_letter_issues(
            scan_content, body_count, has_gaps, max_body_words, style_check=style_check, config=config
        )
        if not issues_by_section:
            print(f"Stage 3 — {app_key}: parser verification passed", file=sys.stderr)
            content["parser_review"] = _build_parser_review({})
            return content

        for section, issues in issues_by_section.items():
            print(f"  parser {app_key}/{section}: {'; '.join(issues)}", file=sys.stderr)
        print(
            f"Stage 3 — {app_key}: parser pass {pass_num}/{max_passes} — "
            f"regenerating letter prose",
            file=sys.stderr,
        )

        prose_issues = _prose_parser_issues(issues_by_section)
        if prose_issues:
            autofix_handled = False
            if _parser_autofix_enabled(config):
                _apply_deterministic_letter_autofix(config, app_key, content, body_count, aggressive=True)
                meta = {key: content[key] for key in META_CONTENT_KEYS if key in content}
                content.update(polish_letter_output(_content_without_meta(content), body_count))
                content.update(meta)
                scan_content = _content_without_meta(content)
                if not _prose_parser_issues(
                    parse_letter_issues(
                        scan_content,
                        body_count,
                        has_gaps,
                        max_body_words,
                        style_check=style_check,
                        config=config,
                    )
                ):
                    print(f"Stage 3 — {app_key}: parser issues cleared by auto-fix", file=sys.stderr)
                    autofix_handled = True
            if autofix_handled:
                continue

            claim_only = all(
                "forbidden claim" in issue.lower() or "claims_ledger" in issue.lower()
                for issue in prose_issues
            )
            if claim_only:
                keyword_pool = KeywordPool(master_keywords)
                keyword_pool.reset()
                _resolve_claim_violations_in_letter(
                    config,
                    app_key,
                    stage1_entry,
                    application,
                    profile,
                    stage2_entry,
                    content,
                    keyword_pool,
                    body_count,
                )
                meta = {key: content[key] for key in META_CONTENT_KEYS if key in content}
                content.update(polish_letter_output(_content_without_meta(content), body_count))
                content.update(meta)
                scan_content = _content_without_meta(content)
                continue

            keyword_pool = KeywordPool(master_keywords)
            keyword_pool.reset()
            improvement = build_parser_improvement_block(
                LETTER_PROSE_SECTION,
                _letter_prose_snapshot(content, body_count),
                prose_issues,
                issue_history=parser_issue_history.get(LETTER_PROSE_SECTION, []),
                extra_rules="All required fields must be non-empty. Use only CV and resume_draft facts.",
            )
            regenerate_letter_prose(
                config,
                app_key,
                stage1_entry,
                application,
                profile,
                stage2_entry,
                content,
                keyword_pool,
                body_count,
                improvement,
            )
            record_parser_issues(parser_issue_history, LETTER_PROSE_SECTION, prose_issues)
        elif "gaps_addressed" in issues_by_section:
            keyword_pool = KeywordPool(master_keywords)
            keyword_pool.reset()
            gap_issues = issues_by_section["gaps_addressed"]
            content["gaps_addressed"] = run_letter_section(
                "gaps_addressed",
                config,
                app_key,
                stage1_entry,
                application,
                profile,
                stage2_entry,
                content,
                keyword_pool,
                body_count,
                build_parser_improvement_block(
                    "gaps_addressed",
                    content.get("gaps_addressed"),
                    gap_issues,
                    issue_history=parser_issue_history.get("gaps_addressed", []),
                    extra_rules="All required fields must be non-empty. Use only CV and resume_draft facts.",
                ),
            )
            record_parser_issues(parser_issue_history, "gaps_addressed", gap_issues)

        meta = {key: content[key] for key in META_CONTENT_KEYS if key in content}
        content.update(polish_letter_output(_content_without_meta(content), body_count))
        content.update(meta)
        scan_content = _content_without_meta(content)

    unresolved = parse_letter_issues(
        scan_content, body_count, has_gaps, max_body_words, style_check=style_check, config=config
    )
    if unresolved and _prose_parser_issues(unresolved) and _parser_autofix_enabled(config):
        _apply_deterministic_letter_autofix(config, app_key, content, body_count, aggressive=True)
        meta = {key: content[key] for key in META_CONTENT_KEYS if key in content}
        content.update(polish_letter_output(_content_without_meta(content), body_count))
        content.update(meta)
        scan_content = _content_without_meta(content)
        unresolved = parse_letter_issues(
            scan_content, body_count, has_gaps, max_body_words, style_check=style_check, config=config
        )

    if unresolved and _prose_parser_issues(unresolved):
        claim_only = all(
            "forbidden claim" in issue.lower() or "claims_ledger" in issue.lower()
            for issue in _prose_parser_issues(unresolved)
        )
        if claim_only and letter_has_claim_violations(content):
            keyword_pool = KeywordPool(master_keywords)
            keyword_pool.reset()
            _resolve_claim_violations_in_letter(
                config,
                app_key,
                stage1_entry,
                application,
                profile,
                stage2_entry,
                content,
                keyword_pool,
                body_count,
            )
            meta = {key: content[key] for key in META_CONTENT_KEYS if key in content}
            content.update(polish_letter_output(_content_without_meta(content), body_count))
            content.update(meta)
            scan_content = _content_without_meta(content)
            unresolved = parse_letter_issues(
                scan_content, body_count, has_gaps, max_body_words, style_check=style_check, config=config
            )

    content["parser_review"] = _build_parser_review(unresolved)
    if unresolved:
        print(
            f"Stage 3 — {app_key}: parser verification finished with unresolved issues "
            f"after {max_passes} pass(es)",
            file=sys.stderr,
        )
    enforce_parser_gate(
        app_key,
        content.get("parser_review"),
        stage_label="Stage 3",
        fail_on_unresolved=fail_on_unresolved_enabled(config, "stage_3"),
        failure_report_path=default_failure_report_path(),
    )
    return content


def _generate_letter_content(
    config: dict,
    app_key: str,
    stage1_entry: dict[str, Any],
    application: dict,
    profile: dict,
    stage2_entry: dict[str, Any],
) -> tuple[dict[str, Any], list[str], int, bool]:
    master_keywords = build_master_keywords(stage1_entry.get("resume_keywords", {}), config)
    keyword_pool = KeywordPool(master_keywords)
    body_count = _body_paragraph_count(config)

    static_fields = build_static_letter_fields(stage1_entry, stage2_entry, application, profile)
    has_gaps = bool(coerce_llm_string_list(stage2_entry.get("fit_review", {}), "gaps"))

    claims_to_avoid, gaps_addressed, claims_ledger = _resolve_shared_claims(config, stage2_entry, profile)
    letter_guidance = _letter_guidance_block(claims_to_avoid, gaps_addressed, claims_ledger)

    prose = loop_letter_prose(
        config,
        app_key,
        stage1_entry,
        application,
        profile,
        stage2_entry,
        keyword_pool,
        body_count,
        letter_guidance,
        gaps_addressed,
    )

    content = polish_letter_output(
        {
            **static_fields,
            "claims_to_avoid": claims_to_avoid,
            "gaps_addressed": gaps_addressed,
            "claims_ledger": claims_ledger,
            "opening_paragraph": prose["opening_paragraph"],
            "body_paragraphs": prose["body_paragraphs"],
            "closing_paragraph": prose["closing_paragraph"],
        },
        body_count,
    )
    return content, master_keywords, body_count, has_gaps


def process_application(
    config: dict,
    app_key: str,
    stage1_entry: dict[str, Any],
    application: dict,
    profile: dict,
    stage2_entry: dict[str, Any],
) -> dict[str, Any]:
    content, master_keywords, body_count, has_gaps = _generate_letter_content(
        config, app_key, stage1_entry, application, profile, stage2_entry
    )
    content = verify_and_refine_letter(
        config, app_key, stage1_entry, application, profile, stage2_entry,
        content, master_keywords, body_count, has_gaps,
    )
    return parser_verify_and_regenerate_letter(
        config, app_key, stage1_entry, application, profile, stage2_entry,
        content, master_keywords, body_count, has_gaps,
    )


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


def _build_header(config: dict, stage1_path: Path, stage2_path: Path) -> dict[str, Any]:
    header = build_payload_header(config)
    header["sources"] = {
        **build_sources(config),
        "stage_1": str(stage1_path),
        "stage_2": str(stage2_path),
    }
    return header


def run(config_path: Path = CONFIG_PATH) -> dict[str, Any]:
    config = load_config(config_path)

    apps_path = resolve_path(config, "applications", "json", "applications/local_applications.json")
    profile_path = resolve_path(config, "profile", "json", "settings/local_profile.json")
    stage1_path = resolve_output_path(config, "stage_1", STAGE_1_DEFAULT)
    stage2_path = resolve_output_path(config, "stage_2", STAGE_2_DEFAULT)
    out_path = resolve_output_path(config, "stage_3", STAGE_3_DEFAULT)

    try:
        applications = load_json(apps_path)
        profile = sanitize_profile(load_json(profile_path))
        stage1 = load_json(stage1_path)
        stage2 = load_json(stage2_path)

        if not applications:
            raise ValueError(f"No applications found in {apps_path}")
        if not profile:
            raise ValueError(f"No profile found in {profile_path}")
        if not stage1:
            raise ValueError(f"Run stage_1.py first — missing {stage1_path}")
        if not stage2:
            raise ValueError(f"Run stage_2.py first — missing {stage2_path}")

        static_header = build_letter_header(profile)
        header = _build_header(config, stage1_path, stage2_path)
        existing = _load_existing(out_path)

        slug_to_application = dict(applications.items())
        updates: dict[str, Any] = {}

        for index, app_key, slug, application in iter_applications(applications):
            try:
                stage1_entry = _stage1_block(stage1, app_key)
                stage2_entry = _stage2_block(stage2, app_key)
            except ValueError as exc:
                print(f"Warning: {exc}", file=sys.stderr)
                continue

            if stage1_entry.get("source_slug") and stage1_entry["source_slug"] != slug:
                application = slug_to_application.get(stage1_entry["source_slug"], application)

            updates[app_key] = process_application(
                config, app_key, stage1_entry, application, profile, stage2_entry
            )

        payload = _merge_payload(existing, header, static_header, updates)
        payload["pipeline_status"] = "OK"
        export_json(payload, out_path)
        clear_pipeline_failure_report(default_failure_report_path())
        return payload
    finally:
        terminate_ollama(config)


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
    print(f"Stage 3 complete: {app_count} application(s) -> {STAGE_3_DEFAULT}")


if __name__ == "__main__":
    main()
