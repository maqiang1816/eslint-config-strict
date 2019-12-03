/*
 * @author: maqiang
 * @Date: 2019-12-03 10:36:47
 * @LastEditors: maqiang
 * @LastEditTime: 2019-12-03 11:13:52
 * @description: eslint 配置主入口
 */
module.exports = {
  extends: [
    '@xmgh/eslint-config-strict-base',
    require.resolve('./plugins/vue'),
  ],
  rules: {

  },
}
