import debug from 'debug'

import {
  expect
} from 'chai'

import { toNull } from 'shinkansen-transmission/transmission/from-hash-to-document'

describe('shinkansen-transmission/transmission/from-hash-to-document/to-null', () => {
  before(() => {
    const {
      env: {
        DEBUG
      }
    } = process

    if (DEBUG) debug.enable(DEBUG)
  })

  it('is a function', () => {
    expect(toNull)
      .to.be.a('function')
  })

  describe('Argument is null', () => it('returns null', () => expect(toNull(null)).to.be.null))

  describe('Argument is a string with value `null`', () => it('returns null', () => expect(toNull('null')).to.be.null))

  describe('Argument is a string with any other value', () => it('throws', () => expect(() => toNull('MOCK STRING')).to.throw('Invalid `null`')))

  describe('Argument is a number', () => it('throws', () => expect(() => toNull(0)).to.throw('Invalid `null`')))

  describe('Argument is an array', () => it('throws', () => expect(() => toNull([])).to.throw('Invalid `null`')))

  describe('Argument is an object', () => it('throws', () => expect(() => toNull({})).to.throw('Invalid `null`')))

  describe('Argument is a boolean', () => it('throws', () => expect(() => toNull(false)).to.throw('Invalid `null`')))

  describe('Argument is undefined', () => it('throws', () => expect(() => toNull()).to.throw('Invalid `null`')))
})
