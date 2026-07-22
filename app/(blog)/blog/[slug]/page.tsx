import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Sparkles, CheckCircle2 } from "lucide-react";
import { YoutubeIcon } from "../../../components/Icons";
import MarkdownRenderer from "../../../components/MarkdownRenderer";
import ProcrastinationSimulator from "../../../components/ProcrastinationSimulator";
import InteractiveQuiz, { Question } from "../../../components/InteractiveQuiz";
import InteractivePoll, { PollOption } from "../../../components/InteractivePoll";

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  content: string;
  keyTakeaways: string[];
  recommendedVideo: string;
  hasProcrastinationSimulator?: boolean;
  quiz?: { title: string; questions: Question[] };
  poll?: { question: string; options: PollOption[] };
}

const articlesData: Record<string, Article> = {
  "neuroscience-of-procrastination": {
    slug: "neuroscience-of-procrastination",
    title: "The Neuroscience of Procrastination: Why Willpower Fails",
    excerpt: "Discover why procrastination is an emotional regulation problem caused by amygdala threat perception rather than a time management flaw.",
    category: "Neuroscience",
    readTime: "12 min read",
    date: "July 20, 2026",
    hasProcrastinationSimulator: true,
    recommendedVideo: "Why Smart People Still Procrastinate",
    keyTakeaways: [
      "Procrastination is an emotional regulation failure, not a time-management issue.",
      "The amygdala perceives difficult or ambiguous tasks as physical threats.",
      "Lowering task activation energy to 120 seconds bypasses limbic avoidance.",
      "Negative reinforcement loops reward avoidance with short-term dopamine spikes."
    ],
    poll: {
      question: "What is your primary trigger for procrastinating on major projects?",
      options: [
        { id: 1, text: "Fear of imperfect output (Perfectionism)", votes: 42 },
        { id: 2, text: "Task ambiguity / Not knowing step 1", votes: 35 },
        { id: 3, text: "Sheer boredom & low stimulation", votes: 18 },
        { id: 4, text: "Physical mental exhaustion", votes: 12 }
      ]
    },
    quiz: {
      title: "Procrastination Neurobiology Quiz",
      questions: [
        {
          id: 1,
          question: "Which brain region is primarily responsible for triggering task avoidance when faced with ambiguity?",
          options: ["Prefrontal Cortex", "Amygdala (Limbic System)", "Hippocampus", "Cerebellum"],
          correctAnswer: 1,
          explanation: "The Amygdala evaluates emotional threat. When a task triggers anxiety or self-doubt, it initiates an immediate avoidance response to protect short-term emotional state."
        },
        {
          id: 2,
          question: "Why does lowering task commitment to 120 seconds work biologically?",
          options: [
            "It increases adrenaline production.",
            "It is so small that the Amygdala threat alarm is not triggered.",
            "It forces System 2 to shut down.",
            "It permanently eliminates all fatigue."
          ],
          correctAnswer: 1,
          explanation: "The Amygdala evaluates short-term threat. A 120-second commitment feels so harmless that threat alarms remain un-triggered, allowing executive initiation."
        }
      ]
    },
    content: `Procrastination is one of the most widespread challenges in modern human behavior. Most productivity advice frames procrastination as a flaw in time management or self-discipline.

However, modern neuroimaging studies reveal a fundamentally different truth: **procrastination is an emotional regulation failure.**

## The Limbic System vs Prefrontal Cortex Conflict

When you sit down to tackle a complex project, your brain initiates a struggle between two key regions:

- **The Prefrontal Cortex (PFC)**: Responsible for long-term planning, decision-making, abstract reasoning, and executive control. It understands that finishing your report will lead to career advancement.
- **The Limbic System (Amygdala)**: The fast, automatic, emotional brain that seeks immediate pleasure and avoids present pain. It evaluates present emotional threat.

When a task triggers feelings of self-doubt, anxiety, boredom, or perfectionism, the amygdala perceives the task as an emotional threat. To protect you from negative emotion, it triggers an immediate avoidance response.

## The Dopamine Relief Trap & Negative Reinforcement

When you switch away from the difficult task to check your phone or clean your desk, your brain experiences an immediate drop in anxiety paired with a small dopamine spike.

This creates a powerful **negative reinforcement loop**: your brain learns that avoiding the task produces short-term emotional relief. Over time, this loop becomes automated into the basal ganglia.

## The 2-Minute Activation Protocol

To bypass limbic system hijacking, shrink the activation energy required to initiate action:

- **Rule**: Commit to working on the task for exactly 120 seconds.
- **Why it works**: The limbic system evaluates short-term threat. A 2-minute commitment feels so small that the amygdala does not trigger threat alarms.
- **Zeigarnik Effect**: Once engaged for 120 seconds, the brain naturally seeks closure, creating momentum to continue.`
  },
  "dopamine-fasting-myth-vs-science": {
    slug: "dopamine-fasting-myth-vs-science",
    title: "Dopamine Recalibration: Myth vs Biological Science",
    excerpt: "How baseline dopamine vs peak spikes govern daily drive, and how to structure notification friction to prevent chronic distraction.",
    category: "Brain Science",
    readTime: "14 min read",
    date: "July 18, 2026",
    recommendedVideo: "Dopamine Explained",
    keyTakeaways: [
      "Dopamine is the neurotransmitter of desire and anticipation, not pleasure.",
      "Frequent high spikes cause baseline dopamine levels to drop, lowering baseline drive.",
      "Friction design restores tonic dopamine sensitivity within 48-72 hours."
    ],
    poll: {
      question: "How many hours after waking do you usually check your phone?",
      options: [
        { id: 1, text: "Within 5 minutes of waking", votes: 54 },
        { id: 2, text: "After morning routine (30-60 mins)", votes: 28 },
        { id: 3, text: "Only after starting deep work", votes: 14 }
      ]
    },
    quiz: {
      title: "Dopamine Neurochemistry Quiz",
      questions: [
        {
          id: 1,
          question: "What type of dopamine activity governs your ongoing baseline motivation and energy?",
          options: ["Phasic Spikes", "Tonic Dopamine", "Serotonin Transporters", "Cortisol Glucocorticoids"],
          correctAnswer: 1,
          explanation: "Tonic dopamine represents the circulating baseline level of dopamine that dictates ongoing drive and effort willingness."
        }
      ]
    },
    content: `Dopamine is frequently misunderstood in popular culture as the "pleasure chemical". In reality, neuroscience demonstrates that dopamine is the **molecule of anticipation and desire.**

## Baseline vs Peak Dopamine Mechanics

Your brain maintains two forms of dopamine activity:

- **Tonic Dopamine (Baseline)**: The ongoing level of dopamine circulating in your brain that determines your baseline energy and motivation.
- **Phasic Dopamine (Spikes)**: Rapid bursts of dopamine triggered by unexpected rewards, notifications, or novel stimuli.

When you constantly trigger high phasic spikes through social media, rapid video consumption, or notification checking, your brain down-regulates its dopamine receptors (D2 receptors) to maintain homeostasis.

## The Result: Elevated Boredom Thresholds

As receptor sensitivity drops, your baseline dopamine plummets. Standard low-stimulus tasks—such as reading a book, studying, or coding—feel unbearable because your baseline dopamine cannot compete with recent high-stimulus spikes.

## Rebuilding Baseline Motivation

- **Environment Friction**: Place phones in another room during working hours.
- **Deliberate Low-Stimulus Buffer**: Spend 5 minutes staring at a wall before starting deep work to allow baseline dopamine to normalize.`
  },
  "active-recall-spaced-repetition-guide": {
    slug: "active-recall-spaced-repetition-guide",
    title: "Mastering Active Recall & Spaced Repetition for Rapid Skill Acquisition",
    excerpt: "Why passive reading creates an illusion of competence and how hippocampal retrieval forces synaptic plasticity.",
    category: "Learning & Productivity",
    readTime: "11 min read",
    date: "July 15, 2026",
    recommendedVideo: "How to Learn Faster",
    keyTakeaways: [
      "Passive re-reading creates an illusion of competence without memory consolidation.",
      "Active retrieval forces the hippocampus to strengthen synaptic connections.",
      "Spacing review sessions across 1-3-7-14 day intervals maximizes long-term memory."
    ],
    poll: {
      question: "What is your current main study/learning method?",
      options: [
        { id: 1, text: "Re-reading notes & highlighting text", votes: 48 },
        { id: 2, text: "Active Recall / Self-Testing / Flashcards", votes: 38 },
        { id: 3, text: "Re-watching video lectures", votes: 14 }
      ]
    },
    content: `Most students and professionals learn inefficiently by relying on passive methods: re-reading notes, highlighting text, or watching lectures repeatedly.

Neuroscience research shows that passive reading creates a psychological illusion called **Fluency Bias**—confusing the ease of reading with actual mastery.

## The Synaptic Retrieval Mechanism

Memory is not stored like files in a hard drive; it is represented by neural networks. When you force your brain to retrieve information from memory without looking at notes (**Active Recall**), you create micro-friction in the hippocampus.

This retrieval effort signals to the brain that the information is critical for survival, triggering **Long-Term Potentiation (LTP)** and strengthening synaptic connections.

## Spaced Repetition Intervals

To prevent forgotten memory decay (Ebbinghaus Forgetting Curve), review information at expanding intervals:

- **Session 1**: 24 hours after initial learning.
- **Session 2**: 3 days later.
- **Session 3**: 7 days later.
- **Session 4**: 14 days later.`
  },
  "first-principles-thinking-habits": {
    slug: "first-principles-thinking-habits",
    title: "First Principles Thinking: Deconstructing Bad Habit Loops",
    excerpt: "How to strip behavior change down to foundational physical truths and design friction-free daily routines.",
    category: "Mental Models",
    readTime: "10 min read",
    date: "July 10, 2026",
    recommendedVideo: "How Your Brain Creates Habits",
    keyTakeaways: [
      "First Principles Thinking deconstructs problems down to fundamental truths.",
      "Habits rely on environmental friction rather than heroic self-control.",
      "Modify the Response component while preserving Cue and Reward."
    ],
    content: `When trying to change a habit, most people copy popular advice or rely on sheer willpower.

First Principles Thinking—a mental model popularized by Aristotle and modern innovators—requires breaking down human behavior to its fundamental physical truths and building upward from there.

## The Physics of Behavior Change

At the physical level, human behavior is governed by **Friction**:

- **High Friction** = Low Probability of Action.
- **Low Friction** = High Probability of Action.

If you want to build a good habit, reduce physical friction (e.g. put workout clothes next to your bed). If you want to break a bad habit, increase physical friction (e.g. log out of social accounts after every session).`
  }
};

export function generateStaticParams() {
  return Object.keys(articlesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articlesData[slug];
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
  const article = articlesData[slug];
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

          {/* Embedded Community Poll */}
          {article.poll && (
            <InteractivePoll question={article.poll.question} options={article.poll.options} />
          )}

          {/* Markdown Rendered Body */}
          <MarkdownRenderer content={article.content} />

          {/* Embedded Knowledge Quiz */}
          {article.quiz && (
            <InteractiveQuiz title={article.quiz.title} questions={article.quiz.questions} />
          )}

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
