"use client";

import React from "react";
import Link from "next/link";
import { HelpCircle, Brain, ShieldAlert, Sparkles, Cpu, ArrowRight } from "lucide-react";

export default function QuizSection() {
  const quizPackages = [
    {
      slug: "neuroscience-dopamine-quiz",
      title: "Neuroscience & Dopamine Quiz",
      icon: Brain,
      category: "Neuroscience",
      desc: "Test your understanding of Amygdala threat perception and tonic baseline dopamine."
    },
    {
      slug: "atomic-habits-benchmark",
      title: "Atomic Habits Benchmark",
      icon: ShieldAlert,
      category: "Habits",
      desc: "Evaluate your mastery of the 4 Laws of Behavior Change and the 2-Minute Rule."
    },
    {
      slug: "cognitive-biases-test",
      title: "Cognitive Biases Test",
      icon: Sparkles,
      category: "Mental Models",
      desc: "Examine your susceptibility to System 1 heuristics, Loss Aversion, and Anchoring."
    },
    {
      slug: "deep-work-focus-audit",
      title: "Deep Work Focus Audit",
      icon: Cpu,
      category: "Focus",
      desc: "Assess your focus rituals, Attention Residue friction, and 90-min ultradian rhythm."
    }
  ];

  return (
    <section id="quizzes" className="py-20 border-b border-[var(--border)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--muted)] border border-[var(--border)] text-xs font-semibold text-[var(--primary)] mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Interactive Self-Assessments</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight mb-3">
            Knowledge Quiz Packages
          </h2>
          <p className="text-xs sm:text-sm text-[var(--muted-foreground)] max-w-lg mx-auto">
            Benchmark your psychological mastery. All quiz scores are saved locally in your browser.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {quizPackages.map((pkg, i) => {
            const Icon = pkg.icon;
            return (
              <Link
                key={i}
                href={`/quiz/${pkg.slug}`}
                className="bg-[var(--card)] p-6 rounded-3xl border border-[var(--border)] hover:border-[var(--primary)]/50 transition-all flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-[var(--muted)] border border-[var(--border)] flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-[var(--primary-foreground)] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[var(--muted)] text-[var(--primary)] border border-[var(--border)]">
                      {pkg.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[var(--foreground)] mb-1.5 group-hover:text-[var(--primary)] transition-colors">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-[var(--muted-foreground)] leading-relaxed mb-4">
                    {pkg.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between text-xs font-semibold text-[var(--primary)]">
                  <span>Start Assessment</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
