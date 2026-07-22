import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Behavior School",
  description: "Learn about Behavior School's mission, content philosophy, and practical psychology curriculum.",
  openGraph: {
    title: "About Us | Behavior School",
    description: "Learn about Behavior School's mission, content philosophy, and practical psychology curriculum.",
    url: "https://behavior-school.github.io/about",
    siteName: "Behavior School",
  },
};

export default function AboutPage() {
  const jsonLdAbout = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Behavior School",
    "url": "https://behavior-school.github.io/about",
    "description": "Learn about Behavior School's mission and practical psychology curriculum."
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
              <li><strong>No Jargon</strong>: Complex ideas simplified into clear visual metaphors.</li>
              <li><strong>No Boring Lectures</strong>: Story-driven, highly visual, engaging lessons.</li>
              <li><strong>Actionable Focus</strong>: Knowledge must lead to physical behavioral change.</li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
