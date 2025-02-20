/**
 *  @typedef {TransmissionTypes.ArrayLiteralType} ArrayLiteralType
 *  @typedef {TransmissionTypes.ObjectLiteralType} ObjectLiteralType
 *  @typedef {TransmissionTypes.SchemaType} SchemaType
 *  @typedef {TransmissionTypes.HashType} HashType
 */

import debug from 'debug'

import {
  expect
} from 'chai'

import transformNullSchema from 'shinkansen-transmission/transmission/from-document-to-hash/null'

describe('shinkansen-transmission/transmission/from-document-to-hash/null', () => {
  before(() => {
    const {
      env: {
        DEBUG
      }
    } = process

    if (DEBUG) debug.enable(DEBUG)
  })

  it('is a function', () => {
    expect(transformNullSchema)
      .to.be.a('function')
  })

  describe('Document is defined', () => {
    describe('Transforming `null` type schemas', () => {
      it('transforms `null` type schemas with `enum`', () => {
        const document = null

        /**
         *  @type {SchemaType}
         */
        const schema = { type: 'null', enum: [null] }

        const hash = {
          '#/': '0'
        }

        return expect(transformNullSchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `null` type schemas with `anyOf`', () => {
        const document = null

        /**
         *  @type {SchemaType}
         */
        const schema = { type: 'null', anyOf: [null] }

        const hash = {
          '#/': '0'
        }

        return expect(transformNullSchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `null` type schemas with `oneOf`', () => {
        const document = null

        /**
         *  @type {SchemaType}
         */
        const schema = { type: 'null', oneOf: [null] }

        const hash = {
          '#/': '0'
        }

        return expect(transformNullSchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `null` type schemas', () => {
        const document = null

        /**
         *  @type {SchemaType}
         */
        const schema = { type: 'null' }

        const hash = {
          '#/': 'null'
        }

        return expect(transformNullSchema(document, schema))
          .to.eql(hash)
      })
    })
  })

  describe('Document is undefined', () => {
    it('transforms', () => expect(transformNullSchema(undefined, { type: 'null' })).to.eql({ '#/': '' }))
  })
})
