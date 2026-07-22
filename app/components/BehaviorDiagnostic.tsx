"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, RotateCcw, CheckCircle2, ArrowRight } from "lucide-react";

export default function BehaviorDiagnostic() {
  const [selectedStruggle, setSelectedStruggle] = useState<string | null>(null);
  const [analyzed, setAnalyzed] = useState(false);

  const struggles = [
    {
      id: "procrastination",
      label: "Procrastination",
      desc: "Delaying tasks until the last minute.",
      diagnosis: "Limbic system emotional avoidance triggered by task anxiety.",
      steps: [
        "Lower activation energy to 120 seconds.",
        "Separate drafting stage from editing stage.",
        "Remove phone from workspace."
      ],
      link: "/blog/neuroscience-of-procrastination"
    },
    {
      id: "focus",
      label: "Low Focus",
      desc: "Checking notifications every 10 minutes.",
      diagnosis: "Dopamine receptor desensitization caused by digital stimuli.",
      steps: [
        "Store phone in another room.",
        "Execute 25-minute Pomodoro blocks.",
        "Practice 3 minutes of quiet stillness first."
      ],
      link: "/blog/dopamine-fasting-myth-vs-science"
    },
    {
      id: "overthinking",
      label: "Overthinking",
      desc: "Constant rumination and mental worry loops.",
      diagnosis: "Default Mode Network hyper-activity seeking certainty.",
      steps: [
        "Perform a 5-minute written brain dump.",
        "Ask: 'And then what happens?'",
        "Set a 10-minute daily worry window."
      ],
      link: "/blog/first-principles-thinking-habits"
    }
  ];

  const current = struggles.find((s) => s.id === selectedStruggle);

  return (
    <section id="diagnostic" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight mb-2">
          Mind Diagnostic
        </h2>
        <p className="text-xs sm:text-sm text-[var(--muted-foreground)] mb-8">
          Select your primary bottleneck to generate an immediate action plan.
        </p>

        {!analyzed ? (
          <div className="bg-[var(--card)] p-6 sm:p-8 rounded-3xl border border-[var(--border)]">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {struggles.map((item) => {
                const isSelected = selectedStruggle === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedStruggle(item.id)}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      isSelected
                        ? "bg-[var(--muted)] border-[var(--primary)] text-[var(--foreground)] shadow-sm"
                        : "bg-[var(--card)] border-[var(--border)] text-[var(--muted-foreground)] hover:border-[var(--border)]/80"
                    }`}
                  >
                    <div className="font-bold text-xs text-[var(--foreground)] mb-1">{item.label}</div>
                    <div className="text-[11px] text-[var(--muted-foreground)] leading-snug">{item.desc}</div>
                  </button>
                );
              })}
            </div>

            <button
              disabled={!selectedStruggle}
              onClick={() => setAnalyzed(true)}
              className={`px-6 py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 mx-auto ${
                selectedStruggle
                  ? "bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-90 shadow-sm"
                  : "bg-[var(--muted)] text-[var(--muted-foreground)] border border-[var(--border)] cursor-not-allowed"
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Generate Protocol</span>
            </button>
          </div>
        ) : (
          <div className="bg-[var(--card)] p-6 sm:p-8 rounded-3xl border border-[var(--border)] text-left space-y-5">
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--primary)]">
                  Diagnostic Result
                </span>
                <h3 className="text-lg font-bold text-[var(--foreground)]">{current?.label} Protocol</h3>
              </div>
              <button
                onClick={() => {
                  setSelectedStruggle(null);
                  setAnalyzed(false);
                }}
                className="text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] flex items-center gap-1 font-semibold"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>

            <p className="text-xs text-[var(--muted-foreground)]">
              <strong className="text-[var(--foreground)]">Diagnosis: </strong>{current?.diagnosis}
            </p>

            <div className="space-y-2">
              {current?.steps.map((step, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[var(--muted)] border border-[var(--border)] text-xs sm:text-sm text-[var(--foreground)] flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[var(--primary)] shrink-0 mt-0.5" />
                  <span>{step}</span>
                </div>
              ))}
            </div>

            {current?.link && (
              <div className="pt-2 flex items-center justify-between">
                <Link
                  href={current.link}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--primary)] text-[var(--primary-foreground)] text-xs font-bold hover:opacity-90 transition-opacity"
                >
                  <span>Read In-Depth Field Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
