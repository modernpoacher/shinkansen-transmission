/**
 *  @typedef {TransmissionTypes.ArrayLiteralType} ArrayLiteralType
 *  @typedef {TransmissionTypes.ObjectLiteralType} ObjectLiteralType
 *  @typedef {TransmissionTypes.SchemaType} SchemaType
 *  @typedef {TransmissionTypes.HashType} HashType
 */

import {
  expect
} from 'chai'

import transformStringSchema from '#transmission/transmission/from-document-to-hash/string'

describe('#transmission/transmission/from-document-to-hash/string', () => {
  it('is a function', () => {
    expect(transformStringSchema)
      .to.be.a('function')
  })

  describe('Document is defined', () => {
    describe('Transforming `string` type schemas', () => {
      it('transforms `string` type schemas with `enum`', () => {
        const document = 'mock string (2)'

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'string',
          enum: [
            'mock string (1)',
            'mock string (2)'
          ]
        }

        const hash = {
          '#/': '1'
        }

        return expect(transformStringSchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `string` type schemas with `anyOf`', () => {
        const document = 'mock array type index string (2)'

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'string',
          anyOf: [
            { const: 'mock array type index string (1)' },
            { const: 'mock array type index string (2)' },
            { const: 'mock array type index string (3)' }
          ]
        }

        const hash = {
          '#/': '1'
        }

        return expect(transformStringSchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `string` type schemas with `oneOf`', () => {
        const document = 'mock array type index string (2)'

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'string',
          oneOf: [
            { const: 'mock array type index string (1)' },
            { const: 'mock array type index string (2)' },
            { const: 'mock array type index string (3)' }
          ]
        }

        const hash = {
          '#/': '1'
        }

        return expect(transformStringSchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `string` type schemas', () => {
        const document = 'mock string'

        /**
         *  @type {SchemaType}
         */
        const schema = { type: 'string' }

        const hash = {
          '#/': 'mock string'
        }

        return expect(transformStringSchema(document, schema))
          .to.eql(hash)
      })
    })
  })

  describe('Document is undefined', () => {
    it('transforms', () => expect(transformStringSchema(undefined, { type: 'string' })).to.eql({ '#/': '' }))
  })
})
