import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, Sparkles, CheckCircle2, FileCode, Brain, ExternalLink } from "lucide-react";
import { allBooksData } from "../../../../content/book-catalog";
import MarkdownRenderer from "../../../components/MarkdownRenderer";
import HabitSimulator from "../../../components/HabitSimulator";
import CognitiveTester from "../../../components/CognitiveTester";
import InteractiveQuiz from "../../../components/InteractiveQuiz";
import InteractivePoll from "../../../components/InteractivePoll";
import BookArtifacts from "../../../components/BookArtifacts";
import BookLearningLab from "../../../components/BookLearningLab";
import BookPoster from "../../../components/BookPoster";
import BookLongform from "../../../components/BookLongform";
import BookConceptMap from "../../../components/BookConceptMap";
import BookAudiobookBeta from "../../../components/BookAudiobookBeta";
import RelatedBooksShowcase from "../../../components/RelatedBooksShowcase";
import { booksCatalog } from "../../../../content/book-catalog";

export function generateStaticParams() {
  return Object.keys(allBooksData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const book = allBooksData[slug];
  if (!book) return { title: "Book Not Found | Behavior School" };

  return {
    title: `${book.title}: Deep Summary, Neuroscience & Practical Guide | Behavior School`,
    description: `${book.summary} Explore the deeper mental models, neuroscience lens, visual frameworks, real-world examples, and field exercises.`,
    keywords: [book.title, book.author, "book summary", "behavioral science", "psychology", "neuroscience", ...(book.tags ?? [])],
    alternates: { canonical: `https://behavior-school.github.io/books/${book.slug}` },
    openGraph: {
      title: `${book.title} — Deep Behavioral Science Guide`,
      description: book.summary,
      url: `https://behavior-school.github.io/books/${book.slug}`,
      siteName: "Behavior School",
      type: "article",
      images: [
        { url: `https://behavior-school.github.io/book-posters/${book.slug}.svg`, alt: `${book.title} behavioral science learning poster` },
        ...(book.coverImageUrl ? [{ url: book.coverImageUrl, alt: `${book.title} book cover` }] : []),
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${book.title} — Behavior School`,
      description: book.summary,
      images: [`https://behavior-school.github.io/book-posters/${book.slug}.svg`],
    },
  };
}

export default async function IndividualBookPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const book = allBooksData[slug];
  if (!book) notFound();

  const jsonLdBook = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.title,
    author: { "@type": "Person", name: book.author },
    datePublished: book.year,
    description: book.summary,
    url: `https://behavior-school.github.io/books/${book.slug}`,
    image: [book.coverImageUrl, `https://behavior-school.github.io/book-posters/${book.slug}.svg`].filter(Boolean),
    genre: book.category,
    keywords: book.tags?.join(", "),
    isbn: book.amazonUrl?.split("/dp/")[1],
    publisher: { "@type": "Organization", name: "Behavior School" },
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Behavior School", item: "https://behavior-school.github.io/" },
      { "@type": "ListItem", position: 2, name: "Books", item: "https://behavior-school.github.io/books" },
      { "@type": "ListItem", position: 3, name: book.title, item: `https://behavior-school.github.io/books/${book.slug}` },
    ],
  };

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${book.title} — Behavior School`,
    url: `https://behavior-school.github.io/books/${book.slug}`,
    description: book.summary,
    isPartOf: { "@type": "WebSite", name: "Behavior School", url: "https://behavior-school.github.io/" },
  };

  const relatedBooks = booksCatalog
    .filter((candidate) => candidate.slug !== book.slug)
    .map((candidate) => ({
      candidate,
      score:
        (candidate.category === book.category ? 5 : 0) +
        (candidate.tags ?? []).filter((tag) => (book.tags ?? []).includes(tag)).length * 3 +
        (candidate.featured ? 1 : 0),
    }))
    .sort(
      (a, b) =>
        b.score - a.score ||
        (b.candidate.popularityScore ?? 0) - (a.candidate.popularityScore ?? 0)
    )
    .slice(0, 24)
    .map(({ candidate }) => candidate);

  const sections = [
    { id: "summary", label: "Core thesis" },
    { id: "audiobook", label: "Audiobook beta" },
    { id: "learning-lab", label: "Learning lab" },
    { id: "concept-map", label: "Concept map" },
    { id: "takeaways", label: "Mental models" },
    { id: "protocol", label: "Action protocol" },
    { id: "deep-dive", label: "Deep dive" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBook) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }} />

      <main className="pt-[calc(var(--app-header-height)+16px)] pb-24 max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
        <Link href="/books" className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors mb-7">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Book Summaries</span>
        </Link>

        <nav aria-label="On this page" className="app-horizontal-scroll sticky top-[var(--app-header-height)] z-30 -mx-1 mb-5 flex gap-2 overflow-x-auto bg-[var(--background)]/90 px-1 py-2 backdrop-blur-xl">
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`} className="shrink-0 rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 text-[11px] font-semibold text-[var(--muted-foreground)] hover:text-[var(--foreground)]">{section.label}</a>
          ))}
        </nav>

        <article className="overflow-hidden rounded-[1.5rem] border sm:rounded-[2rem] border-[var(--border)] bg-[var(--card)] shadow-2xl">
          <header className="grid grid-cols-2 gap-4 border-b border-[var(--border)] p-4 sm:gap-8 sm:p-10 lg:grid-cols-[150px_150px_1fr] lg:p-12">
            <div className="mx-auto w-full max-w-[170px] justify-self-center">
              {book.coverImageUrl ? (
                <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--muted)] shadow-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={book.coverImageUrl} alt={`${book.title} cover`} width={360} height={540} loading="lazy" className="h-auto w-full object-contain" />
                </div>
              ) : (
                <div className="aspect-[2/3] rounded-2xl border border-[var(--border)] bg-[var(--muted)] flex items-center justify-center p-5 text-center"><span className="text-sm font-bold">{book.title}</span></div>
              )}
              {(book.affiliateUrl || book.amazonUrl) && (
                <>
                  <a
                    href={book.affiliateUrl || book.amazonUrl}
                    target="_blank"
                    rel={book.affiliateUrl ? "sponsored noopener noreferrer" : "noopener noreferrer"}
                    className="mt-3 flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] px-3 py-2 text-[11px] font-bold text-[var(--foreground)] hover:bg-[var(--muted)]"
                  >
                    {book.affiliateUrl ? "View on Amazon" : "View edition"}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  {book.affiliateUrl && (
                    <p className="mt-2 text-center text-[9px] leading-4 text-[var(--muted-foreground)]">
                      Affiliate link · Behavior School may earn a commission at no extra cost to you.
                    </p>
                  )}
                </>
              )}
            </div>

            <div className="mx-auto w-full max-w-[150px]"><BookPoster book={book} /></div>

            <div className="col-span-2 min-w-0 lg:col-span-1">
              <div className="flex flex-wrap items-center gap-1.5 text-[10px]">
                <span className="rounded-full bg-[var(--muted)] px-2.5 py-1 font-bold uppercase tracking-wider text-[var(--primary)] border border-[var(--border)]">{book.year} publication</span>
                {book.category && <span className="rounded-full border border-[var(--border)] px-2.5 py-1 font-semibold text-[var(--muted-foreground)]">{book.category}</span>}
                <span className="text-[var(--muted-foreground)]">by {book.author}</span>
                <span className="rounded-full border border-[var(--primary)]/25 bg-[var(--primary)]/8 px-2.5 py-1 font-semibold text-[var(--primary)]" title="Behavior School editorial discovery score, not a market or sales rating">Popularity {book.popularityScore}/100</span>
              </div>
              <h1 className="mt-3 text-3xl sm:mt-4 sm:text-6xl font-extrabold text-[var(--foreground)] tracking-tight leading-[1.02]">{book.title}</h1>
              <p className="mt-3 text-base sm:text-xl text-[var(--primary)] font-medium italic">{book.tagline}</p>
              {book.tags && <div className="mt-5 flex flex-wrap gap-2">{book.tags.map((tag) => <span key={tag} className="rounded-full border border-[var(--border)] bg-[var(--muted)]/50 px-2.5 py-1 text-[10px] font-medium text-[var(--muted-foreground)]">#{tag}</span>)}</div>}
            </div>
          </header>

          <div className="space-y-8 p-4 sm:space-y-10 sm:p-10 lg:p-12">
            <section id="summary" className="scroll-mt-24 grid gap-5 lg:grid-cols-[1.35fr_.65fr]">
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--muted)]/50 p-6"><h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--primary)] flex items-center gap-2"><BookOpen className="w-4 h-4" />Core thesis</h2><p className="mt-3 text-sm leading-7 text-[var(--foreground)] sm:text-base sm:leading-8">{book.summary}</p></div>
              <div className="rounded-2xl border border-[var(--primary)]/25 bg-[var(--card)] p-6"><div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--primary)]">Read it in one line</div><p className="mt-3 text-lg font-bold leading-7 text-[var(--foreground)]">{book.learningLab?.coreModel ?? book.keyTakeaways[0]}</p></div>
            </section>

            <section id="audiobook" className="scroll-mt-24">
              <BookAudiobookBeta
                title={book.title}
                sections={[
                  { id: "thesis", label: "Core thesis", text: book.summary },
                  { id: "models", label: "Key mental models", text: book.keyTakeaways.join(". ") },
                  { id: "protocol", label: "Action protocol", text: book.protocolSteps.join(". ") },
                  ...(book.learningLab
                    ? [
                        {
                          id: "learning-lab",
                          label: "Learning lab",
                          text: [
                            book.learningLab.coreModel,
                            book.learningLab.brainLens,
                            ...book.learningLab.examples,
                            ...book.learningLab.watchFor,
                            ...book.learningLab.practice,
                          ].join(". "),
                        },
                      ]
                    : []),
                ]}
              />
            </section>
            {book.learningLab && <section id="learning-lab" className="scroll-mt-24"><BookLearningLab book={book} /></section>}
            {book.mermaidDiagram && <section id="concept-map" className="scroll-mt-24"><BookConceptMap title={`${book.title}: behavioral flow`} diagram={book.mermaidDiagram} /></section>}
            {(book.visual || book.artifact) && <section className="scroll-mt-24"><BookArtifacts visual={book.visual} artifact={book.artifact} /></section>}
            {book.hasHabitSimulator && <HabitSimulator />}
            {book.hasCognitiveTester && <CognitiveTester />}
            {book.poll && <InteractivePoll question={book.poll.question} options={book.poll.options} />}

            <section id="takeaways" className="scroll-mt-24 space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--foreground)] flex items-center gap-2"><Sparkles className="w-4 h-4 text-[var(--primary)]" />Key takeaways & mental models</h2>
              <div className="grid gap-3 sm:grid-cols-2">{book.keyTakeaways.map((takeaway, idx) => <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-[var(--muted)]/50 border border-[var(--border)]"><CheckCircle2 className="w-4 h-4 text-[var(--primary)] shrink-0 mt-1" /><span className="text-sm leading-6 text-[var(--foreground)]">{takeaway}</span></div>)}</div>
            </section>

            <section id="protocol" className="scroll-mt-24 space-y-4 pt-2 border-t border-[var(--border)]">
              <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--foreground)] flex items-center gap-2"><FileCode className="w-4 h-4 text-[var(--primary)]" />Execution protocol</h2>
              <div className="grid gap-3 sm:grid-cols-2">{book.protocolSteps.map((step, idx) => <div key={idx} className="p-4 rounded-2xl bg-[var(--muted)] border border-[var(--border)] text-sm text-[var(--foreground)] flex items-start gap-3"><span className="font-mono font-bold text-[var(--primary)]">{String(idx + 1).padStart(2, "0")}</span><span className="leading-6">{step}</span></div>)}</div>
            </section>

            <section id="deep-dive" className="scroll-mt-24 pt-2 border-t border-[var(--border)]">
              <div className="mb-6 flex items-end justify-between gap-4"><div><div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--primary)]"><Brain className="h-4 w-4" />Deep dive</div><h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[var(--foreground)]">Understand it before you use it.</h2><p className="mt-2 max-w-2xl text-sm leading-7 text-[var(--muted-foreground)]">Read the model as a connected system: mechanism, examples, limits, and application.</p></div></div>
              <MarkdownRenderer content={book.markdownContent} />
              <BookLongform book={book} />
            </section>

            {relatedBooks.length > 0 && <RelatedBooksShowcase currentTitle={book.title} books={relatedBooks} />}
            {book.quiz && <section className="pt-2"><InteractiveQuiz title={book.quiz.title} questions={book.quiz.questions} /></section>}
          </div>
        </article>
      </main>
    </>
  );
}
