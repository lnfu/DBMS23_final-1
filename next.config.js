/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverComponentsExternalPackages: ["mysql2"], // 加入這行才能用，但我不知道為什麼...
}

module.exports = nextConfig
