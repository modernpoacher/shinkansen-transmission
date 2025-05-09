/**
 *  @typedef {TransmissionTypes.SchemaType} SchemaType
 */

import {
  expect
} from 'chai'

import transform from '#transmission/transmission/to-zashiki/transform-root-schema'

describe('#transmission/transmission/to-zashiki/transform-root-schema', () => {
  /**
   *  Null
   */
  describe('Transforming `null` type schemas', () => {
    it('transforms `null` type schemas', () => {
      /**
       *  @type {SchemaType}
       */
      const schema = { type: 'null' }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'null',
            uri: '#/',
            schema
          },
          elements: {
            field: {
              id: '#/'
            }
          }
        })
    })

    it('transforms `null` type schemas with `enum`', () => {
      /**
       *  @type {SchemaType}
       */
      const schema = {
        type: 'null',
        enum: [
          null
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'null',
            uri: '#/',
            schema,
            items: [
              null
            ],
            selectedItems: []
          },
          elements: {
            enum: {
              id: '#/',
              items: [
                null
              ],
              selectedItems: []
            }
          }
        })
    })

    it('transforms `null` type schemas with `anyOf`', () => {
      /**
       *  @type {SchemaType}
       */
      const schema = {
        type: 'null',
        anyOf: [
          { const: null }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'null',
            uri: '#/',
            schema,
            items: [
              {
                meta: {
                  type: 'null',
                  item: 0,
                  parentUri: '#/',
                  uri: '#/0',
                  rootSchema: schema,
                  schema: {
                    const: null
                  },
                  value: 'null'
                },
                elements: {
                  field: {
                    id: '#/0',
                    value: 'null'
                  }
                }
              }
            ],
            selectedItems: []
          },
          elements: {
            anyOf: {
              id: '#/',
              items: [
                {
                  meta: {
                    type: 'null',
                    item: 0,
                    parentUri: '#/',
                    uri: '#/0',
                    rootSchema: schema,
                    schema: {
                      const: null
                    },
                    value: 'null'
                  },
                  elements: {
                    field: {
                      id: '#/0',
                      value: 'null'
                    }
                  }
                }
              ],
              selectedItems: []
            }
          }
        })
    })

    it('transforms `null` type schemas with `oneOf`', () => {
      /**
       *  @type {SchemaType}
       */
      const schema = {
        type: 'null',
        oneOf: [
          { const: null }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'null',
            uri: '#/',
            schema,
            items: [
              {
                meta: {
                  type: 'null',
                  item: 0,
                  rootSchema: schema,
                  schema: {
                    const: null
                  },
                  parentUri: '#/',
                  uri: '#/0',
                  value: 'null'
                },
                elements: {
                  field: {
                    id: '#/0',
                    value: 'null'
                  }
                }
              }
            ],
            selectedItems: []
          },
          elements: {
            oneOf: {
              id: '#/',
              items: [
                {
                  meta: {
                    type: 'null',
                    item: 0,
                    rootSchema: schema,
                    schema: {
                      const: null
                    },
                    parentUri: '#/',
                    uri: '#/0',
                    value: 'null'
                  },
                  elements: {
                    field: {
                      id: '#/0',
                      value: 'null'
                    }
                  }
                }
              ],
              selectedItems: []
            }
          }
        })
    })

    it('transforms `null` type schemas with `allOf`', () => {
      /**
       *  @type {SchemaType}
       */
      const schema = {
        type: 'null',
        allOf: [
          { const: null }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'null',
            uri: '#/',
            schema,
            value: 'null'
          },
          elements: {
            field: {
              id: '#/',
              value: 'null'
            }
          }
        })
    })

    it('transforms `null` type schemas', () => {
      /**
       *  @type {SchemaType}
       */
      const schema = {
        type: 'null',
        const: null
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'null',
            uri: '#/',
            schema,
            value: 'null'
          },
          elements: {
            field: {
              id: '#/',
              value: 'null'
            }
          }
        })
    })
  })
})
