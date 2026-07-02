import { useEffect, useMemo, useRef } from "react";

export const FONT_OPTIONS = [
  { label: "Georgia", value: "Georgia, serif", group: "Serif" },
  { label: "Times New Roman", value: "'Times New Roman', Times, serif", group: "Serif" },
  { label: "Garamond", value: "Garamond, 'Times New Roman', serif", group: "Serif" },
  { label: "Palatino", value: "'Palatino Linotype', Palatino, serif", group: "Serif" },
  { label: "Merriweather", value: "'Merriweather', Georgia, serif", group: "Serif", google: "Merriweather" },
  { label: "Lora", value: "'Lora', Georgia, serif", group: "Serif", google: "Lora" },
  { label: "Libre Baskerville", value: "'Libre Baskerville', Georgia, serif", group: "Serif", google: "Libre Baskerville" },
  { label: "Source Serif 4", value: "'Source Serif 4', Georgia, serif", group: "Serif", google: "Source Serif 4" },
  { label: "Crimson Text", value: "'Crimson Text', Georgia, serif", group: "Serif", google: "Crimson Text" },
  { label: "Arial", value: "Arial, Helvetica, sans-serif", group: "Sans-serif" },
  { label: "Helvetica", value: "Helvetica, Arial, sans-serif", group: "Sans-serif" },
  { label: "Calibri", value: "Calibri, 'Segoe UI', sans-serif", group: "Sans-serif" },
  { label: "Verdana", value: "Verdana, Geneva, sans-serif", group: "Sans-serif" },
  { label: "Tahoma", value: "Tahoma, Geneva, sans-serif", group: "Sans-serif" },
  { label: "Open Sans", value: "'Open Sans', Arial, sans-serif", group: "Sans-serif", google: "Open Sans" },
  { label: "Roboto", value: "'Roboto', Arial, sans-serif", group: "Sans-serif", google: "Roboto" },
  { label: "Lato", value: "'Lato', Arial, sans-serif", group: "Sans-serif", google: "Lato" },
  { label: "Inter", value: "'Inter', Arial, sans-serif", group: "Sans-serif", google: "Inter" },
  { label: "Montserrat", value: "'Montserrat', Arial, sans-serif", group: "Sans-serif", google: "Montserrat" },
  { label: "Source Sans 3", value: "'Source Sans 3', Arial, sans-serif", group: "Sans-serif", google: "Source Sans 3" },
  { label: "Poppins", value: "'Poppins', Arial, sans-serif", group: "Sans-serif", google: "Poppins" },
  { label: "Courier New", value: "'Courier New', Courier, monospace", group: "Monospace" },
  { label: "Consolas", value: "Consolas, 'Courier New', monospace", group: "Monospace" },
];

const GOOGLE_FAMILIES = [...new Set(FONT_OPTIONS.filter((f) => f.google).map((f) => f.google))];
const INHERIT_SENTINEL = "__inherit__";

let fontsLinkLoaded = false;

function ensureGoogleFonts() {
  if (fontsLinkLoaded || typeof document === "undefined") return;
  const id = "joblication-template-fonts";
  if (document.getElementById(id)) {
    fontsLinkLoaded = true;
    return;
  }
  const families = GOOGLE_FAMILIES.map((f) => `family=${f.replace(/ /g, "+")}:wght@400;600`).join("&");
  const link = document.createElement("link");
  link.id = id;
  link.rel = "stylesheet";
  link.href = `https://fonts.googleapis.com/css2?${families}&display=swap`;
  document.head.appendChild(link);
  fontsLinkLoaded = true;
}

export default function FontFamilyPicker({
  value,
  onChange,
  allowInherit = false,
  inheritLabel = "Inherit document",
  compact = false,
}) {
  const listRef = useRef(null);
  const selectedRef = useRef(null);

  useEffect(() => {
    ensureGoogleFonts();
  }, []);

  const options = useMemo(() => {
    const current = value?.trim();
    const base = [...FONT_OPTIONS];
    if (current && !FONT_OPTIONS.some((f) => f.value === current)) {
      base.unshift({ label: "Custom", value: current, group: "Custom" });
    }
    return base;
  }, [value]);

  const groups = useMemo(() => {
    const map = new Map();
    if (allowInherit) {
      map.set("Inherit", [{ label: inheritLabel, value: INHERIT_SENTINEL, group: "Inherit" }]);
    }
    for (const opt of options) {
      if (!map.has(opt.group)) map.set(opt.group, []);
      map.get(opt.group).push(opt);
    }
    return [...map.entries()];
  }, [options, allowInherit, inheritLabel]);

  useEffect(() => {
    selectedRef.current?.scrollIntoView({ block: "nearest" });
  }, [value]);

  return (
    <div className={`ps-font-picker ${compact ? "compact" : ""}`}>
      <div className="ps-font-picker-list" ref={listRef} role="listbox" aria-label="Font family">
        {groups.map(([group, items]) => (
          <div key={group} className="ps-font-picker-group">
            <p className="ps-font-picker-group-label">{group}</p>
            {items.map((font) => {
              const selected =
                font.value === INHERIT_SENTINEL
                  ? !value?.trim()
                  : value === font.value;
              return (
                <button
                  key={font.value}
                  type="button"
                  ref={selected ? selectedRef : null}
                  role="option"
                  aria-selected={selected}
                  className={`ps-font-option ${selected ? "active" : ""} ${font.value === INHERIT_SENTINEL ? "inherit" : ""}`}
                  style={font.value === INHERIT_SENTINEL ? undefined : { fontFamily: font.value }}
                  onClick={() =>
                    onChange(font.value === INHERIT_SENTINEL ? "" : font.value)
                  }
                >
                  <span className="ps-font-option-name">{font.label}</span>
                  {font.value !== INHERIT_SENTINEL && (
                    <span className="ps-font-option-sample">The quick brown fox</span>
                  )}
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
