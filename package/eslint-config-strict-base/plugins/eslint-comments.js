/*
 * 规则文档
 * https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/
 */
module.exports = {
  extends: [
    'plugin:eslint-comments/recommended',
  ],
  rules: {
    /*
     * https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unused-disable.html
     * disallow unused eslint-disable comments
     *  禁止未用到的规则注释
     */
    'eslint-comments/no-unused-disable': 'error',

    /*
     * https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-restricted-disable.html
     * disallow eslint-disable comments about specific rules
     * 禁止注释指定的规则
     */
    'eslint-comments/no-restricted-disable': [ 'error', 'no-undef', '*semi*' ],

    /*
     * https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-use.html
     * disallow ESLint directive-comments
     * 禁止特定的注释指令
     */
    'eslint-comments/no-use': 'off',
  },
}
