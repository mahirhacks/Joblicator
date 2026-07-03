const GLOBAL_CSS = `
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap");

*,
*::before,
*::after {
  box-sizing: border-box;
  border-radius: 0 !important;
}

.page-loading-spinner,
.md-spinner {
  border-radius: 50% !important;
}

:root,
[data-theme="light"] {
  --bg: #FFFFFF;
  --bg-elevated: #FFFFFF;
  --surface: #FFFFFF;
  --surface-2: #F5F5F5;
  --surface-hover: #F5F5F5;
  --border: #E5E5E5;
  --border-strong: #171717;
  --text: #171717;
  --muted: #6B6B6B;
  --muted-2: #9B9B9B;
  --accent: #005288;
  --success: #1F7A33;
  --error: #B3261E;
  --warning: #8A6D00;
  --scrollbar-thumb: #DDDDDD;
  --scrollbar-track: #FFFFFF;
  --selection-bg: #E5E5E5;
  --input-bg: #FFFFFF;
  --input-border: #CCCCCC;
  --btn-primary-bg: #000000;
  --btn-primary-text: #FFFFFF;
  --btn-primary-hover: #333333;
  --btn-secondary-bg: #FFFFFF;
  --btn-secondary-hover: #F5F5F5;
  --btn-disabled-border: #E5E5E5;
  --btn-disabled-text: #9B9B9B;
  --accent-color: #000000;
  --console-bg: #111111;
  --console-fg: #DDDDDD;
  --resize-line: #E5E5E5;
  --resize-active: #171717;
  --chip-done-bg: #000000;
  --chip-done-fg: #FFFFFF;
  --workspace-bg: #F5F5F5;
  --ps-canvas-border: #171717;
  --paper-bg: #FFFFFF;
  --footer-bg: #FAFAFA;
  --radius-sm: 0;
  --radius: 0;
  --radius-lg: 0;
  --radius-full: 0;
  --sidebar-w: 248px;
  --font: "Inter", "Helvetica Neue", Arial, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, Consolas, monospace;
  --transition: 150ms ease-out;
}

[data-theme="dark"] {
  --bg: #0A0A0A;
  --bg-elevated: #111111;
  --surface: #111111;
  --surface-2: #1A1A1A;
  --surface-hover: #222222;
  --border: #2E2E2E;
  --border-strong: #F5F5F5;
  --text: #F5F5F5;
  --muted: #9B9B9B;
  --muted-2: #6B6B6B;
  --scrollbar-thumb: #444444;
  --scrollbar-track: #0A0A0A;
  --selection-bg: #333333;
  --input-bg: #111111;
  --input-border: #444444;
  --btn-primary-bg: #FFFFFF;
  --btn-primary-text: #000000;
  --btn-primary-hover: #E5E5E5;
  --btn-secondary-bg: #111111;
  --btn-secondary-hover: #1A1A1A;
  --btn-disabled-border: #2E2E2E;
  --btn-disabled-text: #6B6B6B;
  --accent-color: #FFFFFF;
  --console-bg: #000000;
  --console-fg: #DDDDDD;
  --resize-line: #2E2E2E;
  --resize-active: #F5F5F5;
  --chip-done-bg: #FFFFFF;
  --chip-done-fg: #000000;
  --workspace-bg: #1A1A1A;
  --ps-canvas-border: #F5F5F5;
  --paper-bg: #FFFFFF;
  --footer-bg: #1A1A1A;
}

[data-theme="dark"] .profile-page {
  --md-primary: #FFFFFF;
  --md-primary-container: #1A1A1A;
  --md-surface: #111111;
  --md-surface-2: #1A1A1A;
  --md-surface-3: #222222;
  --md-outline: #444444;
  --md-on-surface: #F5F5F5;
  --md-on-surface-variant: #9B9B9B;
}

[data-theme="dark"] .ps-editor {
  --ps-bg: #0A0A0A;
  --ps-panel: #111111;
  --ps-panel-border: #2E2E2E;
  --ps-text: #F5F5F5;
  --ps-muted: #9B9B9B;
  --ps-accent-dim: #1A1A1A;
}

html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html,
body,
#root {
  margin: 0;
  min-height: 100%;
  height: 100%;
  font-family: var(--font);
  font-size: 14px;
  line-height: 1.5;
  background: var(--bg);
  color: var(--text);
}

body {
  letter-spacing: normal;
}

::selection {
  background: var(--selection-bg);
  color: var(--text);
}

* {
  scrollbar-width: thin;
  scrollbar-color: var(--scrollbar-thumb) var(--scrollbar-track);
}

*::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

*::-webkit-scrollbar-track {
  background: var(--scrollbar-track);
}

*::-webkit-scrollbar-thumb {
  background: var(--scrollbar-thumb);
}

.app-shell {
  min-height: 100vh;
}

.app-main {
  margin-left: var(--sidebar-w);
  min-height: 100vh;
  min-width: 0;
  display: flex;
  flex-direction: column;
  background: var(--bg);
}

.app-main:has(.ps-editor) {
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
}

/* Sidebar */
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  width: var(--sidebar-w);
  height: 100vh;
  background: var(--surface);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  flex-shrink: 0;
}

.sidebar-header {
  padding: 1.35rem 1.15rem 1.1rem;
  flex-shrink: 0;
}

.sidebar-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.sidebar-brand svg {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
}

.sidebar-brand-text {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  min-width: 0;
}

.sidebar-brand-name {
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text);
}

.sidebar-brand-tag {
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted-2);
}

.sidebar-nav {
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0;
  overflow: hidden;
  flex: 1;
}

.sidebar-nav-label {
  margin: 0 0 0.5rem;
  padding: 0 1rem;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted-2);
}

.sidebar-link {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.62rem 1rem;
  border-left: 2px solid transparent;
  color: var(--muted);
  text-decoration: none;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: color var(--transition), border-color var(--transition);
  white-space: nowrap;
  position: relative;
}

.sidebar-link-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
  opacity: 0.75;
  transition: opacity var(--transition);
}

.sidebar-link-icon svg {
  width: 18px;
  height: 18px;
}

.sidebar-link:hover {
  color: var(--text);
}

.sidebar-link:hover .sidebar-link-icon {
  opacity: 1;
}

.sidebar-link.active {
  color: var(--text);
  border-left-color: var(--border-strong);
}

.sidebar-link.active .sidebar-link-icon {
  opacity: 1;
  color: var(--text);
}

.sidebar-footer {
  padding: 0.65rem 0 1rem;
  border-top: 1px solid var(--border);
  flex-shrink: 0;
  margin-top: auto;
}

.sidebar-footer-link {
  width: 100%;
}

.sidebar-footer p {
  margin: 0;
  font-size: 10px;
  line-height: 1.45;
  color: var(--muted-2);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

/* Settings */
.settings-page .profile-main-inner {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 1px);
}

.settings-main-inner {
  padding: 2.5rem 2.75rem 2rem;
}

.settings-config-path {
  margin: 0.65rem 0 0;
  font-size: 0.8rem;
  color: var(--muted-2);
}

.settings-config-path code {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--muted);
}

.settings-hint {
  margin: 0 0 1.25rem;
  font-size: 0.85rem;
}

.settings-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 2rem;
}


.theme-switch {
  display: flex;
  gap: 1.5rem;
  border-bottom: 1px solid var(--border);
  width: fit-content;
}

.theme-switch button {
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  color: var(--muted);
  padding: 0.5rem 0;
  margin-bottom: -1px;
  cursor: pointer;
  font: inherit;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: color var(--transition), border-color var(--transition);
}

.theme-switch button.active {
  color: var(--text);
  border-bottom-color: var(--border-strong);
}

.settings-appearance {
  margin-bottom: 1.5rem;
}

.settings-section {
  padding: 1.5rem 1.75rem 1.75rem;
}

.settings-section-head {
  margin-bottom: 1.35rem;
}

.settings-section-head h2 {
  margin: 0;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text);
}

.settings-section-desc {
  margin: 0.4rem 0 0;
  font-size: 0.85rem;
  color: var(--muted);
  line-height: 1.45;
}

.settings-bool-field {
  padding-top: 0.15rem;
}

.settings-checkbox-label {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  cursor: pointer;
  font-size: 0.92rem;
  color: var(--text);
  user-select: none;
}

.settings-checkbox-label input[type="checkbox"] {
  width: 1rem;
  height: 1rem;
  margin: 0;
  accent-color: var(--accent-color);
  cursor: pointer;
}

/* Shared page chrome */
.page-lead {
  margin: 0.35rem 0 0;
  font-size: 0.92rem;
  color: var(--muted);
  max-width: 52ch;
  line-height: 1.5;
}

.page-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  min-height: 60vh;
  color: var(--muted);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.page-loading-spinner,
.md-spinner {
  width: 36px;
  height: 36px;
  border: 2px solid var(--border);
  border-top-color: var(--border-strong);
  animation: spin 0.75s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 3.5rem 2rem;
  background: var(--surface);
  border: 1px solid var(--border);
}

.empty-state-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
  margin-bottom: 1.25rem;
}

.empty-state-icon svg {
  width: 26px;
  height: 26px;
}

.empty-state h3 {
  margin: 0 0 0.5rem;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.empty-state p {
  margin: 0 0 1.25rem;
  max-width: 36ch;
  color: var(--muted);
  font-size: 0.92rem;
  line-height: 1.55;
}

/* Page chrome */
.page-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.25rem 1.5rem 0.75rem;
  flex-wrap: wrap;
}

.page-header.compact {
  padding-bottom: 0.25rem;
}

.page-header h1 {
  margin: 0 0 0.25rem;
  font-size: 1.35rem;
  font-weight: 600;
  letter-spacing: normal;
}

.subtitle {
  margin: 0;
  color: var(--muted);
  font-size: 0.9rem;
}

.header-actions {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex-wrap: wrap;
}

.page-center {
  padding: 3rem;
  text-align: center;
}

.muted {
  color: var(--muted);
}

.small {
  font-size: 0.85rem;
}

/* Forms */
label {
  display: block;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  margin: 0.5rem 0 0.35rem;
}

input,
textarea,
select,
.select {
  width: 100%;
  padding: 12px;
  font: inherit;
  color: var(--text);
  background: var(--input-bg);
  border: 1px solid var(--input-border);
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
  border-color: var(--border-strong);
}

.checkbox-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.75rem;
}

.checkbox-row input {
  width: auto;
  accent-color: var(--accent-color);
}

/* Range sliders */
input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 18px;
  background: transparent;
  cursor: pointer;
  margin: 0;
  padding: 0;
  border: none;
}

input[type="range"]:focus {
  outline: none;
}

input[type="range"]::-webkit-slider-runnable-track {
  height: 3px;
  background: var(--border);
  border: 1px solid var(--border);
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 12px;
  height: 12px;
  margin-top: -5px;
  background: var(--border-strong);
  border: 1px solid var(--border-strong);
}

input[type="range"]::-moz-range-track {
  height: 3px;
  background: var(--border);
  border: 1px solid var(--border);
}

input[type="range"]::-moz-range-thumb {
  width: 12px;
  height: 12px;
  background: var(--border-strong);
  border: 1px solid var(--border-strong);
}

input[type="range"]:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.ps-editor input[type="range"]::-webkit-slider-runnable-track,
.ps-editor input[type="range"]::-moz-range-track {
  background: var(--border);
  border: 1px solid var(--border);
}

.ps-editor input[type="range"]::-webkit-slider-thumb,
.ps-editor input[type="range"]::-moz-range-thumb {
  background: var(--border-strong);
  border: 1px solid var(--border-strong);
}

.btn {
  padding: 0.55rem 1rem;
  font: inherit;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: 1px solid var(--border-strong);
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background-color var(--transition), color var(--transition), opacity var(--transition);
}

.btn:disabled {
  border-color: var(--btn-disabled-border);
  color: var(--btn-disabled-text);
  cursor: not-allowed;
  opacity: 1;
}

.btn-sm {
  padding: 0.4rem 0.7rem;
  font-size: 10px;
}

.btn-primary {
  background: var(--btn-primary-bg);
  color: var(--btn-primary-text);
  border-color: var(--btn-primary-bg);
}

.btn-primary:hover:not(:disabled) {
  background: var(--btn-primary-hover);
  border-color: var(--btn-primary-hover);
}

.btn-ghost {
  background: var(--btn-secondary-bg);
  color: var(--text);
  border: 1px solid var(--border-strong);
}

.btn-ghost:hover:not(:disabled) {
  background: var(--btn-secondary-hover);
}

.btn.danger,
.btn-ghost.danger {
  color: var(--error);
  border-color: var(--error);
  background: var(--surface);
}

.full-width {
  width: 100%;
  margin-top: 0.5rem;
}

.code-area {
  width: 100%;
  font-family: var(--font-mono);
  font-size: 0.82rem;
  line-height: 1.45;
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--text);
  padding: 0.75rem;
  resize: vertical;
}

.code-area.full {
  min-height: calc(100vh - 220px);
}

.field-error {
  color: var(--error);
  font-size: 0.85rem;
}

/* Profile & workspace pages */
.profile-page {
  --md-primary: var(--border-strong);
  --md-primary-container: var(--surface-2);
  --md-surface: var(--surface);
  --md-surface-2: var(--surface-2);
  --md-surface-3: var(--surface-hover);
  --md-outline: var(--input-border);
  --md-on-surface: var(--text);
  --md-on-surface-variant: var(--muted);
  --md-radius: 0;
  --profile-sidebar-w: 272px;
  font-family: var(--font);
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 1px);
}

.profile-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  min-height: 60vh;
  color: var(--muted);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.profile-layout {
  display: flex;
  width: 100%;
  flex: 1;
  min-height: calc(100vh - 1px);
}

.profile-main {
  flex: 1;
  min-width: 0;
  overflow-y: auto;
  padding: 2.5rem 2.75rem 3rem;
}

.profile-main-inner {
  max-width: none;
  width: 100%;
}

.profile-section-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.75rem;
}

.profile-section-head h1 {
  margin: 0;
  font-size: 1.75rem;
  font-weight: 600;
  letter-spacing: normal;
  color: var(--md-on-surface);
}

.profile-form-surface {
  background: var(--md-surface);
  border: 1px solid var(--border);
  padding: 1.65rem 1.85rem 2rem;
}

.profile-page input,
.profile-page textarea {
  background: var(--input-bg);
  border: 1px solid var(--input-border);
  color: var(--md-on-surface);
  padding: 12px;
}

.profile-page input:focus,
.profile-page textarea:focus {
  border-color: var(--border-strong);
  outline: none;
}

.profile-sidebar {
  flex-shrink: 0;
  background: var(--surface);
  border-left: 1px solid var(--border);
  padding: 1.35rem 0 1.25rem 1rem;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
  min-width: 0;
}

.resizable-sidebar {
  position: relative;
  flex-shrink: 0;
}

.resizable-sidebar.profile-sidebar {
  position: sticky;
  top: 0;
  height: 100vh;
  min-height: calc(100vh - 1px);
}

.sidebar-resize-handle {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 6px;
  margin-left: -3px;
  cursor: col-resize;
  z-index: 20;
  touch-action: none;
}

.sidebar-resize-handle::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 1px;
  height: 100%;
  transform: translate(-50%, -50%);
  background: var(--resize-line);
  transition: background-color var(--transition);
}

.sidebar-resize-handle::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 1px;
  height: 24px;
  transform: translate(-50%, -50%);
  background: transparent;
  transition: background-color var(--transition);
  z-index: 1;
}

.sidebar-resize-handle:hover::before,
body.sidebar-resizing .sidebar-resize-handle::before {
  background: var(--resize-active);
}

body.sidebar-resizing {
  user-select: none;
  cursor: col-resize;
}

body.sidebar-resizing * {
  cursor: col-resize !important;
}

.profile-nav {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  min-height: 0;
}

.profile-sidebar-actions {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  margin-top: auto;
  padding: 1rem 1rem 0 0;
  border-top: 1px solid var(--border);
  flex-shrink: 0;
}

.profile-nav-label {
  margin: 0 0 0.5rem;
  padding: 0 1rem 0 0;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--md-on-surface-variant);
}

.profile-nav ul {
  list-style: none;
  margin: 0;
  padding: 0 1rem 0 0;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.profile-nav-item {
  width: 100%;
  text-align: left;
  padding: 0.62rem 0.85rem;
  border: none;
  border-left: 2px solid transparent;
  background: transparent;
  color: var(--md-on-surface-variant);
  font: inherit;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: color var(--transition), border-color var(--transition);
}

.profile-nav-item:hover {
  color: var(--md-on-surface);
}

.profile-nav-item.active {
  color: var(--md-on-surface);
  border-left-color: var(--border-strong);
}

.md-filled-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  width: 100%;
  min-height: 2.5rem;
  padding: 0.6rem 1.15rem;
  border: 1px solid var(--btn-primary-bg);
  background: var(--btn-primary-bg);
  color: var(--btn-primary-text);
  font: inherit;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color var(--transition), opacity var(--transition);
}

.md-filled-btn svg {
  width: 15px;
  height: 15px;
  flex-shrink: 0;
}

.md-filled-btn:hover:not(:disabled) {
  background: var(--btn-primary-hover);
  border-color: var(--btn-primary-hover);
}

.md-filled-btn:disabled {
  border-color: var(--btn-disabled-border);
  background: var(--btn-secondary-bg);
  color: var(--btn-disabled-text);
  opacity: 1;
  cursor: not-allowed;
}

.md-outlined-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  min-height: 2.5rem;
  padding: 0.6rem 1.15rem;
  border: 1px solid var(--border-strong);
  background: var(--btn-secondary-bg);
  color: var(--text);
  font: inherit;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
  transition: background-color var(--transition);
}

.md-outlined-btn:hover {
  background: var(--btn-secondary-hover);
}

.md-outlined-btn.full {
  width: 100%;
}

.md-text-btn {
  border: none;
  background: none;
  color: var(--accent);
  font: inherit;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
}

.md-text-btn.danger {
  color: var(--error);
}

.md-icon-btn {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--md-on-surface-variant);
  cursor: pointer;
  font-size: 1rem;
  align-self: center;
  transition: background-color var(--transition), color var(--transition);
}

.md-icon-btn:hover {
  background: var(--btn-secondary-hover);
  color: var(--error);
}

.md-field {
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
  min-width: 0;
}

.profile-page label {
  margin: 0;
}

.md-field > label {
  display: block;
  position: static;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--md-on-surface-variant);
  margin-bottom: 0.4rem;
  padding-left: 0.1rem;
}

.md-grid {
  display: grid;
  gap: 1.25rem 1.5rem;
  align-items: start;
}

.md-grid-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.md-field-span {
  grid-column: 1 / -1;
}

@media (max-width: 720px) {
  .md-grid-2 {
    grid-template-columns: 1fr;
  }

  .profile-layout {
    flex-direction: column;
  }

  .profile-sidebar,
  .resizable-sidebar.profile-sidebar {
    position: relative;
    width: 100% !important;
    height: auto;
    min-height: 0;
    border-left: none;
    border-top: 1px solid var(--border);
    order: -1;
  }

  .sidebar-resize-handle {
    display: none;
  }

  .profile-main {
    padding: 1.25rem;
  }
}

.md-input {
  width: 100%;
  padding: 12px;
  font: inherit;
  font-size: 0.95rem;
  line-height: 1.4;
  color: var(--md-on-surface);
  background: var(--input-bg);
  border: 1px solid var(--input-border);
  outline: none;
  transition: border-color var(--transition);
  margin: 0;
}

.md-input:focus {
  border-color: var(--border-strong);
}

.md-field:focus-within > label {
  color: var(--md-on-surface);
}

.md-textarea {
  min-height: 100px;
  resize: vertical;
}

.md-hint {
  display: block;
  margin-top: 0.35rem;
  font-size: 0.75rem;
  color: var(--md-on-surface-variant);
}

.md-title-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.md-title-row {
  display: flex;
  align-items: flex-end;
  gap: 0.75rem;
}

.md-title-row .md-field {
  flex: 1;
  min-width: 0;
}

.md-title-row .md-icon-btn {
  flex-shrink: 0;
  margin-bottom: 0.15rem;
}

.md-kv-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.md-kv-row {
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: 1rem;
  align-items: end;
  padding: 1.25rem;
  background: var(--md-surface);
  border: 1px solid var(--border);
}

.md-kv-row .md-icon-btn {
  margin-bottom: 0.15rem;
}

.md-kv-row-stacked {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  grid-template-columns: unset;
}

.md-kv-stacked-fields {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.md-kv-row-stacked .md-icon-btn {
  flex-shrink: 0;
  margin-top: 1.65rem;
}

@media (max-width: 640px) {
  .md-kv-row {
    grid-template-columns: 1fr;
  }
}

.md-entity-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.md-card {
  background: var(--md-surface);
  border: 1px solid var(--border);
  padding: 1.25rem 1.35rem 1.5rem;
}

.md-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border);
}

.md-card-header h3 {
  margin: 0;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--md-on-surface);
}

.md-card .md-grid {
  margin-top: 0.25rem;
}

/* Editor layout (Templates) */
.template-page {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: calc(100vh - 1px);
}

.editor-layout,
.template-layout {
  display: grid;
  grid-template-columns: 220px 1fr 300px;
  gap: 0;
  flex: 1;
  min-height: 0;
  border-top: 1px solid var(--border);
}

.editor-panels {
  background: var(--surface);
  border-right: 1px solid var(--border);
  padding: 1rem;
  overflow-y: auto;
}

.right-panel {
  border-right: none;
  border-left: 1px solid var(--border);
}

.editor-panels h3,
.editor-panels h4 {
  margin: 0 0 0.75rem;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--muted);
}

.section-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.section-item {
  width: 100%;
  text-align: left;
  padding: 0.55rem 0.65rem;
  border: none;
  border-left: 2px solid transparent;
  background: transparent;
  color: var(--muted);
  cursor: pointer;
  font: inherit;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: color var(--transition), border-color var(--transition);
}

.section-item:hover,
.section-item.active {
  color: var(--text);
}

.section-item.active {
  border-left-color: var(--border-strong);
}

.editor-canvas {
  padding: 1.25rem;
  overflow-y: auto;
  background: var(--bg);
}

.canvas-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.canvas-toolbar h2 {
  margin: 0;
  font-size: 1.1rem;
}

.map-toolbar {
  margin-bottom: 0.75rem;
}

.map-card {
  background: var(--surface);
  border: 1px solid var(--border);
  padding: 0.75rem;
  margin-bottom: 0.75rem;
}

.map-card summary {
  cursor: pointer;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.md-field-span-wrap {
  margin-top: 0.25rem;
}

.md-field-span-wrap .md-field {
  margin-bottom: 0;
}

/* Jobs page */
.jobs-page .jobs-main-inner {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-height: calc(100vh - 4rem);
}

.jobs-welcome h1 {
  margin: 0 0 0.35rem;
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--md-on-surface);
}

.jobs-welcome-text {
  margin: 0;
  color: var(--md-on-surface-variant);
  font-size: 0.95rem;
}

.jobs-chat {
  margin-top: auto;
  background: var(--md-surface);
  border: 1px solid var(--border);
  overflow: hidden;
}

.jobs-chat-messages {
  max-height: 240px;
  overflow-y: auto;
  padding: 1.15rem 1.35rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.jobs-chat-bubble {
  max-width: 640px;
}

.jobs-chat-bubble.user {
  align-self: flex-end;
  background: var(--surface-2);
  border: 1px solid var(--border);
  padding: 0.8rem 1rem;
}

.jobs-chat-bubble.assistant p {
  margin: 0;
}

.jobs-chat-bubble.user p {
  margin: 0;
}

.jobs-chat-label {
  display: block;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--md-on-surface-variant);
  margin-bottom: 0.35rem;
}

.jobs-chat-composer {
  display: flex;
  align-items: flex-end;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  border-top: 1px solid var(--border);
  background: var(--md-surface-2);
}

.jobs-chat-input-wrap {
  flex: 1;
  min-width: 0;
}

.jobs-chat-input-wrap .md-field {
  margin-bottom: 0;
}

.jobs-send-btn {
  width: auto;
  min-width: 5.5rem;
  flex-shrink: 0;
  margin-bottom: 0.15rem;
}

.jobs-sidebar .profile-nav-item {
  flex-direction: column;
  align-items: flex-start;
  gap: 0.15rem;
  height: auto;
}

.jobs-nav-title {
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 1.3;
  text-transform: none;
  letter-spacing: normal;
}

.jobs-nav-meta {
  font-size: 0.75rem;
  color: var(--md-on-surface-variant);
  font-weight: 400;
  font-family: var(--font-mono);
  text-transform: none;
  letter-spacing: normal;
}

.jobs-sidebar .profile-nav-item.active .jobs-nav-meta {
  color: var(--muted);
}

.jobs-empty {
  padding: 0.75rem;
  font-size: 0.85rem;
  color: var(--md-on-surface-variant);
  list-style: none;
}

@media (max-width: 720px) {
  .jobs-chat-composer {
    flex-direction: column;
    align-items: stretch;
  }

  .jobs-send-btn {
    width: 100%;
  }
}

/* Legacy chat classes — unused */
.chat-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.chat-layout {
  display: grid;
  grid-template-columns: 1fr 340px;
  flex: 1;
  min-height: 0;
  border-top: 1px solid var(--border);
}

.chat-main {
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.chat-bubble {
  max-width: 720px;
  padding: 0.85rem 1rem;
  border: 1px solid var(--border);
}

.chat-bubble.user {
  align-self: flex-end;
  background: var(--surface);
  border: 1px solid var(--border);
}

.chat-bubble.assistant {
  align-self: flex-start;
  background: transparent;
}

.bubble-label {
  font-size: 10px;
  color: var(--muted);
  margin-bottom: 0.35rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.bubble-body {
  white-space: pre-wrap;
  font-size: 0.95rem;
}

.chat-composer {
  display: flex;
  gap: 0.75rem;
  padding: 1rem 1.5rem 1.25rem;
  border-top: 1px solid var(--border);
  background: var(--surface);
}

.chat-composer textarea {
  flex: 1;
  resize: none;
  min-height: 52px;
}

.chat-right-panel {
  background: var(--surface);
  border-left: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.85rem 1rem;
  border-bottom: 1px solid var(--border);
}

.panel-header h3 {
  margin: 0;
  font-size: 0.95rem;
}

.job-list {
  list-style: none;
  margin: 0;
  padding: 0.5rem;
  overflow-y: auto;
  flex: 0 0 auto;
  max-height: 40%;
}

.job-item {
  width: 100%;
  text-align: left;
  padding: 0.65rem 0.75rem;
  border: none;
  border-left: 2px solid transparent;
  background: transparent;
  cursor: pointer;
  color: var(--text);
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  transition: color var(--transition), border-color var(--transition);
}

.job-item:hover,
.job-item.active {
  color: var(--text);
}

.job-item.active {
  border-left-color: var(--border-strong);
}

.job-title {
  font-size: 0.88rem;
  font-weight: 600;
}

.job-meta {
  font-size: 0.75rem;
  color: var(--muted);
  font-family: var(--font-mono);
}

.empty-hint {
  padding: 1rem;
  font-size: 0.85rem;
}

.job-editor {
  flex: 1;
  overflow-y: auto;
  padding: 0.75rem 1rem 1rem;
  border-top: 1px solid var(--border);
}

.job-editor h4 {
  margin: 0 0 0.5rem;
}

.panel-actions {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.75rem;
}

/* Applications */
.applications-page-header {
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--border);
}

.applications-page-header h1 {
  margin: 0;
  font-size: 1.75rem;
  font-weight: 600;
  letter-spacing: normal;
}

.applications-page-header .page-lead {
  margin-top: 0.4rem;
}

.applications-toolbar {
  display: flex;
  align-items: stretch;
  gap: 0;
  flex-wrap: wrap;
  min-height: 56px;
  margin-bottom: 1.5rem;
  padding: 0.65rem 1rem;
  background: var(--surface);
  border: 1px solid var(--border);
}

.applications-toolbar-start {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
}

.applications-toolbar-divider {
  width: 1px;
  align-self: stretch;
  margin: 0.35rem 1rem;
  background: var(--border);
  flex-shrink: 0;
}

.applications-toolbar-controls {
  display: flex;
  align-items: flex-end;
  gap: 1.25rem;
  flex-shrink: 0;
}

.applications-toolbar-field {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin: 0;
  min-width: 0;
}

.applications-toolbar-label {
  display: block;
  margin: 0 0 0.35rem;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
}

.applications-toolbar-spacer {
  flex: 1;
  min-width: 0.5rem;
}

.applications-toolbar-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
}

.applications-toolbar.selecting {
  border-color: var(--border-strong);
  background: var(--surface-2);
}

.applications-toolbar .md-filled-btn,
.applications-toolbar .md-outlined-btn {
  width: auto;
  min-height: 36px;
  padding: 0.5rem 1rem;
  white-space: nowrap;
}

.applications-toolbar .ps-select {
  width: auto;
  min-width: 10rem;
  height: 36px;
  padding: 0 2rem 0 0.75rem;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background-color: var(--input-bg);
  border: 1px solid var(--input-border);
  color: var(--text);
  cursor: pointer;
}

.applications-build-select {
  min-width: 11rem;
}

.applications-toolbar-primary {
  flex-shrink: 0;
}

.applications-toolbar-danger {
  color: var(--error);
  border: 1px solid var(--error);
  background: var(--btn-secondary-bg);
}

.applications-toolbar-danger:hover:not(:disabled) {
  background: var(--btn-secondary-hover);
  color: var(--error);
}

.applications-toolbar-danger:disabled {
  opacity: 0.45;
  border-color: var(--btn-disabled-border);
  color: var(--btn-disabled-text);
}

.applications-selection-count {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
  white-space: nowrap;
}

.generation-banner {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 0.75rem 1rem;
  background: var(--surface);
  border: 1px solid var(--border);
}

.generation-banner p {
  margin: 0;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  white-space: nowrap;
}

.generation-banner-track {
  flex: 1;
  max-width: 200px;
  height: 1px;
  background: var(--resize-line);
  overflow: hidden;
}

.generation-banner-fill {
  height: 100%;
  width: 40%;
  background: var(--resize-active);
}

.generation-log-panel {
  flex-shrink: 0;
  width: 100%;
  z-index: 90;
  background: var(--surface);
  border-top: 1px solid var(--border);
  position: relative;
}

.app-main:has(.applications-page) {
  position: relative;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
}

.applications-page {
  height: 100%;
  max-height: 100%;
  min-height: 0;
  overflow: hidden;
}

.applications-page.profile-page {
  min-height: 0;
}

.applications-layout {
  height: 100%;
  max-height: 100%;
  min-height: 0;
  min-width: 0;
  overflow: hidden;
}

.applications-main {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  min-height: 0;
  padding: 0;
  overflow: hidden;
}

.applications-main-inner {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 2.5rem 2.75rem 2rem;
  scrollbar-width: none;
}

.applications-main-inner::-webkit-scrollbar {
  display: none;
}

body.generation-log-resizing {
  cursor: row-resize;
  user-select: none;
}

.generation-log-resize-handle {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  cursor: row-resize;
  z-index: 2;
  transform: translateY(-50%);
}

.generation-log-resize-handle::after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 1px;
  background: var(--resize-line);
  transform: translateY(-50%);
  transition: background-color var(--transition);
}

.generation-log-resize-handle::before {
  content: "";
  display: block;
  width: 24px;
  height: 1px;
  margin: 2.5px auto 0;
  background: transparent;
  transition: background-color var(--transition);
}

.generation-log-resize-handle:hover::before,
body.generation-log-resizing .generation-log-resize-handle::before {
  background: var(--resize-active);
}

.generation-log-panel.running {
  border-top-color: var(--border-strong);
}

.generation-log-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.55rem 1rem;
  background: var(--surface);
  border-bottom: 1px solid var(--border);
}

.generation-log-title {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  color: var(--text);
  font: inherit;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
}

.generation-log-dot {
  width: 6px;
  height: 6px;
  background: var(--muted-2);
  flex-shrink: 0;
}

.generation-log-dot.active {
  background: var(--border-strong);
}

.generation-log-chevron {
  color: var(--muted);
  font-size: 0.72rem;
}

.generation-log-actions {
  display: flex;
  gap: 0.5rem;
}

.generation-log-btn {
  padding: 0.28rem 0.65rem;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--muted);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color var(--transition), color var(--transition);
}

.generation-log-btn:hover {
  color: var(--text);
  border-color: var(--border-strong);
  background: var(--btn-secondary-hover);
}

.generation-log-body {
  margin: 0;
  height: var(--generation-log-body-height, 200px);
  overflow: auto;
  padding: 0.85rem 1rem 1rem;
  font-family: var(--font-mono);
  font-size: 12px;
  line-height: 1.55;
  color: var(--console-fg);
  white-space: pre-wrap;
  word-break: break-word;
  background: var(--console-bg);
}

.applications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 1.5rem;
  align-items: stretch;
}

.application-card {
  position: relative;
  display: flex;
  background: var(--surface);
  border: 1px solid var(--border);
  overflow: hidden;
  transition: border-color var(--transition), background-color var(--transition);
}

.application-card:hover:not(.selectable) {
  border-color: var(--border-strong);
}

.application-card.selectable {
  cursor: pointer;
}

.application-card.selectable:hover {
  border-color: var(--border-strong);
}

.application-card.is-selected {
  border-color: var(--border-strong);
  background: var(--surface-2);
}

.application-card-check {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  z-index: 2;
}

.application-card-check input {
  width: 1.05rem;
  height: 1.05rem;
  margin: 0;
  accent-color: var(--accent-color);
  cursor: pointer;
}

.application-card-inner {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  width: 100%;
  padding: 1.5rem 1.5rem 0;
}

.application-card.selectable .application-card-inner {
  padding-left: 2.75rem;
}

.application-card-header {
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border);
  min-width: 0;
}

.application-card-header h3 {
  margin: 0;
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: normal;
  line-height: 1.3;
  word-break: break-word;
}

.application-card-slug {
  margin: 0.25rem 0 0;
  font-size: 0.7rem;
  color: var(--muted-2);
  font-family: var(--font-mono);
  word-break: break-all;
}

.application-card-company {
  margin: 0.35rem 0 0;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--muted);
}

.application-phases {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-bottom: 0;
  padding-top: 0.75rem;
  border-top: 1px solid var(--border);
}

.application-phase-group {
  display: inline-flex;
  align-items: center;
  gap: 0.15rem;
}

.application-phase-sep {
  color: var(--muted-2);
  font-size: 0.75rem;
  margin: 0 0.1rem;
}

.application-phase-chip {
  display: inline-flex;
  align-items: center;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.22rem 0.45rem;
  border: 1px solid var(--border);
}

.application-phase-chip.done {
  background: var(--chip-done-bg);
  color: var(--chip-done-fg);
  border-color: var(--chip-done-bg);
}

.application-phase-chip.pending {
  background: var(--surface);
  color: var(--muted-2);
  border-color: var(--border);
}

.applications-stage-select {
  min-width: 10rem;
}

.applications-toolbar.selecting .applications-stage-select {
  max-width: 11rem;
}

.application-card-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.application-card-top {
  display: none;
}

.status-pill {
  width: auto;
  min-height: 28px;
  display: inline-flex;
  align-items: center;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.35rem 0.55rem;
  border: 1px solid transparent;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath fill='%236B6B6B' d='M1 1l4 4 4-4'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.45rem center;
  padding-right: 1.35rem;
}

.status-unsubmitted { background: var(--btn-secondary-bg); color: var(--muted); border-color: var(--border); }
.status-submitted { background: var(--btn-secondary-bg); color: var(--text); border-color: var(--border-strong); }
.status-interview { background: var(--btn-secondary-bg); color: var(--warning); border-color: var(--warning); }
.status-accepted { background: var(--btn-secondary-bg); color: var(--success); border-color: var(--success); }
.status-rejected { background: var(--btn-secondary-bg); color: var(--error); border-color: var(--error); }

.application-card-body {
  padding: 0 0 1rem;
  flex: 1;
  min-height: 3.5rem;
}

.output-badge {
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.28rem 0.55rem;
  border: 1px solid var(--border);
  margin: 0;
  flex-shrink: 0;
}

.output-badge.ready {
  background: var(--chip-done-bg);
  color: var(--chip-done-fg);
  border-color: var(--chip-done-bg);
}

.output-badge.pending {
  background: var(--surface);
  color: var(--muted-2);
  border-color: var(--border);
}

.application-files {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.application-file-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 0.65rem;
  background: var(--surface-2);
  border: 1px solid var(--border);
  color: var(--text);
  text-decoration: none;
  font-size: 0.8rem;
  transition: background-color var(--transition), border-color var(--transition);
}

.application-file-link:hover {
  background: var(--btn-secondary-hover);
  border-color: var(--border-strong);
}

.application-file-link span {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: var(--font-mono);
  font-size: 0.75rem;
}

.application-file-link svg {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  color: var(--muted);
}

.application-file-link svg:last-child {
  opacity: 0.5;
}

.application-hint {
  margin: 0;
  font-size: 0.82rem;
  color: var(--muted);
  line-height: 1.45;
}

.application-card-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0;
  padding: 0.85rem 1.5rem;
  border-top: 1px solid var(--border);
  background: var(--footer-bg);
}

.application-card-footer .md-text-btn {
  display: inline-flex;
  align-items: center;
  padding: 0.4rem 0.75rem;
  border: 1px solid var(--border-strong);
  background: var(--btn-secondary-bg);
  color: var(--text);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  transition: background-color var(--transition);
}

.application-card-footer .md-text-btn:hover {
  background: var(--btn-secondary-hover);
}

.application-status-label {
  display: none;
}

.filter-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  width: 100%;
}

.filter-label {
  flex: 1;
  min-width: 0;
  text-align: left;
}

.filter-count {
  font-size: 0.72rem;
  font-weight: 500;
  font-family: var(--font-mono);
  font-variant-numeric: tabular-nums;
  color: var(--muted);
  background: transparent;
  padding: 0;
  flex-shrink: 0;
}

.profile-nav-item.active .filter-count {
  color: var(--text);
}

.applications-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
}

.stat-block {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  padding: 1rem;
  text-align: left;
  background: var(--surface);
  border: 1px solid var(--border);
}

.stat-value {
  font-size: 1.35rem;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  letter-spacing: normal;
  color: var(--text);
}

.stat-label {
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted-2);
}

/* Photoshop-style template editor */
.ps-editor {
  --ps-bg: var(--bg);
  --ps-panel: var(--surface);
  --ps-panel-border: var(--border);
  --ps-text: var(--text);
  --ps-muted: var(--muted);
  --ps-accent: #005288;
  --ps-accent-dim: var(--surface-2);
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  height: 100%;
  max-height: 100vh;
  overflow: hidden;
  background: var(--ps-bg);
  color: var(--ps-text);
  font-family: var(--font);
}

.ps-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.55rem 0.85rem;
  background: var(--surface);
  border-bottom: 1px solid var(--ps-panel-border);
  flex-shrink: 0;
  flex-wrap: wrap;
}

.ps-toolbar-left,
.ps-toolbar-right {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.ps-toolbar-center {
  flex: 1;
  text-align: center;
}

.ps-doc-name {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ps-muted);
}

.ps-select {
  background: var(--input-bg);
  border: 1px solid var(--input-border);
  color: var(--ps-text);
  padding: 0.4rem 0.55rem;
  font-size: 0.82rem;
}

.ps-select.full,
.ps-text-input.full,
.ps-num-input.full {
  width: 100%;
}

.ps-tool-btn {
  padding: 0.4rem 0.8rem;
  border: 1px solid var(--border-strong);
  background: var(--btn-secondary-bg);
  color: var(--ps-text);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color var(--transition);
}

.ps-tool-btn:hover {
  background: var(--btn-secondary-hover);
}

.ps-tool-btn.primary {
  background: #000000;
  border-color: var(--border-strong);
  color: #FFFFFF;
}

.ps-tool-btn.primary:hover {
  background: var(--btn-primary-hover);
  border-color: var(--btn-primary-hover);
}

.ps-zoom-label {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ps-muted);
}

.ps-zoom-label input[type="range"] {
  width: 80px;
}

.ps-check-inline {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ps-muted);
}

.ps-check-inline input {
  accent-color: var(--accent-color);
}

.ps-body {
  display: flex;
  flex: 1;
  min-height: 0;
  overflow: hidden;
}

.ps-body > .ps-layers {
  width: 220px;
  flex-shrink: 0;
  height: 100%;
  min-height: 0;
  max-height: 100%;
  overflow: hidden;
}

.ps-body > .ps-workspace {
  flex: 1;
  min-width: 0;
  min-height: 0;
  height: 100%;
  overflow: hidden;
}

.ps-editor .resizable-sidebar {
  height: 100%;
  min-height: 0;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.resizable-sidebar.ps-properties {
  border-right: none;
  border-left: 1px solid var(--ps-panel-border);
}

.ps-properties > .ps-tabs {
  flex-shrink: 0;
}

.ps-properties > .ps-props,
.ps-properties > .ps-source-editor,
.ps-properties > .ps-empty-props {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
}

.ps-panel {
  background: var(--ps-panel);
  border-right: 1px solid var(--ps-panel-border);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.ps-properties {
  border-right: none;
  border-left: 1px solid var(--ps-panel-border);
}

.ps-panel-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 0.75rem;
  border-bottom: 1px solid var(--ps-panel-border);
  flex-shrink: 0;
}

.ps-panel-head h3 {
  margin: 0;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ps-muted);
}

.ps-icon-btn {
  width: 24px;
  height: 24px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--ps-text);
  cursor: pointer;
  font-size: 1rem;
  line-height: 1;
  transition: background-color var(--transition);
}

.ps-icon-btn:hover {
  background: var(--btn-secondary-hover);
}

.ps-layer-list {
  list-style: none;
  margin: 0;
  padding: 0.35rem 0;
  overflow-y: auto;
  overflow-x: hidden;
  flex: 1;
  min-height: 0;
  position: relative;
}

.ps-layer-list.is-sorting {
  user-select: none;
}

.ps-layer-list li,
.ps-layer-row {
  display: flex;
  align-items: center;
  gap: 0.15rem;
  padding: 0 0.35rem;
}

.ps-layer-row {
  transition: opacity 150ms ease-out, background-color 150ms ease-out;
}

.ps-layer-row-shifting {
  transition: opacity 150ms ease-out, background-color 150ms ease-out;
}

.ps-layer-placeholder {
  display: block;
  margin: 3px 0.35rem;
  background: var(--btn-secondary-hover);
  border: 1px dashed var(--border-strong);
  flex-shrink: 0;
  overflow: hidden;
}

.ps-layer-ghost {
  position: fixed;
  z-index: 600;
  display: flex;
  align-items: center;
  gap: 0.15rem;
  padding: 0 0.35rem;
  background: var(--surface);
  border: 1px solid var(--border-strong);
  pointer-events: none;
  opacity: 0.97;
}

.ps-layer-ghost .ps-layer-grip {
  cursor: grabbing;
  color: var(--ps-accent);
}

.ps-layer-ghost .ps-layer-item {
  cursor: grabbing;
  background: var(--btn-secondary-hover);
}

body.ps-layer-sorting .ps-layer-grip {
  cursor: grabbing;
}

body.ps-layer-sorting .ps-layer-list:not(.is-sorting) .ps-layer-row {
  opacity: 0.92;
}

.ps-layer-grip {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 28px;
  flex-shrink: 0;
  border: none;
  background: transparent;
  color: var(--ps-muted);
  cursor: grab;
  padding: 0;
  touch-action: none;
}

.ps-layer-grip:hover {
  background: var(--btn-secondary-hover);
  color: var(--ps-text);
}

.ps-layer-grip:active {
  cursor: grabbing;
}

.ps-layer-grip-icon {
  width: 10px;
  height: 16px;
}

.ps-layer-item {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.4rem 0.5rem;
  border: none;
  background: transparent;
  color: var(--ps-text);
  font: inherit;
  font-size: 0.82rem;
  cursor: pointer;
  text-align: left;
  min-width: 0;
  transition: background-color var(--transition);
}

.ps-layer-item:hover {
  background: var(--btn-secondary-hover);
}

.ps-layer-item.active {
  background: var(--ps-accent-dim);
  outline: 1px solid var(--border-strong);
}

.ps-eye {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  border: 1px solid var(--input-border);
  background: var(--surface);
}

.ps-eye.on {
  background: var(--resize-active);
  border-color: var(--border-strong);
}

.ps-eye.off {
  background: var(--btn-secondary-hover);
  opacity: 0.5;
}

.ps-layer-name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ps-lock-badge {
  font-size: 0.65rem;
  padding: 0.1rem 0.25rem;
  background: var(--btn-secondary-hover);
  border: 1px solid var(--border);
  color: var(--ps-muted);
}

.ps-layer-actions {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.ps-mini-btn {
  width: 18px;
  height: 14px;
  padding: 0;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--ps-muted);
  font-size: 0.55rem;
  cursor: pointer;
  line-height: 1;
  transition: background-color var(--transition);
}

.ps-mini-btn:hover {
  background: var(--btn-secondary-hover);
  color: var(--ps-text);
}

.ps-workspace {
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
  background: var(--workspace-bg);
}

.ps-ruler {
  position: relative;
  height: 20px;
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  flex-shrink: 0;
}

.ps-ruler span {
  position: absolute;
  top: 2px;
  font-size: 0.6rem;
  color: var(--ps-muted);
  font-family: var(--font-mono);
  transform: translateX(-50%);
}

.ps-canvas-scroll {
  flex: 1;
  overflow: auto;
  display: flex;
  justify-content: center;
  padding: 1.5rem;
  cursor: grab;
  touch-action: none;
}

.ps-canvas-scroll:active,
body.ps-panning .ps-canvas-scroll {
  cursor: grabbing;
}

.ps-canvas-stage {
  flex-shrink: 0;
}

.ps-canvas {
  position: relative;
  border: 1px solid var(--ps-canvas-border);
  background: var(--paper-bg);
  color: #111;
  user-select: none;
  cursor: grab;
}

body.ps-panning .ps-canvas {
  cursor: grabbing;
}

.ps-canvas-grid {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.35;
  background-color: #F5F5F5;
  background-size: 16px 16px;
}

.ps-layer {
  position: absolute;
  border: 1px solid #005288;
  cursor: move;
  box-sizing: border-box;
  touch-action: none;
  overflow: hidden;
}

.ps-layer.selected {
  border: 2px solid #005288;
}

.ps-layer.locked {
  cursor: not-allowed;
  opacity: 0.7;
}

.ps-layer-label {
  display: block;
  line-height: 1.25;
  pointer-events: none;
}

.ps-layer-preview {
  margin: 0.35rem 0 0;
  line-height: 1.4;
  pointer-events: none;
}

.ps-handle {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #fff;
  border: 1px solid #005288;
  pointer-events: auto;
  z-index: 2;
  touch-action: none;
}

body.ps-dragging {
  user-select: none;
  cursor: inherit;
}

body.ps-dragging .ps-layer {
  cursor: inherit;
}

.ps-handle-nw { top: -5px; left: -5px; cursor: nwse-resize; }
.ps-handle-ne { top: -5px; right: -5px; cursor: nesw-resize; }
.ps-handle-sw { bottom: -5px; left: -5px; cursor: nesw-resize; }
.ps-handle-se { right: -5px; bottom: -5px; cursor: nwse-resize; }
.ps-handle-n { top: -5px; left: 50%; transform: translateX(-50%); cursor: ns-resize; }
.ps-handle-s { bottom: -5px; left: 50%; transform: translateX(-50%); cursor: ns-resize; }
.ps-handle-w { left: -5px; top: 50%; transform: translateY(-50%); cursor: ew-resize; }
.ps-handle-e { right: -5px; top: 50%; transform: translateY(-50%); cursor: ew-resize; }

.ps-tabs {
  display: flex;
  border-bottom: 1px solid var(--ps-panel-border);
  flex-shrink: 0;
}

.ps-tabs button {
  flex: 1;
  padding: 0.55rem 0.35rem;
  border: none;
  background: transparent;
  color: var(--ps-muted);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: color var(--transition), border-color var(--transition);
}

.ps-tabs button.active {
  color: var(--ps-text);
  border-bottom-color: var(--border-strong);
  background: var(--surface);
}

.ps-props {
  padding: 0.75rem;
  overflow-y: auto;
  overflow-x: hidden;
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.ps-props .md-field > label {
  color: var(--ps-muted);
}

.ps-props .md-input {
  background: var(--surface);
  border-color: #CCCCCC;
  color: var(--ps-text);
}

.ps-prop-row label {
  display: block;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ps-muted);
  margin-bottom: 0.3rem;
}

.ps-range-field {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.ps-range-field input[type="range"] {
  flex: 1;
  min-width: 0;
}

.ps-num-input {
  width: 52px;
  padding: 0.25rem 0.35rem;
  background: var(--input-bg);
  border: 1px solid var(--input-border);
  color: var(--ps-text);
  font-size: 0.78rem;
}

.ps-unit {
  font-size: 0.7rem;
  color: var(--ps-muted);
  width: 1.5rem;
}

.ps-text-input {
  padding: 0.35rem 0.5rem;
  background: var(--input-bg);
  border: 1px solid var(--input-border);
  color: var(--ps-text);
  font-size: 0.82rem;
}

.ps-font-picker {
  width: 100%;
}

.ps-font-picker-list {
  max-height: 220px;
  overflow-y: auto;
  border: 1px solid var(--border);
  background: var(--surface);
  padding: 0.35rem;
}

.ps-font-picker-group + .ps-font-picker-group {
  margin-top: 0.5rem;
}

.ps-font-picker-group-label {
  margin: 0 0 0.25rem;
  padding: 0 0.45rem;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ps-muted);
}

.ps-font-option {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.1rem;
  width: 100%;
  padding: 0.5rem 0.55rem;
  border: none;
  background: transparent;
  color: var(--ps-text);
  text-align: left;
  cursor: pointer;
  transition: background-color 150ms ease-out;
}

.ps-font-option:hover {
  background: var(--btn-secondary-hover);
}

.ps-font-option.active {
  background: var(--ps-accent-dim);
  outline: 1px solid var(--border-strong);
}

.ps-font-option-name {
  font-size: 0.72rem;
  font-weight: 600;
  font-family: var(--font);
  color: var(--ps-muted);
  letter-spacing: 0.02em;
}

.ps-font-option-sample {
  font-size: 0.95rem;
  line-height: 1.25;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}

.ps-font-picker.compact .ps-font-picker-list {
  max-height: 140px;
}

.ps-font-option.inherit .ps-font-option-name {
  font-style: italic;
}

.ps-type-divider {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin: 0.85rem 0 0.65rem;
  color: var(--ps-muted);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.ps-type-divider::before,
.ps-type-divider::after {
  content: "";
  flex: 1;
  height: 1px;
  background: var(--border);
}

.ps-type-panel {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.ps-type-block {
  padding: 0.75rem;
  border: 1px solid var(--border);
  background: var(--surface);
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.ps-type-block-title {
  margin: 0 0 0.15rem;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ps-text);
}

.ps-type-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.55rem;
}

.ps-type-size,
.ps-type-style {
  margin: 0;
}

.ps-style-toggles {
  display: flex;
  gap: 0.3rem;
}

.ps-style-btn {
  min-width: 2rem;
  height: 2rem;
  padding: 0 0.45rem;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--ps-text);
  font: inherit;
  font-size: 0.78rem;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 150ms ease-out, border-color 150ms ease-out, color 150ms ease-out;
}

.ps-style-btn:hover {
  background: var(--btn-secondary-hover);
}

.ps-style-btn.active {
  background: var(--ps-accent-dim);
  border-color: var(--border-strong);
  color: var(--ps-text);
}

.ps-color-field {
  display: flex;
  align-items: center;
  gap: 0.45rem;
}

.ps-color-field .ps-color-input {
  flex: 1;
}

.ps-color-reset {
  font-size: 0.72rem;
  font-weight: 500;
  min-width: auto;
  padding: 0 0.55rem;
}

.ps-color-input {
  width: 100%;
  height: 32px;
  padding: 2px;
  border: 1px solid var(--input-border);
  background: var(--surface);
  cursor: pointer;
}

.ps-layer-title {
  margin: 0 0 0.25rem;
  font-size: 0.9rem;
  font-weight: 600;
}

.ps-check-group {
  display: flex;
  gap: 1rem;
  margin-top: 0.25rem;
}

.ps-check-group input {
  accent-color: var(--accent-color);
}

.ps-danger-btn {
  margin-top: 0.5rem;
  padding: 0.45rem;
  border: 1px solid var(--error);
  background: var(--surface);
  color: var(--error);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color var(--transition);
}

.ps-danger-btn:hover {
  background: var(--btn-secondary-hover);
}

.ps-empty-props {
  padding: 1rem 0.75rem;
  font-size: 0.82rem;
  color: var(--ps-muted);
  margin: 0;
}

.ps-source-editor {
  flex: 1;
  width: 100%;
  min-height: 0;
  margin: 0;
  padding: 0.75rem;
  border: none;
  background: var(--console-bg);
  color: var(--console-fg);
  font-family: var(--font-mono);
  font-size: 0.78rem;
  line-height: 1.45;
  resize: none;
  overflow-y: auto;
}

@media (max-width: 960px) {
  .ps-body {
    flex-direction: column;
  }

  .ps-body > .ps-layers {
    width: 100%;
    max-height: 160px;
    border-right: none;
    border-bottom: 1px solid var(--ps-panel-border);
  }

  .resizable-sidebar.ps-properties {
    width: 100% !important;
    max-height: 320px;
    height: auto;
    border-left: none;
    border-top: 1px solid var(--ps-panel-border);
  }

  .sidebar-resize-handle {
    display: none;
  }
}

/* Legacy template canvas (deprecated) */
.template-canvas-wrap {
  padding: 1.5rem;
  overflow: auto;
  background: var(--workspace-bg);
  display: flex;
  justify-content: center;
}

.template-canvas {
  position: relative;
  width: 595px;
  min-height: 842px;
  background: #fff;
  color: #111;
  border: 1px solid var(--border-strong);
}

.template-block {
  position: absolute;
  border: 2px dashed #ccc;
  padding: 0.5rem;
  cursor: pointer;
  background: rgba(16, 163, 127, 0.08);
}

.template-block.selected {
  border-color: var(--accent);
  background: rgba(16, 163, 127, 0.15);
}

.block-label {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #666;
}

.block-placeholder {
  margin: 0.25rem 0 0;
  font-size: 0.75rem;
  color: #999;
}

/* Review */
.review-layout {
  min-height: calc(100vh - 1px);
  height: calc(100vh - 1px);
}

.review-main {
  min-height: 0;
}

.review-main-inner {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 1px);
  height: 100%;
}

.review-page .profile-section-head {
  flex-wrap: wrap;
  gap: 0.75rem;
}

.review-page .profile-section-head .header-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
}

.review-tabs {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.25rem;
  padding: 0;
  border-bottom: 1px solid var(--border);
  width: fit-content;
}

.review-tabs button {
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  color: var(--muted);
  padding: 0.5rem 0;
  margin-bottom: -1px;
  cursor: pointer;
  font: inherit;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: color var(--transition), border-color var(--transition);
}

.review-tabs button.active {
  color: var(--text);
  border-bottom-color: var(--border-strong);
}

.review-preview-panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  height: calc(100vh - 12rem);
  background: var(--md-surface);
  border: 1px solid var(--border);
  overflow: hidden;
}

.review-empty {
  padding: 2rem 1.5rem;
  margin: 0;
}

.review-preview-toolbar {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 0.8rem 1rem;
  background: var(--md-surface-2);
  border-bottom: 1px solid var(--border);
}

.review-preview-switch {
  display: flex;
  gap: 1rem;
  padding: 0;
  border: none;
  background: transparent;
}

.review-preview-switch button {
  border: none;
  border-bottom: 2px solid transparent;
  background: transparent;
  color: var(--muted);
  padding: 0.38rem 0;
  font: inherit;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: color var(--transition), border-color var(--transition);
}

.review-preview-switch button.active {
  color: var(--text);
  border-bottom-color: var(--border-strong);
}

.review-preview-switch button:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.review-preview-frame-wrap {
  flex: 1;
  min-height: 0;
  overflow: auto;
  background: var(--workspace-bg);
  padding: 0;
  display: flex;
}

.review-preview-frame {
  width: 100%;
  min-height: 100%;
  height: 100%;
  border: none;
  background: #fff;
}

.review-preview-editor {
  flex: 1;
  width: 100%;
  min-height: 100%;
  margin: 0;
  padding: 2rem 2.5rem;
  overflow: auto;
  background: #fff;
  color: #111;
  outline: none;
  box-sizing: border-box;
}

.review-preview-editor:focus {
  outline: 1px solid var(--border-strong);
}

.review-editor {
  flex: 1;
  min-height: calc(100vh - 12rem);
}

.review-html-note {
  margin: 0;
  padding: 0.65rem 1rem 0.85rem;
  font-size: 0.78rem;
  border-top: 1px solid var(--border);
}

.review-html-dirty {
  font-size: 0.78rem;
  font-style: italic;
}

.review-download-row {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  padding: 0.85rem 1rem;
  border-top: 1px solid var(--border);
}

.review-download-row .md-outlined-btn {
  text-decoration: none;
}

.review-sidebar .profile-nav-item {
  flex-direction: column;
  align-items: flex-start;
}

.review-editor {
  flex: 1;
  min-height: calc(100vh - 220px);
  font-family: var(--font-mono);
  font-size: 0.82rem;
}

/* Toast */
.toast {
  position: fixed;
  bottom: 1.75rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.75rem 1.15rem;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0;
  pointer-events: none;
  transition: opacity 150ms ease-out;
  z-index: 1000;
  background: var(--surface);
  border: 1px solid var(--border-strong);
  color: var(--text);
}

.toast-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
}

.toast-icon svg {
  width: 16px;
  height: 16px;
}

.toast.show {
  opacity: 1;
}

.toast.success {
  background: var(--surface);
  color: var(--success);
  border-color: var(--success);
}

.toast.error {
  background: var(--surface);
  color: var(--error);
  border-color: var(--error);
}

@media (max-width: 960px) {
  .editor-layout,
  .template-layout,
  .chat-layout {
    grid-template-columns: 1fr;
  }

  .editor-panels.left-panel,
  .chat-right-panel {
    display: none;
  }
}
`;

export default function GlobalStyles() {
  return <style>{GLOBAL_CSS}</style>;
}
