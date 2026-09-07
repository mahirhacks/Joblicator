"""
Static engine — assemble stage_2 + stage_3 into PDF documents.

Run from project root:
    python engine/static_engine/build.py

Outputs CV and cover letter PDFs per application to the folder in
Settings → Output (default: outputs/).
"""

from __future__ import annotations

import json
import re
import sys
from datetime import datetime
from pathlib import Path
from typing import Any

SOURCE_ROOT = Path(__file__).resolve().parents[2]
if str(SOURCE_ROOT) not in sys.path:
    sys.path.insert(0, str(SOURCE_ROOT))

from joblication_runtime import DATA_ROOT, RESOURCE_ROOT, data_path

PROJECT_ROOT = DATA_ROOT
if str(RESOURCE_ROOT) not in sys.path:
    sys.path.insert(0, str(RESOURCE_ROOT))

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
    assert_pipeline_not_failed,
    default_failure_report_path,
)


def _resolve_source_slug(
    app_key: str,
    resume_block: dict[str, Any],
    letter_block: dict[str, Any],
    apps: dict[str, Any],
) -> str:
    """Prefer saved source_slug; otherwise map application_N to the Nth job record."""
    for block in (resume_block, letter_block):
        if not isinstance(block, dict):
            continue
        slug = str(block.get("source_slug") or "").strip()
        if slug:
            return slug
    try:
        index = int(str(app_key).rsplit("_", 1)[-1])
    except ValueError:
        return ""
    slugs = [slug for slug, record in apps.items() if isinstance(record, dict)]
    if 1 <= index <= len(slugs):
        return slugs[index - 1]
    return ""


def _company_from_record(record: dict[str, Any], slug: str, letter: dict[str, Any]) -> str:
    generic = {"", "company", "the company", "employer", "the employer", "organization"}
    for source in (letter, record):
        if not isinstance(source, dict):
            continue
        for key in ("company_name", "company", "employer"):
            value = str(source.get(key, "")).strip()
            if value.lower() not in generic:
                return value
    if slug:
        return " ".join(
            word.upper() if word.lower() in {"lgms", "ib", "ibm"} else word.title()
            for word in slug.split("_")
        )
    return "Company"


def _export_settings(template_settings: dict[str, Any]) -> dict[str, Any]:
    return template_settings.get("export", {})


def _output_dir(template_settings: dict[str, Any]) -> Path:
    from utils import configured_export_dir, load_config  # noqa: E402

    return configured_export_dir(load_config(), template_settings)


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


