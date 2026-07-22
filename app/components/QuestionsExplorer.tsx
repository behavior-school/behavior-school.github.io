"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, Search, Lightbulb, Zap, ArrowRight, FileCode } from "lucide-react";
import { ArtifactData } from "./ArtifactViewer";

interface QuestionsExplorerProps {
  onOpenArtifact: (artifact: ArtifactData) => void;
}

export default function QuestionsExplorer({ onOpenArtifact }: QuestionsExplorerProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const questionsData = [
    {
      id: "q1",
      question: "Why do we procrastinate?",
      category: "Psychology & Emotion",
      shortAnswer: "Procrastination is an emotional regulation problem, not a time-management flaw.",
      breakdown: "When faced with a task that triggers anxiety or self-doubt, the brain's limbic system perceives it as a threat and activates avoidance. Short-term emotional relief overrides long-term goals.",
      actionStep: "Lower activation friction: Commit to working for just 2 minutes without judging the output.",
      artifact: {
        title: "Procrastination Neurobiology & Emotional Regulation Protocol",
        type: "PROTOCOL" as const,
        filename: "procrastination-limbic-hijack.md",
        category: "Psychology & Neurobiology",
        content: `# Procrastination: Limbic System Hijacking

Procrastination is often misunderstood as laziness or poor time management. Neurologically, it is an emotional regulation failure caused by a conflict between the **Limbic System** (primitive emotional brain) and the **Prefrontal Cortex** (rational planning center).

## Key Neuro-Mechanisms:
1. **Perceived Threat**: When a task feels ambiguous or overwhelming, the amygdala signals threat.
2. **Immediate Relief Loop**: Avoiding the task delivers an instant drop in cortisol, reinforcing avoidance behavior via dopamine.
3. **Hyperbolic Discounting**: The brain over-weights immediate relief over future rewards.

## Action Protocol:
- **2-Minute Micro-Commitment**: Commit to starting the task for exactly 120 seconds.
- **Friction Decoupling**: Separate task initiation from outcome evaluation.`,
        actionProtocol: [
          "Commit to 120 seconds of task initiation without evaluating output quality.",
          "Write down the single next physical action (e.g. 'Open document').",
          "Remove immediate environmental escape cues (hide phone in drawer)."
        ],
        youtubeVideo: "Why Smart People Still Procrastinate"
      }
    },
    {
      id: "q2",
      question: "Why do we lose focus so easily?",
      category: "Neuroscience",
      shortAnswer: "Your brain is hardwired to seek novelty and conserve energy in high-dopamine environments.",
      breakdown: "Digital environments flood the prefrontal cortex with rapid dopamine hits. When forced to engage in low-stimulus work, your brain experiences artificial boredom and searches for distraction.",
      actionStep: "Environment design: Remove phone from sight and work in structured 25-minute Deep Work blocks.",
      artifact: {
        title: "Dopamine Receptor Desensitization & Deep Work Protocol",
        type: "NEUROSCIENCE" as const,
        filename: "dopamine-focus-architecture.md",
        category: "Neuroscience",
        content: `# Focus & Dopamine Receptor Dynamics

Modern digital environments create an artificial state of chronic low-grade distraction by over-stimulating tonic dopamine levels.

## Biological Factors:
1. **Tonic vs Phasic Dopamine**: High baseline stimulation makes low-stimulation deep work feel excruciating.
2. **Attentional Residuals**: Switching tasks leaves cognitive residue in working memory for up to 20 minutes.

## Recovery Protocol:
- **Environment Containment**: Physical separation from notification sources.
- **Single-Tasking Anchor**: Set a physical timer for 25-minute uninterrupted blocks.`,
        actionProtocol: [
          "Place phone out of sight before initiating deep work blocks.",
          "Perform 3 minutes of deliberate low-stimulus silence before starting.",
          "Work in 25-minute uninterrupted Pomodoro cycles."
        ],
        youtubeVideo: "How Your Brain Creates Habits"
      }
    },
    {
      id: "q3",
      question: "Why do we overthink everything?",
      category: "Cognitive Biases",
      shortAnswer: "Overthinking is your brain's attempt to gain certainty in an uncertain world.",
      breakdown: "The Default Mode Network (DMN) stays hyperactive when you lack concrete action steps. Rumination creates a false sense of productivity.",
      actionStep: "Externalize working memory: Write down thoughts on paper to clear cognitive load.",
      artifact: {
        title: "Default Mode Network & Rumination Clearance",
        type: "RESEARCH" as const,
        filename: "dmn-overthinking-dump.md",
        category: "Cognitive Science",
        content: `# Rumination & The Default Mode Network (DMN)

Overthinking occurs when the Default Mode Network stays active instead of transitioning to the Executive Control Network.

## Neuro-Cures:
- **Written Brain Dump**: Externalizing thoughts reduces working memory load in the prefrontal cortex.
- **Second-Order Analysis**: Ask 'And then what happens?' to break recursive worry loops.`,
        actionProtocol: [
          "Set a 5-minute timer and dump all thoughts onto physical paper.",
          "Categorize items into 'Controllable' vs 'Uncontrollable'.",
          "Formulate 1 single physical step for each controllable item."
        ],
        youtubeVideo: "Stop Overthinking Everything"
      }
    },
    {
      id: "q4",
      question: "Why are bad habits so difficult to break?",
      category: "Habits & Behavior",
      shortAnswer: "Habits are automated neural pathways carved into the basal ganglia.",
      breakdown: "Your brain cannot simply delete habit loops (Cue → Craving → Response → Reward). Trying to suppress bad habits via pure willpower defaults back to basal ganglia patterns under stress.",
      actionStep: "Keep the Cue and Reward, but substitute the Response with a healthier action.",
      artifact: {
        title: "Basal Ganglia Habit Loop Re-engineering Protocol",
        type: "PROTOCOL" as const,
        filename: "basal-ganglia-habit-loop.md",
        category: "Behavioral Science",
        content: `# Habit Loop Modification Mechanics

Habits are encoded into the basal ganglia as automatic chunked behaviors. Suppressing habit loops requires high prefrontal energy which fails during fatigue.

## Golden Rule of Habit Change:
Maintain the existing **Cue** and **Reward**, but swap out the middle **Response**.`,
        actionProtocol: [
          "Identify the exact trigger cue (time, location, emotional state).",
          "Identify the underlying reward (stress relief, social connection, novelty).",
          "Design a substitute action that fulfills the same reward."
        ],
        youtubeVideo: "Why Motivation Always Fails"
      }
    }
  ];

  const filteredQuestions = questionsData.filter(
    (q) =>
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.shortAnswer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="questions" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Interactive Inquiry</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Questions We <span className="gradient-text">Deconstruct</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Real questions about human behavior answered with research clarity. Click any question to open its full Claude Artifact breakdown.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto mb-10">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            placeholder="Search questions (e.g. procrastinate, focus, habits)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 bg-slate-900/90 border border-slate-800 rounded-2xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm shadow-xl transition-all"
          />
        </div>

        {/* Questions List */}
        <div className="space-y-4">
          {filteredQuestions.map((q, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div
                key={q.id}
                className={`bg-slate-900/70 rounded-2xl border transition-all ${
                  isExpanded
                    ? "border-indigo-500/40 shadow-xl"
                    : "border-slate-800/80 hover:border-slate-700"
                }`}
              >
                <div
                  onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                  className="p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 text-xs font-semibold shrink-0">
                      Q{idx + 1}
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                        {q.question}
                      </h3>
                      <span className="inline-block mt-1 text-[11px] font-semibold text-slate-400">
                        Category: <span className="text-indigo-400">{q.category}</span>
                      </span>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${
                      isExpanded ? "rotate-180 text-indigo-400" : ""
                    }`}
                  />
                </div>

                {isExpanded && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-2 border-t border-slate-800/60">
                    <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-500/20 mb-4 flex items-start gap-3">
                      <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-300 mb-1">
                          Core Insight
                        </h4>
                        <p className="text-xs sm:text-sm font-medium text-slate-200">
                          {q.shortAnswer}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                      {q.breakdown}
                    </p>

                    <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 mb-4 flex items-start gap-3">
                      <Zap className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
                          Actionable Takeaway
                        </h4>
                        <p className="text-xs sm:text-sm text-emerald-200/90 font-medium">
                          {q.actionStep}
                        </p>
                      </div>
                    </div>

                    {/* Open Claude Artifact Trigger Button */}
                    <div className="flex items-center justify-between pt-2">
                      <button
                        onClick={() => onOpenArtifact(q.artifact)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-indigo-300 bg-indigo-500/10 border border-indigo-500/30 hover:bg-indigo-500/20 hover:text-white transition-all"
                      >
                        <FileCode className="w-4 h-4 text-indigo-400" />
                        <span>View Claude Artifact Breakdown ({q.artifact.filename})</span>
                      </button>

                      <a
                        href="https://www.youtube.com/@behavior-school"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-indigo-400 transition-colors"
                      >
                        <span>Watch on YouTube</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
