module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "eslint-config-standard", "plugin:prettier/recommended"],
  root: true,
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["import"],
  rules: {
    "no-await-in-loop": "error",
    "no-duplicate-imports": [
      "error",
      {
        includeExports: true,
      },
    ],
    "no-import-assign": "error",
    "no-case-declarations": "error",
    "no-throw-literal": "error",
    "no-unneeded-ternary": "error",
    "no-useless-catch": "error",
    "no-useless-rename": [
      "error",
      {
        ignoreDestructuring: true,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],
    "no-var": "error",
    "operator-assignment": ["error", "always"],
    "prefer-const": "error",
    "prefer-exponentiation-operator": "error",
    "prefer-object-has-own": "error",
    "prefer-object-spread": "error",
    "prefer-promise-reject-errors": [
      "error",
      {
        allowEmptyReject: true,
      },
    ],
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    indent: ["error", 2],
    quotes: ["error", "double"],
    semi: ["error", "never"],
  },
}
