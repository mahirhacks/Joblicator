"""Deterministic, source-aware quality checks for generated CV content.

The LLM reviewer is useful for prose quality, but it is not a reliable fact checker.
These checks protect the facts most likely to drift while tailoring: historical job
titles, project purpose, AI/security scope, and invented outcomes.
"""

from __future__ import annotations

import re
from typing import Any


_SPACE_RE = re.compile(r"\s+")
_KEY_NUMBER_RE = re.compile(r"(\d+)")

_SENIORITY_PATTERNS: tuple[re.Pattern[str], ...] = (
    re.compile(r"\bproven\s+(?:capability|track record|expertise)\b", re.I),
    re.compile(r"\b(?:deep|extensive|speciali[sz]ed)\s+(?:experience|expertise)\b", re.I),
    re.compile(r"\bexpertise\s+(?:in|includes)\b", re.I),
    re.compile(r"\bseasoned\s+(?:professional|engineer|specialist)\b", re.I),
)

_AI_SECURITY_SCOPE_PATTERNS: tuple[re.Pattern[str], ...] = (
    re.compile(r"\bAI\s+adversarial\s+testing\b", re.I),
    re.compile(r"\b(?:test(?:ed|ing)?|assess(?:ed|ing)?)\s+(?:AI|ML|language)\s+models?\s+for\s+vulnerabil", re.I),
    re.compile(r"\b(?:test(?:ed|ing)?|red[- ]?team(?:ed|ing)?)\s+(?:LLMs?|RAG|AI\s+models?)\b", re.I),
    re.compile(r"\b(?:LLM|RAG|AI\s+model)\s+(?:adversarial|security|penetration)\s+test", re.I),
    re.compile(r"\bAI\s+red[- ]?team", re.I),
)

_INVENTED_OUTCOME_PATTERNS: tuple[re.Pattern[str], ...] = (
    re.compile(r"\bensur(?:e|ed|es|ing)\s+(?:scalable|secure|reliable|robust|highly available)", re.I),
    re.compile(r"\b(?:enhanc|improv|optimi[sz])(?:e|ed|es|ing)\s+(?:accuracy|performance|detection|user experience|security|scalability)\b", re.I),
    re.compile(r"\b(?:production|enterprise)[- ]grade\b", re.I),
    re.compile(r"\bsignificantly\s+(?:reduc|improv|enhanc|increas)", re.I),
)

_PROFILE_BOUND_SCOPE_PATTERNS: tuple[re.Pattern[str], ...] = (
    re.compile(r"\bActive Directory\b|\bAD security\b", re.I),
    re.compile(r"\b(?:social engineering|phishing campaigns?)\b", re.I),
    re.compile(r"\bbug bounty\b", re.I),
    re.compile(r"\b(?:red[- ]?team(?:ing)?|threat intelligence)\b", re.I),
    re.compile(r"\b(?:OSCP|CEH|CISSP|GIAC)\b", re.I),
    re.compile(r"\b(?:mobile application|wireless|network) penetration testing\b", re.I),
    re.compile(r"\b(?:malware analysis|reverse engineering|source code review)\b", re.I),
    re.compile(r"\bmulti-vendor\b", re.I),
    re.compile(r"\bshared responsibility model\b", re.I),
    re.compile(r"\bDevSecOps\b", re.I),
    re.compile(r"\bsecurity controls as code\b", re.I),
    re.compile(r"\b(?:Microsoft )?Defender for Cloud\b|\bKQL\b", re.I),
    re.compile(r"\bincident response\b", re.I),
)

_GARBLED_WORK_PATTERNS: tuple[re.Pattern[str], ...] = (
    re.compile(r"\bcloud conf\b", re.I),
    re.compile(r"\bassesses multi-", re.I),
    re.compile(r"\bconf assesses\b", re.I),
)


def _norm(value: Any) -> str:
    text = str(value or "").casefold().replace("&", " and ")
    text = re.sub(r"[^a-z0-9]+", " ", text)
    return _SPACE_RE.sub(" ", text).strip()


