"""HTTP API handlers for the Joblication UI."""

from __future__ import annotations

import json
import os
import re
import sys
import subprocess
import threading
import urllib.error
import urllib.request
from collections import deque
from html import unescape
from pathlib import Path
from typing import Any

from joblication_runtime import RESOURCE_ROOT

if str(RESOURCE_ROOT) not in sys.path:
    sys.path.insert(0, str(RESOURCE_ROOT))

from engine.template_contract import normalize_layout, resolve_cv_template

from store import (
    DYNAMIC_ENGINE,
    ROOT,
    applications_path,
    custom_templates_path,
    engine_config_path,
    get_application_meta,
    list_output_folders,
    load_applications,
    load_custom_templates,
    load_general_cv,
    load_generate_status,
    load_profile,
    load_template_settings,
    outputs_dir,
    profile_path,
    resolve_output_for_slug,
    save_applications,
    save_custom_templates,
    save_general_cv,
    save_generate_status,
    save_profile,
    set_application_meta,
    stage_path,
    template_settings_path,
)

VALID_STATUSES = frozenset(
    {"unsubmitted", "submitted", "rejected", "interview", "accepted"}
)
GENERAL_CV_SLUG = "general_cv"

_generate_thread: threading.Thread | None = None


def recover_generate_on_startup() -> None:
    """Server restart kills the worker thread — clear stale in-progress status."""
    global _generate_thread
    _generate_thread = None
    status = load_generate_status()
    if not status.get("running"):
        return
    save_generate_status(
        {
            "running": False,
            "step": "failed",
            "error": "Generation was interrupted (server restarted). Click Generate all to try again.",
            "finished_at": _now_iso(),
        }
    )


def _json_response(status: int, payload: dict[str, Any]) -> tuple[int, dict[str, Any]]:
    return status, payload


def health() -> tuple[int, dict[str, Any]]:
    return _json_response(200, {"ok": True, "service": "joblication"})


def config_info() -> tuple[int, dict[str, Any]]:
    return _json_response(
        200,
        {
            "json": applications_path().name,
            "json_path": str(applications_path()),
            "profile_path": str(profile_path()),
            "outputs_dir": str(outputs_dir()),
            "engine_config_path": str(engine_config_path()),
        },
    )


def get_engine_config() -> tuple[int, dict[str, Any]]:
    path = engine_config_path()
    if not path.is_file():
        return _json_response(404, {"error": f"Config not found: {path}"})

    try:
        import yaml
    except ImportError:
        return _json_response(500, {"error": "PyYAML is required on the server"})

    raw = path.read_text(encoding="utf-8")
    try:
        parsed = yaml.safe_load(raw)
    except yaml.YAMLError as exc:
        return _json_response(500, {"error": f"Invalid YAML in config file: {exc}"})

    if parsed is None:
        parsed = {}
    if not isinstance(parsed, dict):
        return _json_response(500, {"error": "Config root must be a YAML mapping"})

    return _json_response(
        200,
        {
            "path": str(path.relative_to(ROOT)).replace("\\", "/"),
            "yaml": raw,
            "config": parsed,
            "outputs_dir": str(outputs_dir()),
        },
    )


def _dump_engine_config(config: dict[str, Any]) -> str:
    import yaml

    dumped = yaml.dump(
        config,
        default_flow_style=False,
        sort_keys=False,
        allow_unicode=True,
    )
    return dumped if dumped.endswith("\n") else dumped + "\n"


def put_engine_config(body: dict[str, Any]) -> tuple[int, dict[str, Any]]:
    try:
        import yaml
    except ImportError:
        return _json_response(500, {"error": "PyYAML is required on the server"})

    config = body.get("config")
    yaml_text = body.get("yaml")

    if isinstance(config, dict):
        parsed = config
        yaml_text = _dump_engine_config(parsed)
    elif isinstance(yaml_text, str):
        try:
            parsed = yaml.safe_load(yaml_text)
        except yaml.YAMLError as exc:
            return _json_response(400, {"error": f"Invalid YAML: {exc}"})
    else:
        return _json_response(400, {"error": "config object or yaml string required"})

    if parsed is None:
        return _json_response(400, {"error": "Config cannot be empty"})
    if not isinstance(parsed, dict):
        return _json_response(400, {"error": "Config root must be a YAML mapping"})

    from utils import configured_export_dir

    resolved_outputs = configured_export_dir(parsed, load_template_settings())
    try:
        resolved_outputs.mkdir(parents=True, exist_ok=True)
    except OSError as exc:
        return _json_response(400, {"error": f"Could not create output folder: {exc}"})

    path = engine_config_path()
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(yaml_text, encoding="utf-8")

    return _json_response(
        200,
        {
            "ok": True,
            "path": str(path.relative_to(ROOT)).replace("\\", "/"),
            "yaml": yaml_text,
            "config": parsed,
            "outputs_dir": str(resolved_outputs),
        },
    )


def get_profile() -> tuple[int, dict[str, Any]]:
    return _json_response(200, {"profile": load_profile()})


def put_profile(body: dict[str, Any]) -> tuple[int, dict[str, Any]]:
    profile = body.get("profile")
    if not isinstance(profile, dict):
        return _json_response(400, {"error": "profile object required"})
    save_profile(profile)
    return _json_response(200, {"ok": True, "profile": load_profile()})


