module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  overrides: [
    {
      files: ['*.astro'],
      plugins: ['astro'],
      parser: 'astro-eslint-parser',
      env: {
        node: true,
        'astro/astro': true,
        es2020: true,
      },
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
        sourceType: 'module',
      },
      rules: {
        'astro/no-conflict-set-directives': 'error',
        'astro/no-unused-define-vars-in-style': 'error',
      },
      extends: ['plugin:astro/recommended', 'plugin:astro/jsx-a11y-recommended'],
    },
    {
      files: ['**/*.astro/*.js', '*.astro/*.js'],
      env: {
        browser: true,
        es2020: true,
      },
      parserOptions: {
        sourceType: 'module',
      },
      rules: {
        'prettier/prettier': 'off',
      },
    },
  ],
  ignorePatterns: ['*rc.js', '*.config.js', '*.d.ts'],
};
