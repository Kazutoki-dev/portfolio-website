/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_HOME_PAGE: "http://localhost:3000/home",
    NEXT_PUBLIC_PHOTO_PAGE: "http://localhost:3000/photo",
    NEXT_PUBLIC_MALTA_PAGE: "http://localhost:3000/photo/malta",
  },
};

export default nextConfig;
