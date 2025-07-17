declare module '@yelaiii/stylelint' {
  export type Config = import('stylelint').Config
  export type StyleLintParams = { sort?: boolean; overrides?: Partial<Config> }
  export type StyleLint = (params: StyleLintParams) => Config
  export type PlainRules = (rules: Record<string, any>[]) => Record<string, any>
  export const stylelint: StyleLint
}
