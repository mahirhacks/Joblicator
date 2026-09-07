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

  getEngineConfig: () => request("/api/engine-config"),
  listOpenRouterModels: () => request("/api/providers/openrouter/models"),
  saveEngineConfig: (config) =>
    request("/api/engine-config", {
      method: "PUT",
      headers: JSON_HEADERS,
      body: JSON.stringify({ config }),
    }),

  getProfile: () => request("/api/profile"),
  saveProfile: (profile) =>
    request("/api/profile", {
      method: "PUT",
      headers: JSON_HEADERS,
      body: JSON.stringify({ profile }),
    }),

  getGeneralCv: () => request("/api/general-cv"),
  recommendGeneralCv: () =>
    request("/api/general-cv/recommend", {
      method: "POST",
      headers: JSON_HEADERS,
      body: "{}",
    }),
  generateGeneralCv: (payload) =>
    request("/api/general-cv/generate", {
      method: "POST",
      headers: JSON_HEADERS,
      body: JSON.stringify(payload),
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

  listApplications: () => request("/api/applications/view"),
  listOutputs: () => request("/api/outputs"),
  fileUrl: (folder, filename, { download = false } = {}) =>
    `/api/files/${encodeURIComponent(folder)}/${encodeURIComponent(filename)}${download ? "?download=1" : ""}`,

  getReview: (slug) => request(`/api/review/${encodeURIComponent(slug)}`),
  saveReview: (slug, payload) =>
    request(`/api/review/${encodeURIComponent(slug)}`, {
      method: "PUT",
      headers: JSON_HEADERS,
      body: JSON.stringify(payload),
    }),
  rebuild: (slug, payload = {}) =>
    request(`/api/build/${encodeURIComponent(slug)}`, {
      method: "POST",
      headers: JSON_HEADERS,
      body: JSON.stringify(payload),
    }),

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
  startGenerate: async ({ fromStage = "stage_2", onlyStage = null, slugs = null, buildTargets = "both" } = {}) => {
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: JSON_HEADERS,
      body: JSON.stringify({
        from_stage: fromStage,
        only_stage: onlyStage || undefined,
        slugs: slugs && slugs.length ? slugs : undefined,
        build_targets: buildTargets,
      }),
    });
    const data = await response.json().catch(() => ({}));
    if (response.status === 409) {
      return { ok: true, alreadyRunning: true, ...data };
    }
    if (!response.ok) {
      throw new Error(data.error || `Request failed (${response.status})`);
    }
    return { ok: true, alreadyRunning: false, ...data };
  },

  getReviewHtml: (slug, doc) =>
    request(`/api/review/${encodeURIComponent(slug)}/html?doc=${encodeURIComponent(doc)}`),
  saveReviewHtml: (slug, payload) =>
    request(`/api/review/${encodeURIComponent(slug)}/html`, {
      method: "PUT",
      headers: JSON_HEADERS,
      body: JSON.stringify(payload),
    }),
};
