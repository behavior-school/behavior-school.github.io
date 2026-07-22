import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Behavioral Science Book Summaries & Guides | Behavior School",
  description: "Read in-depth research breakdowns and action frameworks of Atomic Habits, Thinking Fast and Slow, Deep Work, and top psychology literature.",
  openGraph: {
    title: "Behavioral Science Book Summaries | Behavior School",
    description: "Deep dive book summaries and execution protocols for Atomic Habits, Deep Work, Thinking Fast & Slow.",
    url: "https://behavior-school.github.io/books",
    siteName: "Behavior School",
    type: "website",
  },
};

export const booksDataList = [
  {
    slug: "atomic-habits",
    title: "Atomic Habits",
    author: "James Clear",
    year: "2018",
    tagline: "An Easy & Proven Way to Build Good Habits & Break Bad Ones",
    excerpt: "Small 1% changes compounding over time create radical transformation. System design matters more than goal setting.",
    keyTakeaways: [
      "Make it Obvious (Cue - Implementation Intentions)",
      "Make it Attractive (Craving - Temptation Bundling)",
      "Make it Easy (Response - 2 Minute Rule)",
      "Make it Satisfying (Reward - Immediate Reinforcement)"
    ]
  },
  {
    slug: "thinking-fast-and-slow",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    year: "2011",
    tagline: "The Two Systems That Drive the Way We Think",
    excerpt: "Human judgment is governed by two cognitive engines: System 1 (fast, intuitive, emotional) and System 2 (slow, analytical, effortful).",
    keyTakeaways: [
      "System 1 operates automatically with little or no effort.",
      "System 2 allocates attention to effortful mental operations.",
      "Beware of Substitution Bias and Availability Heuristics."
    ]
  },
  {
    slug: "deep-work",
    title: "Deep Work",
    author: "Cal Newport",
    year: "2016",
    tagline: "Rules for Focused Success in a Distracted World",
    excerpt: "The ability to perform deep work is becoming increasingly rare at the exact same time it is becoming increasingly valuable in our economy.",
    keyTakeaways: [
      "Work Deeply: Ritualize your environment and scheduling.",
      "Embrace Boredom: Train your brain to resist digital novelty.",
      "Quit Social Media: Audit network tools for genuine value.",
      "Drain the Shallows: Eliminate low-value administrative tasks."
    ]
  },
  {
    slug: "power-of-habit",
    title: "The Power of Habit",
    author: "Charles Duhigg",
    year: "2012",
    tagline: "Why We Do What We Do in Life and Business",
    excerpt: "Habits emerge because the brain is constantly looking for ways to save effort and automate routine behaviors into the basal ganglia.",
    keyTakeaways: [
      "The Golden Rule of Habit Change: Keep Cue & Reward, change Routine.",
      "Focus on Keystone Habits (e.g. daily exercise, sleep).",
      "Belief is the essential ingredient that converts habit loops into permanent identity."
    ]
  },
  {
    slug: "drive",
    title: "Drive: The Surprising Truth About Motivation",
    author: "Daniel H. Pink",
    year: "2009",
    tagline: "Autonomy, Mastery, and Purpose",
    excerpt: "Carrots and sticks (Extrinsic Motivation 2.0) fail for complex cognitive work. True drive relies on Intrinsic Motivation 3.0.",
    keyTakeaways: [
      "Autonomy: The desire to direct our own lives and work.",
      "Mastery: The urge to get better and better at something that matters.",
      "Purpose: The yearning to do what we do in the service of something larger."
    ]
  },
  {
    slug: "mindset",
    title: "Mindset: The New Psychology of Success",
    author: "Carol S. Dweck",
    year: "2006",
    tagline: "How We Can Learn to Fulfill Our Potential",
    excerpt: "Your belief about your abilities determines whether you embrace challenges or shrink from failure.",
    keyTakeaways: [
      "Fixed Mindset: Belief that intelligence and talent are static traits.",
      "Growth Mindset: Belief that abilities can be developed through dedication.",
      "The Power of 'Yet': Transform 'I can't do this' into 'I can't do this YET'."
    ]
  }
];

export default function BooksIndexPage() {
  const jsonLdBooks = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Behavioral Science Book Summaries",
    "url": "https://behavior-school.github.io/books",
    "description": "Comprehensive book summaries and execution protocols for top psychology and productivity books.",
    "hasPart": booksDataList.map((book) => ({
      "@type": "Book",
      "name": book.title,
      "author": { "@type": "Person", "name": book.author },
      "url": `https://behavior-school.github.io/books/${book.slug}`
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBooks) }}
      />

      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--muted)] border border-[var(--border)] text-xs font-semibold text-[var(--primary)] mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Curated Book Summaries & Guides</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[var(--foreground)] tracking-tight mb-4">
            Behavioral Science <span className="text-[var(--primary)]">Library</span>
          </h1>
          <p className="text-base sm:text-lg text-[var(--muted-foreground)]">
            Deep-dive summaries, key takeaways, and action protocols for the most influential books on practical psychology.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {booksDataList.map((book) => (
            <article
              key={book.slug}
              className="bg-[var(--card)] p-8 rounded-3xl border border-[var(--border)] flex flex-col justify-between hover:border-[var(--primary)]/50 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[var(--muted)] text-[var(--primary)] border border-[var(--border)]">
                    {book.year}
                  </span>
                  <span className="text-xs font-semibold text-[var(--muted-foreground)]">
                    {book.author}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-[var(--foreground)] mb-1 group-hover:text-[var(--primary)] transition-colors leading-snug">
                  <Link href={`/books/${book.slug}`}>
                    {book.title}
                  </Link>
                </h2>
                <p className="text-xs font-medium text-[var(--foreground)] mb-3 italic">
                  "{book.tagline}"
                </p>
                <p className="text-xs text-[var(--muted-foreground)] mb-6 leading-relaxed">
                  {book.excerpt}
                </p>

                <div className="space-y-2 mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--primary)] block">
                    Core Framework:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[var(--muted-foreground)]">
                    {book.keyTakeaways.slice(0, 3).map((takeaway, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--primary)] shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between text-xs">
                <span className="text-[var(--muted-foreground)] font-medium">Full Book Guide</span>
                <Link
                  href={`/books/${book.slug}`}
                  className="inline-flex items-center gap-1.5 font-bold text-[var(--primary)] hover:opacity-80 transition-opacity"
                >
                  <span>Read Book Summary</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
