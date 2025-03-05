import {
  expect
} from 'chai'

import {
  toString
} from '#transmission/transmission/common/transform'

describe('#transmission/transmission/common/transform', () => {
  it('is a function', () => {
    expect(toString)
      .to.be.a('function')
  })

  describe('With an argument', () => {
    describe('Argument is a string with the value zero', () => it('returns a number', () => expect(toString('0')).to.equal('0')))

    describe('Argument is a zero-length string', () => it('returns a string', () => expect(toString('')).to.equal('')))

    describe('Argument is a string with any other value', () => it('returns a string', () => expect(toString('MOCK STRING')).to.equal('MOCK STRING')))

    describe('Argument is a number', () => it('returns a string with value `0`', () => expect(toString(0)).to.equal('0')))

    describe('Argument is an array', () => it('returns a string with value `[]`', () => expect(toString([])).to.equal('[]')))

    describe('Argument is an object', () => it('returns a string with value `{}`', () => expect(toString({})).to.equal('{}')))

    describe('Argument is true', () => it('returns a string with value `true`', () => expect(toString(true)).to.equal('true')))

    describe('Argument is false', () => it('returns a string with value `false`', () => expect(toString(false)).to.equal('false')))

    describe('Argument is null', () => it('returns a string with value `null`', () => expect(toString(null)).to.equal('null')))

    describe('Argument is undefined', () => it('returns a string with value `undefined`', () => expect(toString(undefined)).to.equal(undefined)))
  })

  // @ts-ignore
  describe('Without an argument', () => it('returns a string with value `undefined`', () => expect(toString()).to.equal(undefined)))
})
