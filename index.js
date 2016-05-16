module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-base/rules/strict'
  ].map(require.resolve),
  rules: {
    "arrow-parens": ["error", "always"],
    'max-len': [1, 120, 2, {
      "ignoreComments": true,
      "ignoreTrailingComments": true,
      "ignoreUrls": true
    }],
    "no-unused-vars": [2, {
      "vars": "local",
      "args": "none"
    }],
  }
};
