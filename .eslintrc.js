module.exports = {
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'no-void': [
          'error',
          {
            allowAsStatement: true,
          },
        ],
        'no-console': [
          'warn',
          {
            allow: ['warn', 'error'],
          },
        ],
        eqeqeq: ['error', 'smart'],
        '@rushstack/typedef-var': 'off',
        '@rushstack/no-new-null': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'import/order': 'error',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
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
      },
    },
  ],
}
