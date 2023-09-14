/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.html', './client/**/*.[tj]sx'],
  media: false,
  theme: {
    extend: {
      colors: {
        primaryBackground: '#373CBB',
        pinkDropShadow: '#FFABF7',
        yellowPopColour: '#FFF966',
        charcoalNotBlack: '#171717',
        secondaryBackgroundWhite: '#FFFFFF',
      },
      fontFamily: {
        interReg: ['Inter', 'serif'],
        interBold: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'left-bottom-pink': '5px 5px 0px 0px #FFABF7',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-uppercase': {
          textTransform: 'uppercase',
          color: 'white',
          fontWeight: 'bold',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}
