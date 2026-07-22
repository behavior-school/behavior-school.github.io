import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "About Us | Behavior School",
  description: "Learn about Behavior School's mission, content philosophy, and practical psychology curriculum.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/60 p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-2xl space-y-6 text-slate-300 text-sm leading-relaxed">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Behavior School
          </h1>

          <p className="text-base text-indigo-300 font-semibold">
            Practical Psychology & Neuroscience for Real Life.
          </p>

          <p>
            Behavior School is an educational media brand and interactive web platform dedicated to helping people understand how their minds work so they can make better decisions, build better habits, and live more intentionally.
          </p>

          <section className="space-y-3 pt-4 border-t border-slate-800">
            <h2 className="text-lg font-bold text-white">Our Mission</h2>
            <p>
              Help millions of people understand their own minds by bridging the gap between peer-reviewed academic research and everyday human behavior.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">Our Content Philosophy</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>No Jargon</strong>: Complex ideas simplified into clear visual metaphors.</li>
              <li><strong>No Boring Lectures</strong>: Story-driven, highly visual, engaging lessons.</li>
              <li><strong>Actionable Focus</strong>: Knowledge must lead to physical behavioral change.</li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
