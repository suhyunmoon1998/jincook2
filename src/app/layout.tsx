import type { Metadata } from "next";
import { Space_Grotesk, Nanum_Brush_Script, Noto_Serif_KR } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AccessibilityBar from "@/components/AccessibilityBar";
import TakeoutPrompt from "@/components/TakeoutPrompt";
import IntroVideo from "@/components/IntroVideo";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const nanumBrush = Nanum_Brush_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-nanum-brush",
  display: "swap",
});

const notoSerifKR = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-serif-kr",
  display: "swap",
});

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
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${nanumBrush.variable} ${notoSerifKR.variable}`}
    >
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
