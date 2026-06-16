"use client";

import { useState } from "react";

const TEXT_CLASSES = ["", "bigger-text-1", "bigger-text-2", "bigger-text-3", "bigger-text-4"];
const SPACING_CLASSES = ["", "text-spacing-1", "text-spacing-2", "text-spacing-3"];

const CONTRAST_MODES = [
  { id: "invert-colors", label: "Invert Colors" },
  { id: "dark-contrast",  label: "Dark Contrast" },
  { id: "light-contrast", label: "Light Contrast" },
];

const TOGGLE_OPTIONS = [
  { id: "highlight-links",  label: "Highlight Links" },
  { id: "oversized-widget", label: "Oversized Widget" },
  { id: "text-align",       label: "Text Align" },
  { id: "line-height",      label: "Line Height" },
  { id: "reduce-motion",    label: "Pause Animations" },
  { id: "saturation",       label: "Saturation" },
  { id: "hide-images",      label: "Hide Images" },
  { id: "dyslexia-font",    label: "Dyslexia Friendly" },
  { id: "custom-cursor",    label: "Cursor" },
  { id: "tooltips",         label: "Tooltips" },
];

export default function AccessibilityBar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Set<string>>(new Set());
  const [textLevel, setTextLevel] = useState(0);
  const [spacingLevel, setSpacingLevel] = useState(0);
  const [contrastMode, setContrastMode] = useState("");

  const toggle = (id: string) => {
    setActive((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        document.documentElement.classList.remove(id);
      } else {
        next.add(id);
        document.documentElement.classList.add(id);
      }
      return next;
    });
  };

  const cycleText = () => {
    const next = (textLevel + 1) % 5;
    const el = document.documentElement;
    TEXT_CLASSES.forEach((cls) => cls && el.classList.remove(cls));
    if (next > 0) el.classList.add(TEXT_CLASSES[next]);
    setTextLevel(next);
  };

  const cycleSpacing = () => {
    const next = (spacingLevel + 1) % 4;
    const el = document.documentElement;
    SPACING_CLASSES.forEach((cls) => cls && el.classList.remove(cls));
    if (next > 0) el.classList.add(SPACING_CLASSES[next]);
    setSpacingLevel(next);
  };

  const toggleContrast = (mode: string) => {
    const el = document.documentElement;
    CONTRAST_MODES.forEach(({ id }) => el.classList.remove(id));
    if (contrastMode === mode) {
      setContrastMode("");
    } else {
      el.classList.add(mode);
      setContrastMode(mode);
    }
  };

  const resetAll = () => {
    const el = document.documentElement;
    setActive((prev) => { prev.forEach((id) => el.classList.remove(id)); return new Set(); });
    TEXT_CLASSES.forEach((cls) => cls && el.classList.remove(cls));
    setTextLevel(0);
    SPACING_CLASSES.forEach((cls) => cls && el.classList.remove(cls));
    setSpacingLevel(0);
    CONTRAST_MODES.forEach(({ id }) => el.classList.remove(id));
    setContrastMode("");
  };

  const hasAny = active.size > 0 || textLevel > 0 || spacingLevel > 0 || contrastMode !== "";

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-[200] flex flex-col items-end gap-2">
      {open && (
        <div
          role="dialog"
          aria-label="Accessibility options"
          className="bg-ink border border-beige/20 rounded-2xl shadow-2xl p-4 w-[calc(100vw-2rem)] sm:w-56 mb-1 max-h-[70vh] overflow-y-auto"
        >
          <div className="flex items-center justify-between mb-3">
            <p className="font-grotesk text-[10px] font-bold uppercase tracking-widest text-beige/50">
              Accessibility
            </p>
            <button
              onClick={() => setOpen(false)}
              className="text-beige/40 hover:text-beige text-lg leading-none sm:hidden"
              aria-label="Close accessibility panel"
            >
              ✕
            </button>
          </div>

          <div className="flex flex-col gap-1.5">

            {/* Text size — cycles 4 levels */}
            <button
              onClick={cycleText}
              aria-pressed={textLevel > 0}
              className={`w-full text-left px-3 py-2.5 sm:py-2 rounded-lg font-grotesk text-[13px] sm:text-[12px] font-medium transition-colors flex items-center justify-between ${
                textLevel > 0 ? "bg-orange text-ink" : "bg-white/10 text-beige hover:bg-white/20"
              }`}
            >
              <span>Bigger Text</span>
              <span className="flex gap-0.5">
                {[1, 2, 3, 4].map((lvl) => (
                  <span
                    key={lvl}
                    className={`w-1.5 h-1.5 rounded-full ${
                      textLevel >= lvl
                        ? "bg-ink"
                        : "bg-beige/30"
                    }`}
                  />
                ))}
              </span>
            </button>

            {/* Contrast modes — mutually exclusive */}
            {CONTRAST_MODES.map((m) => (
              <button
                key={m.id}
                onClick={() => toggleContrast(m.id)}
                aria-pressed={contrastMode === m.id}
                className={`w-full text-left px-3 py-2.5 sm:py-2 rounded-lg font-grotesk text-[13px] sm:text-[12px] font-medium transition-colors ${
                  contrastMode === m.id ? "bg-orange text-ink" : "bg-white/10 text-beige hover:bg-white/20"
                }`}
              >
                {m.label}
              </button>
            ))}

            {/* Text spacing — cycles 3 levels */}
            <button
              onClick={cycleSpacing}
              aria-pressed={spacingLevel > 0}
              className={`w-full text-left px-3 py-2.5 sm:py-2 rounded-lg font-grotesk text-[13px] sm:text-[12px] font-medium transition-colors flex items-center justify-between ${
                spacingLevel > 0 ? "bg-orange text-ink" : "bg-white/10 text-beige hover:bg-white/20"
              }`}
            >
              <span>Text Spacing</span>
              <span className="flex gap-0.5">
                {[1, 2, 3].map((lvl) => (
                  <span
                    key={lvl}
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: spacingLevel >= lvl ? (spacingLevel > 0 ? "#2b2416" : "white") : "rgba(255,255,255,0.25)" }}
                  />
                ))}
              </span>
            </button>

            {/* Divider */}
            <div className="border-t border-beige/10 my-0.5" />

            {/* Regular toggles */}
            {TOGGLE_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                onClick={() => toggle(opt.id)}
                aria-pressed={active.has(opt.id)}
                className={`w-full text-left px-3 py-2.5 sm:py-2 rounded-lg font-grotesk text-[13px] sm:text-[12px] font-medium transition-colors ${
                  active.has(opt.id) ? "bg-orange text-ink" : "bg-white/10 text-beige hover:bg-white/20"
                }`}
              >
                {opt.label}
              </button>
            ))}

            {/* Reset All */}
            {hasAny && (
              <button
                onClick={resetAll}
                className="w-full text-center px-3 py-2.5 sm:py-2 mt-1 rounded-lg border border-beige/20 font-grotesk text-[12px] font-bold uppercase tracking-[0.08em] text-beige/50 hover:text-beige hover:border-beige/40 transition-colors"
              >
                Reset All
              </button>
            )}
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        aria-label="Accessibility options"
        aria-expanded={open}
        className="w-12 h-12 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
        style={{ backgroundColor: open ? "#2b2416" : "#e06b2a", color: open ? "#e06b2a" : "#2b2416", border: "2px solid #e06b2a" }}
      >
        <AccessibilityIcon />
      </button>
    </div>
  );
}

function AccessibilityIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="4" r="2" />
      <path d="M19 9H5a1 1 0 000 2h5v2l-2 7h2l1.5-5h1L13 20h2l-2-7V11h5a1 1 0 000-2z" />
    </svg>
  );
}
