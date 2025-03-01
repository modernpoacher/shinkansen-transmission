/**
 *  @typedef {TransmissionTypes.ArrayLiteralType} ArrayLiteralType
 *  @typedef {TransmissionTypes.ObjectLiteralType} ObjectLiteralType
 *  @typedef {TransmissionTypes.SchemaType} SchemaType
 *  @typedef {TransmissionTypes.HashType} HashType
 */

import {
  expect
} from 'chai'

import transformObjectSchema from 'shinkansen-transmission/transmission/from-hash-to-document/object'

/**
 *  `transformObjectSchema` is an entry point to `fromHashToDocument`
 *
 *  The `uri` and `key` values are destructured from an object in the third position of the function arguments
 *
 *  Otherwise the behaviour is identical (as are these tests)
 */

describe('shinkansen-transmission/transmission/from-hash-to-document/object', () => {
  it('is a function', () => {
    expect(transformObjectSchema)
      .to.be.a('function')
  })

  describe('Hash is defined and schema is defined', () => {
    describe('Hash has values', () => {
      describe('Transforming `object` type schemas', () => {
        it('transforms `object` type schemas with `enum` (string)', () => {
          const hash = {
            '#/': '1'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'object',
            enum: [
              'mock array type index string (1)',
              'mock array type index string (2)',
              'mock array type index string (3)'
            ]
          }

          const document = 'mock array type index string (2)'

          return expect(transformObjectSchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `object` type schemas with `anyOf` (string)', () => {
          const hash = {
            '#/': '1'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'object',
            anyOf: [
              'mock array type index string (1)',
              'mock array type index string (2)',
              'mock array type index string (3)'
            ]
          }

          const document = 'mock array type index string (2)'

          return expect(transformObjectSchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `object` type schemas with `oneOf` (string)', () => {
          const hash = {
            '#/': '1'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'object',
            oneOf: [
              'mock array type index string (1)',
              'mock array type index string (2)',
              'mock array type index string (3)'
            ]
          }

          const document = 'mock array type index string (2)'

          return expect(transformObjectSchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `object` type schemas with `enum` (number)', () => {
          const hash = {
            '#/': '1'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'object',
            enum: [
              1,
              2,
              3
            ]
          }

          const document = 2

          return expect(transformObjectSchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `object` type schemas with `anyOf` (number)', () => {
          const hash = {
            '#/': '1'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'object',
            anyOf: [
              1,
              2,
              3
            ]
          }

          const document = 2

          return expect(transformObjectSchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `object` type schemas with `oneOf` (number)', () => {
          const hash = {
            '#/': '1'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'object',
            oneOf: [
              1,
              2,
              3
            ]
          }

          const document = 2

          return expect(transformObjectSchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `object` type schemas with `enum` (boolean)', () => {
          const hash = {
            '#/': '1'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'object',
            enum: [
              true,
              false
            ]
          }

          const document = false

          return expect(transformObjectSchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `object` type schemas with `anyOf` (boolean)', () => {
          const hash = {
            '#/': '1'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'object',
            anyOf: [
              true,
              false
            ]
          }

          const document = false

          return expect(transformObjectSchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `object` type schemas with `oneOf` (boolean)', () => {
          const hash = {
            '#/': '1'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'object',
            oneOf: [
              true,
              false
            ]
          }

          const document = false

          return expect(transformObjectSchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `object` type schemas with `enum` (null)', () => {
          const hash = {
            '#/': '0'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'object',
            enum: [
              null
            ]
          }

          const document = null

          return expect(transformObjectSchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `object` type schemas with `anyOf` (null)', () => {
          const hash = {
            '#/': '0'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'object',
            anyOf: [
              null
            ]
          }

          const document = null

          return expect(transformObjectSchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `object` type schemas with `oneOf` (null)', () => {
          const hash = {
            '#/': '0'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'object',
            oneOf: [
              null
            ]
          }

          const document = null

          return expect(transformObjectSchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `object` type schemas with `enum`', () => {
          const hash = {
            '#/one': '0',
            '#/two': '1'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'string',
                enum: [
                  'string (1)',
                  'string (2)'
                ]
              },
              two: {
                type: 'string',
                enum: [
                  'string (1)',
                  'string (2)'
                ]
              }
            }
          }

          const document = {
            one: 'string (1)',
            two: 'string (2)'
          }

          return expect(transformObjectSchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `object` type schemas with `anyOf`', () => {
          const hash = {
            '#/one': '0',
            '#/two': '1'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'string',
                anyOf: [
                  { const: 'string (1)' },
                  { const: 'string (2)' }
                ]
              },
              two: {
                type: 'string',
                anyOf: [
                  { const: 'string (1)' },
                  { const: 'string (2)' }
                ]
              }
            }
          }

          const document = {
            one: 'string (1)',
            two: 'string (2)'
          }

          return expect(transformObjectSchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `object` type schemas with `oneOf`', () => {
          const hash = {
            '#/one': '0',
            '#/two': '1'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'string',
                oneOf: [
                  { const: 'string (1)' },
                  { const: 'string (2)' }
                ]
              },
              two: {
                type: 'string',
                oneOf: [
                  { const: 'string (1)' },
                  { const: 'string (2)' }
                ]
              }
            }
          }

          const document = {
            one: 'string (1)',
            two: 'string (2)'
          }

          return expect(transformObjectSchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `object` type schemas', () => {
          const hash = {
            '#/one': 'mock object type key string (1)',
            '#/two': '1'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'object',
            properties: {
              one: { type: 'string' },
              two: { type: 'number' }
            }
          }

          const document = {
            one: 'mock object type key string (1)',
            two: 1
          }

          return expect(transformObjectSchema(hash, schema))
            .to.eql(document)
        })
      })
    })

    describe('Hash does not have values', () => {
      describe('Transforming `object` type schemas', () => {
        it('transforms `object` type schemas with `enum`', () => {
          /**
           *  @type {ObjectLiteralType}
           */
          const hash = {}

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'string',
                enum: [
                  'string (1)',
                  'string (2)'
                ]
              },
              two: {
                type: 'string',
                enum: [
                  'string (1)',
                  'string (2)'
                ]
              }
            }
          }

          const document = {
            one: undefined,
            two: undefined
          }

          return expect(transformObjectSchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `object` type schemas with `anyOf`', () => {
          /**
           *  @type {ObjectLiteralType}
           */
          const hash = {}

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'string',
                anyOf: [
                  { const: 'string (1)' },
                  { const: 'string (2)' }
                ]
              },
              two: {
                type: 'string',
                anyOf: [
                  { const: 'string (1)' },
                  { const: 'string (2)' }
                ]
              }
            }
          }

          const document = {
            one: undefined,
            two: undefined
          }

          return expect(transformObjectSchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `object` type schemas with `oneOf`', () => {
          /**
           *  @type {ObjectLiteralType}
           */
          const hash = {}

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'string',
                oneOf: [
                  { const: 'string (1)' },
                  { const: 'string (2)' }
                ]
              },
              two: {
                type: 'string',
                oneOf: [
                  { const: 'string (1)' },
                  { const: 'string (2)' }
                ]
              }
            }
          }

          const document = {
            one: undefined,
            two: undefined
          }

          return expect(transformObjectSchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `object` type schemas', () => {
          /**
           *  @type {ObjectLiteralType}
           */
          const hash = {}

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'object',
            properties: {
              one: { type: 'string' },
              two: { type: 'number' }
            }
          }

          const document = {
            one: undefined,
            two: undefined
          }

          return expect(transformObjectSchema(hash, schema))
            .to.eql(document)
        })
      })
    })
  })

  describe('Hash is undefined and schema is defined', () => {
    it('transforms `object` type schemas', () => expect(transformObjectSchema(undefined, { type: 'object' })).to.eql({}))
  })

  describe('Hash is defined and schema is undefined', () => {
    it('throws', () => expect(() => transformObjectSchema({})).to.throw('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1'))
  })

  describe('Hash is undefined and schema is undefined', () => {
    it('throws', () => expect(() => transformObjectSchema()).to.throw('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1'))
  })
})
