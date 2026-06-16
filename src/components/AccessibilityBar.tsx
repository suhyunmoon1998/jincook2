"use client";

import { useState } from "react";

const options = [
  { id: "high-contrast", label: "Contrast +" },
  { id: "highlight-links", label: "Highlight Links" },
  { id: "bigger-text", label: "Bigger Text" },
  { id: "oversized-widget", label: "Oversized Widget" },
  { id: "text-spacing", label: "Text Spacing" },
  { id: "text-align", label: "Text Align" },
  { id: "line-height", label: "Line Height" },
  { id: "reduce-motion", label: "Pause Animations" },
  { id: "saturation", label: "Saturation" },
  { id: "hide-images", label: "Hide Images" },
  { id: "dyslexia-font", label: "Dyslexia Friendly" },
  { id: "custom-cursor", label: "Cursor" },
  { id: "tooltips", label: "Tooltips" },
];

export default function AccessibilityBar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Set<string>>(new Set());

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

  const resetAll = () => {
    setActive((prev) => {
      prev.forEach((id) => document.documentElement.classList.remove(id));
      return new Set();
    });
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-[200] flex flex-col items-end gap-2">
      {open && (
        <div role="dialog" aria-label="Accessibility options" className="bg-ink border border-beige/20 rounded-2xl shadow-2xl p-4 w-[calc(100vw-2rem)] sm:w-52 mb-1 max-h-[60vh] overflow-y-auto">
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
            {options.map((opt) => (
              <button
                key={opt.id}
                onClick={() => toggle(opt.id)}
                aria-pressed={active.has(opt.id)}
                className={`w-full text-left px-3 py-2.5 sm:py-2 rounded-lg font-grotesk text-[13px] sm:text-[12px] font-medium transition-colors ${
                  active.has(opt.id)
                    ? "bg-orange text-ink"
                    : "bg-white/10 text-beige hover:bg-white/20"
                }`}
              >
                {opt.label}
              </button>
            ))}
            {active.size > 0 && (
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
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="4" r="2" />
      <path d="M19 9H5a1 1 0 000 2h5v2l-2 7h2l1.5-5h1L13 20h2l-2-7V11h5a1 1 0 000-2z" />
    </svg>
  );
}
