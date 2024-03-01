/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['lucide-react'],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "prod-files-secure.s3.us-west-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "ui-avatars.com",
      },
      {
        hostname: "pardinicidadania.com"
      }
    ],
  },
};

module.exports = nextConfig;
