module.exports = {
  rules: {
    /*
     * https://cn.eslint.org/docs/rules/accessor-pairs
     * enforces getter/setter pairs in objects
     * 强制 getter 和 setter 在对象中成对出现
     */
    'accessor-pairs': 'error',

    /*
     * https://cn.eslint.org/docs/rules/array-callback-return
     * enforces return statements in callbacks of array's methods
     * 强制数组方法的回调函数中有 return 语句
     */
    'array-callback-return': [ 'error', { allowImplicit: false } ],

    /*
     * https://cn.eslint.org/docs/rules/block-scoped-var
     * treat var statements as if they were block scoped
     * 强制把变量的使用限制在其定义的作用域范围内
     */
    'block-scoped-var': 'error',

    /*
     * https://cn.eslint.org/docs/rules/class-methods-use-this
     * enforce that class methods use "this"
     * 强制类方法使用 this
     */
    'class-methods-use-this': [ 'error', {
      exceptMethods: [],
    } ],

    /*
     * https://cn.eslint.org/docs/rules/complexity
     * specify the maximum cyclomatic complexity allowed in a program
     * 指定程序中允许的最大环路复杂度
     */
    complexity: [ 'error', 11 ],

    /*
     * https://cn.eslint.org/docs/rules/consistent-return
     * require return statements to either always or never specify values
     * 要求 return 语句要么总是指定返回的值，要么不指定
     */
    'consistent-return': 'error',

    /*
     * https://cn.eslint.org/docs/rules/curly
     * specify curly brace conventions for all control statements
     * 强制所有控制语句使用一致的括号风格
     */
    curly: [ 'error', 'all' ],

    /*
     * https://cn.eslint.org/docs/rules/default-case
     * require default case in switch statements
     * 要求 switch 语句中有 default 分支
     */
    'default-case': [ 'error', { commentPattern: '^no default$' } ],

    /*
     * https://cn.eslint.org/docs/rules/dot-location
     * enforces consistent newlines before or after dots
     * 强制在点号之前和之后一致的换行
     */
    'dot-location': [ 'error', 'property' ],

    /*
     * https://cn.eslint.org/docs/rules/dot-notation
     * encourages use of dot notation whenever possible
     * 强制尽可能地使用点号
     */
    'dot-notation': [ 'error', { allowKeywords: true } ],

    /*
     * https://cn.eslint.org/docs/rules/eqeqeq
     * require the use of === and !==
     * 要求使用 === 和 !==
     * 除了与 null 字面量进行比较时，总是强制使用绝对相
     */
    eqeqeq: [ 'error', 'always', { null: 'ignore' } ],

    /*
     * https://cn.eslint.org/docs/rules/guard-for-in
     * make sure for-in loops have an if statement
     * 要求 for-in 循环中有一个 if 语句
     */
    'guard-for-in': 'error',

    /*
     * https://cn.eslint.org/docs/rules/max-classes-per-file
     * enforce a maximum number of classes per file
     * 强制每个文件中包含的的类的最大数量
     */
    'max-classes-per-file': [ 'error', 1 ],

    /*
     * https://cn.eslint.org/docs/rules/no-alert
     * disallow the use of alert, confirm, and prompt
     * 禁用 alert、confirm 和 prompt
     */
    'no-alert': 'warn',

    /*
     * https://cn.eslint.org/docs/rules/no-caller
     * disallow use of arguments.caller or arguments.callee
     * 禁用 arguments.caller 或 arguments.callee
     */
    'no-caller': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-case-declarations
     * disallow lexical declarations in case/default clauses
     * 不允许在 case 子句中使用词法声明
     */
    'no-case-declarations': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-div-regex
     * disallow division operators explicitly at beginning of regular expression
     * 禁止除法操作符显式的出现在正则表达式开始的位置
     */
    'no-div-regex': 'off',

    /*
     * https://cn.eslint.org/docs/rules/no-else-return
     * disallow else after a return in an if
     * 禁止 if 语句中 return 语句之后有 else 块
     */
    'no-else-return': [ 'error', { allowElseIf: false } ],

    /*
     * https://cn.eslint.org/docs/rules/no-empty-function
     * disallow empty functions, except for standalone funcs/arrows
     * 禁止出现空函数
     * 除了常规函数、箭头函数、类方法和对象的方法简写
     */
    'no-empty-function': [ 'error', {
      allow: [
        'arrowFunctions',
        'functions',
        'methods',
      ],
    } ],

    /*
     * https://cn.eslint.org/docs/rules/no-empty-pattern
     * disallow empty destructuring patterns
     * 禁止使用空解构模式
     */
    'no-empty-pattern': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-eq-null
     * disallow comparisons to null without a type-checking operator
     * 禁止在没有类型检查操作符的情况下与 null 进行比较
     */
    'no-eq-null': 'off',

    /*
     * https://cn.eslint.org/docs/rules/no-eval
     * disallow use of eval()
     * 禁用 eval()
     */
    'no-eval': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-extend-native
     * disallow adding to native types
     * 禁止扩展原生类型
     */
    'no-extend-native': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-extra-bind
     * disallow unnecessary function binding
     * 禁止不必要的 .bind() 调用
     */
    'no-extra-bind': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-extra-label
     * disallow Unnecessary Labels
     * 禁用不必要的标签
     */
    'no-extra-label': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-fallthrough
     * disallow fallthrough of case statements
     * 禁止 case 语句落空
     */
    'no-fallthrough': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-floating-decimal
     * disallow the use of leading or trailing decimal points in numeric literals
     * 禁止数字字面量中使用前导和末尾小数点
     */
    'no-floating-decimal': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-global-assign
     * disallow reassignments of native objects or read-only globals
     * 禁止对原生对象或只读的全局对象进行赋值
     */
    'no-global-assign': [ 'error', { exceptions: [] } ],

    /*
     * https://cn.eslint.org/docs/rules/no-implicit-coercion
     * disallow implicit type conversions
     * 禁止使用短符号进行类型转换
     */
    'no-implicit-coercion': [ 'off', {
      boolean: true,
      number: true,
      string: true,
      allow: [],
    } ],

    /*
     * https://cn.eslint.org/docs/rules/no-implicit-globals
     * disallow var and named functions in global scope
     * 禁止在全局范围内使用变量声明和 function 声明
     * 该规则不适用于 ES 和 CommonJS 的模块，因为它们有自己的模块作用域
     */
    'no-implicit-globals': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-implied-eval
     * disallow use of eval()-like methods
     * 禁止使用类似 eval() 的方法
     */
    'no-implied-eval': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-invalid-this
     * disallow this keywords outside of classes or class-like objects
     * 禁止 this 关键字出现在类和类对象之外
     */
    'no-invalid-this': 'off',

    /*
     * https://cn.eslint.org/docs/rules/no-iterator
     * disallow usage of __iterator__ property
     * 禁用 __iterator__ 属性
     */
    'no-iterator': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-labels
     * disallow use of labels for anything other then loops and switches
     * 禁用标签语句
     */
    'no-labels': [ 'error', { allowLoop: false, allowSwitch: false } ],


    /*
     * https://cn.eslint.org/docs/rules/no-lone-blocks
     * disallow unnecessary nested blocks
     * 禁用不必要的嵌套块
     */
    'no-lone-blocks': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-loop-func
     * disallow creation of functions within loops
     * 禁止在循环语句中出现包含不安全引用的函数声明
     */
    'no-loop-func': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-magic-numbers
     * disallow magic numbers
     * 禁用魔术数字
     */
    'no-magic-numbers': [ 'off', {
      ignore: [],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false,
    } ],

    /*
     * https://cn.eslint.org/docs/rules/no-multi-spaces
     * disallow use of multiple spaces
     * 禁止使用多个空格
     */
    'no-multi-spaces': [ 'error', {
      ignoreEOLComments: false,
    } ],

    /*
     * https://cn.eslint.org/docs/rules/no-multi-str
     * disallow use of multiline strings
     * 禁止使用多行字符串
     */
    'no-multi-str': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-new
     * disallow use of new operator when not part of the assignment or comparison
     * 禁止使用 new 以避免产生副作用
     */
    'no-new': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-new-func
     * disallow use of new operator for Function object
     * 禁止对 Function 对象使用 new 操作符
     */
    'no-new-func': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-new-wrappers
     * disallows creating new instances of String, Number, and Boolean
     * 禁止对 String，Number 和 Boolean 使用 new 操作符
     */
    'no-new-wrappers': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-octal
     * disallow use of (old style) octal literals
     * 禁用八进制字面量
     */
    'no-octal': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-octal-escape
     * disallow use of octal escape sequences in string literals, such as
     * var foo = 'Copyright \251';
     * 禁止在字符串中使用八进制转义序列
     */
    'no-octal-escape': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-param-reassign
     * disallow reassignment of function parameters
     * disallow parameter object manipulation except for specific exclusions
     * 禁止对 function 的参数进行重新赋值
     */
    'no-param-reassign': [ 'error', {
      props: false,
    } ],

    /*
     * https://cn.eslint.org/docs/rules/no-proto
     * disallow usage of __proto__ property
     * 禁用 __proto__ 属性
     */
    'no-proto': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-redeclare
     * disallow declaring the same variable more then once
     * 禁止多次声明同一变量
     */
    'no-redeclare': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-restricted-properties
     * disallow certain object properties
     * 禁止使用对象的某些属性
     */
    /* eslint-disable sonarjs/no-duplicate-string */
    'no-restricted-properties': [ 'error', {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated',
    }, {
      object: 'global',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    }, {
      object: 'self',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    }, {
      object: 'window',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    }, {
      object: 'global',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    }, {
      object: 'self',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    }, {
      object: 'window',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    }, {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.',
    }, {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.',
    }, {
      object: 'Math',
      property: 'pow',
      message: 'Use the exponentiation operator (**) instead.',
    } ],
    /* eslint-enable sonarjs/no-duplicate-string */

    /*
     * https://cn.eslint.org/docs/rules/no-return-assign
     * disallow use of assignment in return statement
     * 禁止在 return 语句中使用赋值语句
     */
    'no-return-assign': [ 'error', 'always' ],

    /*
     * https://cn.eslint.org/docs/rules/no-return-await
     * disallow redundant `return await`
     * 禁用不必要的 return await
     */
    'no-return-await': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-script-url
     * disallow use of `javascript:` urls.
     * 禁止使用 javascript: url
     */
    'no-script-url': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-self-assign
     * disallow self assignment
     * 禁止自我赋值
     */
    'no-self-assign': [ 'error', {
      props: true,
    } ],

    /*
     * https://cn.eslint.org/docs/rules/no-self-compare
     * disallow comparisons where both sides are exactly the same
     * 禁止自身比较
     */
    'no-self-compare': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-sequences
     * disallow use of comma operator
     * 禁用逗号操作符
     */
    'no-sequences': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-throw-literal
     * restrict what can be thrown as an exception
     * 禁止抛出异常字面量
     */
    'no-throw-literal': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-unmodified-loop-condition
     * disallow unmodified conditions of loops
     * 禁用一成不变的循环条件
     */
    'no-unmodified-loop-condition': 'warn',

    /*
     * https://cn.eslint.org/docs/rules/no-unused-expressions
     * disallow usage of expressions in statement position
     * 禁止出现未使用过的表达式
     */
    'no-unused-expressions': [ 'error', {
      allowShortCircuit: false,
      allowTernary: false,
      allowTaggedTemplates: false,
    } ],

    /*
     * https://cn.eslint.org/docs/rules/no-unused-labels
     * disallow unused labels
     * 禁用出现未使用过的标签
     */
    'no-unused-labels': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-useless-call
     * disallow unnecessary .call() and .apply()
     * 禁止不必要的 .call() 和 .apply()
     */
    'no-useless-call': 'warn',

    /*
     * https://cn.eslint.org/docs/rules/no-useless-catch
     * Disallow unnecessary catch clauses
     * 禁止不必要的 catch 子句
     */
    'no-useless-catch': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-useless-concat
     * disallow useless string concatenation
     * 禁止不必要的字符串字面量或模板字面量的连接
     */
    'no-useless-concat': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-useless-escape
     * disallow unnecessary string escaping
     * 禁用不必要的转义字符
     */
    'no-useless-escape': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-useless-return
     * disallow redundant return; keywords
     * 禁止多余的 return 语句
     */
    'no-useless-return': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-void
     * disallow use of void operator
     * 禁用 void 操作符
     */
    'no-void': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-warning-comments
     * disallow usage of configurable warning terms in comments: e.g. todo
     * 禁止在注释中使用特定的警告术语
     */
    'no-warning-comments': [ 'off', { terms: [ 'todo', 'fixme', 'xxx' ], location: 'start' } ],

    /*
     * https://cn.eslint.org/docs/rules/
     * disallow use of the with statement
     * 禁用 with 语句
     */
    'no-with': 'error',

    /*
     * https://cn.eslint.org/docs/rules/prefer-named-capture-group
     * Suggest using named capture group in regular expression
     * 建议在正则表达式中使用命名捕获组
     */
    'prefer-named-capture-group': 'off',

    /*
     * https://cn.eslint.org/docs/rules/prefer-promise-reject-errors
     * require using Error objects as Promise rejection reasons
     * 要求使用 Error 对象作为 Promise 拒绝的原因
     */
    'prefer-promise-reject-errors': [ 'error', { allowEmptyReject: true } ],

    /*
     * https://cn.eslint.org/docs/rules/radix
     * require use of the second argument for parseInt()
     * 强制在 parseInt() 使用基数参数
     */
    radix: 'error',

    /*
     * https://cn.eslint.org/docs/rules/require-await
     * require `await` in `async function` (note: this is a horrible rule that should never be used)
     * 禁止使用不带 await 表达式的 async 函数
     */
    'require-await': 'off',

    /*
     * https://cn.eslint.org/docs/rules/require-unicode-regexp
     * Enforce the use of u flag on RegExp
     * 强制在 RegExp 上使用 u 标志
     */
    'require-unicode-regexp': 'off',

    /*
     * https://cn.eslint.org/docs/rules/vars-on-top
     * requires to declare all vars on top of their containing scope
     * 要求所有的 var 声明出现在它们所在的作用域顶部
     */
    'vars-on-top': 'error',

    /*
     * https://cn.eslint.org/docs/rules/wrap-iife
     * require immediate function invocation to be wrapped in parentheses
     * 要求 IIFE 使用括号括起来
     */
    'wrap-iife': [ 'error', 'outside', { functionPrototypeMethods: false } ],

    /*
     * https://cn.eslint.org/docs/rules/yoda
     * require or disallow Yoda conditions
     * 要求或禁止 “Yoda” 条件
     */
    yoda: 'error',
  },
}
