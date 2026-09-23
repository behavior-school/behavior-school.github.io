"use client";

import { ReactNode, useEffect, useState } from "react";

export default function ArticleReadingChrome({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100)) : 0);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <>
      <div className="fixed left-0 right-0 top-[var(--app-header-height)] z-[45] h-0.5 bg-transparent" aria-hidden="true">
        <div
          className="h-full bg-[var(--foreground)] transition-[width] duration-150"
          style={{ width: progress + "%" }}
        />
      </div>
      {children}
    </>
  );
}
