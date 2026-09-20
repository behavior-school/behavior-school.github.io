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

const PAGE_SIZE_OPTIONS = [9, 12, 18];
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

type SortMode = "featured" | "newest" | "oldest" | "title" | "author";

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
  const [shelf, setShelf] = useState<"all" | "manipulation">("all");
  const [sort, setSort] = useState<SortMode>("featured");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setQuery(params.get("q") ?? "");
    setCategory(params.get("category") ?? "All");
    setShelf(params.get("shelf") === "manipulation" ? "manipulation" : "all");

    const requestedSort = params.get("sort");
    if (
      requestedSort === "newest" ||
      requestedSort === "oldest" ||
      requestedSort === "title" ||
      requestedSort === "author"
    ) {
      setSort(requestedSort);
    }

    const requestedPage = Number(params.get("page"));
    if (Number.isInteger(requestedPage) && requestedPage > 0) {
      setPage(requestedPage);
    }

    const requestedSize = Number(params.get("size"));
    if (PAGE_SIZE_OPTIONS.includes(requestedSize)) {
      setPageSize(requestedSize);
    }
  }, []);

  const syncUrl = (
    nextQuery: string,
    nextCategory: string,
    nextSort: SortMode,
    nextPage: number,
    nextPageSize: number,
    nextShelf: "all" | "manipulation" = shelf
  ) => {
    const params = new URLSearchParams();

    if (nextQuery.trim()) params.set("q", nextQuery.trim());
    if (nextCategory !== "All") params.set("category", nextCategory);
    if (nextShelf === "manipulation") params.set("shelf", "manipulation");
    if (nextSort !== "featured") params.set("sort", nextSort);
    if (nextPage > 1) params.set("page", String(nextPage));
    if (nextPageSize !== 12) params.set("size", String(nextPageSize));

    const queryString = params.toString();
    window.history.replaceState({}, "", queryString ? `/books?${queryString}` : "/books");
  };

  const filteredBooks = useMemo(() => {
    const q = query.toLowerCase().trim();

    return [...books]
      .filter((book) => {
        if (category !== "All" && book.category !== category) return false;
        if (shelf === "manipulation" && !MANIPULATION_CATEGORIES.has(book.category)) return false;
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
        if (sort === "oldest") return Number(a.year) - Number(b.year);
        if (sort === "title") return a.title.localeCompare(b.title);
        if (sort === "author") return a.author.localeCompare(b.author);
        return Number(b.featured) - Number(a.featured) || Number(b.year) - Number(a.year);
      });
  }, [books, category, query, shelf, sort]);

  const totalPages = Math.max(1, Math.ceil(filteredBooks.length / pageSize));
  const safePage = Math.min(page, totalPages);
  const visibleBooks = filteredBooks.slice((safePage - 1) * pageSize, safePage * pageSize);

  useEffect(() => {
    if (page !== safePage) {
      setPage(safePage);
      syncUrl(query, category, sort, safePage, pageSize);
    }
  }, [page, safePage, query, category, sort, pageSize]); // eslint-disable-line react-hooks/exhaustive-deps

  const updateFilters = (
    nextQuery: string,
    nextCategory: string,
    nextSort: SortMode,
    nextPage = 1,
    nextPageSize = pageSize,
    nextShelf = shelf
  ) => {
    setQuery(nextQuery);
    setCategory(nextCategory);
    setShelf(nextShelf);
    setSort(nextSort);
    setPage(nextPage);
    setPageSize(nextPageSize);
    syncUrl(nextQuery, nextCategory, nextSort, nextPage, nextPageSize, nextShelf);
  };

  const clearFilters = () => updateFilters("", "All", "featured", 1, 12, "all");

  const manipulationCount = books.filter((book) => MANIPULATION_CATEGORIES.has(book.category)).length;
  const isManipulationShelf = shelf === "manipulation";
  const activeFilterCount =
    Number(Boolean(query.trim())) +
    Number(category !== "All") +
    Number(shelf === "manipulation") +
    Number(sort !== "featured");

  return (
    <section className="space-y-7" aria-labelledby="book-library-title">
      <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-4 shadow-sm sm:p-6">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--primary)]">
              Library controls
            </div>
            <h2 id="book-library-title" className="mt-1 text-xl font-extrabold tracking-tight text-[var(--foreground)]">
              Search, filter, sort and read at your pace.
            </h2>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-[var(--muted-foreground)]">
            <span className="rounded-full border border-[var(--border)] px-2.5 py-1">
              {books.length} books
            </span>
            {activeFilterCount > 0 && (
              <span className="rounded-full bg-[var(--muted)] px-2.5 py-1 font-semibold text-[var(--primary)]">
                {activeFilterCount} filter{activeFilterCount === 1 ? "" : "s"} active
              </span>
            )}
          </div>
        </div>

        <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_220px_220px_auto]">
          <label className="relative block">
            <span className="sr-only">Search books</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted-foreground)]" />
            <input
              value={query}
              onChange={(event) => updateFilters(event.target.value, category, sort, 1)}
              placeholder="Search titles, authors, topics, tags..."
              className="w-full rounded-2xl border border-[var(--border)] bg-[var(--background)] py-3.5 pl-11 pr-10 text-sm text-[var(--foreground)] outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/15"
              aria-label="Search book summaries"
            />
            {query && (
              <button
                type="button"
                onClick={() => updateFilters("", category, sort, 1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </label>

          <label className="flex items-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--background)] px-3">
            <SlidersHorizontal className="h-4 w-4 text-[var(--muted-foreground)]" />
            <span className="sr-only">Sort books</span>
            <select
              value={sort}
              onChange={(event) => updateFilters(query, category, event.target.value as SortMode, 1)}
              className="min-w-0 flex-1 bg-transparent py-3.5 text-sm text-[var(--foreground)] outline-none"
              aria-label="Sort books"
            >
              <option value="featured">Featured first</option>
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
              <option value="title">Title A–Z</option>
              <option value="author">Author A–Z</option>
            </select>
          </label>

          <label className="flex items-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--background)] px-3">
            <span className="text-[11px] font-semibold text-[var(--muted-foreground)]">Show</span>
            <select
              value={pageSize}
              onChange={(event) => updateFilters(query, category, sort, 1, Number(event.target.value))}
              className="min-w-0 flex-1 bg-transparent py-3.5 text-sm text-[var(--foreground)] outline-none"
              aria-label="Books per page"
            >
              {PAGE_SIZE_OPTIONS.map((size) => (
                <option key={size} value={size}>
                  {size} / page
                </option>
              ))}
            </select>
          </label>

          <button
            type="button"
            onClick={() =>
              updateFilters(query, "All", sort, 1, pageSize, isManipulationShelf ? "all" : "manipulation")
            }
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[var(--primary)]/35 bg-[var(--muted)] px-4 py-3.5 text-sm font-bold text-[var(--foreground)] transition hover:border-[var(--primary)] hover:-translate-y-0.5"
          >
            <Sparkles className="h-4 w-4 text-[var(--primary)]" />
            <span>Manipulation shelf</span>
            <span className="rounded-full bg-[var(--card)] px-2 py-0.5 text-[10px] text-[var(--primary)]">
              {manipulationCount}
            </span>
          </button>
        </div>

        <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-1">
          <button
            type="button"
            onClick={() => updateFilters(query, "All", sort, 1)}
            className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold transition ${category === "All" ? "border-[var(--primary)] bg-[var(--primary)] text-[var(--primary-foreground)]" : "border-[var(--border)] bg-[var(--background)] text-[var(--muted-foreground)] hover:text-[var(--foreground)]"}`}
          >
            All books
          </button>
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => updateFilters(query, item, sort, 1)}
              className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold transition ${category === item ? "border-[var(--primary)] bg-[var(--primary)] text-[var(--primary-foreground)]" : "border-[var(--border)] bg-[var(--background)] text-[var(--muted-foreground)] hover:text-[var(--foreground)]"}`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-[var(--border)] pt-4">
          <p className="text-xs text-[var(--muted-foreground)]">
            Showing <strong className="text-[var(--foreground)]">{visibleBooks.length}</strong> of{" "}
            <strong className="text-[var(--foreground)]">{filteredBooks.length}</strong> matching books
          </p>
          <div className="flex items-center gap-2">
            {(query || category !== "All" || shelf !== "all" || sort !== "featured") && (
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex items-center gap-1 rounded-full border border-dashed border-[var(--border)] px-3 py-1.5 text-xs font-semibold text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
              >
                <X className="h-3 w-3" />
                Reset
              </button>
            )}
            <span className="rounded-full bg-[var(--muted)] px-3 py-1.5 text-xs font-semibold text-[var(--muted-foreground)]">
              Page {safePage} / {totalPages}
            </span>
          </div>
        </div>
      </div>

      {visibleBooks.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleBooks.map((book) => (
            <article
              key={book.slug}
              className="group overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-[var(--card)] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/45 hover:shadow-xl"
            >
              <Link href={`/books/${book.slug}`} className="block">
                <div className="relative aspect-[2/3] overflow-hidden bg-[linear-gradient(135deg,var(--muted),var(--card))]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,var(--primary)_0%,transparent_46%)] opacity-15" />

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

                  <div className="absolute inset-0 grid place-items-center p-4 sm:p-5">
                    <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[1.25rem] border border-[var(--border)]/70 bg-black/5 shadow-inner">
                      <div className="absolute grid place-items-center text-center opacity-80">
                        <div className="mx-auto mb-3 grid h-16 w-16 place-items-center rounded-2xl border border-[var(--border)] bg-[var(--card)]/95 text-xl font-black text-[var(--primary)] shadow">
                          {initials(book.title)}
                        </div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--primary)]">{book.category}</p>
                      </div>

                      <img
                        src={book.coverImageUrl ?? book.amazonImageUrl}
                        alt={`${book.title} by ${book.author} book cover`}
                        loading="lazy"
                        width={500}
                        height={750}
                        className="relative z-10 h-full w-full object-contain p-1 transition duration-500 group-hover:scale-[1.01]"
                        onError={(event) => {
                          event.currentTarget.style.opacity = "0";
                        }}
                      />
                    </div>
                  </div>
                </div>
              </Link>

              <div className="space-y-4 p-5 sm:p-6">
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--primary)]">
                      {book.category}
                    </p>
                    <span className="text-[10px] text-[var(--muted-foreground)]">Full guide</span>
                  </div>
                  <h2 className="mt-1.5 text-xl font-extrabold leading-tight text-[var(--foreground)]">
                    {book.title}
                  </h2>
                  <p className="mt-1 text-xs font-semibold text-[var(--muted-foreground)]">{book.author}</p>
                </div>

                <p className="line-clamp-4 text-sm leading-relaxed text-[var(--muted-foreground)]">
                  {book.excerpt}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {book.tags.slice(0, 4).map((tag) => (
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
                    Visual + deep guide
                  </span>
                  <Link
                    href={`/books/${book.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--primary)] hover:opacity-80"
                  >
                    Read guide
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
            Try another title, author or topic, or reset the filters.
          </p>
        </div>
      )}

      <nav className="flex flex-col gap-4 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between" aria-label="Book pagination">
        <button
          type="button"
          disabled={safePage <= 1}
          onClick={() => updateFilters(query, category, sort, safePage - 1)}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] px-4 py-2.5 text-xs font-bold text-[var(--foreground)] transition hover:border-[var(--primary)] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </button>

        <div className="flex items-center justify-center gap-1.5">
          {Array.from({ length: totalPages }, (_, index) => index + 1)
            .slice(Math.max(0, safePage - 3), Math.min(totalPages, safePage + 2))
            .map((pageNumber) => (
              <button
                key={pageNumber}
                type="button"
                onClick={() => updateFilters(query, category, sort, pageNumber)}
                className={`grid h-9 min-w-9 place-items-center rounded-xl px-2 text-xs font-bold transition ${pageNumber === safePage ? "bg-[var(--primary)] text-[var(--primary-foreground)]" : "border border-[var(--border)] text-[var(--muted-foreground)] hover:text-[var(--foreground)]"}`}
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
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] px-4 py-2.5 text-xs font-bold text-[var(--foreground)] transition hover:border-[var(--primary)] disabled:cursor-not-allowed disabled:opacity-40"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </button>
      </nav>
    </section>
  );
}
