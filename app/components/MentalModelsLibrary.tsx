"use client";

import React, { useState } from "react";
import { Layers, Search, FileCode, ArrowUpRight } from "lucide-react";
import { ArtifactData } from "./ArtifactViewer";

interface MentalModelsLibraryProps {
  onOpenArtifact: (artifact: ArtifactData) => void;
}

export default function MentalModelsLibrary({ onOpenArtifact }: MentalModelsLibraryProps) {
  const [filter, setFilter] = useState<string>("all");
  const [search, setSearch] = useState<string>("");

  const items = [
    {
      title: "First Principles Thinking",
      type: "Mental Model",
      category: "Decision Making",
      summary: "Boiling down a problem to its most fundamental truths and building upwards from there.",
      application: "Instead of copying existing habits or advice, ask 'What is physically/biologically required for me to achieve this?'",
      tags: ["Problem Solving", "Logic"],
      artifact: {
        title: "First Principles Thinking Framework",
        type: "MENTAL_MODEL" as const,
        filename: "first-principles-thinking.md",
        category: "Mental Model",
        content: `# First Principles Thinking

First Principles Thinking is the practice of actively questioning every assumption you think you know about a given problem, then creating new solutions from scratch.

## 3-Step Process:
1. **Identify Assumptions**: Write down current beliefs about the problem.
2. **Deconstruct to Core Truths**: Strip away analogies and isolate non-negotiable physical facts.
3. **Rebuild from Scratch**: Construct a custom solution based purely on fundamental truths.`,
        actionProtocol: [
          "Write down current assumptions about your bottleneck.",
          "Ask: 'Is this assumption physically true or just convention?'",
          "Rebuild your habit or system targeting only fundamental truths."
        ]
      }
    },
    {
      title: "Second Order Thinking",
      type: "Mental Model",
      category: "Decision Making",
      summary: "Evaluating not just immediate effects, but the ripple consequences of those effects over time.",
      application: "When tempted by instant gratification, ask: 'And then what happens 2 hours from now?'",
      tags: ["Long-term", "Consequences"],
      artifact: {
        title: "Second-Order Ripple Analysis Protocol",
        type: "MENTAL_MODEL" as const,
        filename: "second-order-thinking.md",
        category: "Mental Model",
        content: `# Second-Order Thinking

First-order thinking is fast and easy. It occurs when we look for something that satisfies an immediate goal without considering future consequences. Second-order thinking asks: 'And then what?'

## Execution:
- Evaluate 1st order effect (e.g. eating junk food = instant taste pleasure).
- Evaluate 2nd order effect (e.g. 1 hour later = blood sugar crash & guilt).
- Evaluate 3rd order effect (e.g. 1 month later = weight gain & lost energy).`,
        actionProtocol: [
          "Before acting on impulse, ask 'And then what happens 1 hour from now?'",
          "Ask 'And then what happens 1 week from now?'",
          "Optimize for 2nd and 3rd order consequences over 1st order impulses."
        ]
      }
    },
    {
      title: "Zeigarnik Effect",
      type: "Cognitive Bias",
      category: "Psychology",
      summary: "Uncompleted or interrupted tasks create mental tension that occupies working memory.",
      application: "Start a daunting task for just 2 minutes. Once opened, your brain naturally craves finishing it.",
      tags: ["Procrastination", "Memory"],
      artifact: {
        title: "Zeigarnik Effect Task Initiation Protocol",
        type: "PROTOCOL" as const,
        filename: "zeigarnik-effect-protocol.md",
        category: "Psychology",
        content: `# The Zeigarnik Effect

Soviet psychologist Bluma Zeigarnik observed that waiters remembered unfulfilled orders better than paid ones. The brain maintains cognitive tension for incomplete tasks.

## Practical Application:
To overcome task initiation inertia, perform a micro-start. Once open, the Zeigarnik Effect creates subtle psychological pressure to complete the task.`,
        actionProtocol: [
          "Open the target file or document.",
          "Write 1 sentence or 1 line of code.",
          "Allow the Zeigarnik cognitive tension to pull you into flow."
        ]
      }
    }
  ];

  const filteredItems = items.filter((item) => {
    const matchesFilter = filter === "all" || item.type.toLowerCase().includes(filter.toLowerCase());
    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.summary.toLowerCase().includes(search.toLowerCase()) ||
      item.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="mental-models" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-400 mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Frameworks & Biases Library</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Mental Models & <span className="gradient-text">Cognitive Biases</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Timeless thinking models. Click any model to view its interactive Claude Artifact breakdown.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search models or tags..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                filter === "all"
                  ? "bg-amber-500 text-slate-950 font-bold"
                  : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              All Library Items
            </button>
            <button
              onClick={() => setFilter("Mental Model")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                filter === "Mental Model"
                  ? "bg-amber-500 text-slate-950 font-bold"
                  : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              Mental Models
            </button>
            <button
              onClick={() => setFilter("Cognitive Bias")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                filter === "Cognitive Bias"
                  ? "bg-amber-500 text-slate-950 font-bold"
                  : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              Cognitive Biases
            </button>
          </div>
        </div>

        {/* Library Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-950/60 border border-amber-800/40 text-amber-400">
                    {item.type}
                  </span>
                  <span className="text-[11px] font-medium text-slate-500">{item.category}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-slate-300 mb-4 leading-relaxed">{item.summary}</p>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/90 mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                    Application:
                  </span>
                  <p className="text-xs text-slate-300 italic">{item.application}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between">
                {item.artifact && (
                  <button
                    onClick={() => onOpenArtifact(item.artifact)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    <FileCode className="w-3.5 h-3.5" />
                    <span>View Artifact</span>
                  </button>
                )}

                <a
                  href="https://www.youtube.com/@behavior-school"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-white transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
