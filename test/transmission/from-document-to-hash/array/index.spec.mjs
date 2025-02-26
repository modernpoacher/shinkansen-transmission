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

import transformArraySchema from 'shinkansen-transmission/transmission/from-document-to-hash/array'

describe('shinkansen-transmission/transmission/from-document-to-hash/array', () => {
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

  describe('Document is defined', () => {
    describe('Transforming `array` type schemas', () => {
      it('transforms `array` type schemas', () => {
        const document = [
          'mock array type index string (1)',
          'mock array type index string (2)',
          'mock array type index string (3)'
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array'
        }

        const hash = {
          '#/0': 'mock array type index string (1)',
          '#/1': 'mock array type index string (2)',
          '#/2': 'mock array type index string (3)'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas with `enum`', () => {
        /**
         *  @type {ArrayLiteralType}
         */
        const document = []

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          enum: [
            [],
            [],
            []
          ]
        }

        const hash = {
          '#/': '0'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas with `anyOf`', () => {
        /**
         *  @type {ArrayLiteralType}
         */
        const document = [
          2
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          anyOf: [
            {
              const: [
                1
              ]
            },
            {
              const: [
                2
              ]
            },
            {
              const: [
                3
              ]
            }
          ]
        }

        const hash = {
          '#/': '1'
        }

        expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas with `oneOf`', () => {
        /**
         *  @type {ArrayLiteralType}
         */
        const document = [
          2
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          oneOf: [
            {
              const: [
                1
              ]
            },
            {
              const: [
                2
              ]
            },
            {
              const: [
                3
              ]
            }
          ]
        }

        const hash = {
          '#/': '1'
        }

        expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      /**
       *  All valid
       */
      it('transforms `array` type schemas with `allOf`', () => {
        /**
         *  @type {ArrayLiteralType}
         */
        const document = [
          1,
          2,
          3
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          allOf: [
            {
              const: [
                1,
                2,
                3
              ]
            }
          ]
        }

        const hash = {
          '#/0': '1',
          '#/1': '2',
          '#/2': '3'
        }

        expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      /**
       *  All other arrays use `items: []` or `items: {}`
       */

      it('transforms `array` type schemas (`items` is an array)', () => {
        const document = [
          'string'
        ]

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

        const hash = {
          '#/0': 'string'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `string` type with `enum`)', () => {
        const document = [
          'mock array type index string (2)'
        ]

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
            }
          ]
        }

        const hash = {
          '#/0': '1'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `number` type with `enum`)', () => {
        const document = [
          3
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: [
            {
              type: 'number',
              enum: [
                1,
                2,
                3
              ]
            }
          ]
        }

        const hash = {
          '#/0': '2'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an array of `string` type with `enum`)', () => {
        const document = [
          [
            'mock array type index string (2)'
          ]
        ]

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
                  type: 'string',
                  enum: [
                    'mock array type index string (1)',
                    'mock array type index string (2)',
                    'mock array type index string (3)'
                  ]
                }
              ]
            }
          ]
        }

        const hash = {
          '#/0/0': '1'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an array of `number` type with `enum`)', () => {
        const document = [
          [
            2
          ]
        ]

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
                  type: 'number',
                  enum: [
                    1,
                    2
                  ]
                }
              ]
            }
          ]
        }

        const hash = {
          '#/0/0': '1'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an array of `boolean` type with `enum`)', () => {
        const document = [
          [
            false
          ]
        ]

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
                  type: 'boolean',
                  enum: [
                    true,
                    false
                  ]
                }
              ]
            }
          ]
        }

        const hash = {
          '#/0/0': '1'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an array of `null` type with `enum`)', () => {
        const document = [
          [
            null
          ]
        ]

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
                  type: 'null',
                  enum: [
                    null
                  ]
                }
              ]
            }
          ]
        }

        const hash = {
          '#/0/0': '0'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an object of `string` type with `enum`)', () => {
        const document = [
          [
            'mock array type index string (2)'
          ]
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: [
            {
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
          ]
        }

        const hash = {
          '#/0/0': '1'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an object of `number` type with `enum`)', () => {
        const document = [
          [
            2
          ]
        ]

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
                  1,
                  2
                ]
              }
            }
          ]
        }

        const hash = {
          '#/0/0': '1'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an object of `boolean` type with `enum`)', () => {
        const document = [
          [
            false
          ]
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: [
            {
              type: 'array',
              items: {
                type: 'boolean',
                enum: [
                  true,
                  false
                ]
              }
            }
          ]
        }

        const hash = {
          '#/0/0': '1'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an object of `null` type with `enum`)', () => {
        const document = [
          [
            null
          ]
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: [
            {
              type: 'array',
              items: {
                type: 'null',
                enum: [
                  null
                ]
              }
            }
          ]
        }

        const hash = {
          '#/0/0': '0'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an object of `array` type and `items` is an object of `string` type schemas with `enum`', () => {
        const document = [
          [
            'a',
            'b',
            'c'
          ]
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: [
            {
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
          ]
        }

        const hash = {
          '#/0/0': '0',
          '#/0/1': '1',
          '#/0/2': '2'
        }

        expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an object of `array` type and `items` is an object of `number` type schemas with `enum`', () => {
        const document = [
          [
            1,
            2,
            3
          ]
        ]

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
                  1,
                  2,
                  3
                ]
              }
            }
          ]
        }

        const hash = {
          '#/0/0': '0',
          '#/0/1': '1',
          '#/0/2': '2'
        }

        expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an object of `array` type and `items` is an object of `boolean` type schemas with `enum`', () => {
        const document = [
          [
            true,
            false,
            true
          ]
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: [
            {
              type: 'array',
              items: {
                type: 'boolean',
                enum: [
                  true,
                  false
                ]
              }
            }
          ]
        }

        const hash = {
          '#/0/0': '0',
          '#/0/1': '1',
          '#/0/2': '0'
        }

        expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an object of `array` type and `items` is an object of `null` type schemas with `enum`', () => {
        const document = [
          [
            null,
            null,
            null
          ]
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: [
            {
              type: 'array',
              items: {
                type: 'null',
                enum: [
                  null
                ]
              }
            }
          ]
        }

        const hash = {
          '#/0/0': '0',
          '#/0/1': '0',
          '#/0/2': '0'
        }

        expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `object` type with `enum`)', () => {
        const document = [
          {
            one: 'mock array type index object type key string (1)',
            two: 'mock array type index object type key string (2)'
          }
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: [
            {
              type: 'object',
              properties: {
                one: {
                  type: 'string',
                  enum: [
                    'mock array type index object type key string (1)',
                    'mock array type index object type key string (2)'
                  ]
                },
                two: {
                  type: 'string',
                  enum: [
                    'mock array type index object type key string (1)',
                    'mock array type index object type key string (2)'
                  ]
                }
              }
            }
          ]
        }

        const hash = {
          '#/0/one': '0',
          '#/0/two': '1'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `boolean` type with `enum`)', () => {
        const document = [
          false
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: [
            {
              type: 'boolean',
              enum: [
                true,
                false
              ]
            }
          ]
        }

        const hash = {
          '#/0': '1'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `null` type with `enum`)', () => {
        const document = [
          null
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: [
            {
              type: 'null',
              enum: [
                null
              ]
            }
          ]
        }

        const hash = {
          '#/0': '0'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `string` type and `number` type with `enum`)', () => {
        const document = ['string (3)', 3
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: [
            {
              type: 'string',
              enum: [
                'string (1)',
                'string (2)',
                'string (3)'
              ]
            },
            {
              type: 'number',
              enum: [
                1,
                2,
                3
              ]
            }
          ]
        }

        const hash = {
          '#/0': '2',
          '#/1': '2'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `string` type with `anyOf`)', () => {
        const document = [
          'mock array type index string (1)',
          'mock array type index string (5)',
          'mock array type index string (9)'
        ]

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
                { const: 'mock array type index string (4)' },
                { const: 'mock array type index string (5)' },
                { const: 'mock array type index string (6)' }
              ]
            },
            {
              type: 'string',
              anyOf: [
                { const: 'mock array type index string (7)' },
                { const: 'mock array type index string (8)' },
                { const: 'mock array type index string (9)' }
              ]
            }
          ]
        }

        const hash = {
          '#/0': '0',
          '#/1': '1',
          '#/2': '2'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `number` type with `anyOf`)', () => {
        const document = [
          1,
          5,
          9
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: [
            {
              type: 'number',
              anyOf: [
                { const: 1 },
                { const: 2 },
                { const: 3 }
              ]
            },
            {
              type: 'number',
              anyOf: [
                { const: 4 },
                { const: 5 },
                { const: 6 }
              ]
            },
            {
              type: 'number',
              anyOf: [
                { const: 7 },
                { const: 8 },
                { const: 9 }
              ]
            }
          ]
        }

        const hash = {
          '#/0': '0',
          '#/1': '1',
          '#/2': '2'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `boolean` type with `anyOf`)', () => {
        const document = [
          true,
          false,
          true
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: [
            {
              type: 'boolean',
              anyOf: [
                { const: true },
                { const: false }
              ]
            },
            {
              type: 'boolean',
              anyOf: [
                { const: true },
                { const: false }
              ]
            },
            {
              type: 'boolean',
              anyOf: [
                { const: true },
                { const: false }
              ]
            }
          ]
        }

        const hash = {
          '#/0': '0',
          '#/1': '1',
          '#/2': '0'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `null` type with `anyOf`)', () => {
        const document = [
          null,
          null,
          null
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: [
            {
              type: 'null',
              anyOf: [
                { const: null }
              ]
            },
            {
              type: 'null',
              anyOf: [
                { const: null }
              ]
            },
            {
              type: 'null',
              anyOf: [
                { const: null }
              ]
            }
          ]
        }

        const hash = {
          '#/0': '0',
          '#/1': '0',
          '#/2': '0'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `string` type with `oneOf`)', () => {
        const document = [
          'mock array type index string (1)',
          'mock array type index string (5)',
          'mock array type index string (9)'
        ]

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
                { const: 'mock array type index string (4)' },
                { const: 'mock array type index string (5)' },
                { const: 'mock array type index string (6)' }
              ]
            },
            {
              type: 'string',
              oneOf: [
                { const: 'mock array type index string (7)' },
                { const: 'mock array type index string (8)' },
                { const: 'mock array type index string (9)' }
              ]
            }
          ]
        }

        const hash = {
          '#/0': '0',
          '#/1': '1',
          '#/2': '2'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `number` type with `oneOf`)', () => {
        const document = [
          1,
          5,
          9
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: [
            {
              type: 'number',
              oneOf: [
                { const: 1 },
                { const: 2 },
                { const: 3 }
              ]
            },
            {
              type: 'number',
              oneOf: [
                { const: 4 },
                { const: 5 },
                { const: 6 }
              ]
            },
            {
              type: 'number',
              oneOf: [
                { const: 7 },
                { const: 8 },
                { const: 9 }
              ]
            }
          ]
        }

        const hash = {
          '#/0': '0',
          '#/1': '1',
          '#/2': '2'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `boolean` type with `oneOf`)', () => {
        const document = [
          true,
          false,
          true
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: [
            {
              type: 'boolean',
              oneOf: [
                { const: true },
                { const: false }
              ]
            },
            {
              type: 'boolean',
              oneOf: [
                { const: true },
                { const: false }
              ]
            },
            {
              type: 'boolean',
              oneOf: [
                { const: true },
                { const: false }
              ]
            }
          ]
        }

        const hash = {
          '#/0': '0',
          '#/1': '1',
          '#/2': '0'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `null` type with `oneOf`)', () => {
        const document = [
          null,
          null,
          null
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: [
            {
              type: 'null',
              oneOf: [
                { const: null }
              ]
            },
            {
              type: 'null',
              oneOf: [
                { const: null }
              ]
            },
            {
              type: 'null',
              oneOf: [
                { const: null }
              ]
            }
          ]
        }

        const hash = {
          '#/0': '0',
          '#/1': '0',
          '#/2': '0'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `string` type with `allOf`)', () => {
        const document = [
          'mock array type index string (1)',
          'mock array type index string (2)',
          'mock array type index string (3)'
        ]

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

        const hash = {
          '#/0': 'mock array type index string (1)',
          '#/1': 'mock array type index string (2)',
          '#/2': 'mock array type index string (3)'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `number` type with `allOf`)', () => {
        const document = [
          3
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: [
            {
              type: 'number',
              allOf: [
                { const: 3 }
              ]
            },
            {
              type: 'number',
              allOf: [
                { const: 3 }
              ]
            },
            {
              type: 'number',
              allOf: [
                { const: 3 }
              ]
            }
          ]
        }

        const hash = {
          '#/0': '3'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `boolean` type with `allOf`)', () => {
        const document = [
          true
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: [
            {
              type: 'boolean',
              allOf: [
                { const: true }
              ]
            }
          ]
        }

        const hash = {
          '#/0': 'true'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `null` type with `allOf`)', () => {
        const document = [
          null
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: [
            {
              type: 'null',
              allOf: [
                { const: null }
              ]
            }
          ]
        }

        const hash = {
          '#/0': 'null'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object)', () => {
        const document = [
          'string'
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: {
            type: 'string'
          }
        }

        const hash = {
          '#/0': 'string'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `string` type with `enum`)', () => {
        const document = [
          'mock array type index string (2)'
        ]

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

        const hash = {
          '#/0': '1'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `number` type with `enum`)', () => {
        const document = [
          3
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
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

        const hash = {
          '#/0': '2'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an array of `string` type with `enum`)', () => {
        const document = [
          [
            'mock array type index string (2)'
          ]
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: {
            type: 'array',
            items: [
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
        }

        const hash = {
          '#/0/0': '1'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an array of `number` type with `enum`)', () => {
        const document = [
          [
            2
          ]
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: {
            type: 'array',
            items: [
              {
                type: 'number',
                enum: [
                  1,
                  2
                ]
              }
            ]
          }
        }

        const hash = {
          '#/0/0': '1'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an array of `boolean` type with `enum`)', () => {
        const document = [
          [
            false
          ]
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: {
            type: 'array',
            items: [
              {
                type: 'boolean',
                enum: [
                  true,
                  false
                ]
              }
            ]
          }
        }

        const hash = {
          '#/0/0': '1'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an array of `null` type with `enum`)', () => {
        const document = [
          [
            null
          ]
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: {
            type: 'array',
            items: [
              {
                type: 'null',
                enum: [
                  null
                ]
              }
            ]
          }
        }

        const hash = {
          '#/0/0': '0'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object of `string` type with `enum`)', () => {
        const document = [
          [
            'mock array type index string (2)'
          ]
        ]

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
                'mock array type index string (1)',
                'mock array type index string (2)',
                'mock array type index string (3)'
              ]
            }
          }
        }

        const hash = {
          '#/0/0': '1'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object of `number` type with `enum`)', () => {
        const document = [
          [
            2
          ]
        ]

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
                2
              ]
            }
          }
        }

        const hash = {
          '#/0/0': '1'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object of `boolean` type with `enum`)', () => {
        const document = [
          [
            false
          ]
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: {
            type: 'array',
            items: {
              type: 'boolean',
              enum: [
                true,
                false
              ]
            }
          }
        }

        const hash = {
          '#/0/0': '1'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object of `null` type with `enum`)', () => {
        const document = [
          [
            null
          ]
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: {
            type: 'array',
            items: {
              type: 'null',
              enum: [
                null
              ]
            }
          }
        }

        const hash = {
          '#/0/0': '0'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object of `array` type and `items` is an object of `string` type schemas with `enum`', () => {
        const document = [
          [
            'a',
            'b',
            'c'
          ]
        ]

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

        const hash = {
          '#/0/0': '0',
          '#/0/1': '1',
          '#/0/2': '2'
        }

        expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object of `array` type and `items` is an object of `number` type schemas with `enum`', () => {
        const document = [
          [
            1,
            2,
            3
          ]
        ]

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

        const hash = {
          '#/0/0': '0',
          '#/0/1': '1',
          '#/0/2': '2'
        }

        expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object of `array` type and `items` is an object of `boolean` type schemas with `enum`', () => {
        const document = [
          [
            true,
            false,
            true
          ]
        ]

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

        const hash = {
          '#/0/0': '0',
          '#/0/1': '1',
          '#/0/2': '0'
        }

        expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object of `array` type and `items` is an object of `boolean` type schemas with `enum`', () => {
        const document = [
          [
            null,
            null,
            null
          ]
        ]

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

        const hash = {
          '#/0/0': '0',
          '#/0/1': '0',
          '#/0/2': '0'
        }

        expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `object` type with `enum`)', () => {
        const document = [
          {
            one: 'mock array type index object type key string (1)',
            two: 'mock array type index object type key string (2)'
          }
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              one: {
                type: 'string',
                enum: [
                  'mock array type index object type key string (1)',
                  'mock array type index object type key string (2)'
                ]
              },
              two: {
                type: 'string',
                enum: [
                  'mock array type index object type key string (1)',
                  'mock array type index object type key string (2)'
                ]
              }
            }
          }
        }

        const hash = {
          '#/0/one': '0',
          '#/0/two': '1'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `boolean` type with `enum`)', () => {
        const document = [
          false
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: {
            type: 'boolean',
            enum: [
              true,
              false
            ]
          }
        }

        const hash = {
          '#/0': '1'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `null` type with `enum`)', () => {
        const document = [
          null
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: {
            type: 'null',
            enum: [
              null
            ]
          }
        }

        const hash = {
          '#/0': '0'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `string` type with `anyOf`)', () => {
        const document = [
          'mock array type index string (1)',
          'mock array type index string (2)',
          'mock array type index string (3)'
        ]

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

        const hash = {
          '#/0': '0',
          '#/1': '1',
          '#/2': '2'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `number` type with `anyOf`)', () => {
        const document = [
          1,
          2,
          3
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: {
            type: 'number',
            anyOf: [
              { const: 1 },
              { const: 2 },
              { const: 3 }
            ]
          }
        }

        const hash = {
          '#/0': '0',
          '#/1': '1',
          '#/2': '2'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `boolean` type with `anyOf`)', () => {
        const document = [
          true,
          false,
          true
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: {
            type: 'boolean',
            anyOf: [
              { const: true },
              { const: false }
            ]
          }
        }

        const hash = {
          '#/0': '0',
          '#/1': '1',
          '#/2': '0'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `null` type with `anyOf`)', () => {
        const document = [
          null,
          null,
          null
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: {
            type: 'null',
            anyOf: [
              { const: null }
            ]
          }
        }

        const hash = {
          '#/0': '0',
          '#/1': '0',
          '#/2': '0'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `string` type with `oneOf`)', () => {
        const document = [
          'mock array type index string (1)',
          'mock array type index string (5)',
          'mock array type index string (9)'
        ]

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
                { const: 'mock array type index string (4)' },
                { const: 'mock array type index string (5)' },
                { const: 'mock array type index string (6)' }
              ]
            },
            {
              type: 'string',
              oneOf: [
                { const: 'mock array type index string (7)' },
                { const: 'mock array type index string (8)' },
                { const: 'mock array type index string (9)' }
              ]
            }
          ]
        }

        const hash = {
          '#/0': '0',
          '#/1': '1',
          '#/2': '2'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `number` type with `oneOf`)', () => {
        const document = [
          1,
          2,
          3
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: {
            type: 'number',
            oneOf: [
              { const: 1 },
              { const: 2 },
              { const: 3 }
            ]
          }
        }

        const hash = {
          '#/0': '0',
          '#/1': '1',
          '#/2': '2'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `boolean` type with `oneOf`)', () => {
        const document = [
          true,
          false,
          true
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: {
            type: 'boolean',
            oneOf: [
              { const: true },
              { const: false }
            ]
          }
        }

        const hash = {
          '#/0': '0',
          '#/1': '1',
          '#/2': '0'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `null` type with `oneOf`)', () => {
        const document = [
          null,
          null,
          null
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: {
            type: 'null',
            oneOf: [
              { const: null }
            ]
          }
        }

        const hash = {
          '#/0': '0',
          '#/1': '0',
          '#/2': '0'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `string` type with `allOf`)', () => {
        const document = [
          'mock array type index string (1)',
          'mock array type index string (2)',
          'mock array type index string (3)'
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: {
            type: 'string',
            allOf: [
              { minLength: 1 },
              { maxLength: 32 }
            ]
          }
        }

        const hash = {
          '#/0': 'mock array type index string (1)',
          '#/1': 'mock array type index string (2)',
          '#/2': 'mock array type index string (3)'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `number` type with `allOf`)', () => {
        const document = [
          3
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: {
            type: 'number',
            allOf: [
              { const: 3 }
            ]
          }
        }

        const hash = {
          '#/0': '3'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `boolean` type with `allOf`)', () => {
        const document = [
          true
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: {
            type: 'boolean',
            allOf: [
              { const: true }
            ]
          }
        }

        const hash = {
          '#/0': 'true'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `null` type with `allOf`)', () => {
        const document = [
          null
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: {
            type: 'null',
            allOf: [
              { const: null }
            ]
          }
        }

        const hash = {
          '#/0': 'null'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `string` type)', () => {
        const document = [
          'mock array type index string'
        ]

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

        const hash = {
          '#/0': 'mock array type index string'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `number` type)', () => {
        const document = [
          1
        ]

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

        const hash = {
          '#/0': '1'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an array of `string` type)', () => {
        const document = [
          [
            'string'
          ]
        ]

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
                }
              ]
            }
          ]
        }

        const hash = {
          '#/0/0': 'string'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an array of `number` type)', () => {
        const document = [
          [
            1
          ]
        ]

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
                  type: 'number'
                }
              ]
            }
          ]
        }

        const hash = {
          '#/0/0': '1'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an array of `boolean` type)', () => {
        const document = [
          [
            false
          ]
        ]

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
                  type: 'boolean'
                }
              ]
            }
          ]
        }

        const hash = {
          '#/0/0': 'false'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an array of `null` type)', () => {
        const document = [
          [
            null
          ]
        ]

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
                  type: 'null'
                }
              ]
            }
          ]
        }

        const hash = {
          '#/0/0': 'null'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an object of `string` type)', () => {
        const document = [
          [
            'string'
          ]
        ]

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

        const hash = {
          '#/0/0': 'string'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an object of `number` type)', () => {
        const document = [
          [
            1
          ]
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: [
            {
              type: 'array',
              items: {
                type: 'number'
              }
            }
          ]
        }

        const hash = {
          '#/0/0': '1'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an object of `boolean` type)', () => {
        const document = [
          [
            false
          ]
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: [
            {
              type: 'array',
              items: {
                type: 'boolean'
              }
            }
          ]
        }

        const hash = {
          '#/0/0': 'false'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an object of `null` type)', () => {
        const document = [
          [
            null
          ]
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: [
            {
              type: 'array',
              items: {
                type: 'null'
              }
            }
          ]
        }

        const hash = {
          '#/0/0': 'null'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `object` type)', () => {
        const document = [
          {
            one: 'mock array type index object type key string',
            two: '1'
          }
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: [
            {
              type: 'object',
              properties: {
                one: {
                  type: 'string'
                },
                two: {
                  type: 'number'
                }
              }
            }
          ]
        }

        const hash = {
          '#/0/one': 'mock array type index object type key string',
          '#/0/two': '1'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `boolean` type)', () => {
        const document = [
          true
        ]

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

        const hash = {
          '#/0': 'true'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `null` type)', () => {
        const document = [
          null
        ]

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

        const hash = {
          '#/0': 'null'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `string` type)', () => {
        const document = [
          'mock array type index string'
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: {
            type: 'string'
          }
        }

        const hash = {
          '#/0': 'mock array type index string'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `number` type)', () => {
        const document = [
          1
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: {
            type: 'number'
          }
        }

        const hash = {
          '#/0': '1'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an array of `string` type)', () => {
        const document = [
          [
            'string'
          ]
        ]

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
              }
            ]
          }
        }

        const hash = {
          '#/0/0': 'string'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an array of `number` type)', () => {
        const document = [
          [
            1
          ]
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: {
            type: 'array',
            items: [
              {
                type: 'number'
              }
            ]
          }
        }

        const hash = {
          '#/0/0': '1'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an array of `boolean` type)', () => {
        const document = [
          [
            false
          ]
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: {
            type: 'array',
            items: [
              {
                type: 'boolean'
              }
            ]
          }
        }

        const hash = {
          '#/0/0': 'false'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an array of `null` type)', () => {
        const document = [
          [
            null
          ]
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: {
            type: 'array',
            items: [
              {
                type: 'null'
              }
            ]
          }
        }

        const hash = {
          '#/0/0': 'null'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object of `string` type)', () => {
        const document = [
          [
            'string'
          ]
        ]

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

        const hash = {
          '#/0/0': 'string'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object of `number` type)', () => {
        const document = [
          [
            1
          ]
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: {
            type: 'array',
            items: {
              type: 'number'
            }
          }
        }

        const hash = {
          '#/0/0': '1'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object of `boolean` type)', () => {
        const document = [
          [
            false
          ]
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: {
            type: 'array',
            items: {
              type: 'boolean'
            }
          }
        }

        const hash = {
          '#/0/0': 'false'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object of `null` type)', () => {
        const document = [
          [
            null
          ]
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: {
            type: 'array',
            items: {
              type: 'null'
            }
          }
        }

        const hash = {
          '#/0/0': 'null'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `object` type)', () => {
        const document = [
          {
            one: 'mock array type index object type key string',
            two: '1'
          }
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              one: {
                type: 'string'
              },
              two: {
                type: 'number'
              }
            }
          }
        }

        const hash = {
          '#/0/one': 'mock array type index object type key string',
          '#/0/two': '1'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `boolean` type)', () => {
        const document = [
          true
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: {
            type: 'boolean'
          }
        }

        const hash = {
          '#/0': 'true'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `null` type)', () => {
        const document = [
          null
        ]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: {
            type: 'null'
          }
        }

        const hash = {
          '#/0': 'null'
        }

        return expect(transformArraySchema(document, schema))
          .to.eql(hash)
      })
    })
  })

  describe('Document is undefined', () => {
    it('transforms', () => expect(transformArraySchema(undefined, { type: 'array' })).to.eql({ '#/': '' }))
  })
})
