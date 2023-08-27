/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx,scss}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      red: colors.red,
      primary: {
        1: '#E7FF54',
        2: '#445900',
      },
      secondary: {
        1: '#F5FFE8',
        2: '#EFCDCD',
        3: '#FFF7CC',
        4: '#AABCD7',
        5: '#DADECC',
      },
      gray: {
        1: '#424242',
        2: '#616161',
        3: '#757575',
        4: '#c2c2c2',
        5: '#e0e0e0',
        6: '#ededed',
        7: '#DADECC',
      },
      state: {
        info: '#9BA185',
        success: '#CCD7E7',
        warning: '#E2D177',
        error: '#EF8383',
      },
    },
    extends: {},
  },
  plugins: [],
};
