import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Sparkles, CheckCircle2 } from "lucide-react";
import { YoutubeIcon } from "../../../components/Icons";

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
}

const articlesData: Record<string, Article> = {
  "neuroscience-of-procrastination": {
    slug: "neuroscience-of-procrastination",
    title: "The Neuroscience of Procrastination: Why Willpower Fails",
    excerpt: "Discover why procrastination is an emotional regulation problem caused by amygdala threat perception rather than a time management flaw.",
    category: "Neuroscience",
    readTime: "6 min read",
    date: "July 20, 2026",
    recommendedVideo: "Why Smart People Still Procrastinate",
    keyTakeaways: [
      "Procrastination is an emotional regulation failure, not a time-management issue.",
      "The amygdala perceives difficult or ambiguous tasks as physical threats.",
      "Lowering task activation energy to 120 seconds bypasses limbic avoidance."
    ],
    content: `Procrastination is one of the most widespread challenges in modern human behavior. Most productivity advice frames procrastination as a flaw in time management or self-discipline.

However, modern neuroimaging studies reveal a fundamentally different truth: procrastination is an emotional regulation failure.

### The Limbic System vs Prefrontal Cortex Conflict

When you sit down to tackle a complex project, your brain initiates a struggle between two key regions:
1. The Prefrontal Cortex (PFC): Responsible for long-term planning, decision-making, and executive control.
2. The Limbic System (Amygdala): The fast, automatic, emotional brain that seeks immediate pleasure and avoids present pain.

When a task triggers feelings of self-doubt, anxiety, boredom, or perfectionism, the amygdala perceives the task as an emotional threat. To protect you from negative emotion, it triggers an immediate avoidance response.

### The Dopamine Relief Trap

When you switch away from the difficult task to check your phone or clean your desk, your brain experiences an immediate drop in anxiety paired with a small dopamine spike.

This creates a powerful negative reinforcement loop: your brain learns that avoiding the task produces short-term emotional relief.

### The 2-Minute Activation Protocol

To bypass limbic system hijacking, shrink the activation energy required to initiate action:
- Rule: Commit to working on the task for exactly 120 seconds.
- Why it works: The limbic system evaluates short-term threat. A 2-minute commitment feels so small that the amygdala does not trigger threat alarms. Once engaged, the Zeigarnik Effect creates cognitive momentum to keep going.`
  },
  "dopamine-fasting-myth-vs-science": {
    slug: "dopamine-fasting-myth-vs-science",
    title: "Dopamine Recalibration: Myth vs Biological Science",
    excerpt: "How baseline dopamine vs peak spikes govern daily drive, and how to structure notification friction to prevent chronic distraction.",
    category: "Brain Science",
    readTime: "8 min read",
    date: "July 18, 2026",
    recommendedVideo: "Dopamine Explained",
    keyTakeaways: [
      "Dopamine is the neurotransmitter of desire and anticipation, not pleasure.",
      "Frequent high spikes cause baseline dopamine levels to drop, lowering baseline drive.",
      "Friction design restores tonic dopamine sensitivity."
    ],
    content: `Dopamine is frequently misunderstood in popular culture as the "pleasure chemical". In reality, neuroscience demonstrates that dopamine is the molecule of anticipation and desire.

### Baseline vs Peak Dopamine Mechanics

Your brain maintains two forms of dopamine activity:
- Tonic Dopamine (Baseline): The ongoing level of dopamine circulating in your brain that determines your baseline energy and motivation.
- Phasic Dopamine (Spikes): Rapid bursts of dopamine triggered by unexpected rewards, notifications, or novel stimuli.

When you constantly trigger high phasic spikes through social media, rapid video consumption, or notification checking, your brain down-regulates its dopamine receptors (D2 receptors) to maintain homeostasis.

### The Result: Elevated Boredom Thresholds

As receptor sensitivity drops, your baseline dopamine plummets. Standard low-stimulus tasks—such as reading a book, studying, or coding—feel unbearable because your baseline dopamine cannot compete with recent high-stimulus spikes.

### Rebuilding Baseline Motivation

1. Environment Friction: Place phones in another room during working hours.
2. Deliberate Low-Stimulus Buffer: Spend 5 minutes staring at a wall before starting deep work to allow baseline dopamine to normalize.`
  },
  "active-recall-spaced-repetition-guide": {
    slug: "active-recall-spaced-repetition-guide",
    title: "Mastering Active Recall & Spaced Repetition for Rapid Skill Acquisition",
    excerpt: "Why passive reading creates an illusion of competence and how hippocampal retrieval forces synaptic plasticity.",
    category: "Learning & Productivity",
    readTime: "7 min read",
    date: "July 15, 2026",
    recommendedVideo: "How to Learn Faster",
    keyTakeaways: [
      "Passive re-reading creates an illusion of competence without memory consolidation.",
      "Active retrieval forces the hippocampus to strengthen synaptic connections.",
      "Spacing review sessions across 1-3-7-14 day intervals maximizes long-term memory."
    ],
    content: `Most students and professionals learn inefficiently by relying on passive methods: re-reading notes, highlighting text, or watching lectures repeatedly.

Neuroscience research shows that passive reading creates a psychological illusion called Fluency Bias—confusing the ease of reading with actual mastery.

### The Synaptic Retrieval Mechanism

Memory is not stored like files in a hard drive; it is represented by neural networks. When you force your brain to retrieve information from memory without looking at notes (Active Recall), you create micro-friction in the hippocampus.

This retrieval effort signals to the brain that the information is critical for survival, triggering Long-Term Potentiation (LTP) and strengthening synaptic connections.

### Spaced Repetition Intervals

To prevent forgotten memory decay (Ebbinghaus Forgetting Curve), review information at expanding intervals:
- Session 1: 24 hours after initial learning.
- Session 2: 3 days later.
- Session 3: 7 days later.
- Session 4: 14 days later.`
  },
  "first-principles-thinking-habits": {
    slug: "first-principles-thinking-habits",
    title: "First Principles Thinking: Deconstructing Bad Habit Loops",
    excerpt: "How to strip behavior change down to foundational physical truths and design friction-free daily routines.",
    category: "Mental Models",
    readTime: "5 min read",
    date: "July 10, 2026",
    recommendedVideo: "How Your Brain Creates Habits",
    keyTakeaways: [
      "First Principles Thinking deconstructs problems down to fundamental truths.",
      "Habits rely on environmental friction rather than heroic self-control.",
      "Modify the Response component while preserving Cue and Reward."
    ],
    content: `When trying to change a habit, most people copy popular advice or rely on sheer willpower.

First Principles Thinking—a mental model popularized by Aristotle and modern innovators—requires breaking down human behavior to its fundamental physical truths and building upward from there.

### The Physics of Behavior Change

At the physical level, human behavior is governed by Friction:
- High Friction = Low Probability of Action.
- Low Friction = High Probability of Action.

If you want to build a good habit, reduce physical friction (e.g. put workout clothes next to your bed). If you want to break a bad habit, increase physical friction (e.g. log out of social accounts after every session).`
  }
};

export function generateStaticParams() {
  return Object.keys(articlesData).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = articlesData[params.slug];
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

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articlesData[params.slug];
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
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Field Guides</span>
        </Link>

        <article className="bg-slate-900/60 p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-2xl space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-4 text-xs">
              <span className="font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-950 text-indigo-400 border border-indigo-800/40">
                {article.category}
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">{article.date}</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {article.title}
            </h1>
          </div>

          {/* Key Takeaways Box */}
          <div className="p-6 rounded-2xl bg-indigo-950/40 border border-indigo-500/30">
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-300 mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>Key Article Takeaways</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
              {article.keyTakeaways.map((takeaway, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Body */}
          <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 font-normal">
            {article.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Recommended Video Box */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Recommended Video Lesson
              </span>
              <h4 className="text-base font-bold text-white mt-0.5">
                "{article.recommendedVideo}"
              </h4>
            </div>
            <a
              href="https://www.youtube.com/@behavior-school"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-red-600 hover:bg-red-500 transition-colors flex items-center justify-center gap-2 shrink-0"
            >
              <YoutubeIcon className="w-4 h-4 fill-white" />
              <span>Watch on YouTube</span>
            </a>
          </div>
        </article>
      </main>
    </>
  );
}
