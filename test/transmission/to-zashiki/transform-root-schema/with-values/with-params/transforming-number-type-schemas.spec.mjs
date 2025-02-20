/**
 *  @typedef {TransmissionTypes.SchemaType} SchemaType
 */

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
    describe('With params', () => {
      describe('Transforming `number` type schemas', () => {
        it('transforms `number` type schemas with `enum`', () => {
          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'number',
            enum: [
              1,
              2,
              3
            ]
          }

          const values = {
            '#/': '2'
          }

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'number',
                schema,
                uri: '#/',
                items: [
                  1,
                  2,
                  3
                ],
                selectedItems: [2]
              },
              elements: {
                enum: {
                  id: '#/',
                  items: [
                    1,
                    2,
                    3
                  ],
                  selectedItems: [2]
                }
              }
            })
        })

        it('transforms `number` type schemas with `anyOf`', () => {
          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'number',
            anyOf: [
              { const: 1 },
              { const: 2 },
              { const: 3 }
            ]
          }

          const values = {
            '#/': '2'
          }

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'number',
                schema,
                uri: '#/',
                items: [
                  {
                    meta: {
                      type: 'number',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        const: 1
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      value: '1'
                    },
                    elements: {
                      field: {
                        id: '#/0',
                        value: '1'
                      }
                    }
                  },
                  {
                    meta: {
                      type: 'number',
                      item: 1,
                      rootSchema: schema,
                      schema: {
                        const: 2
                      },
                      parentUri: '#/',
                      uri: '#/1',
                      value: '2'
                    },
                    elements: {
                      field: {
                        id: '#/1',
                        value: '2'
                      }
                    }
                  },
                  {
                    meta: {
                      type: 'number',
                      item: 2,
                      rootSchema: schema,
                      schema: {
                        const: 3
                      },
                      parentUri: '#/',
                      uri: '#/2',
                      value: '3'
                    },
                    elements: {
                      field: {
                        id: '#/2',
                        value: '3'
                      }
                    }
                  }
                ],
                selectedItems: [2]
              },
              elements: {
                anyOf: {
                  id: '#/',
                  items: [
                    {
                      meta: {
                        type: 'number',
                        item: 0,
                        rootSchema: schema,
                        schema: {
                          const: 1
                        },
                        parentUri: '#/',
                        uri: '#/0',
                        value: '1'
                      },
                      elements: {
                        field: {
                          id: '#/0',
                          value: '1'
                        }
                      }
                    },
                    {
                      meta: {
                        type: 'number',
                        item: 1,
                        rootSchema: schema,
                        schema: {
                          const: 2
                        },
                        parentUri: '#/',
                        uri: '#/1',
                        value: '2'
                      },
                      elements: {
                        field: {
                          id: '#/1',
                          value: '2'
                        }
                      }
                    },
                    {
                      meta: {
                        type: 'number',
                        item: 2,
                        rootSchema: schema,
                        schema: {
                          const: 3
                        },
                        parentUri: '#/',
                        uri: '#/2',
                        value: '3'
                      },
                      elements: {
                        field: {
                          id: '#/2',
                          value: '3'
                        }
                      }
                    }
                  ],
                  selectedItems: [2]
                }
              }
            })
        })

        it('transforms `number` type schemas with `oneOf`', () => {
          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'number',
            oneOf: [
              { const: 1 },
              { const: 2 },
              { const: 3 }
            ]
          }

          const values = {
            '#/': '2'
          }

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'number',
                schema,
                uri: '#/',
                items: [
                  {
                    meta: {
                      type: 'number',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        const: 1
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      value: '1'
                    },
                    elements: {
                      field: {
                        id: '#/0',
                        value: '1'
                      }
                    }
                  },
                  {
                    meta: {
                      type: 'number',
                      item: 1,
                      rootSchema: schema,
                      schema: {
                        const: 2
                      },
                      parentUri: '#/',
                      uri: '#/1',
                      value: '2'
                    },
                    elements: {
                      field: {
                        id: '#/1',
                        value: '2'
                      }
                    }
                  },
                  {
                    meta: {
                      type: 'number',
                      item: 2,
                      rootSchema: schema,
                      schema: {
                        const: 3
                      },
                      parentUri: '#/',
                      uri: '#/2',
                      value: '3'
                    },
                    elements: {
                      field: {
                        id: '#/2',
                        value: '3'
                      }
                    }
                  }
                ],
                selectedItems: [2]
              },
              elements: {
                oneOf: {
                  id: '#/',
                  items: [
                    {
                      meta: {
                        type: 'number',
                        item: 0,
                        rootSchema: schema,
                        schema: {
                          const: 1
                        },
                        parentUri: '#/',
                        uri: '#/0',
                        value: '1'
                      },
                      elements: {
                        field: {
                          id: '#/0',
                          value: '1'
                        }
                      }
                    },
                    {
                      meta: {
                        type: 'number',
                        item: 1,
                        rootSchema: schema,
                        schema: {
                          const: 2
                        },
                        parentUri: '#/',
                        uri: '#/1',
                        value: '2'
                      },
                      elements: {
                        field: {
                          id: '#/1',
                          value: '2'
                        }
                      }
                    },
                    {
                      meta: {
                        type: 'number',
                        item: 2,
                        rootSchema: schema,
                        schema: {
                          const: 3
                        },
                        parentUri: '#/',
                        uri: '#/2',
                        value: '3'
                      },
                      elements: {
                        field: {
                          id: '#/2',
                          value: '3'
                        }
                      }
                    }
                  ],
                  selectedItems: [2]
                }
              }
            })
        })

        it('transforms `number` type schemas with `allOf`', () => {
          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'number',
            allOf: [
              { minimum: 1 },
              { const: 2 },
              { maximum: 3 }
            ]
          }

          const values = {
            '#/': '1'
          }

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'number',
                schema,
                min: 1,
                max: 3,
                uri: '#/',
                value: '1'
              },
              elements: {
                field: {
                  id: '#/',
                  min: 1,
                  max: 3,
                  value: '1'
                }
              }
            })
        })

        it('transforms `number` type schemas', () => {
          /**
           *  @type {SchemaType}
           */
          const schema = { type: 'number' }

          const values = {
            '#/': '1'
          }

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'number',
                schema,
                uri: '#/',
                value: '1'
              },
              elements: {
                field: {
                  id: '#/',
                  value: '1'
                }
              }
            })
        })
      })
    })
  })
})
