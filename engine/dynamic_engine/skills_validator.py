"""Strict schema validation for resume skills — keys only, never descriptions or titles."""

from __future__ import annotations

from typing import Any


def _clean(text: str) -> str:
    return str(text or "").strip()


def profile_skill_keys(profile: dict[str, Any]) -> set[str]:
    skills = profile.get("skills", {})
    if not isinstance(skills, dict):
        return set()
    return {str(name).strip() for name in skills if str(name).strip()}


def profile_skill_descriptions(profile: dict[str, Any]) -> set[str]:
    skills = profile.get("skills", {})
    if not isinstance(skills, dict):
        return set()
    descriptions: set[str] = set()
    for value in skills.values():
        cleaned = _clean(str(value))
        if cleaned:
            descriptions.add(cleaned)
    return descriptions


def profile_non_skill_strings(profile: dict[str, Any]) -> set[str]:
    """Titles, certification names, and other strings that must not appear as skills."""
    forbidden: set[str] = set()

    for title in (profile.get("titles") or {}).values():
        cleaned = _clean(str(title))
        if cleaned:
            forbidden.add(cleaned)

    for cert in (profile.get("certifications") or {}).values():
        if isinstance(cert, dict):
            for field in ("name", "issuer"):
                cleaned = _clean(str(cert.get(field, "")))
                if cleaned:
                    forbidden.add(cleaned)

    for achievement in (profile.get("achievements") or {}).values():
        if isinstance(achievement, dict):
            cleaned = _clean(str(achievement.get("name", "")))
            if cleaned:
                forbidden.add(cleaned)

    for experience in (profile.get("experience") or {}).values():
        if isinstance(experience, dict):
            for field in ("position", "company"):
                cleaned = _clean(str(experience.get(field, "")))
                if cleaned:
                    forbidden.add(cleaned)

    return forbidden


def _canonical_skill_key(item: str, valid_keys_lower: dict[str, str]) -> str | None:
    return valid_keys_lower.get(_clean(item).lower())


def validate_skills_output(
    generated_skills: dict[str, Any] | None,
    source_profile: dict[str, Any],
) -> tuple[bool, list[str]]:
    """
    Every emitted skill must be a KEY from source_profile["skills"].
    Never a description value, title, or certification name.
    """
    errors: list[str] = []
    valid_keys = profile_skill_keys(source_profile)
    valid_keys_lower = {key.lower(): key for key in valid_keys}
    descriptions = profile_skill_descriptions(source_profile)
    descriptions_lower = {desc.lower() for desc in descriptions}
    forbidden = profile_non_skill_strings(source_profile)
    forbidden_lower = {text.lower() for text in forbidden}

    if not isinstance(generated_skills, dict) or not generated_skills:
        return False, ["skills section is missing or empty"]

    for domain, items in generated_skills.items():
        if not isinstance(items, list):
            errors.append(f"skills.{domain} is not a list")
            continue
        for index, item in enumerate(items):
            item_str = _clean(str(item))
            if not item_str:
                errors.append(f"skills.{domain}[{index}] is empty")
                continue
            if _canonical_skill_key(item_str, valid_keys_lower):
                continue
            item_lower = item_str.lower()
            if item_lower in descriptions_lower or item_str in descriptions:
                errors.append(
                    f"'{item_str}' is a DESCRIPTION value, not a skill key — likely wrong dict field pulled"
                )
            elif item_lower in forbidden_lower or item_str in forbidden:
                errors.append(
                    f"'{item_str}' is a title/certification string, not a skill key"
                )
            else:
                errors.append(f"'{item_str}' not found in source skills{{}} keys")

    return (len(errors) == 0, errors)


def enforce_skill_keys_only(
    skills: dict[str, list[str]],
    profile: dict[str, Any],
) -> dict[str, list[str]]:
    """Keep only profile skill keys, using canonical key casing from the profile."""
    valid_keys_lower = {key.lower(): key for key in profile_skill_keys(profile)}
    filtered: dict[str, list[str]] = {}
    for domain, items in skills.items():
        if not isinstance(items, list):
            continue
        kept: list[str] = []
        for item in items:
            canonical = _canonical_skill_key(str(item), valid_keys_lower)
            if canonical and canonical not in kept:
                kept.append(canonical)
        if kept:
            filtered[str(domain).strip()] = kept
    return filtered
