const colors = require('tailwindcss/colors')

module.exports = {
  mode: "jit",
  purge: ["./**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#4683c8',
        offWhite: '#e3e8ef',
        darkGray: '#4c5566',
        lightGray: '#a9b3c2'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
