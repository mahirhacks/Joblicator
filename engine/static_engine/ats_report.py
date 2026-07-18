"""
Deterministic ATS keyword coverage report — no LLM.

Compares stage_1 resume keywords (originals + ATS variants) against the final
rendered CV and cover letter text, and reports which keyword groups landed.
A keyword group counts as covered when the original or any of its variants
appears in the document with word boundaries.
"""

from __future__ import annotations

import json
import re
from pathlib import Path
from typing import Any


def _synonyms_per_original(config: dict[str, Any]) -> int:
    raw = config.get("stage_2", {}).get("keywords", {})
    try:
        return max(0, int(raw.get("max_synonym_keyword_per_original_keyword", 2)))
    except (TypeError, ValueError):
        return 2


_PLACEHOLDER_KEYWORD_RE = re.compile(
    r"^(?:n/?a$|none\b|not\s|no\s|nothing\b|unspecified\b|unknown\b|missing\b)",
    re.IGNORECASE,
)


def _tokens(term: str) -> list[str]:
    return re.findall(r"[a-z0-9+#.]+", term.lower())


def _acronym(term: str) -> str:
    return "".join(token[0] for token in _tokens(term) if token)


def _is_variant_of(original: str, candidate: str) -> bool:
    """Heuristic: candidate is an ATS variant of original (majority shared tokens, acronym, or stem)."""
    orig_tokens = set(_tokens(original))
    cand_tokens = set(_tokens(candidate))
    if not orig_tokens or not cand_tokens:
        return False

    shared = orig_tokens & cand_tokens
    if shared and len(shared) / min(len(orig_tokens), len(cand_tokens)) >= 0.6:
        return True

    for acronym, tokens in ((_acronym(original), cand_tokens), (_acronym(candidate), orig_tokens)):
        if len(acronym) >= 2 and acronym in tokens:
            return True

    for orig_token in orig_tokens:
        for cand_token in cand_tokens:
            longer, shorter = (
                (orig_token, cand_token) if len(orig_token) >= len(cand_token) else (cand_token, orig_token)
            )
            if len(shorter) >= 5 and shorter in longer:
                return True
    return False


def _iter_keyword_groups(
    section_keywords: list[Any],
    synonyms_per_original: int,
) -> list[list[str]]:
    """
    Parse stage_1 interleaved lists (original, variants..., next original, ...) into groups.
    Variant counts differ per original, so group by similarity with a cap instead of blind offsets.
    """
    groups: list[list[str]] = []
    current: list[str] = []
    for raw in section_keywords:
        term = str(raw).strip()
        if not term or _PLACEHOLDER_KEYWORD_RE.match(term):
            continue
        if current and len(current) <= synonyms_per_original and _is_variant_of(current[0], term):
            current.append(term)
            continue
        if current:
            groups.append(current)
        current = [term]
    if current:
        groups.append(current)
    return groups


def _group_dedupe_key(group: list[str]) -> str:
    terms = " ".join(group).casefold()
    if "osint" in terms or "open source intelligence" in terms or "open-source intelligence" in terms:
        return "osint"
    return group[0].casefold() if group else ""


def keyword_groups_from_stage1(
    stage1_entry: dict[str, Any],
    config: dict[str, Any],
) -> list[list[str]]:
    structured = stage1_entry.get("resume_keyword_groups", {})
    if isinstance(structured, dict) and structured:
        seen: set[str] = set()
        groups: list[list[str]] = []
        for values in structured.values():
            if not isinstance(values, list):
                continue
            for item in values:
                if not isinstance(item, dict):
                    continue
                original = str(item.get("original", "")).strip()
                variants = item.get("variants", [])
                if not original or _PLACEHOLDER_KEYWORD_RE.match(original):
                    continue
                key = original.lower()
                if key in seen:
                    continue
                seen.add(key)
                group = [original]
                if isinstance(variants, list):
                    group.extend(
                        str(value).strip()
                        for value in variants
                        if str(value).strip()
                    )
                groups.append(group)
        return groups

    resume_keywords = stage1_entry.get("resume_keywords", {})
    if not isinstance(resume_keywords, dict):
        return []

    synonyms = _synonyms_per_original(config)
    seen: set[str] = set()
    groups: list[list[str]] = []
    for values in resume_keywords.values():
        if not isinstance(values, list):
            continue
        for group in _iter_keyword_groups(values, synonyms):
            key = _group_dedupe_key(group)
            if key in seen:
                continue
            seen.add(key)
            groups.append(group)
    return groups


def flatten_context_text(value: Any) -> str:
    """Collapse a template context (nested dicts/lists/strings) into one searchable string."""
    if isinstance(value, str):
        return value
    if isinstance(value, dict):
        return " ".join(flatten_context_text(item) for item in value.values())
    if isinstance(value, (list, tuple)):
        return " ".join(flatten_context_text(item) for item in value)
    return str(value) if value is not None else ""


_WORD_SUFFIXES = ("ing", "ed", "es", "s")


