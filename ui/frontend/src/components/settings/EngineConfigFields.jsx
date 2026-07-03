import { TextField } from "../profile/ProfileFields.jsx";
import { ENGINE_CONFIG_SECTIONS, getByPath, pathKey, setByPath } from "../../config/engineConfigSchema.js";

function BoolField({ id, label, value, onChange, hint }) {
  const checked = Boolean(value);
  return (
    <div className={`md-field settings-bool-field ${checked ? "md-field-filled" : ""}`}>
      <label htmlFor={id} className="settings-checkbox-label">
        <input id={id} type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
        <span>{label}</span>
      </label>
      {hint ? <span className="md-hint">{hint}</span> : null}
    </div>
  );
}

function NumberField({ id, label, value, onChange, hint, integer, step }) {
  const display = value == null || Number.isNaN(value) ? "" : String(value);
  const filled = display !== "";
  return (
    <div className={`md-field ${filled ? "md-field-filled" : ""}`}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        className="md-input"
        type="number"
        step={step ?? (integer ? 1 : "any")}
        value={display}
        onChange={(e) => {
          const raw = e.target.value;
          if (raw === "") {
            onChange(integer ? 0 : 0);
            return;
          }
          const parsed = integer ? parseInt(raw, 10) : parseFloat(raw);
          onChange(Number.isNaN(parsed) ? 0 : parsed);
        }}
      />
      {hint ? <span className="md-hint">{hint}</span> : null}
    </div>
  );
}

function ConfigField({ field, config, onChange }) {
  const id = `cfg-${pathKey(field.path)}`;
  const value = getByPath(config, field.path);
  const update = (nextValue) => onChange(setByPath(config, field.path, nextValue));

  if (field.type === "boolean") {
    return <BoolField id={id} label={field.label} value={value} onChange={update} hint={field.hint} />;
  }

  if (field.type === "number") {
    return (
      <NumberField
        id={id}
        label={field.label}
        value={value}
        onChange={update}
        hint={field.hint}
        integer={field.integer}
        step={field.step}
      />
    );
  }

  return (
    <TextField
      id={id}
      label={field.label}
      value={value ?? ""}
      onChange={(v) => update(v)}
      hint={field.hint}
    />
  );
}

export default function EngineConfigFields({ config, onChange }) {
  return (
    <div className="settings-form">
      {ENGINE_CONFIG_SECTIONS.map((section) => (
        <section key={section.id} className="settings-section profile-form-surface">
          <header className="settings-section-head">
            <h2>{section.title}</h2>
            {section.description ? <p className="settings-section-desc">{section.description}</p> : null}
          </header>
          <div className="md-grid md-grid-2">
            {section.fields.map((field) => (
              <div key={pathKey(field.path)} className={field.fullWidth ? "md-field-span" : undefined}>
                <ConfigField field={field} config={config} onChange={onChange} />
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
