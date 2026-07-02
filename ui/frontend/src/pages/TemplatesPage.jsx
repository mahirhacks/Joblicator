import { useCallback, useEffect, useMemo, useState } from "react";
import { api } from "../api/client.js";
import { useToast } from "../components/Toast.jsx";
import { TextField } from "../components/profile/ProfileFields.jsx";
import TemplateCanvas from "../components/templates/TemplateCanvas.jsx";
import LayerList from "../components/templates/LayerList.jsx";
import ResizableSidebar from "../components/ResizableSidebar.jsx";
import FontFamilyPicker from "../components/templates/FontFamilyPicker.jsx";
import LayerTypography from "../components/templates/LayerTypography.jsx";

export const DEFAULT_LAYOUT = {
  pageWidth: 595,
  pageHeight: 842,
  pagePadding: 40,
  pageBackground: "#ffffff",
  fontSize: 11,
  lineHeight: 1.45,
  fontFamily: "Georgia, serif",
  zoom: 0.85,
  snapToGrid: true,
  gridSize: 5,
  showGrid: true,
  sections: [
    { id: "contact", label: "Contact", x: 5, y: 3, w: 90, h: 8, visible: true, locked: false, zIndex: 1, opacity: 1, textAlign: "left", padding: 8, bgColor: "rgba(47, 140, 239, 0.06)" },
    { id: "summary", label: "Summary", x: 5, y: 12, w: 90, h: 10, visible: true, locked: false, zIndex: 2, opacity: 1, textAlign: "left", padding: 8, bgColor: "rgba(47, 140, 239, 0.06)" },
    { id: "experience", label: "Experience", x: 5, y: 24, w: 90, h: 30, visible: true, locked: false, zIndex: 3, opacity: 1, textAlign: "left", padding: 8, bgColor: "rgba(47, 140, 239, 0.06)" },
    { id: "skills", label: "Skills", x: 5, y: 56, w: 90, h: 12, visible: true, locked: false, zIndex: 4, opacity: 1, textAlign: "left", padding: 8, bgColor: "rgba(47, 140, 239, 0.06)" },
    { id: "education", label: "Education", x: 5, y: 70, w: 90, h: 12, visible: true, locked: false, zIndex: 5, opacity: 1, textAlign: "left", padding: 8, bgColor: "rgba(47, 140, 239, 0.06)" },
  ],
};

function mergeLayout(saved) {
  if (!saved) return { ...DEFAULT_LAYOUT, sections: DEFAULT_LAYOUT.sections.map((s) => ({ ...s })) };
  const sections = (saved.sections || DEFAULT_LAYOUT.sections).map((s) => ({
    ...DEFAULT_LAYOUT.sections[0],
    ...s,
  }));
  return { ...DEFAULT_LAYOUT, ...saved, sections };
}

function PropRow({ label, children }) {
  return (
    <div className="ps-prop-row">
      <label>{label}</label>
      {children}
    </div>
  );
}

