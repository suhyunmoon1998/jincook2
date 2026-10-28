import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AccessibilityBar from "@/components/AccessibilityBar";
import TakeoutPrompt from "@/components/TakeoutPrompt";
import IntroVideo from "@/components/IntroVideo";

export const metadata: Metadata = {
  title: "Jin Cook — Authentic Korean Soul Food | Los Angeles",
  description: "Three locations. One soul. Handcrafted banchan, slow-braised meats, and flavors passed down through generations.",
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
