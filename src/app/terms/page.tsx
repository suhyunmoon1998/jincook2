import type { Metadata } from "next";
import LocationContacts from "@/components/LocationContacts";

export const metadata: Metadata = {
  title: "Terms of Service | Jin Cook",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-10" style={{ color: "var(--color-text)", letterSpacing: "-0.02em" }}>
          Terms of Service
        </h1>
        <div className="space-y-8 text-base leading-relaxed" style={{ color: "var(--color-muted)" }}>
          <p>Last updated: November 10, 2026</p>
          <Section title="Use of This Website">
            By accessing this website, you agree to use it only for lawful purposes and in a way that does not infringe the rights of others.
          </Section>
          <Section title="Content">
            All content on this website, including text, images, and logos, is the property of Jin Cook and may not be used without written permission.
          </Section>
          <Section title="SMS Messaging">
            Jin Cook sends text messages only to customers who request them during a phone call to one of our locations, such as our online ordering link. By requesting a text, you agree to receive messages from Jin Cook at the number you provide.
            <ul className="mt-3 list-disc pl-5 space-y-1">
              <li>Message frequency varies; typically one message per request.</li>
              <li>Message and data rates may apply.</li>
              <li>Reply STOP to unsubscribe at any time. Reply HELP for help.</li>
              <li>Carriers are not liable for delayed or undelivered messages.</li>
              <li>Consent to receive text messages is not a condition of purchase.</li>
            </ul>
          </Section>
          <Section title="Disclaimer">
            Jin Cook provides this website &quot;as is&quot; without any representations or warranties. Menu items, prices, and hours are subject to change without notice.
          </Section>
          <Section title="Contact Us">
            For questions about these terms, please contact the location nearest you:
            <LocationContacts />
          </Section>
        </div>
      </div>
    </section>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2" style={{ color: "var(--color-text)" }}>{title}</h2>
      <div>{children}</div>
    </div>
  );
}
