module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    quotes: [
      'warn',
      'single'
    ],
    'no-unused-vars': ['warn'],
    'no-unused-expressions': ['warn']
  }
}
