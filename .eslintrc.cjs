module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:jsx-a11y/recommended",
    "plugin:tailwindcss/recommended",
    "prettier",
  ],
  overrides: [
    {
      files: ['*.js'],
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "tailwindcss",
    "import",
    "prettier",
  ],
  rules: {
    // indent: ["warn", 2, { offsetTernaryExpressions: true }],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: "off",
    "@typescript-eslint/semi": "error",
    // "max-len": ["warn", { code: 120 }],
    "react/prop-types": "warn",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "warn",
    // "@typescript-eslint/no-non-null-assertion": "off",
    "tailwindcss/classnames-order": "warn",
    "tailwindcss/no-custom-classname": "warn",
    "tailwindcss/no-contradicting-classname": "error",
    // "simple-import-sort/imports": "error",
    // "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "prettier/prettier": "error",
  },
  root: true,
  settings: {
    react: {
      version: "detect",
    },
  },
};
