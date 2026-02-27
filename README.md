# Kriti Chopra — Portfolio

A production-ready static portfolio site built with **React + TypeScript + Vite**.

🔗 **Live site:** https://KritiChopra-hub.github.io/portfolio/

---

## Tech Stack

| Tool | Version |
|------|---------|
| React | 18 |
| TypeScript | 5 |
| Vite | 5 |
| Recharts | 2 |

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (hot-reload at http://localhost:5173)
npm run dev
```

---

## Production Build

```bash
npm run build
# Output is written to dist/

# Preview the production build locally
npm run preview
```

> **Note:** The GitHub Pages base path (`/portfolio/`) is injected automatically by the
> deploy workflow via the `GITHUB_PAGES=true` environment variable.  
> Local dev always uses `/` so all assets load correctly.

---

## GitHub Pages Setup (one-time)

1. Push this repository to **github.com/KritiChopra-hub/portfolio** with the `main` branch.
2. In the repository, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. That's it — the workflow in `.github/workflows/deploy.yml` handles the rest on every push to `main`.

The live URL will be: `https://KritiChopra-hub.github.io/portfolio/`

---

## Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml        # CI/CD – builds & deploys to GitHub Pages
├── src/
│   ├── App.tsx               # Full portfolio component
│   ├── main.tsx              # React entry point
│   └── index.css             # Base reset styles
├── index.html
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── package.json
```

---

## License

Personal portfolio — all rights reserved.
