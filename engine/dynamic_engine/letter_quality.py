"""Deterministic cover-letter quality checks that do not depend on an LLM judge."""

from __future__ import annotations

import re
from typing import Any

from utils import count_words


_SENTENCE_RE = re.compile(r"(?<=[.!?])\s+")
_WORD_RE = re.compile(r"[A-Za-z0-9][A-Za-z0-9+#./'-]*")
_GENERIC_COMPANIES = {"", "company", "the company", "the employer", "employer", "organization"}
_GENERIC_EVIDENCE_WORDS = {
    "about",
    "across",
    "application",
    "applications",
    "client",
    "clients",
    "developed",
    "experience",
    "performed",
    "project",
    "provided",
    "relevant",
    "security",
    "system",
    "systems",
    "technical",
    "testing",
    "their",
    "these",
    "using",
    "with",
}

_DISCLOSURE_PATTERNS: tuple[re.Pattern[str], ...] = (
    re.compile(r"\bi want to be upfront\b", re.I),
    re.compile(r"\bi (?:recognize|acknowledge|understand|am aware) that i (?:do not|don't|lack|have not|haven't|am not)\b", re.I),
    re.compile(r"\bi (?:do not|don't|lack|have not|haven't) (?:yet )?(?:have|hold|possess|meet|bring)\b", re.I),
    re.compile(r"\b(?:does not|do not|don't) meet (?:the )?(?:minimum|required|mandatory|preferred)\b", re.I),
    re.compile(r"\b(?:lack|lacks|lack of|missing) (?:the )?(?:required|mandatory|preferred|direct|documented|specific)\b", re.I),
    re.compile(r"\bno (?:direct|prior|hands-on|professional|production|documented) (?:experience|evidence)\b", re.I),
    re.compile(r"\bnot yet (?:held|earned|used|worked|been responsible|developed|led|managed)\b", re.I),
    re.compile(r"\b(?:an|the) area i am still developing\b", re.I),
    re.compile(r"\bbridge (?:this|the|these) gaps?\b", re.I),
    re.compile(r"\bnor do i possess\b", re.I),
)

_BANNED_PHRASES: tuple[tuple[re.Pattern[str], str], ...] = (
    (re.compile(r"\bi am writing to (?:apply|express)\b", re.I), "dead opener"),
    (re.compile(r"\bi am (?:eager|excited|passionate) to\b", re.I), "generic enthusiasm"),
    (re.compile(r"\b(?:perfect fit|ideal candidate|unique opportunity|hit the ground running)\b", re.I), "generic sales language"),
    (re.compile(r"\bperfectly aligns?\b", re.I), "generic sales language"),
    (re.compile(r"\bhands-on suite\b", re.I), "garbled scope downgrade"),
    (re.compile(r"\bby by\b", re.I), "duplicate word"),
    (re.compile(r"\bthe a\b", re.I), "garbled article"),
    (re.compile(r"\bproject project\b", re.I), "duplicate word"),
    (re.compile(r"\bfrom day one\b", re.I), "generic sales language"),
    (re.compile(r"^\s*dear\s+", re.I), "salutation leaked into prose"),
    (re.compile(r"\b(?:sincerely|best regards|kind regards)\s*,?\s*$", re.I), "sign-off leaked into prose"),
)

