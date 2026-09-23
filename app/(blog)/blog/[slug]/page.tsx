import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Hash,
  Share2,
  Sparkles,
} from "lucide-react";
import { YoutubeIcon } from "../../../components/Icons";
import MarkdownRenderer from "../../../components/MarkdownRenderer";
import ProcrastinationSimulator from "../../../components/ProcrastinationSimulator";
import ArticleCover from "../../../components/ArticleCover";
import ArticleLearningExtension from "../../../components/ArticleLearningExtension";
import ArticleReadingChrome from "../../../components/ArticleReadingChrome";
import { getAllArticles, getArticleBySlug } from "../../../lib/content";

function headingId(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function getHeadings(content: string) {
  return content
    .split("\n\n")
    .map((block) => block.trim())
    .filter((block) => block.startsWith("## "))
    .map((block) => {
      const label = block.replace(/^##\s+/, "").replace(/\*\*/g, "");
      return { label, id: headingId(label) };
    });
}

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
      images: [
        {
          url: "https://behavior-school.github.io/og-image.png",
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
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

  const allArticles = getAllArticles();
  const related = allArticles
    .filter((candidate) => candidate.slug !== article.slug)
    .map((candidate) => ({
      candidate,
      score:
        (candidate.category === article.category ? 5 : 0) +
        candidate.keyTakeaways.filter((takeaway) =>
          article.keyTakeaways.some((current) => current.split(" ").slice(0, 4).join(" ") === takeaway.split(" ").slice(0, 4).join(" ")),
        ).length * 2,
    }))
    .sort((a, b) => b.score - a.score || (a.candidate.date < b.candidate.date ? 1 : -1))
    .slice(0, 6)
    .map(({ candidate }) => candidate);

  const headings = getHeadings(article.content).slice(0, 8);
  const url = "https://behavior-school.github.io/blog/" + article.slug;

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    dateModified: article.revisionDate || article.date,
    articleSection: article.category,
    keywords: article.keyTakeaways.join(", "),
    author: {
      "@type": "Organization",
      name: "Behavior School",
      url: "https://behavior-school.github.io/about",
    },
    publisher: {
      "@type": "Organization",
      name: "Behavior School",
      url: "https://behavior-school.github.io",
      logo: { "@type": "ImageObject", url: "https://behavior-school.github.io/logo.svg" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  const jsonLdVideo = article.videoUrl
    ? {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: article.recommendedVideo ?? article.title,
        description: article.excerpt,
        uploadDate: article.revisionDate || article.date,
        contentUrl: article.videoUrl,
        embedUrl: article.videoUrl.replace("watch?v=", "embed/"),
      }
    : null;

  return (
    <ArticleReadingChrome>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      {jsonLdVideo && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdVideo) }} />
      )}

      <main className="mx-auto w-full max-w-7xl px-3 pb-28 pt-[calc(var(--app-header-height)+18px)] sm:px-6 lg:px-8">
        <div className="mb-7 flex items-center justify-between gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--muted-foreground)] transition hover:text-[var(--foreground)]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to field guides
          </Link>
          <span className="hidden items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--muted-foreground)] sm:inline-flex">
            <Share2 className="h-3.5 w-3.5" />
            Read slowly. Keep one idea.
          </span>
        </div>

        <article className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--card)] shadow-2xl">
          <header className="border-b border-[var(--border)]">
            <div className="p-5 sm:p-8 lg:p-12">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px]">
                <span className="rounded-full border border-[var(--border)] bg-[var(--muted)] px-3 py-1.5 font-bold uppercase tracking-[0.14em] text-[var(--primary)]">
                  {article.category}
                </span>
                <span className="text-[var(--muted-foreground)]">{article.date}</span>
                <span className="inline-flex items-center gap-1 text-[var(--muted-foreground)]">
                  <Clock className="h-3.5 w-3.5" />
                  {article.readTime}
                </span>
                {article.revisionDate && (
                  <span className="font-mono text-[9px] text-[var(--muted-foreground)]">
                    Updated {article.revisionDate}
                  </span>
                )}
              </div>

              <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
                <div>
                  <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
                    <Sparkles className="h-3.5 w-3.5" />
                    Behavior School field guide
                  </p>
                  <h1 className="mt-4 max-w-5xl text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] text-[var(--foreground)] sm:text-5xl lg:text-6xl">
                    {article.title}
                  </h1>
                  <p className="mt-5 max-w-3xl text-base leading-7 text-[var(--muted-foreground)] sm:text-lg sm:leading-8">
                    {article.excerpt}
                  </p>
                </div>

                <div className="rounded-2xl border border-[var(--border)] bg-[var(--muted)]/50 p-4">
                  <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                    Reading promise
                  </div>
                  <p className="mt-2 text-sm font-bold leading-6 text-[var(--foreground)]">
                    Understand the mechanism. Notice it in real life. Test one small change.
                  </p>
                </div>
              </div>
            </div>

            <div className="px-3 pb-3 sm:px-8 sm:pb-8 lg:px-12 lg:pb-12">
              <ArticleCover title={article.title} category={article.category} />
            </div>
          </header>

          <div className="grid lg:grid-cols-[minmax(0,1fr)_16rem]">
            <div className="min-w-0 p-5 sm:p-8 lg:p-12">
              <section
                aria-label="Key takeaways"
                className="rounded-2xl border border-[var(--border)] bg-[var(--muted)]/50 p-5 sm:p-6"
              >
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-[var(--primary)]" />
                  <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--primary)]">
                    Before you read
                  </h2>
                </div>
                <p className="mt-2 text-xs leading-5 text-[var(--muted-foreground)]">
                  These are the ideas worth carrying into the rest of the article.
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {article.keyTakeaways.map((takeaway, index) => (
                    <div
                      key={takeaway}
                      className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4"
                    >
                      <span className="font-mono text-[9px] text-[var(--muted-foreground)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="text-xs leading-5.5 text-[var(--foreground)]">{takeaway}</p>
                    </div>
                  ))}
                </div>
              </section>

              {article.hasProcrastinationSimulator && (
                <div className="mt-7">
                  <ProcrastinationSimulator />
                </div>
              )}

              <div className="mt-10 max-w-[74ch]">
                <MarkdownRenderer content={article.content} />
              </div>

              <ArticleLearningExtension title={article.title} takeaways={article.keyTakeaways} />

              <section className="mt-12 rounded-2xl border border-[var(--border)] bg-[var(--muted)]/40 p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <Hash className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" />
                  <div>
                    <h2 className="text-sm font-extrabold text-[var(--foreground)]">One idea to test today</h2>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted-foreground)]">
                      Pick the smallest behavior in this guide that you can observe without changing your whole life.
                      Run the experiment once, record what happened, and then decide whether it deserves repetition.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 sm:p-6">
                <h2 className="text-sm font-extrabold text-[var(--foreground)]">Research & educational note</h2>
                <p className="mt-2 text-xs leading-6 text-[var(--muted-foreground)] sm:text-sm">
                  Behavior School translates behavioral science into practical educational material. Findings are simplified
                  for readability, and a behavioral pattern can have many causes. This article is not a diagnosis or a substitute
                  for professional care. See the <Link href="/editorial-policy" className="font-semibold text-[var(--primary)] hover:underline">editorial policy</Link> for evidence, corrections, and updates.
                </p>
              </section>
            </div>

            <aside className="border-t border-[var(--border)] bg-[var(--muted)]/30 p-5 lg:border-l lg:border-t-0 lg:p-6">
              <div className="lg:sticky lg:top-[calc(var(--app-header-height)+20px)]">
                <div className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                  On this page
                </div>
                <nav className="mt-4 space-y-1.5" aria-label="Article sections">
                  {headings.map((heading, index) => (
                    <a
                      key={heading.id}
                      href={"#" + heading.id}
                      className="flex gap-2 rounded-lg px-2.5 py-2 text-[10px] leading-4 text-[var(--muted-foreground)] transition hover:bg-[var(--card)] hover:text-[var(--foreground)]"
                    >
                      <span className="font-mono text-[9px]">{String(index + 1).padStart(2, "0")}</span>
                      <span>{heading.label}</span>
                    </a>
                  ))}
                </nav>

                <div className="mt-7 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
                  <div className="text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--primary)]">
                    Keep exploring
                  </div>
                  <p className="mt-2 text-xs leading-5 text-[var(--muted-foreground)]">
                    The strongest insight often appears when two adjacent models disagree.
                  </p>
                  <Link
                    href="/books"
                    className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-bold text-[var(--primary)]"
                  >
                    Explore book guides <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>

          {related.length > 0 && (
            <section className="border-t border-[var(--border)] p-5 sm:p-8 lg:p-12" aria-labelledby="related-guides">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--primary)]">Continue the rabbit hole</p>
                  <h2 id="related-guides" className="mt-2 text-2xl font-extrabold tracking-tight text-[var(--foreground)] sm:text-3xl">
                    One idea rarely stays alone.
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--muted-foreground)]">
                    These guides sit nearby in topic or mechanism. Hover, skim the summary, and choose the next question
                    that genuinely interests you.
                  </p>
                </div>
                <Link href="/blog" className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--primary)]">
                  Browse all <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={"/blog/" + item.slug}
                    className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="relative">
                      <ArticleCover title={item.title} category={item.category} />
                      <div className="absolute inset-x-0 bottom-0 translate-y-full border-t border-white/10 bg-black/78 p-4 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <p className="line-clamp-4 text-[11px] leading-5 text-white/90">{item.excerpt}</p>
                      </div>
                    </div>
                    <div className="p-4 sm:p-5">
                      <div className="flex items-center justify-between gap-3 text-[9px] font-mono text-[var(--muted-foreground)]">
                        <span className="uppercase tracking-[0.15em] text-[var(--primary)]">{item.category}</span>
                        <span>{item.readTime}</span>
                      </div>
                      <h3 className="mt-2 text-sm font-extrabold leading-5 text-[var(--foreground)] group-hover:text-[var(--primary)]">
                        {item.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-[11px] leading-5 text-[var(--muted-foreground)]">{item.excerpt}</p>
                      <div className="mt-4 flex items-center justify-between border-t border-[var(--border)] pt-3 text-[10px]">
                        <span className="text-[var(--muted-foreground)]">{item.date}</span>
                        <span className="inline-flex items-center gap-1 font-bold text-[var(--primary)]">
                          Read next <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {article.recommendedVideo && (
            <section className="border-t border-[var(--border)] bg-[var(--muted)]/40 p-5 sm:p-8 lg:p-12">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                    Watch after reading
                  </p>
                  <h2 className="mt-2 text-lg font-extrabold text-[var(--foreground)]">{article.recommendedVideo}</h2>
                </div>
                <a
                  href="https://www.youtube.com/@behavior-school"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--foreground)] px-5 py-3 text-xs font-bold text-[var(--background)] transition hover:-translate-y-0.5 sm:w-auto"
                >
                  <YoutubeIcon className="h-4 w-4 fill-current" />
                  Watch on YouTube
                </a>
              </div>
            </section>
          )}
        </article>
      </main>
    </ArticleReadingChrome>
  );
}
