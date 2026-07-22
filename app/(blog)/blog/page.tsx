import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Clock, ArrowRight, Brain, ShieldAlert, Cpu, Sparkles, HeartHandshake, Eye, Flame, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Behavior School Blog — Science-Backed Articles & Video Guides",
  description: "Read in-depth research breakdowns matching all Behavior School YouTube video lessons on practical psychology, neuroscience, and cognitive biases.",
  openGraph: {
    title: "Behavior School Blog — Practical Psychology & Neuroscience",
    description: "Deep dive articles matching all YouTube channel video lessons.",
    url: "https://behavior-school.github.io/blog",
    siteName: "Behavior School",
    type: "website",
  },
};

export const blogPosts = [
  {
    slug: "why-rejection-literally-hurts-neuroscience",
    title: "Why Rejection LITERALLY Hurts (According to Neuroscience)",
    excerpt: "Why the dorsal anterior cingulate cortex processes social rejection using the exact same neural pathways as physical pain.",
    category: "Social Neuroscience",
    readTime: "4 min read",
    duration: "3:57",
    date: "July 2026",
    videoTitle: "Why Rejection LITERALLY Hurts (According to Neuroscience)",
    icon: HeartHandshake
  },
  {
    slug: "intelligence-trap-why-smart-brains-overthink",
    title: "The Intelligence Trap: Why Smart Brains Overthink Everything",
    excerpt: "How high cognitive capacity leads to over-analyzing simple decisions, paralysis by analysis, and Default Mode Network hyper-activity.",
    category: "Psychology",
    readTime: "5 min read",
    duration: "4:44",
    date: "July 2026",
    videoTitle: "The Intelligence Trap: Why Smart Brains Overthink Everything",
    icon: Brain
  },
  {
    slug: "psychology-of-manipulation-invisible-strings",
    title: "The Invisible Strings: Mastering the Psychology of Manipulation",
    excerpt: "Deconstructing dark triad traits, gaslighting mechanisms, emotional anchoring, and how to protect your cognitive boundaries.",
    category: "Behavior Science",
    readTime: "5 min read",
    duration: "4:23",
    date: "July 2026",
    videoTitle: "The Invisible Strings: Mastering the Psychology of Manipulation",
    icon: Eye
  },
  {
    slug: "neuroscience-of-procrastination",
    title: "The Biological Battlefield: The Neuroscience of Procrastination",
    excerpt: "Why procrastination is an emotional regulation problem caused by amygdala threat perception rather than a time management flaw.",
    category: "Neuroscience",
    readTime: "6 min read",
    duration: "4:55",
    date: "July 2026",
    videoTitle: "The Biological Battlefield: The Neuroscience of Procrastination",
    icon: Cpu
  },
  {
    slug: "you-are-not-lazy-behavioral-breakdown",
    title: "You Are Not Lazy: The Deep Neurobiological Truth",
    excerpt: "A 20-minute masterclass uncoupling state exhaustion, dopamine deficit, and task ambiguity from personal moral failure.",
    category: "Neuroscience Masterclass",
    readTime: "20 min read",
    duration: "20:07",
    date: "June 2026",
    videoTitle: "You Are Not Lazy",
    icon: Flame
  },
  {
    slug: "train-your-brain-to-be-happy-7-habits",
    title: "How to Train Your Brain to Be Happy (7 Simple Habits)",
    excerpt: "Neuroplasticity protocols to rewire serotonin receptors, practice gratitude stacking, and regulate baseline tonic mood.",
    category: "Positive Psychology",
    readTime: "7 min read",
    duration: "6:25",
    date: "June 2026",
    videoTitle: "How to Train Your Brain to Be Happy (7 Simple Habits)",
    icon: Sparkles
  },
  {
    slug: "you-love-the-dream-not-the-work",
    title: "You Love the Dream, Not the Work: Escaping Outcome Fantasy",
    excerpt: "Why fantasy dopamine spikes trick your brain into feeling accomplishment before taking physical action.",
    category: "Habits & Discipline",
    readTime: "5 min read",
    duration: "4:47",
    date: "June 2026",
    videoTitle: "You Love the Dream, Not the Work",
    icon: ShieldAlert
  },
  {
    slug: "why-you-ignore-100-compliments-negativity-bias",
    title: "Why You Ignore 100 Compliments (The Negativity Bias)",
    excerpt: "Evolutionary psychology reveals why human brains weigh negative feedback 4x heavier than positive reinforcement.",
    category: "Cognitive Psychology",
    readTime: "9 min read",
    duration: "9:00",
    date: "June 2026",
    videoTitle: "Why You Ignore 100 Compliments (The Negativity Bias)",
    icon: Scale
  },
  {
    slug: "how-a-single-number-hacks-your-brain-anchoring",
    title: "How a Single Number Hacks Your Brain (The Anchoring Effect)",
    excerpt: "How initial numeric anchors skew financial negotiations, pricing perception, and intuitive estimations.",
    category: "Mental Models",
    readTime: "6 min read",
    duration: "6:08",
    date: "June 2026",
    videoTitle: "How a Single Number Hacks Your Brain (The Anchoring Effect)",
    icon: Scale
  },
  {
    slug: "why-you-fear-the-wrong-things-availability-heuristic",
    title: "Why You Fear the Wrong Things (The Availability Heuristic)",
    excerpt: "Why news media vividness distorts probability estimation and causes irrational risk assessment.",
    category: "Mental Models",
    readTime: "5 min read",
    duration: "5:22",
    date: "June 2026",
    videoTitle: "Why You Fear the Wrong Things (The Availability Heuristic)",
    icon: Eye
  },
  {
    slug: "why-this-ugly-chair-feels-perfect-ikea-effect",
    title: "Why This Ugly Chair Feels Perfect (The IKEA Effect)",
    excerpt: "Cognitive bias breakdown of why humans overvalue products and ideas they personally helped create.",
    category: "Behavioral Economics",
    readTime: "4 min read",
    duration: "4:26",
    date: "June 2026",
    videoTitle: "Why This Ugly Chair Feels Perfect (The IKEA Effect)",
    icon: Sparkles
  }
];

