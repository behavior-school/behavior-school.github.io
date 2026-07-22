import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ServiceWorkerRegister from "./components/ServiceWorkerRegister";

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
  other: {
    "google-adsense-account": "ca-pub-1828915420581549",
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
        <meta name="google-adsense-account" content="ca-pub-1828915420581549" />

        {/* Google AdSense Script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549"
          crossOrigin="anonymous"
        />

        {/* JSON-LD Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--primary)] selection:text-[var(--primary-foreground)]">
        {/* Offline Service Worker Registration */}
        <ServiceWorkerRegister />

        {/* Shared Top Navigation Bar */}
        <Navbar />

        {/* Page Content */}
        <div className="flex-grow">
          {children}
        </div>

        {/* Shared Footer */}
        <Footer />
      </body>
    </html>
  );
}
