/** @type {import('@yelaiii/stylelint').PlainRules} */
export const plainRules = rules =>
  rules.flat(Infinity).reduce((acc, rule) => ({ ...acc, ...rule }), {})
