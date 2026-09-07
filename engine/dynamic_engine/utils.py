"""Shared utilities for dynamic engine stage scripts (non-Ollama)."""

from __future__ import annotations

import json
import os
import re
import sys
from collections.abc import Iterator
from datetime import UTC, datetime
from pathlib import Path
from typing import Any

SOURCE_ROOT = Path(__file__).resolve().parents[2]
if str(SOURCE_ROOT) not in sys.path:
    sys.path.insert(0, str(SOURCE_ROOT))

from joblication_runtime import DATA_ROOT, RESOURCE_ROOT, data_path, ensure_data_workspace

ENGINE_DIR = Path(__file__).resolve().parent
# PROJECT_ROOT remains the data root for compatibility with stage callers.
PROJECT_ROOT = DATA_ROOT
CONFIG_PATH = data_path("config.yaml")


def configure_stdio_utf8() -> None:
    """Avoid Windows console encoding crashes when logging unicode."""
    for stream in (sys.stdout, sys.stderr):
        reconfigure = getattr(stream, "reconfigure", None)
        if callable(reconfigure):
            try:
                reconfigure(encoding="utf-8", errors="replace")
            except (OSError, ValueError):
                pass


def log_stderr(message: str) -> None:
    """Write to stderr without raising on Windows console/thread issues."""
    text = str(message)
    try:
        print(text, file=sys.stderr, flush=True)
    except OSError:
        try:
            sys.stderr.buffer.write((text + "\n").encode("utf-8", errors="replace"))
            sys.stderr.buffer.flush()
        except OSError:
            pass


def load_config(path: Path = CONFIG_PATH) -> dict:
    try:
        import yaml
    except ImportError as exc:
        raise ImportError("PyYAML is required. Install with: pip install pyyaml") from exc

    ensure_data_workspace()
    with path.open(encoding="utf-8") as f:
        return yaml.safe_load(f)


def resolve_path(config: dict, section: str, key: str, default: str) -> Path:
    rel = config.get(section, {}).get(key, default)
    path = data_path(str(rel)).resolve()
    if not path.is_file():
        raise FileNotFoundError(f"File not found: {path}")
    return path


def resolve_output_path(config: dict, key: str, default: str) -> Path:
    rel = config.get("stages", {}).get(key, default)
    return data_path(str(rel)).resolve()


def configured_export_dir(config: dict[str, Any] | None = None, template_settings: dict[str, Any] | None = None) -> Path:
    """Resolve the folder for generated HTML/PDF files."""
    from joblication_runtime import output_path

    text = ""
    if isinstance(config, dict):
        text = str((config.get("export") or {}).get("output_dir") or "").strip()
    if not text and isinstance(template_settings, dict):
        text = str((template_settings.get("export") or {}).get("output_dir") or "").strip()
    return output_path(text or "outputs")


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
    if str(RESOURCE_ROOT) not in sys.path:
        sys.path.insert(0, str(RESOURCE_ROOT))


def generation_options(config: dict, kind: str) -> dict[str, Any]:
    """Per-loop-type sampling overrides: 'creative' for prose, 'precise' for reviews/parsing."""
    generation = config.get("generation", {})
    key = {
        "creative": "creative_temperature",
        "precise": "precise_temperature",
    }.get(kind)
    if not key:
        return {}
    value = generation.get(key)
    if value is None:
        return {}
    try:
        return {"temperature": float(value)}
    except (TypeError, ValueError):
        return {}


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


_PLACEHOLDER_KEYWORD_RE = re.compile(
    r"^(?:n/?a$|none\b|not\s|no\s|nothing\b|unspecified\b|unknown\b|missing\b)",
    re.IGNORECASE,
)


def drop_placeholder_keywords(keywords: list[str]) -> list[str]:
    """Remove LLM refusal text masquerading as keywords ('N/A', 'No certifications mentioned', ...)."""
    return [kw for kw in keywords if kw.strip() and not _PLACEHOLDER_KEYWORD_RE.match(kw.strip())]


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


def record_reviewer_feedback(
    history: dict[str, list[str]],
    section: str,
    feedback: Any,
) -> None:
    """Append unique reviewer feedback for a section (carry-on across refinement passes)."""
    text = str(feedback or "").strip()
    if not text:
        return
    entries = history.setdefault(section, [])
    if not entries or entries[-1] != text:
        entries.append(text)


def build_quality_improvement_block(
    section: str,
    prior_draft: Any,
    feedback_history: list[str],
    *,
    extra_rules: str = "",
) -> dict[str, Any]:
    """Build an improvement payload with current + all prior reviewer feedback."""
    history = [str(item).strip() for item in feedback_history if str(item).strip()]
    current = history[-1] if history else ""
    previous = history[:-1]

    instruction = (
        f"Rewrite the {section} section addressing reviewer_feedback "
        "and every item in previous_reviewer_feedback that still applies. "
        "Follow all guardrails in the system prompt. "
        "Do not repeat mistakes called out in earlier review rounds."
    )
    if extra_rules:
        instruction = f"{instruction} {extra_rules}"

    block: dict[str, Any] = {
        "prior_draft": prior_draft,
        "reviewer_feedback": current,
        "instruction": instruction,
    }
    if previous:
        block["previous_reviewer_feedback"] = previous
    return block


