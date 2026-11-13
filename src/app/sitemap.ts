import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/order", priority: 0.9 },
    { path: "/contact", priority: 0.9 },
    { path: "/about", priority: 0.7 },
    { path: "/privacy", priority: 0.2 },
    { path: "/terms", priority: 0.2 },
  ];
  return pages.map(({ path, priority }) => ({ url: `${SITE_URL}${path}`, priority }));
}
