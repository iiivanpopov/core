import antfu from '@antfu/eslint-config'
import pluginNext from '@next/eslint-plugin-next'
import pluginJsxA11y from 'eslint-plugin-jsx-a11y'
import pluginReactRefresh from 'eslint-plugin-react-refresh'

/** @type {import('@yelaiii/eslint').ESLint} */
export const eslint = (
  { jsxA11y = false, next = false, ...options } = {},
  ...configs
) => {
  if (jsxA11y) {
    configs.unshift({
      name: 'yelaiii/jsx-a11y',
      plugins: {
        'yelaiii-jsx-a11y': pluginJsxA11y,
      },
      rules: {
        ...Object.entries(pluginJsxA11y.flatConfigs.recommended.rules).reduce(
          (acc, [key, value]) => {
            acc[key.replace('jsx-a11y', 'yelaiii-jsx-a11y')] = value
            return acc
          },
          {}
        ),
      },
    })
  }

  if (next) {
    configs.unshift({
      name: 'yelaiii/next',
      plugins: {
        'yelaiii-next': pluginNext,
      },
      rules: {
        ...Object.entries({ ...pluginNext.configs.recommended.rules }).reduce(
          (acc, [key, value]) => {
            acc[key.replace('@next/next', 'yelaiii-next')] = value
            return acc
          },
          {}
        ),
      },
    })
  }

  if (options.react) {
    configs.unshift(
      {
        name: 'yelaiii/react-refresh',
        plugins: {
          'yelaiii-react-refresh': pluginReactRefresh,
        },
        rules: {
          'yelaiii-react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
          ],
        },
      },
      {
        name: 'yelaiii/react-overrides',
        rules: {
          'react/function-component-definition': [
            'error',
            {
              namedComponents: ['arrow-function'],
              unnamedComponents: 'arrow-function',
            },
          ],
          'react/prop-types': 'off',
          'react/react-in-jsx-scope': 'off',
        },
        settings: {
          react: {
            version: 'detect',
          },
        },
      }
    )
  }

  return antfu(
    {
      stylistic: false,
      ...options,
    },
    {
      name: 'yelaiii/rewrite',
      rules: {
        // TypeScript rules
        'ts/consistent-type-definitions': ['error', 'interface'], // Prefer interfaces over types
        '@typescript-eslint/no-explicit-any': 'off', // Sometimes y'all need it

        // React rules
        'react-hooks/exhaustive-deps': 'off', // It's stupid

        // Stylistic rules
        curly: ['error', 'multi-or-nest'], // Prefer compact if statements
        'antfu/if-newline': 'off',
        'antfu/top-level-function': 'off', // Prefer arrow functions

        // ESLint comments
        'eslint-comments/no-unlimited-disable': 'off', // TanStack Router routeTree
      },
    },
    {
      name: 'yelaiii/sort',
      rules: {
        'perfectionist/sort-array-includes': [
          'error',
          {
            order: 'asc',
            type: 'alphabetical',
          },
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
              'unknown',
            ],
            internalPattern: ['^~/.*', '^@/.*'],
            newlinesBetween: 'always',
            order: 'asc',
            type: 'natural',
          },
        ],
        'perfectionist/sort-interfaces': [
          'error',
          {
            groups: ['unknown', 'method', 'multiline'],
            order: 'asc',
            type: 'alphabetical',
          },
        ],
        'perfectionist/sort-jsx-props': [
          'error',
          {
            customGroups: {
              callback: 'on*',
              reserved: ['key', 'ref'],
            },
            groups: [
              'shorthand',
              'reserved',
              'multiline',
              'unknown',
              'callback',
            ],
            order: 'asc',
            type: 'alphabetical',
          },
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
              'nullish',
            ],
            order: 'asc',
            specialCharacters: 'keep',
            type: 'alphabetical',
          },
        ],
      },
    },
    {
      ignores: ['**/generated', '**/dist', '**/build'],
    },
    ...configs
  )
}
