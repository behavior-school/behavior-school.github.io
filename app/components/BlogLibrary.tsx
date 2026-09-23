"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Clock,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import type { Article } from "../lib/content";
import ArticleCover from "../components/ArticleCover";

const iconGlyphs: Record<string, string> = {
  "Habits & Behavior": "↻",
  "Behavior Change": "→",
  "Learning Science": "↗",
  "Attention & Focus": "◎",
  "Decision Making": "◇",
  "Cognitive Psychology": "⌁",
  "Behavioral Economics": "◫",
  Neuroscience: "◌",
  Psychology: "◉",
  "Social Neuroscience": "∞",
  "Mental Models": "△",
  "Positive Psychology": "✦",
};

export default function BlogLibrary({ articles }: { articles: Article[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [visible, setVisible] = useState(12);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(articles.map((article) => article.category))).sort()],
    [articles],
  );

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return articles.filter((article) => {
      const matchesCategory = category === "All" || article.category === category;
      if (!matchesCategory) return false;
      if (!needle) return true;
      return [
        article.title,
        article.excerpt,
        article.category,
        article.keyTakeaways.join(" "),
      ]
        .join(" ")
        .toLowerCase()
        .includes(needle);
    });
  }, [articles, category, query]);

  const featured = articles.slice(0, 5);
  const cards = filtered.slice(0, visible);

  return (
    <div className="mt-8">
      <section className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--card)] shadow-2xl">
        <div className="grid lg:grid-cols-[1.35fr_.65fr]">
          <Link
            href={"/blog/" + featured[0].slug}
            className="group relative min-h-[28rem] overflow-hidden border-b border-[var(--border)] p-6 sm:p-8 lg:min-h-[34rem] lg:border-b-0 lg:border-r"
          >
            <div className="absolute inset-0">
              <ArticleCover title={featured[0].title} category={featured[0].category} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent opacity-90" />
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                  <Sparkles className="h-3.5 w-3.5" />
                  Editor&apos;s starting point
                </span>
                <span className="rounded-full border border-white/15 bg-black/45 px-3 py-1.5 font-mono text-[10px] text-white/80 backdrop-blur-md">
                  {featured[0].readTime}
                </span>
              </div>
              <div className="max-w-3xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/65">
                  {featured[0].category}
                </p>
                <h2 className="mt-3 text-3xl font-extrabold leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl">
                  {featured[0].title}
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-white/78 sm:text-base sm:leading-7">
                  {featured[0].excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-black transition-transform group-hover:-translate-y-0.5">
                  Start reading <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </Link>

          <div className="grid sm:grid-cols-2 lg:grid-cols-1">
            {featured.slice(1, 5).map((article, index) => (
              <Link
                key={article.slug}
                href={"/blog/" + article.slug}
                className="group grid grid-cols-[5rem_1fr] gap-4 border-b border-[var(--border)] p-4 transition hover:bg-[var(--muted)]/40 last:border-b-0 sm:grid-cols-[5.5rem_1fr] lg:grid-cols-[6rem_1fr]"
              >
                <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--muted)]">
                  <ArticleCover title={article.title} category={article.category} />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.14em] text-[var(--muted-foreground)]">
                    <span>{String(index + 2).padStart(2, "0")}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="mt-2 line-clamp-2 text-sm font-extrabold leading-5 text-[var(--foreground)] group-hover:text-[var(--primary)]">
                    {article.title}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-[11px] leading-5 text-[var(--muted-foreground)]">
                    {article.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-sm sm:p-5" aria-label="Blog filters">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <label className="flex min-w-0 items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--muted)]/40 px-4 py-3 lg:max-w-xl lg:flex-1">
            <Search className="h-4 w-4 shrink-0 text-[var(--muted-foreground)]" />
            <input
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setVisible(12);
              }}
              placeholder="Search habits, attention, decisions, learning..."
              className="min-w-0 flex-1 bg-transparent text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted-foreground)]"
              aria-label="Search field guides"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="rounded-md p-1 text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </label>

          <div className="app-horizontal-scroll flex gap-2 overflow-x-auto pb-1">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setCategory(item);
                  setVisible(12);
                }}
                className={
                  "shrink-0 rounded-full border px-3 py-2 text-[10px] font-bold transition " +
                  (category === item
                    ? "border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)]"
                    : "border-[var(--border)] bg-[var(--card)] text-[var(--muted-foreground)] hover:text-[var(--foreground)]")
                }
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-6 flex items-center justify-between gap-3">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
            The field-guide shelf
          </p>
          <p className="mt-1 text-xs text-[var(--muted-foreground)]">
            {filtered.length} guides match your current view.
          </p>
        </div>
        <span className="inline-flex items-center gap-2 text-[10px] font-mono text-[var(--muted-foreground)]">
          <span className="text-base text-[var(--primary)]">{iconGlyphs[category] || "◉"}</span>
          READ · TEST · REBUILD
        </span>
      </div>

      {cards.length > 0 ? (
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cards.map((post, index) => (
            <article
              key={post.slug}
              className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <Link href={"/blog/" + post.slug} className="block">
                <div className="relative">
                  <ArticleCover title={post.title} category={post.category} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 translate-y-4 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="line-clamp-3 rounded-xl border border-white/10 bg-black/65 p-3 text-[11px] leading-5 text-white backdrop-blur">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </Link>

              <div className="p-4 sm:p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[var(--primary)]">
                    {post.category}
                  </span>
                  <span className="inline-flex items-center gap-1 font-mono text-[9px] text-[var(--muted-foreground)]">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="mt-2 line-clamp-3 text-base font-extrabold leading-5.5 tracking-[-0.02em] text-[var(--foreground)]">
                  <Link href={"/blog/" + post.slug}>{post.title}</Link>
                </h3>
                <p className="mt-2 line-clamp-3 text-[11px] leading-5 text-[var(--muted-foreground)]">
                  {post.excerpt}
                </p>

                <div className="mt-4 border-t border-[var(--border)] pt-3">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-[9px] text-[var(--muted-foreground)]">
                      {post.date}
                    </span>
                    <Link
                      href={"/blog/" + post.slug}
                      className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[var(--primary)]"
                    >
                      Read <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                  <div className="mt-3 flex items-center gap-1.5">
                    {post.keyTakeaways.slice(0, 3).map((takeaway) => (
                      <span
                        key={takeaway}
                        title={takeaway}
                        className="h-1.5 flex-1 rounded-full bg-[var(--muted)]"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <span className="absolute right-3 top-3 rounded-full border border-white/15 bg-black/50 px-2 py-1 font-mono text-[9px] text-white/85 backdrop-blur">
                {String(index + 1).padStart(2, "0")}
              </span>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-2xl border border-dashed border-[var(--border)] bg-[var(--card)] p-10 text-center">
          <BookOpen className="mx-auto h-8 w-8 text-[var(--primary)]" />
          <h2 className="mt-4 text-lg font-extrabold text-[var(--foreground)]">No guide matches that search.</h2>
          <p className="mt-2 text-sm text-[var(--muted-foreground)]">Try a broader topic or clear the filter.</p>
        </div>
      )}

      {visible < filtered.length && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setVisible((current) => current + 12)}
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--card)] px-5 py-3 text-xs font-bold text-[var(--foreground)] shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--primary)]"
          >
            Load more guides <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}
