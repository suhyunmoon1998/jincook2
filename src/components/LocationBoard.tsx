import OpenStatus from "@/components/OpenStatus";
import { hoursLines, locations } from "@/data/locations";

const link =
  "underline underline-offset-4 decoration-background/40 hover:decoration-orange hover:text-amber";

/** One ruled row per kitchen — address, hours, Toast pickup and DoorDash delivery. */
export default function LocationBoard({ withMap = false }: { withMap?: boolean }) {
  return (
    <ul className="border-t-2 border-background/80">
      {locations.map((loc) => {
        const hours = hoursLines(loc);
        return (
          <li
            key={loc.id}
            id={loc.id}
            className={`grid gap-x-8 gap-y-5 py-8 lg:py-10 border-b-2 border-dashed border-background/40 scroll-mt-24 lg:items-center ${
              withMap
                ? "lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]"
                : "lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)_300px]"
            }`}
          >
            <div>
              <h3 className="font-brush text-[30px] lg:text-[40px] leading-none">{loc.name}</h3>
              <div className="mt-3">
                <OpenStatus hours={hours} />
              </div>
              {withMap && (
                <div className="mt-5 text-[15px] leading-relaxed text-background/85">
                  <p>{loc.address}</p>
                  <a href={`tel:${loc.phone}`} className={link}>
                    {loc.phone}
                  </a>
                </div>
              )}
            </div>

            {!withMap && (
              <div className="text-[15px] leading-relaxed text-background/85">
                <p>{loc.address}</p>
                <a href={`tel:${loc.phone}`} className={link}>
                  {loc.phone}
                </a>
                <ul className="mt-3 text-[14px] text-background/75">
                  {loc.hours.map((h) => (
                    <li key={h.label}>
                      {h.label} <span className="text-background/90">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {withMap && (
              <div className="lg:row-span-2 lg:col-start-2 lg:row-start-1 relative h-[220px] lg:h-[260px] overflow-hidden border-2 border-background/80 bg-ink">
                <iframe
                  src={loc.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${loc.fullName}`}
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            )}

            {withMap && (
              <div className="text-[14px] text-background/75 lg:col-start-1">
                <ul>
                  {loc.hours.map((h) => (
                    <li key={h.label}>
                      {h.label} <span className="text-background/90">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className={`flex flex-col gap-3 ${withMap ? "lg:col-start-1" : ""}`}>
              <div className="grid grid-cols-2 gap-3 max-w-[340px]">
                <a href={loc.pickupUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Pickup
                  <span className="sr-only"> from {loc.name} (opens in new tab)</span>
                </a>
                <a href={loc.deliveryUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  Delivery
                  <span className="sr-only"> from {loc.name} (opens in new tab)</span>
                </a>
              </div>
              <div className="flex gap-5 text-[14px]">
                <a href={loc.mapsUrl} target="_blank" rel="noopener noreferrer" className={link}>
                  Directions
                  <span className="sr-only"> to {loc.name} (opens in new tab)</span>
                </a>
                <a href={loc.instagramUrl} target="_blank" rel="noopener noreferrer" className={link}>
                  {loc.instagram}
                </a>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
