/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  remotePatterns: [
    {
      protocol: 'https',
      hostname: '**.unsplash.com',
      port: '',
      pathname: '/**',
    },
  ],
};

module.exports = nextConfig;
