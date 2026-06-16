/** @type {import('next').NextConfig} */
const nextConfig = {
  // Mengizinkan akses HMR dari semua IP di jaringan lokal agar fitur seperti animasi bisa di-load dari HP
  allowedDevOrigins: [
    "localhost",
    "127.0.0.1",
    "192.168.1.3",
    "192.168.1.*"
  ],
};

export default nextConfig;
