import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, Sparkles, CheckCircle2, FileCode } from "lucide-react";
import { detailedBooksData } from "../../../../../content/books";
import MarkdownRenderer from "../../../components/MarkdownRenderer";
import HabitSimulator from "../../../components/HabitSimulator";
import CognitiveTester from "../../../components/CognitiveTester";
import InteractiveQuiz, { Question } from "../../../components/InteractiveQuiz";
import InteractivePoll, { PollOption } from "../../../components/InteractivePoll";
import BookArtifacts from "../../../components/BookArtifacts";

export function generateStaticParams() {
  return Object.keys(detailedBooksData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const book = detailedBooksData[slug];
  if (!book) return { title: "Book Not Found | Behavior School" };

  return {
    title: `${book.title} Summary & Guide | Behavior School`,
    description: book.summary,
    openGraph: {
      title: `${book.title} Summary — ${book.author}`,
      description: book.summary,
      url: `https://behavior-school.github.io/books/${book.slug}`,
      siteName: "Behavior School",
      type: "article",
    },
  };
}

export default async function IndividualBookPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const book = detailedBooksData[slug];
  if (!book) notFound();

  const jsonLdBook = {
    "@context": "https://schema.org",
    "@type": "Book",
    "name": book.title,
    "author": {
      "@type": "Person",
      "name": book.author
    },
    "datePublished": book.year,
    "description": book.summary,
    "url": `https://behavior-school.github.io/books/${book.slug}`,
    "publisher": {
      "@type": "Organization",
      "name": "Behavior School"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBook) }}
      />

      <main className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/books"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Book Summaries</span>
        </Link>

        <article className="bg-[var(--card)] p-8 sm:p-12 rounded-3xl border border-[var(--border)] shadow-2xl space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-4 text-xs">
              <span className="font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[var(--muted)] text-[var(--primary)] border border-[var(--border)]">
                {book.year} Publication
              </span>
              <span className="text-[var(--muted-foreground)]">•</span>
              <span className="text-[var(--muted-foreground)] font-semibold">Author: {book.author}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[var(--foreground)] tracking-tight leading-tight mb-2">
              {book.title}
            </h1>
            <p className="text-base sm:text-lg text-[var(--primary)] font-medium italic">
              "{book.tagline}"
            </p>
          </div>

          {/* Core Summary Box */}
          <div className="p-6 rounded-2xl bg-[var(--muted)] border border-[var(--border)] space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--primary)] flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>Core Thesis & Summary</span>
            </h3>
            <p className="text-xs sm:text-sm text-[var(--foreground)] leading-relaxed">
              {book.summary}
            </p>
          </div>

          {/* Embedded Interactive Simulators */}
          {book.hasHabitSimulator && <HabitSimulator />}
          {book.hasCognitiveTester && <CognitiveTester />}

          {/* Embedded Community Poll */}
          {book.poll && (
            <InteractivePoll question={book.poll.question} options={book.poll.options} />
          )}

          {/* Key Takeaways */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--foreground)] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[var(--primary)]" />
              <span>Key takeaways & Mental Models</span>
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[var(--foreground)]">
              {book.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[var(--muted)]/50 border border-[var(--border)]">
                  <CheckCircle2 className="w-4 h-4 text-[var(--primary)] shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Protocol Steps */}
          <div className="space-y-4 pt-4 border-t border-[var(--border)]">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--foreground)] flex items-center gap-2">
              <FileCode className="w-4 h-4 text-[var(--primary)]" />
              <span>Execution Protocol Steps</span>
            </h3>
            <div className="space-y-2">
              {book.protocolSteps.map((step, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[var(--muted)] border border-[var(--border)] text-xs sm:text-sm text-[var(--foreground)] flex items-start gap-3">
                  <span className="font-mono font-bold text-[var(--primary)]">{idx + 1}.</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Markdown Content Section */}
          <div className="pt-6 border-t border-[var(--border)]">
            <MarkdownRenderer content={book.markdownContent} />
          </div>

          {/* Embedded Interactive Quiz */}
          {book.quiz && (
            <InteractiveQuiz title={book.quiz.title} questions={book.quiz.questions} />
          )}
        </article>
      </main>
    </>
  );
}
