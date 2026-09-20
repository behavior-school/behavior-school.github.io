import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Clock, ArrowRight, Brain, HeartHandshake, Eye, Cpu, Sparkles, Scale } from "lucide-react";
import { getAllArticles } from "../../../lib/content";

export const metadata: Metadata = {
  title: "Behavior School Blog — Practical Psychology & Neuroscience Guides",
  description: "Original, research-informed field guides on habits, attention, decision-making, learning, neuroscience, and human behavior.",
  alternates: { canonical: "https://behavior-school.github.io/blog" },
  openGraph: {
    title: "Behavior School Blog — Practical Psychology & Neuroscience",
    description: "Original, research-informed field guides on practical psychology and neuroscience.",
    url: "https://behavior-school.github.io/blog",
    siteName: "Behavior School",
    type: "website",
    images: [{ url: "https://behavior-school.github.io/og-image.png", width: 1200, height: 630, alt: "Behavior School" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Behavior School Blog",
    description: "Original, research-informed field guides on practical psychology and neuroscience.",
    images: ["https://behavior-school.github.io/og-image.png"],
  },
  robots: { index: true, follow: true },
};

const iconByCategory: Record<string, typeof Brain> = {
  "Social Neuroscience": HeartHandshake,
  Psychology: Brain,
  "Behavior Science": Eye,
  Neuroscience: Cpu,
  "Neuroscience Masterclass": Cpu,
  "Positive Psychology": Sparkles,
  "Habits & Discipline": Sparkles,
  "Habits & Behavior": Sparkles,
  "Behavior Change": Sparkles,
  "Cognitive Psychology": Brain,
  "Mental Models": Scale,
  "Behavioral Economics": Scale,
  "Learning Science": BookOpen,
  "Attention & Focus": Eye,
  "Decision Making": Scale,
};

export default function BlogIndexPage() {
  const articles = [...getAllArticles()].sort((a, b) => a.date < b.date ? 1 : -1);
  const jsonLdBlog = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Behavior School Blog",
    "url": "https://behavior-school.github.io/blog",
    "description": "Original, research-informed articles and field guides on psychology, neuroscience, habits, learning, attention, and decision-making.",
    "blogPost": articles.map((post) => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "url": "https://behavior-school.github.io/blog/" + post.slug,
      "datePublished": post.date,
      "dateModified": post.revisionDate || post.date,
      "articleSection": post.category,
      "description": post.excerpt,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBlog) }} />
      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--muted)] border border-[var(--border)] text-xs font-semibold text-[var(--primary)] mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{articles.length} original field guides</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[var(--foreground)] tracking-tight mb-5">
            Practical Psychology <span className="text-[var(--primary)]">Explained</span>
          </h1>
          <p className="text-base sm:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Long-form educational guides that turn research, behavioral science, and neuroscience into useful mental models for everyday life.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-7">
            <Link href="/resources" className="text-xs font-bold text-[var(--primary)] hover:underline">Learning resources</Link>
            <span className="text-[var(--border)]">•</span>
            <Link href="/editorial-policy" className="text-xs font-bold text-[var(--primary)] hover:underline">Editorial policy</Link>
            <span className="text-[var(--border)]">•</span>
            <Link href="/about" className="text-xs font-bold text-[var(--primary)] hover:underline">About Behavior School</Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((post) => {
            const Icon = iconByCategory[post.category] || BookOpen;
            return (
              <article key={post.slug} className="bg-[var(--card)] p-7 rounded-3xl border border-[var(--border)] flex flex-col justify-between hover:border-[var(--primary)]/50 transition-all group">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[var(--muted)] text-[var(--primary)] border border-[var(--border)]">{post.category}</span>
                    <span className="text-xs font-mono text-[var(--muted-foreground)] flex items-center gap-1 shrink-0"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-[var(--muted)] border border-[var(--border)] flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-[var(--primary-foreground)] transition-colors mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-lg font-bold text-[var(--foreground)] mb-3 group-hover:text-[var(--primary)] transition-colors leading-snug">
                    <Link href={"/blog/" + post.slug}>{post.title}</Link>
                  </h2>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{post.excerpt}</p>
                </div>
                <div className="pt-5 mt-6 border-t border-[var(--border)] flex items-center justify-between text-xs">
                  <span className="text-[var(--muted-foreground)] font-mono">{post.date}</span>
                  <Link href={"/blog/" + post.slug} className="inline-flex items-center gap-1.5 font-bold text-[var(--primary)] hover:opacity-80 transition-opacity">
                    Read guide <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </main>
    </>
  );
}
