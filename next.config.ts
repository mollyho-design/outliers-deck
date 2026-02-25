import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/outliers-deck',
  assetPrefix: '/outliers-deck',
  trailingSlash: true,
  devIndicators: false,
};

export default nextConfig;
