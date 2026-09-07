"""Paths for Joblication's source assets and writable local data.

The normal Python workflow keeps both in the repository.  The Electron build
sets ``JOBLICATION_RESOURCE_ROOT`` to its packaged assets and
``JOBLICATION_DATA_ROOT`` to the user's application-data directory, keeping
personal profile, job, configuration, checkpoint, and export files outside
the install location.
"""

from __future__ import annotations

import os
import shutil
from pathlib import Path


_REPOSITORY_ROOT = Path(__file__).resolve().parent
RESOURCE_ROOT = Path(os.environ.get("JOBLICATION_RESOURCE_ROOT", _REPOSITORY_ROOT)).resolve()
DATA_ROOT = Path(os.environ.get("JOBLICATION_DATA_ROOT", RESOURCE_ROOT)).resolve()

_INITIAL_DATA_FILES = (
    "config.yaml",
    "applications/storage.json",
    "applications/local_applications.json",
    "settings/template.json",
    "settings/local_profile.json",
    "engine/dynamic_engine/data/stage_1.json",
    "engine/dynamic_engine/data/stage_2.json",
    "engine/dynamic_engine/data/stage_3.json",
)


def resource_path(*parts: str) -> Path:
    """Return a read-only packaged asset path."""
    return RESOURCE_ROOT.joinpath(*parts)


def data_path(*parts: str) -> Path:
    """Return a path in the writable Joblication workspace."""
    return DATA_ROOT.joinpath(*parts)


def output_path(configured: str = "outputs") -> Path:
    """Return the generated-document directory.

    Absolute paths from Settings are used as-is. The default relative folder
    ``outputs`` still honors ``JOBLICATION_OUTPUT_ROOT`` for packaged desktop
    installs. Any other relative path is resolved under the data workspace.
    """
    text = str(configured or "outputs").strip() or "outputs"
    configured_path = Path(text).expanduser()
    if configured_path.is_absolute():
        return configured_path.resolve()

    override = os.environ.get("JOBLICATION_OUTPUT_ROOT", "").strip()
    normalized = text.replace("\\", "/").strip("./")
    if override and normalized == "outputs":
        return Path(override).expanduser().resolve()

    return data_path(configured_path).resolve()


def ensure_data_workspace() -> Path:
    """Create the local workspace and seed defaults without replacing edits."""
    for relative in _INITIAL_DATA_FILES:
        source = resource_path(relative)
        target = data_path(relative)
        if target.exists() or not source.is_file():
            continue
        target.parent.mkdir(parents=True, exist_ok=True)
        if source.resolve() != target.resolve():
            shutil.copy2(source, target)

    for relative in (
        "applications",
        "settings",
        "engine/dynamic_engine/data",
    ):
        data_path(relative).mkdir(parents=True, exist_ok=True)
    output_path().mkdir(parents=True, exist_ok=True)
    return DATA_ROOT
