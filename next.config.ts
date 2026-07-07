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
    ];
  },
};

export default nextConfig;
