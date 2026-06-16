"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function TakeoutPrompt() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const dismissRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 15000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (visible && !dismissed) dismissRef.current?.focus();
  }, [visible, dismissed]);

  if (!visible || dismissed) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Order options"
      className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[300] w-[calc(100vw-2rem)] max-w-sm"
    >
      <div className="bg-ink border border-beige/20 rounded-2xl shadow-2xl p-5 relative">
        <button
          ref={dismissRef}
          onClick={() => setDismissed(true)}
          aria-label="Dismiss order prompt"
          className="absolute top-3 right-3 text-beige/40 hover:text-beige text-lg leading-none"
        >
          ✕
        </button>
        <p className="font-grotesk text-[11px] font-bold uppercase tracking-widest text-orange mb-1">
          Ready to order?
        </p>
        <p className="font-grotesk text-beige text-sm mb-4">
          Pick up fresh Korean food near you.
        </p>
        <div className="flex flex-col gap-2">
          <Link
            href="/order"
            onClick={() => setDismissed(true)}
            className="w-full text-center bg-orange text-ink font-grotesk text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-[#c95a1e] transition-colors"
          >
            Take Out — Order Now
          </Link>
          <a
            href="https://maps.google.com/maps?q=Jin+Cook+Korean+Restaurant+Los+Angeles"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setDismissed(true)}
            className="w-full text-center bg-white/10 text-beige font-grotesk text-sm font-medium px-4 py-2.5 rounded-xl hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
          >
            <MapPinIcon />
            Find Near Jincook
          </a>
        </div>
      </div>
    </div>
  );
}

function MapPinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}
