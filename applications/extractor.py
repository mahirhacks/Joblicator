"""
Read messy job postings from applications.txt, sanitize and structure them,
then write applications.json.

Input format (one or more blocks):

    [start]
    [Company Name] : NVIDIA Malaysia
    [Title] : Cloud Architect
    [Location] : Kuala Lumpur, Malaysia
    [URL] : https://example.com/job
    [About] :
    Company overview text...
    [Description] :
    Requirements and responsibilities...
    [end]

Run: python applications/extractor.py
"""

from __future__ import annotations

import json
import re
import unicodedata
from dataclasses import dataclass
from pathlib import Path

DIR = Path(__file__).resolve().parent
TXT_PATH = DIR / "applications.txt"
JSON_PATH = DIR / "applications.json"

BLOCK_RE = re.compile(
    r"\[start\]\s*(.*?)\s*\[end\]",
    re.DOTALL | re.IGNORECASE,
)

INLINE_HEADER_RE = re.compile(
    r"^\[(Company Name|Title|URL|Location)\]\s*:\s*(.*)$",
    re.IGNORECASE | re.MULTILINE,
)

SECTION_HEADER_RE = re.compile(
    r"^\[(About|Description)\]\s*:\s*(.*)$",
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

    return {
        "url": "" if _is_placeholder(app.url) else app.url.strip(),
        "location": "" if _is_placeholder(app.location) else app.location.strip(),
        "title": "" if _is_placeholder(app.title) else app.title.strip(),
        "about": cleaned_about,
        "description": cleaned_description,
    }


def extract(text: str | None = None) -> dict[str, dict[str, str]]:
    source = text if text is not None else TXT_PATH.read_text(encoding="utf-8")
    records: dict[str, dict[str, str]] = {}

    for app in parse_blocks(source):
        record = to_record(app)
        if record is None:
            continue
        key = slugify(app.company, app.title)
        if key in records:
            suffix = 2
            while f"{key}_{suffix}" in records:
                suffix += 1
            key = f"{key}_{suffix}"
        records[key] = record

    return records


def write_json(records: dict[str, dict[str, str]], path: Path = JSON_PATH) -> None:
    path.write_text(
        json.dumps(records, indent=4, ensure_ascii=False) + "\n",
        encoding="utf-8",
    )


def main() -> None:
    if not TXT_PATH.exists():
        raise FileNotFoundError(f"Missing input file: {TXT_PATH}")

    records = extract()
    if not records:
        print(f"No valid [start]...[end] blocks found in {TXT_PATH}; JSON not changed.")
        return

    write_json(records)
    print(f"Wrote {len(records)} application(s) to {JSON_PATH}")


if __name__ == "__main__":
    main()
