"""
Run generation: CV JSON → letter JSON → static PDF build.

Jobs run one at a time through every selected stage. CV-only skips the letter
writer; letter-only skips the CV writer. Each dynamic-engine stage runs in its
own subprocess.

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

SOURCE_ROOT = Path(__file__).resolve().parents[2]
if str(SOURCE_ROOT) not in sys.path:
    sys.path.insert(0, str(SOURCE_ROOT))

from joblication_runtime import DATA_ROOT, RESOURCE_ROOT

ROOT = DATA_ROOT
BACKEND_DIR = Path(__file__).resolve().parent
DYNAMIC_ENGINE = RESOURCE_ROOT / "engine" / "dynamic_engine"
STATIC_ENGINE = RESOURCE_ROOT / "engine" / "static_engine"

_OLLAMA_STAGES = frozenset({"stage_2", "stage_3"})

ALL_STEPS: list[tuple[str, str, Path]] = [
    ("stage_2", "CV — write & review JSON", DYNAMIC_ENGINE / "stage_2.py"),
    ("stage_3", "Letter — write & review JSON", DYNAMIC_ENGINE / "stage_3.py"),
    ("build", "Static build — CV & cover letter PDFs", STATIC_ENGINE / "build.py"),
]

VALID_FROM_STAGES = frozenset(key for key, _, _ in ALL_STEPS)


def _setup_paths() -> None:
    for directory in (RESOURCE_ROOT, DYNAMIC_ENGINE, STATIC_ENGINE):
        path = str(directory)
        if path not in sys.path:
            sys.path.insert(0, path)


def _ui_progress_callback() -> Callable[..., None] | None:
    if "--ui" not in sys.argv:
        return None
    if str(BACKEND_DIR) not in sys.path:
        sys.path.insert(0, str(BACKEND_DIR))
    from store import save_generate_status  # noqa: E402

    def _update(step: str, queue: dict[str, Any] | None = None) -> None:
        payload: dict[str, Any] = {
            "running": True,
            "step": step,
            "error": None,
            "finished_at": None,
        }
        if queue is not None:
            payload["queue"] = queue
        save_generate_status(payload)

    return _update


def _queued_slugs(slugs: list[str] | None) -> list[str]:
    """Return the job queue in caller order, or every visible application."""
    if slugs is not None:
        queued = [str(slug).strip() for slug in slugs if str(slug).strip()]
        if not queued:
            raise ValueError("No applications to generate")
        return queued

    from utils import CONFIG_PATH, load_config, load_json, resolve_path  # noqa: E402

    config = load_config(CONFIG_PATH)
    apps_path = resolve_path(config, "applications", "json", "applications/local_applications.json")
    applications = load_json(apps_path)
    queued = [
        slug
        for slug, record in applications.items()
        if isinstance(record, dict) and not record.get("_system")
    ]
    if not queued:
        raise ValueError("No applications to generate")
    return queued


def _queue_snapshot(
    queued: list[str],
    *,
    index: int,
    slug: str | None,
    completed: list[str],
    failed: list[str],
) -> dict[str, Any]:
    current = slug or ""
    remaining = [item for item in queued[max(index, 0) :] if item != current]
    return {
        "index": index,
        "total": len(queued),
        "slug": slug,
        "completed": list(completed),
        "failed": list(failed),
        "remaining": remaining,
    }


def _release_ollama_between_stages() -> None:
    """Free VRAM between stage subprocesses — mirrors running stages one-by-one in a shell."""
    _setup_paths()
    try:
        from model_client import release_model  # noqa: E402
        from utils import CONFIG_PATH, load_config, log_stderr  # noqa: E402

        release_model(load_config(CONFIG_PATH))
    except Exception as exc:
        from utils import log_stderr  # noqa: E402

        log_stderr(f"Model release between stages skipped ({exc})")


def _run_stage_script(script: Path, label: str, env: dict[str, str] | None = None) -> None:
    """Run a stage script as a child process; stream output; raise on non-zero exit."""
    from utils import log_stderr  # noqa: E402

    frozen = bool(getattr(sys, "frozen", False))
    if not frozen and not script.is_file():
        raise FileNotFoundError(f"Pipeline script not found: {script}")

    log_stderr(f"\n=== {label} ===")
    child_env = {**os.environ, "PYTHONUNBUFFERED": "1"}
    if env:
        child_env.update(env)
    command = (
        [sys.executable, "--joblication-mode", "stage", script.stem]
        if frozen
        else [sys.executable, "-u", str(script)]
    )
    process = subprocess.Popen(
        command,
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


def _normalize_from_stage(from_stage: str) -> str:
    if from_stage == "stage_1":
        return "stage_2"
    return from_stage


def _apply_build_targets_to_steps(
    steps: list[tuple[str, str, Path]],
    targets: frozenset[str],
) -> list[tuple[str, str, Path]]:
    """Keep CV and letter writers independent of each other."""
    skip: set[str] = set()
    if "letter" not in targets:
        skip.add("stage_3")
    if "cv" not in targets:
        skip.add("stage_2")
    return [step for step in steps if step[0] not in skip]


def _build_targets_env(targets: frozenset[str]) -> dict[str, str]:
    if targets == frozenset({"cv", "letter"}):
        return {}
    return {"JOBLICATION_BUILD_TARGETS": ",".join(sorted(targets))}


def _slug_env(slugs: list[str] | None) -> dict[str, str]:
    env: dict[str, str] = {}
    if slugs:
        env["JOBLICATION_SLUGS"] = ",".join(slugs)
    return env


def _preflight_provider() -> None:
    from model_client import selected_provider  # noqa: E402
    from utils import CONFIG_PATH, load_config  # noqa: E402

    config = load_config(CONFIG_PATH)
    provider = selected_provider(config)
    settings = config.get(provider) if isinstance(config.get(provider), dict) else {}
    if not isinstance(settings, dict):
        settings = {}
    if provider == "openrouter" and not str(settings.get("api_key", "")).strip():
        raise ValueError("OpenRouter API key is required. Add it under Settings > AI provider.")
    if not str(settings.get("model", "")).strip():
        label = "OpenRouter" if provider == "openrouter" else "Ollama"
        raise ValueError(f"{label} model is required. Select one under Settings > AI provider.")


def generate(
    progress_callback: Callable[..., None] | None = None,
    *,
    from_stage: str = "stage_2",
    only_stage: str | None = None,
    slugs: list[str] | None = None,
    build_targets: frozenset[str] | None = None,
) -> dict[str, Any]:
    """Run each job through the selected stages before starting the next job."""
    _setup_paths()

    from utils import configure_stdio_utf8, ensure_project_path, log_stderr  # noqa: E402

    configure_stdio_utf8()
    ensure_project_path()
    from_stage = _normalize_from_stage(from_stage)
    if only_stage == "stage_1":
        only_stage = "stage_2"
    if from_stage != "build":
        _preflight_provider()

    targets = build_targets or frozenset({"cv", "letter"})
    steps = _apply_build_targets_to_steps(_steps_from(from_stage, only_stage=only_stage), targets)
    queued = _queued_slugs(slugs)
    extra_env = {**_build_targets_env(targets), "JOBLICATION_FROM_STAGE": from_stage}

    if progress_callback is None:
        progress_callback = _ui_progress_callback()

    completed: list[str] = []
    failed: list[dict[str, str]] = []
    last_llm = next((key for key, _, _ in reversed(steps) if key in _OLLAMA_STAGES), None)
    released = False
    total = len(queued)

    try:
        for index, slug in enumerate(queued, start=1):
            failed_slugs = [item["slug"] for item in failed]
            queue = _queue_snapshot(
                queued,
                index=index,
                slug=slug,
                completed=completed,
                failed=failed_slugs,
            )
            log_stderr(f"\n=== Queue {index}/{total}: {slug} ===")
            job_ok = True
            for key, label, script in steps:
                if progress_callback:
                    progress_callback(key, queue=queue)
                try:
                    _run_stage_script(
                        script,
                        f"{label} ({index}/{total} {slug})",
                        env={**_slug_env([slug]), **extra_env},
                    )
                except Exception as exc:
                    message = str(exc).strip() or repr(exc)
                    log_stderr(f"Queue: {slug} failed during {key}: {message}")
                    failed.append({"slug": slug, "stage": key, "error": message})
                    job_ok = False
                    from batch_resilience import is_configuration_error  # noqa: E402

                    if is_configuration_error(message):
                        raise RuntimeError(message) from exc
                    break
                if key == last_llm and index == total:
                    _release_ollama_between_stages()
                    released = True
            if job_ok:
                completed.append(slug)
    finally:
        if not released:
            _release_ollama_between_stages()

    return {
        "completed": completed,
        "failed": failed,
        "build": completed,
    }


def _parse_args(argv: list[str] | None = None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Run the Joblication generation pipeline.")
    parser.add_argument("--ui", action="store_true", help="Write progress to generate_status.json")
    parser.add_argument(
        "--from-stage",
        default="stage_2",
        choices=sorted(VALID_FROM_STAGES | {"stage_1"}),
        help="Start at this stage (default: stage_2). stage_1 is treated as stage_2.",
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

    completed = outcome.get("completed") or []
    failed = outcome.get("failed") or []
    if failed:
        log_stderr(f"Queue complete: {len(completed)} succeeded, {len(failed)} failed.")
        for item in failed:
            slug = item.get("slug") if isinstance(item, dict) else item
            error = item.get("error") if isinstance(item, dict) else ""
            log_stderr(f"  - {slug}: {error}" if error else f"  - {slug}")
    else:
        log_stderr(f"Queue complete: {len(completed)} application(s).")


if __name__ == "__main__":
    main()
