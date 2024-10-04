/* eslint-disable @typescript-eslint/no-require-imports */
const nx = require('@nx/eslint-plugin');
const ts = require('typescript-eslint');

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
    ignores: [
      '**/eslint.config.js',
      '**/next.config.js',
      '**/jest.config.ts',
      '**/postcss.config.js',
      '**/tailwind.config.js',
      '**/webpack.config.js',
    ],
  },
  ...ts.configs.strictTypeChecked.map((config) => ({
    ...config,
    languageOptions: {
      parser: ts.parser,
      parserOptions: {
        project: [
          'apps/**/tsconfig.json',
          'apps/**/tsconfig.*.json',
          'packages/**/tsconfig.json',
          'packages/**/tsconfig.*.json',
        ],
        tsconfigRootDir: __dirname,
      },
    },
  })),
];