_SCOPE_INFLATION_PATTERNS: tuple[re.Pattern[str], ...] = (
    re.compile(r"\bdeep expertise\b", re.I),
    re.compile(r"\bextensive\b", re.I),
    re.compile(r"\bcomprehensive (?:[\w&/-]+ ){0,3}(?:testing|assessments?|reviews?|experience|knowledge)\b", re.I),
    re.compile(r"\badvanced (?:machine learning|analytics|security|capabilities|expertise)\b", re.I),
    re.compile(r"\bscalable (?:solutions|systems|platforms|infrastructure)\b", re.I),
    re.compile(r"\bexperience extends deeply\b", re.I),
    re.compile(r"\bspecialized (?:knowledge|expertise|focus|capability)\b", re.I),
    re.compile(r"\b(?:testing|red-teaming|assessing) (?:LLMs?|RAG (?:pipelines|systems)|AI systems)\b", re.I),
    re.compile(r"\b(?:modern )?AI red[- ]?team(?:ing| testing)?\b", re.I),
    re.compile(r"\bML security\b", re.I),
    re.compile(r"\bpractical expertise\b", re.I),
    re.compile(r"\bnavigate complex models with precision\b", re.I),
    re.compile(r"\btechnical depth\b", re.I),
    re.compile(r"\brobust technical foundation\b", re.I),
    re.compile(r"\brobust security engineering\b", re.I),
    re.compile(r"\b(?:provide|provides|provided|delivered|delivers) high value\b", re.I),
    re.compile(r"\bhigh-stakes (?:client|clients|environment|environments)\b", re.I),
    re.compile(r"\b(?:significantly|substantially|dramatically) (?:reduce|reduced|improve|improved|increase|increased)\b", re.I),
    re.compile(r"\bproven track record\b", re.I),
    re.compile(r"\bseasoned (?:engineer|professional|specialist|leader)\b", re.I),
    re.compile(r"\bsecur(?:ed|ing) (?:critical )?(?:web )?applications\b", re.I),
    re.compile(r"\bsecur(?:ed|ing) (?:the )?(?:cloud |network )?infrastructure\b", re.I),
    re.compile(r"\bsecur(?:e|es|ed|ing) (?:complex )?(?:digital )?infrastructures?\b", re.I),
    re.compile(r"\bsecur(?:e|es|ed|ing) (?:critical |complex )?(?:web )?applications\b", re.I),
    re.compile(r"\b(?:to )?improv(?:e|ed|ing) (?:accuracy|performance|efficiency)\b", re.I),
    re.compile(r"\b(?:to )?ensur(?:e|ed|ing) accurate\b", re.I),
    re.compile(r"\benhanc(?:e|ed|ing) (?:the )?(?:user|customer) experience\b", re.I),
    re.compile(r"\bevery vulnerability\b", re.I),
    re.compile(r"\bensur(?:e|es|ed|ing)(?: that)? every (?:component|system|application|service)\b", re.I),
    re.compile(r"\bensur(?:e|es|ed|ing)(?: that)? every (?:cloud |infrastructure |application )?(?:component|system|service)\b", re.I),
    re.compile(r"\bresilient against (?:evolving )?threats\b", re.I),
    re.compile(r"\bensur(?:e|es|ed|ing)(?: that)? (?:your|the) (?:digital )?infrastructure remains? secure\b", re.I),
    re.compile(r"\bensur(?:e|es|ed|ing) stability\b", re.I),
    re.compile(r"\bensur(?:e|es|ed|ing) (?:an )?optimal security posture\b", re.I),
    re.compile(r"\bensur(?:e|es|ed|ing) secure connectivity\b", re.I),
    re.compile(r"\bensures? I can\b", re.I),
    re.compile(r"\bshared responsibility model\b", re.I),
    re.compile(r"\bmulti-vendor (?:cloud )?environments?\b", re.I),
    re.compile(r"\bmulti-vendor cloud infrastructure\b", re.I),
    re.compile(r"\bstreamline security operations\b", re.I),
)


def _sentences(text: str) -> list[str]:
    return [part.strip() for part in _SENTENCE_RE.split(str(text).strip()) if part.strip()]


def _normalized_phrase(text: str) -> str:
    return " ".join(_WORD_RE.findall(str(text).lower()))


def _contains_phrase(text: str, phrase: str) -> bool:
    needle = _normalized_phrase(phrase)
    if not needle:
        return False
    return needle in _normalized_phrase(text)


def strip_unsupported_scope_sentences(
    content: dict[str, Any],
    body_count: int,
    stage2_entry: dict[str, Any] | None,
) -> bool:
    """Drop wholly unsupported claim sentences while preserving paragraph structure."""
    source_text = " ".join(_anchor_values(stage2_entry or {}))
    body = content.get("body_paragraphs", [])
    body_items = [str(item) for item in body] if isinstance(body, list) else []
    labels: list[tuple[str, str, int]] = [
        ("opening_paragraph", str(content.get("opening_paragraph", "")), 2),
        *[
            (f"body_paragraphs[{index}]", body_items[index] if index < len(body_items) else "", 2)
            for index in range(body_count)
        ],
        ("closing_paragraph", str(content.get("closing_paragraph", "")), 1),
    ]

    changed = False
    for label, text, minimum_sentences in labels:
        sentences = _sentences(text)
        if not sentences:
            continue
        kept: list[str] = []
        removed: list[str] = []
        for sentence in sentences:
            unsupported = False
            for pattern in _SCOPE_INFLATION_PATTERNS:
                match = pattern.search(sentence)
                if match and not _contains_phrase(source_text, match.group(0)):
                    unsupported = True
                    break
            (removed if unsupported else kept).append(sentence)

        if not removed or len(kept) < minimum_sentences:
            continue
        repaired = " ".join(kept)
        if label == "opening_paragraph":
            content[label] = repaired
        elif label == "closing_paragraph":
            content[label] = repaired
        else:
            match = re.search(r"\[(\d+)\]", label)
            if match:
                index = int(match.group(1))
                while len(body_items) <= index:
                    body_items.append("")
                body_items[index] = repaired
        changed = True

    if isinstance(body, list):
        content["body_paragraphs"] = body_items[:body_count]
    return changed


