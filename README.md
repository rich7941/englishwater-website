# EnglishWater Website

This repository now serves a purely static version of the EnglishWater website. All pages live as HTML in the project root (with matching subdirectories), share a single `styles.css`, and reference no client-side bundles.

## Build & preview

```bash
pnpm install
pnpm build   # copies the static site into dist/public
pnpm preview # serves dist/public on http://localhost:4173
```

The `build` step simply copies the HTML, CSS, and image assets into `dist/public`, which is the folder you can upload to any static host (Netlify is configured to publish this path).

## Deploying to GitHub Pages

A GitHub Actions workflow is provided for GitHub Pages publishing. To enable it:

1. Ensure the default branch is `main` and Pages is set to build from GitHub Actions in repository settings.
2. Push to `main` (or trigger the workflow manually). The workflow installs dependencies with `pnpm`, runs `pnpm build`, uploads `dist/public` as the Pages artifact, and publishes it via `actions/deploy-pages`.
