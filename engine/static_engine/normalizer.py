"""Normalize stage_2 / stage_3 JSON into template-friendly context objects."""

from __future__ import annotations

import re
from typing import Any

_TECHNICAL_SKILL_MARKERS = (
    "python",
    "javascript",
    "typescript",
    "java",
    "react",
    "fastapi",
    "node",
    "aws",
    "azure",
    "docker",
    "kubernetes",
    "linux",
    "bash",
    "sql",
    "git",
    "api",
    "html",
    "css",
    "c++",
    "c#",
    "go",
    "rust",
    "ruby",
    "php",
    "metasploit",
    "burp",
    "nmap",
    "wireshark",
    "kali",
    "splunk",
    "flask",
    "django",
    "spring",
    "terraform",
    "ansible",
)


def _is_technical_skill(term: str) -> bool:
    lower = str(term).lower().strip()
    if not lower:
        return False
    for marker in _TECHNICAL_SKILL_MARKERS:
        if lower == marker or re.search(rf"\b{re.escape(marker)}\b", lower):
            return True
    return False


def _dedupe_preserve_order(items: list[str]) -> list[str]:
    seen: set[str] = set()
    ordered: list[str] = []
    for item in items:
        key = item.lower()
        if key in seen:
            continue
        seen.add(key)
        ordered.append(item)
    return ordered


def _sort_dict_items(data: Any) -> list[dict[str, Any]]:
    if not isinstance(data, dict):
        return []
    items: list[dict[str, Any]] = []
    for key in sorted(data.keys()):
        value = data[key]
        if isinstance(value, dict):
            items.append(dict(value))
    return items


def _format_month(value: str) -> str:
    text = str(value or "").strip()
    if not text:
        return ""
    match = re.fullmatch(r"(\d{4})-(\d{2})", text)
    if not match:
        return text
    year, month = match.groups()
    month_names = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ]
    try:
        return f"{month_names[int(month) - 1]} {year}"
    except (ValueError, IndexError):
        return text


def _format_date_range(start: str, end: str) -> str:
    start_text = _format_month(start)
    end_text = _format_month(end)
    if start_text and end_text:
        return f"{start_text} - {end_text}"
    if start_text:
        return f"{start_text} - Present" if not end_text else start_text
    return end_text


def _display_url(url: str) -> str:
    """Human-readable link text: strip scheme, www, and trailing slash."""
    text = str(url).strip()
    text = re.sub(r"^https?://", "", text)
    text = re.sub(r"^www\.", "", text)
    return text.rstrip("/")


def _contact_block(header: dict[str, Any]) -> dict[str, str]:
    first = str(header.get("first_name", "")).strip()
    last = str(header.get("last_name", "")).strip()
    name = f"{first} {last}".strip()
    linkedin = str(header.get("linkedin", "")).strip()
    github = str(header.get("github", "")).strip()
    portfolio = str(header.get("portfolio", "")).strip()
    return {
        "name": name,
        "first_name": first,
        "last_name": last,
        "email": str(header.get("email", "")).strip(),
        "phone": str(header.get("contact", "")).strip(),
        "linkedin": linkedin,
        "linkedin_display": _display_url(linkedin),
        "github": github,
        "github_display": _display_url(github),
        "portfolio": portfolio,
        "portfolio_display": _display_url(portfolio),
        "address": str(header.get("address", "")).strip(),
    }


def _languages_inline(header: dict[str, Any]) -> str:
    languages = header.get("languages", {})
    parts: list[str] = []
    for item in _sort_dict_items(languages):
        name = str(item.get("name", "")).strip()
        level = str(item.get("level", "")).strip()
        if not name:
            continue
        parts.append(f"{name} ({level})" if level else name)
    return ", ".join(parts)


def _degree_line(item: dict[str, Any]) -> str:
    degree = str(item.get("degree", "")).strip()
    field = str(item.get("field", "")).strip()
    if degree and field:
        return f"{degree}, {field}"
    return degree or field


def _cert_issuer(name: str, description: str, issuer: str = "") -> str:
    explicit = str(issuer or "").strip()
    if explicit:
        return explicit
    if description and len(description) < 80:
        return description
    match = re.search(r"\(([^)]+)\)\s*$", name)
    if match:
        return match.group(1).strip()
    if " — " in name:
        return name.split(" — ", 1)[1].strip()
    return ""


def _cert_title(name: str) -> str:
    title = re.sub(r"\s*\([^)]+\)\s*$", "", name).strip()
    if " — " in title:
        return title.split(" — ", 1)[0].strip()
    return title


def _infer_headline(work_experience: list[dict[str, Any]]) -> str:
    for job in work_experience:
        title = str(job.get("title", "")).strip()
        if title:
            return title
    return ""


def _clean_inline_list(text: str) -> str:
    """Normalize cramped comma/paren spacing: 'A(B,C)' -> 'A (B, C)'."""
    if not text:
        return ""
    result = re.sub(r"\s*,\s*", ", ", text)
    result = re.sub(r"(\w)\(", r"\1 (", result)
    result = re.sub(r"\(\s+", "(", result)
    result = re.sub(r"\s+\)", ")", result)
    return re.sub(r"\s{2,}", " ", result).strip()


