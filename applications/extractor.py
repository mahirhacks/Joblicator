"""
Sanitize and structure job applications into local_applications.json.

The UI posts structured fields; this module cleans them and appends to JSON.
Legacy bulk import from a [start]...[end] text file is still supported via --txt.

Run: python applications/extractor.py --txt path/to/file.txt
"""

from __future__ import annotations

import json
import re
import unicodedata
from dataclasses import dataclass
from pathlib import Path

DIR = Path(__file__).resolve().parent

import sys

if str(DIR.parent) not in sys.path:
    sys.path.insert(0, str(DIR.parent))

from applications.slug_utils import unique_slug
from applications.storage import load_json_path

JSON_PATH = load_json_path()

BLOCK_RE = re.compile(
    r"\[start\]\s*(.*?)\s*\[end\]",
    re.DOTALL | re.IGNORECASE,
)

INLINE_HEADER_RE = re.compile(
    r"^\[(Company Name|Title|URL|Location)\]\s*:\s*([^\r\n]*)$",
    re.IGNORECASE | re.MULTILINE,
)

SECTION_HEADER_RE = re.compile(
    r"^\[(About|Description)\]\s*:\s*([^\r\n]*)$",
    re.IGNORECASE | re.MULTILINE,
)

PLACEHOLDER_RE = re.compile(r"^<.+>$", re.IGNORECASE)

# i, ii, iii, iv, v, vi, vii, viii, ix, x, xi, xii ...
ROMAN_RE = re.compile(
    r"^(i{1,3}|iv|vi{0,3}|ix|x{1,3}|xi{0,2})\s*[\.\)\:]\s*(.+)$",
    re.IGNORECASE,
)

LETTER_RE = re.compile(r"^([a-z])[\.\)]\s+(.+)$", re.IGNORECASE)

NUMBER_RE = re.compile(r"^(\d{1,2})[\.\)]\s+(.+)$")

BULLET_RE = re.compile(r"^[-•*–—]\s+(.+)$")

SECTION_HEADER_RE_INLINE = re.compile(r"^(.{2,120}?):\s*$")


@dataclass
class RawApplication:
    company: str
    title: str
    url: str
    location: str
    about: str
    description: str


def _section_content(block: str, section: str, stop_section: str | None = None) -> str:
    start_re = re.compile(rf"^\[{section}\]\s*:\s*(.*)$", re.IGNORECASE | re.MULTILINE)
    match = start_re.search(block)
    if not match:
        return ""

    same_line = match.group(1).strip()
    remainder = block[match.end() :].lstrip("\n")

    if stop_section:
        stop_re = re.compile(rf"^\[{stop_section}\]\s*:", re.IGNORECASE | re.MULTILINE)
        stop_match = stop_re.search(remainder)
        if stop_match:
            remainder = remainder[: stop_match.start()]

    parts = [part for part in (same_line, remainder.strip()) if part]
    return "\n".join(parts).strip()


def _legacy_body(block: str) -> str:
    """Free-form body for older blocks without [About]/[Description]."""
    body = INLINE_HEADER_RE.sub("", block)
    body = SECTION_HEADER_RE.sub("", body)
    return body.strip()


def parse_blocks(text: str) -> list[RawApplication]:
    apps: list[RawApplication] = []
    for block in BLOCK_RE.findall(text):
        headers = {k.lower(): v.strip() for k, v in INLINE_HEADER_RE.findall(block)}
        about = _section_content(block, "About", stop_section="Description")
        description = _section_content(block, "Description")

        if not about and not description:
            legacy = _legacy_body(block)
            description = legacy

        apps.append(
            RawApplication(
                company=headers.get("company name", ""),
                title=headers.get("title", ""),
                url=headers.get("url", ""),
                location=headers.get("location", ""),
                about=about,
                description=description,
            )
        )
    return apps


def _is_placeholder(value: str) -> bool:
    value = value.strip()
    if not value:
        return True
    return bool(PLACEHOLDER_RE.match(value))


