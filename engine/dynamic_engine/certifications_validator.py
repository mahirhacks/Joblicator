"""Certification schema validation — descriptions must be substantive, not name/issuer echoes."""

from __future__ import annotations

from typing import Any

DESCRIPTION_MIN_CHARS = 24


def _clean(text: str) -> str:
    return str(text or "").strip()


def build_certification_description_fallback(
    name: str,
    issuer: str,
    profile_description: str = "",
) -> str:
    """Deterministic 1-2 line description when the LLM leaves description empty."""
    name = _clean(name)
    issuer = _clean(issuer)
    profile_description = _clean(profile_description)

    if (
        profile_description
        and profile_description.lower() not in {name.lower(), issuer.lower()}
        and len(profile_description) >= DESCRIPTION_MIN_CHARS
    ):
        return profile_description

    if issuer and name:
        return (
            f"Issued by {issuer}. This credential supports hands-on security assessment skills "
            f"relevant to the {name.split('(')[0].strip()} competency area."
        )
    if issuer:
        return (
            f"Issued by {issuer}. Validates practical security knowledge applicable to "
            "vulnerability assessment and defensive engineering workflows."
        )
    if name:
        return (
            f"Professional certification ({name}) evidencing targeted security and "
            "technical competency aligned with the role requirements."
        )
    return ""


def validate_certifications_output(
    certifications: dict[str, Any] | None,
    *,
    min_description_chars: int = DESCRIPTION_MIN_CHARS,
) -> tuple[bool, list[str]]:
    errors: list[str] = []
    if not isinstance(certifications, dict) or not certifications:
        return False, ["certifications section is missing or empty"]

    for entry_key, entry in certifications.items():
        if not isinstance(entry, dict):
            errors.append(f"certifications.{entry_key} is not a valid object")
            continue
        name = _clean(str(entry.get("name", "")))
        description = _clean(str(entry.get("description", "")))
        issuer = _clean(str(entry.get("issuer", "")))

        if not name:
            errors.append(f"certifications.{entry_key}.name is empty")
        if not description:
            errors.append(f"certifications.{entry_key}.description is empty")
            continue
        if len(description) < min_description_chars:
            errors.append(
                f"certifications.{entry_key}.description is too short "
                f"({len(description)} chars, need {min_description_chars}+)"
            )
        if name and description.lower() == name.lower():
            errors.append(
                f"certifications.{entry_key}.description duplicates name — must be a 1-2 line relevance note"
            )
        if issuer and description.lower() == issuer.lower():
            errors.append(
                f"certifications.{entry_key}.description duplicates issuer — must explain job relevance"
            )
        if name and not issuer and description.lower() == name.lower():
            errors.append(f"certifications.{entry_key}.description must not echo the certification name")

    return (len(errors) == 0, errors)
