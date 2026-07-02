"""Profile grounding, claims manifest, and cross-document consistency helpers."""

from __future__ import annotations

import copy
import re
from typing import Any

from utils import dedupe_keywords

from skills_validator import profile_skill_keys

_PLACEHOLDER_COUNT_RE = re.compile(r"\b[XxNn]\+")
_PLACEHOLDER_TOKENS_RE = re.compile(r"\b(TBD|TODO|N/A|NA|PENDING|UNKNOWN)\b", re.IGNORECASE)


def sanitize_text(text: str) -> str:
    if not text:
        return ""
    result = _PLACEHOLDER_COUNT_RE.sub("multiple", str(text))
    result = _PLACEHOLDER_TOKENS_RE.sub("", result)
    result = re.sub(r"\s{2,}", " ", result)
    result = re.sub(r"\s+([,.;])", r"\1", result)
    return result.strip()


def sanitize_profile(profile: dict[str, Any]) -> dict[str, Any]:
    """Deep-sanitize profile strings before any LLM call (fixes X+, TBD, etc.)."""

    def walk(value: Any) -> Any:
        if isinstance(value, dict):
            return {key: walk(item) for key, item in value.items()}
        if isinstance(value, list):
            return [walk(item) for item in value]
        if isinstance(value, str):
            return sanitize_text(value)
        return value

    return walk(copy.deepcopy(profile))


def build_profile_skill_keys(profile: dict[str, Any]) -> list[str]:
    """Skill names only — the keys of profile['skills'], never description values."""
    keys = profile_skill_keys(profile)
    return sorted(keys, key=str.lower)


def build_allowed_skill_terms(profile: dict[str, Any]) -> list[str]:
    """Exact skill/tool strings permitted on the resume — sourced from profile only."""
    terms: list[str] = []
    seen: set[str] = set()

    def add(term: str) -> None:
        cleaned = sanitize_text(str(term))
        if not cleaned:
            return
        key = cleaned.lower()
        if key in seen:
            return
        seen.add(key)
        terms.append(cleaned)

    for name in build_profile_skill_keys(profile):
        add(name)

    for project in (profile.get("projects") or {}).values():
        if not isinstance(project, dict):
            continue
        add(str(project.get("name", "")))
        tech = str(project.get("technologies", ""))
        for part in re.split(r"[,;|/]", tech):
            add(part.strip())

    for cert in (profile.get("certifications") or {}).values():
        if isinstance(cert, dict):
            add(str(cert.get("name", "")))

    for title in (profile.get("titles") or {}).values():
        add(str(title))

    return sorted(terms, key=len, reverse=True)


def is_profile_skill_key(skill: str, profile: dict[str, Any]) -> bool:
    """True only when skill matches a profile skills{} key (case-insensitive)."""
    skill_text = sanitize_text(skill).lower()
    if not skill_text:
        return False
    return skill_text in {key.lower() for key in profile_skill_keys(profile)}


def is_skill_grounded(skill: str, profile: dict[str, Any]) -> bool:
    """Skills output must match profile['skills'] keys only — no fuzzy or substring grounding."""
    return is_profile_skill_key(sanitize_text(skill), profile)


def filter_skills_map(skills: dict[str, list[str]], profile: dict[str, Any]) -> dict[str, list[str]]:
    """Keep only profile skill keys — never descriptions, titles, or certs."""
    from skills_validator import enforce_skill_keys_only

    return enforce_skill_keys_only(skills, profile)


