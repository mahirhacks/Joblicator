"""Ollama chat API, lifecycle (start / call / terminate), and LLM response parsing."""

from __future__ import annotations

import json
import re
import shutil
import subprocess
import sys
import time
import urllib.error
import urllib.request
from typing import Any


def _ollama_settings(config: dict) -> dict[str, Any]:
    raw = config.get("ollama", {})
    return {
        "base_url": str(raw.get("base_url", "http://127.0.0.1:11434")).rstrip("/"),
        "model": str(raw.get("model", "")).strip(),
        "auto_start": bool(raw.get("auto_start", True)),
    }


def ollama_is_running(config: dict, *, timeout: float = 3) -> bool:
    base_url = _ollama_settings(config)["base_url"]
    try:
        with urllib.request.urlopen(f"{base_url}/api/tags", timeout=timeout) as response:
            return response.status == 200
    except (urllib.error.URLError, TimeoutError, OSError):
        return False


def _ollama_api_post(
    base_url: str,
    path: str,
    payload: dict[str, Any],
    *,
    timeout: float = 120,
) -> dict[str, Any]:
    body = json.dumps(payload).encode("utf-8")
    request = urllib.request.Request(
        f"{base_url}{path}",
        data=body,
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    with urllib.request.urlopen(request, timeout=timeout) as response:
        raw = response.read().decode("utf-8")
        return json.loads(raw) if raw.strip() else {}


def list_running_ollama_models(config: dict) -> list[str]:
    """Models currently loaded in memory (from GET /api/ps)."""
    base_url = _ollama_settings(config)["base_url"]
    try:
        with urllib.request.urlopen(f"{base_url}/api/ps", timeout=5) as response:
            data = json.loads(response.read().decode("utf-8"))
    except (urllib.error.URLError, TimeoutError, OSError, json.JSONDecodeError):
        return []

    names: list[str] = []
    for entry in data.get("models", []):
        if not isinstance(entry, dict):
            continue
        name = str(entry.get("name", "")).strip()
        if name:
            names.append(name)
    return names


def unload_ollama_model(config: dict, model: str) -> bool:
    """Unload one model from RAM/VRAM (keep_alive=0)."""
    model = str(model).strip()
    if not model:
        return False

    settings = _ollama_settings(config)
    base_url = settings["base_url"]

    try:
        _ollama_api_post(
            base_url,
            "/api/generate",
            {"model": model, "keep_alive": 0},
            timeout=60,
        )
        return True
    except (urllib.error.URLError, TimeoutError, OSError, RuntimeError, json.JSONDecodeError):
        pass

    ollama_bin = shutil.which("ollama")
    if not ollama_bin:
        return False
    try:
        result = subprocess.run(
            [ollama_bin, "stop", model],
            capture_output=True,
            text=True,
            timeout=120,
            check=False,
        )
        return result.returncode == 0
    except (OSError, subprocess.TimeoutExpired):
        return False


def start_ollama(config: dict, *, wait_seconds: float = 45) -> None:
    """Ensure the Ollama HTTP server is reachable — spawn `ollama serve` if needed."""
    if ollama_is_running(config):
        return

    settings = _ollama_settings(config)
    if not settings["auto_start"]:
        raise RuntimeError(
            f"Ollama is not reachable at {settings['base_url']} and ollama.auto_start is false."
        )

    ollama_bin = shutil.which("ollama")
    if not ollama_bin:
        raise RuntimeError(
            f"Ollama is not running at {settings['base_url']} and the `ollama` CLI was not found on PATH."
        )

    print("Ollama: starting server ...", file=sys.stderr)
    popen_kwargs: dict[str, Any] = {
        "stdout": subprocess.DEVNULL,
        "stderr": subprocess.DEVNULL,
    }
    if sys.platform == "win32":
        popen_kwargs["creationflags"] = subprocess.CREATE_NEW_PROCESS_GROUP
    else:
        popen_kwargs["start_new_session"] = True

    subprocess.Popen([ollama_bin, "serve"], **popen_kwargs)

    deadline = time.monotonic() + wait_seconds
    while time.monotonic() < deadline:
        if ollama_is_running(config, timeout=2):
            print("Ollama: server ready", file=sys.stderr)
            return
        time.sleep(1)

    raise RuntimeError(f"Timed out waiting for Ollama at {settings['base_url']}")


def ensure_ollama_running(config: dict) -> None:
    start_ollama(config)


def terminate_ollama(config: dict) -> None:
    """Unload models from memory after the pipeline finishes — frees RAM for large models."""
    if not ollama_is_running(config, timeout=2):
        return

    settings = _ollama_settings(config)
    targets = list_running_ollama_models(config)
    if settings["model"] and settings["model"] not in targets:
        targets.append(settings["model"])

    if not targets:
        return

    unloaded: list[str] = []
    for model in targets:
        if unload_ollama_model(config, model):
            unloaded.append(model)

    if unloaded:
        print(f"Ollama: unloaded model(s) from memory — {', '.join(unloaded)}", file=sys.stderr)
    else:
        print("Ollama: could not confirm model unload (server may still hold weights)", file=sys.stderr)


def call_ollama(config: dict, messages: list[dict[str, str]]) -> str:
    ensure_ollama_running(config)

    ollama = config.get("ollama", {})
    generation = config.get("generation", {})

    base_url = ollama.get("base_url", "http://127.0.0.1:11434").rstrip("/")
    model = ollama.get("model", "")
    if not model:
        raise ValueError("config.yaml: ollama.model is required.")

    payload: dict[str, Any] = {
        "model": model,
        "messages": messages,
        "stream": False,
        "options": {
            "temperature": generation.get("temperature", 0.3),
            "num_ctx": generation.get("context_window", 16384),
        },
    }
    if "think" in ollama:
        payload["think"] = ollama["think"]

    body = json.dumps(payload).encode("utf-8")
    request = urllib.request.Request(
        f"{base_url}/api/chat",
        data=body,
        headers={"Content-Type": "application/json"},
        method="POST",
    )

    try:
        with urllib.request.urlopen(request, timeout=600) as response:
            data = json.loads(response.read().decode("utf-8"))
    except urllib.error.HTTPError as exc:
        detail = exc.read().decode("utf-8", errors="replace")
        raise RuntimeError(f"Ollama request failed ({exc.code}): {detail}") from exc
    except urllib.error.URLError as exc:
        raise RuntimeError(f"Could not reach Ollama at {base_url}: {exc.reason}") from exc

    content = data.get("message", {}).get("content", "")
    if not content:
        raise RuntimeError(f"Ollama returned no content: {data}")
    return content


def clean_llm_json(raw: str) -> str:
    text = re.sub(r"^```(?:json)?\s*|\s*```$", "", raw.strip())
    thinking = re.compile(
        r"<" + "redacted_thinking" + r">[\s\S]*?</" + "redacted_thinking" + r">",
        re.IGNORECASE,
    )
    text = thinking.sub("", text)
    return text.strip()


def _repair_json_text(text: str) -> str:
    repaired = re.sub(r",\s*([\]}])", r"\1", text)
    return repaired


def _iter_balanced_objects(text: str) -> list[str]:
    objects: list[str] = []
    index = 0
    while index < len(text):
        start = text.find("{", index)
        if start < 0:
            break
        depth = 0
        in_string = False
        escape = False
        for pos in range(start, len(text)):
            char = text[pos]
            if in_string:
                if escape:
                    escape = False
                elif char == "\\":
                    escape = True
                elif char == '"':
                    in_string = False
                continue
            if char == '"':
                in_string = True
            elif char == "{":
                depth += 1
            elif char == "}":
                depth -= 1
                if depth == 0:
                    objects.append(text[start : pos + 1])
                    index = pos + 1
                    break
        else:
            break
    return objects


def extract_string_array_from_raw(raw: str, key: str) -> list[str]:
    text = clean_llm_json(raw)
    pattern = rf'"{re.escape(key)}"\s*:\s*\['
    match = re.search(pattern, text, re.IGNORECASE)
    if not match:
        return []

    inner_start = match.end()
    depth = 1
    in_string = False
    escape = False
    end = inner_start
    for pos in range(inner_start, len(text)):
        char = text[pos]
        if in_string:
            if escape:
                escape = False
            elif char == "\\":
                escape = True
            elif char == '"':
                in_string = False
            continue
        if char == '"':
            in_string = True
        elif char == "[":
            depth += 1
        elif char == "]":
            depth -= 1
            if depth == 0:
                end = pos
                break

    inner = text[inner_start:end]
    items = re.findall(r'"((?:[^"\\]|\\.)*)"', inner)
    return [item.replace('\\"', '"').strip() for item in items if item.strip()]


def parse_llm_json(raw: str) -> Any:
    text = _repair_json_text(clean_llm_json(raw))
    try:
        return json.loads(text)
    except json.JSONDecodeError:
        pass

    for candidate in _iter_balanced_objects(text):
        try:
            return json.loads(_repair_json_text(candidate))
        except json.JSONDecodeError:
            continue

    match = re.search(r"\{[\s\S]*\}", text)
    if match:
        try:
            return json.loads(_repair_json_text(match.group()))
        except json.JSONDecodeError:
            pass

    match = re.search(r"\[[\s\S]*\]", text)
    if match:
        try:
            return json.loads(_repair_json_text(match.group()))
        except json.JSONDecodeError:
            pass

    raise json.JSONDecodeError("Could not parse LLM JSON response", text, 0)


def extract_quality_review_from_raw(raw: str, sections: list[str]) -> dict[str, dict[str, Any]]:
    text = clean_llm_json(raw)
    review: dict[str, dict[str, Any]] = {}
    for section in sections:
        item = _extract_single_section_review(text, section)
        if item:
            review[section] = item
    return review


def _extract_single_section_review(text: str, section: str) -> dict[str, Any] | None:
    pattern = re.compile(
        rf'"{re.escape(section)}"\s*:\s*\{{'
        rf'[\s\S]*?"quality"\s*:\s*(\d+)'
        rf'[\s\S]*?"feedback"\s*:\s*"((?:[^"\\]|\\.)*)"'
        rf'[\s\S]*?\}}',
        re.IGNORECASE,
    )
    match = pattern.search(text)
    if not match:
        return None
    try:
        quality = int(match.group(1))
    except (TypeError, ValueError):
        quality = 5
    return {
        "quality": max(1, min(10, quality)),
        "feedback": match.group(2).replace('\\"', '"').strip(),
    }


def extract_json_string_field(raw: str, field: str) -> str:
    """Best-effort extraction of a JSON string field when full parse fails."""
    text = clean_llm_json(raw)
    pattern = re.compile(
        rf'"{re.escape(field)}"\s*:\s*"((?:[^"\\]|\\.)*)"',
        re.DOTALL | re.IGNORECASE,
    )
    match = pattern.search(text)
    if match:
        return match.group(1).replace('\\"', '"').replace("\\n", " ").strip()
    stripped = text.strip().strip('"')
    if stripped and not stripped.startswith("{"):
        return stripped
    return ""


def parse_llm_json_field(raw: str, field: str) -> Any:
    """Parse LLM JSON; on failure extract a string list for field if present."""
    try:
        parsed = parse_llm_json(raw)
        if isinstance(parsed, dict) and field in parsed:
            return parsed
        if isinstance(parsed, str) and parsed.strip():
            return {field: parsed.strip()}
        return parsed
    except json.JSONDecodeError:
        items = extract_string_array_from_raw(raw, field)
        if items:
            return {field: items}
        extracted = extract_json_string_field(raw, field)
        if extracted:
            return {field: extracted}
        raise


def parse_keyword_list(raw: str) -> list[str]:
    parsed = parse_llm_json(raw)
    if isinstance(parsed, dict):
        matched = parsed.get("matched", parsed.get("items", parsed.get("bullets", [])))
        if isinstance(matched, list):
            return _coerce_str_list(matched)
        return _coerce_str_list(list(parsed.values()))
    if isinstance(parsed, list):
        return _coerce_str_list(parsed)
    return []


def _coerce_str_list(items: list[Any]) -> list[str]:
    return [str(item).strip() for item in items if str(item).strip()]


def coerce_llm_string(parsed: Any, key: str) -> str:
    if isinstance(parsed, str):
        return parsed.strip()
    if isinstance(parsed, dict):
        return str(parsed.get(key, "")).strip()
    return ""


def coerce_llm_string_list(parsed: Any, key: str) -> list[str]:
    if isinstance(parsed, list):
        return _coerce_str_list(parsed)
    if isinstance(parsed, dict):
        items = parsed.get(key, parsed.get("items", parsed.get("matched", [])))
        if isinstance(items, list):
            return _coerce_str_list(items)
    return []


def coerce_llm_bullets(parsed: Any) -> list[str]:
    return coerce_llm_string_list(parsed, "bullets")


def coerce_llm_dict_map(parsed: Any, key: str) -> dict[str, list[str]]:
    raw: Any = {}
    if isinstance(parsed, dict):
        if key in parsed and isinstance(parsed[key], dict):
            raw = parsed[key]
        elif parsed and all(isinstance(v, list) for v in parsed.values()):
            raw = parsed

    if not isinstance(raw, dict):
        return {}

    return {
        str(name): _coerce_str_list(vals)
        for name, vals in raw.items()
        if isinstance(vals, list)
    }
