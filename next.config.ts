import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/test-next-deploy" : "",
  assetPrefix: isProd ? "/test-next-deploy/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
