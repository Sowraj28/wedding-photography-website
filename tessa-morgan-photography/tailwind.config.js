/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "serif-classic": ["Playfair Display", "Cormorant Garamond", "serif"],
        "ephesis": ["Ephesis", "cursive"],
        "cormorant": ["Cormorant Garamond", "serif"],
      },
      colors: {
        "brand-taupe": "#BBA085",
        "c1": "#E9E1D9",
      },
    },
  },
  plugins: [],
};
