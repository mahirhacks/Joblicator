import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { api } from "../api/client.js";
import DocumentInspector from "../components/review/DocumentInspector.jsx";
import DocumentPreview from "../components/review/DocumentPreview.jsx";
import { useToast } from "../components/Toast.jsx";

const CV_SECTIONS = [
  ["summary", "Professional summary"],
  ["skills", "Core skills"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["volunteer", "Volunteer experience"],
  ["education", "Education"],
  ["certifications", "Certifications"],
  ["achievements", "Achievements"],
  ["additional", "Additional info"],
];

const LETTER_SECTIONS = [
  ["details", "Letter details"],
  ["opening", "Opening"],
  ["body", "Evidence"],
  ["closing", "Closing"],
  ["signature", "Signature"],
];

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function serialize(value) {
  return JSON.stringify(value);
}

function valuesOf(value) {
  if (Array.isArray(value)) return value;
  if (value && typeof value === "object") return Object.values(value);
  return [];
}

function wordCount(value) {
  return String(value || "").trim().split(/\s+/).filter(Boolean).length;
}

function findFile(files, pattern) {
  return (files || []).find((file) => file.toLowerCase().includes(pattern));
}

function Icon({ children }) {
  return <svg viewBox="0 0 18 18" fill="none" aria-hidden="true">{children}</svg>;
}

function ToolbarIconButton({ label, onClick, disabled = false, children, testId }) {
  return (
    <button
      type="button"
      className="review-toolbar-icon-button"
      aria-label={label}
      title={label}
      onClick={onClick}
      disabled={disabled}
      data-testid={testId}
    >
      {children}
    </button>
  );
}

function cvHealth(data) {
  if (!data) return { passed: 0, total: 5, words: 0, checks: [] };
  const summaryWords = wordCount(data.executive_summary);
  const skills = Object.values(data.skills || {}).flatMap((items) => valuesOf(items)).filter(Boolean);
  const experience = valuesOf(data.work_experience);
  const bullets = experience.flatMap((entry) => valuesOf(entry?.points)).filter(Boolean);
  const conciseBullets = bullets.length > 0 && bullets.every((bullet) => {
    const count = wordCount(bullet);
    return count >= 6 && count <= 40;
  });
  const checks = [
    { ok: summaryWords >= 30 && summaryWords <= 90, label: "Summary is 30-90 words" },
    { ok: skills.length >= 8, label: "At least 8 searchable skills" },
    { ok: experience.length > 0, label: "Relevant experience is present" },
    { ok: conciseBullets, label: "Bullets are concise and scannable" },
    { ok: Boolean(data.role_title), label: "Target role is explicit" },
  ];
  const words = summaryWords
    + bullets.reduce((total, item) => total + wordCount(item), 0)
    + valuesOf(data.projects).reduce((total, item) => total + wordCount(item?.description), 0);
  return { passed: checks.filter((check) => check.ok).length, total: checks.length, words, checks };
}

function letterHealth(data) {
  if (!data) return { passed: 0, total: 5, words: 0, checks: [] };
  const paragraphs = [data.opening_paragraph, ...valuesOf(data.body_paragraphs), data.closing_paragraph].filter(Boolean);
  const words = paragraphs.reduce((total, paragraph) => total + wordCount(paragraph), 0);
  const bodyCount = valuesOf(data.body_paragraphs).filter(Boolean).length;
  const prose = paragraphs.join(" ").toLowerCase();
  const banned = ["i want to be upfront", "lack of experience", "i am writing to apply", "perfect fit"];
  const checks = [
    { ok: words >= 220 && words <= 450, label: "Letter is 220-450 words" },
    { ok: bodyCount >= 2 && bodyCount <= 3, label: "Two or three evidence paragraphs" },
    { ok: Boolean(data.company_name && data.role_title), label: "Company and role are specific" },
    { ok: !banned.some((phrase) => prose.includes(phrase)), label: "No weak or generic phrases" },
    { ok: Boolean(data.sign_off && data.closing_paragraph), label: "Complete closing and signature" },
  ];
  return { passed: checks.filter((check) => check.ok).length, total: checks.length, words, checks };
}

function HealthSummary({ health, label }) {
  return (
    <div className="review-health-summary">
      <div className="review-health-score">
        <span>{health.passed}/{health.total}</span>
        <div>
          <strong>{label}</strong>
          <small>{health.words} content words</small>
        </div>
      </div>
      <div className="review-health-checks">
        {health.checks.map((check) => (
          <div key={check.label} className={check.ok ? "passed" : "attention"}>
            <span>{check.ok ? "✓" : "·"}</span>
            {check.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ReviewPage() {
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [jobs, setJobs] = useState([]);
  const [slug, setSlug] = useState(searchParams.get("slug") || "");
  const [review, setReview] = useState(null);
  const [draft, setDraft] = useState(null);
  const [documentType, setDocumentType] = useState("cv");
  const [activeSection, setActiveSection] = useState("summary");
  const [canvasMode, setCanvasMode] = useState("live");
  const [zoom, setZoom] = useState(() => (typeof window !== "undefined" && window.innerWidth <= 1180 ? 60 : 72));
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [exporting, setExporting] = useState(false);
  const [saveStatus, setSaveStatus] = useState("saved");
  const [previewVersion, setPreviewVersion] = useState(0);
  const [autosave, setAutosave] = useState(() => {
    try {
      return localStorage.getItem("joblication.editor.autosave") !== "off";
    } catch {
      return true;
    }
  });

  const historyRef = useRef([]);
  const historyIndexRef = useRef(-1);
  const lastSavedRef = useRef("");
  const saveQueueRef = useRef(Promise.resolve());

  const resetHistory = useCallback((nextDraft) => {
    const snapshot = clone(nextDraft);
    historyRef.current = [snapshot];
    historyIndexRef.current = 0;
    setDraft(snapshot);
    lastSavedRef.current = serialize(snapshot);
    setSaveStatus("saved");
  }, []);

  const loadJobs = useCallback(async () => {
    try {
      const data = await api.listApplications();
      const applications = data.applications || [];
      setJobs(applications);
      setSlug((current) => current || applications[0]?.slug || "");
    } catch (error) {
      showToast(error.message, "error");
    }
  }, [showToast]);

  const loadReview = useCallback(async (nextSlug) => {
    if (!nextSlug) return;
    setLoading(true);
    try {
      const data = await api.getReview(nextSlug);
      setReview(data);
      resetHistory({
        stage2: data.stage_2 || {},
        stage3: data.stage_3 || {},
      });
    } catch (error) {
      setReview(null);
      setDraft(null);
      showToast(error.message, "error");
    } finally {
      setLoading(false);
    }
  }, [resetHistory, showToast]);

  useEffect(() => {
    loadJobs();
  }, [loadJobs]);

  useEffect(() => {
    if (!slug) return;
    setSearchParams({ slug }, { replace: true });
    loadReview(slug);
  }, [slug, loadReview, setSearchParams]);

  useEffect(() => {
    try {
      localStorage.setItem("joblication.editor.autosave", autosave ? "on" : "off");
    } catch {
      /* local storage is optional */
    }
  }, [autosave]);

  const serializedDraft = draft ? serialize(draft) : "";
  const dirty = Boolean(draft && serializedDraft !== lastSavedRef.current);
  const historyCurrent = historyRef.current[historyIndexRef.current];
  const hasUncheckpointedChanges = Boolean(draft && historyCurrent && serializedDraft !== serialize(historyCurrent));
  const canUndo = hasUncheckpointedChanges || historyIndexRef.current > 0;
  const canRedo = !hasUncheckpointedChanges && historyIndexRef.current < historyRef.current.length - 1;

  const checkpointDraft = useCallback(() => {
    if (!draft) return;
    const current = historyRef.current[historyIndexRef.current];
    if (current && serialize(current) === serialize(draft)) return;
    historyRef.current = historyRef.current.slice(0, historyIndexRef.current + 1);
    historyRef.current.push(clone(draft));
    historyIndexRef.current = historyRef.current.length - 1;
    setDraft((value) => value ? clone(value) : value);
  }, [draft]);

  const setCurrentDocument = useCallback((nextData, checkpoint = false) => {
    setDraft((current) => {
      if (!current) return current;
      const next = {
        ...current,
        [documentType === "cv" ? "stage2" : "stage3"]: nextData,
      };
      if (checkpoint) {
        historyRef.current = historyRef.current.slice(0, historyIndexRef.current + 1);
        historyRef.current.push(clone(next));
        historyIndexRef.current = historyRef.current.length - 1;
      }
      return next;
    });
    setSaveStatus("unsaved");
  }, [documentType]);

  const undo = useCallback(() => {
    if (!draft || !canUndo) return;
    if (hasUncheckpointedChanges) {
      historyRef.current = historyRef.current.slice(0, historyIndexRef.current + 1);
      historyRef.current.push(clone(draft));
      historyIndexRef.current = historyRef.current.length - 1;
    }
    historyIndexRef.current -= 1;
    setDraft(clone(historyRef.current[historyIndexRef.current]));
    setSaveStatus("unsaved");
  }, [canUndo, draft, hasUncheckpointedChanges]);

  const redo = useCallback(() => {
    if (!canRedo) return;
    historyIndexRef.current += 1;
    setDraft(clone(historyRef.current[historyIndexRef.current]));
    setSaveStatus("unsaved");
  }, [canRedo]);

  useEffect(() => {
    function onKeyDown(event) {
      const target = event.target;
      const isEditing = target instanceof HTMLInputElement
        || target instanceof HTMLTextAreaElement
        || target?.isContentEditable;
      if (isEditing || !(event.ctrlKey || event.metaKey)) return;
      if (event.key.toLowerCase() === "z" && !event.shiftKey) {
        event.preventDefault();
        undo();
      }
      if ((event.key.toLowerCase() === "z" && event.shiftKey) || event.key.toLowerCase() === "y") {
        event.preventDefault();
        redo();
      }
      if (event.key.toLowerCase() === "s") {
        event.preventDefault();
        void persistDraft({ notify: true });
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  useEffect(() => {
    function beforeUnload(event) {
      if (!dirty) return;
      event.preventDefault();
      event.returnValue = "";
    }
    window.addEventListener("beforeunload", beforeUnload);
    return () => window.removeEventListener("beforeunload", beforeUnload);
  }, [dirty]);

  const persistDraft = useCallback(({ notify = false } = {}) => {
    if (!draft || !slug || !review?.app_key) return Promise.resolve(false);
    const snapshot = clone(draft);
    const snapshotSerialized = serialize(snapshot);

    const run = async () => {
      setSaving(true);
      setSaveStatus("saving");
      try {
        await api.saveReview(slug, {
          app_key: review.app_key,
          stage_2: snapshot.stage2,
          stage_3: snapshot.stage3,
        });
        lastSavedRef.current = snapshotSerialized;
        setSaveStatus("saved");
        if (notify) showToast("Document changes saved");
        return true;
      } catch (error) {
        setSaveStatus("error");
        showToast(error.message, "error");
        return false;
      } finally {
        setSaving(false);
      }
    };

    saveQueueRef.current = saveQueueRef.current.then(run, run);
    return saveQueueRef.current;
  }, [draft, review?.app_key, showToast, slug]);

  useEffect(() => {
    if (!autosave || !dirty || !review?.app_key || saving || exporting) return undefined;
    setSaveStatus("unsaved");
    const timer = window.setTimeout(() => {
      void persistDraft();
    }, 1600);
    return () => window.clearTimeout(timer);
  }, [autosave, dirty, exporting, persistDraft, review?.app_key, saving]);

  async function exportPdf() {
    if (!draft || !review?.app_key) return;
    checkpointDraft();
    setExporting(true);
    try {
      const saved = await persistDraft();
      if (!saved) return;
      await api.rebuild(slug, { build_targets: "both" });
      const refreshed = await api.getReview(slug);
      setReview(refreshed);
      setPreviewVersion((version) => version + 1);
      setCanvasMode("pdf");
      showToast("CV and cover letter PDFs are ready");
      await loadJobs();
    } catch (error) {
      showToast(error.message, "error");
    } finally {
      setExporting(false);
    }
  }

  async function changeApplication(nextSlug) {
    if (nextSlug === slug) return;
    if (dirty) await persistDraft();
    setSlug(nextSlug);
  }

  function changeDocument(nextType) {
    checkpointDraft();
    setDocumentType(nextType);
    setActiveSection(nextType === "cv" ? "summary" : "details");
    setCanvasMode("live");
  }

  function selectSection(section) {
    if (section === "profile") {
      navigate("/profile");
      return;
    }
    setActiveSection(section);
    setCanvasMode("live");
  }

  const currentData = documentType === "cv" ? draft?.stage2 : draft?.stage3;
  const generationOutcome = currentData?._generation;
  const generationUnavailable = ["failed", "skipped_low_fit", "skipped_dependency"].includes(generationOutcome?.status);
  const templateLayout = review?.cv_template?.layout;
  const sections = documentType === "cv"
    ? (templateLayout?.sections || CV_SECTIONS.map(([id, label]) => ({ id, label, visible: true })))
        .filter((component) => component.visible !== false && component.id !== "contact")
        .map((component) => [component.id, component.label])
    : LETTER_SECTIONS;
  const health = useMemo(
    () => documentType === "cv" ? cvHealth(currentData) : letterHealth(currentData),
    [currentData, documentType]
  );
  const outputFolder = review?.output_folder || jobs.find((job) => job.slug === slug)?.output_folder;
  const files = review?.files?.length ? review.files : jobs.find((job) => job.slug === slug)?.files || [];
  const pdfFile = documentType === "cv"
    ? findFile(files, "_cv.pdf")
    : findFile(files, "_cover_letter.pdf");
  const pdfUrl = outputFolder && pdfFile
    ? `${api.fileUrl(outputFolder, pdfFile)}?v=${previewVersion}`
    : null;
  const statusLabel = saveStatus === "saving"
    ? "Saving..."
    : saveStatus === "error"
      ? "Save failed"
      : dirty
        ? autosave ? "Unsaved - autosave on" : "Unsaved changes"
        : "All changes saved";

  if (loading && !draft) {
    return <div className="review-studio-loading">Loading document studio...</div>;
  }

  return (
    <div className="review-studio" data-testid="review-studio">
      <header className="review-studio-topbar">
        <div className="review-topbar-context">
          <span className="review-studio-mark">J</span>
          <div className="review-file-context">
            <span>Application studio</span>
            <select
              value={slug}
              onChange={(event) => void changeApplication(event.target.value)}
              aria-label="Select application"
              data-testid="application-select"
            >
              {jobs.map((job) => (
                <option key={job.slug} value={job.slug}>
                  {job.company ? `${job.company} - ${job.title || job.slug}` : job.title || job.slug}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="review-topbar-center" role="tablist" aria-label="Document type">
          <button
            type="button"
            className={documentType === "cv" ? "active" : ""}
            onClick={() => changeDocument("cv")}
            role="tab"
            aria-selected={documentType === "cv"}
            data-testid="cv-tab"
          >
            CV
          </button>
          <button
            type="button"
            className={documentType === "letter" ? "active" : ""}
            onClick={() => changeDocument("letter")}
            role="tab"
            aria-selected={documentType === "letter"}
            data-testid="letter-tab"
          >
            Cover letter
          </button>
        </div>

        <div className="review-topbar-actions">
          <div className={`review-save-state ${saveStatus}`}>
            <span />
            {statusLabel}
          </div>
          <div className="review-toolbar-divider" />
          <ToolbarIconButton label="Undo" onClick={undo} disabled={!canUndo} testId="undo-button">
            <Icon><path d="M7 5 3.5 8.5 7 12M4 8.5h6a4 4 0 0 1 4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></Icon>
          </ToolbarIconButton>
          <ToolbarIconButton label="Redo" onClick={redo} disabled={!canRedo} testId="redo-button">
            <Icon><path d="m11 5 3.5 3.5L11 12m3-3.5H8a4 4 0 0 0-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></Icon>
          </ToolbarIconButton>
          <button
            type="button"
            className="review-save-button"
            onClick={() => void persistDraft({ notify: true })}
            disabled={saving || !review?.app_key}
          >
            Save
          </button>
          <button
            type="button"
            className="review-export-button"
            onClick={() => void exportPdf()}
            disabled={exporting || saving || !review?.app_key}
            data-testid="export-button"
          >
            <Icon><path d="M9 2.5v8m0 0 3-3m-3 3-3-3M3.5 12v2h11v-2" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" /></Icon>
            {exporting ? "Building..." : "Export PDFs"}
          </button>
        </div>
      </header>

      {!review?.app_key ? (
        <div className="review-studio-empty">
          <div className="review-empty-icon">
            <Icon><path d="M5 2.5h5l3 3V15H5zM10 2.5v3h3M7 9h4M7 12h4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" /></Icon>
          </div>
          <h1>No generated draft yet</h1>
          <p>Generate this application first, then return here to refine both documents.</p>
          <Link to="/applications" className="review-empty-action">Open applications</Link>
        </div>
      ) : (
        <div className="review-studio-workspace">
          <aside className="review-outline-panel">
            <div className="review-panel-title">Documents</div>
            <div className="review-document-list">
              <button type="button" className={documentType === "cv" ? "active" : ""} onClick={() => changeDocument("cv")}>
                <span className="review-document-icon">
                  <Icon><path d="M4 2.5h6l4 4V15H4zM10 2.5v4h4M6.5 10h5M6.5 12.5h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></Icon>
                </span>
                <span><strong>Curriculum vitae</strong><small>ATS-focused layout</small></span>
              </button>
              <button type="button" className={documentType === "letter" ? "active" : ""} onClick={() => changeDocument("letter")}>
                <span className="review-document-icon">
                  <Icon><path d="M3 4h12v10H3zM3.5 5l5.5 4 5.5-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></Icon>
                </span>
                <span><strong>Cover letter</strong><small>Evidence-led narrative</small></span>
              </button>
            </div>

            <div className="review-panel-title review-sections-title">Sections</div>
            <nav className="review-section-list" aria-label={`${documentType} sections`}>
              {sections.map(([id, label], index) => (
                <button
                  type="button"
                  key={id}
                  className={activeSection === id ? "active" : ""}
                  onClick={() => selectSection(id)}
                  data-section-id={id}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {label}
                </button>
              ))}
            </nav>

            <div className="review-outline-footer">
              <Link to="/profile">
                <Icon><circle cx="9" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.2" /><path d="M4.5 15c0-3 2-5 4.5-5s4.5 2 4.5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></Icon>
                Edit contact & education
              </Link>
              <HealthSummary health={health} label={documentType === "cv" ? "ATS checks" : "Letter checks"} />
            </div>
          </aside>

          <main className="review-canvas-panel">
            <div className="review-canvas-toolbar">
              <div className="review-canvas-mode" role="group" aria-label="Preview mode">
                <button type="button" className={canvasMode === "live" ? "active" : ""} onClick={() => setCanvasMode("live")}>Live draft</button>
                <button type="button" className={canvasMode === "pdf" ? "active" : ""} onClick={() => setCanvasMode("pdf")} disabled={!pdfUrl}>Generated PDF</button>
              </div>
              <div className="review-zoom-controls">
                <ToolbarIconButton label="Zoom out" onClick={() => setZoom((value) => Math.max(50, value - 5))} disabled={canvasMode === "pdf" || zoom <= 50}>
                  <Icon><path d="M4 9h10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></Icon>
                </ToolbarIconButton>
                <button type="button" onClick={() => setZoom(72)} disabled={canvasMode === "pdf"}>{zoom}%</button>
                <ToolbarIconButton label="Zoom in" onClick={() => setZoom((value) => Math.min(120, value + 5))} disabled={canvasMode === "pdf" || zoom >= 120}>
                  <Icon><path d="M4 9h10M9 4v10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></Icon>
                </ToolbarIconButton>
              </div>
              {pdfUrl && (
                <a href={pdfUrl} target="_blank" rel="noreferrer" className="review-open-pdf">
                  Open PDF
                  <Icon><path d="M7 4h7v7M14 4l-8 8M4 7v7h7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></Icon>
                </a>
              )}
            </div>

            <div className="review-canvas-scroll" data-testid="document-canvas">
              {canvasMode === "live" && generationUnavailable ? (
                <div className="review-generation-unavailable">
                  <div className="review-empty-icon">
                    <Icon><path d="M9 3v7M9 13.5h.01M2.8 14.5h12.4L9 2.5z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></Icon>
                  </div>
                  <h2>{generationOutcome.status === "skipped_low_fit" ? "Document not generated" : "Document generation needs attention"}</h2>
                  <p>{generationOutcome.reason || "This document could not be completed after the configured attempts."}</p>
                  <span>
                    {generationOutcome.fit_score != null ? `Profile fit ${generationOutcome.fit_score}/10 · ` : ""}
                    {generationOutcome.attempts || 0} attempt{generationOutcome.attempts === 1 ? "" : "s"}
                  </span>
                </div>
              ) : canvasMode === "live" ? (
                <div
                  className="review-canvas-stage"
                  style={{
                    "--document-zoom": zoom / 100,
                    width: `${(documentType === "cv" ? templateLayout?.pageWidth || 794 : 794) * (zoom / 100)}px`,
                    minHeight: `${(documentType === "cv" ? templateLayout?.pageHeight || 1123 : 1123) * (zoom / 100)}px`,
                  }}
                >
                  <DocumentPreview
                    documentType={documentType}
                    data={currentData}
                    identity={review?.identity || {}}
                    activeSection={activeSection}
                    onSelect={selectSection}
                    templateLayout={templateLayout}
                  />
                </div>
              ) : pdfUrl ? (
                <iframe key={pdfUrl} title={`${documentType} generated PDF`} src={pdfUrl} className="review-pdf-frame" />
              ) : (
                <div className="review-canvas-empty">Export PDFs to create the generated preview.</div>
              )}
            </div>
          </main>

          <aside className="review-inspector-panel">
            <DocumentInspector
              documentType={documentType}
              data={currentData}
              activeSection={activeSection}
              onChange={setCurrentDocument}
              onCheckpoint={checkpointDraft}
            />
            <footer className="review-inspector-footer">
              <label className="review-autosave-toggle">
                <input type="checkbox" checked={autosave} onChange={(event) => setAutosave(event.target.checked)} />
                <span />
                Autosave
              </label>
              <span>{statusLabel}</span>
            </footer>
          </aside>
        </div>
      )}
    </div>
  );
}
