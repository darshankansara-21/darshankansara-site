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
| Future blog posts | `src/pages/writing/index.astro` (then add MDX/markdown files) |
| Colors / styles | `src/layouts/Base.astro` (bottom `<style is:global>` block) |

## Deploy (free)

1. Push this folder to a **new GitHub repo** (private or public — both work).
2. Sign in to [Vercel](https://vercel.com) with GitHub.
3. Click **Import Project**, pick the repo, accept defaults — Vercel detects Astro automatically.
4. You get a free `*.vercel.app` URL immediately.
5. Later: add a custom domain (e.g. `darshankansara.com`) in Vercel project settings.

## Build

```powershell
npm run build       # outputs static site to ./dist
npm run preview     # preview the production build locally
```

Output is fully static — works on Vercel, Netlify, Cloudflare Pages, GitHub Pages, or any static host.
