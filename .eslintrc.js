module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "arrow-spacing": ["error", { before: true, after: true }],
    eqeqeq: "error",
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    "no-console": 0,
    "no-trailing-spaces": "error",
    "object-curly-spacing": ["error", "always"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
  },
};
