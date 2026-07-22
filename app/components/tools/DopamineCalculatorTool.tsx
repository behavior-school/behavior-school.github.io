"use client";

import React, { useState } from "react";
import { Activity, Sparkles, CheckCircle2, RotateCcw } from "lucide-react";

export default function DopamineCalculatorTool() {
  const [screenTime, setScreenTime] = useState<number>(4); // hours
  const [notifications, setNotifications] = useState<number>(50); // count
  const [shortVideoMin, setShortVideoMin] = useState<number>(60); // minutes
  const [calculated, setCalculated] = useState(false);

  // Math logic
  const spikePenalty = (notifications / 10) * 5 + (shortVideoMin / 15) * 8 + screenTime * 6;
  const receptorSensitivity = Math.max(15, Math.min(100, Math.round(100 - spikePenalty)));
  const boredomThreshold = Math.min(95, Math.max(10, Math.round(100 - receptorSensitivity + 20)));

  return (
    <div className="bg-[var(--card)] p-6 sm:p-8 rounded-3xl border border-[var(--border)] space-y-6 shadow-xl max-w-3xl mx-auto">
      <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
        <div className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-[var(--primary)]" />
          <h3 className="text-base font-bold text-[var(--foreground)]">
            Dopamine Baseline & Boredom Calculator
          </h3>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[var(--muted)] text-[var(--primary)] border border-[var(--border)]">
          Interactive Tool
        </span>
      </div>

      <div className="space-y-4">
        {/* Input 1 */}
        <div>
          <div className="flex justify-between text-xs font-semibold text-[var(--foreground)] mb-1.5">
            <span>Daily Phone Screen Time:</span>
            <span className="text-[var(--primary)] font-mono">{screenTime} hours/day</span>
          </div>
          <input
            type="range"
            min="1"
            max="12"
            value={screenTime}
            onChange={(e) => setScreenTime(Number(e.target.value))}
            className="w-full h-2 bg-[var(--muted)] rounded-lg appearance-none cursor-pointer accent-[var(--primary)]"
          />
        </div>

        {/* Input 2 */}
        <div>
          <div className="flex justify-between text-xs font-semibold text-[var(--foreground)] mb-1.5">
            <span>Daily Notification Checks:</span>
            <span className="text-[var(--primary)] font-mono">{notifications} checks/day</span>
          </div>
          <input
            type="range"
            min="10"
            max="200"
            step="5"
            value={notifications}
            onChange={(e) => setNotifications(Number(e.target.value))}
            className="w-full h-2 bg-[var(--muted)] rounded-lg appearance-none cursor-pointer accent-[var(--primary)]"
          />
        </div>

        {/* Input 3 */}
        <div>
          <div className="flex justify-between text-xs font-semibold text-[var(--foreground)] mb-1.5">
            <span>Short Video Consumption (Reels/TikTok):</span>
            <span className="text-[var(--primary)] font-mono">{shortVideoMin} mins/day</span>
          </div>
          <input
            type="range"
            min="0"
            max="240"
            step="15"
            value={shortVideoMin}
            onChange={(e) => setShortVideoMin(Number(e.target.value))}
            className="w-full h-2 bg-[var(--muted)] rounded-lg appearance-none cursor-pointer accent-[var(--primary)]"
          />
        </div>
      </div>

      <button
        onClick={() => setCalculated(true)}
        className="w-full py-3 rounded-xl bg-[var(--primary)] text-[var(--primary-foreground)] text-xs font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-sm"
      >
        <Sparkles className="w-4 h-4" />
        <span>Calculate Neural Baseline</span>
      </button>

      {calculated && (
        <div className="p-6 rounded-2xl bg-[var(--muted)] border border-[var(--border)] space-y-4 animate-in fade-in">
          <div className="grid grid-cols-2 gap-4 font-mono">
            <div className="p-4 rounded-xl bg-[var(--card)] border border-[var(--border)]">
              <span className="text-[10px] text-[var(--muted-foreground)] block">D2 Receptor Sensitivity</span>
              <span className="text-xl font-extrabold text-[var(--primary)]">{receptorSensitivity}%</span>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card)] border border-[var(--border)]">
              <span className="text-[10px] text-[var(--muted-foreground)] block">Boredom Vulnerability</span>
              <span className="text-xl font-extrabold text-[var(--foreground)]">{boredomThreshold}%</span>
            </div>
          </div>

          <div className="space-y-2 text-xs text-[var(--muted-foreground)]">
            <strong className="text-[var(--foreground)] block">48-Hour Recovery Protocol:</strong>
            <ul className="space-y-1.5 list-disc pl-5">
              <li>Place phone in another room for 3 hours before sleep.</li>
              <li>Spend 5 minutes staring at a wall before initiating deep work.</li>
              <li>Disable all non-human notifications (apps, news, games).</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
