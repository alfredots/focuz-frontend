// eslint.config.js
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,

  ...tseslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,

  {
    files: ['**/*.tsx', '**/*.ts'],
    plugins: {
      react
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true
      }
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'typescript-eslint/no-unsafe-call': 'off'
    },
    ignores: ['node_modules/**', '.test/setup.ts']
  },
  prettier
];
