"use client";

import React from "react";
import Hero from "./Hero";
import CategoriesSection from "./CategoriesSection";
import VisualGraphs from "./VisualGraphs";
import ToolsSection from "./ToolsSection";
import QuizSection from "./QuizSection";
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

      {/* Section 4: Interactive Quizzes & Packages */}
      <QuizSection />

      {/* Section 5: Interactive Web Tools & Audits */}
      <ToolsSection />

      {/* Section 6: Book Summaries & Frameworks */}
      <BookSummaries />

      {/* Section 7: Questions & Insights Accordion */}
      <QuestionsExplorer />

      {/* Section 8: Mind Diagnostic Interactive Widget */}
      <BehaviorDiagnostic />
    </>
  );
}
