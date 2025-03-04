/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-black': '#242422',
        'light-beige': '#e2dfce',
        'white': '#ffffff',
        'muted-beige': '#d4d1c0',
        'soft-white': '#f2f2f2',
        'dark-gray': '#343432',
      },
    },
  },
  plugins: [],
} 