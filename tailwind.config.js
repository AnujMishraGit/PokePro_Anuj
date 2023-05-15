/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        purple: {
         50: "#6E6397",
         100: "#7D71A6",
         200: "#8373B5",
         300: "#8C74C4",
         400: "#9175D3",
         500: "#9677E2",
         600: "#A079F1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
};
