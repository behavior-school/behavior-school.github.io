# Behavior School — Book Content Skill

## Purpose
Use this skill whenever creating, expanding, reviewing, or repairing a book page.

## Source of truth
Book content is data-first:
- `content/books.ts`: original core titles.
- `content/manipulation-books.ts`: manipulation, persuasion, deception, and defense titles.
- `content/generated-books.ts`: books added by the automated publishing pipeline.
- `content/book-learning-lab.ts`: reusable learning-lab data for existing titles.
- `content/book-catalog.ts`: composition layer. Do not duplicate content here unless it is metadata required for catalog behavior.
- `lib/book-types.ts`: canonical TypeScript contract.
- `lib/book-repository.ts`: retrieval seam used by UI.

## Required content contract
Each book must have:
1. slug, title, author, year, tagline
2. a substantial original summary
3. at least 5 key takeaways
4. at least 4 protocol/action steps
5. a long-form markdown deep dive
6. a learning lab with:
   - coreModel
   - brainLens
   - story
   - examples
   - watchFor
   - practice
7. a visual model and field artifact
8. a book-specific Mermaid concept map
9. a visual poster SVG
10. researched edition metadata when available

## Scientific writing
- Summarize ideas in original language; never reproduce long copyrighted passages.
- Separate what the author claims from established evidence.
- Do not turn neuroscience into brain-region mythology.
- Never claim “dopamine = pleasure” as a complete explanation.
- Avoid deterministic claims such as “this chemical causes this behavior.”
- Mark uncertainty when evidence is mixed.
- Use accessible examples without infantilizing the reader.
- For manipulation books, prioritize recognition, boundaries, ethical use, and defense.

## Learning design
Every book should follow:
**Hook → mental model → mechanism → concrete story → visual map → examples → failure modes → field exercise → retrieval check → recap.**

Use:
- contrast
- analogies
- prediction prompts
- concrete scenarios
- “spot the pattern” exercises
- active recall
- small experiments
- reflection questions
- spaced-review prompts

## Quality gate
Before publishing, verify:
- no empty sections
- no duplicate paragraphs
- no unsupported neuroscience claims
- no accidental diagnosis of readers or public figures
- examples are understandable without the book
- visuals match the written model
- internal links are present
- metadata matches the actual book
