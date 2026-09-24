/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  //async redirects() {
    //return [
      //{
        //source: '/',
        //destination: '/tema/adat-jawa-coklat/preview',
        //permanent: false,
      //},
    //];
  //},
};

export default nextConfig;