import { resolveLayerTypography } from "./LayerTypography.jsx";

const PREVIEW = {
  contact: ["Mahir Asif", "AI Engineer · email · phone · Kuala Lumpur"],
  summary: ["Professional Summary", "Role-specific summary with relevant experience and searchable keywords."],
  skills: ["Core Skills", "AI & Machine Learning: Python, PyTorch, RAG · Backend: FastAPI, JavaScript"],
  experience: ["Professional Experience", "Role title · Company                         Oct 2025 - Present\n• Evidence-led achievement with scope, tools, and outcome."],
  projects: ["Selected Projects", "Relevant project                         Jan 2025 - Present\nConcise problem, contribution, technology, and result."],
  volunteer: ["Volunteer Experience", "Volunteer role · Organization"],
  education: ["Education", "University · Degree, Field"],
  certifications: ["Certifications", "Certification · Issuer"],
  achievements: ["Achievements", "Achievement title · Supporting evidence"],
  additional: ["Additional Information", "Languages: English, Malay"],
};

function componentStyle(section, layout) {
  const typography = resolveLayerTypography(section, layout);
  return {
    marginTop: `${section.gapBefore || 0}px`,
    padding: `${section.padding || 0}px`,
    opacity: section.opacity ?? 1,
    textAlign: section.textAlign || "left",
    background: section.bgColor || "transparent",
    fontFamily: typography.body.fontFamily,
    fontSize: `${typography.body.fontSize}px`,
    fontWeight: typography.body.fontWeight,
    fontStyle: typography.body.fontStyle,
    textDecoration: typography.body.textDecoration,
    color: typography.body.color,
  };
}

export default function TemplateCanvas({ layout, sections, activeSection, onSelectSection }) {
  const zoom = layout.zoom || 0.72;
  const pageWidth = layout.pageWidth || 794;
  const pageHeight = layout.pageHeight || 1123;
  return (
    <div className="ps-canvas-scroll">
      <div className="ps-flow-ruler" aria-hidden><span>0</span><span>px</span></div>
      <div className="ps-canvas-stage" style={{ width: pageWidth * zoom, minHeight: pageHeight * zoom }}>
        <div className="ps-canvas ps-flow-canvas" style={{ width: pageWidth, minHeight: pageHeight, padding: layout.pagePadding, background: layout.pageBackground, fontFamily: layout.fontFamily, fontSize: layout.fontSize, lineHeight: layout.lineHeight, transform: `scale(${zoom})`, transformOrigin: "top left" }}>
          {sections.filter((section) => section.visible !== false).map((section) => {
            const [title, body] = PREVIEW[section.id] || [section.label, "Component preview"];
            return (
              <section key={section.id} className={`ps-flow-component ${activeSection === section.id ? "selected" : ""}`} style={componentStyle(section, layout)} onClick={() => onSelectSection(section.id)} data-component={section.id}>
                {section.id === "contact" ? <><h1>{title}</h1><p>{body}</p></> : <><h2>{title}</h2><p>{body}</p></>}
                <span className="ps-gap-marker">{section.gapBefore || 0}px</span>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
