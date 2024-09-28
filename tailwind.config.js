const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#2DD4BF",
        zinc: {
          900: "#18181B",
          800: "#27272A",
          700: "#3f3f46",
          400: "#A1A1AA",
          300: "#D4D4D8",
          200: "#E4E4E7",
        },
      },
      gridTemplateRows: {
        auto_1fr: "auto 1fr",
      },
    },
  },
  plugins: [],
};