def _is_system_application(record: Any) -> bool:
    return isinstance(record, dict) and bool(record.get("_system"))


def _visible_application_slugs(apps: dict[str, Any] | None = None) -> list[str]:
    source = apps if apps is not None else load_applications()
    return [
        slug for slug, record in source.items()
        if isinstance(record, dict) and not _is_system_application(record)
    ]


def _general_cv_provider() -> dict[str, str]:
    from model_client import selected_provider
    from utils import load_config

    config = load_config(engine_config_path())
    provider = selected_provider(config)
    settings = config.get(provider, {}) if isinstance(config.get(provider), dict) else {}
    return {"provider": provider, "model": str(settings.get("model", "")).strip()}


def get_general_cv() -> tuple[int, dict[str, Any]]:
    stage2 = _read_stage_file("stage_2")
    app_key = _resolve_app_key(GENERAL_CV_SLUG, stage2)
    return _json_response(
        200,
        {
            "general_cv": load_general_cv(),
            "output": resolve_output_for_slug(GENERAL_CV_SLUG),
            "review_ready": bool(app_key and isinstance(stage2.get(app_key), dict)),
            "generation": load_generate_status(),
            "cv_template_id": get_application_meta(GENERAL_CV_SLUG).get("cv_template_id", ""),
            **_general_cv_provider(),
        },
    )


def recommend_general_cv() -> tuple[int, dict[str, Any]]:
    from model_client import call_model, selected_provider
    from ollama import parse_llm_json
    from utils import generation_options, load_config, profile_for_prompt

    profile = load_profile()
    if not profile:
        return _json_response(400, {"error": "Complete your profile before creating a General CV."})

    config = load_config(engine_config_path())
    provider = selected_provider(config)
    prompt = {
        "task": "Choose the single strongest general-purpose target role for this candidate and write their CV summary.",
        "candidate_profile": profile_for_prompt(profile),
        "rules": [
            "Use only evidence present in the candidate profile.",
            "Choose one concise, market-recognizable job title, not a list or a headline with separators.",
            "Prefer the title that best represents the candidate's strongest demonstrated experience and skills.",
            "Write a 45-70 word professional summary suitable for the top of a general CV.",
            "Do not mention a specific employer, vacancy, or job posting.",
            "Do not invent years of experience, metrics, certifications, employers, or technical capabilities.",
            "Return JSON only with title, summary, strengths, and rationale.",
        ],
        "reply_schema": {
            "title": "string",
            "summary": "string",
            "strengths": ["3 to 6 short evidence-based strengths"],
            "rationale": "one short sentence explaining why this title fits",
        },
    }
    raw = call_model(
        config,
        [
            {
                "role": "system",
                "content": (
                    "You are a precise career-positioning strategist. Ground every claim in the supplied profile. "
                    "Return valid JSON only and never expose private contact details in the response."
                ),
            },
            {"role": "user", "content": json.dumps(prompt, ensure_ascii=False, indent=2)},
        ],
        options={**generation_options(config, "precise"), "max_tokens": 900},
    )
    try:
        parsed = parse_llm_json(raw)
    except json.JSONDecodeError as exc:
        return _json_response(502, {"error": f"The AI returned an invalid recommendation: {exc}"})
    if not isinstance(parsed, dict):
        return _json_response(502, {"error": "The AI returned an invalid recommendation."})

    title = re.sub(r"\s+", " ", str(parsed.get("title", "")).strip())[:100]
    summary = re.sub(r"\s+", " ", str(parsed.get("summary", "")).strip())[:1200]
    strengths_raw = parsed.get("strengths", [])
    strengths = (
        [re.sub(r"\s+", " ", str(item).strip())[:120] for item in strengths_raw if str(item).strip()][:6]
        if isinstance(strengths_raw, list)
        else []
    )
    rationale = re.sub(r"\s+", " ", str(parsed.get("rationale", "")).strip())[:400]
    if not title or not summary:
        return _json_response(502, {"error": "The AI recommendation did not include both a title and summary."})

    state = {
        "title": title,
        "summary": summary,
        "strengths": strengths,
        "rationale": rationale,
        "provider": provider,
        "updated_at": _now_iso(),
    }
    save_general_cv(state)
    return _json_response(200, {"ok": True, "general_cv": state, **_general_cv_provider()})


