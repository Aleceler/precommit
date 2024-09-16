import { defineConfig } from 'eslint-define-config';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import reactPlugin from 'eslint-plugin-react';
import jestPlugin from 'eslint-plugin-jest';
import jestFormattingPlugin from 'eslint-plugin-jest-formatting';
import prettierPlugin from 'eslint-plugin-prettier';

export default defineConfig({
  files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],

  languageOptions: {
    globals: {
      browser: true,
      node: false,
    },
    parserOptions: {
      parser: '@typescript-eslint/parser',
      ecmaVersion: 2020,
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  plugins: {
    '@typescript-eslint': typescriptEslintPlugin,
    react: reactPlugin,
    jest: jestPlugin,
    'jest-formatting': jestFormattingPlugin,
    prettier: prettierPlugin,
  },
  rules: {
    // aqui nas rules irao suas regras sempre com um padrao "warn", "error" ou "off", deixei o exemplo de tipagem de funcao, aspas, import e jest

    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // essa regra é a que o eslint ignore o fato de nao estarmos importando o React dentro de cada arquivo, nao é mais obrigatorio depois da verao 17
    'react/react-in-jsx-scope': 'off',
    'jest/no-disabled-tests': 'warn',
    quotes: ['error', 'single'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
});
