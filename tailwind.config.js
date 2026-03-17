/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        times: ["Times New Roman", "serif"],
      },
      colors: {
        primary: "#000000",
        whiteText: "#FFFFFF",
        grayText: "#727272",
      },
    },
  },
  plugins: [],
};