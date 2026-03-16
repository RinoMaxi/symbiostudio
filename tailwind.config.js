/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
  symbio: ['"MontserratSemiBold"', 'sans-serif'],
  connected: ['sans-serif'],
  livingmind: ['"NotoSansBold"', 'sans-serif'],
},
    },
  },
  plugins: [],
};

