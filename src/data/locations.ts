// Single source of truth for all Jin Cook locations.
// Used by the home page, /order and /contact — edit here only.

export type LocationId = "glendale" | "santa-monica" | "dtla";

export interface HoursRow {
  /** Day range, e.g. "Mon–Thu" */
  label: string;
  /** Time range, e.g. "11:30am–11pm" */
  time: string;
}

export interface Location {
  id: LocationId;
  /** Short name, used on tabs and badges */
  name: string;
  fullName: string;
  address: string;
  phone: string;
  hours: HoursRow[];
  mapsUrl: string;
  mapEmbedUrl: string;
  instagram: string;
  instagramUrl: string;
  pickupUrl: string;
  deliveryUrl: string;
}

const mapsQuery = (q: string) => encodeURIComponent(q).replace(/%20/g, "+");

function mapLinks(query: string) {
  return {
    mapsUrl: `https://maps.google.com/?q=${mapsQuery(query)}`,
    mapEmbedUrl: `https://maps.google.com/maps?q=${mapsQuery(query)}&output=embed&z=15`,
  };
}

export const locations: Location[] = [
  {
    id: "glendale",
    name: "Glendale",
    fullName: "Jin Cook Glendale",
    address: "310 N Brand Blvd, Glendale, CA 91203",
    phone: "(818) 637-7820",
    hours: [
      { label: "Mon–Thu", time: "11:30am–11pm" },
      { label: "Fri–Sat", time: "11:30am–12am" },
      { label: "Sun", time: "11:30am–11pm" },
    ],
    ...mapLinks("310 N Brand Blvd Glendale CA 91203"),
    instagram: "@jincook_glendale",
    instagramUrl: "https://www.instagram.com/jincook_glendale/",
    pickupUrl: "https://order.toasttab.com/online/jincook",
    deliveryUrl: "https://www.doordash.com/store/1027295?src=yp&delivery=true",
  },
  {
    id: "santa-monica",
    name: "Santa Monica",
    fullName: "Jin Cook Santa Monica",
    // NOTE: Google lists this as "Unit 103"; the live site and Franki list "Suite C".
    // Kept as on the live site until the owner confirms the unit.
    address: "3001 Wilshire Blvd Ste C, Santa Monica, CA 90403",
    phone: "(310) 310-8014",
    hours: [
      { label: "Mon–Thu", time: "11:30am–10:30pm" },
      { label: "Fri–Sat", time: "11:30am–12am" },
      { label: "Sun", time: "11:30am–9:30pm" },
    ],
    ...mapLinks("3001 Wilshire Blvd Santa Monica CA 90403"),
    instagram: "@jincook_santamonica",
    instagramUrl: "https://www.instagram.com/jincook_santamonica/",
    pickupUrl: "https://order.toasttab.com/online/jincook-santa-monica",
    deliveryUrl: "https://www.doordash.com/store/jin-cook-santa-monica-30742940/42525556/?delivery=true",
  },
  {
    id: "dtla",
    name: "Downtown LA",
    fullName: "Jin Cook Downtown LA",
    address: "337 E 1st St, Los Angeles, CA 90012",
    phone: "(213) 577-1128",
    hours: [
      { label: "Mon–Thu", time: "11:30am–10:30pm" },
      { label: "Fri–Sat", time: "11:30am–12am" },
      { label: "Sun", time: "11:30am–10:30pm" },
    ],
    ...mapLinks("337 E 1st St Los Angeles CA 90012"),
    instagram: "@jincookdtla",
    instagramUrl: "https://www.instagram.com/jincookdtla",
    pickupUrl: "https://order.toasttab.com/online/jincook-dtlt",
    deliveryUrl: "https://www.doordash.com/store/jin-cook-los-angeles-33243959/57819146/?delivery=true",
  },
];

export const DEFAULT_LOCATION: LocationId = "glendale";

export function isLocationId(value: unknown): value is LocationId {
  return locations.some((l) => l.id === value);
}

export function getLocation(id: LocationId): Location {
  return locations.find((l) => l.id === id) ?? locations[0];
}

/** "Mon–Thu 11:30am–11pm" style lines, as consumed by <OpenStatus /> */
export function hoursLines(loc: Location): string[] {
  return loc.hours.map((h) => `${h.label} ${h.time}`);
}
