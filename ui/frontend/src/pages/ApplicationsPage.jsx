import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api/client.js";
import { useToast } from "../components/Toast.jsx";
import GenerationLog from "../components/GenerationLog.jsx";
import ResizableSidebar from "../components/ResizableSidebar.jsx";
import PageLoading, { EmptyState } from "../components/PageLoading.jsx";
import { IconApplications, IconSpark } from "../components/icons.jsx";

const STATUSES = [
  { value: "unsubmitted", label: "Unsubmitted" },
  { value: "submitted", label: "Submitted" },
  { value: "interview", label: "Interview" },
  { value: "accepted", label: "Accepted" },
  { value: "rejected", label: "Rejected" },
];

const STEP_LABELS = {
  starting: "Starting",
  stage_1: "Stage 1 — keywords & tailoring",
  stage_2: "Stage 2 — tailored resume",
  stage_3: "Stage 3 — cover letter",
  build: "Static build — CV & cover letter PDFs",
  complete: "Complete",
  complete_with_issues: "Complete with issues",
  failed: "Failed",
};

const GENERATE_MODES = [
  { id: "full", label: "Full pipeline", fromStage: "stage_1", onlyStage: null },
  { id: "stage_1", label: "Stage 1 only", fromStage: "stage_1", onlyStage: "stage_1" },
  { id: "from_2", label: "From stage 2", fromStage: "stage_2", onlyStage: null },
  { id: "from_3", label: "From stage 3", fromStage: "stage_3", onlyStage: null },
  { id: "build", label: "Build only", fromStage: "build", onlyStage: null },
];

const BUILD_OUTPUT_OPTIONS = [
  { id: "both", label: "CV + Cover letter" },
  { id: "cv", label: "CV / Resume only" },
  { id: "letter", label: "Cover letter only" },
];

/** CV-only builds skip stage 3, so full pipeline and from stage 3 are not offered. */
const PIPELINE_MODE_IDS_BY_BUILD = {
  both: new Set(["full", "stage_1", "from_2", "from_3", "build"]),
  cv: new Set(["stage_1", "from_2", "build"]),
  letter: new Set(["full", "stage_1", "from_2", "from_3", "build"]),
};

function pipelineModesForBuildOutput(buildOutput) {
  const allowed = PIPELINE_MODE_IDS_BY_BUILD[buildOutput] || PIPELINE_MODE_IDS_BY_BUILD.both;
  return GENERATE_MODES.filter((mode) => allowed.has(mode.id));
}

function buildOutputsForMode(mode) {
  if (mode.fromStage === "stage_3") {
    return BUILD_OUTPUT_OPTIONS.filter((opt) => opt.id !== "cv");
  }
  return BUILD_OUTPUT_OPTIONS;
}

const PHASES = [
  { key: "stage_1", label: "S1" },
  { key: "stage_2", label: "S2" },
  { key: "stage_3", label: "S3" },
  { key: "build", label: "Build" },
];

function statusCounts(apps) {
  const counts = {
    all: apps.length,
    unsubmitted: 0,
    submitted: 0,
    interview: 0,
    accepted: 0,
    rejected: 0,
    withOutput: 0,
  };
  for (const app of apps) {
    if (counts[app.status] !== undefined) counts[app.status] += 1;
    if (app.has_output) counts.withOutput += 1;
  }
  return counts;
}

function outputBadgeLabel(phases) {
  if (!phases) return "Awaiting generation";
  if (phases.build) return "Build ready";
  if (phases.stage_3) return "Stage 3 done";
  if (phases.stage_2) return "Stage 2 done";
  if (phases.stage_1) return "Stage 1 done";
  return "Not started";
}

function modePrerequisitesMet(mode, phases, buildOutput) {
  if (!phases) return mode.fromStage === "stage_1";
  if (mode.fromStage === "stage_1") return true;
  if (mode.fromStage === "stage_2") return phases.stage_1;
  if (mode.fromStage === "stage_3") {
    if (buildOutput === "cv") return false;
    return phases.stage_1 && phases.stage_2;
  }
  if (mode.fromStage === "build") {
    if (buildOutput === "cv") return phases.stage_1 && phases.stage_2;
    if (buildOutput === "letter") return phases.stage_1 && phases.stage_2 && phases.stage_3;
    return phases.stage_1 && phases.stage_2 && phases.stage_3;
  }
  return false;
}

