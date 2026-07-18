function valuesOf(value) {
  if (Array.isArray(value)) return value;
  if (value && typeof value === "object") return Object.values(value);
  return [];
}

function formatDate(value) {
  if (!value) return "Present";
  const match = String(value).match(/^(\d{4})-(\d{2})$/);
  if (!match) return String(value);
  const date = new Date(Number(match[1]), Number(match[2]) - 1, 1);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function dateRange(start, end) {
  if (!start && !end) return "";
  return `${formatDate(start)} - ${formatDate(end)}`;
}

function educationDegree(entry) {
  return [entry?.degree, entry?.field].filter(Boolean).join(", ");
}

function languageSummary(languages) {
  return valuesOf(languages)
    .map((item) => {
      if (typeof item === "string") return item;
      if (!item || typeof item !== "object") return "";
      const name = String(item.name || "").trim();
      const level = String(item.level || "").trim();
      return name && level ? `${name} (${level})` : name;
    })
    .filter(Boolean)
    .join(", ");
}

function componentStyle(component = {}) {
  return {
    marginTop: `${component.gapBefore || 0}px`,
    padding: `${component.padding || 0}px`,
    opacity: component.opacity ?? 1,
    textAlign: component.textAlign || "left",
    background: component.bgColor || "transparent",
    fontFamily: component.bodyFontFamily || undefined,
    fontSize: component.bodyFontSize ? `${component.bodyFontSize}px` : undefined,
    fontWeight: component.bodyBold ? 700 : undefined,
    fontStyle: component.bodyItalic ? "italic" : undefined,
    textDecoration: component.bodyUnderline ? "underline" : undefined,
    color: component.bodyColor || undefined,
  };
}

function headlineStyle(component = {}) {
  return {
    fontFamily: component.headlineFontFamily || undefined,
    fontSize: component.headlineFontSize ? `${component.headlineFontSize}px` : undefined,
    fontWeight: component.headlineBold === undefined ? undefined : component.headlineBold ? 700 : 400,
    fontStyle: component.headlineItalic ? "italic" : undefined,
    textDecoration: component.headlineUnderline ? "underline" : undefined,
    color: component.headlineColor || undefined,
  };
}

function Section({ id, title, activeSection, onSelect, component, children }) {
  return (
    <section
      className={`document-preview-section ${activeSection === id ? "active" : ""}`}
      onClick={() => onSelect(id)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") onSelect(id);
      }}
      role="button"
      tabIndex={0}
      aria-label={`Edit ${title}`}
      data-section={id}
      style={component ? componentStyle(component) : undefined}
    >
      <h2 style={headlineStyle(component)}>{title}</h2>
      {children}
    </section>
  );
}

function IdentityHeader({ identity, roleTitle, onSelect, component }) {
  const name = [identity?.first_name, identity?.last_name].filter(Boolean).join(" ") || "Your name";
  const contact = [identity?.email, identity?.contact, identity?.address].filter(Boolean);
  const links = [identity?.linkedin, identity?.github, identity?.portfolio].filter(Boolean);

  return (
    <header
      className="document-preview-header"
      onClick={() => onSelect("profile")}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") onSelect("profile");
      }}
      role="button"
      tabIndex={0}
      aria-label="Open profile details"
      style={component ? componentStyle(component) : undefined}
    >
      <div>
        <h1>{name}</h1>
        <p className="document-role">{roleTitle || "Target role"}</p>
      </div>
      <div className="document-contact">
        {contact.map((item) => <span key={item}>{item}</span>)}
        {links.map((item) => <span key={item}>{item}</span>)}
      </div>
    </header>
  );
}

