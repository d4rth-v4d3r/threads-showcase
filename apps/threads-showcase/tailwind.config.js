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
          0: '#FCFCFF',
          5: '#F4F4FA',
          10: '#E7E7EF',
          15: '#D8D8E4',
          30: '#ACACC0',
          40: '#9191A8',
          100: '#292936',
        },
        content: {
          primary: '#292936',
          secondary: '#63637B',
          tertiary: '#9191A8',
          accent: '#3668FF',
          inverse: {
            primary: '#FFFFFF',
          },
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
        banner: {
          primary: '#423CB9',
          secondary: '#7874D2',
        },
      },
    },
  },
  plugins: [],
};
