"use client";

import React, { useState } from "react";
import { X, Copy, Check, FileText, Sparkles, Download, ArrowUpRight, Code } from "lucide-react";

export interface ArtifactData {
  title: string;
  type: "MARKDOWN" | "PROTOCOL" | "NEUROSCIENCE" | "MENTAL_MODEL" | "RESEARCH";
  filename: string;
  content: string;
  category: string;
  actionProtocol?: string[];
  youtubeVideo?: string;
}

interface ArtifactViewerProps {
  artifact: ArtifactData | null;
  onClose: () => void;
}

export default function ArtifactViewer({ artifact, onClose }: ArtifactViewerProps) {
  const [copied, setCopied] = useState(false);

  if (!artifact) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(artifact.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Click outside backdrop */}
      <div className="flex-1" onClick={onClose} />

      {/* Claude-style Artifact Panel */}
      <div className="w-full max-w-2xl bg-slate-950 border-l border-slate-800 h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/60">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-indigo-950 text-indigo-400 border border-indigo-800/40">
                  {artifact.type}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {artifact.filename}
                </span>
              </div>
              <h3 className="text-base font-bold text-white truncate max-w-md mt-0.5">
                {artifact.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-all"
              title="Copy Artifact Markdown"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Copy</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
              aria-label="Close Artifact"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Metadata Banner */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs">
            <span className="text-slate-400">
              Category: <strong className="text-indigo-400">{artifact.category}</strong>
            </span>
            <span className="text-slate-500 font-mono text-[11px]">
              Behavior School Engine v2.0
            </span>
          </div>

          {/* Artifact Main Text */}
          <div className="prose prose-invert max-w-none text-slate-300 text-sm leading-relaxed whitespace-pre-line font-mono bg-slate-900/40 p-5 rounded-xl border border-slate-800/80">
            {artifact.content}
          </div>

          {/* Action Protocol Steps if present */}
          {artifact.actionProtocol && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>3-Step Execution Protocol</span>
              </h4>
              <div className="space-y-2">
                {artifact.actionProtocol.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3 text-xs"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-[11px]">
                      {idx + 1}
                    </span>
                    <p className="text-slate-200 font-medium leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Video Watch Banner */}
          {artifact.youtubeVideo && (
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Recommended Video Lesson
                </span>
                <h5 className="text-xs font-bold text-white mt-0.5">
                  "{artifact.youtubeVideo}"
                </h5>
              </div>
              <a
                href="https://www.youtube.com/@behavior-school"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-red-600 hover:bg-red-500 transition-colors flex items-center gap-1.5 shrink-0"
              >
                <span>Watch on YouTube</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>

        {/* Footer status bar */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-900/80 text-[11px] text-slate-500 flex items-center justify-between">
          <span>Artifact generated by Behavior School</span>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors"
          >
            Press Esc or click to dismiss
          </button>
        </div>
      </div>
    </div>
  );
}
