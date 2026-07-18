import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";

export default function Layout() {
  const location = useLocation();
  const editorShell = location.pathname.startsWith("/review");

  return (
    <div className={`app-shell ${editorShell ? "app-shell-editor" : ""}`}>
      <Sidebar />
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
}
