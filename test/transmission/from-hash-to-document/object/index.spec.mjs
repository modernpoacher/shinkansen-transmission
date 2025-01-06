import debug from 'debug'

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
  before(() => {
    const {
      env: {
        DEBUG
      }
    } = process

    if (DEBUG) debug.enable(DEBUG)
  })

  it('is a function', () => {
    expect(transformObjectSchema)
      .to.be.a('function')
  })

  describe('Hash is defined and schema is defined', () => {
    describe('With values', () => {
      describe('Transforming `object` type schemas', () => {
        it('transforms `object` type schemas with `enum` (string)', () => {
          const values = {
            '#/': '1'
          }

          const schema = {
            type: 'object',
            enum: [
              'mock array type index string (1)',
              'mock array type index string (2)',
              'mock array type index string (3)'
            ]
          }

          const document = 'mock array type index string (2)'

          return expect(transformObjectSchema(values, schema))
            .to.eql(document)
        })

        it('transforms `object` type schemas with `anyOf` (string)', () => {
          const values = {
            '#/': '1'
          }

          const schema = {
            type: 'object',
            anyOf: [
              'mock array type index string (1)',
              'mock array type index string (2)',
              'mock array type index string (3)'
            ]
          }

          const document = 'mock array type index string (2)'

          return expect(transformObjectSchema(values, schema))
            .to.eql(document)
        })

        it('transforms `object` type schemas with `oneOf` (string)', () => {
          const values = {
            '#/': '1'
          }

          const schema = {
            type: 'object',
            oneOf: [
              'mock array type index string (1)',
              'mock array type index string (2)',
              'mock array type index string (3)'
            ]
          }

          const document = 'mock array type index string (2)'

          return expect(transformObjectSchema(values, schema))
            .to.eql(document)
        })

        it('transforms `object` type schemas with `enum` (number)', () => {
          const values = {
            '#/': '1'
          }

          const schema = {
            type: 'object',
            enum: [
              1,
              2,
              3
            ]
          }

          const document = 2

          return expect(transformObjectSchema(values, schema))
            .to.eql(document)
        })

        it('transforms `object` type schemas with `anyOf` (number)', () => {
          const values = {
            '#/': '1'
          }

          const schema = {
            type: 'object',
            anyOf: [
              1,
              2,
              3
            ]
          }

          const document = 2

          return expect(transformObjectSchema(values, schema))
            .to.eql(document)
        })

        it('transforms `object` type schemas with `oneOf` (number)', () => {
          const values = {
            '#/': '1'
          }

          const schema = {
            type: 'object',
            oneOf: [
              1,
              2,
              3
            ]
          }

          const document = 2

          return expect(transformObjectSchema(values, schema))
            .to.eql(document)
        })

        it('transforms `object` type schemas with `enum` (boolean)', () => {
          const values = {
            '#/': '1'
          }

          const schema = {
            type: 'object',
            enum: [
              true,
              false,
              'mock array type index string (3)'
            ]
          }

          const document = false

          return expect(transformObjectSchema(values, schema))
            .to.eql(document)
        })

        it('transforms `object` type schemas with `anyOf` (boolean)', () => {
          const values = {
            '#/': '1'
          }

          const schema = {
            type: 'object',
            anyOf: [
              true,
              false,
              'mock array type index string (3)'
            ]
          }

          const document = false

          return expect(transformObjectSchema(values, schema))
            .to.eql(document)
        })

        it('transforms `object` type schemas with `oneOf` (boolean)', () => {
          const values = {
            '#/': '1'
          }

          const schema = {
            type: 'object',
            oneOf: [
              true,
              false,
              'mock array type index string (3)'
            ]
          }

          const document = false

          return expect(transformObjectSchema(values, schema))
            .to.eql(document)
        })

        it('transforms `object` type schemas with `enum` (null)', () => {
          const values = {
            '#/': '0'
          }

          const schema = {
            type: 'object',
            enum: [
              null
            ]
          }

          const document = null

          return expect(transformObjectSchema(values, schema))
            .to.eql(document)
        })

        it('transforms `object` type schemas with `anyOf` (null)', () => {
          const values = {
            '#/': '0'
          }

          const schema = {
            type: 'object',
            anyOf: [
              null
            ]
          }

          const document = null

          return expect(transformObjectSchema(values, schema))
            .to.eql(document)
        })

        it('transforms `object` type schemas with `oneOf` (null)', () => {
          const values = {
            '#/': '0'
          }

          const schema = {
            type: 'object',
            oneOf: [
              null
            ]
          }

          const document = null

          return expect(transformObjectSchema(values, schema))
            .to.eql(document)
        })

        it('transforms `object` type schemas with `enum`', () => {
          const values = {
            '#/one': '0',
            '#/two': '1'
          }

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

          return expect(transformObjectSchema(values, schema))
            .to.eql(document)
        })

        it('transforms `object` type schemas with `anyOf`', () => {
          const values = {
            '#/one': '0',
            '#/two': '1'
          }

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

          return expect(transformObjectSchema(values, schema))
            .to.eql(document)
        })

        it('transforms `object` type schemas with `oneOf`', () => {
          const values = {
            '#/one': '0',
            '#/two': '1'
          }

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

          return expect(transformObjectSchema(values, schema))
            .to.eql(document)
        })

        it('transforms `object` type schemas', () => {
          const values = {
            '#/one': 'mock object type key string (1)',
            '#/two': '1'
          }

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

          return expect(transformObjectSchema(values, schema))
            .to.eql(document)
        })
      })
    })

    describe('Without values', () => {
      describe('Transforming `object` type schemas', () => {
        it('transforms `object` type schemas with `enum`', () => {
          const values = {}

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

          return expect(transformObjectSchema(values, schema))
            .to.eql(document)
        })

        it('transforms `object` type schemas with `anyOf`', () => {
          const values = {}

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

          return expect(transformObjectSchema(values, schema))
            .to.eql(document)
        })

        it('transforms `object` type schemas with `oneOf`', () => {
          const values = {}

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

          return expect(transformObjectSchema(values, schema))
            .to.eql(document)
        })

        it('transforms `object` type schemas', () => {
          const values = {}

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

          return expect(transformObjectSchema(values, schema))
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
