import type { Metadata } from "next";
import LocationBoard from "@/components/LocationBoard";

export const metadata: Metadata = {
  title: "Locations | Jin Cook",
  description: "Find a Jin Cook near you in Glendale, Santa Monica, or Downtown LA.",
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
