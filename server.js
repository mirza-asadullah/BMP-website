import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const PORT = process.env.PORT || 5010;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const roots = [path.join(__dirname, 'dist'), path.join(__dirname, 'public')];

const mime = {
	'.html': 'text/html; charset=utf-8',
	'.js': 'application/javascript; charset=utf-8',
	'.mjs': 'application/javascript; charset=utf-8',
	'.css': 'text/css; charset=utf-8',
	'.json': 'application/json; charset=utf-8',
	'.png': 'image/png',
	'.jpg': 'image/jpeg',
	'.jpeg': 'image/jpeg',
	'.svg': 'image/svg+xml',
	'.gif': 'image/gif',
	'.webp': 'image/webp',
	'.ico': 'image/x-icon',
	'.mp4': 'video/mp4',
	'.woff2': 'font/woff2',
	'.woff': 'font/woff',
	'.ttf': 'font/ttf'
};

async function fileExists(p) {
	try {
		const s = await fs.promises.stat(p);
		return s.isFile();
	} catch (e) {
		return false;
	}
}

async function findFile(urlPath) {
	// normalize and prevent path traversal
	const safePath = path.normalize(decodeURIComponent(urlPath)).replace(/^\//, '');

	// try exact file first
	for (const root of roots) {
		const candidate = path.join(root, safePath);
		if (await fileExists(candidate)) return candidate;
	}

	// if request looks like a directory, try index.html
	if (urlPath.endsWith('/')) {
		for (const root of roots) {
			const candidate = path.join(root, safePath, 'index.html');
			if (await fileExists(candidate)) return candidate;
		}
	}

	// SPA fallback: return index.html from first available root
	for (const root of roots) {
		const candidate = path.join(root, 'index.html');
		if (await fileExists(candidate)) return candidate;
	}

	return null;
}

const server = http.createServer(async (req, res) => {
	try {
		const urlPath = new URL(req.url, `http://${req.headers.host}`).pathname;
		const filePath = await findFile(urlPath);

		if (!filePath) {
			res.statusCode = 404;
			res.setHeader('Content-Type', 'text/plain; charset=utf-8');
			res.end('Not found');
			return;
		}

		const ext = path.extname(filePath).toLowerCase();
		const type = mime[ext] || 'application/octet-stream';
		res.setHeader('Content-Type', type);
		// set caching for static assets
		if (ext && ['.js', '.css', '.png', '.jpg', '.jpeg', '.webp', '.svg', '.woff2', '.woff', '.ttf'].includes(ext)) {
			res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
		} else {
			res.setHeader('Cache-Control', 'no-cache');
		}

		const stream = fs.createReadStream(filePath);
		stream.on('error', (err) => {
			res.statusCode = 500;
			res.end('Server error');
		});
		stream.pipe(res);
	} catch (err) {
		res.statusCode = 500;
		res.setHeader('Content-Type', 'text/plain; charset=utf-8');
		res.end('Internal server error');
	}
});

server.listen(PORT, () => {
	console.log(`Static server running on http://localhost:${PORT}`);
	console.log(`Serving from: ${roots.join(', ')}`);
});

// Graceful shutdown
process.on('SIGINT', () => process.exit());
process.on('SIGTERM', () => process.exit());
