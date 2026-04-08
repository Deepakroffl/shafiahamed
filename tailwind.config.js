/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // All JS/TS/React files in src
    "./public/index.html"          // Optional, if you have Tailwind classes in HTML
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};