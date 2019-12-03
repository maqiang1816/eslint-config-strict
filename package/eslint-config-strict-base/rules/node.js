module.exports = {
  env: {
    node: true,
  },

  rules: {
    /*
     * https://cn.eslint.org/docs/rules/callback-return
     * enforce return after a callback
     * 强制返回callback函数
     */
    'callback-return': 'warn',

    /*
     * https://cn.eslint.org/docs/rules/global-require
     * require all requires be top-level
     * 要求 require() 出现在顶层模块作用域中
     */
    'global-require': 'error',

    /*
     * https://cn.eslint.org/docs/rules/handle-callback-err
     * enforces error handling in callbacks (node environment)
     * 强制回调错误处理
     */
    'handle-callback-err': 'warn',

    /*
     * https://cn.eslint.org/docs/rules/no-buffer-constructor
     * disallow use of the Buffer() constructor
     * 禁用 Buffer() 构造函数
     */
    'no-buffer-constructor': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-mixed-requires
     * disallow mixing regular variable and require declarations
     * 禁止混合常规变量声明和 require 调用
     */
    'no-mixed-requires': [ 'off', false ],

    /*
     * https://cn.eslint.org/docs/rules/no-new-require
     * disallow use of new operator with the require function
     * 禁止调用 require 时使用 new 操作符
     */
    'no-new-require': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-path-concat
     * disallow string concatenation with __dirname and __filename
     * 禁止对 __dirname 和 __filename 进行字符串连接
     */
    'no-path-concat': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-process-env
     * disallow use of process.env
     * 禁用 process.env
     */
    'no-process-env': 'off',

    /*
     * https://cn.eslint.org/docs/rules/no-process-exit
     * disallow process.exit()
     * 禁用 process.exit()
     */
    'no-process-exit': 'warn',

    /*
     * https://cn.eslint.org/docs/rules/no-restricted-modules
     * restrict usage of specified node modules
     * 禁用通过 require 加载的指定模块
     */
    'no-restricted-modules': 'off',

    /*
     * https://cn.eslint.org/docs/rules/o-sync
     * disallow use of synchronous methods (off by default)
     * 禁用同步方法
     */
    'no-sync': 'off',
  },
}
