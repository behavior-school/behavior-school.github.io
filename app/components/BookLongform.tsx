import type { BookDetail } from "../../lib/book-types";

export default function BookLongform({ book }: { book: BookDetail }) {
  const lab = book.learningLab;
  const takeaways = book.keyTakeaways;
  const protocols = book.protocolSteps;

  return (
    <section className="mt-10 space-y-8 border-t border-[var(--border)] pt-10" aria-labelledby="extended-reading">
      <div>
        <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--primary)]">Extended explanation</div>
        <h2 id="extended-reading" className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--foreground)]">
          Go beyond the summary.
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--muted-foreground)]">
          This section turns the book's central ideas into a connected learning path: thesis → mechanism → examples → mistakes → practice → recall.
          The aim is understanding, not memorizing slogans.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <article className="rounded-2xl border border-[var(--border)] bg-[var(--muted)]/45 p-6">
          <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--primary)]">01 · The idea</div>
          <h3 className="mt-2 text-xl font-bold text-[var(--foreground)]">What the author is really trying to change</h3>
          <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">{book.summary}</p>
          <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">
            The easiest way to misuse a book is to turn one memorable sentence into a universal law. A better reader asks:
            <span className="font-semibold text-[var(--foreground)]"> What problem is this model solving, what assumptions does it make, and where does it stop being useful?</span>
            That question keeps the page practical without treating a framework as a complete theory of human behavior.
          </p>
        </article>

        <article className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
          <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--primary)]">02 · The mechanism</div>
          <h3 className="mt-2 text-xl font-bold text-[var(--foreground)]">From concept to behavior</h3>
          <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">
            {lab?.coreModel ?? takeaways[0]}
          </p>
          {lab?.brainLens && (
            <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">
              <span className="font-semibold text-[var(--foreground)]">Neuroscience lens:</span> {lab.brainLens}
            </p>
          )}
        </article>
      </div>

      {lab?.story && (
        <article className="rounded-2xl border border-[var(--primary)]/25 bg-[var(--card)] p-6 sm:p-8">
          <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--primary)]">03 · Story laboratory</div>
          <h3 className="mt-2 text-xl sm:text-2xl font-extrabold text-[var(--foreground)]">{lab.story.title}</h3>
          <p className="mt-3 max-w-4xl text-sm leading-8 text-[var(--muted-foreground)]">{lab.story.text}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              ["Notice", "What was salient before the behavior happened?"],
              ["Interpret", "What prediction, belief, or social meaning could explain the response?"],
              ["Update", "What new feedback should change the next decision?"],
            ].map(([title, body]) => (
              <div key={title} className="rounded-xl border border-[var(--border)] bg-[var(--muted)]/45 p-4">
                <div className="text-xs font-bold text-[var(--primary)]">{title}</div>
                <p className="mt-1.5 text-xs leading-5 text-[var(--muted-foreground)]">{body}</p>
              </div>
            ))}
          </div>
        </article>
      )}

      <div>
        <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--primary)]">04 · Translation layer</div>
        <h3 className="mt-2 text-xl font-bold text-[var(--foreground)]">What this looks like outside the book</h3>
        <div className="mt-5 grid gap-4 lg:grid-cols-3">
          {(lab?.examples ?? []).map((example, index) => (
            <article key={example} className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5">
              <div className="font-mono text-[10px] font-bold text-[var(--primary)]">SCENARIO 0{index + 1}</div>
              <p className="mt-3 text-sm leading-7 text-[var(--foreground)]">{example}</p>
              <div className="mt-4 rounded-xl bg-[var(--muted)]/55 p-3">
                <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--primary)]">Question to ask</div>
                <p className="mt-1.5 text-xs leading-5 text-[var(--muted-foreground)]">
                  What would change if the environment, reference point, incentive, or social context changed?
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
        <article className="rounded-2xl border border-[var(--border)] bg-[var(--muted)]/40 p-6">
          <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--primary)]">05 · Failure modes</div>
          <h3 className="mt-2 text-xl font-bold text-[var(--foreground)]">Where readers commonly overapply the model</h3>
          <ul className="mt-4 space-y-3">
            {(lab?.watchFor ?? []).map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-6 text-[var(--muted-foreground)]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs leading-6 text-[var(--muted-foreground)]">
            A behavioral framework becomes dangerous when it turns every ambiguous event into proof of itself.
            Use the model to generate hypotheses, then check those hypotheses against context and evidence.
          </p>
        </article>

        <article className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
          <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--primary)]">06 · Action protocol</div>
          <h3 className="mt-2 text-xl font-bold text-[var(--foreground)]">Convert the idea into behavior</h3>
          <ol className="mt-4 space-y-3">
            {protocols.map((step, index) => (
              <li key={step} className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--muted)]/45 p-3.5">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[var(--primary)] text-[10px] font-bold text-[var(--primary-foreground)]">{index + 1}</span>
                <span className="text-sm leading-6 text-[var(--foreground)]">{step}</span>
              </li>
            ))}
          </ol>
        </article>
      </div>

      <article className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8">
        <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--primary)]">07 · Active recall</div>
        <h3 className="mt-2 text-xl font-extrabold text-[var(--foreground)]">Could you teach this without looking?</h3>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {takeaways.map((takeaway, index) => (
            <div key={takeaway} className="rounded-2xl border border-[var(--border)] bg-[var(--muted)]/45 p-5">
              <div className="font-mono text-[10px] font-bold text-[var(--primary)]">PROMPT 0{index + 1}</div>
              <p className="mt-2 text-sm font-semibold leading-6 text-[var(--foreground)]">{takeaway}</p>
              <p className="mt-3 text-xs leading-5 text-[var(--muted-foreground)]">
                Explain it in your own words, then give one example that is not used anywhere on this page.
              </p>
            </div>
          ))}
        </div>
      </article>

      <div className="rounded-2xl bg-[var(--muted)]/35 p-5 text-xs leading-6 text-[var(--muted-foreground)]">
        <strong className="text-[var(--foreground)]">Reader note:</strong> this is an educational synthesis. A book can offer a useful framework without every claim being equally established by current research.
        Compare memorable claims with primary research when the decision matters.
      </div>
    </section>
  );
}
