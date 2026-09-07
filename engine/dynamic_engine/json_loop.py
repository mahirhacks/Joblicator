"""Write JSON → reviewer feedback → rewrite, with a hard cap of two review rounds."""

from __future__ import annotations

import json
import sys
from typing import Any, Callable

from model_client import call_model
from model_json import JSON_REPLY, parse_model_object
from utils import generation_options


def _messages(system: str, user: str) -> list[dict[str, str]]:
    return [{"role": "system", "content": system}, {"role": "user", "content": user}]


def _writer_options(config: dict[str, Any], kind: str) -> dict[str, Any]:
    options = dict(generation_options(config, kind))
    options.setdefault("max_tokens", 12288)
    return options


def call_json_model(
    config: dict[str, Any],
    *,
    app_key: str,
    label: str,
    system: str,
    prompt: dict[str, Any],
    kind: str,
) -> dict[str, Any]:
    print(f"{label} — {app_key} ...", file=sys.stderr)
    raw = call_model(
        config,
        _messages(
            system,
            (
                f"{label} for {app_key}.\n"
                f"{json.dumps(prompt, indent=2, ensure_ascii=False)}\n\n"
                f"{JSON_REPLY}"
            ),
        ),
        options=_writer_options(config, kind),
    )
    try:
        return parse_model_object(raw)
    except (json.JSONDecodeError, ValueError) as exc:
        raise RuntimeError(f"{label} returned invalid JSON for {app_key}: {exc}") from exc


def parse_review(parsed: Any) -> dict[str, Any]:
    if not isinstance(parsed, dict):
        return {"ok": False, "issues": [{"path": "", "feedback": "Reviewer did not return a JSON object."}]}

    issues: list[dict[str, str]] = []
    raw_issues = parsed.get("issues")
    if isinstance(raw_issues, list):
        for item in raw_issues:
            if isinstance(item, dict):
                path = str(item.get("path", "")).strip()
                feedback = str(item.get("feedback", item.get("message", ""))).strip()
                if path or feedback:
                    issues.append({"path": path, "feedback": feedback})
            else:
                text = str(item).strip()
                if text:
                    issues.append({"path": "", "feedback": text})
    elif isinstance(raw_issues, str) and raw_issues.strip():
        issues.append({"path": "", "feedback": raw_issues.strip()})

    ok_flag = parsed.get("ok")
    if issues:
        return {"ok": False, "issues": issues}
    if ok_flag is False:
        return {
            "ok": False,
            "issues": [{"path": "", "feedback": str(parsed.get("feedback", "Reviewer rejected the draft.")).strip()}],
        }
    return {"ok": True, "issues": []}


def run_write_review_loop(
    config: dict[str, Any],
    *,
    app_key: str,
    document_label: str,
    writer_system: str,
    reviewer_system: str,
    base_prompt: dict[str, Any],
    normalize: Callable[[dict[str, Any]], dict[str, Any]] | None = None,
    max_review_rounds: int = 2,
) -> tuple[dict[str, Any], dict[str, Any]]:
    """Write JSON, review, rewrite at most twice. Returns (document, review meta).

    If ``normalize`` is set it is applied to the writer output before review and
    before returning, so later stages always see the stored schema.
    """

    def _normalize(parsed: dict[str, Any]) -> dict[str, Any]:
        if normalize is None:
            return parsed
        return normalize(parsed)

    draft = _normalize(
        call_json_model(
            config,
            app_key=app_key,
            label=f"{document_label} writer",
            system=writer_system,
            prompt={**base_prompt, "task": f"Write the complete {document_label} JSON."},
            kind="creative",
        )
    )

    last_review = {"ok": True, "issues": []}
    rounds = 0
    for round_index in range(1, max(1, max_review_rounds) + 1):
        last_review = parse_review(
            call_json_model(
                config,
                app_key=app_key,
                label=f"{document_label} reviewer (round {round_index})",
                system=reviewer_system,
                prompt={
                    **base_prompt,
                    "task": (
                        "Review the document JSON. Return ok/issues only. "
                        "Do not rewrite the document."
                    ),
                    "document": draft,
                },
                kind="precise",
            )
        )
        rounds = round_index
        if last_review["ok"]:
            break
        draft = _normalize(
            call_json_model(
                config,
                app_key=app_key,
                label=f"{document_label} writer repair (round {round_index})",
                system=writer_system,
                prompt={
                    **base_prompt,
                    "task": (
                        "Revise the full document JSON using reviewer_issues. "
                        "Return the complete document, not a partial patch."
                    ),
                    "current_document": draft,
                    "reviewer_issues": last_review["issues"],
                },
                kind="creative",
            )
        )

    meta = {
        "ok": bool(last_review.get("ok")),
        "issues": list(last_review.get("issues") or []),
        "rounds": rounds,
    }
    return draft, meta
