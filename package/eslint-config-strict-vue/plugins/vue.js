/*
 * 规则文档
 * https://eslint.vuejs.org/rules/
 */

module.exports = {
  parser: 'vue-eslint-parser',
  extends: [
    'plugin:vue/strongly-recommended',
  ],
  rules: {
    // recommended
    'vue/attributes-order': [ 'error', {
      order: [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        'UNIQUE',
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT',
      ],
    } ],
    'vue/no-v-html': 'error',
    'vue/order-in-components': [ 'error', {
      order: [
        'el',
        'name',
        'parent',
        'functional',
        [ 'delimiters', 'comments' ],
        [ 'components', 'directives', 'filters' ],
        'extends',
        'mixins',
        'inheritAttrs',
        'model',
        [ 'props', 'propsData' ],
        'fetch',
        'asyncData',
        'data',
        'computed',
        'watch',
        'LIFECYCLE_HOOKS',
        'methods',
        'head',
        [ 'template', 'render' ],
        'renderError',
      ],
    } ],
    'vue/this-in-template': [ 'error', 'never' ],
    // Uncategorized
    'vue/array-bracket-spacing': [ 'error', 'always' ],
    'vue/arrow-spacing': [ 'error', { before: true, after: true } ],
    'vue/block-spacing': [ 'error', 'always' ],
    'vue/brace-style': [ 'error', '1tbs', { allowSingleLine: false } ],
    'vue/camelcase': [ 'error', { properties: 'always', ignoreDestructuring: false } ],
    'vue/component-name-in-template-casing': [ 'error', 'kebab-case', {
      registeredComponentsOnly: false,
      ignores: [],
    } ],
    // 'vue/dot-location': [ 'error', 'property' ],
    'vue/eqeqeq': [ 'error', 'always', { null: 'ignore' } ],
    'vue/key-spacing': [ 'error', { beforeColon: false, afterColon: true } ],
    // 'vue/keyword-spacing': [ 'error', {
    //   before: true,
    //   after: true,
    //   overrides: {
    //     return: { after: true },
    //     throw: { after: true },
    //     case: { after: true },
    //   },
    // } ],
    'vue/match-component-file-name': 'off',
    'vue/no-boolean-default': [ 'warn', 'default-false' ],
    // 'vue/no-deprecated-scope-attribute': 'error',
    // 'vue/no-empty-pattern': 'error',
    'vue/no-restricted-syntax': [
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
    'vue/object-curly-spacing': [ 'error', 'always' ],
    'vue/require-direct-export': 'error',
    'vue/space-infix-ops': 'error',
    'vue/space-unary-ops': [ 'error', {
      words: true,
      nonwords: false,
      overrides: {
      },
    } ],
    'vue/v-on-function-call': [ 'error', 'never' ],
    // 'vue/v-slot-style': [ 'error', 'longform' ],
    // 'vue/valid-v-slot': 'error',
    // deprecated
    'vue/no-confusing-v-for-v-if': 'off',

    // overwrite
    // 标签闭合
    'vue/html-closing-bracket-newline': [ 'error', {
      singleline: 'never',
      multiline: 'never',
    } ],
    // 标签空格
    'vue/html-closing-bracket-spacing': [ 'error', {
      startTag: 'never',
      endTag: 'never',
      selfClosingTag: 'always',
    } ],
    // 单行属性个数
    'vue/max-attributes-per-line': [ 'error', {
      singleline: 3,
      multiline: {
        max: 1,
        allowFirstLine: false,
      },
    } ],
    // 组件name属性书写格式
    'vue/name-property-casing': [ 'error', 'kebab-case' ],
    // 禁止检测未用到的组件，使用动态组件时有问题
    'vue/no-unused-components': 'off',
    // 使用eslint自带的indent规则校验
    'vue/script-indent': 'off',
  },
}
