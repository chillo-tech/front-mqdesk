/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  output: 'standalone',
  generateEtags: false,
  env: {
    NEXT_PUBLIC_BACKEND_API_KEY: process.env.NEXT_PUBLIC_BACKEND_API_KEY,
    NEXT_PUBLIC_BACKEND_API_SECRET: process.env.NEXT_PUBLIC_BACKEND_API_SECRET,
    NEXT_PUBLIC_API_URI: process.env.NEXT_PUBLIC_API_URI
  },
  publicRuntimeConfig: {
    NEXT_PUBLIC_BACKEND_API_KEY: process.env.NEXT_PUBLIC_BACKEND_API_KEY,
    NEXT_PUBLIC_BACKEND_API_SECRET: process.env.NEXT_PUBLIC_BACKEND_API_SECRET,
    NEXT_PUBLIC_API_URI: process.env.NEXT_PUBLIC_API_URI
  },
}

export default nextConfig;
