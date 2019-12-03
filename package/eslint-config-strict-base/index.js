/*
 * @author: maqiang
 * @Date: 2019-09-30 14:43:16
 * @LastEditors: maqiang
 * @LastEditTime: 2019-12-03 11:12:25
 * @description: eslint 配置主入口
 */
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
    },
  },
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  plugins: [
    'json',
    'markdown',
  ],
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/es6',
    './rules/node',
    './rules/style',
    './rules/variables',
    './rules/strict',
    './rules/deprecated',
    './rules/removed',
    './plugins/imports',
    './plugins/eslint-comments',
    './plugins/es',
    './plugins/sonarjs',
    './plugins/promise',
    './plugins/node',
    './plugins/unicorn',
  ].map(require.resolve),
  rules: {
    'import/no-anonymous-default-export': 'off',
    'node/no-missing-import': 'off',
    'node/file-extension-in-import': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'development' ? 'warn' : 'error',
    'no-console': process.env.NODE_ENV === 'development' ? 'warn' : 'error',
  },
}
