/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['yappy-evita-shamas-8c6ecf16.koyeb.app'],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['vercel.app', '*.vercel.app', 'vapococco.vercel.app'],
    },
  },
};

export default nextConfig;
