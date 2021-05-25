module.exports = {
    purge: ['./pages/**/*.tsx', './styles/**/*.css'],
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
};

//Der wechsel beim Profilebutton von weiß auf Schwarz.
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
        cyan: colors.cyan,
      },
    },
  },
  variants: {
    fill: ['hover', 'focus'],
  },
  plugins: [],
}