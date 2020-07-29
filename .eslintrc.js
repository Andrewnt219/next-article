module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/typescript",
    "react-app",
    "plugin:jsx-a11y/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "jsx-a11y"],
  rules: {
    "linebreak-style": ["error", "windows"],
    "react/react-in-jsx-scope": "off",
    "no-debugger": "off",
  },
};
