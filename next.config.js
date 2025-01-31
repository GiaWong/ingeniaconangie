/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // Asegúrate de tener esta línea
  images: {
    unoptimized: true, // Deshabilita la optimización de imágenes
  },
};

module.exports = nextConfig;
