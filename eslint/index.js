import antfu from '@antfu/eslint-config'
import pluginJsxA11y from 'eslint-plugin-jsx-a11y'
import pluginReact from 'eslint-plugin-react'

/** @type {import('@yelaiii/eslint').ESLint} */
export const eslint = ({ ...options } = {}, ...configs) => {
  return antfu(
    {
      stylistic: false,
      typescript: true,
      react: {
        overrides: {
          'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true }
          ],
          'react-naming-convention/component-name': [
            'error',
            {
              rule: 'PascalCase'
            }
          ],
          'react-naming-convention/context-name': 'error',
          'react-naming-convention/use-state': 'error',
          'react/jsx-no-bind': [
            'warn',
            {
              ignoreRefs: true,
              allowArrowFunctions: true,
              allowFunctions: false,
              allowBind: false
            }
          ],
          'react/jsx-no-leaked-render': 'error',
          'react/no-array-index-key': 'warn'
        }
      },
      ...options
    },
    {
      plugins: {
        'jsx-a11y': pluginJsxA11y
      },
      rules: {
        ...pluginJsxA11y.flatConfigs.recommended.rules,
        'jsx-a11y/no-aria-hidden-on-focusable': 'error',
        'jsx-a11y/prefer-tag-over-role': 'warn'
      }
    },
    {
      files: ['src/**/*.{ts,tsx}'],
      ignore: ['**/index.{ts,tsx}'],
      rules: {
        '@eslint-react/naming-convention/filename': ['warn', 'PascalCase']
      }
    },
    {
      files: ['src/**/hooks/**/use*.{ts,tsx}'],
      rules: {
        '@eslint-react/naming-convention/filename': ['warn', 'camelCase']
      }
    },
    {
      files: ['src/**/utils/**/*.{ts,tsx}', 'src/**/helpers/**/*.{ts,tsx}'],
      rules: {
        '@eslint-react/naming-convention/filename': ['warn', 'camelCase']
      }
    },
    {
      files: ['src/**/constants/**/*.{ts,tsx}', 'src/**/*.constants.{ts,tsx}'],
      rules: {
        '@eslint-react/naming-convention/filename': [
          'warn',
          'SCREAMING_SNAKE_CASE'
        ]
      }
    },
    {
      plugins: {
        '@yelaiii/react': pluginReact
      },
      rules: {
        '@yelaiii/react/function-component-definition': [
          'error',
          {
            namedComponents: 'arrow-function',
            unnamedComponents: 'arrow-function'
          }
        ]
      }
    },
    {
      name: 'yelaiii/typescript-enhancements',
      languageOptions: {
        parserOptions: {
          project: true
        }
      },
      files: ['**/*.{ts,tsx}'],
      rules: {
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/no-unnecessary-condition': 'warn',
        '@typescript-eslint/prefer-readonly': 'warn',
        '@typescript-eslint/prefer-readonly-parameter-types': 'off',
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          {
            accessibility: 'explicit',
            overrides: {
              constructors: 'no-public'
            }
          }
        ],
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-unsafe-assignment': 'warn',
        '@typescript-eslint/no-unsafe-call': 'warn',
        '@typescript-eslint/no-unsafe-member-access': 'warn',
        '@typescript-eslint/no-unsafe-return': 'warn'
      }
    },
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
        ]
      }
    },
    {
      name: 'yelaiii/rewrite',
      rules: {
        'ts/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/no-explicit-any': 'warn',
        'react-hooks/exhaustive-deps': 'warn',
        'curly': ['error', 'multi-or-nest'],
        'antfu/if-newline': 'off',
        'antfu/top-level-function': 'off',
        'eslint-comments/no-unlimited-disable': 'off',
        'no-console': 'warn',
        'test/prefer-lowercase-title': 'off',
        'node/prefer-global/process': 'off',
        'complexity': ['warn', 10],
        'max-depth': ['warn', 4]
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
    },
    {
      files: ['**/*.{test,spec}.{ts,tsx}', '**/__tests__/**/*.{ts,tsx}'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        'no-magic-numbers': 'off',
        'max-lines-per-function': 'off',
        'complexity': 'off'
      }
    },
    {
      files: ['*.config.{js,ts}', 'vite.config.*', 'vitest.config.*'],
      rules: {
        'no-console': 'off',
        '@typescript-eslint/no-explicit-any': 'off'
      }
    },
    {
      ignores: [
        '**/generated',
        '**/dist',
        '**/build',
        '**/coverage',
        '**/.next',
        '**/node_modules',
        '**/*.min.js',
        '**/public/sw.js'
      ]
    },
    ...configs
  )
}
