"use client";

import type { ExcalidrawSketchProps } from "./ExcalidrawClient";
import ExcalidrawClient from "./ExcalidrawClient";

export default function ExcalidrawSketch(props: ExcalidrawSketchProps) {
  return <ExcalidrawClient {...props} />;
}
