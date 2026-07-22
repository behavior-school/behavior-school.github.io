"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight, Search, BookOpen } from "lucide-react";

export default function QuestionsExplorer() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const questionsData = [
    {
      question: "Why do we procrastinate?",
      category: "Psychology",
      shortAnswer: "Procrastination is emotional avoidance, not poor time management.",
      breakdown: "The amygdala perceives task difficulty or uncertainty as a threat, triggering avoidance for short-term emotional relief.",
      link: "/blog/neuroscience-of-procrastination"
    },
    {
      question: "Why do we lose focus so easily?",
      category: "Neuroscience",
      shortAnswer: "Digital novelty floods the brain with rapid dopamine spikes.",
      breakdown: "High baseline stimulation makes low-stimulus work feel unbearable. Friction design restores natural focus.",
      link: "/blog/dopamine-fasting-myth-vs-science"
    },
    {
      question: "Why are bad habits so hard to break?",
      category: "Behavior Science",
      shortAnswer: "Habits are automated pathways carved into the basal ganglia.",
      breakdown: "Suppressing habits via willpower fails under fatigue. Keep the Cue and Reward, but swap out the Response.",
      link: "/books/power-of-habit"
    }
  ];

  const filteredQuestions = questionsData.filter(
    (q) =>
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.shortAnswer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="questions" className="py-20 border-b border-[var(--border)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight mb-2">
            Questions Answered
          </h2>
          <p className="text-xs sm:text-sm text-[var(--muted-foreground)]">
            Explore neuroscience breakdowns. Click any question to read the full guide.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto mb-8">
          <Search className="w-4 h-4 text-[var(--muted-foreground)] absolute left-3.5 top-3.5" />
          <input
            type="text"
            placeholder="Search questions (e.g. procrastination, focus, habits)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--card)] border border-[var(--border)] text-xs text-[var(--foreground)] placeholder-[var(--muted-foreground)] focus:outline-none focus:border-[var(--primary)] transition-colors"
          />
        </div>

        {/* Questions Accordion */}
        <div className="space-y-3">
          {filteredQuestions.map((q, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[var(--card)] rounded-2xl border border-[var(--border)] overflow-hidden transition-all"
              >
                <div
                  onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                  className="p-5 flex items-center justify-between cursor-pointer hover:bg-[var(--muted)]/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[var(--muted)] text-[var(--primary)] border border-[var(--border)]">
                      {q.category}
                    </span>
                    <h3 className="text-sm font-bold text-[var(--foreground)]">{q.question}</h3>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-[var(--muted-foreground)] transition-transform duration-200 ${
                      isExpanded ? "rotate-180 text-[var(--primary)]" : ""
                    }`}
                  />
                </div>

                {isExpanded && (
                  <div className="px-5 pb-5 pt-2 border-t border-[var(--border)] text-xs text-[var(--muted-foreground)] space-y-4">
                    <p className="font-semibold text-[var(--foreground)] text-sm">{q.shortAnswer}</p>
                    <p className="text-[var(--muted-foreground)] leading-relaxed">{q.breakdown}</p>

                    <div className="pt-2 flex items-center justify-between">
                      <Link
                        href={q.link}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--muted)] border border-[var(--border)] text-xs font-semibold text-[var(--primary)] hover:opacity-80 transition-all cursor-pointer"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Read Full Guide Page</span>
                      </Link>

                      <a
                        href="https://www.youtube.com/@behavior-school"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors inline-flex items-center gap-1 font-semibold text-xs"
                      >
                        <span>Watch Lesson</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
