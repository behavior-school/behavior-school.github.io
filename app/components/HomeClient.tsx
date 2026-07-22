"use client";

import React from "react";
import Hero from "./Hero";
import CategoriesSection from "./CategoriesSection";
import VisualGraphs from "./VisualGraphs";
import ToolsSection from "./ToolsSection";
import BookSummaries from "./BookSummaries";
import QuestionsExplorer from "./QuestionsExplorer";
import BehaviorDiagnostic from "./BehaviorDiagnostic";

export default function HomeClient() {
  return (
    <>
      {/* Section 1: Hero */}
      <Hero />

      {/* Section 2: Knowledge Pillars with Category Tabs */}
      <CategoriesSection />

      {/* Section 3: Interactive Visual Neuroscience Graphs */}
      <VisualGraphs />

      {/* Section 4: Interactive Web Tools & Audits */}
      <ToolsSection />

      {/* Section 5: Book Summaries & Frameworks */}
      <BookSummaries />

      {/* Section 6: Questions & Insights Accordion */}
      <QuestionsExplorer />

      {/* Section 7: Mind Diagnostic Interactive Widget */}
      <BehaviorDiagnostic />
    </>
  );
}
