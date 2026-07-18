"""Render Jinja2 HTML templates and export PDF."""

from __future__ import annotations

import re
import os
import shutil
import subprocess
import tempfile
from io import BytesIO
from pathlib import Path
from typing import Any

from jinja2 import Environment, FileSystemLoader, select_autoescape

ENGINE_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = ENGINE_DIR.parent.parent
TEMPLATES_DIR = PROJECT_ROOT / "templates"

_DASH_TRANSLATION = str.maketrans(
    {
        "\u2010": "-",
        "\u2011": "-",
        "\u2012": "-",
        "\u2013": "-",
        "\u2014": "-",
        "\u2212": "-",
    }
)

_WINDOWS_BROWSER_PATHS = tuple(
    Path(base) / relative
    for base, relative in (
        (os.environ.get("PROGRAMFILES(X86)"), "Microsoft/Edge/Application/msedge.exe"),
        (os.environ.get("PROGRAMFILES"), "Microsoft/Edge/Application/msedge.exe"),
        (os.environ.get("LOCALAPPDATA"), "Google/Chrome/Application/chrome.exe"),
    )
    if base
)


def _finalize_template_value(value: Any) -> Any:
    if isinstance(value, str):
        return value.translate(_DASH_TRANSLATION).replace("\u00a0", " ")
    return value


def _find_pdf_browser() -> Path | None:
    """Locate a Chromium browser capable of producing standards-compliant PDFs."""
    configured = os.environ.get("JOBLICATION_PDF_BROWSER", "").strip()
    if configured:
        candidate = Path(configured).expanduser()
        if candidate.is_file():
            return candidate.resolve()

    for command in (
        "msedge",
        "msedge.exe",
        "google-chrome",
        "google-chrome-stable",
        "chrome",
        "chrome.exe",
        "chromium",
        "chromium-browser",
    ):
        resolved = shutil.which(command)
        if resolved:
            return Path(resolved).resolve()

    for candidate in _WINDOWS_BROWSER_PATHS:
        if candidate.is_file():
            return candidate.resolve()
    return None


def _valid_pdf(path: Path) -> bool:
    return path.is_file() and path.stat().st_size > 100 and path.read_bytes()[:5] == b"%PDF-"


def _write_pdf_with_browser(html: str, output_path: Path, browser: Path) -> Path:
    """Print HTML with Chromium so browser and exported layouts share CSS behavior."""
    output_path = output_path.resolve()
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.unlink(missing_ok=True)

    with tempfile.TemporaryDirectory(prefix="joblication-pdf-") as temp_dir:
        temp_root = Path(temp_dir)
        html_path = temp_root / "document.html"
        profile_path = temp_root / "browser-profile"
        html_path.write_text(html, encoding="utf-8")

        command = [
            str(browser),
            "--headless=new",
            "--disable-gpu",
            "--disable-extensions",
            "--no-first-run",
            "--no-default-browser-check",
            f"--user-data-dir={profile_path}",
            "--no-pdf-header-footer",
            f"--print-to-pdf={output_path}",
            html_path.resolve().as_uri(),
        ]
        result = subprocess.run(
            command,
            check=False,
            capture_output=True,
            text=True,
            timeout=90,
        )

    if result.returncode != 0 or not _valid_pdf(output_path):
        detail = (result.stderr or result.stdout or "unknown browser error").strip()
        output_path.unlink(missing_ok=True)
        raise RuntimeError(f"Browser PDF generation failed: {detail}")
    return output_path


def _write_pdf_with_xhtml2pdf(html: str, output_path: Path) -> Path:
    """Compatibility fallback for systems without an installed Chromium browser."""
    try:
        from xhtml2pdf import pisa
    except ImportError as exc:
        raise ImportError(
            "PDF export requires Microsoft Edge/Chrome/Chromium or xhtml2pdf."
        ) from exc

    buffer = BytesIO()
    result = pisa.CreatePDF(html, dest=buffer, encoding="utf-8")
    if result.err:
        raise RuntimeError(f"PDF generation failed for {output_path}")

    output_path.write_bytes(buffer.getvalue())
    return output_path


def render_html(template_rel_path: str, context: dict[str, Any]) -> str:
    rel = template_rel_path.replace("\\", "/")
    if rel.startswith("templates/"):
        rel = rel[len("templates/") :]

    env = Environment(
        loader=FileSystemLoader(str(TEMPLATES_DIR)),
        autoescape=select_autoescape(["html", "xml", "j2"]),
        finalize=_finalize_template_value,
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
    """Export HTML using a browser for WYSIWYG fidelity, with a resilient fallback."""
    output_path.parent.mkdir(parents=True, exist_ok=True)
    renderer = os.environ.get("JOBLICATION_PDF_RENDERER", "auto").strip().lower()
    if renderer not in {"auto", "browser", "xhtml2pdf"}:
        raise ValueError("JOBLICATION_PDF_RENDERER must be auto, browser, or xhtml2pdf")

    if renderer in {"auto", "browser"}:
        browser = _find_pdf_browser()
        if browser:
            try:
                return _write_pdf_with_browser(html, output_path, browser)
            except (OSError, subprocess.SubprocessError, RuntimeError):
                if renderer == "browser":
                    raise
        elif renderer == "browser":
            raise RuntimeError(
                "Browser PDF renderer requested but Edge, Chrome, or Chromium was not found"
            )

    return _write_pdf_with_xhtml2pdf(html, output_path)


def safe_filename_part(text: str, fallback: str = "document") -> str:
    cleaned = re.sub(r"[^\w.-]+", "_", text.strip())
    cleaned = cleaned.strip("._")
    return (cleaned or fallback)[:80]
