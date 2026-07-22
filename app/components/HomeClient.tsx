"use client";

import React, { useState } from "react";
import Hero from "./Hero";
import CategoriesSection from "./CategoriesSection";
import QuestionsExplorer from "./QuestionsExplorer";
import BehaviorDiagnostic from "./BehaviorDiagnostic";
import ArtifactViewer, { ArtifactData } from "./ArtifactViewer";

export default function HomeClient() {
  const [activeArtifact, setActiveArtifact] = useState<ArtifactData | null>(null);

  return (
    <>
      {/* Section 1: Hero */}
      <Hero />

      {/* Section 2: Knowledge Pillars */}
      <CategoriesSection />

      {/* Section 3: Questions & Insights */}
      <QuestionsExplorer onOpenArtifact={(art) => setActiveArtifact(art)} />

      {/* Section 4: Mind Diagnostic */}
      <BehaviorDiagnostic onOpenArtifact={(art) => setActiveArtifact(art)} />

      {/* Claude-style Artifact Drawer */}
      <ArtifactViewer
        artifact={activeArtifact}
        onClose={() => setActiveArtifact(null)}
      />
    </>
  );
}
