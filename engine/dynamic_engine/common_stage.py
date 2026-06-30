"""Shared utilities for dynamic engine stage scripts."""

from __future__ import annotations

import json
import re
import sys
import urllib.error
import urllib.request
from dataclasses import dataclass
from datetime import UTC, datetime
from pathlib import Path
from typing import Any

ENGINE_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = ENGINE_DIR.parent.parent
CONFIG_PATH = ENGINE_DIR / "config.yaml"

SECTION_SPLIT_RE = re.compile(
    r"(?<=\.)\s+(?=(?:What We Are Looking For|Requirements?|Responsibilities|"
    r"Qualifications|Job Qualifications|Key responsibilities|About the job|"
    r"What We Offer|Benefits|Skills|Experience|Education|Who you are|"
    r"Your profile|Must have|Nice to have)\b)",
    re.IGNORECASE,
)

SENTENCE_SPLIT_RE = re.compile(r"(?<=[.!?])\s+")


@dataclass
class JobBatch:
    index: int
    total: int
    text: str


class DescriptionParser:
    """Divide a job description into LLM-sized batches."""

    def __init__(self, max_chars: int = 1200) -> None:
        self.max_chars = max_chars

    def parse(self, description: str) -> list[str]:
        text = re.sub(r"\s+", " ", description.strip())
        if not text:
            return []

        if len(text) <= self.max_chars:
            return [text]

        sections = SECTION_SPLIT_RE.split(text)
        sections = [s.strip() for s in sections if s.strip()]

        if len(sections) == 1:
            return self._chunk_by_sentences(text)

        batches: list[str] = []
        buffer = ""

        for section in sections:
            candidate = f"{buffer} {section}".strip() if buffer else section
            if len(candidate) <= self.max_chars:
                buffer = candidate
                continue

            if buffer:
                batches.append(buffer)
                buffer = ""

            if len(section) <= self.max_chars:
                buffer = section
            else:
                batches.extend(self._chunk_by_sentences(section))

        if buffer:
            batches.append(buffer)

        return batches

    def _chunk_by_sentences(self, text: str) -> list[str]:
        sentences = SENTENCE_SPLIT_RE.split(text)
        sentences = [s.strip() for s in sentences if s.strip()]

        batches: list[str] = []
        buffer = ""

        for sentence in sentences:
            candidate = f"{buffer} {sentence}".strip() if buffer else sentence
            if len(candidate) <= self.max_chars:
                buffer = candidate
                continue

            if buffer:
                batches.append(buffer)

            if len(sentence) <= self.max_chars:
                buffer = sentence
            else:
                batches.extend(self._split_hard(sentence))

        if buffer:
            batches.append(buffer)

        return batches

    def _split_hard(self, text: str) -> list[str]:
        chunks: list[str] = []
        start = 0
        while start < len(text):
            end = min(start + self.max_chars, len(text))
            if end < len(text):
                space = text.rfind(" ", start, end)
                if space > start:
                    end = space
            chunks.append(text[start:end].strip())
            start = end
        return [c for c in chunks if c]


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
    path.write_text(json.dumps(payload, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    return path


def build_sources(config: dict) -> dict[str, str]:
    apps_path = resolve_path(config, "applications", "json", "applications/local_applications.json")
    profile_path = resolve_path(config, "profile", "json", "settings/profile.json")
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
    return {
        "contact": profile.get("contact", {}),
        "titles": profile.get("titles", {}),
        "skills": profile.get("skills", {}),
        "experience": profile.get("experience", {}),
        "education": profile.get("education", {}),
        "certifications": profile.get("certifications", {}),
        "projects": profile.get("projects", {}),
        "achievements": profile.get("achievements", {}),
    }


def cv_slice(profile: dict, section: str) -> dict:
    if section == "skills":
        return {"skills": profile.get("skills", {}), "titles": profile.get("titles", {})}
    if section == "experience":
        return {"experience": profile.get("experience", {}), "titles": profile.get("titles", {})}
    if section == "summary":
        return {
            "contact": profile.get("contact", {}),
            "titles": profile.get("titles", {}),
            "experience": profile.get("experience", {}),
            "skills": profile.get("skills", {}),
        }
    if section == "education":
        return {"education": profile.get("education", {}), "certifications": profile.get("certifications", {})}
    if section == "projects":
        return {
            "projects": profile.get("projects", {}),
            "achievements": profile.get("achievements", {}),
            "skills": profile.get("skills", {}),
        }
    return profile


def call_ollama(config: dict, messages: list[dict[str, str]]) -> str:
    ollama = config.get("ollama", {})
    generation = config.get("generation", {})

    base_url = ollama.get("base_url", "http://127.0.0.1:11434").rstrip("/")
    model = ollama.get("model", "")
    if not model:
        raise ValueError("config.yaml: ollama.model is required.")

    payload: dict[str, Any] = {
        "model": model,
        "messages": messages,
        "stream": False,
        "options": {
            "temperature": generation.get("temperature", 0.3),
            "num_ctx": generation.get("context_window", 16384),
        },
    }
    if "think" in ollama:
        payload["think"] = ollama["think"]

    body = json.dumps(payload).encode("utf-8")
    request = urllib.request.Request(
        f"{base_url}/api/chat",
        data=body,
        headers={"Content-Type": "application/json"},
        method="POST",
    )

    try:
        with urllib.request.urlopen(request, timeout=600) as response:
            data = json.loads(response.read().decode("utf-8"))
    except urllib.error.HTTPError as exc:
        detail = exc.read().decode("utf-8", errors="replace")
        raise RuntimeError(f"Ollama request failed ({exc.code}): {detail}") from exc
    except urllib.error.URLError as exc:
        raise RuntimeError(f"Could not reach Ollama at {base_url}: {exc.reason}") from exc

    content = data.get("message", {}).get("content", "")
    if not content:
        raise RuntimeError(f"Ollama returned no content: {data}")
    return content


def clean_llm_json(raw: str) -> str:
    return re.sub(r"^```(?:json)?\s*|\s*```$", "", raw.strip())


def parse_llm_json(raw: str) -> Any:
    text = clean_llm_json(raw)
    try:
        return json.loads(text)
    except json.JSONDecodeError:
        match = re.search(r"\{[\s\S]*\}", text)
        if match:
            return json.loads(match.group())
        match = re.search(r"\[[\s\S]*?\]", text)
        if match:
            return json.loads(match.group())
        raise


def coerce_llm_string(parsed: Any, key: str) -> str:
    """Extract a string field; accept bare string when the model skips the wrapper object."""
    if isinstance(parsed, str):
        return parsed.strip()
    if isinstance(parsed, dict):
        return str(parsed.get(key, "")).strip()
    return ""


def coerce_llm_string_list(parsed: Any, key: str) -> list[str]:
    """Extract a string list; accept a bare JSON array when the model skips the wrapper object."""
    if isinstance(parsed, list):
        return _coerce_str_list(parsed)
    if isinstance(parsed, dict):
        items = parsed.get(key, parsed.get("items", parsed.get("matched", [])))
        if isinstance(items, list):
            return _coerce_str_list(items)
    return []


def coerce_llm_bullets(parsed: Any) -> list[str]:
    """Extract resume bullets from object or bare array responses."""
    return coerce_llm_string_list(parsed, "bullets")


def coerce_llm_dict_map(parsed: Any, key: str) -> dict[str, list[str]]:
    """Extract a dict-of-lists field; accept the map as the top-level object."""
    raw: Any = {}
    if isinstance(parsed, dict):
        if key in parsed and isinstance(parsed[key], dict):
            raw = parsed[key]
        elif parsed and all(isinstance(v, list) for v in parsed.values()):
            raw = parsed

    if not isinstance(raw, dict):
        return {}

    return {
        str(name): _coerce_str_list(vals)
        for name, vals in raw.items()
        if isinstance(vals, list)
    }


def parse_keyword_list(raw: str) -> list[str]:
    parsed = parse_llm_json(raw)
    if isinstance(parsed, dict):
        matched = parsed.get("matched", parsed.get("items", parsed.get("bullets", [])))
        if isinstance(matched, list):
            return _coerce_str_list(matched)
        return _coerce_str_list(list(parsed.values()))
    if isinstance(parsed, list):
        return _coerce_str_list(parsed)
    return []


def _coerce_str_list(items: list[Any]) -> list[str]:
    return [str(item).strip() for item in items if str(item).strip()]


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


def picks_for_batch(
    batch_index: int,
    total_batches: int,
    already_count: int,
    section_cap: int,
    per_batch_max: int,
) -> int:
    if already_count >= section_cap:
        return 0
    remaining_slots = section_cap - already_count
    if total_batches <= 1:
        return remaining_slots
    remaining_batches = total_batches - batch_index + 1
    share = (remaining_slots + remaining_batches - 1) // remaining_batches
    return min(per_batch_max, share)


def resolve_cv_source(requirement: str, profile: dict) -> str:
    """Pick the best profile path for a job requirement without using the LLM."""
    req_tokens = set(_keyword_tokens(requirement))
    if not req_tokens:
        return "profile"

    best_path = "profile"
    best_score = 0

    for section in ("experience", "projects", "skills", "certifications", "education", "achievements"):
        data = profile.get(section, {})
        if not isinstance(data, dict):
            continue
        for key, value in data.items():
            text_tokens = set(_keyword_tokens(json.dumps(value, ensure_ascii=False)))
            overlap = len(req_tokens & text_tokens)
            if overlap > best_score:
                best_score = overlap
                best_path = f"{section}.{key}"

    return best_path


def build_evidence_map_skeleton(job_brief: dict[str, Any], profile: dict) -> list[dict[str, Any]]:
    requirements: list[str] = []
    seen: set[str] = set()

    for item in job_brief.get("must_have", []):
        text = item.get("requirement", str(item)) if isinstance(item, dict) else str(item)
        key = text.lower().strip()
        if key and key not in seen:
            seen.add(key)
            requirements.append(text.strip())

    for item in job_brief.get("responsibilities", [])[:8]:
        text = str(item).strip()
        key = text.lower()
        if text and key not in seen:
            seen.add(key)
            requirements.append(text)

    return [
        {
            "job_requirement": req,
            "cv_source": resolve_cv_source(req, profile),
            "proof_points": [],
            "resume_angle": "",
        }
        for req in requirements
    ]


def build_tailoring_strategy(loop1_review: dict[str, Any]) -> dict[str, Any]:
    score = int(loop1_review.get("fit_score", 0) or 0)
    if score >= 8:
        recommendation = "strong_apply"
    elif score >= 5:
        recommendation = "apply"
    else:
        recommendation = "weak_apply"

    return {
        "fit_score": score,
        "apply_recommendation": recommendation,
        "lead_with": _coerce_str_list(loop1_review.get("strengths", [])[:3]),
        "de_emphasize": _coerce_str_list(loop1_review.get("gaps", [])[:2]),
        "one_line_pitch": str(loop1_review.get("fit_summary", "")).strip(),
    }


def build_ats_block(job_brief: dict[str, Any], keywords: dict[str, list[str]]) -> dict[str, Any]:
    checklist: list[str] = []
    seen: set[str] = set()
    for item in job_brief.get("tools_and_tech", []) + job_brief.get("domain_keywords", []):
        key = str(item).lower().strip()
        if key and key not in seen:
            seen.add(key)
            checklist.append(str(item).strip())

    surfaced: list[str] = []
    for values in keywords.values():
        for word in values:
            key = word.lower()
            if key not in seen:
                seen.add(key)
                surfaced.append(word)

    present = [item for item in checklist if any(item.lower() in s.lower() for s in surfaced)]
    missing = [item for item in checklist if item not in present]

    return {
        "title_variants": [job_brief.get("role_summary", "")[:80]] if job_brief.get("role_summary") else [],
        "keyword_checklist": checklist,
        "keyword_coverage": {
            "present_in_output": present,
            "surfaced_in_keywords": surfaced,
            "missing_honest": missing,
        },
    }
