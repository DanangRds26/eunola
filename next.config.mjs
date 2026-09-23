/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/nama-route-asli', // Ganti dengan path/slug dari tab yang kebuka tadi
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
