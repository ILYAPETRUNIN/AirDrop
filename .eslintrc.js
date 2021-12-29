module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "@nuxtjs",
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  ignorePatterns: ["*.spec.ts", "*.test.ts"],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-irregular-whitespace": "off",
    "prettier/prettier": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
  },
  overrides: [
    {
      files: ["*.vue"],
      rules: {
        indent: "off",
        "vue/script-indent": ["error", 2, { baseIndent: 0, switchCase: 1 }],
        "vue/html-indent": ["error", 2, { baseIndent: 1 }],
      },
    },
    {
      files: ["*.d.ts"],
      rules: {
        "no-var": "off",
        "@typescript-eslint/no-explicit-any": "off",
      },
    },
  ],
};
