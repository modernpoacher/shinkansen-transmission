import debug from 'debug'

import { expect } from 'chai'

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

    const values = {
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
      .to.eql(values)
  })

  describe('Transforming `string` type schemas', () => {
    it('transforms `string` type schemas with `enum`', () => {
      const document = 'mock string (2)'

      const schema = { type: 'string', enum: ['mock string (1)', 'mock string (2)'] }

      const values = {
        '#/': '1'
      }

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `string` type schemas without `enum`', () => {
      const document = 'mock string'

      const schema = { type: 'string' }

      const values = {
        '#/': 'mock string'
      }

      return expect(transform(document, schema))
        .to.eql(values)
    })
  })

  describe('Transforming `number` type schemas', () => {
    it('transforms `number` type schemas with `enum`', () => {
      const document = 3

      const schema = { type: 'number', enum: [1, 2, 3] }

      const values = {
        '#/': '2'
      }

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `number` type schemas without `enum`', () => {
      const document = 1

      const schema = { type: 'number' }

      const values = {
        '#/': '1'
      }

      return expect(transform(document, schema))
        .to.eql(values)
    })
  })

  describe('Transforming `array` type schemas', () => {
    it('transforms `array` type schemas with `enum` (`items` is an array of `string` type)', () => {
      const document = ['mock array type index string (two)']

      const schema = {
        type: 'array',
        items: [
          {
            type: 'string',
            enum: [
              'mock array type index string (one)',
              'mock array type index string (two)'
            ]
          }
        ]
      }

      const values = {
        '#/0': '1'
      }

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas with `enum` (`items` is an array of `number` type)', () => {
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

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas with `enum` (`items` is an array of `array` type and `items` is an array of `string` type)', () => {
      const document = [['mock array type index string (two)']]

      const schema = {
        type: 'array',
        items: [
          {
            type: 'array',
            items: [
              {
                type: 'string',
                enum: [
                  'mock array type index string (one)',
                  'mock array type index string (two)'
                ]
              }
            ]
          }
        ]
      }

      const values = {
        '#/0/0': '1'
      }

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas with `enum` (`items` is an array of `array` type and `items` is an array of `number` type)', () => {
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

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas with `enum` (`items` is an array of `array` type and `items` is an array of `boolean` type)', () => {
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

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas with `enum` (`items` is an array of `array` type and `items` is an array of `null` type)', () => {
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

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas with `enum` (`items` is an array of `array` type and `items` is an object of `string` type)', () => {
      const document = [['mock array type index string (two)']]

      const schema = {
        type: 'array',
        items: [
          {
            type: 'array',
            items: {
              type: 'string',
              enum: [
                'mock array type index string (one)',
                'mock array type index string (two)'
              ]
            }
          }
        ]
      }

      const values = {
        '#/0': ['1']
      }

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas with `enum` (`items` is an array of `array` type and `items` is an object of `number` type)', () => {
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

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas with `enum` (`items` is an array of `array` type and `items` is an object of `boolean` type)', () => {
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

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas with `enum` (`items` is an array of `array` type and `items` is an object of `null` type)', () => {
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

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas with `enum` (`items` is an array of `array` type and `items` is an object of `array` type and `items` is an object of `string` type', () => {
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

      expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas with `enum` (`items` is an array of `array` type and `items` is an object of `array` type and `items` is an object of `number` type', () => {
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

      expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas with `enum` (`items` is an array of `array` type and `items` is an object of `array` type and `items` is an object of `boolean` type', () => {
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

      expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas with `enum` (`items` is an array of `array` type and `items` is an object of `array` type and `items` is an object of `boolean` type', () => {
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

      expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas with `enum` (`items` is an array of `object` type)', () => {
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

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas with `enum` (`items` is an array of `boolean` type)', () => {
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

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas with `enum` (`items` is an array of `null` type)', () => {
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

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas with `enum` (`items` is an array)', () => {
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

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas with `enum` (`items` is an object of `string` type)', () => {
      const document = ['mock array type index string (two)']

      const schema = {
        type: 'array',
        items: {
          type: 'string',
          enum: [
            'mock array type index string (one)',
            'mock array type index string (two)'
          ]
        }
      }

      const values = {
        '#/': ['1']
      }

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas with `enum` (`items` is an object of `number` type)', () => {
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

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas with `enum` (`items` is an object of `array` type and `items` is an array of `string` type)', () => {
      const document = [['mock array type index string (two)']]

      const schema = {
        type: 'array',
        items: {
          type: 'array',
          items: [
            {
              type: 'string',
              enum: [
                'mock array type index string (one)',
                'mock array type index string (two)'
              ]
            }
          ]
        }
      }

      const values = {
        '#/0/0': '1'
      }

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas with `enum` (`items` is an object of `array` type and `items` is an array of `number` type)', () => {
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

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas with `enum` (`items` is an object of `array` type and `items` is an array of `boolean` type)', () => {
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

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas with `enum` (`items` is an object of `array` type and `items` is an array of `null` type)', () => {
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

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas with `enum` (`items` is an object of `array` type and `items` is an object of `string` type)', () => {
      const document = [['mock array type index string (two)']]

      const schema = {
        type: 'array',
        items: {
          type: 'array',
          items: {
            type: 'string',
            enum: [
              'mock array type index string (one)',
              'mock array type index string (two)'
            ]
          }
        }
      }

      const values = {
        '#/0': ['1'] // #/0/0': '1'
      }

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas with `enum` (`items` is an object of `array` type and `items` is an object of `number` type)', () => {
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

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas with `enum` (`items` is an object of `array` type and `items` is an object of `boolean` type)', () => {
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

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas with `enum` (`items` is an object of `array` type and `items` is an object of `null` type)', () => {
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

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas with `enum` (`items` is an object of `array` type and `items` is an object of `array` type and `items` is an object of `string` type', () => {
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

      expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas with `enum` (`items` is an object of `array` type and `items` is an object of `array` type and `items` is an object of `number` type', () => {
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

      expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas with `enum` (`items` is an object of `array` type and `items` is an object of `array` type and `items` is an object of `boolean` type', () => {
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

      expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas with `enum` (`items` is an object of `array` type and `items` is an object of `array` type and `items` is an object of `boolean` type', () => {
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

      expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas with `enum` (`items` is an object of `object` type)', () => {
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

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas with `enum` (`items` is an object of `boolean` type)', () => {
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

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas with `enum` (`items` is an object of `null` type)', () => {
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

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas without `enum` (`items` is an array of `string` type)', () => {
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

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas without `enum` (`items` is an array of `number` type)', () => {
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

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas without `enum` (`items` is an array of `array` type and `items` is an array of `string` type)', () => {
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

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas without `enum` (`items` is an array of `array` type and `items` is an array of `number` type)', () => {
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

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas without `enum` (`items` is an array of `array` type and `items` is an array of `boolean` type)', () => {
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

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas without `enum` (`items` is an array of `array` type and `items` is an array of `null` type)', () => {
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

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas without `enum` (`items` is an array of `array` type and `items` is an object of `string` type)', () => {
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

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas without `enum` (`items` is an array of `array` type and `items` is an object of `number` type)', () => {
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

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas without `enum` (`items` is an array of `array` type and `items` is an object of `boolean` type)', () => {
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

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas without `enum` (`items` is an array of `array` type and `items` is an object of `null` type)', () => {
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

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas without `enum` (`items` is an array of `object` type)', () => {
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

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas without `enum` (`items` is an array of `boolean` type)', () => {
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

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas without `enum` (`items` is an array of `null` type)', () => {
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

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas without `enum` (`items` is an array)', () => {
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

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas without `enum` (`items` is an object of `string` type)', () => {
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

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas without `enum` (`items` is an object of `number` type)', () => {
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

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas without `enum` (`items` is an object of `array` type and `items` is an array of `string` type)', () => {
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

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas without `enum` (`items` is an object of `array` type and `items` is an array of `number` type)', () => {
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

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas without `enum` (`items` is an object of `array` type and `items` is an array of `boolean` type)', () => {
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

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas without `enum` (`items` is an object of `array` type and `items` is an array of `null` type)', () => {
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

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas without `enum` (`items` is an object of `array` type and `items` is an object of `string` type)', () => {
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

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas without `enum` (`items` is an object of `array` type and `items` is an object of `number` type)', () => {
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

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas without `enum` (`items` is an object of `array` type and `items` is an object of `boolean` type)', () => {
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

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas without `enum` (`items` is an object of `array` type and `items` is an object of `null` type)', () => {
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

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas without `enum` (`items` is an object of `object` type)', () => {
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

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas without `enum` (`items` is an object of `boolean` type)', () => {
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

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `array` type schemas without `enum` (`items` is an object of `null` type)', () => {
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

      return expect(transform(document, schema))
        .to.eql(values)
    })
  })

  describe('Transforming `object` type schemas', () => {
    it('transforms `object` type schemas with `enum`', () => {
      const document = {
        one: 'mock object type key string (1)',
        two: 'mock object type key string (2)'
      }

      const schema = {
        type: 'object',
        properties: {
          one: { type: 'string', enum: ['mock object type key string (1)', 'mock object type key string (2)'] },
          two: { type: 'string', enum: ['mock object type key string (1)', 'mock object type key string (2)'] }
        }
      }

      const values = {
        '#/one': '0',
        '#/two': '1'
      }

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `object` type schemas without `enum`', () => {
      const document = {
        one: 'mock object type key string (1)',
        two: 'mock object type key string (2)'
      }

      const schema = {
        type: 'object',
        properties: {
          one: { type: 'string' },
          two: { type: 'string' }
        }
      }

      const values = {
        '#/one': 'mock object type key string (1)',
        '#/two': 'mock object type key string (2)'
      }

      return expect(transform(document, schema))
        .to.eql(values)
    })
  })

  describe('Transforming `boolean` type schemas', () => {
    it('transforms `boolean` type schemas with `enum`', () => {
      const document = false

      const schema = { type: 'boolean', enum: [true, false] }

      const values = {
        '#/': '1'
      }

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `boolean` type schemas without `enum`', () => {
      const document = true

      const schema = { type: 'boolean' }

      const values = {
        '#/': 'true'
      }

      return expect(transform(document, schema))
        .to.eql(values)
    })
  })

  describe('Transforming `null` type schemas', () => {
    it('transforms `null` type schemas with `enum`', () => {
      const document = null

      const schema = { type: 'null', enum: [null] }

      const values = {
        '#/': '0'
      }

      return expect(transform(document, schema))
        .to.eql(values)
    })

    it('transforms `null` type schemas without `enum`', () => {
      const document = null

      const schema = { type: 'null' }

      const values = {
        '#/': 'null'
      }

      return expect(transform(document, schema))
        .to.eql(values)
    })
  })
})
