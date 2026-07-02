"""Shared utilities for dynamic engine stage scripts (non-Ollama)."""

from __future__ import annotations

import json
import re
import sys
from datetime import UTC, datetime
from pathlib import Path
from typing import Any

ENGINE_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = ENGINE_DIR.parent.parent
CONFIG_PATH = ENGINE_DIR / "config.yaml"


def load_config(path: Path = CONFIG_PATH) -> dict:
    try:
        import yaml
    except ImportError as exc:
        raise ImportError("PyYAML is required. Install with: pip install pyyaml") from exc

    with path.open(encoding="utf-8") as f:
        return yaml.safe_load(f)


def resolve_path(config: dict, section: str, key: str, default: str) -> Path:
    rel = config.get(section, {}).get(key, default)
    path = (PROJECT_ROOT / rel).resolve()
    if not path.is_file():
        raise FileNotFoundError(f"File not found: {path}")
    return path


def resolve_output_path(config: dict, key: str, default: str) -> Path:
    rel = config.get("stages", {}).get(key, default)
    return (PROJECT_ROOT / rel).resolve()


def load_json(path: Path) -> dict:
    content = path.read_text(encoding="utf-8").strip()
    if not content:
        return {}
    return json.loads(content)


def export_json(payload: dict[str, Any], path: Path) -> Path:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload, indent=4, ensure_ascii=False) + "\n", encoding="utf-8")
    return path


def build_sources(config: dict) -> dict[str, str]:
    apps_path = resolve_path(config, "applications", "json", "applications/local_applications.json")
    profile_path = resolve_path(config, "profile", "json", "settings/local_profile.json")
    return {
        "applications": str(apps_path),
        "profile": str(profile_path),
    }


def build_payload_header(config: dict) -> dict[str, Any]:
    return {
        "generated_at": datetime.now(UTC).isoformat(),
        "sources": build_sources(config),
    }


def ensure_project_path() -> None:
    if str(PROJECT_ROOT) not in sys.path:
        sys.path.insert(0, str(PROJECT_ROOT))


def application_text(application: dict) -> str:
    about = application.get("about", "")
    description = application.get("description", "")
    return f"{about}\n\n{description}".strip() if about else description.strip()


def profile_for_prompt(profile: dict) -> dict:
    from grounding import sanitize_profile

    clean = sanitize_profile(profile)
    return {
        "contact": clean.get("contact", {}),
        "titles": clean.get("titles", {}),
        "skills": clean.get("skills", {}),
        "experience": clean.get("experience", {}),
        "education": clean.get("education", {}),
        "certifications": clean.get("certifications", {}),
        "projects": clean.get("projects", {}),
        "achievements": clean.get("achievements", {}),
    }


def cv_slice(profile: dict, section: str) -> dict:
    if section == "skills":
        return {"skills": profile.get("skills", {}), "titles": profile.get("titles", {})}
    if section == "experience":
        return {"experience": profile.get("experience", {}), "titles": profile.get("titles", {})}
    if section == "professional_summary":
        return {
            "contact": profile.get("contact", {}),
            "titles": profile.get("titles", {}),
            "experience": profile.get("experience", {}),
            "skills": profile.get("skills", {}),
        }
    if section == "job_title":
        return {"titles": profile.get("titles", {}), "contact": profile.get("contact", {})}
    if section == "education":
        return {"education": profile.get("education", {}), "certifications": profile.get("certifications", {})}
    if section == "certifications":
        return {"certifications": profile.get("certifications", {})}
    if section == "projects":
        return {
            "projects": profile.get("projects", {}),
            "achievements": profile.get("achievements", {}),
            "skills": profile.get("skills", {}),
        }
    return profile


def distribute_keyword_cap(total: int, section_count: int) -> list[int]:
    """Split total keyword budget across sections (e.g. 20 / 7 -> [3,3,3,3,3,3,2])."""
    if section_count <= 0:
        return []
    base = total // section_count
    remainder = total % section_count
    return [base + 1] * remainder + [base] * (section_count - remainder)


def dedupe_keywords(keywords: list[str]) -> list[str]:
    """Case-insensitive dedupe within one keyword array."""
    seen: set[str] = set()
    result: list[str] = []
    for keyword in keywords:
        text = keyword.strip()
        norm = text.lower()
        if text and norm not in seen:
            seen.add(norm)
            result.append(text)
    return result


def _keyword_tokens(text: str) -> list[str]:
    return [
        token
        for token in re.split(r"[^a-z0-9+/]+", text.lower().strip())
        if len(token) > 2
    ]


