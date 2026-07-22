import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow local /public images and remote sources if needed
    remotePatterns: [],
  },
};

export default nextConfig;

