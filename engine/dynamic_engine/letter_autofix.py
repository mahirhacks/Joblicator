"""Deterministic cover-letter repairs — no LLM required."""

from __future__ import annotations

import re
from typing import Any

from grounding import strip_letter_claim_violations
from style_validator import collect_letter_style_segments, scan_letter_style

_THREE_WORD_OPENER = re.compile(r"\w+(?:'\w+)?")

_LABEL_LINE = re.compile(
    r"^(?:OPENING|CLOSING|BODY(?:_\d+)?)\s*:?\s*",
    re.IGNORECASE,
)
_INLINE_BODY_LABEL = re.compile(r"\bBODY_\d+\s*:?\s*", re.IGNORECASE)

_OPENER_PREFIXES = (
    "Through a separate project, I",
    "In another context, I",
    "More recently, I",
    "During my academic work, I",
    "Alongside my coursework, I",
    "In hands-on practice, I",
    "From complementary experience, I",
    "Building on related work, I",
)

_OPENER_PREFIX_LOWER = tuple(p.lower() for p in _OPENER_PREFIXES)

_GAP_DISCLOSURE_OPENER = "i want to be upfront"

_DEFAULT_MAX_BODY_WORDS = 120

_SALUTATION_RE = re.compile(r"^\s*dear\s+[^,.:;\n]{1,60}[,.:;]\s*", re.IGNORECASE)

# Conjugation-safe rewrites for dead recruiter-repellent openers.
_BANNED_PHRASE_REWRITES: tuple[tuple[re.Pattern[str], str], ...] = (
    (
        re.compile(
            r"\bI am writing to (?:express my (?:strong |keen )?interest in|apply for)\b",
            re.IGNORECASE,
        ),
        "I am applying for",
    ),
    (re.compile(r"\bI am writing to\b", re.IGNORECASE), "I am reaching out to"),
    (re.compile(r"\bI am eager to\b", re.IGNORECASE), "I am prepared to"),
    (re.compile(r"\bI am excited to\b", re.IGNORECASE), "I would be glad to"),
    (re.compile(r"\bI am passionate about\b", re.IGNORECASE), "I care deeply about"),
    (re.compile(r"\bperfectly aligns?\b", re.IGNORECASE), "aligns"),
    (re.compile(r"\bfrom day one\b", re.IGNORECASE), ""),
    (re.compile(r"\bby by\b", re.IGNORECASE), "by"),
    (
        re.compile(r"\s*In the a related technical project project,[^.]*\.", re.IGNORECASE),
        "",
    ),
    (re.compile(r"\bIn the a related technical project project\b", re.IGNORECASE), "In a related technical project"),
    (re.compile(r"\bdeep expertise\b", re.IGNORECASE), "hands-on experience"),
    (re.compile(r"\bexpertise\b", re.IGNORECASE), "experience"),
    (re.compile(r"\btechnical depth\b", re.IGNORECASE), "technical grounding"),
    (re.compile(r"\brobust technical foundation\b", re.IGNORECASE), "technical foundation"),
    (re.compile(r"\brobust security engineering\b", re.IGNORECASE), "security engineering"),
    (
        re.compile(r"\bextensive (?=(?:experience|work|background|expertise|testing|assessments?|reviews?)\b)", re.IGNORECASE),
        "hands-on ",
    ),
    (re.compile(r"\bextensive\b", re.IGNORECASE), "broad"),
    (re.compile(r"\bhands-on suite\b", re.IGNORECASE), "suite"),
    (
        re.compile(
            r"\bcomprehensive (?=(?:[\w&/-]+ ){0,3}(?:testing|assessments?|reviews?|experience|knowledge)\b)",
            re.IGNORECASE,
        ),
        "hands-on ",
    ),
    (
        re.compile(r"\badvanced (?=(?:machine learning|analytics|security|capabilities|expertise)\b)", re.IGNORECASE),
        "technical ",
    ),
    (re.compile(r"\bscalable solutions\b", re.IGNORECASE), "solutions"),
    (re.compile(r"\bexperience extends deeply\b", re.IGNORECASE), "experience also extends"),
    (re.compile(r"\bspecialized knowledge\b", re.IGNORECASE), "project experience"),
    (
        re.compile(r"\b(?:provide|provides|provided|delivered|delivers) high value\b", re.IGNORECASE),
        "support practical needs",
    ),
    (re.compile(r"\bhigh-stakes\s+", re.IGNORECASE), ""),
    (
        re.compile(r"\bsecur(?:ed|ing) (?:the )?(?:cloud |network )?infrastructure\b", re.IGNORECASE),
        "reviewing infrastructure security",
    ),
    (
        re.compile(r"\bto secure (?:complex )?(?:digital )?infrastructures?\b", re.IGNORECASE),
        "to review application and infrastructure security",
    ),
    (
        re.compile(r"\bsecur(?:ed|ing) (?:critical |complex )?(web applications|APIs)\b", re.IGNORECASE),
        r"testing \1",
    ),
    (re.compile(r"\bsignificantly reduce\b", re.IGNORECASE), "reduce"),
    (re.compile(r"\bevery vulnerability\b", re.IGNORECASE), "each validated vulnerability"),
    (
        re.compile(r"\bensuring every security gap is addressed\b", re.IGNORECASE),
        "supporting remediation of validated security gaps",
    ),
    (
        re.compile(
            r"\bensuring each infrastructure component and application feature is hardened against potential threats\b",
            re.IGNORECASE,
        ),
        "supporting careful review and hardening of infrastructure components and application features",
    ),
    (
        re.compile(
            r"\bensuring that (?:your|the) (?:digital )?infrastructure remains secure\b",
            re.IGNORECASE,
        ),
        "supporting careful security review as the infrastructure evolves",
    ),
    (
        re.compile(r"\bto ensure secure connectivity\b", re.IGNORECASE),
        "within the deployed network design",
    ),
    (
        re.compile(
            r"\bensuring that each validated vulnerability is identified and communicated clearly\b",
            re.IGNORECASE,
        ),
        "with a focus on clearly communicating validated vulnerabilities",
    ),
    (
        re.compile(
            r"\bensuring that each validated vulnerability is not just identified, but translated into clear remediation steps\b",
            re.IGNORECASE,
        ),
        "by translating validated vulnerabilities into clear remediation steps",
    ),
    (re.compile(r"\bpractical expertise\b", re.IGNORECASE), "project experience"),
    (
        re.compile(
            r"\bensures that each validated vulnerability is addressed with a clear path toward\b",
            re.IGNORECASE,
        ),
        "supports clear remediation paths toward",
    ),
    (
        re.compile(r"\bwhile ensuring stability through the configuration of\b", re.IGNORECASE),
        "and configured",
    ),
    (
        re.compile(r"\bto improv(?:e|ed|ing) (?:accuracy|performance|efficiency)\b", re.IGNORECASE),
        "within the training pipeline",
    ),
    (
        re.compile(r"\bto ensur(?:e|ed|ing) accurate risk assessment\b", re.IGNORECASE),
        "within the risk-estimation pipeline",
    ),
    (
        re.compile(r"\benhanc(?:e|ed|ing) (?:the )?(?:user|customer) experience\b", re.IGNORECASE),
        "support the product workflow",
    ),
)