function RangeInput({ value, onChange, min, max, step = 1, unit = "%" }) {
  return (
    <div className="ps-range-field">
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} />
      <input
        type="number"
        className="ps-num-input"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
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
  const [category, setCategory] = useState("cv");
  const [source, setSource] = useState("");
  const [layout, setLayout] = useState(() => mergeLayout(null));
  const [activeSection, setActiveSection] = useState("contact");
  const [rightTab, setRightTab] = useState("layer");
  const [saving, setSaving] = useState(false);

  const allTemplates = useMemo(() => ({ ...catalog, ...custom }), [catalog, custom]);
  const sections = layout.sections || [];
  const current = sections.find((s) => s.id === activeSection);

  const loadList = useCallback(async () => {
    try {
      const data = await api.listTemplates();
      setCatalog(data.catalog || {});
      setCustom(data.custom || {});
      const ids = Object.keys({ ...(data.catalog || {}), ...(data.custom || {}) });
      if (ids.length && !selectedId) setSelectedId(ids[0]);
    } catch (e) {
      showToast(e.message, "error");
    }
  }, [selectedId, showToast]);

  const loadTemplate = useCallback(
    async (id) => {
      if (!id) return;
      try {
        const data = await api.getTemplate(id);
        setName(data.name || id);
        setCategory(data.category || "cv");
        setSource(data.source || "");
        const merged = mergeLayout(data.layout);
        setLayout(merged);
        if (merged.sections?.length) setActiveSection(merged.sections[0].id);
      } catch (e) {
        showToast(e.message, "error");
      }
    },
    [showToast]
  );

  useEffect(() => {
    loadList();
  }, [loadList]);

  useEffect(() => {
    if (selectedId) loadTemplate(selectedId);
  }, [selectedId, loadTemplate]);

  const updateSection = useCallback((id, patch) => {
    setLayout((l) => ({
      ...l,
      sections: l.sections.map((s) => (s.id === id ? { ...s, ...patch } : s)),
    }));
  }, []);

  function addSection() {
    const label = window.prompt("Layer name:");
    if (!label) return;
    const id = label.toLowerCase().replace(/\s+/g, "_");
    const maxZ = Math.max(0, ...sections.map((s) => s.zIndex ?? 1));
    setLayout((l) => ({
      ...l,
      sections: [
        ...l.sections,
        {
          id,
          label,
          x: 10,
          y: 10,
          w: 80,
          h: 10,
          visible: true,
          locked: false,
          zIndex: maxZ + 1,
          opacity: 1,
          textAlign: "left",
          padding: 8,
          bgColor: "rgba(47, 140, 239, 0.06)",
        },
      ],
    }));
    setActiveSection(id);
  }

  function removeSection() {
    if (!current || !window.confirm(`Delete layer "${current.label}"?`)) return;
    setLayout((l) => ({
      ...l,
      sections: l.sections.filter((s) => s.id !== activeSection),
    }));
    setActiveSection(sections[0]?.id || "");
  }

  const reorderLayers = useCallback((dragId, insertAt) => {
    setLayout((l) => {
      const sorted = [...l.sections].sort((a, b) => (b.zIndex ?? 1) - (a.zIndex ?? 1));
      const fromIdx = sorted.findIndex((s) => s.id === dragId);
      if (fromIdx < 0) return l;
      const moved = sorted[fromIdx];
      const next = sorted.filter((s) => s.id !== dragId);
      const toIdx = Math.max(0, Math.min(insertAt, next.length));
      next.splice(toIdx, 0, moved);
      const sections = next.map((s, i) => ({ ...s, zIndex: next.length - i }));
      return { ...l, sections };
    });
  }, []);

  async function save() {
    setSaving(true);
    try {
      await api.saveTemplate(selectedId, { name, category, source, layout });
      showToast("Template saved");
      await loadList();
    } catch (e) {
      showToast(e.message, "error");
    } finally {
      setSaving(false);
    }
  }

  async function createNew() {
    const id = window.prompt("Template id (e.g. my_cv):");
    if (!id) return;
    setSaving(true);
    try {
      await api.createTemplate({
        id,
        name: id,
        category: "cv",
        source: "<!-- Custom template -->\n",
        layout: DEFAULT_LAYOUT,
      });
      setSelectedId(id);
      await loadList();
      showToast("Template created");
    } catch (e) {
      showToast(e.message, "error");
    } finally {
      setSaving(false);
    }
  }

  const sortedLayers = [...sections].sort((a, b) => (b.zIndex ?? 1) - (a.zIndex ?? 1));

  return (
    <div className="ps-editor">
      <header className="ps-toolbar">
        <div className="ps-toolbar-left">
          <select value={selectedId} onChange={(e) => setSelectedId(e.target.value)} className="ps-select">
            {Object.entries(allTemplates).map(([id, t]) => (
              <option key={id} value={id}>
                {t.name || id}
              </option>
            ))}
          </select>
          <button type="button" className="ps-tool-btn" onClick={createNew}>
            New
          </button>
          <button type="button" className="ps-tool-btn primary" onClick={save} disabled={saving}>
            {saving ? "Saving…" : "Save"}
          </button>
        </div>
        <div className="ps-toolbar-center">
          <span className="ps-doc-name">{name || "Untitled"}</span>
        </div>
        <div className="ps-toolbar-right">
          <label className="ps-zoom-label">
            Zoom
            <input
              type="range"
              min={0.5}
              max={1.25}
              step={0.05}
              value={layout.zoom || 0.85}
              onChange={(e) => setLayout({ ...layout, zoom: Number(e.target.value) })}
            />
            <span>{Math.round((layout.zoom || 0.85) * 100)}%</span>
          </label>
          <label className="ps-check-inline">
            <input
              type="checkbox"
              checked={layout.snapToGrid}
              onChange={(e) => setLayout({ ...layout, snapToGrid: e.target.checked })}
            />
            Snap
          </label>
          <label className="ps-check-inline">
            <input
              type="checkbox"
              checked={layout.showGrid}
              onChange={(e) => setLayout({ ...layout, showGrid: e.target.checked })}
            />
            Grid
          </label>
        </div>
      </header>

      <div className="ps-body">
        <aside className="ps-panel ps-layers">
          <div className="ps-panel-head">
            <h3>Layers</h3>
            <button type="button" className="ps-icon-btn" onClick={addSection} title="Add layer">
              +
            </button>
          </div>
          <LayerList
            layers={sortedLayers}
            activeId={activeSection}
            onSelect={setActiveSection}
            onReorder={reorderLayers}
            onToggleVisible={(id, visible) => updateSection(id, { visible: !visible })}
          />
        </aside>

        <TemplateCanvas
          layout={layout}
          sections={sections}
          activeSection={activeSection}
          onSelectSection={setActiveSection}
          onUpdateSection={updateSection}
        />

        <ResizableSidebar
          className="ps-panel ps-properties"
          storageKey="joblication.sidebar.templates"
          defaultWidth={300}
          minWidth={260}
          maxWidth={560}
        >
          <div className="ps-tabs">
            <button type="button" className={rightTab === "document" ? "active" : ""} onClick={() => setRightTab("document")}>
              Document
            </button>
            <button type="button" className={rightTab === "layer" ? "active" : ""} onClick={() => setRightTab("layer")}>
              Layer
            </button>
            <button type="button" className={rightTab === "source" ? "active" : ""} onClick={() => setRightTab("source")}>
              Source
            </button>
          </div>

          {rightTab === "document" && (
            <div className="ps-props">
              <TextField label="Template name" value={name} onChange={setName} />
              <PropRow label="Category">
                <select value={category} onChange={(e) => setCategory(e.target.value)} className="ps-select full">
                  <option value="cv">CV</option>
                  <option value="cover_letter">Cover letter</option>
                </select>
              </PropRow>
              <PropRow label="Page width (px)">
                <input
                  type="number"
                  className="ps-num-input full"
                  value={layout.pageWidth}
                  onChange={(e) => setLayout({ ...layout, pageWidth: Number(e.target.value) })}
                />
              </PropRow>
              <PropRow label="Page height (px)">
                <input
                  type="number"
                  className="ps-num-input full"
                  value={layout.pageHeight}
                  onChange={(e) => setLayout({ ...layout, pageHeight: Number(e.target.value) })}
                />
              </PropRow>
              <PropRow label="Padding (px)">
                <RangeInput
                  value={layout.pagePadding}
                  onChange={(v) => setLayout({ ...layout, pagePadding: v })}
                  min={0}
                  max={120}
                  unit="px"
                />
              </PropRow>
              <PropRow label="Background">
                <input
                  type="color"
                  className="ps-color-input"
                  value={layout.pageBackground || "#ffffff"}
                  onChange={(e) => setLayout({ ...layout, pageBackground: e.target.value })}
                />
              </PropRow>
              <PropRow label="Base font size">
                <RangeInput
                  value={layout.fontSize}
                  onChange={(v) => setLayout({ ...layout, fontSize: v })}
                  min={8}
                  max={18}
                  unit="px"
                />
              </PropRow>
              <PropRow label="Line height">
                <RangeInput
                  value={layout.lineHeight}
                  onChange={(v) => setLayout({ ...layout, lineHeight: v })}
                  min={1}
                  max={2}
                  step={0.05}
                  unit=""
                />
              </PropRow>
              <PropRow label="Font family">
                <FontFamilyPicker
                  value={layout.fontFamily || "Georgia, serif"}
                  onChange={(fontFamily) => setLayout({ ...layout, fontFamily })}
                />
              </PropRow>
              <PropRow label="Grid size">
                <RangeInput
                  value={layout.gridSize || 5}
                  onChange={(v) => setLayout({ ...layout, gridSize: v })}
                  min={1}
                  max={20}
                  unit="%"
                />
              </PropRow>
            </div>
          )}

          {rightTab === "layer" && current && (
            <div className="ps-props">
              <h4 className="ps-layer-title">{current.label}</h4>
              <PropRow label="X position">
                <RangeInput value={current.x} onChange={(v) => updateSection(current.id, { x: v })} min={0} max={95} />
              </PropRow>
              <PropRow label="Y position">
                <RangeInput value={current.y} onChange={(v) => updateSection(current.id, { y: v })} min={0} max={95} />
              </PropRow>
              <PropRow label="Width">
                <RangeInput value={current.w} onChange={(v) => updateSection(current.id, { w: v })} min={8} max={100} />
              </PropRow>
              <PropRow label="Height">
                <RangeInput value={current.h} onChange={(v) => updateSection(current.id, { h: v })} min={4} max={80} />
              </PropRow>
              <PropRow label="Opacity">
                <RangeInput
                  value={Math.round((current.opacity ?? 1) * 100)}
                  onChange={(v) => updateSection(current.id, { opacity: v / 100 })}
                  min={10}
                  max={100}
                  unit="%"
                />
              </PropRow>
              <PropRow label="Layer padding">
                <RangeInput
                  value={current.padding ?? 8}
                  onChange={(v) => updateSection(current.id, { padding: v })}
                  min={0}
                  max={32}
                  unit="px"
                />
              </PropRow>
              <PropRow label="Text align">
                <select
                  className="ps-select full"
                  value={current.textAlign || "left"}
                  onChange={(e) => updateSection(current.id, { textAlign: e.target.value })}
                >
                  <option value="left">Left</option>
                  <option value="center">Center</option>
                  <option value="right">Right</option>
                  <option value="justify">Justify</option>
                </select>
              </PropRow>
              <PropRow label="Fill color">
                <input
                  type="color"
                  className="ps-color-input"
                  value={current.bgColor?.startsWith("#") ? current.bgColor : "#e8f0fe"}
                  onChange={(e) => updateSection(current.id, { bgColor: e.target.value })}
                />
              </PropRow>

              <div className="ps-type-divider">
                <span>Typography</span>
              </div>
              <LayerTypography
                layer={current}
                onPatch={(patch) => updateSection(current.id, patch)}
              />

              <div className="ps-check-group">
                <label className="ps-check-inline">
                  <input
                    type="checkbox"
                    checked={current.visible !== false}
                    onChange={(e) => updateSection(current.id, { visible: e.target.checked })}
                  />
                  Visible
                </label>
                <label className="ps-check-inline">
                  <input
                    type="checkbox"
                    checked={!!current.locked}
                    onChange={(e) => updateSection(current.id, { locked: e.target.checked })}
                  />
                  Lock
                </label>
              </div>
              <button type="button" className="ps-danger-btn" onClick={removeSection}>
                Delete layer
              </button>
            </div>
          )}

          {rightTab === "layer" && !current && (
            <p className="ps-empty-props">Select a layer on the canvas or from the list.</p>
          )}

          {rightTab === "source" && (
            <textarea className="ps-source-editor" value={source} onChange={(e) => setSource(e.target.value)} />
          )}
        </ResizableSidebar>
      </div>
    </div>
  );
}
