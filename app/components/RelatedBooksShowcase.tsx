import Link from "next/link";
import type { BookCatalogItem } from "../../content/book-catalog";

function coverFor(book: BookCatalogItem) {
  return book.coverImageUrl || book.amazonImageUrl || "/book-posters/" + book.slug + ".svg";
}

export default function RelatedBooksShowcase({
  currentTitle,
  books,
}: {
  currentTitle: string;
  books: BookCatalogItem[];
}) {
  if (!books.length) return null;

  return (
    <section className="border-t border-[var(--border)] pt-10" aria-labelledby="related-reading">
      <div className="mb-8 max-w-3xl">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
            Continue reading
          </span>
          <span className="rounded-full border border-[var(--border)] bg-[var(--muted)] px-2.5 py-1 text-[10px] font-semibold text-[var(--muted-foreground)]">
            {books.length} related guides
          </span>
        </div>
        <h2
          id="related-reading"
          className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--foreground)] sm:text-4xl"
        >
          Don&apos;t stop at {currentTitle}.
        </h2>
        <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)] sm:text-base">
          Build a wider mental map by moving from one idea to its neighboring ideas: habits into
          motivation, focus into learning, decision-making into persuasion, and personal behavior into
          relationships. These guides are chosen from the existing Behavior School library using topic,
          category, and editorial discovery signals rather than a claimed market ranking.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books.map((book, index) => (
          <Link
            key={book.slug}
            href={"/books/" + book.slug}
            className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--foreground)]"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-[var(--muted)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={coverFor(book)}
                alt={book.title + " by " + book.author + " book cover"}
                loading={index < 4 ? "eager" : "lazy"}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]"
              />

              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3">
                <span className="rounded-full border border-white/20 bg-black/55 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {book.category && (
                  <span className="max-w-[70%] truncate rounded-full border border-white/20 bg-black/55 px-2 py-1 text-[9px] font-semibold text-white backdrop-blur-md">
                    {book.category}
                  </span>
                )}
              </div>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full border-t border-white/10 bg-black/80 p-4 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/65">
                  Quick read
                </div>
                <p className="mt-1 text-xs leading-5 text-white/90">{book.excerpt}</p>
              </div>
            </div>

            <div className="p-4">
              <p className="line-clamp-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--primary)]">
                {book.category}
              </p>
              <h3 className="mt-1.5 line-clamp-2 text-sm font-extrabold leading-5 text-[var(--foreground)]">
                {book.title}
              </h3>
              <p className="mt-1 line-clamp-1 text-[10px] font-medium text-[var(--muted-foreground)]">
                {book.author}
              </p>
              <p className="mt-2 line-clamp-2 text-[11px] leading-5 text-[var(--muted-foreground)] sm:hidden">
                {book.excerpt}
              </p>
              <div className="mt-3 flex items-center justify-between border-t border-[var(--border)] pt-3">
                <span className="text-[10px] font-semibold text-[var(--muted-foreground)]">
                  Visual + deep guide
                </span>
                <span className="text-[10px] font-bold text-[var(--primary)]">Read →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-dashed border-[var(--border)] bg-[var(--muted)]/40 p-5 sm:flex sm:items-center sm:justify-between sm:gap-6">
        <div>
          <p className="text-sm font-bold text-[var(--foreground)]">There is more beyond this shelf.</p>
          <p className="mt-1 text-xs leading-5 text-[var(--muted-foreground)]">
            Browse the full Behavior School collection to discover the rest of the library by topic,
            author, and reading path.
          </p>
        </div>
        <Link
          href="/books"
          className="mt-4 inline-flex w-fit shrink-0 items-center rounded-xl bg-[var(--foreground)] px-4 py-2.5 text-xs font-bold text-[var(--background)] transition hover:-translate-y-0.5 sm:mt-0"
        >
          Browse all books →
        </Link>
      </div>
    </section>
  );
}
