"use client";

import React, { useState } from "react";
import { Sparkles, RotateCcw, FileCode } from "lucide-react";
import { ArtifactData } from "./ArtifactViewer";

interface BehaviorDiagnosticProps {
  onOpenArtifact: (artifact: ArtifactData) => void;
}

export default function BehaviorDiagnostic({ onOpenArtifact }: BehaviorDiagnosticProps) {
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
      artifact: {
        title: "Procrastination Protocol",
        type: "PROTOCOL" as const,
        filename: "procrastination-protocol.md",
        category: "Diagnostic",
        content: `# Procrastination Protocol\n\n1. 120s Micro-start.\n2. Environment friction clearing.`,
        actionProtocol: [
          "Lower activation energy to 120 seconds.",
          "Separate drafting stage from editing stage.",
          "Remove phone from workspace."
        ]
      }
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
      artifact: {
        title: "Focus Restoration Protocol",
        type: "NEUROSCIENCE" as const,
        filename: "focus-protocol.md",
        category: "Diagnostic",
        content: `# Focus Protocol\n\n1. Physical phone quarantine.\n2. 25-min Pomodoro.`,
        actionProtocol: [
          "Store phone in another room.",
          "Execute 25-minute Pomodoro blocks.",
          "Practice 3 minutes of quiet stillness first."
        ]
      }
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
      artifact: {
        title: "De-Rumination Protocol",
        type: "MENTAL_MODEL" as const,
        filename: "derumination-protocol.md",
        category: "Diagnostic",
        content: `# De-Rumination Protocol\n\n1. Written dump.\n2. 2nd order questioning.`,
        actionProtocol: [
          "Perform a 5-minute written brain dump.",
          "Ask: 'And then what happens?'",
          "Set a 10-minute daily worry window."
        ]
      }
    }
  ];

  const current = struggles.find((s) => s.id === selectedStruggle);

  return (
    <section id="diagnostic" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] tracking-tight mb-2">
          Mind Diagnostic
        </h2>
        <p className="text-xs sm:text-sm text-[var(--muted-foreground)] mb-8">
          Select your primary bottleneck to generate an immediate action plan.
        </p>

        {!analyzed ? (
          <div className="bg-[var(--card)] p-6 rounded-2xl border border-[var(--border)]">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {struggles.map((item) => {
                const isSelected = selectedStruggle === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedStruggle(item.id)}
                    className={`p-4 rounded-xl border text-left transition-colors ${
                      isSelected
                        ? "bg-[var(--muted)] border-[var(--primary)] text-[var(--foreground)]"
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
              className={`px-6 py-2.5 rounded-lg text-xs font-semibold transition-opacity flex items-center justify-center gap-2 mx-auto ${
                selectedStruggle
                  ? "bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-90 shadow-sm"
                  : "bg-[var(--muted)] text-[var(--muted-foreground)] border border-[var(--border)] cursor-not-allowed"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Generate Protocol</span>
            </button>
          </div>
        ) : (
          <div className="bg-[var(--card)] p-6 rounded-2xl border border-[var(--border)] text-left space-y-4">
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
              <h3 className="text-base font-bold text-[var(--foreground)]">{current?.label} Protocol</h3>
              <button
                onClick={() => {
                  setSelectedStruggle(null);
                  setAnalyzed(false);
                }}
                className="text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>

            <p className="text-xs text-[var(--muted-foreground)]">
              <strong className="text-[var(--foreground)]">Diagnosis: </strong>{current?.diagnosis}
            </p>

            <div className="space-y-2">
              {current?.steps.map((step, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-[var(--muted)] border border-[var(--border)] text-xs text-[var(--foreground)]">
                  <span className="font-bold text-[var(--primary)] mr-2">{idx + 1}.</span> {step}
                </div>
              ))}
            </div>

            {current?.artifact && (
              <button
                onClick={() => onOpenArtifact(current.artifact)}
                className="px-4 py-2 rounded-lg bg-[var(--muted)] border border-[var(--border)] text-xs font-medium text-[var(--foreground)] hover:bg-[var(--accent)] transition-colors inline-flex items-center gap-1.5"
              >
                <FileCode className="w-3.5 h-3.5 text-[var(--primary)]" />
                <span>Open Claude Artifact</span>
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
