import debug from 'debug'

import {
  expect
} from 'chai'

import transform from 'shinkansen-transmission/transmission/to-zashiki/transform-root-schema'

describe('shinkansen-transmission/transmission/to-zashiki/transform-root-schema', () => {
  before(() => {
    const {
      env: {
        DEBUG
      }
    } = process

    if (DEBUG) debug.enable(DEBUG)
  })

  describe('With values', () => {
    describe('Without params', () => {
      describe('Transforming `boolean` type schemas', () => {
        it('transforms `boolean` type schemas with `enum`', () => {
          const schema = {
            type: 'boolean',
            enum: [
              true,
              false
            ]
          }

          const values = {
            '#/': '1'
          }

          return expect(transform(schema, values))
            .to.eql({
              meta: {
                type: 'boolean',
                schema,
                uri: '#/',
                items: [
                  true,
                  false
                ],
                selectedItems: [1]
              },
              elements: {
                enum: {
                  id: '#/',
                  items: [
                    true,
                    false
                  ],
                  selectedItems: [1]
                }
              }
            })
        })

        it('transforms `boolean` type schemas with `anyOf`', () => {
          const schema = {
            type: 'boolean',
            anyOf: [
              { const: true },
              { const: false }
            ]
          }

          const values = {
            '#/': '1'
          }

          return expect(transform(schema, values))
            .to.eql({
              meta: {
                type: 'boolean',
                schema,
                uri: '#/',
                items: [
                  {
                    meta: {
                      type: 'boolean',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        const: true
                      },
                      parentUri: '#/',
                      uri: '#/0',
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
                      rootSchema: schema,
                      schema: {
                        const: false
                      },
                      parentUri: '#/',
                      uri: '#/1',
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
                selectedItems: [1]
              },
              elements: {
                anyOf: {
                  id: '#/',
                  items: [
                    {
                      meta: {
                        type: 'boolean',
                        item: 0,
                        rootSchema: schema,
                        schema: {
                          const: true
                        },
                        parentUri: '#/',
                        uri: '#/0',
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
                        rootSchema: schema,
                        schema: {
                          const: false
                        },
                        parentUri: '#/',
                        uri: '#/1',
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
                  selectedItems: [1]
                }
              }
            })
        })

        it('transforms `boolean` type schemas with `oneOf`', () => {
          const schema = {
            type: 'boolean',
            oneOf: [
              { const: true },
              { const: false }
            ]
          }

          const values = {
            '#/': '1'
          }

          return expect(transform(schema, values))
            .to.eql({
              meta: {
                type: 'boolean',
                schema,
                uri: '#/',
                items: [
                  {
                    meta: {
                      type: 'boolean',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        const: true
                      },
                      parentUri: '#/',
                      uri: '#/0',
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
                      rootSchema: schema,
                      schema: {
                        const: false
                      },
                      parentUri: '#/',
                      uri: '#/1',
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
                selectedItems: [1]
              },
              elements: {
                oneOf: {
                  id: '#/',
                  items: [
                    {
                      meta: {
                        type: 'boolean',
                        item: 0,
                        rootSchema: schema,
                        schema: {
                          const: true
                        },
                        parentUri: '#/',
                        uri: '#/0',
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
                        rootSchema: schema,
                        schema: {
                          const: false
                        },
                        parentUri: '#/',
                        uri: '#/1',
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
                  selectedItems: [1]
                }
              }
            })
        })

        it('transforms `boolean` type schemas with `allOf`', () => {
          const schema = {
            type: 'boolean',
            allOf: [
              { const: true }
            ]
          }

          const values = {
            '#/': 'true'
          }

          return expect(transform(schema, values))
            .to.eql({
              meta: {
                type: 'boolean',
                schema,
                uri: '#/',
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

        it('transforms `boolean` type schemas', () => {
          const schema = { type: 'boolean' }

          const values = {
            '#/': 'true'
          }

          return expect(transform(schema, values))
            .to.eql({
              meta: {
                type: 'boolean',
                schema,
                uri: '#/',
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
  })
})
