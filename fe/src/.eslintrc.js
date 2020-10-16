module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: [
    'airbnb',
    "jest-enzyme",
    "plugin:react-redux/recommended"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    "react-hooks",
    "react-redux"
  ],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-filename-extension": "off",
    "react/jsx-indent": "off",
    "no-nested-ternary": "off",
    "no-console": "warn",
    "quotes": "off",
    "no-tabs": "off",
    "no-unused-expressions" : "off",
    "no-param-reassign": "off",
    "object-curly-spacing": "off",
    "import/prefer-default-export": "off",
    "jsx-a11y/label-has-associated-control": "off",
  },
};
