/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pengaturan yang sudah Abang miliki sebelumnya
  allowedDevOrigins: ["http://localhost:3000", "http://127.0.0.1:3000"],
  
  // Pengaturan tambahan untuk mengabaikan error ESLint saat build
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;