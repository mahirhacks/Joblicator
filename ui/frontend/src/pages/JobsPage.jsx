import { useCallback, useEffect, useRef, useState } from "react";
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

function parseJobFromText(text) {
  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
  const urlMatch = text.match(/https?:\/\/[^\s]+/i);
  return {
    url: urlMatch ? urlMatch[0] : "",
    title: lines[0] || "",
    description: text,
    about: lines.slice(0, 3).join(" "),
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
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Paste a job URL and I'll try to scrape it, or drop the full job description below. Then review the form and save.",
    },
  ]);
  const [input, setInput] = useState("");
  const [draft, setDraft] = useState(EMPTY_JOB);
  const [editing, setEditing] = useState(false);
  const [busy, setBusy] = useState(false);
  const chatEnd = useRef(null);

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

  useEffect(() => {
    chatEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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
    setEditing(true);
    try {
      const listed = jobs.find((job) => job.slug === slug);
      await loadJobDraft(slug, listed);
    } catch (e) {
      showToast(e.message, "error");
    }
  }

  async function handleSend() {
    const text = input.trim();
    if (!text || busy) return;

    setMessages((m) => [...m, { role: "user", content: text }]);
    setInput("");
    setBusy(true);

    try {
      const isUrl = /^https?:\/\//i.test(text) || text.includes("linkedin.com") || text.includes("jobs.");

      if (isUrl) {
        const scraped = await api.scrapeUrl(text);
        setDraft((d) => ({
          ...d,
          url: scraped.url,
          title: d.title || scraped.title || "",
          about: scraped.about || d.about,
          description: scraped.description || d.description,
        }));
        setMessages((m) => [
          ...m,
          {
            role: "assistant",
            content: "Fetched the posting. Set company and title, then save.",
          },
        ]);
        setEditing(true);
      } else {
        const parsed = parseJobFromText(text);
        setDraft((d) => ({ ...d, ...parsed, description: text }));
        setMessages((m) => [
          ...m,
          {
            role: "assistant",
            content: "Got the description. Fill in company and title, then save.",
          },
        ]);
        setEditing(true);
      }
    } catch (e) {
      setMessages((m) => [...m, { role: "assistant", content: `Error: ${e.message}` }]);
    } finally {
      setBusy(false);
    }
  }

  async function saveJob() {
    if (!draft.company.trim() || !draft.title.trim()) {
      showToast("Company and title are required", "error");
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
      setEditing(true);
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
      setEditing(false);
      await loadJobs();
      showToast("Job deleted");
    } catch (e) {
      showToast(e.message, "error");
    }
  }

  function newJob() {
    setSelectedSlug(null);
    setDraft(EMPTY_JOB);
    setEditing(true);
  }

  return (
    <div className="profile-page jobs-page">
      <div className="profile-layout">
        <main className="profile-main jobs-main">
          <div className="profile-main-inner jobs-main-inner">
            {editing ? (
              <>
                <div className="profile-section-head">
                  <div>
                    <h1>{selectedSlug ? "Edit job" : "New job"}</h1>
                    <p className="page-lead">
                      {selectedSlug ? "Update role details before generating documents." : "Add a role to start tailoring your application."}
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
              </>
            ) : (
              <div className="jobs-welcome">
                <h1>Jobs</h1>
                <p className="page-lead">
                  Paste a job URL or description in the chat below, or select a saved role from the sidebar.
                </p>
              </div>
            )}

            <section className="jobs-chat" aria-label="Job intake chat">
              <div className="jobs-chat-messages">
                {messages.map((msg, i) => (
                  <div key={i} className={`jobs-chat-bubble ${msg.role}`}>
                    <span className="jobs-chat-label">{msg.role === "user" ? "You" : "Joblication"}</span>
                    <p>{msg.content}</p>
                  </div>
                ))}
                <div ref={chatEnd} />
              </div>
              <div className="jobs-chat-composer">
                <div className="jobs-chat-input-wrap">
                  <TextField
                    id="job_intake"
                    label="Paste URL or job description"
                    value={input}
                    onChange={setInput}
                    multiline
                    rows={3}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSend();
                      }
                    }}
                  />
                </div>
                <button type="button" className="md-filled-btn jobs-send-btn" onClick={handleSend} disabled={busy}>
                  {busy ? "…" : "Send"}
                </button>
              </div>
            </section>
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
              disabled={busy || !editing}
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
