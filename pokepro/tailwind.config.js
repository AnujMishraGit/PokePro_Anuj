/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,jsx}',
    './components/**/*.{html,jsx}',
  ],
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
