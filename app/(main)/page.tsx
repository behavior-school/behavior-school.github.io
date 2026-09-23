import type { Metadata } from "next";
import HomeClient from "../components/HomeClient";

export const metadata: Metadata = {
  title: "Behavior School — Practical Psychology & Neuroscience for Real Life",
  description: "Understand how your mind works so you can build better habits, overcome procrastination, make wiser decisions, stay focused, and live more intentionally.",
  openGraph: {
    title: "Behavior School — Practical Psychology for Real Life",
    description: "Understand your mind. Control your behavior. Build better habits.",
    url: "https://behavior-school.github.io",
    siteName: "Behavior School",
    images: ["https://behavior-school.github.io/og-image.png"],
    type: "website",
  },
};

export default function MainPage() {
  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why do we procrastinate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Procrastination can involve emotion regulation, task aversiveness, delay discounting, and self-control; the balance varies with context."
        }
      },
      {
        "@type": "Question",
        "name": "Why do we lose focus so easily?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Frequent digital novelty can create competing cues and make sustained attention harder, while the effects depend on context and individual differences."
        }
      },
      {
        "@type": "Question",
        "name": "Why are bad habits so difficult to break?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Repeated cue-response patterns can become more automatic, and changing cues, friction, or alternative responses can help reshape behavior."
        }
      },
      {
        "@type": "Question",
        "name": "How can anyone learn faster?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Retrieval practice and spaced practice often improve later recall more than passive review, with outcomes depending on task design and context."
        }
      }
    ]
  };

  return (
    <>
      {/* Page JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <HomeClient />
    </>
  );
}
