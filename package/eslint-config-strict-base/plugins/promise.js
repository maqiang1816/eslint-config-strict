/*
 * @author: maqiang
 * @Date: 2019-09-29 16:21:57
 * @LastEditors: maqiang
 * @LastEditTime: 2019-11-08 10:22:17
 * @description: 规则文档
 * https://github.com/xjamundx/eslint-plugin-promise#readme
 */

module.exports = {
  plugins: [ 'promise' ],
  rules: {
    'promise/always-return': 'off',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/catch-or-return': [ 'error', {
      allowFinally: true,
      terminationMethod: [ 'catch', 'finally' ],
    } ],
    'promise/no-native': 'off',
    'promise/no-nesting': 'warn',
    'promise/no-promise-in-callback': 'warn',
    'promise/no-callback-in-promise': 'warn',
    'promise/avoid-new': 'warn',
    'promise/no-new-statics': 'error',
    'promise/no-return-in-finally': 'warn',
    'promise/valid-params': 'warn',
    // es7
    'promise/prefer-await-to-then': 'off',
    'promise/prefer-await-to-callbacks': 'off',
  },
}
