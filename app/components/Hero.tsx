"use client";

import React from "react";
import { Brain, ArrowRight, Sparkles, CheckCircle2, Zap, Compass, ShieldCheck } from "lucide-react";
import { YoutubeIcon } from "./Icons";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Radial Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid line background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Top Badge featuring Logo Icon */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-semibold text-indigo-300 mb-8 backdrop-blur-md shadow-inner">
            <img src="/logo.svg" alt="Behavior School" className="w-5 h-5 object-contain" />
            <span className="text-slate-300 font-bold">Behavior School</span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1 text-blue-400">
              <Sparkles className="w-3.5 h-3.5" /> Research-Backed Practical Psychology
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            Practical Psychology <br />
            <span className="gradient-text">For Real Life.</span>
          </h1>

          {/* Subtitle / Mission */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
            Understand how your mind works so you can make better decisions, overcome procrastination, build lasting habits, and live with intention.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="https://www.youtube.com/@behavior-school"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-500 hover:from-red-500 hover:to-rose-500 shadow-xl shadow-red-600/25 hover:shadow-red-600/40 transition-all flex items-center justify-center gap-3 transform hover:-translate-y-0.5"
            >
              <YoutubeIcon className="w-5 h-5 fill-white" />
              <span>Watch on YouTube @behavior-school</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>

            <a
              href="#categories"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/90 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/80 transition-all flex items-center justify-center gap-2 backdrop-blur-md"
            >
              <Compass className="w-4 h-4 text-indigo-400" />
              <span>Explore 6 Content Pillars</span>
            </a>
          </div>

          {/* Value Props Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-6 border-t border-slate-800/60">
            <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>No Textbook Fluff</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>Visual Neuroscience</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Actionable Lessons</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>100% Free Library</span>
            </div>
          </div>
        </div>

        {/* Feature Floating Teaser Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Card 1 */}
          <a
            href="#questions"
            className="glass-card p-6 rounded-2xl glass-card-hover group border border-slate-800/80 block"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                <Brain className="w-5 h-5" />
              </span>
              <span className="text-[11px] font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-950/60 border border-indigo-800/40 px-2.5 py-0.5 rounded-full">
                Core Question
              </span>
            </div>
            <h3 className="text-base font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
              "Why do we procrastinate?"
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Discover why emotions overpower logic and how the limbic system hijacking works.
            </p>
          </a>

          {/* Card 2 */}
          <a
            href="#mental-models"
            className="glass-card p-6 rounded-2xl glass-card-hover group border border-slate-800/80 block"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                <Zap className="w-5 h-5" />
              </span>
              <span className="text-[11px] font-semibold tracking-wider text-emerald-400 uppercase bg-emerald-950/60 border border-emerald-800/40 px-2.5 py-0.5 rounded-full">
                Mental Model
              </span>
            </div>
            <h3 className="text-base font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
              First Principles Thinking
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Deconstruct human behavior down to foundational truths and rebuild better habits.
            </p>
          </a>

          {/* Card 3 */}
          <a
            href="#series"
            className="glass-card p-6 rounded-2xl glass-card-hover group border border-slate-800/80 block"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                <ShieldCheck className="w-5 h-5" />
              </span>
              <span className="text-[11px] font-semibold tracking-wider text-purple-400 uppercase bg-purple-950/60 border border-purple-800/40 px-2.5 py-0.5 rounded-full">
                Featured Series
              </span>
            </div>
            <h3 className="text-base font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
              Real Self Series
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Deep dives into "You Are Not Lazy", "How to Learn Faster", and "Stop Overthinking".
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
