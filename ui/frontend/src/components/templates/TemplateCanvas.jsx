import { useCallback, useEffect, useRef } from "react";

import { resolveLayerTypography } from "./LayerTypography.jsx";

const RESIZE_HANDLES = ["nw", "n", "ne", "e", "se", "s", "sw", "w"];

const HANDLE_CURSORS = {
  nw: "nwse-resize",
  n: "ns-resize",
  ne: "nesw-resize",
  e: "ew-resize",
  se: "nwse-resize",
  s: "ns-resize",
  sw: "nesw-resize",
  w: "ew-resize",
};

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function round1(n) {
  return Math.round(n * 10) / 10;
}

/** Square grid cells in px; x/y snap steps differ on non-square pages. */
function getGridMetrics(pageW, pageH, gridSizePercent) {
  const size = gridSizePercent || 5;
  const cellPx = (pageW * size) / 100;
  return {
    cellPx,
    stepX: size,
    stepY: (cellPx / pageH) * 100,
  };
}

function makeSnapFns(stepX, stepY, enabled) {
  const snapX = (v) => (enabled && stepX > 0 ? Math.round(v / stepX) * stepX : round1(v));
  const snapY = (v) => (enabled && stepY > 0 ? Math.round(v / stepY) * stepY : round1(v));
  return { snapX, snapY };
}

function applyResize(handle, orig, dx, dy) {
  let { x, y, w, h } = orig;
  const minW = 8;
  const minH = 4;

  if (handle.includes("e")) w += dx;
  if (handle.includes("w")) {
    x += dx;
    w -= dx;
  }
  if (handle.includes("s")) h += dy;
  if (handle.includes("n")) {
    y += dy;
    h -= dy;
  }

  if (w < minW) {
    if (handle.includes("w")) x -= minW - w;
    w = minW;
  }
  if (h < minH) {
    if (handle.includes("n")) y -= minH - h;
    h = minH;
  }

  x = clamp(x, 0, 100 - minW);
  y = clamp(y, 0, 100 - minH);
  w = clamp(w, minW, 100 - x);
  h = clamp(h, minH, 100 - y);

  return { x, y, w, h };
}

