import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AccessibilityBar from "@/components/AccessibilityBar";
import TakeoutPrompt from "@/components/TakeoutPrompt";
import IntroVideo from "@/components/IntroVideo";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Jin Cook | Korean Restaurant in Glendale, Santa Monica & Downtown LA",
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    url: "/",
    title: "Jin Cook | Korean Restaurant in Glendale, Santa Monica & Downtown LA",
    description: SITE_DESCRIPTION,
    images: [{ url: "/photos/food-5.jpg", width: 1200, height: 1200, alt: "Curry katsu served on a hot stone at Jin Cook" }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background font-grotesk text-ink">
        <a
          href="#main"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-0 focus-visible:left-0 focus-visible:z-[100] focus-visible:bg-orange focus-visible:text-ink focus-visible:px-4 focus-visible:py-2 focus-visible:font-grotesk focus-visible:text-sm focus-visible:font-semibold"
        >
          Skip to main content
        </a>
        <IntroVideo />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <AccessibilityBar />
        <TakeoutPrompt />
      </body>
    </html>
  );
}
