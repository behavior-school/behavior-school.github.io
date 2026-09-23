"use client";

import React from "react";
import Link from "next/link";
import { Cpu, Activity, Zap, Clock, ShieldAlert, ArrowRight } from "lucide-react";

export default function ToolsSection() {
  const tools = [
    {
      slug: "pomodoro-timer",
      title: "Neuroscience Pomodoro & Ultradian Timer",
      category: "Focus & Flow",
      icon: Clock,
      desc: "25-min Pomodoro & 90-min Ultradian cycle focus timer with limbic distraction protocols.",
      link: "/tools/pomodoro-timer"
    },
    {
      slug: "dopamine-calculator",
      title: "Dopamine & Boredom Audit",
      category: "Neuroscience",
      icon: Activity,
      desc: "Audit your D2 receptor sensitivity and boredom threshold based on daily phone usage.",
      link: "/tools/dopamine-calculator"
    },
    {
      slug: "habit-shrinker",
      title: "2-Minute Habit Shrinker",
      category: "Habits",
      icon: Zap,
      desc: "Shrink any ambitious goal down to a 120-second physical micro-action.",
      link: "/tools/habit-shrinker"
    },
    {
      slug: "friction-audit",
      title: "Habit Loop Friction Audit",
      category: "Behavior Science",
      icon: ShieldAlert,
      desc: "Audit bad habits and engineer physical & digital friction barriers to stop automated loops.",
      link: "/tools/friction-audit"
    }
  ];

  return (
    <section id="tools" className="py-20 border-b border-[var(--border)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--muted)] border border-[var(--border)] text-xs font-semibold text-[var(--primary)] mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>Interactive Web Tools</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight">
              Behavioral Science Tools
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[var(--muted-foreground)] max-w-lg leading-relaxed">
              Audit brain chemistry, shrink habit friction, and optimize focus parameters with interactive protocols.
            </p>
          </div>
          <Link
            href="/tools"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--primary)] hover:underline"
          >
            <span>View all 4 tools</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.slug}
                href={tool.link}
                className="bg-[var(--card)] p-6 sm:p-7 rounded-3xl border border-[var(--border)] hover:border-[var(--primary)]/60 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-[var(--muted)] border border-[var(--border)] flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-[var(--primary-foreground)] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[var(--muted)] text-[var(--primary)] border border-[var(--border)]">
                      {tool.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-xs text-[var(--muted-foreground)] leading-relaxed mb-6">
                    {tool.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between text-xs">
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
