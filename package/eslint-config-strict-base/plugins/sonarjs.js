/*
 * @author: maqiang
 * @Date: 2019-09-26 21:45:18
 * @LastEditors: maqiang
 * @LastEditTime: 2019-11-08 10:24:27
 * @description: 规则文档
 * https://github.com/SonarSource/eslint-plugin-sonarjs
 */
module.exports = {
  plugins: [ 'sonarjs' ],
  rules: {
    // bug detection
    'sonarjs/no-all-duplicated-branches': 'error',
    'sonarjs/no-element-overwrite': 'error',
    'sonarjs/no-extra-arguments': 'error',
    'sonarjs/no-identical-conditions': 'error',
    'sonarjs/no-identical-expressions': 'error',
    'sonarjs/no-one-iteration-loop': 'error',
    'sonarjs/no-use-of-empty-return-value': 'error',
    // code smell detection
    'sonarjs/cognitive-complexity': [ 'error', 15 ],
    'sonarjs/max-switch-cases': [ 'error', 10 ],
    'sonarjs/no-collapsible-if': 'error',
    'sonarjs/no-duplicate-string': [ 'error', 3 ],
    'sonarjs/no-duplicated-branches': 'error',
    'sonarjs/no-identical-functions': 'off',
    'sonarjs/no-inverted-boolean-check': 'error',
    'sonarjs/no-redundant-boolean': 'error',
    'sonarjs/no-small-switch': 'error',
    'sonarjs/no-useless-catch': 'error',
    'sonarjs/prefer-immediate-return': 'error',
    'sonarjs/prefer-object-literal': 'error',
    'sonarjs/prefer-single-boolean-return': 'error',
    'sonarjs/prefer-while': 'error',
  },
}
