/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'planet-black': '#03110e',
        'planet-white': '#ffffff',
        'planet-blue': '#c4ebf8',
        'planet-brown': '#b14f25',
        'planet-red': '#b11823',
        'planet-purple': '#7b61ff',
      },
    },
    plugins: [],
  }
}