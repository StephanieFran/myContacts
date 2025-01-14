import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs"
    },
    rules: {
      'class-methods-use-this': 'off',
      'consistent-return': 'off',
      camelcase:'off',
      'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    }
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node}
    }
  },

  pluginJs.configs.recommended,
];
