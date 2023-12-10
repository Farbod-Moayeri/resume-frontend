/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {"mountain" : "#1B2036", "sky" : "#546883"},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui'),],
  daisyui: {
    themes: ["fantasy"],
  }
}