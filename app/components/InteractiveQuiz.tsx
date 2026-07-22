"use client";

import React, { useState } from "react";
import { HelpCircle, CheckCircle2, XCircle, RotateCcw, Award } from "lucide-react";
import { saveResult } from "../lib/storage";

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index 0-based
  explanation: string;
}

interface InteractiveQuizProps {
  quizId?: string;
  title: string;
  questions: Question[];
}

export default function InteractiveQuiz({ quizId = "quiz-default", title, questions }: InteractiveQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<boolean[]>(new Array(questions.length).fill(false));
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleSelectOption = (index: number) => {
    if (answered[currentQuestion]) return;

    setSelectedOption(index);
    const newAnswered = [...answered];
    newAnswered[currentQuestion] = true;
    setAnswered(newAnswered);

    if (index === questions[currentQuestion].correctAnswer) {
      setScore((prev) => {
        const newScore = prev + 1;
        if (currentQuestion === questions.length - 1) {
          saveResult({
            type: "quiz",
            id: quizId,
            title,
            score: newScore,
            maxScore: questions.length,
            timestamp: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
          });
        }
        return newScore;
      });
    } else if (currentQuestion === questions.length - 1) {
      saveResult({
        type: "quiz",
        id: quizId,
        title,
        score,
        maxScore: questions.length,
        timestamp: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
      });
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setAnswered(new Array(questions.length).fill(false));
    setQuizCompleted(false);
  };

  const q = questions[currentQuestion];

  return (
    <div className="bg-[var(--card)] p-6 sm:p-8 rounded-3xl border border-[var(--border)] space-y-6 my-8 shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-[var(--primary)]" />
          <h3 className="text-base font-bold text-[var(--foreground)]">{title}</h3>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[var(--muted)] text-[var(--primary)] border border-[var(--border)]">
          Question ({currentQuestion + 1}/{questions.length})
        </span>
      </div>

      {!quizCompleted ? (
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-[var(--foreground)] leading-relaxed">
            {q.question}
          </h4>

          <div className="space-y-2">
            {q.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === q.correctAnswer;
              const isAnswered = answered[currentQuestion];

              let btnStyle = "bg-[var(--muted)]/40 border-[var(--border)] text-[var(--muted-foreground)] hover:text-[var(--foreground)]";

              if (isAnswered) {
                if (isCorrect) {
                  btnStyle = "bg-[var(--muted)] border-[var(--primary)] text-[var(--primary)] font-bold";
                } else if (isSelected) {
                  btnStyle = "bg-[var(--muted)] border-[var(--destructive)] text-[var(--foreground)]";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  className={`w-full p-3.5 rounded-2xl border text-left text-xs transition-all flex items-center justify-between ${btnStyle}`}
                >
                  <span>{opt}</span>
                  {isAnswered && isCorrect && <CheckCircle2 className="w-4 h-4 text-[var(--primary)] shrink-0" />}
                  {isAnswered && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-[var(--muted-foreground)] shrink-0" />}
                </button>
              );
            })}
          </div>

          {answered[currentQuestion] && (
            <div className="p-4 rounded-2xl bg-[var(--muted)] border border-[var(--border)] space-y-3 animate-in fade-in">
              <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                <strong className="text-[var(--foreground)]">Explanation: </strong>
                {q.explanation}
              </p>
              <button
                onClick={handleNext}
                className="px-4 py-2 rounded-xl bg-[var(--primary)] text-[var(--primary-foreground)] text-xs font-bold hover:opacity-90 transition-opacity"
              >
                {currentQuestion < questions.length - 1 ? "Next Question →" : "See Final Score"}
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-6 space-y-4 animate-in fade-in">
          <Award className="w-12 h-12 text-[var(--primary)] mx-auto" />
          <h4 className="text-xl font-extrabold text-[var(--foreground)]">Quiz Completed!</h4>
          <p className="text-xs text-[var(--muted-foreground)]">
            You scored <strong className="text-[var(--primary)] font-mono text-base">{score} / {questions.length}</strong> on this behavioral check.
          </p>
          <p className="text-[11px] text-[var(--primary)] font-mono">
            ✓ Result saved to LocalStorage
          </p>
          <button
            onClick={handleReset}
            className="px-5 py-2.5 rounded-xl bg-[var(--muted)] border border-[var(--border)] text-xs font-bold text-[var(--foreground)] hover:border-[var(--primary)] transition-all inline-flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Retake Quiz</span>
          </button>
        </div>
      )}
    </div>
  );
}
