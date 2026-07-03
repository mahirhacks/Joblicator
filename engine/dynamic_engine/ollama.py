"""Ollama chat API, lifecycle (start / call / terminate), and LLM response parsing."""

from __future__ import annotations

import json
import re
import shutil
import subprocess
import sys
import threading
import time
import urllib.error
import urllib.request
from typing import Any

from utils import log_stderr


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

    if threading.current_thread() is not threading.main_thread():
        raise RuntimeError(
            f"Ollama is not reachable at {settings['base_url']}. "
            "Open the Ollama app (or run `ollama serve`), wait until it is ready, then click Generate again."
        )

    ollama_bin = shutil.which("ollama")
    if not ollama_bin:
        raise RuntimeError(
            f"Ollama is not running at {settings['base_url']} and the `ollama` CLI was not found on PATH."
        )

    log_stderr("Ollama: starting server ...")
    popen_kwargs: dict[str, Any] = {
        "stdout": subprocess.DEVNULL,
        "stderr": subprocess.DEVNULL,
    }
    if sys.platform == "win32":
        if threading.current_thread() is threading.main_thread():
            popen_kwargs["creationflags"] = subprocess.CREATE_NEW_PROCESS_GROUP
        else:
            # CREATE_NEW_PROCESS_GROUP can raise EINVAL from background threads on Windows.
            popen_kwargs["creationflags"] = subprocess.CREATE_NO_WINDOW
    else:
        popen_kwargs["start_new_session"] = True

    subprocess.Popen([ollama_bin, "serve"], **popen_kwargs)

    deadline = time.monotonic() + wait_seconds
    while time.monotonic() < deadline:
        if ollama_is_running(config, timeout=2):
            log_stderr("Ollama: server ready")
            return
        time.sleep(1)

    raise RuntimeError(f"Timed out waiting for Ollama at {settings['base_url']}")


def ensure_ollama_running(config: dict) -> None:
    start_ollama(config)


def list_installed_ollama_models(config: dict) -> list[str]:
    """Model names from GET /api/tags (includes tags like gemma4:26b)."""
    base_url = _ollama_settings(config)["base_url"]
    try:
        with urllib.request.urlopen(f"{base_url}/api/tags", timeout=10) as response:
            data = json.loads(response.read().decode("utf-8"))
    except (urllib.error.URLError, TimeoutError, OSError, json.JSONDecodeError) as exc:
        raise RuntimeError(f"Could not list Ollama models at {base_url}: {exc}") from exc

    names: list[str] = []
    for entry in data.get("models", []):
        if not isinstance(entry, dict):
            continue
        name = str(entry.get("name", "")).strip()
        if name:
            names.append(name)
    return names


def _model_is_available(configured: str, installed: list[str]) -> bool:
    configured = configured.strip()
    if not configured:
        return False
    if configured in installed:
        return True
    # Ollama tags may omit :latest; also match bare name (gemma4 vs gemma4:26b).
    base = configured.split(":", 1)[0]
    for name in installed:
        if name == configured or name.split(":", 1)[0] == base:
            return True
    return False


def ensure_ollama_model(config: dict) -> None:
    """Fail fast with an actionable message if the configured model is missing."""
    ensure_ollama_running(config)
    model = _ollama_settings(config)["model"]
    if not model:
        raise ValueError("config.yaml: ollama.model is required.")

    installed = list_installed_ollama_models(config)
    if _model_is_available(model, installed):
        return

    installed_hint = ", ".join(installed[:8]) if installed else "(none — run `ollama pull`)"
    if len(installed) > 8:
        installed_hint += ", …"
    raise RuntimeError(
        f"Ollama model '{model}' is not installed. "
        f"Run: ollama pull {model}\n"
        f"Installed models: {installed_hint}"
    )


def _parse_ollama_chat_body(raw: str) -> dict[str, Any]:
    text = raw.strip()
    if not text:
        return {}

    if "\n" not in text:
        return json.loads(text)

    # Some Ollama builds still return NDJSON even when stream=false — keep the final chunk.
    last: dict[str, Any] = {}
    for line in text.splitlines():
        line = line.strip()
        if not line:
            continue
        try:
            chunk = json.loads(line)
        except json.JSONDecodeError:
            continue
        if not isinstance(chunk, dict):
            continue
        if chunk.get("message", {}).get("content") or chunk.get("done"):
            last = chunk
    return last


