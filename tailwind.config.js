/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // added darkMode: `class` to enable toggling of dark/light
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}
