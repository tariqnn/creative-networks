/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Production-safe configuration for Hostinger Node.js hosting
  // Using 'standalone' output for optimized deployment
  // No assetPrefix or basePath - Next.js serves from root path
  output: 'standalone',
  
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
  
  // Headers for static assets (ensures proper caching)
  async headers() {
    return [
      {
        // Static chunks should be cached for performance
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Webpack chunks should be cached
        source: '/_next/webpack/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig

