/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
      },
      colors: {
        identifier: '#f4ab04',
        layout1: '#1A2930',
        layout2: '#C5C1C0',
        text1: '#0A1612',
        text2: '#ffffff'
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
};
