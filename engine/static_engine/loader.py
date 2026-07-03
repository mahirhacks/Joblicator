"""Load stage outputs, template catalog, and engine config."""

from __future__ import annotations

import sys
from pathlib import Path
from typing import Any

ENGINE_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = ENGINE_DIR.parent.parent
DYNAMIC_DIR = PROJECT_ROOT / "engine" / "dynamic_engine"
TEMPLATE_SETTINGS_PATH = PROJECT_ROOT / "settings" / "template.json"

if str(DYNAMIC_DIR) not in sys.path:
    sys.path.insert(0, str(DYNAMIC_DIR))

from utils import load_config, load_json, resolve_output_path  # noqa: E402

STAGE_1_DEFAULT = "engine/dynamic_engine/data/stage_1.json"
STAGE_2_DEFAULT = "engine/dynamic_engine/data/stage_2.json"
STAGE_3_DEFAULT = "engine/dynamic_engine/data/stage_3.json"


def load_template_settings() -> dict[str, Any]:
    return load_json(TEMPLATE_SETTINGS_PATH)


def load_engine_config() -> dict[str, Any]:
    return load_config(DYNAMIC_DIR / "config.yaml")


def load_stage_1(config: dict[str, Any] | None = None) -> dict[str, Any]:
    config = config or load_engine_config()
    path = resolve_output_path(config, "stage_1", STAGE_1_DEFAULT)
    return load_json(path)


def load_stage_2(config: dict[str, Any] | None = None) -> dict[str, Any]:
    config = config or load_engine_config()
    path = resolve_output_path(config, "stage_2", STAGE_2_DEFAULT)
    return load_json(path)


def load_stage_3(config: dict[str, Any] | None = None) -> dict[str, Any]:
    config = config or load_engine_config()
    path = resolve_output_path(config, "stage_3", STAGE_3_DEFAULT)
    return load_json(path)


def list_application_keys(payload: dict[str, Any]) -> list[str]:
    return sorted(key for key in payload if key.startswith("application_"))


def split_header_and_application(
    payload: dict[str, Any],
    app_key: str,
) -> tuple[dict[str, Any], dict[str, Any]]:
    block = payload.get(app_key)
    if not isinstance(block, dict):
        raise ValueError(f"Missing {app_key} in stage payload")

    header_keys = {
        "first_name",
        "last_name",
        "email",
        "linkedin",
        "github",
        "portfolio",
        "contact",
        "address",
        "languages",
        "education",
    }
    header = {key: payload[key] for key in header_keys if key in payload}
    return header, block


def resolve_template_path(template_settings: dict[str, Any], template_id: str) -> str:
    catalog = template_settings.get("catalog", {})
    entry = catalog.get(template_id)
    if not isinstance(entry, dict):
        raise ValueError(f"Unknown template id: {template_id}")
    rel = str(entry.get("path", "")).strip()
    if not rel:
        raise ValueError(f"Template {template_id} has no path")
    return rel.replace("\\", "/")
