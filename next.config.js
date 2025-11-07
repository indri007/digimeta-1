/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  
  // Performance optimizations
  swcMinify: true,
  
  // Image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Trailing slash for better compatibility
  trailingSlash: true,
}

module.exports = nextConfig
