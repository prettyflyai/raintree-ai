# Raintree Systems — 2027 AI operating plan

Static site, no build step. Upload the folder to any static host (Netlify, Vercel, S3, GitHub Pages, IIS/nginx) and open index.html.

Serve over http(s); opening index.html directly from disk will not load the data modules.
Local preview: `npx serve .` or `python3 -m http.server` in this folder.
