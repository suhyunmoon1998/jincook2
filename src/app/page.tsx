import Link from "next/link";
import TextMarquee from "@/components/TextMarquee";
import LocationCard from "@/components/LocationCard";

const locations = [
  {
    name: "Glendale",
    fullName: "Jin Cook Glendale",
    address: "310 N Brand Blvd, Glendale, CA 91203",
    phone: "(818) 637-7820",
    hours: ["Mon–Thu 11:30am–11pm", "Fri–Sat 11:30am–12am", "Sun 11:30am–11pm"],
    mapsUrl: "https://maps.google.com/?q=310+N+Brand+Blvd+Glendale+CA+91203",
    mapEmbedUrl: "https://maps.google.com/maps?q=310+N+Brand+Blvd+Glendale+CA+91203&output=embed&z=15",
    instagram: "@jincook_glendale",
    instagramUrl: "https://www.instagram.com/jincook_glendale/",
    orderUrl: "https://order.toasttab.com/online/jincook",
  },
  {
    name: "Santa Monica",
    fullName: "Jin Cook Santa Monica",
    address: "3001 Wilshire Blvd Ste C, Santa Monica, CA 90403",
    phone: "(310) 310-8014",
    hours: ["Mon–Thu 11:30am–10:30pm", "Fri–Sat 11:30am–12am", "Sun 11:30am–9:30pm"],
    mapsUrl: "https://maps.google.com/?q=3001+Wilshire+Blvd+Santa+Monica+CA+90403",
    mapEmbedUrl: "https://maps.google.com/maps?q=3001+Wilshire+Blvd+Santa+Monica+CA+90403&output=embed&z=15",
    instagram: "@jincook_santamonica",
    instagramUrl: "https://www.instagram.com/jincook_santamonica/",
    orderUrl: "https://order.toasttab.com/online/jincook-santa-monica",
  },
  {
    name: "Downtown LA",
    fullName: "Jin Cook Downtown LA",
    address: "337 E 1st St, Los Angeles, CA 90012",
    phone: "(213) 577-1128",
    hours: ["Mon–Thu 11:30am–10:30pm", "Fri–Sat 11:30am–12am", "Sun 11:30am–10:30pm"],
    mapsUrl: "https://maps.google.com/?q=337+E+1st+St+Los+Angeles+CA+90012",
    mapEmbedUrl: "https://maps.google.com/maps?q=337+E+1st+St+Los+Angeles+CA+90012&output=embed&z=15",
    instagram: "@jincookdtla",
    instagramUrl: "https://www.instagram.com/jincookdtla",
    orderUrl: "https://order.toasttab.com/online/jincook-dtlt",
  },
];

