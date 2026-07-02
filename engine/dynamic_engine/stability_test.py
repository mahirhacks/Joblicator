"""
Run-to-run stability testing — generate the same application N times and diff outputs.

Debugging tool: flags fields that vary structurally (presence/absence, framing) vs
acceptable wording-only variety.

Usage (from project root):
    python engine/dynamic_engine/stability_test.py --runs 3
    python engine/dynamic_engine/stability_test.py --runs 5 --app-key Funding_Societies_...
    python engine/dynamic_engine/stability_test.py --runs 3 --stage stage_2 --no-llm-cache-hint
"""

from __future__ import annotations

import argparse
import copy
import hashlib
import json
import sys
import tempfile
from pathlib import Path
from typing import Any

ENGINE_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = ENGINE_DIR.parent.parent
if str(ENGINE_DIR) not in sys.path:
    sys.path.insert(0, str(ENGINE_DIR))

from utils import load_config, load_json, resolve_path  # noqa: E402


STRUCTURAL_PATHS = (
    ("certifications", "count"),
    ("skills", "domain_count"),
    ("skills", "keys"),
    ("claims_ledger", "topics"),
    ("claims_to_avoid", "count"),
    ("gaps_addressed", "count"),
    ("body_paragraphs", "count"),
    ("work_experience", "count"),
    ("projects", "count"),
)

FRAMING_KEYWORDS = (
    "graphcodebert",
    "autonomous pentest",
    "autonomous penetration",
    "production classifier",
    "research and study",
    "calibration",
    "ece",
    "brier",
)


def _json_hash(payload: Any) -> str:
    blob = json.dumps(payload, sort_keys=True, ensure_ascii=True)
    return hashlib.sha256(blob.encode("utf-8")).hexdigest()[:16]


def _skill_keys(skills: Any) -> list[str]:
    if not isinstance(skills, dict):
        return []
    keys: list[str] = []
    for items in skills.values():
        if isinstance(items, list):
            keys.extend(str(item) for item in items)
    return sorted(keys, key=str.lower)


def _section_count(section: Any) -> int:
    if isinstance(section, dict):
        return len(section)
    if isinstance(section, list):
        return len(section)
    return 0


def structural_fingerprint(content: dict[str, Any], *, stage: str) -> dict[str, Any]:
    fp: dict[str, Any] = {
        "stage": stage,
        "certifications": {
            "count": _section_count(content.get("certifications")),
            "descriptions_nonempty": 0,
        },
        "skills": {
            "domain_count": _section_count(content.get("skills")),
            "keys": _skill_keys(content.get("skills")),
        },
        "claims_ledger": {
            "topics": sorted((content.get("claims_ledger") or {}).keys()),
        },
        "claims_to_avoid": {"count": len(content.get("claims_to_avoid") or [])},
        "gaps_addressed": {"count": len(content.get("gaps_addressed") or [])},
        "work_experience": {"count": _section_count(content.get("work_experience"))},
        "projects": {"count": _section_count(content.get("projects"))},
    }

    certs = content.get("certifications", {})
    if isinstance(certs, dict):
        for entry in certs.values():
            if isinstance(entry, dict) and str(entry.get("description", "")).strip():
                fp["certifications"]["descriptions_nonempty"] += 1

    if stage == "stage_3":
        body = content.get("body_paragraphs", [])
        fp["body_paragraphs"] = {"count": len(body) if isinstance(body, list) else 0}

    text_blob = json.dumps(content, ensure_ascii=True).lower()
    fp["framing_keywords"] = {kw: (kw in text_blob) for kw in FRAMING_KEYWORDS}
    return fp


def framing_drift(fingerprints: list[dict[str, Any]]) -> list[str]:
    issues: list[str] = []
    if len(fingerprints) < 2:
        return issues

    baseline = fingerprints[0]
    for index, fp in enumerate(fingerprints[1:], start=2):
        for key, present in baseline.get("framing_keywords", {}).items():
            other = fp.get("framing_keywords", {}).get(key)
            if other is not None and present != other:
                issues.append(
                    f"run {index} framing drift on '{key}': run1={present} run{index}={other}"
                )

        for section in ("certifications", "skills", "claims_ledger", "body_paragraphs"):
            left = baseline.get(section)
            right = fp.get(section)
            if left != right:
                issues.append(f"run {index} structural drift in {section}: {left} vs {right}")

    return issues


def _pick_app_key(stage1: dict, explicit: str | None) -> str:
    if explicit and explicit in stage1:
        return explicit
    keys = sorted(stage1.keys())
    if not keys:
        raise SystemExit("No applications found in stage_1.json")
    return keys[0]


def _run_stage_2_once(config: dict, app_key: str, stage1_entry: dict, application: dict, profile: dict) -> dict:
    import stage_2  # noqa: WPS433

    content = stage_2._generate_application_content(config, app_key, stage1_entry, application, profile)
    return content


