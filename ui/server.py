"""
Local UI server for Joblication.

Serves ui/ static files and appends job postings to applications/applications.txt.

Run from project root:
    python ui/server.py

Then open http://localhost:8080
"""

from __future__ import annotations

import json
import re
from http.server import BaseHTTPRequestHandler, HTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
UI_DIR = Path(__file__).resolve().parent
TXT_PATH = ROOT / "applications" / "applications.txt"

HOST = "127.0.0.1"
PORT = 8080


def format_block(
    company: str,
    title: str,
    about: str = "",
    description: str = "",
    location: str = "",
    url: str = "",
) -> str:
    lines = [
        "[start]",
        f"[Company Name] : {company.strip()}",
        f"[Title] : {title.strip()}",
        f"[Location] : {location.strip()}",
        f"[URL] : {url.strip()}",
        "[About] :",
        about.strip(),
        "[Description] :",
        description.strip(),
        "[end]",
        "",
    ]
    return "\n".join(lines)


def append_application(
    company: str,
    title: str,
    about: str = "",
    description: str = "",
    location: str = "",
    url: str = "",
) -> None:
    TXT_PATH.parent.mkdir(parents=True, exist_ok=True)
    block = format_block(company, title, about, description, location, url)
    with TXT_PATH.open("a", encoding="utf-8") as f:
        if TXT_PATH.stat().st_size > 0:
            f.write("\n")
        f.write(block)


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
        self.end_headers()
        self.wfile.write(data)

    def do_GET(self) -> None:
        path = self.path.split("?", 1)[0]
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
            append_application(company, title, about, description, location, url)
        except OSError as exc:
            self._send_json(500, {"error": f"Could not write file: {exc}"})
            return

        self._send_json(200, {"ok": True, "message": "Application saved."})


def main() -> None:
    server = HTTPServer((HOST, PORT), JoblicationHandler)
    print(f"Joblication UI -> http://{HOST}:{PORT}")
    print(f"Writing to -> {TXT_PATH}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopped.")
        server.server_close()


if __name__ == "__main__":
    main()
