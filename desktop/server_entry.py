"""PyInstaller entry point for the packaged Joblication Python service."""

from __future__ import annotations

import importlib
import sys

from joblication_runtime import ensure_data_workspace


def _run_stage(name: str) -> None:
    modules = {
        "stage_1": "stage_1",
        "stage_2": "stage_2",
        "stage_3": "stage_3",
        "build": "build",
    }
    module_name = modules.get(name)
    if not module_name:
        raise SystemExit(f"Unknown Joblication stage: {name}")
    importlib.import_module(module_name).main()


def main() -> None:
    ensure_data_workspace()
    args = sys.argv[1:]
    if len(args) >= 2 and args[0] == "--joblication-mode":
        mode = args[1]
        remainder = args[2:]
        if mode == "stage":
            if len(remainder) != 1:
                raise SystemExit("Stage mode requires a stage name")
            _run_stage(remainder[0])
            return
        if mode == "pipeline":
            sys.argv = [sys.argv[0], *remainder]
            importlib.import_module("generate").main()
            return
        if mode == "build":
            importlib.import_module("build").main()
            return
        raise SystemExit(f"Unknown Joblication mode: {mode}")

    importlib.import_module("server").main()


if __name__ == "__main__":
    main()
