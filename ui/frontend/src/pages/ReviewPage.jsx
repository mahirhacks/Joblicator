import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { api } from "../api/client.js";
import { useToast } from "../components/Toast.jsx";
import ResizableSidebar from "../components/ResizableSidebar.jsx";

function findFile(files, pattern) {
  return (files || []).find((f) => f.toLowerCase().includes(pattern));
}

export default function ReviewPage() {
  const { showToast } = useToast();
  const [searchParams, setSearchParams] = useSearchParams();
  const [jobs, setJobs] = useState([]);
  const [slug, setSlug] = useState(searchParams.get("slug") || "");
  const [review, setReview] = useState(null);
  const [stage2Text, setStage2Text] = useState("");
  const [stage3Text, setStage3Text] = useState("");
  const [tab, setTab] = useState("preview");
  const [previewDoc, setPreviewDoc] = useState("cv");
  const [previewMode, setPreviewMode] = useState("html");
  const [saving, setSaving] = useState(false);
  const [htmlContent, setHtmlContent] = useState("");
  const [htmlDirty, setHtmlDirty] = useState(false);
  const [htmlLoading, setHtmlLoading] = useState(false);
  const [previewVersion, setPreviewVersion] = useState(0);
  const editorRef = useRef(null);

  const loadJobs = useCallback(async () => {
    try {
      const data = await api.listApplications();
      setJobs(data.applications || []);
      if (!slug && data.applications?.length) {
        setSlug(data.applications[0].slug);
      }
    } catch (e) {
      showToast(e.message, "error");
    }
  }, [showToast, slug]);

  const loadReview = useCallback(async () => {
    if (!slug) return;
    try {
      const data = await api.getReview(slug);
      setReview(data);
      setStage2Text(JSON.stringify(data.stage_2 || {}, null, 2));
      setStage3Text(JSON.stringify(data.stage_3 || {}, null, 2));
    } catch (e) {
      showToast(e.message, "error");
    }
  }, [slug, showToast]);

  const outputFolder = review?.output_folder || jobs.find((j) => j.slug === slug)?.output_folder;
  const files = review?.files?.length
    ? review.files
    : jobs.find((j) => j.slug === slug)?.files || [];

  const loadHtmlPreview = useCallback(async () => {
    if (!slug || previewMode !== "html") return;
    const doc = previewDoc === "cv" ? "cv" : "letter";
    setHtmlLoading(true);
    try {
      const data = await api.getReviewHtml(slug, doc);
      setHtmlContent(data.html || "");
      setHtmlDirty(false);
    } catch (e) {
      showToast(e.message, "error");
      setHtmlContent("");
    } finally {
      setHtmlLoading(false);
    }
  }, [slug, previewMode, previewDoc, showToast]);

  useEffect(() => {
    loadJobs();
  }, [loadJobs]);

  useEffect(() => {
    if (slug) {
      setSearchParams({ slug });
      loadReview();
    }
  }, [slug, loadReview, setSearchParams]);

  const cvHtml = findFile(files, "_cv.html");
  const cvPdf = findFile(files, "_cv.pdf");
  const letterHtml = findFile(files, "_cover_letter.html");
  const letterPdf = findFile(files, "_cover_letter.pdf");

  const previewFile = useMemo(() => {
    if (previewDoc === "cv") {
      return previewMode === "pdf" ? cvPdf : cvHtml;
    }
    return previewMode === "pdf" ? letterPdf : letterHtml;
  }, [previewDoc, previewMode, cvHtml, cvPdf, letterHtml, letterPdf]);

  const previewUrl =
    outputFolder && previewFile
      ? `${api.fileUrl(outputFolder, previewFile)}?v=${previewVersion}`
      : null;

  useEffect(() => {
    if (tab === "preview" && previewMode === "html" && outputFolder && previewFile) {
      loadHtmlPreview();
    }
  }, [tab, previewMode, previewDoc, slug, outputFolder, previewFile, loadHtmlPreview]);

  useEffect(() => {
    if (previewMode === "html" && editorRef.current && htmlContent && !htmlLoading) {
      if (editorRef.current.innerHTML !== htmlContent) {
        editorRef.current.innerHTML = htmlContent;
      }
    }
  }, [htmlContent, htmlLoading, previewMode]);

  async function saveEdits() {
    setSaving(true);
    try {
      if (tab === "preview" && previewMode === "html") {
        const html = editorRef.current?.innerHTML ?? htmlContent;
        await api.saveReviewHtml(slug, {
          doc: previewDoc === "cv" ? "cv" : "letter",
          html,
        });
        setHtmlContent(html);
        setHtmlDirty(false);
        setPreviewVersion((v) => v + 1);
        showToast("HTML saved and PDF updated");
        await loadJobs();
        await loadReview();
        return;
      }

      let stage_2;
      let stage_3;
      try {
        stage_2 = JSON.parse(stage2Text);
        stage_3 = JSON.parse(stage3Text);
      } catch (e) {
        throw new Error(`Invalid JSON: ${e.message}`);
      }
      await api.saveReview(slug, {
        app_key: review?.app_key,
        stage_2,
        stage_3,
      });
      showToast("Saved edits");
      await loadReview();
    } catch (e) {
      showToast(e.message, "error");
    } finally {
      setSaving(false);
    }
  }

  async function exportPdf() {
    setSaving(true);
    try {
      await api.saveReview(slug, {
        app_key: review?.app_key,
        stage_2: JSON.parse(stage2Text),
        stage_3: JSON.parse(stage3Text),
      });
      await api.rebuild(slug);
      showToast("PDFs rebuilt from JSON");
      await loadJobs();
      await loadReview();
      setTab("preview");
      setPreviewMode("pdf");
      setPreviewVersion((v) => v + 1);
    } catch (e) {
      showToast(e.message, "error");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="profile-page review-page">
      <div className="profile-layout review-layout">
        <main className="profile-main review-main">
          <div className="profile-main-inner review-main-inner">
            <div className="profile-section-head">
              <div>
                <h1>Review</h1>
                <p className="page-lead">Preview generated documents and fine-tune CV and cover letter content.</p>
              </div>
              <div className="header-actions">
                <select value={slug} onChange={(e) => setSlug(e.target.value)} className="ps-select">
                  {jobs.map((j) => (
                    <option key={j.slug} value={j.slug}>
                      {j.company ? `${j.company} — ${j.title || j.slug}` : j.title || j.slug}
                    </option>
                  ))}
                </select>
                <button type="button" className="md-outlined-btn" onClick={saveEdits} disabled={saving}>
                  Save edits
                </button>
                <button type="button" className="md-filled-btn" onClick={exportPdf} disabled={saving}>
                  {saving ? "Working…" : "Save & export PDF"}
                </button>
              </div>
            </div>

            <div className="review-tabs">
              <button type="button" className={tab === "preview" ? "active" : ""} onClick={() => setTab("preview")}>
                Preview
              </button>
              <button type="button" className={tab === "cv" ? "active" : ""} onClick={() => setTab("cv")}>
                CV JSON
              </button>
              <button type="button" className={tab === "letter" ? "active" : ""} onClick={() => setTab("letter")}>
                Letter JSON
              </button>
            </div>

            {tab === "preview" && (
              <div className="review-preview-panel">
                {!outputFolder && (
                  <p className="muted review-empty">
                    No generated files yet. Run generation from Applications, then return here.
                  </p>
                )}

                {outputFolder && (
                  <>
                    <div className="review-preview-toolbar">
                      <div className="review-preview-switch">
                        <button
                          type="button"
                          className={previewDoc === "cv" ? "active" : ""}
                          onClick={() => setPreviewDoc("cv")}
                        >
                          CV
                        </button>
                        <button
                          type="button"
                          className={previewDoc === "letter" ? "active" : ""}
                          onClick={() => setPreviewDoc("letter")}
                        >
                          Cover letter
                        </button>
                      </div>
                      <div className="review-preview-switch">
                        <button
                          type="button"
                          className={previewMode === "html" ? "active" : ""}
                          onClick={() => setPreviewMode("html")}
                          disabled={!(previewDoc === "cv" ? cvHtml : letterHtml)}
                        >
                          HTML
                        </button>
                        <button
                          type="button"
                          className={previewMode === "pdf" ? "active" : ""}
                          onClick={() => setPreviewMode("pdf")}
                          disabled={!(previewDoc === "cv" ? cvPdf : letterPdf)}
                        >
                          PDF
                        </button>
                      </div>
                      {previewMode === "html" && htmlDirty && (
                        <span className="review-html-dirty muted">Unsaved HTML edits</span>
                      )}
                      {previewUrl && previewMode === "pdf" && (
                        <a href={previewUrl} target="_blank" rel="noreferrer" className="md-text-btn">
                          Open in new tab
                        </a>
                      )}
                    </div>

                    {previewMode === "html" ? (
                      previewFile ? (
                        <div className="review-preview-frame-wrap">
                          {htmlLoading ? (
                            <p className="muted review-empty">Loading HTML…</p>
                          ) : (
                            <div
                              ref={editorRef}
                              className="review-preview-editor"
                              contentEditable
                              suppressContentEditableWarning
                              onInput={() => setHtmlDirty(true)}
                              aria-label={`${previewDoc} HTML editor`}
                            />
                          )}
                        </div>
                      ) : (
                        <p className="muted review-empty">HTML preview not available.</p>
                      )
                    ) : previewUrl ? (
                      <div className="review-preview-frame-wrap">
                        <iframe
                          key={previewUrl}
                          title={`${previewDoc} PDF preview`}
                          src={previewUrl}
                          className="review-preview-frame"
                        />
                      </div>
                    ) : (
                      <p className="muted review-empty">
                        PDF not found — run Save &amp; export PDF.
                      </p>
                    )}

                    <div className="review-download-row">
                      {cvPdf && (
                        <a href={api.fileUrl(outputFolder, cvPdf)} target="_blank" rel="noreferrer" className="md-outlined-btn">
                          Download CV PDF
                        </a>
                      )}
                      {letterPdf && (
                        <a
                          href={api.fileUrl(outputFolder, letterPdf)}
                          target="_blank"
                          rel="noreferrer"
                          className="md-outlined-btn"
                        >
                          Download letter PDF
                        </a>
                      )}
                    </div>
                    {tab === "preview" && previewMode === "html" && (
                      <p className="review-html-note muted">
                        Edit text directly in the HTML preview. Save &amp; export PDF rebuilds from JSON and may overwrite HTML edits.
                      </p>
                    )}
                  </>
                )}
              </div>
            )}

            {tab === "cv" && (
              <textarea className="code-area review-editor" value={stage2Text} onChange={(e) => setStage2Text(e.target.value)} />
            )}
            {tab === "letter" && (
              <textarea className="code-area review-editor" value={stage3Text} onChange={(e) => setStage3Text(e.target.value)} />
            )}
          </div>
        </main>

        <ResizableSidebar className="profile-sidebar review-sidebar" storageKey="joblication.sidebar.review">
          <nav className="profile-nav">
            <p className="profile-nav-label">Applications</p>
            <ul>
              {jobs.map((job) => (
                <li key={job.slug}>
                  <button
                    type="button"
                    className={`profile-nav-item ${slug === job.slug ? "active" : ""}`}
                    onClick={() => setSlug(job.slug)}
                  >
                    <span className="jobs-nav-title">{job.company || job.title || job.slug}</span>
                    <span className="jobs-nav-meta">
                      {job.company ? job.title || job.slug : job.has_output ? "Has output" : "No output yet"}
                    </span>
                  </button>
                </li>
              ))}
              {!jobs.length && <li className="jobs-empty">No applications</li>}
            </ul>
          </nav>
        </ResizableSidebar>
      </div>
    </div>
  );
}