def generate_general_cv(body: dict[str, Any] | None = None) -> tuple[int, dict[str, Any]]:
    body = body or {}
    title = re.sub(r"\s+", " ", str(body.get("title", "")).strip())[:100]
    summary = re.sub(r"\s+", " ", str(body.get("summary", "")).strip())[:1200]
    strengths_raw = body.get("strengths", [])
    strengths = (
        [re.sub(r"\s+", " ", str(item).strip())[:120] for item in strengths_raw if str(item).strip()][:6]
        if isinstance(strengths_raw, list)
        else []
    )
    if not title or not summary:
        return _json_response(400, {"error": "A recommended title and professional summary are required."})

    current = load_general_cv()
    state = {
        **current,
        "title": title,
        "summary": summary,
        "strengths": strengths,
        "updated_at": _now_iso(),
    }
    save_general_cv(state)

    positioning = "\n".join(f"- {item}" for item in strengths) or "- Use the candidate's strongest profile evidence."
    apps = load_applications()
    apps[GENERAL_CV_SLUG] = {
        "company": "General Profile",
        "title": title,
        "location": "",
        "url": "",
        "about": "General-purpose CV generated from the candidate's saved profile.",
        "description": (
            f"Create an employer-neutral CV targeting the role: {title}.\n\n"
            f"Approved professional positioning summary:\n{summary}\n\n"
            f"Evidence-based strengths to emphasize:\n{positioning}\n\n"
            "This is not tied to a specific vacancy or employer. Use only facts from the candidate profile."
        ),
        "_system": "general_cv",
    }
    save_applications(apps)

    template_id = str(body.get("cv_template_id", "")).strip()
    if template_id:
        resolved_template = resolve_cv_template(ROOT, template_id=template_id)
        set_application_meta(GENERAL_CV_SLUG, cv_template_id=resolved_template["id"])

    status, payload = start_generate(
        {
            "from_stage": "stage_2",
            "slugs": [GENERAL_CV_SLUG],
            "build_targets": "cv",
        }
    )
    return _json_response(status, {**payload, "general_cv": state})


def list_jobs() -> tuple[int, dict[str, Any]]:
    from applications.slug_utils import display_company

    apps = load_applications()
    items = []
    for slug, record in apps.items():
        if not isinstance(record, dict):
            continue
        if _is_system_application(record):
            continue
        meta = get_application_meta(slug)
        items.append(
            {
                "slug": slug,
                "company": display_company(slug, record),
                "title": record.get("title", ""),
                "location": record.get("location", ""),
                "url": record.get("url", ""),
                "about": record.get("about", ""),
                "description": record.get("description", ""),
                **meta,
            }
        )
    items.sort(key=lambda item: (item.get("title") or "").lower())
    return _json_response(200, {"applications": items, "count": len(items)})


def get_job(slug: str) -> tuple[int, dict[str, Any]]:
    from applications.slug_utils import display_company

    apps = load_applications()
    record = apps.get(slug)
    if not isinstance(record, dict):
        return _json_response(404, {"error": f"Job not found: {slug}"})
    return _json_response(
        200,
        {
            "slug": slug,
            **record,
            "company": display_company(slug, record),
            **get_application_meta(slug),
        },
    )


def create_job(body: dict[str, Any]) -> tuple[int, dict[str, Any]]:
    from applications.extractor import append_application
    from applications.slug_utils import display_company

    company = str(body.get("company", "")).strip()
    title = str(body.get("title", "")).strip()
    location = str(body.get("location", "")).strip()
    url = str(body.get("url", "")).strip()
    about = str(body.get("about", "")).strip()
    description = str(body.get("description", "")).strip()

    if not company or not title:
        return _json_response(400, {"error": "Company and title are required"})
    if not about and not description:
        return _json_response(400, {"error": "About or description is required"})

    try:
        slug, count = append_application(
            company, title, about, description, location, url, applications_path()
        )
    except ValueError as exc:
        return _json_response(400, {"error": str(exc)})

    status = str(body.get("status", "unsubmitted"))
    if status in VALID_STATUSES:
        set_application_meta(slug, status=status)

    record = load_applications().get(slug, {})
    return _json_response(
        200,
        {
            "ok": True,
            "slug": slug,
            "json_count": count,
            "company": display_company(slug, record),
            "application": {
                **record,
                "company": display_company(slug, record),
                **get_application_meta(slug),
            },
        },
    )


def update_job(slug: str, body: dict[str, Any]) -> tuple[int, dict[str, Any]]:
    from applications.slug_utils import display_company

    apps = load_applications()
    if slug not in apps or not isinstance(apps[slug], dict):
        return _json_response(404, {"error": f"Job not found: {slug}"})

    record = dict(apps[slug])
    for key in ("company", "title", "location", "url", "about", "description"):
        if key in body:
            record[key] = str(body[key]).strip()
    apps[slug] = record
    save_applications(apps)

    if "status" in body or "notes" in body or "cv_template_id" in body:
        status = body.get("status")
        if status is not None and status not in VALID_STATUSES:
            return _json_response(400, {"error": f"Invalid status. Use one of: {sorted(VALID_STATUSES)}"})
        set_application_meta(
            slug,
            status=status if status is not None else None,
            notes=str(body.get("notes", "")).strip() if "notes" in body else None,
            cv_template_id=(
                resolve_cv_template(ROOT, template_id=str(body.get("cv_template_id", "")).strip())["id"]
                if "cv_template_id" in body
                else None
            ),
        )

    return _json_response(
        200,
        {
            "ok": True,
            "slug": slug,
            **record,
            **get_application_meta(slug),
            "company": display_company(slug, record),
        },
    )


def delete_job(slug: str) -> tuple[int, dict[str, Any]]:
    apps = load_applications()
    if slug not in apps:
        return _json_response(404, {"error": f"Job not found: {slug}"})
    del apps[slug]
    save_applications(apps)
    return _json_response(200, {"ok": True, "deleted": slug})


