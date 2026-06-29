"""Shared storage path for applications JSON."""

from __future__ import annotations

import json
from pathlib import Path

DIR = Path(__file__).resolve().parent
CONFIG_PATH = DIR / "storage.json"


def load_json_path() -> Path:
    config = json.loads(CONFIG_PATH.read_text(encoding="utf-8"))
    return DIR / config["json"]
