import { NextConfig } from "next";

export default {
  experimental: {
    // Used to guard against accidentally leaking SANITY_API_READ_TOKEN to the browser
    taint: true,
  },
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
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
  async rewrites() {
    return [
      {
        source: "/quem-somos",
        destination: "/about",
      },
      {
        source: "/contato",
        destination: "/contact",
      },
      {
        source: "/apresentacao-familia",
        destination: "/family",
      },
    ];
  },
} satisfies NextConfig;
