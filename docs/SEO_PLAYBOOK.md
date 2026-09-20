# Behavior School SEO Playbook

## SEO philosophy

Optimize for readers first and search systems second.

Google's current guidance emphasizes helpful, reliable, people-first content and warns against creating large amounts of automated material primarily to attract search traffic. The hourly system therefore has a quality gate: a batch should be skipped or repaired when it would be thin.

References:
- https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- https://developers.google.com/search/docs/fundamentals/ai-optimization-guide

## Canonicals

Book pages use:

`https://behavior-school.github.io/books/<slug>`

Canonical URLs should stay stable. Google treats canonical declarations as a strong signal, but may select another canonical when duplicate or conflicting signals exist.

References:
- https://developers.google.com/search/docs/crawling-indexing/canonicalization
- https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls

## Sitemap and robots

The project generates:

- `/sitemap.xml`
- `/robots.txt`

The sitemap is built from the book repository and article content so new pages enter the sitemap automatically. Google recommends absolute canonical URLs in sitemaps.

References:
- https://developers.google.com/search/docs/crawling-indexing/sitemaps
- https://developers.google.com/search/docs/crawling-indexing/robots/intro
- https://nextjs.org/learn/seo/xml-sitemaps
- https://nextjs.org/learn/seo/robots-txt

## Metadata

Each public book page should have:
- unique title
- useful description
- canonical URL
- Open Graph metadata
- social preview image
- semantic heading hierarchy
- accurate alt text

Next.js provides both metadata exports and file-based metadata routes for robots/sitemaps.

Reference:
- https://nextjs.org/docs/app/getting-started/metadata-and-og-images

## Structured data

Book pages emit JSON-LD that matches visible content. Breadcrumbs help describe the page hierarchy.

Do not fabricate:
- ratings
- reviews
- quotations
- prices
- authors
- publication data

Validate structured data before depending on rich-result presentation.

Reference:
- https://developers.google.com/search/docs/appearance/structured-data/article

## Internal linking

The library links to each book via normal HTML anchors.
Book pages also link to adjacent books selected by category and shared tags.

This helps both users and crawlers discover related material.

## Images

Every book has a static poster asset in:

`public/book-posters/<slug>.svg`

The poster is lightweight, accessible, and independent of an image API. Each book page describes the poster with meaningful alt text.

## Faceted navigation

Book-library search/filter/sort controls are interface state, not separate editorial pages. Do not create indexable duplicate pages for every filter combination.

## Content quality checklist

Before release:
- Is the page substantially more useful than a generic AI summary?
- Does it include original synthesis and concrete examples?
- Does the title accurately describe the content?
- Is the canonical URL correct?
- Is the URL in the sitemap?
- Does the structured data match the visible page?
- Are related internal links present?
- Are images accessible and descriptive?
- Does the static build pass?
