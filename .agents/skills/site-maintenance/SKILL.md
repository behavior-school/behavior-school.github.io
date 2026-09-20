# Behavior School — Site Maintenance Skill

## Architecture
This is a Next.js App Router site exported statically for GitHub Pages.

Primary layers:
- `app/`: routes and UI
- `app/components/`: reusable UI
- `content/`: editorial data
- `lib/`: domain/repository/type logic
- `public/`: static assets
- `.github/workflows/`: deployment automation
- `docs/`: human/agent documentation

## Non-negotiables
- Do not add `"use client"` to page/layout files.
- Client components belong in `app/components`.
- Prefer data-driven reusable components over duplicated page markup.
- Preserve static export compatibility.
- Keep content separate from presentation.
- Update types before adding new content shapes.
- Avoid unnecessary runtime APIs because the site must export to static HTML.

## Change workflow
1. inspect the relevant existing files
2. identify the canonical source of truth
3. make the smallest coherent architecture change
4. build
5. inspect GitHub Actions
6. repair failures from logs
7. re-run/verify

## Common commands
```bash
bun install
bun run dev
bun run build
bun run lint
```

## Deployment
Pushes to `main` trigger:
`checkout → Bun → install → next build → upload Pages artifact → deploy Pages`.

## When unsure
Prefer:
- repository patterns over invented patterns
- official Next.js docs for framework behavior
- official Google Search docs for SEO behavior
- small composable components
- explicit documentation after architecture changes
