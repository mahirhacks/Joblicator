"""Shared CV template contract used by the editor, generator, preview and PDF build."""

from __future__ import annotations

import json
from copy import deepcopy
from pathlib import Path
from typing import Any


COMPONENTS = (
    ("contact", "Contact", None),
    ("summary", "Professional Summary", "executive_summary"),
    ("skills", "Core Skills", "skills"),
    ("experience", "Professional Experience", "work_experience"),
    ("projects", "Selected Projects", "projects"),
    ("volunteer", "Volunteer Experience", "volunteer_experience"),
    ("education", "Education", None),
    ("certifications", "Certifications", "certifications"),
    ("achievements", "Achievements", "achievements"),
    ("additional", "Additional Information", None),
)

_LABELS = {component_id: label for component_id, label, _ in COMPONENTS}
_GENERATION_KEYS = {component_id: key for component_id, _, key in COMPONENTS if key}


def default_layout() -> dict[str, Any]:
    sections = []
    for index, (component_id, label, _) in enumerate(COMPONENTS):
        sections.append(
            {
                "id": component_id,
                "label": label,
                "visible": True,
                "locked": component_id == "contact",
                "gapBefore": 0 if index == 0 else 15,
                "padding": 0,
                "opacity": 1,
                "textAlign": "left",
                "bgColor": "#ffffff",
                "typography": {},
            }
        )
    return {
        "version": 2,
        "pageWidth": 794,
        "pageHeight": 1123,
        "pagePadding": 60,
        "pageBackground": "#ffffff",
        "fontSize": 13.333,
        "lineHeight": 1.42,
        "fontFamily": "Arial, Helvetica, sans-serif",
        "zoom": 0.72,
        "sections": sections,
    }


def _number(value: Any, fallback: float, low: float, high: float) -> float:
    try:
        return min(high, max(low, float(value)))
    except (TypeError, ValueError):
        return fallback


def normalize_layout(layout: Any) -> dict[str, Any]:
    base = default_layout()
    if not isinstance(layout, dict) or not layout:
        return base

    out = {**base, **{key: value for key, value in layout.items() if key != "sections"}}
    out["version"] = 2
    out["pageWidth"] = int(_number(out.get("pageWidth"), 794, 500, 1200))
    out["pageHeight"] = int(_number(out.get("pageHeight"), 1123, 700, 1800))
    out["pagePadding"] = int(_number(out.get("pagePadding"), 60, 0, 160))
    out["fontSize"] = _number(out.get("fontSize"), 13.333, 8, 24)
    out["lineHeight"] = _number(out.get("lineHeight"), 1.42, 1, 2.5)

    raw_sections = layout.get("sections")
    if not isinstance(raw_sections, list) or not raw_sections:
        out["sections"] = base["sections"]
        return out

    # Migrate the old absolute-canvas schema into ordered flow components.
    if any(isinstance(item, dict) and "y" in item for item in raw_sections):
        raw_sections = sorted(raw_sections, key=lambda item: float(item.get("y", 0)))

    defaults = {item["id"]: item for item in base["sections"]}
    normalized = []
    seen = set()
    for raw in raw_sections:
        if not isinstance(raw, dict):
            continue
        component_id = str(raw.get("id", "")).strip()
        if component_id not in _LABELS or component_id in seen:
            continue
        seen.add(component_id)
        item = {**deepcopy(defaults[component_id]), **raw}
        item.pop("x", None)
        item.pop("y", None)
        item.pop("w", None)
        item.pop("h", None)
        item.pop("zIndex", None)
        item["label"] = _LABELS[component_id]
        item["gapBefore"] = int(_number(item.get("gapBefore"), 0 if not normalized else 15, 0, 240))
        item["padding"] = int(_number(item.get("padding"), 0, 0, 80))
        item["opacity"] = _number(item.get("opacity"), 1, 0.1, 1)
        item["visible"] = item.get("visible") is not False
        item["textAlign"] = item.get("textAlign") if item.get("textAlign") in {"left", "center", "right", "justify"} else "left"
        if not isinstance(item.get("typography"), dict):
            item["typography"] = {}
        normalized.append(item)
    out["sections"] = normalized or base["sections"]
    return out


def visible_generation_keys(layout: Any) -> set[str]:
    normalized = normalize_layout(layout)
    return {
        _GENERATION_KEYS[item["id"]]
        for item in normalized["sections"]
        if item.get("visible", True) and item["id"] in _GENERATION_KEYS
    }


def load_template_settings(root: Path) -> dict[str, Any]:
    path = root / "settings" / "template.json"
    return json.loads(path.read_text(encoding="utf-8"))


def load_custom_templates(root: Path) -> dict[str, Any]:
    path = root / "settings" / "custom_templates.json"
    if not path.is_file():
        return {}
    try:
        value = json.loads(path.read_text(encoding="utf-8"))
    except json.JSONDecodeError:
        return {}
    return value.get("templates", {}) if isinstance(value, dict) else {}


def application_template_id(root: Path, slug: str | None, settings: dict[str, Any] | None = None) -> str:
    settings = settings or load_template_settings(root)
    default_id = str(settings.get("defaults", {}).get("cv", "cv_professional"))
    if not slug:
        return default_id
    meta_path = root / "applications" / "application_meta.json"
    if not meta_path.is_file():
        return default_id
    try:
        meta = json.loads(meta_path.read_text(encoding="utf-8"))
    except json.JSONDecodeError:
        return default_id
    entry = meta.get(slug, {}) if isinstance(meta, dict) else {}
    return str(entry.get("cv_template_id") or default_id)


def resolve_cv_template(root: Path, template_id: str | None = None, slug: str | None = None) -> dict[str, Any]:
    settings = load_template_settings(root)
    selected = template_id or application_template_id(root, slug, settings)
    catalog = settings.get("catalog", {})
    custom = load_custom_templates(root)
    entry = catalog.get(selected) or custom.get(selected)
    if not isinstance(entry, dict) or entry.get("category", "cv") != "cv":
        selected = str(settings.get("defaults", {}).get("cv", "cv_professional"))
        entry = catalog.get(selected, {})
    return {
        "id": selected,
        "name": str(entry.get("name", selected)),
        "category": "cv",
        "layout": normalize_layout(entry.get("layout")),
    }
