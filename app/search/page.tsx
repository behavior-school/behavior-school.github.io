import type { Metadata } from "next";
import { getAllArticles } from "../lib/content";
import { getBookCatalog } from "../../lib/book-repository";
import SearchPageClient from "../components/SearchPageClient";

export const metadata: Metadata = {
  title: "Search Behavior School",
  description: "Search Behavior School articles, book guides, and interactive tools.",
  alternates: { canonical: "https://behavior-school.github.io/search" },
};

export default function SearchPage() {
  const articles = getAllArticles().map((article) => ({
    title: article.title,
    excerpt: article.excerpt,
    slug: article.slug,
    category: article.category,
  }));

  const books = getBookCatalog().map((book) => ({
    title: book.title,
    summary: book.summary,
    slug: book.slug,
    category: book.category,
  }));

  return (
    <main className="px-4 pb-28 pt-[calc(var(--app-header-height)+24px)] sm:px-6 lg:px-8">
      <header className="mx-auto max-w-5xl pb-8">
        <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--primary)]">Search</div>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-[var(--foreground)] sm:text-5xl">Find something worth learning.</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted-foreground)] sm:text-base">
          Search across field guides, book summaries, and practical tools without leaving the learning flow.
        </p>
      </header>
      <SearchPageClient articles={articles} books={books} />
    </main>
  );
}
