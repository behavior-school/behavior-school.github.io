"use client";

import React, { useState } from "react";
import { Play, Film, Sparkles, Clock, ArrowRight } from "lucide-react";
import { YoutubeIcon } from "./Icons";

export default function SeriesShowcase() {
  const [activeSeries, setActiveSeries] = useState<"realself" | "educational">("realself");

  const realSelfSeries = [
    {
      title: "You Are Not Lazy",
      subtitle: "The Neuroscience of Action vs Inaction",
      tag: "Real Self Series #01",
      duration: "14 mins",
      highlights: "Why 'laziness' is actually emotional avoidance & dopamine mismatch.",
    },
    {
      title: "How to Learn Faster",
      subtitle: "Accelerated Skill Acquisition & Active Recall",
      tag: "Real Self Series #02",
      duration: "16 mins",
      highlights: "Feynman technique, interleaving, and neural myelin consolidation.",
    },
    {
      title: "Remember Anything Like a Pro",
      subtitle: "Hippocampus Memory Encoding Secrets",
      tag: "Real Self Series #03",
      duration: "12 mins",
      highlights: "Spaced repetition intervals and memory palace visualization.",
    },
    {
      title: "The Science of Charisma",
      subtitle: "Social Psychology & Presence",
      tag: "Real Self Series #04",
      duration: "15 mins",
      highlights: "Warmth vs competence matrix and micro-expressions.",
    },
    {
      title: "Why You Can't Stay Consistent",
      subtitle: "Friction Engineering & Identity Shifts",
      tag: "Real Self Series #05",
      duration: "18 mins",
      highlights: "Why willpower depletes and how environment design enforces habits.",
    },
    {
      title: "Stop Overthinking Everything",
      subtitle: "Quieting the Default Mode Network",
      tag: "Real Self Series #06",
      duration: "13 mins",
      highlights: "Written brain dumping, anxiety reframing, and sensory grounding.",
    },
  ];

  const educationalSeries = [
    {
      title: "Dopamine Explained",
      subtitle: "The Molecule of Anticipation & Desire",
      tag: "Neuroscience Breakdown",
      duration: "10 mins",
      highlights: "How baseline dopamine vs spikes control your daily motivation.",
    },
    {
      title: "Neuroplasticity Explained",
      subtitle: "Rewiring Your Neural Pathways at Any Age",
      tag: "Brain Science",
      duration: "11 mins",
      highlights: "Synaptic pruning, BDNF release, and deliberate repetition.",
    },
    {
      title: "Cognitive Biases Explained",
      subtitle: "10 Mental Shortcuts Distorting Reality",
      tag: "Psychology Experiments",
      duration: "18 mins",
      highlights: "From Halo Effect to Confirmation Bias and Dunning-Kruger.",
    },
    {
      title: "Famous Psychology Experiments",
      subtitle: "What Milgram & Stanford Taught Us",
      tag: "Classic Research",
      duration: "20 mins",
      highlights: "Understanding authority compliance, social roles, and group conformity.",
    },
    {
      title: "Brain Chemicals Explained",
      subtitle: "Serotonin, Oxytocin, Endorphins & Cortisol",
      tag: "Endocrinology & Mind",
      duration: "15 mins",
      highlights: "How neurotransmitters balance focus, mood, social trust, and stress.",
    },
    {
      title: "Decision Making Explained",
      subtitle: "System 1 vs System 2 Thinking",
      tag: "Behavioral Economics",
      duration: "14 mins",
      highlights: "Daniel Kahneman's dual-process theory applied to daily choices.",
    },
  ];

  const currentList = activeSeries === "realself" ? realSelfSeries : educationalSeries;

  return (
    <section id="series" className="py-24 relative bg-slate-950/80 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-semibold text-red-400 mb-4">
            <Film className="w-3.5 h-3.5" />
            <span>Video Content Catalog</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Featured <span className="text-red-500">Video Series</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            High-production visual explainers designed to give you maximum psychological insight in minimum time.
          </p>
        </div>

        {/* Series Switcher Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800 backdrop-blur-md">
            <button
              onClick={() => setActiveSeries("realself")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold transition-all ${
                activeSeries === "realself"
                  ? "bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-lg shadow-red-600/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Real Self Series</span>
            </button>
            <button
              onClick={() => setActiveSeries("educational")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold transition-all ${
                activeSeries === "educational"
                  ? "bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-lg shadow-red-600/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <YoutubeIcon className="w-4 h-4" />
              <span>Educational Deep Dives</span>
            </button>
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentList.map((video, idx) => (
            <a
              key={idx}
              href="https://www.youtube.com/@behavior-school"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl border border-slate-800/80 glass-card-hover overflow-hidden group flex flex-col justify-between"
            >
              <div>
                {/* Mock Thumbnail Preview Header */}
                <div className="relative h-44 bg-slate-900 border-b border-slate-800 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent z-10" />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/30 via-slate-900 to-slate-950" />
                  
                  {/* Play icon overlay */}
                  <div className="relative z-20 w-12 h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center group-hover:scale-110 group-hover:bg-red-500 shadow-xl shadow-red-600/40 transition-all">
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </div>

                  <span className="absolute top-3 left-3 z-20 text-[10px] font-bold tracking-wider uppercase bg-slate-950/80 border border-slate-800 text-indigo-400 px-2.5 py-0.5 rounded-full">
                    {video.tag}
                  </span>

                  <span className="absolute bottom-3 right-3 z-20 text-[10px] font-bold text-slate-300 bg-slate-950/90 px-2 py-0.5 rounded flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {video.duration}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-red-400 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-400 mb-4">{video.subtitle}</p>

                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                      Key Takeaway:
                    </span>
                    <p className="text-xs text-slate-300">{video.highlights}</p>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs font-semibold text-red-400 group-hover:text-red-300">
                <span>Watch on YouTube</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
