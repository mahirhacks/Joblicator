from __future__ import annotations

import json
import sys
import unittest
from pathlib import Path
from unittest.mock import patch


ROOT = Path(__file__).resolve().parents[1]
DYNAMIC = ROOT / "engine" / "dynamic_engine"
for directory in (ROOT, DYNAMIC):
    if str(directory) not in sys.path:
        sys.path.insert(0, str(directory))

from model_client import call_model, selected_provider
from openrouter import call_openrouter, list_openrouter_models


class _Response:
    def __init__(self, payload: dict):
        self.payload = payload

    def read(self) -> bytes:
        return json.dumps(self.payload).encode("utf-8")

    def __enter__(self):
        return self

    def __exit__(self, *_args):
        return False


class OpenRouterProviderTests(unittest.TestCase):
    def test_selected_provider_defaults_to_ollama_and_rejects_unknown_value(self) -> None:
        self.assertEqual(selected_provider({}), "ollama")
        self.assertEqual(selected_provider({"llm": {"provider": "openrouter"}}), "openrouter")
        with self.assertRaisesRegex(ValueError, "llm.provider"):
            selected_provider({"llm": {"provider": "other"}})

    def test_model_catalog_exposes_per_model_reasoning_metadata(self) -> None:
        payload = {
            "data": [
                {
                    "id": "openai/o4-mini",
                    "name": "o4 mini",
                    "context_length": 200000,
                    "architecture": {"output_modalities": ["text"]},
                    "supported_parameters": ["temperature", "reasoning"],
                    "reasoning": {
                        "supported_efforts": ["high", "medium", "low"],
                        "default_effort": "medium",
                        "default_enabled": True,
                    },
                },
                {
                    "id": "example/image-model",
                    "architecture": {"output_modalities": ["image"]},
                    "supported_parameters": [],
                },
            ]
        }
        with patch("openrouter.urllib.request.urlopen", return_value=_Response(payload)) as request:
            models = list_openrouter_models({"openrouter": {"api_key": "test-key"}})

        self.assertEqual(len(models), 1)
        self.assertEqual(models[0]["id"], "openai/o4-mini")
        self.assertEqual(models[0]["reasoning"]["supported_efforts"], ["high", "medium", "low"])
        sent_request = request.call_args.args[0]
        self.assertIn("output_modalities=text", sent_request.full_url)
        self.assertEqual(sent_request.get_header("Authorization"), "Bearer test-key")

    def test_openrouter_chat_uses_reasoning_effort_and_excludes_reasoning_text(self) -> None:
        config = {
            "llm": {"provider": "openrouter"},
            "openrouter": {
                "api_key": "test-key",
                "model": "openai/o4-mini",
                "reasoning_effort": "high",
            },
            "generation": {"temperature": 0.2, "top_p": 0.9, "seed": 7, "max_tokens": 1024},
        }
        response = {"choices": [{"message": {"content": "Generated text"}}]}
        with patch("openrouter._read_json_response", return_value=response) as request:
            result = call_openrouter(config, [{"role": "user", "content": "hello"}])

        self.assertEqual(result, "Generated text")
        sent_request = request.call_args.args[0]
        sent_payload = json.loads(sent_request.data.decode("utf-8"))
        self.assertEqual(sent_payload["model"], "openai/o4-mini")
        self.assertEqual(sent_payload["reasoning"], {"effort": "high", "exclude": True})
        self.assertEqual(sent_payload["seed"], 7)

    def test_dispatcher_routes_openrouter_without_touching_ollama(self) -> None:
        config = {"llm": {"provider": "openrouter"}}
        with patch("openrouter.call_openrouter", return_value="cloud result") as openrouter_call:
            result = call_model(config, [{"role": "user", "content": "hello"}])

        self.assertEqual(result, "cloud result")
        openrouter_call.assert_called_once()


if __name__ == "__main__":
    unittest.main()
