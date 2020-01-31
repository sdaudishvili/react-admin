module.exports = {
  env: {
    browser: true,
    node: true
  },
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/standard',
    'plugin:jsx-a11y/recommended'
  ],
  plugins: ['jsx-a11y', 'react-hooks'],
  rules: {
    'no-console': 1,
    'react/destructuring-assignment': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    ],
    'import/no-extraneous-dependencies': [1, { devDependencies: true }],
    'react/prop-types': 0,
    'no-plusplus': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'react/button-has-type': 0,
    'jsx-a11y/no-onchange': 0,
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        wrap: 1
      }
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ],
    'prefer-destructuring': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  }
}
