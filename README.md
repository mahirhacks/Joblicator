# Joblication

Joblication is a local-first job application studio. It helps you maintain a structured profile, capture job postings, run an LLM pipeline to tailor CV and cover letter content per role, and export polished HTML/PDF documents—all from a browser UI on your machine.

Nothing runs in the cloud by default: your profile, applications, generated artifacts, and Ollama calls stay local.

## Features

| Area | What you can do |
|------|-----------------|
| **Profile** | Edit contact info, experience, education, skills, and custom sections in a structured form |
| **Jobs** | Add roles via URL scrape or pasted description; store company, title, location, and full job text |
| **Applications** | Filter by status, generate per mode (full pipeline or individual stages), select/delete entries, track pipeline phases, live generation log |
| **Templates** | Layer-based layout editor for CV sections (typography, grid, snap, pan/zoom) |
| **Review** | Preview HTML/PDF, edit stage JSON, rebuild exports |
| **Settings** | Edit `engine/dynamic_engine/config.yaml` in the UI (Ollama model, stage options, verification); switch light/dark theme |

The UI uses a minimal industrial design (square corners, hairline borders, uppercase micro-labels) with an optional dark theme stored in browser `localStorage`.

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│  React UI (ui/frontend)          http://localhost:8080    │
│  Profile · Jobs · Applications · Templates · Review · Settings │
└──────────────────────────┬──────────────────────────────────┘
                           │ REST API
┌──────────────────────────▼──────────────────────────────────┐
│  Python stdlib server (ui/backend/server.py)                │
└──────────────────────────┬──────────────────────────────────┘
                           │
         ┌─────────────────┼─────────────────┐
         ▼                 ▼                 ▼
  applications/      settings/          outputs/
  local JSON         local profile      HTML + PDF
         │                 │
         └────────┬────────┘
                  ▼
┌─────────────────────────────────────────────────────────────┐
│  Dynamic engine (engine/dynamic_engine)                     │
│  Stage 1 → keywords & context                               │
│  Stage 2 → tailored resume JSON                             │
│  Stage 3 → cover letter JSON                                │
│  (Ollama LLM, verification loops)                           │
└──────────────────────────┬──────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  Static engine (engine/static_engine)                       │
│  Jinja2 templates → HTML → PDF (xhtml2pdf)                  │
└─────────────────────────────────────────────────────────────┘
```

## Prerequisites

- **Python 3.11+** (3.13 tested)
- **Node.js 18+** (for building the frontend)
- **[Ollama](https://ollama.com/)** running locally with a model configured in `engine/dynamic_engine/config.yaml` (default: `gemma4:26b`)

## Quick start

### 1. Clone and install Python dependencies

```bash
cd Joblication
python -m venv .venv

# Windows
.venv\Scripts\activate

# macOS / Linux
source .venv/bin/activate

pip install -r requirements.txt
```

### 2. Build the frontend

```bash
cd ui/frontend
npm install
npm run build
cd ../..
```

`npm run build` writes to `ui/frontend/dist/` and copies `index.html` plus hashed bundles into `ui/frontend/` for the Python server. These build artifacts are gitignored—you must run this step after clone or UI changes.

### 3. Create local data files

These paths are gitignored—you need your own copies:

| File | Purpose |
|------|---------|
| `settings/local_profile.json` | Your CV/profile data (start from `settings/profile.json` or create via the Profile UI) |
| `applications/local_applications.json` | Saved job postings (`{}` or add jobs through the Jobs UI) |

`engine/dynamic_engine/config.yaml` already points at these local paths. You can also edit engine settings from **Settings** in the UI.

### 4. Start Ollama

Ensure Ollama is running and the model in `config.yaml` is pulled:

```bash
ollama pull gemma4:26b
```

Adjust the model in **Settings** or edit `engine/dynamic_engine/config.yaml` directly.

### 5. Run the UI

From the **project root**:

```bash
python ui/backend/server.py
```

Open [http://localhost:8080](http://localhost:8080).

## Typical workflow

1. **Profile** — Fill in your experience, education, skills, and contact details.
2. **Jobs** — Paste a job URL or description; save the role.
3. **Applications** — Choose generation mode and output type, then **Generate all** (or select specific jobs). Watch the generation log at the bottom of the page.
4. **Review** — Preview CV and cover letter, tweak JSON if needed, **Save & export PDF**.
5. **Templates** (optional) — Adjust layout and typography for document templates.
6. **Settings** (optional) — Tune pipeline options or switch light/dark theme.

## Pipeline (CLI)

You can also run generation without the UI:

```bash
# Full pipeline
python ui/backend/generate.py

