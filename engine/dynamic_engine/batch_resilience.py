"""Per-application resilience policy for unattended generation batches."""

from __future__ import annotations

import re
from datetime import UTC, datetime
from typing import Any, Callable


TERMINAL_FAILURE_STATUSES = frozenset({"failed", "skipped_low_fit", "skipped_dependency"})
SUCCESS_STATUSES = frozenset({
    "generated",
    "accepted_low_quality",
    "accepted_after_retries",
    "reused_previous",
})


def resilience_settings(config: dict[str, Any]) -> dict[str, Any]:
    raw = config.get("batch_resilience", {})
    return {
        "enabled": bool(raw.get("enabled", True)),
        "continue_on_error": bool(raw.get("continue_on_error", True)),
        "max_attempts_per_application": max(1, int(raw.get("max_attempts_per_application", 3))),
        "skip_fit_below": max(1, min(10, int(raw.get("skip_fit_below", 5)))),
        "accept_low_quality_fit_at_most": max(
            1, min(10, int(raw.get("accept_low_quality_fit_at_most", 6)))
        ),
        "reuse_previous_success": bool(raw.get("reuse_previous_success", True)),
    }


def generation_meta(content: Any) -> dict[str, Any]:
    if not isinstance(content, dict):
        return {}
    meta = content.get("_generation", {})
    return meta if isinstance(meta, dict) else {}


def is_buildable(content: Any) -> bool:
    if not isinstance(content, dict):
        return False
    status = str(generation_meta(content).get("status", "")).strip()
    return status not in TERMINAL_FAILURE_STATUSES


def fit_score(content: Any) -> int | None:
    if not isinstance(content, dict):
        return None
    review = content.get("fit_review", {})
    if not isinstance(review, dict):
        return None
    try:
        score = int(review.get("fit_score"))
    except (TypeError, ValueError):
        return None
    return max(1, min(10, score))


def minimum_quality(content: Any) -> int | None:
    if not isinstance(content, dict):
        return None
    review = content.get("quality_review", {})
    if not isinstance(review, dict):
        return None
    scores: list[int] = []
    for result in review.values():
        if not isinstance(result, dict):
            continue
        try:
            scores.append(int(result.get("quality")))
        except (TypeError, ValueError):
            continue
    return min(scores) if scores else None


def _flatten_strings(value: Any) -> list[str]:
    if isinstance(value, str):
        return [value]
    if isinstance(value, dict):
        output: list[str] = []
        for key, item in value.items():
            output.append(str(key))
            output.extend(_flatten_strings(item))
        return output
    if isinstance(value, (list, tuple, set)):
        output = []
        for item in value:
            output.extend(_flatten_strings(item))
        return output
    return []


_FIT_STOPWORDS = frozenset({
    "and", "the", "with", "for", "using", "experience", "knowledge", "strong",
    "framework", "frameworks", "development", "engineering", "engineer", "systems",
})


def estimate_profile_fit(stage1_entry: dict[str, Any], profile: dict[str, Any]) -> int | None:
    """Estimate fit without an LLM so a model outage still has a terminal policy."""
    context = stage1_entry.get("context", {}) if isinstance(stage1_entry, dict) else {}
    must_have = context.get("must_have", {}) if isinstance(context, dict) else {}
    if isinstance(must_have, dict):
        requirement_values = must_have.values()
    elif isinstance(must_have, (list, tuple, set)):
        requirement_values = must_have
    else:
        requirement_values = []
    requirements = [
        item
        for value in requirement_values
        for item in _flatten_strings(value)
        if item.strip()
    ]
    if not requirements:
        return None

    profile_text = " ".join(_flatten_strings(profile)).lower()
    profile_tokens = set(re.findall(r"[a-z0-9+#.]{2,}", profile_text))
    matched = 0
    considered = 0
    for requirement in requirements:
        tokens = [
            token
            for token in re.findall(r"[a-z0-9+#.]{2,}", requirement.lower())
            if token not in _FIT_STOPWORDS
        ]
        if not tokens:
            continue
        considered += 1
        required_hits = 1 if len(tokens) <= 2 else 2
        if sum(1 for token in set(tokens) if token in profile_tokens) >= required_hits:
            matched += 1

    if not considered:
        return None
    return max(1, min(10, round(1 + 9 * (matched / considered))))


def _annotate(
    content: dict[str, Any],
    *,
    stage: str,
    status: str,
    attempts: int,
    fit: int | None,
    quality: int | None,
    errors: list[str],
) -> dict[str, Any]:
    output = dict(content)
    output["_generation"] = {
        "status": status,
        "stage": stage,
        "attempts": attempts,
        "fit_score": fit,
        "quality_score": quality,
        "errors": errors[-3:],
        "finished_at": datetime.now(UTC).isoformat(),
    }
    return output