def scrape_job_url(body: dict[str, Any]) -> tuple[int, dict[str, Any]]:
    url = str(body.get("url", "")).strip()
    if not url:
        return _json_response(400, {"error": "url is required"})
    if not url.startswith(("http://", "https://")):
        url = "https://" + url

    try:
        request = urllib.request.Request(
            url,
            headers={"User-Agent": "Joblication/1.0 (+local job scraper)"},
        )
        with urllib.request.urlopen(request, timeout=25) as response:
            raw_html = response.read().decode("utf-8", errors="replace")
    except (urllib.error.URLError, TimeoutError, OSError) as exc:
        return _json_response(400, {"error": f"Could not fetch URL: {exc}"})

    title_match = re.search(r"<title[^>]*>(.*?)</title>", raw_html, re.I | re.S)
    title = unescape(re.sub(r"\s+", " ", title_match.group(1))).strip() if title_match else ""

    cleaned = re.sub(r"(?is)<(script|style|noscript)[^>]*>.*?</\1>", " ", raw_html)
    cleaned = re.sub(r"(?is)<!--.*?-->", " ", cleaned)
    cleaned = re.sub(r"<[^>]+>", "\n", cleaned)
    cleaned = unescape(cleaned)
    lines = [re.sub(r"\s+", " ", line).strip() for line in cleaned.splitlines()]
    text = "\n".join(line for line in lines if line and len(line) > 2)
    text = text[:12000]

    return _json_response(
        200,
        {
            "ok": True,
            "url": url,
            "title": title,
            "description": text,
            "about": text[:800],
        },
    )


def list_applications_view() -> tuple[int, dict[str, Any]]:
    from applications.slug_utils import display_company

    apps = load_applications()

    items = []
    for slug, record in apps.items():
        if not isinstance(record, dict):
            continue
        if _is_system_application(record):
            continue
        meta = get_application_meta(slug)
        out = resolve_output_for_slug(slug)
        phases = _pipeline_phases(slug)
        generation_outcomes = _pipeline_outcomes(slug)
        items.append(
            {
                "slug": slug,
                "title": record.get("title", ""),
                "company": display_company(slug, record),
                "location": record.get("location", ""),
                "status": meta.get("status", "unsubmitted"),
                "notes": meta.get("notes", ""),
                "cv_template_id": meta.get("cv_template_id", ""),
                "phases": phases,
                "generation_outcomes": generation_outcomes,
                "has_output": bool(out),
                "output_folder": out["folder"] if out else None,
                "files": out["files"] if out else [],
            }
        )
    return _json_response(200, {"applications": items})


def list_outputs() -> tuple[int, dict[str, Any]]:
    return _json_response(200, {"outputs": list_output_folders()})


def _review_identity(stage2: dict[str, Any]) -> dict[str, Any]:
    """Return the shared profile fields needed by the structured document preview."""
    fields = (
        "first_name",
        "last_name",
        "email",
        "contact",
        "address",
        "linkedin",
        "github",
        "portfolio",
        "languages",
        "education",
    )
    return {field: stage2.get(field) for field in fields if field in stage2}


def get_review(slug: str) -> tuple[int, dict[str, Any]]:
    apps = load_applications()
    if slug not in apps:
        return _json_response(404, {"error": f"Job not found: {slug}"})

    stage2 = _read_stage_file("stage_2")
    stage3 = _read_stage_file("stage_3")
    app_key = _resolve_app_key(slug, stage2)
    output = resolve_output_for_slug(slug)
    cv_template = resolve_cv_template(ROOT, slug=slug)
    if not app_key:
        return _json_response(
            200,
            {
                "slug": slug,
                "application": apps[slug],
                "identity": _review_identity(stage2),
                "stage_2": None,
                "stage_3": None,
                "output": output,
                "output_folder": output["folder"] if output else None,
                "files": output["files"] if output else [],
                "cv_template": cv_template,
                "message": "No generated content yet. Run Generate first.",
            },
        )

    return _json_response(
        200,
        {
            "slug": slug,
            "app_key": app_key,
            "application": apps[slug],
            "identity": _review_identity(stage2),
            "stage_2": stage2.get(app_key),
            "stage_3": stage3.get(app_key),
            "output": output,
            "output_folder": output["folder"] if output else None,
            "files": output["files"] if output else [],
            "cv_template": cv_template,
            **get_application_meta(slug),
        },
    )


def put_review(slug: str, body: dict[str, Any]) -> tuple[int, dict[str, Any]]:
    apps = load_applications()
    if slug not in apps:
        return _json_response(404, {"error": f"Job not found: {slug}"})

    stage2 = _read_stage_file("stage_2")
    stage3 = _read_stage_file("stage_3")
    app_key = body.get("app_key") or _resolve_app_key(slug, stage2)
    if not app_key:
        return _json_response(400, {"error": "No generated application to update"})

    if isinstance(body.get("stage_2"), dict):
        stage2[app_key] = body["stage_2"]
        _write_stage_file("stage_2", stage2)
    if isinstance(body.get("stage_3"), dict):
        stage3[app_key] = body["stage_3"]
        _write_stage_file("stage_3", stage3)

    return get_review(slug)


