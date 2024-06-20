module.exports = {
  root: true,
  env: { 
    browser: true, 
    es2020: true 
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended', // Add this line
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'react', '@typescript-eslint'], // Ensure react plugin is included
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/react-in-jsx-scope': 'off', // Add this line for React 17+ 
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-namespace': 'off',
    'prettier/prettier': 0,
    'no-unused-vars': 1,
    '@typescript-eslint/no-unused-vars': [
      'warn', 
      { argsIgnorePattern: '^_', varsIgnorePattern: '^React$' } // Adjust this line
    ],
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the react version
    },
  },
};
