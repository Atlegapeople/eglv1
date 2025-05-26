/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  poweredByHeader: false, // Security: Remove X-Powered-By header
  output: 'export', // Generate static HTML export
  trailingSlash: true, // Add trailing slashes to URLs
  compress: true // Performance: Enable gzip compression
  // Note: Headers are removed since they're not compatible with static export
};

export default nextConfig;