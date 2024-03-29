module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'airbnb',
    'airbnb-typescript',
    'prettier',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json'],
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
   '@typescript-eslint/no-explicit-any': 'off',
    'import/no-unresolved': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    // '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-use-before-define': 'off',
    'dot-notation': 'off',
    'import/extensions': 'off',
    'import/order': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/*': 'off',
    'no-continue': 'off',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'no-underscore-dangle': 'off',
    // 'max-len': ['error', { code: 120 }],
    'max-len': 'off',
    // 'max-lines-per-function': ['error', 250],
    'max-lines-per-function': 'off',
    'max-params': 'off',
    'prefer-destructuring': 'off',
    'react/destructuring-assignment': 'off',
    'react/display-name': 'off',
    'react/jsx-boolean-value': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens',
        assignment: 'parens',
        return: 'parens',
        arrow: 'parens',
        condition: 'ignore',
        logical: 'ignore',
        prop: 'ignore',
      },
    ],
    'react/no-danger': 'off',
    'react/prop-types': 'off',
    'sort-imports': 'off',
    'prefer-rest-params': 'off',
    'import/no-named-as-default': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { args: 'none' }],
    
  },
};
