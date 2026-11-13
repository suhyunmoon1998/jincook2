import { locations, type Location } from "@/data/locations";
import { SITE_URL } from "@/lib/site";

const DAYS: Record<string, string[]> = {
  "Mon–Thu": ["Monday", "Tuesday", "Wednesday", "Thursday"],
  "Fri–Sat": ["Friday", "Saturday"],
  Sun: ["Sunday"],
};

// "11:30am" -> "11:30", "12am" -> "00:00", "11pm" -> "23:00"
function to24(t: string): string {
  const m = t.match(/^(\d+)(?::(\d+))?(am|pm)$/i);
  if (!m) return t;
  let h = parseInt(m[1], 10) % 12;
  if (m[3].toLowerCase() === "pm") h += 12;
  return `${String(h).padStart(2, "0")}:${m[2] ?? "00"}`;
}

function parseAddress(address: string) {
  // "310 N Brand Blvd, Glendale, CA 91203" (the street part may contain "Ste C")
  const [street, city, stateZip] = address.split(",").map((s) => s.trim());
  const [state, zip] = stateZip.split(" ");
  return { street, city, state, zip };
}

function restaurant(loc: Location) {
  const a = parseAddress(loc.address);
  return {
    "@type": "Restaurant",
    "@id": `${SITE_URL}/contact#${loc.id}`,
    name: loc.fullName,
    url: `${SITE_URL}/contact#${loc.id}`,
    image: `${SITE_URL}/photos/food-5.jpg`,
    logo: `${SITE_URL}/logo.png`,
    telephone: `+1${loc.phone.replace(/\D/g, "")}`,
    servesCuisine: "Korean",
    keywords:
      "Korean restaurant, soondubu, soft tofu stew, 순두부, galbitang, 갈비탕, seolleongtang, 설렁탕, yukgaejang, 육개장, budae jjigae, 부대찌개, dwaeji gukbap, 돼지국밥, dolsot bibimbap, 돌솥 비빔밥, galbi jjim, 갈비찜, bulgogi, jeyuk, korean bbq, tteokbokki, korean pancake, korean dumplings, curry katsu",
    address: {
      "@type": "PostalAddress",
      streetAddress: a.street,
      addressLocality: a.city,
      addressRegion: a.state,
      postalCode: a.zip,
      addressCountry: "US",
    },
    openingHoursSpecification: loc.hours.map((h) => {
      const [open, close] = h.time.split("–");
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: DAYS[h.label],
        opens: to24(open),
        closes: to24(close),
      };
    }),
    sameAs: [loc.instagramUrl],
    potentialAction: {
      "@type": "OrderAction",
      target: { "@type": "EntryPoint", urlTemplate: loc.pickupUrl, actionPlatform: "http://schema.org/DesktopWebPlatform" },
      deliveryMethod: "http://purl.org/goodrelations/v1#DeliveryModePickUp",
    },
  };
}

export default function RestaurantJsonLd() {
  const data = { "@context": "https://schema.org", "@graph": locations.map(restaurant) };
  return (
    <script
      type="application/ld+json"
      // "<" is escaped so the JSON can never close the script tag
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