def fix_banned_letter_phrases(content: dict[str, Any], body_count: int) -> bool:
    """Rewrite salutations and dead opener phrases deterministically across all letter sections."""
    changed = False
    labels = ["opening_paragraph", "closing_paragraph"] + [
        f"body_paragraphs[{index}]" for index in range(body_count)
    ]
    for label in labels:
        original = _get_section_text(content, label)
        if not original.strip():
            continue
        updated = original
        if label == "opening_paragraph":
            updated = _SALUTATION_RE.sub("", updated).strip()
        for pattern, replacement in _BANNED_PHRASE_REWRITES:
            updated = pattern.sub(replacement, updated)
        if updated != original:
            _set_section_text(content, label, updated, body_count)
            changed = True
    return changed

_GENERIC_FILLERS = (
    "I continue to develop these skills through hands-on practice, coursework, and mentorship.",
    "I am actively strengthening this area through structured learning and practical projects.",
    "I welcome the chance to grow further in this area with guidance and real-world application.",
)
_GENERIC_FILLER_SET = {f.rstrip(".") for f in _GENERIC_FILLERS}

_SUBSTANTIVE_BODY_DEFAULTS = (
    "Beyond that foundation, I have applied secure backend development and API design across academic and professional projects, with emphasis on practical, reliable delivery.",
    "I have also integrated LLM tooling into application workflows while maintaining security standards and clear engineering discipline.",
)


