"""
Local UI server for Joblication.

Serves ui/ static files and saves job postings directly to
applications/local_applications.json via applications/extractor.py.

Run from project root:
    python ui/server.py

Then open http://localhost:8080
"""

from __future__ import annotations

import json
import re
import sys
from http.server import BaseHTTPRequestHandler, HTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
UI_DIR = Path(__file__).resolve().parent

HOST = "127.0.0.1"
PORT = 8080


def get_json_path() -> Path:
    if str(ROOT) not in sys.path:
        sys.path.insert(0, str(ROOT))

    from applications.storage import load_json_path

    return load_json_path()


def save_application(
    company: str,
    title: str,
    about: str = "",
    description: str = "",
    location: str = "",
    url: str = "",
) -> tuple[str, int]:
    if str(ROOT) not in sys.path:
        sys.path.insert(0, str(ROOT))

    from applications.extractor import append_application

    json_path = get_json_path()
    json_path.parent.mkdir(parents=True, exist_ok=True)
    return append_application(
        company, title, about, description, location, url, json_path
    )


class JoblicationHandler(BaseHTTPRequestHandler):
    def log_message(self, format: str, *args) -> None:
        print(f"[{self.log_date_time_string()}] {format % args}")

    def _send_json(self, status: int, payload: dict) -> None:
        body = json.dumps(payload).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def _serve_static(self, rel_path: str) -> None:
        safe = re.sub(r"[^a-zA-Z0-9._/-]", "", rel_path).lstrip("/")
        if not safe or safe.endswith("/"):
            safe = "index.html"

        file_path = (UI_DIR / safe).resolve()
        if not str(file_path).startswith(str(UI_DIR.resolve())):
            self.send_error(403)
            return
        if not file_path.is_file():
            self.send_error(404)
            return

        content_types = {
            ".html": "text/html; charset=utf-8",
            ".css": "text/css; charset=utf-8",
            ".js": "application/javascript; charset=utf-8",
        }
        content_type = content_types.get(file_path.suffix, "application/octet-stream")
        data = file_path.read_bytes()

        self.send_response(200)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(data)))
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        self.end_headers()
        self.wfile.write(data)

    def do_GET(self) -> None:
        path = self.path.split("?", 1)[0]
        if path == "/api/config":
            json_path = get_json_path()
            self._send_json(
                200,
                {
                    "json": json_path.name,
                    "json_path": str(json_path),
                },
            )
            return
        if path in ("/", "/index.html"):
            self._serve_static("index.html")
            return
        if path.startswith("/"):
            self._serve_static(path[1:])
            return
        self.send_error(404)

    def do_POST(self) -> None:
        if self.path != "/api/applications":
            self.send_error(404)
            return

        length = int(self.headers.get("Content-Length", 0))
        raw = self.rfile.read(length) if length else b"{}"

        try:
            payload = json.loads(raw.decode("utf-8"))
        except json.JSONDecodeError:
            self._send_json(400, {"error": "Invalid JSON body."})
            return

        company = str(payload.get("company", "")).strip()
        title = str(payload.get("title", "")).strip()
        location = str(payload.get("location", "")).strip()
        url = str(payload.get("url", "")).strip()
        about = str(payload.get("about", "")).strip()
        description = str(payload.get("description", "")).strip()

        if not company or not title:
            self._send_json(400, {"error": "Company and title are required."})
            return

        if not about and not description:
            self._send_json(400, {"error": "About or description is required."})
            return

        try:
            slug, json_count = save_application(
                company, title, about, description, location, url
            )
            json_path = get_json_path()
        except ValueError as exc:
            self._send_json(400, {"error": str(exc)})
            return
        except OSError as exc:
            self._send_json(500, {"error": f"Could not write file: {exc}"})
            return

        self._send_json(
            200,
            {
                "ok": True,
                "message": "Application saved.",
                "slug": slug,
                "json_count": json_count,
                "json": json_path.name,
            },
        )


def main() -> None:
    json_path = get_json_path()
    server = HTTPServer((HOST, PORT), JoblicationHandler)
    print(f"Joblication UI -> http://{HOST}:{PORT}")
    print(f"Writing to -> {json_path}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopped.")
        server.server_close()


if __name__ == "__main__":
    main()
