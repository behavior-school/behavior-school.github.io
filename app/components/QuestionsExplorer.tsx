"use client";

import React, { useState } from "react";
import { ChevronDown, FileCode, ArrowRight } from "lucide-react";
import { ArtifactData } from "./ArtifactViewer";

interface QuestionsExplorerProps {
  onOpenArtifact: (artifact: ArtifactData) => void;
}

export default function QuestionsExplorer({ onOpenArtifact }: QuestionsExplorerProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const questionsData = [
    {
      question: "Why do we procrastinate?",
      category: "Psychology",
      shortAnswer: "Procrastination is emotional avoidance, not poor time management.",
      breakdown: "The amygdala perceives task difficulty or uncertainty as a threat, triggering avoidance for short-term emotional relief.",
      artifact: {
        title: "Procrastination Neurobiology Protocol",
        type: "PROTOCOL" as const,
        filename: "procrastination-protocol.md",
        category: "Psychology",
        content: `# Procrastination: Limbic System Hijacking

Procrastination is caused by a conflict between the Limbic System (emotional brain) and the Prefrontal Cortex (rational planner).

## Protocol:
- Commit to working for exactly 120 seconds.
- Separate task initiation from outcome evaluation.`,
        actionProtocol: [
          "Commit to 120 seconds of task initiation without evaluating output quality.",
          "Write down the single next physical action (e.g. 'Open document').",
          "Remove immediate environmental escape cues."
        ],
        youtubeVideo: "Why Smart People Still Procrastinate"
      }
    },
    {
      question: "Why do we lose focus so easily?",
      category: "Neuroscience",
      shortAnswer: "Digital novelty floods the brain with rapid dopamine spikes.",
      breakdown: "High baseline stimulation makes low-stimulus work feel unbearable. Friction design restores natural focus.",
      artifact: {
        title: "Dopamine & Focus Protocol",
        type: "NEUROSCIENCE" as const,
        filename: "focus-dopamine-protocol.md",
        category: "Neuroscience",
        content: `# Dopamine & Focus Mechanics

Digital notifications flood tonic dopamine receptors, elevating your boredom threshold.

## Protocol:
- Place phone in another room during focus blocks.
- Work in 25-minute uninterrupted Pomodoro cycles.`,
        actionProtocol: [
          "Place phone out of sight before initiating deep work blocks.",
          "Perform 3 minutes of quiet silence before starting.",
          "Work in 25-minute uninterrupted Pomodoro cycles."
        ],
        youtubeVideo: "How Your Brain Creates Habits"
      }
    },
    {
      question: "Why are bad habits so hard to break?",
      category: "Behavior Science",
      shortAnswer: "Habits are automated pathways carved into the basal ganglia.",
      breakdown: "Suppressing habits via willpower fails under fatigue. Keep the Cue and Reward, but swap out the Response.",
      artifact: {
        title: "Habit Loop Re-engineering Protocol",
        type: "PROTOCOL" as const,
        filename: "habit-loop-protocol.md",
        category: "Behavior Science",
        content: `# Habit Loop Modification Mechanics

Habits are encoded into the basal ganglia. Swap out the Response while maintaining Cue and Reward.`,
        actionProtocol: [
          "Identify the exact trigger cue.",
          "Identify the underlying reward.",
          "Design a substitute response that fulfills the same reward."
        ],
        youtubeVideo: "Why Motivation Always Fails"
      }
    }
  ];

  return (
    <section id="questions" className="py-20 border-b border-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
            Questions Answered
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400">
            Click any question to open its Claude Artifact breakdown.
          </p>
        </div>

        <div className="space-y-3">
          {questionsData.map((q, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div
                key={idx}
                className="bg-neutral-950 rounded-xl border border-neutral-900"
              >
                <div
                  onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                  className="p-5 flex items-center justify-between cursor-pointer"
                >
                  <h3 className="text-sm font-bold text-white">{q.question}</h3>
                  <ChevronDown
                    className={`w-4 h-4 text-neutral-500 transition-transform duration-200 ${
                      isExpanded ? "rotate-180 text-white" : ""
                    }`}
                  />
                </div>

                {isExpanded && (
                  <div className="px-5 pb-5 pt-2 border-t border-neutral-900 text-xs text-neutral-300 space-y-3">
                    <p className="font-medium text-white">{q.shortAnswer}</p>
                    <p className="text-neutral-400">{q.breakdown}</p>

                    <div className="pt-2 flex items-center justify-between">
                      <button
                        onClick={() => onOpenArtifact(q.artifact)}
                        className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-medium text-white hover:bg-neutral-800 transition-colors inline-flex items-center gap-1.5"
                      >
                        <FileCode className="w-3.5 h-3.5 text-neutral-400" />
                        <span>Open Artifact</span>
                      </button>

                      <a
                        href="https://www.youtube.com/@behavior-school"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-1"
                      >
                        <span>Watch Video</span>
                        <ArrowRight className="w-3 h-3" />
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
