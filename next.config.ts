import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'static.cdn-luma.com',
      }
    ],
  },
  experimental: {
    allowedDevOrigins: ['127.0.2.2', 'localhost:3000'],
  }
};

export default nextConfig;
