import debug from 'debug'

import { expect } from 'chai'

import transform from '#transmission/from-hash-to-document'

describe('#transmission/from-hash-to-document', () => {
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

  describe('With values', () => {
    it('transforms', () => {
      const values = {
        '#/stringTypeSubSchema': 'mock string',
        '#/numberTypeSubSchema': '1',
        '#/arrayTypeSubSchema/0': 'mock array string',
        '#/objectTypeSubSchema/one': 'mock object string',
        '#/objectTypeSubSchema/two': '2',
        '#/booleanTypeSubSchema': 'true',
        '#/nullTypeSubSchema': 'null',
        '#/latitude': '84',
        '#/longitude': '-90'
      }

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
            min: 1,
            max: 10
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
          }
        }
      }

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
        longitude: -90
      }

      return expect(transform(values, schema))
        .to.eql(document)
    })

    it('transforms `string` type schemas', () => {
      const values = {
        '#/': 'mock string'
      }

      const schema = { type: 'string' }

      const document = 'mock string'

      return expect(transform(values, schema))
        .to.eql(document)
    })

    it('transforms `number` type schemas', () => {
      const values = {
        '#/': '1'
      }

      const schema = { type: 'number' }

      const document = 1

      return expect(transform(values, schema))
        .to.eql(document)
    })

    describe('Transforming `array` type schemas', () => {
      describe('Transforming `array` type schemas (`items` is an array of `string` type)', () => {
        it('transforms `array` type schemas with `enum` (`items` is an object of `string` type)', () => {
          const values = {
            '#/0': '0',
            '#/1': '1',
            '#/2': '2'
          }

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

          return expect(transform(values, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas with `anyOf` (`items` is an object of `string` type)', () => {
          const values = {
            '#/0': '0',
            '#/1': '1',
            '#/2': '2'
          }

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

          return expect(transform(values, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas with `oneOf` (`items` is an array of `string` type)', () => {
          const values = {
            '#/0': '0',
            '#/1': '1',
            '#/2': '2'
          }

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

          return expect(transform(values, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas with `allOf` (`items` is an array of `string` type)', () => {
          const values = {
            '#/0': 'mock array type index string (1)',
            '#/1': 'mock array type index string (2)',
            '#/2': 'mock array type index string (3)'
          }

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

          return expect(transform(values, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an array of `string` type)', () => {
          const values = {
            '#/0': 'mock array type index string (1)',
            '#/1': 'mock array type index string (2)',
            '#/2': 'mock array type index string (3)'
          }

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

          return expect(transform(values, schema))
            .to.eql(document)
        })
      })

      it('transforms `array` type schemas (`items` is an array of `number` type)', () => {
        const values = {
          '#/0': '1'
        }

        const schema = {
          type: 'array',
          items: [
            {
              type: 'number'
            }
          ]
        }

        const document = [1]

        return expect(transform(values, schema))
          .to.eql(document)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type)', () => {
        const values = {}

        const schema = {
          type: 'array',
          items: [
            {
              type: 'array'
            }
          ]
        }

        const document = []

        return expect(transform(values, schema))
          .to.eql(document)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an array)', () => {
        const values = {
          '#/0/0': 'mock array type index string type',
          '#/0/1': '1'
        }

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

        return expect(transform(values, schema))
          .to.eql(document)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an object)', () => {
        const values = {
          '#/0/0': 'mock array type index string type (0)',
          '#/0/1': 'mock array type index string type (1)'
        }

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

        return expect(transform(values, schema))
          .to.eql(document)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an object of `array` type and `items` is an object of `string` type)', () => {
        const values = {
          '#/0/0': '0',
          '#/0/1': '1',
          '#/0/2': '2'
        }

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

        expect(transform(values, schema))
          .to.eql(document)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an object of `array` type and `items` is an object of `number` type)', () => {
        const values = {
          '#/0/0': '0',
          '#/0/1': '1',
          '#/0/2': '2'
        }

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

        expect(transform(values, schema))
          .to.eql(document)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an object of `array` type and `items` is an object of `boolean` type)', () => {
        const values = {
          '#/0/0': '0',
          '#/0/1': '1',
          '#/0/2': '0'
        }

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

        expect(transform(values, schema))
          .to.eql(document)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type and `items` is an object of `array` type and `items` is an object of `null` type)', () => {
        const values = {
          '#/0/0': '0',
          '#/0/1': '0',
          '#/0/2': '0'
        }

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

        expect(transform(values, schema))
          .to.eql(document)
      })

      it('transforms `array` type schemas (`items` is an array of `object` type)', () => {
        const values = {
          '#/0/one': 'mock array type index object type key string (one)',
          '#/0/two': '1'
        }

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
          one: 'mock array type index object type key string (one)',
          two: 1
        }]

        return expect(transform(values, schema))
          .to.eql(document)
      })

      it('transforms `array` type schemas (`items` is an array of `boolean` type)', () => {
        const values = {
          '#/0': 'true'
        }

        const schema = {
          type: 'array',
          items: [
            {
              type: 'boolean'
            }
          ]
        }

        const document = [true]

        return expect(transform(values, schema))
          .to.eql(document)
      })

      it('transforms `array` type schemas (`items` is an array of `null` type)', () => {
        const values = {
          '#/0': 'null'
        }

        const schema = {
          type: 'array',
          items: [
            {
              type: 'null'
            }
          ]
        }

        const document = [null]

        return expect(transform(values, schema))
          .to.eql(document)
      })

      describe('Transforming `array` type schemas (`items` is an object of `string` type)', () => {
        it('transforms `array` type schemas with `enum` (`items` is an object of `string` type)', () => {
          const values = {
            '#/0': '0',
            '#/1': '1',
            '#/2': '2'
          }

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

          return expect(transform(values, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas with `anyOf` (`items` is an object of `string` type)', () => {
          const values = {
            '#/0': '0',
            '#/1': '1',
            '#/2': '2'
          }

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

          return expect(transform(values, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas with `oneOf` (`items` is an object of `string` type)', () => {
          const values = {
            '#/0': '0',
            '#/1': '1',
            '#/2': '2'
          }

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

          return expect(transform(values, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas with `allOf` (`items` is an object of `string` type)', () => {
          const values = {
            '#/0': 'mock array type index string'
          }

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

          return expect(transform(values, schema))
            .to.eql(document)
        })

        it('transforms `array` type schemas without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an object of `string` type)', () => {
          const values = {
            '#/0': 'mock array type index string'
          }

          const schema = {
            type: 'array',
            items: {
              type: 'string'
            }
          }

          const document = [
            'mock array type index string'
          ]

          return expect(transform(values, schema))
            .to.eql(document)
        })
      })

      it('transforms `array` type schemas (`items` is an object of `number` type)', () => {
        const values = {
          '#/0': '1'
        }

        const schema = {
          type: 'array',
          items: {
            type: 'number'
          }
        }

        const document = [1]

        return expect(transform(values, schema))
          .to.eql(document)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type)', () => {
        const values = {
          '#/0': []
        }

        const schema = {
          type: 'array',
          items: {
            type: 'array'
          }
        }

        const document = [[]]

        return expect(transform(values, schema))
          .to.eql(document)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an array)', () => {
        const values = {
          '#/0/0': 'mock array type index string type',
          '#/0/1': '1'
        }

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

        return expect(transform(values, schema))
          .to.eql(document)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object)', () => {
        const values = {
          '#/0': ['mock array type index string type (0)', 'mock array type index string type (1)']
        }

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

        return expect(transform(values, schema))
          .to.eql(document)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object of `array` type and `items` is an object of `string` type)', () => {
        const values = {
          '#/0': ['0', '1', '2']
        }

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

        expect(transform(values, schema))
          .to.eql(document)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object of `array` type and `items` is an object of `number` type)', () => {
        const values = {
          '#/0': ['0', '1', '2']
        }

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

        expect(transform(values, schema))
          .to.eql(document)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object of `array` type and `items` is an object of `boolean` type)', () => {
        const values = {
          '#/0': ['0', '1', '0']
        }

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

        expect(transform(values, schema))
          .to.eql(document)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type and `items` is an object of `array` type and `items` is an object of `null` type)', () => {
        const values = {
          '#/0': ['0', '0', '0']
        }

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

        expect(transform(values, schema))
          .to.eql(document)
      })

      it('transforms `array` type schemas (`items` is an object of `object` type)', () => {
        const values = {
          '#/0/one': 'mock array type index object type key string (one)',
          '#/0/two': '1'
        }

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
          one: 'mock array type index object type key string (one)',
          two: 1
        }]

        return expect(transform(values, schema))
          .to.eql(document)
      })

      it('transforms `array` type schemas (`items` is an object of `boolean` type)', () => {
        const values = {
          '#/0': 'true'
        }

        const schema = {
          type: 'array',
          items: {
            type: 'boolean'
          }
        }

        const document = [true]

        return expect(transform(values, schema))
          .to.eql(document)
      })

      it('transforms `array` type schemas (`items` is an object of `null` type)', () => {
        const values = {
          '#/0': 'null'
        }

        const schema = {
          type: 'array',
          items: {
            type: 'null'
          }
        }

        const document = [null]

        return expect(transform(values, schema))
          .to.eql(document)
      })
    })

    it('transforms `object` type schemas', () => {
      const values = {
        '#/one': 'mock object type key string (one)',
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
        one: 'mock object type key string (one)',
        two: 1
      }

      return expect(transform(values, schema))
        .to.eql(document)
    })

    it('transforms `boolean` type schemas', () => {
      const values = {
        '#/': 'true'
      }

      const schema = { type: 'boolean' }

      const document = true

      return expect(transform(values, schema))
        .to.eql(document)
    })

    it('transforms `null` type schemas', () => {
      const values = {
        '#/': 'null'
      }

      const schema = { type: 'null' }

      const document = null

      return expect(transform(values, schema))
        .to.eql(document)
    })
  })

  describe('Without values', () => {
    it('transforms', () => {
      const values = {}

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
            min: 1,
            max: 10
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
          }
        }
      }

      const document = {
        stringTypeSubSchema: undefined,
        numberTypeSubSchema: undefined,
        arrayTypeSubSchema: [],
        objectTypeSubSchema: {
          one: undefined,
          two: undefined
        },
        booleanTypeSubSchema: undefined,
        nullTypeSubSchema: undefined,
        latitude: undefined,
        longitude: undefined
      }

      return expect(transform(values, schema))
        .to.eql(document)
    })

    it('transforms `string` type schemas', () => {
      const values = {}

      const schema = { type: 'string' }

      const document = undefined

      return expect(transform(values, schema))
        .to.eql(document)
    })

    it('transforms `number` type schemas', () => {
      const values = {}

      const schema = { type: 'number' }

      const document = undefined

      return expect(transform(values, schema))
        .to.eql(document)
    })

    describe('Transforming `array` type schemas', () => {
      it('transforms `array` type schemas (`items` is an array of `string` type)', () => {
        const values = {}

        const schema = {
          type: 'array',
          items: [
            {
              type: 'string'
            }
          ]
        }

        const document = []

        return expect(transform(values, schema))
          .to.eql(document)
      })

      it('transforms `array` type schemas (`items` is an array of `number` type)', () => {
        const values = {}

        const schema = {
          type: 'array',
          items: [
            {
              type: 'number'
            }
          ]
        }

        const document = []

        return expect(transform(values, schema))
          .to.eql(document)
      })

      it('transforms `array` type schemas (`items` is an array of `array` type)', () => {
        const values = {}

        const schema = {
          type: 'array',
          items: [
            {
              type: 'array'
            }
          ]
        }

        const document = []

        return expect(transform(values, schema))
          .to.eql(document)
      })

      it('transforms `array` type schemas (`items` is an array and `items` is an array)', () => {
        const values = {}

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

        const document = []

        return expect(transform(values, schema))
          .to.eql(document)
      })

      it('transforms `array` type schemas (`items` is an array and `items` is an object)', () => {
        const values = {}

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

        const document = []

        return expect(transform(values, schema))
          .to.eql(document)
      })

      it('transforms `array` type schemas (`items` is an array of `object` type)', () => {
        const values = {}

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

        const document = []

        return expect(transform(values, schema))
          .to.eql(document)
      })

      it('transforms `array` type schemas (`items` is an array of `boolean` type)', () => {
        const values = {}

        const schema = {
          type: 'array',
          items: [
            {
              type: 'boolean'
            }
          ]
        }

        const document = []

        return expect(transform(values, schema))
          .to.eql(document)
      })

      it('transforms `array` type schemas (`items` is an array of `null` type)', () => {
        const values = {}

        const schema = {
          type: 'array',
          items: [
            {
              type: 'null'
            }
          ]
        }

        const document = []

        return expect(transform(values, schema))
          .to.eql(document)
      })

      it('transforms `array` type schemas (`items` is an object of `string` type)', () => {
        const values = {}

        const schema = {
          type: 'array',
          items: {
            type: 'string'
          }
        }

        const document = []

        return expect(transform(values, schema))
          .to.eql(document)
      })

      it('transforms `array` type schemas (`items` is an object of `number` type)', () => {
        const values = {}

        const schema = {
          type: 'array',
          items: {
            type: 'number'
          }
        }

        const document = []

        return expect(transform(values, schema))
          .to.eql(document)
      })

      it('transforms `array` type schemas (`items` is an object of `array` type)', () => {
        const values = {}

        const schema = {
          type: 'array',
          items: {
            type: 'array'
          }
        }

        const document = []

        return expect(transform(values, schema))
          .to.eql(document)
      })

      it('transforms `array` type schemas (`items` is an object and `items` is an array)', () => {
        const values = {}

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

        const document = []

        return expect(transform(values, schema))
          .to.eql(document)
      })

      it('transforms `array` type schemas (`items` is an object and `items` is an object)', () => {
        const values = {}

        const schema = {
          type: 'array',
          items: {
            type: 'array',
            items: {
              type: 'string'
            }
          }
        }

        const document = []

        return expect(transform(values, schema))
          .to.eql(document)
      })

      it('transforms `array` type schemas (`items` is an object of `object` type)', () => {
        const values = {}

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

        const document = []

        return expect(transform(values, schema))
          .to.eql(document)
      })

      it('transforms `array` type schemas (`items` is an object of `boolean` type)', () => {
        const values = {}

        const schema = {
          type: 'array',
          items: {
            type: 'boolean'
          }
        }

        const document = []

        return expect(transform(values, schema))
          .to.eql(document)
      })

      it('transforms `array` type schemas (`items` is an object of `null` type)', () => {
        const values = {}

        const schema = {
          type: 'array',
          items: {
            type: 'null'
          }
        }

        const document = []

        return expect(transform(values, schema))
          .to.eql(document)
      })
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

      return expect(transform(values, schema))
        .to.eql(document)
    })

    it('transforms `boolean` type schemas', () => {
      const values = {}

      const schema = { type: 'boolean' }

      const document = undefined

      return expect(transform(values, schema))
        .to.eql(document)
    })

    it('transforms `null` type schemas', () => {
      const values = {}

      const schema = { type: 'null' }

      const document = undefined

      return expect(transform(values, schema))
        .to.eql(document)
    })
  })
})
