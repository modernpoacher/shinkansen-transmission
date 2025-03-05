/**
 *  @typedef {TransmissionTypes.ArrayLiteralType} ArrayLiteralType
 *  @typedef {TransmissionTypes.ObjectLiteralType} ObjectLiteralType
 *  @typedef {TransmissionTypes.SchemaType} SchemaType
 *  @typedef {TransmissionTypes.HashType} HashType
 */

import {
  expect
} from 'chai'

import transformNumberSchema from '#transmission/transmission/from-document-to-hash/number'

describe('#transmission/transmission/from-document-to-hash/number', () => {
  it('is a function', () => {
    expect(transformNumberSchema)
      .to.be.a('function')
  })

  describe('Document is defined', () => {
    describe('Transforming `number` type schemas', () => {
      it('transforms `number` type schemas with `enum`', () => {
        const document = 3

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'number',
          enum: [
            1,
            2,
            3
          ]
        }

        const hash = {
          '#/': '2'
        }

        return expect(transformNumberSchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `number` type schemas with `anyOf`', () => {
        const document = 3

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'number',
          anyOf: [
            { const: 1 },
            { const: 2 },
            { const: 3 }
          ]
        }

        const hash = {
          '#/': '2'
        }

        return expect(transformNumberSchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `number` type schemas with `oneOf`', () => {
        const document = 3

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'number',
          oneOf: [
            { const: 1 },
            { const: 2 },
            { const: 3 }
          ]
        }

        const hash = {
          '#/': '2'
        }

        return expect(transformNumberSchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `number` type schemas', () => {
        const document = 1

        /**
         *  @type {SchemaType}
         */
        const schema = { type: 'number' }

        const hash = {
          '#/': '1'
        }

        return expect(transformNumberSchema(document, schema))
          .to.eql(hash)
      })
    })
  })

  describe('Document is undefined', () => {
    it('transforms', () => expect(transformNumberSchema(undefined, { type: 'number' })).to.eql({ '#/': '' }))
  })
})
