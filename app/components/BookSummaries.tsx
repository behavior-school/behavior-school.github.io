import React from "react";
import { booksCatalog } from "../../content/book-catalog";
import Link from "next/link";
import { BookOpen, CheckCircle2, ArrowRight } from "lucide-react";

export default function BookSummaries() {
  const books = booksCatalog.slice(0, 6);
 return (
    <section id="books" className="py-20 border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--muted)] border border-[var(--border)] text-xs font-semibold text-[var(--primary)] mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Curated Behavioral Science Library</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight mb-3">
            Essential Book Summaries
          </h2>
          <p className="text-xs sm:text-sm text-[var(--muted-foreground)] max-w-xl mx-auto">
            Deep-dive breakdowns of seminal behavioral science and productivity literature. Click any book to read its dedicated guide page.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book, idx) => (
            <Link
              key={idx}
              href={`/books/${book.slug}`}
              className="bg-[var(--card)] p-6 rounded-3xl border border-[var(--border)] hover:border-[var(--primary)]/50 transition-all flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[var(--muted)] text-[var(--primary)] border border-[var(--border)]">
                    {book.year} Edition
                  </span>
                  <span className="text-xs font-semibold text-[var(--muted-foreground)] group-hover:text-[var(--primary)] transition-colors inline-flex items-center gap-1">
                    <span>Read Page</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[var(--foreground)] mb-0.5 group-hover:text-[var(--primary)] transition-colors">
                  {book.title}
                </h3>
                <span className="text-xs font-medium text-[var(--muted-foreground)] block mb-3">
                  by {book.author}
                </span>

                <p className="text-xs text-[var(--foreground)] font-semibold mb-3 leading-relaxed">
                  "{book.tagline}"
                </p>

                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed mb-4">
                  {book.excerpt}
                </p>
              </div>

              {/* Key Rules List */}
              <div className="pt-4 border-t border-[var(--border)] space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--primary)] block">
                  Core Framework Takeaways:
                </span>
                <ul className="space-y-1.5 text-[11px] text-[var(--muted-foreground)]">
                  {book.keyTakeaways.map((rule, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--primary)] shrink-0 mt-0.5" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
