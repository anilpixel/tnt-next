module.exports = {
  rules: {
    'no-void': [
      'error',
      {
        allowAsStatement: true,
      },
    ],
    eqeqeq: ['error', 'smart'],
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
      },
    ],
    '@typescript-eslint/explicit-member-accessibility': [
      'warn',
      { accessibility: 'no-public' },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/typedef': 'off',
    '@rushstack/typedef-var': 'off',
    '@rushstack/no-new-null': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'import/order': 'error',
  },
}
