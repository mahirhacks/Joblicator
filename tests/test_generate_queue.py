from __future__ import annotations

import sys
import unittest
from pathlib import Path
from unittest.mock import patch


ROOT = Path(__file__).resolve().parents[1]
BACKEND = ROOT / "ui" / "backend"
DYNAMIC = ROOT / "engine" / "dynamic_engine"
for directory in (ROOT, BACKEND, DYNAMIC):
    if str(directory) not in sys.path:
        sys.path.insert(0, str(directory))

import generate as generate_mod


class GenerateQueueTests(unittest.TestCase):
    def test_queued_slugs_keeps_caller_order(self) -> None:
        self.assertEqual(generate_mod._queued_slugs(["beta", "alpha"]), ["beta", "alpha"])

    def test_queued_slugs_rejects_empty_selection(self) -> None:
        with self.assertRaises(ValueError):
            generate_mod._queued_slugs([])

    def test_queue_snapshot_lists_jobs_after_the_current_one(self) -> None:
        snapshot = generate_mod._queue_snapshot(
            ["one", "two", "three"],
            index=2,
            slug="two",
            completed=["one"],
            failed=[],
        )
        self.assertEqual(snapshot["remaining"], ["three"])
        self.assertEqual(snapshot["completed"], ["one"])
        self.assertEqual(snapshot["slug"], "two")

    def test_jobs_run_end_to_end_before_the_next_starts(self) -> None:
        calls: list[tuple[str, str]] = []

        def capture(script, label, env=None):
            calls.append((script.stem, env.get("JOBLICATION_SLUGS")))

        with (
            patch.object(generate_mod, "_run_stage_script", side_effect=capture),
            patch.object(generate_mod, "_release_ollama_between_stages"),
            patch.object(generate_mod, "_preflight_provider"),
        ):
            outcome = generate_mod.generate(slugs=["acme", "globex"])

        self.assertEqual(outcome["completed"], ["acme", "globex"])
        self.assertEqual(outcome["failed"], [])
        self.assertEqual(
            calls,
            [
                ("stage_2", "acme"),
                ("stage_3", "acme"),
                ("build", "acme"),
                ("stage_2", "globex"),
                ("stage_3", "globex"),
                ("build", "globex"),
            ],
        )

    def test_cv_only_skips_cover_letter_stage_per_job(self) -> None:
        calls: list[tuple[str, str]] = []

        def capture(script, label, env=None):
            calls.append((script.stem, env.get("JOBLICATION_SLUGS")))

        with (
            patch.object(generate_mod, "_run_stage_script", side_effect=capture),
            patch.object(generate_mod, "_release_ollama_between_stages"),
            patch.object(generate_mod, "_preflight_provider"),
        ):
            generate_mod.generate(slugs=["acme", "globex"], build_targets=frozenset({"cv"}))

        self.assertEqual(
            [name for name, _slug in calls],
            ["stage_2", "build", "stage_2", "build"],
        )

    def test_letter_only_skips_cv_stage_per_job(self) -> None:
        calls: list[tuple[str, str]] = []

        def capture(script, label, env=None):
            calls.append((script.stem, env.get("JOBLICATION_SLUGS")))

        with (
            patch.object(generate_mod, "_run_stage_script", side_effect=capture),
            patch.object(generate_mod, "_release_ollama_between_stages"),
            patch.object(generate_mod, "_preflight_provider"),
        ):
            generate_mod.generate(slugs=["acme"], build_targets=frozenset({"letter"}))

        self.assertEqual(
            [name for name, _slug in calls],
            ["stage_3", "build"],
        )

    def test_failed_job_does_not_block_the_rest_of_the_queue(self) -> None:
        def fail_second_job(script, label, env=None):
            if env.get("JOBLICATION_SLUGS") == "globex":
                raise RuntimeError("model timeout")

        with (
            patch.object(generate_mod, "_run_stage_script", side_effect=fail_second_job),
            patch.object(generate_mod, "_release_ollama_between_stages"),
            patch.object(generate_mod, "_preflight_provider"),
        ):
            outcome = generate_mod.generate(slugs=["acme", "globex", "initech"])

        self.assertEqual(outcome["completed"], ["acme", "initech"])
        self.assertEqual([item["slug"] for item in outcome["failed"]], ["globex"])
        self.assertEqual(outcome["failed"][0]["stage"], "stage_2")

    def test_missing_provider_settings_stop_the_queue_before_any_job(self) -> None:
        with (
            patch.object(generate_mod, "_run_stage_script") as run_stage,
            patch.object(generate_mod, "_release_ollama_between_stages"),
            patch.object(
                generate_mod,
                "_preflight_provider",
                side_effect=ValueError("OpenRouter API key is required. Add it under Settings > AI provider."),
            ),
        ):
            with self.assertRaises(ValueError):
                generate_mod.generate(slugs=["acme", "globex"])
        run_stage.assert_not_called()