def failure_record(
    *,
    stage: str,
    app_key: str,
    title: str,
    status: str,
    attempts: int,
    fit: int | None,
    errors: list[str],
    dependency: str | None = None,
) -> dict[str, Any]:
    reason = (
        f"Profile fit {fit}/10 is below the configured threshold."
        if status == "skipped_low_fit" and fit is not None
        else f"Required upstream stage is unavailable: {dependency}."
        if status == "skipped_dependency"
        else "Generation failed after all configured attempts."
    )
    return {
        "role_title": title or app_key,
        "fit_review": {
            "fit_score": fit or 0,
            "fit_summary": reason,
            "strengths": [],
            "gaps": [],
        },
        "_generation": {
            "status": status,
            "stage": stage,
            "attempts": attempts,
            "fit_score": fit,
            "quality_score": None,
            "reason": reason,
            "dependency": dependency,
            "errors": errors[-3:],
            "finished_at": datetime.now(UTC).isoformat(),
        },
    }


def process_with_resilience(
    config: dict[str, Any],
    *,
    stage: str,
    app_key: str,
    title: str,
    generate: Callable[[], dict[str, Any]],
    previous: dict[str, Any] | None = None,
    fallback_fit: int | None = None,
) -> dict[str, Any]:
    """Generate one application without allowing it to terminate the batch."""
    policy = resilience_settings(config)
    max_attempts = policy["max_attempts_per_application"] if policy["enabled"] else 1
    errors: list[str] = []
    last_candidate: dict[str, Any] | None = None

    for attempt in range(1, max_attempts + 1):
        try:
            candidate = generate()
            last_candidate = candidate
            candidate_fit = fit_score(candidate) or fallback_fit
            candidate_quality = minimum_quality(candidate)
            min_target = int(config.get(stage, {}).get("verification", {}).get("min_quality", 7))

            if (
                candidate_quality is not None
                and candidate_quality < min_target
                and candidate_fit is not None
                and candidate_fit > policy["accept_low_quality_fit_at_most"]
                and attempt < max_attempts
            ):
                errors.append(
                    f"attempt {attempt}: quality {candidate_quality}/10 below target {min_target}/10"
                )
                print(
                    f"{stage} - {app_key}: valid draft scored {candidate_quality}/10; "
                    f"retrying ({attempt}/{max_attempts})",
                    flush=True,
                )
                continue

            if candidate_quality is not None and candidate_quality < min_target:
                status = (
                    "accepted_low_quality"
                    if candidate_fit is not None
                    and candidate_fit <= policy["accept_low_quality_fit_at_most"]
                    else "accepted_after_retries"
                )
            else:
                status = "generated"
            return _annotate(
                candidate,
                stage=stage,
                status=status,
                attempts=attempt,
                fit=candidate_fit,
                quality=candidate_quality,
                errors=errors,
            )
        except Exception as exc:  # application isolation is intentionally broad
            message = str(exc).strip() or repr(exc)
            errors.append(f"attempt {attempt}: {message}")
            print(
                f"{stage} - {app_key}: attempt {attempt}/{max_attempts} failed: {message}",
                flush=True,
            )
            if not policy["continue_on_error"]:
                raise

    terminal_fit = fit_score(last_candidate) or fit_score(previous) or fallback_fit
    if last_candidate is not None:
        return _annotate(
            last_candidate,
            stage=stage,
            status="accepted_after_retries",
            attempts=max_attempts,
            fit=terminal_fit,
            quality=minimum_quality(last_candidate),
            errors=errors,
        )

    if policy["reuse_previous_success"] and previous and is_buildable(previous):
        return _annotate(
            previous,
            stage=stage,
            status="reused_previous",
            attempts=max_attempts,
            fit=fit_score(previous) or terminal_fit,
            quality=minimum_quality(previous),
            errors=errors,
        )

    status = (
        "skipped_low_fit"
        if terminal_fit is not None and terminal_fit < policy["skip_fit_below"]
        else "failed"
    )
    return failure_record(
        stage=stage,
        app_key=app_key,
        title=title,
        status=status,
        attempts=max_attempts,
        fit=terminal_fit,
        errors=errors,
    )


def payload_status(updates: dict[str, Any]) -> str:
    statuses = {
        str(generation_meta(value).get("status", ""))
        for value in updates.values()
        if isinstance(value, dict)
    }
    return "COMPLETED_WITH_ISSUES" if statuses & TERMINAL_FAILURE_STATUSES else "OK"
