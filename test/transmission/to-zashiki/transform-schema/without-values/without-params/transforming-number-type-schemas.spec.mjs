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

  describe('Without values', () => {
    describe('Without params', () => {
      /*
       *  Number
       */
      describe('Transforming `number` type schemas', () => {
        it('transforms `number` type schemas with `enum`', () => {
          const schema = {
            type: 'number',
            enum: [
              1,
              2,
              3
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'number',
                rootSchema: {},
                schema,
                uri: '#/',
                items: [
                  1,
                  2,
                  3
                ],
                selectedItems: []
              },
              elements: {
                enum: {
                  id: '#/',
                  items: [
                    1,
                    2,
                    3
                  ],
                  selectedItems: []
                }
              }
            })
        })

        it('transforms `number` type schemas with `anyOf`', () => {
          const schema = {
            type: 'number',
            anyOf: [
              { const: 1 },
              { const: 2 },
              { const: 3 }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'number',
                rootSchema: {},
                schema,
                uri: '#/',
                items: [
                  {
                    meta: {
                      type: 'number',
                      item: 0,
                      rootSchema: {},
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
                      rootSchema: {},
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
                      rootSchema: {},
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
                selectedItems: []
              },
              elements: {
                anyOf: {
                  id: '#/',
                  items: [
                    {
                      meta: {
                        type: 'number',
                        item: 0,
                        rootSchema: {},
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
                        rootSchema: {},
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
                        rootSchema: {},
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
                  selectedItems: []
                }
              }
            })
        })

        it('transforms `number` type schemas with `oneOf`', () => {
          const schema = {
            type: 'number',
            oneOf: [
              { const: 1 },
              { const: 2 },
              { const: 3 }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'number',
                rootSchema: {},
                schema,
                uri: '#/',
                items: [
                  {
                    meta: {
                      type: 'number',
                      item: 0,
                      rootSchema: {},
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
                      rootSchema: {},
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
                      rootSchema: {},
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
                selectedItems: []
              },
              elements: {
                oneOf: {
                  id: '#/',
                  items: [
                    {
                      meta: {
                        type: 'number',
                        item: 0,
                        rootSchema: {},
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
                        rootSchema: {},
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
                        rootSchema: {},
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
                  selectedItems: []
                }
              }
            })
        })

        it('transforms `number` type schemas with `allOf`', () => {
          const schema = {
            type: 'number',
            allOf: [
              { minimum: 1 },
              { const: 2 },
              { maximum: 3 }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'number',
                rootSchema: {},
                schema,
                min: 1,
                max: 3,
                uri: '#/',
                value: '2'
              },
              elements: {
                field: {
                  id: '#/',
                  min: 1,
                  max: 3,
                  value: '2'
                }
              }
            })
        })

        it('transforms `number` type schemas', () => {
          const schema = { type: 'number' }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'number',
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
