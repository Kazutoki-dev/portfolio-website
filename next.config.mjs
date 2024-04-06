/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // prod
    NEXT_PUBLIC_HOME_PAGE: "https://kazutoki-dev.vercel.app/home",
    NEXT_PUBLIC_PHOTO_PAGE: "https://kazutoki-dev.vercel.app/photo",
    NEXT_PUBLIC_MALTA_PAGE: "https://kazutoki-dev.vercel.app/photo/malta",
    NEXT_PUBLIC_USA_PAGE: "https://kazutoki-dev.vercel.app/photo/usa",

    // dev
    // NEXT_PUBLIC_HOME_PAGE: "http://localhost:3000/home",
    // NEXT_PUBLIC_PHOTO_PAGE: "http://localhost:3000/photo",
    // NEXT_PUBLIC_MALTA_PAGE: "http://localhost:3000/photo/malta",
    // NEXT_PUBLIC_USA_PAGE: "http://localhost:3000/photo/usa",
  },

  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
