import type { Metadata } from "next";
import Link from "next/link";
import { HelpCircle, Brain, ShieldAlert, Cpu, Sparkles, ArrowRight } from "lucide-react";
import SavedProgressCard from "../../components/SavedProgressCard";

export const metadata: Metadata = {
  title: "Behavioral Science Quizzes & Assessments | Behavior School",
  description: "Test your knowledge on neuroscience, atomic habits, cognitive biases, dopamine mechanics, and deep work focus.",
  openGraph: {
    title: "Behavioral Science Interactive Quizzes | Behavior School",
    description: "Interactive quizzes and self-assessments for habits, focus, and brain science.",
    url: "https://behavior-school.github.io/quiz",
    siteName: "Behavior School",
    type: "website",
  },
};

export const quizPackagesList = [
  {
    slug: "neuroscience-dopamine-quiz",
    title: "Neuroscience & Dopamine Master Quiz",
    category: "Neuroscience",
    icon: Brain,
    questionCount: 4,
    desc: "Test your understanding of Amygdala threat perception, tonic baseline dopamine vs phasic spikes, and receptor down-regulation."
  },
  {
    slug: "atomic-habits-benchmark",
    title: "Atomic Habits & Discipline Benchmark",
    category: "Habits",
    icon: ShieldAlert,
    questionCount: 4,
    desc: "Evaluate your mastery of the 4 Laws of Behavior Change, Implementation Intentions, and the 2-Minute Rule."
  },
  {
    slug: "cognitive-biases-test",
    title: "Cognitive Biases & Decision Making Test",
    category: "Mental Models",
    icon: Sparkles,
    questionCount: 4,
    desc: "Examine your susceptibility to System 1 heuristics, Loss Aversion, Availability Bias, and Anchoring."
  },
  {
    slug: "deep-work-focus-audit",
    title: "Deep Work & Attention Residue Audit",
    category: "Focus",
    icon: Cpu,
    questionCount: 4,
    desc: "Assess your focus rituals, Attention Residue friction, and 90-minute ultradian rhythm optimization."
  }
];

export default function QuizIndexPage() {
  const jsonLdQuizPage = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Behavioral Science Quizzes & Assessments",
    "url": "https://behavior-school.github.io/quiz",
    "description": "Interactive quiz packages testing neuroscience, habit formation, cognitive models, and focus.",
    "hasPart": quizPackagesList.map((quiz) => ({
      "@type": "Quiz",
      "name": quiz.title,
      "url": `https://behavior-school.github.io/quiz/${quiz.slug}`
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdQuizPage) }}
      />

      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--muted)] border border-[var(--border)] text-xs font-semibold text-[var(--primary)] mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Interactive Quizzes & Assessments</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[var(--foreground)] tracking-tight mb-4">
            Behavioral Science <span className="text-[var(--primary)]">Quizzes</span>
          </h1>
          <p className="text-base sm:text-lg text-[var(--muted-foreground)]">
            Test your knowledge across categories. All scores and diagnostic results are stored locally in your browser.
          </p>
        </div>

        {/* LocalStorage Saved Progress Component */}
        <SavedProgressCard />

        {/* Quiz Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {quizPackagesList.map((pkg) => {
            const Icon = pkg.icon;
            return (
              <article
                key={pkg.slug}
                className="bg-[var(--card)] p-8 rounded-3xl border border-[var(--border)] flex flex-col justify-between hover:border-[var(--primary)]/50 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-[var(--muted)] border border-[var(--border)] flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-[var(--primary-foreground)] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[var(--muted)] text-[var(--primary)] border border-[var(--border)]">
                      {pkg.questionCount} Questions
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors leading-snug">
                    <Link href={`/quiz/${pkg.slug}`}>
                      {pkg.title}
                    </Link>
                  </h2>
                  <p className="text-xs text-[var(--muted-foreground)] mb-6 leading-relaxed">
                    {pkg.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between text-xs">
                  <span className="text-[var(--muted-foreground)] font-mono">{pkg.category} Package</span>
                  <Link
                    href={`/quiz/${pkg.slug}`}
                    className="inline-flex items-center gap-1.5 font-bold text-[var(--primary)] hover:opacity-80 transition-opacity"
                  >
                    <span>Start Quiz</span>
                    <ArrowRight className="w-4 h-4" />
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