def build_skills_from_profile(
    profile: dict[str, Any],
    *,
    domain_count: int = 5,
) -> dict[str, list[str]]:
    """Deterministic skills section — profile skill keys only, grouped into domains."""
    raw = profile.get("skills", {})
    if not isinstance(raw, dict) or not raw:
        return {}

    names = [str(name).strip() for name in raw if str(name).strip()]
    if not names:
        return {}

    domain_count = max(1, domain_count)
    per_domain = max(1, (len(names) + domain_count - 1) // domain_count)
    domains: dict[str, list[str]] = {}
    for index in range(0, len(names), per_domain):
        chunk = names[index : index + per_domain]
        label = chunk[0]
        if len(chunk) > 1:
            label = f"{chunk[0]} & Related"
        domains[label] = dedupe_keywords(chunk)

    return domains


def derive_claims_to_avoid(gaps: list[str]) -> list[str]:
    """Deterministic claims list from fit_review gaps — no LLM sampling."""
    claims: list[str] = []
    for gap in gaps:
        text = sanitize_text(str(gap))
        if not text:
            continue
        lower = text.lower()
        if "autonomous" in lower and ("pentest" in lower or "penetration" in lower):
            claims.extend(
                [
                    "deployed autonomous penetration testing frameworks",
                    "shipped agentic penetration testing tooling in production",
                    "production autonomous pentest agents",
                ]
            )
        if "ci/cd" in lower or "sast" in lower or "dast" in lower:
            claims.extend(
                [
                    "integrated SAST/DAST into CI/CD pipelines",
                    "owned CI/CD security gate implementation",
                    "embedded SAST and DAST gates in production pipelines",
                ]
            )
        if "agentic" in lower:
            claims.append("deployed agentic security automation in production")
    return dedupe_keywords(claims)


def build_gap_disclosures(gaps: list[str]) -> list[str]:
    """Deterministic honesty sentences — one per gap, stable across runs."""
    disclosures: list[str] = []
    for gap in gaps:
        text = sanitize_text(str(gap)).rstrip(".")
        if not text:
            continue
        lower = text.lower()
        if "autonomous" in lower and ("pentest" in lower or "penetration" in lower):
            disclosures.append(
                "I want to be upfront that my experience with autonomous penetration testing "
                "frameworks is limited to research and study rather than production deployment, "
                "though I have built Python automation for security workflows and am actively "
                "exploring how agentic tooling fits into offensive workflows."
            )
            continue
        if "ci/cd" in lower or "sast" in lower or "dast" in lower:
            disclosures.append(
                "My hands-on work has focused on identifying and reporting vulnerabilities "
                "rather than owning SAST/DAST CI/CD pipeline integration, though I understand "
                "how those checks fit into a secure SDLC."
            )
            continue
        disclosures.append(
            f"I want to be upfront that {text[0].lower()}{text[1:]} is an area I am still "
            "developing, and I am motivated to grow here with mentorship and hands-on practice."
        )
    return disclosures


def build_claims_ledger(profile: dict[str, Any], gaps: list[str]) -> dict[str, dict[str, Any]]:
    """Deterministic load-bearing facts — CV and cover letter must not drift on these topics."""
    ledger: dict[str, dict[str, Any]] = {}

    for gap in gaps:
        lower = sanitize_text(str(gap)).lower()
        if "autonomous" in lower and ("pentest" in lower or "penetration" in lower):
            ledger["autonomous_pentest_experience"] = {
                "canonical_framing": (
                    "Autonomous penetration testing experience is research and study only — "
                    "not production deployment of agentic pentest frameworks."
                ),
                "forbidden_phrases": [
                    "deployed autonomous penetration testing",
                    "production autonomous pentest",
                    "shipped agentic penetration testing",
                    "autonomous pentest agents in production",
                    "production agentic pentest tooling",
                ],
            }
            break

    for project in (profile.get("projects") or {}).values():
        if not isinstance(project, dict):
            continue
        blob = f"{project.get('name', '')} {project.get('description', '')} {project.get('technologies', '')}".lower()
        if "graphcodebert" in blob or "vulnera" in blob:
            desc = sanitize_text(str(project.get("description", "")))
            ledger["graphcodebert_usage"] = {
                "canonical_framing": desc or (
                    "GraphCodeBERT-based vulnerability detection research with calibration "
                    "evaluation (ECE, Brier Score) — academic FYP, not a production classifier."
                ),
                "forbidden_phrases": [
                    "production GraphCodeBERT classifier",
                    "deployed GraphCodeBERT model",
                    "fine-tuned GraphCodeBERT in production",
                    "enterprise GraphCodeBERT deployment",
                    "production zero-day detection system",
                ],
            }
            break

    for experience in (profile.get("experience") or {}).values():
        if not isinstance(experience, dict):
            continue
        position = sanitize_text(str(experience.get("position", "")))
        if "penetration" in position.lower() or "pentest" in position.lower():
            scope = sanitize_text(str(experience.get("description", "")))
            ledger["pentest_role_scope"] = {
                "canonical_framing": scope or (
                    "Web application and API penetration testing with documented findings "
                    "and remediation guidance for client environments."
                ),
                "forbidden_phrases": [
                    "led enterprise-wide penetration testing program",
                    "owned organization-wide pentest operations",
                    "managed a team of penetration testers",
                    "directed autonomous offensive security program",
                ],
            }
            break

    return ledger


def ledger_guidance_block(claims_ledger: dict[str, dict[str, Any]]) -> dict[str, Any]:
    if not claims_ledger:
        return {}
    return {
        "claims_ledger": claims_ledger,
        "ledger_rules": [
            "For each claims_ledger topic, stay consistent with canonical_framing across CV and cover letter.",
            "Never use any forbidden_phrases from the ledger — rephrase using canonical_framing instead.",
        ],
    }


def claims_guidance_block(
    claims_to_avoid: list[str],
    gaps_addressed: list[str],
    claims_ledger: dict[str, dict[str, Any]] | None = None,
) -> dict[str, Any]:
    block: dict[str, Any] = {
        "claims_manifest": {
            "claims_to_avoid": claims_to_avoid,
            "gaps_addressed": gaps_addressed,
        },
        "claims_rules": [
            "Never state or imply anything listed in claims_to_avoid.",
            "Match the honesty level in gaps_addressed — if a topic is a gap, do not present it as production experience.",
            "Use only facts from candidate_cv. Do not invent tools, employers, or outcomes to match the job description.",
        ],
    }
    block.update(ledger_guidance_block(claims_ledger or {}))
    return block


def find_ledger_violations(text: str, claims_ledger: dict[str, dict[str, Any]]) -> list[str]:
    haystack = str(text).lower()
    violations: list[str] = []
    for topic, rules in claims_ledger.items():
        if not isinstance(rules, dict):
            continue
        for phrase in rules.get("forbidden_phrases", []):
            norm = sanitize_text(str(phrase)).lower()
            if norm and norm in haystack:
                violations.append(f"claims_ledger[{topic}]: forbidden phrasing '{phrase}'")
    return violations


def forbidden_claim_phrases(
    claims_to_avoid: list[str],
    claims_ledger: dict[str, dict[str, Any]] | None = None,
) -> list[str]:
    phrases: list[str] = []
    seen: set[str] = set()
    for claim in claims_to_avoid:
        norm = sanitize_text(str(claim)).lower()
        if norm and norm not in seen:
            seen.add(norm)
            phrases.append(norm)
    for rules in (claims_ledger or {}).values():
        if not isinstance(rules, dict):
            continue
        for phrase in rules.get("forbidden_phrases", []):
            norm = sanitize_text(str(phrase)).lower()
            if norm and norm not in seen:
                seen.add(norm)
                phrases.append(norm)
    return phrases


def strip_sentences_with_forbidden_phrases(text: str, phrases: list[str]) -> tuple[str, bool]:
    """Remove sentences that echo claims_to_avoid / ledger forbidden phrasing."""
    cleaned = sanitize_text(str(text))
    if not cleaned or not phrases:
        return cleaned, False

    sentences = re.split(r"(?<=[.!?])\s+", cleaned)
    kept: list[str] = []
    removed = False
    for sentence in sentences:
        piece = sentence.strip()
        if not piece:
            continue
        lower = piece.lower()
        if any(phrase in lower for phrase in phrases if len(phrase) > 8):
            removed = True
            continue
        kept.append(piece)
    if not removed:
        return cleaned, False
    return " ".join(kept).strip(), True


def strip_letter_claim_violations(
    content: dict[str, Any],
    body_count: int,
    *,
    skip_body_indices: set[int] | None = None,
) -> bool:
    """Deterministically drop sentences that trip the claims parser. Returns True if edited."""
    claims = content.get("claims_to_avoid", [])
    ledger = content.get("claims_ledger", {})
    if not isinstance(claims, list) or not claims:
        return False
    phrases = forbidden_claim_phrases(claims, ledger if isinstance(ledger, dict) else {})
    if not phrases:
        return False

    skip = skip_body_indices or set()

    changed = False
    for key in ("opening_paragraph", "closing_paragraph"):
        text = str(content.get(key, "")).strip()
        stripped, did = strip_sentences_with_forbidden_phrases(text, phrases)
        if did:
            content[key] = stripped
            changed = True

    body = content.get("body_paragraphs", [])
    if isinstance(body, list):
        updated: list[str] = []
        for index, paragraph in enumerate(body):
            if index in skip:
                updated.append(str(paragraph))
                continue
            stripped, did = strip_sentences_with_forbidden_phrases(str(paragraph), phrases)
            updated.append(stripped)
            if did:
                changed = True
        content["body_paragraphs"] = updated[:body_count]
        while len(content["body_paragraphs"]) < body_count:
            content["body_paragraphs"].append("")

    return changed


def letter_has_claim_violations(content: dict[str, Any]) -> bool:
    claims = content.get("claims_to_avoid", [])
    if not isinstance(claims, list) or not claims:
        return False
    ledger = content.get("claims_ledger", {})
    ledger_dict = ledger if isinstance(ledger, dict) else {}
    for text in (
        str(content.get("opening_paragraph", "")),
        str(content.get("closing_paragraph", "")),
    ):
        if find_claim_violations(text, claims) or find_ledger_violations(text, ledger_dict):
            return True
    body = content.get("body_paragraphs", [])
    if isinstance(body, list):
        blob = " ".join(str(p) for p in body)
        if find_claim_violations(blob, claims) or find_ledger_violations(blob, ledger_dict):
            return True
    return False


def find_claim_violations(text: str, claims_to_avoid: list[str]) -> list[str]:
    haystack = text.lower()
    violations: list[str] = []
    for claim in claims_to_avoid:
        norm = sanitize_text(claim).lower()
        if not norm:
            continue
        if norm in haystack:
            violations.append(f"contains forbidden claim: {claim}")
            continue
        for fragment in re.split(r"[,;]", norm):
            fragment = fragment.strip()
            if len(fragment) > 12 and fragment in haystack:
                violations.append(f"contains forbidden claim fragment: {fragment}")
    return violations


def find_ungrounded_skills(skills: Any, profile: dict[str, Any]) -> list[str]:
    from skills_validator import validate_skills_output

    _, errors = validate_skills_output(skills if isinstance(skills, dict) else None, profile)
    return errors


def _collect_text_blobs(content: dict[str, Any]) -> dict[str, str]:
    blobs: dict[str, str] = {}

    summary = content.get("executive_summary", "")
    if isinstance(summary, str) and summary.strip():
        blobs["executive_summary"] = summary

    work = content.get("work_experience", {})
    if isinstance(work, dict):
        for key, entry in work.items():
            if not isinstance(entry, dict):
                continue
            parts = [str(entry.get("title", "")), str(entry.get("company", ""))]
            points = entry.get("points", [])
            if isinstance(points, list):
                parts.extend(str(p) for p in points)
            blobs[f"work_experience/{key}"] = " ".join(parts)

    projects = content.get("projects", {})
    if isinstance(projects, dict):
        for key, entry in projects.items():
            if isinstance(entry, dict):
                desc = str(entry.get("description", "")).strip()
                if desc:
                    blobs[f"projects/{key}"] = desc

    achievements = content.get("achievements", {})
    if isinstance(achievements, dict):
        for key, entry in achievements.items():
            if isinstance(entry, dict):
                desc = str(entry.get("description", "")).strip()
                if desc:
                    blobs[f"achievements/{key}"] = desc

    certs = content.get("certifications", {})
    if isinstance(certs, dict):
        for key, entry in certs.items():
            if isinstance(entry, dict):
                desc = str(entry.get("description", "")).strip()
                if desc:
                    blobs[f"certifications/{key}"] = desc

    for para_key in ("opening_paragraph", "closing_paragraph"):
        text = content.get(para_key, "")
        if isinstance(text, str) and text.strip():
            blobs[para_key] = text

    body = content.get("body_paragraphs", [])
    if isinstance(body, list):
        for index, paragraph in enumerate(body):
            text = str(paragraph).strip()
            if text:
                blobs[f"body_paragraphs[{index}]"] = text

    return blobs


def scan_content_grounding(
    content: dict[str, Any],
    profile: dict[str, Any],
    claims_to_avoid: list[str],
    claims_ledger: dict[str, dict[str, Any]] | None = None,
) -> dict[str, list[str]]:
    """Parser checks: claims violations, ledger drift, and ungrounded skills."""
    issues: dict[str, list[str]] = {}

    skill_issues = find_ungrounded_skills(content.get("skills"), profile)
    if skill_issues:
        issues["skills"] = skill_issues

    ledger = claims_ledger if isinstance(claims_ledger, dict) else {}
    for section, text in _collect_text_blobs(content).items():
        section_key = section.split("/", 1)[0]
        violations = find_claim_violations(text, claims_to_avoid)
        violations.extend(find_ledger_violations(text, ledger))
        if violations:
            issues.setdefault(section_key, []).extend(violations)

    return issues
