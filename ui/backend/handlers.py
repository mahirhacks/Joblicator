"""HTTP API handlers for the Joblication UI."""

from __future__ import annotations

import json
import re
import threading
import urllib.error
import urllib.request
from html import unescape
from pathlib import Path
from typing import Any

from store import (
    ROOT,
    applications_path,
    custom_templates_path,
    get_application_meta,
    list_output_folders,
    load_applications,
    load_custom_templates,
    load_generate_status,
    load_profile,
    load_template_settings,
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
    apps = load_applications()
    items = []
    for slug, record in apps.items():
        if not isinstance(record, dict):
            continue
        meta = get_application_meta(slug)
        items.append(
            {
                "slug": slug,
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
    apps = load_applications()
    record = apps.get(slug)
    if not isinstance(record, dict):
        return _json_response(404, {"error": f"Job not found: {slug}"})
    return _json_response(
        200,
        {"slug": slug, **record, **get_application_meta(slug)},
    )


def create_job(body: dict[str, Any]) -> tuple[int, dict[str, Any]]:
    from applications.extractor import append_application

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

    return _json_response(
        200,
        {
            "ok": True,
            "slug": slug,
            "json_count": count,
            "application": {**load_applications().get(slug, {}), **get_application_meta(slug)},
        },
    )


def update_job(slug: str, body: dict[str, Any]) -> tuple[int, dict[str, Any]]:
    apps = load_applications()
    if slug not in apps or not isinstance(apps[slug], dict):
        return _json_response(404, {"error": f"Job not found: {slug}"})

    record = dict(apps[slug])
    for key in ("title", "location", "url", "about", "description"):
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

    return _json_response(200, {"ok": True, "slug": slug, **record, **get_application_meta(slug)})


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
    apps = load_applications()

    items = []
    for slug, record in apps.items():
        if not isinstance(record, dict):
            continue
        meta = get_application_meta(slug)
        out = resolve_output_for_slug(slug)
        items.append(
            {
                "slug": slug,
                "title": record.get("title", ""),
                "company": slug.replace("_", " ").title(),
                "location": record.get("location", ""),
                "status": meta.get("status", "unsubmitted"),
                "notes": meta.get("notes", ""),
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


def rebuild_application(slug: str) -> tuple[int, dict[str, Any]]:
    apps = load_applications()
    if slug not in apps:
        return _json_response(404, {"error": f"Job not found: {slug}"})

    try:
        _run_build_only()
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


def start_generate() -> tuple[int, dict[str, Any]]:
    global _generate_thread
    status = load_generate_status()
    if status.get("running"):
        return _json_response(409, {"error": "Generation already in progress", **status})

    def worker() -> None:
        save_generate_status({"running": True, "step": "starting", "error": None, "finished_at": None})
        try:
            _run_full_pipeline(lambda step: save_generate_status(
                {"running": True, "step": step, "error": None, "finished_at": None}
            ))
            save_generate_status(
                {
                    "running": False,
                    "step": "complete",
                    "error": None,
                    "finished_at": _now_iso(),
                }
            )
        except Exception as exc:
            save_generate_status(
                {
                    "running": False,
                    "step": "failed",
                    "error": str(exc),
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


def _resolve_app_key(slug: str, stage2: dict[str, Any]) -> str | None:
    stage1 = _read_stage_file("stage_1")
    for key, entry in stage1.items():
        if not key.startswith("application_") or not isinstance(entry, dict):
            continue
        if entry.get("source_slug") == slug:
            return key
    keys = sorted(k for k in stage2 if k.startswith("application_"))
    return keys[0] if keys else None


def _run_full_pipeline(progress_callback: Any = None) -> None:
    import generate as pipeline

    pipeline.generate(progress_callback=progress_callback)


def _run_build_only() -> None:
    import generate as pipeline

    pipeline._setup_paths()
    from build import run as run_build
    from utils import ensure_project_path

    ensure_project_path()
    run_build()


def resolve_output_file(relative: str) -> Path | None:
    base = outputs_dir().resolve()
    target = (base / relative).resolve()
    if not str(target).startswith(str(base)):
        return None
    if not target.is_file():
        return None
    return target
