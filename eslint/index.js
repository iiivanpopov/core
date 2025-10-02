import antfu, { sortPackageJson, sortTsconfig } from '@antfu/eslint-config'
import pluginJsxA11y from 'eslint-plugin-jsx-a11y'

const configGroups = {
  react: [
    {
      name: 'yelaiii/jsx-a11y',
      plugins: {
        'jsx-a11y': pluginJsxA11y
      },
      rules: {
        ...pluginJsxA11y.flatConfigs.recommended.rules
      }
    },
    {
      files: ['src/**/*.tsx'],
      ignores: ['**/main.tsx'],
      rules: {
        'react-hooks/exhaustive-deps': 'off'
      }
    }
  ],

  typescript: [
    {
      name: 'yelaiii/typescript-basic',
      files: ['**/*.{ts,tsx}'],
      rules: {
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_'
          }
        ],
        'no-unused-vars': 'off',
        '@typescript-eslint/prefer-as-const': 'error',
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/ban-ts-comment': [
          'error',
          {
            'ts-expect-error': 'allow-with-description',
            'ts-ignore': false,
            'ts-nocheck': false,
            'ts-check': false
          }
        ]
      }
    }
  ],

  performance: [
    {
      name: 'yelaiii/performance',
      rules: {
        'no-await-in-loop': 'error',
        'prefer-const': 'error',
        'no-var': 'error',
        'object-shorthand': 'error',
        'prefer-destructuring': [
          'error',
          {
            array: true,
            object: true
          },
          {
            enforceForRenamedProperties: false
          }
        ],
        'prefer-template': 'error',
        'no-useless-concat': 'error'
      }
    }
  ],

  sorting: [
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
              reserved: ['key', 'ref'],
              data: 'data-*',
              aria: 'aria-*'
            },
            groups: [
              'shorthand',
              'reserved',
              'data',
              'aria',
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
        ],
        'perfectionist/sort-object-types': [
          'error',
          {
            order: 'asc',
            type: 'alphabetical'
          }
        ],
        'perfectionist/sort-enums': [
          'error',
          {
            order: 'asc',
            type: 'alphabetical'
          }
        ]
      }
    }
  ],

  base: [
    {
      name: 'yelaiii/base-rules',
      rules: {
        'curly': ['error', 'multi-or-nest'],
        'antfu/if-newline': 'off',
        'antfu/top-level-function': 'off',
        'eslint-comments/no-unlimited-disable': 'off',
        'no-console': 'off',
        'test/prefer-lowercase-title': 'off',
        'node/prefer-global/process': 'off',
        'eqeqeq': ['error', 'always', { null: 'ignore' }],
        'no-nested-ternary': 'error'
      }
    }
  ],

  ignores: [
    {
      ignores: [
        '**/generated',
        '**/dist',
        '**/build',
        '**/coverage',
        '**/.next',
        '**/node_modules',
        '**/*.min.js',
        '**/public/sw.js',
        '**/.nuxt',
        '**/.output',
        '**/.vitepress/cache'
      ]
    }
  ]
}

/**
 * @typedef { import('@antfu/eslint-config').OptionsConfig & import('@antfu/eslint-config').TypedFlatConfigItem } EslintOptions
 */
/** @type {(options?: EslintOptions, ...userConfigs: any[]) => any} */
export const eslint = (options = {}, ...userConfigs) => {
  const {
    react = false,
    typescript = false,
    performance = true,
    ignores = true,
    sorting = true,
    ...antfuOptions
  } = options

  const activeConfigs = []

  activeConfigs.push(...configGroups.base)

  if (react) activeConfigs.push(...configGroups.react)
  if (typescript) activeConfigs.push(...configGroups.typescript)
  if (performance) activeConfigs.push(...configGroups.performance)
  if (sorting) activeConfigs.push(...configGroups.sorting)
  if (ignores) activeConfigs.push(...configGroups.ignores)

  return antfu(
    {
      stylistic: false,
      typescript,
      react: react
        ? {
            overrides: {
              'react-refresh/only-export-components': [
                'error',
                { allowConstantExport: true }
              ],
              'react/no-array-index-key': 'error'
            }
          }
        : false,
      ...antfuOptions
    },
    ...activeConfigs,
    sortPackageJson(),
    sortTsconfig(),
    ...userConfigs
  )
}