def _entry_number(key: Any) -> int:
    match = _KEY_NUMBER_RE.search(str(key))
    return int(match.group(1)) if match else 10_000


def _ordered_entries(value: Any) -> list[tuple[str, dict[str, Any]]]:
    if not isinstance(value, dict):
        return []
    entries = [(str(key), item) for key, item in value.items() if isinstance(item, dict)]
    return sorted(entries, key=lambda pair: (_entry_number(pair[0]), pair[0]))


def _profile_blob(profile: dict[str, Any]) -> str:
    parts: list[str] = []

    def visit(value: Any) -> None:
        if isinstance(value, dict):
            for child in value.values():
                visit(child)
        elif isinstance(value, list):
            for child in value:
                visit(child)
        elif value is not None:
            parts.append(str(value))

    visit(profile)
    return " ".join(parts)


def _entry_text(entry: dict[str, Any]) -> str:
    parts: list[str] = []
    for value in entry.values():
        if isinstance(value, list):
            parts.extend(str(item) for item in value)
        elif not isinstance(value, dict):
            parts.append(str(value))
    return " ".join(parts)


def _contains_pattern(text: str, patterns: tuple[re.Pattern[str], ...]) -> str | None:
    for pattern in patterns:
        match = pattern.search(text)
        if match:
            return match.group(0)
    return None


def _source_supports_pattern(text: str, pattern: re.Pattern[str]) -> bool:
    return bool(pattern.search(text))


