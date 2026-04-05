/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.NODE_ENV === "production" ? "/craftwizhub" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/craftwizhub/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
