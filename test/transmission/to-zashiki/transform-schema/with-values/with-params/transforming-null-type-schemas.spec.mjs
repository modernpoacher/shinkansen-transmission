import debug from 'debug'

import { expect } from 'chai'

import transform from '#transmission/to-zashiki/transform-schema'

describe('#transmission/to-zashiki/transform-schema', () => {
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
      /*
       *  Null
       */
      describe('Transforming `null` type schemas', () => {
        it('transforms `null` type schemas with `enum`', () => {
          const schema = {
            type: 'null',
            enum: [
              null
            ]
          }

          const rootSchema = undefined

          const values = {
            '#/': '0'
          }

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, rootSchema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'null',
                rootSchema: {},
                schema,
                uri: '#/',
                items: [
                  null
                ],
                selectedItems: [0]
              },
              elements: {
                enum: {
                  id: '#/',
                  items: [
                    null
                  ],
                  selectedItems: [0]
                }
              }
            })
        })

        it('transforms `null` type schemas with `anyOf`', () => {
          const schema = {
            type: 'null',
            anyOf: [
              { const: null },
              { const: null },
              { const: null }
            ]
          }

          const rootSchema = undefined

          const values = {
            '#/': '2'
          }

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, rootSchema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'null',
                rootSchema: {},
                schema,
                uri: '#/',
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
                  },
                  {
                    meta: {
                      type: 'null',
                      item: 1,
                      rootSchema: {},
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
                      rootSchema: {},
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
                selectedItems: [2]
              },
              elements: {
                anyOf: {
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
                    },
                    {
                      meta: {
                        type: 'null',
                        item: 1,
                        rootSchema: {},
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
                        rootSchema: {},
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
                  selectedItems: [2]
                }
              }
            })
        })

        it('transforms `null` type schemas with `oneOf`', () => {
          const schema = {
            type: 'null',
            oneOf: [
              { const: null }
            ]
          }

          const rootSchema = undefined

          const values = {
            '#/': '2'
          }

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, rootSchema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'null',
                rootSchema: {},
                schema,
                uri: '#/',
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
                selectedItems: [2]
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
                  selectedItems: [2]
                }
              }
            })
        })

        it('transforms `null` type schemas with `allOf`', () => {
          const schema = {
            type: 'null',
            allOf: [
              { const: null }
            ]
          }

          const rootSchema = undefined

          const values = {
            '#/': 'null'
          }

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, rootSchema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'null',
                rootSchema: {},
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

        /*
         *  `parentUri`
         */
        it('transforms `null` type schemas without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
          const schema = { type: 'null' }

          const rootSchema = undefined

          const values = {
            '#/': 'null'
          }

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, rootSchema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'null',
                rootSchema: {},
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
      })
    })
  })
})
