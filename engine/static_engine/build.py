"""
Static engine — assemble stage_2 + stage_3 into PDF documents.

Run from project root:
    python engine/static_engine/build.py

Outputs CV and cover letter PDFs per application to the directory in
settings/template.json (default: outputs/).
"""

from __future__ import annotations

import re
import sys
from datetime import datetime
from pathlib import Path
from typing import Any

PROJECT_ROOT = Path(__file__).resolve().parent.parent.parent
if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))

from engine.template_contract import resolve_cv_template

ENGINE_DIR = Path(__file__).resolve().parent
if str(ENGINE_DIR) not in sys.path:
    sys.path.insert(0, str(ENGINE_DIR))

DYNAMIC_DIR = ENGINE_DIR.parent / "dynamic_engine"
if str(DYNAMIC_DIR) not in sys.path:
    sys.path.insert(0, str(DYNAMIC_DIR))

from ats_report import (  # noqa: E402
    build_ats_report,
    flatten_context_text,
    format_ats_summary,
    write_ats_report,
)
from batch_resilience import generation_meta, is_buildable  # noqa: E402
from loader import (  # noqa: E402
    list_application_keys,
    load_engine_config,
    load_stage_1,
    load_stage_2,
    load_stage_3,
    load_template_settings,
    resolve_template_path,
    split_header_and_application,
)
from normalizer import build_cover_letter_context, build_cv_context  # noqa: E402
from renderer import render_html, safe_filename_part, write_html, write_pdf  # noqa: E402
from utils import build_targets, load_json, resolve_path, selected_slugs  # noqa: E402
from verification import (  # noqa: E402
    assert_application_parser_passed,
    assert_pipeline_not_failed,
    default_failure_report_path,
)

def _company_from_stage1(stage1_entry: dict[str, Any]) -> str:
    context = stage1_entry.get("context", {})
    summary = str(context.get("company_summary", "")) if isinstance(context, dict) else ""
    lower = summary.lower().strip()
    if " is " in lower:
        candidate = summary[: lower.index(" is ")].strip()
        if candidate.lower() not in {"the employer", "the company", "company", "employer"}:
            return candidate
    if summary and not lower.startswith(("the employer ", "the company ", "company ")):
        return summary.split(".", 1)[0].strip()[:100]
    slug = str(stage1_entry.get("source_slug", "")).strip()
    if slug:
        return " ".join(
            word.upper() if word.lower() in {"lgms", "ib", "ibm"} else word.title()
            for word in slug.split("_")
        )
    return "Company"


def _export_settings(template_settings: dict[str, Any]) -> dict[str, Any]:
    return template_settings.get("export", {})


def _output_dir(template_settings: dict[str, Any]) -> Path:
    rel = str(_export_settings(template_settings).get("output_dir", "outputs"))
    return (PROJECT_ROOT / rel).resolve()


def _build_filename_stem(
    template_settings: dict[str, Any],
    company: str,
    role: str,
) -> str:
    export = _export_settings(template_settings)
    pattern = str(export.get("filename_pattern", "{company}_{role}_{date}"))
    date_fmt = str(export.get("date_format", "%Y%m%d"))
    if date_fmt == "YYYYMMDD":
        date_fmt = "%Y%m%d"
    today = datetime.now().strftime(date_fmt)
    values = {
        "company": safe_filename_part(company, "company"),
        "role": safe_filename_part(role, "role"),
        "date": today,
    }
    stem = pattern.format(**values)
    return re.sub(r"_+", "_", stem).strip("_")


def _formats(template_settings: dict[str, Any]) -> list[str]:
    formats = _export_settings(template_settings).get("formats", ["pdf"])
    if not isinstance(formats, list):
        return ["pdf"]
    return [str(item).lower() for item in formats]


