module.exports = {
  rules: {
    /*
     * https://cn.eslint.org/docs/rules/for-direction
     * Enforce “for” loop update clause moving the counter in the right direction
     * 强制 “for” 循环中更新子句的计数器朝着正确的方向移动
     */
    'for-direction': 'error',

    /*
     * https://cn.eslint.org/docs/rules/getter-return
     * Enforces that a return statement is present in property getters
     * 强制 getter 函数中出现 return 语句，且不能返回 undefined
     */
    'getter-return': [ 'error', { allowImplicit: false } ],

    /*
     * https://cn.eslint.org/docs/rules/no-async-promise-executor
     * disallow using an async function as a Promise executor
     * 禁止使用异步函数作为 Promise executor
     */
    'no-async-promise-executor': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-await-in-loop
     * Disallow await inside of loops
     * 禁止在循环中出现 await
     */
    'no-await-in-loop': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-compare-neg-zero
     * Disallow comparisons to negative zero
     * 禁止与 -0 进行比较
     */
    'no-compare-neg-zero': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-cond-assign
     * disallow assignment in conditional expressions
     * 禁止条件表达式中出现赋值操作符
     */
    'no-cond-assign': [ 'error', 'always' ],

    /*
     * https://cn.eslint.org/docs/rules/no-console
     * disallow use of console
     * 禁用 console
     */
    'no-console': 'warn',

    /*
     * https://cn.eslint.org/docs/rules/no-constant-condition
     * disallow use of constant expressions in conditions
     * 禁止在条件中使用常量表达式
     */
    'no-constant-condition': 'warn',

    /*
     * https://cn.eslint.org/docs/rules/no-control-regex
     * disallow control characters in regular expressions
     * 禁止在正则表达式中使用控制字符
     */
    'no-control-regex': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-debugger
     * disallow use of debugger
     * 禁用 debugger
     */
    'no-debugger': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-dupe-args
     * disallow duplicate arguments in functions
     * 禁止 function 定义中出现重名参数
     */
    'no-dupe-args': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-dupe-keys
     * disallow duplicate keys when creating object literals
     * 禁止对象字面量中出现重复的 key
     */
    'no-dupe-keys': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-duplicate-case
     * disallow a duplicate case label.
     * 禁止出现重复的 case 标签
     */
    'no-duplicate-case': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-empty
     * disallow empty statements
     * 禁止出现空语句块
     */
    'no-empty': [ 'error', { allowEmptyCatch: true } ],

    /*
     * https://cn.eslint.org/docs/rules/no-empty-character-class
     * disallow the use of empty character classes in regular expressions
     * 禁止在正则表达式中使用空字符集
     */
    'no-empty-character-class': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-ex-assign
     * disallow assigning to the exception in a catch block
     * 禁止对 catch 子句的参数重新赋值
     */
    'no-ex-assign': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-extra-boolean-cast
     * disallow double-negation boolean casts in a boolean context
     * 禁止不必要的布尔转换
     */
    'no-extra-boolean-cast': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-extra-parens
     * disallow unnecessary parentheses
     * 禁止不必要的括号
     */
    'no-extra-parens': [ 'off', 'all', {
      conditionalAssign: true,
      nestedBinaryExpressions: false,
      returnAssign: false,
      ignoreJSX: 'all', // delegate to eslint-plugin-react
      enforceForArrowConditionals: false,
    } ],

    /*
     * https://cn.eslint.org/docs/rules/no-extra-semi
     * disallow unnecessary semicolons
     * 禁止不必要的分号
     */
    'no-extra-semi': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-func-assign
     * disallow overwriting functions written as function declarations
     * 禁止对 function 声明重新赋值
     */
    'no-func-assign': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-inner-declarations
     * disallow function or variable declarations in nested blocks
     * 禁止在嵌套的块中出现变量声明或 function 声明
     */
    'no-inner-declarations': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-invalid-regexp
     * disallow invalid regular expression strings in the RegExp constructor
     * 禁止 RegExp 构造函数中存在无效的正则表达式字符串
     */
    'no-invalid-regexp': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-irregular-whitespace
     * disallow irregular whitespace outside of strings and comments
     * 禁止不规则的空白
     */
    'no-irregular-whitespace': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-misleading-character-class
     * Disallow characters which are made with multiple code points in character class syntax
     * 不允许在字符类语法中出现由多个代码点组成的字符
     */
    'no-misleading-character-class': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-obj-calls
     * disallow the use of object properties of the global object (Math and JSON) as functions
     * 禁止把全局对象作为函数调用
     */
    'no-obj-calls': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-prototype-builtins
     * disallow use of Object.prototypes builtins directly
     * 禁止直接调用 Object.prototypes 的内置属性
     */
    'no-prototype-builtins': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-regex-spaces
     * disallow multiple spaces in a regular expression literal
     * 禁止正则表达式字面量中出现多个空格
     */
    'no-regex-spaces': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-sparse-arrays
     * disallow sparse arrays
     * 禁用稀疏数组
     */
    'no-sparse-arrays': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-template-curly-in-string
     * Disallow template literal placeholder syntax in regular strings
     * 禁止在常规字符串中出现模板字面量占位符语法
     */
    'no-template-curly-in-string': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-unexpected-multiline
     * Avoid code that looks like two expressions but is actually one
     * 禁止出现令人困惑的多行表达式
     */
    'no-unexpected-multiline': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-unreachable
     * disallow unreachable statements after a return, throw, continue, or break statement
     * 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
     */
    'no-unreachable': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-unsafe-finally
     * disallow return/throw/break/continue inside finally blocks
     * 禁止在 finally 语句块中出现控制流语句
     */
    'no-unsafe-finally': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-unsafe-negation
     * disallow negating the left operand of relational operators
     * 禁止对关系运算符的左操作数使用否定操作符
     */
    'no-unsafe-negation': 'error',

    /*
     * https://cn.eslint.org/docs/rules/require-atomic-updates
     * Disallow assignments that can lead to race conditions due to usage of await or yield
     * 禁止由于 await 或 yield的使用而可能导致出现竞态条件的赋值
     */
    'require-atomic-updates': 'error',

    /*
     * https://cn.eslint.org/docs/rules/use-isnan
     * disallow comparisons with the value NaN
     * 要求使用 isNaN() 检查 NaN
     */
    'use-isnan': 'error',

    /*
     * https://cn.eslint.org/docs/rules/valid-typeof
     * ensure that the results of typeof are compared against a valid string
     * 强制 typeof 表达式与有效的字符串进行比较
     */
    'valid-typeof': [ 'error', { requireStringLiterals: true } ],
  },
}
