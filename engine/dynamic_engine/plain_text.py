"""Parse plain-text LLM responses into structured data — models never emit JSON."""

from __future__ import annotations

import re
from typing import Any

_THINKING = re.compile(
    r"<" + "redacted_thinking" + r">[\s\S]*?</" + "redacted_thinking" + r">",
    re.IGNORECASE,
)
_FENCE = re.compile(r"^```(?:\w+)?\s*|\s*```$", re.MULTILINE)
_BULLET_PREFIX = re.compile(r"^[\s]*(?:[-*•]|\d+[.)])\s+")


def clean_raw(text: str) -> str:
    text = _THINKING.sub("", text or "")
    text = _FENCE.sub("", text.strip())
    return text.strip()


def parse_comma_list(text: str, *, max_items: int | None = None) -> list[str]:
    """Keywords or short items: comma-separated and/or one per line."""
    text = clean_raw(text)
    if not text:
        return []

    parts: list[str] = []
    if "\n" in text:
        for line in text.splitlines():
            line = line.strip()
            if not line or line.startswith("#"):
                continue
            if "," in line:
                parts.extend(p.strip() for p in line.split(",") if p.strip())
            else:
                parts.append(_BULLET_PREFIX.sub("", line).strip())
    else:
        parts = [p.strip() for p in text.split(",") if p.strip()]

    seen: set[str] = set()
    result: list[str] = []
    for item in parts:
        key = item.lower()
        if item and key not in seen:
            seen.add(key)
            result.append(item)
        if max_items is not None and len(result) >= max_items:
            break
    return result


def parse_line_list(text: str, *, max_items: int | None = None) -> list[str]:
    text = clean_raw(text)
    if not text:
        return []
    items: list[str] = []
    for line in text.splitlines():
        line = _BULLET_PREFIX.sub("", line.strip()).strip()
        if line and not line.endswith(":"):
            items.append(line)
        if max_items is not None and len(items) >= max_items:
            break
    return items


_SECTION_BOUNDARY = re.compile(r"^[A-Z][A-Z0-9_ ]+\s*:", re.MULTILINE)


def _section_text(text: str, label: str) -> str:
    pattern = re.compile(
        rf"^{re.escape(label)}\s*:?\s*\n?(.*?)(?={_SECTION_BOUNDARY.pattern}|\Z)",
        re.IGNORECASE | re.MULTILINE | re.DOTALL,
    )
    match = pattern.search(clean_raw(text))
    return match.group(1).strip() if match else ""


def _section_lines(text: str, label: str) -> list[str]:
    block = _section_text(text, label)
    if not block:
        return []
    if "," in block and "\n" not in block.strip():
        return parse_comma_list(block)
    return parse_line_list(block)


def _numbered_requirements(items: list[str]) -> dict[str, str]:
    return {f"requirement_{index}": item for index, item in enumerate(items, start=1) if item}


def parse_stage1_context(raw: str) -> dict[str, Any]:
    text = clean_raw(raw)
    company = _section_text(text, "COMPANY_SUMMARY")
    role = _section_text(text, "ROLE_SUMMARY")
    work_mode_raw = _section_text(text, "WORK_MODE").strip().lower()
    work_modes = {"onsite", "hybrid", "remote", "unknown"}
    work_mode = work_mode_raw if work_mode_raw in work_modes else "unknown"
    if not work_mode_raw:
        for token in work_modes:
            if re.search(rf"\b{token}\b", text, re.IGNORECASE):
                work_mode = token
                break

    must = _section_lines(text, "MUST_HAVE")
    nice = _section_lines(text, "NICE_TO_HAVE")
    if not must:
        must = parse_comma_list(_section_text(text, "MUST_HAVE"))
    if not nice:
        nice = parse_comma_list(_section_text(text, "NICE_TO_HAVE"))

    return {
        "company_summary": company,
        "role_summary": role,
        "work_mode": work_mode,
        "must_have": _numbered_requirements(must),
        "nice_to_have": _numbered_requirements(nice),
    }


def parse_keyword_variants(
    raw: str,
    resume_keywords: dict[str, list[str]],
) -> dict[str, dict[str, list[str]]]:
    text = clean_raw(raw)
    result: dict[str, dict[str, list[str]]] = {}

    for section_key, base_keywords in resume_keywords.items():
        section_pattern = re.compile(
            rf"\[{re.escape(section_key)}\]\s*\n(.*?)(?=\n\[|\Z)",
            re.IGNORECASE | re.DOTALL,
        )
        match = section_pattern.search(text)
        block = match.group(1).strip() if match else ""
        if not block and len(resume_keywords) == 1:
            block = text

        variants: dict[str, list[str]] = {}
        for line in block.splitlines():
            line = line.strip()
            if not line or "|" not in line:
                continue
            pieces = [p.strip() for p in line.split("|") if p.strip()]
            if len(pieces) < 2:
                continue
            source = pieces[0]
            alts = pieces[1:3]
            if alts:
                variants[source] = alts

        if variants:
            result[section_key] = variants

    return result