def build_cv_vocabulary(profile: dict) -> set[str]:
    tokens: set[str] = set()

    def add_text(value: str) -> None:
        for part in re.split(r"[^a-z0-9+/]+", value.lower()):
            if len(part) > 1:
                tokens.add(part)

    def walk(obj: Any) -> None:
        if isinstance(obj, dict):
            for key, value in obj.items():
                add_text(str(key))
                walk(value)
        elif isinstance(obj, list):
            for item in obj:
                walk(item)
        elif obj is not None:
            add_text(str(obj))

    walk(profile)
    return tokens


def build_cv_text(profile: dict) -> str:
    return json.dumps(profile, ensure_ascii=False).lower()


def _token_grounded(token: str, vocabulary: set[str], cv_text: str = "") -> bool:
    if token in vocabulary:
        return True
    return bool(cv_text and re.search(rf"\b{re.escape(token)}\b", cv_text, re.IGNORECASE))


def is_keyword_grounded(keyword: str, vocabulary: set[str], cv_text: str = "") -> bool:
    kw = re.sub(r"\s+", " ", keyword.lower().strip())
    if not kw:
        return False
    if cv_text and kw in cv_text:
        return True
    tokens = _keyword_tokens(kw)
    if not tokens:
        return False
    if len(tokens) == 1:
        return _token_grounded(tokens[0], vocabulary, cv_text)
    return all(_token_grounded(token, vocabulary, cv_text) for token in tokens)


def post_filter_keywords(keywords: list[str], vocabulary: set[str], cv_text: str = "") -> list[str]:
    return [kw for kw in keywords if is_keyword_grounded(kw, vocabulary, cv_text)]


def _normalize_keyword(keyword: str) -> str:
    return re.sub(r"\s+", " ", keyword.lower().strip())


def is_duplicate_keyword(keyword: str, existing: list[str]) -> bool:
    norm = _normalize_keyword(keyword)
    if not norm:
        return True
    for item in existing:
        other = _normalize_keyword(item)
        if norm == other:
            return True
        if len(norm) > 3 and len(other) > 3 and (norm in other or other in norm):
            return True
    return False


def append_unique_keywords(existing: list[str], new: list[str], limit: int) -> list[str]:
    merged = list(existing)
    for keyword in new:
        if len(merged) >= limit:
            break
        if is_duplicate_keyword(keyword, merged):
            continue
        merged.append(keyword)
    return merged


def coerce_requirements_dict(value: Any) -> dict[str, str]:
    """Normalize must_have / nice_to_have to requirement_1, requirement_2, ..."""
    if isinstance(value, dict):
        items: list[str] = []
        for raw in value.values():
            if isinstance(raw, dict):
                text = raw.get("requirement", str(raw))
            else:
                text = str(raw)
            text = text.strip()
            if text:
                items.append(text)
        return {f"requirement_{i + 1}": text for i, text in enumerate(items)}
    if isinstance(value, list):
        items = [str(item).strip() for item in value if str(item).strip()]
        return {f"requirement_{i + 1}": text for i, text in enumerate(items)}
    return {}


def normalize_work_mode(value: Any) -> str:
    mode = str(value or "unknown").lower().strip()
    if mode in ("onsite", "hybrid", "remote", "unknown"):
        return mode
    return "unknown"


def count_words(text: str) -> int:
    return len(re.findall(r"\b[\w'-]+\b", text or ""))


def trim_to_max_words(text: str, max_words: int) -> str:
    if max_words <= 0 or count_words(text) <= max_words:
        return text.strip()

    sentences = re.split(r"(?<=[.!?])\s+", text.strip())
    kept: list[str] = []
    total = 0
    for sentence in sentences:
        if not sentence:
            continue
        sentence_words = count_words(sentence)
        if not kept:
            if sentence_words <= max_words:
                kept.append(sentence)
                total = sentence_words
            else:
                return _hard_trim_words(text, max_words)
        elif total + sentence_words <= max_words:
            kept.append(sentence)
            total += sentence_words
        else:
            break

    if kept:
        return " ".join(kept).strip()
    return _hard_trim_words(text, max_words)


def _hard_trim_words(text: str, max_words: int) -> str:
    words = re.findall(r"\b[\w'-]+\b", text)
    if len(words) <= max_words:
        return text.strip()
    trimmed = " ".join(words[:max_words]).rstrip(",;:")
    if not trimmed.endswith((".", "!", "?")):
        trimmed += "."
    return trimmed


def enforce_max_words(text: str, max_words: int) -> tuple[str, bool]:
    """Return (text, was_trimmed). Hard-caps word count."""
    cleaned = text.strip()
    if max_words <= 0 or count_words(cleaned) <= max_words:
        return cleaned, False
    return trim_to_max_words(cleaned, max_words), True
