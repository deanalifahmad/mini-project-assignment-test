/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'alerange': '#FB6908',
        'gray-1': '#E2E0E0',
        'dark': '#212121',
      },
      backgroundColor:{
        'black-t-50': 'rgba(0,0,0,0.5)',
      }
    },
  },
  plugins: [],
}
