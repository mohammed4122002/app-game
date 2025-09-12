import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "media.rawg.io" },
      { protocol: "http", hostname: "media.rawg.io" },
    ],
  },
};

export default nextConfig;
