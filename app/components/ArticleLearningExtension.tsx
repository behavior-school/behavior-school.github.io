import ExcalidrawSketch from "./ExcalidrawSketch";

export default function ArticleLearningExtension({
  title,
  takeaways,
}: {
  title: string;
  takeaways: string[];
}) {
  const labels = takeaways.slice(0, 4).map((item) => item.length > 30 ? item.slice(0, 30) + "…" : item);

  return (
    <div className="mt-12 space-y-6">
      <section className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--muted)]/40 p-5 sm:p-7">
        <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--primary)]">From information to action</div>
        <h2 className="mt-2 text-xl sm:text-2xl font-extrabold text-[var(--foreground)]">Make the idea operational.</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--muted-foreground)]">
          The strongest way to remember a behavioral model is to reconstruct it yourself. Start with the central claim, name the mechanism, and then connect it to an observable action. The sketch below is deliberately editable: move the nodes, redraw the arrows, and add the missing context that matters in your own life.
        </p>
      </section>

      <ExcalidrawSketch
        title={title + " — concept sketch"}
        subtitle="Rebuild the mental model, annotate it, then explain it without looking back at the article."
        labels={labels.length ? labels : ["Trigger", "Interpret", "Behavior", "Outcome"]}
        height={420}
      />

      <section className="grid gap-4 md:grid-cols-3">
        {[
          ["01 · Explain", "Can you explain the mechanism without repeating the article's wording?"],
          ["02 · Apply", "Where could the same pattern appear in a different environment or situation?"],
          ["03 · Challenge", "What observation would make you revise your explanation?"],
        ].map(([label, prompt]) => (
          <article key={label} className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5">
            <div className="font-mono text-[10px] font-bold text-[var(--primary)]">{label}</div>
            <p className="mt-2 text-sm leading-6 text-[var(--foreground)]">{prompt}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
