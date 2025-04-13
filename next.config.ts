import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  eslint: {
    dirs: ['app'],
    // TODO: do not ignore
    ignoreDuringBuilds: true
  },
  images: {
    remotePatterns: [new URL('https://image.tmdb.org/t/p/original/*')],
    minimumCacheTTL: 2678400, // 31 days
  },
}

export default nextConfig
