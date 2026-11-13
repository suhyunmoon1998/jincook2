import type { Metadata } from "next";
import LocationBoard from "@/components/LocationBoard";

export const metadata: Metadata = {
  title: "Order Online | Jin Cook Korean Restaurant",
  description: "Order Korean soft tofu stew (순두부), galbitang, hot stone bibimbap and more for pickup or delivery from Jin Cook in Glendale, Santa Monica or Downtown LA.",
  alternates: { canonical: "/order" },
};

export default function OrderPage() {
  return (
    <div className="bg-green text-background min-h-screen pt-14 lg:pt-16">
      <div className="mx-auto max-w-8xl px-6 md:px-10 lg:px-20 pt-14 pb-20 lg:pt-20 lg:pb-28">
        <h1 className="font-brush text-[44px] lg:text-[72px] leading-[1.05]">Pick your kitchen, then order.</h1>
        <p className="mt-5 max-w-[34rem] text-[17px] leading-[1.75] text-background/85">
          Pickup goes through Toast and delivery through DoorDash. Menus and prices are shown there.
        </p>
        <div className="mt-10 lg:mt-14">
          <LocationBoard />
        </div>
      </div>
    </div>
  );
}
