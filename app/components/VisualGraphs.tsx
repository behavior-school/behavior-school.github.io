"use client";

import React, { useState } from "react";
import { TrendingUp, Activity, RefreshCw } from "lucide-react";

export default function VisualGraphs() {
  const [activeTab, setActiveTab] = useState<"dopamine" | "memory">("dopamine");
  const [notificationFrequency, setNotificationFrequency] = useState<number>(4); // 1 = Low, 5 = High
  const [recallInterval, setRecallInterval] = useState<number>(3); // days

  // Compute Dopamine curve stats
  const baselineDopamine = Math.max(20, 100 - notificationFrequency * 18);
  const peakSpike = 100 + notificationFrequency * 25;

  // Compute Memory retention percentage
  const passiveRetention = Math.round(100 / Math.pow(recallInterval + 1, 0.65));
  const activeRecallRetention = Math.round(100 / Math.pow(recallInterval + 1, 0.18));

  return (
    <section className="py-20 border-b border-[var(--border)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--muted)] border border-[var(--border)] text-xs font-semibold text-[var(--primary)] mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>Interactive Behavioral Graphs</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight mb-3">
            Behavioral Models Visualized
          </h2>
          <p className="text-xs sm:text-sm text-[var(--muted-foreground)] max-w-lg mx-auto">
            Adjust the sliders below to see how physical environment friction and active retrieval shape your brain.
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveTab("dopamine")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === "dopamine"
                ? "bg-[var(--primary)] text-[var(--primary-foreground)] shadow-sm"
                : "bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] border border-[var(--border)]"
            }`}
          >
            Stimulation vs Attention
          </button>
          <button
            onClick={() => setActiveTab("memory")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === "memory"
                ? "bg-[var(--primary)] text-[var(--primary-foreground)] shadow-sm"
                : "bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] border border-[var(--border)]"
            }`}
          >
            Active Recall Forgetting Curve
          </button>
        </div>

        {/* Graph 1: Dopamine Dynamics */}
        {activeTab === "dopamine" && (
          <div className="bg-[var(--card)] p-6 sm:p-8 rounded-3xl border border-[var(--border)] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--border)] pb-4">
              <div>
                <h3 className="text-base font-bold text-[var(--foreground)]">
                  Dopamine Lower distraction vs More competing cuess
                </h3>
                <p className="text-xs text-[var(--muted-foreground)] mt-0.5">
                  Illustrative model: more competing cues can make sustained attention harder.
                </p>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono text-[var(--muted-foreground)]">Attention friction: </span>
                <span className="text-sm font-extrabold text-[var(--primary)]">{baselineDopamine}%</span>
              </div>
            </div>

            {/* Slider Control */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-[var(--muted-foreground)] font-medium">
                <span>Digital Phone Quarantine (Low Friction)</span>
                <span>Constant Social Media Checks (High Spikes)</span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                value={notificationFrequency}
                onChange={(e) => setNotificationFrequency(Number(e.target.value))}
                className="w-full h-2 bg-[var(--muted)] rounded-lg appearance-none cursor-pointer accent-[var(--primary)]"
              />
            </div>

            {/* SVG Visual Graph */}
            <div className="p-4 rounded-2xl bg-[var(--muted)] border border-[var(--border)]">
              <div className="h-40 relative flex items-end justify-around gap-2 pt-6 pb-2">
                {/* Baseline Bar */}
                <div className="w-1/3 flex flex-col items-center gap-2 h-full justify-end">
                  <span className="text-[10px] font-bold text-[var(--foreground)]">{baselineDopamine}%</span>
                  <div
                    style={{ height: `${baselineDopamine}%` }}
                    className="w-full bg-[var(--primary)] rounded-t-xl transition-all duration-300 opacity-90"
                  />
                  <span className="text-[10px] font-mono text-[var(--muted-foreground)]">Lower distraction</span>
                </div>

                {/* More competing cues Bar */}
                <div className="w-1/3 flex flex-col items-center gap-2 h-full justify-end">
                  <span className="text-[10px] font-bold text-[var(--foreground)]">{peakSpike}%</span>
                  <div
                    style={{ height: `${Math.min(100, peakSpike / 2)}%` }}
                    className="w-full bg-[var(--primary)]/40 rounded-t-xl border-2 border-dashed border-[var(--primary)] transition-all duration-300"
                  />
                  <span className="text-[10px] font-mono text-[var(--muted-foreground)]">More competing cues</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[var(--muted)] border border-[var(--border)] text-xs text-[var(--muted-foreground)] flex items-start gap-2.5">
              <TrendingUp className="w-4 h-4 text-[var(--primary)] shrink-0 mt-0.5" />
              <p>
                <strong>Model note:</strong> These bars are illustrative teaching aids, not measurements of dopamine, receptor density, or recovery time.
              </p>
            </div>
          </div>
        )}

        {/* Graph 2: Memory Retention Curve */}
        {activeTab === "memory" && (
          <div className="bg-[var(--card)] p-6 sm:p-8 rounded-3xl border border-[var(--border)] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--border)] pb-4">
              <div>
                <h3 className="text-base font-bold text-[var(--foreground)]">
                  Ebbinghaus Forgetting Curve Comparison
                </h3>
                <p className="text-xs text-[var(--muted-foreground)] mt-0.5">
                  Comparing passive re-reading versus active recall over time.
                </p>
              </div>
              <div className="flex gap-4 text-xs font-mono">
                <div>
                  <span className="text-[var(--muted-foreground)]">Passive: </span>
                  <span className="font-bold text-[var(--muted-foreground)]">{passiveRetention}%</span>
                </div>
                <div>
                  <span className="text-[var(--muted-foreground)]">Active Recall: </span>
                  <span className="font-bold text-[var(--primary)]">{activeRecallRetention}%</span>
                </div>
              </div>
            </div>

            {/* Slider Control */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-[var(--muted-foreground)] font-medium">
                <span>Day 1 (Initial Study)</span>
                <span>Day 14 (Extended Retention)</span>
              </div>
              <input
                type="range"
                min="1"
                max="14"
                value={recallInterval}
                onChange={(e) => setRecallInterval(Number(e.target.value))}
                className="w-full h-2 bg-[var(--muted)] rounded-lg appearance-none cursor-pointer accent-[var(--primary)]"
              />
            </div>

            {/* Visual Bar Comparison */}
            <div className="space-y-4 p-4 rounded-2xl bg-[var(--muted)] border border-[var(--border)]">
              <div>
                <div className="flex justify-between text-xs font-bold text-[var(--foreground)] mb-1">
                  <span>Active Recall (Spaced Repetition)</span>
                  <span className="text-[var(--primary)]">{activeRecallRetention}% Retained</span>
                </div>
                <div className="w-full h-3 bg-[var(--card)] rounded-full overflow-hidden border border-[var(--border)]">
                  <div
                    style={{ width: `${activeRecallRetention}%` }}
                    className="h-full bg-[var(--primary)] rounded-full transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-[var(--muted-foreground)] mb-1">
                  <span>Passive Re-reading (Fluency Bias)</span>
                  <span>{passiveRetention}% Retained</span>
                </div>
                <div className="w-full h-3 bg-[var(--card)] rounded-full overflow-hidden border border-[var(--border)]">
                  <div
                    style={{ width: `${passiveRetention}%` }}
                    className="h-full bg-[var(--muted-foreground)]/40 rounded-full transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[var(--muted)] border border-[var(--border)] text-xs text-[var(--muted-foreground)] flex items-start gap-2.5">
              <RefreshCw className="w-4 h-4 text-[var(--primary)] shrink-0 mt-0.5" />
              <p>
                <strong>Learning note:</strong> Retrieval practice can improve later recall. The size and durability of the benefit depend on spacing, difficulty, feedback, and the material being learned.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
