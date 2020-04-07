import debug from 'debug'

import { expect } from 'chai'

import transform from 'shinkansen-transmission/transmission/from-document-to-hash'

debug.disable()

describe('shinkansen-transmission/transmission/from-document-to-hash', () => {
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

    return expect(transform(document, schema))
      .to.eql({
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
      })
  })

  describe('Transforming `number` type schemas', () => {
    describe('With `enum`', () => {
      it('transforms `number` type schemas', () => {
        const document = 3

        const schema = { type: 'number', enum: [1, 2, 3] }

        return expect(transform(document, schema))
          .to.eql({
            '#/': '2'
          })
      })
    })

    describe('Without `enum`', () => {
      it('transforms `number` type schemas', () => {
        const document = 1

        const schema = { type: 'number' }

        return expect(transform(document, schema))
          .to.eql({
            '#/': '1'
          })
      })
    })
  })

  describe('Transforming `string` type schemas', () => {
    describe('With `enum`', () => {
      it('transforms `string` type schemas', () => {
        const document = 'mock string (2)'

        const schema = { type: 'string', enum: ['mock string (1)', 'mock string (2)'] }

        return expect(transform(document, schema))
          .to.eql({
            '#/': '1'
          })
      })
    })

    describe('Without `enum`', () => {
      it('transforms `string` type schemas', () => {
        const document = 'mock string'

        const schema = { type: 'string' }

        return expect(transform(document, schema))
          .to.eql({
            '#/': 'mock string'
          })
      })
    })
  })

  describe('Transforming `array` type schemas', () => {
    describe('With `enum`', () => {
      it('transforms `array` type schemas (`items` is an array of `number` type)', () => {
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

        return expect(transform(document, schema))
          .to.eql({
            '#/0': '2'
          })
      })

      it('transforms `array` type schemas (`items` is an array of `string` type)', () => {
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

        return expect(transform(document, schema))
          .to.eql({
            '#/0': '1'
          })
      })

      it('transforms `array` type schemas (`items` is an array)', () => {
        const document = ['mock array type index string type (3)', 3]

        const schema = {
          type: 'array',
          items: [
            {
              type: 'string',
              enum: [
                'mock array type index string type (1)',
                'mock array type index string type (2)',
                'mock array type index string type (3)'
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

        return expect(transform(document, schema))
          .to.eql({
            '#/0': '2',
            '#/1': '2'
          })
      })

      it('transforms `array` type schemas (`items` is an array and `items` is an array)', () => {
        const document = [['mock array type index string type (3)', 3]]

        const schema = {
          type: 'array',
          items: [
            {
              type: 'array',
              items: [
                {
                  type: 'string',
                  enum: [
                    'mock array type index string type (1)',
                    'mock array type index string type (2)',
                    'mock array type index string type (3)'
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
          ]
        }

        return expect(transform(document, schema))
          .to.eql({
            '#/0/0': '2',
            '#/0/1': '2'
          })
      })

      it('transforms `array` type schemas (`items` is an array of `object` type)', () => {
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

        return expect(transform(document, schema))
          .to.eql({
            '#/0/one': '0',
            '#/0/two': '1'
          })
      })

      it('transforms `array` type schemas (`items` is an array of `boolean` type)', () => {
        const document = [false]

        const schema = {
          type: 'array',
          items: [
            {
              type: 'boolean',
              enum: [true, false]
            }
          ]
        }

        return expect(transform(document, schema))
          .to.eql({
            '#/0': '1'
          })
      })

      it('transforms `array` type schemas (`items` is an array of `null` type)', () => {
        const document = [null]

        const schema = {
          type: 'array',
          items: [
            {
              type: 'null',
              enum: [null]
            }
          ]
        }

        return expect(transform(document, schema))
          .to.eql({
            '#/0': '0'
          })
      })
    })

    describe('Without `enum`', () => {
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

        return expect(transform(document, schema))
          .to.eql({
            '#/0': '1'
          })
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

        return expect(transform(document, schema))
          .to.eql({
            '#/0': 'mock array type index string'
          })
      })

      it('transforms `array` type schemas (`items` is an array)', () => {
        const document = [['mock array type index string type', 1]]

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

        return expect(transform(document, schema))
          .to.eql({
            '#/0/0': 'mock array type index string type',
            '#/0/1': '1'
          })
      })

      it('transforms `array` type schemas (`items` is an array and `items` is an array)', () => {
        const document = [['mock array type index string type', 1]]

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

        return expect(transform(document, schema))
          .to.eql({
            '#/0/0': 'mock array type index string type',
            '#/0/1': '1'
          })
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

        return expect(transform(document, schema))
          .to.eql({
            '#/0/one': 'mock array type index object type key string',
            '#/0/two': '1'
          })
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

        return expect(transform(document, schema))
          .to.eql({
            '#/0': 'true'
          })
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

        return expect(transform(document, schema))
          .to.eql({
            '#/0': 'null'
          })
      })
    })
  })

  describe('Transforming `object` type schemas', () => {
    describe('With `enum`', () => {
      it('transforms `object` type schemas', () => {
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

        return expect(transform(document, schema))
          .to.eql({
            '#/one': '0',
            '#/two': '1'
          })
      })
    })

    describe('Without `enum`', () => {
      it('transforms `object` type schemas', () => {
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

        return expect(transform(document, schema))
          .to.eql({
            '#/one': 'mock object type key string (1)',
            '#/two': 'mock object type key string (2)'
          })
      })
    })
  })

  describe('Transforming `boolean` type schemas', () => {
    describe('With `enum`', () => {
      it('transforms `boolean` type schemas', () => {
        const document = false

        const schema = { type: 'boolean', enum: [true, false] }

        return expect(transform(document, schema))
          .to.eql({
            '#/': '1'
          })
      })
    })

    describe('Without `enum`', () => {
      it('transforms `boolean` type schemas', () => {
        const document = true

        const schema = { type: 'boolean' }

        return expect(transform(document, schema))
          .to.eql({
            '#/': 'true'
          })
      })
    })
  })

  describe('Transforming `null` type schemas', () => {
    describe('With `enum`', () => {
      it('transforms `null` type schemas', () => {
        const document = null

        const schema = { type: 'null', enum: [null] }

        return expect(transform(document, schema))
          .to.eql({
            '#/': '0'
          })
      })
    })

    describe('Without `enum`', () => {
      it('transforms `null` type schemas', () => {
        const document = null

        const schema = { type: 'null' }

        return expect(transform(document, schema))
          .to.eql({
            '#/': 'null'
          })
      })
    })
  })
})
