import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Sparkles, CheckCircle2 } from "lucide-react";
import { YoutubeIcon } from "../../../components/Icons";
import MarkdownRenderer from "../../../components/MarkdownRenderer";
import ProcrastinationSimulator from "../../../components/ProcrastinationSimulator";
import { getAllArticles, getArticleBySlug } from "../../../lib/content";

export function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((art) => ({ slug: art.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article Not Found | Behavior School" };

  return {
    title: `${article.title} | Behavior School Blog`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://behavior-school.github.io/blog/${article.slug}`,
      siteName: "Behavior School",
      type: "article",
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.excerpt,
    "datePublished": article.date,
    "author": {
      "@type": "Organization",
      "name": "Behavior School"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Behavior School",
      "logo": {
        "@type": "ImageObject",
        "url": "https://behavior-school.github.io/logo.svg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://behavior-school.github.io/blog/${article.slug}`
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />

      <main className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Field Guides</span>
        </Link>

        <article className="bg-[var(--card)] p-8 sm:p-12 rounded-3xl border border-[var(--border)] shadow-2xl space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-4 text-xs">
              <span className="font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[var(--muted)] text-[var(--primary)] border border-[var(--border)]">
                {article.category}
              </span>
              <span className="text-[var(--muted-foreground)]">•</span>
              <span className="text-[var(--muted-foreground)]">{article.date}</span>
              <span className="text-[var(--muted-foreground)]">•</span>
              <span className="text-[var(--muted-foreground)] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[var(--foreground)] tracking-tight leading-tight">
              {article.title}
            </h1>
          </div>

          {/* Key Takeaways Box */}
          <div className="p-6 rounded-2xl bg-[var(--muted)] border border-[var(--border)]">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--primary)] mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[var(--primary)]" />
              <span>Key Article Takeaways</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[var(--foreground)]">
              {article.keyTakeaways.map((takeaway, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--primary)] shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Embedded Procrastination Limbic Simulator */}
          {article.hasProcrastinationSimulator && <ProcrastinationSimulator />}

          {/* Markdown Rendered Body */}
          <MarkdownRenderer content={article.content} />

          {/* Recommended Video Box */}
          <div className="p-6 rounded-2xl bg-[var(--muted)] border border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">
                Recommended Video Lesson
              </span>
              <h4 className="text-base font-bold text-[var(--foreground)] mt-0.5">
                "{article.recommendedVideo}"
              </h4>
            </div>
            <a
              href="https://www.youtube.com/@behavior-school"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shrink-0"
            >
              <YoutubeIcon className="w-4 h-4 fill-current" />
              <span>Watch on YouTube</span>
            </a>
          </div>
        </article>
      </main>
    </>
  );
}
