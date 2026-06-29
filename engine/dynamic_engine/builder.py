"""
Dynamic resume keyword builder — optimized for local Ollama LLMs.

Loop 1  : Process each job application one at a time.
Loop 2  : Batch-parse the job description, then extract section keywords.
Loop 2.x: Skills, Work Experience, Professional Summary, Education, Projects.

Configuration: engine/dynamic_engine/config.yaml
Requires: pip install pyyaml

Run from project root:
    python engine/dynamic_engine/builder.py
"""

from __future__ import annotations

import json
import re
import sys
import urllib.error
import urllib.request
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any

ENGINE_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = ENGINE_DIR.parent.parent
CONFIG_PATH = ENGINE_DIR / "config.yaml"

SYSTEM_PROMPT = (
    "You are an expert hiring manager helping tailor a resume to a job posting. "
    "You extract only keywords and short phrases that belong on a resume. "
    "Reply with valid JSON only. No markdown. No explanation."
)

LOOP1_SYSTEM = (
    "You are an expert hiring manager reviewing job fit honestly. "
    "Never invent or assume candidate experience that is not in the CV. "
    "Flag eligibility blockers and mismatches explicitly. "
    "Reply with valid JSON only. No markdown. No explanation."
)

# Parent skill (lowercase) -> related terms inferable from that CV skill.
CV_SYNONYM_GROUPS: dict[str, list[str]] = {
    "networking": ["tcp/ip", "tcp", "dns", "http/s", "https", "firewall", "firewalls", "routing"],
    "security": ["cybersecurity", "soc", "threat", "vulnerability", "defensive", "incident"],
    "linux": ["unix", "bash", "shell"],
    "windows": ["active directory", "ad"],
    "aws": ["amazon web services", "ec2", "s3", "iam", "cloud"],
    "azure": ["microsoft azure", "cloud"],
    "gcp": ["google cloud", "cloud"],
    "docker": ["containers", "containerization"],
    "kubernetes": ["k8s", "orchestration", "containers"],
    "programming": ["python", "java", "c++", "scripting", "automation"],
    "database": ["sql", "data"],
}

TOKEN_STOPWORDS = frozenset(
    {"a", "an", "and", "for", "in", "of", "or", "the", "to", "with"}
)

# Role-specific terms that must appear literally in the CV, not via synonym alone.
LITERAL_ONLY_TERMS = frozenset(
    {
        "att&ck",
        "attck",
        "mitre",
        "qradar",
        "sentinel",
        "siem",
        "soc",
        "splunk",
    }
)


# ---------------------------------------------------------------------------
# Static description parser (Loop 2 batching)
# ---------------------------------------------------------------------------

SECTION_SPLIT_RE = re.compile(
    r"(?<=\.)\s+(?=(?:What We Are Looking For|Requirements?|Responsibilities|"
    r"Qualifications|Job Qualifications|Key responsibilities|About the job|"
    r"What We Offer|Benefits|Skills|Experience|Education|Who you are|"
    r"Your profile|Must have|Nice to have)\b)",
    re.IGNORECASE,
)

SENTENCE_SPLIT_RE = re.compile(r"(?<=[.!?])\s+")


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


# ---------------------------------------------------------------------------
# Data models
# ---------------------------------------------------------------------------

@dataclass
class JobBatch:
    index: int
    total: int
    text: str


@dataclass
class KeywordBucket:
    matched: list[str] = field(default_factory=list)
    aspirational: list[str] = field(default_factory=list)


@dataclass
class SectionKeywords:
    skills: KeywordBucket = field(default_factory=KeywordBucket)
    experience: KeywordBucket = field(default_factory=KeywordBucket)
    summary: KeywordBucket = field(default_factory=KeywordBucket)
    education: KeywordBucket = field(default_factory=KeywordBucket)
    projects: KeywordBucket = field(default_factory=KeywordBucket)


@dataclass
class ApplicationResult:
    slug: str
    title: str
    company_slug: str
    loop1_review: dict[str, Any]
    loop2: SectionKeywords
    batches_processed: int


# ---------------------------------------------------------------------------
# Config / IO
# ---------------------------------------------------------------------------

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


