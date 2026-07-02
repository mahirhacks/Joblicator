import FontFamilyPicker from "./FontFamilyPicker.jsx";

const INHERIT = "";

function StyleToggles({ bold, italic, underline, onChange }) {
  return (
    <div className="ps-style-toggles" role="group" aria-label="Text style">
      <button
        type="button"
        className={`ps-style-btn ${bold ? "active" : ""}`}
        onClick={() => onChange({ bold: !bold })}
        title="Bold"
      >
        B
      </button>
      <button
        type="button"
        className={`ps-style-btn ${italic ? "active" : ""}`}
        onClick={() => onChange({ italic: !italic })}
        title="Italic"
      >
        I
      </button>
      <button
        type="button"
        className={`ps-style-btn ${underline ? "active" : ""}`}
        onClick={() => onChange({ underline: !underline })}
        title="Underline"
      >
        U
      </button>
    </div>
  );
}

function TypographyBlock({ title, prefix, layer, onPatch }) {
  const fontKey = `${prefix}FontFamily`;
  const sizeKey = `${prefix}FontSize`;
  const boldKey = `${prefix}Bold`;
  const italicKey = `${prefix}Italic`;
  const underlineKey = `${prefix}Underline`;
  const colorKey = `${prefix}Color`;

  const fontValue = layer[fontKey] || INHERIT;
  const sizeValue = layer[sizeKey] ?? (prefix === "body" ? layer.fontSize : undefined);

  return (
    <div className="ps-type-block">
      <h5 className="ps-type-block-title">{title}</h5>

      <div className="ps-prop-row">
        <label>Font</label>
        <FontFamilyPicker
          compact
          allowInherit
          value={fontValue}
          onChange={(v) => onPatch({ [fontKey]: v || undefined })}
        />
      </div>

      <div className="ps-type-row">
        <div className="ps-prop-row ps-type-size">
          <label>Size (px)</label>
          <input
            type="number"
            className="ps-num-input full"
            min={6}
            max={48}
            placeholder="Inherit"
            value={sizeValue ?? ""}
            onChange={(e) =>
              onPatch({
                [sizeKey]: e.target.value ? Number(e.target.value) : undefined,
                ...(prefix === "body" ? { fontSize: undefined } : {}),
              })
            }
          />
        </div>
        <div className="ps-prop-row ps-type-style">
          <label>Style</label>
          <StyleToggles
            bold={!!layer[boldKey]}
            italic={!!layer[italicKey]}
            underline={!!layer[underlineKey]}
            onChange={(patch) => {
              const next = {};
              if ("bold" in patch) next[boldKey] = patch.bold || undefined;
              if ("italic" in patch) next[italicKey] = patch.italic || undefined;
              if ("underline" in patch) next[underlineKey] = patch.underline || undefined;
              onPatch(next);
            }}
          />
        </div>
      </div>

      <div className="ps-prop-row">
        <label>Color</label>
        <div className="ps-color-field">
          <input
            type="color"
            className="ps-color-input"
            value={layer[colorKey] || (prefix === "headline" ? "#1a1a1a" : "#444444")}
            onChange={(e) => onPatch({ [colorKey]: e.target.value })}
          />
          <button
            type="button"
            className="ps-style-btn ps-color-reset"
            onClick={() => onPatch({ [colorKey]: undefined })}
            title="Reset color"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export function resolveLayerTypography(section, layout) {
  const docFont = layout.fontFamily || "Georgia, serif";
  const docSize = layout.fontSize || 11;

  const bodySize = section.bodyFontSize ?? section.fontSize ?? docSize;
  const headlineSize = section.headlineFontSize ?? Math.round(bodySize * 1.15);

  return {
    headline: {
      fontFamily: section.headlineFontFamily || docFont,
      fontSize: headlineSize,
      fontWeight: section.headlineBold ? 700 : 600,
      fontStyle: section.headlineItalic ? "italic" : "normal",
      textDecoration: section.headlineUnderline ? "underline" : "none",
      color: section.headlineColor || "#1a1a1a",
    },
    body: {
      fontFamily: section.bodyFontFamily || docFont,
      fontSize: bodySize,
      fontWeight: section.bodyBold ? 700 : 400,
      fontStyle: section.bodyItalic ? "italic" : "normal",
      textDecoration: section.bodyUnderline ? "underline" : "none",
      color: section.bodyColor || "#444444",
    },
  };
}

export default function LayerTypography({ layer, onPatch }) {
  return (
    <div className="ps-type-panel">
      <TypographyBlock title="Headline" prefix="headline" layer={layer} onPatch={onPatch} />
      <TypographyBlock title="Body" prefix="body" layer={layer} onPatch={onPatch} />
    </div>
  );
}
