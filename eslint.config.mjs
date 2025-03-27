// eslint.config.mjs
import eslintPlugin from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import globals from "globals";

export default [
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module",
      },
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      ...eslintPlugin.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,

      /** FORMATTING RULES */
      indent: ["error", 4],
      quotes: ["error", "single"],
      semi: ["error", "always"],
      "object-curly-spacing": ["error", "always"],
      "comma-dangle": ["error", "always-multiline"],

      /** Lint Rules */
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
    },
  },
];
