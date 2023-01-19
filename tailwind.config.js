/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maindarkblue: "#162135",
        maingold: "#D1B02C",
      }
    },
    fontFamily: {
      sans: ['"Lora"', 'sans-serif']
    }
  },
  plugins: [],
}