def apply_safe_cv_fixes(content: dict[str, Any], profile: dict[str, Any]) -> bool:
    """Apply lossless source-label repairs and conservative seniority downgrades."""
    changed = False
    summary = str(content.get("executive_summary", ""))
    replacements: tuple[tuple[re.Pattern[str], str], ...] = (
        (re.compile(r"\bproven\s+(?:capability|track record|expertise)\b", re.I), "experience"),
        (re.compile(r"\b(?:deep|extensive|speciali[sz]ed)\s+experience\b", re.I), "hands-on experience"),
        (re.compile(r"\b(?:deep|extensive|speciali[sz]ed)\s+expertise\b", re.I), "hands-on experience"),
        (re.compile(r"\bexpertise\s+in\b", re.I), "experience in"),
        (re.compile(r"\bexpertise\s+includes\b", re.I), "experience includes"),
        (re.compile(r"\bseasoned\s+(?=professional|engineer|specialist)\b", re.I), ""),
    )
    for pattern, replacement in replacements:
        def replace_match(match: re.Match[str]) -> str:
            if match.group(0)[:1].isupper():
                return replacement[:1].upper() + replacement[1:]
            return replacement

        updated = pattern.sub(replace_match, summary)
        if updated != summary:
            summary = _SPACE_RE.sub(" ", updated).strip()
            changed = True
    if changed:
        content["executive_summary"] = summary

    profile_text = _profile_blob(profile)
    sentences = [part.strip() for part in re.split(r"(?<=[.!?])\s+", summary) if part.strip()]
    kept_sentences: list[str] = []
    for sentence in sentences:
        unsupported_ai = bool(_contains_pattern(sentence, _AI_SECURITY_SCOPE_PATTERNS)) and not bool(
            _contains_pattern(profile_text, _AI_SECURITY_SCOPE_PATTERNS)
        )
        unsupported_scope = bool(
            _contains_pattern(sentence, _PROFILE_BOUND_SCOPE_PATTERNS)
        ) and not bool(_contains_pattern(profile_text, _PROFILE_BOUND_SCOPE_PATTERNS))
        if unsupported_ai or unsupported_scope:
            changed = True
            continue
        kept_sentences.append(sentence)
    if kept_sentences and len(kept_sentences) != len(sentences):
        content["executive_summary"] = " ".join(kept_sentences)

    source_work = _ordered_entries(profile.get("experience"))
    generated_work = _ordered_entries(content.get("work_experience"))
    for (_, generated), (_, source) in zip(generated_work, source_work):
        for output_key, source_key in (("title", "position"), ("company", "company")):
            expected = str(source.get(source_key, "")).strip()
            if expected and str(generated.get(output_key, "")).strip() != expected:
                generated[output_key] = expected
                changed = True
        source_description = str(source.get("description", "")).strip()
        source_sentences = [
            part.strip()
            for part in re.split(r"(?<=[.!?])\s+", source_description)
            if part.strip()
        ]
        points = generated.get("points", [])
        if isinstance(points, list) and source_sentences:
            repaired_points = [str(point).strip() for point in points]
            for index, point in enumerate(repaired_points):
                unsupported = any(
                    pattern.search(point) and not pattern.search(source_description)
                    for pattern in _PROFILE_BOUND_SCOPE_PATTERNS
                )
                garbled = any(pattern.search(point) for pattern in _GARBLED_WORK_PATTERNS)
                if not (unsupported or garbled):
                    continue
                source_sentence = source_sentences[min(index, len(source_sentences) - 1)]
                if re.match(r"^Web application\b", source_sentence, re.I):
                    source_sentence = "Performed " + source_sentence[:1].lower() + source_sentence[1:]
                elif re.match(r"^Cloud configuration\b", source_sentence, re.I):
                    source_sentence = "Conducted " + source_sentence[:1].lower() + source_sentence[1:]
                repaired_points[index] = source_sentence
                changed = True
            generated["points"] = repaired_points

    source_projects = _ordered_entries(profile.get("projects"))
    generated_projects = _ordered_entries(content.get("projects"))
    for generated_key, generated in generated_projects:
        source_index = _entry_number(generated_key) - 1
        if source_index < 0 or source_index >= len(source_projects):
            continue
        _, source = source_projects[source_index]
        expected = str(source.get("name", "")).strip()
        if expected and str(generated.get("title", "")).strip() != expected:
            generated["title"] = expected
            changed = True
        description = str(generated.get("description", ""))
        safe_project_rewrites: tuple[tuple[re.Pattern[str], str], ...] = (
            (re.compile(r"\bscalable architecture\b", re.I), "architecture"),
            (re.compile(r"\bsecure network environment\b", re.I), "network environment"),
            (re.compile(r"\bsecure connectivity\b", re.I), "network connectivity"),
            (
                re.compile(r"\bmanaged infrastructure security through the configuration of\b", re.I),
                "Configured",
            ),
            (
                re.compile(r"\bLoRA Fine Tuned it with\b", re.I),
                "fine-tuned it with LoRA on",
            ),
            (re.compile(r"\bsignature based\b", re.I), "signature-based"),
            (re.compile(r"\bmlp\b"), "MLP"),
            (re.compile(r"\bscl\b"), "SCL"),
        )
        for pattern, replacement in safe_project_rewrites:
            updated = pattern.sub(replacement, description)
            if updated != description:
                description = updated
                changed = True
        if description != str(generated.get("description", "")):
            generated["description"] = description

    return changed