def _flex_word_pattern(word: str) -> str:
    """Match a word tolerating tense/plural: 'Develop' ~ 'Developed', 'APIs' ~ 'API'."""
    stem = word
    if len(word) > 4:
        for suffix in _WORD_SUFFIXES:
            if word.lower().endswith(suffix):
                stem = word[: -len(suffix)]
                break
    return re.escape(stem) + r"(?:ing|ed|es|e|s|d)?"


def term_pattern(term: str) -> str:
    words = [word for word in re.split(r"[^\w+#.]+", term) if word]
    if not words:
        return re.escape(term)
    return r"(?<!\w)" + r"\W+".join(_flex_word_pattern(word) for word in words) + r"(?!\w)"


def _term_in_text(term: str, text: str) -> bool:
    # Short acronyms (IS, AI, CS) collide with common words — match those case-sensitively, exact.
    if len(term) <= 3:
        return re.search(rf"(?<!\w){re.escape(term)}(?!\w)", text) is not None
    return re.search(term_pattern(term), text, re.IGNORECASE) is not None


def _semantic_term_in_text(term: str, text: str) -> bool:
    """Recognize only narrow, lossless ATS equivalences missed by phrase matching."""
    if _term_in_text(term, text):
        return True
    term_tokens = set(_tokens(term))
    text_tokens = set(_tokens(text))

    if "azure" in term_tokens and "azure" in text_tokens:
        return True
    if "owasp" in term_tokens and "owasp" in text_tokens:
        return True
    if (
        ("osint" in term_tokens or {"open", "source", "intelligence"}.issubset(term_tokens))
        and ("osint" in text_tokens or {"open", "source", "intelligence"}.issubset(text_tokens))
    ):
        return True

    if {"web", "api"}.issubset(term_tokens):
        text_has_web_api = {"web", "api"}.issubset(text_tokens)
        text_has_testing = any(
            token.startswith(("test", "pentest", "penetr")) for token in text_tokens
        )
        term_has_testing = any(
            token.startswith(("test", "pentest", "penetr")) for token in term_tokens
        )
        if text_has_web_api and text_has_testing and term_has_testing:
            return True
    if {"application", "security"}.issubset(term_tokens) and any(
        token.startswith("test") for token in term_tokens
    ):
        text_has_application = "application" in text_tokens
        text_has_security_work = any(
            token.startswith(("test", "pentest", "penetr")) for token in text_tokens
        )
        if text_has_application and text_has_security_work and "security" in text_tokens:
            return True
    return False


def _supported_group(group: list[str], text: str) -> list[str] | None:
    """Return a group relabelled by the candidate-supported term, or None."""
    for term in group:
        if _term_in_text(term, text):
            return [term, *[item for item in group if item != term]]
    for term in group:
        if _semantic_term_in_text(term, text):
            return [term, *[item for item in group if item != term]]
    return None


def _coverage(groups: list[list[str]], text: str) -> dict[str, Any]:
    covered: list[str] = []
    missing: list[str] = []
    for group in groups:
        if any(_semantic_term_in_text(term, text) for term in group):
            covered.append(group[0])
        else:
            missing.append(group[0])
    total = len(groups)
    pct = round(100.0 * len(covered) / total, 1) if total else 0.0
    return {
        "total_keyword_groups": total,
        "covered_count": len(covered),
        "coverage_pct": pct,
        "covered": covered,
        "missing": missing,
    }


def build_ats_report(
    stage1_entry: dict[str, Any],
    config: dict[str, Any],
    cv_text: str,
    letter_text: str,
    candidate_text: str = "",
) -> dict[str, Any]:
    all_groups = keyword_groups_from_stage1(stage1_entry, config)
    groups = all_groups
    excluded: list[str] = []
    if candidate_text.strip():
        groups = []
        for group in all_groups:
            supported = _supported_group(group, candidate_text)
            if supported:
                groups.append(supported)
            else:
                excluded.append(group[0])
    combined = f"{cv_text}\n{letter_text}"
    return {
        "job_title": str(stage1_entry.get("title", "")).strip(),
        "job_keyword_groups": len(all_groups),
        "eligible_keyword_groups": len(groups),
        "excluded_unsupported": excluded,
        "cv": _coverage(groups, cv_text),
        "cover_letter": _coverage(groups, letter_text),
        "combined": _coverage(groups, combined),
    }


def write_ats_report(report: dict[str, Any], path: Path) -> Path:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(report, indent=2, ensure_ascii=False), encoding="utf-8")
    return path


def format_ats_summary(app_key: str, report: dict[str, Any]) -> str:
    cv = report.get("cv", {})
    letter = report.get("cover_letter", {})
    missing = cv.get("missing", [])
    missing_note = f" | missing in CV: {', '.join(missing[:6])}" if missing else ""
    if missing and len(missing) > 6:
        missing_note += ", …"
    return (
        f"Grounded ATS coverage {app_key}: CV {cv.get('covered_count', 0)}/{cv.get('total_keyword_groups', 0)} "
        f"({cv.get('coverage_pct', 0)}%) | letter {letter.get('covered_count', 0)}/"
        f"{letter.get('total_keyword_groups', 0)} ({letter.get('coverage_pct', 0)}%)"
        f"{missing_note}"
    )
