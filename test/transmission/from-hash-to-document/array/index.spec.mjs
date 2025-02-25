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
        describe('Transforming `array` type schemas (`items` is an array of `string` type)', () => {
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

          it('transforms `array` type schemas (`items` is an array of `string` type schemas with `enum`)', () => {
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
                    'mock array type index string (4)',
                    'mock array type index string (5)',
                    'mock array type index string (6)'
                  ]
                },
                {
                  type: 'string',
                  enum: [
                    'mock array type index string (7)',
                    'mock array type index string (8)',
                    'mock array type index string (9)'
                  ]
                }
              ]
            }

            const document = [
              'mock array type index string (1)',
              'mock array type index string (5)',
              'mock array type index string (9)'
            ]

            return expect(transformArraySchema(hash, schema))
              .to.eql(document)
          })

          it('transforms `array` type schemas (`items` is an array of `string` type schemas with `anyOf`)', () => {
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

            const document = [
              'mock array type index string (1)',
              'mock array type index string (5)',
              'mock array type index string (9)'
            ]

            return expect(transformArraySchema(hash, schema))
              .to.eql(document)
          })

          it('transforms `array` type schemas (`items` is an array of `string` type schemas with `oneOf`)', () => {
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

            const document = [
              'mock array type index string (1)',
              'mock array type index string (5)',
              'mock array type index string (9)'
            ]

            return expect(transformArraySchema(hash, schema))
              .to.eql(document)
          })

          it('transforms `array` type schemas (`items` is an array of `string` type schemas with `allOf`)', () => {
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

          it('transforms `array` type schemas (`items` is an object of `string` type schemas with `enum`)', () => {
            const hash = {
              '#/0': '1'
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
              'mock array type index string (2)'
            ]

            return expect(transformArraySchema(hash, schema))
              .to.eql(document)
          })

          it('transforms `array` type schemas (`items` is an object of `string` type schemas with `anyOf`)', () => {
            const hash = {
              '#/0': '1'
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
              'mock array type index string (2)'
            ]

            return expect(transformArraySchema(hash, schema))
              .to.eql(document)
          })

          it('transforms `array` type schemas (`items` is an object of `string` type schemas with `oneOf`)', () => {
            const hash = {
              '#/0': '1'
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
              'mock array type index string (2)'
            ]

            return expect(transformArraySchema(hash, schema))
              .to.eql(document)
          })

          it('transforms `array` type schemas (`items` is an object of `string` type schemas with `allOf`)', () => {
            const hash = {
              '#/0': 'mock array type index string (2)'
            }

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

            const document = [
              'mock array type index string (2)'
            ]

            return expect(transformArraySchema(hash, schema))
              .to.eql(document)
          })
        })

        describe('Transforming `array` type schemas (`items` is an array of `number` type)', () => {
          it('transforms `array` type schemas (`items` is an array of `number` type)', () => {
            const hash = {
              '#/0': '1',
              '#/1': '2',
              '#/2': '3'
            }

            /**
             *  @type {SchemaType}
             */
            const schema = {
              type: 'array',
              items: [
                {
                  type: 'number'
                },
                {
                  type: 'number'
                },
                {
                  type: 'number'
                }
              ]
            }

            const document = [
              1,
              2,
              3
            ]

            return expect(transformArraySchema(hash, schema))
              .to.eql(document)
          })

          it('transforms `array` type schemas (`items` is an array of `number` type schemas with `enum`)', () => {
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
                  type: 'number',
                  enum: [
                    1,
                    2,
                    3
                  ]
                },
                {
                  type: 'number',
                  enum: [
                    4,
                    5,
                    'mock array type index number (6)'
                  ]
                },
                {
                  type: 'number',
                  enum: [
                    7,
                    8,
                    9
                  ]
                }
              ]
            }

            const document = [
              1,
              5,
              9
            ]

            return expect(transformArraySchema(hash, schema))
              .to.eql(document)
          })

          it('transforms `array` type schemas (`items` is an array of `number` type schemas with `anyOf`)', () => {
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

            const document = [
              1,
              5,
              9
            ]

            return expect(transformArraySchema(hash, schema))
              .to.eql(document)
          })

          it('transforms `array` type schemas (`items` is an array of `number` type schemas with `oneOf`)', () => {
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

            const document = [
              1,
              5,
              9
            ]

            return expect(transformArraySchema(hash, schema))
              .to.eql(document)
          })

          it('transforms `array` type schemas (`items` is an array of `number` type schemas with `allOf`)', () => {
            const hash = {
              '#/0': '1',
              '#/1': '2',
              '#/2': '3'
            }

            /**
             *  @type {SchemaType}
             */
            const schema = {
              type: 'array',
              items: [
                {
                  type: 'number',
                  allOf: [
                    { minimum: 1 },
                    { maximum: 32 }
                  ]
                },
                {
                  type: 'number',
                  allOf: [
                    { minimum: 1 },
                    { maximum: 32 }
                  ]
                },
                {
                  type: 'number',
                  allOf: [
                    { minimum: 1 },
                    { maximum: 32 }
                  ]
                }
              ]
            }

            const document = [
              1,
              2,
              3
            ]

            return expect(transformArraySchema(hash, schema))
              .to.eql(document)
          })

          it('transforms `array` type schemas (`items` is an object of `number` type schemas with `enum`)', () => {
            const hash = {
              '#/0': '1'
            }

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

            const document = [
              2
            ]

            return expect(transformArraySchema(hash, schema))
              .to.eql(document)
          })

          it('transforms `array` type schemas (`items` is an object of `number` type schemas with `anyOf`)', () => {
            const hash = {
              '#/0': '1'
            }

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

            const document = [
              2
            ]

            return expect(transformArraySchema(hash, schema))
              .to.eql(document)
          })

          it('transforms `array` type schemas (`items` is an object of `number` type schemas with `oneOf`)', () => {
            const hash = {
              '#/0': '1'
            }

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

            const document = [
              2
            ]

            return expect(transformArraySchema(hash, schema))
              .to.eql(document)
          })

          it('transforms `array` type schemas (`items` is an object of `number` type schemas with `allOf`)', () => {
            const hash = {
              '#/0': '2'
            }

            /**
             *  @type {SchemaType}
             */
            const schema = {
              type: 'array',
              items: {
                type: 'number',
                allOf: [
                  { minimum: 1 },
                  { maximum: 32 }
                ]
              }
            }

            const document = [
              2
            ]

            return expect(transformArraySchema(hash, schema))
              .to.eql(document)
          })
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

          const document = [
            [
              'mock array type index string type',
              1
            ]
          ]

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

          const document = [
            [
              'mock array type index string type (0)',
              'mock array type index string type (1)'
            ]
          ]

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

          const document = [
            [
              'a',
              'b',
              'c'
            ]
          ]

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

          const document = [
            [
              1,
              2,
              3
            ]
          ]

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

          const document = [
            [
              true,
              false,
              true
            ]
          ]

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

          const document = [
            [
              null,
              null,
              null
            ]
          ]

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

          const document = [
            true
          ]

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

          const document = [
            null
          ]

          return expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        describe('Transforming `array` type schemas (`items` is an object of `string` type)', () => {
          it('transforms `array` type schemas (`items` is an object of `string` type schemas with `enum`)', () => {
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

          it('transforms `array` type schemas (`items` is an object of `string` type schemas with `anyOf`)', () => {
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

          it('transforms `array` type schemas (`items` is an object of `string` type schemas with `oneOf`)', () => {
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

          it('transforms `array` type schemas (`items` is an object of `string` type schemas with `allOf`)', () => {
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

        describe('Transforming `array` type schemas (`items` is an object of `number` type)', () => {
          it('transforms `array` type schemas (`items` is an object of `number` type schemas with `enum`)', () => {
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
                type: 'number',
                enum: [
                  1,
                  2,
                  3
                ]
              }
            }

            const document = [
              1,
              2,
              3
            ]

            return expect(transformArraySchema(hash, schema))
              .to.eql(document)
          })

          it('transforms `array` type schemas (`items` is an object of `number` type schemas with `anyOf`)', () => {
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
                type: 'number',
                anyOf: [
                  { const: 1 },
                  { const: 2 },
                  { const: 3 }
                ]
              }
            }

            const document = [
              1,
              2,
              3
            ]

            return expect(transformArraySchema(hash, schema))
              .to.eql(document)
          })

          it('transforms `array` type schemas (`items` is an object of `number` type schemas with `oneOf`)', () => {
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
                type: 'number',
                oneOf: [
                  { const: 1 },
                  { const: 2 },
                  { const: 3 }
                ]
              }
            }

            const document = [
              1,
              2,
              3
            ]

            return expect(transformArraySchema(hash, schema))
              .to.eql(document)
          })

          it('transforms `array` type schemas (`items` is an object of `number` type schemas with `allOf`)', () => {
            const hash = {
              '#/0': 1
            }

            /**
             *  @type {SchemaType}
             */
            const schema = {
              type: 'array',
              items: {
                type: 'number',
                allOf: [
                  { const: 1 },
                  { minimum: 1 },
                  { maximum: 100 }
                ]
              }
            }

            const document = [
              1
            ]

            return expect(transformArraySchema(hash, schema))
              .to.eql(document)
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

            const document = [
              1
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

          const document = [
            1
          ]

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

          const document = [
            []
          ]

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

          const document = [
            [
              'mock array type index string type',
              1
            ]
          ]

          return expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object)', () => {
          const hash = {
            '#/0/0': 'mock array type index string type (0)',
            '#/0/1': 'mock array type index string type (1)'
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

          const document = [
            [
              'mock array type index string type (0)',
              'mock array type index string type (1)'
            ]
          ]

          return expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object of `array` type and `items` is an object of `string` type)', () => {
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

          const document = [
            [
              'a',
              'b',
              'c'
            ]
          ]

          expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object of `array` type and `items` is an object of `number` type)', () => {
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

          const document = [
            [
              1,
              2,
              3
            ]
          ]

          expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object of `array` type and `items` is an object of `boolean` type)', () => {
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

          const document = [
            [
              true,
              false,
              true
            ]
          ]

          expect(transformArraySchema(hash, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object of `array` type and `items` is an object of `null` type)', () => {
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

          const document = [
            [
              null,
              null,
              null
            ]
          ]

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

          const document = [
            true
          ]

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

          const document = [
            null
          ]

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
