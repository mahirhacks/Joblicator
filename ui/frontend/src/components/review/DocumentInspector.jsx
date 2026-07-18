function words(value) {
  return String(value || "").trim().split(/\s+/).filter(Boolean).length;
}

function objectEntries(value) {
  return value && typeof value === "object" && !Array.isArray(value) ? Object.entries(value) : [];
}

function listValues(value) {
  if (Array.isArray(value)) return value;
  if (value && typeof value === "object") return Object.values(value);
  return [];
}

function moveItem(items, index, direction) {
  const target = index + direction;
  if (target < 0 || target >= items.length) return items;
  const next = [...items];
  [next[index], next[target]] = [next[target], next[index]];
  return next;
}

function nextRecordKey(records, label) {
  const taken = new Set(objectEntries(records).map(([key]) => key));
  let index = taken.size + 1;
  while (taken.has(`${label} ${index}`)) index += 1;
  return `${label} ${index}`;
}

function Icon({ children }) {
  return <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">{children}</svg>;
}

function InspectorButton({ label, onClick, disabled = false, tone = "default", children }) {
  return (
    <button
      type="button"
      className={`inspector-icon-button ${tone === "danger" ? "danger" : ""}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      title={label}
    >
      {children}
    </button>
  );
}

function MoveButtons({ index, count, onMove, onRemove, noun }) {
  return (
    <div className="inspector-card-actions">
      <InspectorButton label={`Move ${noun} up`} onClick={() => onMove(-1)} disabled={index === 0}>
        <Icon><path d="M4 10.5 8 6.5l4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></Icon>
      </InspectorButton>
      <InspectorButton label={`Move ${noun} down`} onClick={() => onMove(1)} disabled={index === count - 1}>
        <Icon><path d="m4 5.5 4 4 4-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></Icon>
      </InspectorButton>
      <InspectorButton label={`Remove ${noun}`} onClick={onRemove} tone="danger">
        <Icon><path d="M4 5h8M6 5V3.5h4V5m-5 0 .6 8h4.8l.6-8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></Icon>
      </InspectorButton>
    </div>
  );
}

function Field({ label, value, onChange, onBlur, multiline = false, rows = 3, type = "text", hint, testId }) {
  const controlProps = {
    className: "inspector-input",
    value: value ?? "",
    onChange: (event) => onChange(event.target.value),
    onBlur,
    "data-testid": testId,
  };

  return (
    <label className="inspector-field">
      <span className="inspector-field-label">
        <span>{label}</span>
        {multiline && <span>{words(value)} words</span>}
      </span>
      {multiline ? <textarea {...controlProps} rows={rows} /> : <input {...controlProps} type={type} />}
      {hint && <small>{hint}</small>}
    </label>
  );
}

function AddButton({ label, onClick }) {
  return (
    <button type="button" className="inspector-add-button" onClick={onClick}>
      <Icon><path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></Icon>
      {label}
    </button>
  );
}

function StringListEditor({ items, itemLabel, addLabel, onChange, onCheckpoint, multiline = false }) {
  const values = listValues(items);

  function updateItem(index, value) {
    const next = [...values];
    next[index] = value;
    onChange(next);
  }

  return (
    <div className="inspector-string-list">
      {values.map((item, index) => (
        <div className="inspector-string-row" key={index}>
          <label>
            <span className="sr-only">{itemLabel} {index + 1}</span>
            {multiline ? (
              <textarea
                className="inspector-input"
                value={item ?? ""}
                rows={4}
                onChange={(event) => updateItem(index, event.target.value)}
                onBlur={onCheckpoint}
              />
            ) : (
              <input
                className="inspector-input"
                value={item ?? ""}
                onChange={(event) => updateItem(index, event.target.value)}
                onBlur={onCheckpoint}
              />
            )}
          </label>
          <div className="inspector-string-actions">
            <InspectorButton label={`Move ${itemLabel} up`} onClick={() => onChange(moveItem(values, index, -1), true)} disabled={index === 0}>
              <Icon><path d="M4 10.5 8 6.5l4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></Icon>
            </InspectorButton>
            <InspectorButton label={`Move ${itemLabel} down`} onClick={() => onChange(moveItem(values, index, 1), true)} disabled={index === values.length - 1}>
              <Icon><path d="m4 5.5 4 4 4-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></Icon>
            </InspectorButton>
            <InspectorButton label={`Remove ${itemLabel}`} onClick={() => onChange(values.filter((_, itemIndex) => itemIndex !== index), true)} tone="danger">
              <Icon><path d="M4 5h8M6 5V3.5h4V5m-5 0 .6 8h4.8l.6-8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></Icon>
            </InspectorButton>
          </div>
        </div>
      ))}
      <AddButton label={addLabel} onClick={() => onChange([...values, ""], true)} />
    </div>
  );
}

function EntityEditor({ records, recordLabel, fields, listField, onChange, onCheckpoint }) {
  const entries = objectEntries(records);

  function updateRecord(index, nextRecord, checkpoint = false) {
    const next = entries.map(([key, value], entryIndex) => [key, entryIndex === index ? nextRecord : value]);
    onChange(Object.fromEntries(next), checkpoint);
  }

  function moveRecord(index, direction) {
    onChange(Object.fromEntries(moveItem(entries, index, direction)), true);
  }

  function removeRecord(index) {
    onChange(Object.fromEntries(entries.filter((_, entryIndex) => entryIndex !== index)), true);
  }

  function addRecord() {
    const record = Object.fromEntries(fields.map((field) => [field.key, ""]));
    if (listField) record[listField.key] = [""];
    onChange({ ...(records || {}), [nextRecordKey(records, recordLabel.toLowerCase())]: record }, true);
  }

  return (
    <div className="inspector-entity-list">
      {entries.map(([key, record], index) => (
        <section className="inspector-entity-card" key={key}>
          <header>
            <div>
              <span>{recordLabel} {index + 1}</span>
              <strong>{record?.title || record?.name || record?.company || `Untitled ${recordLabel.toLowerCase()}`}</strong>
            </div>
            <MoveButtons
              index={index}
              count={entries.length}
              noun={recordLabel.toLowerCase()}
              onMove={(direction) => moveRecord(index, direction)}
              onRemove={() => removeRecord(index)}
            />
          </header>
          <div className="inspector-card-body">
            {fields.map((field) => (
              <Field
                key={field.key}
                label={field.label}
                value={record?.[field.key]}
                multiline={field.multiline}
                rows={field.rows}
                type={field.type}
                onChange={(value) => updateRecord(index, { ...(record || {}), [field.key]: value })}
                onBlur={onCheckpoint}
              />
            ))}
            {listField && (
              <div className="inspector-nested-list">
                <div className="inspector-subheading">{listField.label}</div>
                <StringListEditor
                  items={record?.[listField.key]}
                  itemLabel={listField.itemLabel}
                  addLabel={listField.addLabel}
                  multiline={listField.multiline}
                  onCheckpoint={onCheckpoint}
                  onChange={(value, checkpoint = false) => updateRecord(
                    index,
                    { ...(record || {}), [listField.key]: value },
                    checkpoint
                  )}
                />
              </div>
            )}
          </div>
        </section>
      ))}
      <AddButton label={`Add ${recordLabel.toLowerCase()}`} onClick={addRecord} />
    </div>
  );
}

const EXPERIENCE_FIELDS = [
  { key: "title", label: "Position" },
  { key: "company", label: "Company" },
  { key: "start_date", label: "Start date", type: "month" },
  { key: "end_date", label: "End date", type: "month" },
];

const PROJECT_FIELDS = [
  { key: "title", label: "Project name" },
  { key: "start_date", label: "Start date", type: "month" },
  { key: "end_date", label: "End date", type: "month" },
  { key: "description", label: "Description", multiline: true, rows: 5 },
];

const CERTIFICATION_FIELDS = [
  { key: "name", label: "Certification" },
  { key: "issuer", label: "Issuer" },
  { key: "date", label: "Date", type: "month" },
  { key: "description", label: "Description", multiline: true, rows: 4 },
  { key: "url", label: "Credential URL" },
];

const ACHIEVEMENT_FIELDS = [
  { key: "name", label: "Achievement" },
  { key: "date", label: "Date", type: "month" },
  { key: "description", label: "Description", multiline: true, rows: 4 },
];

const SECTION_META = {
  summary: ["Professional summary", "Keep this specific, concise, and rich in role-relevant keywords."],
  experience: ["Professional experience", "Lead with outcomes and use plain, scannable bullets."],
  projects: ["Selected projects", "Prioritize projects that prove skills required by this role."],
  volunteer: ["Volunteer experience", "Keep relevant community and volunteer work concise and evidence-led."],
  education: ["Education", "Education is shared profile data and remains consistent across applications."],
  additional: ["Additional information", "Languages are shared profile data and remain consistent across applications."],
  skills: ["Core skills", "Use standard skill names that match the job description."],
  certifications: ["Certifications", "Keep credentials relevant and easy for an ATS to parse."],
  achievements: ["Achievements", "Include only specific, defensible accomplishments."],
  interests: ["Additional information", "Optional details that add useful context."],
  details: ["Letter details", "Confirm the company, role, recipient, date, and subject."],
  opening: ["Opening paragraph", "Connect your strongest relevant experience to this exact role."],
  body: ["Evidence paragraphs", "Use two or three concrete examples. Avoid repeating the CV."],
  closing: ["Closing paragraph", "Reinforce the value you bring and end with a natural next step."],
  signature: ["Signature", "Use a professional sign-off and your full name."],
};

export default function DocumentInspector({ documentType, data, activeSection, onChange, onCheckpoint }) {
  const [title, description] = SECTION_META[activeSection] || ["Document", "Edit the selected content."];
  const patch = (changes, checkpoint = false) => onChange({ ...(data || {}), ...changes }, checkpoint);

  return (
    <div className="document-inspector" data-testid="document-inspector">
      <header className="document-inspector-header">
        <span>Content</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </header>

      <div className="document-inspector-scroll">
        {documentType === "cv" && activeSection === "summary" && (
          <Field
            label="Summary"
            value={data?.executive_summary}
            multiline
            rows={9}
            testId="cv-summary-input"
            hint="Aim for 40-80 words and avoid first-person language."
            onChange={(value) => patch({ executive_summary: value })}
            onBlur={onCheckpoint}
          />
        )}

        {documentType === "cv" && activeSection === "experience" && (
          <EntityEditor
            records={data?.work_experience}
            recordLabel="Experience"
            fields={EXPERIENCE_FIELDS}
            listField={{ key: "points", label: "Impact bullets", itemLabel: "bullet", addLabel: "Add bullet", multiline: true }}
            onCheckpoint={onCheckpoint}
            onChange={(value, checkpoint) => patch({ work_experience: value }, checkpoint)}
          />
        )}

        {documentType === "cv" && activeSection === "projects" && (
          <EntityEditor
            records={data?.projects}
            recordLabel="Project"
            fields={PROJECT_FIELDS}
            onCheckpoint={onCheckpoint}
            onChange={(value, checkpoint) => patch({ projects: value }, checkpoint)}
          />
        )}

        {documentType === "cv" && activeSection === "volunteer" && (
          <EntityEditor
            records={data?.volunteer_experience}
            recordLabel="Volunteer role"
            fields={EXPERIENCE_FIELDS}
            listField={{ key: "points", label: "Contribution bullets", itemLabel: "bullet", addLabel: "Add bullet", multiline: true }}
            onCheckpoint={onCheckpoint}
            onChange={(value, checkpoint) => patch({ volunteer_experience: value }, checkpoint)}
          />
        )}

        {documentType === "cv" && activeSection === "education" && (
          <div className="inspector-source-note">
            <strong>Shared profile content</strong>
            <p>Edit degrees, dates, coursework, and grades from the Profile workspace.</p>
            <a href="/profile">Open Profile</a>
          </div>
        )}

        {documentType === "cv" && activeSection === "additional" && (
          <div className="inspector-source-note">
            <strong>Shared profile content</strong>
            <p>Edit language names and proficiency levels from the Profile workspace.</p>
            <a href="/profile">Open Profile</a>
          </div>
        )}

        {documentType === "cv" && activeSection === "skills" && (
          <div className="inspector-entity-list">
            {objectEntries(data?.skills).map(([category, skills], index, entries) => (
              <section className="inspector-entity-card" key={`${category}-${index}`}>
                <header>
                  <div>
                    <span>Skill group {index + 1}</span>
                    <strong>{category || "Untitled group"}</strong>
                  </div>
                  <MoveButtons
                    index={index}
                    count={entries.length}
                    noun="skill group"
                    onMove={(direction) => patch({ skills: Object.fromEntries(moveItem(entries, index, direction)) }, true)}
                    onRemove={() => patch({ skills: Object.fromEntries(entries.filter((_, entryIndex) => entryIndex !== index)) }, true)}
                  />
                </header>
                <div className="inspector-card-body">
                  <Field
                    label="Category"
                    value={category}
                    onBlur={onCheckpoint}
                    onChange={(value) => {
                      const next = entries.map(([key, items], entryIndex) => [entryIndex === index ? value : key, items]);
                      patch({ skills: Object.fromEntries(next) });
                    }}
                  />
                  <div className="inspector-nested-list">
                    <div className="inspector-subheading">Skills</div>
                    <StringListEditor
                      items={skills}
                      itemLabel="skill"
                      addLabel="Add skill"
                      onCheckpoint={onCheckpoint}
                      onChange={(value, checkpoint = false) => {
                        const next = entries.map(([key, items], entryIndex) => [key, entryIndex === index ? value : items]);
                        patch({ skills: Object.fromEntries(next) }, checkpoint);
                      }}
                    />
                  </div>
                </div>
              </section>
            ))}
            <AddButton
              label="Add skill group"
              onClick={() => {
                const skills = data?.skills || {};
                patch({ skills: { ...skills, [nextRecordKey(skills, "Skill group")]: [""] } }, true);
              }}
            />
          </div>
        )}

        {documentType === "cv" && activeSection === "certifications" && (
          <EntityEditor
            records={data?.certifications}
            recordLabel="Certification"
            fields={CERTIFICATION_FIELDS}
            onCheckpoint={onCheckpoint}
            onChange={(value, checkpoint) => patch({ certifications: value }, checkpoint)}
          />
        )}

        {documentType === "cv" && activeSection === "achievements" && (
          <EntityEditor
            records={data?.achievements}
            recordLabel="Achievement"
            fields={ACHIEVEMENT_FIELDS}
            onCheckpoint={onCheckpoint}
            onChange={(value, checkpoint) => patch({ achievements: value }, checkpoint)}
          />
        )}

        {documentType === "cv" && activeSection === "interests" && (
          <StringListEditor
            items={data?.interests}
            itemLabel="interest"
            addLabel="Add interest"
            onCheckpoint={onCheckpoint}
            onChange={(value, checkpoint = false) => patch({ interests: value }, checkpoint)}
          />
        )}

        {documentType === "letter" && activeSection === "details" && (
          <div className="inspector-field-stack">
            <Field label="Recipient" value={data?.addressee} onChange={(value) => patch({ addressee: value })} onBlur={onCheckpoint} />
            <Field label="Company" value={data?.company_name} onChange={(value) => patch({ company_name: value })} onBlur={onCheckpoint} />
            <Field label="Role title" value={data?.role_title} onChange={(value) => patch({ role_title: value })} onBlur={onCheckpoint} />
            <Field label="Date" value={data?.date} type="date" onChange={(value) => patch({ date: value })} onBlur={onCheckpoint} />
            <Field label="Subject" value={data?.subject_line} onChange={(value) => patch({ subject_line: value })} onBlur={onCheckpoint} />
          </div>
        )}

        {documentType === "letter" && activeSection === "opening" && (
          <Field
            label="Opening paragraph"
            value={data?.opening_paragraph}
            multiline
            rows={12}
            testId="letter-opening-input"
            hint="Name the role and make the relevance specific within the first two sentences."
            onChange={(value) => patch({ opening_paragraph: value })}
            onBlur={onCheckpoint}
          />
        )}

        {documentType === "letter" && activeSection === "body" && (
          <StringListEditor
            items={data?.body_paragraphs}
            itemLabel="paragraph"
            addLabel="Add evidence paragraph"
            multiline
            onCheckpoint={onCheckpoint}
            onChange={(value, checkpoint = false) => patch({ body_paragraphs: value }, checkpoint)}
          />
        )}

        {documentType === "letter" && activeSection === "closing" && (
          <Field
            label="Closing paragraph"
            value={data?.closing_paragraph}
            multiline
            rows={10}
            testId="letter-closing-input"
            onChange={(value) => patch({ closing_paragraph: value })}
            onBlur={onCheckpoint}
          />
        )}

        {documentType === "letter" && activeSection === "signature" && (
          <Field
            label="Sign-off"
            value={data?.sign_off}
            multiline
            rows={5}
            testId="letter-signature-input"
            onChange={(value) => patch({ sign_off: value })}
            onBlur={onCheckpoint}
          />
        )}
      </div>
    </div>
  );
}
