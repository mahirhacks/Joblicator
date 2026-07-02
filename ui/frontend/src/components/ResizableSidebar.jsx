import { useCallback, useEffect, useRef, useState } from "react";

function readStoredWidth(key, fallback) {
  if (!key || typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    const parsed = Number(raw);
    if (raw && Number.isFinite(parsed)) return parsed;
  } catch {
    /* ignore */
  }
  return fallback;
}

export default function ResizableSidebar({
  className = "",
  storageKey,
  defaultWidth = 272,
  minWidth = 220,
  maxWidth = 520,
  children,
}) {
  const [width, setWidth] = useState(() => readStoredWidth(storageKey, defaultWidth));
  const dragRef = useRef(null);

  useEffect(() => {
    if (!storageKey) return;
    try {
      localStorage.setItem(storageKey, String(width));
    } catch {
      /* ignore */
    }
  }, [width, storageKey]);

  const onPointerMove = useCallback(
    (e) => {
      const drag = dragRef.current;
      if (!drag) return;
      const delta = drag.startX - e.clientX;
      const next = Math.min(maxWidth, Math.max(minWidth, drag.startWidth + delta));
      setWidth(next);
    },
    [minWidth, maxWidth]
  );

  const finishResize = useCallback(() => {
    dragRef.current = null;
    document.body.classList.remove("sidebar-resizing");
  }, []);

  useEffect(() => {
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", finishResize);
    window.addEventListener("pointercancel", finishResize);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", finishResize);
      window.removeEventListener("pointercancel", finishResize);
    };
  }, [onPointerMove, finishResize]);

  function startResize(e) {
    e.preventDefault();
    e.stopPropagation();
    dragRef.current = { startX: e.clientX, startWidth: width };
    document.body.classList.add("sidebar-resizing");
  }

  return (
    <aside className={`resizable-sidebar ${className}`.trim()} style={{ width }}>
      <div
        className="sidebar-resize-handle"
        onPointerDown={startResize}
        role="separator"
        aria-orientation="vertical"
        aria-label="Resize sidebar"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setWidth((w) => Math.min(maxWidth, w + 8));
          if (e.key === "ArrowRight") setWidth((w) => Math.max(minWidth, w - 8));
        }}
      />
      {children}
    </aside>
  );
}
