// Contact list shared by /privacy and /terms.
const contacts = [
  { name: "Jin Cook DTLA", address: "337 E 1st St, Los Angeles, CA 90012", phone: "(213) 577-1128", email: "hansikdtlt@jincooks.com" },
  { name: "Jin Cook Glendale", address: "310 N Brand Blvd, Glendale, CA 91203", phone: "(818) 637-7820", email: "pkuraconcept@jincooks.com" },
  { name: "Jin Cook Santa Monica", address: "3001 Wilshire Blvd Ste C, Santa Monica, CA 90403", phone: "(310) 310-8014", email: "gkfrestaurant@jincooks.com" },
];

const telHref = (phone: string) => `tel:+1${phone.replace(/\D/g, "")}`;

export default function LocationContacts() {
  return (
    <ul className="mt-3 space-y-4">
      {contacts.map((c) => (
        <li key={c.name}>
          <span className="block font-medium" style={{ color: "var(--color-text)" }}>{c.name}</span>
          <span className="block">{c.address}</span>
          <a href={telHref(c.phone)} className="block underline hover:opacity-70" style={{ color: "var(--color-text)" }}>
            {c.phone}
          </a>
          <a href={`mailto:${c.email}`} className="block break-words underline hover:opacity-70" style={{ color: "var(--color-text)" }}>
            {c.email}
          </a>
        </li>
      ))}
    </ul>
  );
}
