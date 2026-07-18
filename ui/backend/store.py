"""JSON persistence helpers for the Joblication UI API."""

from __future__ import annotations

import json
import sys
from datetime import UTC, datetime
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parent.parent.parent

if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

DYNAMIC_ENGINE = ROOT / "engine" / "dynamic_engine"
if str(DYNAMIC_ENGINE) not in sys.path:
    sys.path.insert(0, str(DYNAMIC_ENGINE))


def _read_json(path: Path, default: Any) -> Any:
    if not path.is_file():
        return default
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except json.JSONDecodeError:
        return default


def _write_json(path: Path, data: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


def applications_path() -> Path:
    from applications.storage import load_json_path

    return load_json_path()


def meta_path() -> Path:
    return applications_path().parent / "application_meta.json"


def profile_path() -> Path:
    from utils import load_config, resolve_path

    config = load_config(ROOT / "config.yaml")
    return resolve_path(config, "profile", "json", "settings/local_profile.json")


def template_settings_path() -> Path:
    return ROOT / "settings" / "template.json"


def custom_templates_path() -> Path:
    return ROOT / "settings" / "custom_templates.json"


def stage_path(name: str) -> Path:
    from utils import load_config, resolve_output_path

    config = load_config(ROOT / "config.yaml")
    defaults = {
        "stage_1": "engine/dynamic_engine/data/stage_1.json",
        "stage_2": "engine/dynamic_engine/data/stage_2.json",
        "stage_3": "engine/dynamic_engine/data/stage_3.json",
    }
    return resolve_output_path(config, name, defaults[name])


def generate_status_path() -> Path:
    return DYNAMIC_ENGINE / "data" / "generate_status.json"


def generate_log_path() -> Path:
    return DYNAMIC_ENGINE / "data" / "generate.log"


def outputs_dir() -> Path:
    settings = load_template_settings()
    rel = str(settings.get("export", {}).get("output_dir", "outputs"))
    return (ROOT / rel).resolve()


def engine_config_path() -> Path:
    return ROOT / "config.yaml"


def load_template_settings() -> dict[str, Any]:
    return _read_json(template_settings_path(), {})


def load_applications() -> dict[str, Any]:
    return _read_json(applications_path(), {})


def save_applications(data: dict[str, Any]) -> None:
    _write_json(applications_path(), data)


def load_meta() -> dict[str, Any]:
    return _read_json(meta_path(), {})


def save_meta(data: dict[str, Any]) -> None:
    _write_json(meta_path(), data)


def get_application_meta(slug: str) -> dict[str, Any]:
    meta = load_meta()
    entry = meta.get(slug, {})
    if not isinstance(entry, dict):
        entry = {}
    return {
        "status": str(entry.get("status", "unsubmitted")),
        "notes": str(entry.get("notes", "")),
        "cv_template_id": str(entry.get("cv_template_id", "")),
        "updated_at": entry.get("updated_at", ""),
    }


def set_application_meta(
    slug: str,
    *,
    status: str | None = None,
    notes: str | None = None,
    cv_template_id: str | None = None,
) -> dict[str, Any]:
    meta = load_meta()
    entry = meta.get(slug, {}) if isinstance(meta.get(slug), dict) else {}
    if status is not None:
        entry["status"] = status
    if notes is not None:
        entry["notes"] = notes
    if cv_template_id is not None:
        entry["cv_template_id"] = cv_template_id
    entry["updated_at"] = datetime.now(UTC).isoformat()
    meta[slug] = entry
    save_meta(meta)
    return entry


def load_profile() -> dict[str, Any]:
    return _read_json(profile_path(), {})


def save_profile(data: dict[str, Any]) -> None:
    from grounding import sanitize_profile

    _write_json(profile_path(), sanitize_profile(data))


def load_custom_templates() -> dict[str, Any]:
    return _read_json(custom_templates_path(), {"templates": {}})


def save_custom_templates(data: dict[str, Any]) -> None:
    _write_json(custom_templates_path(), data)


def load_generate_status() -> dict[str, Any]:
    return _read_json(
        generate_status_path(),
        {"running": False, "step": "", "error": None, "finished_at": None},
    )


def save_generate_status(data: dict[str, Any]) -> None:
    _write_json(generate_status_path(), data)


def list_output_folders() -> list[dict[str, Any]]:
    base = outputs_dir()
    if not base.is_dir():
        return []
    folders: list[dict[str, Any]] = []
    for path in sorted(base.iterdir(), key=lambda p: p.stat().st_mtime, reverse=True):
        if not path.is_dir():
            continue
        files = [f.name for f in path.iterdir() if f.is_file()]
        folders.append(
            {
                "folder": path.name,
                "path": str(path),
                "files": sorted(files),
                "modified": datetime.fromtimestamp(path.stat().st_mtime, UTC).isoformat(),
            }
        )
    return folders


def _safe_filename_part(text: str, fallback: str = "document") -> str:
    import re

    cleaned = re.sub(r"[^\w.-]+", "_", str(text).strip())
    cleaned = cleaned.strip("._")
    return (cleaned or fallback)[:80]


def resolve_output_for_slug(slug: str) -> dict[str, Any] | None:
    """Match a job slug to its generated output folder via stage_3 metadata."""
    apps = _read_json(applications_path(), {})
    if slug not in apps:
        return None

    record = apps[slug]
    if not isinstance(record, dict):
        return None

    stage1 = _read_json(stage_path("stage_1"), {})
    stage3 = _read_json(stage_path("stage_3"), {})

    app_key = None
    for key, entry in stage1.items():
        if not key.startswith("application_") or not isinstance(entry, dict):
            continue
        if entry.get("source_slug") == slug:
            app_key = key
            break

    company = ""
    role = str(record.get("title", ""))
    if app_key and isinstance(stage3.get(app_key), dict):
        block = stage3[app_key]
        company = str(block.get("company_name", ""))
        role = str(block.get("role_title", role))

    stem_prefix = f"{_safe_filename_part(company, 'company')}_{_safe_filename_part(role, 'role')}".lower()

    folders = list_output_folders()
    for folder in folders:
        name = folder["folder"].lower()
        if name.startswith(stem_prefix):
            return folder

    role_part = _safe_filename_part(role, "role").lower()
    company_token = _safe_filename_part(company, "company").lower().split("_")[0]
    for folder in folders:
        name = folder["folder"].lower()
        if role_part in name and (not company_token or company_token in name):
            return folder

    return None
