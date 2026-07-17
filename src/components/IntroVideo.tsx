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
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
        onCanPlay={(e) => { (e.target as HTMLVideoElement).playbackRate = 2; }}
        onEnded={dismiss}
      />
      <button
        onClick={dismiss}
        className="absolute bottom-6 right-6 min-h-[44px] px-4 flex items-center font-grotesk text-[13px] font-bold uppercase tracking-[0.1em] text-background/60 hover:text-background transition-colors"
      >
        Skip ↓
      </button>
    </div>
  );
}
