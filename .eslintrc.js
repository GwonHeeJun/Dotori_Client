module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: ['airbnb-typescript', 'prettier/@typescript-eslint'],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 0,
      'linebreak-style': 0,
      quotes: [2, 'single', 'avoid-escape'],
      'react/jsx-props-no-spreading': 'off',
      'import/extensions': 0,
      'import/no-unresolved': 0,
      'react/jsx-filename-extension': [0],
      'comma-dangle': [2, 'always-multiline'],
      'no-param-reassign': 0,
      'arrow-body-style': 0,
      'import/prefer-default-export': 0
    },
  };