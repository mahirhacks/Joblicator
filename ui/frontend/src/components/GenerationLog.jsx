import { useCallback, useEffect, useRef, useState } from "react";
import { api } from "../api/client.js";

const HEIGHT_KEY = "joblication.generation-log.height";
const OPEN_KEY = "joblication.generation-log.open";
const DEFAULT_HEIGHT = 200;
const MIN_HEIGHT = 100;
const MAX_HEIGHT = 560;

function readStoredHeight() {
  if (typeof window === "undefined") return DEFAULT_HEIGHT;
  try {
    const raw = localStorage.getItem(HEIGHT_KEY);
    const parsed = Number(raw);
    if (raw && Number.isFinite(parsed)) {
      return Math.min(MAX_HEIGHT, Math.max(MIN_HEIGHT, parsed));
    }
  } catch {
    /* ignore */
  }
  return DEFAULT_HEIGHT;
}

function readStoredOpen() {
  if (typeof window === "undefined") return false;
  try {
    return localStorage.getItem(OPEN_KEY) === "1";
  } catch {
    return false;
  }
}

export default function GenerationLog() {
  const [open, setOpen] = useState(readStoredOpen);
  const [status, setStatus] = useState(null);
  const [log, setLog] = useState("");
  const [bodyHeight, setBodyHeight] = useState(readStoredHeight);
  const offsetRef = useRef(0);
  const bodyRef = useRef(null);
  const wasRunningRef = useRef(false);
  const stickToBottomRef = useRef(true);
  const dragRef = useRef(null);

  const poll = useCallback(async () => {
    try {
      const nextStatus = await api.generateStatus();
      setStatus(nextStatus);

      if (nextStatus.running && !wasRunningRef.current) {
        setLog("");
        offsetRef.current = 0;
      }
      wasRunningRef.current = Boolean(nextStatus.running);

      const chunk = await api.generateLog(offsetRef.current);
      if (chunk.text) {
        setLog((prev) => prev + chunk.text);
        offsetRef.current = chunk.offset;
      }
    } catch {
      /* ignore transient poll errors */
    }
  }, []);

  useEffect(() => {
    poll();
    const id = setInterval(poll, 1200);
    return () => clearInterval(id);
  }, [poll]);

  useEffect(() => {
    if (!open || !bodyRef.current || !stickToBottomRef.current) return;
    bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [log, open]);

  useEffect(() => {
    try {
      localStorage.setItem(HEIGHT_KEY, String(bodyHeight));
    } catch {
      /* ignore */
    }
  }, [bodyHeight]);

  useEffect(() => {
    try {
      localStorage.setItem(OPEN_KEY, open ? "1" : "0");
    } catch {
      /* ignore */
    }
  }, [open]);

  const onPointerMove = useCallback((e) => {
    const drag = dragRef.current;
    if (!drag) return;
    const delta = drag.startY - e.clientY;
    const next = Math.min(MAX_HEIGHT, Math.max(MIN_HEIGHT, drag.startHeight + delta));
    setBodyHeight(next);
  }, []);

  const finishResize = useCallback(() => {
    dragRef.current = null;
    document.body.classList.remove("generation-log-resizing");
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
    dragRef.current = { startY: e.clientY, startHeight: bodyHeight };
    document.body.classList.add("generation-log-resizing");
  }

  const running = Boolean(status?.running);
  const step = status?.step || "";
  const title = running ? `Generating${step ? ` — ${step}` : "…"}` : "Generation log";

  return (
    <div
      className={`generation-log-panel ${running ? "running" : ""} ${open ? "is-open" : ""}`}
      style={{ "--generation-log-body-height": `${bodyHeight}px` }}
    >
      {open && (
        <div
          className="generation-log-resize-handle"
          onPointerDown={startResize}
          role="separator"
          aria-orientation="horizontal"
          aria-label="Resize generation log"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowUp") setBodyHeight((h) => Math.min(MAX_HEIGHT, h + 16));
            if (e.key === "ArrowDown") setBodyHeight((h) => Math.max(MIN_HEIGHT, h - 16));
          }}
        />
      )}
      <div className="generation-log-header">
        <button
          type="button"
          className="generation-log-title"
          onClick={() => setOpen((value) => !value)}
        >
          <span className={`generation-log-dot ${running ? "active" : ""}`} />
          {title}
          <span className="generation-log-chevron">{open ? "▾" : "▸"}</span>
        </button>
        <div className="generation-log-actions">
          {log && !running && (
            <button
              type="button"
              className="generation-log-btn"
              onClick={() => {
                setLog("");
                offsetRef.current = 0;
                setOpen(false);
              }}
            >
              Clear
            </button>
          )}
        </div>
      </div>
      {open && (
        <pre
          ref={bodyRef}
          className="generation-log-body"
          onScroll={(e) => {
            const el = e.currentTarget;
            stickToBottomRef.current = el.scrollHeight - el.scrollTop - el.clientHeight < 48;
          }}
        >
          {log || (running ? "Waiting for pipeline output…" : "No log output.")}
        </pre>
      )}
    </div>
  );
}
