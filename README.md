# Joblication

Joblication is a local-first desktop studio for creating tailored, ATS-friendly CVs and evidence-led cover letters. It stores a reusable candidate profile, captures job postings, runs a source-grounded multi-stage pipeline with Ollama or OpenRouter, lets you refine documents in a visual editor, and exports HTML/PDF files from your own machine.

Your profile, applications, stage data, and generated documents stay local by default. Model requests stay local with Ollama; choosing OpenRouter sends generation prompts to the selected cloud model.

## What it does

| Area | Capabilities |
|------|--------------|
| **Profile** | Maintain contact details, experience, education, skills, projects, certifications, and custom sections in structured form |
| **Jobs** | Enter company, title, location, about, and description by hand; keep role details together for generation |
| **Applications** | Filter and select jobs, choose a per-job CV template, pick CV+Letter / CV only / Letter only, follow live progress, and inspect per-job outcomes |
| **General CV** | Analyze the saved profile for its strongest supported job title and summary, then build an employer-neutral CV without a cover letter |
| **ATS-focused CVs** | Tailor supported skills and experience to the posting, preserve source facts, keep bullets scannable, and write an ATS keyword-coverage report |
| **Cover letters** | Generate role-specific, evidence-led JSON (opening, body, closing) that templates place into a PDF; letter-only does not require a CV |
| **Document studio** | Edit CV and cover-letter sections in a Figma/Adobe-inspired three-panel workspace with live preview, PDF preview, undo/redo, autosave, health checks, and export |
| **CV templates** | Compose CVs from supported components, drag components into order, set exact 1px section gaps, and control padding, opacity, alignment, colors, and typography |
| **Settings** | Choose light/dark theme, set the output folder for generated PDFs, and configure Ollama or OpenRouter |

## Pipeline

```text
Profile + job
        |
        v
CV writer: full tailored CV JSON (optional; skipped for letter-only)
        |
        v
CV reviewer: {ok, issues} feedback JSON — no rewrite
        |
        v
CV writer repair: at most two review rounds
        |
        v
Letter writer: opening / body / closing JSON (optional; skipped for CV-only)
  (Both mode also passes the CV JSON as evidence)
        |
        v
Letter reviewer + at most two repairs
        |
        v
Static build: Jinja templates place JSON fields into HTML/PDF + ATS report
        |
        v
Document studio: review, edit, save, and export
```

```text
┌────────────────────────────────────────────────────────────────┐
│  React UI (ui/frontend)          http://localhost:8080         │
│  Profile · Jobs · Applications · General CV · Templates · Review │
└──────────────────────────┬─────────────────────────────────────┘
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
│  CV JSON write/review  and/or  letter JSON write/review     │
│  (Ollama or OpenRouter; max two review rounds per document) │
└──────────────────────────┬──────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  Static engine (engine/static_engine)                       │
│  Jinja2 templates → HTML → PDF (xhtml2pdf)                  │
└─────────────────────────────────────────────────────────────┘
```

The dynamic stages still run as separate subprocesses. The configured model stays loaded across those stages so large local models are not unloaded and reloaded between CV and letter.

Typical model-call budget is 2 per document on a clean run (write + review). Worst case is 5 (write, review, repair, review, repair). Invalid JSON still fails; a reviewer that never says `ok` still saves the last draft and builds PDFs.

### CV quality and ATS behavior

Stage 2 is designed to improve machine parsing without inventing experience:

- Uses standard, job-relevant skill names only when the candidate profile supports them.
- Front-loads relevant language in short, scannable experience bullets.
- Preserves historical employers, job titles, project purpose, and source-backed scope.
- Rejects or repairs seniority inflation, unsupported outcomes, garbled phrases, and repurposed project claims.
- A reviewer returns `{ok, issues}` only; the writer resubmits the full JSON when issues remain.
- Produces `<filename>_ats_report.json` beside each built CV with keyword-group coverage and unsupported-keyword information.
- Uses a clean, single-column CV template with conventional headings and selectable text.
- Uses the CV template selected for each application. Hidden components are not requested from the LLM, and the saved component order and pixel spacing drive both Live Draft and PDF output.

