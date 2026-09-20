interface BookConceptMapProps {
  title: string;
  diagram: string;
}

function extractLabels(diagram: string) {
  const labels: string[] = [];
  const seen = new Set<string>();
  const pattern = /[A-Za-z0-9_]+\[([^\]]+)\]/g;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(diagram))) {
    const label = match[1].trim();
    if (!seen.has(label)) {
      seen.add(label);
      labels.push(label);
    }
  }
  return labels;
}

export default function BookConceptMap({ title, diagram }: BookConceptMapProps) {
  const labels = extractLabels(diagram);

  return (
    <section className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--card)] p-5 sm:p-7" aria-labelledby="concept-map-title">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--primary)]">Concept map</div>
          <h2 id="concept-map-title" className="mt-1 text-xl font-extrabold text-[var(--foreground)]">{title}</h2>
        </div>
        <span className="rounded-full bg-[var(--muted)] px-2.5 py-1 text-[10px] font-semibold text-[var(--muted-foreground)]">Mermaid source included</span>
      </div>

      <div className="flex flex-wrap items-center gap-2" aria-label={`${title} behavioral flow diagram`}>
        {labels.map((label, index) => (
          <div key={`${label}-${index}`} className="flex items-center gap-2">
            <div className="min-w-[120px] rounded-xl border border-[var(--border)] bg-[var(--muted)]/55 px-3 py-3 text-center text-xs font-bold leading-5 text-[var(--foreground)]">
              {label}
            </div>
            {index < labels.length - 1 && <span className="text-[var(--primary)]" aria-hidden="true">→</span>}
          </div>
        ))}
      </div>

      <details className="mt-5 rounded-xl border border-[var(--border)] bg-[var(--muted)]/35 p-4">
        <summary className="cursor-pointer text-xs font-bold text-[var(--foreground)]">View Mermaid definition</summary>
        <pre className="mt-3 overflow-x-auto text-[11px] leading-5 text-[var(--muted-foreground)]"><code>{diagram}</code></pre>
      </details>
    </section>
  );
}
