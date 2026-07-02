# Joblication

Joblication is a local-first job application studio. It helps you maintain a structured profile, capture job postings, run an LLM pipeline to tailor CV and cover letter content per role, and export polished HTML/PDF documents—all from a browser UI on your machine.

Nothing runs in the cloud by default: your profile, applications, generated artifacts, and Ollama calls stay local.

## Features

| Area | What you can do |
|------|-----------------|
| **Profile** | Edit contact info, experience, education, skills, and custom sections in a structured form |
| **Jobs** | Add roles via URL scrape or pasted description; store company, title, location, and full job text |
| **Applications** | Track status, generate documents for all jobs, select/delete entries, open outputs |
| **Templates** | Photoshop-style layout editor for CV sections (layers, typography, grid, snap, pan/zoom) |
| **Review** | Preview HTML/PDF, edit stage JSON, rebuild exports |

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│  React UI (ui/frontend)          http://localhost:8080        │
│  Profile · Jobs · Applications · Templates · Review         │
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

The build copies assets into `ui/frontend/` so the Python server can serve them.

### 3. Create local data files

These paths are gitignored—you need your own copies:

| File | Purpose |
|------|---------|
| `settings/local_profile.json` | Your CV/profile data (start from `settings/profile.json` or create via the Profile UI) |
| `applications/local_applications.json` | Saved job postings (`{}` or add jobs through the Jobs UI) |

`engine/dynamic_engine/config.yaml` already points at these local paths.

### 4. Start Ollama

Ensure Ollama is running and the model in `config.yaml` is pulled:

```bash
ollama pull gemma4:26b
```

Adjust `engine/dynamic_engine/config.yaml` if you use a different model.

### 5. Run the UI

From the **project root**:

```bash
python ui/backend/server.py
```

Open [http://localhost:8080](http://localhost:8080).

## Typical workflow

1. **Profile** — Fill in your experience, education, skills, and contact details.
2. **Jobs** — Paste a job URL or description; save the role.
3. **Applications** — Click **Generate all** to run the full pipeline (Stage 1 → 2 → 3 → PDF build).
4. **Review** — Preview CV and cover letter, tweak JSON if needed, **Save & export PDF**.
5. **Templates** (optional) — Adjust layout/typography for document templates.

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
| `engine/dynamic_engine/config.yaml` | Ollama URL/model, profile & applications paths, stage options, verification settings |
| `settings/template.json` | Default CV/cover letter template IDs and output naming |
| `settings/local_profile.json` | Your profile (local, not committed) |
| `applications/local_applications.json` | Your job records (local, not committed) |

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
│   └── frontend/          # React + Vite source and built assets
└── requirements.txt
```

## API overview

The UI talks to a small REST API on port **8080**:

- `GET/PUT /api/profile` — profile JSON
- `GET/POST/PUT/DELETE /api/applications` — jobs
- `GET /api/applications/view` — jobs with output metadata
- `POST /api/generate` — start full pipeline (background thread)
- `GET /api/generate/status` — pipeline progress
- `GET/PUT /api/review/:slug` — stage 2/3 JSON + output files
- `POST /api/build/:slug` — rebuild PDFs after review edits
- `GET/PUT /api/templates/:id` — template catalog + custom layouts
- `GET /api/files/:folder/:filename` — serve output HTML/PDF for preview

## Frontend development

For hot reload during UI work:

```bash
cd ui/frontend
npm run dev
```

Vite dev server proxies API calls, or run `python ui/backend/server.py` separately and configure Vite proxy in `vite.config.js` if needed.

Production build (what the Python server serves):

```bash
npm run build
```

## Privacy & git

The following are **never committed** (see `.gitignore`):

- `settings/local_profile.json` and other `local_*` settings
- `applications/local_applications.json`
- `engine/dynamic_engine/data/` (stage outputs)
- `outputs/` (built documents)
- `.env`, credentials, virtualenvs, `node_modules`

## Troubleshooting

| Issue | Things to check |
|-------|-----------------|
| Empty profile / no jobs | Create `settings/local_profile.json` and `applications/local_applications.json` |
| Generation fails immediately | Ollama running? Model pulled? See `engine/dynamic_engine/config.yaml` |
| Review preview empty | Run **Generate all** first; output folder must match job slug via stage 3 metadata |
| White UI page | Rebuild frontend (`npm run build`); hard-refresh browser |
| PDF build errors | `xhtml2pdf` installed; check template HTML in `templates/` |

## License

Private / local use—add a license file if you plan to distribute.
