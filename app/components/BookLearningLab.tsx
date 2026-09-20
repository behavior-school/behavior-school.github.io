"use client";

import { useMemo, useState } from "react";
import type { BookDetail } from "../../lib/book-types";

type Props = {
  book: BookDetail;
};

const sources = [
  {
    label: "Dopamine & prediction error",
    note: "A useful grounding for reward learning, updating expectations, and why surprise can teach.",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5319959/",
  },
  {
    label: "Attention & working memory",
    note: "Working memory and attention interact under real capacity limits; this matters for complexity and distraction.",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6688548/",
  },
  {
    label: "Social brain & reward",
    note: "Social information can change valuation, learning, trust, cooperation, and decision-making.",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3890330/",
  },
  {
    label: "Stress & decisions",
    note: "Stress can alter valuation, learning, risk, and decision strategies; effects depend on context.",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5201132/",
  },
  {
    label: "Threat learning",
    note: "Threat processing involves learning, memory, attention, and decision-making rather than one isolated “fear center.”",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8084636/",
  },
  {
    label: "Memory consolidation",
    note: "Learning is strengthened by offline consolidation, including during sleep, while the exact mechanisms remain an active research area.",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10754334/",
  },
];

const flowLabels = ["Context", "Attention", "Prediction", "Action", "Feedback"];

