"use client";

const dishes = [
  "Galbi Tang",
  "Soon Dubu Jjigae",
  "Crispy Pajeon",
  "Dolsot Bibimbap",
  "Bulgogi",
  "Japchae",
  "Tonkatsu",
  "Kimchi Fried Rice",
  "Galbi",
  "Seafood Ramyun",
];

export default function TextCarousel() {
  const repeated = [...dishes, ...dishes];
  return (
    <div className="flex overflow-hidden py-3">
      <div className="flex animate-marquee whitespace-nowrap">
        {repeated.map((dish, i) => (
          <span key={i} className="inline-flex items-center gap-4 mx-2">
            <span className="text-sm font-medium" style={{ color: "var(--color-muted)" }}>
              {dish}
            </span>
            <span style={{ color: "var(--color-border)" }}>—</span>
          </span>
        ))}
      </div>
    </div>
  );
}
