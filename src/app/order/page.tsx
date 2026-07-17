import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Online | Jin Cook Korean Restaurant",
  description: "Order Jin Cook online for pickup or delivery from Glendale, Santa Monica, or Downtown LA.",
};

const locations = [
  {
    id: "glendale",
    name: "Glendale",
    fullName: "Jin Cook Glendale",
    address: "310 N Brand Blvd, Glendale, CA 91203",
    phone: "(818) 637-7820",
    hours: ["Mon–Thu 11:30am–11pm", "Fri–Sat 11:30am–12am", "Sun 11:30am–11pm"],
    mapsUrl: "https://maps.google.com/?q=310+N+Brand+Blvd+Glendale+CA+91203",
    mapEmbedUrl: "https://maps.google.com/maps?q=310+N+Brand+Blvd+Glendale+CA+91203&output=embed&z=15",
    pickupUrl: "https://order.toasttab.com/online/jincook",
    deliveryUrl: "https://www.doordash.com/store/1027295?src=yp&delivery=true",
  },
  {
    id: "santa-monica",
    name: "Santa Monica",
    fullName: "Jin Cook Santa Monica",
    address: "3001 Wilshire Blvd Ste C, Santa Monica, CA 90403",
    phone: "(310) 310-8014",
    hours: ["Mon–Thu 11:30am–10:30pm", "Fri–Sat 11:30am–12am", "Sun 11:30am–9:30pm"],
    mapsUrl: "https://maps.google.com/?q=3001+Wilshire+Blvd+Santa+Monica+CA+90403",
    mapEmbedUrl: "https://maps.google.com/maps?q=3001+Wilshire+Blvd+Santa+Monica+CA+90403&output=embed&z=15",
    pickupUrl: "https://order.toasttab.com/online/jincook-santa-monica",
    deliveryUrl: "https://www.doordash.com/store/jin-cook-santa-monica-30742940/42525556/?delivery=true",
  },
  {
    id: "dtla",
    name: "DTLA",
    fullName: "Jin Cook Downtown LA",
    address: "337 E 1st St, Los Angeles, CA 90012",
    phone: "(213) 577-1128",
    hours: ["Mon–Thu 11:30am–10:30pm", "Fri–Sat 11:30am–12am", "Sun 11:30am–10:30pm"],
    mapsUrl: "https://maps.google.com/?q=337+E+1st+St+Los+Angeles+CA+90012",
    mapEmbedUrl: "https://maps.google.com/maps?q=337+E+1st+St+Los+Angeles+CA+90012&output=embed&z=15",
    pickupUrl: "https://order.toasttab.com/online/jincook-dtlt",
    deliveryUrl: "https://www.doordash.com/store/jin-cook-los-angeles-33243959/57819146/?delivery=true",
  },
];

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
            <article key={loc.id}
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
                  {loc.hours.map((h) => (
                    <p key={h} className="font-grotesk text-[12px] text-beige/35">{h}</p>
                  ))}
                </div>

                {/* Order buttons */}
                <div className="flex gap-3 pt-1">
                  <a href={loc.pickupUrl} target="_blank" rel="noopener noreferrer"
                    className="flex-1 text-center btn-korean rounded-full py-3 font-grotesk text-[12px] font-bold uppercase tracking-[0.1em] text-ink active:scale-[0.97] transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange">
                    Pickup
                    <span className="sr-only"> from {loc.name} (opens in new tab)</span>
                  </a>
                  <a href={loc.deliveryUrl} target="_blank" rel="noopener noreferrer"
                    className="flex-1 text-center rounded-full border border-background/20 hover:border-background/60 py-3 font-grotesk text-[12px] font-bold uppercase tracking-[0.1em] text-background hover:bg-background/10 active:scale-[0.97] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange">
                    Delivery
                    <span className="sr-only"> from {loc.name} (opens in new tab)</span>
                  </a>
                </div>

                <a href={loc.mapsUrl} target="_blank" rel="noopener noreferrer"
                  className="text-center font-grotesk text-[11px] font-bold uppercase tracking-[0.08em] text-beige/30 hover:text-orange transition-colors">
                  Get Directions
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
