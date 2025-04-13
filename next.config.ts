import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://image.tmdb.org/t/p/original/*')],
    minimumCacheTTL: 2678400, // 31 days
  },
}

export default nextConfig
