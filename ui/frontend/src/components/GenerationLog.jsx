import { useCallback, useEffect, useRef, useState } from "react";
import { api } from "../api/client.js";

export default function GenerationLog() {
  const [open, setOpen] = useState(false);
  const [pinned, setPinned] = useState(false);
  const [status, setStatus] = useState(null);
  const [log, setLog] = useState("");
  const offsetRef = useRef(0);
  const bodyRef = useRef(null);
  const wasRunningRef = useRef(false);
  const stickToBottomRef = useRef(true);

  const poll = useCallback(async () => {
    try {
      const nextStatus = await api.generateStatus();
      setStatus(nextStatus);

      if (nextStatus.running && !wasRunningRef.current) {
        setLog("");
        offsetRef.current = 0;
        setOpen(true);
        setPinned(true);
      }
      wasRunningRef.current = Boolean(nextStatus.running);

      const chunk = await api.generateLog(offsetRef.current);
      if (chunk.text) {
        setLog((prev) => prev + chunk.text);
        offsetRef.current = chunk.offset;
      }

      if (nextStatus.running) {
        setOpen(true);
      } else if (!pinned && !nextStatus.running) {
        setOpen(false);
      }
    } catch {
      /* ignore transient poll errors */
    }
  }, [pinned]);

  useEffect(() => {
    poll();
    const id = setInterval(poll, 1200);
    return () => clearInterval(id);
  }, [poll]);

  useEffect(() => {
    if (!open || !bodyRef.current || !stickToBottomRef.current) return;
    bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [log, open]);

  if (!open && !log) return null;

  const running = Boolean(status?.running);
  const step = status?.step || "";
  const title = running ? `Generating${step ? ` — ${step}` : "…"}` : "Generation log";

  return (
    <div className={`generation-log-panel ${running ? "running" : ""}`}>
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
          {!running && (
            <button
              type="button"
              className="generation-log-btn"
              onClick={() => {
                setPinned(false);
                setOpen(false);
              }}
            >
              Dismiss
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
