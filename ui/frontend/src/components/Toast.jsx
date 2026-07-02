import { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";
import { IconAlert, IconCheck } from "./icons.jsx";

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);
  const timer = useRef(null);

  const showToast = useCallback((message, type = "success") => {
    clearTimeout(timer.current);
    setToast({ message, type });
    timer.current = setTimeout(() => setToast(null), 3800);
  }, []);

  const value = useMemo(() => ({ showToast }), [showToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      {toast && (
        <div className={`toast show ${toast.type}`} role="status" aria-live="polite">
          <span className="toast-icon">{toast.type === "error" ? <IconAlert /> : <IconCheck />}</span>
          <span className="toast-message">{toast.message}</span>
        </div>
      )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}