export default function BlogIndexPage() {
  const jsonLdBlog = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Behavior School Blog",
    "url": "https://behavior-school.github.io/blog",
    "description": "Science-backed articles and field guides matching YouTube channel video lessons.",
    "blogPost": blogPosts.map((post) => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "url": `https://behavior-school.github.io/blog/${post.slug}`,
      "datePublished": post.date,
      "articleSection": post.category,
      "description": post.excerpt
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBlog) }}
      />

      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--muted)] border border-[var(--border)] text-xs font-semibold text-[var(--primary)] mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>YouTube Video Companion Field Guides</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[var(--foreground)] tracking-tight mb-4">
            Practical Psychology <span className="text-[var(--primary)]">Articles</span>
          </h1>
          <p className="text-base sm:text-lg text-[var(--muted-foreground)]">
            Read comprehensive scientific breakdowns for all 11 YouTube lessons from @behavior-school.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => {
            const Icon = post.icon;
            return (
              <article
                key={post.slug}
                className="bg-[var(--card)] p-8 rounded-3xl border border-[var(--border)] flex flex-col justify-between hover:border-[var(--primary)]/50 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[var(--muted)] text-[var(--primary)] border border-[var(--border)]">
                      {post.category}
                    </span>
                    <span className="text-xs font-mono text-[var(--muted-foreground)] flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.duration}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-2xl bg-[var(--muted)] border border-[var(--border)] flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-[var(--primary-foreground)] transition-colors mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h2 className="text-lg font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-xs text-[var(--muted-foreground)] mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between text-xs">
                  <span className="text-[var(--muted-foreground)] font-mono">{post.readTime}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 font-bold text-[var(--primary)] hover:opacity-80 transition-opacity"
                  >
                    <span>Read Guide</span>
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
