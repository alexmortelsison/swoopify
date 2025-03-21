import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tinder.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
