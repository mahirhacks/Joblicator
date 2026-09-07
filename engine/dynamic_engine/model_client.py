"""Select the configured LLM provider without changing pipeline stages."""

from __future__ import annotations

from typing import Any


def selected_provider(config: dict[str, Any]) -> str:
    provider = str(config.get("llm", {}).get("provider", "ollama")).strip().lower()
    if provider not in {"ollama", "openrouter"}:
        raise ValueError("llm.provider must be either 'ollama' or 'openrouter'.")
    return provider


def call_model(
    config: dict[str, Any],
    messages: list[dict[str, str]],
    *,
    options: dict[str, Any] | None = None,
) -> str:
    if selected_provider(config) == "openrouter":
        from openrouter import call_openrouter

        return call_openrouter(config, messages, options=options)

    from ollama import call_ollama

    return call_ollama(config, messages, options=options)


def release_model(config: dict[str, Any]) -> None:
    """Release local model memory only when Ollama is the active provider."""
    if selected_provider(config) != "ollama":
        return
    from ollama import terminate_ollama

    terminate_ollama(config)
