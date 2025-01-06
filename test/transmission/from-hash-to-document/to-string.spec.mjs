import debug from 'debug'

import {
  expect
} from 'chai'

import { toString } from 'shinkansen-transmission/transmission/from-hash-to-document'

describe('shinkansen-transmission/transmission/from-hash-to-document/to-string', () => {
  before(() => {
    const {
      env: {
        DEBUG
      }
    } = process

    if (DEBUG) debug.enable(DEBUG)
  })

  it('is a function', () => {
    expect(toString)
      .to.be.a('function')
  })

  describe('Argument is a string with the value zero', () => it('returns a number', () => expect(toString('0')).to.equal('0')))

  describe('Argument is a zero-length string', () => it('returns a string', () => expect(toString('')).to.equal('')))

  describe('Argument is a string with any other value', () => it('returns a string', () => expect(toString('MOCK STRING')).to.equal('MOCK STRING')))

  describe('Argument is a number', () => it('returns a string', () => expect(toString(0)).to.equal('0')))

  describe('Argument is an array', () => it('returns a string', () => expect(toString([])).to.equal('[]')))

  describe('Argument is an object', () => it('returns a string', () => expect(toString({})).to.equal('{}')))

  describe('Argument is true', () => it('returns true', () => expect(toString(true)).to.equal('true')))

  describe('Argument is false', () => it('returns false', () => expect(toString(false)).to.equal('false')))

  describe('Argument is null', () => it('returns a string', () => expect(toString(null)).to.equal('null')))

  describe('Argument is undefined', () => it('returns undefined', () => expect(toString(undefined)).to.equal(undefined)))
})
