import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api/client.js";
import PageLoading from "../components/PageLoading.jsx";
import { IconExternal, IconFile, IconReview, IconSpark } from "../components/icons.jsx";
import { useToast } from "../components/Toast.jsx";

const EMPTY_RECOMMENDATION = {
  title: "",
  summary: "",
  strengths: [],
  rationale: "",
};

const STEP_LABELS = {
  starting: "Preparing your CV",
  stage_2: "Writing and reviewing your CV",
  build: "Building your CV files",
  complete: "CV complete",
  complete_with_issues: "CV complete with review notes",
  failed: "Generation failed",
};

export default function GeneralCvPage() {
  const { showToast } = useToast();
  const [loading, setLoading] = useState(true);
  const [recommending, setRecommending] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [recommendation, setRecommendation] = useState(EMPTY_RECOMMENDATION);
  const [provider, setProvider] = useState({ provider: "", model: "" });
  const [templates, setTemplates] = useState({});
  const [templateId, setTemplateId] = useState("cv_professional");
  const [output, setOutput] = useState(null);
  const [reviewReady, setReviewReady] = useState(false);
  const [generation, setGeneration] = useState({ running: false, step: "" });

  const load = useCallback(async ({ quiet = false } = {}) => {
    if (!quiet) setLoading(true);
    try {
      const [data, templateData] = await Promise.all([api.getGeneralCv(), api.listTemplates()]);
      setRecommendation({ ...EMPTY_RECOMMENDATION, ...(data.general_cv || {}) });
      setProvider({ provider: data.provider || "", model: data.model || "" });
      setOutput(data.output || null);
      setReviewReady(Boolean(data.review_ready));
      setGeneration(data.generation || { running: false, step: "" });
      setGenerating(Boolean(data.generation?.running));
      const allTemplates = { ...(templateData.catalog || {}), ...(templateData.custom || {}) };
      setTemplates(allTemplates);
      setTemplateId(data.cv_template_id || templateData.defaults?.cv || "cv_professional");
    } catch (error) {
      showToast(error.message, "error");
    } finally {
      if (!quiet) setLoading(false);
    }
  }, [showToast]);

  useEffect(() => {
    load();
  }, [load]);

  useEffect(() => {
    if (!generating) return undefined;
    const timer = window.setInterval(async () => {
      try {
        const status = await api.generateStatus();
        setGeneration(status);
        if (!status.running) {
          setGenerating(false);
          window.clearInterval(timer);
          await load({ quiet: true });
          if (status.error) showToast(status.error, "error");
          else showToast("Your General CV is ready.");
        }
      } catch (error) {
        setGenerating(false);
        window.clearInterval(timer);
        showToast(error.message, "error");
      }
    }, 1500);
    return () => window.clearInterval(timer);
  }, [generating, load, showToast]);

  const outputFiles = useMemo(
    () => (output?.files || []).filter((file) => /_cv\.(?:pdf|html)$/i.test(file)),
    [output]
  );

  async function recommend() {
    setRecommending(true);
    try {
      const data = await api.recommendGeneralCv();
      setRecommendation({ ...EMPTY_RECOMMENDATION, ...(data.general_cv || {}) });
      setProvider({ provider: data.provider || provider.provider, model: data.model || provider.model });
      showToast("Best-fit title and summary created.");
    } catch (error) {
      showToast(error.message, "error");
    } finally {
      setRecommending(false);
    }
  }

  async function generate() {
    if (!recommendation.title.trim() || !recommendation.summary.trim()) {
      showToast("Create or enter a title and summary first.", "error");
      return;
    }
    setGenerating(true);
    setGeneration({ running: true, step: "starting" });
    try {
      await api.generateGeneralCv({
        title: recommendation.title,
        summary: recommendation.summary,
        strengths: recommendation.strengths,
        cv_template_id: templateId,
      });
    } catch (error) {
      setGenerating(false);
      showToast(error.message, "error");
    }
  }

  if (loading) {
    return <PageLoading label="Loading General CV…" />;
  }

  const providerName = provider.provider === "openrouter" ? "OpenRouter" : "Ollama";
  const progressLabel = STEP_LABELS[generation.step] || "Generating your CV";

  return (
    <div className="general-cv-page">
      <div className="general-cv-inner">
        <header className="general-cv-header">
          <div>
            <p className="general-cv-eyebrow">Profile-powered document</p>
            <h1>General CV</h1>
            <p className="page-lead">
              Find your strongest professional positioning and build an employer-neutral CV from your saved profile.
            </p>
          </div>
          <div className="general-cv-provider">
            <span>AI provider</span>
            <strong>{providerName}</strong>
            {provider.model && <small>{provider.model}</small>}
            <Link to="/settings">Change in settings</Link>
          </div>
        </header>

        <section className="general-cv-card general-cv-intro-card">
          <div className="general-cv-card-copy">
            <span className="general-cv-step">01 · Positioning</span>
            <h2>Choose the title your profile supports best</h2>
            <p>The AI reviews your experience, projects, skills, education, and certifications. It will not use a job posting.</p>
          </div>
          <button
            type="button"
            className="md-filled-btn general-cv-recommend-btn"
            onClick={recommend}
            disabled={recommending || generating}
          >
            <IconSpark />
            {recommending ? "Analyzing profile…" : recommendation.title ? "Refresh recommendation" : "Find my best title"}
          </button>
        </section>

        <section className="general-cv-card general-cv-editor-card">
          <div className="general-cv-card-head">
            <div>
              <span className="general-cv-step">02 · Review</span>
              <h2>Title and professional summary</h2>
            </div>
            {recommendation.rationale && <p className="general-cv-rationale">{recommendation.rationale}</p>}
          </div>

          <label className="general-cv-field">
            <span>Recommended title</span>
            <input
              value={recommendation.title}
              onChange={(event) => setRecommendation((current) => ({ ...current, title: event.target.value }))}
              placeholder="Run the profile analysis or enter a title"
            />
          </label>

          <label className="general-cv-field">
            <span>Professional summary</span>
            <textarea
              rows={5}
              value={recommendation.summary}
              onChange={(event) => setRecommendation((current) => ({ ...current, summary: event.target.value }))}
              placeholder="Your employer-neutral CV summary will appear here"
            />
          </label>

          {recommendation.strengths?.length > 0 && (
            <div className="general-cv-strengths">
              <span>Strengths to emphasize</span>
              <div>
                {recommendation.strengths.map((strength) => <em key={strength}>{strength}</em>)}
              </div>
            </div>
          )}
        </section>

        <section className="general-cv-card general-cv-build-card">
          <div className="general-cv-card-copy">
            <span className="general-cv-step">03 · Build</span>
            <h2>Generate the CV</h2>
            <p>Runs profile-grounded tailoring, quality checks, and document rendering. No cover letter is generated.</p>
          </div>
          <label className="general-cv-template">
            <span>CV template</span>
            <select value={templateId} onChange={(event) => setTemplateId(event.target.value)}>
              {Object.entries(templates).map(([id, template]) => (
                <option key={id} value={id}>{template.name || id}</option>
              ))}
            </select>
          </label>
          <button
            type="button"
            className="md-filled-btn general-cv-generate-btn"
            onClick={generate}
            disabled={generating || recommending || !recommendation.title.trim() || !recommendation.summary.trim()}
          >
            <IconFile />
            {generating ? progressLabel : "Generate CV only"}
          </button>
        </section>

        {generating && (
          <div className="general-cv-progress" role="status">
            <span />
            <p>{progressLabel}</p>
          </div>
        )}

        {(reviewReady || outputFiles.length > 0) && (
          <section className="general-cv-card general-cv-output-card">
            <div>
              <span className="general-cv-step">Ready</span>
              <h2>Your General CV</h2>
              <p>Edit the draft in Review and rebuild its PDF. Existing generated files appear here when available.</p>
            </div>
            <div className="general-cv-output-actions">
              <Link className="md-outlined-btn" to="/review?slug=general_cv">
                <IconReview />
                Edit in Review
              </Link>
              {outputFiles.map((file) => (
                <a
                  key={file}
                  className={file.toLowerCase().endsWith(".pdf") ? "md-filled-btn" : "md-outlined-btn"}
                  href={api.fileUrl(output.folder, file)}
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconExternal />
                  {file.toLowerCase().endsWith(".pdf") ? "Open PDF" : "Open HTML"}
                </a>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
