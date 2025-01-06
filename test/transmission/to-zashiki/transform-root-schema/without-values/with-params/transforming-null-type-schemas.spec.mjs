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

  describe('Without values', () => {
    describe('With params', () => {
      describe('Transforming `null` type schemas', () => {
        it('transforms `null` type schemas with `enum`', () => {
          const schema = {
            type: 'null',
            enum: [
              null
            ]
          }

          const values = undefined

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
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
          const schema = {
            type: 'null',
            anyOf: [
              { const: null },
              { const: null },
              { const: null }
            ]
          }

          const values = undefined

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
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
          const schema = {
            type: 'null',
            oneOf: [
              { const: null }
            ]
          }

          const values = undefined

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
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
          const schema = {
            type: 'null',
            allOf: [
              { const: null }
            ]
          }

          const values = undefined

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
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
          const schema = { type: 'null' }

          const values = undefined

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
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
