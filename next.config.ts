import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Menu photos hosted on the restaurant's existing Wix site (jincooks.com)
    remotePatterns: [{ protocol: "https", hostname: "static.wixstatic.com", pathname: "/media/**" }],
  },
  // The old Wix site had its menu at /menu-1; ordering now lives on /order (Toast / DoorDash).
  async redirects() {
    return [
      { source: "/menu", destination: "/order", permanent: true },
      { source: "/menu-1", destination: "/order", permanent: true },
    ];
  },
};

export default nextConfig;
