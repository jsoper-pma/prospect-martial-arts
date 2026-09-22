import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow images from external sources if needed in the future
    remotePatterns: [],
  },
  async redirects() {
    return [
      { source: "/founders", destination: "/adults", permanent: true },
      { source: "/pricing", destination: "/kids", permanent: true },
      // Do NOT put /Saturday → /saturday here: Next matches redirects
      // case-insensitively, which loops /saturday → /saturday (308).
      // Case-exact redirect lives in middleware.ts instead.
    ];
  },
};

export default nextConfig;
