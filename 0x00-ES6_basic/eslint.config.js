// eslint.config.js
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

export default [
  {
    ignores: ['node_modules/**'],
  },
  ...compat.extends('airbnb-base'),
  {
    rules: {
      // Add your custom rules here
    },
  },
];

