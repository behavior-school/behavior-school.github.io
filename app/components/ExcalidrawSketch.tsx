import dynamic from "next/dynamic";
import type { ExcalidrawSketchProps } from "./ExcalidrawClient";

const ExcalidrawClient = dynamic(() => import("./ExcalidrawClient"), { ssr: false });

export default function ExcalidrawSketch(props: ExcalidrawSketchProps) {
  return <ExcalidrawClient {...props} />;
}
