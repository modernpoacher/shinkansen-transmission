import {
  expect
} from 'chai'

import {
  toNumber
} from 'shinkansen-transmission/transmission/common/transform'

describe('shinkansen-transmission/transmission/common/transform', () => {
  it('is a function', () => {
    expect(toNumber)
      .to.be.a('function')
  })

  describe('With an argument', () => {
    describe('Argument is a number', () => it('returns a number', () => expect(toNumber(0)).to.equal(0)))

    describe('Argument is a string with the value zero', () => it('returns a number', () => expect(toNumber('0')).to.equal(0)))

    describe('Argument is a zero-length string', () => it('throws', () => expect(() => toNumber('')).to.throw('Invalid `number`')))

    describe('Argument is a string with any other value', () => it('throws', () => expect(() => toNumber('MOCK STRING')).to.throw('Invalid `number`')))

    describe('Argument is an array', () => it('throws', () => expect(() => toNumber([])).to.throw('Invalid `number`')))

    describe('Argument is an object', () => it('throws', () => expect(() => toNumber({})).to.throw('Invalid `number`')))

    describe('Argument is boolean true', () => it('returns 1', () => expect(toNumber(true)).to.equal(1)))

    describe('Argument is boolean false', () => it('returns 0', () => expect(toNumber(false)).to.equal(0)))

    describe('Argument is null', () => it('throws', () => expect(() => toNumber(null)).to.throw('Invalid `number`')))

    describe('Argument is undefined', () => it('throws', () => expect(() => toNumber(undefined)).to.throw('Invalid `number`')))
  })

  // @ts-ignore
  describe('Without an argument', () => it('throws', () => expect(() => toNumber()).to.throw('Invalid `number`')))
})
