/** @type {import('@yelaiii/prettier').Prettier} */
export const prettier = (override = {}) => ({
  singleQuote: true,
  semi: false,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'none',
  printWidth: 80,
  arrowParens: 'avoid',
  endOfLine: 'lf',
  bracketSpacing: true,
  bracketSameLine: false,
  jsxSingleQuote: true,
  singleAttributePerLine: true,
  quoteProps: 'consistent',
  objectWrap: 'preserve',
  ...override
})