def ensure_employer_reference_outside_opening(
    content: dict[str, Any], body_count: int
) -> bool:
    """Make a generic close employer-specific without adding candidate claims."""
    company = str(content.get("company_name", "")).strip()
    if company.casefold() in _GENERIC_COMPANIES:
        return False
    body = content.get("body_paragraphs", [])
    body_items = [str(item) for item in body[:body_count]] if isinstance(body, list) else []
    closing = str(content.get("closing_paragraph", "")).strip()
    outside = " ".join([*body_items, closing])
    if _contains_phrase(outside, company) or not closing:
        return False

    sentences = _sentences(closing)
    if not sentences:
        return False
    first = sentences[0]
    replacements = (
        (re.compile(r"\byour team\b", re.I), f"the {company} team"),
        (re.compile(r"\byour (security|engineering|business) goals\b", re.I), rf"{company}'s \1 goals"),
        (re.compile(r"\bthis role\b", re.I), f"the role at {company}"),
    )
    revised = first
    for pattern, replacement in replacements:
        revised, count = pattern.subn(replacement, revised, count=1)
        if count:
            break
    else:
        revised = first.rstrip(".!?") + f" at {company}."
    content["closing_paragraph"] = " ".join([revised, *sentences[1:]])
    return True


def enrich_thin_bodies_from_cv(
    content: dict[str, Any],
    body_count: int,
    stage2_entry: dict[str, Any] | None,
    *,
    min_words: int = 45,
    max_words: int = 110,
) -> bool:
    """Extend a thin paragraph with the most relevant unused, CV-backed project fact."""
    from utils import count_words

    body = content.get("body_paragraphs", [])
    if not isinstance(body, list):
        return False
    body_items = [str(item).strip() for item in body[:body_count]]
    while len(body_items) < body_count:
        body_items.append("")
    full_letter = " ".join(
        [str(content.get("opening_paragraph", "")), *body_items, str(content.get("closing_paragraph", ""))]
    ).casefold()

    project_candidates: list[tuple[str, str]] = []
    projects = (stage2_entry or {}).get("projects", {})
    if isinstance(projects, dict):
        for entry in projects.values():
            if not isinstance(entry, dict):
                continue
            title = str(entry.get("title", "")).strip()
            description = str(entry.get("description", "")).strip()
            for sentence in _sentences(description):
                if 8 <= count_words(sentence) <= 34:
                    project_candidates.append((title, sentence))

    changed = False
    for index, paragraph in enumerate(body_items):
        if count_words(paragraph) >= min_words or not paragraph:
            continue
        paragraph_tokens = {
            word.casefold()
            for word in _WORD_RE.findall(paragraph)
            if (len(word) >= 4 or word.isupper()) and word.casefold() not in _GENERIC_EVIDENCE_WORDS
        }
        ranked: list[tuple[int, str, str]] = []
        for title, sentence in project_candidates:
            sentence_key = _normalized_phrase(sentence)
            if sentence_key and sentence_key in _normalized_phrase(full_letter):
                continue
            tokens = {
                word.casefold()
                for word in _WORD_RE.findall(f"{title} {sentence}")
                if len(word) >= 4 or word.isupper()
            }
            ranked.append((len(paragraph_tokens & tokens), title, sentence))
        ranked.sort(key=lambda item: item[0], reverse=True)

        for _, title, sentence in ranked:
            verb_match = re.match(
                r"^(Designed|Developed|Built|Applied|Established|Implemented|Configured|Used|Utilized|Created|Deployed)\b(.*)",
                sentence,
                re.I,
            )
            if not verb_match:
                continue
            if "aws" in f"{title} {sentence}".casefold():
                prefix = "In an AWS network project, I"
            else:
                if 0 < len(title.split()) <= 6:
                    prefix = f"In the {title} project, I"
                else:
                    prefix = "In a related technical project, I"
            evidence = f"{prefix} {verb_match.group(1).lower()}{verb_match.group(2)}"
            evidence = evidence.rstrip(".!?") + "."
            proposed = f"{paragraph} {evidence}".strip()
            if count_words(proposed) > max_words:
                continue
            body_items[index] = proposed
            full_letter += " " + evidence.casefold()
            changed = True
            break

    if changed:
        content["body_paragraphs"] = body_items[:body_count]
    return changed


