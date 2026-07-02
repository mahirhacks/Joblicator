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
DYNAMIC_ENGINE = ROOT / "engine" / "dynamic_engine"
STATIC_ENGINE = ROOT / "engine" / "static_engine"


def _setup_paths() -> None:
    for directory in (ROOT, DYNAMIC_ENGINE, STATIC_ENGINE):
        path = str(directory)
        if path not in sys.path:
            sys.path.insert(0, path)


def generate(progress_callback: Callable[[str], None] | None = None) -> dict[str, Any]:
    """Run all pipeline stages in order. Raises on first failure."""
    _setup_paths()

    from utils import ensure_project_path  # noqa: E402
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

    results: dict[str, Any] = {}
    for key, label, step in steps:
        print(f"\n=== {label} ===", file=sys.stderr)
        if progress_callback:
            progress_callback(key)
        try:
            results[key] = step()
        except ParserGateError as exc:
            raise RuntimeError(str(exc)) from exc

    return results


def main() -> None:
    try:
        outcome = generate()
    except (FileNotFoundError, ValueError, RuntimeError, ImportError) as exc:
        print(f"Error: {exc}", file=sys.stderr)
        raise SystemExit(1) from exc

    build_results = outcome.get("build", [])
    print(
        f"\nPipeline complete: {len(build_results)} application(s) built.",
        file=sys.stderr,
    )


if __name__ == "__main__":
    main()
