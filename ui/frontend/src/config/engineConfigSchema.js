/** Field definitions for the project-root config.yaml */

export const ENGINE_CONFIG_SECTIONS = [
  {
    id: "ollama",
    title: "Ollama",
    description: "Local LLM connection and model options.",
    fields: [
      { path: ["ollama", "base_url"], label: "Base URL", type: "text", fullWidth: true },
      { path: ["ollama", "model"], label: "Model", type: "text" },
      { path: ["ollama", "think"], label: "Think", type: "boolean" },
      { path: ["ollama", "auto_start"], label: "Auto start", type: "boolean" },
    ],
  },
  {
    id: "generation",
    title: "Generation",
    description: "Sampling defaults used across pipeline stages.",
    fields: [
      {
        path: ["generation", "temperature"],
        label: "Temperature",
        type: "number",
        step: 0.05,
        hint: "Default for uncategorized calls",
      },
      {
        path: ["generation", "creative_temperature"],
        label: "Creative temperature",
        type: "number",
        step: 0.05,
        hint: "Prose drafting (summary, bullets, letter body)",
      },
      {
        path: ["generation", "precise_temperature"],
        label: "Precise temperature",
        type: "number",
        step: 0.05,
        hint: "Reviews, scoring, claims, structured formatting",
      },
      {
        path: ["generation", "context_window"],
        label: "Context window",
        type: "number",
        integer: true,
        hint: "Compact prompts target 8192; increase only when the selected model supports it",
      },
      { path: ["generation", "top_p"], label: "Top P", type: "number", step: 0.05 },
      { path: ["generation", "repeat_penalty"], label: "Repeat penalty", type: "number", step: 0.05 },
      {
        path: ["generation", "seed"],
        label: "Seed",
        type: "number",
        integer: true,
        hint: "Greater than 0 enables reproducible sampling",
      },
    ],
  },
  {
    id: "batch_resilience",
    title: "Batch resilience",
    description: "Keep unattended runs moving when one application or model response fails.",
    fields: [
      { path: ["batch_resilience", "enabled"], label: "Resilient batches", type: "boolean" },
      { path: ["batch_resilience", "continue_on_error"], label: "Continue after job failure", type: "boolean" },
      {
        path: ["batch_resilience", "max_attempts_per_application"],
        label: "Attempts per application",
        type: "number",
        integer: true,
        hint: "Retries CV and cover-letter stages independently",
      },
      {
        path: ["batch_resilience", "skip_fit_below"],
        label: "Skip below fit score",
        type: "number",
        integer: true,
        hint: "After retries, 1-10 profile fit threshold",
      },
      {
        path: ["batch_resilience", "accept_low_quality_fit_at_most"],
        label: "Accept lower quality up to fit",
        type: "number",
        integer: true,
        hint: "Valid borderline-fit drafts can pass instead of blocking the batch",
      },
      {
        path: ["batch_resilience", "reuse_previous_success"],
        label: "Reuse previous successful draft",
        type: "boolean",
      },
    ],
  },
  {
    id: "paths",
    title: "Data paths",
    description: "Where applications, profile, and stage artifacts are stored.",
    fields: [
      { path: ["applications", "json"], label: "Applications JSON", type: "text", fullWidth: true },
      { path: ["profile", "json"], label: "Profile JSON", type: "text", fullWidth: true },
      { path: ["stages", "stage_1"], label: "Stage 1 data", type: "text", fullWidth: true },
      { path: ["stages", "stage_2"], label: "Stage 2 data", type: "text", fullWidth: true },
      { path: ["stages", "stage_3"], label: "Stage 3 data", type: "text", fullWidth: true },
    ],
  },
  {
    id: "loops",
    title: "Loops",
    fields: [{ path: ["loops", "max_keywords_total"], label: "Max keywords total", type: "number", integer: true }],
  },
  {
    id: "stage_2",
    title: "Stage 2",
    description: "Keyword expansion, grounding, skills, and verification.",
    fields: [
      {
        path: ["stage_2", "keywords", "max_original_keyword"],
        label: "Max original keywords",
        type: "number",
        integer: true,
      },
      {
        path: ["stage_2", "keywords", "max_synonym_keyword_per_original_keyword"],
        label: "Max synonyms per keyword",
        type: "number",
        integer: true,
      },
      {
        path: ["stage_2", "grounding", "skills_from_profile_only"],
        label: "Skills from profile only",
        type: "boolean",
      },
      {
        path: ["stage_2", "grounding", "enforce_claims_manifest"],
        label: "Enforce claims manifest",
        type: "boolean",
      },
      { path: ["stage_2", "skills", "domain_count"], label: "Skill domain count", type: "number", integer: true },
      { path: ["stage_2", "skills", "subskill_min"], label: "Subskill min", type: "number", integer: true },
      { path: ["stage_2", "skills", "subskill_max"], label: "Subskill max", type: "number", integer: true },
      {
        path: ["stage_2", "certifications", "description_min_chars"],
        label: "Certification description min chars",
        type: "number",
        integer: true,
      },
      { path: ["stage_2", "style_verification", "enabled"], label: "Style verification", type: "boolean" },
      { path: ["stage_2", "verification", "enabled"], label: "Quality verification", type: "boolean" },
      { path: ["stage_2", "verification", "min_quality"], label: "Min quality score", type: "number", integer: true },
      { path: ["stage_2", "verification", "max_passes"], label: "Verification max passes", type: "number", integer: true },
      { path: ["stage_2", "parser_verification", "enabled"], label: "Parser verification", type: "boolean" },
      { path: ["stage_2", "parser_verification", "max_passes"], label: "Parser verification max passes", type: "number", integer: true },
      { path: ["stage_2", "parser_autofix", "enabled"], label: "Parser autofix", type: "boolean" },
    ],
  },
  {
    id: "stage_3",
    title: "Stage 3",
    description: "Cover letter body, honesty rules, and verification.",
    fields: [
      { path: ["stage_3", "body_paragraphs"], label: "Body paragraphs", type: "number", integer: true },
      { path: ["stage_3", "body_paragraph", "max_words"], label: "Max words per paragraph", type: "number", integer: true },
      { path: ["stage_3", "honesty", "use_stage_2_claims"], label: "Use stage 2 claims", type: "boolean" },
      {
        path: ["stage_3", "honesty", "deterministic_gap_paragraph"],
        label: "Deterministic gap paragraph",
        type: "boolean",
      },
      { path: ["stage_3", "honesty", "gap_paragraph_index"], label: "Gap paragraph index", type: "number", integer: true },
      { path: ["stage_3", "honesty", "smooth_gap_paragraph"], label: "Smooth gap paragraph", type: "boolean" },
      { path: ["stage_3", "honesty", "max_gaps_in_letter"], label: "Max gaps in letter", type: "number", integer: true },
      { path: ["stage_3", "style_verification", "enabled"], label: "Style verification", type: "boolean" },
      { path: ["stage_3", "verification", "enabled"], label: "Quality verification", type: "boolean" },
      { path: ["stage_3", "verification", "min_quality"], label: "Min quality score", type: "number", integer: true },
      { path: ["stage_3", "verification", "max_passes"], label: "Verification max passes", type: "number", integer: true },
      { path: ["stage_3", "parser_verification", "enabled"], label: "Parser verification", type: "boolean" },
      { path: ["stage_3", "parser_verification", "max_passes"], label: "Parser verification max passes", type: "number", integer: true },
      { path: ["stage_3", "parser_autofix", "enabled"], label: "Parser autofix", type: "boolean" },
    ],
  },
];

export function pathKey(path) {
  return path.join(".");
}

export function getByPath(obj, path) {
  return path.reduce((acc, key) => (acc == null ? undefined : acc[key]), obj);
}

export function setByPath(obj, path, value) {
  const next = structuredClone(obj);
  let cur = next;
  for (let i = 0; i < path.length - 1; i += 1) {
    const key = path[i];
    if (cur[key] == null || typeof cur[key] !== "object") {
      cur[key] = {};
    }
    cur = cur[key];
  }
  cur[path[path.length - 1]] = value;
  return next;
}
