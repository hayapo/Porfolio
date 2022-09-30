/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xsm: '320px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sen: ['Sen'],
      },
      colors: {
        'bg-from': '#5D50CD',
        'bg-to': '#96B9E0',
      },
      backgroundImage: (theme) => ({
        'top-img': "url('/top_img.webp')",
        'neumo-concave': 'linear-gradient(145deg, #564db9, #675cdc)',
      }),
      animation: {
        'slide-in-left':
          'slide-in-left 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both',
        'text-focus-in':
          'text-focus-in 0.7s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both',
      },
      keyframes: {
        'slide-in-left': {
          '0%': {
            transform: 'translateX(-1000px)',
            opacity: '0',
          },
          to: {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        'text-focus-in': {
          '0%': {
            filter: 'blur(12px)',
            opacity: '0',
          },
          to: {
            filter: 'blur(0)',
            opacity: '1',
          },
        },
      },
      dropShadow: {
        'neumo-flat': ['30px 30px 60px #5249AF', '-30px -30px 60px #6E63ED'],
      },
      boxShadow: {
        'neumo-pushed': [
          'inset 30px 30px 60px #5249AF',
          'inset -30px -30px 60px #6E63ED',
        ],
      },
    },
  },
  plugins: [],
}
