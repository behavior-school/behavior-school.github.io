# Behavior School Agent Guide

Behavior School is a static-exported Next.js 16 App Router site focused on practical psychology, neuroscience, behavioral science, learning, habits, cognition, persuasion, and human behavior.

## Read these skills before changing the project

- `.agents/skills/site-maintenance/SKILL.md` — architecture, change workflow, static-export rules
- `.agents/skills/book-content/SKILL.md` — book data, scientific writing, learning design
- `.agents/skills/book-visuals/SKILL.md` — SVG, Mermaid, posters and visual grammar
- `.agents/skills/book-seo/SKILL.md` — metadata, structured data, canonicals, internal linking
- `.agents/skills/book-publishing/SKILL.md` — hourly five-book publishing contract

Supporting documents:
- `docs/ARCHITECTURE.md`
- `docs/BOOK_ENGINE.md`
- `docs/SEO_PLAYBOOK.md`
- `docs/HOURLY_PUBLISHING.md`
- `docs/CONTENT_PIPELINE.md`
- `docs/CONTRIBUTING.md`

## Non-negotiable Next.js rules

This project is intentionally maintained against the installed version of Next.js.

- Do **not** put `"use client"` on page or layout files.
- Client behavior belongs in `app/components/`.
- Export page metadata whenever the route supports it.
- Export structured JSON-LD from relevant pages.
- Preserve `output: "export"` compatibility.
- Prefer repository abstractions and reusable components over page-specific duplication.

## Book system

The book system is data-first:

```text
content/
  books.ts                  foundational books
  manipulation-books.ts     manipulation / persuasion books
  generated-books.ts        automated publishing output
  book-learning-lab.ts      neuroscience + learning-lab content
  book-publishing-queue.ts  hourly editorial backlog
  book-catalog.ts           composition layer

lib/
  book-types.ts             canonical content contracts
  book-repository.ts        data access seam

app/components/
  BookLibrary.tsx
  BookLearningLab.tsx
  BookArtifacts.tsx
  BookPoster.tsx
  MermaidDiagram.tsx
  MarkdownRenderer.tsx
```

A future CMS/database should replace the repository layer, not the page UI.

## Publishing and deployment

Normal deployment:

`main push → GitHub Actions → bun install → next build → upload Pages artifact → GitHub Pages`

Never report deployment success from a queued, pending, cancelled, or failed run. Inspect the workflow and job logs.

## Content standard

The site is people-first. Automated books must add real explanatory value instead of producing thin keyword-targeted summaries. Original wording, accurate metadata, clear uncertainty, visual explanation, and actionable learning matter more than raw page count.

## Existing important rule

Read the installed Next.js documentation in `node_modules/next/dist/docs/` when framework behavior is uncertain.
