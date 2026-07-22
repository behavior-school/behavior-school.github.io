"use client";

import React from "react";
import { Brain, Activity, ShieldAlert, Cpu, Users, Layers } from "lucide-react";

export default function CategoriesSection() {
  const pillars = [
    {
      name: "Psychology Explained",
      icon: Brain,
      desc: "Cognitive Dissonance, Confirmation Bias, Dunning-Kruger.",
    },
    {
      name: "Neuroscience",
      icon: Activity,
      desc: "Dopamine mechanics, neuroplasticity, memory encoding.",
    },
    {
      name: "Habits & Discipline",
      icon: ShieldAlert,
      desc: "Habit loops, friction engineering, identity shifts.",
    },
    {
      name: "Learning & Focus",
      icon: Cpu,
      desc: "Active recall, spaced repetition, deep work flow.",
    },
    {
      name: "Social Psychology",
      icon: Users,
      desc: "Attraction, persuasion, influence, confidence.",
    },
    {
      name: "Mental Models",
      icon: Layers,
      desc: "First Principles, Second-Order Thinking, Inversion.",
    },
  ];

  return (
    <section id="categories" className="py-20 border-b border-neutral-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
            Knowledge Pillars
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400">
            6 core categories of actionable behavioral science.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="bg-neutral-950 p-6 rounded-xl border border-neutral-900 hover:border-neutral-800 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white mb-4">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1">{pillar.name}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
