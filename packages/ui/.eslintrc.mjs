export default {
  root: true,
  extends: ['@betahcoding/eslint-config/react.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.lint.json',
    tsconfigRootDir: __dirname,
  },
};
