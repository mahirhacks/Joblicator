from __future__ import annotations

import sys
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))
STATIC = ROOT / "engine" / "static_engine"
if str(STATIC) not in sys.path:
    sys.path.insert(0, str(STATIC))

from engine.template_contract import normalize_layout, visible_generation_keys  # noqa: E402
from renderer import render_html  # noqa: E402


class TemplateContractTests(unittest.TestCase):
    def test_old_absolute_layout_migrates_to_ordered_flow_without_sizes(self) -> None:
        layout = normalize_layout(
            {
                "sections": [
                    {"id": "skills", "y": 50, "w": 90, "h": 12},
                    {"id": "summary", "y": 10, "w": 90, "h": 12},
                ]
            }
        )
        self.assertEqual([item["id"] for item in layout["sections"]], ["summary", "skills"])
        self.assertNotIn("w", layout["sections"][0])
        self.assertNotIn("h", layout["sections"][0])

    def test_hidden_components_are_not_requested_from_the_llm(self) -> None:
        layout = normalize_layout(
            {
                "sections": [
                    {"id": "contact", "visible": True},
                    {"id": "summary", "visible": True},
                    {"id": "projects", "visible": False},
                ]
            }
        )
        self.assertEqual(visible_generation_keys(layout), {"executive_summary"})

    def test_renderer_honors_component_order_visibility_and_pixel_gap(self) -> None:
        layout = normalize_layout(
            {
                "sections": [
                    {"id": "skills", "visible": True, "gapBefore": 37},
                    {"id": "summary", "visible": True, "gapBefore": 3},
                    {"id": "projects", "visible": False},
                ]
            }
        )
        html = render_html(
            "templates/cv/professional.html.j2",
            {
                "template_layout": layout,
                "template_id": "test",
                "contact": {"name": "Candidate"},
                "headline": "Engineer",
                "summary": "Tailored summary.",
                "skills": [{"label": "Engineering", "entries": ["Python"]}],
                "technical_skills": "",
                "soft_skills": "",
                "projects": [{"title": "Should not render"}],
            },
        )
        self.assertLess(html.index("Core Skills"), html.index("Professional Summary"))
        self.assertIn("margin-top: 37px", html)
        self.assertNotIn("Should not render", html)


if __name__ == "__main__":
    unittest.main()
