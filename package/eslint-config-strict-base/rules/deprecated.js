module.exports = {
  rules: {
    /*
     * https://cn.eslint.org/docs/rules/indent-legacy
     * enforce consistent indentation
     * ESLint 4.0.0 introduced a rewrite of the indent rule,
     * which now reports more errors than it did in previous versions.
     */
    'indent-legacy': 'off',

    /*
     * https://cn.eslint.org/docs/rules/lines-around-directive
     * require or disallow newlines around directives
     * This rule was deprecated in ESLint v4.0.0 and replaced by the padding-line-between-statements rule.
     */
    'lines-around-directive': 'off',

    /*
     * https://cn.eslint.org/docs/rules/newline-after-var
     * allow/disallow an empty newline after var statement
     * This rule was deprecated in ESLint v4.0.0 and replaced by the padding-line-between-statements rule.
     */
    'newline-after-var': 'off',

    /*
     * https://cn.eslint.org/docs/rules/newline-before-return
     * allow/disallow an empty newline before return statement
     * This rule was deprecated in ESLint v4.0.0 and replaced by the padding-line-between-statements rule.
     */
    'newline-before-return': 'off',

    /*
     * https://cn.eslint.org/docs/rules/no-catch-shadow
     * disallow the catch clause parameter name being the same as a variable in the outer scope
     * This rule was deprecated in ESLint v5.1.0.
     */
    'no-catch-shadow': 'off',

    /*
     * https://cn.eslint.org/docs/rules/no-native-reassign
     * disallow Reassignment of Native Objects
     * This rule was deprecated in ESLint v3.3.0 and replaced by the no-global-assign rule.
     */
    'no-native-reassign': 'off',

    /*
     * https://cn.eslint.org/docs/rules/no-negated-in-lhs
     * disallow negating the left operand in in expressions
     * This rule was deprecated in ESLint v3.3.0 and replaced by the no-unsafe-negation rule.
     */
    'no-negated-in-lhs': 'off',

    /*
     * https://cn.eslint.org/docs/rules/no-spaced-func
     * disallow space between function identifier and application
     * This rule was deprecated in ESLint v3.3.0 and replaced by the func-call-spacing rule.
     */
    'no-spaced-func': 'off',

    /*
     * https://cn.eslint.org/docs/rules/prefer-reflect
     * suggest using Reflect methods where applicable
     * This rule was deprecated in ESLint v3.9.0 and will not be replaced.
     */
    'prefer-reflect': 'off',

    /*
     * https://cn.eslint.org/docs/rules/require-jsdoc
     * do not requie jsdoc
     * This rule was deprecated in ESLint v5.10.0.
     */
    'require-jsdoc': 'off',

    /*
     * https://cn.eslint.org/docs/rules/valid-jsdoc
     * enforce valid JSDoc comments
     * This rule was deprecated in ESLint v5.10.0.
     */
    'valid-jsdoc': 'off',
  },
}
