declare module '@yelaiii/eslint' {
  export type EslintOptions = import('@antfu/eslint-config').OptionsConfig &
    import('@antfu/eslint-config').TypedFlatConfigItem

  export type ESLint = (
    options?: EslintOptions,
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
