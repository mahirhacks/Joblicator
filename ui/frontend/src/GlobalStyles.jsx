const GLOBAL_CSS = `
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap");

*,
*::before,
*::after {
  box-sizing: border-box;
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

.application-generation-outcome {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin-top: 0.85rem;
  padding: 0.65rem 0.75rem;
  border-left: 2px solid var(--warning);
  background: color-mix(in srgb, var(--warning) 7%, var(--surface));
  color: var(--muted);
  font-size: 0.72rem;
  line-height: 1.4;
}

.application-generation-outcome.failed {
  border-left-color: var(--error);
  background: color-mix(in srgb, var(--error) 6%, var(--surface));
}

.application-generation-outcome strong {
  color: var(--text);
  font-size: 0.74rem;
  font-weight: 600;
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

.application-template-picker {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  gap: 10px;
  margin-top: 12px;
  padding: 9px 10px;
  border: 1px solid var(--border-subtle);
  border-radius: 7px;
  background: var(--surface-raised);
}

.application-template-picker > span {
  color: var(--text-muted);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .06em;
  text-transform: uppercase;
}

.application-template-picker select {
  min-width: 0;
  width: 100%;
  padding: 6px 24px 6px 8px;
  color: var(--text-primary);
  border: 1px solid var(--border-strong);
  border-radius: 5px;
  background: var(--surface-base);
  font: inherit;
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

.ps-panel-hint {
  margin: 0;
  padding: 10px 12px;
  color: var(--ps-muted);
  border-bottom: 1px solid var(--ps-panel-border);
  font-size: 10px;
  line-height: 1.45;
}

.ps-layout-contract-note {
  color: var(--ps-muted);
  font-size: 10px;
  letter-spacing: .04em;
}

.ps-flow-ruler {
  position: sticky;
  left: 0;
  align-self: stretch;
  width: 28px;
  margin-right: 10px;
  color: var(--ps-muted);
  border-right: 1px solid var(--ps-panel-border);
  font: 9px/1.2 var(--font-mono);
  writing-mode: vertical-rl;
  display: flex;
  justify-content: space-between;
  padding: 8px 5px;
}

.ps-flow-canvas {
  position: relative;
  overflow: visible;
  cursor: default;
  user-select: none;
}

.ps-flow-component {
  position: relative;
  border: 1px solid transparent;
  cursor: pointer;
  white-space: pre-line;
}

.ps-flow-component:hover,
.ps-flow-component.selected {
  border-color: #8f85ed;
  outline: 1px solid rgba(143, 133, 237, .2);
}

.ps-flow-component h1 { margin: 0; color: #172033; font-size: 28px; line-height: 1.1; }
.ps-flow-component h2 { margin: 0 0 7px; padding-bottom: 4px; color: #172033; border-bottom: 1px solid #aeb5c0; font-size: 11px; letter-spacing: .08em; text-transform: uppercase; }
.ps-flow-component p { margin: 0; }
.ps-gap-marker {
  position: absolute;
  right: -48px;
  top: 0;
  color: #8f85ed;
  font: 9px var(--font-mono);
}

.ps-readonly-kind {
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 10px;
  border: 1px solid var(--ps-panel-border);
  border-radius: 6px;
  color: var(--ps-text);
  font-size: 11px;
}
.ps-readonly-kind span { color: var(--ps-muted); font-size: 10px; }

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

/* Review document studio */
.sr-only {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}

.app-shell-editor {
  --sidebar-w: 58px;
}

.app-shell-editor .app-main {
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
}

.app-shell-editor .sidebar {
  background: #242424;
  border-right-color: #3b3b3b;
  color: #e6e6e6;
}

.app-shell-editor .sidebar-header {
  padding: 14px 13px 12px;
}

.app-shell-editor .sidebar-brand {
  justify-content: center;
}

.app-shell-editor .sidebar-brand svg {
  width: 30px;
  height: 30px;
}

.app-shell-editor .sidebar-brand-text,
.app-shell-editor .sidebar-nav-label {
  display: none;
}

.app-shell-editor .sidebar-nav {
  padding: 6px 0;
  gap: 2px;
}

.app-shell-editor .sidebar-link {
  justify-content: center;
  width: 58px;
  height: 48px;
  padding: 0;
  border-left: 0;
  border-right: 2px solid transparent;
  color: #a9a9a9;
}

.app-shell-editor .sidebar-link-label {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
}

.app-shell-editor .sidebar-link.active {
  color: #ffffff;
  background: #333333;
  border-right-color: #7c6cff;
}

.app-shell-editor .sidebar-link-icon,
.app-shell-editor .sidebar-link-icon svg {
  width: 20px;
  height: 20px;
}

.app-shell-editor .sidebar-footer {
  border-color: #3b3b3b;
  padding: 7px 0;
}

.review-studio {
  --studio-topbar: #2c2c2c;
  --studio-panel: #f7f7f7;
  --studio-panel-strong: #ffffff;
  --studio-line: #dedede;
  --studio-muted: #727272;
  --studio-accent: #6658e8;
  --studio-accent-soft: #eceafd;
  --studio-canvas: #d9d9db;
  height: 100vh;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: var(--studio-canvas);
  color: #242424;
}

[data-theme="dark"] .review-studio {
  --studio-panel: #242424;
  --studio-panel-strong: #2c2c2c;
  --studio-line: #424242;
  --studio-muted: #a3a3a3;
  --studio-accent-soft: #3a365c;
  --studio-canvas: #191919;
  color: #eeeeee;
}

.review-studio button,
.review-studio input,
.review-studio textarea,
.review-studio select {
  font: inherit;
}

.review-studio button {
  cursor: pointer;
}

.review-studio button:disabled {
  cursor: not-allowed;
}

.review-studio-topbar {
  position: relative;
  z-index: 10;
  height: 58px;
  min-height: 58px;
  display: grid;
  grid-template-columns: minmax(280px, 1fr) auto minmax(390px, 1fr);
  align-items: center;
  gap: 16px;
  padding: 0 12px;
  color: #ececec;
  background: var(--studio-topbar);
  border-bottom: 1px solid #171717;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.04);
}

.review-topbar-context,
.review-topbar-actions,
.review-file-context,
.review-topbar-center,
.review-canvas-mode,
.review-zoom-controls {
  display: flex;
  align-items: center;
}

.review-topbar-context {
  min-width: 0;
  gap: 10px;
}

.review-studio-mark {
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  background: #6c5ce7;
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
}

.review-file-context {
  min-width: 0;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1.15;
}

.review-file-context > span {
  color: #969696;
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.review-file-context select {
  max-width: min(36vw, 410px);
  padding: 2px 22px 2px 0;
  border: 0;
  background: transparent;
  color: #f5f5f5;
  font-size: 12px;
  font-weight: 500;
  text-overflow: ellipsis;
}

.review-file-context select:focus {
  outline: 1px solid #786af2;
  outline-offset: 2px;
}

.review-file-context option {
  color: #222222;
  background: #ffffff;
}

.review-topbar-center {
  height: 32px;
  padding: 3px;
  background: #202020;
  border: 1px solid #414141;
}

.review-topbar-center button,
.review-canvas-mode button {
  border: 0;
  background: transparent;
  color: inherit;
}

.review-topbar-center button {
  height: 24px;
  padding: 0 14px;
  color: #a9a9a9;
  font-size: 11px;
  font-weight: 500;
}

.review-topbar-center button.active {
  color: #ffffff;
  background: #4a4a4a;
  box-shadow: inset 0 0 0 1px #5a5a5a;
}

.review-topbar-actions {
  justify-content: flex-end;
  gap: 6px;
  min-width: 0;
}

.review-save-state {
  display: flex;
  align-items: center;
  gap: 6px;
  max-width: 148px;
  color: #ababab;
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.review-save-state > span {
  width: 6px;
  height: 6px;
  flex: 0 0 auto;
  border-radius: 50% !important;
  background: #5fb67a;
}

.review-save-state.unsaved > span,
.review-save-state.saving > span {
  background: #d7a446;
}

.review-save-state.error > span {
  background: #e86666;
}

.review-toolbar-divider {
  width: 1px;
  height: 22px;
  margin: 0 3px;
  background: #4a4a4a;
}

.review-toolbar-icon-button,
.inspector-icon-button {
  display: grid;
  place-items: center;
  border: 0;
  background: transparent;
}

.review-toolbar-icon-button {
  width: 30px;
  height: 30px;
  color: #d7d7d7;
}

.review-toolbar-icon-button:hover:not(:disabled) {
  background: #444444;
}

.review-toolbar-icon-button:disabled {
  color: #656565;
}

.review-toolbar-icon-button svg,
.review-export-button svg,
.review-open-pdf svg,
.review-outline-footer a svg,
.review-empty-icon svg {
  width: 18px;
  height: 18px;
}

.review-save-button,
.review-export-button {
  height: 32px;
  border: 1px solid #525252;
  color: #eeeeee;
  font-size: 11px;
  font-weight: 600;
}

.review-save-button {
  padding: 0 13px;
  background: #3b3b3b;
}

.review-save-button:hover:not(:disabled) {
  background: #484848;
}

.review-export-button {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0 13px;
  border-color: #7569ee;
  background: #6658e8;
  color: #ffffff;
}

.review-export-button:hover:not(:disabled) {
  background: #7569ee;
}

.review-save-button:disabled,
.review-export-button:disabled {
  opacity: 0.5;
}

.review-studio-workspace {
  flex: 1;
  min-height: 0;
  display: grid;
  grid-template-columns: 224px minmax(360px, 1fr) 342px;
  overflow: hidden;
}

.review-outline-panel,
.review-inspector-panel {
  min-height: 0;
  display: flex;
  flex-direction: column;
  background: var(--studio-panel);
}

.review-outline-panel {
  border-right: 1px solid var(--studio-line);
}

.review-inspector-panel {
  border-left: 1px solid var(--studio-line);
}

.review-panel-title {
  padding: 15px 14px 8px;
  color: var(--studio-muted);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.review-sections-title {
  margin-top: 7px;
  padding-top: 13px;
  border-top: 1px solid var(--studio-line);
}

.review-document-list,
.review-section-list {
  display: flex;
  flex-direction: column;
}

.review-document-list {
  gap: 2px;
  padding: 0 8px 9px;
}

.review-document-list button {
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr);
  align-items: center;
  gap: 9px;
  min-height: 52px;
  padding: 7px 8px;
  border: 1px solid transparent;
  background: transparent;
  color: inherit;
  text-align: left;
}

.review-document-list button:hover {
  background: color-mix(in srgb, var(--studio-accent-soft) 45%, transparent);
}

.review-document-list button.active {
  border-color: color-mix(in srgb, var(--studio-accent) 50%, var(--studio-line));
  background: var(--studio-accent-soft);
}

.review-document-icon {
  width: 32px;
  height: 36px;
  display: grid;
  place-items: center;
  color: var(--studio-muted);
  background: var(--studio-panel-strong);
  border: 1px solid var(--studio-line);
}

.review-document-icon svg {
  width: 18px;
  height: 18px;
}

.review-document-list button > span:last-child {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.review-document-list strong {
  overflow: hidden;
  font-size: 11px;
  font-weight: 600;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.review-document-list small {
  margin-top: 2px;
  color: var(--studio-muted);
  font-size: 9px;
}

.review-section-list {
  padding: 0 8px;
  gap: 1px;
}

.review-section-list button {
  display: grid;
  grid-template-columns: 26px 1fr;
  align-items: center;
  min-height: 32px;
  padding: 0 9px;
  border: 0;
  border-left: 2px solid transparent;
  background: transparent;
  color: var(--studio-muted);
  font-size: 10px;
  text-align: left;
}

.review-section-list button > span {
  color: color-mix(in srgb, var(--studio-muted) 65%, transparent);
  font-family: var(--font-mono);
  font-size: 8px;
}

.review-section-list button:hover {
  color: inherit;
  background: color-mix(in srgb, var(--studio-panel-strong) 75%, transparent);
}

.review-section-list button.active {
  color: inherit;
  background: var(--studio-accent-soft);
  border-left-color: var(--studio-accent);
}

.review-outline-footer {
  margin-top: auto;
  border-top: 1px solid var(--studio-line);
}

.review-outline-footer > a {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 11px 13px;
  color: var(--studio-muted);
  font-size: 9px;
  text-decoration: none;
}

.review-outline-footer > a:hover {
  color: inherit;
  background: var(--studio-panel-strong);
}

.review-health-summary {
  padding: 12px 13px 14px;
  border-top: 1px solid var(--studio-line);
}

.review-health-score {
  display: flex;
  align-items: center;
  gap: 9px;
}

.review-health-score > span {
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border-radius: 50% !important;
  color: #ffffff;
  background: var(--studio-accent);
  font-size: 9px;
  font-weight: 700;
}

.review-health-score > div {
  display: flex;
  flex-direction: column;
}

.review-health-score strong {
  font-size: 10px;
}

.review-health-score small {
  color: var(--studio-muted);
  font-size: 8px;
}

.review-health-checks {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 10px;
}

.review-health-checks > div {
  display: grid;
  grid-template-columns: 13px 1fr;
  color: var(--studio-muted);
  font-size: 8px;
  line-height: 1.35;
}

.review-health-checks > div.passed > span {
  color: #278849;
}

.review-health-checks > div.attention > span {
  color: #b47c1a;
  font-size: 15px;
  line-height: 7px;
}

.review-canvas-panel {
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  background: var(--studio-canvas);
}

.review-canvas-toolbar {
  height: 40px;
  min-height: 40px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 0 10px;
  background: color-mix(in srgb, var(--studio-panel) 94%, transparent);
  border-bottom: 1px solid var(--studio-line);
}

.review-canvas-mode {
  justify-self: start;
  gap: 2px;
}

.review-canvas-mode button {
  height: 26px;
  padding: 0 9px;
  color: var(--studio-muted);
  font-size: 9px;
}

.review-canvas-mode button:hover:not(:disabled),
.review-canvas-mode button.active {
  color: inherit;
  background: var(--studio-panel-strong);
  box-shadow: inset 0 0 0 1px var(--studio-line);
}

.review-canvas-mode button:disabled {
  opacity: 0.4;
}

.review-zoom-controls {
  justify-self: center;
  background: var(--studio-panel-strong);
  border: 1px solid var(--studio-line);
}

.review-zoom-controls .review-toolbar-icon-button {
  width: 26px;
  height: 24px;
  color: var(--studio-muted);
}

.review-zoom-controls .review-toolbar-icon-button:hover:not(:disabled) {
  color: inherit;
  background: var(--studio-accent-soft);
}

.review-zoom-controls .review-toolbar-icon-button svg {
  width: 14px;
  height: 14px;
}

.review-zoom-controls > button:nth-child(2) {
  width: 44px;
  height: 24px;
  padding: 0;
  border: 0;
  border-left: 1px solid var(--studio-line);
  border-right: 1px solid var(--studio-line);
  color: var(--studio-muted);
  background: transparent;
  font-size: 9px;
}

.review-open-pdf {
  justify-self: end;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: var(--studio-muted);
  font-size: 9px;
  text-decoration: none;
}

.review-open-pdf:hover {
  color: inherit;
}

.review-open-pdf svg {
  width: 14px;
  height: 14px;
}

.review-canvas-scroll {
  flex: 1;
  min-height: 0;
  overflow: auto;
  position: relative;
}

.review-canvas-stage {
  position: relative;
  margin: 34px auto 56px;
}

.document-sheet {
  width: 794px;
  min-height: 1123px;
  padding: 54px 60px 62px;
  transform: scale(var(--document-zoom));
  transform-origin: top left;
  overflow: hidden;
  background: #ffffff;
  color: #20252b;
  box-shadow: 0 2px 9px rgba(0, 0, 0, 0.19), 0 16px 38px rgba(0, 0, 0, 0.08);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13.333px;
  line-height: 1.42;
}

.document-preview-header {
  display: grid;
  grid-template-columns: 1fr minmax(220px, auto);
  gap: 28px;
  align-items: start;
  padding: 0 0 20px;
  border-bottom: 2px solid #20252b;
  cursor: pointer;
}

.document-preview-header:focus-visible,
.document-preview-section:focus-visible {
  outline: 2px solid #6658e8;
  outline-offset: 3px;
}

.document-preview-header h1,
.letter-preview-header h1 {
  margin: 0;
  color: #172033;
  font-size: 28px;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.document-role {
  margin: 6px 0 0;
  color: #4c5668;
  font-size: 14px;
  font-weight: 600;
}

.document-contact {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1px;
  color: #4d5663;
  font-size: 10px;
}

.document-preview-section {
  position: relative;
  padding: 15px 8px 7px;
  margin: 0 -8px;
  border: 1px solid transparent;
  cursor: pointer;
}

.document-preview-section:hover,
.document-preview-section.active {
  border-color: #8f85ed;
  background: rgba(102, 88, 232, 0.025);
}

.document-preview-section.active::after {
  content: "Edit";
  position: absolute;
  top: 5px;
  right: 6px;
  padding: 2px 5px;
  color: #6254da;
  background: #f0eefe;
  font-family: Inter, Arial, sans-serif;
  font-size: 7px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.cv-sheet .document-preview-section {
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
  border: 0;
}

.cv-sheet .document-preview-section:hover,
.cv-sheet .document-preview-section.active {
  outline: 1px solid #8f85ed;
  outline-offset: 2px;
}

.document-preview-section h2 {
  margin: 0 0 7px;
  padding-bottom: 4px;
  color: #172033;
  border-bottom: 1px solid #aeb5c0;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.document-preview-section h3,
.document-preview-section p,
.document-preview-section ul {
  margin-top: 0;
}

.document-preview-section p {
  margin-bottom: 7px;
}

.document-skill-list p {
  margin-bottom: 3px;
}

.document-entry {
  margin-bottom: 11px;
}

.document-entry:last-child {
  margin-bottom: 0;
}

.document-entry-heading,
.document-compact-entry {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 18px;
}

.document-entry-heading h3,
.document-compact-entry strong {
  margin: 0;
  color: #1e2735;
  font-size: 11px;
  font-weight: 700;
}

.document-entry-heading time,
.document-compact-entry time {
  flex: 0 0 auto;
  color: #626b77;
  font-size: 9px;
}

.document-subtitle {
  margin: 1px 0 3px !important;
  color: #4a5564;
  font-size: 10px;
  font-weight: 600;
}

.document-entry ul {
  margin-bottom: 0;
  padding-left: 16px;
}

.document-entry li {
  margin-bottom: 2px;
}

.document-placeholder {
  color: #7b8390;
  font-style: italic;
}

.letter-sheet {
  padding: 66px 74px 72px;
  font-size: 14px;
  line-height: 1.58;
}

.letter-preview-header {
  padding-bottom: 18px;
  margin-bottom: 18px;
  border-bottom: 2px solid #20252b;
}

.letter-preview-header p {
  margin: 5px 0 0;
  color: #59616d;
  font-size: 10px;
}

.letter-sheet .document-preview-section {
  padding-top: 8px;
  padding-bottom: 5px;
}

.letter-sheet .document-preview-section h2 {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  opacity: 0;
}

.letter-sheet .document-preview-section p {
  margin-bottom: 12px;
}

.letter-address-block {
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;
  line-height: 1.45;
}

.letter-address-block p {
  margin: 0 !important;
}

.letter-address-block time {
  margin-bottom: 12px;
}

.letter-subject {
  margin-bottom: 0 !important;
}

.letter-salutation {
  margin: 16px 0 6px;
}

.letter-signoff {
  display: flex;
  flex-direction: column;
  min-height: 50px;
}

.review-pdf-frame {
  width: 100%;
  height: 100%;
  border: 0;
  background: #ffffff;
}

.review-canvas-empty,
.review-studio-empty,
.review-studio-loading {
  display: grid;
  place-items: center;
  color: var(--studio-muted);
}

.review-canvas-empty {
  height: 100%;
  font-size: 11px;
}

.review-generation-unavailable {
  width: min(440px, calc(100% - 48px));
  margin: 80px auto;
  padding: 34px;
  border: 1px solid var(--studio-line);
  background: var(--studio-panel-strong);
  text-align: center;
}

.review-generation-unavailable .review-empty-icon {
  margin: 0 auto;
  color: var(--warning);
}

.review-generation-unavailable h2 {
  margin: 16px 0 6px;
  color: inherit;
  font-size: 15px;
}

.review-generation-unavailable p {
  margin: 0 auto;
  color: var(--studio-muted);
  font-size: 10px;
  line-height: 1.55;
}

.review-generation-unavailable > span {
  display: block;
  margin-top: 13px;
  color: var(--studio-muted);
  font-family: var(--font-mono);
  font-size: 8px;
}

.review-studio-empty {
  flex: 1;
  align-content: center;
  padding: 40px;
  background: var(--studio-panel);
  text-align: center;
}

.review-studio-empty h1 {
  margin: 15px 0 5px;
  color: inherit;
  font-size: 18px;
}

.review-studio-empty p {
  max-width: 380px;
  margin: 0 0 18px;
  font-size: 11px;
}

.review-empty-icon {
  width: 50px;
  height: 50px;
  display: grid;
  place-items: center;
  border: 1px solid var(--studio-line);
  background: var(--studio-panel-strong);
}

.review-empty-action {
  padding: 8px 13px;
  color: #ffffff;
  background: var(--studio-accent);
  font-size: 10px;
  font-weight: 600;
  text-decoration: none;
}

.review-studio-loading {
  height: 100vh;
  background: #202020;
  color: #bdbdbd;
  font-size: 11px;
}

.document-inspector {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
}

.document-inspector-header {
  padding: 14px 15px 13px;
  border-bottom: 1px solid var(--studio-line);
  background: var(--studio-panel-strong);
}

.document-inspector-header > span {
  color: var(--studio-accent);
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.document-inspector-header h2 {
  margin: 3px 0 3px;
  color: inherit;
  font-size: 13px;
  font-weight: 600;
}

.document-inspector-header p {
  margin: 0;
  color: var(--studio-muted);
  font-size: 9px;
  line-height: 1.45;
}

.document-inspector-scroll {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 14px;
}

.inspector-source-note {
  padding: 14px;
  color: #343b45;
  border: 1px solid #d8dbe0;
  border-radius: 8px;
  background: #f7f7f8;
}

.inspector-source-note strong {
  display: block;
  margin-bottom: 5px;
  font-size: 12px;
}

.inspector-source-note p {
  margin: 0 0 12px;
  color: #626b77;
  font-size: 11px;
  line-height: 1.5;
}

.inspector-source-note a {
  color: #4f46c8;
  font-size: 11px;
  font-weight: 700;
  text-decoration: none;
}

[data-theme="dark"] .inspector-source-note {
  color: #f1f0ec;
  border-color: #34332f;
  background: #191918;
}

[data-theme="dark"] .inspector-source-note p {
  color: #aaa9a3;
}

[data-theme="dark"] .inspector-source-note a {
  color: #f1f0ec;
}

.inspector-field-stack,
.inspector-entity-list,
.inspector-card-body,
.inspector-string-list {
  display: flex;
  flex-direction: column;
}

.inspector-field-stack,
.inspector-card-body {
  gap: 11px;
}

.inspector-entity-list {
  gap: 10px;
}

.inspector-field {
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 0;
}

.inspector-field-label {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
  color: var(--studio-muted);
  font-size: 8px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.inspector-field-label > span:last-child:not(:first-child) {
  color: color-mix(in srgb, var(--studio-muted) 75%, transparent);
  font-weight: 500;
  letter-spacing: 0;
  text-transform: none;
}

.inspector-input {
  width: 100%;
  min-height: 32px;
  padding: 7px 8px;
  border: 1px solid var(--studio-line);
  background: var(--studio-panel-strong);
  color: inherit;
  font-size: 10px;
  line-height: 1.5;
  resize: vertical;
}

.inspector-input:focus {
  border-color: var(--studio-accent);
  outline: 1px solid var(--studio-accent);
  outline-offset: -1px;
}

.inspector-field small {
  color: var(--studio-muted);
  font-size: 8px;
  line-height: 1.45;
}

.inspector-entity-card {
  border: 1px solid var(--studio-line);
  background: var(--studio-panel-strong);
}

.inspector-entity-card > header {
  min-height: 43px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 7px 7px 7px 10px;
  border-bottom: 1px solid var(--studio-line);
  background: color-mix(in srgb, var(--studio-panel) 72%, var(--studio-panel-strong));
}

.inspector-entity-card > header > div:first-child {
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.inspector-entity-card > header span {
  color: var(--studio-muted);
  font-size: 7px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.inspector-entity-card > header strong {
  max-width: 160px;
  overflow: hidden;
  font-size: 9px;
  font-weight: 600;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.inspector-card-actions,
.inspector-string-actions {
  display: flex;
  align-items: center;
  flex: 0 0 auto;
}

.inspector-icon-button {
  width: 25px;
  height: 25px;
  color: var(--studio-muted);
}

.inspector-icon-button:hover:not(:disabled) {
  color: inherit;
  background: var(--studio-accent-soft);
}

.inspector-icon-button.danger:hover:not(:disabled) {
  color: #c33c3c;
  background: #fbeaea;
}

.inspector-icon-button:disabled {
  opacity: 0.3;
}

.inspector-icon-button svg,
.inspector-add-button svg {
  width: 14px;
  height: 14px;
}

.inspector-card-body {
  padding: 11px;
}

.inspector-nested-list {
  padding-top: 2px;
}

.inspector-subheading {
  margin-bottom: 6px;
  color: var(--studio-muted);
  font-size: 8px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.inspector-string-list {
  gap: 7px;
}

.inspector-string-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 3px;
  align-items: start;
}

.inspector-string-row > label {
  min-width: 0;
}

.inspector-string-actions {
  padding-top: 3px;
}

.inspector-add-button {
  min-height: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 5px 8px;
  border: 1px dashed color-mix(in srgb, var(--studio-muted) 55%, transparent);
  background: transparent;
  color: var(--studio-muted);
  font-size: 9px;
}

.inspector-add-button:hover {
  color: inherit;
  border-color: var(--studio-accent);
  background: var(--studio-accent-soft);
}

.review-inspector-footer {
  min-height: 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 0 13px;
  border-top: 1px solid var(--studio-line);
  background: var(--studio-panel-strong);
  color: var(--studio-muted);
  font-size: 8px;
}

.review-autosave-toggle {
  display: flex;
  align-items: center;
  gap: 7px;
  cursor: pointer;
}

.review-autosave-toggle input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.review-autosave-toggle > span {
  position: relative;
  width: 25px;
  height: 14px;
  border-radius: 8px !important;
  background: #b0b0b0;
  transition: background 120ms ease;
}

.review-autosave-toggle > span::after {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 10px;
  height: 10px;
  border-radius: 50% !important;
  background: #ffffff;
  transition: transform 120ms ease;
}

.review-autosave-toggle input:checked + span {
  background: var(--studio-accent);
}

.review-autosave-toggle input:checked + span::after {
  transform: translateX(11px);
}

.review-autosave-toggle input:focus-visible + span {
  outline: 2px solid var(--studio-accent);
  outline-offset: 2px;
}

@media (max-width: 1180px) {
  .review-studio-topbar {
    grid-template-columns: minmax(210px, 1fr) auto minmax(310px, 1fr);
  }

  .review-save-state {
    display: none;
  }

  .review-studio-workspace {
    grid-template-columns: 190px minmax(330px, 1fr) 320px;
  }
}

@media (max-width: 980px) {
  .review-studio-workspace {
    grid-template-columns: minmax(330px, 1fr) 320px;
  }

  .review-outline-panel {
    display: none;
  }

  .review-studio-topbar {
    grid-template-columns: minmax(180px, 1fr) auto minmax(250px, 1fr);
  }
}

@media (max-width: 760px) {
  .app-shell-editor {
    --sidebar-w: 0px;
  }

  .app-shell-editor .sidebar {
    display: none;
  }

  .review-studio-topbar {
    height: auto;
    min-height: 92px;
    grid-template-columns: 1fr auto;
    grid-template-rows: 46px 40px;
    gap: 0 8px;
  }

  .review-topbar-context {
    grid-column: 1 / -1;
  }

  .review-topbar-center {
    justify-self: start;
  }

  .review-topbar-actions {
    justify-self: end;
  }

  .review-toolbar-divider,
  .review-save-button {
    display: none;
  }

  .review-studio-workspace {
    grid-template-columns: 1fr;
    grid-template-rows: minmax(360px, 52vh) minmax(320px, 1fr);
    overflow-y: auto;
  }

  .review-inspector-panel {
    min-height: 440px;
    border-top: 1px solid var(--studio-line);
    border-left: 0;
  }
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

/* Overlay-inspired warm dark redesign */
:root,
[data-theme="light"] {
  --bg: #e9e7e1;
  --bg-elevated: #f4f2ed;
  --surface: #f7f5f0;
  --surface-2: #eeece6;
  --surface-hover: #e6e3dc;
  --border: #d6d2c9;
  --border-strong: #b8b2a7;
  --text: #24231f;
  --muted: #6d6a63;
  --muted-2: #97938a;
  --accent: #292824;
  --success: #3f7958;
  --error: #a55454;
  --warning: #927544;
  --scrollbar-thumb: #c8c4ba;
  --scrollbar-track: transparent;
  --selection-bg: #d8d4cb;
  --input-bg: #fbfaf7;
  --input-border: #d3cfc6;
  --btn-primary-bg: #292824;
  --btn-primary-text: #f8f7f3;
  --btn-primary-hover: #3a3934;
  --btn-secondary-bg: #f5f3ee;
  --btn-secondary-hover: #eae7e0;
  --btn-disabled-border: #ddd9d0;
  --btn-disabled-text: #a8a49b;
  --accent-color: #292824;
  --console-bg: #1a1a18;
  --console-fg: #e1dfd9;
  --resize-line: #d4d0c7;
  --resize-active: #8f8a80;
  --chip-done-bg: #33322e;
  --chip-done-fg: #f8f7f3;
  --workspace-bg: #dfdcd5;
  --ps-canvas-border: #aaa59a;
  --paper-bg: #ffffff;
  --footer-bg: #f1efe9;
  --radius-xs: 7px;
  --radius-sm: 10px;
  --radius: 14px;
  --radius-lg: 20px;
  --radius-xl: 24px;
  --radius-full: 999px;
  --sidebar-w: 276px;
  --shadow-sm: 0 1px 2px rgba(25, 24, 20, 0.08), 0 8px 24px rgba(25, 24, 20, 0.04);
  --shadow-panel: 0 24px 70px rgba(25, 24, 20, 0.12);
  --transition: 160ms cubic-bezier(.2, .8, .2, 1);
}

[data-theme="dark"] {
  color-scheme: dark;
  --bg: #0d0d0c;
  --bg-elevated: #121211;
  --surface: #191918;
  --surface-2: #22221f;
  --surface-hover: #292824;
  --border: #2c2b28;
  --border-strong: #403e39;
  --text: #f2f1ed;
  --muted: #a4a19a;
  --muted-2: #6d6a64;
  --accent: #f0efeb;
  --success: #70ad84;
  --error: #d67878;
  --warning: #c9a66a;
  --scrollbar-thumb: #3b3935;
  --scrollbar-track: transparent;
  --selection-bg: #3b3935;
  --input-bg: #111110;
  --input-border: #33322f;
  --btn-primary-bg: #f1f0ec;
  --btn-primary-text: #171715;
  --btn-primary-hover: #d9d7d1;
  --btn-secondary-bg: #1a1a18;
  --btn-secondary-hover: #272622;
  --btn-disabled-border: #2c2b28;
  --btn-disabled-text: #64615b;
  --accent-color: #f1f0ec;
  --console-bg: #0a0a09;
  --console-fg: #d9d7d1;
  --resize-line: #302f2c;
  --resize-active: #77736a;
  --chip-done-bg: #e9e7e1;
  --chip-done-fg: #171715;
  --workspace-bg: #10100f;
  --ps-canvas-border: #56534c;
  --paper-bg: #ffffff;
  --footer-bg: #151514;
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.35), 0 12px 30px rgba(0, 0, 0, 0.16);
  --shadow-panel: 0 30px 90px rgba(0, 0, 0, 0.45);
}

html,
body,
#root {
  background: var(--bg);
}

body {
  min-width: 320px;
  background-image: radial-gradient(circle at 82% 4%, color-mix(in srgb, var(--surface-2) 22%, transparent), transparent 34%);
}

button,
input,
textarea,
select,
.code-area {
  border-radius: var(--radius-sm) !important;
}

button,
a,
input,
textarea,
select {
  transition: background-color var(--transition), border-color var(--transition), color var(--transition), opacity var(--transition), transform var(--transition), box-shadow var(--transition);
}

button:focus-visible,
a:focus-visible,
input:focus-visible,
textarea:focus-visible,
select:focus-visible {
  outline: 2px solid color-mix(in srgb, var(--text) 70%, transparent);
  outline-offset: 2px;
}

.app-shell {
  min-height: 100vh;
  padding: 16px;
}

.app-main {
  min-height: calc(100vh - 32px);
  margin: 0 0 0 var(--sidebar-w);
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: var(--radius-xl) !important;
  background: var(--bg-elevated);
  box-shadow: var(--shadow-panel);
}

.app-main:has(.applications-page),
.app-main:has(.ps-editor) {
  height: calc(100vh - 32px);
  max-height: calc(100vh - 32px);
}

/* Navigation shell */
.sidebar {
  top: 16px;
  left: 16px;
  width: calc(var(--sidebar-w) - 16px);
  height: calc(100vh - 32px);
  padding: 0 14px;
  border: 1px solid var(--border);
  border-radius: var(--radius-xl) !important;
  background: color-mix(in srgb, var(--surface) 96%, var(--bg));
  box-shadow: var(--shadow-sm);
}

.sidebar-header {
  padding: 22px 8px 17px;
}

.sidebar-brand {
  gap: 12px;
}

.sidebar-brand svg {
  width: 38px;
  height: 38px;
  color: var(--text);
}

.sidebar-brand-text {
  gap: 2px;
}

.sidebar-brand-name {
  color: var(--text);
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.035em;
  text-transform: none;
}

.sidebar-brand-tag {
  color: var(--muted-2);
  font-size: 9px;
  font-weight: 600;
  letter-spacing: .12em;
}

.sidebar-search {
  min-height: 48px;
  display: grid;
  grid-template-columns: 20px minmax(0, 1fr) 28px;
  align-items: center;
  gap: 10px;
  margin: 0 0 22px;
  padding: 0 10px 0 13px;
  border: 1px solid color-mix(in srgb, var(--border) 80%, #000000);
  border-radius: 13px !important;
  background: color-mix(in srgb, var(--input-bg) 92%, #000000);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .025), 0 6px 18px rgba(0, 0, 0, .12);
  color: var(--muted);
}

.sidebar-search:focus-within {
  border-color: var(--border-strong);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .035), 0 0 0 3px color-mix(in srgb, var(--text) 5%, transparent);
}

.sidebar-search > svg {
  width: 20px;
  height: 20px;
}

.sidebar-search input {
  min-width: 0;
  width: 100%;
  padding: 0;
  border: 0;
  border-radius: 0 !important;
  outline: 0;
  background: transparent;
  color: var(--text);
  font: inherit;
  font-size: 14px;
}

.sidebar-search input::placeholder {
  color: var(--muted);
}

.sidebar-search input::-webkit-search-cancel-button {
  display: none;
}

.sidebar-search kbd {
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  border: 1px solid var(--border-strong);
  border-radius: 8px;
  background: var(--surface-2);
  color: var(--muted);
  font-family: var(--font);
  font-size: 14px;
  font-weight: 600;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .25);
}

.sidebar-nav {
  gap: 7px;
  padding: 0;
}

.sidebar-nav-label {
  margin-bottom: 5px;
  padding: 0 10px;
  color: var(--muted-2);
  font-size: 9px;
  font-weight: 650;
  letter-spacing: .13em;
}

.sidebar-link {
  min-height: 48px;
  gap: 13px;
  padding: 0 12px;
  border: 1px solid transparent;
  border-radius: 12px !important;
  color: var(--muted);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -.015em;
  text-transform: none;
}

.sidebar-link-icon {
  width: 22px;
  height: 22px;
  opacity: .78;
}

.sidebar-link-icon svg {
  width: 20px;
  height: 20px;
}

.sidebar-link:hover {
  color: var(--text);
  background: color-mix(in srgb, var(--surface-hover) 60%, transparent);
}

.sidebar-link.active {
  border-color: var(--border-strong);
  background: linear-gradient(180deg, color-mix(in srgb, var(--surface-hover) 96%, #ffffff 1%), var(--surface-2));
  color: var(--text);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .035), 0 6px 14px rgba(0, 0, 0, .12);
}

.sidebar-search-empty {
  margin: 8px 10px;
  color: var(--muted-2);
  font-size: 11px;
}

.sidebar-footer {
  gap: 8px;
  padding: 12px 0 14px;
  border-top-color: var(--border);
}

.sidebar-local-status {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 5px 7px;
  padding: 8px 7px;
  color: var(--muted);
}

.sidebar-status-dot {
  width: 8px;
  height: 8px;
  flex: 0 0 auto;
  border-radius: 50% !important;
  background: var(--success);
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--success) 12%, transparent);
}

.sidebar-local-status > span:last-child {
  display: flex;
  flex-direction: column;
}

.sidebar-local-status strong {
  color: var(--text);
  font-size: 10px;
  font-weight: 600;
}

.sidebar-local-status small {
  color: var(--muted-2);
  font-size: 9px;
}

/* Shared page surfaces */
.profile-page {
  --md-radius: var(--radius);
  min-height: calc(100vh - 34px);
}

.profile-layout {
  min-height: calc(100vh - 34px);
}

.profile-main {
  padding: 36px 40px 44px;
}

.profile-section-head,
.applications-page-header {
  margin-bottom: 24px;
}

.profile-section-head h1,
.applications-page-header h1,
.jobs-welcome h1 {
  font-size: clamp(24px, 2.1vw, 32px);
  font-weight: 650;
  letter-spacing: -.04em;
  line-height: 1.08;
}

.page-lead {
  margin-top: 8px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.55;
}

.profile-form-surface,
.settings-section,
.empty-state,
.md-card,
.md-kv-row,
.map-card,
.stat-block {
  border-radius: var(--radius) !important;
  background: color-mix(in srgb, var(--surface) 94%, var(--bg));
  box-shadow: var(--shadow-sm);
}

.profile-form-surface {
  padding: 24px 26px 28px;
}

.profile-page input,
.profile-page textarea,
.md-input,
.ps-select,
.ps-num-input,
.ps-text-input,
.code-area {
  border-color: var(--input-border);
  background: var(--input-bg);
}

.profile-page input:hover,
.profile-page textarea:hover,
.md-input:hover,
.ps-select:hover {
  border-color: var(--border-strong);
}

.profile-page input:focus,
.profile-page textarea:focus,
.md-input:focus,
.ps-select:focus {
  border-color: color-mix(in srgb, var(--text) 55%, var(--border));
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--text) 5%, transparent);
}

.md-field > label,
.profile-nav-label,
.applications-toolbar-label,
.settings-section-head h2 {
  color: var(--muted);
  font-size: 9px;
  font-weight: 650;
  letter-spacing: .11em;
}

.md-filled-btn,
.md-outlined-btn,
.application-card-footer .md-text-btn,
.ps-tool-btn {
  min-height: 40px;
  border-radius: 10px !important;
  font-size: 10px;
  font-weight: 650;
  letter-spacing: .065em;
  box-shadow: var(--shadow-sm);
}

.md-filled-btn:hover:not(:disabled),
.md-outlined-btn:hover:not(:disabled),
.application-card-footer .md-text-btn:hover,
.ps-tool-btn:hover:not(:disabled) {
  transform: translateY(-1px);
}

.header-actions .md-filled-btn,
.header-actions .md-outlined-btn {
  width: auto;
}

.ps-tool-btn.primary {
  border-color: var(--btn-primary-bg);
  background: var(--btn-primary-bg);
  color: var(--btn-primary-text);
}

.ps-tool-btn.primary:hover:not(:disabled) {
  border-color: var(--btn-primary-hover);
  background: var(--btn-primary-hover);
}

.md-text-btn {
  border-radius: 8px !important;
  color: var(--text);
}

.md-icon-btn {
  border-radius: 9px !important;
  background: var(--surface-2);
}

.profile-sidebar,
.resizable-sidebar.profile-sidebar {
  top: 0;
  height: calc(100vh - 34px);
  min-height: calc(100vh - 34px);
  padding: 25px 0 18px 16px;
  border-left-color: var(--border);
  background: color-mix(in srgb, var(--surface) 72%, var(--bg-elevated));
}

.profile-nav ul {
  gap: 5px;
}

.profile-nav-item {
  min-height: 39px;
  padding: 0 12px;
  border: 1px solid transparent;
  border-radius: 10px !important;
  color: var(--muted);
  font-size: 11px;
  font-weight: 550;
  letter-spacing: .02em;
  text-transform: none;
}

.profile-nav-item:hover {
  background: color-mix(in srgb, var(--surface-hover) 55%, transparent);
}

.profile-nav-item.active {
  border-color: var(--border-strong);
  background: var(--surface-2);
  color: var(--text);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .025);
}

.profile-sidebar-actions {
  gap: 9px;
  border-top-color: var(--border);
}

.settings-main-inner {
  padding: 36px 40px 44px;
}

.settings-form {
  gap: 18px;
}

.settings-section {
  padding: 22px 24px 24px;
}

.settings-appearance {
  max-width: 540px;
}

.theme-switch {
  gap: 5px;
  padding: 4px;
  border: 1px solid var(--border);
  border-radius: 11px !important;
  background: var(--input-bg);
}

.theme-switch button {
  min-width: 86px;
  padding: 7px 12px;
  margin: 0;
  border: 0;
  border-radius: 8px !important;
  font-size: 9px;
}

.theme-switch button.active {
  border: 0;
  background: var(--surface-2);
  box-shadow: var(--shadow-sm);
}

/* Jobs */
.jobs-page .jobs-main-inner {
  max-width: 1120px;
  margin: 0 auto;
}

.jobs-chat {
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg) !important;
  background: var(--surface);
  box-shadow: var(--shadow-sm);
}

.jobs-chat-bubble {
  border-radius: 13px !important;
}

.jobs-chat-bubble.assistant {
  background: var(--surface-2);
}

.jobs-chat-bubble.user {
  background: var(--btn-primary-bg);
  color: var(--btn-primary-text);
}

.jobs-chat-composer {
  border-top-color: var(--border);
  background: color-mix(in srgb, var(--surface-2) 70%, var(--surface));
}

.jobs-sidebar .profile-nav-item {
  height: auto;
  min-height: 56px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 3px;
  padding: 9px 12px;
}

.jobs-sidebar .jobs-nav-title {
  width: 100%;
  overflow: hidden;
  color: var(--text);
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.jobs-sidebar .jobs-nav-meta {
  width: 100%;
  overflow: hidden;
  color: var(--muted-2);
  font-size: 9px;
  line-height: 1.35;
  white-space: nowrap;
  text-overflow: ellipsis;
}

/* Applications */
.applications-page-header {
  padding-bottom: 0;
  border-bottom: 0;
}

.applications-main-inner {
  padding: 36px 40px 30px;
}

.applications-toolbar {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: end;
  min-height: 66px;
  padding: 10px 12px;
  border-radius: var(--radius) !important;
  background: var(--surface);
  box-shadow: var(--shadow-sm);
}

.applications-toolbar-divider,
.applications-toolbar-spacer {
  display: none;
}

.applications-toolbar-controls {
  padding-left: 12px;
}

.applications-toolbar .md-filled-btn,
.applications-toolbar .md-outlined-btn,
.applications-toolbar .ps-select {
  min-height: 40px;
  height: 40px;
  border-radius: 9px !important;
}

.applications-toolbar-divider {
  margin: 5px 13px;
}

.generation-banner,
.generation-log-panel {
  background: var(--surface);
}

.generation-banner {
  border-radius: var(--radius) !important;
  box-shadow: var(--shadow-sm);
}

.generation-log-panel {
  border-radius: 14px 14px 0 0 !important;
  overflow: hidden;
}

.applications-grid {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
}

.application-card {
  overflow: hidden;
  border-color: var(--border);
  border-radius: var(--radius) !important;
  background: linear-gradient(145deg, color-mix(in srgb, var(--surface) 97%, #ffffff 1%), color-mix(in srgb, var(--surface) 96%, #000000 1%));
  box-shadow: var(--shadow-sm);
}

.application-card:hover:not(.selectable) {
  border-color: var(--border-strong);
  transform: translateY(-2px);
  box-shadow: 0 18px 42px rgba(0, 0, 0, .18);
}

.application-card.is-selected {
  border-color: color-mix(in srgb, var(--text) 60%, var(--border));
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--text) 5%, transparent);
}

.application-card-header {
  padding: 20px 20px 14px;
}

.application-card-header h3 {
  font-size: 16px;
  font-weight: 630;
  letter-spacing: -.025em;
  line-height: 1.28;
}

.application-card-company {
  color: var(--muted);
}

.application-card-slug {
  color: var(--muted-2);
}

.application-card-meta,
.application-card-body {
  padding-left: 20px;
  padding-right: 20px;
}

.output-badge,
.application-phase-chip,
.status-pill {
  border-radius: var(--radius-full) !important;
}

.application-card-footer {
  padding: 12px 18px;
  border-top-color: var(--border);
  background: color-mix(in srgb, var(--footer-bg) 90%, transparent);
}

.application-card-footer .md-text-btn {
  min-height: 34px;
  padding: 0 12px;
}

.stat-block {
  padding: 14px;
}

/* Template editor */
.ps-editor {
  --ps-bg: var(--bg-elevated);
  --ps-panel: var(--surface);
  --ps-panel-border: var(--border);
  --ps-text: var(--text);
  --ps-muted: var(--muted);
  --ps-accent: var(--text);
  --ps-accent-dim: var(--surface-2);
  border-radius: var(--radius-xl) !important;
  background: var(--bg-elevated);
}

.ps-toolbar {
  min-height: 58px;
  padding: 8px 12px;
  background: var(--surface);
}

.ps-panel {
  background: color-mix(in srgb, var(--surface) 96%, var(--bg));
}

.ps-layer-item.active,
.ps-font-option.active {
  border-radius: 8px !important;
  outline-color: var(--border-strong);
  background: var(--surface-2);
}

.ps-icon-btn,
.ps-mini-btn,
.ps-style-btn {
  border-radius: 7px !important;
}

.ps-type-block,
.ps-font-picker-list,
.ps-layer-ghost {
  border-radius: 10px !important;
}

.ps-workspace {
  background-color: var(--workspace-bg);
  background-image: radial-gradient(circle, color-mix(in srgb, var(--muted-2) 28%, transparent) 1px, transparent 1px);
  background-size: 18px 18px;
}

/* Review studio */
.app-shell-editor {
  --sidebar-w: 74px;
}

.app-shell-editor .app-main {
  height: calc(100vh - 32px);
  max-height: calc(100vh - 32px);
  margin-left: var(--sidebar-w);
}

.app-shell-editor .sidebar {
  width: 58px;
  padding: 0 6px;
  background: var(--surface);
  border-color: var(--border);
}

.app-shell-editor .sidebar-header {
  padding: 14px 8px 12px;
}

.app-shell-editor .sidebar-brand svg {
  width: 31px;
  height: 31px;
}

.app-shell-editor .sidebar-search,
.app-shell-editor .sidebar-local-status {
  display: none;
}

.app-shell-editor .sidebar-link {
  width: 44px;
  height: 44px;
  min-height: 44px;
  margin: 0 auto;
  border: 1px solid transparent;
  border-radius: 11px !important;
}

.app-shell-editor .sidebar-link.active {
  border-color: var(--border-strong);
  background: var(--surface-2);
}

.review-studio {
  --studio-topbar: #171716;
  --studio-panel: #191918;
  --studio-panel-strong: #20201e;
  --studio-line: #32312e;
  --studio-muted: #9d9a93;
  --studio-accent: #e8e6df;
  --studio-accent-soft: #302f2b;
  --studio-canvas: #10100f;
  height: 100%;
  border-radius: var(--radius-xl) !important;
  color: #efeee9;
}

[data-theme="dark"] .review-studio {
  --studio-topbar: #171716;
  --studio-panel: #191918;
  --studio-panel-strong: #20201e;
  --studio-line: #32312e;
  --studio-muted: #9d9a93;
  --studio-accent: #e8e6df;
  --studio-accent-soft: #302f2b;
  --studio-canvas: #10100f;
  color: #efeee9;
}

[data-theme="light"] .review-studio {
  --studio-topbar: #292824;
  --studio-panel: #eeece6;
  --studio-panel-strong: #f7f5f0;
  --studio-line: #d0ccc2;
  --studio-muted: #716e67;
  --studio-accent: #292824;
  --studio-accent-soft: #dfdcd4;
  --studio-canvas: #d9d6cf;
  color: #24231f;
}

.review-studio-topbar {
  background: var(--studio-topbar);
  border-bottom-color: var(--studio-line);
}

.review-studio-mark {
  border-radius: 8px !important;
  background: #f0efeb;
  color: #171715;
}

.review-topbar-center,
.review-zoom-controls,
.review-document-icon,
.review-inspector-panel,
.review-outline-panel {
  border-color: var(--studio-line);
}

.review-topbar-center,
.review-zoom-controls {
  border-radius: 9px !important;
}

.review-topbar-center button,
.review-canvas-mode button,
.review-toolbar-icon-button,
.review-save-button,
.review-export-button,
.review-document-list button,
.review-section-list button,
.inspector-icon-button,
.inspector-add-button {
  border-radius: 8px !important;
}

.review-export-button {
  border-color: #f0efeb;
  background: #f0efeb;
  color: #171715;
}

.review-export-button:hover:not(:disabled) {
  background: #d8d6d0;
}

.review-document-list button.active,
.review-section-list button.active {
  border-color: var(--studio-line);
  background: var(--studio-accent-soft);
}

.review-health-score > span {
  background: #e5e3dd;
  color: #171715;
}

.review-canvas-scroll {
  background-image: radial-gradient(circle, #2a2926 1px, transparent 1px);
  background-size: 20px 20px;
}

.review-canvas-toolbar {
  background: color-mix(in srgb, var(--studio-panel) 96%, transparent);
}

.document-sheet {
  border-radius: 2px !important;
  box-shadow: 0 3px 12px rgba(0, 0, 0, .28), 0 28px 80px rgba(0, 0, 0, .25);
}

.document-preview-section.active {
  border-radius: 3px !important;
  outline-color: #8a857b;
  background: rgba(107, 101, 88, .04);
}

.document-preview-section.active::after {
  border-radius: 3px !important;
  background: #edeae2;
  color: #4b4841;
}

.inspector-input,
.inspector-entity-card {
  border-radius: 9px !important;
}

.inspector-entity-card {
  overflow: hidden;
}

.inspector-input:focus {
  border-color: #827e75;
  outline-color: #827e75;
}

.review-generation-unavailable,
.review-empty-icon,
.review-empty-action {
  border-radius: 12px !important;
}

.toast {
  border-radius: 12px !important;
  box-shadow: var(--shadow-panel);
  letter-spacing: .03em;
  text-transform: none;
}

@media (max-width: 1100px) {
  :root,
  [data-theme="light"],
  [data-theme="dark"] {
    --sidebar-w: 90px;
  }

  .sidebar {
    width: 74px;
    padding: 0 8px;
  }

  .sidebar-header {
    padding: 16px 9px;
  }

  .sidebar-brand {
    justify-content: center;
  }

  .sidebar-brand-text,
  .sidebar-search,
  .sidebar-nav-label,
  .sidebar-local-status,
  .sidebar-link-label {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .sidebar-link {
    width: 52px;
    justify-content: center;
    padding: 0;
  }

  .profile-main,
  .applications-main-inner,
  .settings-main-inner {
    padding-left: 28px;
    padding-right: 28px;
  }
}

@media (max-width: 720px) {
  .app-shell,
  .app-shell-editor {
    --sidebar-w: 0px;
    padding: 10px 10px 84px;
  }

  .sidebar,
  .app-shell-editor .sidebar {
    top: auto;
    right: 10px;
    bottom: 10px;
    left: 10px;
    width: auto;
    height: 64px;
    padding: 6px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 18px !important;
  }

  .sidebar-header,
  .sidebar-search,
  .sidebar-nav-label,
  .sidebar-local-status {
    display: none;
  }

  .sidebar-nav {
    min-width: 0;
    flex: 1;
    flex-direction: row;
    justify-content: space-around;
    gap: 2px;
    overflow: visible;
  }

  .sidebar-link,
  .app-shell-editor .sidebar-link {
    width: 44px;
    min-height: 44px;
    height: 44px;
    justify-content: center;
    padding: 0;
  }

  .sidebar-link-label,
  .app-shell-editor .sidebar-link-label {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
  }

  .sidebar-footer {
    width: auto;
    margin: 0;
    padding: 0;
    border: 0;
  }

  .app-main,
  .app-shell-editor .app-main,
  .app-main:has(.applications-page),
  .app-main:has(.ps-editor) {
    width: 100%;
    min-height: calc(100vh - 104px);
    height: calc(100vh - 104px);
    max-height: calc(100vh - 104px);
    margin: 0;
    border-radius: 18px !important;
  }

  .profile-page,
  .profile-layout {
    min-height: calc(100vh - 106px);
  }

  .profile-sidebar,
  .resizable-sidebar.profile-sidebar {
    width: 100% !important;
    height: auto;
    min-height: 0;
    padding: 15px;
    border-top: 1px solid var(--border);
  }

  .profile-main,
  .applications-main-inner,
  .settings-main-inner {
    padding: 24px 18px 30px;
  }

  .applications-toolbar {
    display: flex;
    gap: 10px;
  }

  .applications-toolbar-divider {
    display: none;
  }

  .applications-toolbar-controls,
  .applications-toolbar-actions {
    width: 100%;
    flex-wrap: wrap;
  }

  .applications-toolbar-field {
    flex: 1;
  }

  .applications-toolbar .ps-select {
    width: 100%;
  }

  .review-studio-topbar {
    min-height: 92px;
  }
}
`;

export default function GlobalStyles() {
  return <style>{GLOBAL_CSS}</style>;
}
