/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Used to guard against accidentally leaking SANITY_API_READ_TOKEN to the browser
    taint: true,
  },
  transpilePackages: ["lucide-react"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        //hostname: "prod-files-secure.s3.us-west-2.amazonaws.com",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "ui-avatars.com",
      },
      {
        hostname: "pardinicidadania.com",
      },
    ],
  },
};

module.exports = nextConfig;
