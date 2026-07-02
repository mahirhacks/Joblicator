"""Document-wide style and redundancy checks — separate from content-quality scoring."""

from __future__ import annotations

import re
from typing import Any

_OPENER_WORDS = 3

_BANNED_REPEAT_PATTERNS: list[tuple[re.Pattern[str], str]] = [
    (re.compile(r"\bi am eager to\b", re.IGNORECASE), "I am eager to"),
    (re.compile(r"\bi am excited to\b", re.IGNORECASE), "I am excited to"),
    (re.compile(r"\bi am passionate about\b", re.IGNORECASE), "I am passionate about"),
    (re.compile(r"\bmy aws certified\b", re.IGNORECASE), "My AWS Certified"),
    (re.compile(r"\bas a cybersecurity researcher\b", re.IGNORECASE), "As a cybersecurity researcher"),
]


def _three_word_opener(text: str) -> str:
    tokens = re.findall(r"\w+(?:'\w+)?", str(text).lower())
    return " ".join(tokens[:_OPENER_WORDS])


def _paragraph_chunks(text: str) -> list[str]:
    chunks = [part.strip() for part in re.split(r"\n\s*\n", str(text)) if part.strip()]
    if len(chunks) <= 1 and len(text) > 200:
        chunks = [s.strip() for s in re.split(r"(?<=[.!?])\s+", text) if len(s.strip()) > 40]
    return chunks if chunks else ([text.strip()] if text.strip() else [])


def scan_style_issues(segments: list[tuple[str, str]]) -> list[str]:
    """
    segments: (label, text) pairs from across the document.
    Flags shared 3-word openers and repeated sentence patterns.
    """
    issues: list[str] = []
    opener_index: dict[str, str] = {}
    pattern_hits: dict[str, list[str]] = {}

    for label, text in segments:
        if not str(text).strip():
            continue
        for chunk in _paragraph_chunks(str(text)):
            opener = _three_word_opener(chunk)
            if len(opener.split()) >= 3:
                if opener in opener_index and opener_index[opener] != label:
                    issues.append(
                        f"style: {label} and {opener_index[opener]} share 3-word opener '{opener}'"
                    )
                else:
                    opener_index[opener] = label
            for pattern, label_name in _BANNED_REPEAT_PATTERNS:
                if pattern.search(chunk):
                    pattern_hits.setdefault(label_name, []).append(label)

    for pattern_name, labels in pattern_hits.items():
        unique = sorted(set(labels))
        if len(unique) > 1 or len(labels) > 1:
            issues.append(
                f"style: phrase pattern '{pattern_name}' repeats across: {', '.join(unique)}"
            )

    return issues


def collect_cv_style_segments(content: dict[str, Any]) -> list[tuple[str, str]]:
    segments: list[tuple[str, str]] = []
    summary = str(content.get("executive_summary", "")).strip()
    if summary:
        segments.append(("executive_summary", summary))

    work = content.get("work_experience", {})
    if isinstance(work, dict):
        for key, entry in work.items():
            if not isinstance(entry, dict):
                continue
            points = entry.get("points", [])
            if isinstance(points, list):
                blob = " ".join(str(p) for p in points if str(p).strip())
                if blob:
                    segments.append((f"work_experience/{key}", blob))

    projects = content.get("projects", {})
    if isinstance(projects, dict):
        for key, entry in projects.items():
            if isinstance(entry, dict):
                desc = str(entry.get("description", "")).strip()
                if desc:
                    segments.append((f"projects/{key}", desc))

    achievements = content.get("achievements", {})
    if isinstance(achievements, dict):
        for key, entry in achievements.items():
            if isinstance(entry, dict):
                desc = str(entry.get("description", "")).strip()
                if desc:
                    segments.append((f"achievements/{key}", desc))

    return segments


def collect_letter_style_segments(content: dict[str, Any]) -> list[tuple[str, str]]:
    segments: list[tuple[str, str]] = []
    for key in ("opening_paragraph", "closing_paragraph"):
        text = str(content.get(key, "")).strip()
        if text:
            segments.append((key, text))
    body = content.get("body_paragraphs", [])
    if isinstance(body, list):
        for index, paragraph in enumerate(body):
            text = str(paragraph).strip()
            if text:
                segments.append((f"body_paragraphs[{index}]", text))
    return segments


def scan_cv_style(content: dict[str, Any]) -> list[str]:
    return scan_style_issues(collect_cv_style_segments(content))


def scan_letter_style(content: dict[str, Any]) -> list[str]:
    return scan_style_issues(collect_letter_style_segments(content))
