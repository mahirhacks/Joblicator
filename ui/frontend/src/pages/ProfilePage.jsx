import { useCallback, useEffect, useMemo, useState } from "react";
import { api } from "../api/client.js";
import { useToast } from "../components/Toast.jsx";
import PageLoading from "../components/PageLoading.jsx";
import {
  SECTION_ORDER,
  SectionEditor,
  sectionLabel,
} from "../components/profile/ProfileFields.jsx";
import ResizableSidebar from "../components/ResizableSidebar.jsx";

const KNOWN_SECTIONS = new Set(SECTION_ORDER);

function sortSectionKeys(keys) {
  const ordered = SECTION_ORDER.filter((k) => keys.includes(k));
  const rest = keys.filter((k) => !SECTION_ORDER.includes(k)).sort();
  return [...ordered, ...rest];
}

export default function ProfilePage() {
  const { showToast } = useToast();
  const [profile, setProfile] = useState(null);
  const [activeSection, setActiveSection] = useState("contact");
  const [customSections, setCustomSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const data = await api.getProfile();
      const p = data.profile || {};
      setProfile(p);
      setCustomSections(Object.keys(p).filter((k) => !KNOWN_SECTIONS.has(k)));
    } catch (e) {
      showToast(e.message, "error");
    } finally {
      setLoading(false);
    }
  }, [showToast]);

  useEffect(() => {
    load();
  }, [load]);

  const sectionKeys = useMemo(() => {
    const fromProfile = profile ? Object.keys(profile) : [];
    const merged = sortSectionKeys([...new Set([...SECTION_ORDER, ...fromProfile, ...customSections])]);
    return merged.filter((k) => profile && k in profile);
  }, [profile, customSections]);

  function updateSection(key, value) {
    setProfile((p) => ({ ...p, [key]: value }));
  }

  function addSection() {
    const name = window.prompt("New section name (e.g. Publications):");
    if (!name) return;
    const key = name.trim().toLowerCase().replace(/\s+/g, "_");
    if (!key) return;
    setCustomSections((s) => (s.includes(key) ? s : [...s, key]));
    setProfile((p) => ({ ...p, [key]: p[key] || {} }));
    setActiveSection(key);
  }

  function removeSection() {
    if (!window.confirm(`Delete section "${sectionLabel(activeSection)}"?`)) return;
    setProfile((p) => {
      const next = { ...p };
      delete next[activeSection];
      return next;
    });
    setCustomSections((s) => s.filter((k) => k !== activeSection));
    setActiveSection("contact");
  }

  async function save() {
    setSaving(true);
    try {
      await api.saveProfile(profile);
      showToast("Profile saved");
    } catch (e) {
      showToast(e.message, "error");
    } finally {
      setSaving(false);
    }
  }

  if (loading || !profile) {
    return (
      <div className="profile-page">
        <PageLoading label="Loading profile…" />
      </div>
    );
  }

  const isCustom = !KNOWN_SECTIONS.has(activeSection);

  return (
    <div className="profile-page">
      <div className="profile-layout">
        <main className="profile-main">
          <div className="profile-main-inner">
            <div className="profile-section-head">
              <div>
                <h1>{sectionLabel(activeSection)}</h1>
                <p className="page-lead">Edit your {sectionLabel(activeSection).toLowerCase()} details for tailored applications.</p>
              </div>
              {isCustom && (
                <button type="button" className="md-text-btn danger" onClick={removeSection}>
                  Delete section
                </button>
              )}
            </div>

            <div className="profile-form-surface">
              <SectionEditor
                sectionKey={activeSection}
                value={profile[activeSection]}
                onChange={(v) => updateSection(activeSection, v)}
              />
            </div>
          </div>
        </main>

        <ResizableSidebar className="profile-sidebar" storageKey="joblication.sidebar.profile">
          <nav className="profile-nav" aria-label="Profile sections">
            <p className="profile-nav-label">Sections</p>
            <ul>
              {sectionKeys.map((key) => (
                <li key={key}>
                  <button
                    type="button"
                    className={`profile-nav-item ${activeSection === key ? "active" : ""}`}
                    onClick={() => setActiveSection(key)}
                  >
                    {sectionLabel(key)}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="profile-sidebar-actions">
            <button type="button" className="md-filled-btn" onClick={save} disabled={saving}>
              {saving ? "Saving…" : "Save profile"}
            </button>
            <button type="button" className="md-outlined-btn full" onClick={addSection}>
              + Section
            </button>
          </div>
        </ResizableSidebar>
      </div>
    </div>
  );
}
