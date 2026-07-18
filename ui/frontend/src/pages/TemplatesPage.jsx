import { useCallback, useEffect, useMemo, useState } from "react";
import { api } from "../api/client.js";
import { useToast } from "../components/Toast.jsx";
import { TextField } from "../components/profile/ProfileFields.jsx";
import TemplateCanvas from "../components/templates/TemplateCanvas.jsx";
import LayerList from "../components/templates/LayerList.jsx";
import ResizableSidebar from "../components/ResizableSidebar.jsx";
import FontFamilyPicker from "../components/templates/FontFamilyPicker.jsx";
import LayerTypography from "../components/templates/LayerTypography.jsx";

export const COMPONENTS = [
  ["contact", "Contact"], ["summary", "Professional Summary"], ["skills", "Core Skills"],
  ["experience", "Professional Experience"], ["projects", "Selected Projects"],
  ["volunteer", "Volunteer Experience"], ["education", "Education"],
  ["certifications", "Certifications"], ["achievements", "Achievements"],
  ["additional", "Additional Information"],
];

export const DEFAULT_LAYOUT = {
  version: 2,
  pageWidth: 794,
  pageHeight: 1123,
  pagePadding: 60,
  pageBackground: "#ffffff",
  fontSize: 13.333,
  lineHeight: 1.42,
  fontFamily: "Arial, Helvetica, sans-serif",
  zoom: 0.72,
  sections: COMPONENTS.map(([id, label], index) => ({
    id, label, visible: true, locked: id === "contact", gapBefore: index ? 15 : 0,
    padding: 0, opacity: 1, textAlign: "left", bgColor: "#ffffff", typography: {},
  })),
};

function mergeLayout(saved) {
  if (!saved?.sections?.length) return structuredClone(DEFAULT_LAYOUT);
  const labels = Object.fromEntries(COMPONENTS);
  const sections = saved.sections
    .filter((section) => labels[section.id])
    .map((section, index) => ({
      ...DEFAULT_LAYOUT.sections.find((item) => item.id === section.id),
      ...section,
      label: labels[section.id],
      gapBefore: Number(section.gapBefore ?? (index ? 15 : 0)),
    }));
  return { ...DEFAULT_LAYOUT, ...saved, version: 2, sections };
}

function PropRow({ label, children }) {
  return <div className="ps-prop-row"><label>{label}</label>{children}</div>;
}

function RangeInput({ value, onChange, min, max, step = 1, unit = "px" }) {
  return (
    <div className="ps-range-field">
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} />
      <input type="number" className="ps-num-input" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} />
      <span className="ps-unit">{unit}</span>
    </div>
  );
}

