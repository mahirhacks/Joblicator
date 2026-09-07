from __future__ import annotations

import sys
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DYNAMIC = ROOT / "engine" / "dynamic_engine"
STATIC = ROOT / "engine" / "static_engine"
for path in (DYNAMIC, STATIC):
    if str(path) not in sys.path:
        sys.path.insert(0, str(path))

from ats_report import build_ats_report, keyword_groups_from_cv, keyword_groups_from_stage1  # noqa: E402
from cv_quality import apply_safe_cv_fixes, assess_cv_quality  # noqa: E402
from letter_autofix import fix_banned_letter_phrases  # noqa: E402
from letter_quality import (  # noqa: E402
    assess_letter_quality,
    enrich_thin_bodies_from_cv,
    ensure_employer_reference_outside_opening,
    strip_unsupported_scope_sentences,
)
from plain_text import parse_quality_review  # noqa: E402
from verification import fail_on_unresolved_enabled  # noqa: E402


class CoverLetterQualityTests(unittest.TestCase):
    def setUp(self) -> None:
        self.stage2 = {
            "work_experience": {
                "experience_1": {
                    "title": "Junior Penetration Tester",
                    "company": "FSeC @ APU / APIIT",
                    "points": [
                        "Performed web application and API penetration testing with Burp Suite."
                    ],
                }
            },
            "projects": {
                "project_1": {
                    "title": "Vulnera",
                    "description": "Built a GraphCodeBERT vulnerability research pipeline.",
                }
            },
            "skills": {
                "Security Testing": ["Burp Suite", "API Security"],
                "Cloud": ["AWS", "Azure"],
            },
            "certifications": {
                "cert_1": {"name": "AWS Certified Solutions Architect - Associate"}
            },
        }

    def test_gap_disclosure_is_a_hard_failure(self) -> None:
        content = {
            "company_name": "AutoCount",
            "role_title": "Cyber Security Engineer",
            "opening_paragraph": (
                "I am applying for the Cyber Security Engineer role at AutoCount. "
                "At FSeC, I performed API security testing with Burp Suite for enterprise clients."
            ),
            "body_paragraphs": [
                (
                    "At FSeC, web application testing covered authentication, authorization, and input validation. "
                    "I used Burp Suite to reproduce findings and communicate practical remediation. "
                    "That work is directly relevant to protecting AutoCount products and customer data."
                ),
                (
                    "The Vulnera project strengthened my ability to investigate unfamiliar technical risks. "
                    "I want to be upfront that missing OSCP is an area I am still developing. "
                    "This research mindset would support careful security engineering at AutoCount."
                ),
            ],
            "closing_paragraph": (
                "I would welcome a conversation about applying this background at AutoCount. "
                "Thank you for your consideration."
            ),
        }
        issues = assess_letter_quality(content, 2, self.stage2)
        self.assertTrue(any("missing-qualification disclosure" in issue for issue in issues))

    def test_specific_grounded_letter_passes(self) -> None:
        content = {
            "company_name": "AutoCount",
            "role_title": "Cyber Security Engineer",
            "opening_paragraph": (
                "I am applying for the Cyber Security Engineer role at AutoCount, bringing hands-on API Security "
                "work from FSeC @ APU / APIIT and a practical foundation in cloud security. "
                "At FSeC, my testing with Burp Suite turned reproducible findings into remediation guidance for "
                "enterprise and government-facing systems."
            ),
            "body_paragraphs": [
                (
                    "At FSeC @ APU / APIIT, web application and API Security assessments covered authentication, "
                    "authorization, input validation, and the evidence needed for clear technical reports. "
                    "Using Burp Suite, I reproduced vulnerabilities, documented their impact, and translated the "
                    "results into steps engineers could act on. That combination of testing discipline and useful "
                    "communication would help AutoCount protect business software without slowing its delivery teams."
                ),
                (
                    "The Vulnera project added a different but complementary evidence strand: structured research "
                    "into software risk using GraphCodeBERT, supported by Python experimentation and careful result "
                    "analysis. I also applied AWS and Azure knowledge while reviewing cloud configurations and "
                    "reasoning about exposed services. Together, those experiences would support AutoCount's need "
                    "for a security engineer who can investigate applications, infrastructure, and emerging threats."
                ),
            ],
            "closing_paragraph": (
                "I would bring AutoCount a grounded testing mindset, concise reporting, and the habit of connecting "
                "security findings to practical engineering decisions. A conversation would be welcome to discuss "
                "how that background can support the team."
            ),
        }
        self.assertEqual(assess_letter_quality(content, 2, self.stage2), [])

    def test_stage3_parser_gate_fails_closed_by_default(self) -> None:
        self.assertTrue(fail_on_unresolved_enabled({}, "stage_3"))
        config = {"stage_3": {"parser_verification": {"fail_on_unresolved": False}}}
        self.assertFalse(fail_on_unresolved_enabled(config, "stage_3"))

    def test_single_section_review_accepts_missing_bracket_label(self) -> None:
        review = parse_quality_review(
            "QUALITY: 8\nFEEDBACK: The evidence is specific and the close is concise.",
            ["letter_prose"],
        )
        self.assertEqual(review["letter_prose"]["quality"], 8)

    def test_scope_inflation_not_present_in_cv_is_rejected(self) -> None:
        content = {
            "company_name": "AutoCount",
            "role_title": "Cyber Security Engineer",
            "opening_paragraph": (
                "I am applying for the Cyber Security Engineer role at AutoCount with deep expertise in cloud security. "
                "At FSeC, I used Burp Suite during API Security testing."
            ),
            "body_paragraphs": [
                "At FSeC, Burp Suite supported careful API Security assessment and reporting for enterprise clients. "
                "The work connected technical findings to remediation guidance that AutoCount engineers could use. "
                "That discipline would support repeatable application reviews and clear communication.",
                "The Vulnera project used GraphCodeBERT to investigate software risk in C/C++ functions. "
                "AWS and Azure work also strengthened my understanding of infrastructure configuration. "
                "These evidence-backed skills would support AutoCount across application and cloud concerns.",
            ],
            "closing_paragraph": (
                "I would welcome a discussion about contributing this background at AutoCount. "
                "Thank you for your consideration."
            ),
        }
        issues = assess_letter_quality(content, 2, self.stage2)
        self.assertTrue(any("scope or seniority inflation" in issue for issue in issues))

    def test_scope_autofix_only_downgrades_claims(self) -> None:
        content = {
            "opening_paragraph": "My work involved securing infrastructure for clients.",
            "body_paragraphs": [
                "I bring deep expertise from extensive testing for high-stakes clients.",
                "I used LoRA to improve accuracy and enhance user experience.",
            ],
            "closing_paragraph": "I focus on ensuring every security gap is addressed.",
        }
        self.assertTrue(fix_banned_letter_phrases(content, 2))
        prose = " ".join(
            [content["opening_paragraph"], *content["body_paragraphs"], content["closing_paragraph"]]
        )
        self.assertIn("reviewing infrastructure security", prose)
        self.assertIn("hands-on experience", prose)
        self.assertNotIn("improve accuracy", prose)
        self.assertNotIn("ensuring every", prose)

    def test_target_title_cannot_replace_historical_title(self) -> None:
        content = {
            "company_name": "Ryt Bank",
            "role_title": "VAPT Engineer",
            "opening_paragraph": (
                "I am applying for the VAPT Engineer role at Ryt Bank with API Security experience. "
                "At FSeC, Burp Suite supported web application assessments."
            ),
            "body_paragraphs": [
                "As a VAPT Engineer at FSeC, I used Burp Suite during API Security assessments for clients. "
                "The findings supported remediation guidance and clearer risk decisions. "
                "This experience would be useful for Ryt Bank's application estate.",
                "The Vulnera project used GraphCodeBERT to investigate C/C++ vulnerability risk. "
                "AWS and Azure configuration work provided a second technical evidence strand. "
                "These skills would support careful testing at Ryt Bank.",
            ],
            "closing_paragraph": (
                "I would welcome a conversation about contributing at Ryt Bank. "
                "Thank you for your consideration."
            ),
        }
        issues = assess_letter_quality(content, 2, self.stage2)
        self.assertTrue(any("target-title promotion" in issue for issue in issues))

    def test_ai_red_team_recasting_is_rejected_and_safely_stripped(self) -> None:
        content = {
            "company_name": "Ryt Bank",
            "role_title": "VAPT Engineer",
            "opening_paragraph": (
                "I am applying for the VAPT Engineer role at Ryt Bank. "
                "My FSeC work covered web and API penetration testing. "
                "Joblication provides practical expertise in AI red-team testing for LLMs and RAG pipelines."
            ),
            "body_paragraphs": [
                "At FSeC, Burp Suite supported web and API assessments for enterprise clients. "
                "I documented IDOR and SQLi findings using CVSSv3. "
                "This work ensured that every component was resilient against evolving threats.",
                "Vulnera used GraphCodeBERT to estimate C/C++ vulnerability risk. "
                "Its training pipeline combined linear heads with signature classifiers. "
                "This expertise in ML security would support AI red-teaming.",
            ],
            "closing_paragraph": (
                "I would welcome a discussion about supporting Ryt Bank. "
                "My modern AI red-teaming can help the team. Thank you for your consideration."
            ),
        }
        issues = assess_letter_quality(content, 2, self.stage2)
        self.assertTrue(any("AI red-team" in issue or "ML security" in issue for issue in issues))
        self.assertTrue(strip_unsupported_scope_sentences(content, 2, self.stage2))
        prose = " ".join(
            [content["opening_paragraph"], *content["body_paragraphs"], content["closing_paragraph"]]
        ).lower()
        self.assertNotIn("red-team", prose)
        self.assertNotIn("ml security", prose)

    def test_job_description_cloud_scope_is_not_converted_to_candidate_experience(self) -> None:
        content = {
            "company_name": "Axi",
            "role_title": "Security Engineer",
            "opening_paragraph": (
                "I am applying for the Security Engineer role at Axi. "
                "My FSeC work covered web and API penetration testing. "
                "That experience ensures I can protect every cloud service."
            ),
            "body_paragraphs": [
                "At FSeC, Burp Suite supported web and API assessments for enterprise clients. "
                "I documented IDOR and SQLi findings using CVSSv3. "
                "This work supports clear remediation discussions with engineers.",
                "AWS and Azure configuration reviews provided practical cloud exposure. "
                "I used Python for scripting and security tooling in project work. "
                "The shared responsibility model helps me manage multi-vendor environments effectively.",
            ],
            "closing_paragraph": (
                "I would welcome a discussion about supporting Axi's security goals. "
                "Thank you for your consideration."
            ),
        }
        issues = assess_letter_quality(content, 2, self.stage2)
        self.assertTrue(any("shared responsibility model" in issue for issue in issues))
        self.assertTrue(strip_unsupported_scope_sentences(content, 2, self.stage2))
        prose = " ".join(content["body_paragraphs"]).lower()
        self.assertNotIn("multi-vendor", prose)

    def test_generic_closing_is_tied_to_employer_without_new_claim(self) -> None:
        content = {
            "company_name": "Axi",
            "body_paragraphs": ["Evidence one.", "Evidence two."],
            "closing_paragraph": (
                "I would welcome a discussion about how my background fits this role. "
                "Thank you for your consideration."
            ),
        }
        self.assertTrue(ensure_employer_reference_outside_opening(content, 2))
        self.assertIn("the role at Axi", content["closing_paragraph"])

    def test_thin_body_is_enriched_only_with_cv_project_evidence(self) -> None:
        stage2 = {
            **self.stage2,
            "projects": {
                "project_1": {
                    "title": "AWS Network Lab",
                    "description": (
                        "Designed and deployed a multi-branch enterprise network infrastructure using AWS services."
                    ),
                }
            },
        }
        content = {
            "opening_paragraph": "Opening evidence.",
            "body_paragraphs": [
                "A sufficiently detailed evidence paragraph that already exceeds the required minimum word count "
                "and therefore should remain exactly as written without any deterministic additions from projects. "
                "It names concrete work, explains the method, connects the result to engineering decisions, and "
                "provides enough context for a recruiter to understand the scope without relying on vague claims "
                "or unsupported language from the target job description.",
                "I bring hands-on experience in cloud configuration across AWS and Azure environments. "
                "Python also supports my security tooling work.",
            ],
            "closing_paragraph": "Closing evidence.",
        }
        self.assertTrue(enrich_thin_bodies_from_cv(content, 2, stage2))
        self.assertIn("In an AWS network project, I designed and deployed", content["body_paragraphs"][1])
        self.assertNotIn("project project", content["body_paragraphs"][1])


