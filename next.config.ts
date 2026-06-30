import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  allowedDevOrigins: ['10.223.0.75'],
};

export default nextConfig;
