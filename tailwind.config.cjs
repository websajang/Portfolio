/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'dutch-white': '#e1dabd',
      'green-crayola': '#d0e37f',
      'red': '#d1603d',
      'laurel': '#95a78d',
      'bone': '#c8c6af'
    },
    fontFamily: {
      'montserrat': ['Montserrat, Lato, sans-serif'],
      'lexend': ['Lexend, Lato, sans-serif']
    },
    extend: {},
  },
  plugins: [],
}