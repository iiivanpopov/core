declare module '@yelaiii/prettier' {
  export type Config = import('prettier').Config
  export type Prettier = (overrides?: Partial<Config>) => Config
  export const prettier: Prettier
}
