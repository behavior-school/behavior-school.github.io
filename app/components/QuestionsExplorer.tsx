"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, Search, Lightbulb, Zap, ArrowRight } from "lucide-react";

export default function QuestionsExplorer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const questionsData = [
    {
      question: "Why do we procrastinate?",
      category: "Psychology & Emotion",
      shortAnswer: "Procrastination is not a time-management flaw—it is an emotional regulation problem.",
      breakdown: "When faced with a task that triggers anxiety, self-doubt, or boredom, your brain's amygdala perceives it as a threat and activates an avoidance response. The short-term reward of escaping negative emotions overrides your long-term goals.",
      actionStep: "Lower activation friction: Commit to working for just 2 minutes without judging the output."
    },
    {
      question: "Why do we lose focus so easily?",
      category: "Neuroscience",
      shortAnswer: "Your brain is hardwired to seek novelty and conserve energy in dopamine-rich environments.",
      breakdown: "Modern digital environments flood your prefrontal cortex with rapid dopamine hits. When forced to engage in low-stimulus, high-effort work, your brain experiences artificial boredom and actively searches for distractions.",
      actionStep: "Engage in environment design: Hide phone out of sight and work in structured 25-minute Deep Work blocks."
    },
    {
      question: "Why do we overthink everything?",
      category: "Cognitive Biases",
      shortAnswer: "Overthinking is your brain's attempt to gain certainty in an inherently uncertain world.",
      breakdown: "The Default Mode Network (DMN) in the brain stays hyperactive when you lack concrete action steps. Rumination creates a false sense of productivity, making you feel like you are solving a problem when you are merely replaying scenarios.",
      actionStep: "Practice brain dumping: Write down thoughts on paper to externalize working memory."
    },
    {
      question: "Why are bad habits so difficult to break?",
      category: "Habits & Behavior",
      shortAnswer: "Habits are neural pathways carved into the basal ganglia through repeated reward loops.",
      breakdown: "Your brain cannot simply 'delete' habit loops (Cue → Craving → Response → Reward). Trying to suppress a bad habit via pure willpower fails because stress defaults your brain back to automated basal ganglia patterns.",
      actionStep: "Keep the Cue and Reward, but substitute the Response with a healthier action."
    },
    {
      question: "Why do we chase instant gratification?",
      category: "Neuroscience",
      shortAnswer: "Our evolutionary biology prioritizes immediate survival rewards over delayed future gains.",
      breakdown: "For thousands of years, immediate calorie intake and safety were critical for survival. The limbic system reacts instantly to present rewards, while the prefrontal cortex struggles to calculate future value.",
      actionStep: "Bundle delayed rewards: Pair difficult habits with immediate small pleasures."
    },
    {
      question: "Why do we fear rejection and judgment?",
      category: "Social Psychology",
      shortAnswer: "In ancestral hunter-gatherer tribes, exclusion from the group meant physical death.",
      breakdown: "Social isolation triggers the pain matrix (anterior cingulate cortex) in the human brain. Even though modern rejection poses zero physical threat, your primitive neurobiology interprets social disapproval as life-threatening.",
      actionStep: "Reframe social risk: Expose yourself gradually to micro-discomforts to desensitize social anxiety."
    },
    {
      question: "Why do emotions often overpower logic?",
      category: "Neurobiology",
      shortAnswer: "Emotional brain structures (Amygdala) process signals faster than logical structures (Prefrontal Cortex).",
      breakdown: "Sensory data reaches the amygdala milliseconds before it reaches the prefrontal cortex. When high emotion is triggered, the amygdala hijacks the decision-making loop before high-level reasoning can intervene.",
      actionStep: "Insert a physical delay: Take 3 slow breaths to give your prefrontal cortex time to come online."
    },
    {
      question: "How do successful people stay disciplined?",
      category: "Behavior Science",
      shortAnswer: "Disciplined individuals rely on automated systems and environment design, not heroic willpower.",
      breakdown: "Willpower is a perishable resource that depletes under decision fatigue. Highly disciplined people structure their environment so that the desirable behavior requires the least amount of effort.",
      actionStep: "Remove decision friction from your morning routine so key tasks happen on autopilot."
    },
    {
      question: "How can anyone learn faster?",
      category: "Learning & Memory",
      shortAnswer: "Active recall and spaced repetition trigger synaptic plasticity much more than passive reading.",
      breakdown: "Passive review (re-reading, highlighting) creates an illusion of competence. True learning occurs during the struggle of retrieval, which forces the hippocampus to consolidate neural connections.",
      actionStep: "Test yourself constantly: Explain concepts out loud without looking at notes (Feynman Technique)."
    },
    {
      question: "What actually changes human behavior?",
      category: "Behavioral Science",
      shortAnswer: "Behavior changes when identity shifts, friction changes, and social feedback loops align.",
      breakdown: "Trying to change behavior without changing identity creates internal friction. When you shift your self-concept ('I am a runner' vs 'I am trying to run'), behavior naturally aligns with identity.",
      actionStep: "Cast small votes for your new identity every day through micro-actions."
    }
  ];

  const filteredQuestions = questionsData.filter(
    (q) =>
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.shortAnswer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="questions" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Interactive Inquiry</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Questions We <span className="gradient-text-emerald">Deconstruct</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Real questions about human behavior answered with research-backed clarity.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto mb-10">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            placeholder="Search questions (e.g. procrastinate, focus, learn faster, habits)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 bg-slate-900/90 border border-slate-800 rounded-2xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm shadow-xl transition-all"
          />
        </div>

        {/* Accordion Questions List */}
        <div className="space-y-4">
          {filteredQuestions.length === 0 ? (
            <div className="text-center py-12 glass-card rounded-2xl">
              <p className="text-slate-400 text-sm">No matching questions found. Try searching for "habits" or "focus".</p>
            </div>
          ) : (
            filteredQuestions.map((q, idx) => {
              const isExpanded = expandedIndex === idx;
              return (
                <div
                  key={idx}
                  className={`glass-card rounded-2xl border transition-all ${
                    isExpanded
                      ? "border-indigo-500/40 shadow-xl shadow-indigo-500/10"
                      : "border-slate-800/80 hover:border-slate-700"
                  }`}
                >
                  <button
                    onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
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
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-2 border-t border-slate-800/60 animate-in fade-in-50 duration-200">
                      {/* Short Answer Box */}
                      <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/20 mb-4 flex items-start gap-3">
                        <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-300 mb-1">
                            The Core Insight
                          </h4>
                          <p className="text-xs sm:text-sm font-medium text-slate-200">
                            {q.shortAnswer}
                          </p>
                        </div>
                      </div>

                      {/* Deep Breakdown */}
                      <div className="mb-4">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                          Psychology & Neuroscience Breakdown
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {q.breakdown}
                        </p>
                      </div>

                      {/* Action Step */}
                      <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/20 flex items-start gap-3">
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

                      <div className="mt-4 pt-3 flex justify-end">
                        <a
                          href="https://www.youtube.com/@behavior-school"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                        >
                          <span>Watch full breakdown on YouTube</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
