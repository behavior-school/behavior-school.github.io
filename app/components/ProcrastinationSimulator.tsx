"use client";

import React, { useState } from "react";
import { Activity, Zap, Play, RotateCcw, AlertTriangle, ShieldCheck } from "lucide-react";

export default function ProcrastinationSimulator() {
  const [amygdalaThreat, setAmygdalaThreat] = useState(75); // 0 to 100
  const [pfcControl, setPfcControl] = useState(25);
  const [dopamineLevel, setDopamineLevel] = useState(30);
  const [mode, setMode] = useState<"overwhelmed" | "avoidance" | "momentum">("overwhelmed");
  const [logs, setLogs] = useState<string[]>([
    "Initial State: High task ambiguity triggered 75% Amygdala threat response."
  ]);

  const addLog = (msg: string) => {
    setLogs((prev) => [msg, ...prev.slice(0, 4)]);
  };

  const handleSimulateTask = () => {
    setAmygdalaThreat(90);
    setPfcControl(15);
    setMode("overwhelmed");
    addLog("Task Initiation: Complex task perceived as threat. Limbic avoidance active.");
  };

  const handleApply2MinRule = () => {
    setAmygdalaThreat(20);
    setPfcControl(85);
    setDopamineLevel(65);
    setMode("momentum");
    addLog("2-Minute Rule Applied: Activation energy shrunken. Amygdala alarm bypassed.");
  };

  const handleEscapeDistraction = () => {
    setAmygdalaThreat(30);
    setPfcControl(10);
    setDopamineLevel(95);
    setMode("avoidance");
    addLog("Phone Checked: Temporary anxiety drop paired with +65% Dopamine spike.");
  };

  const handleReset = () => {
    setAmygdalaThreat(75);
    setPfcControl(25);
    setDopamineLevel(30);
    setMode("overwhelmed");
    setLogs(["Simulation reset to baseline default state."]);
  };

  return (
    <div className="bg-[var(--card)] p-6 sm:p-8 rounded-3xl border border-[var(--border)] space-y-6 my-8 shadow-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--border)] pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[var(--muted)] text-[var(--primary)] text-[10px] font-mono uppercase tracking-wider mb-1 border border-[var(--border)]">
            <Activity className="w-3 h-3" />
            <span>Neuroscience Playground</span>
          </div>
          <h3 className="text-lg font-bold text-[var(--foreground)]">
            Interactive Procrastination Limbic Simulator
          </h3>
          <p className="text-xs text-[var(--muted-foreground)] mt-0.5">
            Simulate how the Amygdala (Emotional Brain) hijacks the Prefrontal Cortex (Rational Brain).
          </p>
        </div>

        <button
          onClick={handleReset}
          className="px-3 py-1.5 rounded-xl bg-[var(--muted)] border border-[var(--border)] text-xs font-semibold text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors inline-flex items-center gap-1 self-start sm:self-auto"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset</span>
        </button>
      </div>

      {/* Control Buttons Panel */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <button
          onClick={handleSimulateTask}
          className={`p-3.5 rounded-2xl border text-xs font-bold transition-all flex items-center justify-center gap-2 ${
            mode === "overwhelmed"
              ? "bg-[var(--muted)] border-[var(--primary)] text-[var(--foreground)]"
              : "bg-[var(--muted)]/40 border-[var(--border)] text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
          }`}
        >
          <AlertTriangle className="w-4 h-4 text-[var(--primary)]" />
          <span>Complex Task Attack</span>
        </button>

        <button
          onClick={handleApply2MinRule}
          className={`p-3.5 rounded-2xl border text-xs font-bold transition-all flex items-center justify-center gap-2 ${
            mode === "momentum"
              ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
              : "bg-[var(--muted)]/40 border-[var(--border)] text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
          }`}
        >
          <Zap className="w-4 h-4" />
          <span>Apply 2-Min Rule</span>
        </button>

        <button
          onClick={handleEscapeDistraction}
          className={`p-3.5 rounded-2xl border text-xs font-bold transition-all flex items-center justify-center gap-2 ${
            mode === "avoidance"
              ? "bg-[var(--muted)] border-[var(--border)] text-[var(--primary)]"
              : "bg-[var(--muted)]/40 border-[var(--border)] text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
          }`}
        >
          <Play className="w-4 h-4 text-[var(--primary)]" />
          <span>Check Social Cues</span>
        </button>
      </div>

      {/* Real-time Brain Region Gauges */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Amygdala Threat Gauge */}
        <div className="p-4 rounded-2xl bg-[var(--muted)] border border-[var(--border)] space-y-2">
          <div className="flex justify-between text-xs font-bold text-[var(--foreground)]">
            <span>Amygdala Threat Alarm</span>
            <span className="text-[var(--primary)] font-mono">{amygdalaThreat}%</span>
          </div>
          <div className="w-full h-2.5 bg-[var(--card)] rounded-full overflow-hidden border border-[var(--border)]">
            <div
              style={{ width: `${amygdalaThreat}%` }}
              className="h-full bg-[var(--primary)] rounded-full transition-all duration-500"
            />
          </div>
          <span className="text-[10px] text-[var(--muted-foreground)] block">
            {amygdalaThreat > 70 ? "HIGH THREAT: Avoidance triggered" : "CALM: Action permitted"}
          </span>
        </div>

        {/* PFC Executive Control Gauge */}
        <div className="p-4 rounded-2xl bg-[var(--muted)] border border-[var(--border)] space-y-2">
          <div className="flex justify-between text-xs font-bold text-[var(--foreground)]">
            <span>Prefrontal Cortex Control</span>
            <span className="text-[var(--primary)] font-mono">{pfcControl}%</span>
          </div>
          <div className="w-full h-2.5 bg-[var(--card)] rounded-full overflow-hidden border border-[var(--border)]">
            <div
              style={{ width: `${pfcControl}%` }}
              className="h-full bg-[var(--foreground)] rounded-full transition-all duration-500"
            />
          </div>
          <span className="text-[10px] text-[var(--muted-foreground)] block">
            {pfcControl > 60 ? "FOCUS ACTIVE: Executive control in effect" : "HIJACKED: Limbic brain dominating"}
          </span>
        </div>

        {/* Temporary Dopamine Reward Gauge */}
        <div className="p-4 rounded-2xl bg-[var(--muted)] border border-[var(--border)] space-y-2">
          <div className="flex justify-between text-xs font-bold text-[var(--foreground)]">
            <span>Short-Term Dopamine Spike</span>
            <span className="text-[var(--primary)] font-mono">{dopamineLevel}%</span>
          </div>
          <div className="w-full h-2.5 bg-[var(--card)] rounded-full overflow-hidden border border-[var(--border)]">
            <div
              style={{ width: `${dopamineLevel}%` }}
              className="h-full bg-[var(--primary)]/60 rounded-full transition-all duration-500"
            />
          </div>
          <span className="text-[10px] text-[var(--muted-foreground)] block">
            {dopamineLevel > 80 ? "SPIKE: Reinforcing avoidance habit loop" : "NORMAL: Tonic equilibrium"}
          </span>
        </div>
      </div>

      {/* Live Event Activity Log */}
      <div className="p-4 rounded-2xl bg-[var(--muted)]/60 border border-[var(--border)] space-y-2 font-mono text-xs">
        <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--primary)] block">
          NEURAL ROUTING LOG (RECENT 5):
        </span>
        <div className="space-y-1.5">
          {logs.map((log, i) => (
            <div key={i} className="flex items-center gap-2 text-[11px] text-[var(--muted-foreground)]">
              <span className="text-[var(--primary)]">›</span>
              <span>{log}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