def _is_thin_or_generic_paragraph(text: str, min_words: int = 22) -> bool:
    from utils import count_words

    cleaned = str(text).strip()
    if not cleaned:
        return True
    if count_words(cleaned) < min_words:
        return True
    return cleaned.rstrip(".").strip() in _GENERIC_FILLER_SET


def _substantive_body_sentence(content: dict[str, Any], body_index: int) -> str:
    fit = content.get("fit_review", {})
    if isinstance(fit, dict):
        strengths = fit.get("strengths", [])
        if isinstance(strengths, list) and strengths:
            pick = str(strengths[min(body_index, len(strengths) - 1)]).strip()
            if pick:
                lower = pick[0].lower() + pick[1:] if len(pick) > 1 else pick.lower()
                if lower.startswith(("proven ", "strong ", "hands-on ", "relevant ")):
                    return f"Beyond that foundation, I have {lower.rstrip('.')}."
                return f"Beyond that foundation, {lower.rstrip('.')}."
    return _SUBSTANTIVE_BODY_DEFAULTS[body_index % len(_SUBSTANTIVE_BODY_DEFAULTS)]


def _polish_body_paragraph_grammar(text: str) -> str:
    polished = str(text).strip()
    grammar_fixes = (
        ("Beyond that foundation, proven ", "Beyond that foundation, I have proven "),
        ("Beyond that foundation, strong ", "Beyond that foundation, I have strong "),
        ("Beyond that foundation, hands-on ", "Beyond that foundation, I have hands-on "),
        ("Beyond that foundation, relevant ", "Beyond that foundation, I have relevant "),
    )
    for old, new in grammar_fixes:
        if polished.startswith(old):
            polished = new + polished[len(old) :]
            break
    return polished


def fix_thin_or_generic_bodies(
    content: dict[str, Any],
    body_count: int,
    *,
    skip_body_indices: set[int] | None = None,
    max_words: int = _DEFAULT_MAX_BODY_WORDS,
    min_words: int = 22,
) -> bool:
    """Replace placeholder one-liners with a substantive evidence paragraph."""
    from utils import enforce_max_words

    skip = skip_body_indices or set()
    changed = False
    body = content.get("body_paragraphs", [])
    if not isinstance(body, list):
        body = []
    while len(body) < body_count:
        body.append("")

    for index in range(body_count):
        if index in skip:
            continue
        original = str(body[index]).strip()
        if _is_thin_or_generic_paragraph(original, min_words):
            replacement, _ = enforce_max_words(_substantive_body_sentence(content, index), max_words)
            if replacement != original:
                body[index] = replacement
                changed = True
                original = replacement
        polished = _polish_body_paragraph_grammar(original)
        if polished != original:
            body[index] = polished
            changed = True

    content["body_paragraphs"] = body[:body_count]
    return changed


def _body_index_from_label(label: str) -> int | None:
    match = re.match(r"body_paragraphs\[(\d+)\]", label)
    return int(match.group(1)) if match else None


def _strip_leading_variation_prefixes(paragraph: str) -> str:
    """Remove stacked opener prefixes left by repeated collision rewrites."""
    text = str(paragraph).strip()
    for _ in range(16):
        lowered = text.lower()
        stripped = False
        for prefix in _OPENER_PREFIX_LOWER:
            if lowered.startswith(prefix):
                text = text[len(prefix) :].strip()
                stripped = True
                break
        if not stripped:
            break
    text = re.sub(r"^(?:I\s+)+", "I ", text, flags=re.IGNORECASE).strip()
    return text


def _count_variation_prefix_hits(text: str) -> int:
    lowered = str(text).lower()
    return sum(1 for prefix in _OPENER_PREFIX_LOWER if prefix in lowered)


def _is_garbled_paragraph(text: str, max_words: int) -> bool:
    cleaned = str(text).strip()
    if not cleaned:
        return False
    from utils import count_words

    if count_words(cleaned) > max(max_words * 2, max_words + 40):
        return True
    if _count_variation_prefix_hits(cleaned) >= 2:
        return True
    if cleaned.lower().count("during my academic work") >= 2:
        return True
    return False


def _default_opening(content: dict[str, Any]) -> str:
    role = str(content.get("role_title", "this role")).strip() or "this role"
    company = str(content.get("company_name", "your organization")).strip() or "your organization"
    return (
        f"I am applying for the {role} position at {company}. "
        "My background combines hands-on technical work with a strong foundation in secure, "
        "reliable software development."
    )


