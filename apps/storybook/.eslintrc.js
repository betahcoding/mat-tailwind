/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['plugin:storybook/recommended', '@betahcoding/eslint-config/next.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
};
