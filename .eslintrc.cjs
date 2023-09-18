module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    "plugin:functional/external-typescript-recommended",
    // "plugin:functional/recommended",
    "plugin:functional/stylistic",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:promise/recommended",
    "plugin:regexp/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    'plugin:no-use-extend-native/recommended',
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/strict",
    "plugin:tailwindcss/recommended",

    "prettier",
  ],
  overrides: [
    {
      files: ['*.js'],
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
    },
    {
      "files": ["*.ts", "*.tsx"],
      "rules": {
        "no-undef": "off"
      }
    }
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: true,
    tsconfigRootDir: __dirname,
    "ecmaFeatures": {
      "jsx": true
    }
  },
  plugins: [
    "@typescript-eslint",
    "jsx-a11y",
    "tailwindcss",
    "simple-import-sort",

    "react",
    "perfectionist",
    "regexp",
    "pure",
    "promise",
    "no-loops",
    "import",
    // "immutable",
    "functional",
    "array-func",
  ],
  rules: {
    "array-func/from-map": "error",
    // "immutable/no-let": 2,
    // "immutable/no-this": 2,
    // "immutable/no-mutation": 2,
    "no-loops/no-loops": 2,
    "no-var": 2,
    "prefer-const": 2,
    "no-undef": "off",
    "no-unused-vars": 2,
    "perfectionist/sort-objects": [
      "error",
      {
        "type": "natural",
        "order": "asc"
      }
    ],
    "indent": ["error", 2],
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "prefer-const": "error",


    // indent: ["warn", 2, { offsetTernaryExpressions: true }],
    "linebreak-style": ["error", "unix"],
    "@typescript-eslint/semi": "error",
    // "max-len": ["warn", { code: 120 }],
    // "react/prop-types": "warn",
    // "react/react-in-jsx-scope": "off",
    // 'react/jsx-uses-react': 'error',
    //   'react/jsx-uses-vars': 'error',
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
    "import/no-unresolved": "error",
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
  },
  root: true,
  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`

        // Choose from one of the "project" configs below or omit to use <root>/tsconfig.json by default

        // use <root>/path/to/folder/tsconfig.json
        // "project": "path/to/folder",
      }
    },
    'import/resolver': {
      typescript: true,
      node: true
    }
  },
  "globals": {
    "JSX": "readonly",
  },
};
