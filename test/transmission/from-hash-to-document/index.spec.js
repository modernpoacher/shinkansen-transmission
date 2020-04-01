import { expect } from 'chai'

import transform from 'shinkansen-transmission/transmission/from-hash-to-document'

describe('shinkansen-transmission/transmission/from-hash-to-document', () => {
  it('is a function', () => {
    expect(transform)
      .to.be.a('function')
  })

  describe('With values', () => {
    it('transforms', () => {
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

      return expect(transform(schema, values))
        .to.eql({
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
        })
    })

    it('transforms `number` schemas', () => {
      const schema = { type: 'number' }

      const values = {
        '#/': '1'
      }

      return expect(transform(schema, values))
        .to.eql(1)
    })

    it('transforms `string` schemas', () => {
      const schema = { type: 'string' }

      const values = {
        '#/': 'mock string'
      }

      return expect(transform(schema, values))
        .to.eql('mock string')
    })

    describe('Transforming `array` schemas', () => {
      describe('With `items`', () => {
        it('transforms `array` schemas (`items` is type `number`)', () => {
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

          return expect(transform(schema, values))
            .to.eql([1])
        })

        it('transforms `array` schemas (`items` is type `string`)', () => {
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

          return expect(transform(schema, values))
            .to.eql(['mock array type index string'])
        })

        it('transforms `array` schemas (`items` is type `array`)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array'
              }
            ]
          }

          const values = {}

          return expect(transform(schema, values))
            .to.eql([])
        })

        it('transforms `array` schemas (`items` is type `array` with `items` is type `array`)', () => {
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

          const values = {
            '#/0/0': 'mock array type index string type',
            '#/0/1': '1'
          }

          return expect(transform(schema, values))
            .to.eql([['mock array type index string type', 1]])
        })

        it('transforms `array` schemas (`items` is type `array` with `items` is type `object`)', () => {
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
            '#/0/0': 'mock array type index string type (0)',
            '#/0/1': 'mock array type index string type (1)'
          }

          return expect(transform(schema, values))
            .to.eql([['mock array type index string type (0)', 'mock array type index string type (1)']])
        })

        it('transforms `array` schemas (`items` is type `object`)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'object'
              }
            ]
          }

          const values = {}

          return expect(transform(schema, values))
            .to.eql([])
        })

        it('transforms `array` schemas (`items` is type `object` with `properties`)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                one: { type: 'string' },
                two: { type: 'string' }
              }
            }
          }

          const values = {
            '#/0/one': 'mock array type index object type key string (one)',
            '#/0/two': 'mock array type index object type key string (two)'
          }

          return expect(transform(schema, values))
            .to.eql([{
              one: 'mock array type index object type key string (one)',
              two: 'mock array type index object type key string (two)'
            }])
        })

        it('transforms `array` schemas (`items` is type `boolean`)', () => {
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

          return expect(transform(schema, values))
            .to.eql([true])
        })

        it('transforms `array` schemas (`items` is type `null`)', () => {
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

          return expect(transform(schema, values))
            .to.eql([null])
        })
      })

      describe('Without `items`', () => {
        it('transforms `array` schemas', () => {
          const schema = { type: 'array' }

          const values = {}

          return expect(transform(schema, values))
            .to.eql([])
        })
      })
    })

    describe('Transforming `object` schemas', () => {
      describe('With `properties`', () => {
        it('transforms `object` schemas (with `properties`)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: { type: 'string' },
              two: { type: 'string' }
            }
          }

          const values = {
            '#/one': 'mock object type key string (one)',
            '#/two': 'mock object type key string (two)'
          }

          return expect(transform(schema, values))
            .to.eql({
              one: 'mock object type key string (one)',
              two: 'mock object type key string (two)'
            })
        })
      })

      describe('Without `properties`', () => {
        it('transforms `object` schemas', () => {
          const schema = { type: 'object' }

          const values = {}

          return expect(transform(schema, values))
            .to.eql({})
        })
      })
    })

    it('transforms `boolean` schemas', () => {
      const schema = { type: 'boolean' }

      const values = {
        '#/': 'true'
      }

      return expect(transform(schema, values))
        .to.eql(true)
    })

    it('transforms `null` schemas', () => {
      const schema = { type: 'null' }

      const values = {
        '#/': 'null'
      }

      return expect(transform(schema, values))
        .to.eql(null)
    })
  })

  describe('Without values', () => {
    it('transforms', () => {
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

      return expect(transform(schema))
        .to.eql({
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
        })
    })

    it('transforms `number` schemas', () => {
      const schema = { type: 'number' }

      return expect(transform(schema))
        .to.eql(undefined)
    })

    it('transforms `string` schemas', () => {
      const schema = { type: 'string' }

      return expect(transform(schema))
        .to.eql(undefined)
    })

    describe('Transforming `array` schemas', () => {
      describe('With `items`', () => {
        it('transforms `array` schemas (`items` is type `number`)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'number'
              }
            ]
          }

          return expect(transform(schema))
            .to.eql([])
        })

        it('transforms `array` schemas (`items` is type `string`)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'string'
              }
            ]
          }

          return expect(transform(schema))
            .to.eql([])
        })

        it('transforms `array` schemas (`items` is type `array`)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array'
              }
            ]
          }

          return expect(transform(schema))
            .to.eql([])
        })

        it('transforms `array` schemas (`items` is type `array` with `items` is type `array`)', () => {
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

          return expect(transform(schema))
            .to.eql([])
        })

        it('transforms `array` schemas (`items` is type `array` with `items` is type `object`)', () => {
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

          return expect(transform(schema))
            .to.eql([])
        })

        it('transforms `array` schemas (`items` is type `object`)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'object'
              }
            ]
          }

          return expect(transform(schema))
            .to.eql([])
        })

        it('transforms `array` schemas (`items` is type `object` with `properties`)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                one: { type: 'string' },
                two: { type: 'string' }
              }
            }
          }

          return expect(transform(schema))
            .to.eql([])
        })

        it('transforms `array` schemas (`items` is type `boolean`)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'boolean'
              }
            ]
          }

          return expect(transform(schema))
            .to.eql([])
        })

        it('transforms `array` schemas (`items` is type `null`)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'null'
              }
            ]
          }

          return expect(transform(schema))
            .to.eql([])
        })
      })

      describe('Without `items`', () => {
        it('transforms `array` schemas', () => {
          const schema = { type: 'array' }

          return expect(transform(schema))
            .to.eql([])
        })
      })
    })

    describe('Transforming `object` schemas', () => {
      describe('With `properties`', () => {
        it('transforms `object` schemas (with `properties`)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: { type: 'string' },
              two: { type: 'string' }
            }
          }

          return expect(transform(schema))
            .to.eql({
              one: undefined,
              two: undefined
            })
        })
      })

      describe('Without `properties`', () => {
        it('transforms `object` schemas', () => {
          const schema = { type: 'object' }

          return expect(transform(schema))
            .to.eql({})
        })
      })
    })

    it('transforms `boolean` schemas', () => {
      const schema = { type: 'boolean' }

      return expect(transform(schema))
        .to.eql(undefined)
    })

    it('transforms `null` schemas', () => {
      const schema = { type: 'null' }

      return expect(transform(schema))
        .to.eql(undefined)
    })
  })
})
