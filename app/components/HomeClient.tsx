"use client";

import React, { useState } from "react";
import Hero from "./Hero";
import CategoriesSection from "./CategoriesSection";
import VisualGraphs from "./VisualGraphs";
import BookSummaries from "./BookSummaries";
import QuestionsExplorer from "./QuestionsExplorer";
import BehaviorDiagnostic from "./BehaviorDiagnostic";
import ArtifactViewer, { ArtifactData } from "./ArtifactViewer";

export default function HomeClient() {
  const [activeArtifact, setActiveArtifact] = useState<ArtifactData | null>(null);

  return (
    <>
      {/* Section 1: Hero */}
      <Hero />

      {/* Section 2: Knowledge Pillars with Category Tabs */}
      <CategoriesSection onOpenArtifact={(art) => setActiveArtifact(art)} />

      {/* Section 3: Interactive Visual Neuroscience Graphs */}
      <VisualGraphs />

      {/* Section 4: Book Summaries & Frameworks */}
      <BookSummaries onOpenArtifact={(art) => setActiveArtifact(art)} />

      {/* Section 5: Questions & Insights Accordion */}
      <QuestionsExplorer onOpenArtifact={(art) => setActiveArtifact(art)} />

      {/* Section 6: Mind Diagnostic Interactive Widget */}
      <BehaviorDiagnostic onOpenArtifact={(art) => setActiveArtifact(art)} />

      {/* Claude-style Artifact Drawer */}
      <ArtifactViewer
        artifact={activeArtifact}
        onClose={() => setActiveArtifact(null)}
      />
    </>
  );
}