# Individual stages (from project root)
python engine/dynamic_engine/stage_1.py
python engine/dynamic_engine/stage_2.py
python engine/dynamic_engine/stage_3.py
python engine/static_engine/build.py
```

Stage outputs are written to `engine/dynamic_engine/data/` (gitignored). Final HTML/PDF files go to `outputs/<Company_Role_YYYYMMDD>/`.

## Configuration

| File | Description |
|------|-------------|
| `engine/dynamic_engine/config.yaml` | Ollama URL/model, profile & applications paths, stage options, verification settings (editable in **Settings**) |
| `settings/template.json` | Default CV/cover letter template IDs and output naming |
| `settings/local_profile.json` | Your profile (local, not committed) |
| `applications/local_applications.json` | Your job records (local, not committed) |

UI theme preference (`light` / `dark`) is stored in browser `localStorage` under `joblication.theme` and is not part of engine config.

## Project layout

```
Joblication/
├── applications/          # Job storage helpers + local_applications.json (gitignored)
├── engine/
│   ├── dynamic_engine/    # LLM stages, prompts, Ollama client, validators
│   └── static_engine/     # Jinja render + PDF build
├── outputs/               # Generated HTML/PDF per application (gitignored)
├── settings/              # Profile/template config; local_* files gitignored
├── templates/             # Jinja2 CV and cover letter templates
├── ui/
│   ├── backend/           # HTTP server, API handlers, generate wrapper
│   └── frontend/          # React + Vite source (src/); built assets gitignored
└── requirements.txt
```

## API overview

The UI talks to a small REST API on port **8080**:

- `GET/PUT /api/profile` — profile JSON
- `GET/POST/PUT/DELETE /api/applications` — jobs
- `GET /api/applications/view` — jobs with output metadata
- `POST /api/generate` — start pipeline (background thread)
- `GET /api/generate/status` — pipeline progress
- `GET /api/generate/log` — streaming generation log (offset query param)
- `GET/PUT /api/engine-config` — read/write `config.yaml` from Settings
- `GET/PUT /api/review/:slug` — stage 2/3 JSON + output files
- `POST /api/build/:slug` — rebuild PDFs after review edits
- `GET/PUT /api/templates/:id` — template catalog + custom layouts
- `GET /api/files/:folder/:filename` — serve output HTML/PDF for preview

## Frontend development

Source lives in `ui/frontend/src/`. Global styles are in `src/GlobalStyles.jsx` (CSS custom properties, light/dark via `data-theme` on `<html>`).

For hot reload during UI work:

```bash
cd ui/frontend
npm run dev
```

Vite dev server proxies `/api` to `http://127.0.0.1:8080` (see `vite.config.js`). Run `python ui/backend/server.py` in another terminal.

Production build (what the Python server serves):

```bash
npm run build
```

## Privacy & git

The following are **never committed** (see `.gitignore`):

- `settings/local_profile.json` and other `local_*` settings
- `applications/local_applications.json` and other `local_*` application data
- `engine/dynamic_engine/data/` (stage outputs, generation log, status)
- `outputs/` (built documents)
- `ui/frontend/assets/` and `ui/frontend/index.html` (frontend build output)
- `ui/frontend/dist/` and `node_modules/`
- `.env`, credentials, virtualenvs

If you previously had old hashed bundles tracked in git, remove them with:

```bash
git rm -r --cached ui/frontend/assets/
git rm --cached ui/frontend/index.html
```

Then rebuild the frontend.

## Troubleshooting

| Issue | Things to check |
|-------|-----------------|
| Empty profile / no jobs | Create `settings/local_profile.json` and `applications/local_applications.json` |
| Generation fails immediately | Ollama running? Model pulled? Check **Settings** or `engine/dynamic_engine/config.yaml` |
| Review preview empty | Run **Generate all** first; output folder must match job slug via stage 3 metadata |
| White / blank UI page | Run `cd ui/frontend && npm run build` from project root; hard-refresh browser |
| Stale UI after pull | Rebuild frontend; old `assets/index-*.js` files are not kept in git |
| PDF build errors | `xhtml2pdf` installed; check template HTML in `templates/` |
| Theme flashes wrong on load | `src/index.html` includes an inline script that reads `joblication.theme` before React mounts |

## License

Private / local use—add a license file if you plan to distribute.