const instagramProfiles = [
  { handle: "@jincook_santamonica", name: "Santa Monica", url: "https://www.instagram.com/jincook_santamonica/" },
  { handle: "@jincook_glendale", name: "Glendale", url: "https://www.instagram.com/jincook_glendale/" },
  { handle: "@jincookdtla", name: "Downtown LA", url: "https://www.instagram.com/jincookdtla" },
];

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative flex items-end overflow-hidden" style={{ minHeight: "100svh" }}>
        <div className="absolute inset-0">
          <video src="/jincook.mp4" autoPlay loop muted playsInline
            className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/50 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 w-full mx-auto max-w-8xl px-6 md:px-10 lg:px-20 pb-20 lg:pb-28">
          <div className="max-w-[680px]">
            <p className="font-grotesk text-[11px] font-bold uppercase tracking-[0.2em] text-orange mb-5">
              Authentic Korean Soul Food · Los Angeles
            </p>
            <h1 className="font-brush text-[52px] sm:text-[68px] lg:text-[90px] text-background leading-[1.1] mb-8">
              Where Korean Tradition Meets the LA Table
            </h1>
            <div className="flex flex-wrap gap-3">
              <Link href="/order"
                className="btn-korean inline-flex items-center justify-center rounded-full px-9 py-4 font-grotesk text-[13px] font-bold uppercase tracking-[0.1em] text-ink active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background">
                Order Now
              </Link>
              <Link href="/about"
                className="inline-flex items-center justify-center rounded-full border border-background/40 px-9 py-4 font-grotesk text-[13px] font-bold uppercase tracking-[0.1em] text-background hover:border-background/80 hover:bg-background/10 active:scale-[0.97] transition-all">
                Our Story
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-beige/50">
          <svg className="h-5 w-5 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── Ticker ───────────────────────────────────────── */}
      <div className="bg-orange py-3 overflow-hidden">
        <TextMarquee />
      </div>

      {/* ── Locations ────────────────────────────────────── */}
      <section className="bg-ink py-20 lg:py-28 overflow-hidden relative">
        <div className="pointer-events-none select-none absolute inset-0 flex items-center justify-center opacity-[0.03]">
          <span className="font-brush text-[260px] text-background leading-none">진쿡</span>
        </div>
        <div className="relative z-10 mx-auto max-w-8xl px-6 md:px-10 lg:px-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="font-grotesk text-[11px] font-bold uppercase tracking-[0.16em] text-orange mb-2">
                Our Locations
              </p>
              <h2 className="font-brush text-[36px] lg:text-[48px] text-background leading-none">
                Find Your Jin Cook
              </h2>
            </div>
            <Link href="/contact"
              className="font-grotesk text-[12px] font-bold uppercase tracking-[0.1em] text-beige/50 hover:text-orange transition-colors self-start sm:self-auto">
              View All Locations →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {locations.map((loc) => (
              <LocationCard key={loc.name} {...loc} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Philosophy ───────────────────────────────────── */}
      <section className="bg-green py-24 lg:py-32 relative overflow-hidden">
        <span className="absolute right-0 top-0 bottom-0 flex items-center font-brush text-[220px] leading-none text-beige/[0.07] select-none pointer-events-none pr-8">
          한식
        </span>
        <div className="relative z-10 mx-auto max-w-8xl px-6 md:px-10 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-grotesk text-[11px] font-bold uppercase tracking-[0.18em] text-orange mb-6">
                한식의 유래 · The Roots of Korean Cuisine
              </p>
              <blockquote className="font-brush text-[28px] sm:text-[34px] lg:text-[42px] text-background leading-[1.25] mb-8">
                &ldquo;Five thousand years of tradition — in every bowl.&rdquo;
              </blockquote>
              <Link href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-background/30 hover:border-background/70 px-7 py-3 font-grotesk text-[12px] font-bold uppercase tracking-[0.1em] text-background hover:bg-background/10 active:scale-[0.97] transition-all">
                Our Story →
              </Link>
            </div>
            <p className="font-grotesk text-[15px] lg:text-[16px] text-beige/70 leading-[1.9] max-w-[520px]">
              Rooted in the philosophy of balance — the five flavors and five colors — every dish tells a story of fermentation, patience, and season. Kimchi, doenjang, and ganjang weren&apos;t invented as trends; they were crafted over centuries as a way to preserve life and layer flavor. At Jin Cook, we bring 5,000 years of tradition to Los Angeles — one bowl at a time.
            </p>
          </div>
        </div>
      </section>

      {/* ── Instagram ────────────────────────────────────── */}
      <section className="bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-8xl px-6 md:px-10 lg:px-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
            <div>
              <p className="font-grotesk text-[11px] font-bold uppercase tracking-[0.16em] text-orange mb-2">
                Follow Along
              </p>
              <h2 className="font-brush text-[32px] lg:text-[40px] text-ink leading-none">
                Find Us on Instagram
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {instagramProfiles.map((p) => (
              <a key={p.handle} href={p.url} target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-ink/10 hover:border-orange/40 bg-beige/40 hover:bg-beige/80 px-6 py-5 transition-all duration-200 active:scale-[0.97]">
                <InstagramIcon className="h-6 w-6 shrink-0 text-orange" />
                <div className="flex-1 min-w-0">
                  <div className="font-grotesk text-[13px] font-bold text-ink truncate">{p.handle}</div>
                  <div className="font-grotesk text-[11px] text-ink/40 mt-0.5">{p.name}</div>
                </div>
                <svg className="h-4 w-4 text-ink/20 group-hover:text-orange transition-colors shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}
