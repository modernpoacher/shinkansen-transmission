import debug from 'debug'

import { expect } from 'chai'

import trasnformArraySchema from 'shinkansen-transmission/transmission/from-document-to-hash/array'

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
    expect(trasnformArraySchema)
      .to.be.a('function')
  })

  describe('Document is defined', () => {
    describe('Transforming `array` type schemas', () => {
      it('transforms `array` type schemas with `enum`', () => {
        const document = []

        const schema = {
          type: 'array',
          enum: [
            [],
            [],
            []
          ]
        }

        const values = {
          '#/': []
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas with `anyOf`', () => {
        const document = []

        const schema = {
          type: 'array',
          anyOf: [
            [],
            [],
            []
          ]
        }

        const values = {
          '#/': []
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas with `oneOf`', () => {
        const document = []

        const schema = {
          type: 'array',
          oneOf: [
            [],
            [],
            []
          ]
        }

        const values = {
          '#/': []
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas with `enum` (string)', () => {
        const document = ['mock array type index string (2)']

        const schema = {
          type: 'array',
          enum: [
            'mock array type index string (1)',
            'mock array type index string (2)',
            'mock array type index string (3)']
        }

        const values = {
          '#/': ['1']
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas with `anyOf` (string)', () => {
        const document = ['mock array type index string (2)']

        const schema = {
          type: 'array',
          anyOf: [
            'mock array type index string (1)',
            'mock array type index string (2)',
            'mock array type index string (3)']
        }

        const values = {
          '#/': ['1']
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas with `oneOf` (string)', () => {
        const document = ['mock array type index string (2)']

        const schema = {
          type: 'array',
          oneOf: [
            'mock array type index string (1)',
            'mock array type index string (2)',
            'mock array type index string (3)']
        }

        const values = {
          '#/': ['1']
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas with `enum` (number)', () => {
        const document = [3]

        const schema = {
          type: 'array',
          enum: [1, 2, 3]
        }

        const values = {
          '#/': ['2']
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas with `anyOf` (number)', () => {
        const document = [3]

        const schema = {
          type: 'array',
          anyOf: [1, 2, 3]
        }

        const values = {
          '#/': ['2']
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas with `oneOf` (number)', () => {
        const document = [3]

        const schema = {
          type: 'array',
          oneOf: [1, 2, 3]
        }

        const values = {
          '#/': ['2']
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas with `enum` (boolean)', () => {
        const document = [false]

        const schema = {
          type: 'array',
          enum: [true, false]
        }

        const values = {
          '#/': ['1']
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas with `anyOf` (boolean)', () => {
        const document = [false]

        const schema = {
          type: 'array',
          anyOf: [true, false]
        }

        const values = {
          '#/': ['1']
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas with `oneOf` (boolean)', () => {
        const document = [false]

        const schema = {
          type: 'array',
          oneOf: [true, false]
        }

        const values = {
          '#/': ['1']
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas with `enum` (null)', () => {
        const document = [null]

        const schema = {
          type: 'array',
          enum: [null]
        }

        const values = {
          '#/': ['0']
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas with `anyOf` (null)', () => {
        const document = [null]

        const schema = {
          type: 'array',
          anyOf: [null]
        }

        const values = {
          '#/': ['0']
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas with `oneOf` (null)', () => {
        const document = [null]

        const schema = {
          type: 'array',
          oneOf: [null]
        }

        const values = {
          '#/': ['0']
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas', () => {
        const document = [
          'mock array type index string (1)',
          'mock array type index string (2)',
          'mock array type index string (3)'
        ]

        const schema = {
          type: 'array'
        }

        const values = {
          '#/0': 'mock array type index string (1)',
          '#/1': 'mock array type index string (2)',
          '#/2': 'mock array type index string (3)'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an array of `string` type with `enum`)', () => {
        const document = ['mock array type index string (2)']

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

        const values = {
          '#/0': '1'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an array of `number` type with `enum`)', () => {
        const document = [3]

        const schema = {
          type: 'array',
          items: [
            {
              type: 'number',
              enum: [1, 2, 3]
            }
          ]
        }

        const values = {
          '#/0': '2'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an array of `string` type with `enum`)', () => {
        const document = [['mock array type index string (2)']]

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

        const values = {
          '#/0/0': '1'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an array of `number` type with `enum`)', () => {
        const document = [[2]]

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

        const values = {
          '#/0/0': '1'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an array of `boolean` type with `enum`)', () => {
        const document = [[false]]

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

        const values = {
          '#/0/0': '1'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an array of `null` type with `enum`)', () => {
        const document = [[null]]

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

        const values = {
          '#/0/0': '0'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an object of `string` type with `enum`)', () => {
        const document = [['mock array type index string (2)']]

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

        const values = {
          '#/0': ['1']
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an object of `number` type with `enum`)', () => {
        const document = [[2]]

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

        const values = {
          '#/0': ['1']
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an object of `boolean` type with `enum`)', () => {
        const document = [[false]]

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

        const values = {
          '#/0': ['1']
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an object of `null` type with `enum`)', () => {
        const document = [[null]]

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

        const values = {
          '#/0': ['0'] // #/0/0': '0'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an object of `array` type and `items` is an object of `string` type schemas with `enum`', () => {
        const document = [['a', 'b', 'c']]

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

        const values = {
          '#/0': ['0', '1', '2']
        }

        expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an object of `array` type and `items` is an object of `number` type schemas with `enum`', () => {
        const document = [[1, 2, 3]]

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

        const values = {
          '#/0': ['0', '1', '2']
        }

        expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an object of `array` type and `items` is an object of `boolean` type schemas with `enum`', () => {
        const document = [[true, false, true]]

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

        const values = {
          '#/0': ['0', '1', '0']
        }

        expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an object of `array` type and `items` is an object of `boolean` type schemas with `enum`', () => {
        const document = [[null, null, null]]

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

        const values = {
          '#/0': ['0', '0', '0']
        }

        expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an array of `object` type with `enum`)', () => {
        const document = [
          {
            one: 'mock array type index object type key string (1)',
            two: 'mock array type index object type key string (2)'
          }
        ]

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

        const values = {
          '#/0/one': '0',
          '#/0/two': '1'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an array of `boolean` type with `enum`)', () => {
        const document = [false]

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

        const values = {
          '#/0': '1'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an array of `null` type with `enum`)', () => {
        const document = [null]

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

        const values = {
          '#/0': '0'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an array of `string` type and `number` type with `enum`)', () => {
        const document = ['string (3)', 3]

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

        const values = {
          '#/0': '2',
          '#/1': '2'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an object of `string` type with `enum`)', () => {
        const document = ['mock array type index string (2)']

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

        const values = {
          '#/': ['1']
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an object of `number` type with `enum`)', () => {
        const document = [3]

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

        const values = {
          '#/': ['2']
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an array of `string` type with `enum`)', () => {
        const document = [['mock array type index string (2)']]

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

        const values = {
          '#/0/0': '1'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an array of `number` type with `enum`)', () => {
        const document = [[2]]

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

        const values = {
          '#/0/0': '1'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an array of `boolean` type with `enum`)', () => {
        const document = [[false]]

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

        const values = {
          '#/0/0': '1'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an array of `null` type with `enum`)', () => {
        const document = [[null]]

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

        const values = {
          '#/0/0': '0'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object of `string` type with `enum`)', () => {
        const document = [['mock array type index string (2)']]

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

        const values = {
          '#/0': ['1'] // #/0/0': '1'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object of `number` type with `enum`)', () => {
        const document = [[2]]

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

        const values = {
          '#/0': ['1'] // #/0/0': '1'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object of `boolean` type with `enum`)', () => {
        const document = [[false]]

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

        const values = {
          '#/0': ['1'] // #/0/0': '1'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object of `null` type with `enum`)', () => {
        const document = [[null]]

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

        const values = {
          '#/0': ['0'] // #/0/0': '0'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object of `array` type and `items` is an object of `string` type schemas with `enum`', () => {
        const document = [['a', 'b', 'c']]

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

        const values = {
          '#/0': ['0', '1', '2']
        }

        expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object of `array` type and `items` is an object of `number` type schemas with `enum`', () => {
        const document = [[1, 2, 3]]

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

        const values = {
          '#/0': ['0', '1', '2']
        }

        expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object of `array` type and `items` is an object of `boolean` type schemas with `enum`', () => {
        const document = [[true, false, true]]

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

        const values = {
          '#/0': ['0', '1', '0']
        }

        expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object of `array` type and `items` is an object of `boolean` type schemas with `enum`', () => {
        const document = [[null, null, null]]

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

        const values = {
          '#/0': ['0', '0', '0']
        }

        expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an object of `object` type with `enum`)', () => {
        const document = [
          {
            one: 'mock array type index object type key string (1)',
            two: 'mock array type index object type key string (2)'
          }
        ]

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

        const values = {
          '#/0/one': '0',
          '#/0/two': '1'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an object of `boolean` type with `enum`)', () => {
        const document = [false]

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

        const values = {
          '#/': ['1']
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an object of `null` type with `enum`)', () => {
        const document = [null]

        const schema = {
          type: 'array',
          items: {
            type: 'null',
            enum: [
              null
            ]
          }
        }

        const values = {
          '#/': ['0']
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an array of `string` type with `anyOf`)', () => {
        const document = [
          'mock array type index string (1)',
          'mock array type index string (2)',
          'mock array type index string (3)'
        ]

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

        const values = {
          '#/0': '0',
          '#/1': '1',
          '#/2': '2'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an array of `string` type with `oneOf`)', () => {
        const document = [
          'mock array type index string (1)',
          'mock array type index string (2)',
          'mock array type index string (3)'
        ]

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

        const values = {
          '#/0': '0',
          '#/1': '1',
          '#/2': '2'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an array of `string` type with `allOf`)', () => {
        const document = [
          'mock array type index string (1)',
          'mock array type index string (2)',
          'mock array type index string (3)'
        ]

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

        const values = {
          '#/0': 'mock array type index string (1)',
          '#/1': 'mock array type index string (2)',
          '#/2': 'mock array type index string (3)'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an object of `number` type with `anyOf`)', () => {
        const document = [
          1,
          2,
          3
        ]

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

        const values = {
          '#/': ['0', '1', '2']
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an object of `number` type with `oneOf`)', () => {
        const document = [
          1,
          2,
          3
        ]

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

        const values = {
          '#/': ['0', '1', '2']
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an object of `number` type with `allOf`)', () => {
        const document = [
          3
        ]

        const schema = {
          type: 'array',
          items: {
            type: 'number',
            allOf: [
              { const: 3 }
            ]
          }
        }

        const values = {
          '#/0': '3'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an array of `string` type)', () => {
        const document = ['mock array type index string']

        const schema = {
          type: 'array',
          items: [
            {
              type: 'string'
            }
          ]
        }

        const values = {
          '#/0': 'mock array type index string'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an array of `number` type)', () => {
        const document = [1]

        const schema = {
          type: 'array',
          items: [
            {
              type: 'number'
            }
          ]
        }

        const values = {
          '#/0': '1'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an array of `string` type)', () => {
        const document = [['string']]

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

        const values = {
          '#/0/0': 'string'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an array of `number` type)', () => {
        const document = [[1]]

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

        const values = {
          '#/0/0': '1'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an array of `boolean` type)', () => {
        const document = [[false]]

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

        const values = {
          '#/0/0': 'false'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an array of `null` type)', () => {
        const document = [[null]]

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

        const values = {
          '#/0/0': 'null'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an object of `string` type)', () => {
        const document = [['string']]

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

        const values = {
          '#/0/0': 'string'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an object of `number` type)', () => {
        const document = [[1]]

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

        const values = {
          '#/0/0': '1'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an object of `boolean` type)', () => {
        const document = [[false]]

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

        const values = {
          '#/0/0': 'false'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an object of `null` type)', () => {
        const document = [[null]]

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

        const values = {
          '#/0/0': 'null'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an array of `object` type)', () => {
        const document = [
          {
            one: 'mock array type index object type key string',
            two: '1'
          }
        ]

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

        const values = {
          '#/0/one': 'mock array type index object type key string',
          '#/0/two': '1'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an array of `boolean` type)', () => {
        const document = [true]

        const schema = {
          type: 'array',
          items: [
            {
              type: 'boolean'
            }
          ]
        }

        const values = {
          '#/0': 'true'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an array of `null` type)', () => {
        const document = [null]

        const schema = {
          type: 'array',
          items: [
            {
              type: 'null'
            }
          ]
        }

        const values = {
          '#/0': 'null'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an array)', () => {
        const document = ['string', 2]

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

        const values = {
          '#/0': 'string',
          '#/1': '2'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an object of `string` type)', () => {
        const document = ['mock array type index string']

        const schema = {
          type: 'array',
          items: {
            type: 'string'
          }
        }

        const values = {
          '#/0': 'mock array type index string'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an object of `number` type)', () => {
        const document = [1]

        const schema = {
          type: 'array',
          items: {
            type: 'number'
          }
        }

        const values = {
          '#/0': '1'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an array of `string` type)', () => {
        const document = [['string']]

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

        const values = {
          '#/0/0': 'string'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an array of `number` type)', () => {
        const document = [[1]]

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

        const values = {
          '#/0/0': '1'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an array of `boolean` type)', () => {
        const document = [[false]]

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

        const values = {
          '#/0/0': 'false'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an array of `null` type)', () => {
        const document = [[null]]

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

        const values = {
          '#/0/0': 'null'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object of `string` type)', () => {
        const document = [['string']]

        const schema = {
          type: 'array',
          items: {
            type: 'array',
            items: {
              type: 'string'
            }
          }
        }

        const values = {
          '#/0/0': 'string'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object of `number` type)', () => {
        const document = [[1]]

        const schema = {
          type: 'array',
          items: {
            type: 'array',
            items: {
              type: 'number'
            }
          }
        }

        const values = {
          '#/0/0': '1'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object of `boolean` type)', () => {
        const document = [[false]]

        const schema = {
          type: 'array',
          items: {
            type: 'array',
            items: {
              type: 'boolean'
            }
          }
        }

        const values = {
          '#/0/0': 'false'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object of `null` type)', () => {
        const document = [[null]]

        const schema = {
          type: 'array',
          items: {
            type: 'array',
            items: {
              type: 'null'
            }
          }
        }

        const values = {
          '#/0/0': 'null'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an object of `object` type)', () => {
        const document = [
          {
            one: 'mock array type index object type key string',
            two: '1'
          }
        ]

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

        const values = {
          '#/0/one': 'mock array type index object type key string',
          '#/0/two': '1'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an object of `boolean` type)', () => {
        const document = [true]

        const schema = {
          type: 'array',
          items: {
            type: 'boolean'
          }
        }

        const values = {
          '#/0': 'true'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })

      it('transforms `array` type schemas (`items` is an object of `null` type)', () => {
        const document = [null]

        const schema = {
          type: 'array',
          items: {
            type: 'null'
          }
        }

        const values = {
          '#/0': 'null'
        }

        return expect(trasnformArraySchema(document, schema))
          .to.eql(values)
      })
    })
  })

  describe('Document is undefined', () => {
    it('transforms', () => expect(trasnformArraySchema()).to.eql({ '#/': '' }))
  })
})