export default function TemplateCanvas({
  layout,
  sections,
  activeSection,
  onSelectSection,
  onUpdateSection,
}) {
  const canvasRef = useRef(null);
  const scrollRef = useRef(null);
  const dragRef = useRef(null);
  const panMovedRef = useRef(false);

  const pageW = layout.pageWidth || 595;
  const pageH = layout.pageHeight || 842;
  const zoom = layout.zoom || 1;
  const gridMetrics = getGridMetrics(pageW, pageH, layout.gridSize);
  const snapEnabled = layout.snapToGrid;
  const { snapX, snapY } = makeSnapFns(gridMetrics.stepX, gridMetrics.stepY, snapEnabled);

  const sortedSections = [...sections].sort(
    (a, b) => (a.zIndex ?? 1) - (b.zIndex ?? 1)
  );

  const finishDrag = useCallback(() => {
    const drag = dragRef.current;
    if (drag?.mode === "pan" && drag.scrollEl?.releasePointerCapture) {
      try {
        drag.scrollEl.releasePointerCapture(drag.pointerId);
      } catch {
        /* already released */
      }
    }
    dragRef.current = null;
    document.body.classList.remove("ps-dragging", "ps-panning");
  }, []);

  const onPointerMove = useCallback(
    (e) => {
      const drag = dragRef.current;
      if (!drag) return;

      if (drag.mode === "pan") {
        const scroll = scrollRef.current;
        if (!scroll) return;
        const dx = e.clientX - drag.startX;
        const dy = e.clientY - drag.startY;
        if (Math.abs(dx) > 2 || Math.abs(dy) > 2) {
          panMovedRef.current = true;
        }
        scroll.scrollLeft = drag.origScrollLeft - dx;
        scroll.scrollTop = drag.origScrollTop - dy;
        return;
      }

      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const dx = ((e.clientX - drag.startX) / rect.width) * 100;
      const dy = ((e.clientY - drag.startY) / rect.height) * 100;

      if (drag.mode === "move") {
        const maxX = 100 - drag.origW;
        const maxY = 100 - drag.origH;
        onUpdateSection(drag.id, {
          x: snapX(clamp(drag.origX + dx, 0, maxX)),
          y: snapY(clamp(drag.origY + dy, 0, maxY)),
        });
      } else if (drag.mode.startsWith("resize-")) {
        const handle = drag.mode.slice(7);
        const next = applyResize(
          handle,
          { x: drag.origX, y: drag.origY, w: drag.origW, h: drag.origH },
          dx,
          dy
        );
        onUpdateSection(drag.id, {
          x: snapX(next.x),
          y: snapY(next.y),
          w: snapX(next.w),
          h: snapY(next.h),
        });
      }
    },
    [onUpdateSection, snapX, snapY]
  );

  useEffect(() => {
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", finishDrag);
    window.addEventListener("pointercancel", finishDrag);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", finishDrag);
      window.removeEventListener("pointercancel", finishDrag);
    };
  }, [onPointerMove, finishDrag]);

  function startPan(e) {
    if (e.button !== 0) return;
    if (e.target.closest(".ps-layer") || e.target.closest(".ps-handle")) return;

    const scroll = scrollRef.current;
    if (!scroll) return;

    e.preventDefault();
    panMovedRef.current = false;
    scroll.setPointerCapture?.(e.pointerId);

    dragRef.current = {
      mode: "pan",
      startX: e.clientX,
      startY: e.clientY,
      origScrollLeft: scroll.scrollLeft,
      origScrollTop: scroll.scrollTop,
      pointerId: e.pointerId,
      scrollEl: scroll,
    };
    document.body.classList.add("ps-panning");
  }

  function startDrag(e, section, mode) {
    if (section.locked) return;
    e.stopPropagation();
    e.preventDefault();
    dragRef.current = {
      id: section.id,
      mode,
      startX: e.clientX,
      startY: e.clientY,
      origX: section.x,
      origY: section.y,
      origW: section.w,
      origH: section.h,
    };
    document.body.classList.add("ps-dragging");
    onSelectSection(section.id);
  }

  return (
    <div className="ps-workspace">
      <div className="ps-ruler ps-ruler-top" aria-hidden>
        {Array.from({ length: 12 }, (_, i) => (
          <span key={i} style={{ left: `${(i / 11) * 100}%` }}>
            {Math.round((pageW / 11) * i)}
          </span>
        ))}
      </div>
      <div className="ps-canvas-scroll" ref={scrollRef} onPointerDown={startPan}>
        <div
          className="ps-canvas-stage"
          style={{ transform: `scale(${zoom})`, transformOrigin: "top center" }}
        >
          <div
            ref={canvasRef}
            className="ps-canvas"
            style={{
              width: pageW,
              minHeight: pageH,
              padding: layout.pagePadding,
              fontSize: `${layout.fontSize}px`,
              lineHeight: layout.lineHeight,
              fontFamily: layout.fontFamily || "Georgia, serif",
              backgroundColor: layout.pageBackground || "#ffffff",
            }}
            onClick={() => {
              if (panMovedRef.current) {
                panMovedRef.current = false;
                return;
              }
              onSelectSection(null);
            }}
            onKeyDown={() => {}}
            role="presentation"
          >
            {layout.showGrid && (
              <div
                className="ps-canvas-grid"
                style={{
                  backgroundSize: `${gridMetrics.cellPx}px ${gridMetrics.cellPx}px`,
                }}
              />
            )}

            {sortedSections
              .filter((s) => s.visible !== false)
              .map((s) => {
                const selected = activeSection === s.id;
                const type = resolveLayerTypography(s, layout);
                return (
                  <div
                    key={s.id}
                    className={`ps-layer ${selected ? "selected" : ""} ${s.locked ? "locked" : ""}`}
                    style={{
                      left: `${s.x}%`,
                      top: `${s.y}%`,
                      width: `${s.w}%`,
                      height: `${s.h}%`,
                      zIndex: s.zIndex ?? 1,
                      opacity: s.opacity ?? 1,
                      textAlign: s.textAlign || "left",
                      padding: s.padding ?? 8,
                      backgroundColor: s.bgColor || "rgba(47, 140, 239, 0.06)",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectSection(s.id);
                    }}
                    onPointerDown={(e) => {
                      if (e.target.closest(".ps-handle")) return;
                      startDrag(e, s, "move");
                    }}
                    onKeyDown={() => {}}
                    role="button"
                    tabIndex={0}
                  >
                    <span
                      className="ps-layer-label"
                      style={{
                        fontFamily: type.headline.fontFamily,
                        fontSize: `${type.headline.fontSize}px`,
                        fontWeight: type.headline.fontWeight,
                        fontStyle: type.headline.fontStyle,
                        textDecoration: type.headline.textDecoration,
                        color: type.headline.color,
                      }}
                    >
                      {s.label}
                    </span>
                    <p
                      className="ps-layer-preview"
                      style={{
                        fontFamily: type.body.fontFamily,
                        fontSize: `${type.body.fontSize}px`,
                        fontWeight: type.body.fontWeight,
                        fontStyle: type.body.fontStyle,
                        textDecoration: type.body.textDecoration,
                        color: type.body.color,
                      }}
                    >
                      Section content preview for {s.label.toLowerCase()}.
                    </p>

                    {selected && !s.locked && (
                      <>
                        {RESIZE_HANDLES.map((handle) => (
                          <span
                            key={handle}
                            className={`ps-handle ps-handle-${handle}`}
                            style={{ cursor: HANDLE_CURSORS[handle] }}
                            onPointerDown={(e) => startDrag(e, s, `resize-${handle}`)}
                          />
                        ))}
                      </>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
