import { useEffect, useMemo, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  IconApplications,
  IconJobs,
  IconLogo,
  IconProfile,
  IconReview,
  IconSearch,
  IconSettings,
  IconTemplates,
} from "./icons.jsx";

const NAV = [
  { to: "/profile", label: "Profile", icon: IconProfile },
  { to: "/jobs", label: "Jobs", icon: IconJobs },
  { to: "/applications", label: "Applications", icon: IconApplications },
  { to: "/templates", label: "Templates", icon: IconTemplates },
  { to: "/review", label: "Review", icon: IconReview },
];

export default function Sidebar() {
  const [query, setQuery] = useState("");
  const searchRef = useRef(null);
  const visibleNav = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return needle ? NAV.filter((item) => item.label.toLowerCase().includes(needle)) : NAV;
  }, [query]);

  useEffect(() => {
    function focusSearch(event) {
      const target = event.target;
      const isTyping = target instanceof HTMLInputElement
        || target instanceof HTMLTextAreaElement
        || target?.isContentEditable;
      if (event.key === "/" && !isTyping) {
        event.preventDefault();
        searchRef.current?.focus();
      }
      if (event.key === "Escape" && document.activeElement === searchRef.current) {
        setQuery("");
        searchRef.current?.blur();
      }
    }
    window.addEventListener("keydown", focusSearch);
    return () => window.removeEventListener("keydown", focusSearch);
  }, []);

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-brand">
          <IconLogo />
          <div className="sidebar-brand-text">
            <span className="sidebar-brand-name">Joblication</span>
            <span className="sidebar-brand-tag">Application studio</span>
          </div>
        </div>
      </div>

      <label className="sidebar-search">
        <span className="sr-only">Search navigation</span>
        <IconSearch />
        <input
          ref={searchRef}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search"
          autoComplete="off"
        />
        <kbd>/</kbd>
      </label>

      <nav className="sidebar-nav" aria-label="Main navigation">
        <p className="sidebar-nav-label">Workspace</p>
        {visibleNav.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => `sidebar-link ${isActive ? "active" : ""}`}
          >
            <span className="sidebar-link-icon">
              <item.icon />
            </span>
            <span className="sidebar-link-label">{item.label}</span>
          </NavLink>
        ))}
        {!visibleNav.length && <p className="sidebar-search-empty">No matching pages</p>}
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-local-status">
          <span className="sidebar-status-dot" />
          <span>
            <strong>Local workspace</strong>
            <small>Private by default</small>
          </span>
        </div>
        <NavLink
          to="/settings"
          className={({ isActive }) => `sidebar-link sidebar-footer-link ${isActive ? "active" : ""}`}
        >
          <span className="sidebar-link-icon">
            <IconSettings />
          </span>
          <span className="sidebar-link-label">Settings</span>
        </NavLink>
      </div>
    </aside>
  );
}
