"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Maximize2, Minimize2, RotateCcw, Sparkles } from "lucide-react";
import type { ExcalidrawImperativeAPI } from "@excalidraw/excalidraw/types";
import "@excalidraw/excalidraw/index.css";

const Excalidraw = dynamic(
  async () => (await import("@excalidraw/excalidraw")).Excalidraw,
  { ssr: false },
);

export interface ExcalidrawSketchProps {
  title: string;
  subtitle?: string;
  labels: string[];
  height?: number;
}

export default function ExcalidrawClient({
  title,
  subtitle,
  labels,
  height = 440,
}: ExcalidrawSketchProps) {
  const [dark, setDark] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  const [api, setApi] = useState<ExcalidrawImperativeAPI | null>(null);
  const shellRef = useRef<HTMLDivElement>(null);

  const initialData = useMemo(
    () => ({
      elements: [],
      appState: {
        viewBackgroundColor: dark ? "#262421" : "#fbfaf7",
        theme: dark ? "dark" as const : "light" as const,
      },
      scrollToContent: true,
    }),
    [dark],
  );

  useEffect(() => {
    const sync = () => setDark(document.documentElement.classList.contains("dark"));
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!api || labels.length === 0) return;
    let cancelled = false;

    void (async () => {
      await document.fonts.ready;
      if (cancelled) return;

      const { convertToExcalidrawElements } = await import("@excalidraw/excalidraw");
      const gap = 72;
      const startX = 120;
      const y = 170;
      const width = 240;
      const boxHeight = 110;
      const skeletons: Parameters<typeof convertToExcalidrawElements>[0] = [];

      labels.forEach((label, index) => {
        const x = startX + index * (width + gap);
        skeletons.push(
          {
            type: "rectangle",
            x,
            y,
            width,
            height: boxHeight,
            strokeColor: dark ? "#c7beb2" : "#4e473f",
            backgroundColor: dark ? "#332f2a" : "#f3eee7",
            roughness: 1,
          } as never,
          {
            type: "text",
            x: x + 24,
            y: y + 38,
            text: label,
            fontSize: 22,
            strokeColor: dark ? "#f5f0e8" : "#2f2a24",
            roughness: 0,
          } as never,
        );

        if (index < labels.length - 1) {
          skeletons.push(
            {
              type: "arrow",
              x: x + width,
              y: y + boxHeight / 2,
              points: [[0, 0], [gap, 0]],
              startArrowhead: null,
              endArrowhead: "arrow",
              strokeColor: dark ? "#c47445" : "#9b562f",
              roughness: 1,
            } as never,
          );
        }
      });

      api.updateScene({ elements: convertToExcalidrawElements(skeletons) });
      api.scrollToContent(api.getSceneElements(), { fitToContent: true, animate: false });
    })();

    return () => {
      cancelled = true;
    };
  }, [api, dark, labels]);

  const toggleFullscreen = async () => {
    if (!shellRef.current) return;
    if (!document.fullscreenElement) {
      await shellRef.current.requestFullscreen();
      setFullscreen(true);
    } else {
      await document.exitFullscreen();
      setFullscreen(false);
    }
  };

  return (
    <section className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-3 sm:p-4" aria-label={title}>
      <div className="mb-3 flex items-start justify-between gap-3 px-1">
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--primary)]">
            <Sparkles className="h-3.5 w-3.5" />
            Sketch lab
          </div>
          <h2 className="mt-1 text-base font-bold text-[var(--foreground)] sm:text-lg">{title}</h2>
          {subtitle && <p className="mt-1 text-xs leading-5 text-[var(--muted-foreground)]">{subtitle}</p>}
        </div>

        <div className="flex shrink-0 gap-1">
          <button
            onClick={() => api?.resetScene()}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
            aria-label="Reset sketch"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
          <button
            onClick={() => void toggleFullscreen()}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
            aria-label={fullscreen ? "Exit fullscreen" : "Open sketch fullscreen"}
          >
            {fullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <div ref={shellRef} className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)]" style={{ height }}>
        <Excalidraw
          theme={dark ? "dark" : "light"}
          initialData={initialData}
          excalidrawAPI={setApi}
          UIOptions={{
            canvasActions: {
              saveToActiveFile: false,
              loadScene: false,
              export: false,
              clearCanvas: false,
            },
          }}
        />
      </div>
    </section>
  );
}
