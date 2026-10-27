import type { Metadata } from "next";
import Link from "next/link";
import { locations, hoursLines } from "@/data/locations";

export const metadata: Metadata = {
  title: "Order Online | Jin Cook Korean Restaurant",
  description: "Order Jin Cook online for pickup or delivery from Glendale, Santa Monica, or Downtown LA.",
};

export default function OrderPage() {
  return (
    <div className="bg-ink min-h-screen pt-14 lg:pt-16">

      {/* Header */}
      <div className="mx-auto max-w-8xl px-6 md:px-10 lg:px-20 pt-16 pb-12 lg:pt-20 lg:pb-16">
        <p className="font-grotesk text-[11px] font-bold uppercase tracking-[0.18em] text-orange mb-4">
          Order Online
        </p>
        <h1 className="font-brush text-[48px] lg:text-[64px] text-background leading-none">
          Ready to Order?
        </h1>
      </div>

      {/* Cards */}
      <div className="mx-auto max-w-8xl px-6 md:px-10 lg:px-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {locations.map((loc) => (
            <article key={loc.id} id={loc.id}
              className="group flex flex-col rounded-2xl bg-background/5 border border-background/10 hover:border-orange/30 overflow-hidden transition-all duration-300">

              {/* Map */}
              <div className="relative w-full h-[180px] overflow-hidden">
                <iframe
                  src={loc.mapEmbedUrl}
                  width="100%" height="100%"
                  style={{ border: 0 }}
                  allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${loc.fullName}`}
                  className="absolute inset-0 w-full h-full grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-ink/40 to-transparent pointer-events-none" />
                <span className="absolute top-3 left-3 font-grotesk text-[10px] font-bold uppercase tracking-[0.14em] text-ink bg-orange px-2.5 py-1 rounded-full">
                  {loc.name}
                </span>
              </div>

              {/* Info */}
              <div className="flex flex-col gap-4 p-6">
                <div>
                  <h2 className="font-brush text-[24px] text-background leading-tight">{loc.fullName}</h2>
                  <p className="font-grotesk text-[13px] text-beige/60 mt-1">{loc.address}</p>
                  <a href={`tel:${loc.phone}`}
                    className="font-grotesk text-[13px] font-medium text-orange hover:text-[#f08040] transition-colors">
                    {loc.phone}
                  </a>
                </div>

                <div className="border-t border-beige/10 pt-3 space-y-1">
                  {hoursLines(loc).map((h) => (
                    <p key={h} className="font-grotesk text-[12px] text-beige/65">{h}</p>
                  ))}
                </div>

                {/* Order buttons */}
                <div className="flex gap-3 pt-1">
                  <a href={loc.pickupUrl} target="_blank" rel="noopener noreferrer"
                    className="btn btn-primary flex-1">
                    Pickup
                    <span className="sr-only"> from {loc.name} (opens in new tab)</span>
                  </a>
                  <a href={loc.deliveryUrl} target="_blank" rel="noopener noreferrer"
                    className="btn btn-outline flex-1">
                    Delivery
                    <span className="sr-only"> from {loc.name} (opens in new tab)</span>
                  </a>
                </div>

                <div className="flex items-center justify-center gap-6">
                  <Link href={`/menu?location=${loc.id}`}
                    className="font-grotesk text-[11px] font-bold uppercase tracking-[0.08em] text-beige/60 hover:text-orange transition-colors">
                    View Menu
                    <span className="sr-only"> for {loc.name}</span>
                  </Link>
                  <a href={loc.mapsUrl} target="_blank" rel="noopener noreferrer"
                    className="font-grotesk text-[11px] font-bold uppercase tracking-[0.08em] text-beige/60 hover:text-orange transition-colors">
                    Get Directions
                    <span className="sr-only"> (opens in new tab)</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