def get_review_html(slug: str, doc: str) -> tuple[int, dict[str, Any]]:
    apps = load_applications()
    if slug not in apps:
        return _json_response(404, {"error": f"Job not found: {slug}"})
    if doc not in ("cv", "letter"):
        return _json_response(400, {"error": "doc must be cv or letter"})

    output = resolve_output_for_slug(slug)
    if not output:
        return _json_response(404, {"error": "No generated files for this application"})

    pattern = "_cv.html" if doc == "cv" else "_cover_letter.html"
    filename = next((name for name in output["files"] if pattern in name.lower()), None)
    if not filename:
        return _json_response(404, {"error": f"No {doc} HTML file found"})

    html_path = outputs_dir() / output["folder"] / filename
    if not html_path.is_file():
        return _json_response(404, {"error": "HTML file not found on disk"})

    return _json_response(
        200,
        {
            "slug": slug,
            "doc": doc,
            "filename": filename,
            "html": html_path.read_text(encoding="utf-8"),
        },
    )


def put_review_html(slug: str, body: dict[str, Any]) -> tuple[int, dict[str, Any]]:
    apps = load_applications()
    if slug not in apps:
        return _json_response(404, {"error": f"Job not found: {slug}"})

    doc = str(body.get("doc", "")).strip()
    html = body.get("html")
    if doc not in ("cv", "letter"):
        return _json_response(400, {"error": "doc must be cv or letter"})
    if not isinstance(html, str):
        return _json_response(400, {"error": "html string required"})

    output = resolve_output_for_slug(slug)
    if not output:
        return _json_response(404, {"error": "No generated files for this application"})

    html_pattern = "_cv.html" if doc == "cv" else "_cover_letter.html"
    pdf_pattern = "_cv.pdf" if doc == "cv" else "_cover_letter.pdf"
    html_filename = next((name for name in output["files"] if html_pattern in name.lower()), None)
    if not html_filename:
        return _json_response(404, {"error": f"No {doc} HTML file found"})

    html_path = outputs_dir() / output["folder"] / html_filename
    html_path.parent.mkdir(parents=True, exist_ok=True)
    html_path.write_text(html, encoding="utf-8")

    pdf_filename = next((name for name in output["files"] if pdf_pattern in name.lower()), None)
    if pdf_filename:
        static_engine = RESOURCE_ROOT / "engine" / "static_engine"
        if str(static_engine) not in sys.path:
            sys.path.insert(0, str(static_engine))
        from renderer import write_pdf  # noqa: E402

        pdf_path = outputs_dir() / output["folder"] / pdf_filename
        try:
            write_pdf(html, pdf_path)
        except Exception as exc:
            return _json_response(500, {"error": f"PDF regeneration failed: {exc}"})

    refreshed = resolve_output_for_slug(slug)
    return _json_response(
        200,
        {
            "ok": True,
            "slug": slug,
            "doc": doc,
            "output_folder": refreshed["folder"] if refreshed else output["folder"],
            "files": refreshed["files"] if refreshed else output["files"],
        },
    )


def rebuild_application(slug: str, body: dict[str, Any] | None = None) -> tuple[int, dict[str, Any]]:
    apps = load_applications()
    if slug not in apps:
        return _json_response(404, {"error": f"Job not found: {slug}"})

    targets = _parse_build_targets_from_body(body or {})

    try:
        _run_build_only(slugs=[slug], build_targets=targets)
    except Exception as exc:
        return _json_response(500, {"error": str(exc)})

    output = resolve_output_for_slug(slug)
    expected_patterns = []
    if "cv" in targets:
        expected_patterns.append("_cv.pdf")
    if "letter" in targets:
        expected_patterns.append("_cover_letter.pdf")
    files = output.get("files", []) if output else []
    missing = [
        pattern for pattern in expected_patterns
        if not any(pattern in str(filename).lower() for filename in files)
    ]
    if not output or missing:
        labels = ", ".join(pattern.removeprefix("_").removesuffix(".pdf") for pattern in missing)
        detail = f" Missing: {labels}." if labels else ""
        return _json_response(
            500,
            {"error": f"The document build finished without producing the requested PDF.{detail}"},
        )

    return _json_response(
        200,
        {
            "ok": True,
            "output_folder": output["folder"],
            "files": files,
            "outputs": list_output_folders(),
        },
    )


def list_templates() -> tuple[int, dict[str, Any]]:
    catalog = load_template_settings()
    custom = load_custom_templates()
    cv_catalog = {
        key: value for key, value in catalog.get("catalog", {}).items()
        if isinstance(value, dict) and value.get("category") == "cv"
    }
    cv_custom = {
        key: value for key, value in custom.get("templates", {}).items()
        if isinstance(value, dict) and value.get("category", "cv") == "cv"
    }
    return _json_response(
        200,
        {
            "defaults": catalog.get("defaults", {}),
            "catalog": cv_catalog,
            "custom": cv_custom,
            "export": catalog.get("export", {}),
        },
    )


def get_template(template_id: str) -> tuple[int, dict[str, Any]]:
    catalog = load_template_settings().get("catalog", {})
    custom = load_custom_templates().get("templates", {})
    if template_id in catalog:
        entry = dict(catalog[template_id])
        if entry.get("category") != "cv":
            return _json_response(404, {"error": f"CV template not found: {template_id}"})
        entry["layout"] = normalize_layout(entry.get("layout"))
        entry["builtin"] = True
        return _json_response(200, {"id": template_id, **entry})
    if template_id in custom:
        entry = dict(custom[template_id])
        if entry.get("category", "cv") != "cv":
            return _json_response(404, {"error": f"CV template not found: {template_id}"})
        entry["layout"] = normalize_layout(entry.get("layout"))
        return _json_response(200, {"id": template_id, "builtin": False, **entry})
    return _json_response(404, {"error": f"Template not found: {template_id}"})


