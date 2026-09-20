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
