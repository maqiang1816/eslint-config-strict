/*
 * 规则文档
 * https://mysticatea.github.io/eslint-plugin-es/rules/
 */
module.exports = {
  plugins: [ 'es' ],
  parserOptions: {
    ecmaVersion: 2019,
  },
  extends: [
    'plugin:es/no-2019',
    'plugin:es/no-2018',
  ],
  rules: {
    'es/no-rest-spread-properties': 'off',
    'es/no-trailing-function-commas': 'error',
    'es/no-binary-numeric-literals': 'error',
    'es/no-octal-numeric-literals': 'error',
    'es/no-unicode-codepoint-escapes': 'error',
    // 'es/no-keyword-properties': 'warn',
  },
}
