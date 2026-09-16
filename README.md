# darshankansara-site

Personal site + portfolio. Built with [Astro](https://astro.build).

## Run locally

```powershell
cd c:\src\darshankansara-site
npm install
npm run dev
```

Then open http://localhost:4321

## Edit content

| What to change | Where |
|---|---|
| Your name, tagline, email, social links | `src/config.ts` |
| Homepage About section | `src/pages/index.astro` |
| Existing projects | `src/content/projects/*.md` |
| Add a new project | Create a new `.md` in `src/content/projects/` |
| "Now" page (what you're working on this month) | `src/pages/now.astro` |
| Colors / styles | `src/layouts/Base.astro` (bottom `<style is:global>` block) |

## Deploy

Production is served by Cloudflare using the static assets configuration in `wrangler.jsonc`.

```powershell
npm ci
npm run build
npx wrangler deploy
```

Run the production build locally before deploying. Deployments publish `dist/` to the existing `darshankansara-site` Worker and custom domain configuration.

## Build

```powershell
npm run build       # outputs static site to ./dist
npm run preview     # preview the production build locally
```

Output is fully static and is currently deployed with Cloudflare.
