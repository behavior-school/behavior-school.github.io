import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, HelpCircle } from "lucide-react";
import InteractiveQuiz, { Question } from "../../../components/InteractiveQuiz";

interface QuizPackageDetail {
  slug: string;
  title: string;
  category: string;
  desc: string;
  questions: Question[];
}

const detailedQuizPackages: Record<string, QuizPackageDetail> = {
  "neuroscience-dopamine-quiz": {
    slug: "neuroscience-dopamine-quiz",
    title: "Neuroscience & Dopamine Master Quiz",
    category: "Neuroscience",
    desc: "Test your understanding of Amygdala threat perception, tonic baseline dopamine vs phasic spikes, and receptor down-regulation.",
    questions: [
      {
        id: 1,
        question: "Which brain region initiates emotional avoidance when faced with ambiguous tasks?",
        options: ["Prefrontal Cortex", "Amygdala (Limbic System)", "Hippocampus", "Cerebellum"],
        correctAnswer: 1,
        explanation: "The Amygdala evaluates emotional threat. When a task triggers self-doubt or anxiety, it initiates an immediate avoidance response."
      },
      {
        id: 2,
        question: "What happens to D2 dopamine receptors when subjected to frequent high notifications?",
        options: [
          "Receptors up-regulate to absorb more dopamine.",
          "Receptors down-regulate, dropping baseline motivation.",
          "Receptors freeze permanently.",
          "Receptors double in density."
        ],
        correctAnswer: 1,
        explanation: "Frequent phasic dopamine spikes cause receptor down-regulation to maintain homeostasis, lowering your baseline drive."
      },
      {
        id: 3,
        question: "Why does the 120-second activation protocol bypass limbic hijacking?",
        options: [
          "It forces adrenaline production.",
          "It is so short that the Amygdala threat alarm is not triggered.",
          "It permanently shuts off emotions.",
          "It replaces all glucose in the brain."
        ],
        correctAnswer: 1,
        explanation: "A 2-minute commitment feels so small that the Amygdala does not perceive a threat, allowing executive initiation."
      },
      {
        id: 4,
        question: "What is the molecule of desire and anticipation in human neuroscience?",
        options: ["Serotonin", "Dopamine", "Endorphin", "Oxytocin"],
        correctAnswer: 1,
        explanation: "Dopamine is the neurotransmitter of desire and anticipation, not simple pleasure."
      }
    ]
  },
  "atomic-habits-benchmark": {
    slug: "atomic-habits-benchmark",
    title: "Atomic Habits & Discipline Benchmark",
    category: "Habits",
    desc: "Evaluate your mastery of the 4 Laws of Behavior Change, Implementation Intentions, and the 2-Minute Rule.",
    questions: [
      {
        id: 1,
        question: "What type of habit focus creates the most lasting behavioral transformation?",
        options: ["Outcome-based habits", "Identity-based habits", "Goal-based habits", "Reward-only habits"],
        correctAnswer: 1,
        explanation: "Identity-based habits focus on who you wish to become. Every action is a vote for your desired identity."
      },
      {
        id: 2,
        question: "Which of James Clear's 4 Laws corresponds to the Cue stage of a habit?",
        options: ["Make it Easy", "Make it Obvious", "Make it Attractive", "Make it Satisfying"],
        correctAnswer: 1,
        explanation: "The 1st Law (Make it Obvious) governs the Cue by designing environment visibility."
      },
      {
        id: 3,
        question: "What is the core rule of Habit Stacking?",
        options: [
          "Stacking 10 habits at once in the morning.",
          "Connecting a new habit immediately after an existing automated routine.",
          "Stacking rewards after 30 days.",
          "Replacing sleep with habit execution."
        ],
        correctAnswer: 1,
        explanation: "Habit Stacking formula: 'After I [CURRENT HABIT], I will [NEW HABIT].'"
      },
      {
        id: 4,
        question: "Why should you 'Never Miss Twice' when building a habit?",
        options: [
          "Missing twice triggers a financial penalty.",
          "Missing once is a mistake; missing twice is the start of a new bad habit.",
          "Missing twice erases 100% of memory.",
          "It shuts down the basal ganglia."
        ],
        correctAnswer: 1,
        explanation: "Consistency maintains identity momentum. A single miss is an accident; two misses creates a new avoidance routine."
      }
    ]
  },
  "cognitive-biases-test": {
    slug: "cognitive-biases-test",
    title: "Cognitive Biases & Decision Making Test",
    category: "Mental Models",
    desc: "Examine your susceptibility to System 1 heuristics, Loss Aversion, Availability Bias, and Anchoring.",
    questions: [
      {
        id: 1,
        question: "According to Kahneman, how much more powerful is the psychological pain of loss compared to the pleasure of an equal gain?",
        options: ["Same intensity", "Twice as powerful (Loss Aversion)", "Five times as powerful", "Ten times as powerful"],
        correctAnswer: 1,
        explanation: "Loss Aversion demonstrates that losing $100 hurts psychologically twice as much as gaining $100 feels good."
      },
      {
        id: 2,
        question: "Which system of thinking is fast, automatic, emotional, and lazy?",
        options: ["System 2", "System 1", "System 3", "System 0"],
        correctAnswer: 1,
        explanation: "System 1 operates automatically and quickly with little or no effort."
      },
      {
        id: 3,
        question: "What is the Availability Heuristic?",
        options: [
          "Estimating probability based on how easily examples come to mind.",
          "Buying things because they are on sale.",
          "Forgetting memories after 24 hours.",
          "Relying on sleep to solve problems."
        ],
        correctAnswer: 0,
        explanation: "The Availability Heuristic leads us to overestimate the likelihood of vivid or recent events."
      },
      {
        id: 4,
        question: "What decision-making tool involves imagining a project has failed completely before launching it?",
        options: ["Postmortem", "Premortem", "Brainstorming", "Swot Analysis"],
        correctAnswer: 1,
        explanation: "A Premortem assumes failure beforehand to identify hidden blind spots and risks."
      }
    ]
  },
  "deep-work-focus-audit": {
    slug: "deep-work-focus-audit",
    title: "Deep Work & Attention Residue Audit",
    category: "Focus",
    desc: "Assess your focus rituals, Attention Residue friction, and 90-minute ultradian rhythm optimization.",
    questions: [
      {
        id: 1,
        question: "What is Attention Residue?",
        options: [
          "Physical fatigue in the eyes.",
          "Cognitive distraction left behind when rapidly switching between tasks.",
          "Dopamine depletion after sleeping.",
          "Memory consolidation during deep work."
        ],
        correctAnswer: 1,
        explanation: "Attention Residue occurs when switching from Task A to Task B. Part of your attention remains stuck on Task A."
      },
      {
        id: 2,
        question: "What is the optimal focus duration aligned with natural human ultradian rhythms?",
        options: ["10 minutes", "90 minutes", "4 hours", "8 hours"],
        correctAnswer: 1,
        explanation: "Human energy cycles in 90-minute ultradian rhythms of high performance followed by rest."
      },
      {
        id: 3,
        question: "Which deep work scheduling strategy divides time into distinct deep days vs shallow days?",
        options: ["Monastic Strategy", "Bimodal Strategy", "Rhythmic Strategy", "Journalistic Strategy"],
        correctAnswer: 1,
        explanation: "The Bimodal strategy divides your schedule into clearly demarcated deep blocks and shallow blocks."
      },
      {
        id: 4,
        question: "Why is a Shutdown Ritual essential at the end of the workday?",
        options: [
          "It deletes all emails automatically.",
          "It frees your working memory from uncompleted task anxiety (Zeigarnik Effect).",
          "It triggers caffeine absorption.",
          "It replaces sleep."
        ],
        correctAnswer: 1,
        explanation: "A shutdown ritual convinces the brain that open loops are captured, preventing evening rumination."
      }
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(detailedQuizPackages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const pkg = detailedQuizPackages[slug];
  if (!pkg) return { title: "Quiz Package Not Found | Behavior School" };

  return {
    title: `${pkg.title} | Behavior School Quizzes`,
    description: pkg.desc,
    openGraph: {
      title: pkg.title,
      description: pkg.desc,
      url: `https://behavior-school.github.io/quiz/${pkg.slug}`,
      siteName: "Behavior School",
      type: "website",
    },
  };
}

export default async function IndividualQuizPackagePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pkg = detailedQuizPackages[slug];
  if (!pkg) notFound();

  const jsonLdQuiz = {
    "@context": "https://schema.org",
    "@type": "Quiz",
    "name": pkg.title,
    "description": pkg.desc,
    "url": `https://behavior-school.github.io/quiz/${pkg.slug}`,
    "educationalAlignment": pkg.category
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdQuiz) }}
      />

      <main className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/quiz"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Quizzes</span>
        </Link>

        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--muted)] border border-[var(--border)] text-xs font-semibold text-[var(--primary)]">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{pkg.category} Package</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[var(--foreground)] tracking-tight">
              {pkg.title}
            </h1>
            <p className="text-xs sm:text-sm text-[var(--muted-foreground)] leading-relaxed">
              {pkg.desc}
            </p>
          </div>

          {/* Interactive Quiz Component */}
          <InteractiveQuiz quizId={pkg.slug} title={pkg.title} questions={pkg.questions} />
        </div>
      </main>
    </>
  );
}
