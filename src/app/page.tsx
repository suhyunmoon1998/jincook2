import Image from "next/image";
import Link from "next/link";
import LocationBoard from "@/components/LocationBoard";

const plates = [
  { src: "/photos/food-6.jpg", ko: "돌솥 불고기 · 돌솥 비빔밥", en: "Hot stone, straight from the fire", className: "col-span-2 row-span-2" },
  { src: "/photos/food-5.jpg", ko: "커리 돈까스", en: "Curry katsu on hot stone", className: "" },
  { src: "https://static.wixstatic.com/media/8b8c8d_ac93f76553b840fc98ead9c5c2ef17f4~mv2.jpg", ko: "갈비찜", en: "Braised short rib with vegetables and rice cake", className: "" },
  { src: "/photos/food-2.jpg", ko: "돌솥 비빔밥", en: "Hot stone bibimbap", className: "" },
  { src: "/photos/food-3.jpg", ko: "찐만두", en: "Steamed pork dumplings", className: "" },
];

export default function Home() {
  return (
    <div className="bg-background">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-24 lg:pt-28">
        <div className="mx-auto max-w-8xl px-6 md:px-10 lg:px-20 grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:grid-cols-[minmax(0,540px)_minmax(0,1fr)] gap-10 lg:gap-6 items-center pb-16 lg:pb-24 xl:pb-32">
          <div className="order-2 lg:order-1">
            <h1 className="font-brush text-[44px] sm:text-[64px] lg:text-[clamp(44px,4.6vw,72px)] leading-[1.02] text-ink">
              Korean
              <br />
              soul food,
              <br />
              bowl by bowl.
            </h1>
            <p className="mt-6 max-w-[30rem] text-[17px] leading-[1.75] text-ink/80">
              Hot soups, hot stone rice and slow-braised meats, cooked at three kitchens across Los Angeles.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/order" className="btn btn-primary btn-lg">
                Order now
              </Link>
              <a href="#locations" className="btn btn-outline-dark btn-lg">
                Find a location
              </a>
            </div>
          </div>

          {/* The bowl: video cropped to a circle, offset sun-disc behind it */}
          <div className="order-1 lg:order-2 relative mx-auto w-[min(90vw,620px)] lg:ml-auto lg:w-[calc(100%+2.5rem)] lg:max-w-none lg:-mr-10 xl:w-[calc(100%+5rem)] xl:-mr-20 aspect-square">
            <div className="absolute inset-0 translate-x-[7%] translate-y-[5%] rounded-full bg-orange" aria-hidden="true" />
            <div className="absolute inset-0 rounded-full overflow-hidden border-[3px] border-ink bg-ink">
              <video
                src="/jincook.mp4"
                poster="/photos/food-5.jpg"
                autoPlay
                loop
                muted
                playsInline
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── On the table ─────────────────────────────────── */}
      <section className="border-y-2 border-ink bg-beige">
        <div className="mx-auto max-w-8xl px-6 md:px-10 lg:px-20 py-14 lg:py-24">
          <h2 className="font-brush text-[34px] lg:text-[52px] leading-[1.1] text-ink max-w-[16ch]">
            Straight from the stone pot.
          </h2>
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 auto-rows-[200px] sm:auto-rows-[260px] lg:auto-rows-[300px]">
            {plates.map((p) => (
              <figure key={p.src} className={`relative overflow-hidden border-2 border-ink bg-ink ${p.className}`}>
                <Image
                  src={p.src}
                  alt={p.en}
                  fill
                  sizes="(min-width: 1024px) 40vw, 50vw"
                  className="object-cover"
                />
                <figcaption className="absolute left-0 bottom-0 bg-background border-t-2 border-r-2 border-ink px-3 py-2">
                  <span className="block font-brush text-[17px] leading-tight text-ink">{p.ko}</span>
                  <span className="block text-[13px] text-ink/75">{p.en}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── Locations: a menu board, one row per kitchen ─── */}
      <section id="locations" className="bg-green text-background scroll-mt-16">
        <div className="mx-auto max-w-8xl px-6 md:px-10 lg:px-20 py-14 lg:py-24">
          <h2 className="font-brush text-[34px] lg:text-[52px] leading-[1.1]">
            Three kitchens, one table.
          </h2>

          <div className="mt-10 lg:mt-14">
            <LocationBoard />
          </div>
        </div>
      </section>

      {/* ── Story ────────────────────────────────────────── */}
      <section className="bg-background">
        <div className="mx-auto max-w-8xl px-6 md:px-10 lg:px-20 py-14 lg:py-28 grid lg:grid-cols-[0.8fr_1fr] gap-10 lg:gap-20 items-center">
          <div className="relative mx-auto w-full max-w-[420px]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] border-[3px] border-ink bg-beige">
              <Image
                src="/hanok.jpg"
                alt="A traditional Korean hanok courtyard"
                fill
                sizes="(min-width: 1024px) 420px, 80vw"
                className="object-cover object-[60%_50%]"
              />
            </div>
          </div>
          <div>
            <p className="font-brush text-[30px] sm:text-[40px] lg:text-[52px] leading-[1.15] text-ink text-balance">
              Five thousand years of tradition, in every bowl.
            </p>
            <p className="mt-6 max-w-[34rem] text-[17px] leading-[1.9] text-ink/80">
              Korean cooking is built on balance: five flavors, five colors. Kimchi, doenjang and ganjang weren&apos;t trends. People made them over centuries to keep food through the seasons and build flavor in layers. At Jin Cook we bring that to Los Angeles, one bowl at a time.
            </p>
            <Link href="/about" className="btn btn-dark btn-lg mt-8">
              Read our story
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
