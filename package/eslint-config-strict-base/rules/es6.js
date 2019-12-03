module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      generators: false,
      objectLiteralDuplicateProperties: false,
    },
  },

  rules: {
    /*
     * https://cn.eslint.org/docs/rules/arrow-body-style
     * enforces no braces where they can be omitted
     * 要求箭头函数体使用大括号(当大括号是可以省略的，强制不使用它们)
     */
    'arrow-body-style': [ 'error', 'as-needed', {
      requireReturnForObjectLiteral: false,
    } ],

    /*
     * https://cn.eslint.org/docs/rules/arrow-parens
     * require parens in arrow function arguments
     * 要求箭头函数的参数使用圆括号
     */
    'arrow-parens': [ 'error', 'always' ],

    /*
     * https://cn.eslint.org/docs/rules/arrow-spacing
     * require space before/after arrow function's arrow
     * 强制箭头函数的箭头前后使用一致的空格
     */
    'arrow-spacing': [ 'error', { before: true, after: true } ],

    /*
     * https://cn.eslint.org/docs/rules/constructor-super
     * verify super() callings in constructors
     * 要求在构造函数中有 super() 的调用
     */
    'constructor-super': 'error',

    /*
     * https://cn.eslint.org/docs/rules/generator-star-spacing
     * enforce the spacing around the * in generator functions
     * 强制 generator 函数中 * 号周围使用一致的空格
     */
    'generator-star-spacing': [ 'error', { before: false, after: true } ],

    /*
     * https://cn.eslint.org/docs/rules/no-class-assign
     * disallow modifying variables of class declarations
     * 禁止修改类声明的变量
     */
    'no-class-assign': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-confusing-arrow
     * disallow arrow functions where they could be confused with comparisons
     * 禁止在可能与比较操作符相混淆的地方使用箭头函数
     */
    'no-confusing-arrow': [ 'error', {
      allowParens: true,
    } ],

    /*
     * https://cn.eslint.org/docs/rules/no-const-assign
     * disallow modifying variables that are declared using const
     * 禁止修改 const 声明的变量
     */
    'no-const-assign': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-dupe-class-members
     * disallow duplicate class members
     * 禁止类成员中出现重复的名称
     */
    'no-dupe-class-members': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-duplicate-imports
     * disallow importing from the same path more than once
     * 禁止重复模块导入
     * replaced by https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
     */
    'no-duplicate-imports': 'off',

    /*
     * https://cn.eslint.org/docs/rules/no-new-symbol
     * disallow symbol constructor
     * 禁止 Symbolnew 操作符和 new 一起使用
     */
    'no-new-symbol': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-restricted-imports
     * disallow specific imports
     * 禁止使用指定的 import 加载的模块
     */
    'no-restricted-imports': [ 'off', {
      paths: [],
      patterns: [],
    } ],

    /*
     * https://cn.eslint.org/docs/rules/no-this-before-super
     * disallow to use this/super before super() calling in constructors.
     * 禁止在构造函数中，在调用 super() 之前使用 this 或 super
     */
    'no-this-before-super': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-useless-computed-key
     * disallow useless computed property keys
     * 禁止在对象中使用不必要的计算属性
     */
    'no-useless-computed-key': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-useless-constructor
     * disallow unnecessary constructor
     * 禁用不必要的构造函数
     */
    'no-useless-constructor': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-useless-rename
     * disallow renaming import, export, and destructured assignments to the same name
     * 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
     */
    'no-useless-rename': [ 'error', {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    } ],

    /*
     * https://cn.eslint.org/docs/rules/no-var
     * require let or const instead of var
     * 要求使用 let 或 const 而不是 var
     */
    'no-var': 'error',

    /*
     * https://cn.eslint.org/docs/rules/object-shorthand
     * require method and property shorthand syntax for object literals
     * 要求或禁止对象字面量中方法和属性使用简写语法
     */
    'object-shorthand': [ 'error', 'always', {
      ignoreConstructors: false,
      avoidQuotes: true,
    } ],

    /*
     * https://cn.eslint.org/docs/rules/prefer-arrow-callback
     * suggest using arrow functions as callbacks
     * 要求回调函数使用箭头函数
     */
    'prefer-arrow-callback': [ 'error', {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    } ],

    /*
     * https://cn.eslint.org/docs/rules/prefer-const
     * suggest using of const declaration for variables that are never modified after declared
     * 要求使用 const 声明那些声明后不再被修改的变量
     */
    'prefer-const': [ 'error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: true,
    } ],

    /*
     * https://cn.eslint.org/docs/rules/prefer-destructuring
     * Prefer destructuring from arrays and objects
     * 优先使用数组和对象解构
     */
    'prefer-destructuring': [ 'error', {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: true,
        object: false,
      },
    }, {
      enforceForRenamedProperties: false,
    } ],

    /*
     * https://cn.eslint.org/docs/rules/prefer-numeric-literals
     * disallow parseInt() in favor of binary, octal, and hexadecimal literals
     * 禁用对二进制，八进制和十六进制字面量使用 parseInt() 和 Number.parseInt()，ES6 原生支持
     */
    'prefer-numeric-literals': 'error',

    /*
     * https://cn.eslint.org/docs/rules/prefer-rest-params
     * use rest parameters instead of arguments
     * 要求使用剩余参数而不是 arguments
     */
    'prefer-rest-params': 'error',

    /*
     * https://cn.eslint.org/docs/rules/prefer-spread
     * suggest using the spread operator instead of .apply()
     * 要求使用扩展运算符而非 .apply()
     */
    'prefer-spread': 'error',

    /*
     * https://cn.eslint.org/docs/rules/prefer-template
     * suggest using template literals instead of string concatenation
     * 要求使用模板字面量而非字符串连接
     */
    'prefer-template': 'error',

    /*
     * https://cn.eslint.org/docs/rules/require-yield
     * disallow generator functions that do not have yield
     * 要求 generator 函数内有 yield
     */
    'require-yield': 'error',

    /*
     * https://cn.eslint.org/docs/rules/rest-spread-spacing
     * enforce spacing between object rest-spread
     * 强制剩余和扩展运算符及其表达式之间有空格
     */
    'rest-spread-spacing': [ 'error', 'never' ],

    /*
     * https://cn.eslint.org/docs/rules/sort-imports
     * import sorting
     * 强制模块内的 import 排序
     */
    'sort-imports': [ 'off', {
      ignoreCase: false,
      ignoreDeclarationSort: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: [ 'none', 'all', 'multiple', 'single' ],
    } ],

    /*
     * https://cn.eslint.org/docs/rules/symbol-description
     * require a Symbol description
     * 要求 symbol 描述
     */
    'symbol-description': 'error',

    /*
     * https://cn.eslint.org/docs/rules/template-curly-spacing
     * enforce usage of spacing in template strings
     * 要求或禁止模板字符串中的嵌入表达式周围空格的使用
     */
    'template-curly-spacing': 'error',

    /*
     * https://cn.eslint.org/docs/rules/yield-star-spacing
     * enforce spacing around the * in yield* expressions
     * 强制在 yield* 表达式中 * 周围使用空格
     */
    'yield-star-spacing': [ 'error', 'after' ],
  },
}
