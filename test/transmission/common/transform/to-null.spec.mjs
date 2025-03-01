import {
  expect
} from 'chai'

import {
  toNull
} from 'shinkansen-transmission/transmission/common/transform'

describe('shinkansen-transmission/transmission/common/transform', () => {
  it('is a function', () => {
    expect(toNull)
      .to.be.a('function')
  })

  describe('With an argument', () => {
    describe('Argument is null', () => it('returns null', () => expect(toNull(null)).to.be.null))

    describe('Argument is a string with value `null`', () => it('returns null', () => expect(toNull('null')).to.be.null))

    describe('Argument is a string with any other value', () => it('throws', () => expect(() => toNull('MOCK STRING')).to.throw('Invalid `null`')))

    describe('Argument is a number', () => it('throws', () => expect(() => toNull(0)).to.throw('Invalid `null`')))

    describe('Argument is an array', () => it('throws', () => expect(() => toNull([])).to.throw('Invalid `null`')))

    describe('Argument is an object', () => it('throws', () => expect(() => toNull({})).to.throw('Invalid `null`')))

    describe('Argument is a boolean', () => it('throws', () => expect(() => toNull(false)).to.throw('Invalid `null`')))

    describe('Argument is undefined', () => it('throws', () => expect(() => toNull(undefined)).to.throw('Invalid `null`')))
  })

  // @ts-ignore
  describe('Without an argument', () => it('throws', () => expect(() => toNull()).to.throw('Invalid `null`')))
})
