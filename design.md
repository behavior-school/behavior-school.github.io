# 🎨 Behavior School Design System (`design.md`)

## 📐 tweakcn Claude Theme Specification

The **Behavior School** platform utilizes the official **tweakcn Claude theme** (`https://tweakcn.com/r/themes/claude.json`), featuring Claude's signature warm terracotta primary accent, subtle parchment light mode, and dark charcoal dark mode.

---

## 🎨 Color Tokens (tweakcn `claude.json` OKLCH Variables)

| Token | Light Mode OKLCH | Dark Mode OKLCH | Usage |
| :--- | :--- | :--- | :--- |
| `--background` | `oklch(0.9818 0.0054 95.0986)` | `oklch(0.2679 0.0036 106.6427)` | Warm parchment / dark charcoal background |
| `--foreground` | `oklch(0.3438 0.0269 95.7226)` | `oklch(0.8074 0.0142 93.0137)` | High-contrast readable typography |
| `--card` | `oklch(0.9818 0.0054 95.0986)` | `oklch(0.2679 0.0036 106.6427)` | Card container surface |
| `--card-foreground` | `oklch(0.1908 0.0020 106.5859)` | `oklch(0.9818 0.0054 95.0986)` | Card text |
| `--primary` | `oklch(0.6171 0.1375 39.0427)` | `oklch(0.6724 0.1308 38.7559)` | **Claude Terracotta Orange** primary accent |
| `--primary-foreground` | `oklch(1.0000 0 0)` | `oklch(1.0000 0 0)` | Text on primary buttons |
| `--muted` | `oklch(0.9341 0.0153 90.2390)` | `oklch(0.2213 0.0038 106.7070)` | Secondary backgrounds & muted badges |
| `--muted-foreground` | `oklch(0.6059 0.0075 97.4233)` | `oklch(0.7713 0.0169 99.0657)` | Muted meta labels |
| `--border` | `oklch(0.8847 0.0069 97.3627)` | `oklch(0.3618 0.0101 106.8928)` | 1px border dividers |
| `--radius` | `0.5rem` | `0.5rem` | Standard border radius |

---

## 🏛️ Landing Page Structure (4 Minimal Sections)

1. **Header & Hero Section**: Clean header with tweakcn Claude primary button + Hero featuring Claude terracotta highlights.
2. **Knowledge Pillars Section**: 6 minimal cards styled using tweakcn Claude `--card` and `--border` tokens.
3. **Questions Answered Section**: Expandable inquiry list triggering Claude-style markdown artifacts.
4. **Behavior Diagnostic & Artifacts Drawer**: Interactive Mind Diagnostic tool triggering the Claude-style side panel.
