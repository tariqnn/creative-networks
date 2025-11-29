/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone', // Optimized for production deployment
  // Enable compression
  compress: true,
  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [],
  },
  // Production optimizations
  poweredByHeader: false,
  generateEtags: true,
}

module.exports = nextConfig

