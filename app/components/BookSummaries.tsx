"use client";

import React from "react";
import Link from "next/link";
import { BookOpen, CheckCircle2, ArrowRight } from "lucide-react";

export default function BookSummaries() {
  const books = [
    {
      slug: "atomic-habits",
      title: "Atomic Habits",
      author: "James Clear",
      year: "2018",
      tagline: "An Easy & Proven Way to Build Good Habits & Break Bad Ones",
      coreIdea: "Small 1% changes compounding over time create radical transformation. System design matters more than goal setting.",
      keyRules: [
        "Make it Obvious (Cue)",
        "Make it Attractive (Craving)",
        "Make it Easy (Response - 2 Minute Rule)",
        "Make it Satisfying (Reward)"
      ]
    },
    {
      slug: "thinking-fast-and-slow",
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      year: "2011",
      tagline: "The Two Systems That Drive the Way We Think",
      coreIdea: "Human judgment is governed by two cognitive engines: System 1 (fast, intuitive, emotional) and System 2 (slow, analytical, effortful).",
      keyRules: [
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
      coreIdea: "The ability to perform deep work is becoming increasingly rare at the exact same time it is becoming increasingly valuable in our economy.",
      keyRules: [
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
      coreIdea: "Habits emerge because the brain is constantly looking for ways to save effort and automate routine behaviors into the basal ganglia.",
      keyRules: [
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
      coreIdea: "Carrots and sticks (Extrinsic Motivation 2.0) fail for complex cognitive work. True drive relies on Intrinsic Motivation 3.0.",
      keyRules: [
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
      coreIdea: "Your belief about your abilities determines whether you embrace challenges or shrink from failure.",
      keyRules: [
        "Fixed Mindset: Belief that intelligence and talent are static traits.",
        "Growth Mindset: Belief that abilities can be developed through dedication.",
        "The Power of 'Yet': Transform 'I can't do this' into 'I can't do this YET'."
      ]
    }
  ];

  return (
    <section id="books" className="py-20 border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--muted)] border border-[var(--border)] text-xs font-semibold text-[var(--primary)] mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Curated Behavioral Science Library</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight mb-3">
            Essential Book Summaries
          </h2>
          <p className="text-xs sm:text-sm text-[var(--muted-foreground)] max-w-xl mx-auto">
            Deep-dive breakdowns of seminal behavioral science and productivity literature. Click any book to read its dedicated guide page.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book, idx) => (
            <Link
              key={idx}
              href={`/books/${book.slug}`}
              className="bg-[var(--card)] p-6 rounded-3xl border border-[var(--border)] hover:border-[var(--primary)]/50 transition-all flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[var(--muted)] text-[var(--primary)] border border-[var(--border)]">
                    {book.year} Edition
                  </span>
                  <span className="text-xs font-semibold text-[var(--muted-foreground)] group-hover:text-[var(--primary)] transition-colors inline-flex items-center gap-1">
                    <span>Read Page</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[var(--foreground)] mb-0.5 group-hover:text-[var(--primary)] transition-colors">
                  {book.title}
                </h3>
                <span className="text-xs font-medium text-[var(--muted-foreground)] block mb-3">
                  by {book.author}
                </span>

                <p className="text-xs text-[var(--foreground)] font-semibold mb-3 leading-relaxed">
                  "{book.tagline}"
                </p>

                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed mb-4">
                  {book.coreIdea}
                </p>
              </div>

              {/* Key Rules List */}
              <div className="pt-4 border-t border-[var(--border)] space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--primary)] block">
                  Core Framework Takeaways:
                </span>
                <ul className="space-y-1.5 text-[11px] text-[var(--muted-foreground)]">
                  {book.keyRules.map((rule, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--primary)] shrink-0 mt-0.5" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
