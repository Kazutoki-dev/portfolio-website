/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_HOME_PAGE: "http://localhost:3000/home",
    NEXT_PUBLIC_PHOTO_PAGE: "http://localhost:3000/photo",
    NEXT_PUBLIC_MALTA_PAGE: "http://localhost:3000/photo/malta",
    NEXT_PUBLIC_USA_PAGE: "http://localhost:3000/photo/usa",
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
