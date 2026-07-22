"use client";

import React, { useState } from "react";
import { Sparkles, CheckCircle2, RefreshCw } from "lucide-react";

export default function HabitSimulator() {
  const [habitName, setHabitName] = useState("Read 10 Pages Daily");
  const [cueScore, setCueScore] = useState(4); // 1-5
  const [cravingScore, setCravingScore] = useState(3);
  const [responseScore, setResponseScore] = useState(4);
  const [rewardScore, setRewardScore] = useState(5);

  const totalScore = Math.round(((cueScore + cravingScore + responseScore + rewardScore) / 20) * 100);

  return (
    <div className="bg-[var(--card)] p-6 sm:p-8 rounded-3xl border border-[var(--border)] space-y-6 my-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--border)] pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[var(--muted)] text-[var(--primary)] text-[10px] font-mono uppercase tracking-wider mb-1">
            <Sparkles className="w-3 h-3" />
            <span>Interactive Habit Builder</span>
          </div>
          <h3 className="text-lg font-bold text-[var(--foreground)]">
            Atomic Habits 4-Laws Simulator
          </h3>
        </div>

        <div className="text-right font-mono">
          <span className="text-xs text-[var(--muted-foreground)]">Success Likelihood: </span>
          <span className="text-lg font-extrabold text-[var(--primary)]">{totalScore}%</span>
        </div>
      </div>

      {/* Input Habit Name */}
      <div>
        <label className="text-xs font-bold text-[var(--foreground)] block mb-1">
          Target Habit Name:
        </label>
        <input
          type="text"
          value={habitName}
          onChange={(e) => setHabitName(e.target.value)}
          className="w-full px-3.5 py-2 rounded-xl bg-[var(--muted)] border border-[var(--border)] text-xs text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)]"
        />
      </div>

      {/* 4 Laws Sliders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Law 1 */}
        <div className="p-4 rounded-2xl bg-[var(--muted)]/50 border border-[var(--border)] space-y-2">
          <div className="flex justify-between text-xs font-bold text-[var(--foreground)]">
            <span>1st Law: Make it Obvious (Cue)</span>
            <span className="text-[var(--primary)]">{cueScore}/5</span>
          </div>
          <input
            type="range"
            min="1"
            max="5"
            value={cueScore}
            onChange={(e) => setCueScore(Number(e.target.value))}
            className="w-full h-1.5 bg-[var(--muted)] rounded-lg appearance-none cursor-pointer accent-[var(--primary)]"
          />
          <p className="text-[11px] text-[var(--muted-foreground)]">
            {cueScore >= 4 ? "Trigger is highly visible in environment." : "Trigger is hidden or easily forgotten."}
          </p>
        </div>

        {/* Law 2 */}
        <div className="p-4 rounded-2xl bg-[var(--muted)]/50 border border-[var(--border)] space-y-2">
          <div className="flex justify-between text-xs font-bold text-[var(--foreground)]">
            <span>2nd Law: Make it Attractive (Craving)</span>
            <span className="text-[var(--primary)]">{cravingScore}/5</span>
          </div>
          <input
            type="range"
            min="1"
            max="5"
            value={cravingScore}
            onChange={(e) => setCravingScore(Number(e.target.value))}
            className="w-full h-1.5 bg-[var(--muted)] rounded-lg appearance-none cursor-pointer accent-[var(--primary)]"
          />
          <p className="text-[11px] text-[var(--muted-foreground)]">
            {cravingScore >= 4 ? "Bundled with immediate positive desire." : "Task feels dry or boring."}
          </p>
        </div>

        {/* Law 3 */}
        <div className="p-4 rounded-2xl bg-[var(--muted)]/50 border border-[var(--border)] space-y-2">
          <div className="flex justify-between text-xs font-bold text-[var(--foreground)]">
            <span>3rd Law: Make it Easy (2-Min Rule)</span>
            <span className="text-[var(--primary)]">{responseScore}/5</span>
          </div>
          <input
            type="range"
            min="1"
            max="5"
            value={responseScore}
            onChange={(e) => setResponseScore(Number(e.target.value))}
            className="w-full h-1.5 bg-[var(--muted)] rounded-lg appearance-none cursor-pointer accent-[var(--primary)]"
          />
          <p className="text-[11px] text-[var(--muted-foreground)]">
            {responseScore >= 4 ? "Action takes < 120s to initiate." : "Requires high initial effort."}
          </p>
        </div>

        {/* Law 4 */}
        <div className="p-4 rounded-2xl bg-[var(--muted)]/50 border border-[var(--border)] space-y-2">
          <div className="flex justify-between text-xs font-bold text-[var(--foreground)]">
            <span>4th Law: Make it Satisfying (Reward)</span>
            <span className="text-[var(--primary)]">{rewardScore}/5</span>
          </div>
          <input
            type="range"
            min="1"
            max="5"
            value={rewardScore}
            onChange={(e) => setRewardScore(Number(e.target.value))}
            className="w-full h-1.5 bg-[var(--muted)] rounded-lg appearance-none cursor-pointer accent-[var(--primary)]"
          />
          <p className="text-[11px] text-[var(--muted-foreground)]">
            {rewardScore >= 4 ? "Includes immediate streak tracking." : "Reward is distant in the future."}
          </p>
        </div>
      </div>

      {/* Live Generated Plan */}
      <div className="p-4 rounded-2xl bg-[var(--muted)] border border-[var(--border)] space-y-2">
        <h4 className="text-xs font-bold text-[var(--foreground)] uppercase tracking-wider flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-[var(--primary)]" />
          <span>Optimized Action Plan for "{habitName}"</span>
        </h4>
        <ul className="text-xs text-[var(--muted-foreground)] space-y-1 list-disc pl-5">
          <li><strong>Implementation Intention:</strong> "I will execute {habitName} immediately after morning coffee."</li>
          <li><strong>2-Minute Rule Constraint:</strong> "Commit to starting for just 120 seconds today."</li>
          <li><strong>Identity Affirmation:</strong> "I am becoming the type of person who stays consistent."</li>
        </ul>
      </div>
    </div>
  );
}