def _format_ollama_failure(config: dict, data: dict[str, Any], *, raw: str = "") -> str:
    model = _ollama_settings(config)["model"]
    if isinstance(data.get("error"), str) and data["error"].strip():
        detail = data["error"].strip()
    else:
        detail = json.dumps(data, ensure_ascii=False)[:500]

    hints = [
        f"Confirm Ollama is running and the model is pulled: ollama pull {model}",
        "Check VRAM/RAM — gemma4:26b needs ~16 GB+ at Q4 quantization",
        "Try a smaller model in engine/dynamic_engine/config.yaml (e.g. gemma4:e4b)",
    ]
    if raw and "\n" in raw:
        hints.insert(0, "Received a partial streaming response — retry, or restart Ollama")

    return "Ollama returned no usable content.\n" + "\n".join(f"• {hint}" for hint in hints) + f"\n\nResponse: {detail}"


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
        log_stderr(f"Ollama: unloaded model(s) from memory — {', '.join(unloaded)}")
    else:
        log_stderr("Ollama: could not confirm model unload (server may still hold weights)")


def _generation_options(config: dict) -> dict[str, Any]:
    generation = config.get("generation", {})
    options: dict[str, Any] = {
        "temperature": generation.get("temperature", 0.3),
        "num_ctx": generation.get("context_window", 16384),
    }

    for key, caster in (("top_p", float), ("repeat_penalty", float), ("top_k", int)):
        value = generation.get(key)
        if value is None:
            continue
        try:
            options[key] = caster(value)
        except (TypeError, ValueError):
            continue

    try:
        seed = int(generation.get("seed", 0))
    except (TypeError, ValueError):
        seed = 0
    if seed > 0:
        options["seed"] = seed

    num_predict = generation.get("max_tokens", 4096)
    try:
        num_predict = int(num_predict)
    except (TypeError, ValueError):
        num_predict = 4096
    if num_predict > 0:
        options["num_predict"] = num_predict

    return options


def call_ollama(
    config: dict,
    messages: list[dict[str, str]],
    *,
    options: dict[str, Any] | None = None,
) -> str:
    ensure_ollama_model(config)

    ollama = config.get("ollama", {})

    base_url = ollama.get("base_url", "http://127.0.0.1:11434").rstrip("/")
    model = ollama.get("model", "")

    payload_options = _generation_options(config)
    if options:
        payload_options.update({key: value for key, value in options.items() if value is not None})

    payload: dict[str, Any] = {
        "model": model,
        "messages": messages,
        "stream": False,
        "options": payload_options,
    }

    # Explicit false — some models (e.g. gemma4) emit chain-of-thought in `thinking`
    # with empty `content` unless thinking is disabled at the API level.
    payload["think"] = bool(ollama.get("think") is True)

    last_data: dict[str, Any] = {}
    last_raw = ""
    last_error: Exception | None = None
    for attempt in range(3):
        body = json.dumps(payload).encode("utf-8")
        request = urllib.request.Request(
            f"{base_url}/api/chat",
            data=body,
            headers={"Content-Type": "application/json"},
            method="POST",
        )
        try:
            with urllib.request.urlopen(request, timeout=600) as response:
                last_raw = response.read().decode("utf-8")
                last_data = _parse_ollama_chat_body(last_raw)
        except urllib.error.HTTPError as exc:
            detail = exc.read().decode("utf-8", errors="replace")
            if exc.code == 500 and attempt < 2:
                last_error = exc
                log_stderr(f"Ollama: server error (attempt {attempt + 1}/3), retrying in 5s ...")
                time.sleep(5)
                ensure_ollama_running(config)
                continue
            raise RuntimeError(f"Ollama request failed ({exc.code}): {detail}") from exc
        except (urllib.error.URLError, TimeoutError, OSError) as exc:
            last_error = exc
            if attempt < 2:
                log_stderr(f"Ollama: connection error (attempt {attempt + 1}/3), retrying in 3s ...")
                time.sleep(3)
                ensure_ollama_running(config)
                continue
            reason = getattr(exc, "reason", exc)
            raise RuntimeError(f"Could not reach Ollama at {base_url}: {reason}") from exc

        content = last_data.get("message", {}).get("content", "")
        if content:
            return content

        if attempt < 2:
            log_stderr(f"Ollama: empty response (attempt {attempt + 1}/3), retrying in 3s ...")
            time.sleep(3)
            ensure_ollama_running(config)

    if last_error is not None:
        raise RuntimeError(
            _format_ollama_failure(config, last_data, raw=last_raw)
            + f"\n\nLast connection error: {last_error}"
        ) from last_error
    raise RuntimeError(_format_ollama_failure(config, last_data, raw=last_raw))


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
