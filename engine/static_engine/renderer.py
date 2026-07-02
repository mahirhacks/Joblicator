"""Render Jinja2 HTML templates and export PDF."""

from __future__ import annotations

import re
from io import BytesIO
from pathlib import Path
from typing import Any

from jinja2 import Environment, FileSystemLoader, select_autoescape

ENGINE_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = ENGINE_DIR.parent.parent
TEMPLATES_DIR = PROJECT_ROOT / "templates"


def render_html(template_rel_path: str, context: dict[str, Any]) -> str:
    rel = template_rel_path.replace("\\", "/")
    if rel.startswith("templates/"):
        rel = rel[len("templates/") :]

    env = Environment(
        loader=FileSystemLoader(str(TEMPLATES_DIR)),
        autoescape=select_autoescape(["html", "xml", "j2"]),
        trim_blocks=True,
        lstrip_blocks=True,
    )
    template = env.get_template(rel)
    return template.render(**context)


def write_html(html: str, output_path: Path) -> Path:
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(html, encoding="utf-8")
    return output_path


def write_pdf(html: str, output_path: Path) -> Path:
    try:
        from xhtml2pdf import pisa
    except ImportError as exc:
        raise ImportError(
            "xhtml2pdf is required for PDF export. Install with: pip install xhtml2pdf"
        ) from exc

    output_path.parent.mkdir(parents=True, exist_ok=True)
    buffer = BytesIO()
    result = pisa.CreatePDF(html, dest=buffer, encoding="utf-8")
    if result.err:
        raise RuntimeError(f"PDF generation failed for {output_path}")

    output_path.write_bytes(buffer.getvalue())
    return output_path


def safe_filename_part(text: str, fallback: str = "document") -> str:
    cleaned = re.sub(r"[^\w.-]+", "_", text.strip())
    cleaned = cleaned.strip("._")
    return (cleaned or fallback)[:80]
