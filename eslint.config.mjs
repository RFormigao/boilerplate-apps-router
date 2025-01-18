import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'

export default [
  {
    files: ['**/*.{mjs,js,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: globals.browser
    },
    plugins: {
      react: pluginReact,
      '@eslint/js': pluginJs,
      'typescript-eslint': tseslint,
      'react-hooks': eslintPluginReactHooks
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off'
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended
]
