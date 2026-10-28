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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const navBg = scrolled || menuOpen ? "bg-background border-b-2 border-ink" : "bg-background border-b-2 border-transparent";
  const textColor = "text-ink";
  const activeIndicator = "bg-orange";

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
            className={`h-10 lg:h-12 w-auto object-contain `}
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
                className={`relative font-grotesk text-[15px] font-medium transition-opacity duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange ${textColor} ${active ? "opacity-100" : "opacity-90 hover:opacity-100"}`}
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
            className="btn btn-primary btn-sm"
          >
            Order now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`block h-0.5 w-6 transition-all duration-200 bg-ink ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 transition-all duration-200 bg-ink ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 transition-all duration-200 bg-ink ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav aria-label="Mobile navigation" className="absolute top-14 left-0 right-0 bg-background border-b-2 border-ink px-6 py-6 flex flex-col gap-5 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-grotesk text-base font-medium text-ink py-3"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/order"
            onClick={() => setMenuOpen(false)}
            className="btn btn-primary btn-block mt-2"
          >
            Order now
          </Link>
        </nav>
      )}
    </header>
  );
}
