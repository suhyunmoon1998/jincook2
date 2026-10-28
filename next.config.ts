import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Menu photos hosted on the restaurant's existing Wix site (jincooks.com)
    remotePatterns: [{ protocol: "https", hostname: "static.wixstatic.com", pathname: "/media/**" }],
  },
};

export default nextConfig;