def _default_closing() -> str:
    return (
        "I would welcome the opportunity to discuss how my background fits this role. "
        "Please let me know if we can arrange a conversation at your convenience."
    )


def _salvage_paragraph(text: str, max_words: int, filler: str) -> str:
    from utils import count_words, enforce_max_words

    cleaned = _strip_leading_variation_prefixes(str(text).strip())
    if not _is_garbled_paragraph(cleaned, max_words):
        return enforce_max_words(cleaned, max_words)[0]

    sentences = _split_sentences(cleaned)
    good: list[str] = []
    for sentence in sentences:
        stripped = _strip_leading_variation_prefixes(sentence)
        if _count_variation_prefix_hits(stripped) >= 1 and count_words(stripped) < 12:
            continue
        if count_words(stripped) >= 8:
            good.append(stripped)
    if good:
        return enforce_max_words(" ".join(good[-2:]), max_words)[0]
    return enforce_max_words(filler, max_words)[0]


def _enforce_paragraph_limits(
    content: dict[str, Any],
    body_count: int,
    max_words: int,
    *,
    skip_body_indices: set[int] | None = None,
) -> bool:
    from utils import enforce_max_words

    skip = skip_body_indices or set()
    changed = False

    for label in ("opening_paragraph", "closing_paragraph"):
        original = _get_section_text(content, label)
        limited, was_trimmed = enforce_max_words(original, max_words)
        if was_trimmed and limited != original:
            _set_section_text(content, label, limited, body_count)
            changed = True

    body = content.get("body_paragraphs", [])
    if isinstance(body, list):
        for index, paragraph in enumerate(body):
            if index in skip:
                continue
            original = str(paragraph)
            limited, was_trimmed = enforce_max_words(original, max_words)
            if was_trimmed and limited != original:
                body[index] = limited
                changed = True
        content["body_paragraphs"] = body[:body_count]
    return changed


def finalize_letter_repairs(
    content: dict[str, Any],
    body_count: int,
    *,
    max_words: int = _DEFAULT_MAX_BODY_WORDS,
    gaps_addressed: list[str] | None = None,
    skip_body_indices: set[int] | None = None,
) -> bool:
    """Last-resort structural repair: salvage garbled text and fill empty sections."""
    skip = skip_body_indices or set()
    skill_fillers = list(_GENERIC_FILLERS)
    filler_index = 0

    def next_skill_filler() -> str:
        nonlocal filler_index
        text = skill_fillers[filler_index % len(skill_fillers)]
        filler_index += 1
        return text

    changed = False

    opening = _get_section_text(content, "opening_paragraph").strip()
    if not opening:
        _set_section_text(content, "opening_paragraph", _default_opening(content), body_count)
        changed = True
    else:
        salvaged = _salvage_paragraph(opening, max_words, _default_opening(content))
        if salvaged != opening:
            _set_section_text(content, "opening_paragraph", salvaged, body_count)
            changed = True

    closing = _get_section_text(content, "closing_paragraph").strip()
    if not closing:
        _set_section_text(content, "closing_paragraph", _default_closing(), body_count)
        changed = True
    elif _is_garbled_paragraph(closing, max_words):
        _set_section_text(content, "closing_paragraph", _default_closing(), body_count)
        changed = True

    body = content.get("body_paragraphs", [])
    if not isinstance(body, list):
        body = []
    while len(body) < body_count:
        body.append("")
    for index in range(body_count):
        if index in skip:
            existing = str(body[index]).strip()
            if existing and existing.lower().count("i want to be upfront") < 2:
                continue
            if gaps_addressed:
                from utils import enforce_max_words

                gap_text = " ".join(str(item).strip() for item in gaps_addressed if str(item).strip())
                limited, _ = enforce_max_words(gap_text, max_words)
                if str(body[index]).strip() != limited:
                    body[index] = limited
                    changed = True
            continue
        original = str(body[index]).strip()
        if original.lower().startswith(_GAP_DISCLOSURE_OPENER):
            body[index] = _substantive_body_sentence(content, index)
            changed = True
            continue
        if not original:
            body[index] = _substantive_body_sentence(content, index)
            changed = True
            continue
        if _is_thin_or_generic_paragraph(original):
            body[index] = _substantive_body_sentence(content, index)
            changed = True
            continue
        salvaged = _salvage_paragraph(original, max_words, next_skill_filler())
        if salvaged != original:
            body[index] = salvaged
            changed = True
    content["body_paragraphs"] = body[:body_count]

    if fix_thin_or_generic_bodies(
        content,
        body_count,
        skip_body_indices=skip_body_indices,
        max_words=max_words,
    ):
        changed = True

    if _enforce_paragraph_limits(content, body_count, max_words, skip_body_indices=skip):
        changed = True
    return changed


