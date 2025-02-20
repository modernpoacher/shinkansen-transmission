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

import transform from 'shinkansen-transmission/transmission/from-document-to-hash'

describe('shinkansen-transmission/transmission/from-document-to-hash', () => {
  before(() => {
    const {
      env: {
        DEBUG
      }
    } = process

    if (DEBUG) debug.enable(DEBUG)
  })

  it('is a function', () => {
    expect(transform)
      .to.be.a('function')
  })

  describe('Document is defined', () => {
    it('transforms', () => {
      const document = {
        stringTypeSubSchema: 'mock string',
        numberTypeSubSchema: 1,
        arrayTypeSubSchema: [
          'mock array string'
        ],
        objectTypeSubSchema: {
          one: 'mock object string',
          two: 2
        },
        booleanTypeSubSchema: true,
        nullTypeSubSchema: null,
        latitude: 84,
        longitude: -90,
        array: [[[1]]],
        object: {
          a: { b: { c: 'D' } }
        }
      }

      /**
       *  @type {SchemaType}
       */
      const schema = {
        $id: 'https://example.com/geographical-location.schema.json',
        $schema: 'http://json-schema.org/draft-07/schema#',
        title: 'Latitude and Longitude',
        description: 'A geographical coordinate',
        required: ['latitude', 'longitude'],
        type: 'object',
        properties: {
          stringTypeSubSchema: {
            title: 'String type sub schema',
            type: 'string',
            minLength: 1,
            maxLength: 10
          },
          numberTypeSubSchema: {
            title: 'Number type sub schema',
            type: 'number',
            minimum: 1,
            maximum: 10
          },
          arrayTypeSubSchema: {
            title: 'Array type sub schema',
            type: 'array',
            items: [
              {
                type: 'string'
              }
            ]
          },
          objectTypeSubSchema: {
            title: 'Object type sub schema',
            type: 'object',
            properties: {
              one: { type: 'string' },
              two: { type: 'number' }
            }
          },
          booleanTypeSubSchema: {
            title: 'Boolean type sub schema',
            type: 'boolean'
          },
          nullTypeSubSchema: {
            title: 'Null type sub schema',
            type: 'null'
          },
          latitude: {
            title: 'Latitude',
            type: 'number',
            minimum: -90,
            maximum: 90,
            multipleOf: 42.0
          },
          longitude: {
            title: 'Longitude',
            type: 'number',
            minimum: -180,
            maximum: 180,
            exclusiveMinimum: true,
            exclusiveMaximum: true
          },
          array: {
            type: 'array',
            items: [
              {
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
            ]
          },
          object: {
            type: 'object',
            properties: {
              a: {
                type: 'object',
                properties: {
                  b: {
                    type: 'object',
                    properties: {
                      c: {
                        type: 'string'
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      const hash = {
        '#/stringTypeSubSchema': 'mock string',
        '#/numberTypeSubSchema': '1',
        '#/arrayTypeSubSchema/0': 'mock array string',
        '#/objectTypeSubSchema/one': 'mock object string',
        '#/objectTypeSubSchema/two': '2',
        '#/booleanTypeSubSchema': 'true',
        '#/nullTypeSubSchema': 'null',
        '#/latitude': '84',
        '#/longitude': '-90',
        '#/array/0/0/0': '1',
        '#/object/a/b/c': 'D'
      }

      return expect(transform(document, schema))
        .to.eql(hash)
    })

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

        return expect(transform(document, schema))
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

        return expect(transform(document, schema))
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

        return expect(transform(document, schema))
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

        return expect(transform(document, schema))
          .to.eql(hash)
      })
    })

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

        return expect(transform(document, schema))
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

        return expect(transform(document, schema))
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

        return expect(transform(document, schema))
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

        return expect(transform(document, schema))
          .to.eql(hash)
      })
    })

    describe('Transforming `array` type schemas', () => {
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
          '#/': []
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas with `anyOf`', () => {
        /**
         *  @type {ArrayLiteralType}
         */
        const document = []

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          anyOf: [
            [],
            [],
            []
          ]
        }

        const hash = {
          '#/': []
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas with `oneOf`', () => {
        /**
         *  @type {ArrayLiteralType}
         */
        const document = []

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          oneOf: [
            [],
            [],
            []
          ]
        }

        const hash = {
          '#/': []
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas with `enum` (string)', () => {
        const document = ['mock array type index string (2)']

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          enum: [
            'mock array type index string (1)',
            'mock array type index string (2)',
            'mock array type index string (3)']
        }

        const hash = {
          '#/': ['1']
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas with `anyOf` (string)', () => {
        const document = ['mock array type index string (2)']

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          anyOf: [
            'mock array type index string (1)',
            'mock array type index string (2)',
            'mock array type index string (3)']
        }

        const hash = {
          '#/': ['1']
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas with `oneOf` (string)', () => {
        const document = ['mock array type index string (2)']

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          oneOf: [
            'mock array type index string (1)',
            'mock array type index string (2)',
            'mock array type index string (3)']
        }

        const hash = {
          '#/': ['1']
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas with `enum` (number)', () => {
        const document = [3]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          enum: [1, 2, 3]
        }

        const hash = {
          '#/': ['2']
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas with `anyOf` (number)', () => {
        const document = [3]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          anyOf: [1, 2, 3]
        }

        const hash = {
          '#/': ['2']
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas with `oneOf` (number)', () => {
        const document = [3]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          oneOf: [1, 2, 3]
        }

        const hash = {
          '#/': ['2']
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas with `enum` (boolean)', () => {
        const document = [false]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          enum: [true, false]
        }

        const hash = {
          '#/': ['1']
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas with `anyOf` (boolean)', () => {
        const document = [false]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          anyOf: [true, false]
        }

        const hash = {
          '#/': ['1']
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas with `oneOf` (boolean)', () => {
        const document = [false]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          oneOf: [true, false]
        }

        const hash = {
          '#/': ['1']
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas with `enum` (null)', () => {
        const document = [null]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          enum: [null]
        }

        const hash = {
          '#/': ['0']
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas with `anyOf` (null)', () => {
        const document = [null]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          anyOf: [null]
        }

        const hash = {
          '#/': ['0']
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas with `oneOf` (null)', () => {
        const document = [null]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          oneOf: [null]
        }

        const hash = {
          '#/': ['0']
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

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

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `string` type with `enum`)', () => {
        const document = ['mock array type index string (2)']

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
                'mock array type index string (3)']
            }
          ]
        }

        const hash = {
          '#/0': '1'
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `number` type with `enum`)', () => {
        const document = [3]

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'array',
          items: [
            {
              type: 'number',
              enum: [1, 2, 3]
            }
          ]
        }

        const hash = {
          '#/0': '2'
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an array of `string` type with `enum`)', () => {
        const document = [['mock array type index string (2)']]

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
                    'mock array type index string (3)']
                }
              ]
            }
          ]
        }

        const hash = {
          '#/0/0': '1'
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an array of `number` type with `enum`)', () => {
        const document = [[2]]

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

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an array of `boolean` type with `enum`)', () => {
        const document = [[false]]

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

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an array of `null` type with `enum`)', () => {
        const document = [[null]]

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

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an object of `string` type with `enum`)', () => {
        const document = [['mock array type index string (2)']]

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
                  'mock array type index string (3)']
              }
            }
          ]
        }

        const hash = {
          '#/0': ['1']
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an object of `number` type with `enum`)', () => {
        const document = [[2]]

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
          '#/0': ['1']
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an object of `boolean` type with `enum`)', () => {
        const document = [[false]]

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
          '#/0': ['1']
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an object of `null` type with `enum`)', () => {
        const document = [[null]]

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
          '#/0': ['0'] // #/0/0': '0'
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an object of `array` type and `items` is an object of `string` type schemas with `enum`', () => {
        const document = [['a', 'b', 'c']]

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
          '#/0': ['0', '1', '2']
        }

        expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an object of `array` type and `items` is an object of `number` type schemas with `enum`', () => {
        const document = [[1, 2, 3]]

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
          '#/0': ['0', '1', '2']
        }

        expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an object of `array` type and `items` is an object of `boolean` type schemas with `enum`', () => {
        const document = [[true, false, true]]

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
                  true,
                  false
                ]
              }
            }
          ]
        }

        const hash = {
          '#/0': ['0', '1', '0']
        }

        expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an object of `array` type and `items` is an object of `boolean` type schemas with `enum`', () => {
        const document = [[null, null, null]]

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

        const hash = {
          '#/0': ['0', '0', '0']
        }

        expect(transform(document, schema))
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

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `boolean` type with `enum`)', () => {
        const document = [false]

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

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `null` type with `enum`)', () => {
        const document = [null]

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

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `string` type and `number` type with `enum`)', () => {
        const document = ['string (3)', 3]

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

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `string` type with `enum`)', () => {
        const document = ['mock array type index string (2)']

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
              'mock array type index string (3)']
          }
        }

        const hash = {
          '#/': ['1']
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `number` type with `enum`)', () => {
        const document = [3]

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
          '#/': ['2']
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an array of `string` type with `enum`)', () => {
        const document = [['mock array type index string (2)']]

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
                  'mock array type index string (3)']
              }
            ]
          }
        }

        const hash = {
          '#/0/0': '1'
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an array of `number` type with `enum`)', () => {
        const document = [[2]]

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

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an array of `boolean` type with `enum`)', () => {
        const document = [[false]]

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

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an array of `null` type with `enum`)', () => {
        const document = [[null]]

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

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object of `string` type with `enum`)', () => {
        const document = [['mock array type index string (2)']]

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
                'mock array type index string (3)']
            }
          }
        }

        const hash = {
          '#/0': ['1'] // #/0/0': '1'
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object of `number` type with `enum`)', () => {
        const document = [[2]]

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
          '#/0': ['1'] // #/0/0': '1'
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object of `boolean` type with `enum`)', () => {
        const document = [[false]]

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
          '#/0': ['1'] // #/0/0': '1'
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object of `null` type with `enum`)', () => {
        const document = [[null]]

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
          '#/0': ['0'] // #/0/0': '0'
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object of `array` type and `items` is an object of `string` type schemas with `enum`', () => {
        const document = [['a', 'b', 'c']]

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
          '#/0': ['0', '1', '2']
        }

        expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object of `array` type and `items` is an object of `number` type schemas with `enum`', () => {
        const document = [[1, 2, 3]]

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
          '#/0': ['0', '1', '2']
        }

        expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object of `array` type and `items` is an object of `boolean` type schemas with `enum`', () => {
        const document = [[true, false, true]]

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
          '#/0': ['0', '1', '0']
        }

        expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object of `array` type and `items` is an object of `boolean` type schemas with `enum`', () => {
        const document = [[null, null, null]]

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
          '#/0': ['0', '0', '0']
        }

        expect(transform(document, schema))
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

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `boolean` type with `enum`)', () => {
        const document = [false]

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
          '#/': ['1']
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `null` type with `enum`)', () => {
        const document = [null]

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
          '#/': ['0']
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `string` type with `anyOf`)', () => {
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

        const hash = {
          '#/0': '0',
          '#/1': '1',
          '#/2': '2'
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `string` type with `oneOf`)', () => {
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

        const hash = {
          '#/0': '0',
          '#/1': '1',
          '#/2': '2'
        }

        return expect(transform(document, schema))
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

        return expect(transform(document, schema))
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
          '#/': ['0', '1', '2']
        }

        return expect(transform(document, schema))
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
          '#/': ['0', '1', '2']
        }

        return expect(transform(document, schema))
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

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `string` type)', () => {
        const document = ['mock array type index string']

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

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `number` type)', () => {
        const document = [1]

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

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an array of `string` type)', () => {
        const document = [['string']]

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

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an array of `number` type)', () => {
        const document = [[1]]

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

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an array of `boolean` type)', () => {
        const document = [[false]]

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

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an array of `null` type)', () => {
        const document = [[null]]

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

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an object of `string` type)', () => {
        const document = [['string']]

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

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an object of `number` type)', () => {
        const document = [[1]]

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

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an object of `boolean` type)', () => {
        const document = [[false]]

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

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an object of `null` type)', () => {
        const document = [[null]]

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

        return expect(transform(document, schema))
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

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `boolean` type)', () => {
        const document = [true]

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

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array of `null` type)', () => {
        const document = [null]

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

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an array)', () => {
        const document = ['string', 2]

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
              type: 'number'
            }
          ]
        }

        const hash = {
          '#/0': 'string',
          '#/1': '2'
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `string` type)', () => {
        const document = ['mock array type index string']

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

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `number` type)', () => {
        const document = [1]

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

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an array of `string` type)', () => {
        const document = [['string']]

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

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an array of `number` type)', () => {
        const document = [[1]]

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

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an array of `boolean` type)', () => {
        const document = [[false]]

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

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an array of `null` type)', () => {
        const document = [[null]]

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

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object of `string` type)', () => {
        const document = [['string']]

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

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object of `number` type)', () => {
        const document = [[1]]

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

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object of `boolean` type)', () => {
        const document = [[false]]

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

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object of `null` type)', () => {
        const document = [[null]]

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

        return expect(transform(document, schema))
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

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `boolean` type)', () => {
        const document = [true]

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

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `array` type schemas (`items` is an object of `null` type)', () => {
        const document = [null]

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

        return expect(transform(document, schema))
          .to.eql(hash)
      })
    })

    describe('Transforming `object` type schemas', () => {
      it('transforms `object` type schemas with `enum`', () => {
        /**
         *  @type {ObjectLiteralType}
         */
        const document = {}

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'object',
          enum: [
            {},
            {},
            {}
          ]
        }

        const hash = {
          '#/': '0'
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `object` type schemas with `anyOf`', () => {
        /**
         *  @type {ObjectLiteralType}
         */
        const document = {}

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'object',
          anyOf: [
            {},
            {},
            {}
          ]
        }

        const hash = {
          '#/': '0'
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `object` type schemas with `oneOf`', () => {
        /**
         *  @type {ObjectLiteralType}
         */
        const document = {}

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'object',
          oneOf: [
            {},
            {},
            {}
          ]
        }

        const hash = {
          '#/': '0'
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `object` type schemas (`properties` is an object of `string` type)', () => {
        const document = {
          one: 'mock object type key string (1)',
          two: 'mock object type key string (2)'
        }

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'object',
          properties: {
            one: { type: 'string' },
            two: { type: 'string' }
          }
        }

        const hash = {
          '#/one': 'mock object type key string (1)',
          '#/two': 'mock object type key string (2)'
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `object` type schemas (`properties` is an object of `number` type)', () => {
        const document = {
          one: 1,
          two: 2
        }

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'object',
          properties: {
            one: { type: 'number' },
            two: { type: 'number' }
          }
        }

        const hash = {
          '#/one': '1',
          '#/two': '2'
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      /**
       *  Array, object
       */

      it('transforms `object` type schemas (`properties` is an object of `boolean` type)', () => {
        const document = {
          one: true,
          two: false
        }

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'object',
          properties: {
            one: { type: 'boolean' },
            two: { type: 'boolean' }
          }
        }

        const hash = {
          '#/one': 'true',
          '#/two': 'false'
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `object` type schemas (`properties` is an object of `null` type)', () => {
        const document = {
          one: null,
          two: null
        }

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'object',
          properties: {
            one: { type: 'null' },
            two: { type: 'null' }
          }
        }

        const hash = {
          '#/one': 'null',
          '#/two': 'null'
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `object` type schemas (`properties` is an object of `string` type with `enum`)', () => {
        const document = {
          one: 'mock object type key string (1)',
          two: 'mock object type key string (2)'
        }

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'object',
          properties: {
            one: { type: 'string', enum: ['mock object type key string (1)', 'mock object type key string (2)'] },
            two: { type: 'string', enum: ['mock object type key string (1)', 'mock object type key string (2)'] }
          }
        }

        const hash = {
          '#/one': '0',
          '#/two': '1'
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `object` type schemas (`properties` is an object of `string` type with `anyOf`)', () => {
        const document = {
          one: 'mock object type key string (1)',
          two: 'mock object type key string (2)'
        }

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'object',
          properties: {
            one: { type: 'string', anyOf: ['mock object type key string (1)', 'mock object type key string (2)'] },
            two: { type: 'string', anyOf: ['mock object type key string (1)', 'mock object type key string (2)'] }
          }
        }

        const hash = {
          '#/one': '0',
          '#/two': '1'
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `object` type schemas (`properties` is an object of `string` type with `oneOf`)', () => {
        const document = {
          one: 'mock object type key string (1)',
          two: 'mock object type key string (2)'
        }

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'object',
          properties: {
            one: { type: 'string', oneOf: ['mock object type key string (1)', 'mock object type key string (2)'] },
            two: { type: 'string', oneOf: ['mock object type key string (1)', 'mock object type key string (2)'] }
          }
        }

        const hash = {
          '#/one': '0',
          '#/two': '1'
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `object` type schemas (`properties` is an object of `number` type with `enum`)', () => {
        const document = {
          one: 1,
          two: 2
        }

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'object',
          properties: {
            one: { type: 'number', enum: [1, 2] },
            two: { type: 'number', enum: [1, 2] }
          }
        }

        const hash = {
          '#/one': '0',
          '#/two': '1'
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `object` type schemas (`properties` is an object of `number` type with `anyOf`)', () => {
        const document = {
          one: 1,
          two: 2
        }

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'object',
          properties: {
            one: { type: 'number', anyOf: [1, 2] },
            two: { type: 'number', anyOf: [1, 2] }
          }
        }

        const hash = {
          '#/one': '0',
          '#/two': '1'
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `object` type schemas (`properties` is an object of `number` type with `oneOf`)', () => {
        const document = {
          one: 1,
          two: 2
        }

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'object',
          properties: {
            one: { type: 'number', oneOf: [1, 2] },
            two: { type: 'number', oneOf: [1, 2] }
          }
        }

        const hash = {
          '#/one': '0',
          '#/two': '1'
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      /**
       *  Array, object
       */

      it('transforms `object` type schemas (`properties` is an object of `boolean` type with `enum`)', () => {
        const document = {
          one: true,
          two: false
        }

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'object',
          properties: {
            one: { type: 'boolean', enum: [true, false] },
            two: { type: 'boolean', enum: [true, false] }
          }
        }

        const hash = {
          '#/one': '0',
          '#/two': '1'
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `object` type schemas (`properties` is an object of `boolean` type with `anyOf`)', () => {
        const document = {
          one: true,
          two: false
        }

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'object',
          properties: {
            one: { type: 'boolean', anyOf: [true, false] },
            two: { type: 'boolean', anyOf: [true, false] }
          }
        }

        const hash = {
          '#/one': '0',
          '#/two': '1'
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `object` type schemas (`properties` is an object of `boolean` type with `oneOf`)', () => {
        const document = {
          one: true,
          two: false
        }

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'object',
          properties: {
            one: { type: 'boolean', oneOf: [true, false] },
            two: { type: 'boolean', oneOf: [true, false] }
          }
        }

        const hash = {
          '#/one': '0',
          '#/two': '1'
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `object` type schemas (`properties` is an object of `null` type with `enum`)', () => {
        const document = {
          one: null,
          two: null
        }

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'object',
          properties: {
            one: { type: 'null', enum: [null, null] },
            two: { type: 'null', enum: [null, null] }
          }
        }

        const hash = {
          '#/one': '0',
          '#/two': '0'
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `object` type schemas (`properties` is an object of `null` type with `anyOf`)', () => {
        const document = {
          one: null,
          two: null
        }

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'object',
          properties: {
            one: { type: 'null', anyOf: [null, null] },
            two: { type: 'null', anyOf: [null, null] }
          }
        }

        const hash = {
          '#/one': '0',
          '#/two': '0'
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })

      it('transforms `object` type schemas (`properties` is an object of `null` type with `oneOf`)', () => {
        const document = {
          one: null,
          two: null
        }

        /**
         *  @type {SchemaType}
         */
        const schema = {
          type: 'object',
          properties: {
            one: { type: 'null', oneOf: [null, null] },
            two: { type: 'null', oneOf: [null, null] }
          }
        }

        const hash = {
          '#/one': '0',
          '#/two': '0'
        }

        return expect(transform(document, schema))
          .to.eql(hash)
      })
    })

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

        return expect(transform(document, schema))
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

        return expect(transform(document, schema))
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

        return expect(transform(document, schema))
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

        return expect(transform(document, schema))
          .to.eql(hash)
      })
    })

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

        return expect(transform(document, schema))
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

        return expect(transform(document, schema))
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

        return expect(transform(document, schema))
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

        return expect(transform(document, schema))
          .to.eql(hash)
      })
    })
  })

  describe('Document is undefined', () => {
    it('transforms', () => expect(transform()).to.eql({ '#/': '' }))
  })
})
