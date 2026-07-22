"use client";

import React, { useState, useEffect } from "react";
import { Play, Pause, RotateCcw, ShieldCheck, Sparkles, Bell } from "lucide-react";

export default function PomodoroTool() {
  const [mode, setMode] = useState<"pomodoro" | "ultradian" | "shortBreak" | "longBreak">("pomodoro");
  const [timeLeft, setTimeLeft] = useState<number>(25 * 60);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [completedSessions, setCompletedSessions] = useState<number>(0);

  const initialTimes = {
    pomodoro: 25 * 60,
    ultradian: 90 * 60,
    shortBreak: 5 * 60,
    longBreak: 15 * 60,
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      if (mode === "pomodoro" || mode === "ultradian") {
        setCompletedSessions((prev) => prev + 1);
      }
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft, mode]);

  const handleModeChange = (newMode: "pomodoro" | "ultradian" | "shortBreak" | "longBreak") => {
    setMode(newMode);
    setTimeLeft(initialTimes[newMode]);
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(initialTimes[mode]);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const progressPercent = Math.round(((initialTimes[mode] - timeLeft) / initialTimes[mode]) * 100);

  return (
    <div className="bg-[var(--card)] p-6 sm:p-10 rounded-3xl border border-[var(--border)] space-y-8 shadow-2xl max-w-3xl mx-auto text-center">
      {/* Header */}
      <div className="border-b border-[var(--border)] pb-4 flex items-center justify-between">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--muted)] text-[var(--primary)] text-xs font-mono uppercase tracking-wider border border-[var(--border)]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Neuroscience Focus Timer</span>
        </div>
        <span className="text-xs font-mono text-[var(--muted-foreground)]">
          Completed Sessions: <strong className="text-[var(--primary)] font-bold">{completedSessions}</strong>
        </span>
      </div>

      {/* Mode Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-[var(--muted)]/50 p-1.5 rounded-2xl border border-[var(--border)]">
        <button
          onClick={() => handleModeChange("pomodoro")}
          className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
            mode === "pomodoro"
              ? "bg-[var(--primary)] text-[var(--primary-foreground)] shadow-sm"
              : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
          }`}
        >
          25m Pomodoro
        </button>
        <button
          onClick={() => handleModeChange("ultradian")}
          className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
            mode === "ultradian"
              ? "bg-[var(--primary)] text-[var(--primary-foreground)] shadow-sm"
              : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
          }`}
        >
          90m Ultradian
        </button>
        <button
          onClick={() => handleModeChange("shortBreak")}
          className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
            mode === "shortBreak"
              ? "bg-[var(--primary)] text-[var(--primary-foreground)] shadow-sm"
              : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
          }`}
        >
          5m Break
        </button>
        <button
          onClick={() => handleModeChange("longBreak")}
          className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
            mode === "longBreak"
              ? "bg-[var(--primary)] text-[var(--primary-foreground)] shadow-sm"
              : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
          }`}
        >
          15m Rest
        </button>
      </div>

      {/* Big Display Timer */}
      <div className="py-8 relative">
        <div className="text-6xl sm:text-8xl font-extrabold font-mono text-[var(--foreground)] tracking-tighter">
          {formatTime(timeLeft)}
        </div>
        <div className="mt-4 max-w-md mx-auto w-full h-2.5 bg-[var(--muted)] rounded-full overflow-hidden border border-[var(--border)]">
          <div
            style={{ width: `${progressPercent}%` }}
            className="h-full bg-[var(--primary)] rounded-full transition-all duration-500"
          />
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className="px-8 py-4 rounded-2xl bg-[var(--primary)] text-[var(--primary-foreground)] text-sm font-extrabold hover:opacity-90 transition-opacity inline-flex items-center gap-2 shadow-lg"
        >
          {isRunning ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
          <span>{isRunning ? "Pause Focus" : "Start Session"}</span>
        </button>

        <button
          onClick={handleReset}
          className="p-4 rounded-2xl bg-[var(--muted)] border border-[var(--border)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
          title="Reset Timer"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>

      {/* Protocol Advice */}
      <div className="p-4 rounded-2xl bg-[var(--muted)] border border-[var(--border)] text-left text-xs text-[var(--muted-foreground)] space-y-1.5">
        <div className="flex items-center gap-2 font-bold text-[var(--foreground)]">
          <ShieldCheck className="w-4 h-4 text-[var(--primary)]" />
          <span>Neuroscience Focus Protocol:</span>
        </div>
        <p className="leading-relaxed">
          {mode === "ultradian"
            ? "90-minute ultradian rhythm cycles align with natural biological brain performance peaks. Quarantine phone in another room."
            : "Keep phone face down and out of sight to eliminate visual distraction cues during work intervals."}
        </p>
      </div>
    </div>
  );
}
