const colors = require('tailwindcss/colors')

module.exports = {
  mode: "jit",
  purge: ["./**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#4683c8',
        offwhite: '#e3e8ef'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
