"""
Run the full Joblication pipeline: stage_1 → stage_2 → stage_3 → static build.

Each dynamic-engine stage runs in its own subprocess — same as invoking
`python engine/dynamic_engine/stage_N.py` directly. This avoids shared-process
issues (import/path drift, Ollama context pressure) that can break long runs.

Run from project root:
    python ui/backend/generate.py
    python ui/backend/generate.py --ui
    python ui/backend/generate.py --from-stage stage_2 --slugs ryt_bank,grab
"""

from __future__ import annotations

import argparse
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

ALL_STEPS: list[tuple[str, str, Path]] = [
    ("stage_1", "Stage 1 — keywords & tailoring", DYNAMIC_ENGINE / "stage_1.py"),
    ("stage_2", "Stage 2 — tailored resume", DYNAMIC_ENGINE / "stage_2.py"),
    ("stage_3", "Stage 3 — cover letter", DYNAMIC_ENGINE / "stage_3.py"),
    ("build", "Static build — CV & cover letter PDFs", STATIC_ENGINE / "build.py"),
]

VALID_FROM_STAGES = frozenset(key for key, _, _ in ALL_STEPS)


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


def _run_stage_script(script: Path, label: str, env: dict[str, str] | None = None) -> None:
    """Run a stage script as a child process; stream output; raise on non-zero exit."""
    from utils import log_stderr  # noqa: E402

    if not script.is_file():
        raise FileNotFoundError(f"Pipeline script not found: {script}")

    log_stderr(f"\n=== {label} ===")
    child_env = {**os.environ, "PYTHONUNBUFFERED": "1"}
    if env:
        child_env.update(env)
    process = subprocess.Popen(
        [sys.executable, "-u", str(script)],
        cwd=str(ROOT),
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        text=True,
        encoding="utf-8",
        errors="replace",
        env=child_env,
    )

    assert process.stdout is not None
    for line in process.stdout:
        log_stderr(line.rstrip("\n"))

    returncode = process.wait()
    if returncode != 0:
        raise RuntimeError(f"{label} failed (exit {returncode})")


def _steps_from(from_stage: str, only_stage: str | None = None) -> list[tuple[str, str, Path]]:
    if from_stage not in VALID_FROM_STAGES:
        raise ValueError(f"Invalid from_stage: {from_stage}")
    for index, step in enumerate(ALL_STEPS):
        if step[0] == from_stage:
            sliced = ALL_STEPS[index:]
            if only_stage:
                if only_stage not in VALID_FROM_STAGES:
                    raise ValueError(f"Invalid only_stage: {only_stage}")
                return [item for item in sliced if item[0] == only_stage]
            return sliced
    raise ValueError(f"Unknown from_stage: {from_stage}")


def _apply_build_targets_to_steps(
    steps: list[tuple[str, str, Path]],
    targets: frozenset[str],
) -> list[tuple[str, str, Path]]:
    """Skip stage 3 when only the CV will be built."""
    if targets == frozenset({"cv"}):
        return [step for step in steps if step[0] != "stage_3"]
    return steps


def _build_targets_env(targets: frozenset[str]) -> dict[str, str]:
    if targets == frozenset({"cv", "letter"}):
        return {}
    return {"JOBLICATION_BUILD_TARGETS": ",".join(sorted(targets))}


def _slug_env(slugs: list[str] | None) -> dict[str, str]:
    env: dict[str, str] = {}
    if slugs:
        env["JOBLICATION_SLUGS"] = ",".join(slugs)
    return env


def generate(
    progress_callback: Callable[[str], None] | None = None,
    *,
    from_stage: str = "stage_1",
    only_stage: str | None = None,
    slugs: list[str] | None = None,
    build_targets: frozenset[str] | None = None,
) -> dict[str, Any]:
    """Run stages from ``from_stage``; per-app failures are recorded and isolated."""
    _setup_paths()

    from utils import configure_stdio_utf8, ensure_project_path  # noqa: E402

    configure_stdio_utf8()
    ensure_project_path()

    targets = build_targets or frozenset({"cv", "letter"})
    steps = _apply_build_targets_to_steps(_steps_from(from_stage, only_stage=only_stage), targets)
    slug_env = {**_slug_env(slugs), **_build_targets_env(targets)}
    if slugs:
        slug_env["JOBLICATION_FROM_STAGE"] = from_stage

    if progress_callback is None:
        progress_callback = _ui_progress_callback()

    results: dict[str, Any] = {}
    for index, (key, label, script) in enumerate(steps):
        if progress_callback:
            progress_callback(key)
        _run_stage_script(script, label, env=slug_env)
        results[key] = {"status": "ok"}
        if key in _OLLAMA_STAGES and index < len(steps) - 1:
            _release_ollama_between_stages()

    return results


def _parse_args(argv: list[str] | None = None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Run the Joblication generation pipeline.")
    parser.add_argument("--ui", action="store_true", help="Write progress to generate_status.json")
    parser.add_argument(
        "--from-stage",
        default="stage_1",
        choices=sorted(VALID_FROM_STAGES),
        help="Start at this stage (default: stage_1)",
    )
    parser.add_argument(
        "--slugs",
        default="",
        help="Comma-separated job slugs to process (default: all)",
    )
    parser.add_argument(
        "--only-stage",
        default=None,
        choices=sorted(VALID_FROM_STAGES),
        help="Run only this stage (must be at or after from-stage)",
    )
    parser.add_argument(
        "--build-targets",
        default="both",
        help="Documents to build: both, cv, letter (comma-separated)",
    )
    return parser.parse_args(argv)


def main() -> None:
    args = _parse_args()
    slugs = [part.strip() for part in args.slugs.split(",") if part.strip()] or None
    only_stage = args.only_stage

    _setup_paths()
    from utils import configure_stdio_utf8, log_stderr, parse_build_targets  # noqa: E402

    configure_stdio_utf8()
    targets = parse_build_targets(args.build_targets)
    try:
        outcome = generate(
            from_stage=args.from_stage,
            only_stage=only_stage,
            slugs=slugs,
            build_targets=targets,
        )
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
