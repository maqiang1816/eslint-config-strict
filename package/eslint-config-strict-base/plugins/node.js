/*
 * 规则文档
 * https://github.com/mysticatea/eslint-plugin-node#readme
 */
module.exports = {
  extends: [
    'plugin:node/recommended',
  ],
  rules: {
    'node/exports-style': [ 'error', 'module.exports' ],
    'node/file-extension-in-import': [ 'error', 'always' ],
    'node/prefer-global/buffer': [ 'error', 'always' ],
    'node/prefer-global/console': [ 'error', 'always' ],
    'node/prefer-global/process': [ 'error', 'always' ],
    'node/prefer-global/url-search-params': [ 'error', 'always' ],
    'node/prefer-global/url': [ 'error', 'always' ],
    'node/prefer-promises/dns': 'error',
    'node/prefer-promises/fs': 'error',
    // deprecated
    'node/no-hide-core-modules': 'off',
    'node/no-unsupported-features': 'off',
  },
}
