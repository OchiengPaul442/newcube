module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    quotes: 'off',
    'object-curly-newline': ['warn', { consistent: true }],
    'jsx-a11y/img-redundant-alt': ['off'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-undef': ['error'],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-param-reassign': ['error', { props: false }],
    // React specific rules
    'react/button-has-type': ['error'],
    'react/prop-types': ['off'],
    'react/require-default-props': ['off'],
    'react/no-array-index-key': ['warn'],
    'react/react-in-jsx-scope': ['off'],
    'react/jsx-uses-react': ['off'],
    'react/display-name': ['off'],
    'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'arrow-body-style': ['error', 'always'],
  },
};
