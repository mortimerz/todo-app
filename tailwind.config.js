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
    screens: {
      // default is mobile view 375px
      // sm -> desktop view
      'sm': '376px',
    },
    // set up theme colors
    colors: {
      primary: {
        'bright-blue': '#3A7BFD',
        'check-color': 'linear-gradient(to right, #57DDFF, #C058F3)',
      },
      light: {
        // Light Theme
        'very-light-gray': '#FAFAFA',
        'very-light-grayish-blue': '#E4E5F1',
        'light-grayish-blue': '#D2D3DB',
        'dark-grayish-blue': '#9394A5',
        'very-dark-grayish-blue': '#484B6A',
      },
      dark: {
        // Dark Theme
        'very-dark-blue': '#161722',
        'very-dark-desaturated-blue': '#25273C',
        'light-grayish-blue': '#CACDE8',
        'light-grayish-blue-hover': '#E4E5F1',
        'dark-grayish-blue': '#777A92',
        'very-dark-grayish-blue': '#4D5066',
        'very-dark-grayish-blue-hover': '#393A4C',
      },
    },

  },
  plugins: [],
}
