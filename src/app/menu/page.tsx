import type { Metadata } from "next";
import MenuExplorer from "@/components/MenuExplorer";
import { DEFAULT_LOCATION, isLocationId } from "@/data/locations";

export const metadata: Metadata = {
  title: "Menu | Jin Cook Korean Restaurant",
  description:
    "Soups, noodles, hot stone rice, katsu and shareables. Browse the Jin Cook menu for Glendale, Santa Monica and Downtown LA.",
};

export default async function MenuPage({
  searchParams,
}: {
  searchParams: Promise<{ location?: string | string[] }>;
}) {
  const { location } = await searchParams;
  const value = Array.isArray(location) ? location[0] : location;
  const initialLocation = isLocationId(value) ? value : DEFAULT_LOCATION;

  return <MenuExplorer initialLocation={initialLocation} />;
}
