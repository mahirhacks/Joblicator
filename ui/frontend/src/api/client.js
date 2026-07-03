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
  generateLog: (offset = 0) =>
    request(`/api/generate/log?offset=${encodeURIComponent(String(offset))}`),
  startGenerate: async ({ fromStage = "stage_1", onlyStage = null, slugs = null, buildTargets = "both" } = {}) => {
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
