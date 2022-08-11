/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

rewrites: async () => [
  {
    source: "/public/home.html",
    destination: "/pages/api/home.js",
  },
]