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

const sep = <span className="opacity-40">·</span>;

export default function TextMarquee() {
  const items = [...dishes, ...dishes];
  return (
    <div className="flex">
      <div className="flex shrink-0 items-center gap-10 pr-10 font-grotesk text-[11px] font-bold uppercase tracking-[0.2em] text-background animate-marquee">
        {items.map((dish, i) => (
          <div key={i} className="flex items-center gap-10">
            <span>{dish}</span>
            {sep}
          </div>
        ))}
      </div>
      <div className="flex shrink-0 items-center gap-10 pr-10 font-grotesk text-[11px] font-bold uppercase tracking-[0.2em] text-background animate-marquee" aria-hidden>
        {items.map((dish, i) => (
          <div key={i} className="flex items-center gap-10">
            <span>{dish}</span>
            {sep}
          </div>
        ))}
      </div>
    </div>
  );
}
