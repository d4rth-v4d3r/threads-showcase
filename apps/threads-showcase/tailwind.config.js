const {
  createGlobPatternsForDependencies,
} = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}',
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        grey: {
          15: '#D8D8E4',
          40: '#9191A8',
          100: '#292936',
        },
        content: {
          primary: '#292936',
          secondary: '#63637B',
          tertiary: '#9191A8',
          accent: '#3668FF',
        },
        background: {
          secondary: '#F4F4FA',
          sidebar: '#F9F9FA',
          body: '#FFFFFF',
          light: '#E8ECFF',
          tertiary: '#E7E7EF',
        },
        border: {
          opaque: '#E7E7EF',
        },
      },
    },
  },
  plugins: [],
};
