import antfu from '@antfu/eslint-config'
import pluginJsxA11y from 'eslint-plugin-jsx-a11y'
import pluginReact from 'eslint-plugin-react'
import pluginReactRefresh from 'eslint-plugin-react-refresh'

/** @type {import('@yelaiii/eslint').ESLint} */
export const eslint = (
  { jsxA11y = false, ...options } = {},
  ...configs
) => {
  if (jsxA11y) {
    configs.unshift({
      name: 'yelaiii/jsx-a11y',
      plugins: {
        'yelaiii-jsx-a11y': pluginJsxA11y
      },
      rules: {
        ...Object.entries(pluginJsxA11y.flatConfigs.recommended.rules).reduce(
          (acc, [key, value]) => {
            acc[key.replace('jsx-a11y', 'yelaiii-jsx-a11y')] = value
            return acc
          },
          {}
        )
      }
    })
  }

  if (options.react) {
    configs.unshift({
      name: 'yelaiii/react',
      plugins: {
        'yelaiii-react': pluginReact,
        'yelaiii-react-refresh': pluginReactRefresh
      },
      rules: {
        'yelaiii-react/function-component-definition': [
          'error',
          {
            namedComponents: ['arrow-function'],
            unnamedComponents: 'arrow-function'
          }
        ],
        'yelaiii-react/prop-types': 'off',
        'yelaiii-react/react-in-jsx-scope': 'off',
        'yelaiii-react-refresh/only-export-components': [
          'warn',
          { allowConstantExport: true }
        ]
      },
      settings: {
        react: {
          version: 'detect'
        }
      }
    })
  }

  return antfu(
    { stylistic: false, ...options },
    {
      name: 'yelaiii/rewrite',
      rules: {
        'ts/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/no-explicit-any': 'off',
        'react-hooks/exhaustive-deps': 'off',
        'curly': ['error', 'multi-or-nest'],
        'antfu/if-newline': 'off',
        'antfu/top-level-function': 'off',
        'eslint-comments/no-unlimited-disable': 'off',
        'no-console': 'warn',
        'test/prefer-lowercase-title': 'off'
      }
    },
    {
      name: 'yelaiii/sort',
      rules: {
        'perfectionist/sort-array-includes': [
          'error',
          {
            order: 'asc',
            type: 'alphabetical'
          }
        ],
        'perfectionist/sort-imports': [
          'error',
          {
            groups: [
              'type',
              ['builtin', 'external'],
              'internal-type',
              ['internal'],
              ['parent-type', 'sibling-type', 'index-type'],
              ['parent', 'sibling', 'index'],
              'object',
              'style',
              'side-effect-style',
              'unknown'
            ],
            internalPattern: ['^~/.*', '^@/.*'],
            newlinesBetween: 'always',
            order: 'asc',
            type: 'natural'
          }
        ],
        'perfectionist/sort-interfaces': [
          'error',
          {
            groups: ['unknown', 'method', 'multiline'],
            order: 'asc',
            type: 'alphabetical'
          }
        ],
        'perfectionist/sort-jsx-props': [
          'error',
          {
            customGroups: {
              callback: 'on*',
              reserved: ['key', 'ref']
            },
            groups: [
              'shorthand',
              'reserved',
              'multiline',
              'unknown',
              'callback'
            ],
            order: 'asc',
            type: 'alphabetical'
          }
        ],
        'perfectionist/sort-union-types': [
          'error',
          {
            groups: [
              'conditional',
              'function',
              'import',
              'intersection',
              'keyword',
              'literal',
              'named',
              'object',
              'operator',
              'tuple',
              'union',
              'nullish'
            ],
            order: 'asc',
            specialCharacters: 'keep',
            type: 'alphabetical'
          }
        ]
      }
    },
    {
      ignores: ['**/generated', '**/dist', '**/build']
    },
    ...configs
  )
}
