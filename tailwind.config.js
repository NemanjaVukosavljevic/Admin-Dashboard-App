/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      './dist/**/*.html',
      './dist/**/*.js',
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans'],
      },
      backgroundColor: ['hover', 'lg'],
    },
  },
  variants: {},
  plugins: [],
}
