import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import arrayFunc from "eslint-plugin-array-func";
import functional from "eslint-plugin-functional";
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import reactPlugin from 'eslint-plugin-react';
import reactRefresh from "eslint-plugin-react-refresh";
import pluginPromise from 'eslint-plugin-promise';
import * as regexpPlugin from "eslint-plugin-regexp";
import sonarjs from "eslint-plugin-sonarjs";
import tailwind from "eslint-plugin-tailwindcss";
import eslintPluginUnicorn from 'eslint-plugin-unicorn';

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  arrayFunc.configs.recommended,
  functional.configs.externalVanillaRecommended,
  functional.configs.externalTypeScriptRecommended,
  functional.configs.recommended,
  functional.configs.stylistic,
  pluginPromise.configs['flat/recommended'],
  regexpPlugin.configs["flat/recommended"],
  sonarjs.configs.recommended,
  ...tailwind.configs["flat/recommended"],
  eslintPluginUnicorn.configs['flat/recommended'],
  eslintPluginPrettierRecommended,
  eslintConfigPrettier,
  {
    settings: {
      react: {
        version: "detect",
      },
      tailwindcss: {
        // These are the default values but feel free to customize
        callees: ["classnames", "clsx", "ctl"],
        config: "tailwind.config.js", // returned from `loadConfig()` utility if not provided
        cssFiles: [
          "**/*.css",
          "!**/node_modules",
          "!**/.*",
          "!**/dist",
          "!**/build",
        ],
        cssFilesRefreshRate: 5_000,
        removeDuplicates: true,
        skipClassAttribute: false,
        whitelist: [],
        tags: [], // can be set to e.g. ['tw'] for use in tw`bg-blue`
        classRegex: "^class(Name)?$", // can be modified to support custom attributes. E.g. "^tw$" for `twin.macro`
      },
    }
  },
  {
    ignores: ["**/temp.js", "config/*", "*.cjs", "*.mjs"
      //     , .eslintrc.cjs
      // .prettierrc.cjs
      // postcss.config.cjs
      // tailwind.config.cjs
      // vite.config.ts
    ],
  },
  // { languageOptions: { globals: globals.browser } },
  {
    languageOptions: {
      globals: globals.builtin,
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
      },
    },
  },
  {
    plugins: {
      "react-refresh": reactRefresh,
      // unicorn: eslintPluginUnicorn,
    },
    rules: {
      "react-refresh/only-export-components": "warn",
      'unicorn/better-regex': 'error',
      "functional/no-expression-statements": ["error", { "ignoreVoid": true }],
      "functional/no-mixed-types": "warn",
      "functional/no-return-void": "warn",
      // 'unicorn/...': 'error',
    }
  }
];
