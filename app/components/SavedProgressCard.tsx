"use client";

import React, { useState, useEffect } from "react";
import { Award, Trash2, Clock, CheckCircle2 } from "lucide-react";
import { getSavedResults, clearSavedResults, SavedResult } from "../lib/storage";

export default function SavedProgressCard() {
  const [results, setResults] = useState<SavedResult[]>([]);

  useEffect(() => {
    setResults(getSavedResults());
  }, []);

  const handleClear = () => {
    clearSavedResults();
    setResults([]);
  };

  if (results.length === 0) return null;

  return (
    <div className="bg-[var(--card)] p-6 sm:p-8 rounded-3xl border border-[var(--border)] space-y-4 max-w-4xl mx-auto mb-12 shadow-xl animate-in fade-in">
      <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-[var(--primary)]" />
          <h3 className="text-base font-bold text-[var(--foreground)]">
            Your LocalStorage Quiz & Diagnostic Scores
          </h3>
        </div>
        <button
          onClick={handleClear}
          className="text-xs font-semibold text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors inline-flex items-center gap-1"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>Clear History</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {results.map((item, idx) => (
          <div
            key={idx}
            className="p-4 rounded-2xl bg-[var(--muted)] border border-[var(--border)] flex items-center justify-between"
          >
            <div>
              <span className="text-[10px] font-mono text-[var(--primary)] uppercase tracking-wider block">
                {item.type.toUpperCase()} RESULT
              </span>
              <h4 className="text-xs font-bold text-[var(--foreground)] truncate max-w-xs">{item.title}</h4>
              <span className="text-[10px] text-[var(--muted-foreground)] flex items-center gap-1 mt-0.5">
                <Clock className="w-3 h-3" /> {item.timestamp}
              </span>
            </div>

            {item.score !== undefined && (
              <div className="text-right font-mono">
                <span className="text-base font-extrabold text-[var(--primary)]">
                  {item.score}/{item.maxScore}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
