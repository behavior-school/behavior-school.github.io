import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Sparkles, Clock, ArrowRight, Brain, ShieldAlert, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "Behavior School Blog — Science-Backed Articles & Field Guides",
  description: "Read in-depth research breakdowns on practical psychology, dopamine mechanics, habit formation, and mental models.",
  openGraph: {
    title: "Behavior School Blog — Practical Psychology & Neuroscience",
    description: "Deep dive articles on habits, focus, neuroscience, and mental models.",
    url: "https://behavior-school.github.io/blog",
    siteName: "Behavior School",
    type: "website",
  },
};

export const blogPosts = [
  {
    slug: "neuroscience-of-procrastination",
    title: "The Neuroscience of Procrastination: Why Willpower Fails",
    excerpt: "Discover why procrastination is an emotional regulation problem caused by amygdala threat perception rather than a time management flaw.",
    category: "Neuroscience",
    readTime: "6 min read",
    date: "July 20, 2026",
    author: "Behavior School Research",
    icon: Brain
  },
  {
    slug: "dopamine-fasting-myth-vs-science",
    title: "Dopamine Recalibration: Myth vs Biological Science",
    excerpt: "How baseline dopamine vs peak spikes govern daily drive, and how to structure notification friction to prevent chronic distraction.",
    category: "Brain Science",
    readTime: "8 min read",
    date: "July 18, 2026",
    author: "Behavior School Research",
    icon: Cpu
  },
  {
    slug: "active-recall-spaced-repetition-guide",
    title: "Mastering Active Recall & Spaced Repetition for Rapid Skill Acquisition",
    excerpt: "Why passive reading creates an illusion of competence and how hippocampal retrieval forces synaptic plasticity.",
    category: "Learning & Productivity",
    readTime: "7 min read",
    date: "July 15, 2026",
    author: "Behavior School Research",
    icon: Sparkles
  },
  {
    slug: "first-principles-thinking-habits",
    title: "First Principles Thinking: Deconstructing Bad Habit Loops",
    excerpt: "How to strip behavior change down to foundational physical truths and design friction-free daily routines.",
    category: "Mental Models",
    readTime: "5 min read",
    date: "July 10, 2026",
    author: "Behavior School Research",
    icon: ShieldAlert
  }
];

export default function BlogIndexPage() {
  const jsonLdBlog = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Behavior School Blog",
    "url": "https://behavior-school.github.io/blog",
    "description": "Science-backed articles on practical psychology, neuroscience, and behavior change.",
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Educational Blog & Articles</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-4">
            Practical Psychology <span className="gradient-text">Field Guides</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-400">
            In-depth scientific breakdowns on habits, focus, neuroscience, and mental models.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => {
            const Icon = post.icon;
            return (
              <article
                key={post.slug}
                className="bg-slate-900/60 p-8 rounded-3xl border border-slate-800 flex flex-col justify-between hover:border-indigo-500/40 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-950/60 text-indigo-400 border border-indigo-800/40">
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">{post.date}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <span>Read Article</span>
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
