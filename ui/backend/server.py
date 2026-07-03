"""
Local UI server for Joblication.

Serves the React frontend and REST API for profile, jobs, applications,
templates, review, and generation.

Run from project root:
    python ui/backend/server.py
"""

from __future__ import annotations

import json
import mimetypes
import re
import sys
from http.server import BaseHTTPRequestHandler, HTTPServer
from pathlib import Path
from urllib.parse import unquote, urlparse

ROOT = Path(__file__).resolve().parent.parent.parent
BACKEND_DIR = Path(__file__).resolve().parent
FRONTEND_DIR = Path(__file__).resolve().parent.parent / "frontend"

HOST = "127.0.0.1"
PORT = 8080

if str(BACKEND_DIR) not in sys.path:
    sys.path.insert(0, str(BACKEND_DIR))

import handlers  # noqa: E402


class JoblicationHandler(BaseHTTPRequestHandler):
    def log_message(self, format: str, *args) -> None:
        print(f"[{self.log_date_time_string()}] {format % args}")

    def _safe_write(self, write_fn) -> bool:
        try:
            write_fn()
            return True
        except (ConnectionAbortedError, ConnectionResetError, BrokenPipeError):
            return False

    def _read_body(self) -> dict:
        length = int(self.headers.get("Content-Length", 0))
        raw = self.rfile.read(length) if length else b"{}"
        try:
            data = json.loads(raw.decode("utf-8"))
            return data if isinstance(data, dict) else {}
        except json.JSONDecodeError:
            return {}

    def _send_json(self, status: int, payload: dict) -> None:
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self._safe_write(lambda: self.wfile.write(body))

    def _send_bytes(self, status: int, data: bytes, content_type: str, *, filename: str | None = None, inline: bool = False) -> None:
        self.send_response(status)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(data)))
        if filename:
            disposition = "inline" if inline else "attachment"
            self.send_header("Content-Disposition", f'{disposition}; filename="{filename}"')
        self.end_headers()
        self._safe_write(lambda: self.wfile.write(data))

    def _route_path(self) -> str:
        return urlparse(self.path).path

    def _query_params(self) -> dict[str, list[str]]:
        from urllib.parse import parse_qs

        return parse_qs(urlparse(self.path).query)

    def _dispatch_api(self, method: str) -> bool:
        path = self._route_path()
        if not path.startswith("/api/"):
            return False

        parts = [p for p in path.split("/") if p]
        # parts[0] == "api"

        try:
            if method == "GET":
                return self._handle_get_api(parts)
            if method == "POST":
                return self._handle_post_api(parts)
            if method == "PUT":
                return self._handle_put_api(parts)
            if method == "DELETE":
                return self._handle_delete_api(parts)
        except Exception as exc:
            self._send_json(500, {"error": str(exc)})
            return True

        self._send_json(405, {"error": "Method not allowed"})
        return True

    def _handle_get_api(self, parts: list[str]) -> bool:
        if parts == ["api", "health"]:
            self._respond(*handlers.health())
            return True
        if parts == ["api", "config"]:
            self._respond(*handlers.config_info())
            return True
        if parts == ["api", "engine-config"]:
            self._respond(*handlers.get_engine_config())
            return True
        if parts == ["api", "profile"]:
            self._respond(*handlers.get_profile())
            return True
        if parts == ["api", "applications"]:
            self._respond(*handlers.list_jobs())
            return True
        if parts == ["api", "applications", "view"]:
            self._respond(*handlers.list_applications_view())
            return True
        if len(parts) == 3 and parts[1] == "applications":
            self._respond(*handlers.get_job(parts[2]))
            return True
        if parts == ["api", "outputs"]:
            self._respond(*handlers.list_outputs())
            return True
        if len(parts) == 4 and parts[1] == "review" and parts[3] == "html":
            params = self._query_params()
            doc = params.get("doc", ["cv"])[0]
            self._respond(*handlers.get_review_html(parts[2], doc))
            return True
        if len(parts) == 3 and parts[1] == "review":
            self._respond(*handlers.get_review(parts[2]))
            return True
        if parts == ["api", "templates"]:
            self._respond(*handlers.list_templates())
            return True
        if len(parts) == 3 and parts[1] == "templates":
            self._respond(*handlers.get_template(parts[2]))
            return True
        if parts == ["api", "generate", "status"]:
            self._respond(*handlers.generate_status())
            return True
        if parts == ["api", "generate", "log"]:
            params = self._query_params()
            offset = params.get("offset", ["0"])[0]
            self._respond(*handlers.get_generate_log(offset))
            return True
        if len(parts) >= 3 and parts[1] == "files":
            rel = "/".join(unquote(p) for p in parts[2:])
            file_path = handlers.resolve_output_file(rel)
            if not file_path:
                self._send_json(404, {"error": "File not found"})
                return True
            mime, _ = mimetypes.guess_type(str(file_path))
            content_type = mime or "application/octet-stream"
            inline = content_type in ("application/pdf", "text/html")
            self._send_bytes(
                200,
                file_path.read_bytes(),
                content_type,
                filename=file_path.name,
                inline=inline,
            )
            return True

        self._send_json(404, {"error": "Not found"})
        return True

    def _handle_post_api(self, parts: list[str]) -> bool:
        body = self._read_body()
        if parts == ["api", "applications"]:
            self._respond(*handlers.create_job(body))
            return True
        if parts == ["api", "applications", "scrape"]:
            self._respond(*handlers.scrape_job_url(body))
            return True
        if parts == ["api", "generate"]:
            self._respond(*handlers.start_generate(body))
            return True
        if len(parts) == 3 and parts[1] == "build":
            body = self._read_body()
            self._respond(*handlers.rebuild_application(parts[2], body))
            return True
        if parts == ["api", "templates"]:
            template_id = str(body.get("id", "")).strip() or "custom_" + str(int(__import__("time").time()))
            self._respond(*handlers.save_template(template_id, body))
            return True

        self._send_json(404, {"error": "Not found"})
        return True

    def _handle_put_api(self, parts: list[str]) -> bool:
        body = self._read_body()
        if parts == ["api", "profile"]:
            self._respond(*handlers.put_profile(body))
            return True
        if parts == ["api", "engine-config"]:
            self._respond(*handlers.put_engine_config(body))
            return True
        if len(parts) == 3 and parts[1] == "applications":
            self._respond(*handlers.update_job(parts[2], body))
            return True
        if len(parts) == 4 and parts[1] == "review" and parts[3] == "html":
            self._respond(*handlers.put_review_html(parts[2], body))
            return True
        if len(parts) == 3 and parts[1] == "review":
            self._respond(*handlers.put_review(parts[2], body))
            return True
        if len(parts) == 3 and parts[1] == "templates":
            self._respond(*handlers.save_template(parts[2], body))
            return True

        self._send_json(404, {"error": "Not found"})
        return True

    def _handle_delete_api(self, parts: list[str]) -> bool:
        if len(parts) == 3 and parts[1] == "applications":
            self._respond(*handlers.delete_job(parts[2]))
            return True
        self._send_json(404, {"error": "Not found"})
        return True

    def _respond(self, status: int, payload: dict) -> None:
        self._send_json(status, payload)

    def _serve_static(self, rel_path: str, *, spa_fallback: bool = False) -> None:
        safe = re.sub(r"[^a-zA-Z0-9._/-]", "", rel_path).lstrip("/")
        if not safe or safe.endswith("/"):
            safe = "index.html"

        file_path = (FRONTEND_DIR / safe).resolve()
        if not str(file_path).startswith(str(FRONTEND_DIR.resolve())):
            self.send_error(403)
            return

        if not file_path.is_file():
            if spa_fallback and (FRONTEND_DIR / "index.html").is_file():
                file_path = FRONTEND_DIR / "index.html"
            else:
                self.send_error(404)
                return

        mime, _ = mimetypes.guess_type(str(file_path))
        content_type = mime or "application/octet-stream"
        data = file_path.read_bytes()

        self.send_response(200)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(data)))
        if file_path.suffix == ".html":
            self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        self.end_headers()
        self._safe_write(lambda: self.wfile.write(data))

    def do_GET(self) -> None:
        if self._dispatch_api("GET"):
            return
        path = self._route_path()
        if path in ("/", "/index.html"):
            self._serve_static("index.html")
            return
        if path.startswith("/assets/") or path.endswith((".js", ".css", ".ico", ".svg", ".png", ".woff2")):
            self._serve_static(path[1:])
            return
        self._serve_static("index.html", spa_fallback=True)

    def do_POST(self) -> None:
        if self._dispatch_api("POST"):
            return
        self.send_error(404)

    def do_PUT(self) -> None:
        if self._dispatch_api("PUT"):
            return
        self.send_error(404)

    def do_DELETE(self) -> None:
        if self._dispatch_api("DELETE"):
            return
        self.send_error(404)


def main() -> None:
    from handlers import recover_generate_on_startup
    from store import applications_path, profile_path

    recover_generate_on_startup()

    if hasattr(sys.stderr, "reconfigure"):
        try:
            sys.stderr.reconfigure(encoding="utf-8", errors="replace")
            sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        except (OSError, ValueError):
            pass

    server = HTTPServer((HOST, PORT), JoblicationHandler)
    print(f"Joblication UI -> http://{HOST}:{PORT}")
    print(f"Frontend     -> {FRONTEND_DIR}")
    print(f"Applications -> {applications_path()}")
    print(f"Profile      -> {profile_path()}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopped.")
        server.server_close()


if __name__ == "__main__":
    main()