def _three_word_opener(text: str) -> str:
    tokens = _THREE_WORD_OPENER.findall(str(text).lower())
    return " ".join(tokens[:3])


def _paragraph_chunks(text: str) -> list[str]:
    chunks = [part.strip() for part in re.split(r"\n\s*\n", str(text)) if part.strip()]
    if len(chunks) <= 1 and len(text) > 200:
        chunks = [s.strip() for s in re.split(r"(?<=[.!?])\s+", text) if len(s.strip()) > 40]
    return chunks if chunks else ([text.strip()] if text.strip() else [])


def _split_sentences(text: str) -> list[str]:
    parts = re.split(r"(?<=[.!?])\s+", str(text).strip())
    return [part.strip() for part in parts if part.strip()]


def _section_order(label: str) -> int:
    if label == "opening_paragraph":
        return 0
    match = re.match(r"body_paragraphs\[(\d+)\]", label)
    if match:
        return 1 + int(match.group(1))
    if label == "closing_paragraph":
        return 100
    return 50


def _get_section_text(content: dict[str, Any], label: str) -> str:
    if label == "opening_paragraph":
        return str(content.get("opening_paragraph", ""))
    if label == "closing_paragraph":
        return str(content.get("closing_paragraph", ""))
    match = re.match(r"body_paragraphs\[(\d+)\]", label)
    if match:
        body = content.get("body_paragraphs", [])
        index = int(match.group(1))
        if isinstance(body, list) and index < len(body):
            return str(body[index])
    return ""


def _set_section_text(content: dict[str, Any], label: str, text: str, body_count: int) -> None:
    cleaned = text.strip()
    if label == "opening_paragraph":
        content["opening_paragraph"] = cleaned
        return
    if label == "closing_paragraph":
        content["closing_paragraph"] = cleaned
        return
    match = re.match(r"body_paragraphs\[(\d+)\]", label)
    if not match:
        return
    index = int(match.group(1))
    body = content.get("body_paragraphs", [])
    if not isinstance(body, list):
        body = []
    while len(body) < body_count:
        body.append("")
    if index < len(body):
        body[index] = cleaned
    content["body_paragraphs"] = body[:body_count]


def strip_structural_label_leaks(text: str) -> str:
    """Remove OPENING:/BODY_2: labels the model leaked into prose."""
    lines = []
    for line in str(text).splitlines():
        line = _LABEL_LINE.sub("", line.strip())
        line = _INLINE_BODY_LABEL.sub("", line)
        if line:
            lines.append(line)
    result = " ".join(lines) if lines else _INLINE_BODY_LABEL.sub("", str(text).strip())
    return re.sub(r"\s{2,}", " ", result).strip()


def strip_letter_label_leaks(content: dict[str, Any], body_count: int) -> bool:
    changed = False
    for label in ("opening_paragraph", "closing_paragraph"):
        original = _get_section_text(content, label)
        cleaned = strip_structural_label_leaks(original)
        if cleaned != original:
            _set_section_text(content, label, cleaned, body_count)
            changed = True

    body = content.get("body_paragraphs", [])
    if isinstance(body, list):
        updated: list[str] = []
        for paragraph in body:
            original = str(paragraph)
            cleaned = strip_structural_label_leaks(original)
            updated.append(cleaned)
            if cleaned != original:
                changed = True
        content["body_paragraphs"] = updated[:body_count]
    return changed


def _vary_paragraph_opener(paragraph: str, variant: int) -> str:
    paragraph = _strip_leading_variation_prefixes(paragraph.strip())
    if not paragraph:
        return paragraph

    prefix = _OPENER_PREFIXES[variant % len(_OPENER_PREFIXES)]
    sentences = _split_sentences(paragraph)
    if not sentences:
        return paragraph

    first = _strip_leading_variation_prefixes(sentences[0])
    remainder = re.sub(
        r"^I\s+(?:am|have|was|'m|will|'ve)?\s*",
        "",
        first,
        count=1,
        flags=re.IGNORECASE,
    ).strip()
    if not remainder:
        remainder = first.lstrip("Ii ").strip() or "have applied these skills in practical settings"

    if remainder and remainder[0].isupper():
        remainder = remainder[0].lower() + remainder[1:]

    new_first = f"{prefix} {remainder}"
    if not new_first.endswith((".", "!", "?")):
        new_first += "."

    if len(sentences) == 1:
        return new_first
    return " ".join([new_first, *sentences[1:]]).strip()


