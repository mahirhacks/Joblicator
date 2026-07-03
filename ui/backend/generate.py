"""
Run the full Joblication pipeline: stage_1 → stage_2 → stage_3 → static build.

Each dynamic-engine stage runs in its own subprocess — same as invoking
`python engine/dynamic_engine/stage_N.py` directly. This avoids shared-process
issues (import/path drift, Ollama context pressure) that can break long runs.

Run from project root:
    python ui/backend/generate.py
    python ui/backend/generate.py --ui
"""

from __future__ import annotations

import os
import subprocess
import sys
from pathlib import Path
from typing import Any, Callable

ROOT = Path(__file__).resolve().parent.parent.parent
BACKEND_DIR = Path(__file__).resolve().parent
DYNAMIC_ENGINE = ROOT / "engine" / "dynamic_engine"
STATIC_ENGINE = ROOT / "engine" / "static_engine"

_OLLAMA_STAGES = frozenset({"stage_1", "stage_2", "stage_3"})


def _setup_paths() -> None:
    for directory in (ROOT, DYNAMIC_ENGINE, STATIC_ENGINE):
        path = str(directory)
        if path not in sys.path:
            sys.path.insert(0, path)


def _ui_progress_callback() -> Callable[[str], None] | None:
    if "--ui" not in sys.argv:
        return None
    if str(BACKEND_DIR) not in sys.path:
        sys.path.insert(0, str(BACKEND_DIR))
    from store import save_generate_status  # noqa: E402

    def _update(step: str) -> None:
        save_generate_status(
            {"running": True, "step": step, "error": None, "finished_at": None}
        )

    return _update


def _release_ollama_between_stages() -> None:
    """Free VRAM between stage subprocesses — mirrors running stages one-by-one in a shell."""
    _setup_paths()
    try:
        from ollama import terminate_ollama  # noqa: E402
        from utils import CONFIG_PATH, load_config, log_stderr  # noqa: E402

        terminate_ollama(load_config(CONFIG_PATH))
    except Exception as exc:
        from utils import log_stderr  # noqa: E402

        log_stderr(f"Ollama: between-stage unload skipped ({exc})")


def _run_stage_script(script: Path, label: str) -> None:
    """Run a stage script as a child process; stream output; raise on non-zero exit."""
    from utils import log_stderr  # noqa: E402

    if not script.is_file():
        raise FileNotFoundError(f"Pipeline script not found: {script}")

    log_stderr(f"\n=== {label} ===")
    env = {**os.environ, "PYTHONUNBUFFERED": "1"}
    process = subprocess.Popen(
        [sys.executable, "-u", str(script)],
        cwd=str(ROOT),
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        text=True,
        encoding="utf-8",
        errors="replace",
        env=env,
    )

    assert process.stdout is not None
    for line in process.stdout:
        log_stderr(line.rstrip("\n"))

    returncode = process.wait()
    if returncode != 0:
        raise RuntimeError(f"{label} failed (exit {returncode})")


def generate(progress_callback: Callable[[str], None] | None = None) -> dict[str, Any]:
    """Run all pipeline stages in order. Raises on first failure."""
    _setup_paths()

    from utils import configure_stdio_utf8, ensure_project_path, log_stderr  # noqa: E402

    configure_stdio_utf8()
    ensure_project_path()

    steps: list[tuple[str, str, Path]] = [
        ("stage_1", "Stage 1 — keywords & tailoring", DYNAMIC_ENGINE / "stage_1.py"),
        ("stage_2", "Stage 2 — tailored resume", DYNAMIC_ENGINE / "stage_2.py"),
        ("stage_3", "Stage 3 — cover letter", DYNAMIC_ENGINE / "stage_3.py"),
        ("build", "Static build — CV & cover letter PDFs", STATIC_ENGINE / "build.py"),
    ]

    if progress_callback is None:
        progress_callback = _ui_progress_callback()

    results: dict[str, Any] = {}
    for index, (key, label, script) in enumerate(steps):
        if progress_callback:
            progress_callback(key)
        _run_stage_script(script, label)
        results[key] = {"status": "ok"}
        if key in _OLLAMA_STAGES and index < len(steps) - 1:
            _release_ollama_between_stages()

    return results


def main() -> None:
    _setup_paths()
    from utils import configure_stdio_utf8, log_stderr  # noqa: E402

    configure_stdio_utf8()
    try:
        outcome = generate()
    except Exception as exc:
        log_stderr(f"Error: {exc}")
        raise SystemExit(1) from exc

    build_results = outcome.get("build", [])
    if isinstance(build_results, list) and build_results:
        log_stderr(f"Built {len(build_results)} application(s).")
    else:
        log_stderr("Pipeline complete.")


if __name__ == "__main__":
    main()
