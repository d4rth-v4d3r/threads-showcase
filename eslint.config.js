/* eslint-disable @typescript-eslint/no-require-imports */
const nx = require('@nx/eslint-plugin');
const ts = require('typescript-eslint');
const tailwind = require('eslint-plugin-tailwindcss');

module.exports = [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: ['**/dist'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    // Override or add rules here
    rules: {},
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: ts.parser,
      parserOptions: {
        project: ['apps/**/tsconfig.json', 'packages/**/tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
    },
  },
  {
    ignores: [
      '**/eslint.config.js',
      '**/next.config.js',
      '**/jest.config.ts',
      '**/postcss.config.js',
    ],
  },
  ...ts.configs.strictTypeChecked,
  ...tailwind.configs['flat/recommended'],
  {
    settings: {
      tailwindcss: {
        cssFiles: ['../../packages/ui/src/styles/layouts.css'],
      },
    },
  },
];
