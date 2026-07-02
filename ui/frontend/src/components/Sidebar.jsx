import { NavLink } from "react-router-dom";
import {
  IconApplications,
  IconJobs,
  IconLogo,
  IconProfile,
  IconReview,
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

      <nav className="sidebar-nav" aria-label="Main navigation">
        <p className="sidebar-nav-label">Workspace</p>
        {NAV.map((item) => (
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
      </nav>

      <div className="sidebar-footer">
        <p>Tailored CVs &amp; cover letters</p>
      </div>
    </aside>
  );
}
