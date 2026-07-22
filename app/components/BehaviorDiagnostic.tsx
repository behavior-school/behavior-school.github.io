"use client";

import React, { useState } from "react";
import { Compass, Sparkles, CheckCircle, ArrowRight, RotateCcw, Brain, ShieldAlert, FileCode } from "lucide-react";
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
      label: "Chronic Procrastination",
      icon: "⏳",
      description: "Delaying tasks until the last minute despite knowing consequences.",
      diagnosis: "Limbic system emotional hijacking triggered by perceived threat/anxiety.",
      steps: [
        "Lower task activation energy: shrink initial commitment to just 2 minutes.",
        "Remove perfectionism pressure: separate drafting from editing.",
        "Perform identity voting: frame completing the task as casting a vote for your future self."
      ],
      recommendedVideo: "Why Smart People Still Procrastinate",
      artifact: {
        title: "Procrastination Diagnostic & Remediation Protocol",
        type: "PROTOCOL" as const,
        filename: "procrastination-diagnostic-protocol.md",
        category: "Diagnostic Protocol",
        content: `# Procrastination Diagnostic Report

## Diagnosis
The user exhibits chronic procrastination driven by limbic system emotional avoidance.

## Immediate Remedies
1. **2-Minute Activation**: Start task for 120s without outcome evaluation.
2. **Environment Clearing**: Remove immediate escape triggers.`,
        actionProtocol: [
          "Lower task activation energy: shrink initial commitment to just 2 minutes.",
          "Remove perfectionism pressure: separate drafting from editing.",
          "Perform identity voting: frame completing the task as casting a vote for your future self."
        ],
        youtubeVideo: "Why Smart People Still Procrastinate"
      }
    },
    {
      id: "focus",
      label: "Brain Fog & Distraction",
      icon: "⚡",
      description: "Constantly checking notifications and losing focus within 10 minutes.",
      diagnosis: "Dopamine receptor desensitization caused by rapid digital reward loops.",
      steps: [
        "Implement friction design: place phone in another room during focus blocks.",
        "Use 25-minute Pomodoro intervals to rebuild cognitive endurance.",
        "Embrace 5 minutes of deliberate boredom before starting deep work."
      ],
      recommendedVideo: "How Your Brain Creates Habits",
      artifact: {
        title: "Focus Restoration & Dopamine Recalibration Protocol",
        type: "NEUROSCIENCE" as const,
        filename: "focus-dopamine-recalibration.md",
        category: "Neuroscience Protocol",
        content: `# Dopamine Baseline Recalibration

Excessive notification frequency causes down-regulation of D2 dopamine receptors in the striatum.

## Protocol:
- **Phone Quarantine**: 60-minute physical separation.
- **Micro-Boredom Practice**: 5 minutes of quiet stillness prior to task initiation.`,
        actionProtocol: [
          "Implement friction design: place phone in another room during focus blocks.",
          "Use 25-minute Pomodoro intervals to rebuild cognitive endurance.",
          "Embrace 5 minutes of deliberate boredom before starting deep work."
        ],
        youtubeVideo: "How Your Brain Creates Habits"
      }
    },
    {
      id: "overthinking",
      label: "Overthinking & Rumination",
      icon: "🌀",
      description: "Replaying past scenarios or worrying excessively about future outcomes.",
      diagnosis: "Hyperactive Default Mode Network seeking artificial certainty.",
      steps: [
        "Externalize working memory: perform a daily 5-minute written brain dump.",
        "Apply Second-Order Thinking: ask 'And then what happens after that?'",
        "Set a 10-minute daily worry window to prevent chronic rumination."
      ],
      recommendedVideo: "Stop Overthinking Everything",
      artifact: {
        title: "Default Mode Network De-rumination Protocol",
        type: "MENTAL_MODEL" as const,
        filename: "derumination-brain-dump.md",
        category: "Mental Model",
        content: `# Rumination Relief Mechanics

Rumination activates the Default Mode Network, maintaining elevated cortisol without producing problem-solving actions.

## Action Plan:
- **Written Paper Dump**: Dump thoughts onto paper to free prefrontal cortex working memory.`,
        actionProtocol: [
          "Externalize working memory: perform a daily 5-minute written brain dump.",
          "Apply Second-Order Thinking: ask 'And then what happens after that?'",
          "Set a 10-minute daily worry window to prevent chronic rumination."
        ],
        youtubeVideo: "Stop Overthinking Everything"
      }
    }
  ];

  const currentDiagnosis = struggles.find((s) => s.id === selectedStruggle);

  const handleAnalyze = () => {
    if (selectedStruggle) {
      setAnalyzed(true);
    }
  };

  const handleReset = () => {
    setSelectedStruggle(null);
    setAnalyzed(false);
  };

  return (
    <section id="diagnostic" className="py-24 relative bg-slate-950/80 border-y border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Interactive Diagnostic Tool</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            "Why Do I Do This?" <span className="gradient-text">Mind Diagnostic</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Select what you are struggling with right now to generate a science breakdown and Claude Artifact protocol.
          </p>
        </div>

        {!analyzed ? (
          <div className="bg-slate-900/60 p-6 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl">
            <h3 className="text-base font-bold text-white mb-6 flex items-center gap-2">
              <Brain className="w-5 h-5 text-indigo-400" />
              <span>Step 1: Select your primary behavioral bottleneck:</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {struggles.map((item) => {
                const isSelected = selectedStruggle === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedStruggle(item.id)}
                    className={`p-5 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                      isSelected
                        ? "bg-indigo-600/20 border-indigo-500 shadow-lg shadow-indigo-500/20 translate-y-[-2px]"
                        : "bg-slate-900/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-800/40"
                    }`}
                  >
                    <div>
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <div className="font-bold text-sm text-white mb-1">{item.label}</div>
                      <div className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {item.description}
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-[11px] font-semibold">
                      <span className={isSelected ? "text-indigo-300" : "text-slate-500"}>
                        {isSelected ? "Selected" : "Click to choose"}
                      </span>
                      {isSelected && <CheckCircle className="w-4 h-4 text-indigo-400" />}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex justify-center">
              <button
                disabled={!selectedStruggle}
                onClick={handleAnalyze}
                className={`px-8 py-4 rounded-xl font-bold text-sm transition-all flex items-center gap-3 ${
                  selectedStruggle
                    ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-500 text-white shadow-xl shadow-indigo-600/30 hover:scale-[1.02]"
                    : "bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700"
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>Generate Science Breakdown</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Diagnosis Output Screen */
          <div className="bg-slate-900/80 p-6 sm:p-10 rounded-3xl border border-indigo-500/30 shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{currentDiagnosis?.icon}</span>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-800/50">
                    Diagnostic Analysis Ready
                  </span>
                  <h3 className="text-xl font-extrabold text-white">
                    {currentDiagnosis?.label}
                  </h3>
                </div>
              </div>
              <button
                onClick={handleReset}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
                <span>Test Another</span>
              </button>
            </div>

            <div className="p-5 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-300 mb-1 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-indigo-400" />
                <span>Underlying Neuro-Psychological Cause:</span>
              </h4>
              <p className="text-sm font-medium text-slate-200 leading-relaxed">
                {currentDiagnosis?.diagnosis}
              </p>
            </div>

            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                Recommended 3-Step Behavioral Protocol:
              </h4>
              <div className="space-y-3">
                {currentDiagnosis?.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-400">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Artifact Trigger Action */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              {currentDiagnosis?.artifact && (
                <button
                  onClick={() => onOpenArtifact(currentDiagnosis.artifact)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-indigo-300 bg-indigo-500/10 border border-indigo-500/30 hover:bg-indigo-500/20 flex items-center justify-center gap-2"
                >
                  <FileCode className="w-4 h-4 text-indigo-400" />
                  <span>Open Claude Artifact Protocol</span>
                </button>
              )}

              <a
                href="https://www.youtube.com/@behavior-school"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-red-600 hover:bg-red-500 transition-colors flex items-center justify-center gap-2 shrink-0"
              >
                <span>Watch Lesson on YouTube</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
