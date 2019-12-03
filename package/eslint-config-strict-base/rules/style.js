/*
 * @LastEditors: maqiang
 */

module.exports = {
  rules: {
    /*
     * https://cn.eslint.org/docs/rules/array-bracket-newline
     * enforce line breaks after opening and before closing array brackets
     * 在数组开括号后和闭括号前强制换行
     */
    'array-bracket-newline': [ 'error', 'consistent' ], // object option alternative: { multiline: true, minItems: 3 }

    /*
     * https://cn.eslint.org/docs/rules/array-element-newline
     * enforce line breaks between array elements
     * 强制数组元素间出现换行
     */
    'array-element-newline': [ 'error', 'consistent' ], // object option alternative: { multiline: true, minItems: 3 }

    /*
     * https://cn.eslint.org/docs/rules/array-bracket-spacing
     * enforce spacing inside array brackets
     * 强制数组方括号中使用一致的空格
     */
    'array-bracket-spacing': [ 'error', 'always' ],

    /*
     * https://cn.eslint.org/docs/rules/block-spacing
     * enforce spacing inside single-line blocks
     * 禁止或强制在代码块中开括号前和闭括号后有空格
     */
    'block-spacing': [ 'error', 'always' ],

    /*
     * https://cn.eslint.org/docs/rules/brace-style
     * enforce one true brace style
     * 强制在代码块中使用一致的大括号风格
     */
    'brace-style': [ 'error', '1tbs', { allowSingleLine: false } ],

    /*
     * https://cn.eslint.org/docs/rules/camelcase
     * require camel case names
     * 强制使用骆驼拼写法命名约定
     */
    camelcase: [ 'error', { properties: 'always', ignoreDestructuring: false } ],

    /*
     * https://cn.eslint.org/docs/rules/capitalized-comments
     * enforce or disallow capitalization of the first letter of a comment
     * 强制或禁止对注释的第一个字母大写
     */
    'capitalized-comments': [ 'off', 'never', {
      line: {
        ignorePattern: '.*',
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
      block: {
        ignorePattern: '.*',
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
    } ],

    /*
     * https://cn.eslint.org/docs/rules/comma-dangle
     * require trailing commas in multiline object literals
     * 要求或禁止末尾逗号
     */
    /* eslint-disable sonarjs/no-duplicate-string */
    'comma-dangle': [ 'error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    } ],
    /* eslint-enable sonarjs/no-duplicate-string */

    /*
     * https://cn.eslint.org/docs/rules/comma-spacing
     * enforce spacing before and after comma
     * 强制在逗号前后使用一致的空格
     */
    'comma-spacing': [ 'error', { before: false, after: true } ],

    /*
     * https://cn.eslint.org/docs/rules/comma-style
     * enforce one true comma style
     * 强制使用一致的逗号风格
     */
    'comma-style': [ 'error', 'last', {
      exceptions: {
        ArrayExpression: false,
        ArrayPattern: false,
        ArrowFunctionExpression: false,
        CallExpression: false,
        FunctionDeclaration: false,
        FunctionExpression: false,
        ImportDeclaration: false,
        ObjectExpression: false,
        ObjectPattern: false,
        VariableDeclaration: false,
        NewExpression: false,
      },
    } ],

    /*
     * https://cn.eslint.org/docs/rules/computed-property-spacing
     * disallow padding inside computed properties
     * 强制在计算的属性的方括号中使用一致的空格
     */
    'computed-property-spacing': [ 'error', 'never' ],

    /*
     * https://cn.eslint.org/docs/rules/consistent-this
     * enforces consistent naming when capturing the current execution context
     * 当获取当前执行环境的上下文时，强制使用一致的命名
     */
    'consistent-this': [ 'error', 'that' ],

    /*
     * https://cn.eslint.org/docs/rules/eol-last
     * enforce newline at the end of file, with no multiple empty lines
     * 要求或禁止文件末尾存在空
     */
    'eol-last': [ 'error', 'always' ],

    /*
     * https://cn.eslint.org/docs/rules/func-call-spacing
     * enforce spacing between functions and their invocations
     * 要求或禁止在函数标识符和其调用之间有空格
     */
    'func-call-spacing': [ 'error', 'never' ],

    /*
     * https://cn.eslint.org/docs/rules/func-name-matching
     * requires function names to match the name of the variable or property to which they are assigned
     * 要求函数名与赋值给它们的变量名或属性名相匹配
     */
    'func-name-matching': [ 'off', 'always', {
      includeCommonJSModuleExports: false,
      considerPropertyDescriptor: true,
    } ],

    /*
     * https://cn.eslint.org/docs/rules/func-names
     * require function expressions to have a name
     * 要求或禁止命名的 function 表达式
     */
    'func-names': [ 'warn', 'as-needed' ],

    /*
     * https://cn.eslint.org/docs/rules/func-style
     * enforces use of function declarations or expressions
     * 强制 function 声明或表达式的一致性
     */
    'func-style': [ 'warn', 'expression' ],

    /*
     * https://cn.eslint.org/docs/rules/function-paren-newline
     * enforce consistent line breaks inside function parentheses
     * 强制在函数括号内使用一致的换行
     */
    'function-paren-newline': [ 'error', 'consistent' ],

    /*
     * https://cn.eslint.org/docs/rules/id-blacklist
     * Blacklist certain identifiers to prevent them being used
     * 禁用指定的标识符
     */
    'id-blacklist': 'off',

    /*
     * https://cn.eslint.org/docs/rules/id-length
     * this option enforces minimum and maximum identifier lengths
     * (variable names, property names etc.)
     * 强制标识符的最小和最大长度
     */
    'id-length': 'off',

    /*
     * https://cn.eslint.org/docs/rules/id-match
     * require identifiers to match the provided regular expression
     * 要求标识符匹配一个指定的正则表达式
     *  [ 'off', '^[a-z]+([A-Z][a-z]+)*(\d)*$', {
     *    properties: true,
     *    onlyDeclarations: false,
     *    ignoreDestructuring: true,
     *  } ]
     */
    'id-match': 'off',

    /*
     * https://cn.eslint.org/docs/rules/implicit-arrow-linebreak
     * Enforce the location of arrow function bodies with implicit returns
     * 强制隐式返回的箭头函数体的位置
     */
    'implicit-arrow-linebreak': [ 'error', 'beside' ],

    /*
     * https://cn.eslint.org/docs/rules/indent
     * this option sets a specific tab width for your code
     * 强制使用一致的缩进
     */
    indent: [ 'error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      // MemberExpression: null,
      FunctionDeclaration: {
        parameters: 1,
        body: 1,
      },
      FunctionExpression: {
        parameters: 1,
        body: 1,
      },
      CallExpression: {
        arguments: 1,
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
      ignoredNodes: [ 'JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild' ],
      ignoreComments: false,
    } ],

    /*
     * https://cn.eslint.org/docs/rules/jsx-quotes
     * specify whether double or single quotes should be used in JSX attributes
     * 强制在 JSX 属性中一致地使用双引号或单引号
     */
    'jsx-quotes': [ 'off', 'prefer-double' ],

    /*
     * https://cn.eslint.org/docs/rules/key-spacing
     * enforces spacing between keys and values in object literal properties
     * 强制在对象字面量的属性中键和值之间使用一致的间距
     */
    'key-spacing': [ 'error', { beforeColon: false, afterColon: true } ],

    /*
     * https://cn.eslint.org/docs/rules/keyword-spacing
     * require a space before & after certain keywords
     * 强制在对象字面量的属性中键和值之间使用一致的间距
     */
    'keyword-spacing': [ 'error', {
      before: true,
      after: true,
      overrides: {
        return: { after: true },
        throw: { after: true },
        case: { after: true },
      },
    } ],

    /*
     * https://cn.eslint.org/docs/rules/line-comment-position
     * enforce position of line comments
     * 强制行注释的位置
     */
    'line-comment-position': [ 'off', {
      position: 'above',
      ignorePattern: '',
      applyDefaultIgnorePatterns: true,
    } ],

    /*
     * disallow mixed 'LF' and 'CRLF' as linebreaks
     * https://cn.eslint.org/docs/rules/linebreak-style
     * 强制使用一致的换行风格
     */
    'linebreak-style': [ 'error', 'unix' ],

    /*
     * require or disallow an empty line between class members
     * https://cn.eslint.org/docs/rules/lines-between-class-members
     * 要求或禁止类成员之间出现空行
     */
    'lines-between-class-members': [ 'error', 'always', { exceptAfterSingleLine: false } ],

    /*
     * https://cn.eslint.org/docs/rules/lines-around-comment
     * enforces empty lines around comments
     * 要求在注释周围有空行
     */
    'lines-around-comment': 'off',

    /*
     * https://cn.eslint.org/docs/rules/max-depth
     * specify the maximum depth that blocks can be nested
     * 强制可嵌套的块的最大深度
     */
    'max-depth': [ 'warn', 4 ],

    /*
     * specify the maximum length of a line in your program
     * https://cn.eslint.org/docs/rules/max-len
     * 强制一行的最大长度
     */
    'max-len': [ 'error', 120, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    } ],

    /*
     * specify the max number of lines in a file
     * https://cn.eslint.org/docs/rules/max-lines
     * 强制最大行数
     */
    'max-lines': [ 'warn', {
      max: 700,
      skipBlankLines: true,
      skipComments: true,
    } ],

    /*
     * enforce a maximum function length
     * https://cn.eslint.org/docs/rules/max-lines-per-function
     * 强制函数最大代码行数
     */
    'max-lines-per-function': [ 'warn', {
      max: 50,
      skipBlankLines: true,
      skipComments: true,
      IIFEs: true,
    } ],

    /*
     * https://cn.eslint.org/docs/rules/max-nested-callbacks
     * specify the maximum depth callbacks can be nested
     * 强制回调函数最大嵌套深度
     */
    'max-nested-callbacks': [ 'warn', 4 ],

    /*
     * https://cn.eslint.org/docs/rules/max-params
     * limits the number of parameters that can be used in the function declaration.
     * 强制函数定义中最多允许的参数数量
     */
    'max-params': [ 'warn', 3 ],

    /*
     * https://cn.eslint.org/docs/rules/max-statements
     * specify the maximum number of statement allowed in a function
     * 强制函数块最多允许的的语句数量
     */
    'max-statements': [ 'warn', 30, { ignoreTopLevelFunctions: true } ],

    /*
     * https://cn.eslint.org/docs/rules/max-statements-per-line
     * restrict the number of statements per line
     * 强制每一行中所允许的最大语句数量
     */
    'max-statements-per-line': [ 'warn', { max: 1 } ],

    /*
     * https://cn.eslint.org/docs/rules/multiline-comment-style
     * enforce a particular style for multiline comments
     * 强制对多行注释使用特定风格
     */
    // 'multiline-comment-style': [ 'warn', 'starred-block' ],
    'multiline-comment-style': 'off',

    /*
     * https://cn.eslint.org/docs/rules/multiline-ternary
     * require multiline ternary
     * 要求或禁止在三元操作数中间换行
     */
    'multiline-ternary': [ 'warn', 'never' ],

    /*
     * https://cn.eslint.org/docs/rules/new-cap
     * require a capital letter for constructors
     * 要求构造函数首字母大写
     */
    'new-cap': [ 'error', {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: [ 'Immutable.Map', 'Immutable.Set', 'Immutable.List' ],
    } ],

    /*
     * https://cn.eslint.org/docs/rules/new-parens
     * disallow the omission of parentheses when invoking a constructor with no arguments
     * 强制或禁止调用无参构造函数时有圆括号
     */
    'new-parens': 'error',

    /*
     * https://cn.eslint.org/docs/rules/newline-per-chained-call
     * enforces new line after each method call in the chain to make it more readable and easy to maintain
     * 要求方法链中每个调用都有一个换行符
     */
    'newline-per-chained-call': [ 'error', { ignoreChainWithDepth: 4 } ],

    /*
     * https://cn.eslint.org/docs/rules/'no-array-constructor
     * disallow use of the Array constructor
     * 禁用 Array 构造函数
     */
    'no-array-constructor': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-bitwise
     * disallow use of bitwise operators
     * 禁用按位运算符
     */
    'no-bitwise': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-continue
     * disallow use of the continue statement
     * 禁用 continue 语句
     */
    'no-continue': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-inline-comments
     * disallow comments inline after code
     * 禁止在代码后使用内联注释
     */
    'no-inline-comments': 'off',

    /*
     * https://cn.eslint.org/docs/rules/no-lonely-if
     * disallow if as the only statement in an else block
     * 禁止 if 作为唯一的语句出现在 else 语句中
     */
    'no-lonely-if': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-mixed-operators
     * disallow un-paren'd mixes of different operators
     * 禁止混合使用不同的操作符
     */
    'no-mixed-operators': [ 'error', {
      /*
       * the list of arthmetic groups disallows mixing `%` and `**`
       * with other arithmetic operators.
       */
      groups: [
        [ '%', '**' ],
        [ '%', '+' ],
        [ '%', '-' ],
        [ '%', '*' ],
        [ '%', '/' ],
        [ '/', '*' ],
        [ '&', '|', '<<', '>>', '>>>' ],
        [ '==', '!=', '===', '!==' ],
        [ '&&', '||' ],
      ],
      allowSamePrecedence: false,
    } ],

    /*
     * https://cn.eslint.org/docs/rules/no-mixed-spaces-and-tabs
     * disallow mixed spaces and tabs for indentation
     * 禁止空格和 tab 的混合缩进
     */
    'no-mixed-spaces-and-tabs': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-multi-assign
     * disallow use of chained assignment expressions
     * 禁止连续赋值
     */
    'no-multi-assign': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-multiple-empty-lines
     * disallow multiple empty lines, only one newline at the end, and no new lines at the beginning
     * 禁止出现多行空行
     */
    'no-multiple-empty-lines': [ 'error', { max: 2, maxBOF: 1, maxEOF: 0 } ],

    /*
     * https://cn.eslint.org/docs/rules/no-negated-condition
     * disallow negated conditions
     * 禁用否定的表达式
     */
    'no-negated-condition': 'off',

    /*
     * https://cn.eslint.org/docs/rules/no-nested-ternary
     * disallow nested ternary expressions
     * 禁用嵌套的三元表达式
     */
    'no-nested-ternary': 'error',

    /*
     * https://cn.eslint.org/docs/rules/o-new-object
     * disallow use of the Object constructor
     * 禁用 Object 的构造函数
     */
    'no-new-object': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-plusplus
     * disallow use of unary operators, ++ and --
     * 禁用一元操作符 ++ 和 --
     */
    'no-plusplus': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-restricted-syntax
     * disallow certain syntax forms
     * 禁用特定的语法
     */
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'ForOfStatement',
        message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],

    /*
     * https://cn.eslint.org/docs/rules/no-tabs
     * disallow tab characters entirely
     * 禁用 tab
     */
    'no-tabs': 'error',

    /*
     * https://cn.eslint.org/docs/rules/no-ternary
     * disallow the use of ternary operators
     * 禁用三元操作符
     */
    'no-ternary': 'off',

    /*
     * https://cn.eslint.org/docs/rules/no-trailing-spaces
     * disallow trailing whitespace at the end of lines
     * 禁用行尾空格
     */
    'no-trailing-spaces': [ 'error', {
      skipBlankLines: false,
      ignoreComments: false,
    } ],

    /*
     * https://cn.eslint.org/docs/rules/no-underscore-dangle
     * disallow dangling underscores in identifiers
     * 禁止标识符中有悬空下划线
     */
    'no-underscore-dangle': [ 'error', {
      allow: [],
      allowAfterThis: true,
      allowAfterSuper: true,
      enforceInMethodNames: true,
    } ],

    /*
     * https://cn.eslint.org/docs/rules/no-unneeded-ternary
     * disallow the use of Boolean literals in conditional expressions
     * also, prefer `a || b` over `a ? a : b`
     * 禁止可以在有更简单的可替代的表达式时使用三元操作符
     */
    'no-unneeded-ternary': [ 'error', { defaultAssignment: false } ],

    /*
     * https://cn.eslint.org/docs/rules/no-whitespace-before-property
     * disallow whitespace before properties
     * 禁止属性前有空白
     */
    'no-whitespace-before-property': 'error',

    /*
     * https://cn.eslint.org/docs/rules/nonblock-statement-body-position
     * enforce the location of single-line statements
     * 强制单个语句的位置
     */
    'nonblock-statement-body-position': [ 'error', 'beside', { overrides: {} } ],

    /*
     * https://cn.eslint.org/docs/rules/object-curly-spacing
     * require padding inside curly braces
     * 强制在大括号中使用一致的空格
     */
    'object-curly-spacing': [ 'error', 'always' ],

    /*
     * https://cn.eslint.org/docs/rules/object-curly-newline
     * enforce line breaks between braces
     * 强制大括号内换行符的一致性
     */
    'object-curly-newline': [ 'error', {
      ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
      ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
      ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
    } ],

    /*
     * https://cn.eslint.org/docs/rules/object-property-newline
     * enforce "same line" or "multiple line" on object properties.
     * 强制将对象的属性放在不同的行上
     */
    'object-property-newline': [ 'error', {
      allowAllPropertiesOnSameLine: true,
    } ],

    /*
     * https://cn.eslint.org/docs/rules/one-var
     * allow just one var statement per function
     * 强制函数中的变量要么一起声明要么分开声明
     */
    'one-var': [ 'error', 'never' ],

    /*
     * https://cn.eslint.org/docs/rules/one-var-declaration-per-line
     * require a newline around variable declaration
     * 要求或禁止在变量声明周围换行
     */
    'one-var-declaration-per-line': [ 'error', 'always' ],

    /*
     * https://cn.eslint.org/docs/rules/operator-assignment
     * require assignment operator shorthand where possible or prohibit it entirely
     * 要求或禁止在可能的情况下使用简化的赋值操作符
     */
    'operator-assignment': [ 'error', 'always' ],

    /*
     * https://cn.eslint.org/docs/rules/operator-linebreak
     * Requires operator at the beginning of the line in multiline statements
     * 强制操作符使用一致的换行符
     */
    'operator-linebreak': [ 'error', 'before', { overrides: { '=': 'none' } } ],

    /*
     * https://cn.eslint.org/docs/rules/padded-blocks
     * disallow padding within blocks
     * 要求或禁止块内填充
     */
    'padded-blocks': [ 'error', {
      blocks: 'never',
      classes: 'never',
      switches: 'never',
    }, {
      allowSingleLineBlocks: true,
    } ],

    /*
     * https://cn.eslint.org/docs/rules/padding-line-between-statements
     * Require or disallow padding lines between statements
     * 要求或禁止在语句间填充空行 TODO:
     */
    'padding-line-between-statements': 'off',

    /*
     * https://cn.eslint.org/docs/rules/prefer-object-spread
     * Prefer use of an object spread over Object.assign
     * 禁止使用以对象字面量作为第一个参数的 Object.assign，优先使用对象扩展
     */
    'prefer-object-spread': 'error',

    /*
     * https://cn.eslint.org/docs/rules/quote-props
     * require quotes around object literal property names
     * 要求对象字面量属性名称用引号括起来
     */
    'quote-props': [ 'error', 'as-needed', { keywords: false, unnecessary: true, numbers: false } ],

    /*
     * https://cn.eslint.org/docs/rules/quotes
     * specify whether double or single quotes should be used
     * 强制使用一致的反勾号、双引号或单引号
     */
    quotes: [ 'error', 'single', { avoidEscape: true } ],

    /*
     * https://cn.eslint.org/docs/rules/semi
     * require or disallow use of semicolons instead of ASI
     * 要求或禁止使用分号代替 ASI
     */
    semi: [ 'error', 'never' ],

    /*
     * https://cn.eslint.org/docs/rules/semi-spacing
     * enforce spacing before and after semicolons
     * 强制分号之前和之后使用一致的空格
     */
    'semi-spacing': [ 'error', { before: false, after: true } ],

    /*
     * https://cn.eslint.org/docs/rules/semi-style
     * Enforce location of semicolons
     * 强制分号的位置
     */
    'semi-style': [ 'error', 'last' ],

    /*
     * https://cn.eslint.org/docs/rules/sort-keys
     * requires object keys to be sorted
     * 要求对象属性按序排列
     */
    'sort-keys': [ 'off', 'asc', { caseSensitive: false, natural: true } ],

    /*
     * https://cn.eslint.org/docs/rules/sort-vars
     * sort variables within the same declaration block
     * 要求同一个声明块中的变量按顺序排列
     */
    'sort-vars': 'off',

    /*
     * https://cn.eslint.org/docs/rules/space-before-blocks
     * require or disallow space before blocks
     * 强制在块之前使用一致的空格
     */
    'space-before-blocks': 'error',

    /*
     * https://cn.eslint.org/docs/rules/space-before-function-paren
     * require or disallow space before function opening parenthesis
     * 强制在 function的左括号之前使用一致的空格
     */
    'space-before-function-paren': [ 'error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    } ],

    /*
     * https://cn.eslint.org/docs/rules/space-in-parens
     * require or disallow spaces inside parentheses
     * 强制在圆括号内使用一致的空格
     */
    'space-in-parens': [ 'error', 'never' ],

    /*
     * https://cn.eslint.org/docs/rules/pace-infix-ops
     * require spaces around operators
     * 要求操作符周围有空格
     */
    'space-infix-ops': 'error',

    /*
     * https://cn.eslint.org/docs/rules/space-unary-ops
     * Require or disallow spaces before/after unary operators
     * 强制在一元操作符前后使用一致的空格
     */
    'space-unary-ops': [ 'error', {
      words: true,
      nonwords: false,
      overrides: {
      },
    } ],

    /*
     * https://cn.eslint.org/docs/rules/spaced-comment
     * require or disallow a space immediately following the // or /* in a comment
     * 强制在注释中 // 或 /* 使用一致的空格
     */
    'spaced-comment': [ 'error', 'always', {
      line: {
        exceptions: [ '-', '+' ],
        markers: [ '=', '!' ], // space here to support sprockets directives
      },
      block: {
        exceptions: [ '-', '+' ],
        markers: [ '=', '!', ':', '::' ], // space here to support sprockets directives and flow comment types
        balanced: true,
      },
    } ],

    /*
     * https://cn.eslint.org/docs/rules/switch-colon-spacing
     * Enforce spacing around colons of switch statements
     * 强制在 switch 的冒号左右有空格
     */
    'switch-colon-spacing': [ 'error', { after: true, before: false } ],

    /*
     * https://cn.eslint.org/docs/rules/template-tag-spacing
     * Require or disallow spacing between template tags and their literals
     * 要求或禁止在模板标记和它们的字面量之间有空格
     */
    'template-tag-spacing': [ 'error', 'never' ],

    /*
     * https://cn.eslint.org/docs/rules/unicode-bom
     * require or disallow the Unicode Byte Order Mark
     * 要求或禁止 Unicode 字节顺序标记 (BOM)
     */
    'unicode-bom': [ 'error', 'never' ],

    /*
     * https://cn.eslint.org/docs/rules/wrap-regex
     * require regex literals to be wrapped in parentheses
     * 要求正则表达式被括号括起来
     */
    'wrap-regex': 'off',
  },
}
