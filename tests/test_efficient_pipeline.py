from __future__ import annotations

import json
import sys
import unittest
from pathlib import Path
from unittest.mock import patch


ROOT = Path(__file__).resolve().parents[1]
DYNAMIC = ROOT / "engine" / "dynamic_engine"
if str(DYNAMIC) not in sys.path:
    sys.path.insert(0, str(DYNAMIC))
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

import json_loop  # noqa: E402
import stage_2  # noqa: E402
import stage_3  # noqa: E402


def _config() -> dict:
    return {
        "llm": {"provider": "openrouter"},
        "generation": {"creative_temperature": 0.5, "precise_temperature": 0.2, "max_tokens": 2048},
        "stage_2": {"skills": {"domain_count": 2, "subskill_min": 1, "subskill_max": 4}},
        "stage_3": {"body_paragraphs": 2, "body_paragraph": {"max_words": 120}},
    }


def _profile() -> dict:
    return {
        "contact": {"name": "Ada Lovelace", "email": "ada@example.com"},
        "titles": {"title_1": "Software Engineer"},
        "skills": {"Python": "scripting", "AWS": "cloud"},
        "experience": {
            "experience_1": {
                "company": "Acme",
                "position": "Engineer",
                "startDate": "2024-01-01",
                "endDate": "2025-01-01",
                "description": "Built APIs with Python.",
            }
        },
        "projects": {
            "project_1": {
                "name": "GraphTool",
                "description": "Built a graph analysis prototype in Python.",
                "startDate": "2024-06-01",
                "endDate": "",
            }
        },
        "education": {},
        "certifications": {},
        "achievements": {},
        "interests": {"Python": "language"},
    }


def _application() -> dict:
    return {
        "company": "Acme",
        "title": "Backend Engineer",
        "location": "Remote",
        "description": "Python and AWS APIs.",
    }


def _writer_cv() -> dict:
    return {
        "executive_summary": "Software engineer shipping Python APIs with AWS.",
        "work_experience": [
            {
                "source_id": "experience_1",
                "title": "Engineer",
                "company": "Acme",
                "start_date": "2024-01",
                "end_date": "2025-01",
                "points": ["Built production APIs with Python and AWS."],
            }
        ],
        "projects": [
            {
                "source_id": "project_1",
                "title": "GraphTool",
                "description": "Built a graph analysis prototype in Python for internal research.",
                "start_date": "2024-06",
                "end_date": "",
            }
        ],
        "skills": {"Languages": ["Python"], "Cloud": ["AWS"]},
        "interests": ["Python"],
    }


def _cv_template() -> dict:
    return {
        "id": "cv_professional",
        "layout": {
            "sections": [
                {"id": "summary", "visible": True},
                {"id": "skills", "visible": True},
                {"id": "experience", "visible": True},
                {"id": "projects", "visible": True},
                {"id": "contact", "visible": True},
            ]
        },
    }


class EfficientPipelineTests(unittest.TestCase):
    def test_cv_writer_plus_reviewer_are_two_calls_when_review_passes(self) -> None:
        responses = [
            json.dumps(_writer_cv()),
            json.dumps({"ok": True, "issues": []}),
        ]
        with patch.object(json_loop, "call_model", side_effect=responses) as mocked:
            content = stage_2.process_application(
                _config(),
                "application_1",
                _application(),
                _profile(),
                _cv_template(),
                "acme",
            )
        self.assertEqual(mocked.call_count, 2)
        self.assertIn("Python", content["executive_summary"])
        self.assertEqual(content["work_experience"]["experience 1"]["company"], "Acme")
        self.assertTrue(content["quality_review"]["ok"])
        self.assertEqual(content["quality_review"]["rounds"], 1)

    def test_cv_review_failure_triggers_rewrite_then_second_review(self) -> None:
        repaired = _writer_cv()
        repaired["executive_summary"] = "Security-focused engineer shipping Python APIs on AWS."
        responses = [
            json.dumps(_writer_cv()),
            json.dumps(
                {
                    "ok": False,
                    "issues": [{"path": "executive_summary", "feedback": "Lead with a clearer identity."}],
                }
            ),
            json.dumps(repaired),
            json.dumps({"ok": True, "issues": []}),
        ]
        with patch.object(json_loop, "call_model", side_effect=responses) as mocked:
            content = stage_2.process_application(
                _config(),
                "application_1",
                _application(),
                _profile(),
                _cv_template(),
                "acme",
            )
        self.assertEqual(mocked.call_count, 4)
        self.assertIn("Security-focused", content["executive_summary"])
        self.assertTrue(content["quality_review"]["ok"])
        self.assertEqual(content["quality_review"]["rounds"], 2)

    def test_letter_writer_plus_reviewer_are_two_calls_when_review_passes(self) -> None:
        letter = {
            "opening_paragraph": "I am applying for the Backend Engineer role at Acme, where my Python API work maps directly onto this stack.",
            "body_paragraphs": [
                "At Acme I built production APIs with Python and AWS, including authentication and monitoring used by internal teams. That same delivery style matches the posting's need for reliable backend services. I would bring that evidence-led approach to your platform.",
                "GraphTool is a Python graph analysis prototype I built for internal research, which shows how I turn messy data into a usable service. Acme's API work needs that same habit of shipping concrete tooling rather than abstract architecture talk. I can apply that immediately on your backend team.",
            ],
            "closing_paragraph": "I would welcome a conversation about the Backend Engineer role at Acme and am available to discuss next steps.",
        }
        responses = [json.dumps(letter), json.dumps({"ok": True, "issues": []})]
        cv_draft = {
            "_generation": {"status": "generated"},
            "executive_summary": "Software engineer shipping Python APIs.",
            "work_experience": {"experience 1": {"title": "Engineer", "company": "Acme", "points": ["Built APIs."]}},
        }
        with patch.object(json_loop, "call_model", side_effect=responses) as mocked:
            content = stage_3.process_application(
                _config(),
                "application_1",
                _application(),
                _profile(),
                cv_draft,
                "acme",
            )
        self.assertEqual(mocked.call_count, 2)
        self.assertIn("Acme", content["opening_paragraph"])
        self.assertEqual(content["company_name"], "Acme")
        self.assertEqual(len(content["body_paragraphs"]), 2)
        self.assertTrue(content["quality_review"]["ok"])

    def test_write_review_loop_caps_at_two_review_rounds(self) -> None:
        calls: list[str] = []

        def fake_call(config, messages, options=None):
            role = messages[0]["content"][:40]
            calls.append(role)
            if messages[0]["content"] == "reviewer":
                return json.dumps({"ok": False, "issues": [{"path": "x", "feedback": "fix"}]})
            return json.dumps({"opening_paragraph": "Hello at Acme.", "body_paragraphs": ["Body one."], "closing_paragraph": "Thanks."})

        with patch.object(json_loop, "call_model", side_effect=fake_call):
            draft, meta = json_loop.run_write_review_loop(
                _config(),
                app_key="application_1",
                document_label="Letter",
                writer_system="writer",
                reviewer_system="reviewer",
                base_prompt={"job": {"company": "Acme"}},
            )
        self.assertEqual(meta["rounds"], 2)
        self.assertFalse(meta["ok"])
        self.assertEqual(len(calls), 5)


if __name__ == "__main__":
    unittest.main()
