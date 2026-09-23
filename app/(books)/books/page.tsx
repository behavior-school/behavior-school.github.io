import type { Metadata } from "next";
import BookLibrary from "../../components/BookLibrary";
import { getBookCatalog } from "../../../lib/book-repository";

export const metadata: Metadata = {
  title: "Behavioral Science Book Summaries | Behavior School",
  description:
    "Explore detailed book guides on habits, cognition, focus, decision-making, persuasion, relationships, and human behavior with visual models and practical exercises.",
  alternates: {
    canonical: "https://behavior-school.github.io/books",
  },
  openGraph: {
    title: "Behavioral Science Book Summaries | Behavior School",
    description:
      "Read long-form behavioral science book guides with visual frameworks, neuroscience context, practical protocols, and interactive learning tools.",
    url: "https://behavior-school.github.io/books",
    siteName: "Behavior School",
    type: "website",
    images: [
      {
        url: "https://behavior-school.github.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Behavior School book library",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Behavioral Science Book Summaries | Behavior School",
    description:
      "Long-form behavioral science book guides with visual models, neuroscience context, and practical exercises.",
    images: ["https://behavior-school.github.io/og-image.png"],
  },
};

export default function BooksIndexPage() {
  const books = getBookCatalog();

  const jsonLdCollection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Behavioral Science Book Summaries",
    url: "https://behavior-school.github.io/books",
    description: metadata.description,
    isPartOf: {
      "@type": "WebSite",
      name: "Behavior School",
      url: "https://behavior-school.github.io",
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: books.length,
      itemListElement: books.map((book, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://behavior-school.github.io/books/${book.slug}`,
        name: book.title,
      })),
    },
  };

  const popularSlugs = [
    "atomic-habits",
    "thinking-fast-and-slow",
    "deep-work",
    "influence",
    "48-laws-of-power",
    "why-we-sleep",
    "mindset",
    "laws-of-human-nature",
    "predictably-irrational",
    "crucial-conversations",
  ];

  const popularBooks = popularSlugs
    .map((slug) => books.find((book) => book.slug === slug))
    .filter(Boolean);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCollection) }}
      />

      <main className="pt-28 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto mb-10 max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--muted)] px-3 py-1 text-xs font-semibold text-[var(--primary)]">
              <BookOpenIcon />
              <span>{books.length} guides · behavioral science library</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-[var(--foreground)] sm:text-6xl">
              Understand the book.
              <span className="block text-[var(--primary)]">See the behavior.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[var(--muted-foreground)] sm:text-lg">
              Long-form summaries in plain language, connected to behavioral mechanisms, neuroscience context,
              visual maps, field exercises, and related ideas you can keep exploring.
            </p>
          </header>

          <section aria-labelledby="popular-books-title" className="mb-12">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-mono uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                  Popular starting points
                </p>
                <h2 id="popular-books-title" className="mt-2 text-2xl font-extrabold tracking-tight text-[var(--foreground)] sm:text-3xl">
                  10 books worth starting with
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">
                  A curated set of widely discussed behavioral-science and self-development titles already available as full Behavior School guides.
                </p>
              </div>
              <span className="w-fit rounded-full border border-[var(--border)] bg-[var(--muted)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--primary)]">
                10 featured guides
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {popularBooks.map((book) => book ? (
                <Link
                  key={book.slug}
                  href={`/books/${book.slug}`}
                  className="group min-w-0 rounded-2xl border border-[var(--border)] bg-[var(--card)]/30 p-4 transition-all hover:-translate-y-0.5 hover:border-[var(--primary)]/50 hover:bg-[var(--muted)]/20"
                >
                  <div className="relative mb-4 aspect-[3/4] overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--muted)]">
                    <img
                      src={book.coverImageUrl ?? book.amazonImageUrl}
                      alt={`${book.title} by ${book.author} book cover`}
                      loading="lazy"
                      width={360}
                      height={480}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                    <div className="absolute inset-x-2 bottom-2 rounded-lg bg-[var(--background)]/90 px-2 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-[var(--primary)] backdrop-blur">
                      {book.category}
                    </div>
                  </div>
                  <h3 className="line-clamp-2 text-sm font-extrabold leading-snug text-[var(--foreground)] group-hover:text-[var(--primary)]">
                    {book.title}
                  </h3>
                  <p className="mt-1 line-clamp-1 text-[10px] font-semibold text-[var(--muted-foreground)]">
                    {book.author}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-[10px] font-bold text-[var(--primary)]">
                    Read guide <span aria-hidden="true">→</span>
                  </span>
                </Link>
              ) : null)}
            </div>
          </section>

          <BookLibrary books={books} />
        </div>
      </main>
    </>
  );
}

function BookOpenIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" aria-hidden="true" fill="none">
      <path d="M4 4.5c2.3-.8 4.3-.5 6 1v10c-1.7-1.5-3.7-1.8-6-1V4.5Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 4.5c-2.3-.8-4.3-.5-6 1v10c1.7-1.5 3.7-1.8 6-1V4.5Z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
