import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoriesSection from "./components/CategoriesSection";
import QuestionsExplorer from "./components/QuestionsExplorer";
import BehaviorDiagnostic from "./components/BehaviorDiagnostic";
import MentalModelsLibrary from "./components/MentalModelsLibrary";
import SeriesShowcase from "./components/SeriesShowcase";
import PhilosophyMission from "./components/PhilosophyMission";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <CategoriesSection />
        <QuestionsExplorer />
        <BehaviorDiagnostic />
        <MentalModelsLibrary />
        <SeriesShowcase />
        <PhilosophyMission />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
