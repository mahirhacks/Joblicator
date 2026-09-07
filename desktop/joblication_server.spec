# -*- mode: python ; coding: utf-8 -*-
"""Build the self-contained Python service bundled by Electron Builder."""

from pathlib import Path

from PyInstaller.utils.hooks import collect_data_files, collect_submodules


ROOT = Path(SPECPATH).parent
ENTRY = ROOT / "desktop" / "server_entry.py"
PATHEX = [
    str(ROOT),
    str(ROOT / "applications"),
    str(ROOT / "engine" / "dynamic_engine"),
    str(ROOT / "engine" / "static_engine"),
    str(ROOT / "ui" / "backend"),
]

PACKAGES = ("applications", "engine", "ui", "jinja2", "yaml", "xhtml2pdf")
HIDDEN_IMPORTS = [module for package in PACKAGES for module in collect_submodules(package)]
HIDDEN_IMPORTS += [
    "server",
    "handlers",
    "store",
    "generate",
    "stage_1",
    "stage_2",
    "stage_3",
    "build",
    "loader",
    "renderer",
    "normalizer",
    "ats_report",
    "model_client",
    "openrouter",
    "engine.template_contract",
]
DATA_FILES = collect_data_files("xhtml2pdf")

a = Analysis(
    [str(ENTRY)],
    pathex=PATHEX,
    binaries=[],
    datas=DATA_FILES,
    hiddenimports=HIDDEN_IMPORTS,
    hookspath=[],
    hooksconfig={},
    runtime_hooks=[],
    excludes=[],
    noarchive=False,
)
pyz = PYZ(a.pure)
exe = EXE(
    pyz,
    a.scripts,
    a.binaries,
    a.zipfiles,
    a.datas,
    [],
    name="JoblicationServer",
    console=True,
    debug=False,
    bootloader_ignore_signals=False,
    strip=False,
    upx=False,
)
coll = COLLECT(
    exe,
    a.binaries,
    a.zipfiles,
    a.datas,
    strip=False,
    upx=False,
    name="JoblicationServer",
)