def slugify(company: str, title: str = "") -> str:
    base = company.strip().lower()
    slug = re.sub(r"[^a-z0-9]+", "_", base).strip("_")
    if not slug and title:
        slug = re.sub(r"[^a-z0-9]+", "_", title.strip().lower()).strip("_")
    return slug or "unknown_company"


def load_json(json_path: Path = JSON_PATH) -> dict[str, dict[str, str]]:
    if not json_path.exists():
        return {}
    content = json_path.read_text(encoding="utf-8").strip()
    if not content:
        return {}
    return json.loads(content)


def sanitize_quotes(text: str) -> str:
    text = (
        text.replace("\u201c", '"')
        .replace("\u201d", '"')
        .replace("\u2018", "'")
        .replace("\u2019", "'")
    )
    text = re.sub(r'"([^"\n]*)"', r"(\1)", text)
    # Balance any remaining stray double quotes as parentheses.
    out: list[str] = []
    open_paren = False
    for ch in text:
        if ch == '"':
            out.append("(" if not open_paren else ")")
            open_paren = not open_paren
        else:
            out.append(ch)
    return "".join(out)


def sanitize_text(text: str) -> str:
    text = unicodedata.normalize("NFKC", text)
    text = text.replace("\r\n", "\n").replace("\r", "\n")
    text = text.replace("\u00a0", " ").replace("\u200b", "").replace("\ufeff", "")
    text = sanitize_quotes(text)
    text = text.replace("—", "-").replace("–", "-").replace("…", "...")
    text = re.sub(r"[ \t]+", " ", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def _is_list_item(line: str) -> tuple[str, str] | None:
    line = line.strip()
    if not line:
        return None

    if m := ROMAN_RE.match(line):
        marker = m.group(1).lower()
        content = re.sub(r"\s+", " ", m.group(2).strip())
        return marker, f"{marker}. {content}"

    if m := LETTER_RE.match(line):
        marker = m.group(1).lower()
        content = re.sub(r"\s+", " ", m.group(2).strip())
        return marker, f"{marker}. {content}"

    if m := NUMBER_RE.match(line):
        marker = m.group(1)
        content = re.sub(r"\s+", " ", m.group(2).strip())
        return marker, f"{marker}. {content}"

    if m := BULLET_RE.match(line):
        content = re.sub(r"\s+", " ", m.group(1).strip())
        return "bullet", f"- {content}"

    return None


def _is_section_header(line: str) -> str | None:
    stripped = line.strip()
    if not stripped.endswith(":"):
        return None
    if SECTION_HEADER_RE_INLINE.match(stripped):
        return stripped[:-1].strip()
    return None


def format_body(body: str) -> str:
    """Collapse multiline list sections into inline 'Header: i. a ii. b' form."""
    lines = body.split("\n")
    output: list[str] = []
    i = 0

    while i < len(lines):
        line = lines[i]
        stripped = line.strip()

        if not stripped:
            i += 1
            continue

        header = _is_section_header(stripped)
        if header is not None:
            items: list[str] = []
            j = i + 1
            while j < len(lines):
                candidate = lines[j].strip()
                if not candidate:
                    if items:
                        j += 1
                        continue
                    break
                parsed = _is_list_item(candidate)
                if parsed is None:
                    break
                items.append(parsed[1])
                j += 1

            if items:
                output.append(f"{header}: {' '.join(items)}")
                i = j
                continue

        # Inline header with list starting on the next lines, e.g. "Recommendation:"
        if stripped.endswith(":") and i + 1 < len(lines):
            items = []
            j = i + 1
            while j < len(lines):
                candidate = lines[j].strip()
                if not candidate:
                    if items:
                        j += 1
                        continue
                    break
                parsed = _is_list_item(candidate)
                if parsed is None:
                    break
                items.append(parsed[1])
                j += 1

            if items:
                header_text = stripped[:-1].strip()
                output.append(f"{header_text}: {' '.join(items)}")
                i = j
                continue

        # Consecutive list lines without an explicit header.
        parsed = _is_list_item(stripped)
        if parsed is not None:
            items = [parsed[1]]
            j = i + 1
            while j < len(lines):
                candidate = lines[j].strip()
                if not candidate:
                    break
                next_item = _is_list_item(candidate)
                if next_item is None:
                    break
                items.append(next_item[1])
                j += 1
            output.append(" ".join(items))
            i = j
            continue

        output.append(re.sub(r"\s+", " ", stripped))
        i += 1

    return " ".join(part for part in output if part)


def to_record(app: RawApplication) -> dict[str, str] | None:
    if _is_placeholder(app.company) and _is_placeholder(app.title):
        return None

    cleaned_about = format_body(sanitize_text(app.about)) if app.about else ""
    cleaned_description = format_body(sanitize_text(app.description)) if app.description else ""

    if not cleaned_about and not cleaned_description and _is_placeholder(app.company):
        return None

    company = "" if _is_placeholder(app.company) else app.company.strip()
    return {
        "company": company,
        "url": "" if _is_placeholder(app.url) else app.url.strip(),
        "location": "" if _is_placeholder(app.location) else app.location.strip(),
        "title": "" if _is_placeholder(app.title) else app.title.strip(),
        "about": cleaned_about,
        "description": cleaned_description,
    }


def record_from_fields(
    company: str,
    title: str,
    about: str = "",
    description: str = "",
    location: str = "",
    url: str = "",
) -> dict[str, str] | None:
    return to_record(
        RawApplication(
            company=company,
            title=title,
            url=url,
            location=location,
            about=about,
            description=description,
        )
    )


def extract(text: str) -> dict[str, dict[str, str]]:
    records: dict[str, dict[str, str]] = {}

    for app in parse_blocks(text):
        record = to_record(app)
        if record is None:
            continue
        key = unique_slug(slugify(app.company, app.title), records)
        records[key] = record

    return records


def append_application(
    company: str,
    title: str,
    about: str = "",
    description: str = "",
    location: str = "",
    url: str = "",
    json_path: Path = JSON_PATH,
) -> tuple[str, int]:
    """Sanitize one application and append it to the JSON store."""
    record = record_from_fields(company, title, about, description, location, url)
    if record is None:
        raise ValueError("Invalid application data.")

    records = load_json(json_path)
    key = unique_slug(slugify(company, title), records)
    records[key] = record
    write_json(records, json_path)
    return key, len(records)


def write_json(records: dict[str, dict[str, str]], path: Path = JSON_PATH) -> None:
    path.write_text(
        json.dumps(records, indent=4, ensure_ascii=False) + "\n",
        encoding="utf-8",
    )


def import_txt(txt_path: Path, json_path: Path = JSON_PATH) -> int:
    """Parse a legacy text file and replace json_path with extracted records."""
    if not txt_path.exists():
        raise FileNotFoundError(f"Missing input file: {txt_path}")

    records = extract(txt_path.read_text(encoding="utf-8"))
    if not records:
        return 0

    write_json(records, json_path)
    return len(records)


def main() -> None:
    import argparse

    parser = argparse.ArgumentParser(description="Extract job applications to JSON.")
    parser.add_argument(
        "--txt",
        type=Path,
        required=True,
        help="Legacy [start]...[end] text file to import",
    )
    parser.add_argument("--json", type=Path, default=JSON_PATH, help="Output JSON file")
    args = parser.parse_args()

    try:
        count = import_txt(args.txt, args.json)
    except FileNotFoundError as exc:
        raise SystemExit(str(exc)) from exc

    if count == 0:
        print(f"No valid [start]...[end] blocks found in {args.txt}; JSON not changed.")
        return

    print(f"Wrote {count} application(s) to {args.json}")


if __name__ == "__main__":
    main()
