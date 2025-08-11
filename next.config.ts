import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/my-app" : "",
  assetPrefix: isProd ? "/my-app/" : "",
};

export default nextConfig;