function CvPreview({ data, identity, activeSection, onSelect, layout }) {
  const experience = valuesOf(data?.work_experience);
  const projects = valuesOf(data?.projects);
  const volunteer = valuesOf(data?.volunteer_experience);
  const education = valuesOf(identity?.education);
  const certifications = valuesOf(data?.certifications);
  const achievements = valuesOf(data?.achievements);
  const languages = languageSummary(identity?.languages);
  const skills = data?.skills && typeof data.skills === "object" ? Object.entries(data.skills) : [];

  const components = layout?.sections?.filter((component) => component.visible !== false) || [];
  function renderComponent(component) {
    const shared = { activeSection, onSelect, component };
    if (component.id === "contact") return <IdentityHeader key={component.id} identity={identity} roleTitle={data?.role_title} onSelect={onSelect} component={component} />;
    if (component.id === "summary") return <Section key={component.id} id="summary" title="Professional Summary" {...shared}><p>{data?.executive_summary || "Add a concise, role-specific professional summary."}</p></Section>;
    if (component.id === "skills") return <Section key={component.id} id="skills" title="Core Skills" {...shared}>
        <div className="document-skill-list">
          {skills.map(([category, items]) => (
            <p key={category}>
              <strong>{category}:</strong> {valuesOf(items).join(", ")}
            </p>
          ))}
          {!skills.length && <p className="document-placeholder">Add skills grouped by standard categories.</p>}
        </div>
      </Section>;
    if (component.id === "experience") return <Section key={component.id} id="experience" title="Professional Experience" {...shared}>
        {experience.map((entry, index) => (
          <div className="document-entry" key={`${entry?.company || "experience"}-${index}`}>
            <div className="document-entry-heading">
              <div>
                <h3>{entry?.title || "Position title"}</h3>
                <p className="document-subtitle">{entry?.company || "Company"}</p>
              </div>
              <time>{dateRange(entry?.start_date, entry?.end_date)}</time>
            </div>
            {!!valuesOf(entry?.points).length && (
              <ul>
                {valuesOf(entry.points).map((point, pointIndex) => <li key={`${pointIndex}-${point}`}>{point}</li>)}
              </ul>
            )}
          </div>
        ))}
        {!experience.length && <p className="document-placeholder">Add relevant professional experience.</p>}
      </Section>;
    if (component.id === "projects") return <Section key={component.id} id="projects" title="Selected Projects" {...shared}>
        {projects.map((project, index) => (
          <div className="document-entry" key={`${project?.title || "project"}-${index}`}>
            <div className="document-entry-heading">
              <h3>{project?.title || "Project title"}</h3>
              <time>{dateRange(project?.start_date, project?.end_date)}</time>
            </div>
            <p>{project?.description || "Describe the problem, your contribution, and the outcome."}</p>
          </div>
        ))}
        {!projects.length && <p className="document-placeholder">Add two or three relevant projects.</p>}
      </Section>;
    if (component.id === "volunteer" && volunteer.length) return <Section key={component.id} id="volunteer" title="Volunteer Experience" {...shared}>
          {volunteer.map((entry, index) => (
            <div className="document-entry" key={`${entry?.company || entry?.organization || "volunteer"}-${index}`}>
              <div className="document-entry-heading">
                <div>
                  <h3>{entry?.title || "Volunteer role"}</h3>
                  <p className="document-subtitle">{entry?.company || entry?.organization || "Organization"}</p>
                </div>
                <time>{dateRange(entry?.start_date, entry?.end_date)}</time>
              </div>
              {!!valuesOf(entry?.points).length && (
                <ul>{valuesOf(entry.points).map((point, pointIndex) => <li key={`${pointIndex}-${point}`}>{point}</li>)}</ul>
              )}
              {!valuesOf(entry?.points).length && entry?.description && <p>{entry.description}</p>}
            </div>
          ))}
        </Section>;
    if (component.id === "education" && education.length) return <Section key={component.id} id="education" title="Education" {...shared}>
          {education.map((entry, index) => (
            <div className="document-entry" key={`${entry?.school || "education"}-${index}`}>
              <div className="document-entry-heading">
                <h3>{entry?.school || "Institution"}</h3>
                <time>{dateRange(entry?.start_date, entry?.end_date)}</time>
              </div>
              {educationDegree(entry) && <p>{educationDegree(entry)}</p>}
              {(entry?.cgpa || entry?.gpa) && <p><strong>CGPA:</strong> {entry.cgpa || entry.gpa}</p>}
              {entry?.courses && <p><strong>Relevant Coursework:</strong> {entry.courses}</p>}
            </div>
          ))}
        </Section>;
    if (component.id === "certifications" && certifications.length) return <Section key={component.id} id="certifications" title="Certifications" {...shared}>
          {certifications.map((item, index) => (
            <div className="document-compact-entry" key={`${item?.name || "certification"}-${index}`}>
              <div>
                <strong>{item?.name || "Certification"}</strong>
                {item?.issuer && <span> - {item.issuer}</span>}
              </div>
              <time>{formatDate(item?.date)}</time>
            </div>
          ))}
        </Section>;
    if (component.id === "achievements" && achievements.length) return <Section key={component.id} id="achievements" title="Achievements" {...shared}>
          {achievements.map((item, index) => (
            <div className="document-entry" key={`${item?.name || "achievement"}-${index}`}>
              <div className="document-entry-heading">
                <h3>{item?.name || "Achievement"}</h3>
                <time>{formatDate(item?.date)}</time>
              </div>
              {item?.description && <p>{item.description}</p>}
            </div>
          ))}
        </Section>;
    if (component.id === "additional" && languages) return <Section key={component.id} id="additional" title="Additional Information" {...shared}>
          <p><strong>Languages:</strong> {languages}</p>
        </Section>;
    return null;
  }

  return (
    <article
      className="document-sheet cv-sheet"
      aria-label="Live CV preview"
      style={{
        width: `${layout?.pageWidth || 794}px`,
        minHeight: `${layout?.pageHeight || 1123}px`,
        padding: `${layout?.pagePadding ?? 60}px`,
        background: layout?.pageBackground || "#ffffff",
        fontFamily: layout?.fontFamily || "Arial, Helvetica, sans-serif",
        fontSize: `${layout?.fontSize || 13.333}px`,
        lineHeight: layout?.lineHeight || 1.42,
      }}
      data-template-layout="v2"
    >
      {components.map(renderComponent)}
    </article>
  );
}