def _register_openers(text: str, seen: set[str]) -> None:
    for chunk in _paragraph_chunks(str(text)):
        opener = _three_word_opener(chunk)
        if len(opener.split()) >= 3:
            seen.add(opener)
    for sentence in _split_sentences(str(text)):
        opener = _three_word_opener(sentence)
        if len(opener.split()) >= 3:
            seen.add(opener)


def _filter_sentences_not_in_prior(
    text: str,
    seen_openers: set[str],
    prior_blob: str,
) -> tuple[str, bool]:
    """Drop sentences that repeat a prior 3-word opener or appear verbatim in earlier prose."""
    sentences = _split_sentences(str(text).strip())
    if not sentences:
        return str(text).strip(), False

    kept: list[str] = []
    changed = False
    prior_lower = prior_blob.lower()
    for sentence in sentences:
        opener = _three_word_opener(sentence)
        normalized = sentence.lower().strip()
        if len(opener.split()) >= 3 and opener in seen_openers:
            changed = True
            continue
        if len(normalized) >= 24 and normalized in prior_lower:
            changed = True
            continue
        kept.append(sentence)
        if len(opener.split()) >= 3:
            seen_openers.add(opener)

    return " ".join(kept).strip(), changed


def strip_cross_section_duplicates(
    content: dict[str, Any],
    body_count: int,
    *,
    skip_body_indices: set[int] | None = None,
) -> bool:
    """Remove body/closing sentences that repeat opener patterns or prose from earlier sections."""
    skip = skip_body_indices or set()
    changed = False
    seen_openers: set[str] = set()
    prior_blob = ""

    opening = _get_section_text(content, "opening_paragraph").strip()
    if opening:
        _register_openers(opening, seen_openers)
        prior_blob = opening

    body = content.get("body_paragraphs", [])
    if not isinstance(body, list):
        body = []
    while len(body) < body_count:
        body.append("")

    for index in range(body_count):
        original = str(body[index]).strip()
        if not original:
            continue
        if index in skip:
            _register_openers(original, seen_openers)
            prior_blob = f"{prior_blob} {original}".strip()
            continue

        filtered, did_change = _filter_sentences_not_in_prior(original, seen_openers, prior_blob)
        if did_change:
            body[index] = filtered
            changed = True
        prior_blob = f"{prior_blob} {body[index]}".strip()

    content["body_paragraphs"] = body[:body_count]

    closing = _get_section_text(content, "closing_paragraph").strip()
    if closing:
        filtered, did_change = _filter_sentences_not_in_prior(closing, seen_openers, prior_blob)
        if did_change:
            _set_section_text(content, "closing_paragraph", filtered, body_count)
            changed = True

    return changed


def _rewrite_closing_if_thank_you(content: dict[str, Any]) -> bool:
    closing = str(content.get("closing_paragraph", "")).strip()
    if not closing:
        return False
    opener = _three_word_opener(closing)
    if opener not in {"thank you for", "i appreciate the", "i would welcome"}:
        return False
    content["closing_paragraph"] = (
        "I would welcome the opportunity to discuss how my background fits this role. "
        "Please let me know if we can arrange a conversation at your convenience."
    )
    return True


def fix_opener_collisions(
    content: dict[str, Any],
    body_count: int,
    *,
    skip_body_indices: set[int] | None = None,
) -> bool:
    """Rewrite later paragraphs that share a 3-word opener with an earlier one."""
    skip = skip_body_indices or set()
    changed = False

    def label_is_skipped(label: str) -> bool:
        index = _body_index_from_label(label)
        return index is not None and index in skip

    for variant in range(4):
        segments = collect_letter_style_segments(content)
        seen: dict[str, str] = {}
        to_fix: dict[str, int] = {}

        for label, text in segments:
            if label_is_skipped(label):
                continue
            for chunk in _paragraph_chunks(text):
                opener = _three_word_opener(chunk)
                if len(opener.split()) < 3:
                    continue
                if opener in seen and seen[opener] != label:
                    first_label = seen[opener]
                    if label_is_skipped(first_label):
                        to_fix[label] = variant
                    elif _section_order(label) > _section_order(first_label):
                        to_fix[label] = variant
                    elif not label_is_skipped(first_label):
                        to_fix[first_label] = variant
                else:
                    seen[opener] = label

        if not to_fix:
            break

        round_changed = False
        for label, var in to_fix.items():
            if label_is_skipped(label):
                continue
            original = _get_section_text(content, label)
            rewritten = _vary_paragraph_opener(original, var)
            if rewritten != original:
                _set_section_text(content, label, rewritten, body_count)
                round_changed = True
        if not round_changed:
            break
        changed = True

    return changed