ATS reports are diagnostic signals, not guarantees of how a particular employer's scanner will rank a document.

### Cover-letter quality behavior

Stage 3 builds from the verified CV and candidate profile instead of writing a generic summary of the job description:

- Uses a specific opening, two evidence paragraphs by default, and a value-focused closing.
- Gives each body paragraph a distinct claim -> evidence -> employer tie-back structure.
- Blocks generic openers, repetitive paragraph starts, keyword dumping, leaked salutations/sign-offs, and common template phrases.
- Prevents unsupported scope inflation and checks important claims against the CV draft when one exists.
- Keeps qualification gaps out of the letter prose.
- Header fields (addressee, company, role, date, sign-off) are filled from the job and profile, not the model.

## Failure-tolerant batches

Each application is isolated inside every dynamic stage. A malformed response, timeout, low review score, or unbuildable job is recorded for that job and does not normally stop the rest of the batch. Stage payloads are checkpointed after each application, and the static builder skips broken documents while continuing with buildable ones.

The default policy is:

```yaml
batch_resilience:
  enabled: true
  continue_on_error: true
  max_attempts_per_application: 3
  skip_fit_below: 5
  accept_low_quality_fit_at_most: 6
  reuse_previous_success: true
```

| Outcome | Meaning |
|---------|---------|
| `generated` | Draft met the configured policy |
| `accepted_low_quality` | A structurally valid draft was accepted because the profile fit is at or below the configured borderline-fit ceiling |
| `accepted_after_retries` | The best valid draft was kept after all attempts were used |
| `reused_previous` | A previous buildable draft was preserved after transient failures |
| `skipped_low_fit` | All attempts failed and the estimated profile fit was below `skip_fit_below` |
| `skipped_dependency` | An upstream application stage was unavailable, so only that job/document was skipped |
| `failed` | All attempts failed and no usable previous draft or low-fit skip policy applied |

The Applications page shows these outcomes with fit, quality, and attempt counts. A mixed batch finishes as **Complete with issues** instead of reporting the entire run as failed.

Application isolation cannot recover from the host machine shutting down, the server process being killed, or a stage-wide prerequisite/configuration failure. Because completed applications are checkpointed, restart Joblication and rerun the affected stage or selected jobs; enabling `reuse_previous_success` protects the last buildable draft during transient model failures.

## Prerequisites

