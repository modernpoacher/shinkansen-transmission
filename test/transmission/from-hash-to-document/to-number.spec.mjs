import debug from 'debug'

import { expect } from 'chai'

import { toNumber } from 'shinkansen-transmission/transmission/from-hash-to-document'

describe('shinkansen-transmission/transmission/from-hash-to-document/to-number', () => {
  before(() => {
    const {
      env: {
        DEBUG
      }
    } = process

    if (DEBUG) debug.enable(DEBUG)
  })

  it('is a function', () => {
    expect(toNumber)
      .to.be.a('function')
  })

  describe('Argument is a number', () => it('returns a number', () => expect(toNumber(0)).to.equal(0)))

  describe('Argument is a string with the value zero', () => it('returns a number', () => expect(toNumber('0')).to.equal(0)))

  describe('Argument is a zero-length string', () => it('throws', () => expect(() => toNumber('')).to.throw))

  describe('Argument is a string with any other value', () => it('throw', () => expect(() => toNumber('MOCK STRING')).to.throw))

  describe('Argument is undefined', () => it('returns undefined', () => expect(() => toNumber(undefined)).to.throw))

  describe('Argument is null', () => it('returns a number', () => expect(() => toNumber(null)).to.throw))

  describe('Argument is true', () => it('returns true', () => expect(() => toNumber(true)).to.throw))

  describe('Argument is false', () => it('returns false', () => expect(() => toNumber(false)).to.throw))

  describe('Argument is an object', () => it('returns a number', () => expect(() => toNumber({})).to.throw))

  describe('Argument is an array', () => it('returns a number', () => expect(() => toNumber([])).to.throw))
})
