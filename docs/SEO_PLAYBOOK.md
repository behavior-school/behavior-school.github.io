# Behavior School SEO Playbook

## SEO philosophy
Optimize for humans first and search systems second. Google explicitly recommends helpful, reliable, people-first content and warns against mass automated content created primarily for search rankings. citeturn797400search5turn797400search6

## Canonicals
Each book URL should be canonical at:
`https://behavior-school.github.io/books/<slug>`

Canonical URLs are a strong signal when paired with clean URLs and sitemap inclusion, although Google can choose a different canonical. citeturn797400search0turn797400search3

## Sitemap
The site uses a generated sitemap so newly published books automatically enter `/sitemap.xml`. Google recommends keeping sitemaps current and using absolute canonical URLs. citeturn797400search1turn797400search4

## Robots
`/robots.txt` permits public crawling and points crawlers to the sitemap.

## Metadata
Next.js supports both config-based and file-based metadata, including titles, descriptions, robots, sitemap, and social metadata. citeturn817612search0turn817612search6

## Structured data
Book pages emit accurate JSON-LD. Google recommends adding structured data that matches visible content and validating it before relying on it in search. citeturn817612search5

## Content discoverability
Use:
- descriptive titles
- meaningful H1/H2s
- crawlable links
- related-book links
- image alt text
- sitemap coverage
- consistent canonical URLs

Avoid:
- keyword stuffing
- fake reviews
- fake ratings
- copied book text
- thin AI summaries
- thousands of near-duplicate pages

## Query/filter pages
The library's client-side search/filter state is treated as interface state rather than a set of SEO landing pages. The canonical library URL remains `/books`.
