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
from html import unescape
from pathlib import Path
from typing import Any

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
    load_generate_status,
    load_profile,
    load_template_settings,
    generate_log_path,
    outputs_dir,
    profile_path,
    resolve_output_for_slug,
    save_applications,
    save_custom_templates,
    save_generate_status,
    save_profile,
    set_application_meta,
    stage_path,
    template_settings_path,
)

VALID_STATUSES = frozenset(
    {"unsubmitted", "submitted", "rejected", "interview", "accepted"}
)

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


def list_jobs() -> tuple[int, dict[str, Any]]:
    from applications.slug_utils import display_company

    apps = load_applications()
    items = []
    for slug, record in apps.items():
        if not isinstance(record, dict):
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

    if "status" in body or "notes" in body:
        status = body.get("status")
        if status is not None and status not in VALID_STATUSES:
            return _json_response(400, {"error": f"Invalid status. Use one of: {sorted(VALID_STATUSES)}"})
        set_application_meta(
            slug,
            status=status if status is not None else None,
            notes=str(body.get("notes", "")).strip() if "notes" in body else None,
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
        meta = get_application_meta(slug)
        out = resolve_output_for_slug(slug)
        phases = _pipeline_phases(slug)
        items.append(
            {
                "slug": slug,
                "title": record.get("title", ""),
                "company": display_company(slug, record),
                "location": record.get("location", ""),
                "status": meta.get("status", "unsubmitted"),
                "notes": meta.get("notes", ""),
                "phases": phases,
                "has_output": bool(out),
                "output_folder": out["folder"] if out else None,
                "files": out["files"] if out else [],
            }
        )
    return _json_response(200, {"applications": items})


def list_outputs() -> tuple[int, dict[str, Any]]:
    return _json_response(200, {"outputs": list_output_folders()})


def get_review(slug: str) -> tuple[int, dict[str, Any]]:
    apps = load_applications()
    if slug not in apps:
        return _json_response(404, {"error": f"Job not found: {slug}"})

    stage2 = _read_stage_file("stage_2")
    stage3 = _read_stage_file("stage_3")
    app_key = _resolve_app_key(slug, stage2)
    output = resolve_output_for_slug(slug)
    if not app_key:
        return _json_response(
            200,
            {
                "slug": slug,
                "application": apps[slug],
                "stage_2": None,
                "stage_3": None,
                "output": output,
                "output_folder": output["folder"] if output else None,
                "files": output["files"] if output else [],
                "message": "No generated content yet. Run Generate first.",
            },
        )

    return _json_response(
        200,
        {
            "slug": slug,
            "app_key": app_key,
            "application": apps[slug],
            "stage_2": stage2.get(app_key),
            "stage_3": stage3.get(app_key),
            "output": output,
            "output_folder": output["folder"] if output else None,
            "files": output["files"] if output else [],
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
        static_engine = ROOT / "engine" / "static_engine"
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

    return _json_response(200, {"ok": True, "outputs": list_output_folders()})


def list_templates() -> tuple[int, dict[str, Any]]:
    catalog = load_template_settings()
    custom = load_custom_templates()
    return _json_response(
        200,
        {
            "defaults": catalog.get("defaults", {}),
            "catalog": catalog.get("catalog", {}),
            "custom": custom.get("templates", {}),
            "export": catalog.get("export", {}),
        },
    )


def get_template(template_id: str) -> tuple[int, dict[str, Any]]:
    catalog = load_template_settings().get("catalog", {})
    custom = load_custom_templates().get("templates", {})
    if template_id in catalog:
        entry = dict(catalog[template_id])
        path = ROOT / str(entry.get("path", ""))
        entry["source"] = path.read_text(encoding="utf-8") if path.is_file() else ""
        entry["builtin"] = True
        return _json_response(200, {"id": template_id, **entry})
    if template_id in custom:
        return _json_response(200, {"id": template_id, "builtin": False, **custom[template_id]})
    return _json_response(404, {"error": f"Template not found: {template_id}"})


def save_template(template_id: str, body: dict[str, Any]) -> tuple[int, dict[str, Any]]:
    catalog = load_template_settings().get("catalog", {})
    if template_id in catalog and body.get("source"):
        path = ROOT / str(catalog[template_id].get("path", ""))
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(str(body["source"]), encoding="utf-8")
        return _json_response(200, {"ok": True, "id": template_id, "builtin": True})

    custom = load_custom_templates()
    templates = custom.setdefault("templates", {})
    templates[template_id] = {
        "name": str(body.get("name", template_id)),
        "category": str(body.get("category", "cv")),
        "description": str(body.get("description", "")),
        "layout": body.get("layout", {}),
        "source": str(body.get("source", "")),
    }
    save_custom_templates(custom)
    return _json_response(200, {"ok": True, "id": template_id, "builtin": False})


def generate_status() -> tuple[int, dict[str, Any]]:
    return _json_response(200, load_generate_status())


def get_generate_log(offset: str = "0") -> tuple[int, dict[str, Any]]:
    try:
        start = max(0, int(offset))
    except (TypeError, ValueError):
        start = 0

    status = load_generate_status()
    path = generate_log_path()
    if not path.is_file():
        return _json_response(
            200,
            {
                "text": "",
                "offset": 0,
                "running": bool(status.get("running")),
                "step": str(status.get("step", "")),
            },
        )

    content = path.read_text(encoding="utf-8", errors="replace")
    if start > len(content):
        start = len(content)
    return _json_response(
        200,
        {
            "text": content[start:],
            "offset": len(content),
            "running": bool(status.get("running")),
            "step": str(status.get("step", "")),
        },
    )


VALID_FROM_STAGES = frozenset({"stage_1", "stage_2", "stage_3", "build"})

STEP_LABELS = {
    "starting": "Starting",
    "stage_1": "Stage 1 — keywords & tailoring",
    "stage_2": "Stage 2 — tailored resume",
    "stage_3": "Stage 3 — cover letter",
    "build": "Static build — CV & cover letter PDFs",
    "complete": "Complete",
    "failed": "Failed",
}


def start_generate(body: dict[str, Any] | None = None) -> tuple[int, dict[str, Any]]:
    body = body or {}
    from_stage = str(body.get("from_stage", "stage_1")).strip() or "stage_1"
    only_stage_raw = body.get("only_stage")
    only_stage = str(only_stage_raw).strip() if only_stage_raw else None
    slugs_raw = body.get("slugs")
    slugs: list[str] | None = None
    if isinstance(slugs_raw, list):
        slugs = [str(item).strip() for item in slugs_raw if str(item).strip()]
    build_targets = _parse_build_targets_from_body(body)

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
        log_path = generate_log_path()
        try:
            log_path.parent.mkdir(parents=True, exist_ok=True)
            log_path.write_text("", encoding="utf-8")
        except OSError:
            pass

        save_generate_status({"running": True, "step": "starting", "error": None, "finished_at": None})
        try:
            _run_full_pipeline(
                from_stage=from_stage,
                only_stage=only_stage,
                slugs=slugs,
                build_targets=build_targets,
            )
            save_generate_status(
                {
                    "running": False,
                    "step": "complete",
                    "error": None,
                    "finished_at": _now_iso(),
                }
            )
        except Exception as exc:
            import traceback

            detail = str(exc).strip() or repr(exc)
            tb = traceback.format_exc()
            log_path = generate_log_path()
            try:
                log_path.parent.mkdir(parents=True, exist_ok=True)
                with open(log_path, "a", encoding="utf-8") as log_file:
                    log_file.write(f"\n{tb}\n")
            except OSError:
                pass
            save_generate_status(
                {
                    "running": False,
                    "step": "failed",
                    "error": detail,
                    "finished_at": _now_iso(),
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


def _pipeline_phases(slug: str) -> dict[str, bool]:
    stage1 = _read_stage_file("stage_1")
    stage2 = _read_stage_file("stage_2")
    stage3 = _read_stage_file("stage_3")
    app_key = _app_key_for_slug(slug)
    has_stage1 = bool(app_key and isinstance(stage1.get(app_key), dict))
    has_stage2 = bool(app_key and isinstance(stage2.get(app_key), dict))
    has_stage3 = bool(app_key and isinstance(stage3.get(app_key), dict))
    has_build = resolve_output_for_slug(slug) is not None
    return {
        "stage_1": has_stage1,
        "stage_2": has_stage2,
        "stage_3": has_stage3,
        "build": has_build,
    }


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
        return "CV-only output does not use stage 3 — choose From stage 2 or Build only"

    apps = load_applications()
    app_slugs = slugs if slugs else list(apps.keys())
    if not app_slugs:
        return "No applications to generate"

    stage1 = _read_stage_file("stage_1")
    stage2 = _read_stage_file("stage_2")
    stage3 = _read_stage_file("stage_3")

    for slug in app_slugs:
        if slug not in apps:
            return f"Job not found: {slug}"
        app_key = _app_key_for_slug(slug)
        if not app_key:
            return f"Could not resolve application key for: {slug}"
        if from_stage in ("stage_2", "stage_3", "build") and not isinstance(stage1.get(app_key), dict):
            return f"{slug}: stage 1 not complete — run stage 1 first"
        if from_stage in ("stage_3", "build") and not isinstance(stage2.get(app_key), dict):
            return f"{slug}: stage 2 not complete — run stage 2 first"
        if from_stage == "build" and "letter" in doc_targets and not isinstance(stage3.get(app_key), dict):
            return f"{slug}: stage 3 not complete — run stage 3 first"
        if from_stage == "build" and doc_targets == frozenset({"cv"}) and not isinstance(stage2.get(app_key), dict):
            return f"{slug}: stage 2 not complete — run stage 2 first"
    return None


def _resolve_app_key(slug: str, stage2: dict[str, Any]) -> str | None:
    stage1 = _read_stage_file("stage_1")
    for key, entry in stage1.items():
        if not key.startswith("application_") or not isinstance(entry, dict):
            continue
        if entry.get("source_slug") == slug:
            return key
    keys = sorted(k for k in stage2 if k.startswith("application_"))
    return keys[0] if keys else None


def _run_full_pipeline(
    from_stage: str = "stage_1",
    only_stage: str | None = None,
    slugs: list[str] | None = None,
    build_targets: frozenset[str] | None = None,
) -> None:
    """Run pipeline in a child process so Windows HTTP server threads stay stable."""
    script = ROOT / "ui" / "backend" / "generate.py"
    log_path = generate_log_path()
    log_path.parent.mkdir(parents=True, exist_ok=True)
    log_path.write_text("", encoding="utf-8")

    targets = build_targets or frozenset({"cv", "letter"})
    targets_arg = "both" if targets == frozenset({"cv", "letter"}) else ",".join(sorted(targets))

    cmd = [sys.executable, "-u", str(script), "--ui", "--from-stage", from_stage, "--build-targets", targets_arg]
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

    with open(log_path, "a", encoding="utf-8", newline="\n") as log_file:
        if proc.stdout is not None:
            for line in proc.stdout:
                log_file.write(line)
                log_file.flush()

    returncode = proc.wait()
    if returncode == 0:
        return

    combined = log_path.read_text(encoding="utf-8", errors="replace")
    raise RuntimeError(_parse_generate_error(combined, log_path))


def _parse_generate_error(stderr: str, log_path: Path) -> str:
    for line in reversed(stderr.splitlines()):
        line = line.strip()
        if line.startswith("Error:"):
            return line[6:].strip()
        if line and not line.startswith("==="):
            return line
    return f"Generation failed. See {log_path.relative_to(ROOT)} for details."


def _run_build_only(
    slugs: list[str] | None = None,
    build_targets: frozenset[str] | None = None,
) -> None:
    build_script = ROOT / "engine" / "static_engine" / "build.py"
    env = {**os.environ, "PYTHONUNBUFFERED": "1"}
    if slugs:
        env["JOBLICATION_SLUGS"] = ",".join(slugs)
    targets = build_targets or frozenset({"cv", "letter"})
    if targets != frozenset({"cv", "letter"}):
        env["JOBLICATION_BUILD_TARGETS"] = ",".join(sorted(targets))

    proc = subprocess.Popen(
        [sys.executable, "-u", str(build_script)],
        cwd=str(ROOT),
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        text=True,
        encoding="utf-8",
        errors="replace",
        env=env,
    )
    if proc.stdout is not None:
        for _line in proc.stdout:
            pass
    returncode = proc.wait()
    if returncode != 0:
        raise RuntimeError(f"Static build failed (exit {returncode})")


def resolve_output_file(relative: str) -> Path | None:
    base = outputs_dir().resolve()
    target = (base / relative).resolve()
    if not str(target).startswith(str(base)):
        return None
    if not target.is_file():
        return None
    return target
