import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api/client.js";
import { useToast } from "../components/Toast.jsx";
import ResizableSidebar from "../components/ResizableSidebar.jsx";
import PageLoading, { EmptyState } from "../components/PageLoading.jsx";
import { IconApplications, IconExternal, IconFile, IconSpark } from "../components/icons.jsx";

const STATUSES = [
  { value: "unsubmitted", label: "Unsubmitted" },
  { value: "submitted", label: "Submitted" },
  { value: "interview", label: "Interview" },
  { value: "accepted", label: "Accepted" },
  { value: "rejected", label: "Rejected" },
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

function ApplicationCard({
  app,
  selectMode,
  selected,
  onToggleSelect,
  onUpdateStatus,
}) {
  function handleCardClick() {
    if (selectMode) onToggleSelect(app.slug);
  }

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
          <p className="application-card-slug">{app.slug}</p>
        </header>

        <div className="application-card-meta">
          <span className={`output-badge ${app.has_output ? "ready" : "pending"}`}>
            {app.has_output ? "Documents ready" : "Awaiting generation"}
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
          {app.has_output ? (
            <ul className="application-files">
              {app.files.map((file) => (
                <li key={file}>
                  <a
                    href={api.fileUrl(app.output_folder, file)}
                    target="_blank"
                    rel="noreferrer"
                    className="application-file-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <IconFile />
                    <span>{file.replace(/.*\//, "")}</span>
                    <IconExternal />
                  </a>
                </li>
              ))}
            </ul>
          ) : (
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

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const data = await api.listApplications();
      setApps(data.applications || []);
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
        else if (status.step === "complete") {
          showToast("Generation complete");
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

  async function runGenerate() {
    setGenerating(true);
    try {
      await api.startGenerate();
      pollGenerate();
    } catch (e) {
      setGenerating(false);
      showToast(e.message, "error");
    }
  }

  async function runGenerateSelected() {
    if (!selectedCount) return;
    showToast(
      selectedCount === 1
        ? "Starting generation for 1 application"
        : `Starting generation (${selectedCount} selected)`
    );
    await runGenerate();
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

  if (loading) {
    return (
      <div className="profile-page">
        <PageLoading label="Loading applications…" />
      </div>
    );
  }

  return (
    <div className="profile-page applications-page">
      <div className="profile-layout">
        <main className="profile-main">
          <div className="profile-main-inner applications-main-inner">
            <div className="applications-page-header">
              <h1>Applications</h1>
              <p className="page-lead">Track generated documents and pipeline status for each role.</p>
            </div>

            {apps.length > 0 && (
              <div className={`applications-toolbar ${selectMode ? "selecting" : ""}`}>
                {!selectMode ? (
                  <>
                    <button type="button" className="md-outlined-btn" onClick={() => setSelectMode(true)}>
                      Select
                    </button>
                    <div className="applications-toolbar-spacer" />
                    <button
                      type="button"
                      className="md-filled-btn applications-toolbar-primary"
                      onClick={runGenerate}
                      disabled={generating}
                    >
                      <IconSpark />
                      {generating ? `Generating… ${genStatus?.step || ""}` : "Generate all"}
                    </button>
                  </>
                ) : (
                  <>
                    <button type="button" className="md-outlined-btn" onClick={exitSelectMode}>
                      Cancel
                    </button>
                    <span className="applications-selection-count">
                      {selectedCount ? `${selectedCount} selected` : "Select applications"}
                    </span>
                    <div className="applications-toolbar-spacer" />
                    <button
                      type="button"
                      className="md-filled-btn applications-toolbar-primary"
                      onClick={runGenerateSelected}
                      disabled={!selectedCount || generating}
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
            )}

            {generating && (
              <div className="generation-banner">
                <div className="generation-banner-track">
                  <div className="generation-banner-fill" />
                </div>
                <p>
                  Running pipeline
                  {genStatus?.step ? ` — ${genStatus.step}` : "…"}
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
