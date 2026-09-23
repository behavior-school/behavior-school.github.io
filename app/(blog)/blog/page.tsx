import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Sparkles } from "lucide-react";
import { getAllArticles } from "../../lib/content";
import BlogLibrary from "../../components/BlogLibrary";

export const metadata: Metadata = {
  title: "Behavior School Blog — Psychology, Behavior & Mental Models",
  description:
    "Explore 50+ detailed Behavior School field guides on habits, cognition, attention, decisions, learning, relationships, and everyday human behavior.",
  alternates: { canonical: "https://behavior-school.github.io/blog" },
  openGraph: {
    title: "Behavior School Blog — Psychology, Behavior & Mental Models",
    description:
      "Detailed, research-informed field guides that turn behavioral science into clearer ways to think, decide, learn, and act.",
    url: "https://behavior-school.github.io/blog",
    siteName: "Behavior School",
    type: "website",
    images: [
      {
        url: "https://behavior-school.github.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Behavior School Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Behavior School Blog",
    description:
      "Detailed behavioral science field guides for understanding everyday behavior.",
    images: ["https://behavior-school.github.io/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function BlogIndexPage() {
  const articles = [...getAllArticles()].sort((a, b) => (a.date < b.date ? 1 : -1));
  const categories = Array.from(new Set(articles.map((article) => article.category)));

  const jsonLdBlog = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Behavior School Blog",
    url: "https://behavior-school.github.io/blog",
    description:
      "Original, research-informed articles and field guides on psychology, neuroscience, habits, learning, attention, and decision-making.",
    blogPost: articles.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: "https://behavior-school.github.io/blog/" + post.slug,
      datePublished: post.date,
      dateModified: post.revisionDate || post.date,
      articleSection: post.category,
      description: post.excerpt,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBlog) }} />

      <main className="mx-auto w-full max-w-7xl px-3 pb-28 pt-[calc(var(--app-header-height)+18px)] sm:px-6 lg:px-8">
        <header className="border-b border-[var(--border)] pb-8 sm:pb-12">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--muted)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--primary)]">
                <BookOpen className="h-3.5 w-3.5" />
                {articles.length} field guides
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
                {categories.length} topics · original long-form essays
              </span>
            </div>

            <Link
              href="/books"
              className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[var(--muted-foreground)] transition hover:text-[var(--foreground)]"
            >
              Explore the book library <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-7 grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end">
            <div>
              <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
                <Sparkles className="h-3.5 w-3.5" />
                Research → mental model → real life
              </p>
              <h1 className="mt-4 max-w-5xl text-5xl font-extrabold leading-[0.92] tracking-[-0.055em] text-[var(--foreground)] sm:text-6xl lg:text-7xl">
                Read the idea.
                <span className="block text-[var(--primary)]">See yourself in it.</span>
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-[var(--muted-foreground)] sm:text-lg sm:leading-8">
                Deep, plain-language field guides for the moments when your behavior feels obvious
                until you stop and look closely. Learn the mechanism, test the model, and carry the
                useful part into real life.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm">
              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--primary)]">
                The reading ritual
              </div>
              <div className="mt-4 space-y-3">
                {[
                  ["01", "Notice", "Find the behavior you keep repeating."],
                  ["02", "Understand", "Learn the mechanism without the hype."],
                  ["03", "Experiment", "Change one variable and observe."],
                ].map(([step, title, text]) => (
                  <div key={step} className="grid grid-cols-[2rem_1fr] gap-3">
                    <span className="font-mono text-[9px] text-[var(--muted-foreground)]">{step}</span>
                    <div>
                      <p className="text-xs font-bold text-[var(--foreground)]">{title}</p>
                      <p className="mt-1 text-[11px] leading-5 text-[var(--muted-foreground)]">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] text-[var(--muted-foreground)]">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              Most guides take 8–13 minutes
            </span>
            <span>Built for reading, revisiting, and experimenting</span>
          </div>
        </header>

        <BlogLibrary articles={articles} />
      </main>
    </>
  );
}