class AtsGroundingTests(unittest.TestCase):
    def setUp(self) -> None:
        self.stage1 = {
            "title": "Security Engineer",
            "resume_keyword_groups": {
                "skills_keywords": [
                    {"original": "Python", "variants": ["Python 3", "Python programming"]},
                    {
                        "original": "OSCP",
                        "variants": ["OffSec Certified Professional", "OSCP certification"],
                    },
                ]
            },
        }

    def test_structured_synonyms_count_as_one_group(self) -> None:
        groups = keyword_groups_from_stage1(self.stage1, {})
        self.assertEqual(len(groups), 2)
        self.assertEqual(groups[0][0], "Python")
        self.assertIn("Python programming", groups[0])

    def test_cv_skills_become_keyword_groups(self) -> None:
        groups = keyword_groups_from_cv(
            {"role_title": "Backend Engineer", "skills": {"Languages": ["Python"], "Cloud": ["AWS"]}},
            "Backend Engineer",
        )
        originals = [group[0] for group in groups]
        self.assertEqual(originals, ["Backend Engineer", "Python", "AWS"])

    def test_legacy_flat_keyword_triple_cannot_cross_authorize_terms(self) -> None:
        legacy = {
            "title": "Engineer",
            "resume_keywords": {
                "skills_keywords": ["Active Directory security", "AD security", "Python"]
            },
        }
        groups = keyword_groups_from_stage1(legacy, {})
        originals = [group[0] for group in groups]
        self.assertIn("Python", originals)

    def test_legacy_osint_aliases_are_not_double_counted(self) -> None:
        stage1 = {
            "resume_keywords": {
                "skills_keywords": [
                    "OSINT",
                    "Open Source Intelligence",
                    "open-source intelligence techniques",
                ]
            }
        }
        groups = keyword_groups_from_stage1(stage1, {})
        self.assertEqual(len(groups), 1)

    def test_ats_score_excludes_unsupported_credentials(self) -> None:
        resume = {
            "skills": {"Languages": ["Python"], "Certs": ["OSCP"]},
        }
        report = build_ats_report(
            resume,
            {},
            cv_text="Python programming and Python 3",
            letter_text="",
            candidate_text="Built APIs with Python programming.",
        )
        self.assertEqual(report["job_keyword_groups"], 2)
        self.assertEqual(report["excluded_unsupported"], ["OSCP"])
        self.assertIn("Python", report["cv"]["covered"])

    def test_ats_grounding_recognizes_narrow_safe_equivalences(self) -> None:
        resume = {
            "role_title": "Security Engineer",
            "skills": {
                "Cloud": ["Microsoft Azure"],
                "AppSec": ["OWASP Top 10", "web and API security testing"],
                "Certs": ["OSCP"],
            },
        }
        candidate = "Azure configuration reviews, OWASP practice, and web application/API penetration testing."
        report = build_ats_report(
            resume,
            {},
            cv_text=candidate,
            letter_text="",
            candidate_text=candidate,
            job_title="Security Engineer",
        )
        self.assertIn("OSCP", report["excluded_unsupported"])
        self.assertGreaterEqual(report["cv"]["covered_count"], 2)


