import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Brain, FlaskConical, Wrench } from "lucide-react";
import { getAllArticles } from "../../lib/content";

export const metadata: Metadata = {
  title: "Learning Resources | Behavior School",
  description: "A structured hub for Behavior School psychology articles, learning tools, quizzes, videos, and editorial standards.",
  alternates: { canonical: "https://behavior-school.github.io/resources" },
  robots: { index: true, follow: true },
};

export default function ResourcesPage() {
  const articles = [...getAllArticles()].sort((a, b) => (a.date < b.date ? 1 : -1));

  const cards = [
    ["/blog", "Field Guides", "Long-form explanations of habits, attention, learning, decision-making, neuroscience, and human behavior.", BookOpen],
    ["/quiz", "Quizzes", "Test whether you can retrieve and apply ideas rather than only recognize them.", Brain],
    ["/tools", "Interactive Tools", "Use small experiments and audits to turn concepts into practical reflection.", Wrench],
    ["/editorial-policy", "Research Standards", "Understand how Behavior School researches, simplifies, corrects, and updates its educational content.", FlaskConical],
  ] as const;

  return (
    <main className="pt-32 pb-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mb-14">
        <p className="text-xs uppercase tracking-widest font-bold text-[var(--primary)] mb-3">Behavior School Resources</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--foreground)] tracking-tight mb-5">Learn by reading, testing, and practicing.</h1>
        <p className="text-base sm:text-lg text-[var(--muted-foreground)] leading-relaxed">
          Use the field guides to build a mental model, then reinforce it with quizzes,
          tools, book summaries, and the channel's video lessons.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-4 mb-14">
        {cards.map(([href, title, desc, Icon]) => (
          <Link key={href} href={href} className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 hover:border-[var(--primary)]/50 transition-all group">
            <Icon className="w-6 h-6 text-[var(--primary)] mb-5" />
            <h2 className="font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors">{title}</h2>
            <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">{desc}</p>
            <span className="inline-flex items-center gap-1 mt-5 text-xs font-bold text-[var(--primary)]">Open <ArrowRight className="w-3.5 h-3.5" /></span>
          </Link>
        ))}
      </div>

      <section className="border-t border-[var(--border)] pt-12">
        <div className="flex items-end justify-between gap-5 mb-7">
          <div>
            <p className="text-xs uppercase tracking-widest font-bold text-[var(--primary)] mb-2">Latest guides</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)]">Build the mental model first</h2>
          </div>
          <Link href="/blog" className="text-xs font-bold text-[var(--primary)] hover:underline">View all</Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.slice(0, 9).map((article) => (
            <Link
              key={article.slug}
              href={"/blog/" + article.slug}
              className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-5 hover:border-[var(--primary)]/50 transition-all group"
            >
              <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--primary)] mb-2">{article.category}</p>
              <h3 className="text-sm font-bold text-[var(--foreground)] leading-snug group-hover:text-[var(--primary)] transition-colors">{article.title}</h3>
              <p className="mt-3 text-xs text-[var(--muted-foreground)] leading-relaxed">{article.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