def load_json(path: Path) -> dict:
    content = path.read_text(encoding="utf-8").strip()
    if not content:
        return {}
    return json.loads(content)


def cv_slice(profile: dict, section: str) -> dict:
    """Return only CV fields relevant to a Loop 2.x section."""
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


# ---------------------------------------------------------------------------
# Ollama
# ---------------------------------------------------------------------------

def call_ollama(config: dict, messages: list[dict[str, str]]) -> str:
    ollama = config.get("ollama", {})
    generation = config.get("generation", {})

    base_url = ollama.get("base_url", "http://127.0.0.1:11434").rstrip("/")
    model = ollama.get("model", "")
    if not model:
        raise ValueError("config.yaml: ollama.model is required.")

    body = json.dumps(
        {
            "model": model,
            "messages": messages,
            "stream": False,
            "options": {
                "temperature": generation.get("temperature", 0.3),
                "num_ctx": generation.get("context_window", 16384),
            },
        }
    ).encode("utf-8")

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


def build_cv_vocabulary(profile: dict) -> set[str]:
    """Lowercase tokens collected from the entire profile."""
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
    """Full lowercase CV text for exact phrase matching."""
    return json.dumps(profile, ensure_ascii=False).lower()


def _keyword_tokens(keyword: str) -> list[str]:
    """Significant tokens; slash-compounds like tcp/ip stay as one unit."""
    tokens: list[str] = []
    for part in re.split(r"[\s,()]+", keyword.lower().strip()):
        if not part or part in TOKEN_STOPWORDS:
            continue
        if len(part) == 1 and part != "s":
            continue
        tokens.append(part)
    return tokens


def _literal_in_cv(term: str, cv_text: str) -> bool:
    return bool(re.search(rf"\b{re.escape(term)}\b", cv_text, re.IGNORECASE))


def _single_token_grounded(token: str, vocabulary: set[str], cv_text: str = "") -> bool:
    if token in vocabulary:
        return True

    if token in LITERAL_ONLY_TERMS:
        return bool(cv_text and _literal_in_cv(token, cv_text))

    for skill, related in CV_SYNONYM_GROUPS.items():
        if skill not in vocabulary:
            continue
        for term in related:
            term_l = term.lower()
            if token == term_l:
                return True
            if "/" in term_l:
                for piece in term_l.split("/"):
                    piece = piece.strip()
                    if token == piece:
                        return True
    return False


def _full_phrase_synonym_match(keyword: str, vocabulary: set[str]) -> bool:
    if keyword in LITERAL_ONLY_TERMS:
        return False
    for skill, related in CV_SYNONYM_GROUPS.items():
        if skill not in vocabulary:
            continue
        for term in related:
            if keyword == term.lower():
                return True
    return False


def is_keyword_grounded(keyword: str, vocabulary: set[str], cv_text: str = "") -> bool:
    """True if keyword is supported by CV text or allowed synonym expansion."""
    kw = re.sub(r"\s+", " ", keyword.lower().strip())
    if not kw:
        return False

    if cv_text:
        if " " in kw:
            if kw in cv_text:
                return True
        elif _literal_in_cv(kw, cv_text):
            return True

    if _full_phrase_synonym_match(kw, vocabulary):
        return True

    tokens = _keyword_tokens(kw)
    if not tokens:
        return False

    if len(tokens) == 1:
        return _single_token_grounded(tokens[0], vocabulary, cv_text)

    # Multi-word phrases require every significant token to be grounded.
    return all(_single_token_grounded(token, vocabulary, cv_text) for token in tokens)


def post_filter_bucket(
    bucket: KeywordBucket, vocabulary: set[str], cv_text: str = ""
) -> KeywordBucket:
    """Move ungrounded items from matched into aspirational."""
    matched: list[str] = []
    aspirational = list(bucket.aspirational)

    for keyword in bucket.matched:
        if is_keyword_grounded(keyword, vocabulary, cv_text):
            matched.append(keyword)
        else:
            aspirational.append(keyword)

    return KeywordBucket(
        matched=merge_keywords([], matched),
        aspirational=merge_keywords([], aspirational),
    )


