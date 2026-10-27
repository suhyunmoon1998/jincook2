"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import OpenStatus from "@/components/OpenStatus";
import {
  getLocation,
  hoursLines,
  locations,
  type LocationId,
} from "@/data/locations";
import { itemsFor, menuCategories, type MenuCategory } from "@/data/menu";

const accentClass: Record<MenuCategory["accent"], string> = {
  orange: "border-orange",
  green: "border-green",
  sage: "border-sage",
  amber: "border-amber",
};

export default function MenuExplorer({ initialLocation }: { initialLocation: LocationId }) {
  const [locationId, setLocationId] = useState<LocationId>(initialLocation);
  const [activeCategory, setActiveCategory] = useState<string>(menuCategories[0].id);
  const chipBarRef = useRef<HTMLDivElement>(null);

  const location = getLocation(locationId);
  const hours = useMemo(() => hoursLines(location), [location]);
  const items = useMemo(() => itemsFor(locationId), [locationId]);
  const categories = useMemo(
    () =>
      menuCategories
        .map((category) => ({
          category,
          items: items.filter((i) => i.category === category.id),
        }))
        .filter((group) => group.items.length > 0),
    [items],
  );

  function selectLocation(id: LocationId) {
    setLocationId(id);
    // Keep the URL shareable without triggering a navigation.
    const url = new URL(window.location.href);
    url.searchParams.set("location", id);
    window.history.replaceState(null, "", url);
  }

  // Scroll-spy: highlight the category chip for the section currently in view.
  useEffect(() => {
    const sections = categories
      .map((g) => document.getElementById(`cat-${g.category.id}`))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveCategory(visible[0].target.id.replace("cat-", ""));
      },
      { rootMargin: "-25% 0px -65% 0px" },
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [categories]);

  // Keep the active chip centred inside the horizontally scrolling bar.
  useEffect(() => {
    const bar = chipBarRef.current;
    const chip = bar?.querySelector<HTMLElement>(`[data-chip="${activeCategory}"]`);
    if (!bar || !chip) return;
    bar.scrollTo({
      left: chip.offsetLeft - bar.clientWidth / 2 + chip.clientWidth / 2,
      behavior: "smooth",
    });
  }, [activeCategory]);

  return (
    <div className="bg-background min-h-screen">
      {/* ── Header + location picker ─────────────────────── */}
      <div className="bg-ink pt-14 lg:pt-16">
        <div className="mx-auto max-w-8xl px-6 md:px-10 lg:px-20 pt-14 pb-10 lg:pt-20 lg:pb-14">
          <p className="font-grotesk text-[11px] font-bold uppercase tracking-[0.18em] text-orange mb-4">
            Our Menu
          </p>
          <h1 className="font-brush text-[48px] lg:text-[64px] text-background leading-none">
            Pick Your Jin Cook
          </h1>
          <p className="font-grotesk text-[14px] lg:text-[15px] text-beige/70 leading-relaxed mt-4 max-w-[520px]">
            Menus differ slightly by location. Choose yours to see what&apos;s cooking.
          </p>

          <div
            id="location-picker"
            role="group"
            aria-label="Choose a location"
            className="mt-8 grid grid-cols-3 gap-2 sm:gap-3 max-w-[560px] scroll-mt-20"
          >
            {locations.map((loc) => {
              const selected = loc.id === locationId;
              return (
                <button
                  key={loc.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => selectLocation(loc.id)}
                  className={`btn btn-sm min-h-11 whitespace-normal px-2 text-center leading-tight sm:px-4 ${
                    selected ? "btn-primary" : "btn-outline"
                  }`}
                >
                  {loc.name}
                </button>
              );
            })}
          </div>

          {/* Selected location summary */}
          <p role="status" className="sr-only">
            Showing the menu for {location.fullName}
          </p>
          <div className="mt-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="font-brush text-[28px] text-background leading-tight">{location.fullName}</h2>
              <p className="font-grotesk text-[13px] text-beige/70 mt-1">{location.address}</p>
              <a
                href={`tel:${location.phone}`}
                className="font-grotesk text-[13px] font-medium text-orange hover:text-[#f08040] transition-colors"
              >
                {location.phone}
              </a>
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
                <OpenStatus key={location.id} hours={hours} />
                <span className="font-grotesk text-[12px] text-beige/60">{hours[0]}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={location.pickupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                Order Pickup
                <span className="sr-only"> from {location.name} (opens in new tab)</span>
              </a>
              <a
                href={location.deliveryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-lg"
              >
                Delivery
                <span className="sr-only"> from {location.name} (opens in new tab)</span>
              </a>
            </div>
          </div>
        </div>
        <div className="stamp-edge text-orange" aria-hidden="true" />
      </div>

      {/* ── Sticky category bar ──────────────────────────── */}
      <div className="sticky top-14 lg:top-16 z-40 bg-background/95 backdrop-blur border-b border-beige">
        <div className="mx-auto max-w-8xl px-6 md:px-10 lg:px-20 flex items-center gap-3 py-3">
          <a
            href="#location-picker"
            className="btn btn-dark btn-sm shrink-0 gap-1.5 px-3"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-orange" aria-hidden="true" />
            {location.name}
            <span className="sr-only"> — change location</span>
          </a>

          <nav
            aria-label="Menu categories"
            ref={chipBarRef}
            className="no-scrollbar flex-1 flex items-center gap-2 overflow-x-auto"
          >
            {categories.map(({ category }) => {
              const active = category.id === activeCategory;
              return (
                <a
                  key={category.id}
                  href={`#cat-${category.id}`}
                  data-chip={category.id}
                  aria-current={active ? "true" : undefined}
                  className="btn btn-chip shrink-0"
                >
                  {category.label}
                </a>
              );
            })}
          </nav>

          <a
            href={location.pickupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm shrink-0"
          >
            Order
            <span className="sr-only"> pickup from {location.name} (opens in new tab)</span>
          </a>
        </div>
      </div>

      {/* ── Menu sections ────────────────────────────────── */}
      <div className="mx-auto max-w-8xl px-6 md:px-10 lg:px-20 pb-24">
        {categories.map(({ category, items: categoryItems }) => (
          <section
            key={category.id}
            id={`cat-${category.id}`}
            aria-labelledby={`cat-${category.id}-title`}
            className="scroll-mt-32 lg:scroll-mt-36 pt-12 lg:pt-16"
          >
            <div className="flex items-center gap-4">
              <span className="h-px flex-1 bg-rule" aria-hidden="true" />
              <h2
                id={`cat-${category.id}-title`}
                className="font-grotesk text-[12px] font-bold uppercase tracking-[0.3em] text-green"
              >
                {category.label}
              </h2>
              <span className="h-px flex-1 bg-rule" aria-hidden="true" />
            </div>
            <p className="text-center font-brush text-[26px] lg:text-[32px] text-ink leading-tight mt-3 mb-8">
              {category.tagline}
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {categoryItems.map((item) => (
                <li
                  key={item.id}
                  className={`flex flex-col rounded-sm bg-beige border-b-4 ${accentClass[category.accent]} p-5 lg:p-6`}
                >
                  <h3 className="font-serif-kr text-[20px] font-bold text-ink leading-tight">{item.ko}</h3>
                  <p className="font-grotesk text-[11px] font-bold uppercase tracking-[0.12em] text-green mt-1.5">
                    {item.en}
                  </p>
                  <p className="font-grotesk text-[13px] text-ink/75 leading-relaxed mt-3">{item.desc}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <p className="font-grotesk text-[12px] text-ink/60 text-center leading-relaxed mt-16 max-w-[520px] mx-auto">
          Menus differ by location — you&apos;re viewing {location.fullName}. Final availability and pricing are shown
          when you order.
        </p>
      </div>
    </div>
  );
}
