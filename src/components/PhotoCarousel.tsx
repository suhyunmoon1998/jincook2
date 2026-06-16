"use client";

import { useState, useEffect } from "react";

const photos = [
  { src: "/photos/food-2.jpg", alt: "Hot stone bibimbap" },
  { src: "/photos/food-4.jpg", alt: "Katsu with rice and banchan" },
  { src: "/photos/food-5.jpg", alt: "Curry katsu hot stone" },
  { src: "/photos/food-6.jpg", alt: "Bibimbap and bulgogi table spread" },
  { src: "/photos/food-3.jpg", alt: "Steamed dumplings" },
];

export default function PhotoCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setCurrent((c) => (c + 1) % photos.length), 3800);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div
      className="relative rounded-2xl overflow-hidden bg-ink min-h-[460px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {photos.map((photo, i) => (
        <div
          key={photo.src}
          aria-hidden={i !== current}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={photo.src}
            alt={photo.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent pointer-events-none" />

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10" role="tablist" aria-label="Photo navigation">
        {photos.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Photo ${i + 1}`}
            onClick={() => setCurrent(i)}
            className="h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            style={{ width: i === current ? "24px" : "6px", backgroundColor: i === current ? "white" : "rgba(255,255,255,0.35)" }}
          />
        ))}
      </div>
    </div>
  );
}
