"use client";

import React, { useState } from "react";
import { X, Copy, Check, FileText, ArrowUpRight } from "lucide-react";

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
      <div className="flex-1" onClick={onClose} />

      <div className="w-full max-w-xl bg-[var(--background)] border-l border-[var(--border)] h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-200">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[var(--border)] flex items-center justify-between bg-[var(--card)]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[var(--muted)] text-[var(--primary)] border border-[var(--border)]">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--muted-foreground)]">
                {artifact.filename}
              </span>
              <h3 className="text-sm font-bold text-[var(--foreground)] truncate max-w-xs">
                {artifact.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--muted)] border border-[var(--border)] text-xs font-medium text-[var(--foreground)] hover:bg-[var(--accent)] transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[var(--primary)]" />
                  <span className="text-[var(--primary)]">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[var(--muted-foreground)]" />
                  <span>Copy</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[var(--muted)] border border-[var(--border)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-xs text-[var(--muted-foreground)]">
          <div className="p-4 rounded-xl bg-[var(--card)] border border-[var(--border)] font-mono leading-relaxed whitespace-pre-line text-[var(--foreground)]">
            {artifact.content}
          </div>

          {artifact.actionProtocol && (
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--foreground)]">
                Execution Protocol:
              </h4>
              {artifact.actionProtocol.map((step, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-[var(--muted)] border border-[var(--border)] text-[var(--foreground)]">
                  <span className="font-bold text-[var(--primary)] mr-2">{idx + 1}.</span> {step}
                </div>
              ))}
            </div>
          )}

          {artifact.youtubeVideo && (
            <div className="p-4 rounded-xl bg-[var(--card)] border border-[var(--border)] flex items-center justify-between">
              <span className="font-medium text-[var(--foreground)]">{artifact.youtubeVideo}</span>
              <a
                href="https://www.youtube.com/@behavior-school"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] font-bold hover:opacity-90 transition-opacity inline-flex items-center gap-1"
              >
                <span>Watch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