def parse_keyword_buckets(raw: str) -> KeywordBucket:
    text = raw.strip()
    text = re.sub(r"^```(?:json)?\s*", "", text)
    text = re.sub(r"\s*```$", "", text)

    try:
        parsed = json.loads(text)
    except json.JSONDecodeError:
        match = re.search(r"\{[\s\S]*\}", text)
        if not match:
            match = re.search(r"\[[\s\S]*?\]", text)
        if not match:
            return KeywordBucket()
        parsed = json.loads(match.group())

    if isinstance(parsed, dict):
        matched = parsed.get("matched", [])
        aspirational = parsed.get("aspirational", [])
        if isinstance(matched, list) or isinstance(aspirational, list):
            return KeywordBucket(
                matched=_coerce_str_list(matched if isinstance(matched, list) else []),
                aspirational=_coerce_str_list(
                    aspirational if isinstance(aspirational, list) else []
                ),
            )
        # Legacy flat dict fallback.
        return KeywordBucket(matched=_coerce_str_list(list(parsed.values())))

    if isinstance(parsed, list):
        return KeywordBucket(matched=_coerce_str_list(parsed))

    return KeywordBucket()


def _coerce_str_list(items: list[Any]) -> list[str]:
    return [str(item).strip() for item in items if str(item).strip()]


def parse_keyword_json(raw: str) -> list[str]:
    bucket = parse_keyword_buckets(raw)
    return merge_keywords(bucket.matched, bucket.aspirational)


def merge_keywords(existing: list[str], new: list[str]) -> list[str]:
    seen: set[str] = set()
    merged: list[str] = []
    for word in existing + new:
        key = word.lower()
        if key and key not in seen:
            seen.add(key)
            merged.append(word)
    return merged


def merge_buckets(existing: KeywordBucket, new: KeywordBucket) -> KeywordBucket:
    return KeywordBucket(
        matched=merge_keywords(existing.matched, new.matched),
        aspirational=merge_keywords(existing.aspirational, new.aspirational),
    )


def bucket_to_dict(bucket: KeywordBucket) -> dict[str, list[str]]:
    return {"matched": bucket.matched, "aspirational": bucket.aspirational}


# ---------------------------------------------------------------------------
# Loop 1 — one application at a time
# ---------------------------------------------------------------------------

def loop1_review_application(
    config: dict,
    slug: str,
    application: dict,
    profile: dict,
) -> dict[str, Any]:
    """Review a single job posting against the user CV."""
    prompt = {
        "task": "Review this job posting against the candidate CV honestly.",
        "rules": [
            "Do not invent experience, certifications, or activities not present in the CV.",
            "List explicit eligibility requirements from the job (citizenship, years, degree, etc.).",
            "List mismatches where the job asks for something the CV does not support.",
            "fit_score must be an integer from 1 (poor fit) to 10 (excellent fit).",
            "Be conservative on fit_score for graduate or entry roles if CV shows senior titles.",
        ],
        "output_format": {
            "company": "company name inferred from posting",
            "role": "job title",
            "location": "location if present",
            "seniority": "junior|mid|senior|lead|unknown",
            "primary_domain": "short domain label e.g. cybersecurity, cloud",
            "fit_score": "integer 1-10",
            "fit_summary": "2 sentences max, honest assessment",
            "hard_requirements": ["explicit must-have requirements from the job"],
            "strengths": ["CV-backed strengths for this role"],
            "gaps": ["job requirements not evidenced in the CV"],
            "mismatches": ["seniority, domain, or eligibility conflicts"],
        },
        "job_posting": application,
        "candidate_cv": {
            "contact": profile.get("contact", {}),
            "titles": profile.get("titles", {}),
            "skills": profile.get("skills", {}),
            "experience": profile.get("experience", {}),
            "education": profile.get("education", {}),
            "certifications": profile.get("certifications", {}),
            "projects": profile.get("projects", {}),
        },
    }

    messages = [
        {"role": "system", "content": LOOP1_SYSTEM},
        {
            "role": "user",
            "content": (
                "Loop 1 — Job review.\n"
                f"Application slug: {slug}\n\n"
                f"{json.dumps(prompt, indent=2, ensure_ascii=False)}\n\n"
                "Return one JSON object only."
            ),
        },
    ]

    raw = call_ollama(config, messages)
    try:
        cleaned = re.sub(r"^```(?:json)?\s*|\s*```$", "", raw.strip())
        return json.loads(cleaned)
    except json.JSONDecodeError:
        return {"fit_summary": raw.strip(), "role": application.get("title", "")}


