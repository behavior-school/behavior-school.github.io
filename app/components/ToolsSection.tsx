"use client";

import React from "react";
import Link from "next/link";
import { Cpu, Activity, Zap, ArrowRight } from "lucide-react";

export default function ToolsSection() {
  const tools = [
    {
      slug: "dopamine-calculator",
      title: "Dopamine & Boredom Audit",
      icon: Activity,
      desc: "Audit your D2 receptor sensitivity and boredom threshold based on daily phone usage.",
      link: "/tools/dopamine-calculator"
    },
    {
      slug: "habit-shrinker",
      title: "2-Minute Habit Shrinker",
      icon: Zap,
      desc: "Shrink any ambitious goal down to a 120-second physical micro-action.",
      link: "/tools/habit-shrinker"
    }
  ];

  return (
    <section id="tools" className="py-20 border-b border-[var(--border)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--muted)] border border-[var(--border)] text-xs font-semibold text-[var(--primary)] mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Interactive Web Tools</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight mb-3">
            Behavioral Science Tools
          </h2>
          <p className="text-xs sm:text-sm text-[var(--muted-foreground)] max-w-lg mx-auto">
            Audit your brain chemistry, shrink habit friction, and optimize focus parameters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {tools.map((tool, i) => {
            const Icon = tool.icon;
            return (
              <Link
                key={i}
                href={tool.link}
                className="bg-[var(--card)] p-8 rounded-3xl border border-[var(--border)] hover:border-[var(--primary)]/50 transition-all flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-[var(--muted)] border border-[var(--border)] flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-[var(--primary-foreground)] transition-colors mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-xs text-[var(--muted-foreground)] leading-relaxed mb-6">
                    {tool.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between text-xs">
                  <span className="text-[var(--muted-foreground)] font-medium">Interactive App</span>
                  <span className="inline-flex items-center gap-1.5 font-bold text-[var(--primary)] group-hover:translate-x-1 transition-transform">
                    <span>Launch Tool</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
