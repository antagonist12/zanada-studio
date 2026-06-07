import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Static files with the same filename are cached by the image optimizer.
    unoptimized: process.env.NODE_ENV === "development",
  },
};

export default nextConfig;
