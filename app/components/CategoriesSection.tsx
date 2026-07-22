"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Brain, Activity, ShieldAlert, Cpu, Users, Layers, ArrowUpRight } from "lucide-react";

export default function CategoriesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categoryTabs = ["All", "Psychology", "Neuroscience", "Habits", "Learning", "Models"];

  const pillars = [
    {
      name: "Psychology Explained",
      category: "Psychology",
      icon: Brain,
      desc: "Cognitive Dissonance, Confirmation Bias, Dunning-Kruger.",
      link: "/blog/neuroscience-of-procrastination"
    },
    {
      name: "Neuroscience",
      category: "Neuroscience",
      icon: Activity,
      desc: "Dopamine mechanics, neuroplasticity, memory encoding.",
      link: "/blog/dopamine-fasting-myth-vs-science"
    },
    {
      name: "Habits & Discipline",
      category: "Habits",
      icon: ShieldAlert,
      desc: "Habit loops, friction engineering, identity shifts.",
      link: "/books/atomic-habits"
    },
    {
      name: "Learning & Focus",
      category: "Learning",
      icon: Cpu,
      desc: "Active recall, spaced repetition, deep work flow.",
      link: "/blog/active-recall-spaced-repetition-guide"
    },
    {
      name: "Social Psychology",
      category: "Psychology",
      icon: Users,
      desc: "Attraction, persuasion, influence, confidence.",
      link: "/books/drive"
    },
    {
      name: "Mental Models",
      category: "Models",
      icon: Layers,
      desc: "First Principles, Second-Order Thinking, Inversion.",
      link: "/blog/first-principles-thinking-habits"
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
            Explore core categories of actionable behavioral science. Click any pillar to read its dedicated guide.
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

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {filteredPillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <Link
                key={i}
                href={pillar.link}
                className="bg-[var(--card)] p-6 rounded-2xl border border-[var(--border)] hover:border-[var(--primary)]/60 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[var(--muted)] border border-[var(--border)] flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-[var(--primary-foreground)] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[var(--muted)] text-[var(--muted-foreground)]">
                      {pillar.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[var(--foreground)] mb-1.5 group-hover:text-[var(--primary)] transition-colors flex items-center justify-between">
                    <span>{pillar.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-[var(--muted-foreground)] group-hover:text-[var(--primary)] transition-colors" />
                  </h3>
                  <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">{pillar.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
