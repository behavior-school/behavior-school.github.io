"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { YoutubeIcon } from "./Icons";

export default function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-[var(--border)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Minimal Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--muted)] border border-[var(--border)] text-[11px] font-mono text-[var(--muted-foreground)] mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[var(--primary)]" />
          <span>Behavior School Media</span>
          <span>•</span>
          <span className="text-[var(--foreground)] font-semibold">Practical Psychology</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[var(--foreground)] leading-tight mb-6">
          Practical Psychology <br />
          <span className="text-[var(--primary)]">For Real Life.</span>
        </h1>

        {/* Short Subtitle */}
        <p className="text-base sm:text-lg text-[var(--muted-foreground)] max-w-xl mx-auto font-normal mb-8 leading-relaxed">
          Understand your mind. Overcome procrastination. Build lasting habits.
        </p>

        {/* Action Button */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://www.youtube.com/@behavior-school"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg font-semibold text-xs bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-90 transition-opacity flex items-center gap-2 shadow-sm"
          >
            <YoutubeIcon className="w-4 h-4 fill-current" />
            <span>Watch on YouTube</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