export default function TemplatesPage() {
  const { showToast } = useToast();
  const [catalog, setCatalog] = useState({});
  const [custom, setCustom] = useState({});
  const [selectedId, setSelectedId] = useState("");
  const [name, setName] = useState("");
  const [layout, setLayout] = useState(() => structuredClone(DEFAULT_LAYOUT));
  const [activeSection, setActiveSection] = useState("contact");
  const [rightTab, setRightTab] = useState("layer");
  const [saving, setSaving] = useState(false);

  const allTemplates = useMemo(() => ({ ...catalog, ...custom }), [catalog, custom]);
  const sections = layout.sections || [];
  const current = sections.find((section) => section.id === activeSection);

  const loadList = useCallback(async () => {
    try {
      const data = await api.listTemplates();
      setCatalog(data.catalog || {});
      setCustom(data.custom || {});
      const ids = Object.keys({ ...(data.catalog || {}), ...(data.custom || {}) });
      setSelectedId((id) => id || ids[0] || "");
    } catch (error) { showToast(error.message, "error"); }
  }, [showToast]);

  const loadTemplate = useCallback(async (id) => {
    if (!id) return;
    try {
      const data = await api.getTemplate(id);
      const next = mergeLayout(data.layout);
      setName(data.name || id);
      setLayout(next);
      setActiveSection(next.sections[0]?.id || "");
    } catch (error) { showToast(error.message, "error"); }
  }, [showToast]);

  useEffect(() => { void loadList(); }, [loadList]);
  useEffect(() => { void loadTemplate(selectedId); }, [selectedId, loadTemplate]);

  const updateSection = useCallback((id, patch) => {
    setLayout((value) => ({ ...value, sections: value.sections.map((section) => section.id === id ? { ...section, ...patch } : section) }));
  }, []);

  const reorderComponents = useCallback((dragId, insertAt) => {
    setLayout((value) => {
      const moved = value.sections.find((section) => section.id === dragId);
      if (!moved) return value;
      const next = value.sections.filter((section) => section.id !== dragId);
      next.splice(Math.max(0, Math.min(insertAt, next.length)), 0, moved);
      return { ...value, sections: next };
    });
  }, []);

  function addComponent() {
    const available = COMPONENTS.filter(([id]) => !sections.some((section) => section.id === id));
    if (!available.length) return showToast("All supported CV components are already in this template");
    const [id, label] = available[0];
    setLayout((value) => ({ ...value, sections: [...value.sections, { ...DEFAULT_LAYOUT.sections.find((item) => item.id === id), visible: true }] }));
    setActiveSection(id);
    showToast(`${label} added`);
  }

  function removeComponent() {
    if (!current || current.locked || !window.confirm(`Remove ${current.label} from this template?`)) return;
    const remaining = sections.filter((section) => section.id !== current.id);
    setLayout((value) => ({ ...value, sections: remaining }));
    setActiveSection(remaining[0]?.id || "");
  }

  async function save() {
    setSaving(true);
    try {
      await api.saveTemplate(selectedId, { name, category: "cv", layout });
      await loadList();
      showToast("CV template saved. Live Draft and PDF will use this layout.");
    } catch (error) { showToast(error.message, "error"); }
    finally { setSaving(false); }
  }

  async function createNew() {
    const id = window.prompt("Template id (e.g. compact_cv):");
    if (!id) return;
    setSaving(true);
    try {
      await api.createTemplate({ id, name: id, category: "cv", layout: DEFAULT_LAYOUT });
      await loadList();
      setSelectedId(id);
      showToast("CV template created");
    } catch (error) { showToast(error.message, "error"); }
    finally { setSaving(false); }
  }

  return (
    <div className="ps-editor">
      <header className="ps-toolbar">
        <div className="ps-toolbar-left">
          <select value={selectedId} onChange={(e) => setSelectedId(e.target.value)} className="ps-select" aria-label="CV template">
            {Object.entries(allTemplates).map(([id, template]) => <option key={id} value={id}>{template.name || id}</option>)}
          </select>
          <button type="button" className="ps-tool-btn" onClick={createNew}>New</button>
          <button type="button" className="ps-tool-btn primary" onClick={save} disabled={saving}>{saving ? "Saving..." : "Save"}</button>
        </div>
        <div className="ps-toolbar-center"><span className="ps-doc-name">{name || "Untitled CV"}</span></div>
        <div className="ps-toolbar-right">
          <span className="ps-layout-contract-note">Component flow · 1 px spacing</span>
          <label className="ps-zoom-label">Zoom <input type="range" min={0.5} max={1.1} step={0.05} value={layout.zoom || 0.72} onChange={(e) => setLayout({ ...layout, zoom: Number(e.target.value) })} /><span>{Math.round((layout.zoom || 0.72) * 100)}%</span></label>
        </div>
      </header>

      <div className="ps-body">
        <aside className="ps-panel ps-layers">
          <div className="ps-panel-head"><h3>CV Components</h3><button type="button" className="ps-icon-btn" onClick={addComponent} title="Add missing component">+</button></div>
          <p className="ps-panel-hint">Drag components to set the exact CV order. Hidden components are not generated by the model.</p>
          <LayerList layers={sections} activeId={activeSection} onSelect={setActiveSection} onReorder={reorderComponents} onToggleVisible={(id, visible) => updateSection(id, { visible: !visible })} />
        </aside>

        <TemplateCanvas layout={layout} sections={sections} activeSection={activeSection} onSelectSection={setActiveSection} />

        <ResizableSidebar className="ps-panel ps-properties" storageKey="joblication.sidebar.templates" defaultWidth={310} minWidth={270} maxWidth={560}>
          <div className="ps-tabs">
            <button type="button" className={rightTab === "document" ? "active" : ""} onClick={() => setRightTab("document")}>Document</button>
            <button type="button" className={rightTab === "layer" ? "active" : ""} onClick={() => setRightTab("layer")}>Component</button>
          </div>
          {rightTab === "document" && <div className="ps-props">
            <TextField label="Template name" value={name} onChange={setName} />
            <p className="ps-readonly-kind"><strong>CV template</strong><span>Cover letters use their own fixed layout.</span></p>
            <PropRow label="Page width (px)"><input type="number" className="ps-num-input full" value={layout.pageWidth} onChange={(e) => setLayout({ ...layout, pageWidth: Number(e.target.value) })} /></PropRow>
            <PropRow label="Page height (px)"><input type="number" className="ps-num-input full" value={layout.pageHeight} onChange={(e) => setLayout({ ...layout, pageHeight: Number(e.target.value) })} /></PropRow>
            <PropRow label="Page padding"><RangeInput value={layout.pagePadding} onChange={(value) => setLayout({ ...layout, pagePadding: value })} min={0} max={120} /></PropRow>
            <PropRow label="Background"><input type="color" className="ps-color-input" value={layout.pageBackground || "#ffffff"} onChange={(e) => setLayout({ ...layout, pageBackground: e.target.value })} /></PropRow>
            <PropRow label="Base font size"><RangeInput value={layout.fontSize} onChange={(value) => setLayout({ ...layout, fontSize: value })} min={8} max={20} step={0.25} /></PropRow>
            <PropRow label="Line height"><RangeInput value={layout.lineHeight} onChange={(value) => setLayout({ ...layout, lineHeight: value })} min={1} max={2} step={0.05} unit="" /></PropRow>
            <PropRow label="Font family"><FontFamilyPicker value={layout.fontFamily} onChange={(fontFamily) => setLayout({ ...layout, fontFamily })} /></PropRow>
          </div>}
          {rightTab === "layer" && current && <div className="ps-props">
            <h4 className="ps-layer-title">{current.label}</h4>
            <PropRow label="Gap before"><RangeInput value={current.gapBefore ?? 0} onChange={(value) => updateSection(current.id, { gapBefore: value })} min={0} max={240} step={1} /></PropRow>
            <PropRow label="Layer padding"><RangeInput value={current.padding ?? 0} onChange={(value) => updateSection(current.id, { padding: value })} min={0} max={80} step={1} /></PropRow>
            <PropRow label="Opacity"><RangeInput value={Math.round((current.opacity ?? 1) * 100)} onChange={(value) => updateSection(current.id, { opacity: value / 100 })} min={10} max={100} unit="%" /></PropRow>
            <PropRow label="Text align"><select className="ps-select full" value={current.textAlign || "left"} onChange={(e) => updateSection(current.id, { textAlign: e.target.value })}><option value="left">Left</option><option value="center">Center</option><option value="right">Right</option><option value="justify">Justify</option></select></PropRow>
            <PropRow label="Fill color"><input type="color" className="ps-color-input" value={current.bgColor || "#ffffff"} onChange={(e) => updateSection(current.id, { bgColor: e.target.value })} /></PropRow>
            <div className="ps-type-divider"><span>Typography</span></div>
            <LayerTypography layer={current} onPatch={(patch) => updateSection(current.id, patch)} />
            <div className="ps-check-group"><label className="ps-check-inline"><input type="checkbox" checked={current.visible !== false} onChange={(e) => updateSection(current.id, { visible: e.target.checked })} />Visible / generate</label></div>
            {!current.locked && <button type="button" className="ps-danger-btn" onClick={removeComponent}>Remove component</button>}
          </div>}
          {rightTab === "layer" && !current && <p className="ps-empty-props">Select a CV component.</p>}
        </ResizableSidebar>
      </div>
    </div>
  );
}
