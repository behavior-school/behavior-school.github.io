"use client";

import React, { useState } from "react";
import { Brain, CheckCircle2, HelpCircle } from "lucide-react";

export default function CognitiveTester() {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const question = {
    prompt: "A bat and a ball cost $1.10 in total. The bat costs $1.00 more than the ball. How much does the ball cost?",
    options: ["$0.10 (10 cents)", "$0.05 (5 cents)", "$1.00 (1 dollar)"],
    correct: "$0.05 (5 cents)",
    explanation: "System 1 immediately shouts '$0.10' because 1.10 - 1.00 = 0.10 intuitively. But if the ball costs $0.10, the bat would cost $1.10, totaling $1.20! System 2 calculation: Bat ($1.05) + Ball ($0.05) = $1.10."
  };

  return (
    <div className="bg-[var(--card)] p-6 sm:p-8 rounded-3xl border border-[var(--border)] space-y-6 my-8">
      <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
        <div className="flex items-center gap-2">
          <Brain className="w-5 h-5 text-[var(--primary)]" />
          <h3 className="text-base font-bold text-[var(--foreground)]">
            System 1 vs System 2 Cognitive Experiment
          </h3>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[var(--muted)] text-[var(--primary)] border border-[var(--border)]">
          Interactive Test
        </span>
      </div>

      <p className="text-xs sm:text-sm font-semibold text-[var(--foreground)] leading-relaxed">
        {question.prompt}
      </p>

      <div className="space-y-2">
        {question.options.map((opt) => {
          const isSelected = selectedAnswer === opt;
          return (
            <button
              key={opt}
              onClick={() => {
                setSelectedAnswer(opt);
                setSubmitted(true);
              }}
              className={`w-full p-3.5 rounded-xl border text-left text-xs font-semibold transition-all ${
                isSelected
                  ? "bg-[var(--muted)] border-[var(--primary)] text-[var(--foreground)]"
                  : "bg-[var(--muted)]/40 border-[var(--border)] text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {submitted && (
        <div className="p-4 rounded-2xl bg-[var(--muted)] border border-[var(--border)] space-y-2 animate-in fade-in">
          <div className="flex items-center gap-2 text-xs font-bold">
            {selectedAnswer === question.correct ? (
              <span className="text-[var(--primary)] flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> System 2 Override Successful!
              </span>
            ) : (
              <span className="text-[var(--foreground)] flex items-center gap-1">
                <HelpCircle className="w-4 h-4 text-[var(--primary)]" /> System 1 Trap Captured You!
              </span>
            )}
          </div>
          <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
}
