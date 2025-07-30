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
        lato: ['Lato', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
        playwrite: ["Playwrite PL", 'cursive'],
        vibur: ["Vibur", 'cursive'],
        delius: ["Delius", 'cursive'],
        playwriteit: ["Playwrite IT Moderna", 'cursive'],
        stylescript: ["Style Script", 'cursive'],
        petitformal: ["Petit Formal Script", 'cursive'],
        nunito: ["Nunito", 'sans-serif'],
        mulish: ["Mulish", 'sans-serif'],
        quicksand: ["Quicksand", 'cursive']

    },
  },
},
  plugins: [],
}