export default function BookLearningLab({ book }: Props) {
  const lab = book.learningLab;
  const [revealed, setRevealed] = useState(false);
  const [checked, setChecked] = useState<boolean[]>(() => lab?.practice.map(() => false) ?? []);

  const completed = useMemo(
    () => checked.filter(Boolean).length,
    [checked]
  );

  if (!lab) return null;

  const togglePractice = (index: number) => {
    setChecked((current) => current.map((value, i) => (i === index ? !value : value)));
  };

  return (
    <section className="space-y-6" aria-labelledby="learning-lab-title">
      <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--muted)]/30 shadow-xl">
        <div className="grid gap-0 lg:grid-cols-[1.2fr_.8fr]">
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--primary)]">
              <span>Deep learning lab</span>
              <span className="opacity-50">•</span>
              <span>Behavior × neuroscience</span>
            </div>
            <h2 id="learning-lab-title" className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--foreground)]">
              Turn the book into a mental model you can actually use.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted-foreground)]">
              Instead of memorising isolated rules, follow one chain: what the environment makes salient,
              what the brain predicts, what behaviour follows, and what feedback teaches next.
            </p>

            <div className="mt-6 rounded-2xl border border-[var(--primary)]/25 bg-[var(--card)] p-5">
              <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--primary)]">One-sentence model</div>
              <p className="mt-2 text-base sm:text-lg font-semibold leading-7 text-[var(--foreground)]">
                {lab.coreModel}
              </p>
            </div>
          </div>

          <div className="relative border-t border-[var(--border)] bg-[var(--card)] p-4 sm:p-6 lg:border-l lg:border-t-0">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--primary)]">Flowchart SVG</div>
                <div className="text-xs text-[var(--muted-foreground)]">A compact visual map of the behavior loop</div>
              </div>
              <span className="rounded-full border border-[var(--border)] px-2 py-1 font-mono text-[10px] text-[var(--muted-foreground)]">SVG</span>
            </div>

            <svg viewBox="0 0 560 310" className="h-auto w-full" role="img" aria-labelledby="learning-flow-title learning-flow-desc">
              <title id="learning-flow-title">{book.title} learning flow</title>
              <desc id="learning-flow-desc">Context influences attention, attention changes predictions, predictions influence action, and feedback updates future predictions.</desc>
              <defs>
                <marker id="book-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
                </marker>
              </defs>

              {flowLabels.map((label, index) => {
                const x = 18 + index * 107;
                return (
                  <g key={label}>
                    <rect
                      x={x}
                      y={92 + (index % 2) * 18}
                      width="92"
                      height="66"
                      rx="16"
                      fill="currentColor"
                      fillOpacity=".06"
                      stroke="currentColor"
                      strokeOpacity=".20"
                    />
                    <text x={x + 46} y={126 + (index % 2) * 18} textAnchor="middle" fontSize="12" fontWeight="700" fill="currentColor">
                      {label}
                    </text>
                    <text x={x + 46} y={144 + (index % 2) * 18} textAnchor="middle" fontSize="9" fill="currentColor" opacity=".55">
                      0{index + 1}
                    </text>
                    {index < flowLabels.length - 1 && (
                      <line
                        x1={x + 92}
                        y1={125 + (index % 2) * 18}
                        x2={x + 105}
                        y2={125 + ((index + 1) % 2) * 18}
                        stroke="currentColor"
                        strokeOpacity=".55"
                        strokeWidth="2"
                        markerEnd="url(#book-arrow)"
                      />
                    )}
                  </g>
                );
              })}

              <path
                d="M 510 200 C 510 250, 270 272, 60 225"
                fill="none"
                stroke="currentColor"
                strokeOpacity=".35"
                strokeDasharray="7 7"
                strokeWidth="2"
                markerEnd="url(#book-arrow)"
              />
              <text x="280" y="286" textAnchor="middle" fontSize="10" fill="currentColor" opacity=".60">
                feedback updates the next prediction
              </text>
            </svg>
          </div>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <article className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 sm:p-6">
          <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--primary)]">Neuroscience lens</div>
          <h3 className="mt-2 text-xl font-bold text-[var(--foreground)]">What the brain adds to the story</h3>
          <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">{lab.brainLens}</p>
          <div className="mt-4 rounded-xl border border-dashed border-[var(--border)] bg-[var(--muted)]/40 p-3 text-xs leading-6 text-[var(--muted-foreground)]">
            <strong className="text-[var(--foreground)]">Accuracy note:</strong> these are learning-oriented
            neuroscience lenses, not one-to-one claims that a single brain region “causes” a behavior.
          </div>
        </article>

        <article className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 sm:p-6">
          <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--primary)]">Story → mechanism</div>
          <h3 className="mt-2 text-xl font-bold text-[var(--foreground)]">{lab.story.title}</h3>
          <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">{lab.story.text}</p>

          <button
            type="button"
            onClick={() => setRevealed((value) => !value)}
            className="mt-5 rounded-xl bg-[var(--primary)] px-4 py-2.5 text-xs font-bold text-[var(--primary-foreground)] transition-transform hover:-translate-y-0.5"
          >
            {revealed ? "Hide the learning move" : "Reveal the learning move"}
          </button>

          {revealed && (
            <div className="mt-4 rounded-xl bg-[var(--muted)] p-4 text-sm font-semibold leading-6 text-[var(--foreground)]">
              Ask: <span className="text-[var(--primary)]">What was made salient, what was predicted, what action became easier, and what feedback strengthened the loop?</span>
            </div>
          )}
        </article>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <article className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5">
          <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--primary)]">See it in real life</div>
          <h3 className="mt-2 text-lg font-bold text-[var(--foreground)]">Three translation examples</h3>
          <div className="mt-4 space-y-3">
            {lab.examples.map((example, i) => (
              <div key={example} className="rounded-xl border border-[var(--border)] bg-[var(--muted)]/40 p-3 text-sm leading-6 text-[var(--foreground)]">
                <span className="mr-2 font-mono text-[10px] text-[var(--primary)]">0{i + 1}</span>{example}
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5">
          <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--primary)]">Pattern detector</div>
          <h3 className="mt-2 text-lg font-bold text-[var(--foreground)]">What to watch for</h3>
          <ul className="mt-4 space-y-3">
            {lab.watchFor.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-[var(--foreground)]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-[var(--primary)]/30 bg-[var(--card)] p-5 shadow-sm">
          <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--primary)]">Field experiment</div>
          <div className="mt-2 flex items-end justify-between gap-3">
            <h3 className="text-lg font-bold text-[var(--foreground)]">Do it, don't just read it</h3>
            <span className="font-mono text-xs text-[var(--primary)]">{completed}/{lab.practice.length}</span>
          </div>
          <div className="mt-4 space-y-3">
            {lab.practice.map((item, i) => (
              <label key={item} className="flex cursor-pointer items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--muted)]/45 p-3 text-sm leading-6 text-[var(--foreground)]">
                <input
                  type="checkbox"
                  checked={checked[i] ?? false}
                  onChange={() => togglePractice(i)}
                  className="mt-1 h-4 w-4 accent-[var(--primary)]"
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </article>
      </div>

      <details className="rounded-2xl border border-[var(--border)] bg-[var(--muted)]/35 p-5">
        <summary className="cursor-pointer text-sm font-bold text-[var(--foreground)]">How this page uses neuroscience responsibly</summary>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sources.map((source) => (
            <a key={source.label} href={source.url} target="_blank" rel="noreferrer" className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 transition-transform hover:-translate-y-0.5">
              <div className="text-xs font-bold text-[var(--foreground)]">{source.label}</div>
              <div className="mt-1.5 text-[11px] leading-5 text-[var(--muted-foreground)]">{source.note}</div>
              <div className="mt-2 text-[10px] font-semibold text-[var(--primary)]">Read source ↗</div>
            </a>
          ))}
        </div>
        <p className="mt-4 text-[11px] leading-5 text-[var(--muted-foreground)]">
          Neuroscience can explain mechanisms and constraints, but it does not turn complex books into deterministic brain formulas.
          Effects also depend on task, context, individual differences, and the quality of the underlying evidence.
        </p>
      </details>
    </section>
  );
}