def build_cv_context(header: dict[str, Any], application: dict[str, Any]) -> dict[str, Any]:
    skills: list[dict[str, Any]] = []
    raw_skills = application.get("skills", {})
    technical_entries: list[str] = []
    soft_entries: list[str] = []
    if isinstance(raw_skills, dict):
        for category, values in raw_skills.items():
            if not isinstance(values, list):
                continue
            cleaned = [str(value).strip() for value in values if str(value).strip()]
            if not cleaned:
                continue
            label = str(category).strip()
            skills.append({"label": label, "entries": cleaned})
            for value in cleaned:
                if _is_technical_skill(value):
                    technical_entries.append(value)
                elif "soft" in label.lower():
                    soft_entries.append(value)
                else:
                    technical_entries.append(value)

    technical_entries = _dedupe_preserve_order(technical_entries)
    soft_entries = _dedupe_preserve_order(
        [item for item in soft_entries if not _is_technical_skill(item)]
    )

    degree_parts: list[dict[str, str]] = []
    for item in _sort_dict_items(header.get("education", {})):
        degree_line = _degree_line(item)
        lead, _, rest = degree_line.partition(" ")
        degree_parts.append(
            {
                "school": str(item.get("school", "")).strip(),
                "degree_lead": lead,
                "degree_rest": rest.strip(),
                "degree_line": degree_line,
                "dates": _format_date_range(str(item.get("start_date", "")), str(item.get("end_date", ""))),
                "courses": _clean_inline_list(str(item.get("courses", "")).strip()),
                "gpa": str(item.get("cgpa", item.get("gpa", ""))).strip(),
            }
        )

    education = degree_parts

    work_experience: list[dict[str, Any]] = []
    for item in _sort_dict_items(application.get("work_experience", {})):
        points = item.get("points", [])
        if not isinstance(points, list):
            points = []
        location = str(item.get("location", "")).strip()
        company = str(item.get("company", "")).strip()
        company_line = company
        if location:
            company_line = f"{company} | {location}" if company else location
        work_experience.append(
            {
                "title": str(item.get("title", "")).strip(),
                "company_line": company_line,
                "dates": _format_date_range(str(item.get("start_date", "")), str(item.get("end_date", ""))),
                "points": [str(point).strip() for point in points if str(point).strip()],
            }
        )

    projects: list[dict[str, Any]] = []
    for item in _sort_dict_items(application.get("projects", {})):
        projects.append(
            {
                "title": str(item.get("title", "")).strip(),
                "description": str(item.get("description", "")).strip(),
                "dates": _format_date_range(str(item.get("start_date", "")), str(item.get("end_date", ""))),
            }
        )

    volunteer: list[dict[str, Any]] = []
    for item in _sort_dict_items(application.get("volunteer_experience", {})):
        points = item.get("points", [])
        description = str(item.get("description", "")).strip()
        if isinstance(points, list) and points:
            description = " ".join(str(point).strip() for point in points if str(point).strip())
        volunteer.append(
            {
                "title": str(item.get("title", "")).strip(),
                "organization": str(item.get("company", item.get("organization", ""))).strip(),
                "dates": _format_date_range(str(item.get("start_date", "")), str(item.get("end_date", ""))),
                "points": [str(point).strip() for point in points if str(point).strip()]
                if isinstance(points, list)
                else [],
                "description": description,
            }
        )

    certifications: list[dict[str, Any]] = []
    for item in _sort_dict_items(application.get("certifications", {})):
        name = str(item.get("name", "")).strip()
        description = str(item.get("description", "")).strip()
        issuer_field = str(item.get("issuer", "")).strip()
        certifications.append(
            {
                "title": name,
                "issuer": issuer_field,
                "description": description,
                "date": _format_month(str(item.get("date", ""))),
            }
        )

    achievements: list[dict[str, Any]] = []
    for item in _sort_dict_items(application.get("achievements", {})):
        name = str(item.get("name", "")).strip()
        if not name:
            continue
        achievements.append(
            {
                "title": name,
                "description": str(item.get("description", "")).strip(),
                "date": _format_month(str(item.get("date", ""))),
            }
        )

    interests = application.get("interests", [])
    if not isinstance(interests, list):
        interests = []

    # The headline is the strongest ATS job-title-match signal — prefer the target role.
    headline = str(application.get("role_title", "")).strip() or _infer_headline(work_experience)

    return {
        "contact": _contact_block(header),
        "headline": headline,
        "summary": str(application.get("executive_summary", "")).strip(),
        "work_experience": work_experience,
        "projects": projects,
        "volunteer": volunteer,
        "skills": skills,
        "technical_skills": ", ".join(technical_entries),
        "soft_skills": ", ".join(soft_entries),
        "education": education,
        "languages": _languages_inline(header),
        "certifications": certifications,
        "achievements": achievements,
        "interests": ", ".join(str(item).strip() for item in interests if str(item).strip()),
    }


def build_cover_letter_context(header: dict[str, Any], application: dict[str, Any]) -> dict[str, Any]:
    sign_off = str(application.get("sign_off", "")).strip()
    sign_off_lines = [line.strip() for line in sign_off.splitlines() if line.strip()]

    body = application.get("body_paragraphs", [])
    if not isinstance(body, list):
        body = []

    return {
        "contact": _contact_block(header),
        "addressee": str(application.get("addressee", "Hiring Manager")).strip(),
        "company_name": str(application.get("company_name", "")).strip(),
        "role_title": str(application.get("role_title", "")).strip(),
        "subject_line": str(application.get("subject_line", "")).strip(),
        "date": str(application.get("date", "")).strip(),
        "opening_paragraph": str(application.get("opening_paragraph", "")).strip(),
        "body_paragraphs": [str(item).strip() for item in body if str(item).strip()],
        "closing_paragraph": str(application.get("closing_paragraph", "")).strip(),
        "sign_off_lines": sign_off_lines,
    }
