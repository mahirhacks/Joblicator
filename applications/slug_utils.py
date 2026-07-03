"""Slug helpers for job application keys and company display."""

from __future__ import annotations

import re


_SUFFIX_RE = re.compile(r"_\d+$")


def parse_company_from_slug(slug: str) -> str:
    """Strip trailing _NN suffix from the last underscore segment; title-case remainder."""
    if not slug:
        return ""
    base = _SUFFIX_RE.sub("", slug.strip())
    return base.replace("_", " ").title()


def unique_slug(base: str, existing: dict) -> str:
    """First use: base. Collisions: base_01, base_02, ... (zero-padded 2 digits)."""
    if base not in existing:
        return base
    suffix = 1
    while f"{base}_{suffix:02d}" in existing:
        suffix += 1
    return f"{base}_{suffix:02d}"


def display_company(slug: str, record: dict) -> str:
    """Prefer stored company; fallback to slug parsing."""
    company = str(record.get("company", "")).strip() if isinstance(record, dict) else ""
    if company:
        return company
    return parse_company_from_slug(slug)
