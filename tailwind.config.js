const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: "jit",
  purge: ["./**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
          'sans': ["Roboto", 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
          },
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
  plugins: [
plugin(function({ addBase, theme }) {
      addBase({
        'body': { font: theme('font.sans') },
      })
    })
  ]
};
