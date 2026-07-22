"use client";

import React, { useState } from "react";
import { Brain, Activity, ShieldAlert, Cpu, Users, Layers, Sparkles, Check, ArrowUpRight } from "lucide-react";

export default function CategoriesSection() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const pillars = [
    {
      id: "psychology",
      name: "Psychology Explained",
      icon: Brain,
      color: "text-indigo-400",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/30",
      description: "Simple explanations of core psychological concepts and landmark experiments.",
      topics: [
        "Cognitive Dissonance",
        "Confirmation Bias",
        "Halo Effect",
        "Placebo Effect",
        "Zeigarnik Effect",
        "Dunning–Kruger Effect",
      ],
      takeaway: "Recognize how subtle cognitive traps bias your daily perception."
    },
    {
      id: "neuroscience",
      name: "Neuroscience & Brain",
      icon: Activity,
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/30",
      description: "Understand the biological hardware driving your thoughts, energy, and emotions.",
      topics: [
        "Dopamine & Drive",
        "Neuroplasticity",
        "Memory & Encoding",
        "Attention & Focus",
        "Stress & Cortisol",
        "Sleep Optimization",
      ],
      takeaway: "Work with your brain chemistry instead of fighting against it."
    },
    {
      id: "habits",
      name: "Habits & Discipline",
      icon: ShieldAlert,
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/30",
      description: "Actionable frameworks for behavior change and effortless consistency.",
      topics: [
        "Building Habit Loops",
        "Breaking Bad Habits",
        "Motivation vs Discipline",
        "Consistency Systems",
        "Self-Control Mechanics",
        "Friction Reduction",
      ],
      takeaway: "Systems outweigh willpower. Design environments that enforce good behavior."
    },
    {
      id: "learning",
      name: "Learning & Productivity",
      icon: Cpu,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      description: "Evidence-based strategies to acquire skills faster and produce high-value output.",
      topics: [
        "Active Recall",
        "Spaced Repetition",
        "Deep Work Protocol",
        "Flow State Triggers",
        "Focus Maintenance",
        "Time Management",
      ],
      takeaway: "Master cognitive efficiency to learn complex skills in record time."
    },
    {
      id: "social",
      name: "Social Psychology",
      icon: Users,
      color: "text-rose-400",
      bgColor: "bg-rose-500/10",
      borderColor: "border-rose-500/30",
      description: "Understand group dynamics, human influence, and high-impact communication.",
      topics: [
        "Persuasion Science",
        "Attraction & Bonding",
        "Social Confidence",
        "First Impressions",
        "Relationship Dynamics",
        "Ethical Influence",
      ],
      takeaway: "Build strong social intuition and navigate human interactions with clarity."
    },
    {
      id: "models",
      name: "Mental Models",
      icon: Layers,
      color: "text-amber-400",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/30",
      description: "Lenses and decision-making frameworks that improve problem solving.",
      topics: [
        "First Principles",
        "Opportunity Cost",
        "Second Order Thinking",
        "Pareto Principle (80/20)",
        "Inversion Method",
        "Occam's Razor",
      ],
      takeaway: "Filter out noise and solve hard problems by targeting root causes."
    },
  ];

  const filteredPillars = activeTab === "all" ? pillars : pillars.filter((p) => p.id === activeTab);

  return (
    <section id="categories" className="py-24 relative bg-slate-950/60 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curriculum & Knowledge Base</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            The 6 Pillars of <span className="gradient-text">Practical Psychology</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Behavior School organizes human psychology into 6 actionable categories designed for everyday application.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              activeTab === "all"
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                : "bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
            }`}
          >
            All Pillars (6)
          </button>
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeTab === pillar.id
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                    : "bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${pillar.color}`} />
                <span>{pillar.name}</span>
              </button>
            );
          })}
        </div>

        {/* Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className={`glass-card p-6 sm:p-8 rounded-2xl glass-card-hover border ${pillar.borderColor} flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`p-3 rounded-xl ${pillar.bgColor} ${pillar.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <a
                      href="https://www.youtube.com/@behavior-school"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-indigo-400 transition-colors"
                      title="Watch videos on YouTube"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {pillar.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                    {pillar.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Key Topics Covered
                    </span>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {pillar.topics.map((topic, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-[11px] font-medium text-slate-300"
                        >
                          <Check className="w-3 h-3 text-emerald-400" />
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 mt-auto">
                  <div className="text-[11px] font-medium text-slate-400 italic">
                    <span className="font-semibold text-slate-300 not-italic">Core Takeaway: </span>
                    "{pillar.takeaway}"
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
