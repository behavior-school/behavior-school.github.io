"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, BookOpen, Search as SearchIcon, Wrench } from "lucide-react";

type Result = {
  type: "article" | "book" | "tool";
  title: string;
  description: string;
  href: string;
};

const results: Result[] = [
  {
    type: "tool",
    title: "Stimulation & Focus Environment Audit",
    description: "Reflect on screen-time, notification, and rapid-feed patterns that can add friction to sustained attention.",
    href: "/tools/dopamine-calculator",
  },
  {
    type: "tool",
    title: "2-Minute Habit Shrinker",
    description: "Turn a broad goal into a concrete next action.",
    href: "/tools/habit-shrinker",
  },
  {
    type: "tool",
    title: "Neuroscience Pomodoro & Ultradian Timer",
    description: "Run a focused work session with a simple timer interface.",
    href: "/tools/pomodoro-timer",
  },
  {
    type: "tool",
    title: "Habit Loop Friction Audit Tool",
    description: "Map cues, routines, rewards, and environmental friction.",
    href: "/tools/friction-audit",
  },
];

export default function SearchPageClient({
  articles,
  books,
}: {
  articles: Array<{ title: string; excerpt: string; slug: string; category: string }>;
  books: Array<{ title: string; summary: string; slug: string; category?: string }>;
}) {
  const [query, setQuery] = useState("");

  const indexed = useMemo<Result[]>(
    () => [
      ...articles.map((article) => ({
        type: "article" as const,
        title: article.title,
        description: article.excerpt,
        href: "/blog/" + article.slug,
      })),
      ...books.map((book) => ({
        type: "book" as const,
        title: book.title,
        description: book.summary,
        href: "/books/" + book.slug,
      })),
      ...results,
    ],
    [articles, books],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return indexed.slice(0, 12);
    return indexed
      .filter((item) => (item.title + " " + item.description).toLowerCase().includes(q))
      .slice(0, 30);
  }, [indexed, query]);

  return (
    <div className="mx-auto max-w-5xl">
      <label className="relative block">
        <span className="sr-only">Search Behavior School</span>
        <SearchIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--muted-foreground)]" />
        <input
          autoFocus
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search articles, books, or tools…"
          className="h-14 w-full rounded-2xl border border-[var(--border)] bg-[var(--card)] pl-12 pr-4 text-sm text-[var(--foreground)] shadow-sm outline-none ring-0 placeholder:text-[var(--muted-foreground)] focus:border-[var(--primary)]"
        />
      </label>

      <div className="mt-6 flex items-center justify-between gap-3 text-xs text-[var(--muted-foreground)]">
        <span>{query ? filtered.length + " result" + (filtered.length === 1 ? "" : "s") : "Explore the library"}</span>
        <span className="font-mono">articles · books · tools</span>
      </div>

      <div className="mt-4 grid gap-3">
        {filtered.map((item) => (
          <Link
            key={item.type + item.href}
            href={item.href}
            className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 transition hover:-translate-y-0.5 hover:border-[var(--primary)]/45"
          >
            <div className="flex items-start gap-4">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-[var(--border)] bg-[var(--muted)] text-[var(--primary)]">
                {item.type === "book" ? <BookOpen className="h-4 w-4" /> : item.type === "tool" ? <Wrench className="h-4 w-4" /> : <SearchIcon className="h-4 w-4" />}
              </div>
              <div className="min-w-0">
                <div className="text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--primary)]">{item.type}</div>
                <h2 className="mt-1 text-sm font-bold leading-5 text-[var(--foreground)] group-hover:text-[var(--primary)] sm:text-base">{item.title}</h2>
                <p className="mt-2 line-clamp-2 text-xs leading-5 text-[var(--muted-foreground)] sm:text-sm">{item.description}</p>
              </div>
              <ArrowRight className="ml-auto mt-1 h-4 w-4 shrink-0 text-[var(--muted-foreground)] transition-transform group-hover:translate-x-1 group-hover:text-[var(--primary)]" />
            </div>
          </Link>
        ))}

        {!filtered.length && (
          <div className="rounded-2xl border border-dashed border-[var(--border)] bg-[var(--muted)]/35 p-8 text-center">
            <h2 className="text-sm font-bold text-[var(--foreground)]">No matching material yet.</h2>
            <p className="mt-2 text-xs leading-5 text-[var(--muted-foreground)]">Try a broader phrase such as habits, attention, memory, persuasion, or decision-making.</p>
          </div>
        )}
      </div>
    </div>
  );
}
