import { useCallback, useEffect, useState } from "react";
import { api } from "../api/client.js";
import { useToast } from "../components/Toast.jsx";
import PageLoading from "../components/PageLoading.jsx";
import EngineConfigFields from "../components/settings/EngineConfigFields.jsx";
import ProviderSettings from "../components/settings/ProviderSettings.jsx";
import { useTheme } from "../theme/ThemeContext.jsx";

function configsEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

export default function SettingsPage() {
  const { showToast } = useToast();
  const { theme, setTheme } = useTheme();
  const [config, setConfig] = useState(null);
  const [savedConfig, setSavedConfig] = useState(null);
  const [configPath, setConfigPath] = useState("");
  const [outputsDir, setOutputsDir] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const data = await api.getEngineConfig();
      const next = data.config && typeof data.config === "object" ? data.config : {};
      setConfig(structuredClone(next));
      setSavedConfig(structuredClone(next));
      setConfigPath(data.path || "");
      setOutputsDir(data.outputs_dir || "");
    } catch (e) {
      showToast(e.message, "error");
    } finally {
      setLoading(false);
    }
  }, [showToast]);

  useEffect(() => {
    load();
  }, [load]);

  const dirty = config && savedConfig ? !configsEqual(config, savedConfig) : false;

  async function save() {
    if (!config) return;
    setSaving(true);
    try {
      const data = await api.saveEngineConfig(config);
      const next = data.config && typeof data.config === "object" ? data.config : config;
      setConfig(structuredClone(next));
      setSavedConfig(structuredClone(next));
      setConfigPath(data.path || configPath);
      setOutputsDir(data.outputs_dir || outputsDir);
      showToast("Settings saved");
    } catch (e) {
      showToast(e.message, "error");
    } finally {
      setSaving(false);
    }
  }

  function reset() {
    if (!dirty || window.confirm("Discard unsaved changes?")) {
      setConfig(structuredClone(savedConfig));
    }
  }

  if (loading || !config) {
    return (
      <div className="profile-page">
        <PageLoading label="Loading settings…" />
      </div>
    );
  }

  return (
    <div className="profile-page settings-page">
      <div className="profile-main-inner settings-main-inner">
        <div className="profile-section-head">
          <div>
            <h1>Settings</h1>
            <p className="page-lead">
              Choose the look of the app, where generated files are saved, and which AI provider to use.
            </p>
            {configPath && (
              <p className="settings-config-path">
                File: <code>{configPath}</code>
              </p>
            )}
          </div>
          <div className="header-actions">
            <button type="button" className="md-outlined-btn" onClick={reset} disabled={!dirty || saving}>
              Reset
            </button>
            <button type="button" className="md-outlined-btn" onClick={load} disabled={saving}>
              Reload
            </button>
            <button type="button" className="md-filled-btn" onClick={save} disabled={saving || !dirty}>
              {saving ? "Saving…" : "Save settings"}
            </button>
          </div>
        </div>

        <section className="settings-section profile-form-surface settings-appearance">
          <header className="settings-section-head">
            <h2>Appearance</h2>
            <p className="settings-section-desc">Choose light or dark interface theme. Applies immediately.</p>
          </header>
          <div className="theme-switch" role="group" aria-label="Theme">
            <button
              type="button"
              className={theme === "light" ? "active" : ""}
              onClick={() => setTheme("light")}
            >
              Light
            </button>
            <button
              type="button"
              className={theme === "dark" ? "active" : ""}
              onClick={() => setTheme("dark")}
            >
              Dark
            </button>
          </div>
        </section>

        <EngineConfigFields
          config={config}
          onChange={setConfig}
          sectionExtras={{
            export: outputsDir ? (
              <p className="settings-resolved-path">
                Currently writing to <code>{outputsDir}</code>
              </p>
            ) : null,
          }}
        />
        <ProviderSettings config={config} onChange={setConfig} />
      </div>
    </div>
  );
}
