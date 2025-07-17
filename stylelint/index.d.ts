declare module '@yelaiii/stylelint' {
  export type StyleLint = (
    overrides?: Partial<import('stylelint').Config>
  ) => import('stylelint').Config
  export const stylelint: StyleLint
}
