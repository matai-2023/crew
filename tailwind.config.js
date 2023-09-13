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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
