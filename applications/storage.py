"""Shared storage path for applications JSON."""

from __future__ import annotations

import json
from pathlib import Path

from joblication_runtime import data_path, ensure_data_workspace

CONFIG_PATH = data_path("applications", "storage.json")


def load_json_path() -> Path:
    ensure_data_workspace()
    config = json.loads(CONFIG_PATH.read_text(encoding="utf-8"))
    return CONFIG_PATH.parent / config["json"]
