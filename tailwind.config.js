/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        lexendmega: ['Lexend Mega', 'sans-serif'],
        greatvibes: ['Great Vibes', 'cursive'],
        poiretone: ["Poiret One", "sans-serif"],
        playfairdisplay: ["Playfair Display", "serif"],
        merriweather: ["Merriweather", "serif"]
    },
  },
},
  plugins: [],
}

