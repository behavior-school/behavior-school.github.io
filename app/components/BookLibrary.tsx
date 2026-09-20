"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Search,
  SlidersHorizontal,
  Sparkles,
  X,
} from "lucide-react";
import type { BookCatalogItem } from "../../content/book-catalog";

const PAGE_SIZE = 9;
const MANIPULATION_CATEGORIES = new Set([
  "Power & Manipulation",
  "Human Nature",
  "Influence & Attraction",
  "Relationships",
  "Manipulation Defense",
  "Deception",
  "Persuasion",
  "Mass Persuasion",
  "Workplace Manipulation",
  "Psychopathy",
]);

interface BookLibraryProps {
  books: BookCatalogItem[];
}

function initials(title: string) {
  return title
    .split(/\s+/)
    .slice(0, 3)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export default function BookLibrary({ books }: BookLibraryProps) {
  const categories = useMemo(
    () => Array.from(new Set(books.map((book) => book.category))).sort(),
    [books]
  );

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState<"featured" | "newest" | "title">("featured");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setQuery(params.get("q") ?? "");
    setCategory(params.get("category") ?? "All");
    const requestedSort = params.get("sort");
    if (requestedSort === "newest" || requestedSort === "title") setSort(requestedSort);
    const requestedPage = Number(params.get("page"));
    if (Number.isInteger(requestedPage) && requestedPage > 0) setPage(requestedPage);
  }, []);

  const syncUrl = (nextQuery: string, nextCategory: string, nextSort: string, nextPage: number) => {
    const params = new URLSearchParams();
    if (nextQuery.trim()) params.set("q", nextQuery.trim());
    if (nextCategory !== "All") params.set("category", nextCategory);
    if (nextSort !== "featured") params.set("sort", nextSort);
    if (nextPage > 1) params.set("page", String(nextPage));
    const queryString = params.toString();
    window.history.replaceState({}, "", queryString ? `/books?${queryString}` : "/books");
  };

  const filteredBooks = useMemo(() => {
    const q = query.toLowerCase().trim();

    return [...books]
      .filter((book) => {
        const categoryMatches = category === "All" || book.category === category;
        if (!categoryMatches) return false;
        if (!q) return true;

        const haystack = [
          book.title,
          book.author,
          book.category,
          book.tagline,
          book.excerpt,
          ...book.tags,
        ]
          .join(" ")
          .toLowerCase();

        return haystack.includes(q);
      })
      .sort((a, b) => {
        if (sort === "newest") return Number(b.year) - Number(a.year);
        if (sort === "title") return a.title.localeCompare(b.title);
        return Number(b.featured) - Number(a.featured) || Number(b.year) - Number(a.year);
      });
  }, [books, category, query, sort]);

  const totalPages = Math.max(1, Math.ceil(filteredBooks.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const visibleBooks = filteredBooks.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  useEffect(() => {
    if (page !== safePage) {
      setPage(safePage);
      syncUrl(query, category, sort, safePage);
    }
  }, [page, safePage]); // eslint-disable-line react-hooks/exhaustive-deps

  const updateFilters = (nextQuery: string, nextCategory: string, nextSort: typeof sort, nextPage = 1) => {
    setQuery(nextQuery);
    setCategory(nextCategory);
    setSort(nextSort);
    setPage(nextPage);
    syncUrl(nextQuery, nextCategory, nextSort, nextPage);
  };

  const clearFilters = () => updateFilters("", "All", "featured", 1);

  const manipulationCount = books.filter((book) => MANIPULATION_CATEGORIES.has(book.category)).length;
  const isManipulationShelf = MANIPULATION_CATEGORIES.has(category);

  return (
    <section className="space-y-8">
      <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-4 sm:p-6 shadow-sm">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto_auto] lg:items-center">
          <label className="relative block">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted-foreground)]" />
            <input
              value={query}
              onChange={(event) => updateFilters(event.target.value, category, sort, 1)}
              placeholder="Search books, authors, ideas, tags..."
              className="w-full rounded-2xl border border-[var(--border)] bg-[var(--background)] py-3 pl-11 pr-4 text-sm text-[var(--foreground)] outline-none ring-0 transition focus:border-[var(--primary)]"
              aria-label="Search book summaries"
            />
          </label>

          <div className="flex items-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--background)] px-3">
            <SlidersHorizontal className="h-4 w-4 text-[var(--muted-foreground)]" />
            <select
              value={sort}
              onChange={(event) => updateFilters(query, category, event.target.value as typeof sort, 1)}
              className="bg-transparent py-3 text-sm text-[var(--foreground)] outline-none"
              aria-label="Sort books"
            >
              <option value="featured">Featured first</option>
              <option value="newest">Newest first</option>
              <option value="title">A–Z</option>
            </select>
          </div>

          <button
            type="button"
            onClick={() =>
              updateFilters(query, isManipulationShelf ? "All" : "Power & Manipulation", sort, 1)
            }
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[var(--primary)]/30 bg-[var(--muted)] px-4 py-3 text-sm font-bold text-[var(--foreground)] transition hover:border-[var(--primary)]"
          >
            <Sparkles className="h-4 w-4 text-[var(--primary)]" />
            Manipulation shelf
            <span className="rounded-full bg-[var(--card)] px-2 py-0.5 text-[10px] text-[var(--primary)]">
              {manipulationCount}
            </span>
          </button>
        </div>

        <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
          <button
            type="button"
            onClick={() => updateFilters(query, "All", sort, 1)}
            className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
              category === "All"
                ? "border-[var(--primary)] bg-[var(--primary)] text-[var(--primary-foreground)]"
                : "border-[var(--border)] bg-[var(--background)] text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
            }`}
          >
            All books
          </button>
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => updateFilters(query, item, sort, 1)}
              className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                category === item
                  ? "border-[var(--primary)] bg-[var(--primary)] text-[var(--primary-foreground)]"
                  : "border-[var(--border)] bg-[var(--background)] text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
              }`}
            >
              {item}
            </button>
          ))}
          {(query || category !== "All" || sort !== "featured") && (
            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex shrink-0 items-center gap-1 rounded-full border border-dashed border-[var(--border)] px-3 py-1.5 text-xs font-semibold text-[var(--muted-foreground)]"
            >
              <X className="h-3 w-3" />
              Clear
            </button>
          )}
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-[var(--border)] pt-4 text-xs text-[var(--muted-foreground)]">
          <span>
            Showing <strong className="text-[var(--foreground)]">{filteredBooks.length}</strong> matching books
          </span>
          <span>
            Page <strong className="text-[var(--foreground)]">{safePage}</strong> of{" "}
            <strong className="text-[var(--foreground)]">{totalPages}</strong>
          </span>
        </div>
      </div>

      {visibleBooks.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleBooks.map((book) => (
            <article
              key={book.slug}
              className="group overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/50 hover:shadow-xl"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[var(--muted)]">
                <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_top_left,var(--primary)_0%,transparent_55%)] opacity-20" />
                <div className="absolute inset-0 grid place-items-center px-10">
                  <div className="text-center">
                    <div className="mx-auto mb-4 grid h-20 w-20 place-items-center rounded-2xl border border-[var(--border)] bg-[var(--card)]/90 text-2xl font-black text-[var(--primary)] shadow-lg">
                      {initials(book.title)}
                    </div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--primary)]">
                      {book.category}
                    </p>
                    <h2 className="mt-2 text-xl font-extrabold tracking-tight text-[var(--foreground)]">
                      {book.title}
                    </h2>
                    <p className="mt-1 text-xs text-[var(--muted-foreground)]">{book.author}</p>
                  </div>
                </div>
                <img
                  src={book.amazonImageUrl}
                  alt={`${book.title} by ${book.author} book cover`}
                  loading="lazy"
                  className="relative z-10 h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  onError={(event) => {
                    event.currentTarget.style.opacity = "0";
                  }}
                />
                <div className="absolute left-4 top-4 z-20 flex items-center gap-2">
                  <span className="rounded-full bg-[var(--card)]/95 px-2.5 py-1 text-[10px] font-bold text-[var(--primary)] shadow">
                    {book.year}
                  </span>
                  {book.featured && (
                    <span className="rounded-full bg-[var(--primary)] px-2.5 py-1 text-[10px] font-bold text-[var(--primary-foreground)] shadow">
                      Featured
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-4 p-6">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--primary)]">
                    {book.category}
                  </p>
                  <h2 className="mt-1 text-xl font-extrabold leading-tight text-[var(--foreground)]">
                    {book.title}
                  </h2>
                  <p className="mt-1 text-xs font-semibold text-[var(--muted-foreground)]">
                    {book.author}
                  </p>
                </div>

                <p className="text-sm leading-relaxed text-[var(--muted-foreground)] line-clamp-4">
                  {book.excerpt}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {book.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--border)] bg-[var(--muted)] px-2.5 py-1 text-[10px] text-[var(--muted-foreground)]"
                    >
                      #{tag.replace(/\s+/g, "-")}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-[var(--border)] pt-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--muted-foreground)]">
                    <BookOpen className="h-3.5 w-3.5" />
                    Full guide
                  </span>
                  <Link
                    href={`/books/${book.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--primary)] hover:opacity-80"
                  >
                    Read summary
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-[var(--border)] bg-[var(--card)] p-12 text-center">
          <BookOpen className="mx-auto h-8 w-8 text-[var(--primary)]" />
          <h2 className="mt-4 text-xl font-bold text-[var(--foreground)]">No books found</h2>
          <p className="mt-2 text-sm text-[var(--muted-foreground)]">
            Try a broader search or clear the current filters.
          </p>
        </div>
      )}

      <nav className="flex items-center justify-between rounded-3xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-sm" aria-label="Book pagination">
        <button
          type="button"
          disabled={safePage <= 1}
          onClick={() => updateFilters(query, category, sort, safePage - 1)}
          className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] px-3 py-2 text-xs font-bold text-[var(--foreground)] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </button>

        <div className="flex items-center gap-1.5">
          {Array.from({ length: totalPages }, (_, index) => index + 1).slice(
            Math.max(0, safePage - 3),
            Math.min(totalPages, safePage + 2)
          ).map((pageNumber) => (
            <button
              key={pageNumber}
              type="button"
              onClick={() => updateFilters(query, category, sort, pageNumber)}
              className={`grid h-9 min-w-9 place-items-center rounded-xl px-2 text-xs font-bold transition ${
                pageNumber === safePage
                  ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
                  : "border border-[var(--border)] text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
              }`}
              aria-current={pageNumber === safePage ? "page" : undefined}
            >
              {pageNumber}
            </button>
          ))}
        </div>

        <button
          type="button"
          disabled={safePage >= totalPages}
          onClick={() => updateFilters(query, category, sort, safePage + 1)}
          className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] px-3 py-2 text-xs font-bold text-[var(--foreground)] disabled:cursor-not-allowed disabled:opacity-40"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </button>
      </nav>
    </section>
  );
}
