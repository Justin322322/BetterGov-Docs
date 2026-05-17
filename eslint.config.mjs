import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      '.source/**',
      'next-env.d.ts',
      'content/**/*.md',
      'content/**/*.mdx',
    ],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      // Documentation-specific rules
      'no-unused-vars': 'warn',
      'prefer-const': 'error',
      'no-console': 'warn',

      // React/Next.js specific rules for documentation components
      'react/no-unescaped-entities': 'off', // Allow quotes in documentation
      'react/display-name': 'off', // Not needed for documentation components
      '@next/next/no-img-element': 'off', // Allow img elements in MDX content

      // TypeScript rules
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn'
    }
  },
  {
    files: ['scripts/**/*.js'],
    env: {
      node: true
    },
    rules: {
      'no-console': 'off' // Allow console in build scripts
    }
  }
];

export default eslintConfig;
