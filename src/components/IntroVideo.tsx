"use client";

import { useEffect, useRef, useState } from "react";

export default function IntroVideo() {
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (sessionStorage.getItem("intro_seen")) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisible(true);
    document.body.style.overflow = "hidden";
  }, []);

  function dismiss() {
    setFading(true);
    setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
      sessionStorage.setItem("intro_seen", "1");
    }, 900);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[300] bg-ink"
      style={{ opacity: fading ? 0 : 1, transition: "opacity 0.9s ease" }}
    >
      <video
        ref={videoRef}
        src="/jincook2.mp4"
        autoPlay
        muted
        playsInline
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        onCanPlay={(e) => { (e.target as HTMLVideoElement).playbackRate = 2; }}
        onEnded={dismiss}
      />
      <button
        onClick={dismiss}
        className="absolute bottom-8 right-8 font-grotesk text-[12px] font-bold uppercase tracking-[0.1em] text-background/60 hover:text-background transition-colors"
      >
        Skip ↓
      </button>
    </div>
  );
}
