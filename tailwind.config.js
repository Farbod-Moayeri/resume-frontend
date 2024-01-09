/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "mountain" : "#1B2036", 
        "sky" : "#546883", 
        "redRock" : "#6A1C29", 
        "darkRock" : "#30142A" ,
        "blueRock": "#18273E"
      },
      fontFamily: {
        Lato: ['Lato', 'sans-serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
        Source: ['Source Sans Pro', 'sans-serif'],
        Playfair: ['Playfair Display', 'serif'],
      }
    },
    safelist: ['animate-[fade-out-up_1s_ease-in-out]', 'animate-[fade-out_1s_ease-in-out]'],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui'),],
  daisyui: {
    themes: ["fantasy"],
  }
}