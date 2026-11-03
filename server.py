"""AI Fashion Lab local preview server with genuine Python recommendation API.

Run: python3 server.py
Then: http://localhost:8000/#slide-7
"""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import json
import os
import sys

ROOT = Path(__file__).resolve().parent
sys.path.insert(0, str(ROOT / 'python'))
from recommender import recommend_fashion_look

class FashionHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def do_GET(self):
        # Never serve repository internals or local configuration files.
        from urllib.parse import unquote, urlsplit
        path = unquote(urlsplit(self.path).path)
        segments = [segment for segment in path.split('/') if segment]
        if any(segment.startswith('.') for segment in segments) or path in ('/server.py', '/render.yaml'):
            return self.respond(404, {'error': 'Not found'})
        if self.path.split('?', 1)[0] == '/api/health':
            return self.respond(200, {'ok': True, 'engine': 'local-python'})
        return super().do_GET()

    def do_POST(self):
        if self.path != '/api/recommend':
            return self.respond(404, {'error': 'Unknown endpoint'})
        try:
            length = int(self.headers.get('Content-Length', '0'))
            if not 0 < length <= 10000:
                return self.respond(400, {'error': 'Invalid request length'})
            payload = json.loads(self.rfile.read(length).decode('utf-8'))
            if not isinstance(payload, dict):
                return self.respond(400, {'error': 'Expected JSON object'})
            result = json.loads(recommend_fashion_look(json.dumps(payload, ensure_ascii=False)))
            return self.respond(200, result)
        except (ValueError, UnicodeError, json.JSONDecodeError) as exc:
            return self.respond(400, {'error': str(exc)})
        except Exception:
            return self.respond(500, {'error': 'Recommendation processing failed'})

    def respond(self, status, data):
        body = json.dumps(data, ensure_ascii=False).encode('utf-8')
        self.send_response(status)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', str(len(body)))
        self.send_header('Cache-Control', 'no-store')
        self.end_headers()
        self.wfile.write(body)

if __name__ == '__main__':
    os.chdir(ROOT)
    port = int(os.environ.get('PORT', '8000'))
    # Bind publicly only on the deployment host; keep local development on loopback.
    host = '0.0.0.0' if os.environ.get('PORT') else '127.0.0.1'
    server = ThreadingHTTPServer((host, port), FashionHandler)
    print(f'AI Fashion Lab serving at http://{host}:{port}/#slide-7', flush=True)
    print('Using real Python recommendations via /api/recommend', flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print('\nServer stopped.')
    finally:
        server.server_close()
