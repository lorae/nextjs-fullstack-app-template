import { FlatCompat } from '@eslint/eslintrc';
import storybook from 'eslint-plugin-storybook';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: 'eslint:recommended',
});

export default [
  ...compat.extends('next', 'next/core-web-vitals'),

  {
    languageOptions: {
      globals: {
        React: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': [1, { args: 'after-used', argsIgnorePattern: '^_' }],
    },
  },

  // ✅ Storybook override (flat config style)
  {
    files: ['*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
    rules: {
      'storybook/hierarchy-separator': 'error',
    },
  },

  ...storybook.configs['flat/recommended'],
];
