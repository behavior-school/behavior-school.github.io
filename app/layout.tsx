import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#090d16",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://behavior-school.github.io"),
  title: {
    default: "Behavior School — Practical Psychology & Neuroscience for Real Life",
    template: "%s | Behavior School",
  },
  description: "Understand how your mind works so you can build better habits, overcome procrastination, make wiser decisions, stay focused, and live more intentionally.",
  keywords: [
    "Behavior School",
    "Practical Psychology",
    "Neuroscience",
    "Human Behavior",
    "Habits",
    "Discipline",
    "Mental Models",
    "Cognitive Biases",
    "Behavioral Science",
    "Productivity",
    "Focus",
    "Active Recall",
    "Self Improvement"
  ],
  authors: [{ name: "Behavior School", url: "https://www.youtube.com/@behavior-school" }],
  creator: "Behavior School",
  publisher: "Behavior School",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://behavior-school.github.io",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Behavior School",
  },
  openGraph: {
    title: "Behavior School — Practical Psychology & Neuroscience",
    description: "Understand your mind. Control your behavior. Build better habits. Research-backed actionable psychology.",
    url: "https://behavior-school.github.io",
    siteName: "Behavior School",
    images: [
      {
        url: "https://behavior-school.github.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Behavior School — Practical Psychology for Real Life",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Behavior School — Practical Psychology for Real Life",
    description: "Understand how your mind works to build better habits and make wiser decisions.",
    images: ["https://behavior-school.github.io/og-image.png"],
    creator: "@behavior-school",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data
  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Behavior School",
    "url": "https://behavior-school.github.io",
    "logo": "https://behavior-school.github.io/logo.svg",
    "image": "https://behavior-school.github.io/og-image.png",
    "description": "Behavior School is an educational media brand and web platform dedicated to helping people understand practical psychology, neuroscience, and human behavior.",
    "sameAs": [
      "https://www.youtube.com/@behavior-school",
      "https://app.notion.com/p/Behavior-School-373cd0ed0c25801e9a23c4ba60f032fb"
    ]
  };

  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Behavior School",
    "url": "https://behavior-school.github.io",
    "description": "Practical Psychology & Neuroscience for Real Life"
  };

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
        "@acceptedAnswer": {
          "@type": "Answer",
          "text": "Modern digital environments flood the prefrontal cortex with rapid dopamine hits, creating artificial boredom during low-stimulus, high-effort work."
        }
      },
      {
        "@type": "Question",
        "name": "Why are bad habits so difficult to break?",
        "@acceptedAnswer": {
          "@type": "Answer",
          "text": "Habits are automated neural pathways carved into the basal ganglia. To change a habit, keep the Cue and Reward, but substitute the Response."
        }
      },
      {
        "@type": "Question",
        "name": "How can anyone learn faster?",
        "@acceptedAnswer": {
          "@type": "Answer",
          "text": "Active recall and spaced repetition trigger synaptic plasticity much more effectively than passive reading or highlighting."
        }
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* JSON-LD Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#090d16] text-slate-100 selection:bg-indigo-500 selection:text-white">
        {children}

        {/* Service Worker Registration Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(
                    function(registration) {
                      console.log('ServiceWorker registration successful:', registration.scope);
                    },
                    function(err) {
                      console.log('ServiceWorker registration failed:', err);
                    }
                  );
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