def save_template(template_id: str, body: dict[str, Any]) -> tuple[int, dict[str, Any]]:
    settings = load_template_settings()
    catalog = settings.get("catalog", {})
    if template_id in catalog:
        entry = catalog[template_id]
        if entry.get("category") != "cv":
            return _json_response(400, {"error": "Cover-letter templates are not editable."})
        entry["name"] = str(body.get("name", entry.get("name", template_id))).strip() or template_id
        entry["description"] = str(body.get("description", entry.get("description", "")))
        entry["layout"] = normalize_layout(body.get("layout"))
        template_settings_path().write_text(
            json.dumps(settings, indent=4, ensure_ascii=False) + "\n", encoding="utf-8"
        )
        return _json_response(200, {"ok": True, "id": template_id, "builtin": True})

    custom = load_custom_templates()
    templates = custom.setdefault("templates", {})
    templates[template_id] = {
        "name": str(body.get("name", template_id)),
        "category": "cv",
        "description": str(body.get("description", "")),
        "layout": normalize_layout(body.get("layout")),
    }
    save_custom_templates(custom)
    return _json_response(200, {"ok": True, "id": template_id, "builtin": False})


def generate_status() -> tuple[int, dict[str, Any]]:
    return _json_response(200, load_generate_status())


VALID_FROM_STAGES = frozenset({"stage_2", "stage_3", "build"})

STEP_LABELS = {
    "starting": "Starting",
    "stage_2": "CV — write & review JSON",
    "stage_3": "Letter — write & review JSON",
    "build": "Static build — CV & cover letter PDFs",
    "complete": "Complete",
    "complete_with_issues": "Complete with issues",
    "failed": "Failed",
}


def start_generate(body: dict[str, Any] | None = None) -> tuple[int, dict[str, Any]]:
    body = body or {}
    only_stage_raw = body.get("only_stage")
    only_stage = str(only_stage_raw).strip() if only_stage_raw else None
    slugs_raw = body.get("slugs")
    slugs: list[str] | None = None
    if isinstance(slugs_raw, list):
        slugs = [str(item).strip() for item in slugs_raw if str(item).strip()]
    if not slugs:
        slugs = _visible_application_slugs()
    build_targets = _parse_build_targets_from_body(body)
    from_stage = str(body.get("from_stage") or "").strip()
    if from_stage in {"", "stage_1"}:
        from_stage = "stage_3" if build_targets == frozenset({"letter"}) else "stage_2"
    if only_stage == "stage_1":
        only_stage = "stage_2"

    prereq_error = _validate_generate_prerequisites(from_stage, slugs, build_targets)
    if prereq_error:
        return _json_response(400, {"error": prereq_error})

    global _generate_thread
    status = load_generate_status()
    if status.get("running"):
        if _generate_thread is not None and _generate_thread.is_alive():
            return _json_response(409, {"error": "Generation already in progress", **status})
        # Previous run crashed without clearing status — allow a new run.
        status = {**status, "running": False, "step": "failed", "error": status.get("error") or "Previous run stopped unexpectedly"}

    def worker() -> None:
        save_generate_status(
            {
                "running": True,
                "step": "starting",
                "error": None,
                "finished_at": None,
                "queue": {
                    "index": 0,
                    "total": len(slugs),
                    "slug": None,
                    "completed": [],
                    "failed": [],
                    "remaining": list(slugs),
                },
            }
        )
        try:
            _run_full_pipeline(
                from_stage=from_stage,
                only_stage=only_stage,
                slugs=slugs,
                build_targets=build_targets,
            )
            preferred_stage = only_stage if only_stage in {"stage_2", "stage_3"} else None
            if preferred_stage is None and from_stage != "build":
                preferred_stage = "stage_3" if "letter" in build_targets else "stage_2"
            outcome_summary = _generation_outcome_summary(slugs, preferred_stage)
            completed_with_issues = bool(
                outcome_summary.get("accepted")
                or outcome_summary.get("reused")
                or outcome_summary.get("skipped")
                or outcome_summary.get("failed")
            )
            previous = load_generate_status()
            save_generate_status(
                {
                    "running": False,
                    "step": "complete_with_issues" if completed_with_issues else "complete",
                    "error": None,
                    "finished_at": _now_iso(),
                    "outcome_summary": outcome_summary,
                    "queue": previous.get("queue"),
                }
            )
        except Exception as exc:
            detail = str(exc).strip() or repr(exc)
            previous = load_generate_status()
            save_generate_status(
                {
                    "running": False,
                    "step": "failed",
                    "error": detail,
                    "finished_at": _now_iso(),
                    "queue": previous.get("queue"),
                }
            )

    _generate_thread = threading.Thread(target=worker, daemon=True)
    _generate_thread.start()
    return _json_response(202, {"ok": True, "message": "Generation started"})


def _now_iso() -> str:
    from datetime import UTC, datetime

    return datetime.now(UTC).isoformat()


def _read_stage_file(name: str) -> dict[str, Any]:
    path = stage_path(name)
    if not path.is_file():
        return {}
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
        return data if isinstance(data, dict) else {}
    except json.JSONDecodeError:
        return {}