def assess_cv_quality(
    content: dict[str, Any],
    profile: dict[str, Any],
) -> dict[str, list[str]]:
    """Return source-integrity issues grouped by regeneratable CV section."""
    issues: dict[str, list[str]] = {}
    profile_text = _profile_blob(profile)

    summary = str(content.get("executive_summary", ""))
    qualifier = _contains_pattern(summary, _SENIORITY_PATTERNS)
    if qualifier:
        issues.setdefault("executive_summary", []).append(
            f"seniority inflation '{qualifier}'; state the exact experience or evidence instead"
        )

    ai_scope = _contains_pattern(summary, _AI_SECURITY_SCOPE_PATTERNS)
    if ai_scope and not _contains_pattern(profile_text, _AI_SECURITY_SCOPE_PATTERNS):
        issues.setdefault("executive_summary", []).append(
            f"unsupported AI-security scope '{ai_scope}'; do not repurpose ML/LLM projects as security testing"
        )

    bound_scope = _contains_pattern(summary, _PROFILE_BOUND_SCOPE_PATTERNS)
    if bound_scope and not _contains_pattern(profile_text, _PROFILE_BOUND_SCOPE_PATTERNS):
        issues.setdefault("executive_summary", []).append(
            f"unsupported job-keyword scope '{bound_scope}' is absent from candidate_cv"
        )

    source_work = _ordered_entries(profile.get("experience"))
    generated_work = _ordered_entries(content.get("work_experience"))
    for index, ((generated_key, generated), source_pair) in enumerate(
        zip(generated_work, source_work), start=1
    ):
        _, source = source_pair
        expected_title = str(source.get("position", "")).strip()
        actual_title = str(generated.get("title", "")).strip()
        if expected_title and _norm(actual_title) != _norm(expected_title):
            issues.setdefault("work_experience", []).append(
                f"{generated_key}: historical title drift; copy '{expected_title}' exactly, not '{actual_title}'"
            )

        expected_company = str(source.get("company", "")).strip()
        actual_company = str(generated.get("company", "")).strip()
        if expected_company and _norm(actual_company) != _norm(expected_company):
            issues.setdefault("work_experience", []).append(
                f"{generated_key}: employer drift; copy '{expected_company}' exactly, not '{actual_company}'"
            )

        generated_text = _entry_text(generated)
        source_text = _entry_text(source)
        for pattern in _AI_SECURITY_SCOPE_PATTERNS:
            match = pattern.search(generated_text)
            if match and not _source_supports_pattern(source_text, pattern):
                issues.setdefault("work_experience", []).append(
                    f"{generated_key}: unsupported scope '{match.group(0)}' is absent from this experience entry"
                )
                break
        for pattern in _PROFILE_BOUND_SCOPE_PATTERNS:
            match = pattern.search(generated_text)
            if match and not pattern.search(profile_text):
                issues.setdefault("work_experience", []).append(
                    f"{generated_key}: unsupported job-keyword scope '{match.group(0)}' is absent from candidate_cv"
                )
                break
        for pattern in _GARBLED_WORK_PATTERNS:
            match = pattern.search(generated_text)
            if match:
                issues.setdefault("work_experience", []).append(
                    f"{generated_key}: garbled work-experience phrase '{match.group(0)}'"
                )
                break

    source_projects = _ordered_entries(profile.get("projects"))
    generated_projects = _ordered_entries(content.get("projects"))
    for generated_key, generated in generated_projects:
        number = _entry_number(generated_key)
        source_index = number - 1
        if source_index < 0 or source_index >= len(source_projects):
            continue
        _, source = source_projects[source_index]
        expected_title = str(source.get("name", "")).strip()
        actual_title = str(generated.get("title", "")).strip()
        if expected_title and _norm(actual_title) != _norm(expected_title):
            issues.setdefault("projects", []).append(
                f"{generated_key}: project title drift; preserve '{expected_title}'"
            )

        generated_text = _entry_text(generated)
        source_text = _entry_text(source)
        for pattern in _AI_SECURITY_SCOPE_PATTERNS:
            match = pattern.search(generated_text)
            if match and not _source_supports_pattern(source_text, pattern):
                issues.setdefault("projects", []).append(
                    f"{generated_key}: unsupported project repurposing '{match.group(0)}'; preserve the source project's actual purpose"
                )
                break

        for pattern in _PROFILE_BOUND_SCOPE_PATTERNS:
            match = pattern.search(generated_text)
            if match and not pattern.search(profile_text):
                issues.setdefault("projects", []).append(
                    f"{generated_key}: unsupported job-keyword scope '{match.group(0)}' is absent from candidate_cv"
                )
                break

        for pattern in _INVENTED_OUTCOME_PATTERNS:
            match = pattern.search(generated_text)
            if match and not _source_supports_pattern(source_text, pattern):
                issues.setdefault("projects", []).append(
                    f"{generated_key}: invented outcome '{match.group(0)}' is not in the source project"
                )
                break

    return issues
