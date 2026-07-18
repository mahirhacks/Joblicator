from __future__ import annotations

import os
import sys
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch


ROOT = Path(__file__).resolve().parents[1]
STATIC = ROOT / "engine" / "static_engine"
if str(STATIC) not in sys.path:
    sys.path.insert(0, str(STATIC))

import renderer  # noqa: E402
from normalizer import build_cv_context  # noqa: E402


class PdfRendererTests(unittest.TestCase):
    def test_cv_context_preserves_live_draft_entities(self) -> None:
        context = build_cv_context(
            {},
            {
                "certifications": {
                    "certification 1": {
                        "name": "eJPT — Junior Penetration Tester",
                        "issuer": "INE Security",
                    }
                },
                "achievements": {
                    "achievement 1": {
                        "name": "Junior Penetration Tester at APU",
                        "description": "Served within the security research centre.",
                    }
                },
                "work_experience": {
                    "experience 1": {
                        "title": "Junior Penetration Tester",
                        "company": "APU",
                    }
                },
            },
        )
        self.assertEqual(
            context["certifications"][0]["title"],
            "eJPT — Junior Penetration Tester",
        )
        self.assertEqual(context["certifications"][0]["issuer"], "INE Security")
        self.assertEqual(
            context["achievements"][0]["title"],
            "Junior Penetration Tester at APU",
        )

    def test_rendered_template_normalizes_unicode_dashes_for_pdf_extraction(self) -> None:
        html = renderer.render_html(
            "templates/cv/professional.html.j2",
            {
                "contact": {"name": "Candidate"},
                "headline": "Engineer",
                "summary": "Source-grounded summary.",
                "skills": [],
                "technical_skills": "Python",
                "soft_skills": "",
                "work_experience": [],
                "projects": [],
                "volunteer": [],
                "education": [],
                "certifications": [
                    {
                        "title": "Solutions Architect – Associate",
                        "issuer": "Provider",
                        "date": "Jan 2026",
                    }
                ],
                "achievements": [],
                "languages": "English",
            },
        )
        self.assertNotIn("–", html)
        self.assertIn("Solutions Architect - Associate", html)

    def test_auto_renderer_prefers_browser(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            output = Path(temp_dir) / "document.pdf"
            browser = Path(temp_dir) / "browser.exe"
            browser.touch()
            with (
                patch.dict(os.environ, {"JOBLICATION_PDF_RENDERER": "auto"}),
                patch.object(renderer, "_find_pdf_browser", return_value=browser),
                patch.object(renderer, "_write_pdf_with_browser", return_value=output) as browser_write,
                patch.object(renderer, "_write_pdf_with_xhtml2pdf") as fallback_write,
            ):
                self.assertEqual(renderer.write_pdf("<html></html>", output), output)
            browser_write.assert_called_once_with("<html></html>", output, browser)
            fallback_write.assert_not_called()

    def test_auto_renderer_falls_back_after_browser_failure(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            output = Path(temp_dir) / "document.pdf"
            browser = Path(temp_dir) / "browser.exe"
            browser.touch()
            with (
                patch.dict(os.environ, {"JOBLICATION_PDF_RENDERER": "auto"}),
                patch.object(renderer, "_find_pdf_browser", return_value=browser),
                patch.object(renderer, "_write_pdf_with_browser", side_effect=RuntimeError("failed")),
                patch.object(renderer, "_write_pdf_with_xhtml2pdf", return_value=output) as fallback_write,
            ):
                self.assertEqual(renderer.write_pdf("<html></html>", output), output)
            fallback_write.assert_called_once_with("<html></html>", output)


if __name__ == "__main__":
    unittest.main()
