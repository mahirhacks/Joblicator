"""Parse a single JSON object from a capable-model response."""

from __future__ import annotations

from typing import Any

from ollama import parse_llm_json


JSON_REPLY = (
    "Reply with a single JSON object only. No markdown fences, no commentary, no preamble. "
    "Use double quotes. Omit unknown optional fields rather than inventing values."
)


def parse_model_object(raw: str) -> dict[str, Any]:
    parsed = parse_llm_json(raw)
    if isinstance(parsed, dict):
        return parsed
    raise ValueError("Model did not return a JSON object")


def string_list(value: Any, *, max_items: int | None = None) -> list[str]:
    if isinstance(value, str):
        items = [part.strip() for part in value.split(",") if part.strip()]
    elif isinstance(value, list):
        items = [str(item).strip() for item in value if str(item).strip()]
    else:
        items = []
    if max_items is not None:
        return items[:max_items]
    return items
