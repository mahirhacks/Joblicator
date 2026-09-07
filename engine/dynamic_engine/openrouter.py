"""OpenRouter chat-completions client and model catalog helpers."""

from __future__ import annotations

import json
import time
import urllib.error
import urllib.parse
import urllib.request
from typing import Any

from utils import log_stderr


_DEFAULT_BASE_URL = "https://openrouter.ai/api/v1"
_GATEWAY_REASONING_EFFORTS = ("max", "xhigh", "high", "medium", "low", "minimal")


def _settings(config: dict[str, Any]) -> dict[str, str]:
    raw = config.get("openrouter", {})
    return {
        "base_url": str(raw.get("base_url", _DEFAULT_BASE_URL)).rstrip("/"),
        "api_key": str(raw.get("api_key", "")).strip(),
        "model": str(raw.get("model", "")).strip(),
        "reasoning_effort": str(raw.get("reasoning_effort", "")).strip().lower(),
        "app_url": str(raw.get("app_url", "")).strip(),
        "app_name": str(raw.get("app_name", "Joblication")).strip() or "Joblication",
    }


def _headers(settings: dict[str, str]) -> dict[str, str]:
    headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
    }
    if settings["api_key"]:
        headers["Authorization"] = f"Bearer {settings['api_key']}"
    if settings["app_url"]:
        headers["HTTP-Referer"] = settings["app_url"]
    if settings["app_name"]:
        headers["X-Title"] = settings["app_name"]
    return headers


def _read_json_response(request: urllib.request.Request, *, timeout: float) -> dict[str, Any]:
    with urllib.request.urlopen(request, timeout=timeout) as response:
        raw = response.read().decode("utf-8")
    parsed = json.loads(raw) if raw.strip() else {}
    return parsed if isinstance(parsed, dict) else {}


def list_openrouter_models(config: dict[str, Any]) -> list[dict[str, Any]]:
    """Return text-model metadata used by the settings model picker.

    OpenRouter publishes this catalog endpoint, including per-model reasoning
    capabilities. An API key is sent when configured, but is not required for
    the public catalog.
    """
    settings = _settings(config)
    query = urllib.parse.urlencode({"output_modalities": "text"})
    request = urllib.request.Request(
        f"{settings['base_url']}/models?{query}",
        headers=_headers(settings),
        method="GET",
    )
    try:
        response = _read_json_response(request, timeout=30)
    except urllib.error.HTTPError as exc:
        detail = exc.read().decode("utf-8", errors="replace")[:500]
        raise RuntimeError(f"OpenRouter model catalog request failed ({exc.code}): {detail}") from exc
    except (urllib.error.URLError, TimeoutError, OSError, json.JSONDecodeError) as exc:
        raise RuntimeError(f"Could not reach the OpenRouter model catalog: {exc}") from exc

    models: list[dict[str, Any]] = []
    for raw in response.get("data", []):
        if not isinstance(raw, dict):
            continue
        model_id = str(raw.get("id", "")).strip()
        if not model_id:
            continue
        architecture = raw.get("architecture") if isinstance(raw.get("architecture"), dict) else {}
        output_modalities = architecture.get("output_modalities", [])
        if isinstance(output_modalities, list) and output_modalities and "text" not in output_modalities:
            continue
        reasoning = raw.get("reasoning") if isinstance(raw.get("reasoning"), dict) else None
        supported_parameters = raw.get("supported_parameters", [])
        if not isinstance(supported_parameters, list):
            supported_parameters = []
        efforts = reasoning.get("supported_efforts") if reasoning else None
        if isinstance(efforts, list):
            efforts = [str(value).lower() for value in efforts if str(value).strip()]
        elif reasoning and efforts is None:
            efforts = list(_GATEWAY_REASONING_EFFORTS)
        else:
            efforts = []
        models.append(
            {
                "id": model_id,
                "name": str(raw.get("name", model_id)).strip() or model_id,
                "context_length": raw.get("context_length"),
                "supported_parameters": [str(value) for value in supported_parameters],
                "reasoning": {
                    "supported_efforts": efforts,
                    "default_effort": str(reasoning.get("default_effort", "")).lower() if reasoning else "",
                    "default_enabled": bool(reasoning.get("default_enabled", False)) if reasoning else False,
                    "mandatory": bool(reasoning.get("mandatory", False)) if reasoning else False,
                    "supports_max_tokens": bool(reasoning.get("supports_max_tokens", False)) if reasoning else False,
                }
                if reasoning or "reasoning" in supported_parameters
                else None,
            }
        )
    return sorted(models, key=lambda item: (item["name"].lower(), item["id"].lower()))