def build_application_documents(
    app_key: str,
    header: dict[str, Any],
    resume: dict[str, Any],
    letter: dict[str, Any],
    template_settings: dict[str, Any],
    cv_template_id: str | None = None,
    cover_template_id: str | None = None,
    cv_template_contract: dict[str, Any] | None = None,
    targets: frozenset[str] | None = None,
) -> dict[str, Path]:
    targets = targets or build_targets()
    if not targets:
        raise ValueError("No build targets specified (use cv, letter, or both)")

    defaults = template_settings.get("defaults", {})
    cv_template_contract = cv_template_contract or resolve_cv_template(
        PROJECT_ROOT, template_id=cv_template_id
    )
    cv_template_id = cv_template_contract["id"]
    cover_template_id = cover_template_id or str(defaults.get("cover_letter", "cover_letter_formal"))

    company = str(letter.get("company_name") or resume.get("company_name") or "company")
    role = str(letter.get("role_title") or resume.get("role_title") or app_key)
    stem = _build_filename_stem(template_settings, company, role)
    out_dir = _output_dir(template_settings) / stem
    out_dir.mkdir(parents=True, exist_ok=True)

    cv_template = resolve_template_path(
        template_settings, str(defaults.get("cv", "cv_professional"))
    )
    cover_template = resolve_template_path(template_settings, cover_template_id)

    outputs: dict[str, Path] = {}
    formats = _formats(template_settings)

    if "cv" in targets:
        cv_context = build_cv_context(header, resume)
        cv_context["template_layout"] = cv_template_contract["layout"]
        cv_context["template_id"] = cv_template_id
        cv_html = render_html(cv_template, cv_context)
        write_html(cv_html, out_dir / f"{stem}_cv.html")
        outputs["cv_html"] = out_dir / f"{stem}_cv.html"
        if "pdf" in formats:
            outputs["cv_pdf"] = write_pdf(cv_html, out_dir / f"{stem}_cv.pdf")

    if "letter" in targets:
        letter_context = build_cover_letter_context(header, letter)
        cover_html = render_html(cover_template, letter_context)
        write_html(cover_html, out_dir / f"{stem}_cover_letter.html")
        outputs["cover_html"] = out_dir / f"{stem}_cover_letter.html"
        if "pdf" in formats:
            outputs["cover_pdf"] = write_pdf(cover_html, out_dir / f"{stem}_cover_letter.pdf")

    return outputs


