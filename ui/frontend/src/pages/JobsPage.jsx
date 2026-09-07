import { useCallback, useEffect, useState } from "react";
import { api } from "../api/client.js";
import { useToast } from "../components/Toast.jsx";
import ResizableSidebar from "../components/ResizableSidebar.jsx";
import { FieldGrid, TextField } from "../components/profile/ProfileFields.jsx";

const EMPTY_JOB = {
  company: "",
  title: "",
  location: "",
  url: "",
  about: "",
  description: "",
};

function draftFromJob(data) {
  if (!data) return { ...EMPTY_JOB };
  return {
    company: data.company || "",
    title: data.title || "",
    location: data.location || "",
    url: data.url || "",
    about: data.about || "",
    description: data.description || "",
  };
}

function JobForm({ draft, onChange }) {
  return (
    <>
      <FieldGrid>
        <TextField
          id="job_company"
          label="Company"
          value={draft.company}
          onChange={(v) => onChange({ ...draft, company: v })}
        />
        <TextField
          id="job_title"
          label="Job title"
          value={draft.title}
          onChange={(v) => onChange({ ...draft, title: v })}
        />
        <TextField
          id="job_location"
          label="Location"
          value={draft.location}
          onChange={(v) => onChange({ ...draft, location: v })}
        />
        <TextField
          id="job_url"
          label="Job URL"
          value={draft.url}
          onChange={(v) => onChange({ ...draft, url: v })}
        />
      </FieldGrid>
      <div className="md-field-span-wrap">
        <TextField
          id="job_about"
          label="About"
          value={draft.about}
          onChange={(v) => onChange({ ...draft, about: v })}
          multiline
          rows={4}
          hint="Company or role overview."
        />
      </div>
      <div className="md-field-span-wrap">
        <TextField
          id="job_description"
          label="Description"
          value={draft.description}
          onChange={(v) => onChange({ ...draft, description: v })}
          multiline
          rows={10}
          hint="Requirements, responsibilities, qualifications…"
        />
      </div>
    </>
  );
}

export default function JobsPage() {
  const { showToast } = useToast();
  const [jobs, setJobs] = useState([]);
  const [selectedSlug, setSelectedSlug] = useState(null);
  const [draft, setDraft] = useState(EMPTY_JOB);
  const [busy, setBusy] = useState(false);

  const loadJobs = useCallback(async () => {
    try {
      const data = await api.listJobs();
      setJobs(data.applications || []);
    } catch (e) {
      showToast(e.message, "error");
    }
  }, [showToast]);

  useEffect(() => {
    loadJobs();
  }, [loadJobs]);

  async function loadJobDraft(slug, listedJob) {
    if (listedJob) {
      setDraft(draftFromJob(listedJob));
    }
    const data = await api.getJob(slug);
    setDraft(draftFromJob(data));
    return data;
  }

  async function selectJob(slug) {
    setSelectedSlug(slug);
    try {
      const listed = jobs.find((job) => job.slug === slug);
      await loadJobDraft(slug, listed);
    } catch (e) {
      showToast(e.message, "error");
    }
  }

  async function saveJob() {
    if (!draft.company.trim() || !draft.title.trim()) {
      showToast("Company and title are required", "error");
      return;
    }
    if (!draft.about.trim() && !draft.description.trim()) {
      showToast("About or description is required", "error");
      return;
    }
    setBusy(true);
    try {
      let savedSlug = selectedSlug;
      if (selectedSlug) {
        const updated = await api.updateJob(selectedSlug, draft);
        savedSlug = updated.slug || selectedSlug;
        showToast("Job updated");
      } else {
        const res = await api.createJob(draft);
        savedSlug = res.slug;
        setSelectedSlug(res.slug);
        showToast("Job saved");
      }
      await loadJobs();
      if (savedSlug) {
        await loadJobDraft(savedSlug);
      }
    } catch (e) {
      showToast(e.message, "error");
    } finally {
      setBusy(false);
    }
  }

  async function deleteJob() {
    if (!selectedSlug || !window.confirm("Delete this job?")) return;
    try {
      await api.deleteJob(selectedSlug);
      setSelectedSlug(null);
      setDraft(EMPTY_JOB);
      await loadJobs();
      showToast("Job deleted");
    } catch (e) {
      showToast(e.message, "error");
    }
  }

  function newJob() {
    setSelectedSlug(null);
    setDraft(EMPTY_JOB);
  }

  return (
    <div className="profile-page split-panel-page jobs-page">
      <div className="profile-layout">
        <main className="profile-main jobs-main">
          <div className="profile-main-inner jobs-main-inner">
            <div className="profile-section-head">
              <div>
                <h1>{selectedSlug ? "Edit job" : "New job"}</h1>
                <p className="page-lead">
                  {selectedSlug
                    ? "Update role details before generating documents."
                    : "Enter the company, title, location, and posting details, then save."}
                </p>
              </div>
              {selectedSlug && (
                <button type="button" className="md-text-btn danger" onClick={deleteJob}>
                  Delete job
                </button>
              )}
            </div>
            <div className="profile-form-surface">
              <JobForm draft={draft} onChange={setDraft} />
            </div>
          </div>
        </main>

        <ResizableSidebar className="profile-sidebar jobs-sidebar" storageKey="joblication.sidebar.jobs">
          <nav className="profile-nav" aria-label="Your jobs">
            <p className="profile-nav-label">Your jobs</p>
            <ul>
              {jobs.map((job) => (
                <li key={job.slug}>
                  <button
                    type="button"
                    className={`profile-nav-item ${selectedSlug === job.slug ? "active" : ""}`}
                    onClick={() => selectJob(job.slug)}
                  >
                    <span className="jobs-nav-title">{job.company || job.title || job.slug}</span>
                    <span className="jobs-nav-meta">
                      {[job.company ? job.title || job.slug : null, job.location].filter(Boolean).join(" · ")}
                    </span>
                  </button>
                </li>
              ))}
              {!jobs.length && <li className="jobs-empty">No jobs yet</li>}
            </ul>
          </nav>

          <div className="profile-sidebar-actions">
            <button
              type="button"
              className="md-filled-btn"
              onClick={saveJob}
              disabled={busy}
            >
              {busy ? "Saving…" : "Save job"}
            </button>
            <button type="button" className="md-outlined-btn full" onClick={newJob}>
              + New job
            </button>
          </div>
        </ResizableSidebar>
      </div>
    </div>
  );
}
