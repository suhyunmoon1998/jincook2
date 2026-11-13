import type { Metadata } from "next";
import LocationBoard from "@/components/LocationBoard";

export const metadata: Metadata = {
  title: "Locations & Hours | Jin Cook Korean Restaurant",
  description: "Jin Cook Korean restaurants in Glendale (310 N Brand Blvd), Santa Monica (3001 Wilshire Blvd) and Downtown LA (337 E 1st St). Hours, phone numbers and directions.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="bg-green text-background min-h-screen pt-14 lg:pt-16">
      <div className="mx-auto max-w-8xl px-6 md:px-10 lg:px-20 pt-14 pb-20 lg:pt-20 lg:pb-28">
        <h1 className="font-brush text-[44px] lg:text-[72px] leading-[1.05]">Three kitchens in Los Angeles.</h1>
        <div className="mt-10 lg:mt-14">
          <LocationBoard withMap />
        </div>
      </div>
    </div>
  );
}
