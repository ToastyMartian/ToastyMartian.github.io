const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'backdrop': "url('../img/wallpaper2.jpg')",
      }),
      maxWidth: {
        '1/10': '10%',
        '1/5': '20%',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '2/5': '40%',
        '1/3': '33.33%'
      }
    },
    colors: {
      // Build your palette here
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.lightBlue,
      yellow: colors.amber,
      green: colors.lime,
      black: colors.black,
      cyan: {
        light: '#0BAFB8', //gradient light
        DEFAULT: '#87beff', //icons blue
        medium: '#1655BE', //gradient dark
        dark: '#071440' //card bg

      },
      purple: {
        light: '#4B4A74', //faded text
        DEFAULT: '#570082',
        dark: '#1a0629'
      }
    },
    fontFamily: {
      'overpass': ['Overpass']
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '1rem',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.3xl') },
        'h2': { fontSize: theme('fontSize.2xl') },
        'h3': { fontSize: theme('fontSize.xl') },
        'h4': { fontSize: theme('fontSize.lg') }
      })
    }),
    require('@tailwindcss/typography'),
  ],
}
