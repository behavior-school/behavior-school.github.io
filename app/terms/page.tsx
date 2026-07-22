import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Behavior School",
  description: "Terms of Service and conditions for using Behavior School web platform and educational content.",
  openGraph: {
    title: "Terms of Service | Behavior School",
    description: "Terms of Service and conditions for using Behavior School.",
    url: "https://behavior-school.github.io/terms",
    siteName: "Behavior School",
  },
};

export default function TermsPage() {
  const jsonLdTerms = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service",
    "url": "https://behavior-school.github.io/terms"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTerms) }}
      />
      <main className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/60 p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-2xl space-y-6 text-slate-300 text-sm leading-relaxed">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xs text-slate-400">Last updated: July 22, 2026</p>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Terms</h2>
            <p>
              By accessing the website at <strong>https://behavior-school.github.io</strong>, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Educational Use License</h2>
            <p>
              Permission is granted to temporarily view and download educational materials and interactive Claude Artifacts on Behavior School for personal, non-commercial transitory viewing only.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Medical & Psychological Disclaimer</h2>
            <p>
              The content provided on Behavior School (including videos, mental models, and diagnostic tools) is strictly for educational and informational purposes. It is not intended to be a substitute for professional psychological advice, diagnosis, or medical treatment.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Limitations</h2>
            <p>
              In no event shall Behavior School or its suppliers be liable for any damages arising out of the use or inability to use the materials on Behavior School's website.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