def _generation_payload(config: dict[str, Any], options: dict[str, Any] | None) -> dict[str, Any]:
    generation = config.get("generation", {})
    merged = dict(options or {})
    payload: dict[str, Any] = {}
    for key in ("temperature", "top_p"):
        value = merged.get(key, generation.get(key))
        if value is None:
            continue
        try:
            payload[key] = float(value)
        except (TypeError, ValueError):
            continue

    try:
        seed = int(merged.get("seed", generation.get("seed", 0)))
    except (TypeError, ValueError):
        seed = 0
    if seed > 0:
        payload["seed"] = seed

    try:
        max_tokens = int(merged.get("max_tokens", generation.get("max_tokens", 4096)))
    except (TypeError, ValueError):
        max_tokens = 4096
    if max_tokens > 0:
        payload["max_tokens"] = max_tokens
    return payload


def _content_from_response(data: dict[str, Any]) -> str:
    choices = data.get("choices", [])
    if not isinstance(choices, list) or not choices:
        return ""
    first = choices[0] if isinstance(choices[0], dict) else {}
    message = first.get("message", {}) if isinstance(first.get("message"), dict) else {}
    content = message.get("content", "")
    if isinstance(content, str):
        return content.strip()
    if isinstance(content, list):
        return "".join(
            str(part.get("text", "")) if isinstance(part, dict) else str(part)
            for part in content
        ).strip()
    return ""


def _format_failure(data: dict[str, Any]) -> str:
    error = data.get("error")
    if isinstance(error, dict):
        detail = str(error.get("message") or error)
    elif error:
        detail = str(error)
    else:
        detail = json.dumps(data, ensure_ascii=False)[:500]
    return f"OpenRouter returned no usable content: {detail}"


def call_openrouter(
    config: dict[str, Any],
    messages: list[dict[str, str]],
    *,
    options: dict[str, Any] | None = None,
) -> str:
    """Send one OpenAI-compatible non-streaming chat request through OpenRouter."""
    settings = _settings(config)
    if not settings["api_key"]:
        raise ValueError("OpenRouter API key is required. Add it under Settings > AI provider.")
    if not settings["model"]:
        raise ValueError("OpenRouter model is required. Select one under Settings > AI provider.")

    payload: dict[str, Any] = {
        "model": settings["model"],
        "messages": messages,
        "stream": False,
        **_generation_payload(config, options),
    }
    if settings["reasoning_effort"]:
        payload["reasoning"] = {"effort": settings["reasoning_effort"], "exclude": True}

    last_data: dict[str, Any] = {}
    last_error: Exception | None = None
    for attempt in range(3):
        request = urllib.request.Request(
            f"{settings['base_url']}/chat/completions",
            data=json.dumps(payload).encode("utf-8"),
            headers=_headers(settings),
            method="POST",
        )
        try:
            last_data = _read_json_response(request, timeout=600)
        except urllib.error.HTTPError as exc:
            detail = exc.read().decode("utf-8", errors="replace")[:1000]
            if exc.code in {429, 500, 502, 503, 504} and attempt < 2:
                log_stderr(f"OpenRouter: request failed ({exc.code}, attempt {attempt + 1}/3), retrying in 3s ...")
                time.sleep(3)
                continue
            raise RuntimeError(f"OpenRouter request failed ({exc.code}): {detail}") from exc
        except (urllib.error.URLError, TimeoutError, OSError, json.JSONDecodeError) as exc:
            last_error = exc
            if attempt < 2:
                log_stderr(f"OpenRouter: connection error (attempt {attempt + 1}/3), retrying in 3s ...")
                time.sleep(3)
                continue
            raise RuntimeError(f"Could not reach OpenRouter: {exc}") from exc

        content = _content_from_response(last_data)
        if content:
            return content
        if attempt < 2:
            log_stderr(f"OpenRouter: empty response (attempt {attempt + 1}/3), retrying in 3s ...")
            time.sleep(3)

    message = _format_failure(last_data)
    if last_error is not None:
        message += f" (last connection error: {last_error})"
    raise RuntimeError(message)
