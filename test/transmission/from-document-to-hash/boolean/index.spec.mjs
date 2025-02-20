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

import transformBooleanSchema from 'shinkansen-transmission/transmission/from-document-to-hash/boolean'

describe('shinkansen-transmission/transmission/from-document-to-hash/boolean', () => {
  before(() => {
    const {
      env: {
        DEBUG
      }
    } = process

    if (DEBUG) debug.enable(DEBUG)
  })

  it('is a function', () => {
    expect(transformBooleanSchema)
      .to.be.a('function')
  })

  describe('Document is defined', () => {
    describe('Transforming `boolean` type schemas', () => {
      it('transforms `boolean` type schemas with `enum`', () => {
        const document = false

        /**
         *  @type {SchemaType}
         */
        const schema = { type: 'boolean', enum: [true, false] }

        const hash = {
          '#/': '1'
        }

        return expect(transformBooleanSchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `boolean` type schemas with `anyOf`', () => {
        const document = false

        /**
         *  @type {SchemaType}
         */
        const schema = { type: 'boolean', anyOf: [true, false] }

        const hash = {
          '#/': '1'
        }

        return expect(transformBooleanSchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `boolean` type schemas with `oneOf`', () => {
        const document = false

        /**
         *  @type {SchemaType}
         */
        const schema = { type: 'boolean', oneOf: [true, false] }

        const hash = {
          '#/': '1'
        }

        return expect(transformBooleanSchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `boolean` type schemas', () => {
        const document = true

        /**
         *  @type {SchemaType}
         */
        const schema = { type: 'boolean' }

        const hash = {
          '#/': 'true'
        }

        return expect(transformBooleanSchema(document, schema))
          .to.eql(hash)
      })
    })
  })

  describe('Document is undefined', () => {
    it('transforms', () => expect(transformBooleanSchema(undefined, { type: 'boolean' })).to.eql({ '#/': '' }))
  })
})
