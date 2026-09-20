import type { BookDetail } from "../../lib/book-types";

export default function BookPoster({ book }: { book: BookDetail }) {
  const poster = "/book-posters/" + book.slug + ".svg";
  return (
    <figure className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--muted)] shadow-lg">
      <img
        src={poster}
        alt={book.title + " behavioral science poster — " + book.author}
        width={1200}
        height={1600}
        loading="eager"
        className="h-auto w-full object-cover"
      />
      <figcaption className="border-t border-[var(--border)] bg-[var(--card)] px-3 py-2 text-[10px] leading-4 text-[var(--muted-foreground)]">
        Visual learning poster · {book.category ?? "Behavioral Science"}
      </figcaption>
    </figure>
  );
}
