from __future__ import annotations

import os
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

from joblication_runtime import DATA_ROOT, output_path
from engine.dynamic_engine.utils import configured_export_dir


class RuntimePathTests(unittest.TestCase):
    def test_default_outputs_honor_environment_override(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            with patch.dict("os.environ", {"JOBLICATION_OUTPUT_ROOT": directory}):
                self.assertEqual(output_path("outputs"), Path(directory).resolve())
                self.assertEqual(output_path(""), Path(directory).resolve())

    def test_custom_relative_output_uses_data_root_even_with_override(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            with patch.dict("os.environ", {"JOBLICATION_OUTPUT_ROOT": directory}):
                self.assertEqual(output_path("my-cvs"), (DATA_ROOT / "my-cvs").resolve())

    def test_absolute_output_directory_wins_over_environment(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            absolute = Path(directory) / "chosen"
            with patch.dict("os.environ", {"JOBLICATION_OUTPUT_ROOT": directory}):
                self.assertEqual(output_path(str(absolute)), absolute.resolve())

    def test_relative_output_directory_uses_data_root_without_override(self) -> None:
        with patch.dict("os.environ", {}, clear=False):
            os.environ.pop("JOBLICATION_OUTPUT_ROOT", None)
            self.assertEqual(output_path("outputs"), (DATA_ROOT / "outputs").resolve())

    def test_configured_export_dir_prefers_config_over_template(self) -> None:
        with patch.dict("os.environ", {}, clear=False):
            os.environ.pop("JOBLICATION_OUTPUT_ROOT", None)
            resolved = configured_export_dir(
                {"export": {"output_dir": "from-config"}},
                {"export": {"output_dir": "from-template"}},
            )
            self.assertEqual(resolved, (DATA_ROOT / "from-config").resolve())


if __name__ == "__main__":
    unittest.main()
