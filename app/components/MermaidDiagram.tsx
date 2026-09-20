"use client";

import { useEffect, useId, useRef, useState } from "react";

declare global {
  interface Window {
    mermaid?: {
      initialize: (config: Record<string, unknown>) => void;
      render: (id: string, definition: string) => Promise<{ svg: string }>;
    };
  }
}

const MERMAID_SRC = "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.min.js";
let mermaidLoader: Promise<void> | null = null;

function loadMermaid() {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.mermaid) return Promise.resolve();
  if (mermaidLoader) return mermaidLoader;

  mermaidLoader = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>('script[data-behavior-school-mermaid="true"]');
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("Mermaid failed to load")), { once: true });
      return;
    }
    const script = document.createElement("script");
    script.src = MERMAID_SRC;
    script.async = true;
    script.dataset.behaviorSchoolMermaid = "true";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Mermaid failed to load"));
    document.head.appendChild(script);
  });

  return mermaidLoader;
}

export default function MermaidDiagram({ chart, title = "Concept map" }: { chart: string; title?: string }) {
  const domId = useId().replace(/:/g, "");
  const targetRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;
    loadMermaid()
      .then(async () => {
        if (!active || !targetRef.current || !window.mermaid) return;
        window.mermaid.initialize({
          startOnLoad: false,
          securityLevel: "strict",
          theme: "base",
          themeVariables: {
            primaryColor: "#f6ede8",
            primaryTextColor: "#34302c",
            primaryBorderColor: "#c47445",
            lineColor: "#7a7168",
            secondaryColor: "#efe8df",
            tertiaryColor: "#fbfaf7",
          },
        });
        const result = await window.mermaid.render("book-mermaid-" + domId, chart);
        if (active && targetRef.current) targetRef.current.innerHTML = result.svg;
      })
      .catch(() => {
        if (active) setFailed(true);
      });
    return () => {
      active = false;
    };
  }, [chart, domId]);

  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 sm:p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--primary)]">Mermaid concept map</div>
          <h3 className="mt-1 text-lg font-bold text-[var(--foreground)]">{title}</h3>
        </div>
        <code className="rounded-full border border-[var(--border)] px-2.5 py-1 text-[10px] text-[var(--muted-foreground)]">flowchart</code>
      </div>
      <div ref={targetRef} className="min-h-[180px] overflow-x-auto" aria-label={title} />
      {failed && (
        <pre className="mt-3 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--muted)] p-4 text-xs leading-5 text-[var(--muted-foreground)]">{chart}</pre>
      )}
      <p className="mt-3 text-[11px] leading-5 text-[var(--muted-foreground)]">
        The diagram is a conceptual learning aid. Read the surrounding explanation for nuance and exceptions.
      </p>
    </div>
  );
}
