import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Behavior School",
  description: "Get in touch with the Behavior School team for research submissions, video ideas, or business inquiries.",
  openGraph: {
    title: "Contact Us | Behavior School",
    description: "Get in touch with the Behavior School team.",
    url: "https://behavior-school.github.io/contact",
    siteName: "Behavior School",
  },
};

export default function ContactPage() {
  const jsonLdContact = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Behavior School",
    "url": "https://behavior-school.github.io/contact"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdContact) }}
      />
      <main className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/60 p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-2xl space-y-6 text-slate-300 text-sm leading-relaxed">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact Us
          </h1>

          <p>
            Have a question, scientific research submission, business inquiry, or video topic suggestion? We'd love to hear from you.
          </p>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Official Email
              </span>
              <a href="mailto:shaswatraj3@gmail.com" className="text-lg font-bold text-indigo-400 hover:underline">
                shaswatraj3@gmail.com
              </a>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                YouTube Channel
              </span>
              <a
                href="https://www.youtube.com/@behavior-school"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-red-400 hover:underline"
              >
                youtube.com/@behavior-school
              </a>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Notion Workspace
              </span>
              <a
                href="https://app.notion.com/p/Behavior-School-373cd0ed0c25801e9a23c4ba60f032fb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-indigo-400 hover:underline"
              >
                Behavior School Notion Hub
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
