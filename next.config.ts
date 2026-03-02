import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "saadurrehman.com",
      },
    ],
  },
};

export default nextConfig;
