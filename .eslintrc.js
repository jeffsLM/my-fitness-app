module.exports = {
  extends: [
    'universe/native',
    'universe/shared/typescript-analysis',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', "simple-import-sort"],
  root: true,
  rules: {
    'no-console': 1,
    'prettier/prettier': 2,
    '@typescript-eslint/no-empty-interface': 'off',
    'import/order': [
      1,
      {
        groups: ['builtin', 'external', 'internal', 'sibling', 'parent', 'index'],
        pathGroups: [
          {
            pattern: 'common',
            group: 'internal',
          },
          {
            pattern: 'components',
            group: 'internal',
          },
          {
            pattern: 'routes/ **',
            group: 'internal',
          },
          {
            pattern: 'assets/**',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['internal'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
  ignorePatterns: [".eslintrc.js", "babel.config.js", "metro.config.js"]
};
