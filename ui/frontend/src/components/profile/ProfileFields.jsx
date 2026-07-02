/** Google Material–inspired form primitives for profile editing. */

function labelize(key) {
  return key
    .replace(/_/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function inputTypeFor(key) {
  if (key.includes("email")) return "email";
  if (key.includes("phone")) return "tel";
  if (key === "url" || key.includes("portfolio") || key.includes("github") || key.includes("linkedin"))
    return "url";
  if (key.includes("Date") || key === "date") return "date";
  return "text";
}

export function TextField({ id, label, value, onChange, type, multiline, rows = 4, hint, onKeyDown }) {
  const fieldId = id || label.replace(/\s+/g, "_").toLowerCase();
  const resolvedType = type || inputTypeFor(fieldId);
  const filled = Boolean(value);

  if (multiline) {
    return (
      <div className={`md-field ${filled ? "md-field-filled" : ""}`}>
        <label htmlFor={fieldId}>{label}</label>
        <textarea
          id={fieldId}
          className="md-input md-textarea"
          rows={rows}
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={onKeyDown}
        />
        {hint && <span className="md-hint">{hint}</span>}
      </div>
    );
  }

  return (
    <div className={`md-field ${filled ? "md-field-filled" : ""}`}>
      <label htmlFor={fieldId}>{label}</label>
      <input
        id={fieldId}
        className="md-input"
        type={resolvedType}
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
      />
      {hint && <span className="md-hint">{hint}</span>}
    </div>
  );
}

export function FieldGrid({ children, columns = 2 }) {
  return <div className={`md-grid md-grid-${columns}`}>{children}</div>;
}

const CONTACT_FIELDS = [
  { key: "name", label: "Full name" },
  { key: "email", label: "Email" },
  { key: "phone", label: "Phone" },
  { key: "address", label: "Street address" },
  { key: "city", label: "City" },
  { key: "state", label: "State / region" },
  { key: "zip", label: "Postal code" },
  { key: "country", label: "Country" },
  { key: "portfolio", label: "Portfolio URL" },
  { key: "github", label: "GitHub URL" },
  { key: "linkedin", label: "LinkedIn URL" },
];

const EDUCATION_FIELDS = [
  { key: "degree", label: "Degree" },
  { key: "field", label: "Field of study" },
  { key: "school", label: "School" },
  { key: "cgpa", label: "GPA / CGPA" },
  { key: "location", label: "Location" },
  { key: "startDate", label: "Start date" },
  { key: "endDate", label: "End date" },
  { key: "courses", label: "Relevant coursework", multiline: true, rows: 3, fullWidth: true },
];

const EXPERIENCE_FIELDS = [
  { key: "company", label: "Company" },
  { key: "position", label: "Position" },
  { key: "location", label: "Location" },
  { key: "startDate", label: "Start date" },
  { key: "endDate", label: "End date" },
  { key: "description", label: "Description", multiline: true, rows: 5, fullWidth: true },
];

const PROJECT_FIELDS = [
  { key: "name", label: "Project name" },
  { key: "url", label: "URL" },
  { key: "startDate", label: "Start date" },
  { key: "endDate", label: "End date" },
  { key: "technologies", label: "Technologies" },
  { key: "description", label: "Description", multiline: true, rows: 4, fullWidth: true },
];

const CERT_FIELDS = [
  { key: "name", label: "Certification name" },
  { key: "issuer", label: "Issuer" },
  { key: "date", label: "Date earned" },
  { key: "url", label: "Credential URL" },
];

const ACHIEVEMENT_FIELDS = [
  { key: "name", label: "Achievement" },
  { key: "date", label: "Date" },
  { key: "description", label: "Description", multiline: true, rows: 3, fullWidth: true },
];

const SECTION_SCHEMAS = {
  contact: { type: "object", fields: CONTACT_FIELDS },
  summary: { type: "text", label: "Professional summary" },
  titles: { type: "titles" },
  skills: { type: "keyValue", keyLabel: "Skill", valueLabel: "Description", stacked: true },
  languages: { type: "keyValue", keyLabel: "Language", valueLabel: "Proficiency" },
  interests: { type: "keyValue", keyLabel: "Interest area", valueLabel: "Details" },
  education: { type: "entities", fields: EDUCATION_FIELDS, singular: "education" },
  experience: { type: "entities", fields: EXPERIENCE_FIELDS, singular: "experience" },
  projects: { type: "entities", fields: PROJECT_FIELDS, singular: "project" },
  certifications: { type: "entities", fields: CERT_FIELDS, singular: "certification" },
  achievements: { type: "entities", fields: ACHIEVEMENT_FIELDS, singular: "achievement" },
};

export function getSectionSchema(sectionKey) {
  return SECTION_SCHEMAS[sectionKey] || { type: "dynamic" };
}

function isPlainObject(v) {
  return v && typeof v === "object" && !Array.isArray(v);
}

export function inferSectionType(value) {
  if (typeof value === "string") return "text";
  if (!isPlainObject(value)) return "text";
  const entries = Object.values(value);
  if (!entries.length) return "keyValue";
  if (entries.every((v) => typeof v === "string")) return "keyValue";
  if (entries.every((v) => isPlainObject(v))) return "entities";
  return "keyValue";
}

export function ObjectForm({ fields, value, onChange }) {
  const data = value || {};
  return (
    <FieldGrid>
      {fields.map((f) => (
        <div key={f.key} className={f.fullWidth ? "md-field-span" : undefined}>
          <TextField
            id={f.key}
            label={f.label}
            value={data[f.key]}
            multiline={f.multiline}
            rows={f.rows}
            onChange={(v) => onChange({ ...data, [f.key]: v })}
          />
        </div>
      ))}
    </FieldGrid>
  );
}

function titlesToArray(value) {
  const entries = Object.entries(value || {});
  entries.sort((a, b) => {
    const na = parseInt(String(a[0]).split("_").pop(), 10) || 0;
    const nb = parseInt(String(b[0]).split("_").pop(), 10) || 0;
    return na - nb;
  });
  return entries.map(([, text]) => text);
}

function arrayToTitles(items) {
  const out = {};
  items.forEach((text, index) => {
    out[`title_${index + 1}`] = text;
  });
  return out;
}

export function TitlesEditor({ value, onChange }) {
  const titles = titlesToArray(value);

  function updateAt(index, text) {
    const next = [...titles];
    next[index] = text;
    onChange(arrayToTitles(next));
  }

  function removeAt(index) {
    onChange(arrayToTitles(titles.filter((_, i) => i !== index)));
  }

  function add() {
    onChange(arrayToTitles([...titles, ""]));
  }

  return (
    <div className="md-title-list">
      {titles.map((text, index) => (
        <div key={`title-${index}`} className="md-title-row">
          <TextField
            id={`title_text_${index}`}
            label="Title text"
            value={text}
            onChange={(v) => updateAt(index, v)}
          />
          <button type="button" className="md-icon-btn" onClick={() => removeAt(index)} aria-label="Remove title">
            ✕
          </button>
        </div>
      ))}
      <button type="button" className="md-outlined-btn" onClick={add}>
        + Add title
      </button>
    </div>
  );
}

export function KeyValueEditor({ value, onChange, keyLabel = "Key", valueLabel = "Value", valueOptional, stacked }) {
  const entries = Object.entries(value || {});

  function updateKey(oldKey, newKey, val) {
    const next = { ...(value || {}) };
    delete next[oldKey];
    if (newKey.trim()) next[newKey.trim()] = val;
    onChange(next);
  }

  function updateValue(key, val) {
    onChange({ ...(value || {}), [key]: val });
  }

  function remove(key) {
    const next = { ...(value || {}) };
    delete next[key];
    onChange(next);
  }

  function add() {
    const base = keyLabel.toLowerCase().replace(/\s+/g, "_");
    let i = entries.length + 1;
    let candidate = `${base}_${i}`;
    while ((value || {})[candidate]) {
      i += 1;
      candidate = `${base}_${i}`;
    }
    onChange({ ...(value || {}), [candidate]: "" });
  }

  return (
    <div className="md-kv-list">
      {entries.map(([key, val]) => (
        <div key={key} className={`md-kv-row ${stacked ? "md-kv-row-stacked" : ""}`}>
          {stacked ? (
            <>
              <div className="md-kv-stacked-fields">
                <TextField label={keyLabel} value={key} onChange={(k) => updateKey(key, k, val)} />
                <TextField
                  label={valueLabel}
                  value={val}
                  onChange={(v) => updateValue(key, v)}
                  multiline
                  rows={2}
                />
              </div>
              <button type="button" className="md-icon-btn" onClick={() => remove(key)} aria-label="Remove">
                ✕
              </button>
            </>
          ) : (
            <>
              <TextField label={keyLabel} value={key} onChange={(k) => updateKey(key, k, val)} />
              {!valueOptional && (
                <TextField
                  label={valueLabel}
                  value={val}
                  onChange={(v) => updateValue(key, v)}
                  multiline={String(val).length > 60}
                  rows={2}
                />
              )}
              {valueOptional && (
                <TextField label={valueLabel} value={val} onChange={(v) => updateValue(key, v)} hint="Optional" />
              )}
              <button type="button" className="md-icon-btn" onClick={() => remove(key)} aria-label="Remove">
                ✕
              </button>
            </>
          )}
        </div>
      ))}
      <button type="button" className="md-text-btn" onClick={add}>
        + Add {keyLabel.toLowerCase()}
      </button>
    </div>
  );
}

export function EntityListEditor({ value, onChange, fields, singular, sectionKey }) {
  const entries = Object.entries(value || {});
  const prefix = singular || sectionKey.replace(/s$/, "");

  function removeEntry(id) {
    const next = { ...(value || {}) };
    delete next[id];
    onChange(next);
  }

  function addEntry() {
    const nums = Object.keys(value || {})
      .map((k) => parseInt(k.split("_").pop(), 10))
      .filter((n) => !Number.isNaN(n));
    const next = nums.length ? Math.max(...nums) + 1 : 1;
    const id = `${prefix}_${next}`;
    const empty = fields.reduce((acc, f) => ({ ...acc, [f.key]: "" }), {});
    onChange({ ...(value || {}), [id]: empty });
  }

  return (
    <div className="md-entity-list">
      {entries.map(([id, entry]) => (
        <article key={id} className="md-card">
          <header className="md-card-header">
            <h3>{entry.name || entry.degree || entry.company || entry.position || labelize(id)}</h3>
            <button type="button" className="md-icon-btn" onClick={() => removeEntry(id)} aria-label="Remove entry">
              ✕
            </button>
          </header>
          <ObjectForm fields={fields} value={entry} onChange={(v) => onChange({ ...(value || {}), [id]: v })} />
        </article>
      ))}
      <button type="button" className="md-outlined-btn" onClick={addEntry}>
        + Add {labelize(singular || sectionKey)}
      </button>
    </div>
  );
}

export function DynamicSectionEditor({ sectionKey, value, onChange }) {
  const kind = inferSectionType(value);

  if (kind === "text") {
    return (
      <TextField
        label={labelize(sectionKey)}
        value={typeof value === "string" ? value : JSON.stringify(value, null, 2)}
        onChange={onChange}
        multiline
        rows={8}
      />
    );
  }

  if (kind === "keyValue") {
    return (
      <KeyValueEditor
        value={isPlainObject(value) ? value : {}}
        onChange={onChange}
        keyLabel="Item"
        valueLabel="Value"
      />
    );
  }

  if (kind === "entities") {
    const sample = Object.values(value || {}).find(isPlainObject) || {};
    const fields = Object.keys(sample).map((key) => ({
      key,
      label: labelize(key),
      multiline: key === "description" || String(sample[key]).length > 80,
      rows: 4,
    }));
    return (
      <EntityListEditor
        sectionKey={sectionKey}
        value={value}
        onChange={onChange}
        fields={fields.length ? fields : [{ key: "name", label: "Name" }, { key: "description", label: "Description", multiline: true }]}
        singular={sectionKey.replace(/s$/, "")}
      />
    );
  }

  return (
    <TextField label={labelize(sectionKey)} value={JSON.stringify(value, null, 2)} onChange={() => {}} multiline rows={10} />
  );
}

export function SectionEditor({ sectionKey, value, onChange }) {
  const schema = getSectionSchema(sectionKey);

  if (schema.type === "text") {
    return (
      <TextField
        label={schema.label || labelize(sectionKey)}
        value={typeof value === "string" ? value : ""}
        onChange={onChange}
        multiline
        rows={8}
        hint="A concise overview recruiters see first."
      />
    );
  }

  if (schema.type === "object") {
    return <ObjectForm fields={schema.fields} value={value} onChange={onChange} />;
  }

  if (schema.type === "titles") {
    return <TitlesEditor value={value} onChange={onChange} />;
  }

  if (schema.type === "keyValue") {
    return (
      <KeyValueEditor
        value={value || {}}
        onChange={onChange}
        keyLabel={schema.keyLabel}
        valueLabel={schema.valueLabel}
        valueOptional={schema.valueOptional}
        stacked={schema.stacked}
      />
    );
  }

  if (schema.type === "entities") {
    return (
      <EntityListEditor
        sectionKey={sectionKey}
        value={value}
        onChange={onChange}
        fields={schema.fields}
        singular={schema.singular}
      />
    );
  }

  return <DynamicSectionEditor sectionKey={sectionKey} value={value} onChange={onChange} />;
}

export const SECTION_ORDER = [
  "contact",
  "summary",
  "titles",
  "experience",
  "education",
  "skills",
  "projects",
  "certifications",
  "achievements",
  "languages",
  "interests",
];

export const SECTION_LABELS = {
  contact: "Contact",
  summary: "Summary",
  titles: "Job titles",
  experience: "Experience",
  education: "Education",
  skills: "Skills",
  projects: "Projects",
  certifications: "Certifications",
  achievements: "Achievements",
  languages: "Languages",
  interests: "Interests",
};

export function sectionLabel(key) {
  return SECTION_LABELS[key] || labelize(key);
}
