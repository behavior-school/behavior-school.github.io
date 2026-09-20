"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import Hero from "./Hero";
import CategoriesSection from "./CategoriesSection";
import VisualGraphs from "./VisualGraphs";
import ToolsSection from "./ToolsSection";
import QuizSection from "./QuizSection";
import BookSummaries from "./BookSummaries";
import QuestionsExplorer from "./QuestionsExplorer";
import BehaviorDiagnostic from "./BehaviorDiagnostic";

export default function HomeClient() {
  return (
    <>
      <Hero />
      <CategoriesSection />
      <VisualGraphs />

      <section className="border-y border-[var(--border)] bg-[var(--muted)]/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-8">
            <div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-[var(--primary)] mb-2">Latest field guides</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)]">Go deeper than the short video.</h2>
              <p className="mt-3 text-sm sm:text-base text-[var(--muted-foreground)] max-w-2xl leading-relaxed">
                Original long-form guides connect the ideas behind habits, attention, learning,
                cognitive bias, neuroscience, and decision-making.
              </p>
            </div>
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--primary)] hover:underline">
              Browse all guides <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              ["/blog/habit-loop-cue-routine-reward", "The Habit Loop Explained"],
              ["/blog/active-recall-vs-rereading", "Active Recall vs Rereading"],
              ["/blog/cognitive-load-working-memory", "Cognitive Load & Working Memory"],
              ["/blog/confirmation-bias-and-belief-updating", "How Confirmation Bias Protects Beliefs"],
            ].map(([href, title]) => (
              <Link key={href} href={href} className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 hover:border-[var(--primary)]/50 transition-all group">
                <BookOpen className="w-5 h-5 text-[var(--primary)] mb-4" />
                <h3 className="font-bold text-sm text-[var(--foreground)] leading-snug group-hover:text-[var(--primary)] transition-colors">{title}</h3>
                <span className="inline-flex items-center gap-1 mt-4 text-[11px] font-semibold text-[var(--muted-foreground)]">Read guide <ArrowRight className="w-3.5 h-3.5" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <QuizSection />
      <ToolsSection />
      <BookSummaries />
      <QuestionsExplorer />
      <BehaviorDiagnostic />
    </>
  );
}
