/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    CLIENT_ID: process.env.CLIENT_ID,
    API_KEY: process.env.API_KEY,
    AUTH_BASE_URL: process.env.AUTH_BASE_URL,
    BASE_URL: process.env.BASE_URL,
    CURSOR: process.env.CURSOR
  },
  images: {
    domains: ['static-cdn.jtvnw.net']
  }
}

export default nextConfig
