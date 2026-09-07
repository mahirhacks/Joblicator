import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api/client.js";
import { useToast } from "../components/Toast.jsx";
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
  stage_2: "CV — write & review",
  stage_3: "Letter — write & review",
  build: "Building PDFs",
  complete: "Complete",
  complete_with_issues: "Complete with issues",
  failed: "Failed",
};

const GENERATE_MODES = [
  { id: "both", label: "CV + Letter" },
  { id: "cv", label: "CV only" },
  { id: "letter", label: "Letter only" },
];

const PHASES = [
  { key: "stage_2", label: "CV" },
  { key: "stage_3", label: "Letter" },
  { key: "build", label: "PDF" },
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

function PipelineModeSelect({ value, onChange }) {
  return (
    <select
      className="ps-select applications-stage-select"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-label="Generation mode"
    >
      {GENERATE_MODES.map((mode) => (
        <option key={mode.id} value={mode.id}>
          {mode.label}
        </option>
      ))}
    </select>
  );
}

function PhaseChips({ phases }) {
  const data = phases || {};
  return (
    <div className="application-phases" aria-label="Pipeline phases">
      {PHASES.map((phase) => (
        <span key={phase.key} className={`application-phase-chip ${data[phase.key] ? "done" : "pending"}`}>
          {phase.label}
        </span>
      ))}
    </div>
  );
}

function pickGenerationOutcome(outcomes) {
  const terminal = new Set(["failed", "skipped_low_fit", "skipped_dependency"]);
  for (const stage of ["stage_2", "stage_3"]) {
    const outcome = outcomes?.[stage];
    if (outcome && terminal.has(outcome.status)) return outcome;
  }
  return outcomes?.stage_3 || outcomes?.stage_2;
}

function outcomeErrorText(outcome) {
  const errors = Array.isArray(outcome?.errors) ? outcome.errors.filter(Boolean) : [];
  const last = errors.length ? String(errors[errors.length - 1]) : "";
  const cleaned = last.replace(/^attempt \d+:\s*/i, "").trim();
  return cleaned || outcome?.reason || "";
}

function GenerationOutcome({ outcomes }) {
  const outcome = pickGenerationOutcome(outcomes);
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
  const errorText = outcomeErrorText(outcome);

  return (
    <div className={`application-generation-outcome ${warning ? "warning" : "failed"}`}>
      <strong>{labels[outcome.status] || outcome.status}</strong>
      {detail && <span>{detail}</span>}
      {errorText && <span>{errorText}</span>}
    </div>
  );
}

function queueRole(slug, queue) {
  if (!queue || !queue.total) return "";
  if (queue.slug === slug) return "active";
  if ((queue.failed || []).includes(slug)) return "failed";
  if ((queue.completed || []).includes(slug)) return "done";
  if ((queue.remaining || []).includes(slug)) return "waiting";
  return "";
}

function generationBannerText(genStatus, apps, stepLabel) {
  const queue = genStatus?.queue;
  const total = Number(queue?.total) || 0;
  const index = Number(queue?.index) || 0;
  const current = apps.find((app) => app.slug === queue?.slug);
  const name = current?.company || current?.title || queue?.slug || "";
  const jobPart = total ? `${Math.max(index, 0)}/${total}${name ? ` · ${name}` : ""}` : "";
  if (jobPart && stepLabel) return `${jobPart} — ${stepLabel}`;
  if (jobPart) return jobPart;
  if (stepLabel) return `Running pipeline — ${stepLabel}`;
  return "Running pipeline…";
}

function generationProgress(genStatus) {
  const queue = genStatus?.queue;
  const total = Number(queue?.total) || 0;
  if (!total) return 0;
  const completed = Array.isArray(queue?.completed) ? queue.completed.length : 0;
  const current = queue?.slug ? 0.35 : 0;
  return Math.min(100, Math.round(((completed + current) / total) * 100));
}

function ApplicationCard({
  app,
  selectMode,
  selected,
  queueRoleName,
  onToggleSelect,
  onUpdateStatus,
  templates,
  defaultTemplateId,
  onUpdateTemplate,
}) {
  function handleCardClick() {
    if (selectMode) onToggleSelect(app.slug);
  }

  const hint = {
    active: "Generating this role now…",
    waiting: "Queued — waiting for earlier jobs to finish.",
    failed: "This job failed; the queue continued with the next role.",
    done: "",
  }[queueRoleName] || (!app.phases?.build ? "Generate to create CV and cover letter for this role." : "");

  return (
    <article
      className={[
        "application-card",
        selectMode ? "selectable" : "",
        selected ? "is-selected" : "",
        queueRoleName === "active" ? "is-generating" : "",
        queueRoleName === "waiting" ? "is-queued" : "",
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
          <div className="application-card-heading">
            {app.company && <p className="application-card-company">{app.company}</p>}
            <h3>{app.title || app.slug}</h3>
          </div>
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
        </header>

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
          {hint && (
            <p className="application-hint">{hint}</p>
          )}
        </div>

        {!selectMode && (
          <footer className="application-card-footer">
            <Link
              to={`/review?slug=${encodeURIComponent(app.slug)}`}
              className="md-text-btn"
              onClick={(e) => e.stopPropagation()}
            >
              Open studio
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
  const [generateMode, setGenerateMode] = useState("both");
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

  const refreshApps = useCallback(async () => {
    try {
      const data = await api.listApplications();
      setApps(data.applications || []);
    } catch {
      /* keep the current list while the queue is running */
    }
  }, []);

  const pollGenerate = useCallback(async () => {
    try {
      const status = await api.generateStatus();
      setGenStatus(status);
      if (status.running) {
        await refreshApps();
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
  }, [load, refreshApps, showToast]);

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
    setGenerating(true);
    try {
      const result = await api.startGenerate({
        fromStage: generateMode === "letter" ? "stage_3" : "stage_2",
        slugs,
        buildTargets: generateMode,
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
  const bannerText = generationBannerText(genStatus, apps, stepLabel);
  const queueProgress = generationProgress(genStatus);
  const queueFraction = genStatus?.queue?.total
    ? `${Math.max(Number(genStatus.queue.index) || 0, 0)}/${genStatus.queue.total}`
    : "";

  if (loading) {
    return (
      <div className="profile-page">
        <PageLoading label="Loading applications…" />
      </div>
    );
  }

  return (
    <div className="profile-page split-panel-page applications-page">
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
                    />
                  </label>
                </div>
                <div className="applications-toolbar-spacer" />
                <div className="applications-toolbar-actions">
                  {!selectMode ? (
                    <button
                      type="button"
                      className="md-filled-btn applications-toolbar-primary"
                      onClick={() => runGenerate(null)}
                      disabled={generating}
                    >
                      <IconSpark />
                      {generating ? `Generating… ${queueFraction || stepLabel}` : "Generate all"}
                    </button>
                  ) : (
                    <>
                      <button
                        type="button"
                        className="md-filled-btn applications-toolbar-primary"
                        onClick={runGenerateSelected}
                        disabled={!selectedCount || generating}
                      >
                        <IconSpark />
                        {generating ? `Generating… ${queueFraction}` : `Generate${selectedCount ? ` (${selectedCount})` : ""}`}
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
                  <div
                    className="generation-banner-fill is-determinate"
                    style={{ width: `${queueProgress}%` }}
                  />
                </div>
                <p>{bannerText}</p>
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
                    queueRoleName={queueRole(app.slug, genStatus?.queue)}
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
