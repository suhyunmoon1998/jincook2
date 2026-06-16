"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Locations" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Home: transparent → bg-ink on scroll; other pages: bg-background border-b border-beige always
  const navBg = isHome
    ? scrolled || menuOpen
      ? "bg-ink"
      : "bg-transparent"
    : "bg-background border-b border-beige";

  const textColor = isHome ? "text-background" : "text-ink";
  const activeIndicator = isHome ? "bg-background" : "bg-ink";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 h-14 lg:h-16 flex items-center transition-all duration-300 ${navBg}`}>
      <div className="w-full mx-auto max-w-8xl px-6 md:px-10 lg:px-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2"
        >
          <Image
            src="/logo.png"
            alt="Jin Cook"
            width={120}
            height={48}
            className={`h-10 lg:h-12 w-auto object-contain ${!isHome ? "" : "brightness-0 invert"}`}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-grotesk text-[15px] font-medium uppercase tracking-[0.03em] transition-opacity duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange ${textColor} ${active ? "opacity-100" : "opacity-90 hover:opacity-100"}`}
              >
                {link.label}
                {active && (
                  <span className={`absolute -bottom-1 left-0 right-0 h-0.5 ${activeIndicator}`} />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/order"
            className="btn-korean inline-flex items-center justify-center rounded-full px-6 py-2.5 font-grotesk text-[12px] font-bold uppercase tracking-[0.08em] text-ink active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2"
          >
            Order Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`block h-0.5 w-6 transition-all duration-200 ${isHome ? "bg-background" : "bg-ink"} ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 transition-all duration-200 ${isHome ? "bg-background" : "bg-ink"} ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 transition-all duration-200 ${isHome ? "bg-background" : "bg-ink"} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav aria-label="Mobile navigation" className="absolute top-14 left-0 right-0 bg-ink border-t border-background/10 px-6 py-6 flex flex-col gap-5 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-grotesk text-base font-medium uppercase tracking-[0.03em] text-background opacity-90 hover:opacity-100 py-1"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/order"
            onClick={() => setMenuOpen(false)}
            className="btn-korean inline-flex items-center justify-center rounded-full px-6 py-3 font-grotesk text-[13px] font-bold uppercase tracking-[0.08em] text-ink mt-2"
          >
            Order Now
          </Link>
        </nav>
      )}
    </header>
  );
}