class CvSourceIntegrityTests(unittest.TestCase):
    def setUp(self) -> None:
        self.profile = {
            "experience": {
                "experience_1": {
                    "position": "Junior Penetration Tester",
                    "company": "FSeC @ APU / APIIT",
                    "description": "Performed web application and API penetration testing.",
                }
            },
            "projects": {
                "project_1": {
                    "name": "Vulnera",
                    "description": (
                        "Trained GraphCodeBERT on C/C++ code and used classifiers to estimate "
                        "novel vulnerability risk at function level."
                    ),
                },
                "project_2": {
                    "name": "AWS Network Lab",
                    "description": "Designed and deployed a multi-branch AWS network.",
                },
            },
        }

    def test_historical_title_and_ai_project_repurposing_fail(self) -> None:
        content = {
            "executive_summary": (
                "Offensive security professional with specialized experience. "
                "Expertise includes AI adversarial testing on LLM and RAG pipelines."
            ),
            "work_experience": {
                "experience 1": {
                    "title": "VAPT Engineer",
                    "company": "FSeC @ APU / APIIT",
                    "points": ["Performed API penetration testing."],
                }
            },
            "projects": {
                "project 1": {
                    "title": "Vulnera",
                    "description": "Tested AI models for vulnerabilities using GraphCodeBERT.",
                },
                "project 2": {
                    "title": "AWS Network Lab",
                    "description": "Built an AWS network to ensure scalable and secure connectivity.",
                },
            },
        }
        issues = assess_cv_quality(content, self.profile)
        self.assertTrue(any("historical title drift" in item for item in issues["work_experience"]))
        self.assertTrue(any("AI-security scope" in item for item in issues["executive_summary"]))
        self.assertTrue(any("project repurposing" in item for item in issues["projects"]))
        self.assertTrue(any("invented outcome" in item for item in issues["projects"]))

    def test_unsupported_job_keyword_scope_fails(self) -> None:
        content = {
            "executive_summary": (
                "Security professional experienced in Active Directory security and penetration testing."
            ),
            "work_experience": {
                "experience 1": {
                    "title": "Junior Penetration Tester",
                    "company": "FSeC @ APU / APIIT",
                    "points": ["Performed web application and API penetration testing."],
                }
            },
            "projects": {
                "project 1": {"title": "Vulnera", "description": "Used GraphCodeBERT for code-risk research."},
                "project 2": {"title": "AWS Network Lab", "description": "Designed a multi-branch AWS network."},
            },
        }
        issues = assess_cv_quality(content, self.profile)
        self.assertTrue(any("unsupported job-keyword scope" in item for item in issues["executive_summary"]))

    def test_source_faithful_cv_content_passes(self) -> None:
        content = {
            "executive_summary": (
                "Security-focused computing graduate with web application testing experience. "
                "GraphCodeBERT research provides a foundation in C/C++ vulnerability-risk analysis."
            ),
            "work_experience": {
                "experience 1": {
                    "title": "Junior Penetration Tester",
                    "company": "FSeC @ APU / APIIT",
                    "points": ["Performed web application and API penetration testing."],
                }
            },
            "projects": {
                "project 1": {
                    "title": "Vulnera",
                    "description": "Trained GraphCodeBERT on C/C++ code to estimate vulnerability risk.",
                },
                "project 2": {
                    "title": "AWS Network Lab",
                    "description": "Designed and deployed a multi-branch AWS network.",
                },
            },
        }
        self.assertEqual(assess_cv_quality(content, self.profile), {})

    def test_safe_cv_fixes_restore_labels_and_downgrade_puffery(self) -> None:
        content = {
            "executive_summary": "Professional with proven expertise and extensive experience in testing.",
            "work_experience": {
                "experience 1": {"title": "VAPT Engineer", "company": "FSeC", "points": []}
            },
            "projects": {
                "project 1": {"title": "Vulnerability AI", "description": "Code-risk research."},
                "project 2": {"title": "AWS Lab", "description": "AWS network."},
            },
        }
        self.assertTrue(apply_safe_cv_fixes(content, self.profile))
        self.assertEqual(content["work_experience"]["experience 1"]["title"], "Junior Penetration Tester")
        self.assertEqual(content["work_experience"]["experience 1"]["company"], "FSeC @ APU / APIIT")
        self.assertEqual(content["projects"]["project 1"]["title"], "Vulnera")
        self.assertNotIn("expertise", content["executive_summary"].lower())
        self.assertNotIn("extensive", content["executive_summary"].lower())

    def test_safe_cv_fixes_restore_garbled_job_keyword_bullet_from_source(self) -> None:
        self.profile["experience"]["experience_1"]["description"] = (
            "Performed web application and API penetration testing. "
            "Cloud configuration reviews across AWS and Azure environments."
        )
        content = {
            "work_experience": {
                "experience 1": {
                    "title": "Junior Penetration Tester",
                    "company": "FSeC @ APU / APIIT",
                    "points": [
                        "Performed web application and API penetration testing.",
                        "Conducted cloud conf assesses multi-vendor cloud security posture.",
                    ],
                }
            }
        }
        self.assertTrue(apply_safe_cv_fixes(content, self.profile))
        repaired = content["work_experience"]["experience 1"]["points"][1]
        self.assertEqual(
            repaired,
            "Conducted cloud configuration reviews across AWS and Azure environments.",
        )

    def test_safe_cv_fixes_drop_wholly_unsupported_summary_sentence(self) -> None:
        content = {
            "executive_summary": (
                "Security professional with web application testing experience. "
                "Performed API assessments for enterprise clients. "
                "Experience includes AI red-team testing on LLM and RAG pipelines."
            )
        }
        self.assertTrue(apply_safe_cv_fixes(content, self.profile))
        self.assertNotIn("red-team", content["executive_summary"].lower())
        self.assertEqual(len(content["executive_summary"].split(". ")), 2)


