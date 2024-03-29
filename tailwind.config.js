/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    colors: {
      base: {
        white: "#fff",
        black: "#000",
      },
      primary: {
        100: "#54606d",
        200: "#414850",
        300: "#373c42",
        400: "#2a2f35",
        500: "#1a2733",
        600: "#15202B",
      },
      razz: {
        100: "#fbb2c4",
        200: "#fc9cb6",
        300: "#fc85a8",
        400: "#fc6b9a",
        500: "#fb4b8c",
        600: "##fa1b80",
      },
      turquoise: {
        100: "#c3f7ee",
        200: "#aff5e8",
        300: "#9bf2e2",
        400: "#86efdc",
        500: "#72edd6",
        600: "#36e5c5",
      },
      success: {
        100: "#9feacd",
        200: "#88e5c0",
        300: "#70e0b3",
        400: "#58dba7",
        500: "#40d59a",
        600: "#10cb81",
      },
      warning: {
        100: "#c3f7ee",
        200: "#aff5e8",
        300: "#9bf2e2",
        400: "#86efdc",
        500: "#72edd6",
        600: "#36e5c5",
      },
      error: {
        100: "#c3f7ee",
        200: "#aff5e8",
        300: "#9bf2e2",
        400: "#86efdc",
        500: "#72edd6",
        600: "#36e5c5",
      },
    },
    extend: {},
  },
  plugins: [],
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
};
