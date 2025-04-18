/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        electric: '#00FFFF',
        viborange: '#FF8800',
        limegreen: '#32CD32',
        royalpurple: '#9B59B6',
      },
      fontFamily: {
        Lato: ['Lato', 'sans-serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
        Source: ['Source Sans Pro', 'sans-serif'],
        Playfair: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'xxs': ['0.6rem', {
          lineHeight: '0.9rem'
        } ],
      },
    },
    
    safelist: ['animate-[fade-out-up_1s_ease-in-out]', 'animate-[fade-out_1s_ease-in-out]'],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui'),],
  daisyui: {
    themes: ["fantasy"],
  }
}