def fill_thin_paragraphs(
    content: dict[str, Any],
    body_count: int,
    *,
    gaps_addressed: list[str] | None = None,
    skip_body_indices: set[int] | None = None,
    min_words: int = 18,
) -> bool:
    """Pad paragraphs that became too short after claim stripping."""
    from utils import count_words

    skip = skip_body_indices or set()
    fillers: list[str] = []
    if gaps_addressed:
        fillers.extend(str(item).strip() for item in gaps_addressed if str(item).strip())
    fillers.extend(_GENERIC_FILLERS)

    changed = False
    filler_index = 0

    def next_filler() -> str:
        nonlocal filler_index
        if not fillers:
            return _GENERIC_FILLERS[0]
        text = fillers[filler_index % len(fillers)]
        filler_index += 1
        return text

    for label in ("opening_paragraph", "closing_paragraph"):
        text = _get_section_text(content, label).strip()
        if not text:
            default = _default_opening(content) if label == "opening_paragraph" else _default_closing()
            _set_section_text(content, label, default, body_count)
            changed = True
        elif count_words(text) < min_words:
            _set_section_text(content, label, f"{text.rstrip('.')}. {next_filler()}", body_count)
            changed = True

    body = content.get("body_paragraphs", [])
    if isinstance(body, list):
        for index, paragraph in enumerate(body):
            if index in skip:
                continue
            text = str(paragraph).strip()
            if not text:
                body[index] = _substantive_body_sentence(content, index)
                changed = True
            elif count_words(text) < min_words:
                body[index] = _substantive_body_sentence(content, index)
                changed = True
        content["body_paragraphs"] = body[:body_count]

    return changed


def autofix_letter_prose(
    content: dict[str, Any],
    body_count: int,
    *,
    gaps_addressed: list[str] | None = None,
    skip_body_indices: set[int] | None = None,
    max_words: int = _DEFAULT_MAX_BODY_WORDS,
) -> bool:
    """
    Apply deterministic repairs for label leaks, claim echoes, opener collisions, and thin paragraphs.
    Returns True if any edit was made.
    """
    changed = False

    if strip_letter_label_leaks(content, body_count):
        changed = True

    if fix_banned_letter_phrases(content, body_count):
        changed = True

    if strip_letter_claim_violations(content, body_count, skip_body_indices=skip_body_indices):
        changed = True

    if strip_cross_section_duplicates(content, body_count, skip_body_indices=skip_body_indices):
        changed = True

    if fix_opener_collisions(content, body_count, skip_body_indices=skip_body_indices):
        changed = True

    if _rewrite_closing_if_thank_you(content):
        changed = True

    if _enforce_paragraph_limits(
        content, body_count, max_words, skip_body_indices=skip_body_indices
    ):
        changed = True

    return changed


def autofix_until_clean(
    content: dict[str, Any],
    body_count: int,
    *,
    gaps_addressed: list[str] | None = None,
    skip_body_indices: set[int] | None = None,
    max_rounds: int = 4,
    max_words: int = _DEFAULT_MAX_BODY_WORDS,
) -> bool:
    """Run autofix in a loop until scan_letter_style reports no issues or rounds exhaust."""
    any_change = False
    for _ in range(max_rounds):
        before_issues = scan_letter_style(content)
        if not autofix_letter_prose(
            content,
            body_count,
            gaps_addressed=gaps_addressed,
            skip_body_indices=skip_body_indices,
            max_words=max_words,
        ):
            if not before_issues:
                break
            after_issues = scan_letter_style(content)
            if len(after_issues) >= len(before_issues):
                break
            continue
        any_change = True
        if not scan_letter_style(content):
            break

    return any_change
