# Deploying to Hostinger (fix 404 chunks)

The site must serve a **single, full production build**. 404s for `_next/static/chunks/*` happen when the HTML references chunk filenames that don’t exist on the server (e.g. old deploy or partial upload).

## 1. Build locally (or in CI)

```bash
npm ci
npm run build
```

## 2. What to upload

Upload **everything** that the app needs:

- **`.next/`** – entire folder (build output, chunks, cache)
- **`public/`** – static assets
- **`package.json`** and **`package-lock.json`**
- **`node_modules/`** – or run `npm ci` / `npm install --production` on the server after uploading

Do **not** run `next dev` on the server. Use only the result of `next build`.

## 3. Run production on the server

Start the app with:

```bash
npm start
```

(or `node node_modules/next/dist/bin/next start`)

So the server is running **production** (`next start`), not dev (`next dev`).

## 4. Point the domain to this process

- If Hostinger uses **Node.js / “Application”**: set start command to `npm start` and ensure the document root or process serves the Next.js app (not static HTML from an old build).
- If you use **FTP/file manager**: upload the **entire** `.next` folder after every `npm run build`. Re-uploading only some files will cause 404s when chunk hashes change.

## 5. After each deploy

- Clear Hostinger cache (if available).
- Hard refresh or use an incognito window so the browser doesn’t use old HTML/chunks.

## Quick checklist

- [ ] `npm run build` completed successfully
- [ ] Full `.next/` and `public/` uploaded (or built on server)
- [ ] Server runs `npm start`, not `next dev`
- [ ] Cache cleared; tested in incognito

Once the live site serves the **same** build (same chunk hashes) as your uploaded files, the 404s for `_next/static/chunks/*` and the turbopack chunk will stop.
