import type { Metadata } from "next";
import BookLibrary from "../../components/BookLibrary";
import { getBookCatalog } from "../../../lib/book-repository";

export const metadata: Metadata = {
  title: "Behavioral Science Book Summaries & Manipulation Psychology Library | Behavior School",
  description:
    "Explore detailed behavioral science, persuasion, manipulation-defense, cognition, habits, decision-making, and psychology book summaries with visual frameworks and practical artifacts.",
  openGraph: {
    title: "Behavior School Book Library",
    description:
      "A searchable library of behavioral science and manipulation psychology book summaries, frameworks, visualizations, and practical artifacts.",
    url: "https://behavior-school.github.io/books",
    siteName: "Behavior School",
    type: "website",
  },
};

export default function BooksIndexPage() {
  const books = getBookCatalog();

  const jsonLdBooks = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Behavior School Book Library",
    url: "https://behavior-school.github.io/books",
    description: metadata.description,
    numberOfItems: books.length,
    hasPart: books.map((book) => ({
      "@type": "Book",
      name: book.title,
      author: { "@type": "Person", name: book.author },
      datePublished: book.year,
      url: `https://behavior-school.github.io/books/${book.slug}`,
      image: book.amazonImageUrl,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBooks) }}
      />

      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto mb-12 max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--muted)] px-3 py-1 text-xs font-semibold text-[var(--primary)]">
              <span>Curated Behavioral Science Library</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-[var(--foreground)] sm:text-6xl">
              Read the book.
              <span className="block text-[var(--primary)]">See the behavior.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[var(--muted-foreground)] sm:text-lg">
              Long-form summaries in simple language, with mental models, visual maps, practical
              worksheets, and a dedicated shelf for manipulation, persuasion, and defense.
            </p>
          </header>

          <BookLibrary books={books} />
        </div>
      </main>
    </>
  );
}