def parse_fit_review(raw: str) -> dict[str, Any]:
    text = clean_raw(raw)
    score_raw = _section_text(text, "FIT_SCORE") or _section_text(text, "SCORE")
    try:
        fit_score = int(re.search(r"\d+", score_raw or text).group()) if re.search(r"\d+", score_raw or text) else 0
    except (AttributeError, ValueError):
        fit_score = 0
    fit_score = max(1, min(10, fit_score)) if fit_score else 0

    return {
        "fit_score": fit_score,
        "fit_summary": _section_text(text, "FIT_SUMMARY"),
        "strengths": _section_lines(text, "STRENGTHS") or parse_comma_list(_section_text(text, "STRENGTHS")),
        "gaps": _section_lines(text, "GAPS") or parse_comma_list(_section_text(text, "GAPS")),
    }


def parse_plain_paragraph(raw: str) -> str:
    text = clean_raw(raw)
    for label in ("EXECUTIVE_SUMMARY", "SUMMARY", "PARAGRAPH", "TEXT"):
        block = _section_text(text, label)
        if block:
            return block
    return text


def parse_labeled_fields(raw: str, labels: tuple[str, ...]) -> dict[str, str]:
    text = clean_raw(raw)
    out: dict[str, str] = {}
    for label in labels:
        out[label.lower()] = _section_text(text, label)
    return out


def parse_work_experience_entry(raw: str, fallback: dict[str, Any]) -> dict[str, Any]:
    fields = parse_labeled_fields(
        raw,
        ("TITLE", "COMPANY", "EMPLOYER", "START_DATE", "END_DATE"),
    )
    bullets_block = _section_text(raw, "BULLETS") or _section_text(raw, "POINTS")
    points = parse_line_list(bullets_block) if bullets_block else parse_line_list(clean_raw(raw))

    return {
        "title": fields.get("title") or str(fallback.get("position", "")),
        "company": fields.get("company") or fields.get("employer") or str(fallback.get("company", "")),
        "start_date": fields.get("start_date") or str(fallback.get("startDate", "")),
        "end_date": fields.get("end_date") or str(fallback.get("endDate", "")),
        "points": points,
    }


def parse_project_entry(raw: str, fallback: dict[str, Any]) -> dict[str, Any]:
    fields = parse_labeled_fields(raw, ("TITLE", "DESCRIPTION", "START_DATE", "END_DATE"))
    tech = _section_text(raw, "TECH_STACK")
    return {
        "title": fields.get("title") or str(fallback.get("name", "")),
        "description": fields.get("description") or str(fallback.get("description", "")),
        "start_date": fields.get("start_date") or str(fallback.get("startDate", "")),
        "end_date": fields.get("end_date") or str(fallback.get("endDate", "")),
        "tech_stack": parse_comma_list(tech) if tech else [],
    }


def parse_skills_domains(raw: str) -> list[dict[str, Any]]:
    text = clean_raw(raw)
    skills: list[dict[str, Any]] = []
    for line in text.splitlines():
        line = line.strip()
        if not line or ":" not in line:
            continue
        domain, _, subs = line.partition(":")
        domain = domain.strip()
        sub_skills = parse_comma_list(subs.strip())
        if domain and sub_skills:
            skills.append({"domain": domain, "sub_skills": sub_skills})
    return skills


def parse_achievement_entry(raw: str, fallback: dict[str, Any]) -> dict[str, str]:
    fields = parse_labeled_fields(raw, ("NAME", "DESCRIPTION", "DATE"))
    if not any(fields.values()):
        text = clean_raw(raw)
        lines = [ln.strip() for ln in text.splitlines() if ln.strip()]
        if lines:
            fields["name"] = lines[0]
        if len(lines) > 1:
            fields["description"] = " ".join(lines[1:-1]) if len(lines) > 2 else lines[1]
        if len(lines) > 2:
            fields["date"] = lines[-1]
    return {
        "name": fields.get("name") or str(fallback.get("name", "")),
        "description": fields.get("description") or str(fallback.get("description", "")),
        "date": fields.get("date") or str(fallback.get("date", "")),
    }


