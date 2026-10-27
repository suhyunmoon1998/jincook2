import OpenStatus from "@/components/OpenStatus";
import { hoursLines, type Location } from "@/data/locations";

export default function LocationCard({ location }: { location: Location }) {
  const { name, fullName, address, phone, mapsUrl, mapEmbedUrl, instagram, instagramUrl, pickupUrl, deliveryUrl } = location;
  const hours = hoursLines(location);

  return (
    <article className="group flex flex-col rounded-2xl bg-ink overflow-hidden shadow-[0_4px_24px_rgba(43,36,22,0.18)] hover:shadow-[0_16px_48px_rgba(43,36,22,0.28)] transition-all duration-400">

      {/* Map — full bleed */}
      <div className="relative w-full h-[200px] overflow-hidden">
        <iframe
          src={mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Map of ${fullName}`}
          className="absolute inset-0 w-full h-full grayscale opacity-90 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
        />
        {/* Bottom gradient into card */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-ink to-transparent pointer-events-none" />
        {/* Location badge */}
        <span className="absolute top-3 left-3 font-grotesk text-[10px] font-bold uppercase tracking-[0.14em] text-background bg-orange px-2.5 py-1 rounded-full">
          {name}
        </span>
      </div>

      {/* Card body */}
      <div className="flex flex-col gap-4 px-6 pt-3 pb-6">
        <div>
          <h3 className="font-brush text-[26px] text-background leading-tight">{fullName}</h3>
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-grotesk text-[13px] text-beige/70 leading-snug">{address}</p>
          <a
            href={`tel:${phone}`}
            className="font-grotesk text-[13px] font-medium text-orange hover:text-[#f08040] transition-colors"
          >
            {phone}
          </a>
        </div>

        <div className="border-t border-beige/10 pt-3 flex flex-col gap-1">
          <div className="mb-2">
            <OpenStatus hours={hours} />
          </div>
          {hours.map((h) => (
            <p key={h} className="font-grotesk text-[12px] text-beige/65 leading-relaxed">
              {h}
            </p>
          ))}
        </div>

        <div className="flex flex-col gap-2 pt-1">
          <div className="grid grid-cols-2 gap-2">
            <a
              href={pickupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              Pickup
              <span className="sr-only"> from {name} (opens in new tab)</span>
            </a>
            <a
              href={deliveryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm"
            >
              Delivery
              <span className="sr-only"> from {name} (opens in new tab)</span>
            </a>
          </div>
          <div className="flex items-center justify-between">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-soft btn-sm"
            >
              Get Directions
              <span className="sr-only"> (opens in new tab)</span>
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-grotesk text-[11px] text-beige/65 hover:text-orange transition-colors"
            >
              {instagram}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
