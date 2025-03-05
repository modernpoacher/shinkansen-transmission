/**
 *  @typedef {TransmissionTypes.SchemaType} SchemaType
 */

import {
  expect
} from 'chai'

import transform from '#transmission/transmission/to-zashiki/transform-schema'

describe('#transmission/transmission/to-zashiki/transform-schema', () => {
  describe('Without values', () => {
    describe('Without params', () => {
      /**
       *  Boolean
       */
      describe('Transforming `boolean` type schemas', () => {
        it('transforms `boolean` type schemas with `enum`', () => {
          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'boolean',
            enum: [
              true,
              false
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'boolean',
                rootSchema: {},
                schema,
                uri: '#/',
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

        it('transforms `boolean` type schemas with `anyOf`', () => {
          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'boolean',
            anyOf: [
              { const: true },
              { const: false }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'boolean',
                rootSchema: {},
                schema,
                uri: '#/',
                items: [
                  {
                    meta: {
                      type: 'boolean',
                      item: 0,
                      rootSchema: {},
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
                      rootSchema: {},
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
                        rootSchema: {},
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
                        rootSchema: {},
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
                  selectedItems: []
                }
              }
            })
        })

        it('transforms `boolean` type schemas with `oneOf`', () => {
          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'boolean',
            oneOf: [
              { const: true },
              { const: false }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'boolean',
                rootSchema: {},
                schema,
                uri: '#/',
                items: [
                  {
                    meta: {
                      type: 'boolean',
                      item: 0,
                      rootSchema: {},
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
                      rootSchema: {},
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
                        rootSchema: {},
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
                        rootSchema: {},
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
                  selectedItems: []
                }
              }
            })
        })

        it('transforms `boolean` type schemas with `allOf`', () => {
          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'boolean',
            allOf: [
              { const: true }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'boolean',
                rootSchema: {},
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
          /**
           *  @type {SchemaType}
           */
          const schema = { type: 'boolean' }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'boolean',
                rootSchema: {},
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
