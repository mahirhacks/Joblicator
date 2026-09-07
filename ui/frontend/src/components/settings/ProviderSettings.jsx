import { useMemo, useState } from "react";
import { api } from "../../api/client.js";
import { getByPath, setByPath } from "../../config/engineConfigSchema.js";
import { TextField } from "../profile/ProfileFields.jsx";

function SelectField({ id, label, value, onChange, children, hint, disabled = false }) {
  return (
    <div className="md-field md-field-filled">
      <label htmlFor={id}>{label}</label>
      <select id={id} className="md-input" value={value ?? ""} onChange={(event) => onChange(event.target.value)} disabled={disabled}>
        {children}
      </select>
      {hint ? <span className="md-hint">{hint}</span> : null}
    </div>
  );
}

function ProviderChoice({ provider, onChange }) {
  return (
    <div className="md-field md-field-filled md-field-span">
      <label htmlFor="cfg-llm-provider">AI provider</label>
      <select id="cfg-llm-provider" className="md-input" value={provider} onChange={(event) => onChange(event.target.value)}>
        <option value="ollama">Ollama — local</option>
        <option value="openrouter">OpenRouter — cloud</option>
      </select>
      <span className="md-hint">Only the selected provider is used for the next generation run.</span>
    </div>
  );
}

function formatContext(value) {
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? `${number.toLocaleString()} tokens` : "Not published";
}

export default function ProviderSettings({ config, onChange }) {
  const [models, setModels] = useState([]);
  const [loadingModels, setLoadingModels] = useState(false);
  const [modelError, setModelError] = useState("");
  const provider = getByPath(config, ["llm", "provider"]) === "openrouter" ? "openrouter" : "ollama";
  const openRouterModel = getByPath(config, ["openrouter", "model"]) || "";
  const selectedModel = useMemo(() => models.find((model) => model.id === openRouterModel) || null, [models, openRouterModel]);
  const reasoning = selectedModel?.reasoning || null;
  const reasoningOptions = reasoning?.supported_efforts || [];
  const currentEffort = getByPath(config, ["openrouter", "reasoning_effort"]) || "";

  const update = (path, value) => onChange(setByPath(config, path, value));
  const updateProvider = (nextProvider) => update(["llm", "provider"], nextProvider);

  async function refreshModels() {
    setLoadingModels(true);
    setModelError("");
    try {
      const result = await api.listOpenRouterModels();
      setModels(Array.isArray(result.models) ? result.models : []);
    } catch (error) {
      setModelError(error.message || "Could not load OpenRouter models.");
    } finally {
      setLoadingModels(false);
    }
  }

  function chooseModel(modelId) {
    const nextModel = models.find((model) => model.id === modelId);
    let nextConfig = setByPath(config, ["openrouter", "model"], modelId);
    const metadata = nextModel?.reasoning;
    const allowedEfforts = metadata?.supported_efforts || [];
    let effort = getByPath(nextConfig, ["openrouter", "reasoning_effort"]) || "";
    if (!allowedEfforts.length) {
      effort = "";
    } else if (metadata?.mandatory) {
      effort = allowedEfforts.includes(effort) ? effort : (metadata.default_effort || allowedEfforts[0]);
    } else if (!allowedEfforts.includes(effort)) {
      effort = metadata?.default_enabled && metadata.default_effort !== "none"
        ? metadata.default_effort
        : "";
    }
    nextConfig = setByPath(nextConfig, ["openrouter", "reasoning_effort"], effort);
    onChange(nextConfig);
  }

  return (
    <section className="settings-section profile-form-surface">
      <header className="settings-section-head">
        <h2>AI provider</h2>
        <p className="settings-section-desc">Choose local Ollama or OpenRouter. Selecting a provider never starts a model or sends a generation request.</p>
      </header>

      <div className="md-grid md-grid-2">
        <ProviderChoice provider={provider} onChange={updateProvider} />

        {provider === "ollama" ? (
          <>
            <TextField
              id="cfg-ollama-base-url"
              label="Ollama base URL"
              value={getByPath(config, ["ollama", "base_url"]) || "http://127.0.0.1:11434"}
              onChange={(value) => update(["ollama", "base_url"], value)}
              hint="Used only when you generate with Ollama."
              type="url"
            />
            <TextField
              id="cfg-ollama-model"
              label="Ollama model"
              value={getByPath(config, ["ollama", "model"]) || ""}
              onChange={(value) => update(["ollama", "model"], value)}
              hint="Pull this model with Ollama before generating."
            />
            <label className="settings-checkbox-label">
              <input type="checkbox" checked={Boolean(getByPath(config, ["ollama", "think"]))} onChange={(event) => update(["ollama", "think"], event.target.checked)} />
              <span>Enable Ollama thinking</span>
            </label>
            <label className="settings-checkbox-label">
              <input type="checkbox" checked={Boolean(getByPath(config, ["ollama", "auto_start"]))} onChange={(event) => update(["ollama", "auto_start"], event.target.checked)} />
              <span>Start Ollama automatically when generation begins</span>
            </label>
          </>
        ) : (
          <>
            <TextField
              id="cfg-openrouter-api-key"
              label="OpenRouter API key"
              type="password"
              value={getByPath(config, ["openrouter", "api_key"]) || ""}
              onChange={(value) => update(["openrouter", "api_key"], value)}
              hint="Stored only in this app’s local configuration. Required to generate."
              fullWidth
            />
            <div className="settings-model-picker md-field-span">
              <div className="settings-model-picker-head">
                <div>
                  <h3>OpenRouter model</h3>
                  <p>Load the current catalog to pick a text model and its published reasoning controls.</p>
                </div>
                <button type="button" className="md-outlined-btn" onClick={refreshModels} disabled={loadingModels}>
                  {loadingModels ? "Loading models…" : "Refresh models"}
                </button>
              </div>
              <SelectField
                id="cfg-openrouter-model"
                label="Model"
                value={openRouterModel}
                onChange={chooseModel}
                disabled={loadingModels}
                hint={models.length ? `${models.length} text models loaded from OpenRouter.` : "Click Refresh models to load the OpenRouter catalog."}
              >
                <option value="">Select a model…</option>
                {openRouterModel && !selectedModel ? <option value={openRouterModel}>{openRouterModel} (saved model)</option> : null}
                {models.map((model) => <option key={model.id} value={model.id}>{model.name} — {model.id}</option>)}
              </SelectField>
              {modelError ? <p className="settings-provider-error" role="alert">{modelError}</p> : null}
              {selectedModel ? (
                <div className="settings-model-meta">
                  <span><strong>Context:</strong> {formatContext(selectedModel.context_length)}</span>
                  <span><strong>Reasoning:</strong> {reasoningOptions.length ? reasoningOptions.join(", ") : "No selectable effort published"}</span>
                </div>
              ) : null}
            </div>

            <SelectField
              id="cfg-openrouter-reasoning"
              label="Reasoning effort"
              value={currentEffort}
              onChange={(value) => update(["openrouter", "reasoning_effort"], value)}
              disabled={!reasoningOptions.length || Boolean(reasoning?.mandatory)}
              hint={reasoning?.mandatory ? "This model requires reasoning; its supported effort is selected automatically." : reasoningOptions.length ? "Published by OpenRouter for this selected model. Reasoning tokens can increase cost." : "Select and refresh a model to see supported reasoning levels."}
            >
              {!reasoning?.mandatory ? <option value="">Off</option> : null}
              {reasoningOptions.map((effort) => <option key={effort} value={effort}>{effort}</option>)}
            </SelectField>
          </>
        )}
      </div>
    </section>
  );
}
