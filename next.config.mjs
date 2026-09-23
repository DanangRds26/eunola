/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/tema/adat-jawa-coklat', // Ganti dengan path/slug dari tab yang kebuka tadi
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
