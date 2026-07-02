"""Parser verification gates — fail closed when unresolved issues remain."""

from __future__ import annotations

import json
from datetime import UTC, datetime
from pathlib import Path
from typing import Any


class ParserGateError(RuntimeError):
    """Raised when parser verification fails and fail_on_unresolved is enabled."""


PipelineHaltError = ParserGateError


def default_failure_report_path() -> Path:
    return Path(__file__).resolve().parent / "data" / "pipeline_failure.json"


def parser_review_failures(parser_review: dict[str, Any] | None) -> dict[str, list[str]]:
    if not isinstance(parser_review, dict):
        return {"_parser_review": ["parser_review is missing or invalid"]}

    failures: dict[str, list[str]] = {}
    for section, result in parser_review.items():
        if not isinstance(result, dict):
            failures[section] = ["invalid parser review entry"]
            continue
        if result.get("ok", True):
            continue
        issues = result.get("issues", [])
        if isinstance(issues, list) and issues:
            failures[section] = [str(item) for item in issues]
        else:
            failures[section] = ["parser check failed with no issue detail"]
    return failures


def format_parser_failures(app_key: str, stage_label: str, failures: dict[str, list[str]]) -> str:
    lines = [f"{stage_label} parser gate FAILED for {app_key} — build halted."]
    for section in sorted(failures):
        for issue in failures[section]:
            lines.append(f"  • {section}: {issue}")
    lines.append("Fix the issues above and re-run the dynamic engine before building PDFs.")
    return "\n".join(lines)


def fail_on_unresolved_enabled(config: dict, stage_key: str) -> bool:
    if stage_key == "stage_3":
        return False
    return bool(config.get(stage_key, {}).get("parser_verification", {}).get("fail_on_unresolved", True))


def enforce_parser_gate(
    app_key: str,
    parser_review: dict[str, Any] | None,
    *,
    stage_label: str,
    fail_on_unresolved: bool = True,
    failure_report_path: Path | None = None,
) -> None:
    if not fail_on_unresolved:
        return
    failures = parser_review_failures(parser_review)
    if failures:
        if failure_report_path is not None:
            write_pipeline_failure_report(
                failure_report_path,
                stage_label=stage_label,
                app_key=app_key,
                failures=failures,
            )
        raise ParserGateError(format_parser_failures(app_key, stage_label, failures))


def write_pipeline_failure_report(
    path: Path,
    *,
    stage_label: str,
    app_key: str,
    failures: dict[str, list[str]],
) -> None:
    payload = {
        "pipeline_status": "FAILED",
        "failed_at": datetime.now(UTC).isoformat(),
        "stage": stage_label,
        "application": app_key,
        "failures": failures,
    }
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload, indent=4), encoding="utf-8")


def clear_pipeline_failure_report(path: Path) -> None:
    if path.is_file():
        path.unlink()


def assert_pipeline_not_failed(payload: dict[str, Any], *, label: str) -> None:
    if payload.get("pipeline_status") == "FAILED":
        raise ParserGateError(
            f"Refusing to build — {label} reports pipeline_status=FAILED. "
            "Re-run the dynamic engine after fixing validation errors."
        )


def assert_application_parser_passed(app_key: str, application: dict[str, Any], *, stage_label: str) -> None:
    """Hard gate for static_engine — application payload must have parser_review.ok everywhere."""
    enforce_parser_gate(app_key, application.get("parser_review"), stage_label=stage_label, fail_on_unresolved=True)
