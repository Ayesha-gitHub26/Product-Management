const autoprefixer = require('autoprefixer');
const { takeWhile } = require('rxjs');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', 'Times', 'serif'],
      },
    },
    plugins: [autoprefixer],
  }
}
