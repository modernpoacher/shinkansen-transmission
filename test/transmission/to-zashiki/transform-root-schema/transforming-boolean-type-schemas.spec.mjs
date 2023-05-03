import debug from 'debug'

import { expect } from 'chai'

import transform from '#transmission/to-zashiki/transform-root-schema'

describe('#transmission/to-zashiki/transform-root-schema', () => {
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
    it('transforms', () => {
      const schema = { type: 'boolean' }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'boolean',
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

    it('transforms with `enum`', () => {
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

    it('transforms with `anyOf`', () => {
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
            schema,
            items: [
              {
                meta: {
                  type: 'boolean',
                  item: 0,
                  parentUri: '#/',
                  uri: '#/0',
                  rootSchema: schema,
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
                  rootSchema: schema,
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
                    rootSchema: schema,
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
                    rootSchema: schema,
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

    it('transforms with `oneOf`', () => {
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
            schema,
            items: [
              {
                meta: {
                  type: 'boolean',
                  item: 0,
                  parentUri: '#/',
                  uri: '#/0',
                  rootSchema: schema,
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
                  rootSchema: schema,
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
                    rootSchema: schema,
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
                    rootSchema: schema,
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

    it('transforms with `allOf`', () => {
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

    it('transforms without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
      const schema = {
        type: 'boolean',
        const: true
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'boolean',
            uri: '#/',
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
