/** Field definitions shown in Settings. Other keys stay in config.yaml. */

export const ENGINE_CONFIG_SECTIONS = [
  {
    id: "export",
    title: "Output folder",
    description: "Generated CVs, cover letters, and ATS reports are written here.",
    fields: [
      {
        path: ["export", "output_dir"],
        label: "Output folder",
        type: "text",
        fullWidth: true,
        hint: "Use an absolute path such as D:\\CVs, or a folder name such as outputs (stored under the Joblication data folder).",
      },
    ],
  },
];

export function pathKey(path) {
  return path.join(".");
}

export function getByPath(obj, path) {
  return path.reduce((acc, key) => (acc == null ? undefined : acc[key]), obj);
}

export function setByPath(obj, path, value) {
  const next = structuredClone(obj);
  let cur = next;
  for (let i = 0; i < path.length - 1; i += 1) {
    const key = path[i];
    if (cur[key] == null || typeof cur[key] !== "object") {
      cur[key] = {};
    }
    cur = cur[key];
  }
  cur[path[path.length - 1]] = value;
  return next;
}