def record_parser_issues(
    history: dict[str, list[str]],
    section: str,
    issues: list[str],
) -> None:
    """Append unique parser issues for a section (carry-on across parser passes)."""
    entries = history.setdefault(section, [])
    for issue in issues:
        text = str(issue).strip()
        if text and text not in entries:
            entries.append(text)


def build_parser_improvement_block(
    section: str,
    prior_draft: Any,
    parser_issues: list[str],
    *,
    issue_history: list[str] | None = None,
    extra_rules: str = "",
) -> dict[str, Any]:
    """Build a parser-fix payload with current issues plus prior unresolved issues."""
    prior = [str(item).strip() for item in (issue_history or []) if str(item).strip()]
    current = [str(item).strip() for item in parser_issues if str(item).strip()]

    instruction = (
        f"Regenerate the {section} section. Fix every parser_issues item "
        "and every previous_parser_issues item that still applies."
    )
    if extra_rules:
        instruction = f"{instruction} {extra_rules}"

    block: dict[str, Any] = {
        "prior_draft": prior_draft,
        "parser_issues": current,
        "instruction": instruction,
    }
    if prior:
        block["previous_parser_issues"] = prior
    return block


def selected_slugs() -> list[str] | None:
    """Read JOBLICATION_SLUGS env var (comma-separated). None means all applications."""
    raw = os.environ.get("JOBLICATION_SLUGS", "").strip()
    if not raw:
        return None
    slugs = [part.strip() for part in raw.split(",") if part.strip()]
    return slugs or None


def iter_applications(
    applications: dict[str, Any],
) -> Iterator[tuple[int, str, str, dict[str, Any]]]:
    """Yield (index, app_key, slug, record) preserving original index for app_key stability."""
    slugs = selected_slugs()
    for index, (slug, application) in enumerate(applications.items(), start=1):
        if not isinstance(application, dict):
            continue
        if slugs is None and application.get("_system"):
            continue
        if slugs is not None and slug not in slugs:
            continue
        yield index, f"application_{index}", slug, application


def stage_block_for(stage_data: dict[str, Any], app_key: str, slug: str = "") -> dict[str, Any]:
    """Return a stage payload for this job, preferring source_slug over slot index."""
    wanted = str(slug or "").strip()
    direct = stage_data.get(app_key)
    if isinstance(direct, dict):
        direct_slug = str(direct.get("source_slug", "")).strip()
        if not wanted or not direct_slug or direct_slug == wanted:
            return direct
    if wanted:
        for key, value in stage_data.items():
            if not str(key).startswith("application_") or not isinstance(value, dict):
                continue
            if str(value.get("source_slug", "")).strip() == wanted:
                return value
    raise ValueError(f"Missing {app_key} in stage payload — run the upstream stage first")


def previous_payload_for_slug(
    existing: dict[str, Any],
    *,
    app_key: str,
    slug: str,
) -> dict[str, Any] | None:
    """Reuse a prior draft only when it belongs to the same job slug."""
    wanted = str(slug or "").strip()
    if not wanted:
        previous = existing.get(app_key)
        return previous if isinstance(previous, dict) else None

    for key, value in existing.items():
        if not str(key).startswith("application_") or not isinstance(value, dict):
            continue
        if str(value.get("source_slug", "")).strip() == wanted:
            return value
    return None


def bind_source_slug(payload: dict[str, Any], slug: str) -> dict[str, Any]:
    if not isinstance(payload, dict):
        return payload
    wanted = str(slug or "").strip()
    if not wanted:
        return payload
    bound = dict(payload)
    bound["source_slug"] = wanted
    return bound


def parse_build_targets(raw: str | None) -> frozenset[str]:
    """Parse cv / letter / both into a set of build targets."""
    if raw is None or not str(raw).strip():
        return frozenset({"cv", "letter"})
    text = str(raw).strip().lower()
    if text in ("both", "all"):
        return frozenset({"cv", "letter"})
    tokens = {part.strip() for part in text.replace(" ", ",").split(",") if part.strip()}
    if "both" in tokens or "all" in tokens:
        return frozenset({"cv", "letter"})
    out: set[str] = set()
    for token in tokens:
        if token in ("cv", "resume"):
            out.add("cv")
        elif token in ("letter", "cover", "cover_letter", "job"):
            out.add("letter")
    if not out:
        return frozenset({"cv", "letter"})
    return frozenset(out)


def build_targets() -> frozenset[str]:
    """Read JOBLICATION_BUILD_TARGETS env var (cv, letter, or both)."""
    return parse_build_targets(os.environ.get("JOBLICATION_BUILD_TARGETS"))
