'use client';

import { useEffect, useMemo, useRef, useState } from "react";
import {
  Headphones,
  Pause,
  Play,
  RotateCcw,
  RotateCw,
  SlidersHorizontal,
  Square,
} from "lucide-react";

type AudiobookSection = {
  id: string;
  label: string;
  text: string;
};

type SpeechVoice = SpeechSynthesisVoice;

interface BookAudiobookBetaProps {
  title: string;
  sections: AudiobookSection[];
}

const SPEEDS = [0.8, 1, 1.15, 1.3, 1.5];

function normalizeText(value: string) {
  return value
    .replace(/[#*_>\\-]+/g, " ")
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

export default function BookAudiobookBeta({ title, sections }: BookAudiobookBetaProps) {
  const [supported, setSupported] = useState(true);
  const [voices, setVoices] = useState<SpeechVoice[]>([]);
  const [voiceIndex, setVoiceIndex] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [sectionIndex, setSectionIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const runIdRef = useRef(0);

  const preparedSections = useMemo(
    () =>
      sections
        .map((section) => ({
          ...section,
          text: normalizeText(section.text),
        }))
        .filter((section) => section.text.length > 0),
    [sections],
  );

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setSupported(false);
      return;
    }

    const synthesis = window.speechSynthesis;
    const loadVoices = () => setVoices(synthesis.getVoices());

    loadVoices();
    synthesis.addEventListener("voiceschanged", loadVoices);

    return () => {
      synthesis.cancel();
      synthesis.removeEventListener("voiceschanged", loadVoices);
    };
  }, []);

  useEffect(() => {
    setSectionIndex(0);
    setProgress(0);
    setPlaying(false);
    runIdRef.current += 1;

    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  }, [title, preparedSections.length]);

  useEffect(() => {
    if (voiceIndex >= voices.length) {
      setVoiceIndex(0);
    }
  }, [voiceIndex, voices.length]);

  const currentSection = preparedSections[sectionIndex];
  const selectedVoice = voices[voiceIndex];

  const stop = () => {
    runIdRef.current += 1;
    window.speechSynthesis.cancel();
    utteranceRef.current = null;
    setPlaying(false);
    setProgress(0);
  };

  const speakSection = (index: number, restart = true) => {
    if (!supported || !preparedSections[index]) return;

    const synthesis = window.speechSynthesis;
    const runId = runIdRef.current + 1;
    runIdRef.current = runId;

    if (restart) synthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(preparedSections[index].text);
    utterance.rate = speed;
    utterance.pitch = 1;
    utterance.volume = 1;

    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    utterance.onstart = () => {
      if (runIdRef.current !== runId) return;
      setPlaying(true);
    };

    utterance.onboundary = (event) => {
      if (runIdRef.current !== runId) return;
      const total = preparedSections[index].text.length;
      const charIndex = typeof event.charIndex === "number" ? event.charIndex : 0;
      setProgress(total > 0 ? Math.min(100, Math.round((charIndex / total) * 100)) : 0);
    };

    utterance.onend = () => {
      if (runIdRef.current !== runId) return;

      setProgress(100);

      if (index < preparedSections.length - 1) {
        const nextIndex = index + 1;
        setSectionIndex(nextIndex);
        window.setTimeout(() => speakSection(nextIndex), 80);
      } else {
        setPlaying(false);
        setSectionIndex(0);
        setProgress(0);
      }
    };

    utterance.onerror = () => {
      if (runIdRef.current !== runId) return;
      setPlaying(false);
    };

    utteranceRef.current = utterance;
    setSectionIndex(index);
    setProgress(0);
    synthesis.speak(utterance);
  };

  const togglePlay = () => {
    if (!supported || !currentSection) return;

    const synthesis = window.speechSynthesis;

    if (playing) {
      synthesis.pause();
      setPlaying(false);
      return;
    }

    if (synthesis.paused && utteranceRef.current) {
      synthesis.resume();
      setPlaying(true);
      return;
    }

    speakSection(sectionIndex);
  };

  const previousSection = () => {
    speakSection(Math.max(0, sectionIndex - 1));
  };

  const nextSection = () => {
    speakSection(Math.min(preparedSections.length - 1, sectionIndex + 1));
  };

  const replay = () => {
    speakSection(sectionIndex);
  };

  const step = preparedSections.length > 0 ? 100 / preparedSections.length : 0;
  const overallProgress = Math.min(100, sectionIndex * step + (progress / 100) * step);

  if (!preparedSections.length) return null;

  return (
    <section
      id="audiobook"
      className="scroll-mt-24 overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--muted)]/50"
      aria-labelledby="audiobook-title"
    >
      <div className="border-b border-[var(--border)] bg-[var(--card)]/80 p-5 sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--muted)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--primary)]">
                <Headphones className="h-3.5 w-3.5" />
                Audiobook beta
              </span>
              <span className="rounded-full border border-dashed border-[var(--border)] px-2.5 py-1 text-[10px] font-semibold text-[var(--muted-foreground)]">
                Browser voice · no download
              </span>
            </div>

            <h2 id="audiobook-title" className="mt-3 text-xl font-extrabold tracking-tight text-[var(--foreground)] sm:text-2xl">
              Listen to the Behavior School guide
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--muted-foreground)]">
              This beta reads the guide content aloud with your device&apos;s built-in speech engine. It is a
              listening layer for the Behavior School guide, not the publisher&apos;s commercial audiobook.
            </p>
          </div>

          <a
            href="https://github.com/behavior-school/behavior-school.github.io/issues"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 text-xs font-bold text-[var(--primary)] hover:opacity-75"
          >
            Report beta feedback →
          </a>
        </div>
      </div>

      <div className="space-y-5 p-5 sm:p-6">
        {!supported ? (
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5">
            <p className="text-sm font-bold text-[var(--foreground)]">Speech playback is unavailable in this browser.</p>
            <p className="mt-1 text-xs leading-5 text-[var(--muted-foreground)]">
              Open this book in a browser that supports the Web Speech API to test the audiobook beta.
            </p>
          </div>
        ) : (
          <>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4">
              <div className="flex items-center justify-between gap-4 text-xs">
                <div className="min-w-0">
                  <p className="font-bold text-[var(--foreground)]">{currentSection?.label}</p>
                  <p className="mt-1 truncate text-[var(--muted-foreground)]">
                    Part {sectionIndex + 1} of {preparedSections.length} · {Math.round(overallProgress)}% through guide
                  </p>
                </div>
                <span className="shrink-0 font-mono text-[10px] text-[var(--muted-foreground)]">
                  {Math.round(progress)}%
                </span>
              </div>

              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[var(--muted)]">
                <div
                  className="h-full rounded-full bg-[var(--foreground)] transition-[width] duration-200"
                  style={{ width: String(overallProgress) + "%" }}
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={previousSection}
                disabled={sectionIndex === 0}
                className="inline-flex h-10 items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--card)] px-3 text-xs font-bold text-[var(--foreground)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-35"
                aria-label="Previous section"
              >
                <RotateCcw className="h-4 w-4" />
                Prev
              </button>

              <button
                type="button"
                onClick={togglePlay}
                className="inline-flex h-11 min-w-28 items-center justify-center gap-2 rounded-xl bg-[var(--foreground)] px-5 text-xs font-bold text-[var(--background)] shadow-sm transition hover:-translate-y-0.5"
                aria-label={playing ? "Pause audiobook" : "Play audiobook"}
              >
                {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                {playing ? "Pause" : "Play guide"}
              </button>

              <button
                type="button"
                onClick={replay}
                className="inline-flex h-10 items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--card)] px-3 text-xs font-bold text-[var(--foreground)] transition hover:-translate-y-0.5"
                aria-label="Replay current section"
              >
                <RotateCcw className="h-4 w-4" />
                Replay
              </button>

              <button
                type="button"
                onClick={nextSection}
                disabled={sectionIndex === preparedSections.length - 1}
                className="inline-flex h-10 items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--card)] px-3 text-xs font-bold text-[var(--foreground)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-35"
                aria-label="Next section"
              >
                Next
                <RotateCw className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={stop}
                className="inline-flex h-10 items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--card)] px-3 text-xs font-bold text-[var(--foreground)] transition hover:-translate-y-0.5"
                aria-label="Stop audiobook"
              >
                <Square className="h-3.5 w-3.5 fill-current" />
                Stop
              </button>
            </div>

            <div className="grid gap-3 lg:grid-cols-[1fr_auto]">
              <label className="flex min-w-0 items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-3">
                <span className="inline-flex items-center gap-2 text-xs font-bold text-[var(--foreground)]">
                  <SlidersHorizontal className="h-4 w-4" />
                  Voice
                </span>
                <select
                  value={voiceIndex}
                  onChange={(event) => {
                    setVoiceIndex(Number(event.target.value));
                    if (playing) {
                      window.speechSynthesis.cancel();
                      setPlaying(false);
                    }
                  }}
                  className="min-w-0 flex-1 bg-transparent text-xs font-semibold text-[var(--foreground)] outline-none"
                  aria-label="Choose speech voice"
                >
                  {voices.length === 0 ? (
                    <option value={0}>Default device voice</option>
                  ) : (
                    voices.map((voice, index) => (
                      <option key={voice.name + "-" + voice.lang + "-" + index} value={index}>
                        {voice.name} · {voice.lang}
                      </option>
                    ))
                  )}
                </select>
              </label>

              <label className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-3">
                <span className="text-xs font-bold text-[var(--foreground)]">Speed</span>
                <select
                  value={speed}
                  onChange={(event) => {
                    const nextSpeed = Number(event.target.value);
                    setSpeed(nextSpeed);
                    if (playing) {
                      window.speechSynthesis.cancel();
                      setPlaying(false);
                    }
                  }}
                  className="bg-transparent text-xs font-semibold text-[var(--foreground)] outline-none"
                  aria-label="Choose playback speed"
                >
                  {SPEEDS.map((value) => (
                    <option key={value} value={value}>
                      {value}×
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {preparedSections.map((section, index) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => speakSection(index)}
                  className={
                    "rounded-xl border p-3 text-left transition hover:-translate-y-0.5 " +
                    (index === sectionIndex
                      ? "border-[var(--foreground)] bg-[var(--card)]"
                      : "border-[var(--border)] bg-[var(--card)]/50")
                  }
                >
                  <span className="text-[10px] font-mono text-[var(--muted-foreground)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-1 block text-xs font-bold text-[var(--foreground)]">{section.label}</span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
