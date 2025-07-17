import { orderProperties } from './config/properties.js'
import { orderRules } from './config/rules.js'

/** @type {import('@yelaiii/stylelint').StyleLint} */
export const stylelint = (overrides = {}) => ({
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-order'],
  rules: {
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
  ignoreFiles: ['**/dist/*.css'],
  ...overrides,
})
