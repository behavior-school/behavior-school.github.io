import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Behavior School",
  description: "Learn about Behavior School's mission, content philosophy, and practical psychology curriculum.",
  alternates: { canonical: "https://behavior-school.github.io/about" },
  openGraph: {
    title: "About Us | Behavior School",
    description: "Learn about Behavior School's mission, content philosophy, and practical psychology curriculum.",
    url: "https://behavior-school.github.io/about",
    siteName: "Behavior School",
    images: ["https://behavior-school.github.io/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Behavior School",
    description: "Learn about Behavior School's mission, content philosophy, and practical psychology curriculum.",
    images: ["https://behavior-school.github.io/og-image.png"],
  },
};

export default function AboutPage() {
  const jsonLdAbout = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Behavior School",
    "url": "https://behavior-school.github.io/about",
    "description": "Learn about Behavior School's mission and practical psychology curriculum.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Behavior School", "item": "https://behavior-school.github.io/" },
        { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://behavior-school.github.io/about" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdAbout) }}
      />
      <main className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[var(--card)] p-8 sm:p-12 rounded-3xl border border-[var(--border)] shadow-2xl space-y-6 text-[var(--muted-foreground)] text-sm leading-relaxed">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight">
            About Behavior School
          </h1>

          <p className="text-base text-[var(--primary)] font-semibold">
            Practical Psychology & Neuroscience for Real Life.
          </p>

          <p>
            Behavior School is an educational media brand and interactive web platform dedicated to helping people understand how their minds work so they can make better decisions, build better habits, and live more intentionally.
          </p>

          <section className="space-y-3 pt-4 border-t border-[var(--border)]">
            <h2 className="text-lg font-bold text-[var(--foreground)]">Our Mission</h2>
            <p>
              Help millions of people understand their own minds by bridging the gap between peer-reviewed academic research and everyday human behavior.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[var(--foreground)]">Our Content Philosophy</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Plain language:</strong> explain the mechanism before introducing technical vocabulary.</li>
              <li><strong>Visual thinking:</strong> use sketches, models, diagrams, and examples when they clarify an idea.</li>
              <li><strong>Actionable learning:</strong> connect knowledge to an observable experiment or behavior.</li>
              <li><strong>Evidence with caveats:</strong> distinguish established findings from simplified models, hypotheses, and popular claims.</li>
              <li><strong>Context matters:</strong> behavioral frameworks are tools for thinking, not universal diagnoses of people.</li>
            </ul>
          </section>

          <section className="space-y-3 pt-4 border-t border-[var(--border)]">
            <h2 className="text-lg font-bold text-[var(--foreground)]">How to Use the Library</h2>
            <p>
              Start with one question you actually care about. Read the guide for the mechanism, not just the headline. Then use the visual or interactive element to reconstruct the idea from memory. Finally, test one small change in a real environment and observe what happens.
            </p>
            <p>
              For books, the same pattern is applied at a larger scale: central thesis, mental models, context, examples, failure modes, action protocol, and active-recall prompts. The intent is to help readers understand a framework without treating every memorable line as settled science.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-[var(--border)]">
            <h2 className="text-lg font-bold text-[var(--foreground)]">Meet the Creator</h2>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="h-24 w-24 shrink-0 overflow-hidden rounded-full border border-[var(--border)] bg-[var(--muted)] p-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://avatars.githubusercontent.com/u/66713844" alt="Shaswat Raj" width="512" height="512" loading="lazy" className="h-full w-full rounded-full object-cover" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">Shaswat Raj</h3>
                <p className="mt-1 text-xs font-mono text-[var(--muted-foreground)]">Software Engineer & Tech Educator</p>
                <p className="mt-3 text-sm leading-7">
                  The project focuses on turning research-heavy behavioral concepts into clear explanations, visual models, and small experiments that readers can inspect and challenge.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
