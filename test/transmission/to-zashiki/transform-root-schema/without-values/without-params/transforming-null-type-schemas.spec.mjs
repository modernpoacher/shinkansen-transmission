/**
 *  @typedef {TransmissionTypes.SchemaType} SchemaType
 */

import {
  expect
} from 'chai'

import transform from 'shinkansen-transmission/transmission/to-zashiki/transform-root-schema'

describe('shinkansen-transmission/transmission/to-zashiki/transform-root-schema', () => {
  describe('Without values', () => {
    describe('Without params', () => {
      describe('Transforming `null` type schemas', () => {
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'null',
                schema,
                uri: '#/',
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
              { const: null },
              { const: null },
              { const: null }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'null',
                schema,
                uri: '#/',
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
                  },
                  {
                    meta: {
                      type: 'null',
                      item: 1,
                      rootSchema: schema,
                      schema: {
                        const: null
                      },
                      parentUri: '#/',
                      uri: '#/1',
                      value: 'null'
                    },
                    elements: {
                      field: {
                        id: '#/1',
                        value: 'null'
                      }
                    }
                  },
                  {
                    meta: {
                      type: 'null',
                      item: 2,
                      rootSchema: schema,
                      schema: {
                        const: null
                      },
                      parentUri: '#/',
                      uri: '#/2',
                      value: 'null'
                    },
                    elements: {
                      field: {
                        id: '#/2',
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
                    },
                    {
                      meta: {
                        type: 'null',
                        item: 1,
                        rootSchema: schema,
                        schema: {
                          const: null
                        },
                        parentUri: '#/',
                        uri: '#/1',
                        value: 'null'
                      },
                      elements: {
                        field: {
                          id: '#/1',
                          value: 'null'
                        }
                      }
                    },
                    {
                      meta: {
                        type: 'null',
                        item: 2,
                        rootSchema: schema,
                        schema: {
                          const: null
                        },
                        parentUri: '#/',
                        uri: '#/2',
                        value: 'null'
                      },
                      elements: {
                        field: {
                          id: '#/2',
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'null',
                schema,
                uri: '#/',
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'null',
                schema,
                uri: '#/',
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
          const schema = { type: 'null' }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'null',
                schema,
                uri: '#/'
              },
              elements: {
                field: {
                  id: '#/'
                }
              }
            })
        })
      })
    })
  })
})
