import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Jin Cook",
};

export default function PrivacyPage() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-10" style={{ color: "var(--color-text)", letterSpacing: "-0.02em" }}>
          Privacy Policy
        </h1>
        <div className="space-y-8 text-base leading-relaxed" style={{ color: "var(--color-muted)" }}>
          <p>Last updated: January 1, 2025</p>
          <Section title="Information We Collect">
            We collect information you provide directly to us, such as when you contact us, sign up for our newsletter, or place an order. This may include your name, email address, and message content.
          </Section>
          <Section title="How We Use Your Information">
            We use the information we collect to respond to your inquiries, send you updates you&apos;ve subscribed to, and improve our services.
          </Section>
          <Section title="Information Sharing">
            We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website.
          </Section>
          <Section title="Contact Us">
            If you have questions about this privacy policy, please contact us at{" "}
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