# ---------------------------------------------------------------------------
# Loop 2.x — batched keyword extraction
# ---------------------------------------------------------------------------

LOOP2_SPECS: dict[str, dict[str, str]] = {
    "2.1": {
        "section": "skills",
        "resume_section": "Skills",
        "instruction": (
            "Extract keywords and short skill phrases from the job description batch "
            "for the resume Skills section. "
            "Put CV-backed or synonym-inferable items in matched. "
            "Put job requirements not evidenced in the CV in aspirational."
        ),
    },
    "2.2": {
        "section": "experience",
        "resume_section": "Work Experience",
        "instruction": (
            "Extract phrases for the Work Experience section. "
            "matched = themes the candidate can honestly reflect from CV experience. "
            "aspirational = job asks for it but CV does not show it yet."
        ),
    },
    "2.3": {
        "section": "summary",
        "resume_section": "Professional Summary",
        "instruction": (
            "Extract phrases for the Professional Summary. "
            "matched = role identity and value phrases grounded in the CV. "
            "aspirational = desirable framing from the job not yet in the CV."
        ),
    },
    "2.4": {
        "section": "education",
        "resume_section": "Education",
        "instruction": (
            "Extract education-related phrases. "
            "matched = degrees, fields, or certs the candidate has or nearly has. "
            "aspirational = requirements the candidate does not meet."
        ),
    },
    "2.5": {
        "section": "projects",
        "resume_section": "Projects",
        "instruction": (
            "Extract project-related phrases. "
            "matched = project themes supported by CV projects, achievements, or skills. "
            "aspirational = job themes with no CV evidence."
        ),
    },
}


def loop2_extract_keywords(
    config: dict,
    loop_id: str,
    batch: JobBatch,
    application: dict,
    profile: dict,
    loop1_review: dict[str, Any],
    vocabulary: set[str],
    cv_text: str = "",
) -> KeywordBucket:
    spec = LOOP2_SPECS[loop_id]
    max_keywords = config.get("loops", {}).get("max_keywords_per_batch", 8)
    cv = cv_slice(profile, spec["section"])

    prompt = {
        "loop": loop_id,
        "resume_section": spec["resume_section"],
        "instruction": spec["instruction"],
        "rules": [
            f"Return at most {max_keywords} items per array (matched and aspirational).",
            'Return JSON object only: {"matched": ["..."], "aspirational": ["..."]}',
            "matched = only CV-backed or reasonably inferable from candidate_cv.",
            "aspirational = job asks for it but candidate_cv does not support it.",
            "No duplicates. Keep items short (1-4 words each).",
            "Extract from the job batch, not from generic filler text.",
            "Never put CTF, hackathons, SOC, etc. in matched unless evidenced in the CV.",
        ],
        "batch": {"index": batch.index, "total": batch.total, "text": batch.text},
        "job_context": {
            "title": application.get("title", ""),
            "location": application.get("location", ""),
            "about": application.get("about", ""),
            "loop1_review": loop1_review,
        },
        "candidate_cv": cv,
    }

    messages = [
        {"role": "system", "content": SYSTEM_PROMPT},
        {
            "role": "user",
            "content": (
                f"Loop {loop_id} — {spec['resume_section']} keywords.\n"
                f"Batch {batch.index} of {batch.total}.\n\n"
                f"{json.dumps(prompt, indent=2, ensure_ascii=False)}\n\n"
                'Return {"matched": [...], "aspirational": [...]} only.'
            ),
        },
    ]

    raw = call_ollama(config, messages)
    bucket = parse_keyword_buckets(raw)
    return post_filter_bucket(bucket, vocabulary, cv_text)


