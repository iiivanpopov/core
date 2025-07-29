import antfu from '@antfu/eslint-config'
import pluginJsxA11y from 'eslint-plugin-jsx-a11y'

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
          'react/no-array-index-key': 'warn'
        }
      },
      ...options
    },
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
        'react-naming-convention/filename': ['warn', 'PascalCase']
      }
    },
    {
      files: ['src/**/utils/**/*.ts', 'src/**/helpers/**/*.ts'],
      rules: {
        'react-naming-convention/filename': ['warn', 'camelCase']
      }
    },
    {
      name: 'yelaiii/typescript-enhancements',
      languageOptions: {
        parserOptions: {
          project: 'tsconfig.app.json',
          tsconfigRootDir: process.cwd()
        }
      },
      files: ['src/**/*.{ts,tsx}'],
      ignores: ['**/*.d.ts', '**/*.config.*', '**/node_modules/**'],
      rules: {
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/prefer-readonly': 'warn',
        '@typescript-eslint/prefer-readonly-parameter-types': 'off',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            prefer: 'type-imports',
            disallowTypeAnnotations: false
          }
        ],
        '@typescript-eslint/consistent-type-assertions': [
          'error',
          {
            assertionStyle: 'as',
            objectLiteralTypeAssertions: 'allow'
          }
        ]
      }
    },
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
        ],
        'prefer-template': 'error',
        'no-useless-concat': 'error'
      }
    },
    {
      name: 'yelaiii/rewrite',
      rules: {
        'ts/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/no-explicit-any': 'warn',
        'react-hooks/exhaustive-deps': 'off',
        'curly': ['error', 'multi-or-nest'],
        'antfu/if-newline': 'off',
        'antfu/top-level-function': 'off',
        'eslint-comments/no-unlimited-disable': 'off',
        'no-console': 'warn',
        'test/prefer-lowercase-title': 'off',
        'node/prefer-global/process': 'off',
        'eqeqeq': ['error', 'always', { null: 'ignore' }],
        'no-nested-ternary': 'warn'
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
        'complexity': 'off',
        'no-console': 'off'
      }
    },
    {
      files: [
        '*.config.{js,ts}',
        'vite.config.*',
        'vitest.config.*',
        '**/*.d.ts'
      ],
      rules: {
        'no-console': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'complexity': 'off',
        'max-lines-per-function': 'off'
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
        '**/public/sw.js',
        '**/.nuxt',
        '**/.output',
        '**/.vitepress/cache'
      ]
    },
    ...configs
  )
}
