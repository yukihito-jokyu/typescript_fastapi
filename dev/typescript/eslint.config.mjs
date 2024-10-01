import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin"; // TypeScript用のプラグイン
import tsparser from "@typescript-eslint/parser"; // TypeScriptパーサー
import pluginReact from "eslint-plugin-react";
import prettierConfig from "eslint-config-prettier"; // Prettierの設定


export default [
  {
    // 対象ファイルを指定（JavaScriptやTypeScript）
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]
  },
  {
    languageOptions: {
      globals: globals.browser, // ブラウザ環境を設定
      parser: tsparser, // TypeScript用のパーサーを指定
      ecmaVersion: "latest", // 最新のECMAScript構文を使用
      sourceType: "module" // ESモジュールを使用
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  prettierConfig, // Prettierの設定を追加
  {
    plugins: [
      "react", // React用プラグイン
      "@typescript-eslint" // TypeScript用プラグイン
    ],
  }
];
