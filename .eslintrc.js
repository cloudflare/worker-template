module.exports = {
  env: {
    worker: true,
    es6: true,
  },
  rules: {
    'no-unused-vars': ['error', { argsIgnorePattern: 'request' }],
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
}
