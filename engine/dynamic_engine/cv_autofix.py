"""Deterministic CV style repairs — no LLM required."""

from __future__ import annotations

import re
from typing import Any

from style_validator import collect_cv_style_segments, scan_cv_style

_VERB_ALTERNATES: tuple[tuple[re.Pattern[str], tuple[str, ...]], ...] = (
    (re.compile(r"^Performed\b", re.I), ("Conducted", "Executed", "Completed", "Led")),
    (re.compile(r"^Developed\b", re.I), ("Built", "Engineered", "Designed", "Created")),
    (re.compile(r"^Implemented\b", re.I), ("Deployed", "Established", "Delivered", "Built")),
    (re.compile(r"^Engineered\b", re.I), ("Built", "Developed", "Designed", "Implemented")),
    (re.compile(r"^Conducted\b", re.I), ("Performed", "Led", "Executed", "Completed")),
    (re.compile(r"^Built\b", re.I), ("Developed", "Engineered", "Created", "Implemented")),
    (re.compile(r"^Designed\b", re.I), ("Architected", "Built", "Developed", "Engineered")),
    (re.compile(r"^Established\b", re.I), ("Configured", "Deployed", "Built", "Implemented")),
    (re.compile(r"^Identified\b", re.I), ("Discovered", "Detected", "Uncovered", "Flagged")),
    (re.compile(r"^Delivered\b", re.I), ("Provided", "Supplied", "Presented", "Issued")),
    (re.compile(r"^Applied\b", re.I), ("Used", "Utilized", "Leveraged", "Employed")),
)

_LEADING_ADVERBS = ("Routinely", "Consistently", "Directly", "Successfully", "Actively", "Hands-on")


def _three_word_opener(text: str) -> str:
    tokens = re.findall(r"\w+(?:'\w+)?", str(text).lower())
    return " ".join(tokens[:3])


def _split_sentences(text: str) -> list[str]:
    parts = re.split(r"(?<=[.!?])\s+", str(text).strip())
    return [part.strip() for part in parts if part.strip()]


def _paragraph_chunks(text: str) -> list[str]:
    chunks = [part.strip() for part in re.split(r"\n\s*\n", str(text)) if part.strip()]
    if len(chunks) <= 1 and len(text) > 200:
        chunks = [s.strip() for s in re.split(r"(?<=[.!?])\s+", text) if len(s.strip()) > 40]
    return chunks if chunks else ([text.strip()] if text.strip() else [])


def _cv_section_order(label: str) -> int:
    if label == "executive_summary":
        return 0
    if label.startswith("work_experience/"):
        return 10
    if label.startswith("projects/"):
        return 20
    if label.startswith("achievements/"):
        return 30
    return 50


def _vary_cv_opener(text: str, variant: int) -> str:
    sentences = _split_sentences(text)
    if not sentences:
        return text

    first = sentences[0]
    for pattern, alts in _VERB_ALTERNATES:
        match = pattern.match(first)
        if match:
            replacement = alts[variant % len(alts)]
            new_first = f"{replacement}{first[match.end():]}"
            if len(sentences) == 1:
                return new_first
            return " ".join([new_first, *sentences[1:]])

    tokens = first.split()
    if tokens and tokens[0][0].isupper():
        adv = _LEADING_ADVERBS[variant % len(_LEADING_ADVERBS)]
        rest = " ".join(tokens[1:])
        new_first = f"{adv} {tokens[0].lower()} {rest}".strip()
        if not new_first.endswith((".", "!", "?")):
            new_first += "."
        if len(sentences) == 1:
            return new_first
        return " ".join([new_first, *sentences[1:]])
    return text


def _segment_kind(label: str) -> tuple[str, str]:
    if label == "executive_summary":
        return ("summary", "")
    match = re.match(r"work_experience/(.+)", label)
    if match:
        return ("work_bullet", match.group(1))
    match = re.match(r"projects/(.+)", label)
    if match:
        return ("project", match.group(1))
    match = re.match(r"achievements/(.+)", label)
    if match:
        return ("achievement", match.group(1))
    return ("", "")


def _get_cv_text(content: dict[str, Any], label: str) -> str:
    kind, key = _segment_kind(label)
    if kind == "summary":
        return str(content.get("executive_summary", ""))
    if kind == "work_bullet":
        work = content.get("work_experience", {})
        if isinstance(work, dict):
            entry = work.get(key, {})
            if isinstance(entry, dict):
                points = entry.get("points", [])
                if isinstance(points, list) and points:
                    return str(points[0])
        return ""
    if kind in ("project", "achievement"):
        section = "projects" if kind == "project" else "achievements"
        entries = content.get(section, {})
        if isinstance(entries, dict):
            entry = entries.get(key, {})
            if isinstance(entry, dict):
                return str(entry.get("description", ""))
    return ""


def _set_cv_text(content: dict[str, Any], label: str, text: str) -> None:
    kind, key = _segment_kind(label)
    cleaned = text.strip()
    if not kind or not cleaned:
        return

    if kind == "summary":
        content["executive_summary"] = cleaned
        return

    if kind == "work_bullet":
        work = content.get("work_experience", {})
        if not isinstance(work, dict) or key not in work:
            return
        entry = work[key]
        if not isinstance(entry, dict):
            return
        points = entry.get("points", [])
        if not isinstance(points, list) or not points:
            return
        points[0] = cleaned
        entry["points"] = points
        work[key] = entry
        content["work_experience"] = work
        return

    section = "projects" if kind == "project" else "achievements"
    entries = content.get(section, {})
    if not isinstance(entries, dict) or key not in entries:
        return
    entry = entries[key]
    if not isinstance(entry, dict):
        return
    entry["description"] = cleaned
    entries[key] = entry
    content[section] = entries


def fix_cv_opener_collisions(content: dict[str, Any]) -> bool:
    """Rewrite later CV sections that share a 3-word opener with an earlier one."""
    changed = False

    for variant in range(len(_VERB_ALTERNATES) + len(_LEADING_ADVERBS)):
        segments = collect_cv_style_segments(content)
        seen: dict[str, str] = {}
        to_fix: dict[str, int] = {}

        for label, text in segments:
            for chunk in _paragraph_chunks(text):
                opener = _three_word_opener(chunk)
                if len(opener.split()) < 3:
                    continue
                if opener in seen and seen[opener] != label:
                    first_label = seen[opener]
                    if _cv_section_order(label) > _cv_section_order(first_label):
                        to_fix[label] = variant
                    elif _cv_section_order(first_label) > _cv_section_order(label):
                        to_fix[first_label] = variant
                    else:
                        to_fix[label] = variant
                else:
                    seen[opener] = label

        if not to_fix:
            break

        round_changed = False
        for label, var in to_fix.items():
            original = _get_cv_text(content, label)
            if not original.strip():
                continue
            rewritten = _vary_cv_opener(original, var)
            if rewritten != original:
                _set_cv_text(content, label, rewritten)
                round_changed = True
        if not round_changed:
            break
        changed = True

    return changed


def autofix_cv_style(content: dict[str, Any]) -> bool:
    return fix_cv_opener_collisions(content)


def autofix_cv_until_clean(content: dict[str, Any], *, max_rounds: int = 4) -> bool:
    """Run CV autofix until scan_cv_style reports no issues or rounds exhaust."""
    changed = False
    for _ in range(max_rounds):
        before = scan_cv_style(content)
        if not before:
            break
        if not autofix_cv_style(content):
            break
        changed = True
        if not scan_cv_style(content):
            break
    return changed
