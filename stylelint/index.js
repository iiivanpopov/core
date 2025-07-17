import { orderProperties } from './config/properties.js'
import { orderRules } from './config/rules.js'
import { plainRules } from './utils/plainRules.js'

/** @type {import('@yelaiii/stylelint').StyleLint} */
export const stylelint = ({ overrides = {}, sort = true }) => {
  const plugins = sort ? ['stylelint-order'] : []
  const rules = sort
    ? [
        {
          'order/order': orderRules,
          'order/properties-order': orderProperties,
          'order/properties-alphabetical-order': null,
          'declaration-empty-line-before': [
            'always',
            {
              except: ['first-nested'],
              ignore: ['after-comment', 'after-declaration'],
            },
          ],
        },
      ]
    : []

  return {
    extends: ['stylelint-config-standard'],
    plugins,
    rules: plainRules(rules),
    ignoreFiles: ['**/dist/*.css'],
    ...overrides,
  }
}
