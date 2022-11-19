/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { domains: ['images.igdb.com'], formats: ['image/avif', 'image/webp'] },
  experimental: {
    // workerThreads: false,
    // cpus: 1,
    appDir: true,
  },
}

module.exports = nextConfig
