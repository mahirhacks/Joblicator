"""
Run the full Joblication pipeline: stage_1 → stage_2 → stage_3 → static build.

Run from project root:
    python ui/backend/generate.py
"""

from __future__ import annotations

import sys
from pathlib import Path
from typing import Any, Callable

ROOT = Path(__file__).resolve().parent.parent.parent
BACKEND_DIR = Path(__file__).resolve().parent
DYNAMIC_ENGINE = ROOT / "engine" / "dynamic_engine"
STATIC_ENGINE = ROOT / "engine" / "static_engine"


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


def generate(progress_callback: Callable[[str], None] | None = None) -> dict[str, Any]:
    """Run all pipeline stages in order. Raises on first failure."""
    _setup_paths()

    from utils import configure_stdio_utf8, ensure_project_path, log_stderr  # noqa: E402

    configure_stdio_utf8()
    from stage_1 import run as run_stage_1  # noqa: E402
    from stage_2 import run as run_stage_2  # noqa: E402
    from stage_3 import run as run_stage_3  # noqa: E402
    from build import run as run_build  # noqa: E402
    from verification import ParserGateError  # noqa: E402

    ensure_project_path()

    steps: list[tuple[str, str, Callable[[], Any]]] = [
        ("stage_1", "Stage 1 — keywords & tailoring", run_stage_1),
        ("stage_2", "Stage 2 — tailored resume", run_stage_2),
        ("stage_3", "Stage 3 — cover letter", run_stage_3),
        ("build", "Static build — CV & cover letter PDFs", run_build),
    ]

    if progress_callback is None:
        progress_callback = _ui_progress_callback()

    results: dict[str, Any] = {}
    for key, label, step in steps:
        log_stderr(f"\n=== {label} ===")
        if progress_callback:
            progress_callback(key)
        try:
            results[key] = step()
        except ParserGateError as exc:
            raise RuntimeError(str(exc)) from exc

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
    log_stderr(f"\nPipeline complete: {len(build_results)} application(s) built.")


if __name__ == "__main__":
    main()
