import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Editorial Policy | Behavior School",
  description: "How Behavior School researches, writes, reviews, corrects, and updates educational content about psychology and neuroscience.",
  alternates: { canonical: "https://behavior-school.github.io/editorial-policy" },
  robots: { index: true, follow: true },
};

export default function EditorialPolicyPage() {
  return (
    <main className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <article className="bg-[var(--card)] p-8 sm:p-12 rounded-3xl border border-[var(--border)] shadow-2xl space-y-9 text-sm leading-relaxed text-[var(--muted-foreground)]">
        <div>
          <p className="text-xs uppercase tracking-widest font-bold text-[var(--primary)] mb-3">Transparency</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight">Editorial Policy</h1>
          <p className="mt-4 max-w-2xl">
            Behavior School publishes educational material designed to make research on
            human behavior understandable without pretending that a short article captures
            every nuance of the literature.
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[var(--foreground)]">Originality</h2>
          <p>
            Articles are written for Behavior School and are intended to add explanation,
            examples, behavioral protocols, comparisons, or practical context. We do not
            publish scraped articles or republish third-party pages as our own.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[var(--foreground)]">Research approach</h2>
          <p>
            When a topic depends on scientific evidence, we prioritize primary research,
            peer-reviewed literature, established academic references, and high-quality
            institutional resources. We distinguish broad research findings from simplified
            teaching models and avoid presenting one study as a universal law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[var(--foreground)]">Psychology and neuroscience topics</h2>
          <p>
            Human behavior has multiple causes. Articles therefore avoid treating a single
            neurotransmitter, brain region, or cognitive bias as a complete explanation for
            a person's behavior. Educational examples are simplified and should not be used
            as individual diagnoses.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[var(--foreground)]">Corrections and updates</h2>
          <p>
            Content may be updated when research changes, an explanation can be made clearer,
            or a factual error is identified. Readers can report issues through our{" "}
            <Link href="/contact" className="text-[var(--primary)] hover:underline">Contact page</Link>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[var(--foreground)]">Author and ownership</h2>
          <p>
            Behavior School is an educational media project maintained by its publisher and
            contributors. Learn more on the <Link href="/about" className="text-[var(--primary)] hover:underline">About page</Link>.
          </p>
        </section>
      </article>
    </main>
  );
}
