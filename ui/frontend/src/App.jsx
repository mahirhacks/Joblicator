import { useEffect, useRef, useState } from "react";

const DEFAULT_JSON = "local_applications.json";
const EMPTY_FORM = {
  company: "",
  title: "",
  location: "",
  url: "",
  about: "",
  description: "",
};

export default function App() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [jsonFile, setJsonFile] = useState(DEFAULT_JSON);
  const [serverOffline, setServerOffline] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);

  useEffect(() => {
    let cancelled = false;

    async function loadStorageHint() {
      try {
        const response = await fetch("/api/config");
        if (!response.ok) return;
        const data = await response.json();
        if (!cancelled && data.json) {
          setJsonFile(data.json);
        }
      } catch {
        if (!cancelled) {
          setServerOffline(true);
        }
      }
    }

    loadStorageHint();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    return () => clearTimeout(toastTimer.current);
  }, []);

  function showToast(message, type = "success") {
    clearTimeout(toastTimer.current);
    setToast({ message, type });
    toastTimer.current = setTimeout(() => setToast(null), 3500);
  }

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function resetForm() {
    setForm(EMPTY_FORM);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const company = form.company.trim();
    const title = form.title.trim();
    const about = form.about.trim();
    const description = form.description.trim();

    if (!company || !title) {
      showToast("Please fill in company and title.", "error");
      return;
    }

    if (!about && !description) {
      showToast("Please fill in About or Description.", "error");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || "Failed to save application.");
      }

      showToast(
        data.json_count
          ? `Saved ${company} — ${title} (${data.json_count} in ${data.json})`
          : `Saved ${company} — ${title}`
      );
      resetForm();
    } catch (error) {
      showToast(error.message || "Could not reach the server.", "error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="page">
      <header className="header">
        <h1>Joblication</h1>
        <p className="subtitle">
          Paste a job posting — it gets saved directly to <code>{jsonFile}</code>
          {serverOffline && (
            <span className="hint-warn">
              {" "}
              (Server not reachable — start with{" "}
              <code>python ui/backend/server.py</code>)
            </span>
          )}
        </p>
      </header>

      <form className="form" noValidate onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="company">Company Name</label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="e.g. NVIDIA Malaysia"
            value={form.company}
            onChange={updateField}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="title">Job Title</label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="e.g. Cloud Architect"
            value={form.title}
            onChange={updateField}
            required
          />
        </div>

        <div className="field-row">
          <div className="field">
            <label htmlFor="location">Location</label>
            <input
              id="location"
              name="location"
              type="text"
              placeholder="e.g. Kuala Lumpur, Malaysia"
              value={form.location}
              onChange={updateField}
            />
          </div>

          <div className="field">
            <label htmlFor="url">Job URL</label>
            <input
              id="url"
              name="url"
              type="url"
              placeholder="https://..."
              value={form.url}
              onChange={updateField}
            />
          </div>
        </div>

        <div className="field">
          <label htmlFor="about">About</label>
          <textarea
            id="about"
            name="about"
            rows={6}
            placeholder="Company or role overview…"
            value={form.about}
            onChange={updateField}
          />
        </div>

        <div className="field">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows={10}
            placeholder="Requirements, responsibilities, qualifications…"
            value={form.description}
            onChange={updateField}
            required
          />
        </div>

        <div className="actions">
          <button type="submit" className="btn btn-primary" disabled={submitting}>
            {submitting ? "Saving…" : "Save application"}
          </button>
          <button type="button" className="btn btn-ghost" onClick={resetForm}>
            Clear
          </button>
        </div>
      </form>

      {toast && (
        <div className={`toast show ${toast.type}`} role="status" aria-live="polite">
          {toast.message}
        </div>
      )}
    </main>
  );
}