- Python 3.11+ (3.13 tested)
- Node.js 20.19+ or 22.12+ for the Vite 7 frontend toolchain
- Either [Ollama](https://ollama.com/) running locally, or an OpenRouter API key
- Enough RAM/VRAM for the selected Ollama model when using the local provider

The checked-in configuration defaults to Ollama with `huihui_ai/gemma-4-abliterated:26b`. You can use another Ollama model, including smaller 9B-12B-class models, or switch to OpenRouter in **Settings**. Output quality, context length, cost, and data handling vary by provider and model.

## Quick start

### 1. Install Python dependencies

```bash
cd Joblication
python -m venv .venv

# Windows PowerShell
.venv\Scripts\Activate.ps1

# macOS / Linux
source .venv/bin/activate

python -m pip install -r requirements.txt
```

### 2. Build the frontend

```bash
cd ui/frontend
npm ci
npm run build
cd ../..
```

The build is written to `ui/frontend/dist/` and published into `ui/frontend/` for the Python server. Rebuild after changing or pulling frontend source.

### 3. Configure a model provider

For local Ollama generation, start Ollama and pull the configured model:

```bash
ollama pull huihui_ai/gemma-4-abliterated:26b
```

Or, open **Settings**, choose **OpenRouter — cloud**, add your API key, click **Refresh models**, select a model, and select one of the reasoning efforts the model publishes (such as low, high, or max). The catalog is fetched only when you press **Refresh models**; selecting a provider never starts Ollama or sends a generation prompt.

If you choose a different model, change it under **Settings > AI provider** or edit `config.yaml`.

### 4. Start Joblication

From the project root:

```bash
python ui/backend/server.py
```

Open [http://localhost:8080](http://localhost:8080).

### 5. Create local data

Use the **Profile** page to save your candidate information and **Jobs** to add applications. Joblication writes the gitignored files configured under `applications.json` and `profile.json`; by default these are:

- `settings/local_profile.json`
- `applications/local_applications.json`

## Windows desktop app (Electron)

Joblication can also run as a native Windows desktop app. The Electron window starts the local API automatically and opens the existing React interface; it does not start Ollama or generate documents until you explicitly choose **Generate** in the app.

Desktop builds keep personal data outside the installation directory. Your profile, job records, settings, checkpoints, and exports are stored in Joblication's per-user application-data workspace, so installing an update does not replace them.

### Run the desktop app during development

From the project root, after the normal Python prerequisites are installed:

```powershell
npm install
python -m pip install -r requirements-desktop.txt
npm run dev
```

`npm run dev` builds the frontend, starts the local backend with a per-user workspace, and opens the Electron window. It does not start Ollama; Ollama is only contacted if you explicitly generate with it selected as the provider. `npm start` is an equivalent shortcut. Set `JOBLICATION_PYTHON` to a specific Python executable if `python` is not on your PATH.

### Build a Windows installer

```powershell
npm run desktop:dist
```

This builds the React assets, freezes the Python API/pipeline into a bundled service, and creates an NSIS installer under `dist/`. Model-backed generation then requires either a running Ollama instance with a pulled model or a configured OpenRouter API key and model. Browsing/editing local data and opening the app invoke neither provider.

For a faster rebuild of only the bundled service, run:

```powershell
npm run desktop:python
```

## Typical workflow

1. Complete the **Profile** with specific, defensible evidence. Generation deliberately refuses to invent missing experience.
2. Add job postings under **Jobs**.
3. Open **Templates** to create or tune a CV layout, then select that template on each card under **Applications**.
4. Choose **CV + Letter**, **CV only**, or **Letter only**, then generate all or select specific jobs. Jobs run one at a time in a queue; a failure does not stop the rest.
5. Let the batch continue; per-job failures do not require supervision.
6. Review any **Complete with issues** badges and open **Review & edit**.
7. Refine each document in the **Document studio**, then choose **Export PDFs**.

For an employer-neutral document, open **General CV**, generate or edit the suggested title and summary, choose a template, and select **Generate CV only**. The internal General CV target remains hidden from the Jobs and Applications lists.

### Generation modes

Choose what to produce under **Applications** → **Mode**. Each option runs the pipeline from the start and builds only the selected documents:

| Mode | Builds |
|------|--------|
| **CV + Letter** | Tailored CV and cover letter |
| **CV only** | Tailored CV (skips cover-letter generation) |
| **Letter only** | Cover letter from profile + job (does not run the CV writer) |

## Document studio

The Review page is a focused visual editor rather than a raw JSON editor:

- The left outline switches between the CV and cover letter and jumps to meaningful sections.
- The center canvas provides a selectable live draft, 50-120% zoom, generated-PDF preview, and an open-PDF action.
- The right inspector edits only the selected section with purpose-built controls.
- CV controls cover summary, skills, experience, projects, volunteer work, certifications, achievements, and additional information; profile-sourced education and languages remain linked to Profile.
- Cover-letter controls cover recipient/details, opening, evidence paragraphs, closing, and signature.
- Repeating items can be added, removed, and reordered.
- ATS/letter health checks show word counts and common structural problems while editing.
- Undo, redo, autosave, explicit save, unsaved-change protection, and PDF export are built in.
- Contact and education edits link back to the canonical Profile rather than duplicating identity data inside every generated document.

Keyboard shortcuts outside a text field:

| Shortcut | Action |
|----------|--------|
| `Ctrl/Cmd + Z` | Undo |
| `Ctrl/Cmd + Shift + Z` or `Ctrl/Cmd + Y` | Redo |
| `Ctrl/Cmd + S` | Save |

**Export PDFs** saves both drafts first, rebuilds both documents, refreshes the output metadata, and opens the generated PDF preview.

Live Draft and exported documents share the same layout contract. PDF export automatically uses Microsoft Edge, Chrome, or Chromium when available so browser CSS renders consistently in both views. If no supported browser is installed, Joblication falls back to `xhtml2pdf` so a missing renderer does not stop a batch.

## CV template editor

Templates apply to CVs only; cover letters keep their fixed evidence-led document layout. A CV template is a safe component contract rather than arbitrary HTML:

- Drag components in the left panel to define their output order.
- Toggle a component off to omit it from the CV and from Stage 2 model generation.
- Set **Gap before** and **Layer padding** in one-pixel increments. Those exact values are used by Live Draft and PDF export.
- Adjust component opacity, alignment, fill, headline typography, and body typography.
- Adjust page size, page padding, background, base font, and line height under **Document**.
- Component width/height resizing and freeform absolute positioning are intentionally unavailable, preserving a single-column ATS-readable flow.

Choose the template for each job from its **CV template** control on the Applications page. Changing the selector affects CV generation and rebuilds only; it never changes the cover letter.

Optional renderer overrides:

```powershell
$env:JOBLICATION_PDF_RENDERER = "browser"   # browser, xhtml2pdf, or auto (default)
$env:JOBLICATION_PDF_BROWSER = "C:\path\to\msedge.exe"
```

## Configuration

Settings shows theme, output folder, and AI provider. Other keys in the project-root `config.yaml` still apply on the next run if you edit the file directly.

| Section | Important controls |
|---------|--------------------|
| `llm` / `ollama` / `openrouter` | Provider, model, API key, and reasoning effort (Settings → AI provider) |
| `export` | Output folder for generated CVs, cover letters, and ATS reports (Settings → Output folder). Absolute paths are used as-is; relative paths are stored under the Joblication data folder |

Other configuration files:

| File | Description |
|------|-------------|
| `settings/template.json` | Default CV/letter template IDs, formats, filename pattern, and fallback output directory if `export.output_dir` is unset |
| `settings/custom_templates.json` | Local component-based CV templates created in the editor (gitignored) |
| `applications/application_meta.json` | Local status, notes, and per-job CV-template selections (gitignored) |
| `settings/local_profile.json` | Local candidate profile |
| `applications/local_applications.json` | Local job records |

Theme preference and editor autosave preference are stored in browser `localStorage` as `joblication.theme` and `joblication.editor.autosave`.

## CLI usage

Run the full pipeline:

```bash
python ui/backend/generate.py
```

Resume from a later stage, target selected jobs, or limit the build:

```bash
python ui/backend/generate.py --from-stage stage_2 --slugs company_role,another_role
python ui/backend/generate.py --from-stage stage_3 --build-targets letter
python ui/backend/generate.py --from-stage build --build-targets cv
python ui/backend/generate.py --from-stage stage_2 --only-stage stage_2
```

Run stages directly from the project root:

```bash
python engine/dynamic_engine/stage_2.py
python engine/dynamic_engine/stage_3.py
python engine/static_engine/build.py
```

Stage data is checkpointed in `engine/dynamic_engine/data/`. Final files are written under the folder set in **Settings → Output** (default `outputs/<Company_Role_YYYYMMDD>/`). When Electron is started from this checkout with `npm run dev`, the default relative `outputs` folder still goes to the repository rather than the Electron AppData workspace. Packaged installs use `Documents/Joblication/outputs` for that default unless Settings uses another path or `JOBLICATION_OUTPUT_ROOT` is set.

## Outputs

Depending on Settings → Output and `settings/template.json` formats, a successful build can produce:

```text
outputs/<Company_Role_YYYYMMDD>/
  <stem>_cv.html
  <stem>_cv.pdf
  <stem>_cover_letter.html
  <stem>_cover_letter.pdf
  <stem>_ats_report.json
```

If a CV or cover letter is not buildable, only that document/application is skipped. Buildable documents from the same batch are still exported.

## Project layout

```text
Joblication/
  applications/                 Job storage and extraction helpers
  config.yaml                   Ollama, generation, stage, and resilience settings
  engine/
    dynamic_engine/             Ollama stages, prompts, quality gates, resilience
    static_engine/              Jinja rendering, PDF build, ATS report
  outputs/                      Generated application folders (gitignored)
  settings/                     Profile and template configuration
  templates/                    CV and cover-letter Jinja templates
  tests/                        Deterministic quality and resilience tests
  ui/
    backend/                    Python HTTP server and pipeline wrapper
    frontend/                   React/Vite source and published build
  requirements.txt
```

## API overview

The browser UI uses a local REST API on port 8080:

- `GET/PUT /api/profile` - candidate profile
- `GET/POST/PUT/DELETE /api/applications` - saved jobs
- `GET /api/applications/view` - jobs with phases, outputs, and generation outcomes
- `GET /api/general-cv` - saved General CV positioning and output metadata
- `POST /api/general-cv/recommend` - recommend a profile-grounded title and summary
- `POST /api/general-cv/generate` - start a General CV pipeline that builds only the CV
- `POST /api/generate` - start a background run with stage, slug, and build-target options
- `GET /api/generate/status` - current phase and final outcome summary
- `GET/PUT /api/engine-config` - validated engine configuration
- `GET/PUT /api/review/:slug` - structured stage 2/3 content plus review identity/output metadata
- `POST /api/build/:slug` - rebuild selected documents after review edits
- `GET/PUT /api/templates/:id` - template catalog and custom layouts
- `GET /api/files/:folder/:filename` - local output preview/download

## Frontend development

Run the Python server in one terminal, then:

```bash
cd ui/frontend
npm run dev
```

Vite proxies `/api` to `http://127.0.0.1:8080`. To update the version served directly by the Python server:

```bash
npm run build
```

## Tests

Run deterministic Python tests from the project root:

```bash
python -m unittest discover -s tests -v
```

Verify the frontend production bundle:

```bash
cd ui/frontend
npm run build
```

The Python suite covers the writer/reviewer JSON loop, independent CV/letter queue steps, batch retries/outcomes, OpenRouter request shaping, and ATS reporting. Model-backed generation remains an integration test and requires real local data plus the selected provider.

## Troubleshooting

| Issue | What to check |
|-------|---------------|
| UI is blank or stale | Run `npm ci` once, then `npm run build`; hard-refresh the browser |
| Generation fails before processing jobs | For Ollama, confirm it is running and the model is pulled. For OpenRouter, confirm the API key, model, and account access. Also check local data paths and YAML validity. |
| One job shows `failed` or `skipped` | Open its outcome details; fix profile/job data if needed and regenerate only that application or resume from the affected stage |
| Batch says **Complete with issues** | The run finished; inspect accepted, reused, skipped, or failed job badges instead of rerunning every successful job |
| Run was interrupted by a restart/shutdown | Restart the server and rerun from the last safe stage; checkpointed applications and previous successful drafts remain available |
| Review has no draft | Generate the required upstream stage; skipped/failed documents intentionally show an explanatory unavailable state |
| PDF is missing after an edit | Choose **Export PDFs**; confirm `xhtml2pdf` is installed and the selected template renders valid HTML |
| ATS report is missing | Build a CV (not letter-only) with valid CV JSON |
| Ollama runs out of memory | Use a smaller/quantized model, reduce the configured context window if the model supports it, or close other GPU-heavy processes |

## Privacy and git

The `.gitignore` excludes local profiles/applications, stage artifacts, generated outputs, environment and secret overrides, dependencies, desktop bundles, local tool state, and normal frontend build output. The checked-in `config.yaml` contains publishable defaults and a blank OpenRouter key. Electron stores writable settings and personal data in the per-user application-data workspace while exporting generated documents to the output location described above.

Before publishing, confirm that `config.yaml` still contains `api_key: ""` if you used the standalone browser server rather than Electron. Review files before committing if this repository previously tracked old `ui/frontend/assets/` bundles or `ui/frontend/index.html`; tracked files remain tracked even after an ignore rule is added.

To remove previously tracked frontend build artifacts from the Git index without deleting the local build:

```bash
git rm -r --cached ui/frontend/assets/
git rm --cached ui/frontend/index.html
```

Then rebuild the frontend locally when needed.

## License

Private/local use. Add a license before distributing the project.
