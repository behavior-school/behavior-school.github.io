# Behavior School — Book SEO Skill

## Goal
Optimize discoverability without turning the site into search-engine-first content.

Google's guidance favors helpful, reliable, people-first material. SEO should clarify a page, not inflate it.

## Page-level requirements
Every book page should have:
- unique title
- unique description
- canonical URL
- Open Graph title/description/image
- Twitter/social card metadata
- Book + WebPage/Breadcrumb JSON-LD where appropriate
- a single clear H1
- descriptive H2/H3 structure
- crawlable internal links
- descriptive image alt text
- noindex only for genuinely non-search pages

## Keyword strategy
Use naturally occurring terms around:
- <book title>
- author
- book summary
- key ideas
- psychology / behavioral science
- relevant topic/category
- practical application

Do not stuff keyword lists into prose.

## Search architecture
- Canonical URL: `https://behavior-school.github.io/books/<slug>`
- Sitemap: `/sitemap.xml`
- Robots: `/robots.txt`
- Filter/query UI is navigation UX, not a separate SEO landing page.
- Keep canonical URLs clean and stable.
- Prefer descriptive slugs.

## Structured data
Use JSON-LD that accurately describes visible content.
For books, use `Book`.
For page context, use `WebPage` and `BreadcrumbList` when appropriate.
Never invent ratings, reviews, prices, authorship, or publication data.

## Image SEO
- Book poster filenames use the slug.
- Alt text describes the actual visual.
- Use stable static assets.
- Keep SVGs lightweight.
- Use a meaningful OG image.

## Internal linking
Book pages should link to:
- the library
- 2–4 related books
- relevant articles/resources when available

The library should expose all published books through normal HTML links.

## SEO QA
Before release:
1. inspect title and canonical
2. inspect JSON-LD
3. inspect sitemap membership
4. verify robots does not block public content
5. verify no duplicate page title patterns
6. verify headings are semantic
7. verify links are crawlable
8. build static export
