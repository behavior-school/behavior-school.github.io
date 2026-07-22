"use client";

import React, { useState } from "react";
import { Zap, CheckCircle2, Copy, Check } from "lucide-react";

export default function HabitShrinkerTool() {
  const [goal, setGoal] = useState("Read 30 Books This Year");
  const [time, setTime] = useState("8:00 AM");
  const [location, setLocation] = useState("Living Room Desk");
  const [copied, setCopied] = useState(false);

  // Shrinker logic
  const microActionMap: Record<string, string> = {
    "Read 30 Books This Year": "Open book to page 1 and read 1 paragraph.",
    "Run a 42km Marathon": "Put on workout shoes and step outside the front door.",
    "Write a 300-Page Novel": "Open blank document and write 1 single sentence.",
    "Code 1 Hour Daily": "Open VSCode editor and type 3 lines of code.",
    "Meditate 20 Mins": "Sit on cushion and take 3 deep conscious breaths."
  };

  const microAction = microActionMap[goal] || `Shrink "${goal}" down to 1 single 120-second physical step.`;

  const implementationStatement = `I will [${microAction}] at ${time} in ${location}.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(implementationStatement);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[var(--card)] p-6 sm:p-8 rounded-3xl border border-[var(--border)] space-y-6 shadow-xl max-w-3xl mx-auto">
      <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-[var(--primary)]" />
          <h3 className="text-base font-bold text-[var(--foreground)]">
            2-Minute Habit Shrinker & Implementation Planner
          </h3>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[var(--muted)] text-[var(--primary)] border border-[var(--border)]">
          Atomic Tool
        </span>
      </div>

      <div className="space-y-4 text-xs">
        <div>
          <label className="font-bold text-[var(--foreground)] block mb-1">Select or Type High-Level Goal:</label>
          <select
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="w-full p-3 rounded-xl bg-[var(--muted)] border border-[var(--border)] text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)]"
          >
            <option value="Read 30 Books This Year">Read 30 Books This Year</option>
            <option value="Run a 42km Marathon">Run a 42km Marathon</option>
            <option value="Write a 300-Page Novel">Write a 300-Page Novel</option>
            <option value="Code 1 Hour Daily">Code 1 Hour Daily</option>
            <option value="Meditate 20 Mins">Meditate 20 Mins</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="font-bold text-[var(--foreground)] block mb-1">Execution Time:</label>
            <input
              type="text"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full p-3 rounded-xl bg-[var(--muted)] border border-[var(--border)] text-[var(--foreground)] focus:outline-none"
            />
          </div>
          <div>
            <label className="font-bold text-[var(--foreground)] block mb-1">Execution Location:</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-3 rounded-xl bg-[var(--muted)] border border-[var(--border)] text-[var(--foreground)] focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Output Result */}
      <div className="p-6 rounded-2xl bg-[var(--muted)] border border-[var(--border)] space-y-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--primary)] block mb-1">
            Shrunken 120-Second Micro-Action (2-Minute Rule):
          </span>
          <p className="text-sm font-bold text-[var(--foreground)]">"{microAction}"</p>
        </div>

        <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono text-[var(--muted-foreground)] block">Implementation Intention:</span>
            <p className="text-xs font-mono text-[var(--primary)]">{implementationStatement}</p>
          </div>

          <button
            onClick={handleCopy}
            className="px-3 py-1.5 rounded-lg bg-[var(--card)] border border-[var(--border)] text-xs font-semibold text-[var(--foreground)] hover:border-[var(--primary)] transition-all flex items-center gap-1.5"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-[var(--primary)]" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? "Copied!" : "Copy"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
