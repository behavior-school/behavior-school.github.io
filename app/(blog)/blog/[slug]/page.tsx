import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { YoutubeIcon } from "../../../components/Icons";
import MarkdownRenderer from "../../../components/MarkdownRenderer";
import ProcrastinationSimulator from "../../../components/ProcrastinationSimulator";
import { getAllArticles, getArticleBySlug } from "../../../lib/content";

export function generateStaticParams() {
  return getAllArticles().map((art) => ({ slug: art.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article Not Found | Behavior School" };
  const url = "https://behavior-school.github.io/blog/" + article.slug;
  return {
    title: article.title + " | Behavior School Blog",
    description: article.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url,
      siteName: "Behavior School",
      type: "article",
      publishedTime: article.date,
      modifiedTime: article.revisionDate || article.date,
      images: [{ url: "https://behavior-school.github.io/og-image.png", width: 1200, height: 630, alt: "Behavior School" }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: ["https://behavior-school.github.io/og-image.png"],
    },
    robots: { index: true, follow: true },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getAllArticles()
    .filter((candidate) => candidate.slug !== article.slug)
    .sort((a, b) => {
      const aScore = a.category === article.category ? 2 : 0;
      const bScore = b.category === article.category ? 2 : 0;
      return bScore - aScore || (a.date < b.date ? 1 : -1);
    })
    .slice(0, 3);

  const url = "https://behavior-school.github.io/blog/" + article.slug;
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.excerpt,
    "datePublished": article.date,
    "dateModified": article.revisionDate || article.date,
    "author": { "@type": "Organization", "name": "Behavior School", "url": "https://behavior-school.github.io/about" },
    "publisher": {
      "@type": "Organization",
      "name": "Behavior School",
      "url": "https://behavior-school.github.io",
      "logo": { "@type": "ImageObject", "url": "https://behavior-school.github.io/logo.svg" },
    },
    "mainEntityOfPage": { "@type": "WebPage", "@id": url },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <main className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /><span>Back to All Field Guides</span>
        </Link>

        <article className="bg-[var(--card)] p-8 sm:p-12 rounded-3xl border border-[var(--border)] shadow-2xl">
          <header className="space-y-7">
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[var(--muted)] text-[var(--primary)] border border-[var(--border)]">{article.category}</span>
              <span className="text-[var(--muted-foreground)]">•</span>
              <time dateTime={article.date} className="text-[var(--muted-foreground)]">{article.date}</time>
              <span className="text-[var(--muted-foreground)]">•</span>
              <span className="text-[var(--muted-foreground)] flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{article.readTime}</span>
            </div>
            <div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-[var(--foreground)] tracking-tight leading-tight">{article.title}</h1>
              <p className="text-base sm:text-lg leading-relaxed text-[var(--muted-foreground)] mt-5">{article.excerpt}</p>
            </div>
          </header>

          <section aria-label="Article takeaways" className="p-6 rounded-2xl bg-[var(--muted)] border border-[var(--border)] mt-9">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--primary)] mb-3 flex items-center gap-2"><Sparkles className="w-4 h-4" />Key takeaways</h2>
            <ul className="space-y-2 text-xs sm:text-sm text-[var(--foreground)]">
              {article.keyTakeaways.map((takeaway, i) => (
                <li key={i} className="flex items-start gap-2.5"><CheckCircle2 className="w-4 h-4 text-[var(--primary)] shrink-0 mt-0.5" /><span>{takeaway}</span></li>
              ))}
            </ul>
          </section>

          {article.hasProcrastinationSimulator && <ProcrastinationSimulator />}

          <div className="mt-10"><MarkdownRenderer content={article.content} /></div>

          <section className="mt-12 p-6 rounded-2xl bg-[var(--muted)] border border-[var(--border)]">
            <h2 className="text-sm font-bold text-[var(--foreground)] mb-2">Research & educational note</h2>
            <p className="text-xs sm:text-sm leading-relaxed text-[var(--muted-foreground)]">
              Behavior School summarizes research and behavioral science for educational use.
              Findings are simplified for readability, and individual behavior can have many causes.
              This article is not a diagnosis or a substitute for professional medical or psychological care.
              See our <Link href="/editorial-policy" className="text-[var(--primary)] hover:underline">editorial policy</Link> for our approach to evidence, corrections, and updates.
            </p>
          </section>

          {related.length > 0 && (
            <section className="mt-12">
              <div className="flex items-end justify-between gap-4 mb-5">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Continue learning</p>
                  <h2 className="text-xl font-bold text-[var(--foreground)]">Related field guides</h2>
                </div>
                <Link href="/blog" className="text-xs font-bold text-[var(--primary)] hover:underline">All guides</Link>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {related.map((item) => (
                  <Link key={item.slug} href={"/blog/" + item.slug} className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-5 hover:border-[var(--primary)]/50 transition-all group">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--primary)] mb-2">{item.category}</p>
                    <h3 className="text-sm font-bold text-[var(--foreground)] leading-snug group-hover:text-[var(--primary)] transition-colors">{item.title}</h3>
                    <span className="inline-flex items-center gap-1 mt-4 text-[11px] font-bold text-[var(--muted-foreground)]">Read next <ArrowRight className="w-3.5 h-3.5" /></span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <section className="mt-12 p-6 rounded-2xl bg-[var(--muted)] border border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Recommended Video Lesson</span>
              <h2 className="text-base font-bold text-[var(--foreground)] mt-0.5">{article.recommendedVideo}</h2>
            </div>
            <a href="https://www.youtube.com/@behavior-school" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shrink-0">
              <YoutubeIcon className="w-4 h-4 fill-current" /><span>Watch on YouTube</span>
            </a>
          </section>
        </article>
      </main>
    </>
  );
}
