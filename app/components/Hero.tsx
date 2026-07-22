"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { YoutubeIcon } from "./Icons";

export default function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Minimal Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-400 mb-6">
          <span>Behavior School Media</span>
          <span>•</span>
          <span className="text-white">Practical Psychology</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
          Practical Psychology <br />
          <span className="text-neutral-400">For Real Life.</span>
        </h1>

        {/* Short Minimal Subtitle */}
        <p className="text-base sm:text-lg text-neutral-400 max-w-xl mx-auto font-normal mb-8 leading-relaxed">
          Understand your mind. Overcome procrastination. Build lasting habits.
        </p>

        {/* Primary Action Button */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://www.youtube.com/@behavior-school"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg font-semibold text-xs text-black bg-white hover:bg-neutral-200 transition-colors flex items-center gap-2"
          >
            <YoutubeIcon className="w-4 h-4 fill-black" />
            <span>Watch on YouTube</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
