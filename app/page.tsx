"use client";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoriesSection from "./components/CategoriesSection";
import QuestionsExplorer from "./components/QuestionsExplorer";
import BehaviorDiagnostic from "./components/BehaviorDiagnostic";
import MentalModelsLibrary from "./components/MentalModelsLibrary";
import SeriesShowcase from "./components/SeriesShowcase";
import PhilosophyMission from "./components/PhilosophyMission";
import Footer from "./components/Footer";
import ArtifactViewer, { ArtifactData } from "./components/ArtifactViewer";

export default function Home() {
  const [activeArtifact, setActiveArtifact] = useState<ArtifactData | null>(null);

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <CategoriesSection />
        <QuestionsExplorer onOpenArtifact={(art) => setActiveArtifact(art)} />
        <BehaviorDiagnostic onOpenArtifact={(art) => setActiveArtifact(art)} />
        <MentalModelsLibrary onOpenArtifact={(art) => setActiveArtifact(art)} />
        <SeriesShowcase />
        <PhilosophyMission />
      </main>

      {/* Footer */}
      <Footer />

      {/* Claude-style Artifact Viewer Drawer */}
      <ArtifactViewer
        artifact={activeArtifact}
        onClose={() => setActiveArtifact(null)}
      />
    </div>
  );
}
