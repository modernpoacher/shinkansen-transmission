import debug from 'debug'

import {
  expect
} from 'chai'

import {
  toBoolean
} from 'shinkansen-transmission/transmission/common/transform'

describe('shinkansen-transmission/transmission/transmission/common/transform', () => {
  before(() => {
    const {
      env: {
        DEBUG
      }
    } = process

    if (DEBUG) debug.enable(DEBUG)
  })

  it('is a function', () => {
    expect(toBoolean)
      .to.be.a('function')
  })

  describe('With an argument', () => {
    describe('Argument is true', () => it('returns true', () => expect(toBoolean(true)).to.be.true))

    describe('Argument is false', () => it('returns false', () => expect(toBoolean(false)).to.be.false))

    describe('Argument is a string with value `true`', () => it('returns true', () => expect(toBoolean('true')).to.be.true))

    describe('Argument is a string with value `false`', () => it('returns false', () => expect(toBoolean('false')).to.be.false))

    describe('Argument is a string with any other value', () => it('throws', () => expect(() => toBoolean('MOCK STRING')).to.throw('Invalid `boolean`')))

    describe('Argument is a number', () => it('throws', () => expect(() => toBoolean(0)).to.throw('Invalid `boolean`')))

    describe('Argument is an array', () => it('throws', () => expect(() => toBoolean([])).to.throw('Invalid `boolean`')))

    describe('Argument is an object', () => it('throws', () => expect(() => toBoolean({})).to.throw('Invalid `boolean`')))

    describe('Argument is null', () => it('throws', () => expect(() => toBoolean(null)).to.throw('Invalid `boolean`')))

    describe('Argument is undefined', () => it('throws', () => expect(() => toBoolean(undefined)).to.throw('Invalid `boolean`')))
  })

  // @ts-ignore
  describe('Without an argument', () => it('throws', () => expect(() => toBoolean()).to.throw('Invalid `boolean`')))
})
