from __future__ import annotations

import sys
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DYNAMIC = ROOT / "engine" / "dynamic_engine"
if str(DYNAMIC) not in sys.path:
    sys.path.insert(0, str(DYNAMIC))

from batch_resilience import (  # noqa: E402
    estimate_profile_fit,
    is_buildable,
    payload_status,
    process_with_resilience,
)


def config(**overrides):
    batch = {
        "enabled": True,
        "continue_on_error": True,
        "max_attempts_per_application": 3,
        "skip_fit_below": 5,
        "accept_low_quality_fit_at_most": 6,
        "reuse_previous_success": True,
    }
    batch.update(overrides)
    return {
        "batch_resilience": batch,
        "stage_2": {"verification": {"min_quality": 7}},
        "stage_3": {"verification": {"min_quality": 7}},
    }


def draft(*, fit=7, quality=8):
    return {
        "role_title": "Security Engineer",
        "fit_review": {"fit_score": fit, "fit_summary": "Fit", "strengths": ["Python"], "gaps": []},
        "quality_review": {"letter_prose": {"quality": quality, "feedback": "Review"}},
        "parser_review": {"letter_prose": {"ok": True, "issues": []}},
    }


class BatchResilienceTests(unittest.TestCase):
    def test_transient_failure_retries_only_the_application(self) -> None:
        calls = 0

        def generate():
            nonlocal calls
            calls += 1
            if calls < 3:
                raise RuntimeError("model returned invalid prose")
            return draft(fit=8, quality=8)

        result = process_with_resilience(
            config(),
            stage="stage_3",
            app_key="application_3",
            title="Security Engineer",
            generate=generate,
            fallback_fit=8,
        )

        self.assertEqual(calls, 3)
        self.assertEqual(result["_generation"]["status"], "generated")
        self.assertEqual(result["_generation"]["attempts"], 3)
        self.assertTrue(is_buildable(result))

    def test_borderline_fit_accepts_valid_low_scoring_draft(self) -> None:
        calls = 0

        def generate():
            nonlocal calls
            calls += 1
            return draft(fit=6, quality=5)

        result = process_with_resilience(
            config(),
            stage="stage_3",
            app_key="application_4",
            title="Security Engineer",
            generate=generate,
        )

        self.assertEqual(calls, 1)
        self.assertEqual(result["_generation"]["status"], "accepted_low_quality")
        self.assertEqual(result["_generation"]["quality_score"], 5)
        self.assertTrue(is_buildable(result))

    def test_strong_fit_retries_low_quality_before_accepting(self) -> None:
        calls = 0

        def generate():
            nonlocal calls
            calls += 1
            return draft(fit=8, quality=5)

        result = process_with_resilience(
            config(),
            stage="stage_2",
            app_key="application_5",
            title="AI Engineer",
            generate=generate,
        )

        self.assertEqual(calls, 3)
        self.assertEqual(result["_generation"]["status"], "accepted_after_retries")
        self.assertTrue(is_buildable(result))

    def test_exhausted_low_fit_job_is_skipped_without_raising(self) -> None:
        def generate():
            raise RuntimeError("model service unavailable")

        result = process_with_resilience(
            config(),
            stage="stage_2",
            app_key="application_6",
            title="Principal Security Engineer",
            generate=generate,
            fallback_fit=4,
        )

        self.assertEqual(result["_generation"]["status"], "skipped_low_fit")
        self.assertEqual(result["_generation"]["attempts"], 3)
        self.assertFalse(is_buildable(result))
        self.assertIn("below the configured threshold", result["_generation"]["reason"])

    def test_transient_failure_reuses_previous_buildable_output(self) -> None:
        previous = draft(fit=7, quality=8)

        result = process_with_resilience(
            config(),
            stage="stage_3",
            app_key="application_7",
            title="VAPT Engineer",
            generate=lambda: (_ for _ in ()).throw(RuntimeError("timeout")),
            previous=previous,
            fallback_fit=7,
        )

        self.assertEqual(result["_generation"]["status"], "reused_previous")
        self.assertTrue(is_buildable(result))

    def test_payload_reports_issues_without_global_failure(self) -> None:
        updates = {
            "application_1": {**draft(), "_generation": {"status": "generated"}},
            "application_2": {"_generation": {"status": "failed"}},
        }
        self.assertEqual(payload_status(updates), "COMPLETED_WITH_ISSUES")

    def test_deterministic_fit_estimate_works_during_model_outage(self) -> None:
        stage1 = {
            "context": {
                "must_have": {
                    "requirement_1": "Python",
                    "requirement_2": "AWS",
                    "requirement_3": "Kuzu graph database",
                    "requirement_4": "Temporal workflow orchestration",
                }
            }
        }
        profile = {"skills": {"Languages": ["Python"], "Cloud": ["AWS"]}}
        score = estimate_profile_fit(stage1, profile)
        self.assertIsNotNone(score)
        self.assertGreaterEqual(score, 5)
        self.assertLessEqual(score, 7)


if __name__ == "__main__":
    unittest.main()
