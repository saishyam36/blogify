import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        // pathname is optional; not required unless you want to limit to certain paths
      },
    ],
  },
};

export default nextConfig;
