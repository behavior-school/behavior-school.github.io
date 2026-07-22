import React from "react";

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const blocks = content.trim().split("\n\n");

  return (
    <div className="space-y-6 text-[var(--foreground)] text-sm sm:text-base leading-relaxed font-normal">
      {blocks.map((block, idx) => {
        const trimmed = block.trim();

        // Level 2 Heading (##)
        if (trimmed.startsWith("## ")) {
          return (
            <h2
              key={idx}
              className="text-xl sm:text-2xl font-bold text-[var(--foreground)] tracking-tight pt-4 pb-1 border-b border-[var(--border)]"
            >
              {parseInlineMarkdown(trimmed.replace(/^##\s+/, ""))}
            </h2>
          );
        }

        // Level 3 Heading (###)
        if (trimmed.startsWith("### ")) {
          return (
            <h3
              key={idx}
              className="text-lg sm:text-xl font-bold text-[var(--primary)] tracking-tight pt-3 pb-1"
            >
              {parseInlineMarkdown(trimmed.replace(/^###\s+/, ""))}
            </h3>
          );
        }

        // Unordered List (- or *)
        if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
          const items = trimmed.split("\n").map((line) => line.replace(/^[-*]\s+/, ""));
          return (
            <ul key={idx} className="space-y-2 pl-5 list-disc marker:text-[var(--primary)] text-[var(--muted-foreground)]">
              {items.map((item, i) => (
                <li key={i}>{parseInlineMarkdown(item)}</li>
              ))}
            </ul>
          );
        }

        // Numbered List (1., 2., etc.)
        if (/^\d+\.\s+/.test(trimmed)) {
          const items = trimmed.split("\n").map((line) => line.replace(/^\d+\.\s+/, ""));
          return (
            <ol key={idx} className="space-y-2 pl-5 list-decimal marker:text-[var(--primary)] text-[var(--muted-foreground)] font-medium">
              {items.map((item, i) => (
                <li key={i}>{parseInlineMarkdown(item)}</li>
              ))}
            </ol>
          );
        }

        // Blockquote (>)
        if (trimmed.startsWith("> ")) {
          return (
            <blockquote
              key={idx}
              className="p-4 rounded-xl bg-[var(--muted)] border-l-4 border-[var(--primary)] text-[var(--foreground)] italic text-sm"
            >
              {parseInlineMarkdown(trimmed.replace(/^>\s+/, ""))}
            </blockquote>
          );
        }

        // Standard Paragraph
        return (
          <p key={idx} className="text-[var(--muted-foreground)] leading-relaxed">
            {parseInlineMarkdown(trimmed)}
          </p>
        );
      })}
    </div>
  );
}

function parseInlineMarkdown(text: string): React.ReactNode {
  // Simple regex parser for **bold** and `code`
  const parts = text.split(/(\*\*.*?\*\*|`.*?`)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-bold text-[var(--foreground)]">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={index}
          className="px-1.5 py-0.5 rounded bg-[var(--muted)] border border-[var(--border)] font-mono text-xs text-[var(--primary)]"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
}
