// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 👈 enables `out/` folder
  images: {
    unoptimized: true, // 👈 required because next/image needs server otherwise
  },
};

export default nextConfig;
