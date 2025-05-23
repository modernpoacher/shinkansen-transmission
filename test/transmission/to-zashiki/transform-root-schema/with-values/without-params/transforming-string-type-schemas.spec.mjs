/**
 *  @typedef {TransmissionTypes.SchemaType} SchemaType
 */

import {
  expect
} from 'chai'

import transform from '#transmission/transmission/to-zashiki/transform-root-schema'

describe('#transmission/transmission/to-zashiki/transform-root-schema', () => {
  describe('With values', () => {
    describe('Without params', () => {
      describe('Transforming `string` type schemas', () => {
        it('transforms `string` type schemas with `enum`', () => {
          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'string',
            enum: [
              'string (1)',
              'string (2)',
              'string (3)'
            ]
          }

          const values = {
            '#/': '2'
          }

          return expect(transform(schema, values))
            .to.eql({
              meta: {
                type: 'string',
                schema,
                uri: '#/',
                items: [
                  'string (1)',
                  'string (2)',
                  'string (3)'
                ],
                selectedItems: [
                  2
                ]
              },
              elements: {
                enum: {
                  id: '#/',
                  items: [
                    'string (1)',
                    'string (2)',
                    'string (3)'
                  ],
                  selectedItems: [
                    2
                  ]
                }
              }
            })
        })

        it('transforms `string` type schemas with `anyOf`', () => {
          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'string',
            anyOf: [
              { const: 'string (1)' },
              { const: 'string (2)' },
              { const: 'string (3)' }
            ]
          }

          const values = {
            '#/': '2'
          }

          return expect(transform(schema, values))
            .to.eql({
              meta: {
                type: 'string',
                schema,
                uri: '#/',
                items: [
                  {
                    meta: {
                      type: 'string',
                      item: 0,
                      rootSchema: schema,
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
                      rootSchema: schema,
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
                      rootSchema: schema,
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
                selectedItems: [
                  2
                ]
              },
              elements: {
                anyOf: {
                  id: '#/',
                  items: [
                    {
                      meta: {
                        type: 'string',
                        item: 0,
                        rootSchema: schema,
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
                        rootSchema: schema,
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
                        rootSchema: schema,
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
                  selectedItems: [
                    2
                  ]
                }
              }
            })
        })

        it('transforms `string` type schemas with `oneOf`', () => {
          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'string',
            oneOf: [
              { const: 'string (1)' },
              { const: 'string (2)' },
              { const: 'string (3)' }
            ]
          }

          const values = {
            '#/': '2'
          }

          return expect(transform(schema, values))
            .to.eql({
              meta: {
                type: 'string',
                schema,
                uri: '#/',
                items: [
                  {
                    meta: {
                      type: 'string',
                      item: 0,
                      rootSchema: schema,
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
                      rootSchema: schema,
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
                      rootSchema: schema,
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
                selectedItems: [
                  2
                ]
              },
              elements: {
                oneOf: {
                  id: '#/',
                  items: [
                    {
                      meta: {
                        type: 'string',
                        item: 0,
                        rootSchema: schema,
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
                        rootSchema: schema,
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
                        rootSchema: schema,
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
                  selectedItems: [
                    2
                  ]
                }
              }
            })
        })

        it('transforms `string` type schemas with `allOf`', () => {
          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'string',
            allOf: [
              { minLength: 1 },
              { const: 'string' },
              { maxLength: 20 }
            ]
          }

          const values = {
            '#/': 'string'
          }

          return expect(transform(schema, values))
            .to.eql({
              meta: {
                type: 'string',
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

        it('transforms `string` type schemas', () => {
          /**
           *  @type {SchemaType}
           */
          const schema = { type: 'string' }

          const values = {
            '#/': 'string'
          }

          return expect(transform(schema, values))
            .to.eql({
              meta: {
                type: 'string',
                schema,
                uri: '#/',
                value: 'string'
              },
              elements: {
                field: {
                  id: '#/',
                  value: 'string'
                }
              }
            })
        })
      })
    })
  })
})
