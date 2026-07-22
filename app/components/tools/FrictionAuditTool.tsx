"use client";

import React, { useState } from "react";
import { ShieldAlert, CheckCircle2, ArrowRight } from "lucide-react";

export default function FrictionAuditTool() {
  const [habitType, setHabitType] = useState<"bad" | "good">("bad");
  const [targetHabit, setTargetHabit] = useState("Social Media Scrolling");

  const frictionStrategies: Record<string, { title: string; steps: string[] }> = {
    "Social Media Scrolling": {
      title: "Digital Friction Barriers",
      steps: [
        "Log out of social accounts after every single session (forces password re-entry).",
        "Set phone screen display to Grayscale mode (eliminates dopamine color cues).",
        "Move app icons into a secondary subfolder on page 3."
      ]
    },
    "Junk Food & Late Night Snacking": {
      title: "Physical Environment Barriers",
      steps: [
        "Store high-calorie snacks on top shelves requiring a step-stool.",
        "Stop buying snacks in bulk; require physical trips to the store for single items.",
        "Place healthy snacks (fruit, nuts) directly at eye level in the fridge."
      ]
    },
    "Binge Watching TV": {
      title: "Hardware Friction Barriers",
      steps: [
        "Unplug TV power cable after each watching session.",
        "Remove batteries from the remote control and place them in another room.",
        "Set strict router Wi-Fi auto-shutdown at 10:30 PM."
      ]
    }
  };

  const currentStrategy = frictionStrategies[targetHabit] || {
    title: "Custom Friction Strategy",
    steps: [
      "Add 3 additional physical steps between your trigger cue and action.",
      "Increase physical distance between yourself and the temptation."
    ]
  };

  return (
    <div className="bg-[var(--card)] p-6 sm:p-8 rounded-3xl border border-[var(--border)] space-y-6 shadow-xl max-w-3xl mx-auto">
      <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-[var(--primary)]" />
          <h3 className="text-base font-bold text-[var(--foreground)]">
            Habit Loop Friction Audit Tool
          </h3>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[var(--muted)] text-[var(--primary)] border border-[var(--border)]">
          Behavior Tool
        </span>
      </div>

      <div className="space-y-4 text-xs">
        <div>
          <label className="font-bold text-[var(--foreground)] block mb-1">Target Habit to Audit:</label>
          <select
            value={targetHabit}
            onChange={(e) => setTargetHabit(e.target.value)}
            className="w-full p-3 rounded-xl bg-[var(--muted)] border border-[var(--border)] text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)] font-semibold"
          >
            <option value="Social Media Scrolling">Social Media Scrolling</option>
            <option value="Junk Food & Late Night Snacking">Junk Food & Late Night Snacking</option>
            <option value="Binge Watching TV">Binge Watching TV</option>
          </select>
        </div>
      </div>

      {/* Generated Barriers */}
      <div className="p-6 rounded-2xl bg-[var(--muted)] border border-[var(--border)] space-y-4">
        <h4 className="text-xs font-bold text-[var(--primary)] uppercase tracking-wider flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>{currentStrategy.title}</span>
        </h4>

        <div className="space-y-2 text-xs sm:text-sm text-[var(--foreground)]">
          {currentStrategy.steps.map((step, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-[var(--card)] border border-[var(--border)] flex items-start gap-2.5">
              <span className="font-mono font-bold text-[var(--primary)]">{idx + 1}.</span>
              <span>{step}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
