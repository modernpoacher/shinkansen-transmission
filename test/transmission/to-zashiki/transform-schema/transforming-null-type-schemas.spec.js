import debug from 'debug'

import { expect } from 'chai'

import transform from 'shinkansen-transmission/transmission/to-zashiki/transform-schema'

describe('shinkansen-transmission/transmission/to-zashiki/transform-schema', () => {
  before(() => {
    const {
      env: {
        DEBUG
      }
    } = process

    if (DEBUG) debug.enable(DEBUG)
  })

  /*
   *  Null
   */
  describe('Transforming `null` type schemas', () => {
    it('transforms', () => {
      const schema = { type: 'null' }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'null',
            uri: '#/',
            rootSchema: {},
            schema
          },
          elements: {
            field: {
              id: '#/'
            }
          }
        })
    })

    it('transforms with `enum`', () => {
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
            rootSchema: {},
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

    it('transforms with `anyOf`', () => {
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
            rootSchema: {},
            schema,
            items: [
              {
                meta: {
                  type: 'null',
                  item: 0,
                  parentUri: '#/',
                  uri: '#/0',
                  rootSchema: {},
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
                    rootSchema: {},
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

    it('transforms with `oneOf`', () => {
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
            rootSchema: {},
            schema,
            items: [
              {
                meta: {
                  type: 'null',
                  item: 0,
                  rootSchema: {},
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
                    rootSchema: {},
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

    it('transforms with `allOf`', () => {
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
            rootSchema: {},
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

    it('transforms without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
      const schema = {
        type: 'null',
        const: null
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'null',
            uri: '#/',
            rootSchema: {},
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
