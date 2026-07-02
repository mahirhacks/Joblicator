const JSON_HEADERS = { "Content-Type": "application/json" };

async function request(path, options = {}) {
  const response = await fetch(path, options);
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.error || `Request failed (${response.status})`);
  }
  return data;
}

export const api = {
  health: () => request("/api/health"),
  config: () => request("/api/config"),

  getProfile: () => request("/api/profile"),
  saveProfile: (profile) =>
    request("/api/profile", {
      method: "PUT",
      headers: JSON_HEADERS,
      body: JSON.stringify({ profile }),
    }),

  listJobs: () => request("/api/applications"),
  getJob: (slug) => request(`/api/applications/${encodeURIComponent(slug)}`),
  createJob: (payload) =>
    request("/api/applications", {
      method: "POST",
      headers: JSON_HEADERS,
      body: JSON.stringify(payload),
    }),
  updateJob: (slug, payload) =>
    request(`/api/applications/${encodeURIComponent(slug)}`, {
      method: "PUT",
      headers: JSON_HEADERS,
      body: JSON.stringify(payload),
    }),
  deleteJob: (slug) =>
    request(`/api/applications/${encodeURIComponent(slug)}`, { method: "DELETE" }),
  scrapeUrl: (url) =>
    request("/api/applications/scrape", {
      method: "POST",
      headers: JSON_HEADERS,
      body: JSON.stringify({ url }),
    }),

  listApplications: () => request("/api/applications/view"),
  listOutputs: () => request("/api/outputs"),
  fileUrl: (folder, filename) =>
    `/api/files/${encodeURIComponent(folder)}/${encodeURIComponent(filename)}`,

  getReview: (slug) => request(`/api/review/${encodeURIComponent(slug)}`),
  saveReview: (slug, payload) =>
    request(`/api/review/${encodeURIComponent(slug)}`, {
      method: "PUT",
      headers: JSON_HEADERS,
      body: JSON.stringify(payload),
    }),
  rebuild: (slug) =>
    request(`/api/build/${encodeURIComponent(slug)}`, { method: "POST" }),

  listTemplates: () => request("/api/templates"),
  getTemplate: (id) => request(`/api/templates/${encodeURIComponent(id)}`),
  saveTemplate: (id, payload) =>
    request(`/api/templates/${encodeURIComponent(id)}`, {
      method: "PUT",
      headers: JSON_HEADERS,
      body: JSON.stringify(payload),
    }),
  createTemplate: (payload) =>
    request("/api/templates", {
      method: "POST",
      headers: JSON_HEADERS,
      body: JSON.stringify(payload),
    }),

  generateStatus: () => request("/api/generate/status"),
  startGenerate: () => request("/api/generate", { method: "POST" }),
};
