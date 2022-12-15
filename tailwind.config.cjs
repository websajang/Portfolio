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
      'aeroblue': '#c0f8d1',
      'laurel': '#95a78d',
      'bone': '#c8c6af'
    },
    fontFamily: {
      'montserrat': ['Montserrat, Lato, sans-serif'],
      'lexend': ['Lexend, Lato, sans-serif'],
      'press': ['Press Start 2P, sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}