/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
      NEXT_PUBLIC_PAYPAL_CLIENT_ID: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID, // Use the same ID for public access
      PAYPAL_CLIENT_SECRET: process.env.PAYPAL_CLIENT_SECRET,
  },
};

export default nextConfig;
