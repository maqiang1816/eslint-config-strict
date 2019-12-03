const confusingBrowserGlobals = require('confusing-browser-globals')

module.exports = {
  rules: {
    /*
     * https://cn.eslint.org/docs/rules/init-declarations
     * enforce or disallow variable initializations at definition
     * 要求或禁止 var 声明中的初始化
     */
    'init-declarations': [ 'error', 'always' ],

    /*
     * https://eslint.org/docs/rules/no-delete-var
     * disallow deletion of variables
     * 禁止删除变量
     */
    'no-delete-var': 'error',

    /*
     * https://eslint.org/docs/rules/no-label-var
     * disallow labels that share a name with a variable
     * 不允许标签与变量同名
     */
    'no-label-var': 'error',

    /*
     * https://eslint.org/docs/rules/o-restricted-globals
     * disallow specific globals
     * 禁用特定的全局变量
     */
    'no-restricted-globals': [ 'error', 'isFinite', 'isNaN' ].concat(confusingBrowserGlobals),

    /*
     * https://eslint.org/docs/rules/no-shadow
     * disallow declaration of variables already declared in the outer scope
     * 禁止变量声明与外层作用域的变量同名
     */
    'no-shadow': 'error',

    /*
     * https://eslint.org/docs/rules/o-shadow-restricted-names
     * disallow shadowing of names such as arguments
     * 禁止将标识符定义为受限的名字
     */
    'no-shadow-restricted-names': 'error',

    // https://eslint.org/docs/rules/no-undef
    // disallow use of undeclared variables unless mentioned in a /*global */ block
    // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    'no-undef': 'error',

    /*
     * https://eslint.org/docs/rules/no-undef-init
     * disallow use of undefined when initializing variables
     * 禁止将变量初始化为 undefined
     */
    'no-undef-init': 'error',

    /*
     * https://eslint.org/docs/rules/no-undefined
     * disallow use of undefined variable
     * 禁止将 undefined 作为标识符
     */
    'no-undefined': 'error',

    /*
     * https://eslint.org/docs/rules/no-unused-vars
     * disallow declaration of variables that are not used in the code
     * 禁止出现未使用过的变量
     */
    'no-unused-vars': [ 'error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true } ],

    /*
     * https://eslint.org/docs/rules/no-use-before-define
     * disallow use of variables before they are defined
     * 禁止在变量定义之前使用它们
     */
    'no-use-before-define': [ 'error', { functions: true, classes: true, variables: true } ],
  },
}
