import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Brain, Clock, Cpu, Eye, HeartHandshake, Scale, Sparkles } from "lucide-react";
import { getAllArticles } from "../../lib/content";

export const metadata: Metadata = {
  title: "Behavior School Blog — Practical Psychology & Neuroscience Guides",
  description:
    "Original, research-informed field guides on habits, attention, decision-making, learning, neuroscience, and human behavior.",
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
  const articles = [...getAllArticles()].sort((a, b) => (a.date < b.date ? 1 : -1));

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

      <main className="mx-auto w-full max-w-7xl px-3 pb-28 pt-[calc(var(--app-header-height)+18px)] sm:px-6 lg:px-8 lg:pb-20">
        <section className="border-b border-[var(--border)] pb-10 sm:pb-12">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--muted)] px-3 py-1.5 text-[10px] font-semibold text-[var(--primary)]">
              <BookOpen className="h-3.5 w-3.5" />
              {articles.length} field guides
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
              Research → mental model → practice
            </span>
          </div>

          <div className="mt-5 grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end">
            <div>
              <h1 className="max-w-5xl text-4xl font-extrabold leading-[.98] tracking-[-0.05em] text-[var(--foreground)] sm:text-5xl lg:text-6xl">
                Practical Psychology, <span className="text-[var(--primary)]">Explained.</span>
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-[var(--muted-foreground)] sm:text-lg sm:leading-8">
                Field guides that turn behavioral science, psychology, and neuroscience into concrete mental models, experiments, and questions you can use in real life.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)]/60 p-4 sm:p-5">
              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--primary)]">How to use the library</div>
              <div className="mt-3 space-y-2 text-xs leading-5 text-[var(--muted-foreground)]">
                <p><strong className="text-[var(--foreground)]">Read:</strong> understand the mechanism.</p>
                <p><strong className="text-[var(--foreground)]">Sketch:</strong> reconstruct it visually.</p>
                <p><strong className="text-[var(--foreground)]">Apply:</strong> test it against context.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((post) => {
            const Icon = iconByCategory[post.category] || BookOpen;
            return (
              <article
                key={post.slug}
                className="group overflow-hidden rounded-[1.4rem] border border-[var(--border)] bg-[var(--card)] transition duration-200 hover:-translate-y-1 hover:border-[var(--primary)]/45"
              >
                <Link href={"/blog/" + post.slug} className="block">
                  <div className="relative aspect-[16/8] overflow-hidden bg-[var(--muted)]">
                    <Image
                      src="/og-image.png"
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover opacity-90 transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 rounded-full border border-white/15 bg-black/35 px-2.5 py-1 text-[9px] font-semibold text-white backdrop-blur-md">
                      {post.category}
                    </div>
                  </div>
                </Link>

                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-1 font-mono text-[9px] text-[var(--muted-foreground)]">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                    <span className="font-mono text-[9px] text-[var(--muted-foreground)]">{post.date}</span>
                  </div>

                  <h2 className="mt-3 text-base font-bold leading-5 text-[var(--foreground)] transition-colors group-hover:text-[var(--primary)] sm:text-lg">
                    <Link href={"/blog/" + post.slug}>{post.title}</Link>
                  </h2>
                  <p className="mt-2.5 line-clamp-4 text-xs leading-5.5 text-[var(--muted-foreground)] sm:text-sm sm:leading-6">
                    {post.excerpt}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-[var(--border)] pt-4">
                    <div className="grid h-9 w-9 place-items-center rounded-xl border border-[var(--border)] bg-[var(--muted)] text-[var(--primary)]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[var(--primary)]">
                      Read guide <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </main>
    </>
  );
}
