import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Behavior School",
  description: "Terms governing use of Behavior School's educational website, articles, quizzes, and interactive tools.",
  alternates: { canonical: "https://behavior-school.github.io/terms" },
  openGraph: {
    title: "Terms of Service | Behavior School",
    description: "Terms governing use of Behavior School's educational website, articles, quizzes, and interactive tools.",
    url: "https://behavior-school.github.io/terms",
    siteName: "Behavior School",
    images: ["https://behavior-school.github.io/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Behavior School",
    description: "Terms governing use of Behavior School's educational website.",
    images: ["https://behavior-school.github.io/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Behavior School", "item": "https://behavior-school.github.io/" },
      { "@type": "ListItem", "position": 2, "name": "Terms of Service", "item": "https://behavior-school.github.io/terms" }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <main className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[var(--card)] p-8 sm:p-12 rounded-3xl border border-[var(--border)] shadow-2xl space-y-8 text-[var(--muted-foreground)] text-sm leading-relaxed">
        <div>
          <p className="text-xs uppercase tracking-widest font-bold text-[var(--primary)] mb-3">Behavior School</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight">Terms of Service</h1>
          <p className="text-xs text-[var(--muted-foreground)] mt-3">Last updated: September 20, 2026</p>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[var(--foreground)]">Educational purpose</h2>
          <p>
            Behavior School publishes educational articles, videos, quizzes, summaries,
            and interactive tools about psychology, neuroscience, habits, learning, and human
            behavior. The material is general educational information and is not professional
            medical, psychological, legal, or financial advice.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[var(--foreground)]">Acceptable use</h2>
          <p>
            You agree not to disrupt the website, attempt to bypass security controls,
            introduce malicious code, abuse interactive services, or use the site for unlawful
            activity.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[var(--foreground)]">Intellectual property</h2>
          <p>
            Unless otherwise stated, original Behavior School text, website code, visual
            assets, and educational materials are protected by applicable intellectual-property
            rights. Third-party names, trademarks, research, and linked resources belong to
            their respective owners.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[var(--foreground)]">External services</h2>
          <p>
            The site links to third-party platforms such as YouTube, Notion, and GitHub.
            Their availability and policies are controlled by those providers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[var(--foreground)]">Changes</h2>
          <p>
            We may update the website and these terms as new content and features are added.
            The current version is the version published on this page.
          </p>
        </section>
      </div>
    </main>
    </>
  );
}
