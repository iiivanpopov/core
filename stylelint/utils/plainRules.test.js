import { describe, it, expect } from 'vitest'
import { plainRules } from './plainRules'

describe('plainRules()', () => {
  it('merges an array of objects into one', () => {
    const result = plainRules([{ a: 1 }, { b: 2 }])
    expect(result).toEqual({ a: 1, b: 2 })
  })

  it('handles nested arrays', () => {
    const result = plainRules([[{ a: 1 }], [{ b: 2 }]])
    expect(result).toEqual({ a: 1, b: 2 })
  })

  it('prioritizes the last value on key conflicts', () => {
    const result = plainRules([{ a: 1 }, { a: 2 }])
    expect(result).toEqual({ a: 2 })
  })
})
