import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Jin Cook",
};

export default function TermsPage() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-10" style={{ color: "var(--color-text)", letterSpacing: "-0.02em" }}>
          Terms of Service
        </h1>
        <div className="space-y-8 text-base leading-relaxed" style={{ color: "var(--color-muted)" }}>
          <p>Last updated: January 1, 2025</p>
          <Section title="Use of This Website">
            By accessing this website, you agree to use it only for lawful purposes and in a way that does not infringe the rights of others.
          </Section>
          <Section title="Content">
            All content on this website, including text, images, and logos, is the property of Jin Cook and may not be used without written permission.
          </Section>
          <Section title="Disclaimer">
            Jin Cook provides this website &quot;as is&quot; without any representations or warranties. Menu items, prices, and hours are subject to change without notice.
          </Section>
          <Section title="Contact Us">
            For questions about these terms, contact us at{" "}
            <a href="mailto:hello@jincook.com" className="underline hover:opacity-70" style={{ color: "var(--color-text)" }}>
              hello@jincook.com
            </a>.
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
      <p>{children}</p>
    </div>
  );
}