def _write_stage_file(name: str, data: dict[str, Any]) -> None:
    path = stage_path(name)
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


def _app_key_for_slug(slug: str) -> str | None:
    apps = load_applications()
    for index, key in enumerate(apps.keys(), start=1):
        if key == slug:
            return f"application_{index}"
    return None


def _entry_for_slug(stage: dict[str, Any], slug: str) -> dict[str, Any] | None:
    wanted = str(slug or "").strip()
    if not wanted:
        return None
    for key, entry in stage.items():
        if not str(key).startswith("application_") or not isinstance(entry, dict):
            continue
        if str(entry.get("source_slug", "")).strip() == wanted:
            return entry
    app_key = _app_key_for_slug(wanted)
    if not app_key:
        return None
    entry = stage.get(app_key)
    if not isinstance(entry, dict):
        return None
    entry_slug = str(entry.get("source_slug", "")).strip()
    if entry_slug and entry_slug != wanted:
        return None
    return entry


def _pipeline_phases(slug: str) -> dict[str, bool]:
    if str(DYNAMIC_ENGINE) not in sys.path:
        sys.path.insert(0, str(DYNAMIC_ENGINE))
    from batch_resilience import is_buildable  # noqa: E402

    stage2 = _read_stage_file("stage_2")
    stage3 = _read_stage_file("stage_3")
    has_stage2 = is_buildable(_entry_for_slug(stage2, slug))
    has_stage3 = is_buildable(_entry_for_slug(stage3, slug))
    has_build = resolve_output_for_slug(slug) is not None
    return {
        "stage_2": has_stage2,
        "stage_3": has_stage3,
        "build": has_build,
    }


def _pipeline_outcomes(slug: str) -> dict[str, dict[str, Any]]:
    outcomes: dict[str, dict[str, Any]] = {}
    for stage_name in ("stage_2", "stage_3"):
        entry = _entry_for_slug(_read_stage_file(stage_name), slug)
        if not isinstance(entry, dict):
            continue
        meta = entry.get("_generation")
        if isinstance(meta, dict) and meta:
            outcomes[stage_name] = meta
    return outcomes


def _generation_outcome_summary(
    slugs: list[str] | None = None,
    preferred_stage: str | None = None,
) -> dict[str, int]:
    apps = load_applications()
    selected = slugs if slugs else _visible_application_slugs(apps)
    summary = {"total": len(selected), "generated": 0, "accepted": 0, "reused": 0, "skipped": 0, "failed": 0}
    for slug in selected:
        outcomes = _pipeline_outcomes(slug)
        outcome = outcomes.get(preferred_stage) if preferred_stage else None
        if not outcome:
            outcome = outcomes.get("stage_3") or outcomes.get("stage_2")
        status = str((outcome or {}).get("status", "generated"))
        if status == "generated":
            summary["generated"] += 1
        elif status in {"accepted_low_quality", "accepted_after_retries"}:
            summary["accepted"] += 1
        elif status == "reused_previous":
            summary["reused"] += 1
        elif status in {"skipped_low_fit", "skipped_dependency"}:
            summary["skipped"] += 1
        else:
            summary["failed"] += 1
    return summary


def _parse_build_targets_from_body(body: dict[str, Any]) -> frozenset[str]:
    if str(DYNAMIC_ENGINE) not in sys.path:
        sys.path.insert(0, str(DYNAMIC_ENGINE))
    from utils import parse_build_targets  # noqa: E402

    raw = body.get("build_targets")
    if raw is None:
        return frozenset({"cv", "letter"})
    if isinstance(raw, list):
        return parse_build_targets(",".join(str(item) for item in raw))
    return parse_build_targets(str(raw))


def _validate_generate_prerequisites(
    from_stage: str,
    slugs: list[str] | None,
    build_targets: frozenset[str] | None = None,
) -> str | None:
    doc_targets = build_targets or frozenset({"cv", "letter"})
    if from_stage not in VALID_FROM_STAGES:
        return f"Invalid from_stage. Use one of: {sorted(VALID_FROM_STAGES)}"
    if not doc_targets:
        return "Select at least one document to build (cv, letter, or both)"
    if from_stage == "stage_3" and doc_targets == frozenset({"cv"}):
        return "CV-only output does not use the letter stage — start from the CV writer or Build only"

    apps = load_applications()
    app_slugs = slugs if slugs else _visible_application_slugs(apps)
    if not app_slugs:
        return "No applications to generate"

    stage2 = _read_stage_file("stage_2")
    stage3 = _read_stage_file("stage_3")

    for slug in app_slugs:
        if slug not in apps:
            return f"Job not found: {slug}"
        app_key = _app_key_for_slug(slug)
        if not app_key:
            return f"Could not resolve application key for: {slug}"
        if from_stage == "build" and "cv" in doc_targets and not isinstance(stage2.get(app_key), dict) and _entry_for_slug(stage2, slug) is None:
            return f"{slug}: CV JSON is missing — generate the CV first"
        if from_stage == "build" and "letter" in doc_targets and not isinstance(stage3.get(app_key), dict) and _entry_for_slug(stage3, slug) is None:
            return f"{slug}: letter JSON is missing — generate the letter first"
        if from_stage == "stage_3" and "letter" not in doc_targets:
            return "Letter stage requires letter output — choose Letter only or CV + Letter"
    return None


