"use client";

export interface SavedResult {
  type: "quiz" | "diagnostic" | "dopamine" | "habit";
  id: string;
  title: string;
  score?: number;
  maxScore?: number;
  timestamp: string;
  details?: string;
}

const STORAGE_KEY = "behavior_school_user_data";

export function getSavedResults(): SavedResult[] {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error("Failed to read localStorage:", e);
    return [];
  }
}

export function saveResult(result: SavedResult): void {
  if (typeof window === "undefined") return;
  try {
    const current = getSavedResults();
    const filtered = current.filter((r) => r.id !== result.id);
    const updated = [result, ...filtered];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error("Failed to save to localStorage:", e);
  }
}

export function clearSavedResults(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error("Failed to clear localStorage:", e);
  }
}
