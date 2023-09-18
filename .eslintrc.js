module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "airbnb",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    // Commonly used rules
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-unused-vars": [
      "error",
      { vars: "all", args: "after-used", ignoreRestSiblings: false },
    ],
    quotes: "off",
    "no-undef": ["error"],
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-param-reassign": ["error", { props: false }],
    "no-underscore-dangle": ["error", { allowAfterThis: false }],
    "no-restricted-syntax": ["error"],
    "no-await-in-loop": ["error"],
    "no-use-before-define": [
      "error",
      { functions: false, classes: true, variables: true },
    ],
    "arrow-body-style": "off",
    "no-shadow": [
      "error",
      { builtinGlobals: false, hoist: "functions", allow: [] },
    ],
    "no-continue": ["error"],
    "no-prototype-builtins": ["error"],
    "no-constant-condition": ["error", { checkLoops: false }],
    "no-bitwise": ["error"],
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    "no-return-assign": ["error", "always"],
    "no-sequences": ["error"],
    // React specific rules
    "react/button-has-type": ["error"],
    "react/prop-types": ["off"],
    "react/require-default-props": ["off"],
    "react/no-array-index-key": ["warn"],
    "react/react-in-jsx-scope": ["off"],
    "react/jsx-uses-react": ["off"],
    "react/display-name": ["off"],
    "react/function-component-definition": [
      "error",
      { namedComponents: "arrow-function" },
    ],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
  },
};
