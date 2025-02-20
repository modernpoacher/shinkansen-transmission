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

import transformArraySchema from 'shinkansen-transmission/transmission/from-hash-to-document/array'

describe('shinkansen-transmission/transmission/from-hash-to-document/array', () => {
  before(() => {
    const {
      env: {
        DEBUG
      }
    } = process

    if (DEBUG) debug.enable(DEBUG)
  })

  it('is a function', () => {
    expect(transformArraySchema)
      .to.be.a('function')
  })

  describe('Hash is defined and schema is defined', () => {
    describe('Hash has values', () => {
      describe('Transforming `array` type schemas', () => {
        it('transforms `array` type schemas with `enum` (string)', () => {
          const hash = {
            '#/': '1'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            enum: [
              'mock array type index string (1)',
              'mock array type index string (2)',
              'mock array type index string (3)'
            ]
          }

          const document = 'mock array type index string (2)'

          return expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas with `anyOf` (string)', () => {
          const hash = {
            '#/': '1'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            anyOf: [
              'mock array type index string (1)',
              'mock array type index string (2)',
              'mock array type index string (3)'
            ]
          }

          const document = 'mock array type index string (2)'

          return expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas with `oneOf` (string)', () => {
          const hash = {
            '#/': '1'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            oneOf: [
              'mock array type index string (1)',
              'mock array type index string (2)',
              'mock array type index string (3)'
            ]
          }

          const document = 'mock array type index string (2)'

          return expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas with `enum` (number)', () => {
          const hash = {
            '#/': '1'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            enum: [
              1,
              2,
              3
            ]
          }

          const document = 2

          return expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas with `anyOf` (number)', () => {
          const hash = {
            '#/': '1'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            anyOf: [
              1,
              2,
              3
            ]
          }

          const document = 2

          return expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas with `oneOf` (number)', () => {
          const hash = {
            '#/': '1'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            oneOf: [
              1,
              2,
              3
            ]
          }

          const document = 2

          return expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas with `enum` (boolean)', () => {
          const hash = {
            '#/': '1'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            enum: [
              true,
              false
            ]
          }

          const document = false

          return expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas with `anyOf` (boolean)', () => {
          const hash = {
            '#/': '1'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            anyOf: [
              true,
              false
            ]
          }

          const document = false

          return expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas with `oneOf` (boolean)', () => {
          const hash = {
            '#/': '1'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            oneOf: [
              true,
              false
            ]
          }

          const document = false

          return expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas with `enum` (null)', () => {
          const hash = {
            '#/': '0'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            enum: [
              null
            ]
          }

          const document = null

          return expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas with `anyOf` (null)', () => {
          const hash = {
            '#/': '0'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            anyOf: [
              null
            ]
          }

          const document = null

          return expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas with `oneOf` (null)', () => {
          const hash = {
            '#/': '0'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            oneOf: [
              null
            ]
          }

          const document = null

          return expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        describe('Transforming `array` type schemas (`items` is an array of `string` type)', () => {
          it('transforms `array` type schemas (`items` is an object of `string` type with `enum`)', () => {
            const hash = {
              '#/0': '0',
              '#/1': '1',
              '#/2': '2'
            }

            /**
             *  @type {SchemaType}
             */
            const schema = {
              type: 'array',
              items: [
                {
                  type: 'string',
                  enum: [
                    'mock array type index string (1)',
                    'mock array type index string (2)',
                    'mock array type index string (3)'
                  ]
                },
                {
                  type: 'string',
                  enum: [
                    'mock array type index string (1)',
                    'mock array type index string (2)',
                    'mock array type index string (3)'
                  ]
                },
                {
                  type: 'string',
                  enum: [
                    'mock array type index string (1)',
                    'mock array type index string (2)',
                    'mock array type index string (3)'
                  ]
                }
              ]
            }

            const document = [
              'mock array type index string (1)',
              'mock array type index string (2)',
              'mock array type index string (3)'
            ]

            return expect(transformArraySchema(hash, schema))
              .to.eql(document)
          })

          it('transforms `array` type schemas (`items` is an object of `string` type with `anyOf`)', () => {
            const hash = {
              '#/0': '0',
              '#/1': '1',
              '#/2': '2'
            }

            /**
             *  @type {SchemaType}
             */
            const schema = {
              type: 'array',
              items: [
                {
                  type: 'string',
                  anyOf: [
                    { const: 'mock array type index string (1)' },
                    { const: 'mock array type index string (2)' },
                    { const: 'mock array type index string (3)' }
                  ]
                },
                {
                  type: 'string',
                  anyOf: [
                    { const: 'mock array type index string (1)' },
                    { const: 'mock array type index string (2)' },
                    { const: 'mock array type index string (3)' }
                  ]
                },
                {
                  type: 'string',
                  anyOf: [
                    { const: 'mock array type index string (1)' },
                    { const: 'mock array type index string (2)' },
                    { const: 'mock array type index string (3)' }
                  ]
                }
              ]
            }

            const document = [
              'mock array type index string (1)',
              'mock array type index string (2)',
              'mock array type index string (3)'
            ]

            return expect(transformArraySchema(hash, schema))
              .to.eql(document)
          })

          it('transforms `array` type schemas (`items` is an array of `string` type with `oneOf`)', () => {
            const hash = {
              '#/0': '0',
              '#/1': '1',
              '#/2': '2'
            }

            /**
             *  @type {SchemaType}
             */
            const schema = {
              type: 'array',
              items: [
                {
                  type: 'string',
                  oneOf: [
                    { const: 'mock array type index string (1)' },
                    { const: 'mock array type index string (2)' },
                    { const: 'mock array type index string (3)' }
                  ]
                },
                {
                  type: 'string',
                  oneOf: [
                    { const: 'mock array type index string (1)' },
                    { const: 'mock array type index string (2)' },
                    { const: 'mock array type index string (3)' }
                  ]
                },
                {
                  type: 'string',
                  oneOf: [
                    { const: 'mock array type index string (1)' },
                    { const: 'mock array type index string (2)' },
                    { const: 'mock array type index string (3)' }
                  ]
                }
              ]
            }

            const document = [
              'mock array type index string (1)',
              'mock array type index string (2)',
              'mock array type index string (3)'
            ]

            return expect(transformArraySchema(hash, schema))
              .to.eql(document)
          })

          it('transforms `array` type schemas (`items` is an array of `string` type with `allOf`)', () => {
            const hash = {
              '#/0': 'mock array type index string (1)',
              '#/1': 'mock array type index string (2)',
              '#/2': 'mock array type index string (3)'
            }

            /**
             *  @type {SchemaType}
             */
            const schema = {
              type: 'array',
              items: [
                {
                  type: 'string',
                  allOf: [
                    { minLength: 1 },
                    { maxLength: 32 }
                  ]
                },
                {
                  type: 'string',
                  allOf: [
                    { minLength: 1 },
                    { maxLength: 32 }
                  ]
                },
                {
                  type: 'string',
                  allOf: [
                    { minLength: 1 },
                    { maxLength: 32 }
                  ]
                }
              ]
            }

            const document = [
              'mock array type index string (1)',
              'mock array type index string (2)',
              'mock array type index string (3)'
            ]

            return expect(transformArraySchema(hash, schema))
              .to.eql(document)
          })

          it('transforms `array` type schemas (`items` is an array of `string` type)', () => {
            const hash = {
              '#/0': 'mock array type index string (1)',
              '#/1': 'mock array type index string (2)',
              '#/2': 'mock array type index string (3)'
            }

            /**
             *  @type {SchemaType}
             */
            const schema = {
              type: 'array',
              items: [
                {
                  type: 'string'
                },
                {
                  type: 'string'
                },
                {
                  type: 'string'
                }
              ]
            }

            const document = [
              'mock array type index string (1)',
              'mock array type index string (2)',
              'mock array type index string (3)'
            ]

            return expect(transformArraySchema(hash, schema))
              .to.eql(document)
          })
        })

        it('transforms `array` type schemas (`items` is an array of `number` type)', () => {
          const hash = {
            '#/0': '1'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            items: [
              {
                type: 'number'
              }
            ]
          }

          const document = [1]

          return expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas (`items` is an array of `array` type)', () => {
          /**
           *  @type {ObjectLiteralType}
           */
          const hash = {}

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array'
              }
            ]
          }

          /**
           *  @type {ArrayLiteralType}
           */
          const document = []

          return expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an array)', () => {
          const hash = {
            '#/0/0': 'mock array type index string type',
            '#/0/1': '1'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: [
                  {
                    type: 'string'
                  },
                  {
                    type: 'number'
                  }
                ]
              }
            ]
          }

          const document = [['mock array type index string type', 1]]

          return expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an object)', () => {
          const hash = {
            '#/0/0': 'mock array type index string type (0)',
            '#/0/1': 'mock array type index string type (1)'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: {
                  type: 'string'
                }
              }
            ]
          }

          const document = [['mock array type index string type (0)', 'mock array type index string type (1)']]

          return expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an object of `array` type and `items` is an object of `string` type)', () => {
          const hash = {
            '#/0/0': '0',
            '#/0/1': '1',
            '#/0/2': '2'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: {
                type: 'string',
                enum: [
                  'a',
                  'b',
                  'c'
                ]
              }
            }
          }

          const document = [['a', 'b', 'c']]

          expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an object of `array` type and `items` is an object of `number` type)', () => {
          const hash = {
            '#/0/0': '0',
            '#/0/1': '1',
            '#/0/2': '2'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: {
                type: 'number',
                enum: [
                  1,
                  2,
                  3
                ]
              }
            }
          }

          const document = [[1, 2, 3]]

          expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an object of `array` type and `items` is an object of `boolean` type)', () => {
          const hash = {
            '#/0/0': '0',
            '#/0/1': '1',
            '#/0/2': '0'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: {
                type: 'number',
                enum: [
                  true,
                  false
                ]
              }
            }
          }

          const document = [[true, false, true]]

          expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an object of `array` type and `items` is an object of `null` type)', () => {
          const hash = {
            '#/0/0': '0',
            '#/0/1': '0',
            '#/0/2': '0'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: {
                  type: 'number',
                  enum: [
                    null
                  ]
                }
              }
            ]
          }

          const document = [[null, null, null]]

          expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas (`items` is an array of `object` type)', () => {
          const hash = {
            '#/0/one': 'mock array type index object type key string (1)',
            '#/0/two': '1'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            items: [
              {
                type: 'object',
                properties: {
                  one: { type: 'string' },
                  two: { type: 'number' }
                }
              }
            ]
          }

          const document = [{
            one: 'mock array type index object type key string (1)',
            two: 1
          }]

          return expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas (`items` is an array of `boolean` type)', () => {
          const hash = {
            '#/0': 'true'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            items: [
              {
                type: 'boolean'
              }
            ]
          }

          const document = [true]

          return expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas (`items` is an array of `null` type)', () => {
          const hash = {
            '#/0': 'null'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            items: [
              {
                type: 'null'
              }
            ]
          }

          const document = [null]

          return expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        describe('Transforming `array` type schemas (`items` is an object of `string` type)', () => {
          it('transforms `array` type schemas (`items` is an object of `string` type with `enum`)', () => {
            const hash = {
              '#/0': '0',
              '#/1': '1',
              '#/2': '2'
            }

            /**
             *  @type {SchemaType}
             */
            const schema = {
              type: 'array',
              items: {
                type: 'string',
                enum: [
                  'mock array type index string (1)',
                  'mock array type index string (2)',
                  'mock array type index string (3)'
                ]
              }
            }

            const document = [
              'mock array type index string (1)',
              'mock array type index string (2)',
              'mock array type index string (3)'
            ]

            return expect(transformArraySchema(hash, schema))
              .to.eql(document)
          })

          it('transforms `array` type schemas (`items` is an object of `string` type with `anyOf`)', () => {
            const hash = {
              '#/0': '0',
              '#/1': '1',
              '#/2': '2'
            }

            /**
             *  @type {SchemaType}
             */
            const schema = {
              type: 'array',
              items: {
                type: 'string',
                anyOf: [
                  { const: 'mock array type index string (1)' },
                  { const: 'mock array type index string (2)' },
                  { const: 'mock array type index string (3)' }
                ]
              }
            }

            const document = [
              'mock array type index string (1)',
              'mock array type index string (2)',
              'mock array type index string (3)'
            ]

            return expect(transformArraySchema(hash, schema))
              .to.eql(document)
          })

          it('transforms `array` type schemas (`items` is an object of `string` type with `oneOf`)', () => {
            const hash = {
              '#/0': '0',
              '#/1': '1',
              '#/2': '2'
            }

            /**
             *  @type {SchemaType}
             */
            const schema = {
              type: 'array',
              items: {
                type: 'string',
                oneOf: [
                  { const: 'mock array type index string (1)' },
                  { const: 'mock array type index string (2)' },
                  { const: 'mock array type index string (3)' }
                ]
              }
            }

            const document = [
              'mock array type index string (1)',
              'mock array type index string (2)',
              'mock array type index string (3)'
            ]

            return expect(transformArraySchema(hash, schema))
              .to.eql(document)
          })

          it('transforms `array` type schemas (`items` is an object of `string` type with `allOf`)', () => {
            const hash = {
              '#/0': 'mock array type index string'
            }

            /**
             *  @type {SchemaType}
             */
            const schema = {
              type: 'array',
              items: {
                type: 'string',
                allOf: [
                  { const: 'mock array type index string' },
                  { minLength: 1 },
                  { maxLength: 100 }
                ]
              }
            }

            const document = [
              'mock array type index string'
            ]

            return expect(transformArraySchema(hash, schema))
              .to.eql(document)
          })

          it('transforms `array` type schemas (`items` is an object of `string` type)', () => {
            const hash = {
              '#/0': 'mock array type index string'
            }

            /**
             *  @type {SchemaType}
             */
            const schema = {
              type: 'array',
              items: {
                type: 'string'
              }
            }

            const document = [
              'mock array type index string'
            ]

            return expect(transformArraySchema(hash, schema))
              .to.eql(document)
          })
        })

        it('transforms `array` type schemas (`items` is an object of `number` type)', () => {
          const hash = {
            '#/0': '1'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            items: {
              type: 'number'
            }
          }

          const document = [1]

          return expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas (`items` is an object of `array` type)', () => {
          const hash = {
            '#/0': []
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            items: {
              type: 'array'
            }
          }

          const document = [[]]

          return expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an array)', () => {
          const hash = {
            '#/0/0': 'mock array type index string type',
            '#/0/1': '1'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: [
                {
                  type: 'string'
                },
                {
                  type: 'number'
                }
              ]
            }
          }

          const document = [['mock array type index string type', 1]]

          return expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object)', () => {
          const hash = {
            '#/0': ['mock array type index string type (0)', 'mock array type index string type (1)']
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          }

          const document = [['mock array type index string type (0)', 'mock array type index string type (1)']]

          return expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object of `array` type and `items` is an object of `string` type)', () => {
          const hash = {
            '#/0': ['0', '1', '2']
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: {
                type: 'string',
                enum: [
                  'a',
                  'b',
                  'c'
                ]
              }
            }
          }

          const document = [['a', 'b', 'c']]

          expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object of `array` type and `items` is an object of `number` type)', () => {
          const hash = {
            '#/0': ['0', '1', '2']
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: {
                type: 'number',
                enum: [
                  1,
                  2,
                  3
                ]
              }
            }
          }

          const document = [[1, 2, 3]]

          expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object of `array` type and `items` is an object of `boolean` type)', () => {
          const hash = {
            '#/0': ['0', '1', '0']
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: {
                type: 'number',
                enum: [
                  true,
                  false
                ]
              }
            }
          }

          const document = [[true, false, true]]

          expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object of `array` type and `items` is an object of `null` type)', () => {
          const hash = {
            '#/0': ['0', '0', '0']
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: {
                type: 'number',
                enum: [
                  null
                ]
              }
            }
          }

          const document = [[null, null, null]]

          expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas (`items` is an object of `object` type)', () => {
          const hash = {
            '#/0/one': 'mock array type index object type key string (1)',
            '#/0/two': '1'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                one: { type: 'string' },
                two: { type: 'number' }
              }
            }
          }

          const document = [{
            one: 'mock array type index object type key string (1)',
            two: 1
          }]

          return expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas (`items` is an object of `boolean` type)', () => {
          const hash = {
            '#/0': 'true'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            items: {
              type: 'boolean'
            }
          }

          const document = [true]

          return expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas (`items` is an object of `null` type)', () => {
          const hash = {
            '#/0': 'null'
          }

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            items: {
              type: 'null'
            }
          }

          const document = [null]

          return expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })
      })
    })

    describe('Hash does not have values', () => {
      describe('Transforming `array` type schemas', () => {
        it('transforms `array` type schemas (`items` is an array of `string` type)', () => {
          /**
           *  @type {ObjectLiteralType}
           */
          const hash = {}

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            items: [
              {
                type: 'string'
              }
            ]
          }

          /**
           *  @type {ArrayLiteralType}
           */
          const document = []

          return expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas (`items` is an array of `number` type)', () => {
          /**
           *  @type {ObjectLiteralType}
           */
          const hash = {}

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            items: [
              {
                type: 'number'
              }
            ]
          }

          /**
           *  @type {ArrayLiteralType}
           */
          const document = []

          return expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas (`items` is an array of `array` type)', () => {
          /**
           *  @type {ObjectLiteralType}
           */
          const hash = {}

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array'
              }
            ]
          }

          /**
           *  @type {ArrayLiteralType}
           */
          const document = []

          return expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas (`items` is an array and `items` is an array)', () => {
          /**
           *  @type {ObjectLiteralType}
           */
          const hash = {}

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: [
                  {
                    type: 'string'
                  },
                  {
                    type: 'number'
                  }
                ]
              }
            ]
          }

          /**
           *  @type {ArrayLiteralType}
           */
          const document = []

          return expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas (`items` is an array and `items` is an object)', () => {
          /**
           *  @type {ObjectLiteralType}
           */
          const hash = {}

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: {
                  type: 'string'
                }
              }
            ]
          }

          /**
           *  @type {ArrayLiteralType}
           */
          const document = []

          return expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas (`items` is an array of `object` type)', () => {
          /**
           *  @type {ObjectLiteralType}
           */
          const hash = {}

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            items: [
              {
                type: 'object',
                properties: {
                  one: { type: 'string' },
                  two: { type: 'number' }
                }
              }
            ]
          }

          /**
           *  @type {ArrayLiteralType}
           */
          const document = []

          return expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas (`items` is an array of `boolean` type)', () => {
          /**
           *  @type {ObjectLiteralType}
           */
          const hash = {}

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            items: [
              {
                type: 'boolean'
              }
            ]
          }

          /**
           *  @type {ArrayLiteralType}
           */
          const document = []

          return expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas (`items` is an array of `null` type)', () => {
          /**
           *  @type {ObjectLiteralType}
           */
          const hash = {}

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            items: [
              {
                type: 'null'
              }
            ]
          }

          /**
           *  @type {ArrayLiteralType}
           */
          const document = []

          return expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas (`items` is an object of `string` type)', () => {
          /**
           *  @type {ObjectLiteralType}
           */
          const hash = {}

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            items: {
              type: 'string'
            }
          }

          /**
           *  @type {ArrayLiteralType}
           */
          const document = []

          return expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas (`items` is an object of `number` type)', () => {
          /**
           *  @type {ObjectLiteralType}
           */
          const hash = {}

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            items: {
              type: 'number'
            }
          }

          /**
           *  @type {ArrayLiteralType}
           */
          const document = []

          return expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas (`items` is an object of `array` type)', () => {
          /**
           *  @type {ObjectLiteralType}
           */
          const hash = {}

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            items: {
              type: 'array'
            }
          }

          /**
           *  @type {ArrayLiteralType}
           */
          const document = []

          return expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas (`items` is an object and `items` is an array)', () => {
          /**
           *  @type {ObjectLiteralType}
           */
          const hash = {}

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: [
                  {
                    type: 'string'
                  },
                  {
                    type: 'number'
                  }
                ]
              }
            ]
          }

          /**
           *  @type {ArrayLiteralType}
           */
          const document = []

          return expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas (`items` is an object and `items` is an object)', () => {
          /**
           *  @type {ObjectLiteralType}
           */
          const hash = {}

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          }

          /**
           *  @type {ArrayLiteralType}
           */
          const document = []

          return expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas (`items` is an object of `object` type)', () => {
          /**
           *  @type {ObjectLiteralType}
           */
          const hash = {}

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                one: { type: 'string' },
                two: { type: 'number' }
              }
            }
          }

          /**
           *  @type {ArrayLiteralType}
           */
          const document = []

          return expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas (`items` is an object of `boolean` type)', () => {
          /**
           *  @type {ObjectLiteralType}
           */
          const hash = {}

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            items: {
              type: 'boolean'
            }
          }

          /**
           *  @type {ArrayLiteralType}
           */
          const document = []

          return expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas (`items` is an object of `null` type)', () => {
          /**
           *  @type {ObjectLiteralType}
           */
          const hash = {}

          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'array',
            items: {
              type: 'null'
            }
          }

          /**
           *  @type {ArrayLiteralType}
           */
          const document = []

          return expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })
      })
    })
  })

  describe('Hash is undefined and schema is defined', () => {
    it('transforms `array` type schemas', () => expect(transformArraySchema(undefined, { type: 'array' })).to.eql([]))
  })

  describe('Hash is defined and schema is undefined', () => {
    it('throws', () => expect(() => transformArraySchema({})).to.throw('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1'))
  })

  describe('Hash is undefined and schema is undefined', () => {
    it('throws', () => expect(() => transformArraySchema()).to.throw('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1'))
  })
})