def _resolve_app_key(slug: str, stage2: dict[str, Any]) -> str | None:
    for key, entry in stage2.items():
        if not key.startswith("application_") or not isinstance(entry, dict):
            continue
        if entry.get("source_slug") == slug:
            return key
    keys = sorted(k for k in stage2 if k.startswith("application_"))
    return keys[0] if keys else None


def _run_full_pipeline(
    from_stage: str = "stage_2",
    only_stage: str | None = None,
    slugs: list[str] | None = None,
    build_targets: frozenset[str] | None = None,
) -> None:
    """Run pipeline in a child process so Windows HTTP server threads stay stable."""
    script = RESOURCE_ROOT / "ui" / "backend" / "generate.py"

    targets = build_targets or frozenset({"cv", "letter"})
    targets_arg = "both" if targets == frozenset({"cv", "letter"}) else ",".join(sorted(targets))

    cmd = [sys.executable, "-u", str(script), "--ui", "--from-stage", from_stage, "--build-targets", targets_arg]
    if only_stage:
        cmd.extend(["--only-stage", only_stage])
    if slugs:
        cmd.extend(["--slugs", ",".join(slugs)])

    if getattr(sys, "frozen", False):
        cmd = [sys.executable, "--joblication-mode", "pipeline", "--ui", "--from-stage", from_stage, "--build-targets", targets_arg]
        if only_stage:
            cmd.extend(["--only-stage", only_stage])
        if slugs:
            cmd.extend(["--slugs", ",".join(slugs)])

    proc = subprocess.Popen(
        cmd,
        cwd=str(ROOT),
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        text=True,
        encoding="utf-8",
        errors="replace",
        bufsize=1,
        env={**os.environ, "PYTHONUNBUFFERED": "1"},
    )

    output_tail: deque[str] = deque(maxlen=200)
    if proc.stdout is not None:
        for line in proc.stdout:
            output_tail.append(line)

    returncode = proc.wait()
    if returncode == 0:
        return

    combined = "".join(output_tail)
    raise RuntimeError(_parse_generate_error(combined, returncode))


def _parse_generate_error(stderr: str, returncode: int) -> str:
    for line in reversed(stderr.splitlines()):
        line = line.strip()
        if line.startswith("Error:"):
            return line[6:].strip()
        if line and not line.startswith("==="):
            return line
    return f"Generation failed (exit code {returncode})."


def _run_build_only(
    slugs: list[str] | None = None,
    build_targets: frozenset[str] | None = None,
) -> str:
    build_script = RESOURCE_ROOT / "engine" / "static_engine" / "build.py"
    env = {**os.environ, "PYTHONUNBUFFERED": "1"}
    if slugs:
        env["JOBLICATION_SLUGS"] = ",".join(slugs)
    targets = build_targets or frozenset({"cv", "letter"})
    if targets != frozenset({"cv", "letter"}):
        env["JOBLICATION_BUILD_TARGETS"] = ",".join(sorted(targets))

    command = (
        [sys.executable, "--joblication-mode", "build"]
        if getattr(sys, "frozen", False)
        else [sys.executable, "-u", str(build_script)]
    )
    proc = subprocess.Popen(
        command,
        cwd=str(ROOT),
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        text=True,
        encoding="utf-8",
        errors="replace",
        env=env,
    )
    output_lines: list[str] = []
    if proc.stdout is not None:
        output_lines.extend(proc.stdout)
    returncode = proc.wait()
    output = "".join(output_lines)
    if returncode != 0:
        detail = next((line.strip() for line in reversed(output_lines) if line.strip()), "")
        suffix = f": {detail}" if detail else ""
        raise RuntimeError(f"Static build failed (exit {returncode}){suffix}")
    if re.search(r"Static build complete:\s*0 application", output, re.I):
        warning = next(
            (line.strip().removeprefix("Warning: ") for line in reversed(output_lines) if "Warning:" in line),
            "No buildable document was produced.",
        )
        raise RuntimeError(warning)
    return output


def list_openrouter_models() -> tuple[int, dict[str, Any]]:
    """Fetch model and reasoning metadata only when the settings UI requests it."""
    try:
        import yaml
    except ImportError:
        return _json_response(500, {"error": "PyYAML is required on the server"})

    path = engine_config_path()
    try:
        parsed = yaml.safe_load(path.read_text(encoding="utf-8"))
    except (OSError, yaml.YAMLError) as exc:
        return _json_response(500, {"error": f"Could not read engine configuration: {exc}"})
    if parsed is None:
        parsed = {}
    if not isinstance(parsed, dict):
        return _json_response(500, {"error": "Config root must be a YAML mapping"})

    try:
        from openrouter import list_openrouter_models as fetch_models  # noqa: E402

        models = fetch_models(parsed)
    except (ImportError, RuntimeError, ValueError) as exc:
        return _json_response(502, {"error": str(exc)})
    return _json_response(200, {"models": models, "count": len(models)})


def resolve_output_file(relative: str) -> Path | None:
    base = outputs_dir().resolve()
    target = (base / relative).resolve()
    if not str(target).startswith(str(base)):
        return None
    if not target.is_file():
        return None
    return target