def _anchor_values(value: Any) -> list[str]:
    if isinstance(value, str):
        return [value]
    if isinstance(value, dict):
        values: list[str] = []
        for item in value.values():
            values.extend(_anchor_values(item))
        return values
    if isinstance(value, list):
        values = []
        for item in value:
            values.extend(_anchor_values(item))
        return values
    return []


def evidence_anchors(stage2_entry: dict[str, Any]) -> list[str]:
    """Collect concrete CV nouns suitable for checking that prose contains real evidence."""
    anchors: list[str] = []
    seen: set[str] = set()

    def add_anchor(text: str) -> None:
        key = _normalized_phrase(text)
        if len(key) < 3 or key in seen:
            return
        seen.add(key)
        anchors.append(text)

    for section in ("work_experience", "projects", "skills", "certifications", "achievements"):
        for raw in _anchor_values(stage2_entry.get(section, {})):
            text = str(raw).strip()
            words = _WORD_RE.findall(text)
            if not text:
                continue
            if len(text) > 100:
                # Preserve grounded phrases from CV bullets/descriptions so a natural
                # paraphrase need not repeat an exact project title to count as evidence.
                for size in (2, 3):
                    for index in range(0, len(words) - size + 1):
                        phrase_words = words[index : index + size]
                        meaningful = [
                            word
                            for word in phrase_words
                            if len(word) >= 4 and word.lower() not in _GENERIC_EVIDENCE_WORDS
                        ]
                        if meaningful:
                            add_anchor(" ".join(phrase_words))
                continue
            # Single words are useful only when they look like a tool, acronym, or product name.
            if len(words) == 1 and not (
                any(ch.isupper() for ch in text[1:])
                or any(ch.isdigit() for ch in text)
                or text.isupper()
                or text in {"Python", "Java", "AWS", "Azure", "Linux", "React", "FastAPI"}
            ):
                continue
            add_anchor(text)
    return anchors


def _has_evidence_anchor(text: str, anchors: list[str]) -> bool:
    normalized = _normalized_phrase(text)
    for anchor in anchors:
        key = _normalized_phrase(anchor)
        if key and key in normalized:
            return True
    return False


def _consecutive_i_starts(paragraphs: list[str]) -> bool:
    run = 0
    for paragraph in paragraphs:
        for sentence in _sentences(paragraph):
            if re.match(r"^I\b", sentence):
                run += 1
                if run >= 4:
                    return True
            else:
                run = 0
    return False


def _work_title_issues(content: dict[str, Any], stage2_entry: dict[str, Any]) -> list[str]:
    """Catch target-title promotion at a real employer (a common small-model hallucination)."""
    target_role = str(content.get("role_title", "")).strip()
    if not target_role:
        return []
    target_key = _normalized_phrase(target_role)
    work = stage2_entry.get("work_experience", {})
    if not isinstance(work, dict):
        return []

    actual: list[tuple[str, str]] = []
    for entry in work.values():
        if not isinstance(entry, dict):
            continue
        title = str(entry.get("title", "")).strip()
        company = str(entry.get("company", "")).strip()
        if title and company:
            actual.append((title, company))
    if any(_normalized_phrase(title) == target_key for title, _ in actual):
        return []

    prose = " ".join(
        [
            str(content.get("opening_paragraph", "")),
            *[str(item) for item in content.get("body_paragraphs", [])],
            str(content.get("closing_paragraph", "")),
        ]
    )
    for actual_title, company in actual:
        employer_token = _WORD_RE.findall(company)
        if not employer_token:
            continue
        pattern = re.compile(
            rf"\bas\s+(?:a|an)\s+{re.escape(target_role)}\s+at\s+{re.escape(employer_token[0])}\b",
            re.I,
        )
        if pattern.search(prose):
            return [
                f'target-title promotion is not CV-backed: "{target_role} at {employer_token[0]}"; '
                f'actual title is "{actual_title}"'
            ]
    return []


