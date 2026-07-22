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
          "text": "Procrastination is an emotional regulation problem, not a time-management flaw. When faced with anxiety or self-doubt, the brain's limbic system triggers avoidance."
        }
      },
      {
        "@type": "Question",
        "name": "Why do we lose focus so easily?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Modern digital environments flood the prefrontal cortex with rapid dopamine hits, creating artificial boredom during low-stimulus, high-effort work."
        }
      },
      {
        "@type": "Question",
        "name": "Why are bad habits so difficult to break?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Habits are automated neural pathways carved into the basal ganglia. To change a habit, keep the Cue and Reward, but substitute the Response."
        }
      },
      {
        "@type": "Question",
        "name": "How can anyone learn faster?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Active recall and spaced repetition trigger synaptic plasticity much more effectively than passive reading or highlighting."
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
