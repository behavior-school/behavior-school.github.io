import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, Sparkles, CheckCircle2, FileCode } from "lucide-react";
import MarkdownRenderer from "../../../components/MarkdownRenderer";
import HabitSimulator from "../../../components/HabitSimulator";
import CognitiveTester from "../../../components/CognitiveTester";
import InteractiveQuiz, { Question } from "../../../components/InteractiveQuiz";
import InteractivePoll, { PollOption } from "../../../components/InteractivePoll";

interface BookDetail {
  slug: string;
  title: string;
  author: string;
  year: string;
  tagline: string;
  summary: string;
  keyTakeaways: string[];
  protocolSteps: string[];
  markdownContent: string;
  hasHabitSimulator?: boolean;
  hasCognitiveTester?: boolean;
  quiz?: { title: string; questions: Question[] };
  poll?: { question: string; options: PollOption[] };
}

const detailedBooksData: Record<string, BookDetail> = {
  "atomic-habits": {
    slug: "atomic-habits",
    title: "Atomic Habits",
    author: "James Clear",
    year: "2018",
    tagline: "An Easy & Proven Way to Build Good Habits & Break Bad Ones",
    hasHabitSimulator: true,
    summary: "Atomic Habits presents a comprehensive practical framework for improving every day by 1%. James Clear demonstrates that long-term outcome success is not created by high willpower or ambitious goals, but by designing friction-free environmental systems.",
    keyTakeaways: [
      "Habits do not change your life overnight; small 1% improvements compound over time.",
      "Focus on identity-based habits ('I am a runner') rather than outcome-based habits ('I want to run a marathon').",
      "Environment is the invisible hand that shapes human behavior.",
      "Never miss twice. Missing once is a mistake; missing twice is the start of a new bad habit."
    ],
    protocolSteps: [
      "Write an Implementation Intention: 'I will [BEHAVIOR] at [TIME] in [LOCATION]'.",
      "Apply the 2-Minute Rule: Shrink the initial habit action until it takes under 120 seconds.",
      "Temptation Bundling: Pair an action you need to do with an action you want to do."
    ],
    poll: {
      question: "Which of the 4 Laws of Behavior Change do you find hardest to maintain?",
      options: [
        { id: 1, text: "Make it Obvious (Cue)", votes: 24 },
        { id: 2, text: "Make it Attractive (Craving)", votes: 31 },
        { id: 3, text: "Make it Easy (Response - 2 Min Rule)", votes: 52 },
        { id: 4, text: "Make it Satisfying (Reward)", votes: 19 }
      ]
    },
    quiz: {
      title: "Atomic Habits Framework Quiz",
      questions: [
        {
          id: 1,
          question: "What type of habits produce the most lasting permanent behavioral change according to James Clear?",
          options: ["Outcome-based habits", "Identity-based habits", "Reward-based habits", "Goal-based habits"],
          correctAnswer: 1,
          explanation: "Identity-based habits focus on who you wish to become. Every action you take is a vote for your desired identity."
        }
      ]
    },
    markdownContent: `## The Four Laws of Behavior Change

Every habit loop consists of four distinct cognitive stages: **Cue, Craving, Response, and Reward.**

### 1st Law: Make it Obvious (Cue)

Your brain is a prediction machine. It continuously scans your physical environment for cues that signal rewards.

- **Design your environment**: Place your guitar in the middle of the living room; place healthy food at eye level in the fridge.
- **Habit Stacking**: Connect a new habit to an existing automated routine: *"After I [CURRENT HABIT], I will [NEW HABIT]."*

### 2nd Law: Make it Attractive (Craving)

It is the anticipation of a reward—not the fulfillment of it—that gets us to take action. Dopamine spikes occur during anticipation.

- **Reframe your mindset**: Shift from *"I have to do this"* to *"I get to build this skill."*

### 3rd Law: Make it Easy (Response)

Human behavior follows the Law of Least Effort. We naturally gravitate toward the option that requires the least physical friction.

- **Reduce friction**: Log out of social accounts after each session. Lay out workout gear the night before.
- **The 2-Minute Rule**: When you start a new habit, it should take less than two minutes to execute.

### 4th Law: Make it Satisfying (Reward)

What is immediately rewarded is repeated. What is immediately punished is avoided.

- **Use instant reinforcement**: Keep a visual habit tracker and cross off completed days to trigger immediate satisfaction.`
  },
  "thinking-fast-and-slow": {
    slug: "thinking-fast-and-slow",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    year: "2011",
    tagline: "The Two Systems That Drive the Way We Think",
    hasCognitiveTester: true,
    summary: "Nobel laureate Daniel Kahneman explains the two systems that drive human thought: System 1 is fast, intuitive, and emotional; System 2 is slow, analytical, and logical.",
    keyTakeaways: [
      "System 1 operates automatically with high speed and zero conscious effort, relying on mental shortcuts.",
      "System 2 requires conscious energy, attention, and cognitive work, but is inherently lazy.",
      "Loss Aversion: The pain of losing $100 is psychologically twice as powerful as the pleasure of gaining $100.",
      "Availability Heuristic: We estimate the probability of events based on how easily examples come to mind."
    ],
    protocolSteps: [
      "Conduct a Premortem before finalizing major decisions.",
      "Pause for 5 minutes before making high-stakes financial choices to activate System 2.",
      "Beware of Anchoring Bias in negotiations."
    ],
    markdownContent: `## Dual-Process Theory: System 1 vs System 2

Human judgment is constantly negotiating between two fundamental modes of thought:

### System 1 (Fast Thinking)

- Operates automatically, quickly, with little or no effort and no sense of voluntary control.
- Generates complex patterns of ideas, but cannot perform complex logical operations.
- Prone to systemic cognitive biases and logical fallacies.

### System 2 (Slow Thinking)

- Allocates attention to effortful mental operations, including complex computations.
- Associated with the subjective experience of agency, choice, and concentration.
- Requires high glucose consumption and mental energy; lazy by default.

## Key Cognitive Biases Revealed

- **WYSIATI (What You See Is All There Is)**: System 1 builds the best possible story out of available information, ignoring unknown data.
- **Regression to the Mean**: Extreme performances are naturally followed by average outcomes, which humans mistake for causal feedback.`
  },
  "deep-work": {
    slug: "deep-work",
    title: "Deep Work",
    author: "Cal Newport",
    year: "2016",
    tagline: "Rules for Focused Success in a Distracted World",
    summary: "Computer science professor Cal Newport argues that deep work—the ability to focus without distraction on a cognitively demanding task—is becoming rare and extremely valuable.",
    keyTakeaways: [
      "Deep Work is necessary to master hard skills and produce elite-level output rapidly.",
      "Shallow Work (emails, Slack messages, quick meetings) creates an illusion of productivity without creating real value.",
      "Attention Residue: Switching tasks leaves a cognitive hangover that degrades focus on the next task."
    ],
    protocolSteps: [
      "Block 90-minute distraction-free deep work focus blocks.",
      "Quarantine your phone in another room during focus sessions.",
      "Establish a strict shutdown ritual at the end of the workday."
    ],
    markdownContent: `## The Deep Work Philosophy

To thrive in the modern economy, you must master two core abilities:

1. The ability to master hard things quickly.
2. The ability to produce at an elite level, in terms of both quality and speed.

### The Four Deep Work Scheduling Strategies

- **Monastic Strategy**: Eliminate all shallow obligations completely for long stretches.
- **Bimodal Strategy**: Divide your time into distinct deep periods and shallow periods.
- **Rhythmic Strategy**: Transform deep work into a daily 90-minute morning habit.
- **Journalistic Strategy**: Fit deep work into your schedule whenever free blocks open up.

### The Attention Residue Effect

When you switch from Task A to Task B, your attention does not immediately follow. A residue of your attention remains stuck thinking about Task A, compromising your cognitive bandwidth.`
  },
  "power-of-habit": {
    slug: "power-of-habit",
    title: "The Power of Habit",
    author: "Charles Duhigg",
    year: "2012",
    tagline: "Why We Do What We Do in Life and Business",
    summary: "Charles Duhigg explores the science behind habit formation in individuals, organizations, and societies, showing how understanding the habit loop allows us to transform our lives.",
    keyTakeaways: [
      "Habits emerge because the brain is constantly looking for ways to save energy.",
      "The Habit Loop consists of Cue, Routine, and Reward.",
      "You cannot extinguish a bad habit; you can only change the Routine while keeping Cue and Reward intact."
    ],
    protocolSteps: [
      "Identify the exact Cue trigger (Time, Location, Emotional State, Other People, Immediately Preceding Action).",
      "Substitute the physical Routine while preserving the same emotional Reward.",
      "Focus on Keystone Habits like daily physical exercise."
    ],
    markdownContent: `## The Golden Rule of Habit Change

The key to transforming bad habits is understanding that you cannot simply erase a habit loop. You must preserve the **Cue** and the **Reward**, but swap out the **Routine**.

### The Anatomy of the Habit Loop

1. **The Cue**: A trigger that tells your brain to go into automatic mode.
2. **The Routine**: The behavior itself (physical, mental, or emotional).
3. **The Reward**: The positive reinforcement that helps your brain decide if this loop is worth remembering.

### Keystone Habits

Keystone habits trigger widespread positive cascades across multiple areas of life. For example, establishing a regular exercise routine naturally leads to better nutrition, improved focus, and disciplined expenditure.`
  },
  "drive": {
    slug: "drive",
    title: "Drive: The Surprising Truth About Motivation",
    author: "Daniel H. Pink",
    year: "2009",
    tagline: "Autonomy, Mastery, and Purpose",
    summary: "Daniel Pink demonstrates that traditional extrinsic rewards (carrots and sticks) destroy creativity and intrinsic drive for modern cognitive work.",
    keyTakeaways: [
      "Motivation 2.0 (external rewards and punishments) only works for algorithmic, repetitive tasks.",
      "Motivation 3.0 relies on three intrinsic pillars: Autonomy, Mastery, and Purpose.",
      "Extrinsic rewards can extinguish intrinsic motivation, diminish performance, and crush creativity."
    ],
    protocolSteps: [
      "Increase personal autonomy over Task, Time, Technique, and Team.",
      "Set deliberate practice goals designed to foster continuous Mastery.",
      "Connect daily work routines to a clear overarching Purpose."
    ],
    markdownContent: `## The Triad of Intrinsic Motivation (Motivation 3.0)

### 1. Autonomy
The desire to direct our own lives. High performers require control over:

- **Task**: What they do.
- **Time**: When they do it.
- **Technique**: How they do it.
- **Team**: Who they do it with.

### 2. Mastery
The desire to get better and better at something that matters. Mastery is a mindset:

- It requires effort, deliberate practice, and embracing difficulty.
- It is an asymptote—you can approach it, but never fully touch perfection.

### 3. Purpose
The yearning to do what we do in the service of something larger than ourselves. Purpose provides the context and energy required for long-term perseverance.`
  },
  "mindset": {
    slug: "mindset",
    title: "Mindset: The New Psychology of Success",
    author: "Carol S. Dweck",
    year: "2006",
    tagline: "How We Can Learn to Fulfill Our Potential",
    summary: "Stanford psychologist Carol Dweck shows how our beliefs about our capabilities dictate our achievement, resilience, and personal growth.",
    keyTakeaways: [
      "Fixed Mindset assumes character, intelligence, and creative ability are static givens.",
      "Growth Mindset thrives on challenge and sees failure not as evidence of un-intelligence, but as a springboard for growth.",
      "Praising effort rather than intelligence fosters long-term resilience."
    ],
    protocolSteps: [
      "Reframe mistakes as diagnostic data rather than personal shortcomings.",
      "Add the word 'YET' to any limiting self-talk statement.",
      "Praise effort, strategy, and progress rather than inherent talent."
    ],
    markdownContent: `## Fixed vs Growth Mindset Principles

### Fixed Mindset
- Believes intelligence is static.
- Avoids challenges to prevent failure.
- Sees effort as proof of lack of talent.

### Growth Mindset
- Believes intelligence can be developed.
- Embraces challenges enthusiastically.
- Sees effort as the path to mastery.

### The Power of 'YET'

Whenever you find yourself thinking *"I don't know how to code"* or *"I'm not good at public speaking"*, append the word **YET**. This simple linguistic shift re-engages neuroplasticity and growth orientation.`
  }
};

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
