"use client";

import React, { useState } from "react";
import { Brain, Activity, ShieldAlert, Cpu, Users, Layers, FileCode, ArrowUpRight } from "lucide-react";
import { ArtifactData } from "./ArtifactViewer";

interface CategoriesSectionProps {
  onOpenArtifact: (artifact: ArtifactData) => void;
}

export default function CategoriesSection({ onOpenArtifact }: CategoriesSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categoryTabs = ["All", "Psychology", "Neuroscience", "Habits", "Learning", "Models"];

  const pillars = [
    {
      name: "Psychology Explained",
      category: "Psychology",
      icon: Brain,
      desc: "Cognitive Dissonance, Confirmation Bias, Dunning-Kruger.",
      artifact: {
        title: "Cognitive Bias Breakdown",
        type: "MARKDOWN" as const,
        filename: "cognitive-biases.md",
        category: "Psychology",
        content: `# Cognitive Biases & Mind Illusions\n\n1. Confirmation Bias\n2. Dunning-Kruger Effect\n3. Sunken Cost Fallacy`,
        actionProtocol: ["Notice emotional attachment before defending an opinion.", "Ask: 'What evidence would prove me wrong?'"]
      }
    },
    {
      name: "Neuroscience",
      category: "Neuroscience",
      icon: Activity,
      desc: "Dopamine mechanics, neuroplasticity, memory encoding.",
      artifact: {
        title: "Neuroplasticity Protocol",
        type: "NEUROSCIENCE" as const,
        filename: "neuroplasticity.md",
        category: "Neuroscience",
        content: `# Synaptic Plasticity & Myelination\n\nNeural pathways strengthen when subjected to deliberate focus and effortful retrieval.`,
        actionProtocol: ["Engage in 20 minutes of high-friction learning daily.", "Ensure 8 hours of sleep for synaptic consolidation."]
      }
    },
    {
      name: "Habits & Discipline",
      category: "Habits",
      icon: ShieldAlert,
      desc: "Habit loops, friction engineering, identity shifts.",
      artifact: {
        title: "Identity-Based Habit Architecture",
        type: "PROTOCOL" as const,
        filename: "habit-architecture.md",
        category: "Habits",
        content: `# Habit Loop Modification\n\nChange your identity focus from outcomes to votes cast for your desired self.`,
        actionProtocol: ["Cast small votes daily (e.g. 1 page read).", "Reduce physical friction to under 10 seconds."]
      }
    },
    {
      name: "Learning & Focus",
      category: "Learning",
      icon: Cpu,
      desc: "Active recall, spaced repetition, deep work flow.",
      artifact: {
        title: "Deep Work Flow State Protocol",
        type: "PROTOCOL" as const,
        filename: "flow-state.md",
        category: "Learning",
        content: `# Deep Work & Flow Dynamics\n\nAchieving transient hypofrontality requires clear goals, immediate feedback, and zero distraction.`,
        actionProtocol: ["Work in 90-minute ultradian rhythm blocks.", "Turn off all audible notifications."]
      }
    },
    {
      name: "Social Psychology",
      category: "Psychology",
      icon: Users,
      desc: "Attraction, persuasion, influence, confidence.",
      artifact: {
        title: "Persuasion & Social Proof Mechanics",
        type: "RESEARCH" as const,
        filename: "social-proof.md",
        category: "Psychology",
        content: `# Cialdini's 6 Principles of Influence\n\n1. Reciprocity\n2. Commitment\n3. Social Proof\n4. Authority\n5. Liking\n6. Scarcity`,
        actionProtocol: ["Provide value first before making requests.", "Demonstrate authentic social proof."]
      }
    },
    {
      name: "Mental Models",
      category: "Models",
      icon: Layers,
      desc: "First Principles, Second-Order Thinking, Inversion.",
      artifact: {
        title: "First Principles Thinking Matrix",
        type: "MENTAL_MODEL" as const,
        filename: "first-principles.md",
        category: "Models",
        content: `# First Principles Deconstruction\n\nDeconstruct complex problems to basic physical facts and build upward.`,
        actionProtocol: ["Ask Five Whys to reach root cause.", "Rebuild solution from scratch without copying incumbents."]
      }
    },
  ];

  const filteredPillars = selectedCategory === "All"
    ? pillars
    : pillars.filter((p) => p.category === selectedCategory);

  return (
    <section id="categories" className="py-20 border-b border-[var(--border)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight mb-3">
            Knowledge Pillars
          </h2>
          <p className="text-xs sm:text-sm text-[var(--muted-foreground)]">
            Explore core categories of actionable behavioral science. Click any pillar chip to preview its protocol.
          </p>
        </div>

        {/* Category Filter Chips / Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categoryTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedCategory(tab)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === tab
                  ? "bg-[var(--primary)] text-[var(--primary-foreground)] shadow-sm"
                  : "bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] border border-[var(--border)]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards Grid with Clickable Artifact Preview Chips */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {filteredPillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                onClick={() => onOpenArtifact(pillar.artifact)}
                className="bg-[var(--card)] p-6 rounded-2xl border border-[var(--border)] hover:border-[var(--primary)]/60 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[var(--muted)] border border-[var(--border)] flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-[var(--primary-foreground)] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>

                    {/* Clickable Artifact Code Chip (No ugly button text) */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[var(--muted)] border border-[var(--border)] text-[10px] font-mono text-[var(--muted-foreground)] group-hover:text-[var(--primary)] transition-colors">
                      <FileCode className="w-3 h-3" />
                      <span>{pillar.artifact.filename}</span>
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[var(--foreground)] mb-1.5 group-hover:text-[var(--primary)] transition-colors flex items-center justify-between">
                    <span>{pillar.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-[var(--muted-foreground)] group-hover:text-[var(--primary)] transition-colors" />
                  </h3>
                  <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
