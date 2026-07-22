"use client";

import React, { useState } from "react";
import Hero from "./Hero";
import CategoriesSection from "./CategoriesSection";
import QuestionsExplorer from "./QuestionsExplorer";
import BehaviorDiagnostic from "./BehaviorDiagnostic";
import MentalModelsLibrary from "./MentalModelsLibrary";
import SeriesShowcase from "./SeriesShowcase";
import PhilosophyMission from "./PhilosophyMission";
import ArtifactViewer, { ArtifactData } from "./ArtifactViewer";

export default function HomeClient() {
  const [activeArtifact, setActiveArtifact] = useState<ArtifactData | null>(null);

  return (
    <>
      <Hero />
      <CategoriesSection />
      <QuestionsExplorer onOpenArtifact={(art) => setActiveArtifact(art)} />
      <BehaviorDiagnostic onOpenArtifact={(art) => setActiveArtifact(art)} />
      <MentalModelsLibrary onOpenArtifact={(art) => setActiveArtifact(art)} />
      <SeriesShowcase />
      <PhilosophyMission />

      {/* Claude-style Artifact Drawer */}
      <ArtifactViewer
        artifact={activeArtifact}
        onClose={() => setActiveArtifact(null)}
      />
    </>
  );
}
