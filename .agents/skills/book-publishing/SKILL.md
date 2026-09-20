# Behavior School — Hourly Publishing Skill

## Objective
Publish exactly 5 new, deeply researched books per run.

## Queue
Read `content/book-publishing-queue.ts`.
Before creating anything:
1. load all current catalog slugs
2. load the queue
3. skip anything already published
4. take the first 5 unpublished entries
5. if fewer than 5 remain, research additional candidate books that fit Behavior School

## One-hour batch contract
A batch is complete only when each of the 5 books has:
- detailed summary
- long-form deep dive
- 5+ takeaways
- 4+ action protocols
- neuroscience/behavior lens
- concrete story
- 3+ examples
- pattern detector
- field experiment
- visual model
- field artifact
- Mermaid diagram
- SVG poster
- SEO metadata
- internal links/category/tags
- original wording
- factual metadata checked against reliable sources

## Creative standard
Make each book feel like a mini-course, not a content stub.
Use:
- curiosity gaps
- surprising examples
- “predict before reveal” moments
- comparison tables where useful
- flowcharts
- loops
- decision trees
- scenario cards
- active-recall questions

Do not manufacture scientific certainty.

## Commit discipline
Prefer one clean commit per hourly batch:
`content: publish five new behavioral science book guides`

If a prior workflow is still running:
- inspect its state
- avoid destructive concurrent edits
- do not overwrite another agent's changes

## Deployment verification
After committing:
1. inspect GitHub Actions
2. wait for the deployment workflow state to become available
3. inspect failed jobs/logs if build fails
4. fix the root cause
5. verify the latest commit has a successful deployment

Never report success from a queued or failed workflow.

## Content integrity
- Never paste book text.
- Never fabricate quotations.
- Never fabricate page numbers.
- Cite/refer to external research only when actually checked.
- Keep manipulation content defense-oriented.
