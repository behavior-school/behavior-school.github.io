import type { Metadata, Viewport } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ServiceWorkerRegister from "./components/ServiceWorkerRegister";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#2b2a28",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://behavior-school.github.io"),
  title: {
    default: "Behavior School — Understand Your Mind, Change Your Behavior",
    template: "%s | Behavior School",
  },
  description:
    "Behavior School is a visual learning library for psychology, behavioral science, habits, attention, learning, and better decision-making.",
  keywords: [
    "Behavior School",
    "Practical Psychology",
    "Behavioral Science",
    "Human Behavior",
    "Habits",
    "Learning",
    "Attention",
    "Memory",
    "Cognitive Biases",
    "Decision Making",
    "Self Improvement",
    "Mental Models",
  ],
  authors: [{ name: "Behavior School", url: "https://www.youtube.com/@behavior-school" }],
  creator: "Behavior School",
  publisher: "Behavior School",
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
    title: "Behavior School — Understand Your Mind, Change Your Behavior",
    description:
      "Visual guides, models, tools, and practice for psychology, habits, learning, attention, and human behavior.",
    url: "https://behavior-school.github.io",
    siteName: "Behavior School",
    images: ["https://behavior-school.github.io/og-image.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Behavior School — Understand Your Mind, Change Your Behavior",
    description:
      "Visual guides, models, tools, and practice for psychology, habits, learning, attention, and human behavior.",
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
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Behavior School",
    "url": "https://behavior-school.github.io",
    "logo": "https://behavior-school.github.io/logo.svg",
    "image": "https://behavior-school.github.io/og-image.png",
    "description":
      "Behavior School is an educational media brand and web platform dedicated to helping people understand practical psychology, neuroscience, and human behavior.",
    "sameAs": [
      "https://www.youtube.com/@behavior-school",
      "https://app.notion.com/p/Behavior-School-373cd0ed0c25801e9a23c4ba60f032fb",
    ],
  };

  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Behavior School",
    "url": "https://behavior-school.github.io",
    "description":
      "Visual guides, behavioral models, experiments, and practical psychology for real life.",
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              'try{const s=localStorage.getItem("behavior-school-theme");const d=s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d)}catch(e){document.documentElement.classList.add("dark")}',
          }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="google-adsense-account" content="ca-pub-1828915420581549" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)] font-sans selection:bg-[var(--foreground)]/15">
        <ServiceWorkerRegister />
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