def assess_letter_quality(
    content: dict[str, Any],
    body_count: int,
    stage2_entry: dict[str, Any] | None = None,
    *,
    max_body_words: int = 110,
) -> list[str]:
    """Return actionable hard-gate issues for a generated cover letter."""
    issues: list[str] = []
    opening = str(content.get("opening_paragraph", "")).strip()
    closing = str(content.get("closing_paragraph", "")).strip()
    raw_body = content.get("body_paragraphs", [])
    body = [str(item).strip() for item in raw_body] if isinstance(raw_body, list) else []

    if len(body) != body_count:
        issues.append(f"letter must contain exactly {body_count} body paragraphs (found {len(body)})")

    paragraphs = [opening, *body[:body_count], closing]
    prose = " ".join(part for part in paragraphs if part)
    total_words = count_words(prose)
    if total_words < 175:
        issues.append(f"letter is too thin ({total_words} words; minimum 175)")
    if total_words > 480:
        issues.append(f"letter is too long ({total_words} words; maximum 480)")

    opening_sentences = len(_sentences(opening))
    if opening and not 2 <= opening_sentences <= 4:
        issues.append(f"opening must contain 2-4 sentences (found {opening_sentences})")
    closing_sentences = len(_sentences(closing))
    if closing and not 1 <= closing_sentences <= 3:
        issues.append(f"closing must contain 1-3 sentences (found {closing_sentences})")

    for index, paragraph in enumerate(body[:body_count], start=1):
        words = count_words(paragraph)
        sentences = len(_sentences(paragraph))
        if words < 45:
            issues.append(f"body paragraph {index} is too thin ({words} words; minimum 45)")
        if words > max_body_words:
            issues.append(
                f"body paragraph {index} exceeds {max_body_words} words ({words} words)"
            )
        if not 2 <= sentences <= 5:
            issues.append(f"body paragraph {index} must contain 2-5 sentences (found {sentences})")

    for pattern in _DISCLOSURE_PATTERNS:
        match = pattern.search(prose)
        if match:
            issues.append(f'missing-qualification disclosure is forbidden: "{match.group(0)}"')

    for pattern, label in _BANNED_PHRASES:
        match = pattern.search(prose)
        if match:
            issues.append(f'{label}: "{match.group(0)}"')

    source_text = " ".join(_anchor_values(stage2_entry or {}))
    for pattern in _SCOPE_INFLATION_PATTERNS:
        match = pattern.search(prose)
        if match and not _contains_phrase(source_text, match.group(0)):
            issues.append(
                f'unsupported scope or seniority inflation: "{match.group(0)}"'
            )

    issues.extend(_work_title_issues(content, stage2_entry or {}))

    company = str(content.get("company_name", "")).strip()
    role = str(content.get("role_title", "")).strip()
    if company.lower() not in _GENERIC_COMPANIES:
        if not _contains_phrase(opening, company):
            issues.append(f'opening must name the employer "{company}"')
        if sum(_contains_phrase(part, company) for part in paragraphs) < 2:
            issues.append("employer must be tied to evidence or value outside the opening")
    if role and not _contains_phrase(opening, role):
        issues.append(f'opening must name the target role "{role}"')

    anchors = evidence_anchors(stage2_entry or {})
    if anchors:
        if opening and not _has_evidence_anchor(opening, anchors):
            issues.append("opening needs a named CV-backed project, employer, certification, or tool")
        for index, paragraph in enumerate(body[:body_count], start=1):
            if paragraph and not _has_evidence_anchor(paragraph, anchors):
                issues.append(f"body paragraph {index} needs a concrete CV-backed evidence anchor")

    if _consecutive_i_starts(paragraphs):
        issues.append('sentence rhythm is repetitive: four or more consecutive sentences start with "I"')

    # Exact whole-sentence repetition catches model loops that opener-only checks miss.
    seen_sentences: set[str] = set()
    for sentence in _sentences(prose):
        normalized = _normalized_phrase(sentence)
        if len(normalized) < 30:
            continue
        if normalized in seen_sentences:
            issues.append(f'repeated sentence: "{sentence[:100]}"')
        seen_sentences.add(normalized)

    return list(dict.fromkeys(issues))


def letter_word_count(content: dict[str, Any]) -> int:
    """Public helper used by stability reports."""
    body = content.get("body_paragraphs", [])
    body_parts = [str(item) for item in body] if isinstance(body, list) else []
    prose = " ".join(
        [
            str(content.get("opening_paragraph", "")),
            *body_parts,
            str(content.get("closing_paragraph", "")),
        ]
    )
    return count_words(prose)
