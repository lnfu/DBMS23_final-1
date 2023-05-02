/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mysql2"], // 加入這行才能用，但我不知道為什麼...
  },
}

module.exports = nextConfig
