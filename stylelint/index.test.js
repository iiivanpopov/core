import { describe, it, expect } from 'vitest'
import { stylelint } from './index.js'

describe('stylelint()', () => {
  it('returns base config without sorting', () => {
    const config = stylelint({ sort: false })

    expect(config).toMatchObject({
      extends: ['stylelint-config-standard'],
      plugins: [],
      rules: {}
    })
  })

  it('returns config with sorting enabled', () => {
    const config = stylelint({ sort: true })

    expect(config.plugins).toContain('stylelint-order')
    expect(config.rules['order/order']).toBeDefined()
    expect(config.rules['order/properties-order']).toBeDefined()
    expect(config.rules['order/properties-alphabetical-order']).toBe(null)
  })

  it('overrides config using overrides argument', () => {
    const override = {
      rules: {
        'color-hex-case': 'lower'
      }
    }

    const config = stylelint({ sort: false, overrides: override })

    expect(config.rules['color-hex-case']).toBe('lower')
  })
})
