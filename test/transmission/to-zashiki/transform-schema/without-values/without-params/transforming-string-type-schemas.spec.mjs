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

  describe('Without values', () => {
    describe('Without params', () => {
      /*
       *  String
       */
      describe('Transforming `string` type schemas', () => {
        it('transforms `string` type schemas with `enum`', () => {
          const schema = {
            type: 'string',
            enum: [
              'string (1)',
              'string (2)',
              'string (3)']
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'string',
                rootSchema: {},
                schema,
                uri: '#/',
                items: [
                  'string (1)',
                  'string (2)',
                  'string (3)'
                ],
                selectedItems: []
              },
              elements: {
                enum: {
                  id: '#/',
                  items: [
                    'string (1)',
                    'string (2)',
                    'string (3)'
                  ],
                  selectedItems: []
                }
              }
            })
        })

        it('transforms `string` type schemas with `anyOf`', () => {
          const schema = {
            type: 'string',
            anyOf: [
              { const: 'string (1)' },
              { const: 'string (2)' },
              { const: 'string (3)' }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'string',
                rootSchema: {},
                schema,
                uri: '#/',
                items: [
                  {
                    meta: {
                      type: 'string',
                      item: 0,
                      rootSchema: {},
                      schema: {
                        const: 'string (1)'
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      value: 'string (1)'
                    },
                    elements: {
                      field: {
                        id: '#/0',
                        value: 'string (1)'
                      }
                    }
                  },
                  {
                    meta: {
                      type: 'string',
                      item: 1,
                      rootSchema: {},
                      schema: {
                        const: 'string (2)'
                      },
                      parentUri: '#/',
                      uri: '#/1',
                      value: 'string (2)'
                    },
                    elements: {
                      field: {
                        id: '#/1',
                        value: 'string (2)'
                      }
                    }
                  },
                  {
                    meta: {
                      type: 'string',
                      item: 2,
                      rootSchema: {},
                      schema: {
                        const: 'string (3)'
                      },
                      parentUri: '#/',
                      uri: '#/2',
                      value: 'string (3)'
                    },
                    elements: {
                      field: {
                        id: '#/2',
                        value: 'string (3)'
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
                        type: 'string',
                        item: 0,
                        rootSchema: {},
                        schema: {
                          const: 'string (1)'
                        },
                        parentUri: '#/',
                        uri: '#/0',
                        value: 'string (1)'
                      },
                      elements: {
                        field: {
                          id: '#/0',
                          value: 'string (1)'
                        }
                      }
                    },
                    {
                      meta: {
                        type: 'string',
                        item: 1,
                        rootSchema: {},
                        schema: {
                          const: 'string (2)'
                        },
                        parentUri: '#/',
                        uri: '#/1',
                        value: 'string (2)'
                      },
                      elements: {
                        field: {
                          id: '#/1',
                          value: 'string (2)'
                        }
                      }
                    },
                    {
                      meta: {
                        type: 'string',
                        item: 2,
                        rootSchema: {},
                        schema: {
                          const: 'string (3)'
                        },
                        parentUri: '#/',
                        uri: '#/2',
                        value: 'string (3)'
                      },
                      elements: {
                        field: {
                          id: '#/2',
                          value: 'string (3)'
                        }
                      }
                    }
                  ],
                  selectedItems: []
                }
              }
            })
        })

        it('transforms `string` type schemas with `oneOf`', () => {
          const schema = {
            type: 'string',
            oneOf: [
              { const: 'string (1)' },
              { const: 'string (2)' },
              { const: 'string (3)' }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'string',
                rootSchema: {},
                schema,
                uri: '#/',
                items: [
                  {
                    meta: {
                      type: 'string',
                      item: 0,
                      rootSchema: {},
                      schema: {
                        const: 'string (1)'
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      value: 'string (1)'
                    },
                    elements: {
                      field: {
                        id: '#/0',
                        value: 'string (1)'
                      }
                    }
                  },
                  {
                    meta: {
                      type: 'string',
                      item: 1,
                      rootSchema: {},
                      schema: {
                        const: 'string (2)'
                      },
                      parentUri: '#/',
                      uri: '#/1',
                      value: 'string (2)'
                    },
                    elements: {
                      field: {
                        id: '#/1',
                        value: 'string (2)'
                      }
                    }
                  },
                  {
                    meta: {
                      type: 'string',
                      item: 2,
                      rootSchema: {},
                      schema: {
                        const: 'string (3)'
                      },
                      parentUri: '#/',
                      uri: '#/2',
                      value: 'string (3)'
                    },
                    elements: {
                      field: {
                        id: '#/2',
                        value: 'string (3)'
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
                        type: 'string',
                        item: 0,
                        rootSchema: {},
                        schema: {
                          const: 'string (1)'
                        },
                        parentUri: '#/',
                        uri: '#/0',
                        value: 'string (1)'
                      },
                      elements: {
                        field: {
                          id: '#/0',
                          value: 'string (1)'
                        }
                      }
                    },
                    {
                      meta: {
                        type: 'string',
                        item: 1,
                        rootSchema: {},
                        schema: {
                          const: 'string (2)'
                        },
                        parentUri: '#/',
                        uri: '#/1',
                        value: 'string (2)'
                      },
                      elements: {
                        field: {
                          id: '#/1',
                          value: 'string (2)'
                        }
                      }
                    },
                    {
                      meta: {
                        type: 'string',
                        item: 2,
                        rootSchema: {},
                        schema: {
                          const: 'string (3)'
                        },
                        parentUri: '#/',
                        uri: '#/2',
                        value: 'string (3)'
                      },
                      elements: {
                        field: {
                          id: '#/2',
                          value: 'string (3)'
                        }
                      }
                    }
                  ],
                  selectedItems: []
                }
              }
            })
        })

        it('transforms `string` type schemas with `allOf`', () => {
          const schema = {
            type: 'string',
            allOf: [
              { minLength: 1 },
              { const: 'string' },
              { maxLength: 20 }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'string',
                rootSchema: {},
                schema,
                minLength: 1,
                maxLength: 20,
                uri: '#/',
                value: 'string'
              },
              elements: {
                field: {
                  id: '#/',
                  minLength: 1,
                  maxLength: 20,
                  value: 'string'
                }
              }
            })
        })

        it('transforms `string` type schemas without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
          const schema = { type: 'string' }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'string',
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