class TemplateStructureTests(unittest.TestCase):
    def test_templates_are_table_free_and_cv_uses_standard_summary_heading(self) -> None:
        cv = (ROOT / "templates" / "cv" / "professional.html.j2").read_text(
            encoding="utf-8"
        )
        letter = (ROOT / "templates" / "cover_letter" / "formal.html.j2").read_text(
            encoding="utf-8"
        )
        self.assertNotIn("<table", cv.lower())
        self.assertNotIn("<table", letter.lower())
        self.assertIn("Professional Summary", cv)
        self.assertNotIn(">Interests:<", cv)

    def test_live_preview_and_export_templates_share_document_contract(self) -> None:
        cv = (ROOT / "templates" / "cv" / "professional.html.j2").read_text(
            encoding="utf-8"
        )
        letter = (ROOT / "templates" / "cover_letter" / "formal.html.j2").read_text(
            encoding="utf-8"
        )
        preview = (
            ROOT / "ui" / "frontend" / "src" / "components" / "review" / "DocumentPreview.jsx"
        ).read_text(encoding="utf-8")

        for heading in (
            "Professional Summary",
            "Core Skills",
            "Professional Experience",
            "Selected Projects",
            "Education",
            "Certifications",
            "Achievements",
            "Additional Information",
        ):
            self.assertIn(heading, cv)
            self.assertIn(heading, preview)

        self.assertIn('data-document-layout="joblication-template-v2"', cv)
        self.assertIn('data-document-layout="joblication-live-v1"', letter)
        self.assertNotIn("page-break-before: always", cv)
        self.assertIn("template_layout", cv)
        self.assertIn("component.gapBefore", cv)
        self.assertIn("layout?.sections", preview)


if __name__ == "__main__":
    unittest.main()
