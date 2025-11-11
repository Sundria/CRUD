import globals from "globals";
import pluginJs from "@eslint/js";
import pluginPrettier from "eslint-plugin-prettier"; // Importe o plugin do Prettier
import configPrettier from "eslint-config-prettier"; // Importe a configuração do Prettier

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      ...configPrettier.rules,
      "prettier/prettier": "error",
      "class-methods-use-this": "off",
      "no-param-reassign": "off",
      camelcase: "off",
      "no-unused-vars": ["error", { argsIgnorePattern: "next" }],
      "no-console": ["error", { allow: ["warn", "error"] }],
    },
  },
];
