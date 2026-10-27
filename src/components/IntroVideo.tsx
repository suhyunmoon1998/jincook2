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

  useEffect(() => {
    if (!visible) return;
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
  }, [visible]);

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
        muted
        playsInline
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
        onCanPlay={(e) => {
          try { (e.target as HTMLVideoElement).playbackRate = 2; } catch {}
        }}
        onEnded={dismiss}
      />
      <button
        onClick={dismiss}
        className="btn btn-soft btn-sm absolute bottom-6 right-6 backdrop-blur-sm"
      >
        Skip
      </button>
    </div>
  );
}