def loop2_process_application(
    config: dict,
    application: dict,
    profile: dict,
    loop1_review: dict[str, Any],
    parser: DescriptionParser,
) -> tuple[SectionKeywords, int]:
    """Run all Loop 2.x interloops across description batches."""
    description = application.get("description", "")
    about = application.get("about", "")
    full_text = f"{about}\n\n{description}".strip() if about else description

    raw_batches = parser.parse(full_text)
    if not raw_batches:
        return SectionKeywords(), 0

    batches = [
        JobBatch(index=i + 1, total=len(raw_batches), text=text)
        for i, text in enumerate(raw_batches)
    ]

    keywords = SectionKeywords()
    vocabulary = build_cv_vocabulary(profile)
    cv_text = build_cv_text(profile)

    for batch in batches:
        keywords.skills = merge_buckets(
            keywords.skills,
            loop2_extract_keywords(
                config,
                "2.1",
                batch,
                application,
                profile,
                loop1_review,
                vocabulary,
                cv_text,
            ),
        )
        keywords.experience = merge_buckets(
            keywords.experience,
            loop2_extract_keywords(
                config,
                "2.2",
                batch,
                application,
                profile,
                loop1_review,
                vocabulary,
                cv_text,
            ),
        )
        keywords.summary = merge_buckets(
            keywords.summary,
            loop2_extract_keywords(
                config,
                "2.3",
                batch,
                application,
                profile,
                loop1_review,
                vocabulary,
                cv_text,
            ),
        )
        keywords.education = merge_buckets(
            keywords.education,
            loop2_extract_keywords(
                config,
                "2.4",
                batch,
                application,
                profile,
                loop1_review,
                vocabulary,
                cv_text,
            ),
        )
        keywords.projects = merge_buckets(
            keywords.projects,
            loop2_extract_keywords(
                config,
                "2.5",
                batch,
                application,
                profile,
                loop1_review,
                vocabulary,
                cv_text,
            ),
        )

    return keywords, len(batches)


# ---------------------------------------------------------------------------
# Pipeline
# ---------------------------------------------------------------------------

def process_application(
    config: dict,
    slug: str,
    application: dict,
    profile: dict,
    parser: DescriptionParser,
) -> ApplicationResult:
    loop1_review = loop1_review_application(config, slug, application, profile)
    loop2_keywords, batch_count = loop2_process_application(
        config, application, profile, loop1_review, parser
    )

    return ApplicationResult(
        slug=slug,
        title=application.get("title", ""),
        company_slug=slug,
        loop1_review=loop1_review,
        loop2=loop2_keywords,
        batches_processed=batch_count,
    )


def run(config_path: Path = CONFIG_PATH) -> dict[str, Any]:
    config = load_config(config_path)

    apps_path = resolve_path(config, "applications", "json", "applications/local_applications.json")
    profile_path = resolve_path(config, "profile", "json", "settings/profile.json")

    applications = load_json(apps_path)
    profile = load_json(profile_path)

    if not applications:
        raise ValueError(f"No applications found in {apps_path}")
    if not profile:
        raise ValueError(f"No profile found in {profile_path}")

    max_chars = config.get("batching", {}).get("max_chars", 1200)
    parser = DescriptionParser(max_chars=max_chars)

    results: dict[str, Any] = {}

    for slug, application in applications.items():
        result = process_application(config, slug, application, profile, parser)
        results[slug] = {
            "title": result.title,
            "loop1_review": result.loop1_review,
            "loop2": {
                "skills": bucket_to_dict(result.loop2.skills),
                "experience": bucket_to_dict(result.loop2.experience),
                "summary": bucket_to_dict(result.loop2.summary),
                "education": bucket_to_dict(result.loop2.education),
                "projects": bucket_to_dict(result.loop2.projects),
            },
            "batches_processed": result.batches_processed,
        }

    return results


def main() -> None:
    if str(PROJECT_ROOT) not in sys.path:
        sys.path.insert(0, str(PROJECT_ROOT))

    try:
        results = run()
    except (FileNotFoundError, ValueError, RuntimeError, ImportError) as exc:
        print(f"Error: {exc}", file=sys.stderr)
        raise SystemExit(1) from exc

    print(json.dumps(results, indent=2, ensure_ascii=False))


if __name__ == "__main__":
    main()