def _run_stage_3_once(
    config: dict,
    app_key: str,
    stage1_entry: dict,
    application: dict,
    profile: dict,
    stage2_entry: dict,
) -> dict:
    import stage_3  # noqa: WPS433

    content, _, body_count, _ = stage_3._generate_letter_content(
        config, app_key, stage1_entry, application, profile, stage2_entry
    )
    return content


def run_stability_test(
    *,
    runs: int,
    app_key: str | None,
    stage: str,
    skip_verification: bool,
) -> dict[str, Any]:
    config = load_config()
    if skip_verification:
        config = copy.deepcopy(config)
        config.setdefault("stage_2", {}).setdefault("verification", {})["enabled"] = False
        config.setdefault("stage_2", {}).setdefault("parser_verification", {})["enabled"] = False
        config.setdefault("stage_3", {}).setdefault("verification", {})["enabled"] = False
        config.setdefault("stage_3", {}).setdefault("parser_verification", {})["enabled"] = False

    profile = load_json(resolve_path(config, "profile.json"))
    applications = load_json(resolve_path(config, "applications.json"))
    stage1 = load_json(resolve_path(config, "stages.stage_1"))

    chosen_key = _pick_app_key(stage1, app_key)
    stage1_entry = stage1[chosen_key]
    application = applications.get(chosen_key, {})

    fingerprints: list[dict[str, Any]] = []
    hashes: list[str] = []
    run_dir = Path(tempfile.mkdtemp(prefix="joblication_stability_"))

    print(f"Stability test: {runs} run(s), app={chosen_key}, stage={stage}", file=sys.stderr)
    print(f"Artifacts: {run_dir}", file=sys.stderr)

    stage2_entry: dict[str, Any] | None = None
    for run_index in range(1, runs + 1):
        print(f"  run {run_index}/{runs} ...", file=sys.stderr)
        if stage in ("stage_2", "full"):
            content = _run_stage_2_once(config, chosen_key, stage1_entry, application, profile)
            stage2_entry = content
            fp = structural_fingerprint(content, stage="stage_2")
            out_path = run_dir / f"run_{run_index}_stage_2.json"
            out_path.write_text(json.dumps(content, indent=2, ensure_ascii=False), encoding="utf-8")
            fingerprints.append(fp)
            hashes.append(_json_hash(content))

        if stage in ("stage_3", "full"):
            if stage2_entry is None:
                stage2_path = resolve_path(config, "stages.stage_2")
                stage2_data = load_json(stage2_path)
                stage2_entry = stage2_data.get(chosen_key, {})
            content = _run_stage_3_once(
                config, chosen_key, stage1_entry, application, profile, stage2_entry
            )
            fp = structural_fingerprint(content, stage="stage_3")
            out_path = run_dir / f"run_{run_index}_stage_3.json"
            out_path.write_text(json.dumps(content, indent=2, ensure_ascii=False), encoding="utf-8")
            if stage == "stage_3":
                fingerprints.append(fp)
                hashes.append(_json_hash(content))

    drift = framing_drift(fingerprints)
    unique_hashes = sorted(set(hashes))
    report = {
        "app_key": chosen_key,
        "stage": stage,
        "runs": runs,
        "artifact_dir": str(run_dir),
        "content_hashes": hashes,
        "unique_content_hashes": len(unique_hashes),
        "fingerprints": fingerprints,
        "structural_drift": drift,
        "stable": not drift and len(unique_hashes) <= 1,
    }

    print(json.dumps(report, indent=2, ensure_ascii=False))
    if drift:
        print("\nStructural drift detected:", file=sys.stderr)
        for item in drift:
            print(f"  • {item}", file=sys.stderr)
    elif len(unique_hashes) > 1:
        print(
            f"\nWording variety only: {len(unique_hashes)} unique content hashes across {runs} runs.",
            file=sys.stderr,
        )
    else:
        print("\nFully stable across runs (identical content hashes).", file=sys.stderr)

    return report


def main() -> None:
    parser = argparse.ArgumentParser(description="Run-to-run stability diff for Joblication pipeline")
    parser.add_argument("--runs", type=int, default=3, help="Number of generations (default: 3)")
    parser.add_argument("--app-key", default=None, help="Application key from stage_1.json")
    parser.add_argument(
        "--stage",
        choices=("stage_2", "stage_3", "full"),
        default="stage_2",
        help="Which stage to generate repeatedly (default: stage_2)",
    )
    parser.add_argument(
        "--skip-verification",
        action="store_true",
        help="Disable LLM quality + parser verification loops for faster iteration",
    )
    args = parser.parse_args()
    if args.runs < 2:
        raise SystemExit("--runs must be at least 2")

    run_stability_test(
        runs=args.runs,
        app_key=args.app_key,
        stage=args.stage,
        skip_verification=args.skip_verification,
    )


if __name__ == "__main__":
    main()
