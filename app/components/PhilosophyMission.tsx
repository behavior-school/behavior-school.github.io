"use client";

import React from "react";
import { Target, Eye, Sparkles, CheckCircle2, HeartHandshake, BookOpen, Compass } from "lucide-react";

export default function PhilosophyMission() {
  const targetAudience = [
    "Students & Learners",
    "Professionals & Leaders",
    "Entrepreneurs & Builders",
    "Creators & Artists",
    "Lifelong Curiosity Seekers",
  ];

  return (
    <section id="philosophy" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <div className="glass-card p-8 sm:p-10 rounded-3xl border border-indigo-500/30 relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-indigo-500/20 text-indigo-400">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400">
                  Our Core Purpose
                </span>
                <h3 className="text-2xl font-extrabold text-white">Our Mission</h3>
              </div>
            </div>
            <p className="text-xl font-bold text-indigo-200 mb-4 leading-snug">
              "Help millions of people understand their own minds."
            </p>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              Behavior School exists to bridge the gap between academic psychology research and everyday life by making complex ideas simple, highly visual, engaging, and directly useful.
            </p>
            <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/20 text-xs font-semibold text-indigo-300">
              The goal isn't just to teach psychology—it is to help people change their behavior.
            </div>
          </div>

          {/* Vision Card */}
          <div className="glass-card p-8 sm:p-10 rounded-3xl border border-emerald-500/30 relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-400">
                <Eye className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                  Long-Term Horizon
                </span>
                <h3 className="text-2xl font-extrabold text-white">Our Vision</h3>
              </div>
            </div>
            <p className="text-xl font-bold text-emerald-200 mb-4 leading-snug">
              "Build the world's most trusted free library for practical psychology."
            </p>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              Behavior School aims to construct a timeless educational media library that helps people think better, learn faster, develop stronger habits, and make wiser decisions for decades to come.
            </p>
            <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/20 text-xs font-semibold text-emerald-300">
              Science-backed education available to anyone, anywhere, completely free.
            </div>
          </div>
        </div>

        {/* Philosophy Banner */}
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-800 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-400 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Content Philosophy</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-6">
            Knowledge Should Lead To <span className="gradient-text">Action.</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 text-left">
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
              <span className="text-red-400 font-bold text-sm block mb-1">❌ No Complicated Jargon</span>
              <p className="text-xs text-slate-400">We strip away academic pretense and present ideas in plain, resonant English.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
              <span className="text-red-400 font-bold text-sm block mb-1">❌ No Boring Lectures</span>
              <p className="text-xs text-slate-400">Every lesson is visual, story-driven, and designed for high retention.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
              <span className="text-emerald-400 font-bold text-sm block mb-1">✅ 100% Practical</span>
              <p className="text-xs text-slate-400">You walk away with immediate, actionable steps you can apply today.</p>
            </div>
          </div>

          {/* Target Audience Strip */}
          <div className="pt-6 border-t border-slate-800/80">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
              Built For Anyone Driven to Understand Human Nature:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {targetAudience.map((audience, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300"
                >
                  {audience}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
