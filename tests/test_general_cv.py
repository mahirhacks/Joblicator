from __future__ import annotations

import json
import os
import sys
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch


ROOT = Path(__file__).resolve().parents[1]
BACKEND = ROOT / "ui" / "backend"
DYNAMIC = ROOT / "engine" / "dynamic_engine"
for directory in (ROOT, BACKEND, DYNAMIC):
    if str(directory) not in sys.path:
        sys.path.insert(0, str(directory))

import handlers
import store
from engine.static_engine import build as static_build
from utils import iter_applications


class GeneralCvTests(unittest.TestCase):
    def test_general_cv_generation_is_hidden_and_cv_only(self) -> None:
        saved_apps: dict = {}
        started: dict = {}

        def capture_apps(data: dict) -> None:
            saved_apps.update(data)

        def capture_start(body: dict):
            started.update(body)
            return 202, {"ok": True, "message": "Generation started"}

        with (
            patch.object(handlers, "load_general_cv", return_value={}),
            patch.object(handlers, "save_general_cv"),
            patch.object(handlers, "load_applications", return_value={}),
            patch.object(handlers, "save_applications", side_effect=capture_apps),
            patch.object(handlers, "start_generate", side_effect=capture_start),
        ):
            status, payload = handlers.generate_general_cv(
                {
                    "title": "Security Engineer",
                    "summary": "Profile-grounded security engineering summary.",
                    "strengths": ["Application security", "Python automation"],
                }
            )

        self.assertEqual(status, 202)
        self.assertTrue(payload["ok"])
        self.assertEqual(started["slugs"], [handlers.GENERAL_CV_SLUG])
        self.assertEqual(started["build_targets"], "cv")
        self.assertEqual(started["from_stage"], "stage_2")
        self.assertEqual(saved_apps[handlers.GENERAL_CV_SLUG]["_system"], "general_cv")

    def test_system_application_is_skipped_by_default_but_can_be_selected(self) -> None:
        applications = {
            "visible": {"title": "Visible role"},
            "general_cv": {"title": "General role", "_system": "general_cv"},
        }

        with patch.dict(os.environ, {}, clear=False):
            os.environ.pop("JOBLICATION_SLUGS", None)
            default_slugs = [slug for _, _, slug, _ in iter_applications(applications)]
        with patch.dict(os.environ, {"JOBLICATION_SLUGS": "general_cv"}):
            selected_slugs = [slug for _, _, slug, _ in iter_applications(applications)]

        self.assertEqual(default_slugs, ["visible"])
        self.assertEqual(selected_slugs, ["general_cv"])

    def test_general_cv_review_rebuild_accepts_cv_only_target(self) -> None:
        captured: dict = {}

        def capture_build(*, slugs, build_targets) -> None:
            captured["slugs"] = slugs
            captured["build_targets"] = build_targets

        with (
            patch.object(
                handlers,
                "load_applications",
                return_value={"general_cv": {"title": "Security Engineer", "_system": "general_cv"}},
            ),
            patch.object(handlers, "_run_build_only", side_effect=capture_build),
            patch.object(
                handlers,
                "resolve_output_for_slug",
                return_value={"folder": "general-cv", "files": ["general_cv.pdf"]},
            ),
            patch.object(handlers, "list_output_folders", return_value=[]),
        ):
            status, payload = handlers.rebuild_application(
                "general_cv",
                {"build_targets": "cv"},
            )

        self.assertEqual(status, 200)
        self.assertTrue(payload["ok"])
        self.assertEqual(captured["slugs"], ["general_cv"])
        self.assertEqual(captured["build_targets"], frozenset({"cv"}))

    def test_review_rebuild_fails_if_requested_pdf_is_missing(self) -> None:
        with (
            patch.object(
                handlers,
                "load_applications",
                return_value={"general_cv": {"title": "Security Engineer", "_system": "general_cv"}},
            ),
            patch.object(handlers, "_run_build_only", return_value="Static build complete: 1 application(s)"),
            patch.object(handlers, "resolve_output_for_slug", return_value=None),
        ):
            status, payload = handlers.rebuild_application(
                "general_cv",
                {"build_targets": "cv"},
            )

        self.assertEqual(status, 500)
        self.assertIn("without producing", payload["error"])

    def test_general_cv_output_resolution_ignores_stale_stage3_slot(self) -> None:
        applications = {
            "general_cv": {
                "title": "Security Automation Engineer",
                "_system": "general_cv",
            }
        }
        stage2 = {
            "application_1": {
                "source_slug": "general_cv",
                "company_name": "",
                "role_title": "Security Automation Engineer",
            }
        }
        stale_stage3 = {
            "application_1": {
                "company_name": "Watermelon Software",
                "role_title": "AI Engineer",
            }
        }
        correct = {
            "folder": "company_Security_Automation_Engineer_20260814",
            "files": ["company_Security_Automation_Engineer_20260814_cv.pdf"],
        }
        wrong = {
            "folder": "Watermelon_Software_AI_Engineer_20260814",
            "files": ["Watermelon_Software_AI_Engineer_20260814_cv.pdf"],
        }

        with (
            patch.object(store, "_read_json", side_effect=[applications, stage2, stale_stage3]),
            patch.object(store, "load_output_manifest", return_value={}),
            patch.object(store, "list_output_folders", return_value=[wrong, correct]),
        ):
            resolved = store.resolve_output_for_slug("general_cv")

        self.assertEqual(resolved, correct)

    def test_recorded_output_folder_wins_over_fuzzy_matching(self) -> None:
        applications = {"general_cv": {"title": "Security Engineer", "_system": "general_cv"}}
        correct = {"folder": "exact-general-cv", "files": ["general_cv.pdf"]}
        wrong = {"folder": "company_Security_Engineer_20260814", "files": ["wrong_cv.pdf"]}

        with (
            patch.object(store, "_read_json", return_value=applications),
            patch.object(
                store,
                "load_output_manifest",
                return_value={"general_cv": {"folder": "exact-general-cv"}},
            ),
            patch.object(store, "list_output_folders", return_value=[wrong, correct]),
        ):
            resolved = store.resolve_output_for_slug("general_cv")

        self.assertEqual(resolved, correct)

    def test_static_build_records_exact_output_folder(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            output_file = root / "outputs" / "general-cv-folder" / "general_cv.pdf"

            with patch.object(static_build, "data_path", side_effect=lambda *parts: root.joinpath(*parts)):
                static_build._record_output_folder(
                    "general_cv",
                    "application_1",
                    {"cv_pdf": output_file},
                )

            manifest = json.loads(
                (root / "applications" / "output_manifest.json").read_text(encoding="utf-8")
            )

        self.assertEqual(manifest["general_cv"]["folder"], "general-cv-folder")
        self.assertEqual(manifest["general_cv"]["application"], "application_1")

    def test_build_slug_falls_back_to_application_index_without_source_slug(self) -> None:
        apps = {"hire": {"title": "AI Engineer"}, "globex": {"title": "VAPT Engineer"}}
        self.assertEqual(
            static_build._resolve_source_slug("application_1", {}, {}, apps),
            "hire",
        )
        self.assertEqual(
            static_build._resolve_source_slug(
                "application_9",
                {"source_slug": "explicit_job"},
                {},
                apps,
            ),
            "explicit_job",
        )


if __name__ == "__main__":
    unittest.main()
