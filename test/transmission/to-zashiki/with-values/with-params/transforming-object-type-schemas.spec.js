import debug from 'debug'

import { expect } from 'chai'

import transform from 'shinkansen-transmission/transmission/to-zashiki'

describe('shinkansen-transmission/transmission/to-zashiki', () => {
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
      describe('Transforming `object` type schemas', () => {
        it('transforms `object` type schemas with `enum`', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'string',
                enum: [
                  'string (1)',
                  'string (2)'
                ]
              },
              two: {
                type: 'string',
                enum: [
                  'string (1)',
                  'string (2)'
                ]
              }
            }
          }

          const values = {
            '#/one': '0',
            '#/two': '1'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'string',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'string',
                        enum: [
                          'string (1)',
                          'string (2)'
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      selectedItems: [0],
                      required: false
                    },
                    elements: {
                      enum: {
                        id: '#/one',
                        items: [
                          'string (1)',
                          'string (2)'
                        ],
                        selectedItems: [0],
                        required: false
                      }
                    }
                  },
                  {
                    meta: {
                      component: 'component',
                      type: 'string',
                      name: 'two',
                      rootSchema: schema,
                      schema: {
                        type: 'string',
                        enum: [
                          'string (1)',
                          'string (2)'
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/two',
                      selectedItems: [1],
                      required: false
                    },
                    elements: {
                      enum: {
                        id: '#/two',
                        items: [
                          'string (1)',
                          'string (2)'
                        ],
                        selectedItems: [1],
                        required: false
                      }
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `anyOf`', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'string',
                anyOf: [
                  { const: 'string (1)' },
                  { const: 'string (2)' }
                ]
              },
              two: {
                type: 'string',
                anyOf: [
                  { const: 'string (1)' },
                  { const: 'string (2)' }
                ]
              }
            }
          }

          const values = {
            '#/one': '0',
            '#/two': '1'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'string',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'string',
                        anyOf: [
                          { const: 'string (1)' },
                          { const: 'string (2)' }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      selectedItems: [0],
                      required: false
                    },
                    elements: {
                      anyOf: {
                        id: '#/one',
                        items: [
                          {
                            meta: {
                              type: 'string',
                              item: 0,
                              rootSchema: schema,
                              schema: {
                                const: 'string (1)'
                              },
                              parentUri: '#/one',
                              uri: '#/one/0',
                              required: false,
                              value: 'string (1)'
                            },
                            elements: {
                              field: {
                                id: '#/one/0',
                                required: false,
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
                              parentUri: '#/one',
                              uri: '#/one/1',
                              required: false,
                              value: 'string (2)'
                            },
                            elements: {
                              field: {
                                id: '#/one/1',
                                required: false,
                                value: 'string (2)'
                              }
                            }
                          }
                        ],
                        selectedItems: [0],
                        required: false
                      }
                    }
                  },
                  {
                    meta: {
                      component: 'component',
                      type: 'string',
                      name: 'two',
                      rootSchema: schema,
                      schema: {
                        type: 'string',
                        anyOf: [
                          { const: 'string (1)' },
                          { const: 'string (2)' }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/two',
                      selectedItems: [1],
                      required: false
                    },
                    elements: {
                      anyOf: {
                        id: '#/two',
                        items: [
                          {
                            meta: {
                              type: 'string',
                              item: 0,
                              rootSchema: schema,
                              schema: {
                                const: 'string (1)'
                              },
                              parentUri: '#/two',
                              uri: '#/two/0',
                              required: false,
                              value: 'string (1)'
                            },
                            elements: {
                              field: {
                                id: '#/two/0',
                                required: false,
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
                              parentUri: '#/two',
                              uri: '#/two/1',
                              required: false,
                              value: 'string (2)'
                            },
                            elements: {
                              field: {
                                id: '#/two/1',
                                required: false,
                                value: 'string (2)'
                              }
                            }
                          }
                        ],
                        selectedItems: [1],
                        required: false
                      }
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `oneOf`', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'string',
                oneOf: [
                  { const: 'string (1)' },
                  { const: 'string (2)' }
                ]
              },
              two: {
                type: 'string',
                oneOf: [
                  { const: 'string (1)' },
                  { const: 'string (2)' }
                ]
              }
            }
          }

          const values = {
            '#/one': '0',
            '#/two': '1'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'string',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'string',
                        oneOf: [
                          { const: 'string (1)' },
                          { const: 'string (2)' }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      selectedItems: [0],
                      required: false
                    },
                    elements: {
                      oneOf: {
                        id: '#/one',
                        items: [
                          {
                            meta: {
                              type: 'string',
                              item: 0,
                              rootSchema: schema,
                              schema: {
                                const: 'string (1)'
                              },
                              parentUri: '#/one',
                              uri: '#/one/0',
                              required: false,
                              value: 'string (1)'
                            },
                            elements: {
                              field: {
                                id: '#/one/0',
                                required: false,
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
                              parentUri: '#/one',
                              uri: '#/one/1',
                              required: false,
                              value: 'string (2)'
                            },
                            elements: {
                              field: {
                                id: '#/one/1',
                                required: false,
                                value: 'string (2)'
                              }
                            }
                          }
                        ],
                        selectedItems: [0],
                        required: false
                      }
                    }
                  },
                  {
                    meta: {
                      component: 'component',
                      type: 'string',
                      name: 'two',
                      rootSchema: schema,
                      schema: {
                        type: 'string',
                        oneOf: [
                          { const: 'string (1)' },
                          { const: 'string (2)' }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/two',
                      selectedItems: [1],
                      required: false
                    },
                    elements: {
                      oneOf: {
                        id: '#/two',
                        items: [
                          {
                            meta: {
                              type: 'string',
                              item: 0,
                              rootSchema: schema,
                              schema: {
                                const: 'string (1)'
                              },
                              parentUri: '#/two',
                              uri: '#/two/0',
                              required: false,
                              value: 'string (1)'
                            },
                            elements: {
                              field: {
                                id: '#/two/0',
                                required: false,
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
                              parentUri: '#/two',
                              uri: '#/two/1',
                              required: false,
                              value: 'string (2)'
                            },
                            elements: {
                              field: {
                                id: '#/two/1',
                                required: false,
                                value: 'string (2)'
                              }
                            }
                          }
                        ],
                        selectedItems: [1],
                        required: false
                      }
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `allOf`', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'string',
                allOf: [
                  { minLength: 1 },
                  {
                    const: 'string (one)',
                    maxLength: 100
                  }
                ]
              },
              two: {
                type: 'string',
                allOf: [
                  { minLength: 1 },
                  {
                    const: 'string (two)',
                    maxLength: 100
                  }
                ]
              }
            }
          }

          const values = {
            '#/one': '0',
            '#/two': '1'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'string',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'string',
                        allOf: [
                          { minLength: 1 },
                          {
                            const: 'string (one)',
                            maxLength: 100
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      minLength: 1,
                      maxLength: 100,
                      required: false,
                      value: '0'
                    },
                    elements: {
                      field: {
                        id: '#/one',
                        minLength: 1,
                        maxLength: 100,
                        required: false,
                        value: '0'
                      }
                    }
                  },
                  {
                    meta: {
                      component: 'component',
                      type: 'string',
                      name: 'two',
                      rootSchema: schema,
                      schema: {
                        type: 'string',
                        allOf: [
                          { minLength: 1 },
                          {
                            const: 'string (two)',
                            maxLength: 100
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/two',
                      minLength: 1,
                      maxLength: 100,
                      required: false,
                      value: '1'
                    },
                    elements: {
                      field: {
                        id: '#/two',
                        minLength: 1,
                        maxLength: 100,
                        required: false,
                        value: '1'
                      }
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `enum` (with `required`)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'string',
                enum: [
                  'string (1)',
                  'string (2)'
                ]
              },
              two: {
                type: 'string',
                enum: [
                  'string (1)',
                  'string (2)'
                ]
              }
            },
            required: [
              'one'
            ]
          }

          const values = {
            '#/one': '0',
            '#/two': '1'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'string',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'string',
                        enum: [
                          'string (1)',
                          'string (2)'
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      selectedItems: [0],
                      required: true
                    },
                    elements: {
                      enum: {
                        id: '#/one',
                        items: [
                          'string (1)',
                          'string (2)'
                        ],
                        selectedItems: [0],
                        required: true
                      }
                    }
                  },
                  {
                    meta: {
                      component: 'component',
                      type: 'string',
                      name: 'two',
                      rootSchema: schema,
                      schema: {
                        type: 'string',
                        enum: [
                          'string (1)',
                          'string (2)'
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/two',
                      selectedItems: [1],
                      required: false
                    },
                    elements: {
                      enum: {
                        id: '#/two',
                        items: [
                          'string (1)',
                          'string (2)'
                        ],
                        selectedItems: [1],
                        required: false
                      }
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `anyOf` (with `required`)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'string',
                anyOf: [
                  { const: 'string (1)' },
                  { const: 'string (2)' }
                ]
              },
              two: {
                type: 'string',
                anyOf: [
                  { const: 'string (1)' },
                  { const: 'string (2)' }
                ]
              }
            },
            required: [
              'one'
            ]
          }

          const values = {
            '#/one': '0',
            '#/two': '1'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'string',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'string',
                        anyOf: [
                          { const: 'string (1)' },
                          { const: 'string (2)' }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      selectedItems: [0],
                      required: true
                    },
                    elements: {
                      anyOf: {
                        id: '#/one',
                        items: [
                          {
                            meta: {
                              type: 'string',
                              item: 0,
                              rootSchema: schema,
                              schema: {
                                const: 'string (1)'
                              },
                              parentUri: '#/one',
                              uri: '#/one/0',
                              required: true,
                              value: 'string (1)'
                            },
                            elements: {
                              field: {
                                id: '#/one/0',
                                required: true,
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
                              parentUri: '#/one',
                              uri: '#/one/1',
                              required: true,
                              value: 'string (2)'
                            },
                            elements: {
                              field: {
                                id: '#/one/1',
                                required: true,
                                value: 'string (2)'
                              }
                            }
                          }
                        ],
                        selectedItems: [0],
                        required: true
                      }
                    }
                  },
                  {
                    meta: {
                      component: 'component',
                      type: 'string',
                      name: 'two',
                      rootSchema: schema,
                      schema: {
                        type: 'string',
                        anyOf: [
                          { const: 'string (1)' },
                          { const: 'string (2)' }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/two',
                      selectedItems: [1],
                      required: false
                    },
                    elements: {
                      anyOf: {
                        id: '#/two',
                        items: [
                          {
                            meta: {
                              type: 'string',
                              item: 0,
                              rootSchema: schema,
                              schema: {
                                const: 'string (1)'
                              },
                              parentUri: '#/two',
                              uri: '#/two/0',
                              required: false,
                              value: 'string (1)'
                            },
                            elements: {
                              field: {
                                id: '#/two/0',
                                required: false,
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
                              parentUri: '#/two',
                              uri: '#/two/1',
                              required: false,
                              value: 'string (2)'
                            },
                            elements: {
                              field: {
                                id: '#/two/1',
                                required: false,
                                value: 'string (2)'
                              }
                            }
                          }
                        ],
                        selectedItems: [1],
                        required: false
                      }
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `oneOf` (with `required`)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'string',
                oneOf: [
                  { const: 'string (1)' },
                  { const: 'string (2)' }
                ]
              },
              two: {
                type: 'string',
                oneOf: [
                  { const: 'string (1)' },
                  { const: 'string (2)' }
                ]
              }
            },
            required: [
              'one'
            ]
          }

          const values = {
            '#/one': '0',
            '#/two': '1'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'string',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'string',
                        oneOf: [
                          { const: 'string (1)' },
                          { const: 'string (2)' }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      selectedItems: [0],
                      required: true
                    },
                    elements: {
                      oneOf: {
                        id: '#/one',
                        items: [
                          {
                            meta: {
                              type: 'string',
                              item: 0,
                              rootSchema: schema,
                              schema: {
                                const: 'string (1)'
                              },
                              parentUri: '#/one',
                              uri: '#/one/0',
                              required: true,
                              value: 'string (1)'
                            },
                            elements: {
                              field: {
                                id: '#/one/0',
                                required: true,
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
                              parentUri: '#/one',
                              uri: '#/one/1',
                              required: true,
                              value: 'string (2)'
                            },
                            elements: {
                              field: {
                                id: '#/one/1',
                                required: true,
                                value: 'string (2)'
                              }
                            }
                          }
                        ],
                        selectedItems: [0],
                        required: true
                      }
                    }
                  },
                  {
                    meta: {
                      component: 'component',
                      type: 'string',
                      name: 'two',
                      rootSchema: schema,
                      schema: {
                        type: 'string',
                        oneOf: [
                          { const: 'string (1)' },
                          { const: 'string (2)' }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/two',
                      selectedItems: [1],
                      required: false
                    },
                    elements: {
                      oneOf: {
                        id: '#/two',
                        items: [
                          {
                            meta: {
                              type: 'string',
                              item: 0,
                              rootSchema: schema,
                              schema: {
                                const: 'string (1)'
                              },
                              parentUri: '#/two',
                              uri: '#/two/0',
                              required: false,
                              value: 'string (1)'
                            },
                            elements: {
                              field: {
                                id: '#/two/0',
                                required: false,
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
                              parentUri: '#/two',
                              uri: '#/two/1',
                              required: false,
                              value: 'string (2)'
                            },
                            elements: {
                              field: {
                                id: '#/two/1',
                                required: false,
                                value: 'string (2)'
                              }
                            }
                          }
                        ],
                        selectedItems: [1],
                        required: false
                      }
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `allOf` (with `required`)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'string',
                allOf: [
                  { minLength: 1 },
                  {
                    const: 'string (one)',
                    maxLength: 100
                  }
                ]
              },
              two: {
                type: 'string',
                allOf: [
                  { minLength: 1 },
                  {
                    const: 'string (two)',
                    maxLength: 100
                  }
                ]
              }
            },
            required: [
              'one'
            ]
          }

          const values = {
            '#/one': '0',
            '#/two': '1'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'string',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'string',
                        allOf: [
                          { minLength: 1 },
                          {
                            const: 'string (one)',
                            maxLength: 100
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      minLength: 1,
                      maxLength: 100,
                      required: true,
                      value: '0'
                    },
                    elements: {
                      field: {
                        id: '#/one',
                        minLength: 1,
                        maxLength: 100,
                        required: true,
                        value: '0'
                      }
                    }
                  },
                  {
                    meta: {
                      component: 'component',
                      type: 'string',
                      name: 'two',
                      rootSchema: schema,
                      schema: {
                        type: 'string',
                        allOf: [
                          { minLength: 1 },
                          {
                            const: 'string (two)',
                            maxLength: 100
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/two',
                      minLength: 1,
                      maxLength: 100,
                      required: false,
                      value: '1'
                    },
                    elements: {
                      field: {
                        id: '#/two',
                        minLength: 1,
                        maxLength: 100,
                        required: false,
                        value: '1'
                      }
                    }
                  }
                ]
              }
            })
        })

        /*
         *  String
         */
        it('transforms `object` type schemas with `enum` (`properties` has an `object` type with a `string` type)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'object',
                properties: {
                  two: {
                    type: 'string',
                    enum: [
                      'string (1)',
                      'string (2)'
                    ]
                  }
                }
              }
            }
          }

          const values = {
            '#/one/two': '0'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/one/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'object',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          two: {
                            type: 'string',
                            enum: [
                              'string (1)',
                              'string (2)'
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            component: 'component',
                            type: 'string',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'string',
                              enum: [
                                'string (1)',
                                'string (2)'
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            selectedItems: [0],
                            required: false
                          },
                          elements: {
                            enum: {
                              id: '#/one/two',
                              items: [
                                'string (1)',
                                'string (2)'
                              ],
                              selectedItems: [0],
                              required: false
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `anyOf` (`properties` has an `object` type with a `string` type)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'object',
                properties: {
                  two: {
                    type: 'string',
                    anyOf: [
                      { const: 'string (1)' },
                      { const: 'string (2)' }
                    ]
                  }
                }
              }
            }
          }

          const values = {
            '#/one/two': '0'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/one/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'object',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          two: {
                            type: 'string',
                            anyOf: [
                              { const: 'string (1)' },
                              { const: 'string (2)' }
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            component: 'component',
                            type: 'string',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'string',
                              anyOf: [
                                { const: 'string (1)' },
                                { const: 'string (2)' }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            selectedItems: [0],
                            required: false
                          },
                          elements: {
                            anyOf: {
                              id: '#/one/two',
                              items: [
                                {
                                  meta: {
                                    type: 'string',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: 'string (1)'
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    required: false,
                                    value: 'string (1)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/0',
                                      required: false,
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
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/1',
                                    required: false,
                                    value: 'string (2)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/1',
                                      required: false,
                                      value: 'string (2)'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [0],
                              required: false
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `oneOf` (`properties` has an `object` type with a `string` type)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'object',
                properties: {
                  two: {
                    type: 'string',
                    oneOf: [
                      { const: 'string (1)' },
                      { const: 'string (2)' }
                    ]
                  }
                }
              }
            }
          }

          const values = {
            '#/one/two': '0'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/one/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'object',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          two: {
                            type: 'string',
                            oneOf: [
                              { const: 'string (1)' },
                              { const: 'string (2)' }
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            component: 'component',
                            type: 'string',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'string',
                              oneOf: [
                                { const: 'string (1)' },
                                { const: 'string (2)' }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            selectedItems: [0],
                            required: false
                          },
                          elements: {
                            oneOf: {
                              id: '#/one/two',
                              items: [
                                {
                                  meta: {
                                    type: 'string',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: 'string (1)'
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    required: false,
                                    value: 'string (1)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/0',
                                      required: false,
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
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/1',
                                    required: false,
                                    value: 'string (2)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/1',
                                      required: false,
                                      value: 'string (2)'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [0],
                              required: false
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `allOf` (`properties` has an `object` type with a `string` type)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'object',
                properties: {
                  two: {
                    type: 'string',
                    allOf: [
                      { minLength: 1 },
                      {
                        const: 'string',
                        maxLength: 100
                      }
                    ]
                  }
                }
              }
            }
          }

          const values = {
            '#/one/two': 'string'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/one/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'object',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          two: {
                            type: 'string',
                            allOf: [
                              { minLength: 1 },
                              {
                                const: 'string',
                                maxLength: 100
                              }
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            component: 'component',
                            type: 'string',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'string',
                              allOf: [
                                { minLength: 1 },
                                {
                                  const: 'string',
                                  maxLength: 100
                                }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            minLength: 1,
                            maxLength: 100,
                            required: false,
                            value: 'string'
                          },
                          elements: {
                            field: {
                              id: '#/one/two',
                              minLength: 1,
                              maxLength: 100,
                              required: false,
                              value: 'string'
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `enum` (`properties` has an `object` type with a `string` type with `required`)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'object',
                properties: {
                  two: {
                    type: 'string',
                    enum: [
                      'string (1)',
                      'string (2)'
                    ]
                  }
                }
              }
            },
            required: [
              'one'
            ]
          }

          const values = {
            '#/one/two': '0'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/one/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'object',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          two: {
                            type: 'string',
                            enum: [
                              'string (1)',
                              'string (2)'
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: true
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            component: 'component',
                            type: 'string',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'string',
                              enum: [
                                'string (1)',
                                'string (2)'
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            selectedItems: [0],
                            required: false
                          },
                          elements: {
                            enum: {
                              id: '#/one/two',
                              items: [
                                'string (1)',
                                'string (2)'
                              ],
                              selectedItems: [0],
                              required: false
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `anyOf` (`properties` has an `object` type with a `string` type with `required`)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'object',
                properties: {
                  two: {
                    type: 'string',
                    anyOf: [
                      { const: 'string (1)' },
                      { const: 'string (2)' }
                    ]
                  }
                }
              }
            },
            required: [
              'one'
            ]
          }

          const values = {
            '#/one/two': '0'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/one/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'object',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          two: {
                            type: 'string',
                            anyOf: [
                              { const: 'string (1)' },
                              { const: 'string (2)' }
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: true
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            component: 'component',
                            type: 'string',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'string',
                              anyOf: [
                                { const: 'string (1)' },
                                { const: 'string (2)' }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            selectedItems: [0],
                            required: false
                          },
                          elements: {
                            anyOf: {
                              id: '#/one/two',
                              items: [
                                {
                                  meta: {
                                    type: 'string',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: 'string (1)'
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    required: false,
                                    value: 'string (1)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/0',
                                      required: false,
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
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/1',
                                    required: false,
                                    value: 'string (2)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/1',
                                      required: false,
                                      value: 'string (2)'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [0],
                              required: false
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `oneOf` (`properties` has an `object` type with a `string` type with `required`)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'object',
                properties: {
                  two: {
                    type: 'string',
                    oneOf: [
                      { const: 'string (1)' },
                      { const: 'string (2)' }
                    ]
                  }
                }
              }
            },
            required: [
              'one'
            ]
          }

          const values = {
            '#/one/two': '0'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/one/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'object',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          two: {
                            type: 'string',
                            oneOf: [
                              { const: 'string (1)' },
                              { const: 'string (2)' }
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: true
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            component: 'component',
                            type: 'string',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'string',
                              oneOf: [
                                { const: 'string (1)' },
                                { const: 'string (2)' }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            selectedItems: [0],
                            required: false
                          },
                          elements: {
                            oneOf: {
                              id: '#/one/two',
                              items: [
                                {
                                  meta: {
                                    type: 'string',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: 'string (1)'
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    required: false,
                                    value: 'string (1)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/0',
                                      required: false,
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
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/1',
                                    required: false,
                                    value: 'string (2)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/1',
                                      required: false,
                                      value: 'string (2)'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [0],
                              required: false
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `allOf` (`properties` has an `object` type with a `string` type with `required`)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'object',
                properties: {
                  two: {
                    type: 'string',
                    allOf: [
                      { minLength: 1 },
                      {
                        const: 'string',
                        maxLength: 100
                      }
                    ]
                  }
                }
              }
            },
            required: [
              'one'
            ]
          }

          const values = {
            '#/one/two': '0'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/one/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'object',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          two: {
                            type: 'string',
                            allOf: [
                              { minLength: 1 },
                              {
                                const: 'string',
                                maxLength: 100
                              }
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: true
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            component: 'component',
                            type: 'string',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'string',
                              allOf: [
                                { minLength: 1 },
                                {
                                  const: 'string',
                                  maxLength: 100
                                }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            minLength: 1,
                            maxLength: 100,
                            required: false,
                            value: '0'
                          },
                          elements: {
                            field: {
                              id: '#/one/two',
                              minLength: 1,
                              maxLength: 100,
                              required: false,
                              value: '0'
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        /*
         *  Number
         */
        it('transforms `object` type schemas with `enum` (`properties` has an `object` type with a `number` type)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'object',
                properties: {
                  two: {
                    type: 'number',
                    enum: [
                      1,
                      2
                    ]
                  }
                }
              }
            }
          }

          const values = {
            '#/one/two': '0'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/one/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'object',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          two: {
                            type: 'number',
                            enum: [
                              1,
                              2
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            component: 'component',
                            type: 'number',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'number',
                              enum: [
                                1,
                                2
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            selectedItems: [0],
                            required: false
                          },
                          elements: {
                            enum: {
                              id: '#/one/two',
                              items: [
                                1,
                                2
                              ],
                              selectedItems: [0],
                              required: false
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `anyOf` (`properties` has an `object` type with a `number` type)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'object',
                properties: {
                  two: {
                    type: 'number',
                    anyOf: [
                      { const: 1 },
                      { const: 2 }
                    ]
                  }
                }
              }
            }
          }

          const values = {
            '#/one/two': '0'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/one/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'object',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          two: {
                            type: 'number',
                            anyOf: [
                              { const: 1 },
                              { const: 2 }
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            component: 'component',
                            type: 'number',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'number',
                              anyOf: [
                                { const: 1 },
                                { const: 2 }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            selectedItems: [0],
                            required: false
                          },
                          elements: {
                            anyOf: {
                              id: '#/one/two',
                              items: [
                                {
                                  meta: {
                                    type: 'number',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: 1
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    required: false,
                                    value: '1'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/0',
                                      required: false,
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
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/1',
                                    required: false,
                                    value: '2'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/1',
                                      required: false,
                                      value: '2'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [0],
                              required: false
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `oneOf` (`properties` has an `object` type with a `number` type)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'object',
                properties: {
                  two: {
                    type: 'number',
                    oneOf: [
                      { const: 1 },
                      { const: 2 }
                    ]
                  }
                }
              }
            }
          }

          const values = {
            '#/one/two': '0'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/one/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'object',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          two: {
                            type: 'number',
                            oneOf: [
                              { const: 1 },
                              { const: 2 }
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            component: 'component',
                            type: 'number',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'number',
                              oneOf: [
                                { const: 1 },
                                { const: 2 }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            selectedItems: [0],
                            required: false
                          },
                          elements: {
                            oneOf: {
                              id: '#/one/two',
                              items: [
                                {
                                  meta: {
                                    type: 'number',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: 1
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    required: false,
                                    value: '1'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/0',
                                      required: false,
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
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/1',
                                    required: false,
                                    value: '2'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/1',
                                      required: false,
                                      value: '2'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [0],
                              required: false
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `allOf` (`properties` has an `object` type with a `number` type)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'object',
                properties: {
                  two: {
                    type: 'number',
                    allOf: [
                      { minimum: 1 },
                      {
                        const: 2,
                        maximum: 3
                      }
                    ]
                  }
                }
              }
            }
          }

          const values = {
            '#/one/two': '2'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/one/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'object',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          two: {
                            type: 'number',
                            allOf: [
                              { minimum: 1 },
                              {
                                const: 2,
                                maximum: 3
                              }
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            component: 'component',
                            type: 'number',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'number',
                              allOf: [
                                { minimum: 1 },
                                {
                                  const: 2,
                                  maximum: 3
                                }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            min: 1,
                            max: 3,
                            required: false,
                            value: '2'
                          },
                          elements: {
                            field: {
                              id: '#/one/two',
                              min: 1,
                              max: 3,
                              required: false,
                              value: '2'
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `enum` (`properties` has an `object` type with a `number` type with `required`)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'object',
                properties: {
                  two: {
                    type: 'number',
                    enum: [
                      1,
                      2
                    ]
                  }
                }
              }
            },
            required: [
              'one'
            ]
          }

          const values = {
            '#/one/two': '0'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/one/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'object',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          two: {
                            type: 'number',
                            enum: [
                              1,
                              2
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: true
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            component: 'component',
                            type: 'number',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'number',
                              enum: [
                                1,
                                2
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            selectedItems: [0],
                            required: false
                          },
                          elements: {
                            enum: {
                              id: '#/one/two',
                              items: [
                                1,
                                2
                              ],
                              selectedItems: [0],
                              required: false
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `anyOf` (`properties` has an `object` type with a `number` type with `required`)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'object',
                properties: {
                  two: {
                    type: 'number',
                    anyOf: [
                      { const: 1 },
                      { const: 2 }
                    ]
                  }
                }
              }
            },
            required: [
              'one'
            ]
          }

          const values = {
            '#/one/two': '0'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/one/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'object',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          two: {
                            type: 'number',
                            anyOf: [
                              { const: 1 },
                              { const: 2 }
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: true
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            component: 'component',
                            type: 'number',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'number',
                              anyOf: [
                                { const: 1 },
                                { const: 2 }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            selectedItems: [0],
                            required: false
                          },
                          elements: {
                            anyOf: {
                              id: '#/one/two',
                              items: [
                                {
                                  meta: {
                                    type: 'number',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: 1
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    required: false,
                                    value: '1'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/0',
                                      required: false,
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
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/1',
                                    required: false,
                                    value: '2'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/1',
                                      required: false,
                                      value: '2'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [0],
                              required: false
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `oneOf` (`properties` has an `object` type with a `number` type with `required`)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'object',
                properties: {
                  two: {
                    type: 'number',
                    oneOf: [
                      { const: 1 },
                      { const: 2 }
                    ]
                  }
                }
              }
            },
            required: [
              'one'
            ]
          }

          const values = {
            '#/one/two': '0'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/one/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'object',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          two: {
                            type: 'number',
                            oneOf: [
                              { const: 1 },
                              { const: 2 }
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: true
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            component: 'component',
                            type: 'number',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'number',
                              oneOf: [
                                { const: 1 },
                                { const: 2 }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            selectedItems: [0],
                            required: false
                          },
                          elements: {
                            oneOf: {
                              id: '#/one/two',
                              items: [
                                {
                                  meta: {
                                    type: 'number',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: 1
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    required: false,
                                    value: '1'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/0',
                                      required: false,
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
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/1',
                                    required: false,
                                    value: '2'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/1',
                                      required: false,
                                      value: '2'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [0],
                              required: false
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `allOf` (`properties` has an `object` type with a `number` type with `required`)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'object',
                properties: {
                  two: {
                    type: 'number',
                    allOf: [
                      { minimum: 1 },
                      {
                        const: 2,
                        maximum: 3
                      }
                    ]
                  }
                }
              }
            },
            required: [
              'one'
            ]
          }

          const values = {
            '#/one/two': '2'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/one/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'object',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          two: {
                            type: 'number',
                            allOf: [
                              { minimum: 1 },
                              {
                                const: 2,
                                maximum: 3
                              }
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: true
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            component: 'component',
                            type: 'number',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'number',
                              allOf: [
                                { minimum: 1 },
                                {
                                  const: 2,
                                  maximum: 3
                                }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            min: 1,
                            max: 3,
                            required: false,
                            value: '2'
                          },
                          elements: {
                            field: {
                              id: '#/one/two',
                              min: 1,
                              max: 3,
                              required: false,
                              value: '2'
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        /*
         *  Array
         */
        it('transforms `object` type schemas with `enum` (`properties` has an `object` type with a `array` type)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'object',
                properties: {
                  two: {
                    type: 'array',
                    enum: [
                      [],
                      []
                    ]
                  }
                }
              }
            }
          }

          const values = {
            '#/one/two': '0'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/one/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'object',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          two: {
                            type: 'array',
                            enum: [
                              [],
                              []
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            component: 'component',
                            type: 'array',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'array',
                              enum: [
                                [],
                                []
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            selectedItems: [0],
                            required: false
                          },
                          elements: {
                            enum: {
                              id: '#/one/two',
                              items: [
                                [],
                                []
                              ],
                              selectedItems: [0],
                              required: false
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `anyOf` (`properties` has an `object` type with a `array` type)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'object',
                properties: {
                  two: {
                    type: 'array',
                    anyOf: [
                      { const: [] },
                      { const: [] }
                    ]
                  }
                }
              }
            }
          }

          const values = {
            '#/one/two': '0'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/one/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'object',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          two: {
                            type: 'array',
                            anyOf: [
                              { const: [] },
                              { const: [] }
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            component: 'component',
                            type: 'array',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'array',
                              anyOf: [
                                { const: [] },
                                { const: [] }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            selectedItems: [0],
                            required: false
                          },
                          elements: {
                            anyOf: {
                              id: '#/one/two',
                              items: [
                                {
                                  meta: {
                                    type: 'array',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: []
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    required: false
                                  },
                                  elements: {
                                    fields: []
                                  }
                                },
                                {
                                  meta: {
                                    type: 'array',
                                    item: 1,
                                    rootSchema: schema,
                                    schema: {
                                      const: []
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/1',
                                    required: false
                                  },
                                  elements: {
                                    fields: []
                                  }
                                }
                              ],
                              selectedItems: [0],
                              required: false
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `oneOf` (`properties` has an `object` type with a `array` type)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'object',
                properties: {
                  two: {
                    type: 'array',
                    oneOf: [
                      { const: [] },
                      { const: [] }
                    ]
                  }
                }
              }
            }
          }

          const values = {
            '#/one/two': '0'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/one/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'object',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          two: {
                            type: 'array',
                            oneOf: [
                              { const: [] },
                              { const: [] }
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            component: 'component',
                            type: 'array',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'array',
                              oneOf: [
                                { const: [] },
                                { const: [] }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            selectedItems: [0],
                            required: false
                          },
                          elements: {
                            oneOf: {
                              id: '#/one/two',
                              items: [
                                {
                                  meta: {
                                    type: 'array',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: []
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    required: false
                                  },
                                  elements: {
                                    fields: []
                                  }
                                },
                                {
                                  meta: {
                                    type: 'array',
                                    item: 1,
                                    rootSchema: schema,
                                    schema: {
                                      const: []
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/1',
                                    required: false
                                  },
                                  elements: {
                                    fields: []
                                  }
                                }
                              ],
                              selectedItems: [0],
                              required: false
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `allOf` (`properties` has an `object` type with a `array` type)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'object',
                properties: {
                  two: {
                    type: 'array',
                    allOf: [
                      { const: [] }
                    ]
                  }
                }
              }
            }
          }

          const values = {}

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/one/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'object',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          two: {
                            type: 'array',
                            allOf: [
                              { const: [] }
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            component: 'component',
                            type: 'array',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'array',
                              allOf: [
                                { const: [] }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            required: false
                          },
                          elements: {
                            fields: []
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `enum` (`properties` has an `object` type with a `array` type with `required`)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'object',
                properties: {
                  two: {
                    type: 'array',
                    enum: [
                      [],
                      []
                    ]
                  }
                }
              }
            },
            required: [
              'one'
            ]
          }

          const values = {
            '#/one/two': '0'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/one/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'object',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          two: {
                            type: 'array',
                            enum: [
                              [],
                              []
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: true
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            component: 'component',
                            type: 'array',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'array',
                              enum: [
                                [],
                                []
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            selectedItems: [0],
                            required: false
                          },
                          elements: {
                            enum: {
                              id: '#/one/two',
                              items: [
                                [],
                                []
                              ],
                              selectedItems: [0],
                              required: false
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `anyOf` (`properties` has an `object` type with a `array` type with `required`)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'object',
                properties: {
                  two: {
                    type: 'array',
                    anyOf: [
                      { const: [] },
                      { const: [] }
                    ]
                  }
                }
              }
            },
            required: [
              'one'
            ]
          }

          const values = {
            '#/one/two': '0'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/one/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'object',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          two: {
                            type: 'array',
                            anyOf: [
                              { const: [] },
                              { const: [] }
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: true
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            component: 'component',
                            type: 'array',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'array',
                              anyOf: [
                                { const: [] },
                                { const: [] }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            selectedItems: [0],
                            required: false
                          },
                          elements: {
                            anyOf: {
                              id: '#/one/two',
                              items: [
                                {
                                  meta: {
                                    type: 'array',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: []
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    required: false
                                  },
                                  elements: {
                                    fields: []
                                  }
                                },
                                {
                                  meta: {
                                    type: 'array',
                                    item: 1,
                                    rootSchema: schema,
                                    schema: {
                                      const: []
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/1',
                                    required: false
                                  },
                                  elements: {
                                    fields: []
                                  }
                                }
                              ],
                              selectedItems: [0],
                              required: false
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `oneOf` (`properties` has an `object` type with a `array` type with `required`)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'object',
                properties: {
                  two: {
                    type: 'array',
                    oneOf: [
                      { const: [] },
                      { const: [] }
                    ]
                  }
                }
              }
            },
            required: [
              'one'
            ]
          }

          const values = {
            '#/one/two': '0'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/one/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'object',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          two: {
                            type: 'array',
                            oneOf: [
                              { const: [] },
                              { const: [] }
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: true
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            component: 'component',
                            type: 'array',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'array',
                              oneOf: [
                                { const: [] },
                                { const: [] }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            selectedItems: [0],
                            required: false
                          },
                          elements: {
                            oneOf: {
                              id: '#/one/two',
                              items: [
                                {
                                  meta: {
                                    type: 'array',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: []
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    required: false
                                  },
                                  elements: {
                                    fields: []
                                  }
                                },
                                {
                                  meta: {
                                    type: 'array',
                                    item: 1,
                                    rootSchema: schema,
                                    schema: {
                                      const: []
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/1',
                                    required: false
                                  },
                                  elements: {
                                    fields: []
                                  }
                                }
                              ],
                              selectedItems: [0],
                              required: false
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `allOf` (`properties` has an `object` type with a `array` type with `required`)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'object',
                properties: {
                  two: {
                    type: 'array',
                    allOf: [
                      { const: [] }
                    ]
                  }
                }
              }
            },
            required: [
              'one'
            ]
          }

          const values = {}

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/one/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'object',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          two: {
                            type: 'array',
                            allOf: [
                              { const: [] }
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: true
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            component: 'component',
                            type: 'array',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'array',
                              allOf: [
                                { const: [] }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            required: false
                          },
                          elements: {
                            fields: []
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        /*
         *  Object
         */
        it('transforms `object` type schemas with `enum` (`properties` has an `object` type with a `object` type)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'object',
                properties: {
                  two: {
                    type: 'object',
                    enum: [
                      {},
                      {}
                    ]
                  }
                }
              }
            }
          }

          const values = {
            '#/one/two': '0'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/one/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'object',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          two: {
                            type: 'object',
                            enum: [
                              {},
                              {}
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            component: 'component',
                            type: 'object',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'object',
                              enum: [
                                {},
                                {}
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            selectedItems: [0],
                            required: false
                          },
                          elements: {
                            enum: {
                              id: '#/one/two',
                              items: [
                                {},
                                {}
                              ],
                              selectedItems: [0],
                              required: false
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `anyOf` (`properties` has an `object` type with a `object` type)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'object',
                properties: {
                  two: {
                    type: 'object',
                    anyOf: [
                      { const: {} },
                      { const: {} }
                    ]
                  }
                }
              }
            }
          }

          const values = {
            '#/one/two': '0'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/one/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'object',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          two: {
                            type: 'object',
                            anyOf: [
                              { const: {} },
                              { const: {} }
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            component: 'component',
                            type: 'object',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'object',
                              anyOf: [
                                { const: {} },
                                { const: {} }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            selectedItems: [0],
                            required: false
                          },
                          elements: {
                            anyOf: {
                              id: '#/one/two',
                              items: [
                                {
                                  meta: {
                                    type: 'object',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: {}
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    required: false
                                  },
                                  elements: {
                                    fields: []
                                  }
                                },
                                {
                                  meta: {
                                    type: 'object',
                                    item: 1,
                                    rootSchema: schema,
                                    schema: {
                                      const: {}
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/1',
                                    required: false
                                  },
                                  elements: {
                                    fields: []
                                  }
                                }
                              ],
                              selectedItems: [0],
                              required: false
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `oneOf` (`properties` has an `object` type with a `object` type)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'object',
                properties: {
                  two: {
                    type: 'object',
                    oneOf: [
                      { const: {} },
                      { const: {} }
                    ]
                  }
                }
              }
            }
          }

          const values = {
            '#/one/two': '0'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/one/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'object',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          two: {
                            type: 'object',
                            oneOf: [
                              { const: {} },
                              { const: {} }
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            component: 'component',
                            type: 'object',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'object',
                              oneOf: [
                                { const: {} },
                                { const: {} }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            selectedItems: [0],
                            required: false
                          },
                          elements: {
                            oneOf: {
                              id: '#/one/two',
                              items: [
                                {
                                  meta: {
                                    type: 'object',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: {}
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    required: false
                                  },
                                  elements: {
                                    fields: []
                                  }
                                },
                                {
                                  meta: {
                                    type: 'object',
                                    item: 1,
                                    rootSchema: schema,
                                    schema: {
                                      const: {}
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/1',
                                    required: false
                                  },
                                  elements: {
                                    fields: []
                                  }
                                }
                              ],
                              selectedItems: [0],
                              required: false
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `allOf` (`properties` has an `object` type with a `object` type)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'object',
                properties: {
                  two: {
                    type: 'object',
                    allOf: [
                      { const: {} }
                    ]
                  }
                }
              }
            }
          }

          const values = {}

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/one/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'object',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          two: {
                            type: 'object',
                            allOf: [
                              { const: {} }
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            component: 'component',
                            type: 'object',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'object',
                              allOf: [
                                { const: {} }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            required: false
                          },
                          elements: {
                            fields: []
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `enum` (`properties` has an `object` type with a `object` type with `required`)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'object',
                properties: {
                  two: {
                    type: 'object',
                    enum: [
                      {},
                      {}
                    ]
                  }
                }
              }
            },
            required: [
              'one'
            ]
          }

          const values = {
            '#/one/two': '0'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/one/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'object',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          two: {
                            type: 'object',
                            enum: [
                              {},
                              {}
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: true
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            component: 'component',
                            type: 'object',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'object',
                              enum: [
                                {},
                                {}
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            selectedItems: [0],
                            required: false
                          },
                          elements: {
                            enum: {
                              id: '#/one/two',
                              items: [
                                {},
                                {}
                              ],
                              selectedItems: [0],
                              required: false
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `anyOf` (`properties` has an `object` type with a `object` type with `required`)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'object',
                properties: {
                  two: {
                    type: 'object',
                    anyOf: [
                      { const: {} },
                      { const: {} }
                    ]
                  }
                }
              }
            },
            required: [
              'one'
            ]
          }

          const values = {
            '#/one/two': '0'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/one/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'object',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          two: {
                            type: 'object',
                            anyOf: [
                              { const: {} },
                              { const: {} }
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: true
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            component: 'component',
                            type: 'object',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'object',
                              anyOf: [
                                { const: {} },
                                { const: {} }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            selectedItems: [0],
                            required: false
                          },
                          elements: {
                            anyOf: {
                              id: '#/one/two',
                              items: [
                                {
                                  meta: {
                                    type: 'object',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: {}
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    required: false
                                  },
                                  elements: {
                                    fields: []
                                  }
                                },
                                {
                                  meta: {
                                    type: 'object',
                                    item: 1,
                                    rootSchema: schema,
                                    schema: {
                                      const: {}
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/1',
                                    required: false
                                  },
                                  elements: {
                                    fields: []
                                  }
                                }
                              ],
                              selectedItems: [0],
                              required: false
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `oneOf` (`properties` has an `object` type with a `object` type with `required`)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'object',
                properties: {
                  two: {
                    type: 'object',
                    oneOf: [
                      { const: {} },
                      { const: {} }
                    ]
                  }
                }
              }
            },
            required: [
              'one'
            ]
          }

          const values = {
            '#/one/two': '0'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/one/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'object',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          two: {
                            type: 'object',
                            oneOf: [
                              { const: {} },
                              { const: {} }
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: true
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            component: 'component',
                            type: 'object',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'object',
                              oneOf: [
                                { const: {} },
                                { const: {} }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            selectedItems: [0],
                            required: false
                          },
                          elements: {
                            oneOf: {
                              id: '#/one/two',
                              items: [
                                {
                                  meta: {
                                    type: 'object',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: {}
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    required: false
                                  },
                                  elements: {
                                    fields: []
                                  }
                                },
                                {
                                  meta: {
                                    type: 'object',
                                    item: 1,
                                    rootSchema: schema,
                                    schema: {
                                      const: {}
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/1',
                                    required: false
                                  },
                                  elements: {
                                    fields: []
                                  }
                                }
                              ],
                              selectedItems: [0],
                              required: false
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `allOf` (`properties` has an `object` type with a `object` type with `required`)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'object',
                properties: {
                  two: {
                    type: 'object',
                    allOf: [
                      { const: {} }
                    ]
                  }
                }
              }
            },
            required: [
              'one'
            ]
          }

          const values = {}

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/one/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'object',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          two: {
                            type: 'object',
                            allOf: [
                              { const: {} }
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: true
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            component: 'component',
                            type: 'object',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'object',
                              allOf: [
                                { const: {} }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            required: false
                          },
                          elements: {
                            fields: []
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        /*
         *  Boolean
         */
        it('transforms `object` type schemas with `enum` (`properties` has an `object` type with a `boolean` type)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'object',
                properties: {
                  two: {
                    type: 'boolean',
                    enum: [
                      true,
                      false
                    ]
                  }
                }
              }
            }
          }

          const values = {
            '#/one/two': '0'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/one/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'object',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          two: {
                            type: 'boolean',
                            enum: [
                              true,
                              false
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            component: 'component',
                            type: 'boolean',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'boolean',
                              enum: [
                                true,
                                false
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            selectedItems: [0],
                            required: false
                          },
                          elements: {
                            enum: {
                              id: '#/one/two',
                              items: [
                                true,
                                false
                              ],
                              selectedItems: [0],
                              required: false
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `anyOf` (`properties` has an `object` type with a `boolean` type)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'object',
                properties: {
                  two: {
                    type: 'boolean',
                    anyOf: [
                      { const: true },
                      { const: false }
                    ]
                  }
                }
              }
            }
          }

          const values = {
            '#/one/two': '0'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/one/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'object',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          two: {
                            type: 'boolean',
                            anyOf: [
                              { const: true },
                              { const: false }
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            component: 'component',
                            type: 'boolean',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'boolean',
                              anyOf: [
                                { const: true },
                                { const: false }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            selectedItems: [0],
                            required: false
                          },
                          elements: {
                            anyOf: {
                              id: '#/one/two',
                              items: [
                                {
                                  meta: {
                                    type: 'boolean',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: true
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    required: false,
                                    value: 'true'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/0',
                                      required: false,
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
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/1',
                                    required: false,
                                    value: 'false'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/1',
                                      required: false,
                                      value: 'false'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [0],
                              required: false
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `oneOf` (`properties` has an `object` type with a `boolean` type)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'object',
                properties: {
                  two: {
                    type: 'boolean',
                    oneOf: [
                      { const: true },
                      { const: false }
                    ]
                  }
                }
              }
            }
          }

          const values = {
            '#/one/two': '0'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/one/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'object',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          two: {
                            type: 'boolean',
                            oneOf: [
                              { const: true },
                              { const: false }
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            component: 'component',
                            type: 'boolean',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'boolean',
                              oneOf: [
                                { const: true },
                                { const: false }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            selectedItems: [0],
                            required: false
                          },
                          elements: {
                            oneOf: {
                              id: '#/one/two',
                              items: [
                                {
                                  meta: {
                                    type: 'boolean',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: true
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    required: false,
                                    value: 'true'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/0',
                                      required: false,
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
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/1',
                                    required: false,
                                    value: 'false'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/1',
                                      required: false,
                                      value: 'false'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [0],
                              required: false
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `allOf` (`properties` has an `object` type with a `boolean` type)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'object',
                properties: {
                  two: {
                    type: 'boolean',
                    allOf: [
                      { const: true }
                    ]
                  }
                }
              }
            }
          }

          const values = {
            '#/one/two': 'true'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/one/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'object',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          two: {
                            type: 'boolean',
                            allOf: [
                              { const: true }
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            component: 'component',
                            type: 'boolean',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'boolean',
                              allOf: [
                                { const: true }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            required: false,
                            value: 'true'
                          },
                          elements: {
                            field: {
                              id: '#/one/two',
                              required: false,
                              value: 'true'
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `enum` (`properties` has an `object` type with a `boolean` type with `required`)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'object',
                properties: {
                  two: {
                    type: 'boolean',
                    enum: [
                      true,
                      false
                    ]
                  }
                }
              }
            },
            required: [
              'one'
            ]
          }

          const values = {
            '#/one/two': '0'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/one/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'object',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          two: {
                            type: 'boolean',
                            enum: [
                              true,
                              false
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: true
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            component: 'component',
                            type: 'boolean',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'boolean',
                              enum: [
                                true,
                                false
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            selectedItems: [0],
                            required: false
                          },
                          elements: {
                            enum: {
                              id: '#/one/two',
                              items: [
                                true,
                                false
                              ],
                              selectedItems: [0],
                              required: false
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `anyOf` (`properties` has an `object` type with a `boolean` type with `required`)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'object',
                properties: {
                  two: {
                    type: 'boolean',
                    anyOf: [
                      { const: true },
                      { const: false }
                    ]
                  }
                }
              }
            },
            required: [
              'one'
            ]
          }

          const values = {
            '#/one/two': '0'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/one/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'object',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          two: {
                            type: 'boolean',
                            anyOf: [
                              { const: true },
                              { const: false }
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: true
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            component: 'component',
                            type: 'boolean',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'boolean',
                              anyOf: [
                                { const: true },
                                { const: false }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            selectedItems: [0],
                            required: false
                          },
                          elements: {
                            anyOf: {
                              id: '#/one/two',
                              items: [
                                {
                                  meta: {
                                    type: 'boolean',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: true
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    required: false,
                                    value: 'true'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/0',
                                      required: false,
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
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/1',
                                    required: false,
                                    value: 'false'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/1',
                                      required: false,
                                      value: 'false'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [0],
                              required: false
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `oneOf` (`properties` has an `object` type with a `boolean` type with `required`)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'object',
                properties: {
                  two: {
                    type: 'boolean',
                    oneOf: [
                      { const: true },
                      { const: false }
                    ]
                  }
                }
              }
            },
            required: [
              'one'
            ]
          }

          const values = {
            '#/one/two': '0'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/one/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'object',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          two: {
                            type: 'boolean',
                            oneOf: [
                              { const: true },
                              { const: false }
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: true
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            component: 'component',
                            type: 'boolean',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'boolean',
                              oneOf: [
                                { const: true },
                                { const: false }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            selectedItems: [0],
                            required: false
                          },
                          elements: {
                            oneOf: {
                              id: '#/one/two',
                              items: [
                                {
                                  meta: {
                                    type: 'boolean',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: true
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    required: false,
                                    value: 'true'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/0',
                                      required: false,
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
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/1',
                                    required: false,
                                    value: 'false'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/1',
                                      required: false,
                                      value: 'false'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [0],
                              required: false
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `allOf` (`properties` has an `object` type with a `boolean` type with `required`)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'object',
                properties: {
                  two: {
                    type: 'boolean',
                    allOf: [
                      { const: true }
                    ]
                  }
                }
              }
            },
            required: [
              'one'
            ]
          }

          const values = {
            '#/one/two': 'true'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/one/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'object',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          two: {
                            type: 'boolean',
                            allOf: [
                              { const: true }
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: true
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            component: 'component',
                            type: 'boolean',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'boolean',
                              allOf: [
                                { const: true }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            required: false,
                            value: 'true'
                          },
                          elements: {
                            field: {
                              id: '#/one/two',
                              required: false,
                              value: 'true'
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        /*
         *  Null
         */
        it('transforms `object` type schemas with `enum` (`properties` has an `object` type with a `null` type)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'object',
                properties: {
                  two: {
                    type: 'null',
                    enum: [
                      null
                    ]
                  }
                }
              }
            }
          }

          const values = {
            '#/one/two': '0'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/one/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'object',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          two: {
                            type: 'null',
                            enum: [
                              null
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            component: 'component',
                            type: 'null',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'null',
                              enum: [
                                null
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            selectedItems: [0],
                            required: false
                          },
                          elements: {
                            enum: {
                              id: '#/one/two',
                              items: [
                                null
                              ],
                              selectedItems: [0],
                              required: false
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `anyOf` (`properties` has an `object` type with a `null` type)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'object',
                properties: {
                  two: {
                    type: 'null',
                    anyOf: [
                      { const: null }
                    ]
                  }
                }
              }
            }
          }

          const values = {
            '#/one/two': '0'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/one/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'object',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          two: {
                            type: 'null',
                            anyOf: [
                              { const: null }
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            component: 'component',
                            type: 'null',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'null',
                              anyOf: [
                                { const: null }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            selectedItems: [0],
                            required: false
                          },
                          elements: {
                            anyOf: {
                              id: '#/one/two',
                              items: [
                                {
                                  meta: {
                                    type: 'null',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: null
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    required: false,
                                    value: 'null'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/0',
                                      required: false,
                                      value: 'null'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [0],
                              required: false
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `oneOf` (`properties` has an `object` type with a `null` type)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'object',
                properties: {
                  two: {
                    type: 'null',
                    oneOf: [
                      { const: null }
                    ]
                  }
                }
              }
            }
          }

          const values = {
            '#/one/two': '0'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/one/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'object',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          two: {
                            type: 'null',
                            oneOf: [
                              { const: null }
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            component: 'component',
                            type: 'null',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'null',
                              oneOf: [
                                { const: null }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            selectedItems: [0],
                            required: false
                          },
                          elements: {
                            oneOf: {
                              id: '#/one/two',
                              items: [
                                {
                                  meta: {
                                    type: 'null',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: null
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    required: false,
                                    value: 'null'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/0',
                                      required: false,
                                      value: 'null'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [0],
                              required: false
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `allOf` (`properties` has an `object` type with a `null` type)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'object',
                properties: {
                  two: {
                    type: 'null',
                    allOf: [
                      { const: null }
                    ]
                  }
                }
              }
            }
          }

          const values = {
            '#/one/two': 'null'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/one/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'object',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          two: {
                            type: 'null',
                            allOf: [
                              { const: null }
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            component: 'component',
                            type: 'null',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'null',
                              allOf: [
                                { const: null }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            required: false,
                            value: 'null'
                          },
                          elements: {
                            field: {
                              id: '#/one/two',
                              required: false,
                              value: 'null'
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `enum` (`properties` has an `object` type with a `null` type with `required`)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'object',
                properties: {
                  two: {
                    type: 'null',
                    enum: [
                      null
                    ]
                  }
                }
              }
            },
            required: [
              'one'
            ]
          }

          const values = {
            '#/one/two': '0'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/one/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'object',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          two: {
                            type: 'null',
                            enum: [
                              null
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: true
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            component: 'component',
                            type: 'null',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'null',
                              enum: [
                                null
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            selectedItems: [0],
                            required: false
                          },
                          elements: {
                            enum: {
                              id: '#/one/two',
                              items: [
                                null
                              ],
                              selectedItems: [0],
                              required: false
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `anyOf` (`properties` has an `object` type with `null` type with `required`)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'object',
                properties: {
                  two: {
                    type: 'null',
                    anyOf: [
                      { const: null }
                    ]
                  }
                }
              }
            },
            required: [
              'one'
            ]
          }

          const values = {
            '#/one/two': '0'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/one/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'object',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          two: {
                            type: 'null',
                            anyOf: [
                              { const: null }
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: true
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            component: 'component',
                            type: 'null',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'null',
                              anyOf: [
                                { const: null }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            selectedItems: [0],
                            required: false
                          },
                          elements: {
                            anyOf: {
                              id: '#/one/two',
                              items: [
                                {
                                  meta: {
                                    type: 'null',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: null
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    required: false,
                                    value: 'null'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/0',
                                      required: false,
                                      value: 'null'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [0],
                              required: false
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `oneOf` (`properties` has an `object` type with a `null` type with `required`)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'object',
                properties: {
                  two: {
                    type: 'null',
                    oneOf: [
                      { const: null }
                    ]
                  }
                }
              }
            },
            required: [
              'one'
            ]
          }

          const values = {
            '#/one/two': '0'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/one/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'object',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          two: {
                            type: 'null',
                            oneOf: [
                              { const: null }
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: true
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            component: 'component',
                            type: 'null',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'null',
                              oneOf: [
                                { const: null }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            selectedItems: [0],
                            required: false
                          },
                          elements: {
                            oneOf: {
                              id: '#/one/two',
                              items: [
                                {
                                  meta: {
                                    type: 'null',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: null
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    required: false,
                                    value: 'null'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/0',
                                      required: false,
                                      value: 'null'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [0],
                              required: false
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `allOf` (`properties` has an `object` type with a `null` type with `required`)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'object',
                properties: {
                  two: {
                    type: 'null',
                    allOf: [
                      { const: null }
                    ]
                  }
                }
              }
            },
            required: [
              'one'
            ]
          }

          const values = {
            '#/one/two': 'null'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/one/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'object',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          two: {
                            type: 'null',
                            allOf: [
                              { const: null }
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: true
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            component: 'component',
                            type: 'null',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'null',
                              allOf: [
                                { const: null }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            required: false,
                            value: 'null'
                          },
                          elements: {
                            field: {
                              id: '#/one/two',
                              required: false,
                              value: 'null'
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
          const schema = {
            type: 'object',
            properties: {
              one: { type: 'string' },
              two: { type: 'string' }
            }
          }

          const values = {
            '#/one': 'string',
            '#/two': 'string'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'string',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'string'
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: false,
                      value: 'string'
                    },
                    elements: {
                      field: {
                        id: '#/one',
                        required: false,
                        value: 'string'
                      }
                    }
                  },
                  {
                    meta: {
                      component: 'component',
                      type: 'string',
                      name: 'two',
                      rootSchema: schema,
                      schema: {
                        type: 'string'
                      },
                      parentUri: '#/',
                      uri: '#/two',
                      required: false,
                      value: 'string'
                    },
                    elements: {
                      field: {
                        id: '#/two',
                        required: false,
                        value: 'string'
                      }
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas without `enum` or `anyOf` or `oneOf` or `allOf` (with `required`)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: { type: 'string' },
              two: { type: 'string' }
            },
            required: [
              'one'
            ]
          }

          const values = {
            '#/one': 'string',
            '#/two': 'string'
          }

          const params = {
            '#/': { meta: { component: 'component' } },
            '#/one': { meta: { component: 'component' } },
            '#/two': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'object',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      component: 'component',
                      type: 'string',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'string'
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: true,
                      value: 'string'
                    },
                    elements: {
                      field: {
                        id: '#/one',
                        required: true,
                        value: 'string'
                      }
                    }
                  },
                  {
                    meta: {
                      component: 'component',
                      type: 'string',
                      name: 'two',
                      rootSchema: schema,
                      schema: {
                        type: 'string'
                      },
                      parentUri: '#/',
                      uri: '#/two',
                      required: false,
                      value: 'string'
                    },
                    elements: {
                      field: {
                        id: '#/two',
                        required: false,
                        value: 'string'
                      }
                    }
                  }
                ]
              }
            })
        })
      })
    })
  })
})
