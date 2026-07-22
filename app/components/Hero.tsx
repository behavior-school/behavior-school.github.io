"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Brain, Zap, ShieldCheck, Activity, FileCode } from "lucide-react";
import { YoutubeIcon } from "./Icons";

export default function Hero() {
  const [activeState, setActiveState] = useState<"focus" | "flow" | "reset">("focus");

  const stateConfigs = {
    focus: {
      title: "Deep Focus State",
      dopamine: "85% Tonic Stability",
      cortex: "Prefrontal Activation",
      desc: "Phone in separate room, digital notifications silenced, single-task priority.",
      chip: "dopamine-protocol.md",
      link: "/blog/dopamine-fasting-myth-vs-science"
    },
    flow: {
      title: "Flow State Protocol",
      dopamine: "95% Peak Control",
      cortex: "Transient Hypofrontality",
      desc: "Clear challenge-skill balance, 90-minute ultradian rhythm, zero interruption.",
      chip: "flow-state-framework.md",
      link: "/blog/active-recall-spaced-repetition-guide"
    },
    reset: {
      title: "2-Min Procrastination Reset",
      dopamine: "Limbic Threat Bypassed",
      cortex: "120s Activation Energy",
      desc: "Shrinking task initiation threshold so small the Amygdala alarm never triggers.",
      chip: "procrastination-reset.md",
      link: "/blog/neuroscience-of-procrastination"
    }
  };

  const current = stateConfigs[activeState];

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 border-b border-[var(--border)] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Minimal Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--muted)] border border-[var(--border)] text-xs font-mono text-[var(--muted-foreground)]">
              <Sparkles className="w-3.5 h-3.5 text-[var(--primary)]" />
              <span>Behavior School Media</span>
              <span>•</span>
              <span className="text-[var(--foreground)] font-semibold">Practical Psychology</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[var(--foreground)] leading-[1.1]">
              Master Your Mind. <br />
              <span className="text-[var(--primary)]">Control Your Behavior.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[var(--muted-foreground)] max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Understand the neuroscience behind procrastination, dopamine, habits, and focus. Built on peer-reviewed behavioral research.
            </p>

            {/* Action Buttons & Quick Artifact Chips */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="https://www.youtube.com/@behavior-school"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-sm"
              >
                <YoutubeIcon className="w-4 h-4 fill-current" />
                <span>Watch YouTube Lessons</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="/books/atomic-habits"
                className="w-full sm:w-auto px-5 py-3 rounded-xl font-bold text-xs bg-[var(--muted)] border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--primary)] transition-all flex items-center justify-center gap-2"
              >
                <BookOpenIcon />
                <span>Atomic Habits Guide</span>
              </Link>
            </div>

            {/* Interactive Preview Chips */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-mono text-[var(--muted-foreground)]">
              <span className="text-[10px] uppercase font-bold text-[var(--primary)] tracking-wider">Top Guides:</span>
              <Link href="/blog/neuroscience-of-procrastination" className="px-2.5 py-1 rounded-md bg-[var(--muted)] border border-[var(--border)] hover:text-[var(--primary)] transition-colors inline-flex items-center gap-1">
                <FileCode className="w-3 h-3 text-[var(--primary)]" />
                <span>procrastination.md</span>
              </Link>
              <Link href="/blog/dopamine-fasting-myth-vs-science" className="px-2.5 py-1 rounded-md bg-[var(--muted)] border border-[var(--border)] hover:text-[var(--primary)] transition-colors inline-flex items-center gap-1">
                <FileCode className="w-3 h-3 text-[var(--primary)]" />
                <span>dopamine-fasting.md</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Live Neural State Hub */}
          <div className="lg:col-span-5">
            <div className="bg-[var(--card)] p-6 sm:p-7 rounded-3xl border border-[var(--border)] shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
                <div className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-[var(--primary)]" />
                  <h3 className="text-sm font-bold text-[var(--foreground)]">
                    Neural State Controller
                  </h3>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[var(--muted)] text-[var(--primary)] border border-[var(--border)]">
                  Live Preview
                </span>
              </div>

              {/* State Switcher Tabs */}
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setActiveState("focus")}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                    activeState === "focus"
                      ? "bg-[var(--primary)] text-[var(--primary-foreground)] shadow-sm"
                      : "bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] border border-[var(--border)]"
                  }`}
                >
                  Deep Focus
                </button>
                <button
                  onClick={() => setActiveState("flow")}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                    activeState === "flow"
                      ? "bg-[var(--primary)] text-[var(--primary-foreground)] shadow-sm"
                      : "bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] border border-[var(--border)]"
                  }`}
                >
                  Flow State
                </button>
                <button
                  onClick={() => setActiveState("reset")}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                    activeState === "reset"
                      ? "bg-[var(--primary)] text-[var(--primary-foreground)] shadow-sm"
                      : "bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] border border-[var(--border)]"
                  }`}
                >
                  2-Min Reset
                </button>
              </div>

              {/* Live State Card */}
              <div className="p-5 rounded-2xl bg-[var(--muted)] border border-[var(--border)] space-y-4 animate-in fade-in">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-[var(--foreground)]">{current.title}</h4>
                  <Activity className="w-4 h-4 text-[var(--primary)] animate-pulse" />
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-[var(--card)] border border-[var(--border)]">
                    <span className="text-[10px] text-[var(--muted-foreground)] block">Dopamine</span>
                    <span className="font-bold text-[var(--primary)]">{current.dopamine}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[var(--card)] border border-[var(--border)]">
                    <span className="text-[10px] text-[var(--muted-foreground)] block">Cortex State</span>
                    <span className="font-bold text-[var(--foreground)]">{current.cortex}</span>
                  </div>
                </div>

                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  {current.desc}
                </p>

                <div className="pt-2 border-t border-[var(--border)] flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[var(--primary)] flex items-center gap-1">
                    <FileCode className="w-3.5 h-3.5" />
                    <span>{current.chip}</span>
                  </span>

                  <Link
                    href={current.link}
                    className="text-xs font-bold text-[var(--primary)] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Explore Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function BookOpenIcon() {
  return (
    <svg className="w-4 h-4 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );
}
