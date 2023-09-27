module.exports = {
  "env": {
    "browser": true,
    "es2023": true,
  },
  "extends": [
    "eslint:recommended",
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    "plugin:array-func/all",
    "plugin:functional/external-typescript-recommended",
    // "plugin:functional/recommended",
    "plugin:functional/stylistic",
    "plugin:jsx-a11y/strict",
    "plugin:perfectionist/recommended-natural",
    "plugin:promise/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:regexp/recommended",
    "plugin:tailwindcss/recommended",
    "plugin:sonarjs/recommended",
    "plugin:unicorn/recommended",
    "plugin:prettier/recommended",
  ],
  "ignorePatterns": ['dist'],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": true,
    "tsconfigRootDir": __dirname,
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": [
    "functional",
    'react-refresh',
  ],
  "rules": {
    // eslint
    "semi": ["error", "always"],
    "quotes": "off",
    "prefer-const": "error",
    "curly": ["error", "all"],
    "padding-line-between-statements": [
      "error",
      { "blankLine": "always", "prev": ["const", "let", "var"], "next": "*" },
      { "blankLine": "any", "prev": ["const", "let", "var"], "next": ["const", "let", "var"] },
      { "blankLine": "always", "prev": "*", "next": "return" }
    ],
    "no-multiple-empty-lines": ["error"],
    "arrow-body-style": ["error", "as-needed"],
    "prefer-arrow-callback": "off",
    "no-console": ["error", { "allow": ["warn", "info", "error"] }],
    "no-underscore-dangle": [
      "error",
      {
        "allow": ["_id", "__typename", "__schema", "__dirname", "_global"],
        "allowAfterThis": true
      }
    ],
    // typescript-eslint
    "@typescript-eslint/prefer-readonly": "error",
    "@typescript-eslint/switch-exhaustiveness-check": "error",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/quotes": "error",
    // react-refresh
    // 'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // prettier
    "prettier/prettier": "error",
    // perfectionist
    "perfectionist/sort-named-imports": [
      "off",
      {
        "type": "natural",
        "order": "asc"
      }
    ]
  },
  "root": true,
  "settings": {
    "react": {
      "version": "detect",
    },
  },
};
