import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story | Jin Cook",
  description: "Born in a home kitchen, grown across Los Angeles. The story behind Jin Cook Korean soul food.",
};

const values = [
  {
    ko: "정성",
    en: "Handmade With Intention",
    desc: "Every banchan is prepared fresh daily. Every sauce is built from scratch. We refuse shortcuts because our guests deserve food made with full attention.",
  },
  {
    ko: "전통",
    en: "Heritage, Not Trend",
    desc: "Korean food is not a trend to us. It is the language our families spoke at the table. We protect that language and share it with everyone who walks through our doors.",
  },
  {
    ko: "공동체",
    en: "Community First",
    desc: "We partner with local farmers, hire from the neighborhoods we serve, and put community at the center of everything we do. Jin Cook thrives when its community thrives.",
  },
];

const history = [
  {
    number: "01",
    ko: "농경",
    title: "Agricultural Origins",
    heading: "From the Soil,\nEverything Begins",
    desc: "Korean cuisine was born from the land. Over five millennia, farmers cultivated rice paddies, mountain greens, and coastal harvests — each season dictating what appeared on the table. Ingredients were never taken for granted. They were coaxed, preserved, and honored through techniques passed from hand to hand across generations.",
  },
  {
    number: "02",
    ko: "발효",
    title: "Fermentation Culture",
    heading: "Patience Is\nthe First Ingredient",
    desc: "Long before refrigeration, Korean kitchens mastered the art of fermentation. Kimchi, doenjang, ganjang, and gochujang were not invented as condiments — they were crafted as survival, as medicine, as love. Each jar holds months of transformation: salt drawing out water, bacteria building depth, time doing what no recipe can rush.",
  },
  {
    number: "03",
    ko: "오방색",
    title: "Harmony & Health",
    heading: "Five Colors,\nOne Perfect Balance",
    desc: "At the heart of Korean food philosophy lies 오방색 — the five cardinal colors: red, blue, yellow, white, and black. Each color corresponds to a direction, a season, an organ, and a flavor. A properly set Korean table is not just beautiful — it is balanced nutrition, ancient wisdom, and visual poetry served together.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative flex items-end overflow-hidden bg-ink" style={{ minHeight: "80vh" }}>
        <div className="absolute inset-0">
          <video src="/jincook.mp4" autoPlay loop muted playsInline aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20" />
        </div>
        <div className="relative z-10 w-full mx-auto max-w-8xl px-6 md:px-10 lg:px-20 pb-20 lg:pb-28">
          <p className="font-grotesk text-[11px] font-bold uppercase tracking-[0.2em] text-orange mb-5">
            Our Story · 우리 이야기
          </p>
          <h1 className="font-brush text-[52px] sm:text-[68px] lg:text-[88px] text-background leading-[1.1] max-w-[680px]">
            The Story Behind the Bowl
          </h1>
        </div>
      </section>

      {/* ── Origin story ─────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-8xl px-6 md:px-10 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Stats card */}
            <div className="relative rounded-2xl overflow-hidden bg-ink min-h-[460px] flex flex-col justify-between p-8 lg:p-10">
              <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center opacity-[0.06]">
                <span className="font-brush text-[220px] text-background leading-none">진</span>
              </span>
              <span className="relative font-grotesk text-[10px] font-bold uppercase tracking-[0.22em] text-orange">
                Jin Cook · Los Angeles
              </span>
              <div className="relative flex flex-col gap-7">
                <div className="flex gap-0">
                  <div className="flex-1">
                    <div className="font-brush text-[80px] text-background leading-none">3</div>
                    <div className="font-grotesk text-[11px] font-bold uppercase tracking-[0.14em] text-beige/40 mt-1">Locations</div>
                  </div>
                  <div className="w-px bg-beige/10 mx-6" />
                  <div className="flex-1">
                    <div className="font-brush text-[80px] text-orange leading-none">5K</div>
                    <div className="font-grotesk text-[11px] font-bold uppercase tracking-[0.14em] text-beige/40 mt-1">Yrs of Tradition</div>
                  </div>
                </div>
                <blockquote className="font-brush text-[21px] text-background/55 leading-snug border-t border-beige/10 pt-6">
                  &ldquo;Every dish we serve has earned its place by doing one simple thing: bringing people the feeling of home.&rdquo;
                </blockquote>
              </div>
            </div>

            <div className="flex flex-col gap-7">
              <div>
                <p className="font-grotesk text-[11px] font-bold uppercase tracking-[0.16em] text-orange mb-3">
                  Our Origin
                </p>
                <h2 className="font-brush text-[36px] lg:text-[48px] text-ink leading-tight">
                  Born in a Home Kitchen,{" "}
                  <span className="text-orange">Grown Across Los Angeles</span>
                </h2>
              </div>
              <div className="flex flex-col gap-5 font-grotesk text-[15px] leading-[1.85] text-ink/70">
                <p>
                  At Jin Cook, every recipe begins with memory. Our founders grew up in kitchens where food meant more than a meal — it was love, comfort, and care shared around the table. From slowly simmered broths to handmade banchan prepared before sunrise, the flavors we serve today are rooted in the traditions we grew up with.
                </p>
                <p>
                  Guests often tell us our food reminds them of a home-cooked Korean meal — warm, generous, and deeply comforting. That feeling is at the heart of everything we do.
                </p>
                <p>
                  Today, Jin Cook has grown to three locations across Los Angeles, but our philosophy remains the same: honest Korean comfort food, made with care.
                </p>
              </div>
              <Link href="/order"
                className="btn-korean self-start inline-flex items-center gap-2 rounded-full px-8 py-3.5 font-grotesk text-[12px] font-bold uppercase tracking-[0.1em] text-ink active:scale-[0.97]">
                Order Now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5000 years ───────────────────────────────────── */}
      <section className="bg-ink py-20 lg:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.035] flex items-center justify-center pointer-events-none">
          <span className="font-brush text-[320px] text-background leading-none">한</span>
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <p className="font-grotesk text-[11px] font-bold uppercase tracking-[0.2em] text-orange mb-5">
            한식의 유래 · The Roots of Korean Cuisine
          </p>
          <h2 className="font-brush text-[40px] sm:text-[52px] lg:text-[64px] text-background leading-[1.1] mb-6">
            Five Thousand Years on the Table
          </h2>
          <p className="font-grotesk text-[15px] text-background/45 leading-relaxed max-w-[520px] mx-auto">
            Korean cuisine is not a trend. It is a living archive — shaped by land, season, and the quiet wisdom of those who cooked before us.
          </p>
        </div>
      </section>

      {/* ── History pillars ──────────────────────────────── */}
      <section className="bg-background py-20 lg:py-28 relative overflow-hidden">
        <span className="absolute right-8 top-1/2 -translate-y-1/2 font-brush text-[220px] lg:text-[300px] leading-none select-none pointer-events-none opacity-[0.04] text-ink">
          식
        </span>
        <div className="relative z-10 mx-auto max-w-8xl px-6 md:px-10 lg:px-20">
          <div className="flex flex-col divide-y divide-ink/8">
            {history.map((item) => (
              <div key={item.number} className="grid lg:grid-cols-[100px_1fr_1.2fr] gap-6 lg:gap-16 items-start py-12">
                <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-1">
                  <span className="font-grotesk text-[11px] font-bold text-ink/25 tracking-[0.12em]">{item.number}</span>
                  <span className="font-brush text-[32px] text-orange leading-none">{item.ko}</span>
                </div>
                <h3 className="font-brush text-[26px] lg:text-[32px] text-ink leading-tight">
                  {item.heading.split("\n").map((line, i) => (
                    <span key={i}>{line}{i === 0 && <br />}</span>
                  ))}
                </h3>
                <p className="font-grotesk text-[15px] text-ink/60 leading-[1.85]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-beige">
        <div className="mx-auto max-w-8xl px-6 md:px-10 lg:px-20">
          <div className="mb-16">
            <p className="font-grotesk text-[11px] font-bold uppercase tracking-[0.18em] text-orange mb-3">
              What We Believe
            </p>
            <h2 className="font-brush text-[40px] lg:text-[52px] text-ink leading-none">
              Our Values
            </h2>
          </div>
          <div className="flex flex-col divide-y divide-ink/10">
            {values.map((v) => (
              <div key={v.ko} className="grid lg:grid-cols-[100px_1fr_1.2fr] gap-6 lg:gap-16 items-start py-10">
                <span className="font-brush text-[36px] text-orange leading-none">{v.ko}</span>
                <h3 className="font-brush text-[26px] lg:text-[30px] text-ink leading-tight">{v.en}</h3>
                <p className="font-grotesk text-[15px] text-ink/60 leading-[1.85]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-24 lg:py-28 bg-ink relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
          <span className="font-brush text-[280px] text-background leading-none">맛</span>
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="font-grotesk text-[11px] font-bold uppercase tracking-[0.18em] text-orange mb-4">
            Ready to Taste It?
          </p>
          <h2 className="font-brush text-[40px] lg:text-[56px] text-background mb-8 leading-tight">
            Come Find Your Jin Cook
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/order"
              className="btn-korean inline-flex items-center justify-center rounded-full px-10 py-4 font-grotesk text-[13px] font-bold uppercase tracking-[0.1em] text-ink active:scale-[0.97]">
              Order Now
            </Link>
            <Link href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-background/30 hover:border-background/70 px-10 py-4 font-grotesk text-[13px] font-bold uppercase tracking-[0.1em] text-background hover:bg-background/10 active:scale-[0.97] transition-all">
              Find a Location
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
