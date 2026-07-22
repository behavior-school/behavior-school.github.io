import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Behavior School — Practical Psychology & Neuroscience for Real Life",
  description: "Behavior School helps you understand how your mind works so you can build better habits, make wiser decisions, stay focused, and live more intentionally.",
  keywords: [
    "Practical Psychology",
    "Neuroscience",
    "Human Behavior",
    "Habits",
    "Discipline",
    "Mental Models",
    "Cognitive Biases",
    "Behavioral Science",
    "Productivity",
    "Self Improvement",
    "Behavior School"
  ],
  authors: [{ name: "Behavior School" }],
  openGraph: {
    title: "Behavior School — Practical Psychology for Real Life",
    description: "Understand your mind. Control your behavior. Build better habits.",
    url: "https://behavior-school.github.io",
    siteName: "Behavior School",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#090d16] text-slate-100 selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
