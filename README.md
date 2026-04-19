# CoopKeeper Marketing Site

The public marketing site for [CoopKeeper](https://www.coopkeeper.net/) — a calm little
dashboard for backyard chicken keepers. Vite + React + Tailwind CSS. Ships as a
static site.

This repo is **marketing only**. The actual product dashboard lives at
`https://www.coopkeeper.net/` and is maintained in a separate repo.

## Quickstart

```bash
npm install
npm run dev
```

Open http://localhost:5173 to view it.

## Scripts

| Command         | What it does                            |
| --------------- | --------------------------------------- |
| `npm run dev`   | Start local dev server with HMR         |
| `npm run build` | Production build to `dist/`             |
| `npm run preview` | Serve the built `dist/` locally       |

## Deploying to Render

Set up a new **Static Site** on Render pointing at this repo.

| Setting            | Value                 |
| ------------------ | --------------------- |
| Build Command      | `npm install && npm run build` |
| Publish Directory  | `dist`                |
| Node Version       | `20` (set via `NODE_VERSION` env var, or `.node-version`) |
| Auto-Deploy        | Yes, on push to `main` |

There are **no secrets or env vars required** to build or run the marketing
site.

### Notes

- Render's static site service serves with correct default headers. You don't
  need to tweak SPA rewrites — this is a single-page anchor-nav site, not a
  client-side router, so 404s should not be an issue.
- If you later add React Router or similar, add a Render rewrite rule:
  `/* -> /index.html` (Rewrite, 200).

## Where to change things

- **Dashboard URL** — every "Log in" / "Start free" button reads from a single
  constant: `src/config.js` → `DASHBOARD_URL`. Change it there and every link
  updates.
- **Copy** — every section is its own component under `src/components/`.
  Hero headline is in `src/components/Hero.jsx`. FAQ items are an array at the
  top of `src/components/FAQ.jsx`. Feature cards are an array at the top of
  `src/components/Features.jsx`.
- **Colors** — palette lives in `tailwind.config.js`. To swap the accent from
  terracotta to yolk-yellow, change the `terracotta.DEFAULT`, `.dark`, `.soft`,
  and `.ink` hex values (everything references these tokens, so one edit
  cascades).
- **Fonts** — loaded from Google Fonts in `index.html`. Swap Fraunces for a
  different display serif by updating the `<link>` and the `fontFamily.display`
  entry in `tailwind.config.js`.
- **Favicon / OG image** — `public/favicon.svg` and `public/og-image.svg`.
  Meta tags referencing them live in `index.html`.

## File structure

```
coopkeeper-marketing/
├── index.html                  # Meta, fonts, OG tags, favicon
├── package.json
├── vite.config.js
├── tailwind.config.js          # Palette, fonts, animations
├── postcss.config.js
├── public/
│   ├── favicon.svg
│   └── og-image.svg
├── preview.html                # Standalone preview (Tailwind CDN, no build)
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css               # Tailwind directives + small custom layer
    ├── config.js               # DASHBOARD_URL, SIGNUP_URL
    └── components/
        ├── Nav.jsx
        ├── Hero.jsx
        ├── DashboardMock.jsx
        ├── Problem.jsx
        ├── Features.jsx
        ├── HowItWorks.jsx
        ├── UseCases.jsx
        ├── FAQ.jsx
        ├── Footer.jsx
        ├── BrandMark.jsx
        └── ChickenIllustration.jsx
```

## Previewing without installing

Open `preview.html` directly in a browser. It uses Tailwind CDN and Google
Fonts, so it shows the real design immediately without `npm install`. Use this
for design tweaks before wiring up the Vite build.
