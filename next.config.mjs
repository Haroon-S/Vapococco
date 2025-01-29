/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['backend.vapococo.com'],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['vapococo.com', '*.vapococo.com'],
    },
  },
};

export default nextConfig;
