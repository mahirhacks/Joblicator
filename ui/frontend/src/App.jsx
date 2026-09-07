import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import JobsPage from "./pages/JobsPage.jsx";
import ApplicationsPage from "./pages/ApplicationsPage.jsx";
import GeneralCvPage from "./pages/GeneralCvPage.jsx";
import TemplatesPage from "./pages/TemplatesPage.jsx";
import ReviewPage from "./pages/ReviewPage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to="/jobs" replace />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="jobs" element={<JobsPage />} />
        <Route path="applications" element={<ApplicationsPage />} />
        <Route path="general-cv" element={<GeneralCvPage />} />
        <Route path="templates" element={<TemplatesPage />} />
        <Route path="review" element={<ReviewPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
}
