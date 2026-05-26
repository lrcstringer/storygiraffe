import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: "export",   // static export → writes to /out for Cloudflare Pages
};

export default nextConfig;
