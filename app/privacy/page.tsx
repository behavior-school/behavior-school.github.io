import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Behavior School",
  description: "How Behavior School handles analytics, cookies, advertising, contact information, and third-party services.",
  alternates: { canonical: "https://behavior-school.github.io/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[var(--card)] p-8 sm:p-12 rounded-3xl border border-[var(--border)] shadow-2xl space-y-8 text-[var(--muted-foreground)] text-sm leading-relaxed">
        <div>
          <p className="text-xs uppercase tracking-widest font-bold text-[var(--primary)] mb-3">Behavior School</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight">Privacy Policy</h1>
          <p className="text-xs text-[var(--muted-foreground)] mt-3">Last updated: September 20, 2026</p>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[var(--foreground)]">What this policy covers</h2>
          <p>
            This policy explains how Behavior School handles information when you visit
            behavior-school.github.io, use its articles, quizzes, tools, books, and video
            companion pages, or contact us.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[var(--foreground)]">Information collected</h2>
          <p>
            Standard web infrastructure can process information such as IP address, browser
            and device information, referring page, requested URL, and timestamps. If you
            contact us directly, we may receive information you choose to provide, such as
            your email address and message.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[var(--foreground)]">Analytics</h2>
          <p>
            Analytics services may use cookies or similar technologies to measure traffic,
            understand which pages are useful, and improve the site. Analytics information
            may be processed by the relevant provider under its own privacy documentation.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[var(--foreground)]">Google AdSense and advertising</h2>
          <p>
            Behavior School uses Google AdSense advertising technology. Google and its
            advertising partners may use cookies or similar technologies to serve and
            measure advertisements, including interest-based advertising where permitted.
          </p>
          <p>
            Visitors can manage Google advertising personalization through{" "}
            <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">
              Google Ads Settings
            </a>.
          </p>
          <p>
            Where applicable, advertising consent requirements depend on the visitor&apos;s
            location and the products being used. We do not describe any consent mechanism
            as active unless it is actually implemented on the site.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[var(--foreground)]">Third-party links</h2>
          <p>
            The site links to services such as YouTube, Notion, GitHub, and other external
            resources. Those services operate under their own policies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[var(--foreground)]">Educational and sensitive-topic notice</h2>
          <p>
            Behavior School publishes educational material about psychology and neuroscience.
            The site&apos;s articles and tools are not a substitute for diagnosis, treatment,
            crisis support, or professional medical or psychological advice.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[var(--foreground)]">Your choices</h2>
          <p>
            You can control many cookie behaviors through your browser. You may also contact
            us about personal information that you voluntarily submitted. Contact details are
            available on our <a href="/contact" className="text-[var(--primary)] hover:underline">Contact page</a>.
          </p>
        </section>

        <section className="space-y-3 pt-4 border-t border-[var(--border)]">
          <h2 className="text-lg font-bold text-[var(--foreground)]">Contact</h2>
          <p>
            Privacy questions can be sent to <a href="mailto:shaswatraj3@gmail.com" className="text-[var(--primary)] hover:underline">shaswatraj3@gmail.com</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
