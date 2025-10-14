import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
  trailingSlash: true,
  reactStrictMode: false,
  poweredByHeader: false,
  compress: true,
  // チャンクエラーを防ぐ設定
  webpack: (config) => {
    config.optimization.splitChunks = false;
    config.optimization.runtimeChunk = false;
    return config;
  },
};

export default nextConfig;
