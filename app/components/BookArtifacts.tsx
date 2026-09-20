import React from "react";

export interface BookVisual {
  title: string;
  subtitle?: string;
  steps: string[];
  caption: string;
}

export interface BookArtifact {
  title: string;
  description: string;
  items: string[];
  prompt?: string;
}

interface BookArtifactsProps {
  visual?: BookVisual;
  artifact?: BookArtifact;
}

export default function BookArtifacts({ visual, artifact }: BookArtifactsProps) {
  if (!visual && !artifact) return null;

  return (
    <section className="space-y-5">
      {visual && (
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--muted)]/45 p-5 sm:p-6">
          <div className="mb-5">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--primary)]">
              Visual model
            </span>
            <h3 className="mt-1 text-lg sm:text-xl font-bold text-[var(--foreground)]">
              {visual.title}
            </h3>
            {visual.subtitle && (
              <p className="mt-1 text-xs sm:text-sm text-[var(--muted-foreground)]">
                {visual.subtitle}
              </p>
            )}
          </div>

          <div className="grid gap-2 sm:grid-cols-[repeat(auto-fit,minmax(150px,1fr))]">
            {visual.steps.map((step, index) => (
              <React.Fragment key={step}>
                <div className="relative rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-sm">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold text-[var(--primary)]">
                      0{index + 1}
                    </span>
                    {index < visual.steps.length - 1 && (
                      <span className="hidden text-[var(--muted-foreground)] sm:block">→</span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm font-semibold leading-relaxed text-[var(--foreground)]">
                    {step}
                  </p>
                </div>
                {index < visual.steps.length - 1 && (
                  <div className="flex items-center justify-center text-[var(--primary)] sm:hidden">
                    ↓
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          <p className="mt-4 border-t border-[var(--border)] pt-4 text-xs leading-relaxed text-[var(--muted-foreground)]">
            {visual.caption}
          </p>
        </div>
      )}

      {artifact && (
        <div className="rounded-2xl border border-[var(--primary)]/30 bg-[var(--card)] p-5 sm:p-6 shadow-sm">
          <div className="mb-5">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-[var(--muted)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--primary)]">
                Field artifact
              </span>
            </div>
            <h3 className="mt-3 text-lg sm:text-xl font-bold text-[var(--foreground)]">
              {artifact.title}
            </h3>
            <p className="mt-1 text-xs sm:text-sm leading-relaxed text-[var(--muted-foreground)]">
              {artifact.description}
            </p>
          </div>

          <ol className="grid gap-2 sm:grid-cols-2">
            {artifact.items.map((item, index) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--muted)]/55 p-3.5"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-[10px] font-bold text-[var(--primary-foreground)]">
                  {index + 1}
                </span>
                <span className="text-xs sm:text-sm leading-relaxed text-[var(--foreground)]">
                  {item}
                </span>
              </li>
            ))}
          </ol>

          {artifact.prompt && (
            <div className="mt-4 rounded-xl border border-dashed border-[var(--primary)]/40 bg-[var(--muted)] p-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--primary)]">
                Use this prompt
              </p>
              <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-[var(--foreground)]">
                {artifact.prompt}
              </p>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
