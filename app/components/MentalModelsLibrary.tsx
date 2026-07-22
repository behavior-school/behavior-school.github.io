"use client";

import React, { useState } from "react";
import { Layers, Search, Filter, Bookmark, ExternalLink, ArrowUpRight } from "lucide-react";

export default function MentalModelsLibrary() {
  const [filter, setFilter] = useState<string>("all");
  const [search, setSearch] = useState<string>("");

  const items = [
    {
      title: "First Principles Thinking",
      type: "Mental Model",
      category: "Decision Making",
      summary: "Boiling down a problem to its most fundamental truths and building upwards from there.",
      application: "Instead of copying existing habits or advice, ask 'What is physically/biologically required for me to achieve this?'",
      tags: ["Problem Solving", "Logic"]
    },
    {
      title: "Second Order Thinking",
      type: "Mental Model",
      category: "Decision Making",
      summary: "Evaluating not just immediate effects, but the ripple consequences of those effects over time.",
      application: "When tempted by instant gratification, ask: 'And then what happens 2 hours from now?'",
      tags: ["Long-term", "Consequences"]
    },
    {
      title: "Zeigarnik Effect",
      type: "Cognitive Bias",
      category: "Psychology",
      summary: "Uncompleted or interrupted tasks create mental tension that occupies working memory.",
      application: "Start a daunting task for just 2 minutes. Once opened, your brain naturally craves finishing it.",
      tags: ["Procrastination", "Memory"]
    },
    {
      title: "Pareto Principle (80/20)",
      type: "Mental Model",
      category: "Productivity",
      summary: "80% of outcomes stem from 20% of inputs and causes.",
      application: "Identify the top 20% of actions that drive 80% of your progress in learning, health, and work.",
      tags: ["Efficiency", "Focus"]
    },
    {
      title: "Cognitive Dissonance",
      type: "Cognitive Bias",
      category: "Psychology",
      summary: "Mental discomfort experienced when holding two contradictory beliefs or values.",
      application: "Notice when you justify bad habits to align your beliefs with comfort instead of truth.",
      tags: ["Beliefs", "Self-Deception"]
    },
    {
      title: "Confirmation Bias",
      type: "Cognitive Bias",
      category: "Psychology",
      summary: "The tendency to search for, interpret, and recall information that confirms pre-existing beliefs.",
      application: "Actively seek out counter-evidence to test whether your assumptions are actually true.",
      tags: ["Critical Thinking", "Biases"]
    },
    {
      title: "Inversion Method",
      type: "Mental Model",
      category: "Problem Solving",
      summary: "Instead of asking how to succeed, ask how to guarantee absolute failure and avoid those traps.",
      application: "To improve focus, ask: 'How could I make it impossible for me to focus today?' then eliminate those factors.",
      tags: ["Risk Avoidance", "Strategy"]
    },
    {
      title: "Dunning–Kruger Effect",
      type: "Cognitive Bias",
      category: "Psychology",
      summary: "Beginners tend to overestimate their competence, while experts tend to underestimate theirs.",
      application: "Stay humble when starting a new skill; recognize that early confidence is often an illusion.",
      tags: ["Self-Awareness", "Skill Acquisition"]
    },
    {
      title: "Occam's Razor",
      type: "Mental Model",
      category: "Decision Making",
      summary: "When presented with competing hypotheses, the simplest explanation is usually correct.",
      application: "Avoid overcomplicating productivity systems. The simplest routine you can actually execute wins.",
      tags: ["Simplicity", "Logic"]
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
            Mental Models & <span className="gradient-text-amber">Cognitive Biases</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Timeless thinking models that upgrade your decision making and reveal hidden psychological biases.
          </p>
        </div>

        {/* Controls: Search and Filter */}
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
              All Library Items ({items.length})
            </button>
            <button
              onClick={() => setFilter("Mental Model")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                filter === "Mental Model"
                  ? "bg-amber-500 text-slate-950 font-bold"
                  : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              Mental Models Only
            </button>
            <button
              onClick={() => setFilter("Cognitive Bias")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                filter === "Cognitive Bias"
                  ? "bg-amber-500 text-slate-950 font-bold"
                  : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              Cognitive Biases Only
            </button>
          </div>
        </div>

        {/* Library Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl border border-slate-800/80 glass-card-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                      item.type === "Mental Model"
                        ? "bg-amber-950/60 border-amber-800/40 text-amber-400"
                        : "bg-purple-950/60 border-purple-800/40 text-purple-400"
                    }`}
                  >
                    {item.type}
                  </span>
                  <span className="text-[11px] font-medium text-slate-500">{item.category}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-slate-300 mb-4 leading-relaxed">{item.summary}</p>

                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/90 mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                    Real Life Application:
                  </span>
                  <p className="text-xs text-slate-300 italic">{item.application}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between">
                <div className="flex gap-1.5">
                  {item.tags.map((t, i) => (
                    <span key={i} className="text-[10px] text-slate-400 font-medium bg-slate-900 px-2 py-0.5 rounded">
                      #{t}
                    </span>
                  ))}
                </div>
                <a
                  href="https://www.youtube.com/@behavior-school"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-amber-400 transition-colors"
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