function PipelineModeSelect({ value, onChange, buildOutput }) {
  const modes = pipelineModesForBuildOutput(buildOutput);
  return (
    <select
      className="ps-select applications-stage-select"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-label="Generation mode"
    >
      {modes.map((mode) => (
        <option key={mode.id} value={mode.id}>
          {mode.label}
        </option>
      ))}
    </select>
  );
}

function BuildOutputSelect({ value, onChange, mode }) {
  const options = buildOutputsForMode(mode);
  return (
    <select
      className="ps-select applications-build-select"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-label="Documents to build"
    >
      {options.map((opt) => (
        <option key={opt.id} value={opt.id}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}

function PhaseChips({ phases }) {
  const data = phases || {};
  return (
    <div className="application-phases" aria-label="Pipeline phases">
      {PHASES.map((phase, index) => (
        <span key={phase.key} className="application-phase-group">
          {index > 0 && <span className="application-phase-sep" aria-hidden="true">·</span>}
          <span className={`application-phase-chip ${data[phase.key] ? "done" : "pending"}`}>
            {phase.label}
          </span>
        </span>
      ))}
    </div>
  );
}

function GenerationOutcome({ outcomes }) {
  const outcome = outcomes?.stage_3 || outcomes?.stage_2 || outcomes?.stage_1;
  if (!outcome || outcome.status === "generated") return null;

  const labels = {
    accepted_low_quality: "Accepted usable draft",
    accepted_after_retries: "Accepted after retries",
    reused_previous: "Reused previous successful draft",
    skipped_low_fit: "Skipped - profile fit too low",
    skipped_dependency: "Skipped - upstream stage unavailable",
    failed: "Generation failed for this job",
  };
  const warning = ["accepted_low_quality", "accepted_after_retries", "reused_previous"].includes(outcome.status);
  const score = outcome.quality_score != null ? `Quality ${outcome.quality_score}/10` : null;
  const fit = outcome.fit_score != null ? `Fit ${outcome.fit_score}/10` : null;
  const detail = [score, fit, outcome.attempts ? `${outcome.attempts} attempt${outcome.attempts === 1 ? "" : "s"}` : null]
    .filter(Boolean)
    .join(" · ");

  return (
    <div className={`application-generation-outcome ${warning ? "warning" : "failed"}`}>
      <strong>{labels[outcome.status] || outcome.status}</strong>
      {detail && <span>{detail}</span>}
      {outcome.reason && <span>{outcome.reason}</span>}
    </div>
  );
}

function ApplicationCard({
  app,
  selectMode,
  selected,
  onToggleSelect,
  onUpdateStatus,
  templates,
  defaultTemplateId,
  onUpdateTemplate,
}) {
  function handleCardClick() {
    if (selectMode) onToggleSelect(app.slug);
  }

  const badgeLabel = outputBadgeLabel(app.phases);

  return (
    <article
      className={[
        "application-card",
        selectMode ? "selectable" : "",
        selected ? "is-selected" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      onClick={selectMode ? handleCardClick : undefined}
      onKeyDown={
        selectMode
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onToggleSelect(app.slug);
              }
            }
          : undefined
      }
      role={selectMode ? "button" : undefined}
      tabIndex={selectMode ? 0 : undefined}
    >
      {selectMode && (
        <div className="application-card-check" aria-hidden={!selectMode}>
          <input
            type="checkbox"
            checked={selected}
            onChange={() => onToggleSelect(app.slug)}
            onClick={(e) => e.stopPropagation()}
            aria-label={`Select ${app.title || app.slug}`}
          />
        </div>
      )}

      <div className="application-card-inner">
        <header className="application-card-header">
          <h3>{app.title || app.slug}</h3>
          {app.company && <p className="application-card-company">{app.company}</p>}
          <p className="application-card-slug">{app.slug}</p>
        </header>

        <div className="application-card-meta">
          <span className={`output-badge ${app.phases?.build ? "ready" : "pending"}`}>
            {badgeLabel}
          </span>
          {!selectMode && (
            <select
              value={app.status}
              onChange={(e) => onUpdateStatus(app.slug, e.target.value)}
              className={`status-pill status-${app.status}`}
              aria-label="Application status"
              onClick={(e) => e.stopPropagation()}
            >
              {STATUSES.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          )}
        </div>

        <div className="application-card-body">
          <PhaseChips phases={app.phases} />
          <GenerationOutcome outcomes={app.generation_outcomes} />
          {!selectMode && (
            <label className="application-template-picker" onClick={(e) => e.stopPropagation()}>
              <span>CV template</span>
              <select
                value={app.cv_template_id || defaultTemplateId}
                onChange={(e) => onUpdateTemplate(app.slug, e.target.value)}
                aria-label={`CV template for ${app.title || app.slug}`}
              >
                {Object.entries(templates).map(([id, template]) => (
                  <option key={id} value={id}>{template.name || id}</option>
                ))}
              </select>
            </label>
          )}
          {!app.phases?.build && (
            <p className="application-hint">Generate to create CV and cover letter for this role.</p>
          )}
        </div>

        {!selectMode && (
          <footer className="application-card-footer">
            <Link
              to={`/review?slug=${encodeURIComponent(app.slug)}`}
              className="md-text-btn"
              onClick={(e) => e.stopPropagation()}
            >
              Review &amp; edit
            </Link>
          </footer>
        )}
      </div>
    </article>
  );
}

export default function ApplicationsPage() {
  const { showToast } = useToast();
  const [apps, setApps] = useState([]);
  const [generating, setGenerating] = useState(false);
  const [genStatus, setGenStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [selectMode, setSelectMode] = useState(false);
  const [selected, setSelected] = useState(() => new Set());
  const [generateMode, setGenerateMode] = useState("full");
  const [buildOutput, setBuildOutput] = useState("both");
  const [templates, setTemplates] = useState({});
  const [defaultTemplateId, setDefaultTemplateId] = useState("cv_professional");

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const [data, templateData] = await Promise.all([api.listApplications(), api.listTemplates()]);
      setApps(data.applications || []);
      setTemplates({ ...(templateData.catalog || {}), ...(templateData.custom || {}) });
      setDefaultTemplateId(templateData.defaults?.cv || "cv_professional");
    } catch (e) {
      showToast(e.message, "error");
    } finally {
      setLoading(false);
    }
  }, [showToast]);

  const pollGenerate = useCallback(async () => {
    try {
      const status = await api.generateStatus();
      setGenStatus(status);
      if (status.running) {
        setTimeout(pollGenerate, 2000);
      } else {
        setGenerating(false);
        if (status.error) showToast(status.error, "error");
        else if (status.step === "complete" || status.step === "complete_with_issues") {
          const summary = status.outcome_summary;
          const issueCount = summary
            ? (summary.accepted || 0) + (summary.reused || 0) + (summary.skipped || 0) + (summary.failed || 0)
            : 0;
          showToast(issueCount ? `Batch complete - ${issueCount} job${issueCount === 1 ? "" : "s"} need attention` : "Generation complete");
          load();
        }
      }
    } catch {
      setGenerating(false);
    }
  }, [load, showToast]);

  useEffect(() => {
    load();
  }, [load]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const status = await api.generateStatus();
        if (cancelled || !status.running) return;
        setGenerating(true);
        setGenStatus(status);
        pollGenerate();
      } catch {
        /* ignore */
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [pollGenerate]);

  const counts = useMemo(() => statusCounts(apps), [apps]);

  const filtered = useMemo(() => {
    if (filter === "all") return apps;
    if (filter === "with_output") return apps.filter((a) => a.has_output);
    return apps.filter((a) => a.status === filter);
  }, [apps, filter]);

  const selectedCount = selected.size;
  const activeMode = GENERATE_MODES.find((m) => m.id === generateMode) || GENERATE_MODES[0];
  const showsBuildOutput = !activeMode.onlyStage;
  const availableBuildOutputs = useMemo(() => buildOutputsForMode(activeMode), [activeMode]);

  const selectedApps = useMemo(
    () => apps.filter((app) => selected.has(app.slug)),
    [apps, selected]
  );

  const canRunMode = useMemo(() => {
    if (!selectedCount) {
      return apps.some((app) => modePrerequisitesMet(activeMode, app.phases, buildOutput));
    }
    return selectedApps.every((app) => modePrerequisitesMet(activeMode, app.phases, buildOutput));
  }, [activeMode, apps, selectedApps, selectedCount, buildOutput]);

  useEffect(() => {
    const modes = pipelineModesForBuildOutput(buildOutput);
    if (!modes.some((mode) => mode.id === generateMode)) {
      setGenerateMode(modes[0]?.id ?? "stage_1");
    }
  }, [buildOutput, generateMode]);

  useEffect(() => {
    if (!showsBuildOutput) return;
    if (!availableBuildOutputs.some((opt) => opt.id === buildOutput)) {
      setBuildOutput(availableBuildOutputs[0]?.id ?? "both");
    }
  }, [generateMode, showsBuildOutput, availableBuildOutputs, buildOutput]);

  function exitSelectMode() {
    setSelectMode(false);
    setSelected(new Set());
  }

  function toggleSelect(slug) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  }

  async function updateStatus(slug, status) {
    try {
      await api.updateJob(slug, { status });
      setApps((list) => list.map((a) => (a.slug === slug ? { ...a, status } : a)));
    } catch (e) {
      showToast(e.message, "error");
    }
  }

  async function updateTemplate(slug, cvTemplateId) {
    try {
      await api.updateJob(slug, { cv_template_id: cvTemplateId });
      setApps((list) => list.map((a) => (a.slug === slug ? { ...a, cv_template_id: cvTemplateId } : a)));
      showToast("CV template selected");
    } catch (e) {
      showToast(e.message, "error");
    }
  }

  async function runGenerate(slugs = null) {
    if (!canRunMode) {
      showToast("Selected jobs do not meet prerequisites for this generation mode", "error");
      return;
    }
    setGenerating(true);
    try {
      const result = await api.startGenerate({
        fromStage: activeMode.fromStage,
        onlyStage: activeMode.onlyStage,
        slugs,
        buildTargets: buildOutput,
      });
      if (result.alreadyRunning) {
        showToast("Generation already in progress");
      }
      pollGenerate();
    } catch (e) {
      setGenerating(false);
      showToast(e.message, "error");
    }
  }

  async function runGenerateSelected() {
    if (!selectedCount) return;
    await runGenerate([...selected]);
  }

  async function deleteSelected() {
    if (!selectedCount) return;
    const label =
      selectedCount === 1
        ? "Delete this application?"
        : `Delete ${selectedCount} applications?`;
    if (!window.confirm(label)) return;

    const slugs = [...selected];
    let failed = 0;
    for (const slug of slugs) {
      try {
        await api.deleteJob(slug);
      } catch {
        failed += 1;
      }
    }

    if (failed) {
      showToast(`Deleted ${slugs.length - failed} of ${slugs.length}`, failed === slugs.length ? "error" : "success");
    } else {
      showToast(selectedCount === 1 ? "Application deleted" : `${selectedCount} applications deleted`);
    }

    exitSelectMode();
    await load();
  }

  const sidebarFilters = [
    { key: "all", label: "All applications", count: counts.all },
    { key: "with_output", label: "Ready to review", count: counts.withOutput },
    ...STATUSES.map((s) => ({ key: s.value, label: s.label, count: counts[s.value] })),
  ];

  const stepLabel = genStatus?.step ? STEP_LABELS[genStatus.step] || genStatus.step : "";

  if (loading) {
    return (
      <div className="profile-page">
        <PageLoading label="Loading applications…" />
      </div>
    );
  }

  return (
    <div className="profile-page applications-page">
      <div className="profile-layout applications-layout">
        <main className="profile-main applications-main">
          <div className="profile-main-inner applications-main-inner">
            <div className="applications-page-header">
              <h1>Applications</h1>
              <p className="page-lead">Track generated documents and pipeline status for each role.</p>
            </div>

            {apps.length > 0 && (
              <div className={`applications-toolbar ${selectMode ? "selecting" : ""}`}>
                <div className="applications-toolbar-start">
                  {!selectMode ? (
                    <button type="button" className="md-outlined-btn" onClick={() => setSelectMode(true)}>
                      Select
                    </button>
                  ) : (
                    <>
                      <button type="button" className="md-outlined-btn" onClick={exitSelectMode}>
                        Cancel
                      </button>
                      <span className="applications-selection-count">
                        {selectedCount ? `${selectedCount} selected` : "Select applications"}
                      </span>
                    </>
                  )}
                </div>
                <div className="applications-toolbar-divider" aria-hidden="true" />
                <div className="applications-toolbar-controls">
                  <label className="applications-toolbar-field">
                    <span className="applications-toolbar-label">Mode</span>
                    <PipelineModeSelect
                      value={generateMode}
                      onChange={setGenerateMode}
                      buildOutput={buildOutput}
                    />
                  </label>
                  {showsBuildOutput && (
                    <label className="applications-toolbar-field">
                      <span className="applications-toolbar-label">Output</span>
                      <BuildOutputSelect
                        value={buildOutput}
                        onChange={setBuildOutput}
                        mode={activeMode}
                      />
                    </label>
                  )}
                </div>
                <div className="applications-toolbar-spacer" />
                <div className="applications-toolbar-actions">
                  {!selectMode ? (
                    <button
                      type="button"
                      className="md-filled-btn applications-toolbar-primary"
                      onClick={() => runGenerate(null)}
                      disabled={generating || !canRunMode}
                    >
                      <IconSpark />
                      {generating ? `Generating… ${stepLabel}` : "Generate all"}
                    </button>
                  ) : (
                    <>
                      <button
                        type="button"
                        className="md-filled-btn applications-toolbar-primary"
                        onClick={runGenerateSelected}
                        disabled={!selectedCount || generating || !canRunMode}
                      >
                        <IconSpark />
                        {generating ? "Generating…" : `Generate${selectedCount ? ` (${selectedCount})` : ""}`}
                      </button>
                      <button
                        type="button"
                        className="md-outlined-btn applications-toolbar-danger"
                        onClick={deleteSelected}
                        disabled={!selectedCount}
                      >
                        Delete{selectedCount ? ` (${selectedCount})` : ""}
                      </button>
                    </>
                  )}
                </div>
              </div>
            )}

            {generating && (
              <div className="generation-banner">
                <div className="generation-banner-track">
                  <div className="generation-banner-fill" />
                </div>
                <p>
                  Running pipeline
                  {stepLabel ? ` — ${stepLabel}` : "…"}
                </p>
              </div>
            )}

            {!apps.length ? (
              <EmptyState
                icon={IconApplications}
                title="No applications yet"
                description="Add jobs from the Jobs page, then generate tailored CVs and cover letters here."
                action={
                  <Link to="/jobs" className="md-outlined-btn">
                    Go to Jobs
                  </Link>
                }
              />
            ) : !filtered.length ? (
              <EmptyState
                icon={IconApplications}
                title="No matches"
                description="Try a different filter from the sidebar."
              />
            ) : (
              <div className="applications-grid">
                {filtered.map((app) => (
                  <ApplicationCard
                    key={app.slug}
                    app={app}
                    selectMode={selectMode}
                    selected={selected.has(app.slug)}
                    onToggleSelect={toggleSelect}
                    onUpdateStatus={updateStatus}
                    templates={templates}
                    defaultTemplateId={defaultTemplateId}
                    onUpdateTemplate={updateTemplate}
                  />
                ))}
              </div>
            )}
          </div>

          <GenerationLog />
        </main>

        <ResizableSidebar className="profile-sidebar applications-sidebar" storageKey="joblication.sidebar.applications">
          <nav className="profile-nav" aria-label="Filter applications">
            <p className="profile-nav-label">Filter</p>
            <ul>
              {sidebarFilters.map((item) => (
                <li key={item.key}>
                  <button
                    type="button"
                    className={`profile-nav-item filter-item ${filter === item.key ? "active" : ""}`}
                    onClick={() => setFilter(item.key)}
                  >
                    <span className="filter-label">{item.label}</span>
                    <span className="filter-count">{item.count}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="profile-sidebar-actions">
            <div className="applications-stats">
              <div className="stat-block">
                <span className="stat-value">{counts.all}</span>
                <span className="stat-label">Total</span>
              </div>
              <div className="stat-block">
                <span className="stat-value">{counts.withOutput}</span>
                <span className="stat-label">Generated</span>
              </div>
            </div>
          </div>
        </ResizableSidebar>
      </div>
    </div>
  );
}
