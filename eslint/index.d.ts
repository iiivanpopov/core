declare module '@yelaiii/eslint' {
  export type ESLint = (
    options?: import('@antfu/eslint-config').OptionsConfig & {
      jsxA11y?: boolean
      next?: boolean
    } & import('@antfu/eslint-config').TypedFlatConfigItem,
    ...userConfigs: import('@antfu/eslint-config').Awaitable<
      | import('@antfu/eslint-config').TypedFlatConfigItem
      | import('eslint-flat-config-utils').FlatConfigComposer<any, any>
      | import('@antfu/eslint-config').TypedFlatConfigItem[]
      | import('eslint').Linter.Config[]
    >[]
  ) => import('eslint-flat-config-utils').FlatConfigComposer<
    import('@antfu/eslint-config').TypedFlatConfigItem,
    import('@antfu/eslint-config').ConfigNames
  >
  export const eslint: ESLint
}
