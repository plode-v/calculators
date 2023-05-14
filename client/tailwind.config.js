/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        wix: ['Wix Madefor Display', 'sans-serif']
      },
      screens: {
        "3xl": "2200px"
      }
    },
  },
  plugins: [],
}