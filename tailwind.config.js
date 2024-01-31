/* eslint-disable no-undef */

/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "'Poppins', sans-serif",
        Lato: "'Lato', sans-serif",
        comicSans: "'Comic Neue', cursive",
      },
      backgroundImage: {
        carbohydratesBackground: "url('./src/assets/images/sixNutritions/carbohydrates.jpg')",
        homePageBg: "url('./src/assets/images/homePageBg/homePageBg.png')"
      }
    },
  },
  plugins: [],
});