function CoverLetterPreview({ data, identity, activeSection, onSelect }) {
  const name = [identity?.first_name, identity?.last_name].filter(Boolean).join(" ") || "Your name";
  const bodyParagraphs = valuesOf(data?.body_paragraphs);
  const signOff = String(data?.sign_off || `Sincerely,\n${name}`).split("\n");

  return (
    <article className="document-sheet letter-sheet" aria-label="Live cover letter preview">
      <header className="letter-preview-header">
        <h1>{name}</h1>
        <p>{[identity?.email, identity?.contact, identity?.address].filter(Boolean).join("  |  ")}</p>
      </header>

      <Section id="details" title="Letter Details" activeSection={activeSection} onSelect={onSelect}>
        <div className="letter-address-block">
          <time>{data?.date || "Date"}</time>
          <p>{data?.addressee || "Hiring Manager"}</p>
          <p>{data?.company_name || "Company"}</p>
          <p>{data?.role_title || "Role title"}</p>
        </div>
        {data?.subject_line && <p className="letter-subject"><strong>Re:</strong> {data.subject_line}</p>}
      </Section>

      <div className="letter-salutation">Dear {data?.addressee || "Hiring Manager"},</div>

      <Section id="opening" title="Opening" activeSection={activeSection} onSelect={onSelect}>
        <p>{data?.opening_paragraph || "Open with a specific connection between your experience and this role."}</p>
      </Section>

      <Section id="body" title="Evidence" activeSection={activeSection} onSelect={onSelect}>
        {bodyParagraphs.map((paragraph, index) => <p key={`${index}-${paragraph}`}>{paragraph}</p>)}
        {!bodyParagraphs.length && <p className="document-placeholder">Add one or two evidence-led body paragraphs.</p>}
      </Section>

      <Section id="closing" title="Closing" activeSection={activeSection} onSelect={onSelect}>
        <p>{data?.closing_paragraph || "Close with the value you can bring and a clear next step."}</p>
      </Section>

      <Section id="signature" title="Signature" activeSection={activeSection} onSelect={onSelect}>
        <div className="letter-signoff">
          {signOff.map((line, index) => <span key={`${index}-${line}`}>{line || <br />}</span>)}
        </div>
      </Section>
    </article>
  );
}

export default function DocumentPreview({ documentType, data, identity, activeSection, onSelect, templateLayout }) {
  if (documentType === "letter") {
    return <CoverLetterPreview data={data} identity={identity} activeSection={activeSection} onSelect={onSelect} />;
  }
  return <CvPreview data={data} identity={identity} activeSection={activeSection} onSelect={onSelect} layout={templateLayout} />;
}
