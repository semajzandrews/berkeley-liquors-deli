import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // single Lenis instance in dev (StrictMode double-mount fights smooth scroll)
  reactStrictMode: false,
};

export default nextConfig;