def run() -> list[dict[str, Any]]:
    config = load_engine_config()
    template_settings = load_template_settings()
    profile_path = resolve_path(config, "profile", "json", "settings/local_profile.json")
    candidate_text = flatten_context_text(load_json(profile_path))
    stage2 = load_stage_2(config)
    stage3 = load_stage_3(config)
    targets = build_targets()
    try:
        stage1 = load_stage_1(config)
    except (FileNotFoundError, ValueError):
        stage1 = {}

    failure_report = default_failure_report_path()
    if failure_report.is_file():
        import json

        report = json.loads(failure_report.read_text(encoding="utf-8"))
        if report.get("pipeline_status") == "FAILED":
            stage = report.get("stage", "unknown stage")
            app_key = report.get("application", "unknown application")
            raise RuntimeError(
                f"Refusing to build — upstream {stage} failed for {app_key}. "
                f"See {failure_report} for details."
            )

    if "cv" in targets and not stage2:
        raise ValueError("stage_2.json is empty — run stage_2.py first")
    if "letter" in targets and not stage3:
        raise ValueError("stage_3.json is empty — run stage_3.py first")

    assert_pipeline_not_failed(stage2, label="stage_2.json")
    if "letter" in targets:
        assert_pipeline_not_failed(stage3, label="stage_3.json")

    results: list[dict[str, Any]] = []
    slug_filter = selected_slugs()
    for app_key in list_application_keys(stage2):
        stage1_entry = stage1.get(app_key)
        if slug_filter is not None and isinstance(stage1_entry, dict):
            source_slug = str(stage1_entry.get("source_slug", "")).strip()
            if source_slug not in slug_filter:
                continue
        elif slug_filter is not None:
            continue

        header, resume = split_header_and_application(stage2, app_key)
        app_targets = set(targets)
        if "cv" in app_targets and not is_buildable(resume):
            status = generation_meta(resume).get("status", "unavailable")
            print(f"Warning: skipping {app_key} CV - stage 2 status is {status}", file=sys.stderr)
            app_targets.discard("cv")
        letter: dict[str, Any] = {}

        if "letter" in app_targets:
            if app_key not in stage3:
                print(f"Warning: skipping {app_key} — missing in stage_3.json", file=sys.stderr)
                continue
            _, letter = split_header_and_application(stage3, app_key)
            if not is_buildable(letter):
                status = generation_meta(letter).get("status", "unavailable")
                print(f"Warning: skipping {app_key} letter - stage 3 status is {status}", file=sys.stderr)
                app_targets.discard("letter")
            else:
                try:
                    assert_application_parser_passed(app_key, letter, stage_label="Stage 3")
                except RuntimeError as exc:
                    print(f"Warning: skipping {app_key} letter - {exc}", file=sys.stderr)
                    app_targets.discard("letter")

        if "cv" in app_targets:
            try:
                assert_application_parser_passed(app_key, resume, stage_label="Stage 2")
            except RuntimeError as exc:
                print(f"Warning: skipping {app_key} CV - {exc}", file=sys.stderr)
                app_targets.discard("cv")

        if not app_targets:
            print(f"Warning: no buildable documents for {app_key}; continuing batch", file=sys.stderr)
            continue

        if not letter and isinstance(stage1_entry, dict):
            letter = {
                "company_name": _company_from_stage1(stage1_entry),
                "role_title": str(stage1_entry.get("title", app_key)).strip(),
            }

        try:
            source_slug = (
                str(stage1_entry.get("source_slug", "")).strip()
                if isinstance(stage1_entry, dict)
                else ""
            )
            cv_contract = resolve_cv_template(PROJECT_ROOT, slug=source_slug)
            outputs = build_application_documents(
                app_key,
                header,
                resume,
                letter,
                template_settings,
                cv_template_contract=cv_contract,
                targets=frozenset(app_targets),
            )
        except Exception as exc:  # renderer failures are isolated to this application
            print(f"Warning: build failed for {app_key}: {exc}", file=sys.stderr)
            continue

        if isinstance(stage1_entry, dict) and "cv" in app_targets:
            cv_text = flatten_context_text(build_cv_context(header, resume))
            letter_text = ""
            if "letter" in app_targets and letter:
                letter_text = flatten_context_text(build_cover_letter_context(header, letter))
            report = build_ats_report(
                stage1_entry,
                config,
                cv_text,
                letter_text,
                candidate_text,
            )
            cv_html_path = outputs.get("cv_html")
            if cv_html_path is not None:
                report_path = cv_html_path.with_name(
                    cv_html_path.name.replace("_cv.html", "_ats_report.json")
                )
                outputs["ats_report"] = write_ats_report(report, report_path)
            print(format_ats_summary(app_key, report), file=sys.stderr)

        results.append({"application": app_key, "outputs": outputs})
        built = outputs.get("cv_pdf") or outputs.get("cv_html") or outputs.get("cover_pdf") or outputs.get("cover_html")
        print(f"Built {app_key} -> {built}", file=sys.stderr)

    if not results:
        print("Warning: no application documents were buildable; batch completed with issues", file=sys.stderr)
    return results


def main() -> None:
    try:
        results = run()
    except (FileNotFoundError, ValueError, ImportError, RuntimeError) as exc:
        print(f"Error: {exc}", file=sys.stderr)
        raise SystemExit(1) from exc

    print(f"Static build complete: {len(results)} application(s) -> {_output_dir(load_template_settings())}")


if __name__ == "__main__":
    main()
