/** @type {import('tailwindcss').Config} */
module.exports = {
  content : ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors : {
        'ashGray' : '#B2BEB5',
        'blueGray' : '#7393B3',
        'charcoal' : '#36454F',
        'darkGray' : '#A9A9A9',
      }
    },
  },
  plugins: [],
}
