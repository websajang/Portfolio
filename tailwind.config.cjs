/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'dutch-white': '#e1dabd'
    },
    fontFamily: {
      'montserrat': ['Montserrat, Lato, sans-serif'],
      'lexend': ['Lexend, Lato, sans-serif']
    },
    extend: {},
  },
  plugins: [],
}