def _record_output_folder(source_slug: str, app_key: str, outputs: dict[str, Path]) -> None:
    """Persist an exact slug-to-folder association for UI previews and downloads."""
    if not source_slug or not outputs:
        return
    built_file = next((path for path in outputs.values() if isinstance(path, Path)), None)
    if built_file is None:
        return

    manifest_path = data_path("applications", "output_manifest.json")
    manifest: dict[str, Any] = {}
    if manifest_path.is_file():
        try:
            parsed = json.loads(manifest_path.read_text(encoding="utf-8"))
            if isinstance(parsed, dict):
                manifest = parsed
        except (OSError, json.JSONDecodeError):
            pass

    manifest[source_slug] = {
        "folder": built_file.parent.name,
        "application": app_key,
        "updated_at": datetime.now().astimezone().isoformat(),
    }
    manifest_path.parent.mkdir(parents=True, exist_ok=True)
    temporary = manifest_path.with_suffix(".tmp")
    temporary.write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
    temporary.replace(manifest_path)


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
    try:
        stage2 = load_stage_2(config)
    except (FileNotFoundError, ValueError):
        stage2 = {}
    try:
        stage3 = load_stage_3(config)
    except (FileNotFoundError, ValueError):
        stage3 = {}
    targets = build_targets()
    try:
        apps = load_json(resolve_path(config, "applications", "json", "applications/local_applications.json"))
    except (FileNotFoundError, ValueError):
        apps = {}
    if not isinstance(apps, dict):
        apps = {}

    failure_report = default_failure_report_path()
    if failure_report.is_file():
        report = json.loads(failure_report.read_text(encoding="utf-8"))
        if report.get("pipeline_status") == "FAILED":
            stage = report.get("stage", "unknown stage")
            app_key = report.get("application", "unknown application")
            raise RuntimeError(
                f"Refusing to build — upstream {stage} failed for {app_key}. "
                f"See {failure_report} for details."
            )

    if "cv" in targets and not list_application_keys(stage2):
        raise ValueError("stage_2.json is empty — generate the CV first")
    if "letter" in targets and not list_application_keys(stage3):
        raise ValueError("stage_3.json is empty — generate the letter first")

    if stage2:
        assert_pipeline_not_failed(stage2, label="stage_2.json")
    if "letter" in targets and stage3:
        assert_pipeline_not_failed(stage3, label="stage_3.json")

    keys: list[str] = []
    if "cv" in targets:
        keys.extend(list_application_keys(stage2))
    if "letter" in targets:
        keys.extend(list_application_keys(stage3))
    ordered_keys: list[str] = []
    for key in keys:
        if key not in ordered_keys:
            ordered_keys.append(key)

    results: list[dict[str, Any]] = []
    slug_filter = selected_slugs()
    for app_key in ordered_keys:
        resume_block = stage2.get(app_key) if isinstance(stage2.get(app_key), dict) else {}
        letter_block = stage3.get(app_key) if isinstance(stage3.get(app_key), dict) else {}
        source_slug = _resolve_source_slug(app_key, resume_block, letter_block, apps)
        if slug_filter is not None and source_slug not in slug_filter:
            continue

        header: dict[str, Any] = {}
        resume: dict[str, Any] = {}
        letter: dict[str, Any] = {}
        if resume_block:
            header, resume = split_header_and_application(stage2, app_key)
        if letter_block:
            letter_header, letter = split_header_and_application(stage3, app_key)
            if not header:
                header = letter_header

        app_targets = set(targets)
        if "cv" in app_targets:
            if not resume:
                app_targets.discard("cv")
            elif not is_buildable(resume):
                status = generation_meta(resume).get("status", "unavailable")
                print(f"Warning: skipping {app_key} CV - stage 2 status is {status}", file=sys.stderr)
                app_targets.discard("cv")
        if "letter" in app_targets:
            if not letter:
                print(f"Warning: skipping {app_key} — missing in stage_3.json", file=sys.stderr)
                app_targets.discard("letter")
            elif not is_buildable(letter):
                status = generation_meta(letter).get("status", "unavailable")
                print(f"Warning: skipping {app_key} letter - stage 3 status is {status}", file=sys.stderr)
                app_targets.discard("letter")

        if not app_targets:
            print(f"Warning: no buildable documents for {app_key}; continuing batch", file=sys.stderr)
            continue

        record = apps.get(source_slug, {}) if isinstance(apps.get(source_slug), dict) else {}
        if not letter:
            letter = {
                "company_name": _company_from_record(record, source_slug, {}),
                "role_title": str(resume.get("role_title") or record.get("title") or app_key).strip(),
            }

        try:
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

        if "cv" in app_targets and resume:
            cv_text = flatten_context_text(build_cv_context(header, resume))
            letter_text = ""
            if "letter" in app_targets and letter:
                letter_text = flatten_context_text(build_cover_letter_context(header, letter))
            report = build_ats_report(
                resume,
                config,
                cv_text,
                letter_text,
                candidate_text,
                job_title=str(resume.get("role_title") or record.get("title") or "").strip(),
            )
            cv_html_path = outputs.get("cv_html")
            if cv_html_path is not None:
                report_path = cv_html_path.with_name(
                    cv_html_path.name.replace("_cv.html", "_ats_report.json")
                )
                outputs["ats_report"] = write_ats_report(report, report_path)
            print(format_ats_summary(app_key, report), file=sys.stderr)

        _record_output_folder(source_slug, app_key, outputs)

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