def _parse_record_blocks(raw: str, field_names: tuple[str, ...]) -> list[dict[str, str]]:
    text = clean_raw(raw)
    blocks = re.split(r"\n---+\n", text) if "---" in text else [text]
    records: list[dict[str, str]] = []
    for block in blocks:
        block = block.strip()
        if not block:
            continue
        record = {name.lower(): _section_text(block, name) for name in field_names}
        if any(record.values()):
            records.append(record)
    return records


def parse_certifications(raw: str) -> list[dict[str, str]]:
    records = _parse_record_blocks(raw, ("NAME", "ISSUER", "DESCRIPTION", "DATE", "URL"))
    if not records:
        return []
    return [
        {
            "name": r.get("name", ""),
            "issuer": r.get("issuer", ""),
            "description": r.get("description", ""),
            "date": r.get("date", ""),
            "url": r.get("url", ""),
        }
        for r in records
        if r.get("name")
    ]


def parse_volunteer(raw: str) -> list[dict[str, str]]:
    records = _parse_record_blocks(
        raw, ("ORGANIZATION", "ROLE", "START_DATE", "END_DATE", "DESCRIPTION")
    )
    return [
        {
            "organization": r.get("organization", ""),
            "role": r.get("role", ""),
            "start_date": r.get("start_date", ""),
            "end_date": r.get("end_date", ""),
            "description": r.get("description", ""),
        }
        for r in records
        if r.get("organization") or r.get("role")
    ]


def parse_ordered_lines(raw: str, expected_count: int) -> list[str]:
    """One output line per input item; blank lines are preserved."""
    text = clean_raw(raw)
    lines = [line.strip() for line in text.splitlines()]
    if not lines and expected_count:
        return [""] * expected_count
    while len(lines) < expected_count:
        lines.append("")
    return lines[:expected_count]


def parse_quality_review(raw: str, expected_sections: list[str]) -> dict[str, dict[str, Any]]:
    text = clean_raw(raw)
    review: dict[str, dict[str, Any]] = {}

    for section in expected_sections:
        section_pattern = re.compile(
            rf"\[{re.escape(section)}\]\s*\n(.*?)(?=\n\[|\Z)",
            re.IGNORECASE | re.DOTALL,
        )
        match = section_pattern.search(text)
        block = match.group(1).strip() if match else ""
        if not block:
            continue
        quality_raw = ""
        q_match = re.search(r"QUALITY\s*:?\s*(\d+)", block, re.IGNORECASE)
        if q_match:
            quality_raw = q_match.group(1)
        feedback = ""
        f_match = re.search(r"FEEDBACK\s*:?\s*(.*)", block, re.IGNORECASE | re.DOTALL)
        if f_match:
            feedback = f_match.group(1).strip()
        try:
            quality = int(quality_raw)
        except (TypeError, ValueError):
            quality = 5
        review[section] = {
            "quality": max(1, min(10, quality)),
            "feedback": feedback,
        }
    return review


def parse_letter_prose(raw: str, body_count: int) -> dict[str, Any]:
    text = clean_raw(raw)
    opening = _section_text(text, "OPENING") or _section_text(text, "OPENING_PARAGRAPH")
    closing = _section_text(text, "CLOSING") or _section_text(text, "CLOSING_PARAGRAPH")

    body: list[str] = []
    for index in range(1, body_count + 1):
        para = _section_text(text, f"BODY_{index}") or _section_text(text, f"BODY_PARAGRAPH_{index}")
        if para:
            body.append(para)

    if not body:
        body_block = _section_text(text, "BODY") or _section_text(text, "BODY_PARAGRAPHS")
        if body_block:
            chunks = re.split(r"\n\s*\n", body_block.strip())
            body = [c.strip() for c in chunks if c.strip()]

    while len(body) < body_count:
        body.append("")
    body = body[:body_count]

    if not opening and not closing and not any(body):
        chunks = [c.strip() for c in re.split(r"\n\s*\n", text) if c.strip()]
        if len(chunks) >= 2 + body_count:
            opening = chunks[0]
            body = chunks[1 : 1 + body_count]
            closing = chunks[1 + body_count] if len(chunks) > 1 + body_count else ""

    return {
        "opening_paragraph": opening,
        "body_paragraphs": body,
        "closing_paragraph": closing,
    }


PLAIN_TEXT_REPLY = (
    "Reply in plain text only, using exactly the output format and all writing rules "
    "in the system prompt. No JSON, no markdown code fences, no commentary, no preamble."
)
