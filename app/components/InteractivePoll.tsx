"use client";

import React, { useState } from "react";
import { BarChart2, CheckCircle2 } from "lucide-react";

export interface PollOption {
  id: number;
  text: string;
  votes: number;
}

interface InteractivePollProps {
  question: string;
  options: PollOption[];
}

export default function InteractivePoll({ question, options: initialOptions }: InteractivePollProps) {
  const [options, setOptions] = useState<PollOption[]>(initialOptions);
  const [votedOption, setVotedOption] = useState<number | null>(null);

  const totalVotes = options.reduce((sum, opt) => sum + opt.votes, 0);

  const handleVote = (id: number) => {
    if (votedOption !== null) return;

    setVotedOption(id);
    setOptions((prev) =>
      prev.map((opt) => (opt.id === id ? { ...opt, votes: opt.votes + 1 } : opt))
    );
  };

  return (
    <div className="bg-[var(--card)] p-6 sm:p-8 rounded-3xl border border-[var(--border)] space-y-5 my-8 shadow-xl">
      <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
        <div className="flex items-center gap-2">
          <BarChart2 className="w-5 h-5 text-[var(--primary)]" />
          <h3 className="text-base font-bold text-[var(--foreground)]">Community Poll</h3>
        </div>
        <span className="text-[10px] font-mono text-[var(--muted-foreground)]">
          {totalVotes} total responses
        </span>
      </div>

      <p className="text-xs sm:text-sm font-semibold text-[var(--foreground)] leading-relaxed">
        {question}
      </p>

      <div className="space-y-3">
        {options.map((opt) => {
          const percentage = totalVotes > 0 ? Math.round((opt.votes / totalVotes) * 100) : 0;
          const isSelected = votedOption === opt.id;

          return (
            <div
              key={opt.id}
              onClick={() => handleVote(opt.id)}
              className={`p-3.5 rounded-2xl border relative overflow-hidden transition-all cursor-pointer ${
                isSelected
                  ? "border-[var(--primary)] bg-[var(--muted)]"
                  : "border-[var(--border)] bg-[var(--muted)]/40 hover:border-[var(--border)]/80"
              }`}
            >
              {/* Animated Progress Bar */}
              {votedOption !== null && (
                <div
                  style={{ width: `${percentage}%` }}
                  className="absolute inset-y-0 left-0 bg-[var(--primary)]/15 transition-all duration-700"
                />
              )}

              <div className="relative z-10 flex items-center justify-between text-xs font-semibold">
                <div className="flex items-center gap-2 text-[var(--foreground)]">
                  <span>{opt.text}</span>
                  {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[var(--primary)]" />}
                </div>

                {votedOption !== null && (
                  <span className="font-mono text-[var(--primary)]">{percentage}%</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
