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
   *  Boolean
   */
  describe('Transforming `boolean` type schemas', () => {
    it('transforms `boolean` type', () => {
      const schema = { type: 'boolean' }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'boolean',
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

    it('transforms `boolean` type with `enum`', () => {
      const schema = {
        type: 'boolean',
        enum: [
          true,
          false
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'boolean',
            uri: '#/',
            rootSchema: {},
            schema,
            items: [
              true,
              false
            ],
            selectedItems: []
          },
          elements: {
            enum: {
              id: '#/',
              items: [
                true,
                false
              ],
              selectedItems: []
            }
          }
        })
    })

    it('transforms `boolean` type with `anyOf`', () => {
      const schema = {
        type: 'boolean',
        anyOf: [
          { const: true },
          { const: false }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'boolean',
            uri: '#/',
            rootSchema: {},
            schema,
            items: [
              {
                meta: {
                  type: 'boolean',
                  item: 0,
                  parentUri: '#/',
                  uri: '#/0',
                  rootSchema: {},
                  schema: {
                    const: true
                  },
                  value: 'true'
                },
                elements: {
                  field: {
                    id: '#/0',
                    value: 'true'
                  }
                }
              },
              {
                meta: {
                  type: 'boolean',
                  item: 1,
                  parentUri: '#/',
                  uri: '#/1',
                  rootSchema: {},
                  schema: {
                    const: false
                  },
                  value: 'false'
                },
                elements: {
                  field: {
                    id: '#/1',
                    value: 'false'
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
                    type: 'boolean',
                    item: 0,
                    parentUri: '#/',
                    uri: '#/0',
                    rootSchema: {},
                    schema: {
                      const: true
                    },
                    value: 'true'
                  },
                  elements: {
                    field: {
                      id: '#/0',
                      value: 'true'
                    }
                  }
                },
                {
                  meta: {
                    type: 'boolean',
                    item: 1,
                    parentUri: '#/',
                    uri: '#/1',
                    rootSchema: {},
                    schema: {
                      const: false
                    },
                    value: 'false'
                  },
                  elements: {
                    field: {
                      id: '#/1',
                      value: 'false'
                    }
                  }
                }
              ],
              selectedItems: []
            }
          }
        })
    })

    it('transforms `boolean` type with `oneOf`', () => {
      const schema = {
        type: 'boolean',
        oneOf: [
          { const: true },
          { const: false }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'boolean',
            uri: '#/',
            rootSchema: {},
            schema,
            items: [
              {
                meta: {
                  type: 'boolean',
                  item: 0,
                  parentUri: '#/',
                  uri: '#/0',
                  rootSchema: {},
                  schema: {
                    const: true
                  },
                  value: 'true'
                },
                elements: {
                  field: {
                    id: '#/0',
                    value: 'true'
                  }
                }
              },
              {
                meta: {
                  type: 'boolean',
                  item: 1,
                  parentUri: '#/',
                  uri: '#/1',
                  rootSchema: {},
                  schema: {
                    const: false
                  },
                  value: 'false'
                },
                elements: {
                  field: {
                    id: '#/1',
                    value: 'false'
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
                    type: 'boolean',
                    item: 0,
                    parentUri: '#/',
                    uri: '#/0',
                    rootSchema: {},
                    schema: {
                      const: true
                    },
                    value: 'true'
                  },
                  elements: {
                    field: {
                      id: '#/0',
                      value: 'true'
                    }
                  }
                },
                {
                  meta: {
                    type: 'boolean',
                    item: 1,
                    parentUri: '#/',
                    uri: '#/1',
                    rootSchema: {},
                    schema: {
                      const: false
                    },
                    value: 'false'
                  },
                  elements: {
                    field: {
                      id: '#/1',
                      value: 'false'
                    }
                  }
                }
              ],
              selectedItems: []
            }
          }
        })
    })

    it('transforms `boolean` type with `allOf`', () => {
      const schema = {
        type: 'boolean',
        allOf: [
          { const: true }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'boolean',
            uri: '#/',
            rootSchema: {},
            schema,
            value: 'true'
          },
          elements: {
            field: {
              id: '#/',
              value: 'true'
            }
          }
        })
    })

    it('transforms `boolean` type', () => {
      const schema = {
        type: 'boolean',
        const: true
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'boolean',
            uri: '#/',
            rootSchema: {},
            schema,
            value: 'true'
          },
          elements: {
            field: {
              id: '#/',
              value: 'true'
            }
          }
        })
    })
  })
})
