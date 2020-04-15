import debug from 'debug'

import { expect } from 'chai'

import transform from 'shinkansen-transmission/transmission/to-zashiki'

describe('shinkansen-transmission/transmission/to-zashiki', () => {
  before(() => debug.disable()) // enable('shinkansen-transmission:to-zashiki'))

  describe('Without values', () => {
    describe('Without params', () => {
      describe('Transforming `array` type schemas', () => {
        /*
         *  String
         */
        it('transforms `array` type schemas with `enum` (`items` is an array of `string` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'string',
                enum: [
                  'string (1)',
                  'string (2)',
                  'string (3)'
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'string',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'string',
                        enum: [
                          'string (1)',
                          'string (2)',
                          'string (3)'
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      selectedItems: [],
                      required: false
                    },
                    elements: {
                      enum: {
                        id: '#/0',
                        items: [
                          'string (1)',
                          'string (2)',
                          'string (3)'
                        ],
                        selectedItems: [],
                        required: false
                      }
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `anyOf` (`items` is an array of `string` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'string',
                anyOf: [
                  { const: 'string (1)' },
                  { const: 'string (2)' },
                  { const: 'string (3)' }
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'string',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'string',
                        anyOf: [
                          { const: 'string (1)' },
                          { const: 'string (2)' },
                          { const: 'string (3)' }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      selectedItems: [],
                      required: false
                    },
                    elements: {
                      anyOf: {
                        id: '#/0',
                        items: [
                          {
                            meta: {
                              type: 'string',
                              item: 0,
                              rootSchema: schema,
                              schema: {
                                const: 'string (1)'
                              },
                              parentUri: '#/0',
                              uri: '#/0/0',
                              required: false,
                              value: 'string (1)'
                            },
                            elements: {
                              field: {
                                id: '#/0/0',
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
                              parentUri: '#/0',
                              uri: '#/0/1',
                              required: false,
                              value: 'string (2)'
                            },
                            elements: {
                              field: {
                                id: '#/0/1',
                                required: false,
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
                              parentUri: '#/0',
                              uri: '#/0/2',
                              required: false,
                              value: 'string (3)'
                            },
                            elements: {
                              field: {
                                id: '#/0/2',
                                required: false,
                                value: 'string (3)'
                              }
                            }
                          }
                        ],
                        selectedItems: [],
                        required: false
                      }
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `oneOf` (`items` is an array of `string` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'string',
                oneOf: [
                  { const: 'string (1)' },
                  { const: 'string (2)' },
                  { const: 'string (3)' }
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'string',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'string',
                        oneOf: [
                          { const: 'string (1)' },
                          { const: 'string (2)' },
                          { const: 'string (3)' }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      selectedItems: [],
                      required: false
                    },
                    elements: {
                      oneOf: {
                        id: '#/0',
                        items: [
                          {
                            meta: {
                              type: 'string',
                              item: 0,
                              rootSchema: schema,
                              schema: {
                                const: 'string (1)'
                              },
                              parentUri: '#/0',
                              uri: '#/0/0',
                              required: false,
                              value: 'string (1)'
                            },
                            elements: {
                              field: {
                                id: '#/0/0',
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
                              parentUri: '#/0',
                              uri: '#/0/1',
                              required: false,
                              value: 'string (2)'
                            },
                            elements: {
                              field: {
                                id: '#/0/1',
                                required: false,
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
                              parentUri: '#/0',
                              uri: '#/0/2',
                              required: false,
                              value: 'string (3)'
                            },
                            elements: {
                              field: {
                                id: '#/0/2',
                                required: false,
                                value: 'string (3)'
                              }
                            }
                          }
                        ],
                        selectedItems: [],
                        required: false
                      }
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `allOf` (`items` is an array of `string` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'string',
                allOf: [
                  { minLength: 1 },
                  {
                    const: 'string',
                    maxLength: 100
                  }
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'string',
                      item: 0,
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
                      parentUri: '#/',
                      uri: '#/0',
                      minLength: 1,
                      maxLength: 100,
                      required: false,
                      value: 'string'
                    },
                    elements: {
                      field: {
                        id: '#/0',
                        minLength: 1,
                        maxLength: 100,
                        required: false,
                        value: 'string'
                      }
                    }
                  }
                ]
              }
            })
        })

        /*
         *  Number
         */
        it('transforms `array` type schemas with `enum` (`items` is an array of `number` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'number',
                enum: [
                  1,
                  2,
                  3
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'number',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'number',
                        enum: [
                          1,
                          2,
                          3
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      selectedItems: [],
                      required: false
                    },
                    elements: {
                      enum: {
                        id: '#/0',
                        items: [
                          1,
                          2,
                          3
                        ],
                        selectedItems: [],
                        required: false
                      }
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `anyOf` (`items` is an array of `number` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'number',
                anyOf: [
                  { const: 1 },
                  { const: 2 },
                  { const: 3 }
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'number',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'number',
                        anyOf: [
                          { const: 1 },
                          { const: 2 },
                          { const: 3 }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      selectedItems: [],
                      required: false
                    },
                    elements: {
                      anyOf: {
                        id: '#/0',
                        items: [
                          {
                            meta: {
                              type: 'number',
                              item: 0,
                              rootSchema: schema,
                              schema: {
                                const: 1
                              },
                              parentUri: '#/0',
                              uri: '#/0/0',
                              required: false,
                              value: '1'
                            },
                            elements: {
                              field: {
                                id: '#/0/0',
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
                              parentUri: '#/0',
                              uri: '#/0/1',
                              required: false,
                              value: '2'
                            },
                            elements: {
                              field: {
                                id: '#/0/1',
                                required: false,
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
                              parentUri: '#/0',
                              uri: '#/0/2',
                              required: false,
                              value: '3'
                            },
                            elements: {
                              field: {
                                id: '#/0/2',
                                required: false,
                                value: '3'
                              }
                            }
                          }
                        ],
                        selectedItems: [],
                        required: false
                      }
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `oneOf` (`items` is an array of `number` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'number',
                oneOf: [
                  { const: 1 },
                  { const: 2 },
                  { const: 3 }
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'number',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'number',
                        oneOf: [
                          { const: 1 },
                          { const: 2 },
                          { const: 3 }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      selectedItems: [],
                      required: false
                    },
                    elements: {
                      oneOf: {
                        id: '#/0',
                        items: [
                          {
                            meta: {
                              type: 'number',
                              item: 0,
                              rootSchema: schema,
                              schema: {
                                const: 1
                              },
                              parentUri: '#/0',
                              uri: '#/0/0',
                              required: false,
                              value: '1'
                            },
                            elements: {
                              field: {
                                id: '#/0/0',
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
                              parentUri: '#/0',
                              uri: '#/0/1',
                              required: false,
                              value: '2'
                            },
                            elements: {
                              field: {
                                id: '#/0/1',
                                required: false,
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
                              parentUri: '#/0',
                              uri: '#/0/2',
                              required: false,
                              value: '3'
                            },
                            elements: {
                              field: {
                                id: '#/0/2',
                                required: false,
                                value: '3'
                              }
                            }
                          }
                        ],
                        selectedItems: [],
                        required: false
                      }
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `allOf` (`items` is an array of `number` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'number',
                allOf: [
                  { minimum: 1 },
                  {
                    const: 2,
                    maximum: 3
                  }
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'number',
                      item: 0,
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
                      parentUri: '#/',
                      uri: '#/0',
                      min: 1,
                      max: 3,
                      required: false,
                      value: '2'
                    },
                    elements: {
                      field: {
                        id: '#/0',
                        min: 1,
                        max: 3,
                        required: false,
                        value: '2'
                      }
                    }
                  }
                ]
              }
            })
        })

        /*
         *  Array
         */
        it('transforms `array` type schemas with `enum` (`items` is an array and `items` is an array of `string` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: [
                  {
                    type: 'string',
                    enum: [
                      'string (1)',
                      'string (2)',
                      'string (3)'
                    ]
                  }
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'string',
                            enum: [
                              'string (1)',
                              'string (2)',
                              'string (3)'
                            ]
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'string',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'string',
                              enum: [
                                'string (1)',
                                'string (2)',
                                'string (3)'
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            enum: {
                              id: '#/0/0',
                              items: [
                                'string (1)',
                                'string (2)',
                                'string (3)'
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `anyOf` (`items` is an array and `items` is an array of `string` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: [
                  {
                    type: 'string',
                    anyOf: [
                      { const: 'string (1)' },
                      { const: 'string (2)' },
                      { const: 'string (3)' }
                    ]
                  }
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'string',
                            anyOf: [
                              { const: 'string (1)' },
                              { const: 'string (2)' },
                              { const: 'string (3)' }
                            ]
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'string',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'string',
                              anyOf: [
                                { const: 'string (1)' },
                                { const: 'string (2)' },
                                { const: 'string (3)' }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            anyOf: {
                              id: '#/0/0',
                              items: [
                                {
                                  meta: {
                                    type: 'string',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: 'string (1)'
                                    },
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/0',
                                    required: false,
                                    value: 'string (1)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/0',
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
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/1',
                                    required: false,
                                    value: 'string (2)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/1',
                                      required: false,
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
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/2',
                                    required: false,
                                    value: 'string (3)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/2',
                                      required: false,
                                      value: 'string (3)'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `oneOf` (`items` is an array and `items` is an array of `string` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: [
                  {
                    type: 'string',
                    oneOf: [
                      { const: 'string (1)' },
                      { const: 'string (2)' },
                      { const: 'string (3)' }
                    ]
                  }
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'string',
                            oneOf: [
                              { const: 'string (1)' },
                              { const: 'string (2)' },
                              { const: 'string (3)' }
                            ]
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'string',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'string',
                              oneOf: [
                                { const: 'string (1)' },
                                { const: 'string (2)' },
                                { const: 'string (3)' }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            oneOf: {
                              id: '#/0/0',
                              items: [
                                {
                                  meta: {
                                    type: 'string',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: 'string (1)'
                                    },
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/0',
                                    required: false,
                                    value: 'string (1)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/0',
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
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/1',
                                    required: false,
                                    value: 'string (2)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/1',
                                      required: false,
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
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/2',
                                    required: false,
                                    value: 'string (3)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/2',
                                      required: false,
                                      value: 'string (3)'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `allOf` (`items` is an array and `items` is an array of `string` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: [
                  {
                    type: 'string',
                    allOf: [
                      { minLength: 1 },
                      {
                        const: 'string',
                        maxLength: 100
                      }
                    ]
                  }
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'string',
                            allOf: [
                              { minLength: 1 },
                              {
                                const: 'string',
                                maxLength: 100
                              }
                            ]
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'string',
                            item: 0,
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
                            parentUri: '#/0',
                            uri: '#/0/0',
                            minLength: 1,
                            maxLength: 100,
                            required: false,
                            value: 'string'
                          },
                          elements: {
                            field: {
                              id: '#/0/0',
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

        it('transforms `array` type schemas with `enum` (`items` is an array and `items` is an array of `number` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: [
                  {
                    type: 'number',
                    enum: [
                      1,
                      2,
                      3
                    ]
                  }
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'number',
                            enum: [
                              1,
                              2,
                              3
                            ]
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'number',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'number',
                              enum: [
                                1,
                                2,
                                3
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            enum: {
                              id: '#/0/0',
                              items: [
                                1,
                                2,
                                3
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `anyOf` (`items` is an array and `items` is an array of `number` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: [
                  {
                    type: 'number',
                    anyOf: [
                      { const: 1 },
                      { const: 2 },
                      { const: 3 }
                    ]
                  }
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'number',
                            anyOf: [
                              { const: 1 },
                              { const: 2 },
                              { const: 3 }
                            ]
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'number',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'number',
                              anyOf: [
                                { const: 1 },
                                { const: 2 },
                                { const: 3 }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            anyOf: {
                              id: '#/0/0',
                              items: [
                                {
                                  meta: {
                                    type: 'number',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: 1
                                    },
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/0',
                                    required: false,
                                    value: '1'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/0',
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
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/1',
                                    required: false,
                                    value: '2'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/1',
                                      required: false,
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
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/2',
                                    required: false,
                                    value: '3'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/2',
                                      required: false,
                                      value: '3'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `oneOf` (`items` is an array and `items` is an array of `number` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: [
                  {
                    type: 'number',
                    oneOf: [
                      { const: 1 },
                      { const: 2 },
                      { const: 3 }
                    ]
                  }
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'number',
                            oneOf: [
                              { const: 1 },
                              { const: 2 },
                              { const: 3 }
                            ]
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'number',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'number',
                              oneOf: [
                                { const: 1 },
                                { const: 2 },
                                { const: 3 }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            oneOf: {
                              id: '#/0/0',
                              items: [
                                {
                                  meta: {
                                    type: 'number',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: 1
                                    },
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/0',
                                    required: false,
                                    value: '1'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/0',
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
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/1',
                                    required: false,
                                    value: '2'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/1',
                                      required: false,
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
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/2',
                                    required: false,
                                    value: '3'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/2',
                                      required: false,
                                      value: '3'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `allOf` (`items` is an array and `items` is an array of `number` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: [
                  {
                    type: 'number',
                    allOf: [
                      { minimum: 1 },
                      {
                        const: 2,
                        maximum: 3
                      }
                    ]
                  }
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'number',
                            allOf: [
                              { minimum: 1 },
                              {
                                const: 2,
                                maximum: 3
                              }
                            ]
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'number',
                            item: 0,
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
                            parentUri: '#/0',
                            uri: '#/0/0',
                            min: 1,
                            max: 3,
                            required: false,
                            value: '2'
                          },
                          elements: {
                            field: {
                              id: '#/0/0',
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

        it('transforms `array` type schemas with `enum` (`items` is an array and `items` is an array of `boolean` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: [
                  {
                    type: 'boolean',
                    enum: [
                      true,
                      false
                    ]
                  }
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'boolean',
                            enum: [
                              true,
                              false
                            ]
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'boolean',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'boolean',
                              enum: [
                                true,
                                false
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            enum: {
                              id: '#/0/0',
                              items: [
                                true,
                                false
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `anyOf` (`items` is an array and `items` is an array of `boolean` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: [
                  {
                    type: 'boolean',
                    anyOf: [
                      { const: true },
                      { const: false }
                    ]
                  }
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'boolean',
                            anyOf: [
                              { const: true },
                              { const: false }
                            ]
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'boolean',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'boolean',
                              anyOf: [
                                { const: true },
                                { const: false }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            anyOf: {
                              id: '#/0/0',
                              items: [
                                {
                                  meta: {
                                    type: 'boolean',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: true
                                    },
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/0',
                                    required: false,
                                    value: 'true'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/0',
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
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/1',
                                    required: false,
                                    value: 'false'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/1',
                                      required: false,
                                      value: 'false'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `oneOf` (`items` is an array and `items` is an array of `boolean` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: [
                  {
                    type: 'boolean',
                    oneOf: [
                      { const: true },
                      { const: false }
                    ]
                  }
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'boolean',
                            oneOf: [
                              { const: true },
                              { const: false }
                            ]
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'boolean',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'boolean',
                              oneOf: [
                                { const: true },
                                { const: false }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            oneOf: {
                              id: '#/0/0',
                              items: [
                                {
                                  meta: {
                                    type: 'boolean',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: true
                                    },
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/0',
                                    required: false,
                                    value: 'true'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/0',
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
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/1',
                                    required: false,
                                    value: 'false'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/1',
                                      required: false,
                                      value: 'false'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `allOf` (`items` is an array and `items` is an array of `boolean` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: [
                  {
                    type: 'boolean',
                    allOf: [
                      { const: true }
                    ]
                  }
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'boolean',
                            allOf: [
                              { const: true }
                            ]
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'boolean',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'boolean',
                              allOf: [
                                { const: true }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false,
                            value: 'true'
                          },
                          elements: {
                            field: {
                              id: '#/0/0',
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

        it('transforms `array` type schemas with `enum` (`items` is an array and `items` is an array of `null` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: [
                  {
                    type: 'null',
                    enum: [
                      null
                    ]
                  }
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'null',
                            enum: [
                              null
                            ]
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'null',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'null',
                              enum: [
                                null
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            enum: {
                              id: '#/0/0',
                              items: [
                                null
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `anyOf` (`items` is an array and `items` is an array of `null` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: [
                  {
                    type: 'null',
                    anyOf: [
                      { const: null }
                    ]
                  }
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'null',
                            anyOf: [
                              { const: null }
                            ]
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'null',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'null',
                              anyOf: [
                                { const: null }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            anyOf: {
                              id: '#/0/0',
                              items: [
                                {
                                  meta: {
                                    type: 'null',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: null
                                    },
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/0',
                                    required: false,
                                    value: 'null'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/0',
                                      required: false,
                                      value: 'null'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `oneOf` (`items` is an array and `items` is an array of `null` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: [
                  {
                    type: 'null',
                    oneOf: [
                      { const: null }
                    ]
                  }
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'null',
                            oneOf: [
                              { const: null }
                            ]
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'null',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'null',
                              oneOf: [
                                { const: null }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            oneOf: {
                              id: '#/0/0',
                              items: [
                                {
                                  meta: {
                                    type: 'null',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: null
                                    },
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/0',
                                    required: false,
                                    value: 'null'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/0',
                                      required: false,
                                      value: 'null'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `allOf` (`items` is an array and `items` is an array of `null` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: [
                  {
                    type: 'null',
                    allOf: [
                      { const: null }
                    ]
                  }
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'null',
                            allOf: [
                              { const: null }
                            ]
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'null',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'null',
                              allOf: [
                                { const: null }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false,
                            value: 'null'
                          },
                          elements: {
                            field: {
                              id: '#/0/0',
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

        it('transforms `array` type schemas with `enum` (`items` is an array and `items` is an array of `object` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: [
                  {
                    type: 'object',
                    properties: {
                      one: {
                        type: 'string',
                        enum: [
                          'string (1)',
                          'string (2)',
                          'string (3)'
                        ]
                      },
                      two: {
                        type: 'number',
                        enum: [
                          1,
                          2,
                          3
                        ]
                      }
                    }
                  }
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'object',
                            properties: {
                              one: {
                                type: 'string',
                                enum: [
                                  'string (1)',
                                  'string (2)',
                                  'string (3)'
                                ]
                              },
                              two: {
                                type: 'number',
                                enum: [
                                  1,
                                  2,
                                  3
                                ]
                              }
                            }
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'object',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'object',
                              properties: {
                                one: {
                                  type: 'string',
                                  enum: [
                                    'string (1)',
                                    'string (2)',
                                    'string (3)'
                                  ]
                                },
                                two: {
                                  type: 'number',
                                  enum: [
                                    1,
                                    2,
                                    3
                                  ]
                                }
                              }
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            fields: [
                              {
                                meta: {
                                  type: 'string',
                                  name: 'one',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'string',
                                    enum: [
                                      'string (1)',
                                      'string (2)',
                                      'string (3)'
                                    ]
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/one',
                                  selectedItems: [],
                                  required: false
                                },
                                elements: {
                                  enum: {
                                    id: '#/0/0/one',
                                    items: [
                                      'string (1)',
                                      'string (2)',
                                      'string (3)'
                                    ],
                                    selectedItems: [],
                                    required: false
                                  }
                                }
                              },
                              {
                                meta: {
                                  type: 'number',
                                  name: 'two',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'number',
                                    enum: [
                                      1,
                                      2,
                                      3
                                    ]
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/two',
                                  selectedItems: [],
                                  required: false
                                },
                                elements: {
                                  enum: {
                                    id: '#/0/0/two',
                                    items: [
                                      1,
                                      2,
                                      3
                                    ],
                                    selectedItems: [],
                                    required: false
                                  }
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `anyOf` (`items` is an array and `items` is an array of `object` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: [
                  {
                    type: 'object',
                    properties: {
                      one: {
                        type: 'string',
                        anyOf: [
                          { const: 'string (1)' },
                          { const: 'string (2)' },
                          { const: 'string (3)' }
                        ]
                      },
                      two: {
                        type: 'number',
                        anyOf: [
                          { const: 1 },
                          { const: 2 },
                          { const: 3 }
                        ]
                      }
                    }
                  }
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'object',
                            properties: {
                              one: {
                                type: 'string',
                                anyOf: [
                                  { const: 'string (1)' },
                                  { const: 'string (2)' },
                                  { const: 'string (3)' }
                                ]
                              },
                              two: {
                                type: 'number',
                                anyOf: [
                                  { const: 1 },
                                  { const: 2 },
                                  { const: 3 }
                                ]
                              }
                            }
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'object',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'object',
                              properties: {
                                one: {
                                  type: 'string',
                                  anyOf: [
                                    { const: 'string (1)' },
                                    { const: 'string (2)' },
                                    { const: 'string (3)' }
                                  ]
                                },
                                two: {
                                  type: 'number',
                                  anyOf: [
                                    { const: 1 },
                                    { const: 2 },
                                    { const: 3 }
                                  ]
                                }
                              }
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            fields: [
                              {
                                meta: {
                                  type: 'string',
                                  name: 'one',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'string',
                                    anyOf: [
                                      { const: 'string (1)' },
                                      { const: 'string (2)' },
                                      { const: 'string (3)' }
                                    ]
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/one',
                                  selectedItems: [],
                                  required: false
                                },
                                elements: {
                                  anyOf: {
                                    id: '#/0/0/one',
                                    items: [
                                      {
                                        meta: {
                                          type: 'string',
                                          item: 0,
                                          rootSchema: schema,
                                          schema: {
                                            const: 'string (1)'
                                          },
                                          parentUri: '#/0/0/one',
                                          uri: '#/0/0/one/0',
                                          required: false,
                                          value: 'string (1)'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/one/0',
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
                                          parentUri: '#/0/0/one',
                                          uri: '#/0/0/one/1',
                                          required: false,
                                          value: 'string (2)'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/one/1',
                                            required: false,
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
                                          parentUri: '#/0/0/one',
                                          uri: '#/0/0/one/2',
                                          required: false,
                                          value: 'string (3)'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/one/2',
                                            required: false,
                                            value: 'string (3)'
                                          }
                                        }
                                      }
                                    ],
                                    selectedItems: [],
                                    required: false
                                  }
                                }
                              },
                              {
                                meta: {
                                  type: 'number',
                                  name: 'two',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'number',
                                    anyOf: [
                                      { const: 1 },
                                      { const: 2 },
                                      { const: 3 }
                                    ]
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/two',
                                  selectedItems: [],
                                  required: false
                                },
                                elements: {
                                  anyOf: {
                                    id: '#/0/0/two',
                                    items: [
                                      {
                                        meta: {
                                          type: 'number',
                                          item: 0,
                                          rootSchema: schema,
                                          schema: {
                                            const: 1
                                          },
                                          parentUri: '#/0/0/two',
                                          uri: '#/0/0/two/0',
                                          required: false,
                                          value: '1'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/two/0',
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
                                          parentUri: '#/0/0/two',
                                          uri: '#/0/0/two/1',
                                          required: false,
                                          value: '2'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/two/1',
                                            required: false,
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
                                          parentUri: '#/0/0/two',
                                          uri: '#/0/0/two/2',
                                          required: false,
                                          value: '3'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/two/2',
                                            required: false,
                                            value: '3'
                                          }
                                        }
                                      }
                                    ],
                                    selectedItems: [],
                                    required: false
                                  }
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `oneOf` (`items` is an array and `items` is an array of `object` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: [
                  {
                    type: 'object',
                    properties: {
                      one: {
                        type: 'string',
                        oneOf: [
                          { const: 'string (1)' },
                          { const: 'string (2)' },
                          { const: 'string (3)' }
                        ]
                      },
                      two: {
                        type: 'number',
                        oneOf: [
                          { const: 1 },
                          { const: 2 },
                          { const: 3 }
                        ]
                      }
                    }
                  }
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'object',
                            properties: {
                              one: {
                                type: 'string',
                                oneOf: [
                                  { const: 'string (1)' },
                                  { const: 'string (2)' },
                                  { const: 'string (3)' }
                                ]
                              },
                              two: {
                                type: 'number',
                                oneOf: [
                                  { const: 1 },
                                  { const: 2 },
                                  { const: 3 }
                                ]
                              }
                            }
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'object',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'object',
                              properties: {
                                one: {
                                  type: 'string',
                                  oneOf: [
                                    { const: 'string (1)' },
                                    { const: 'string (2)' },
                                    { const: 'string (3)' }
                                  ]
                                },
                                two: {
                                  type: 'number',
                                  oneOf: [
                                    { const: 1 },
                                    { const: 2 },
                                    { const: 3 }
                                  ]
                                }
                              }
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            fields: [
                              {
                                meta: {
                                  type: 'string',
                                  name: 'one',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'string',
                                    oneOf: [
                                      { const: 'string (1)' },
                                      { const: 'string (2)' },
                                      { const: 'string (3)' }
                                    ]
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/one',
                                  selectedItems: [],
                                  required: false
                                },
                                elements: {
                                  oneOf: {
                                    id: '#/0/0/one',
                                    items: [
                                      {
                                        meta: {
                                          type: 'string',
                                          item: 0,
                                          rootSchema: schema,
                                          schema: {
                                            const: 'string (1)'
                                          },
                                          parentUri: '#/0/0/one',
                                          uri: '#/0/0/one/0',
                                          required: false,
                                          value: 'string (1)'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/one/0',
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
                                          parentUri: '#/0/0/one',
                                          uri: '#/0/0/one/1',
                                          required: false,
                                          value: 'string (2)'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/one/1',
                                            required: false,
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
                                          parentUri: '#/0/0/one',
                                          uri: '#/0/0/one/2',
                                          required: false,
                                          value: 'string (3)'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/one/2',
                                            required: false,
                                            value: 'string (3)'
                                          }
                                        }
                                      }
                                    ],
                                    selectedItems: [],
                                    required: false
                                  }
                                }
                              },
                              {
                                meta: {
                                  type: 'number',
                                  name: 'two',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'number',
                                    oneOf: [
                                      { const: 1 },
                                      { const: 2 },
                                      { const: 3 }
                                    ]
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/two',
                                  selectedItems: [],
                                  required: false
                                },
                                elements: {
                                  oneOf: {
                                    id: '#/0/0/two',
                                    items: [
                                      {
                                        meta: {
                                          type: 'number',
                                          item: 0,
                                          rootSchema: schema,
                                          schema: {
                                            const: 1
                                          },
                                          parentUri: '#/0/0/two',
                                          uri: '#/0/0/two/0',
                                          required: false,
                                          value: '1'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/two/0',
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
                                          parentUri: '#/0/0/two',
                                          uri: '#/0/0/two/1',
                                          required: false,
                                          value: '2'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/two/1',
                                            required: false,
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
                                          parentUri: '#/0/0/two',
                                          uri: '#/0/0/two/2',
                                          required: false,
                                          value: '3'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/two/2',
                                            required: false,
                                            value: '3'
                                          }
                                        }
                                      }
                                    ],
                                    selectedItems: [],
                                    required: false
                                  }
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `allOf` (`items` is an array and `items` is an array of `object` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: [
                  {
                    type: 'object',
                    properties: {
                      one: {
                        type: 'string',
                        allOf: [
                          { minLength: 1 },
                          {
                            const: 'string',
                            maxLength: 100
                          }
                        ]
                      },
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
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'object',
                            properties: {
                              one: {
                                type: 'string',
                                allOf: [
                                  { minLength: 1 },
                                  {
                                    const: 'string',
                                    maxLength: 100
                                  }
                                ]
                              },
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
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'object',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'object',
                              properties: {
                                one: {
                                  type: 'string',
                                  allOf: [
                                    { minLength: 1 },
                                    {
                                      const: 'string',
                                      maxLength: 100
                                    }
                                  ]
                                },
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
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            fields: [
                              {
                                meta: {
                                  type: 'string',
                                  name: 'one',
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
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/one',
                                  minLength: 1,
                                  maxLength: 100,
                                  required: false,
                                  value: 'string'
                                },
                                elements: {
                                  field: {
                                    id: '#/0/0/one',
                                    minLength: 1,
                                    maxLength: 100,
                                    required: false,
                                    value: 'string'
                                  }
                                }
                              },
                              {
                                meta: {
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
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/two',
                                  min: 1,
                                  max: 3,
                                  required: false,
                                  value: '2'
                                },
                                elements: {
                                  field: {
                                    id: '#/0/0/two',
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
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `enum` (`items` is an array and `items` is an array of `object` type with `required`)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: [
                  {
                    type: 'object',
                    properties: {
                      one: {
                        type: 'string',
                        enum: [
                          'string (1)',
                          'string (2)',
                          'string (3)'
                        ]
                      },
                      two: {
                        type: 'number',
                        enum: [
                          1,
                          2,
                          3
                        ]
                      }
                    },
                    required: [
                      'one'
                    ]
                  }
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'object',
                            properties: {
                              one: {
                                type: 'string',
                                enum: [
                                  'string (1)',
                                  'string (2)',
                                  'string (3)'
                                ]
                              },
                              two: {
                                type: 'number',
                                enum: [
                                  1,
                                  2,
                                  3
                                ]
                              }
                            },
                            required: [
                              'one'
                            ]
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'object',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'object',
                              properties: {
                                one: {
                                  type: 'string',
                                  enum: [
                                    'string (1)',
                                    'string (2)',
                                    'string (3)'
                                  ]
                                },
                                two: {
                                  type: 'number',
                                  enum: [
                                    1,
                                    2,
                                    3
                                  ]
                                }
                              },
                              required: [
                                'one'
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            fields: [
                              {
                                meta: {
                                  type: 'string',
                                  name: 'one',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'string',
                                    enum: [
                                      'string (1)',
                                      'string (2)',
                                      'string (3)'
                                    ]
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/one',
                                  selectedItems: [],
                                  required: true
                                },
                                elements: {
                                  enum: {
                                    id: '#/0/0/one',
                                    items: [
                                      'string (1)',
                                      'string (2)',
                                      'string (3)'
                                    ],
                                    selectedItems: [],
                                    required: true
                                  }
                                }
                              },
                              {
                                meta: {
                                  type: 'number',
                                  name: 'two',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'number',
                                    enum: [
                                      1,
                                      2,
                                      3
                                    ]
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/two',
                                  selectedItems: [],
                                  required: false
                                },
                                elements: {
                                  enum: {
                                    id: '#/0/0/two',
                                    items: [
                                      1,
                                      2,
                                      3
                                    ],
                                    selectedItems: [],
                                    required: false
                                  }
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `anyOf` (`items` is an array and `items` is an array of `object` type with `required`)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: [
                  {
                    type: 'object',
                    properties: {
                      one: {
                        type: 'string',
                        anyOf: [
                          { const: 'string (1)' },
                          { const: 'string (2)' },
                          { const: 'string (3)' }
                        ]
                      },
                      two: {
                        type: 'number',
                        anyOf: [
                          { const: 1 },
                          { const: 2 },
                          { const: 3 }
                        ]
                      }
                    },
                    required: [
                      'one'
                    ]
                  }
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'object',
                            properties: {
                              one: {
                                type: 'string',
                                anyOf: [
                                  { const: 'string (1)' },
                                  { const: 'string (2)' },
                                  { const: 'string (3)' }
                                ]
                              },
                              two: {
                                type: 'number',
                                anyOf: [
                                  { const: 1 },
                                  { const: 2 },
                                  { const: 3 }
                                ]
                              }
                            },
                            required: [
                              'one'
                            ]
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'object',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'object',
                              properties: {
                                one: {
                                  type: 'string',
                                  anyOf: [
                                    { const: 'string (1)' },
                                    { const: 'string (2)' },
                                    { const: 'string (3)' }
                                  ]
                                },
                                two: {
                                  type: 'number',
                                  anyOf: [
                                    { const: 1 },
                                    { const: 2 },
                                    { const: 3 }
                                  ]
                                }
                              },
                              required: [
                                'one'
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            fields: [
                              {
                                meta: {
                                  type: 'string',
                                  name: 'one',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'string',
                                    anyOf: [
                                      { const: 'string (1)' },
                                      { const: 'string (2)' },
                                      { const: 'string (3)' }
                                    ]
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/one',
                                  selectedItems: [],
                                  required: true
                                },
                                elements: {
                                  anyOf: {
                                    id: '#/0/0/one',
                                    items: [
                                      {
                                        meta: {
                                          type: 'string',
                                          item: 0,
                                          rootSchema: schema,
                                          schema: {
                                            const: 'string (1)'
                                          },
                                          parentUri: '#/0/0/one',
                                          uri: '#/0/0/one/0',
                                          required: true,
                                          value: 'string (1)'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/one/0',
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
                                          parentUri: '#/0/0/one',
                                          uri: '#/0/0/one/1',
                                          required: true,
                                          value: 'string (2)'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/one/1',
                                            required: true,
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
                                          parentUri: '#/0/0/one',
                                          uri: '#/0/0/one/2',
                                          required: true,
                                          value: 'string (3)'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/one/2',
                                            required: true,
                                            value: 'string (3)'
                                          }
                                        }
                                      }
                                    ],
                                    selectedItems: [],
                                    required: true
                                  }
                                }
                              },
                              {
                                meta: {
                                  type: 'number',
                                  name: 'two',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'number',
                                    anyOf: [
                                      { const: 1 },
                                      { const: 2 },
                                      { const: 3 }
                                    ]
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/two',
                                  selectedItems: [],
                                  required: false
                                },
                                elements: {
                                  anyOf: {
                                    id: '#/0/0/two',
                                    items: [
                                      {
                                        meta: {
                                          type: 'number',
                                          item: 0,
                                          rootSchema: schema,
                                          schema: {
                                            const: 1
                                          },
                                          parentUri: '#/0/0/two',
                                          uri: '#/0/0/two/0',
                                          required: false,
                                          value: '1'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/two/0',
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
                                          parentUri: '#/0/0/two',
                                          uri: '#/0/0/two/1',
                                          required: false,
                                          value: '2'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/two/1',
                                            required: false,
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
                                          parentUri: '#/0/0/two',
                                          uri: '#/0/0/two/2',
                                          required: false,
                                          value: '3'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/two/2',
                                            required: false,
                                            value: '3'
                                          }
                                        }
                                      }
                                    ],
                                    selectedItems: [],
                                    required: false
                                  }
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `oneOf` (`items` is an array and `items` is an array of `object` type with `required`)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: [
                  {
                    type: 'object',
                    properties: {
                      one: {
                        type: 'string',
                        oneOf: [
                          { const: 'string (1)' },
                          { const: 'string (2)' },
                          { const: 'string (3)' }
                        ]
                      },
                      two: {
                        type: 'number',
                        oneOf: [
                          { const: 1 },
                          { const: 2 },
                          { const: 3 }
                        ]
                      }
                    },
                    required: [
                      'one'
                    ]
                  }
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'object',
                            properties: {
                              one: {
                                type: 'string',
                                oneOf: [
                                  { const: 'string (1)' },
                                  { const: 'string (2)' },
                                  { const: 'string (3)' }
                                ]
                              },
                              two: {
                                type: 'number',
                                oneOf: [
                                  { const: 1 },
                                  { const: 2 },
                                  { const: 3 }
                                ]
                              }
                            },
                            required: [
                              'one'
                            ]
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'object',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'object',
                              properties: {
                                one: {
                                  type: 'string',
                                  oneOf: [
                                    { const: 'string (1)' },
                                    { const: 'string (2)' },
                                    { const: 'string (3)' }
                                  ]
                                },
                                two: {
                                  type: 'number',
                                  oneOf: [
                                    { const: 1 },
                                    { const: 2 },
                                    { const: 3 }
                                  ]
                                }
                              },
                              required: [
                                'one'
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            fields: [
                              {
                                meta: {
                                  type: 'string',
                                  name: 'one',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'string',
                                    oneOf: [
                                      { const: 'string (1)' },
                                      { const: 'string (2)' },
                                      { const: 'string (3)' }
                                    ]
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/one',
                                  selectedItems: [],
                                  required: true
                                },
                                elements: {
                                  oneOf: {
                                    id: '#/0/0/one',
                                    items: [
                                      {
                                        meta: {
                                          type: 'string',
                                          item: 0,
                                          rootSchema: schema,
                                          schema: {
                                            const: 'string (1)'
                                          },
                                          parentUri: '#/0/0/one',
                                          uri: '#/0/0/one/0',
                                          required: true,
                                          value: 'string (1)'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/one/0',
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
                                          parentUri: '#/0/0/one',
                                          uri: '#/0/0/one/1',
                                          required: true,
                                          value: 'string (2)'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/one/1',
                                            required: true,
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
                                          parentUri: '#/0/0/one',
                                          uri: '#/0/0/one/2',
                                          required: true,
                                          value: 'string (3)'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/one/2',
                                            required: true,
                                            value: 'string (3)'
                                          }
                                        }
                                      }
                                    ],
                                    selectedItems: [],
                                    required: true
                                  }
                                }
                              },
                              {
                                meta: {
                                  type: 'number',
                                  name: 'two',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'number',
                                    oneOf: [
                                      { const: 1 },
                                      { const: 2 },
                                      { const: 3 }
                                    ]
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/two',
                                  selectedItems: [],
                                  required: false
                                },
                                elements: {
                                  oneOf: {
                                    id: '#/0/0/two',
                                    items: [
                                      {
                                        meta: {
                                          type: 'number',
                                          item: 0,
                                          rootSchema: schema,
                                          schema: {
                                            const: 1
                                          },
                                          parentUri: '#/0/0/two',
                                          uri: '#/0/0/two/0',
                                          required: false,
                                          value: '1'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/two/0',
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
                                          parentUri: '#/0/0/two',
                                          uri: '#/0/0/two/1',
                                          required: false,
                                          value: '2'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/two/1',
                                            required: false,
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
                                          parentUri: '#/0/0/two',
                                          uri: '#/0/0/two/2',
                                          required: false,
                                          value: '3'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/two/2',
                                            required: false,
                                            value: '3'
                                          }
                                        }
                                      }
                                    ],
                                    selectedItems: [],
                                    required: false
                                  }
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `allOf` (`items` is an array and `items` is an array of `object` type with `required`)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: [
                  {
                    type: 'object',
                    properties: {
                      one: {
                        type: 'string',
                        allOf: [
                          { minLength: 1 },
                          {
                            const: 'string',
                            maxLength: 100
                          }
                        ]
                      },
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
                    },
                    required: [
                      'one'
                    ]
                  }
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'object',
                            properties: {
                              one: {
                                type: 'string',
                                allOf: [
                                  { minLength: 1 },
                                  {
                                    const: 'string',
                                    maxLength: 100
                                  }
                                ]
                              },
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
                            },
                            required: [
                              'one'
                            ]
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'object',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'object',
                              properties: {
                                one: {
                                  type: 'string',
                                  allOf: [
                                    { minLength: 1 },
                                    {
                                      const: 'string',
                                      maxLength: 100
                                    }
                                  ]
                                },
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
                              },
                              required: [
                                'one'
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            fields: [
                              {
                                meta: {
                                  type: 'string',
                                  name: 'one',
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
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/one',
                                  minLength: 1,
                                  maxLength: 100,
                                  required: true,
                                  value: 'string'
                                },
                                elements: {
                                  field: {
                                    id: '#/0/0/one',
                                    minLength: 1,
                                    maxLength: 100,
                                    required: true,
                                    value: 'string'
                                  }
                                }
                              },
                              {
                                meta: {
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
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/two',
                                  min: 1,
                                  max: 3,
                                  required: false,
                                  value: '2'
                                },
                                elements: {
                                  field: {
                                    id: '#/0/0/two',
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
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `enum` (`items` is an array and `items` is an object of `string` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: {
                  type: 'string',
                  enum: [
                    'string (1)',
                    'string (2)',
                    'string (3)'
                  ]
                }
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'string',
                          enum: [
                            'string (1)',
                            'string (2)',
                            'string (3)'
                          ]
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'string',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'string',
                              enum: [
                                'string (1)',
                                'string (2)',
                                'string (3)'
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            enum: {
                              id: '#/0/0',
                              items: [
                                'string (1)',
                                'string (2)',
                                'string (3)'
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `anyOf` (`items` is an array and `items` is an object of `string` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: {
                  type: 'string',
                  anyOf: [
                    { const: 'string (1)' },
                    { const: 'string (2)' },
                    { const: 'string (3)' }
                  ]
                }
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'string',
                          anyOf: [
                            { const: 'string (1)' },
                            { const: 'string (2)' },
                            { const: 'string (3)' }
                          ]
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'string',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'string',
                              anyOf: [
                                { const: 'string (1)' },
                                { const: 'string (2)' },
                                { const: 'string (3)' }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            anyOf: {
                              id: '#/0/0',
                              items: [
                                {
                                  meta: {
                                    type: 'string',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: 'string (1)'
                                    },
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/0',
                                    required: false,
                                    value: 'string (1)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/0',
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
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/1',
                                    required: false,
                                    value: 'string (2)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/1',
                                      required: false,
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
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/2',
                                    required: false,
                                    value: 'string (3)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/2',
                                      required: false,
                                      value: 'string (3)'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `oneOf` (`items` is an array and `items` is an object of `string` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: {
                  type: 'string',
                  oneOf: [
                    { const: 'string (1)' },
                    { const: 'string (2)' },
                    { const: 'string (3)' }
                  ]
                }
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'string',
                          oneOf: [
                            { const: 'string (1)' },
                            { const: 'string (2)' },
                            { const: 'string (3)' }
                          ]
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'string',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'string',
                              oneOf: [
                                { const: 'string (1)' },
                                { const: 'string (2)' },
                                { const: 'string (3)' }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            oneOf: {
                              id: '#/0/0',
                              items: [
                                {
                                  meta: {
                                    type: 'string',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: 'string (1)'
                                    },
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/0',
                                    required: false,
                                    value: 'string (1)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/0',
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
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/1',
                                    required: false,
                                    value: 'string (2)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/1',
                                      required: false,
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
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/2',
                                    required: false,
                                    value: 'string (3)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/2',
                                      required: false,
                                      value: 'string (3)'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `allOf` (`items` is an array and `items` is an object of `string` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: {
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
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'string',
                          allOf: [
                            { minLength: 1 },
                            {
                              const: 'string',
                              maxLength: 100
                            }
                          ]
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'string',
                            item: 0,
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
                            parentUri: '#/0',
                            uri: '#/0/0',
                            minLength: 1,
                            maxLength: 100,
                            required: false,
                            value: 'string'
                          },
                          elements: {
                            field: {
                              id: '#/0/0',
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

        it('transforms `array` type schemas with `enum` (`items` is an array and `items` is an object of `number` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: {
                  type: 'number',
                  enum: [
                    1,
                    2,
                    3
                  ]
                }
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'number',
                          enum: [
                            1,
                            2,
                            3
                          ]
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'number',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'number',
                              enum: [
                                1,
                                2,
                                3
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            enum: {
                              id: '#/0/0',
                              items: [
                                1,
                                2,
                                3
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `anyOf` (`items` is an array and `items` is an object of `number` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: {
                  type: 'number',
                  anyOf: [
                    { const: 1 },
                    { const: 2 },
                    { const: 3 }
                  ]
                }
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'number',
                          anyOf: [
                            { const: 1 },
                            { const: 2 },
                            { const: 3 }
                          ]
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'number',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'number',
                              anyOf: [
                                { const: 1 },
                                { const: 2 },
                                { const: 3 }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            anyOf: {
                              id: '#/0/0',
                              items: [
                                {
                                  meta: {
                                    type: 'number',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: 1
                                    },
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/0',
                                    required: false,
                                    value: '1'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/0',
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
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/1',
                                    required: false,
                                    value: '2'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/1',
                                      required: false,
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
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/2',
                                    required: false,
                                    value: '3'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/2',
                                      required: false,
                                      value: '3'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `oneOf` (`items` is an array and `items` is an object of `number` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: {
                  type: 'number',
                  oneOf: [
                    { const: 1 },
                    { const: 2 },
                    { const: 3 }
                  ]
                }
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'number',
                          oneOf: [
                            { const: 1 },
                            { const: 2 },
                            { const: 3 }
                          ]
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'number',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'number',
                              oneOf: [
                                { const: 1 },
                                { const: 2 },
                                { const: 3 }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            oneOf: {
                              id: '#/0/0',
                              items: [
                                {
                                  meta: {
                                    type: 'number',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: 1
                                    },
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/0',
                                    required: false,
                                    value: '1'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/0',
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
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/1',
                                    required: false,
                                    value: '2'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/1',
                                      required: false,
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
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/2',
                                    required: false,
                                    value: '3'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/2',
                                      required: false,
                                      value: '3'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `allOf` (`items` is an array and `items` is an object of `number` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: {
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
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'number',
                          allOf: [
                            { minimum: 1 },
                            {
                              const: 2,
                              maximum: 3
                            }
                          ]
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'number',
                            item: 0,
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
                            parentUri: '#/0',
                            uri: '#/0/0',
                            min: 1,
                            max: 3,
                            required: false,
                            value: '2'
                          },
                          elements: {
                            field: {
                              id: '#/0/0',
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

        it('transforms `array` type schemas with `enum` (`items` is an array and `items` is an object of `boolean` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: {
                  type: 'boolean',
                  enum: [
                    true,
                    false
                  ]
                }
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'boolean',
                          enum: [
                            true,
                            false
                          ]
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'boolean',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'boolean',
                              enum: [
                                true,
                                false
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            enum: {
                              id: '#/0/0',
                              items: [
                                true,
                                false
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `anyOf` (`items` is an array and `items` is an object of `boolean` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: {
                  type: 'boolean',
                  anyOf: [
                    { const: true },
                    { const: false }
                  ]
                }
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'boolean',
                          anyOf: [
                            { const: true },
                            { const: false }
                          ]
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'boolean',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'boolean',
                              anyOf: [
                                { const: true },
                                { const: false }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            anyOf: {
                              id: '#/0/0',
                              items: [
                                {
                                  meta: {
                                    type: 'boolean',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: true
                                    },
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/0',
                                    required: false,
                                    value: 'true'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/0',
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
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/1',
                                    required: false,
                                    value: 'false'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/1',
                                      required: false,
                                      value: 'false'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `oneOf` (`items` is an array and `items` is an object of `boolean` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: {
                  type: 'boolean',
                  oneOf: [
                    { const: true },
                    { const: false }
                  ]
                }
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'boolean',
                          oneOf: [
                            { const: true },
                            { const: false }
                          ]
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'boolean',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'boolean',
                              oneOf: [
                                { const: true },
                                { const: false }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            oneOf: {
                              id: '#/0/0',
                              items: [
                                {
                                  meta: {
                                    type: 'boolean',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: true
                                    },
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/0',
                                    required: false,
                                    value: 'true'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/0',
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
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/1',
                                    required: false,
                                    value: 'false'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/1',
                                      required: false,
                                      value: 'false'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `allOf` (`items` is an array and `items` is an object of `boolean` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: {
                  type: 'boolean',
                  allOf: [
                    { const: true }
                  ]
                }
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'boolean',
                          allOf: [
                            { const: true }
                          ]
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'boolean',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'boolean',
                              allOf: [
                                { const: true }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false,
                            value: 'true'
                          },
                          elements: {
                            field: {
                              id: '#/0/0',
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

        it('transforms `array` type schemas with `enum` (`items` is an array and `items` is an object of `null` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: {
                  type: 'null',
                  enum: [
                    null
                  ]
                }
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'null',
                          enum: [
                            null
                          ]
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'null',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'null',
                              enum: [
                                null
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            enum: {
                              id: '#/0/0',
                              items: [
                                null
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `anyOf` (`items` is an array and `items` is an object of `null` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: {
                  type: 'null',
                  anyOf: [
                    { const: null }
                  ]
                }
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'null',
                          anyOf: [
                            { const: null }
                          ]
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'null',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'null',
                              anyOf: [
                                { const: null }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            anyOf: {
                              id: '#/0/0',
                              items: [
                                {
                                  meta: {
                                    type: 'null',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: null
                                    },
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/0',
                                    required: false,
                                    value: 'null'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/0',
                                      required: false,
                                      value: 'null'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `oneOf` (`items` is an array and `items` is an object of `null` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: {
                  type: 'null',
                  oneOf: [
                    { const: null }
                  ]
                }
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'null',
                          oneOf: [
                            { const: null }
                          ]
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'null',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'null',
                              oneOf: [
                                { const: null }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            oneOf: {
                              id: '#/0/0',
                              items: [
                                {
                                  meta: {
                                    type: 'null',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: null
                                    },
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/0',
                                    required: false,
                                    value: 'null'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/0',
                                      required: false,
                                      value: 'null'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `allOf` (`items` is an array and `items` is an object of `null` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: {
                  type: 'null',
                  allOf: [
                    { const: null }
                  ]
                }
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'null',
                          allOf: [
                            { const: null }
                          ]
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'null',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'null',
                              allOf: [
                                { const: null }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false,
                            value: 'null'
                          },
                          elements: {
                            field: {
                              id: '#/0/0',
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

        it('transforms `array` type schemas with `enum` (`items` is an array and `items` is an object of `object` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    one: {
                      type: 'string',
                      enum: [
                        'string (1)',
                        'string (2)',
                        'string (3)'
                      ]
                    },
                    two: {
                      type: 'number',
                      enum: [
                        1,
                        2,
                        3
                      ]
                    }
                  }
                }
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            one: {
                              type: 'string',
                              enum: [
                                'string (1)',
                                'string (2)',
                                'string (3)'
                              ]
                            },
                            two: {
                              type: 'number',
                              enum: [
                                1,
                                2,
                                3
                              ]
                            }
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'object',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'object',
                              properties: {
                                one: {
                                  type: 'string',
                                  enum: [
                                    'string (1)',
                                    'string (2)',
                                    'string (3)'
                                  ]
                                },
                                two: {
                                  type: 'number',
                                  enum: [
                                    1,
                                    2,
                                    3
                                  ]
                                }
                              }
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            fields: [
                              {
                                meta: {
                                  type: 'string',
                                  name: 'one',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'string',
                                    enum: [
                                      'string (1)',
                                      'string (2)',
                                      'string (3)'
                                    ]
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/one',
                                  selectedItems: [],
                                  required: false
                                },
                                elements: {
                                  enum: {
                                    id: '#/0/0/one',
                                    items: [
                                      'string (1)',
                                      'string (2)',
                                      'string (3)'
                                    ],
                                    selectedItems: [],
                                    required: false
                                  }
                                }
                              },
                              {
                                meta: {
                                  type: 'number',
                                  name: 'two',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'number',
                                    enum: [
                                      1,
                                      2,
                                      3
                                    ]
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/two',
                                  selectedItems: [],
                                  required: false
                                },
                                elements: {
                                  enum: {
                                    id: '#/0/0/two',
                                    items: [
                                      1,
                                      2,
                                      3
                                    ],
                                    selectedItems: [],
                                    required: false
                                  }
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `anyOf` (`items` is an array and `items` is an object of `object` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    one: {
                      type: 'string',
                      anyOf: [
                        { const: 'string (1)' },
                        { const: 'string (2)' },
                        { const: 'string (3)' }
                      ]
                    },
                    two: {
                      type: 'number',
                      anyOf: [
                        { const: 1 },
                        { const: 2 },
                        { const: 3 }
                      ]
                    }
                  }
                }
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            one: {
                              type: 'string',
                              anyOf: [
                                { const: 'string (1)' },
                                { const: 'string (2)' },
                                { const: 'string (3)' }
                              ]
                            },
                            two: {
                              type: 'number',
                              anyOf: [
                                { const: 1 },
                                { const: 2 },
                                { const: 3 }
                              ]
                            }
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'object',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'object',
                              properties: {
                                one: {
                                  type: 'string',
                                  anyOf: [
                                    { const: 'string (1)' },
                                    { const: 'string (2)' },
                                    { const: 'string (3)' }
                                  ]
                                },
                                two: {
                                  type: 'number',
                                  anyOf: [
                                    { const: 1 },
                                    { const: 2 },
                                    { const: 3 }
                                  ]
                                }
                              }
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            fields: [
                              {
                                meta: {
                                  type: 'string',
                                  name: 'one',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'string',
                                    anyOf: [
                                      { const: 'string (1)' },
                                      { const: 'string (2)' },
                                      { const: 'string (3)' }
                                    ]
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/one',
                                  selectedItems: [],
                                  required: false
                                },
                                elements: {
                                  anyOf: {
                                    id: '#/0/0/one',
                                    items: [
                                      {
                                        meta: {
                                          type: 'string',
                                          item: 0,
                                          rootSchema: schema,
                                          schema: {
                                            const: 'string (1)'
                                          },
                                          parentUri: '#/0/0/one',
                                          uri: '#/0/0/one/0',
                                          required: false,
                                          value: 'string (1)'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/one/0',
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
                                          parentUri: '#/0/0/one',
                                          uri: '#/0/0/one/1',
                                          required: false,
                                          value: 'string (2)'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/one/1',
                                            required: false,
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
                                          parentUri: '#/0/0/one',
                                          uri: '#/0/0/one/2',
                                          required: false,
                                          value: 'string (3)'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/one/2',
                                            required: false,
                                            value: 'string (3)'
                                          }
                                        }
                                      }
                                    ],
                                    selectedItems: [],
                                    required: false
                                  }
                                }
                              },
                              {
                                meta: {
                                  type: 'number',
                                  name: 'two',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'number',
                                    anyOf: [
                                      { const: 1 },
                                      { const: 2 },
                                      { const: 3 }
                                    ]
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/two',
                                  selectedItems: [],
                                  required: false
                                },
                                elements: {
                                  anyOf: {
                                    id: '#/0/0/two',
                                    items: [
                                      {
                                        meta: {
                                          type: 'number',
                                          item: 0,
                                          rootSchema: schema,
                                          schema: {
                                            const: 1
                                          },
                                          parentUri: '#/0/0/two',
                                          uri: '#/0/0/two/0',
                                          required: false,
                                          value: '1'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/two/0',
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
                                          parentUri: '#/0/0/two',
                                          uri: '#/0/0/two/1',
                                          required: false,
                                          value: '2'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/two/1',
                                            required: false,
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
                                          parentUri: '#/0/0/two',
                                          uri: '#/0/0/two/2',
                                          required: false,
                                          value: '3'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/two/2',
                                            required: false,
                                            value: '3'
                                          }
                                        }
                                      }
                                    ],
                                    selectedItems: [],
                                    required: false
                                  }
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `oneOf` (`items` is an array and `items` is an object of `object` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    one: {
                      type: 'string',
                      oneOf: [
                        { const: 'string (1)' },
                        { const: 'string (2)' },
                        { const: 'string (3)' }
                      ]
                    },
                    two: {
                      type: 'number',
                      oneOf: [
                        { const: 1 },
                        { const: 2 },
                        { const: 3 }
                      ]
                    }
                  }
                }
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            one: {
                              type: 'string',
                              oneOf: [
                                { const: 'string (1)' },
                                { const: 'string (2)' },
                                { const: 'string (3)' }
                              ]
                            },
                            two: {
                              type: 'number',
                              oneOf: [
                                { const: 1 },
                                { const: 2 },
                                { const: 3 }
                              ]
                            }
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'object',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'object',
                              properties: {
                                one: {
                                  type: 'string',
                                  oneOf: [
                                    { const: 'string (1)' },
                                    { const: 'string (2)' },
                                    { const: 'string (3)' }
                                  ]
                                },
                                two: {
                                  type: 'number',
                                  oneOf: [
                                    { const: 1 },
                                    { const: 2 },
                                    { const: 3 }
                                  ]
                                }
                              }
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            fields: [
                              {
                                meta: {
                                  type: 'string',
                                  name: 'one',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'string',
                                    oneOf: [
                                      { const: 'string (1)' },
                                      { const: 'string (2)' },
                                      { const: 'string (3)' }
                                    ]
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/one',
                                  selectedItems: [],
                                  required: false
                                },
                                elements: {
                                  oneOf: {
                                    id: '#/0/0/one',
                                    items: [
                                      {
                                        meta: {
                                          type: 'string',
                                          item: 0,
                                          rootSchema: schema,
                                          schema: {
                                            const: 'string (1)'
                                          },
                                          parentUri: '#/0/0/one',
                                          uri: '#/0/0/one/0',
                                          required: false,
                                          value: 'string (1)'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/one/0',
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
                                          parentUri: '#/0/0/one',
                                          uri: '#/0/0/one/1',
                                          required: false,
                                          value: 'string (2)'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/one/1',
                                            required: false,
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
                                          parentUri: '#/0/0/one',
                                          uri: '#/0/0/one/2',
                                          required: false,
                                          value: 'string (3)'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/one/2',
                                            required: false,
                                            value: 'string (3)'
                                          }
                                        }
                                      }
                                    ],
                                    selectedItems: [],
                                    required: false
                                  }
                                }
                              },
                              {
                                meta: {
                                  type: 'number',
                                  name: 'two',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'number',
                                    oneOf: [
                                      { const: 1 },
                                      { const: 2 },
                                      { const: 3 }
                                    ]
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/two',
                                  selectedItems: [],
                                  required: false
                                },
                                elements: {
                                  oneOf: {
                                    id: '#/0/0/two',
                                    items: [
                                      {
                                        meta: {
                                          type: 'number',
                                          item: 0,
                                          rootSchema: schema,
                                          schema: {
                                            const: 1
                                          },
                                          parentUri: '#/0/0/two',
                                          uri: '#/0/0/two/0',
                                          required: false,
                                          value: '1'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/two/0',
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
                                          parentUri: '#/0/0/two',
                                          uri: '#/0/0/two/1',
                                          required: false,
                                          value: '2'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/two/1',
                                            required: false,
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
                                          parentUri: '#/0/0/two',
                                          uri: '#/0/0/two/2',
                                          required: false,
                                          value: '3'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/two/2',
                                            required: false,
                                            value: '3'
                                          }
                                        }
                                      }
                                    ],
                                    selectedItems: [],
                                    required: false
                                  }
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `allOf` (`items` is an array and `items` is an object of `object` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    one: {
                      type: 'string',
                      allOf: [
                        { minLength: 1 },
                        {
                          const: 'string',
                          maxLength: 100
                        }
                      ]
                    },
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
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            one: {
                              type: 'string',
                              allOf: [
                                { minLength: 1 },
                                {
                                  const: 'string',
                                  maxLength: 100
                                }
                              ]
                            },
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
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'object',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'object',
                              properties: {
                                one: {
                                  type: 'string',
                                  allOf: [
                                    { minLength: 1 },
                                    {
                                      const: 'string',
                                      maxLength: 100
                                    }
                                  ]
                                },
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
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            fields: [
                              {
                                meta: {
                                  type: 'string',
                                  name: 'one',
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
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/one',
                                  minLength: 1,
                                  maxLength: 100,
                                  required: false,
                                  value: 'string'
                                },
                                elements: {
                                  field: {
                                    id: '#/0/0/one',
                                    minLength: 1,
                                    maxLength: 100,
                                    required: false,
                                    value: 'string'
                                  }
                                }
                              },
                              {
                                meta: {
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
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/two',
                                  min: 1,
                                  max: 3,
                                  required: false,
                                  value: '2'
                                },
                                elements: {
                                  field: {
                                    id: '#/0/0/two',
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
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `enum` (`items` is an array and `items` is an object of `object` type with `required`)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    one: {
                      type: 'string',
                      enum: [
                        'string (1)',
                        'string (2)',
                        'string (3)'
                      ]
                    },
                    two: {
                      type: 'number',
                      enum: [
                        1,
                        2,
                        3
                      ]
                    }
                  },
                  required: [
                    'one'
                  ]
                }
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            one: {
                              type: 'string',
                              enum: [
                                'string (1)',
                                'string (2)',
                                'string (3)'
                              ]
                            },
                            two: {
                              type: 'number',
                              enum: [
                                1,
                                2,
                                3
                              ]
                            }
                          },
                          required: [
                            'one'
                          ]
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'object',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'object',
                              properties: {
                                one: {
                                  type: 'string',
                                  enum: [
                                    'string (1)',
                                    'string (2)',
                                    'string (3)'
                                  ]
                                },
                                two: {
                                  type: 'number',
                                  enum: [
                                    1,
                                    2,
                                    3
                                  ]
                                }
                              },
                              required: [
                                'one'
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            fields: [
                              {
                                meta: {
                                  type: 'string',
                                  name: 'one',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'string',
                                    enum: [
                                      'string (1)',
                                      'string (2)',
                                      'string (3)'
                                    ]
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/one',
                                  selectedItems: [],
                                  required: true
                                },
                                elements: {
                                  enum: {
                                    id: '#/0/0/one',
                                    items: [
                                      'string (1)',
                                      'string (2)',
                                      'string (3)'
                                    ],
                                    selectedItems: [],
                                    required: true
                                  }
                                }
                              },
                              {
                                meta: {
                                  type: 'number',
                                  name: 'two',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'number',
                                    enum: [
                                      1,
                                      2,
                                      3
                                    ]
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/two',
                                  selectedItems: [],
                                  required: false
                                },
                                elements: {
                                  enum: {
                                    id: '#/0/0/two',
                                    items: [
                                      1,
                                      2,
                                      3
                                    ],
                                    selectedItems: [],
                                    required: false
                                  }
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `anyOf` (`items` is an array and `items` is an object of `object` type with `required`)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    one: {
                      type: 'string',
                      anyOf: [
                        { const: 'string (1)' },
                        { const: 'string (2)' },
                        { const: 'string (3)' }
                      ]
                    },
                    two: {
                      type: 'number',
                      anyOf: [
                        { const: 1 },
                        { const: 2 },
                        { const: 3 }
                      ]
                    }
                  },
                  required: [
                    'one'
                  ]
                }
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            one: {
                              type: 'string',
                              anyOf: [
                                { const: 'string (1)' },
                                { const: 'string (2)' },
                                { const: 'string (3)' }
                              ]
                            },
                            two: {
                              type: 'number',
                              anyOf: [
                                { const: 1 },
                                { const: 2 },
                                { const: 3 }
                              ]
                            }
                          },
                          required: [
                            'one'
                          ]
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'object',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'object',
                              properties: {
                                one: {
                                  type: 'string',
                                  anyOf: [
                                    { const: 'string (1)' },
                                    { const: 'string (2)' },
                                    { const: 'string (3)' }
                                  ]
                                },
                                two: {
                                  type: 'number',
                                  anyOf: [
                                    { const: 1 },
                                    { const: 2 },
                                    { const: 3 }
                                  ]
                                }
                              },
                              required: [
                                'one'
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            fields: [
                              {
                                meta: {
                                  type: 'string',
                                  name: 'one',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'string',
                                    anyOf: [
                                      { const: 'string (1)' },
                                      { const: 'string (2)' },
                                      { const: 'string (3)' }
                                    ]
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/one',
                                  selectedItems: [],
                                  required: true
                                },
                                elements: {
                                  anyOf: {
                                    id: '#/0/0/one',
                                    items: [
                                      {
                                        meta: {
                                          type: 'string',
                                          item: 0,
                                          rootSchema: schema,
                                          schema: {
                                            const: 'string (1)'
                                          },
                                          parentUri: '#/0/0/one',
                                          uri: '#/0/0/one/0',
                                          required: true,
                                          value: 'string (1)'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/one/0',
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
                                          parentUri: '#/0/0/one',
                                          uri: '#/0/0/one/1',
                                          required: true,
                                          value: 'string (2)'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/one/1',
                                            required: true,
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
                                          parentUri: '#/0/0/one',
                                          uri: '#/0/0/one/2',
                                          required: true,
                                          value: 'string (3)'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/one/2',
                                            required: true,
                                            value: 'string (3)'
                                          }
                                        }
                                      }
                                    ],
                                    selectedItems: [],
                                    required: true
                                  }
                                }
                              },
                              {
                                meta: {
                                  type: 'number',
                                  name: 'two',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'number',
                                    anyOf: [
                                      { const: 1 },
                                      { const: 2 },
                                      { const: 3 }
                                    ]
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/two',
                                  selectedItems: [],
                                  required: false
                                },
                                elements: {
                                  anyOf: {
                                    id: '#/0/0/two',
                                    items: [
                                      {
                                        meta: {
                                          type: 'number',
                                          item: 0,
                                          rootSchema: schema,
                                          schema: {
                                            const: 1
                                          },
                                          parentUri: '#/0/0/two',
                                          uri: '#/0/0/two/0',
                                          required: false,
                                          value: '1'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/two/0',
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
                                          parentUri: '#/0/0/two',
                                          uri: '#/0/0/two/1',
                                          required: false,
                                          value: '2'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/two/1',
                                            required: false,
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
                                          parentUri: '#/0/0/two',
                                          uri: '#/0/0/two/2',
                                          required: false,
                                          value: '3'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/two/2',
                                            required: false,
                                            value: '3'
                                          }
                                        }
                                      }
                                    ],
                                    selectedItems: [],
                                    required: false
                                  }
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `oneOf` (`items` is an array and `items` is an object of `object` type with `required`)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    one: {
                      type: 'string',
                      oneOf: [
                        { const: 'string (1)' },
                        { const: 'string (2)' },
                        { const: 'string (3)' }
                      ]
                    },
                    two: {
                      type: 'number',
                      oneOf: [
                        { const: 1 },
                        { const: 2 },
                        { const: 3 }
                      ]
                    }
                  },
                  required: [
                    'one'
                  ]
                }
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            one: {
                              type: 'string',
                              oneOf: [
                                { const: 'string (1)' },
                                { const: 'string (2)' },
                                { const: 'string (3)' }
                              ]
                            },
                            two: {
                              type: 'number',
                              oneOf: [
                                { const: 1 },
                                { const: 2 },
                                { const: 3 }
                              ]
                            }
                          },
                          required: [
                            'one'
                          ]
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'object',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'object',
                              properties: {
                                one: {
                                  type: 'string',
                                  oneOf: [
                                    { const: 'string (1)' },
                                    { const: 'string (2)' },
                                    { const: 'string (3)' }
                                  ]
                                },
                                two: {
                                  type: 'number',
                                  oneOf: [
                                    { const: 1 },
                                    { const: 2 },
                                    { const: 3 }
                                  ]
                                }
                              },
                              required: [
                                'one'
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            fields: [
                              {
                                meta: {
                                  type: 'string',
                                  name: 'one',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'string',
                                    oneOf: [
                                      { const: 'string (1)' },
                                      { const: 'string (2)' },
                                      { const: 'string (3)' }
                                    ]
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/one',
                                  selectedItems: [],
                                  required: true
                                },
                                elements: {
                                  oneOf: {
                                    id: '#/0/0/one',
                                    items: [
                                      {
                                        meta: {
                                          type: 'string',
                                          item: 0,
                                          rootSchema: schema,
                                          schema: {
                                            const: 'string (1)'
                                          },
                                          parentUri: '#/0/0/one',
                                          uri: '#/0/0/one/0',
                                          required: true,
                                          value: 'string (1)'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/one/0',
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
                                          parentUri: '#/0/0/one',
                                          uri: '#/0/0/one/1',
                                          required: true,
                                          value: 'string (2)'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/one/1',
                                            required: true,
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
                                          parentUri: '#/0/0/one',
                                          uri: '#/0/0/one/2',
                                          required: true,
                                          value: 'string (3)'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/one/2',
                                            required: true,
                                            value: 'string (3)'
                                          }
                                        }
                                      }
                                    ],
                                    selectedItems: [],
                                    required: true
                                  }
                                }
                              },
                              {
                                meta: {
                                  type: 'number',
                                  name: 'two',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'number',
                                    oneOf: [
                                      { const: 1 },
                                      { const: 2 },
                                      { const: 3 }
                                    ]
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/two',
                                  selectedItems: [],
                                  required: false
                                },
                                elements: {
                                  oneOf: {
                                    id: '#/0/0/two',
                                    items: [
                                      {
                                        meta: {
                                          type: 'number',
                                          item: 0,
                                          rootSchema: schema,
                                          schema: {
                                            const: 1
                                          },
                                          parentUri: '#/0/0/two',
                                          uri: '#/0/0/two/0',
                                          required: false,
                                          value: '1'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/two/0',
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
                                          parentUri: '#/0/0/two',
                                          uri: '#/0/0/two/1',
                                          required: false,
                                          value: '2'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/two/1',
                                            required: false,
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
                                          parentUri: '#/0/0/two',
                                          uri: '#/0/0/two/2',
                                          required: false,
                                          value: '3'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/two/2',
                                            required: false,
                                            value: '3'
                                          }
                                        }
                                      }
                                    ],
                                    selectedItems: [],
                                    required: false
                                  }
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `allOf` (`items` is an array and `items` is an object of `object` type with `required`)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    one: {
                      type: 'string',
                      allOf: [
                        { minLength: 1 },
                        {
                          const: 'string',
                          maxLength: 100
                        }
                      ]
                    },
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
                  },
                  required: [
                    'one'
                  ]
                }
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            one: {
                              type: 'string',
                              allOf: [
                                { minLength: 1 },
                                {
                                  const: 'string',
                                  maxLength: 100
                                }
                              ]
                            },
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
                          },
                          required: [
                            'one'
                          ]
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'object',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'object',
                              properties: {
                                one: {
                                  type: 'string',
                                  allOf: [
                                    { minLength: 1 },
                                    {
                                      const: 'string',
                                      maxLength: 100
                                    }
                                  ]
                                },
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
                              },
                              required: [
                                'one'
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            fields: [
                              {
                                meta: {
                                  type: 'string',
                                  name: 'one',
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
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/one',
                                  minLength: 1,
                                  maxLength: 100,
                                  required: true,
                                  value: 'string'
                                },
                                elements: {
                                  field: {
                                    id: '#/0/0/one',
                                    minLength: 1,
                                    maxLength: 100,
                                    required: true,
                                    value: 'string'
                                  }
                                }
                              },
                              {
                                meta: {
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
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/two',
                                  min: 1,
                                  max: 3,
                                  required: false,
                                  value: '2'
                                },
                                elements: {
                                  field: {
                                    id: '#/0/0/two',
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
                  }
                ]
              }
            })
        })

        /*
         *  Object
         */
        it('transforms `array` type schemas with `enum` (`items` is an array of `object` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'object',
                properties: {
                  one: {
                    type: 'string',
                    enum: [
                      'string (1)',
                      'string (2)',
                      'string (3)'
                    ]
                  },
                  two: {
                    type: 'number',
                    enum: [
                      1,
                      2,
                      3
                    ]
                  }
                }
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          one: {
                            type: 'string',
                            enum: [
                              'string (1)',
                              'string (2)',
                              'string (3)'
                            ]
                          },
                          two: {
                            type: 'number',
                            enum: [
                              1,
                              2,
                              3
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'string',
                            name: 'one',
                            rootSchema: schema,
                            schema: {
                              type: 'string',
                              enum: [
                                'string (1)',
                                'string (2)',
                                'string (3)'
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/one',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            enum: {
                              id: '#/0/one',
                              items: [
                                'string (1)',
                                'string (2)',
                                'string (3)'
                              ],
                              selectedItems: [],
                              required: false
                            }
                          }
                        },
                        {
                          meta: {
                            type: 'number',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'number',
                              enum: [
                                1,
                                2,
                                3
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/two',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            enum: {
                              id: '#/0/two',
                              items: [
                                1,
                                2,
                                3
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `anyOf` (`items` is an array of `object` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'object',
                properties: {
                  one: {
                    type: 'string',
                    anyOf: [
                      { const: 'string (1)' },
                      { const: 'string (2)' },
                      { const: 'string (3)' }
                    ]
                  },
                  two: {
                    type: 'number',
                    anyOf: [
                      { const: 1 },
                      { const: 2 },
                      { const: 3 }
                    ]
                  }
                }
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          one: {
                            type: 'string',
                            anyOf: [
                              { const: 'string (1)' },
                              { const: 'string (2)' },
                              { const: 'string (3)' }
                            ]
                          },
                          two: {
                            type: 'number',
                            anyOf: [
                              { const: 1 },
                              { const: 2 },
                              { const: 3 }
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'string',
                            name: 'one',
                            rootSchema: schema,
                            schema: {
                              type: 'string',
                              anyOf: [
                                { const: 'string (1)' },
                                { const: 'string (2)' },
                                { const: 'string (3)' }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/one',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            anyOf: {
                              id: '#/0/one',
                              items: [
                                {
                                  meta: {
                                    type: 'string',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: 'string (1)'
                                    },
                                    parentUri: '#/0/one',
                                    uri: '#/0/one/0',
                                    required: false,
                                    value: 'string (1)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/one/0',
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
                                    parentUri: '#/0/one',
                                    uri: '#/0/one/1',
                                    required: false,
                                    value: 'string (2)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/one/1',
                                      required: false,
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
                                    parentUri: '#/0/one',
                                    uri: '#/0/one/2',
                                    required: false,
                                    value: 'string (3)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/one/2',
                                      required: false,
                                      value: 'string (3)'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
                              required: false
                            }
                          }
                        },
                        {
                          meta: {
                            type: 'number',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'number',
                              anyOf: [
                                { const: 1 },
                                { const: 2 },
                                { const: 3 }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/two',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            anyOf: {
                              id: '#/0/two',
                              items: [
                                {
                                  meta: {
                                    type: 'number',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: 1
                                    },
                                    parentUri: '#/0/two',
                                    uri: '#/0/two/0',
                                    required: false,
                                    value: '1'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/two/0',
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
                                    parentUri: '#/0/two',
                                    uri: '#/0/two/1',
                                    required: false,
                                    value: '2'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/two/1',
                                      required: false,
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
                                    parentUri: '#/0/two',
                                    uri: '#/0/two/2',
                                    required: false,
                                    value: '3'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/two/2',
                                      required: false,
                                      value: '3'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `oneOf` (`items` is an array of `object` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'object',
                properties: {
                  one: {
                    type: 'string',
                    oneOf: [
                      { const: 'string (1)' },
                      { const: 'string (2)' },
                      { const: 'string (3)' }
                    ]
                  },
                  two: {
                    type: 'number',
                    oneOf: [
                      { const: 1 },
                      { const: 2 },
                      { const: 3 }
                    ]
                  }
                }
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          one: {
                            type: 'string',
                            oneOf: [
                              { const: 'string (1)' },
                              { const: 'string (2)' },
                              { const: 'string (3)' }
                            ]
                          },
                          two: {
                            type: 'number',
                            oneOf: [
                              { const: 1 },
                              { const: 2 },
                              { const: 3 }
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'string',
                            name: 'one',
                            rootSchema: schema,
                            schema: {
                              type: 'string',
                              oneOf: [
                                { const: 'string (1)' },
                                { const: 'string (2)' },
                                { const: 'string (3)' }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/one',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            oneOf: {
                              id: '#/0/one',
                              items: [
                                {
                                  meta: {
                                    type: 'string',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: 'string (1)'
                                    },
                                    parentUri: '#/0/one',
                                    uri: '#/0/one/0',
                                    required: false,
                                    value: 'string (1)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/one/0',
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
                                    parentUri: '#/0/one',
                                    uri: '#/0/one/1',
                                    required: false,
                                    value: 'string (2)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/one/1',
                                      required: false,
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
                                    parentUri: '#/0/one',
                                    uri: '#/0/one/2',
                                    required: false,
                                    value: 'string (3)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/one/2',
                                      required: false,
                                      value: 'string (3)'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
                              required: false
                            }
                          }
                        },
                        {
                          meta: {
                            type: 'number',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'number',
                              oneOf: [
                                { const: 1 },
                                { const: 2 },
                                { const: 3 }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/two',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            oneOf: {
                              id: '#/0/two',
                              items: [
                                {
                                  meta: {
                                    type: 'number',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: 1
                                    },
                                    parentUri: '#/0/two',
                                    uri: '#/0/two/0',
                                    required: false,
                                    value: '1'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/two/0',
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
                                    parentUri: '#/0/two',
                                    uri: '#/0/two/1',
                                    required: false,
                                    value: '2'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/two/1',
                                      required: false,
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
                                    parentUri: '#/0/two',
                                    uri: '#/0/two/2',
                                    required: false,
                                    value: '3'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/two/2',
                                      required: false,
                                      value: '3'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `allOf` (`items` is an array of `object` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'object',
                properties: {
                  one: {
                    type: 'string',
                    allOf: [
                      { minLength: 1 },
                      {
                        const: 'string',
                        maxLength: 100
                      }
                    ]
                  },
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
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          one: {
                            type: 'string',
                            allOf: [
                              { minLength: 1 },
                              {
                                const: 'string',
                                maxLength: 100
                              }
                            ]
                          },
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
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'string',
                            name: 'one',
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
                            parentUri: '#/0',
                            uri: '#/0/one',
                            minLength: 1,
                            maxLength: 100,
                            required: false,
                            value: 'string'
                          },
                          elements: {
                            field: {
                              id: '#/0/one',
                              minLength: 1,
                              maxLength: 100,
                              required: false,
                              value: 'string'
                            }
                          }
                        },
                        {
                          meta: {
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
                            parentUri: '#/0',
                            uri: '#/0/two',
                            min: 1,
                            max: 3,
                            required: false,
                            value: '2'
                          },
                          elements: {
                            field: {
                              id: '#/0/two',
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

        it('transforms `array` type schemas with `enum` (`items` is an array of `object` type with `required`)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'object',
                properties: {
                  one: {
                    type: 'string',
                    enum: [
                      'string (1)',
                      'string (2)',
                      'string (3)'
                    ]
                  },
                  two: {
                    type: 'number',
                    enum: [
                      1,
                      2,
                      3
                    ]
                  }
                },
                required: [
                  'one'
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          one: {
                            type: 'string',
                            enum: [
                              'string (1)',
                              'string (2)',
                              'string (3)'
                            ]
                          },
                          two: {
                            type: 'number',
                            enum: [
                              1,
                              2,
                              3
                            ]
                          }
                        },
                        required: [
                          'one'
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'string',
                            name: 'one',
                            rootSchema: schema,
                            schema: {
                              type: 'string',
                              enum: [
                                'string (1)',
                                'string (2)',
                                'string (3)'
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/one',
                            selectedItems: [],
                            required: true
                          },
                          elements: {
                            enum: {
                              id: '#/0/one',
                              items: [
                                'string (1)',
                                'string (2)',
                                'string (3)'
                              ],
                              selectedItems: [],
                              required: true
                            }
                          }
                        },
                        {
                          meta: {
                            type: 'number',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'number',
                              enum: [
                                1,
                                2,
                                3
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/two',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            enum: {
                              id: '#/0/two',
                              items: [
                                1,
                                2,
                                3
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `anyOf` (`items` is an array of `object` type with `required`)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'object',
                properties: {
                  one: {
                    type: 'string',
                    anyOf: [
                      { const: 'string (1)' },
                      { const: 'string (2)' },
                      { const: 'string (3)' }
                    ]
                  },
                  two: {
                    type: 'number',
                    anyOf: [
                      { const: 1 },
                      { const: 2 },
                      { const: 3 }
                    ]
                  }
                },
                required: [
                  'one'
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          one: {
                            type: 'string',
                            anyOf: [
                              { const: 'string (1)' },
                              { const: 'string (2)' },
                              { const: 'string (3)' }
                            ]
                          },
                          two: {
                            type: 'number',
                            anyOf: [
                              { const: 1 },
                              { const: 2 },
                              { const: 3 }
                            ]
                          }
                        },
                        required: [
                          'one'
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'string',
                            name: 'one',
                            rootSchema: schema,
                            schema: {
                              type: 'string',
                              anyOf: [
                                { const: 'string (1)' },
                                { const: 'string (2)' },
                                { const: 'string (3)' }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/one',
                            selectedItems: [],
                            required: true
                          },
                          elements: {
                            anyOf: {
                              id: '#/0/one',
                              items: [
                                {
                                  meta: {
                                    type: 'string',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: 'string (1)'
                                    },
                                    parentUri: '#/0/one',
                                    uri: '#/0/one/0',
                                    required: true,
                                    value: 'string (1)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/one/0',
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
                                    parentUri: '#/0/one',
                                    uri: '#/0/one/1',
                                    required: true,
                                    value: 'string (2)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/one/1',
                                      required: true,
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
                                    parentUri: '#/0/one',
                                    uri: '#/0/one/2',
                                    required: true,
                                    value: 'string (3)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/one/2',
                                      required: true,
                                      value: 'string (3)'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
                              required: true
                            }
                          }
                        },
                        {
                          meta: {
                            type: 'number',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'number',
                              anyOf: [
                                { const: 1 },
                                { const: 2 },
                                { const: 3 }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/two',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            anyOf: {
                              id: '#/0/two',
                              items: [
                                {
                                  meta: {
                                    type: 'number',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: 1
                                    },
                                    parentUri: '#/0/two',
                                    uri: '#/0/two/0',
                                    required: false,
                                    value: '1'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/two/0',
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
                                    parentUri: '#/0/two',
                                    uri: '#/0/two/1',
                                    required: false,
                                    value: '2'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/two/1',
                                      required: false,
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
                                    parentUri: '#/0/two',
                                    uri: '#/0/two/2',
                                    required: false,
                                    value: '3'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/two/2',
                                      required: false,
                                      value: '3'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `oneOf` (`items` is an array of `object` type with `required`)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'object',
                properties: {
                  one: {
                    type: 'string',
                    oneOf: [
                      { const: 'string (1)' },
                      { const: 'string (2)' },
                      { const: 'string (3)' }
                    ]
                  },
                  two: {
                    type: 'number',
                    oneOf: [
                      { const: 1 },
                      { const: 2 },
                      { const: 3 }
                    ]
                  }
                },
                required: [
                  'one'
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          one: {
                            type: 'string',
                            oneOf: [
                              { const: 'string (1)' },
                              { const: 'string (2)' },
                              { const: 'string (3)' }
                            ]
                          },
                          two: {
                            type: 'number',
                            oneOf: [
                              { const: 1 },
                              { const: 2 },
                              { const: 3 }
                            ]
                          }
                        },
                        required: [
                          'one'
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'string',
                            name: 'one',
                            rootSchema: schema,
                            schema: {
                              type: 'string',
                              oneOf: [
                                { const: 'string (1)' },
                                { const: 'string (2)' },
                                { const: 'string (3)' }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/one',
                            selectedItems: [],
                            required: true
                          },
                          elements: {
                            oneOf: {
                              id: '#/0/one',
                              items: [
                                {
                                  meta: {
                                    type: 'string',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: 'string (1)'
                                    },
                                    parentUri: '#/0/one',
                                    uri: '#/0/one/0',
                                    required: true,
                                    value: 'string (1)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/one/0',
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
                                    parentUri: '#/0/one',
                                    uri: '#/0/one/1',
                                    required: true,
                                    value: 'string (2)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/one/1',
                                      required: true,
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
                                    parentUri: '#/0/one',
                                    uri: '#/0/one/2',
                                    required: true,
                                    value: 'string (3)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/one/2',
                                      required: true,
                                      value: 'string (3)'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
                              required: true
                            }
                          }
                        },
                        {
                          meta: {
                            type: 'number',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'number',
                              oneOf: [
                                { const: 1 },
                                { const: 2 },
                                { const: 3 }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/two',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            oneOf: {
                              id: '#/0/two',
                              items: [
                                {
                                  meta: {
                                    type: 'number',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: 1
                                    },
                                    parentUri: '#/0/two',
                                    uri: '#/0/two/0',
                                    required: false,
                                    value: '1'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/two/0',
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
                                    parentUri: '#/0/two',
                                    uri: '#/0/two/1',
                                    required: false,
                                    value: '2'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/two/1',
                                      required: false,
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
                                    parentUri: '#/0/two',
                                    uri: '#/0/two/2',
                                    required: false,
                                    value: '3'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/two/2',
                                      required: false,
                                      value: '3'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `allOf` (`items` is an array of `object` type with `required`)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'object',
                properties: {
                  one: {
                    type: 'string',
                    allOf: [
                      { minLength: 1 },
                      {
                        const: 'string',
                        maxLength: 100
                      }
                    ]
                  },
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
                },
                required: [
                  'one'
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          one: {
                            type: 'string',
                            allOf: [
                              { minLength: 1 },
                              {
                                const: 'string',
                                maxLength: 100
                              }
                            ]
                          },
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
                        },
                        required: [
                          'one'
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'string',
                            name: 'one',
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
                            parentUri: '#/0',
                            uri: '#/0/one',
                            minLength: 1,
                            maxLength: 100,
                            required: true,
                            value: 'string'
                          },
                          elements: {
                            field: {
                              id: '#/0/one',
                              minLength: 1,
                              maxLength: 100,
                              required: true,
                              value: 'string'
                            }
                          }
                        },
                        {
                          meta: {
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
                            parentUri: '#/0',
                            uri: '#/0/two',
                            min: 1,
                            max: 3,
                            required: false,
                            value: '2'
                          },
                          elements: {
                            field: {
                              id: '#/0/two',
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
         *  Boolean
         */
        it('transforms `array` type schemas with `enum` (`items` is an array of `boolean` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'boolean',
                enum: [
                  true,
                  false
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'boolean',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'boolean',
                        enum: [
                          true,
                          false
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      selectedItems: [],
                      required: false
                    },
                    elements: {
                      enum: {
                        id: '#/0',
                        items: [
                          true,
                          false
                        ],
                        selectedItems: [],
                        required: false
                      }
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `anyOf` (`items` is an array of `boolean` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'boolean',
                anyOf: [
                  { const: true },
                  { const: false }
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'boolean',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'boolean',
                        anyOf: [
                          { const: true },
                          { const: false }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      selectedItems: [],
                      required: false
                    },
                    elements: {
                      anyOf: {
                        id: '#/0',
                        items: [
                          {
                            meta: {
                              type: 'boolean',
                              item: 0,
                              rootSchema: schema,
                              schema: {
                                const: true
                              },
                              parentUri: '#/0',
                              uri: '#/0/0',
                              required: false,
                              value: 'true'
                            },
                            elements: {
                              field: {
                                id: '#/0/0',
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
                              parentUri: '#/0',
                              uri: '#/0/1',
                              required: false,
                              value: 'false'
                            },
                            elements: {
                              field: {
                                id: '#/0/1',
                                required: false,
                                value: 'false'
                              }
                            }
                          }
                        ],
                        selectedItems: [],
                        required: false
                      }
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `oneOf` (`items` is an array of `boolean` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'boolean',
                oneOf: [
                  { const: true },
                  { const: false }
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'boolean',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'boolean',
                        oneOf: [
                          { const: true },
                          { const: false }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      selectedItems: [],
                      required: false
                    },
                    elements: {
                      oneOf: {
                        id: '#/0',
                        items: [
                          {
                            meta: {
                              type: 'boolean',
                              item: 0,
                              rootSchema: schema,
                              schema: {
                                const: true
                              },
                              parentUri: '#/0',
                              uri: '#/0/0',
                              required: false,
                              value: 'true'
                            },
                            elements: {
                              field: {
                                id: '#/0/0',
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
                              parentUri: '#/0',
                              uri: '#/0/1',
                              required: false,
                              value: 'false'
                            },
                            elements: {
                              field: {
                                id: '#/0/1',
                                required: false,
                                value: 'false'
                              }
                            }
                          }
                        ],
                        selectedItems: [],
                        required: false
                      }
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `allOf` (`items` is an array of `boolean` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'boolean',
                allOf: [
                  { const: true }
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'boolean',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'boolean',
                        allOf: [
                          { const: true }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false,
                      value: 'true'
                    },
                    elements: {
                      field: {
                        id: '#/0',
                        required: false,
                        value: 'true'
                      }
                    }
                  }
                ]
              }
            })
        })

        /*
         *  Null
         */
        it('transforms `array` type schemas with `enum` (`items` is an array of `null` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'null',
                enum: [
                  null
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'null',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'null',
                        enum: [
                          null
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      selectedItems: [],
                      required: false
                    },
                    elements: {
                      enum: {
                        id: '#/0',
                        items: [
                          null
                        ],
                        selectedItems: [],
                        required: false
                      }
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `anyOf` (`items` is an array of `null` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'null',
                anyOf: [
                  { const: null }
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'null',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'null',
                        anyOf: [
                          { const: null }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      selectedItems: [],
                      required: false
                    },
                    elements: {
                      anyOf: {
                        id: '#/0',
                        items: [
                          {
                            meta: {
                              type: 'null',
                              item: 0,
                              rootSchema: schema,
                              schema: {
                                const: null
                              },
                              parentUri: '#/0',
                              uri: '#/0/0',
                              required: false,
                              value: 'null'
                            },
                            elements: {
                              field: {
                                id: '#/0/0',
                                required: false,
                                value: 'null'
                              }
                            }
                          }
                        ],
                        selectedItems: [],
                        required: false
                      }
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `oneOf` (`items` is an array of `null` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'null',
                oneOf: [
                  { const: null }
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'null',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'null',
                        oneOf: [
                          { const: null }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      selectedItems: [],
                      required: false
                    },
                    elements: {
                      oneOf: {
                        id: '#/0',
                        items: [
                          {
                            meta: {
                              type: 'null',
                              item: 0,
                              rootSchema: schema,
                              schema: {
                                const: null
                              },
                              parentUri: '#/0',
                              uri: '#/0/0',
                              required: false,
                              value: 'null'
                            },
                            elements: {
                              field: {
                                id: '#/0/0',
                                required: false,
                                value: 'null'
                              }
                            }
                          }
                        ],
                        selectedItems: [],
                        required: false
                      }
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `allOf` (`items` is an array of `null` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'null',
                allOf: [
                  { const: null }
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'null',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'null',
                        allOf: [
                          { const: null }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false,
                      value: 'null'
                    },
                    elements: {
                      field: {
                        id: '#/0',
                        required: false,
                        value: 'null'
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
        it('transforms `array` type schemas with `enum` (`items` is an object of `string` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'string',
              enum: [
                'string (1)',
                'string (2)',
                'string (3)'
              ]
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'string',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'string',
                        enum: [
                          'string (1)',
                          'string (2)',
                          'string (3)'
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      selectedItems: [],
                      required: false
                    },
                    elements: {
                      enum: {
                        id: '#/0',
                        items: [
                          'string (1)',
                          'string (2)',
                          'string (3)'
                        ],
                        selectedItems: [],
                        required: false
                      }
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `anyOf` (`items` is an object of `string` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'string',
              anyOf: [
                { const: 'string (1)' },
                { const: 'string (2)' },
                { const: 'string (3)' }
              ]
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'string',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'string',
                        anyOf: [
                          { const: 'string (1)' },
                          { const: 'string (2)' },
                          { const: 'string (3)' }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      selectedItems: [],
                      required: false
                    },
                    elements: {
                      anyOf: {
                        id: '#/0',
                        items: [
                          {
                            meta: {
                              type: 'string',
                              item: 0,
                              rootSchema: schema,
                              schema: {
                                const: 'string (1)'
                              },
                              parentUri: '#/0',
                              uri: '#/0/0',
                              required: false,
                              value: 'string (1)'
                            },
                            elements: {
                              field: {
                                id: '#/0/0',
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
                              parentUri: '#/0',
                              uri: '#/0/1',
                              required: false,
                              value: 'string (2)'
                            },
                            elements: {
                              field: {
                                id: '#/0/1',
                                required: false,
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
                              parentUri: '#/0',
                              uri: '#/0/2',
                              required: false,
                              value: 'string (3)'
                            },
                            elements: {
                              field: {
                                id: '#/0/2',
                                required: false,
                                value: 'string (3)'
                              }
                            }
                          }
                        ],
                        selectedItems: [],
                        required: false
                      }
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `oneOf` (`items` is an object of `string` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'string',
              oneOf: [
                { const: 'string (1)' },
                { const: 'string (2)' },
                { const: 'string (3)' }
              ]
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'string',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'string',
                        oneOf: [
                          { const: 'string (1)' },
                          { const: 'string (2)' },
                          { const: 'string (3)' }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      selectedItems: [],
                      required: false
                    },
                    elements: {
                      oneOf: {
                        id: '#/0',
                        items: [
                          {
                            meta: {
                              type: 'string',
                              item: 0,
                              rootSchema: schema,
                              schema: {
                                const: 'string (1)'
                              },
                              parentUri: '#/0',
                              uri: '#/0/0',
                              required: false,
                              value: 'string (1)'
                            },
                            elements: {
                              field: {
                                id: '#/0/0',
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
                              parentUri: '#/0',
                              uri: '#/0/1',
                              required: false,
                              value: 'string (2)'
                            },
                            elements: {
                              field: {
                                id: '#/0/1',
                                required: false,
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
                              parentUri: '#/0',
                              uri: '#/0/2',
                              required: false,
                              value: 'string (3)'
                            },
                            elements: {
                              field: {
                                id: '#/0/2',
                                required: false,
                                value: 'string (3)'
                              }
                            }
                          }
                        ],
                        selectedItems: [],
                        required: false
                      }
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `allOf` (`items` is an object of `string` type)', () => {
          const schema = {
            type: 'array',
            items: {
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'string',
                      item: 0,
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
                      parentUri: '#/',
                      uri: '#/0',
                      minLength: 1,
                      maxLength: 100,
                      required: false,
                      value: 'string'
                    },
                    elements: {
                      field: {
                        id: '#/0',
                        minLength: 1,
                        maxLength: 100,
                        required: false,
                        value: 'string'
                      }
                    }
                  }
                ]
              }
            })
        })

        /*
         *  Number
         */
        it('transforms `array` type schemas with `enum` (`items` is an object of `number` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'number',
              enum: [
                1,
                2,
                3
              ]
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'number',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'number',
                        enum: [
                          1,
                          2,
                          3
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      selectedItems: [],
                      required: false
                    },
                    elements: {
                      enum: {
                        id: '#/0',
                        items: [
                          1,
                          2,
                          3
                        ],
                        selectedItems: [],
                        required: false
                      }
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `anyOf` (`items` is an object of `number` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'number',
              anyOf: [
                { const: 1 },
                { const: 2 },
                { const: 3 }
              ]
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'number',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'number',
                        anyOf: [
                          { const: 1 },
                          { const: 2 },
                          { const: 3 }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      selectedItems: [],
                      required: false
                    },
                    elements: {
                      anyOf: {
                        id: '#/0',
                        items: [
                          {
                            meta: {
                              type: 'number',
                              item: 0,
                              rootSchema: schema,
                              schema: {
                                const: 1
                              },
                              parentUri: '#/0',
                              uri: '#/0/0',
                              required: false,
                              value: '1'
                            },
                            elements: {
                              field: {
                                id: '#/0/0',
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
                              parentUri: '#/0',
                              uri: '#/0/1',
                              required: false,
                              value: '2'
                            },
                            elements: {
                              field: {
                                id: '#/0/1',
                                required: false,
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
                              parentUri: '#/0',
                              uri: '#/0/2',
                              required: false,
                              value: '3'
                            },
                            elements: {
                              field: {
                                id: '#/0/2',
                                required: false,
                                value: '3'
                              }
                            }
                          }
                        ],
                        selectedItems: [],
                        required: false
                      }
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `oneOf` (`items` is an object of `number` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'number',
              oneOf: [
                { const: 1 },
                { const: 2 },
                { const: 3 }
              ]
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'number',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'number',
                        oneOf: [
                          { const: 1 },
                          { const: 2 },
                          { const: 3 }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      selectedItems: [],
                      required: false
                    },
                    elements: {
                      oneOf: {
                        id: '#/0',
                        items: [
                          {
                            meta: {
                              type: 'number',
                              item: 0,
                              rootSchema: schema,
                              schema: {
                                const: 1
                              },
                              parentUri: '#/0',
                              uri: '#/0/0',
                              required: false,
                              value: '1'
                            },
                            elements: {
                              field: {
                                id: '#/0/0',
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
                              parentUri: '#/0',
                              uri: '#/0/1',
                              required: false,
                              value: '2'
                            },
                            elements: {
                              field: {
                                id: '#/0/1',
                                required: false,
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
                              parentUri: '#/0',
                              uri: '#/0/2',
                              required: false,
                              value: '3'
                            },
                            elements: {
                              field: {
                                id: '#/0/2',
                                required: false,
                                value: '3'
                              }
                            }
                          }
                        ],
                        selectedItems: [],
                        required: false
                      }
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `allOf` (`items` is an object of `number` type)', () => {
          const schema = {
            type: 'array',
            items: {
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'number',
                      item: 0,
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
                      parentUri: '#/',
                      uri: '#/0',
                      min: 1,
                      max: 3,
                      required: false,
                      value: '2'
                    },
                    elements: {
                      field: {
                        id: '#/0',
                        min: 1,
                        max: 3,
                        required: false,
                        value: '2'
                      }
                    }
                  }
                ]
              }
            })
        })

        /*
         *  Array
         */
        it('transforms `array` type schemas with `enum` (`items` is an object and `items` is an array of `string` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: [
                {
                  type: 'string',
                  enum: [
                    'string (1)',
                    'string (2)',
                    'string (3)'
                  ]
                }
              ]
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'string',
                            enum: [
                              'string (1)',
                              'string (2)',
                              'string (3)'
                            ]
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'string',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'string',
                              enum: [
                                'string (1)',
                                'string (2)',
                                'string (3)'
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            enum: {
                              id: '#/0/0',
                              items: [
                                'string (1)',
                                'string (2)',
                                'string (3)'
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `anyOf` (`items` is an object and `items` is an array of `string` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: [
                {
                  type: 'string',
                  anyOf: [
                    { const: 'string (1)' },
                    { const: 'string (2)' },
                    { const: 'string (3)' }
                  ]
                }
              ]
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'string',
                            anyOf: [
                              { const: 'string (1)' },
                              { const: 'string (2)' },
                              { const: 'string (3)' }
                            ]
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'string',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'string',
                              anyOf: [
                                { const: 'string (1)' },
                                { const: 'string (2)' },
                                { const: 'string (3)' }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            anyOf: {
                              id: '#/0/0',
                              items: [
                                {
                                  meta: {
                                    type: 'string',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: 'string (1)'
                                    },
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/0',
                                    required: false,
                                    value: 'string (1)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/0',
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
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/1',
                                    required: false,
                                    value: 'string (2)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/1',
                                      required: false,
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
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/2',
                                    required: false,
                                    value: 'string (3)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/2',
                                      required: false,
                                      value: 'string (3)'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `oneOf` (`items` is an object and `items` is an array of `string` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: [
                {
                  type: 'string',
                  oneOf: [
                    { const: 'string (1)' },
                    { const: 'string (2)' },
                    { const: 'string (3)' }
                  ]
                }
              ]
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'string',
                            oneOf: [
                              { const: 'string (1)' },
                              { const: 'string (2)' },
                              { const: 'string (3)' }
                            ]
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'string',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'string',
                              oneOf: [
                                { const: 'string (1)' },
                                { const: 'string (2)' },
                                { const: 'string (3)' }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            oneOf: {
                              id: '#/0/0',
                              items: [
                                {
                                  meta: {
                                    type: 'string',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: 'string (1)'
                                    },
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/0',
                                    required: false,
                                    value: 'string (1)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/0',
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
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/1',
                                    required: false,
                                    value: 'string (2)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/1',
                                      required: false,
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
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/2',
                                    required: false,
                                    value: 'string (3)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/2',
                                      required: false,
                                      value: 'string (3)'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `allOf` (`items` is an object and `items` is an array of `string` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: [
                {
                  type: 'string',
                  allOf: [
                    { minLength: 1 },
                    {
                      const: 'string',
                      maxLength: 100
                    }
                  ]
                }
              ]
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'string',
                            allOf: [
                              { minLength: 1 },
                              {
                                const: 'string',
                                maxLength: 100
                              }
                            ]
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'string',
                            item: 0,
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
                            parentUri: '#/0',
                            uri: '#/0/0',
                            minLength: 1,
                            maxLength: 100,
                            required: false,
                            value: 'string'
                          },
                          elements: {
                            field: {
                              id: '#/0/0',
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

        it('transforms `array` type schemas with `enum` (`items` is an object and `items` is an array of `number` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: [
                {
                  type: 'number',
                  enum: [
                    1,
                    2,
                    3
                  ]
                }
              ]
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'number',
                            enum: [
                              1,
                              2,
                              3
                            ]
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'number',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'number',
                              enum: [
                                1,
                                2,
                                3
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            enum: {
                              id: '#/0/0',
                              items: [
                                1,
                                2,
                                3
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `anyOf` (`items` is an object and `items` is an array of `number` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: [
                {
                  type: 'number',
                  anyOf: [
                    { const: 1 },
                    { const: 2 },
                    { const: 3 }
                  ]
                }
              ]
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'number',
                            anyOf: [
                              { const: 1 },
                              { const: 2 },
                              { const: 3 }
                            ]
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'number',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'number',
                              anyOf: [
                                { const: 1 },
                                { const: 2 },
                                { const: 3 }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            anyOf: {
                              id: '#/0/0',
                              items: [
                                {
                                  meta: {
                                    type: 'number',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: 1
                                    },
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/0',
                                    required: false,
                                    value: '1'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/0',
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
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/1',
                                    required: false,
                                    value: '2'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/1',
                                      required: false,
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
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/2',
                                    required: false,
                                    value: '3'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/2',
                                      required: false,
                                      value: '3'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `oneOf` (`items` is an object and `items` is an array of `number` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: [
                {
                  type: 'number',
                  oneOf: [
                    { const: 1 },
                    { const: 2 },
                    { const: 3 }
                  ]
                }
              ]
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'number',
                            oneOf: [
                              { const: 1 },
                              { const: 2 },
                              { const: 3 }
                            ]
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'number',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'number',
                              oneOf: [
                                { const: 1 },
                                { const: 2 },
                                { const: 3 }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            oneOf: {
                              id: '#/0/0',
                              items: [
                                {
                                  meta: {
                                    type: 'number',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: 1
                                    },
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/0',
                                    required: false,
                                    value: '1'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/0',
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
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/1',
                                    required: false,
                                    value: '2'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/1',
                                      required: false,
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
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/2',
                                    required: false,
                                    value: '3'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/2',
                                      required: false,
                                      value: '3'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `allOf` (`items` is an object and `items` is an array of `number` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: [
                {
                  type: 'number',
                  allOf: [
                    { minimum: 1 },
                    {
                      const: 2,
                      maximum: 3
                    }
                  ]
                }
              ]
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'number',
                            allOf: [
                              { minimum: 1 },
                              {
                                const: 2,
                                maximum: 3
                              }
                            ]
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'number',
                            item: 0,
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
                            parentUri: '#/0',
                            uri: '#/0/0',
                            min: 1,
                            max: 3,
                            required: false,
                            value: '2'
                          },
                          elements: {
                            field: {
                              id: '#/0/0',
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

        it('transforms `array` type schemas with `enum` (`items` is an object and `items` is an array of `boolean` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: [
                {
                  type: 'boolean',
                  enum: [
                    true,
                    false
                  ]
                }
              ]
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'boolean',
                            enum: [
                              true,
                              false
                            ]
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'boolean',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'boolean',
                              enum: [
                                true,
                                false
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            enum: {
                              id: '#/0/0',
                              items: [
                                true,
                                false
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `anyOf` (`items` is an object and `items` is an array of `boolean` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: [
                {
                  type: 'boolean',
                  anyOf: [
                    { const: true },
                    { const: false }
                  ]
                }
              ]
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'boolean',
                            anyOf: [
                              { const: true },
                              { const: false }
                            ]
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'boolean',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'boolean',
                              anyOf: [
                                { const: true },
                                { const: false }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            anyOf: {
                              id: '#/0/0',
                              items: [
                                {
                                  meta: {
                                    type: 'boolean',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: true
                                    },
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/0',
                                    required: false,
                                    value: 'true'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/0',
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
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/1',
                                    required: false,
                                    value: 'false'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/1',
                                      required: false,
                                      value: 'false'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `oneOf` (`items` is an object and `items` is an array of `boolean` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: [
                {
                  type: 'boolean',
                  oneOf: [
                    { const: true },
                    { const: false }
                  ]
                }
              ]
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'boolean',
                            oneOf: [
                              { const: true },
                              { const: false }
                            ]
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'boolean',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'boolean',
                              oneOf: [
                                { const: true },
                                { const: false }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            oneOf: {
                              id: '#/0/0',
                              items: [
                                {
                                  meta: {
                                    type: 'boolean',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: true
                                    },
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/0',
                                    required: false,
                                    value: 'true'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/0',
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
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/1',
                                    required: false,
                                    value: 'false'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/1',
                                      required: false,
                                      value: 'false'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `allOf` (`items` is an object and `items` is an array of `boolean` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: [
                {
                  type: 'boolean',
                  allOf: [
                    { const: true }
                  ]
                }
              ]
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'boolean',
                            allOf: [
                              { const: true }
                            ]
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'boolean',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'boolean',
                              allOf: [
                                { const: true }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false,
                            value: 'true'
                          },
                          elements: {
                            field: {
                              id: '#/0/0',
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

        it('transforms `array` type schemas with `enum` (`items` is an object and `items` is an array of `null` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: [
                {
                  type: 'null',
                  enum: [
                    null
                  ]
                }
              ]
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'null',
                            enum: [
                              null
                            ]
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'null',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'null',
                              enum: [
                                null
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            enum: {
                              id: '#/0/0',
                              items: [
                                null
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `anyOf` (`items` is an object and `items` is an array of `null` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: [
                {
                  type: 'null',
                  anyOf: [
                    { const: null }
                  ]
                }
              ]
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'null',
                            anyOf: [
                              { const: null }
                            ]
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'null',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'null',
                              anyOf: [
                                { const: null }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            anyOf: {
                              id: '#/0/0',
                              items: [
                                {
                                  meta: {
                                    type: 'null',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: null
                                    },
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/0',
                                    required: false,
                                    value: 'null'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/0',
                                      required: false,
                                      value: 'null'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `oneOf` (`items` is an object and `items` is an array of `null` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: [
                {
                  type: 'null',
                  oneOf: [
                    { const: null }
                  ]
                }
              ]
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'null',
                            oneOf: [
                              { const: null }
                            ]
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'null',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'null',
                              oneOf: [
                                { const: null }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            oneOf: {
                              id: '#/0/0',
                              items: [
                                {
                                  meta: {
                                    type: 'null',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: null
                                    },
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/0',
                                    required: false,
                                    value: 'null'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/0',
                                      required: false,
                                      value: 'null'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `allOf` (`items` is an object and `items` is an array of `null` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: [
                {
                  type: 'null',
                  allOf: [
                    { const: null }
                  ]
                }
              ]
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'null',
                            allOf: [
                              { const: null }
                            ]
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'null',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'null',
                              allOf: [
                                { const: null }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false,
                            value: 'null'
                          },
                          elements: {
                            field: {
                              id: '#/0/0',
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

        it('transforms `array` type schemas with `enum` (`items` is an object and `items` is an array of `object` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: [
                {
                  type: 'object',
                  properties: {
                    one: {
                      type: 'string',
                      enum: [
                        'string (1)',
                        'string (2)',
                        'string (3)'
                      ]
                    },
                    two: {
                      type: 'number',
                      enum: [
                        1,
                        2,
                        3
                      ]
                    }
                  }
                }
              ]
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'object',
                            properties: {
                              one: {
                                type: 'string',
                                enum: [
                                  'string (1)',
                                  'string (2)',
                                  'string (3)'
                                ]
                              },
                              two: {
                                type: 'number',
                                enum: [
                                  1,
                                  2,
                                  3
                                ]
                              }
                            }
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'object',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'object',
                              properties: {
                                one: {
                                  type: 'string',
                                  enum: [
                                    'string (1)',
                                    'string (2)',
                                    'string (3)'
                                  ]
                                },
                                two: {
                                  type: 'number',
                                  enum: [
                                    1,
                                    2,
                                    3
                                  ]
                                }
                              }
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            fields: [
                              {
                                meta: {
                                  type: 'string',
                                  name: 'one',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'string',
                                    enum: [
                                      'string (1)',
                                      'string (2)',
                                      'string (3)'
                                    ]
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/one',
                                  selectedItems: [],
                                  required: false
                                },
                                elements: {
                                  enum: {
                                    id: '#/0/0/one',
                                    items: [
                                      'string (1)',
                                      'string (2)',
                                      'string (3)'
                                    ],
                                    selectedItems: [],
                                    required: false
                                  }
                                }
                              },
                              {
                                meta: {
                                  type: 'number',
                                  name: 'two',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'number',
                                    enum: [
                                      1,
                                      2,
                                      3
                                    ]
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/two',
                                  selectedItems: [],
                                  required: false
                                },
                                elements: {
                                  enum: {
                                    id: '#/0/0/two',
                                    items: [
                                      1,
                                      2,
                                      3
                                    ],
                                    selectedItems: [],
                                    required: false
                                  }
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `anyOf` (`items` is an object and `items` is an array of `object` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: [
                {
                  type: 'object',
                  properties: {
                    one: {
                      type: 'string',
                      anyOf: [
                        { const: 'string (1)' },
                        { const: 'string (2)' },
                        { const: 'string (3)' }
                      ]
                    },
                    two: {
                      type: 'number',
                      anyOf: [
                        { const: 1 },
                        { const: 2 },
                        { const: 3 }
                      ]
                    }
                  }
                }
              ]
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'object',
                            properties: {
                              one: {
                                type: 'string',
                                anyOf: [
                                  { const: 'string (1)' },
                                  { const: 'string (2)' },
                                  { const: 'string (3)' }
                                ]
                              },
                              two: {
                                type: 'number',
                                anyOf: [
                                  { const: 1 },
                                  { const: 2 },
                                  { const: 3 }
                                ]
                              }
                            }
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'object',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'object',
                              properties: {
                                one: {
                                  type: 'string',
                                  anyOf: [
                                    { const: 'string (1)' },
                                    { const: 'string (2)' },
                                    { const: 'string (3)' }
                                  ]
                                },
                                two: {
                                  type: 'number',
                                  anyOf: [
                                    { const: 1 },
                                    { const: 2 },
                                    { const: 3 }
                                  ]
                                }
                              }
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            fields: [
                              {
                                meta: {
                                  type: 'string',
                                  name: 'one',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'string',
                                    anyOf: [
                                      { const: 'string (1)' },
                                      { const: 'string (2)' },
                                      { const: 'string (3)' }
                                    ]
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/one',
                                  selectedItems: [],
                                  required: false
                                },
                                elements: {
                                  anyOf: {
                                    id: '#/0/0/one',
                                    items: [
                                      {
                                        meta: {
                                          type: 'string',
                                          item: 0,
                                          rootSchema: schema,
                                          schema: {
                                            const: 'string (1)'
                                          },
                                          parentUri: '#/0/0/one',
                                          uri: '#/0/0/one/0',
                                          required: false,
                                          value: 'string (1)'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/one/0',
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
                                          parentUri: '#/0/0/one',
                                          uri: '#/0/0/one/1',
                                          required: false,
                                          value: 'string (2)'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/one/1',
                                            required: false,
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
                                          parentUri: '#/0/0/one',
                                          uri: '#/0/0/one/2',
                                          required: false,
                                          value: 'string (3)'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/one/2',
                                            required: false,
                                            value: 'string (3)'
                                          }
                                        }
                                      }
                                    ],
                                    selectedItems: [],
                                    required: false
                                  }
                                }
                              },
                              {
                                meta: {
                                  type: 'number',
                                  name: 'two',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'number',
                                    anyOf: [
                                      { const: 1 },
                                      { const: 2 },
                                      { const: 3 }
                                    ]
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/two',
                                  selectedItems: [],
                                  required: false
                                },
                                elements: {
                                  anyOf: {
                                    id: '#/0/0/two',
                                    items: [
                                      {
                                        meta: {
                                          type: 'number',
                                          item: 0,
                                          rootSchema: schema,
                                          schema: {
                                            const: 1
                                          },
                                          parentUri: '#/0/0/two',
                                          uri: '#/0/0/two/0',
                                          required: false,
                                          value: '1'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/two/0',
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
                                          parentUri: '#/0/0/two',
                                          uri: '#/0/0/two/1',
                                          required: false,
                                          value: '2'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/two/1',
                                            required: false,
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
                                          parentUri: '#/0/0/two',
                                          uri: '#/0/0/two/2',
                                          required: false,
                                          value: '3'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/two/2',
                                            required: false,
                                            value: '3'
                                          }
                                        }
                                      }
                                    ],
                                    selectedItems: [],
                                    required: false
                                  }
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `oneOf` (`items` is an object and `items` is an array of `object` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: [
                {
                  type: 'object',
                  properties: {
                    one: {
                      type: 'string',
                      oneOf: [
                        { const: 'string (1)' },
                        { const: 'string (2)' },
                        { const: 'string (3)' }
                      ]
                    },
                    two: {
                      type: 'number',
                      oneOf: [
                        { const: 1 },
                        { const: 2 },
                        { const: 3 }
                      ]
                    }
                  }
                }
              ]
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'object',
                            properties: {
                              one: {
                                type: 'string',
                                oneOf: [
                                  { const: 'string (1)' },
                                  { const: 'string (2)' },
                                  { const: 'string (3)' }
                                ]
                              },
                              two: {
                                type: 'number',
                                oneOf: [
                                  { const: 1 },
                                  { const: 2 },
                                  { const: 3 }
                                ]
                              }
                            }
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'object',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'object',
                              properties: {
                                one: {
                                  type: 'string',
                                  oneOf: [
                                    { const: 'string (1)' },
                                    { const: 'string (2)' },
                                    { const: 'string (3)' }
                                  ]
                                },
                                two: {
                                  type: 'number',
                                  oneOf: [
                                    { const: 1 },
                                    { const: 2 },
                                    { const: 3 }
                                  ]
                                }
                              }
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            fields: [
                              {
                                meta: {
                                  type: 'string',
                                  name: 'one',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'string',
                                    oneOf: [
                                      { const: 'string (1)' },
                                      { const: 'string (2)' },
                                      { const: 'string (3)' }
                                    ]
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/one',
                                  selectedItems: [],
                                  required: false
                                },
                                elements: {
                                  oneOf: {
                                    id: '#/0/0/one',
                                    items: [
                                      {
                                        meta: {
                                          type: 'string',
                                          item: 0,
                                          rootSchema: schema,
                                          schema: {
                                            const: 'string (1)'
                                          },
                                          parentUri: '#/0/0/one',
                                          uri: '#/0/0/one/0',
                                          required: false,
                                          value: 'string (1)'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/one/0',
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
                                          parentUri: '#/0/0/one',
                                          uri: '#/0/0/one/1',
                                          required: false,
                                          value: 'string (2)'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/one/1',
                                            required: false,
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
                                          parentUri: '#/0/0/one',
                                          uri: '#/0/0/one/2',
                                          required: false,
                                          value: 'string (3)'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/one/2',
                                            required: false,
                                            value: 'string (3)'
                                          }
                                        }
                                      }
                                    ],
                                    selectedItems: [],
                                    required: false
                                  }
                                }
                              },
                              {
                                meta: {
                                  type: 'number',
                                  name: 'two',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'number',
                                    oneOf: [
                                      { const: 1 },
                                      { const: 2 },
                                      { const: 3 }
                                    ]
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/two',
                                  selectedItems: [],
                                  required: false
                                },
                                elements: {
                                  oneOf: {
                                    id: '#/0/0/two',
                                    items: [
                                      {
                                        meta: {
                                          type: 'number',
                                          item: 0,
                                          rootSchema: schema,
                                          schema: {
                                            const: 1
                                          },
                                          parentUri: '#/0/0/two',
                                          uri: '#/0/0/two/0',
                                          required: false,
                                          value: '1'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/two/0',
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
                                          parentUri: '#/0/0/two',
                                          uri: '#/0/0/two/1',
                                          required: false,
                                          value: '2'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/two/1',
                                            required: false,
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
                                          parentUri: '#/0/0/two',
                                          uri: '#/0/0/two/2',
                                          required: false,
                                          value: '3'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/two/2',
                                            required: false,
                                            value: '3'
                                          }
                                        }
                                      }
                                    ],
                                    selectedItems: [],
                                    required: false
                                  }
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `allOf` (`items` is an object and `items` is an array of `object` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: [
                {
                  type: 'object',
                  properties: {
                    one: {
                      type: 'string',
                      allOf: [
                        { minLength: 1 },
                        {
                          const: 'string',
                          maxLength: 100
                        }
                      ]
                    },
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
              ]
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'object',
                            properties: {
                              one: {
                                type: 'string',
                                allOf: [
                                  { minLength: 1 },
                                  {
                                    const: 'string',
                                    maxLength: 100
                                  }
                                ]
                              },
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
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'object',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'object',
                              properties: {
                                one: {
                                  type: 'string',
                                  allOf: [
                                    { minLength: 1 },
                                    {
                                      const: 'string',
                                      maxLength: 100
                                    }
                                  ]
                                },
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
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            fields: [
                              {
                                meta: {
                                  type: 'string',
                                  name: 'one',
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
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/one',
                                  minLength: 1,
                                  maxLength: 100,
                                  required: false,
                                  value: 'string'
                                },
                                elements: {
                                  field: {
                                    id: '#/0/0/one',
                                    minLength: 1,
                                    maxLength: 100,
                                    required: false,
                                    value: 'string'
                                  }
                                }
                              },
                              {
                                meta: {
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
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/two',
                                  min: 1,
                                  max: 3,
                                  required: false,
                                  value: '2'
                                },
                                elements: {
                                  field: {
                                    id: '#/0/0/two',
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
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `enum` (`items` is an object and `items` is an array of `object` type with `required`)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: [
                {
                  type: 'object',
                  properties: {
                    one: {
                      type: 'string',
                      enum: [
                        'string (1)',
                        'string (2)',
                        'string (3)'
                      ]
                    },
                    two: {
                      type: 'number',
                      enum: [
                        1,
                        2,
                        3
                      ]
                    }
                  },
                  required: [
                    'one'
                  ]
                }
              ]
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'object',
                            properties: {
                              one: {
                                type: 'string',
                                enum: [
                                  'string (1)',
                                  'string (2)',
                                  'string (3)'
                                ]
                              },
                              two: {
                                type: 'number',
                                enum: [
                                  1,
                                  2,
                                  3
                                ]
                              }
                            },
                            required: [
                              'one'
                            ]
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'object',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'object',
                              properties: {
                                one: {
                                  type: 'string',
                                  enum: [
                                    'string (1)',
                                    'string (2)',
                                    'string (3)'
                                  ]
                                },
                                two: {
                                  type: 'number',
                                  enum: [
                                    1,
                                    2,
                                    3
                                  ]
                                }
                              },
                              required: [
                                'one'
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            fields: [
                              {
                                meta: {
                                  type: 'string',
                                  name: 'one',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'string',
                                    enum: [
                                      'string (1)',
                                      'string (2)',
                                      'string (3)'
                                    ]
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/one',
                                  selectedItems: [],
                                  required: true
                                },
                                elements: {
                                  enum: {
                                    id: '#/0/0/one',
                                    items: [
                                      'string (1)',
                                      'string (2)',
                                      'string (3)'
                                    ],
                                    selectedItems: [],
                                    required: true
                                  }
                                }
                              },
                              {
                                meta: {
                                  type: 'number',
                                  name: 'two',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'number',
                                    enum: [
                                      1,
                                      2,
                                      3
                                    ]
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/two',
                                  selectedItems: [],
                                  required: false
                                },
                                elements: {
                                  enum: {
                                    id: '#/0/0/two',
                                    items: [
                                      1,
                                      2,
                                      3
                                    ],
                                    selectedItems: [],
                                    required: false
                                  }
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `anyOf` (`items` is an object and `items` is an array of `object` type with `required`)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: [
                {
                  type: 'object',
                  properties: {
                    one: {
                      type: 'string',
                      anyOf: [
                        { const: 'string (1)' },
                        { const: 'string (2)' },
                        { const: 'string (3)' }
                      ]
                    },
                    two: {
                      type: 'number',
                      anyOf: [
                        { const: 1 },
                        { const: 2 },
                        { const: 3 }
                      ]
                    }
                  },
                  required: [
                    'one'
                  ]
                }
              ]
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'object',
                            properties: {
                              one: {
                                type: 'string',
                                anyOf: [
                                  { const: 'string (1)' },
                                  { const: 'string (2)' },
                                  { const: 'string (3)' }
                                ]
                              },
                              two: {
                                type: 'number',
                                anyOf: [
                                  { const: 1 },
                                  { const: 2 },
                                  { const: 3 }
                                ]
                              }
                            },
                            required: [
                              'one'
                            ]
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'object',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'object',
                              properties: {
                                one: {
                                  type: 'string',
                                  anyOf: [
                                    { const: 'string (1)' },
                                    { const: 'string (2)' },
                                    { const: 'string (3)' }
                                  ]
                                },
                                two: {
                                  type: 'number',
                                  anyOf: [
                                    { const: 1 },
                                    { const: 2 },
                                    { const: 3 }
                                  ]
                                }
                              },
                              required: [
                                'one'
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            fields: [
                              {
                                meta: {
                                  type: 'string',
                                  name: 'one',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'string',
                                    anyOf: [
                                      { const: 'string (1)' },
                                      { const: 'string (2)' },
                                      { const: 'string (3)' }
                                    ]
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/one',
                                  selectedItems: [],
                                  required: true
                                },
                                elements: {
                                  anyOf: {
                                    id: '#/0/0/one',
                                    items: [
                                      {
                                        meta: {
                                          type: 'string',
                                          item: 0,
                                          rootSchema: schema,
                                          schema: {
                                            const: 'string (1)'
                                          },
                                          parentUri: '#/0/0/one',
                                          uri: '#/0/0/one/0',
                                          required: true,
                                          value: 'string (1)'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/one/0',
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
                                          parentUri: '#/0/0/one',
                                          uri: '#/0/0/one/1',
                                          required: true,
                                          value: 'string (2)'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/one/1',
                                            required: true,
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
                                          parentUri: '#/0/0/one',
                                          uri: '#/0/0/one/2',
                                          required: true,
                                          value: 'string (3)'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/one/2',
                                            required: true,
                                            value: 'string (3)'
                                          }
                                        }
                                      }
                                    ],
                                    selectedItems: [],
                                    required: true
                                  }
                                }
                              },
                              {
                                meta: {
                                  type: 'number',
                                  name: 'two',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'number',
                                    anyOf: [
                                      { const: 1 },
                                      { const: 2 },
                                      { const: 3 }
                                    ]
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/two',
                                  selectedItems: [],
                                  required: false
                                },
                                elements: {
                                  anyOf: {
                                    id: '#/0/0/two',
                                    items: [
                                      {
                                        meta: {
                                          type: 'number',
                                          item: 0,
                                          rootSchema: schema,
                                          schema: {
                                            const: 1
                                          },
                                          parentUri: '#/0/0/two',
                                          uri: '#/0/0/two/0',
                                          required: false,
                                          value: '1'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/two/0',
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
                                          parentUri: '#/0/0/two',
                                          uri: '#/0/0/two/1',
                                          required: false,
                                          value: '2'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/two/1',
                                            required: false,
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
                                          parentUri: '#/0/0/two',
                                          uri: '#/0/0/two/2',
                                          required: false,
                                          value: '3'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/two/2',
                                            required: false,
                                            value: '3'
                                          }
                                        }
                                      }
                                    ],
                                    selectedItems: [],
                                    required: false
                                  }
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `oneOf` (`items` is an object and `items` is an array of `object` type with `required`)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: [
                {
                  type: 'object',
                  properties: {
                    one: {
                      type: 'string',
                      oneOf: [
                        { const: 'string (1)' },
                        { const: 'string (2)' },
                        { const: 'string (3)' }
                      ]
                    },
                    two: {
                      type: 'number',
                      oneOf: [
                        { const: 1 },
                        { const: 2 },
                        { const: 3 }
                      ]
                    }
                  },
                  required: [
                    'one'
                  ]
                }
              ]
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'object',
                            properties: {
                              one: {
                                type: 'string',
                                oneOf: [
                                  { const: 'string (1)' },
                                  { const: 'string (2)' },
                                  { const: 'string (3)' }
                                ]
                              },
                              two: {
                                type: 'number',
                                oneOf: [
                                  { const: 1 },
                                  { const: 2 },
                                  { const: 3 }
                                ]
                              }
                            },
                            required: [
                              'one'
                            ]
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'object',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'object',
                              properties: {
                                one: {
                                  type: 'string',
                                  oneOf: [
                                    { const: 'string (1)' },
                                    { const: 'string (2)' },
                                    { const: 'string (3)' }
                                  ]
                                },
                                two: {
                                  type: 'number',
                                  oneOf: [
                                    { const: 1 },
                                    { const: 2 },
                                    { const: 3 }
                                  ]
                                }
                              },
                              required: [
                                'one'
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            fields: [
                              {
                                meta: {
                                  type: 'string',
                                  name: 'one',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'string',
                                    oneOf: [
                                      { const: 'string (1)' },
                                      { const: 'string (2)' },
                                      { const: 'string (3)' }
                                    ]
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/one',
                                  selectedItems: [],
                                  required: true
                                },
                                elements: {
                                  oneOf: {
                                    id: '#/0/0/one',
                                    items: [
                                      {
                                        meta: {
                                          type: 'string',
                                          item: 0,
                                          rootSchema: schema,
                                          schema: {
                                            const: 'string (1)'
                                          },
                                          parentUri: '#/0/0/one',
                                          uri: '#/0/0/one/0',
                                          required: true,
                                          value: 'string (1)'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/one/0',
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
                                          parentUri: '#/0/0/one',
                                          uri: '#/0/0/one/1',
                                          required: true,
                                          value: 'string (2)'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/one/1',
                                            required: true,
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
                                          parentUri: '#/0/0/one',
                                          uri: '#/0/0/one/2',
                                          required: true,
                                          value: 'string (3)'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/one/2',
                                            required: true,
                                            value: 'string (3)'
                                          }
                                        }
                                      }
                                    ],
                                    selectedItems: [],
                                    required: true
                                  }
                                }
                              },
                              {
                                meta: {
                                  type: 'number',
                                  name: 'two',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'number',
                                    oneOf: [
                                      { const: 1 },
                                      { const: 2 },
                                      { const: 3 }
                                    ]
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/two',
                                  selectedItems: [],
                                  required: false
                                },
                                elements: {
                                  oneOf: {
                                    id: '#/0/0/two',
                                    items: [
                                      {
                                        meta: {
                                          type: 'number',
                                          item: 0,
                                          rootSchema: schema,
                                          schema: {
                                            const: 1
                                          },
                                          parentUri: '#/0/0/two',
                                          uri: '#/0/0/two/0',
                                          required: false,
                                          value: '1'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/two/0',
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
                                          parentUri: '#/0/0/two',
                                          uri: '#/0/0/two/1',
                                          required: false,
                                          value: '2'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/two/1',
                                            required: false,
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
                                          parentUri: '#/0/0/two',
                                          uri: '#/0/0/two/2',
                                          required: false,
                                          value: '3'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/two/2',
                                            required: false,
                                            value: '3'
                                          }
                                        }
                                      }
                                    ],
                                    selectedItems: [],
                                    required: false
                                  }
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `allOf` (`items` is an object and `items` is an array of `object` type with `required`)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: [
                {
                  type: 'object',
                  properties: {
                    one: {
                      type: 'string',
                      allOf: [
                        { minLength: 1 },
                        {
                          const: 'string',
                          maxLength: 100
                        }
                      ]
                    },
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
                  },
                  required: [
                    'one'
                  ]
                }
              ]
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'object',
                            properties: {
                              one: {
                                type: 'string',
                                allOf: [
                                  { minLength: 1 },
                                  {
                                    const: 'string',
                                    maxLength: 100
                                  }
                                ]
                              },
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
                            },
                            required: [
                              'one'
                            ]
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'object',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'object',
                              properties: {
                                one: {
                                  type: 'string',
                                  allOf: [
                                    { minLength: 1 },
                                    {
                                      const: 'string',
                                      maxLength: 100
                                    }
                                  ]
                                },
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
                              },
                              required: [
                                'one'
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            fields: [
                              {
                                meta: {
                                  type: 'string',
                                  name: 'one',
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
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/one',
                                  minLength: 1,
                                  maxLength: 100,
                                  required: true,
                                  value: 'string'
                                },
                                elements: {
                                  field: {
                                    id: '#/0/0/one',
                                    minLength: 1,
                                    maxLength: 100,
                                    required: true,
                                    value: 'string'
                                  }
                                }
                              },
                              {
                                meta: {
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
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/two',
                                  min: 1,
                                  max: 3,
                                  required: false,
                                  value: '2'
                                },
                                elements: {
                                  field: {
                                    id: '#/0/0/two',
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
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `enum` (`items` is an object and `items` is an object of `string` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: {
                type: 'string',
                enum: [
                  'string (1)',
                  'string (2)',
                  'string (3)'
                ]
              }
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'string',
                          enum: [
                            'string (1)',
                            'string (2)',
                            'string (3)'
                          ]
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'string',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'string',
                              enum: [
                                'string (1)',
                                'string (2)',
                                'string (3)'
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            enum: {
                              id: '#/0/0',
                              items: [
                                'string (1)',
                                'string (2)',
                                'string (3)'
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `anyOf` (`items` is an object and `items` is an object of `string` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: {
                type: 'string',
                anyOf: [
                  { const: 'string (1)' },
                  { const: 'string (2)' },
                  { const: 'string (3)' }
                ]
              }
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'string',
                          anyOf: [
                            { const: 'string (1)' },
                            { const: 'string (2)' },
                            { const: 'string (3)' }
                          ]
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'string',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'string',
                              anyOf: [
                                { const: 'string (1)' },
                                { const: 'string (2)' },
                                { const: 'string (3)' }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            anyOf: {
                              id: '#/0/0',
                              items: [
                                {
                                  meta: {
                                    type: 'string',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: 'string (1)'
                                    },
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/0',
                                    required: false,
                                    value: 'string (1)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/0',
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
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/1',
                                    required: false,
                                    value: 'string (2)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/1',
                                      required: false,
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
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/2',
                                    required: false,
                                    value: 'string (3)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/2',
                                      required: false,
                                      value: 'string (3)'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `oneOf` (`items` is an object and `items` is an object of `string` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: {
                type: 'string',
                oneOf: [
                  { const: 'string (1)' },
                  { const: 'string (2)' },
                  { const: 'string (3)' }
                ]
              }
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'string',
                          oneOf: [
                            { const: 'string (1)' },
                            { const: 'string (2)' },
                            { const: 'string (3)' }
                          ]
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'string',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'string',
                              oneOf: [
                                { const: 'string (1)' },
                                { const: 'string (2)' },
                                { const: 'string (3)' }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            oneOf: {
                              id: '#/0/0',
                              items: [
                                {
                                  meta: {
                                    type: 'string',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: 'string (1)'
                                    },
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/0',
                                    required: false,
                                    value: 'string (1)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/0',
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
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/1',
                                    required: false,
                                    value: 'string (2)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/1',
                                      required: false,
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
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/2',
                                    required: false,
                                    value: 'string (3)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/2',
                                      required: false,
                                      value: 'string (3)'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `allOf` (`items` is an object and `items` is an object of `string` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: {
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'string',
                          allOf: [
                            { minLength: 1 },
                            {
                              const: 'string',
                              maxLength: 100
                            }
                          ]
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'string',
                            item: 0,
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
                            parentUri: '#/0',
                            uri: '#/0/0',
                            minLength: 1,
                            maxLength: 100,
                            required: false,
                            value: 'string'
                          },
                          elements: {
                            field: {
                              id: '#/0/0',
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

        it('transforms `array` type schemas with `enum` (`items` is an object and `items` is an object of `number` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: {
                type: 'number',
                enum: [
                  1,
                  2,
                  3
                ]
              }
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'number',
                          enum: [
                            1,
                            2,
                            3
                          ]
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'number',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'number',
                              enum: [
                                1,
                                2,
                                3
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            enum: {
                              id: '#/0/0',
                              items: [
                                1,
                                2,
                                3
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `anyOf` (`items` is an object and `items` is an object of `number` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: {
                type: 'number',
                anyOf: [
                  { const: 1 },
                  { const: 2 },
                  { const: 3 }
                ]
              }
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'number',
                          anyOf: [
                            { const: 1 },
                            { const: 2 },
                            { const: 3 }
                          ]
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'number',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'number',
                              anyOf: [
                                { const: 1 },
                                { const: 2 },
                                { const: 3 }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            anyOf: {
                              id: '#/0/0',
                              items: [
                                {
                                  meta: {
                                    type: 'number',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: 1
                                    },
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/0',
                                    required: false,
                                    value: '1'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/0',
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
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/1',
                                    required: false,
                                    value: '2'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/1',
                                      required: false,
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
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/2',
                                    required: false,
                                    value: '3'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/2',
                                      required: false,
                                      value: '3'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `oneOf` (`items` is an object and `items` is an object of `number` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: {
                type: 'number',
                oneOf: [
                  { const: 1 },
                  { const: 2 },
                  { const: 3 }
                ]
              }
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'number',
                          oneOf: [
                            { const: 1 },
                            { const: 2 },
                            { const: 3 }
                          ]
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'number',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'number',
                              oneOf: [
                                { const: 1 },
                                { const: 2 },
                                { const: 3 }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            oneOf: {
                              id: '#/0/0',
                              items: [
                                {
                                  meta: {
                                    type: 'number',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: 1
                                    },
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/0',
                                    required: false,
                                    value: '1'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/0',
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
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/1',
                                    required: false,
                                    value: '2'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/1',
                                      required: false,
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
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/2',
                                    required: false,
                                    value: '3'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/2',
                                      required: false,
                                      value: '3'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `allOf` (`items` is an object and `items` is an object of `number` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: {
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'number',
                          allOf: [
                            { minimum: 1 },
                            {
                              const: 2,
                              maximum: 3
                            }
                          ]
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'number',
                            item: 0,
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
                            parentUri: '#/0',
                            uri: '#/0/0',
                            min: 1,
                            max: 3,
                            required: false,
                            value: '2'
                          },
                          elements: {
                            field: {
                              id: '#/0/0',
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

        it('transforms `array` type schemas with `enum` (`items` is an object and `items` is an object of `boolean` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: {
                type: 'boolean',
                enum: [
                  true,
                  false
                ]
              }
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'boolean',
                          enum: [
                            true,
                            false
                          ]
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'boolean',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'boolean',
                              enum: [
                                true,
                                false
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            enum: {
                              id: '#/0/0',
                              items: [
                                true,
                                false
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `anyOf` (`items` is an object and `items` is an object of `boolean` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: {
                type: 'boolean',
                anyOf: [
                  { const: true },
                  { const: false }
                ]
              }
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'boolean',
                          anyOf: [
                            { const: true },
                            { const: false }
                          ]
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'boolean',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'boolean',
                              anyOf: [
                                { const: true },
                                { const: false }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            anyOf: {
                              id: '#/0/0',
                              items: [
                                {
                                  meta: {
                                    type: 'boolean',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: true
                                    },
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/0',
                                    required: false,
                                    value: 'true'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/0',
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
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/1',
                                    required: false,
                                    value: 'false'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/1',
                                      required: false,
                                      value: 'false'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `oneOf` (`items` is an object and `items` is an object of `boolean` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: {
                type: 'boolean',
                oneOf: [
                  { const: true },
                  { const: false }
                ]
              }
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'boolean',
                          oneOf: [
                            { const: true },
                            { const: false }
                          ]
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'boolean',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'boolean',
                              oneOf: [
                                { const: true },
                                { const: false }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            oneOf: {
                              id: '#/0/0',
                              items: [
                                {
                                  meta: {
                                    type: 'boolean',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: true
                                    },
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/0',
                                    required: false,
                                    value: 'true'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/0',
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
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/1',
                                    required: false,
                                    value: 'false'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/1',
                                      required: false,
                                      value: 'false'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `allOf` (`items` is an object and `items` is an object of `boolean` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: {
                type: 'boolean',
                allOf: [
                  { const: true }
                ]
              }
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'boolean',
                          allOf: [
                            { const: true }
                          ]
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'boolean',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'boolean',
                              allOf: [
                                { const: true }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false,
                            value: 'true'
                          },
                          elements: {
                            field: {
                              id: '#/0/0',
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

        it('transforms `array` type schemas with `enum` (`items` is an object and `items` is an object of `null` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: {
                type: 'null',
                enum: [
                  null
                ]
              }
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'null',
                          enum: [
                            null
                          ]
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'null',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'null',
                              enum: [
                                null
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            enum: {
                              id: '#/0/0',
                              items: [
                                null
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `anyOf` (`items` is an object and `items` is an object of `null` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: {
                type: 'null',
                anyOf: [
                  { const: null }
                ]
              }
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'null',
                          anyOf: [
                            { const: null }
                          ]
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'null',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'null',
                              anyOf: [
                                { const: null }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            anyOf: {
                              id: '#/0/0',
                              items: [
                                {
                                  meta: {
                                    type: 'null',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: null
                                    },
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/0',
                                    required: false,
                                    value: 'null'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/0',
                                      required: false,
                                      value: 'null'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `oneOf` (`items` is an object and `items` is an object of `null` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: {
                type: 'null',
                oneOf: [
                  { const: null }
                ]
              }
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'null',
                          oneOf: [
                            { const: null }
                          ]
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'null',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'null',
                              oneOf: [
                                { const: null }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            oneOf: {
                              id: '#/0/0',
                              items: [
                                {
                                  meta: {
                                    type: 'null',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: null
                                    },
                                    parentUri: '#/0/0',
                                    uri: '#/0/0/0',
                                    required: false,
                                    value: 'null'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/0/0',
                                      required: false,
                                      value: 'null'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `allOf` (`items` is an object and `items` is an object of `null` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: {
                type: 'null',
                allOf: [
                  { const: null }
                ]
              }
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'null',
                          allOf: [
                            { const: null }
                          ]
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'null',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'null',
                              allOf: [
                                { const: null }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false,
                            value: 'null'
                          },
                          elements: {
                            field: {
                              id: '#/0/0',
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

        it('transforms `array` type schemas with `enum` (`items` is an object and `items` is an object of `object` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  one: {
                    type: 'string',
                    enum: [
                      'string (1)',
                      'string (2)',
                      'string (3)'
                    ]
                  },
                  two: {
                    type: 'number',
                    enum: [
                      1,
                      2,
                      3
                    ]
                  }
                }
              }
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            one: {
                              type: 'string',
                              enum: [
                                'string (1)',
                                'string (2)',
                                'string (3)'
                              ]
                            },
                            two: {
                              type: 'number',
                              enum: [
                                1,
                                2,
                                3
                              ]
                            }
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'object',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'object',
                              properties: {
                                one: {
                                  type: 'string',
                                  enum: [
                                    'string (1)',
                                    'string (2)',
                                    'string (3)'
                                  ]
                                },
                                two: {
                                  type: 'number',
                                  enum: [
                                    1,
                                    2,
                                    3
                                  ]
                                }
                              }
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            fields: [
                              {
                                meta: {
                                  type: 'string',
                                  name: 'one',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'string',
                                    enum: [
                                      'string (1)',
                                      'string (2)',
                                      'string (3)'
                                    ]
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/one',
                                  selectedItems: [],
                                  required: false
                                },
                                elements: {
                                  enum: {
                                    id: '#/0/0/one',
                                    items: [
                                      'string (1)',
                                      'string (2)',
                                      'string (3)'
                                    ],
                                    selectedItems: [],
                                    required: false
                                  }
                                }
                              },
                              {
                                meta: {
                                  type: 'number',
                                  name: 'two',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'number',
                                    enum: [
                                      1,
                                      2,
                                      3
                                    ]
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/two',
                                  selectedItems: [],
                                  required: false
                                },
                                elements: {
                                  enum: {
                                    id: '#/0/0/two',
                                    items: [
                                      1,
                                      2,
                                      3
                                    ],
                                    selectedItems: [],
                                    required: false
                                  }
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `anyOf` (`items` is an object and `items` is an object of `object` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  one: {
                    type: 'string',
                    anyOf: [
                      { const: 'string (1)' },
                      { const: 'string (2)' },
                      { const: 'string (3)' }
                    ]
                  },
                  two: {
                    type: 'number',
                    anyOf: [
                      { const: 1 },
                      { const: 2 },
                      { const: 3 }
                    ]
                  }
                }
              }
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            one: {
                              type: 'string',
                              anyOf: [
                                { const: 'string (1)' },
                                { const: 'string (2)' },
                                { const: 'string (3)' }
                              ]
                            },
                            two: {
                              type: 'number',
                              anyOf: [
                                { const: 1 },
                                { const: 2 },
                                { const: 3 }
                              ]
                            }
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'object',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'object',
                              properties: {
                                one: {
                                  type: 'string',
                                  anyOf: [
                                    { const: 'string (1)' },
                                    { const: 'string (2)' },
                                    { const: 'string (3)' }
                                  ]
                                },
                                two: {
                                  type: 'number',
                                  anyOf: [
                                    { const: 1 },
                                    { const: 2 },
                                    { const: 3 }
                                  ]
                                }
                              }
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            fields: [
                              {
                                meta: {
                                  type: 'string',
                                  name: 'one',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'string',
                                    anyOf: [
                                      { const: 'string (1)' },
                                      { const: 'string (2)' },
                                      { const: 'string (3)' }
                                    ]
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/one',
                                  selectedItems: [],
                                  required: false
                                },
                                elements: {
                                  anyOf: {
                                    id: '#/0/0/one',
                                    items: [
                                      {
                                        meta: {
                                          type: 'string',
                                          item: 0,
                                          rootSchema: schema,
                                          schema: {
                                            const: 'string (1)'
                                          },
                                          parentUri: '#/0/0/one',
                                          uri: '#/0/0/one/0',
                                          required: false,
                                          value: 'string (1)'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/one/0',
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
                                          parentUri: '#/0/0/one',
                                          uri: '#/0/0/one/1',
                                          required: false,
                                          value: 'string (2)'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/one/1',
                                            required: false,
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
                                          parentUri: '#/0/0/one',
                                          uri: '#/0/0/one/2',
                                          required: false,
                                          value: 'string (3)'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/one/2',
                                            required: false,
                                            value: 'string (3)'
                                          }
                                        }
                                      }
                                    ],
                                    selectedItems: [],
                                    required: false
                                  }
                                }
                              },
                              {
                                meta: {
                                  type: 'number',
                                  name: 'two',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'number',
                                    anyOf: [
                                      { const: 1 },
                                      { const: 2 },
                                      { const: 3 }
                                    ]
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/two',
                                  selectedItems: [],
                                  required: false
                                },
                                elements: {
                                  anyOf: {
                                    id: '#/0/0/two',
                                    items: [
                                      {
                                        meta: {
                                          type: 'number',
                                          item: 0,
                                          rootSchema: schema,
                                          schema: {
                                            const: 1
                                          },
                                          parentUri: '#/0/0/two',
                                          uri: '#/0/0/two/0',
                                          required: false,
                                          value: '1'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/two/0',
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
                                          parentUri: '#/0/0/two',
                                          uri: '#/0/0/two/1',
                                          required: false,
                                          value: '2'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/two/1',
                                            required: false,
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
                                          parentUri: '#/0/0/two',
                                          uri: '#/0/0/two/2',
                                          required: false,
                                          value: '3'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/two/2',
                                            required: false,
                                            value: '3'
                                          }
                                        }
                                      }
                                    ],
                                    selectedItems: [],
                                    required: false
                                  }
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `oneOf` (`items` is an object and `items` is an object of `object` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  one: {
                    type: 'string',
                    oneOf: [
                      { const: 'string (1)' },
                      { const: 'string (2)' },
                      { const: 'string (3)' }
                    ]
                  },
                  two: {
                    type: 'number',
                    oneOf: [
                      { const: 1 },
                      { const: 2 },
                      { const: 3 }
                    ]
                  }
                }
              }
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            one: {
                              type: 'string',
                              oneOf: [
                                { const: 'string (1)' },
                                { const: 'string (2)' },
                                { const: 'string (3)' }
                              ]
                            },
                            two: {
                              type: 'number',
                              oneOf: [
                                { const: 1 },
                                { const: 2 },
                                { const: 3 }
                              ]
                            }
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'object',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'object',
                              properties: {
                                one: {
                                  type: 'string',
                                  oneOf: [
                                    { const: 'string (1)' },
                                    { const: 'string (2)' },
                                    { const: 'string (3)' }
                                  ]
                                },
                                two: {
                                  type: 'number',
                                  oneOf: [
                                    { const: 1 },
                                    { const: 2 },
                                    { const: 3 }
                                  ]
                                }
                              }
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            fields: [
                              {
                                meta: {
                                  type: 'string',
                                  name: 'one',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'string',
                                    oneOf: [
                                      { const: 'string (1)' },
                                      { const: 'string (2)' },
                                      { const: 'string (3)' }
                                    ]
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/one',
                                  selectedItems: [],
                                  required: false
                                },
                                elements: {
                                  oneOf: {
                                    id: '#/0/0/one',
                                    items: [
                                      {
                                        meta: {
                                          type: 'string',
                                          item: 0,
                                          rootSchema: schema,
                                          schema: {
                                            const: 'string (1)'
                                          },
                                          parentUri: '#/0/0/one',
                                          uri: '#/0/0/one/0',
                                          required: false,
                                          value: 'string (1)'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/one/0',
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
                                          parentUri: '#/0/0/one',
                                          uri: '#/0/0/one/1',
                                          required: false,
                                          value: 'string (2)'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/one/1',
                                            required: false,
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
                                          parentUri: '#/0/0/one',
                                          uri: '#/0/0/one/2',
                                          required: false,
                                          value: 'string (3)'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/one/2',
                                            required: false,
                                            value: 'string (3)'
                                          }
                                        }
                                      }
                                    ],
                                    selectedItems: [],
                                    required: false
                                  }
                                }
                              },
                              {
                                meta: {
                                  type: 'number',
                                  name: 'two',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'number',
                                    oneOf: [
                                      { const: 1 },
                                      { const: 2 },
                                      { const: 3 }
                                    ]
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/two',
                                  selectedItems: [],
                                  required: false
                                },
                                elements: {
                                  oneOf: {
                                    id: '#/0/0/two',
                                    items: [
                                      {
                                        meta: {
                                          type: 'number',
                                          item: 0,
                                          rootSchema: schema,
                                          schema: {
                                            const: 1
                                          },
                                          parentUri: '#/0/0/two',
                                          uri: '#/0/0/two/0',
                                          required: false,
                                          value: '1'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/two/0',
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
                                          parentUri: '#/0/0/two',
                                          uri: '#/0/0/two/1',
                                          required: false,
                                          value: '2'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/two/1',
                                            required: false,
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
                                          parentUri: '#/0/0/two',
                                          uri: '#/0/0/two/2',
                                          required: false,
                                          value: '3'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/two/2',
                                            required: false,
                                            value: '3'
                                          }
                                        }
                                      }
                                    ],
                                    selectedItems: [],
                                    required: false
                                  }
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `allOf` (`items` is an object and `items` is an object of `object` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  one: {
                    type: 'string',
                    allOf: [
                      { minLength: 1 },
                      {
                        const: 'string',
                        maxLength: 100
                      }
                    ]
                  },
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            one: {
                              type: 'string',
                              allOf: [
                                { minLength: 1 },
                                {
                                  const: 'string',
                                  maxLength: 100
                                }
                              ]
                            },
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
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'object',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'object',
                              properties: {
                                one: {
                                  type: 'string',
                                  allOf: [
                                    { minLength: 1 },
                                    {
                                      const: 'string',
                                      maxLength: 100
                                    }
                                  ]
                                },
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
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            fields: [
                              {
                                meta: {
                                  type: 'string',
                                  name: 'one',
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
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/one',
                                  minLength: 1,
                                  maxLength: 100,
                                  required: false,
                                  value: 'string'
                                },
                                elements: {
                                  field: {
                                    id: '#/0/0/one',
                                    minLength: 1,
                                    maxLength: 100,
                                    required: false,
                                    value: 'string'
                                  }
                                }
                              },
                              {
                                meta: {
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
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/two',
                                  min: 1,
                                  max: 3,
                                  required: false,
                                  value: '2'
                                },
                                elements: {
                                  field: {
                                    id: '#/0/0/two',
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
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `enum` (`items` is an object and `items` is an object of `object` type with `required`)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  one: {
                    type: 'string',
                    enum: [
                      'string (1)',
                      'string (2)',
                      'string (3)'
                    ]
                  },
                  two: {
                    type: 'number',
                    enum: [
                      1,
                      2,
                      3
                    ]
                  }
                },
                required: [
                  'one'
                ]
              }
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            one: {
                              type: 'string',
                              enum: [
                                'string (1)',
                                'string (2)',
                                'string (3)'
                              ]
                            },
                            two: {
                              type: 'number',
                              enum: [
                                1,
                                2,
                                3
                              ]
                            }
                          },
                          required: [
                            'one'
                          ]
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'object',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'object',
                              properties: {
                                one: {
                                  type: 'string',
                                  enum: [
                                    'string (1)',
                                    'string (2)',
                                    'string (3)'
                                  ]
                                },
                                two: {
                                  type: 'number',
                                  enum: [
                                    1,
                                    2,
                                    3
                                  ]
                                }
                              },
                              required: [
                                'one'
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            fields: [
                              {
                                meta: {
                                  type: 'string',
                                  name: 'one',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'string',
                                    enum: [
                                      'string (1)',
                                      'string (2)',
                                      'string (3)'
                                    ]
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/one',
                                  selectedItems: [],
                                  required: true
                                },
                                elements: {
                                  enum: {
                                    id: '#/0/0/one',
                                    items: [
                                      'string (1)',
                                      'string (2)',
                                      'string (3)'
                                    ],
                                    selectedItems: [],
                                    required: true
                                  }
                                }
                              },
                              {
                                meta: {
                                  type: 'number',
                                  name: 'two',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'number',
                                    enum: [
                                      1,
                                      2,
                                      3
                                    ]
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/two',
                                  selectedItems: [],
                                  required: false
                                },
                                elements: {
                                  enum: {
                                    id: '#/0/0/two',
                                    items: [
                                      1,
                                      2,
                                      3
                                    ],
                                    selectedItems: [],
                                    required: false
                                  }
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `anyOf` (`items` is an object and `items` is an object of `object` type with `required`)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  one: {
                    type: 'string',
                    anyOf: [
                      { const: 'string (1)' },
                      { const: 'string (2)' },
                      { const: 'string (3)' }
                    ]
                  },
                  two: {
                    type: 'number',
                    anyOf: [
                      { const: 1 },
                      { const: 2 },
                      { const: 3 }
                    ]
                  }
                },
                required: [
                  'one'
                ]
              }
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            one: {
                              type: 'string',
                              anyOf: [
                                { const: 'string (1)' },
                                { const: 'string (2)' },
                                { const: 'string (3)' }
                              ]
                            },
                            two: {
                              type: 'number',
                              anyOf: [
                                { const: 1 },
                                { const: 2 },
                                { const: 3 }
                              ]
                            }
                          },
                          required: [
                            'one'
                          ]
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'object',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'object',
                              properties: {
                                one: {
                                  type: 'string',
                                  anyOf: [
                                    { const: 'string (1)' },
                                    { const: 'string (2)' },
                                    { const: 'string (3)' }
                                  ]
                                },
                                two: {
                                  type: 'number',
                                  anyOf: [
                                    { const: 1 },
                                    { const: 2 },
                                    { const: 3 }
                                  ]
                                }
                              },
                              required: [
                                'one'
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            fields: [
                              {
                                meta: {
                                  type: 'string',
                                  name: 'one',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'string',
                                    anyOf: [
                                      { const: 'string (1)' },
                                      { const: 'string (2)' },
                                      { const: 'string (3)' }
                                    ]
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/one',
                                  selectedItems: [],
                                  required: true
                                },
                                elements: {
                                  anyOf: {
                                    id: '#/0/0/one',
                                    items: [
                                      {
                                        meta: {
                                          type: 'string',
                                          item: 0,
                                          rootSchema: schema,
                                          schema: {
                                            const: 'string (1)'
                                          },
                                          parentUri: '#/0/0/one',
                                          uri: '#/0/0/one/0',
                                          required: true,
                                          value: 'string (1)'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/one/0',
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
                                          parentUri: '#/0/0/one',
                                          uri: '#/0/0/one/1',
                                          required: true,
                                          value: 'string (2)'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/one/1',
                                            required: true,
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
                                          parentUri: '#/0/0/one',
                                          uri: '#/0/0/one/2',
                                          required: true,
                                          value: 'string (3)'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/one/2',
                                            required: true,
                                            value: 'string (3)'
                                          }
                                        }
                                      }
                                    ],
                                    selectedItems: [],
                                    required: true
                                  }
                                }
                              },
                              {
                                meta: {
                                  type: 'number',
                                  name: 'two',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'number',
                                    anyOf: [
                                      { const: 1 },
                                      { const: 2 },
                                      { const: 3 }
                                    ]
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/two',
                                  selectedItems: [],
                                  required: false
                                },
                                elements: {
                                  anyOf: {
                                    id: '#/0/0/two',
                                    items: [
                                      {
                                        meta: {
                                          type: 'number',
                                          item: 0,
                                          rootSchema: schema,
                                          schema: {
                                            const: 1
                                          },
                                          parentUri: '#/0/0/two',
                                          uri: '#/0/0/two/0',
                                          required: false,
                                          value: '1'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/two/0',
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
                                          parentUri: '#/0/0/two',
                                          uri: '#/0/0/two/1',
                                          required: false,
                                          value: '2'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/two/1',
                                            required: false,
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
                                          parentUri: '#/0/0/two',
                                          uri: '#/0/0/two/2',
                                          required: false,
                                          value: '3'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/two/2',
                                            required: false,
                                            value: '3'
                                          }
                                        }
                                      }
                                    ],
                                    selectedItems: [],
                                    required: false
                                  }
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `oneOf` (`items` is an object and `items` is an object of `object` type with `required`)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  one: {
                    type: 'string',
                    oneOf: [
                      { const: 'string (1)' },
                      { const: 'string (2)' },
                      { const: 'string (3)' }
                    ]
                  },
                  two: {
                    type: 'number',
                    oneOf: [
                      { const: 1 },
                      { const: 2 },
                      { const: 3 }
                    ]
                  }
                },
                required: [
                  'one'
                ]
              }
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            one: {
                              type: 'string',
                              oneOf: [
                                { const: 'string (1)' },
                                { const: 'string (2)' },
                                { const: 'string (3)' }
                              ]
                            },
                            two: {
                              type: 'number',
                              oneOf: [
                                { const: 1 },
                                { const: 2 },
                                { const: 3 }
                              ]
                            }
                          },
                          required: [
                            'one'
                          ]
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'object',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'object',
                              properties: {
                                one: {
                                  type: 'string',
                                  oneOf: [
                                    { const: 'string (1)' },
                                    { const: 'string (2)' },
                                    { const: 'string (3)' }
                                  ]
                                },
                                two: {
                                  type: 'number',
                                  oneOf: [
                                    { const: 1 },
                                    { const: 2 },
                                    { const: 3 }
                                  ]
                                }
                              },
                              required: [
                                'one'
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            fields: [
                              {
                                meta: {
                                  type: 'string',
                                  name: 'one',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'string',
                                    oneOf: [
                                      { const: 'string (1)' },
                                      { const: 'string (2)' },
                                      { const: 'string (3)' }
                                    ]
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/one',
                                  selectedItems: [],
                                  required: true
                                },
                                elements: {
                                  oneOf: {
                                    id: '#/0/0/one',
                                    items: [
                                      {
                                        meta: {
                                          type: 'string',
                                          item: 0,
                                          rootSchema: schema,
                                          schema: {
                                            const: 'string (1)'
                                          },
                                          parentUri: '#/0/0/one',
                                          uri: '#/0/0/one/0',
                                          required: true,
                                          value: 'string (1)'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/one/0',
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
                                          parentUri: '#/0/0/one',
                                          uri: '#/0/0/one/1',
                                          required: true,
                                          value: 'string (2)'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/one/1',
                                            required: true,
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
                                          parentUri: '#/0/0/one',
                                          uri: '#/0/0/one/2',
                                          required: true,
                                          value: 'string (3)'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/one/2',
                                            required: true,
                                            value: 'string (3)'
                                          }
                                        }
                                      }
                                    ],
                                    selectedItems: [],
                                    required: true
                                  }
                                }
                              },
                              {
                                meta: {
                                  type: 'number',
                                  name: 'two',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'number',
                                    oneOf: [
                                      { const: 1 },
                                      { const: 2 },
                                      { const: 3 }
                                    ]
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/two',
                                  selectedItems: [],
                                  required: false
                                },
                                elements: {
                                  oneOf: {
                                    id: '#/0/0/two',
                                    items: [
                                      {
                                        meta: {
                                          type: 'number',
                                          item: 0,
                                          rootSchema: schema,
                                          schema: {
                                            const: 1
                                          },
                                          parentUri: '#/0/0/two',
                                          uri: '#/0/0/two/0',
                                          required: false,
                                          value: '1'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/two/0',
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
                                          parentUri: '#/0/0/two',
                                          uri: '#/0/0/two/1',
                                          required: false,
                                          value: '2'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/two/1',
                                            required: false,
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
                                          parentUri: '#/0/0/two',
                                          uri: '#/0/0/two/2',
                                          required: false,
                                          value: '3'
                                        },
                                        elements: {
                                          field: {
                                            id: '#/0/0/two/2',
                                            required: false,
                                            value: '3'
                                          }
                                        }
                                      }
                                    ],
                                    selectedItems: [],
                                    required: false
                                  }
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `allOf` (`items` is an object and `items` is an object of `object` type with `required`)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  one: {
                    type: 'string',
                    allOf: [
                      { minLength: 1 },
                      {
                        const: 'string',
                        maxLength: 100
                      }
                    ]
                  },
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
                },
                required: [
                  'one'
                ]
              }
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            one: {
                              type: 'string',
                              allOf: [
                                { minLength: 1 },
                                {
                                  const: 'string',
                                  maxLength: 100
                                }
                              ]
                            },
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
                          },
                          required: [
                            'one'
                          ]
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'object',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'object',
                              properties: {
                                one: {
                                  type: 'string',
                                  allOf: [
                                    { minLength: 1 },
                                    {
                                      const: 'string',
                                      maxLength: 100
                                    }
                                  ]
                                },
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
                              },
                              required: [
                                'one'
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            fields: [
                              {
                                meta: {
                                  type: 'string',
                                  name: 'one',
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
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/one',
                                  minLength: 1,
                                  maxLength: 100,
                                  required: true,
                                  value: 'string'
                                },
                                elements: {
                                  field: {
                                    id: '#/0/0/one',
                                    minLength: 1,
                                    maxLength: 100,
                                    required: true,
                                    value: 'string'
                                  }
                                }
                              },
                              {
                                meta: {
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
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/two',
                                  min: 1,
                                  max: 3,
                                  required: false,
                                  value: '2'
                                },
                                elements: {
                                  field: {
                                    id: '#/0/0/two',
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
                  }
                ]
              }
            })
        })

        /*
         *  Object
         */
        it('transforms `array` type schemas with `enum` (`items` is an object of `object` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                one: {
                  type: 'string',
                  enum: [
                    'string (1)',
                    'string (2)',
                    'string (3)'
                  ]
                },
                two: {
                  type: 'number',
                  enum: [
                    1,
                    2,
                    3
                  ]
                }
              }
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          one: {
                            type: 'string',
                            enum: [
                              'string (1)',
                              'string (2)',
                              'string (3)'
                            ]
                          },
                          two: {
                            type: 'number',
                            enum: [
                              1,
                              2,
                              3
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'string',
                            name: 'one',
                            rootSchema: schema,
                            schema: {
                              type: 'string',
                              enum: [
                                'string (1)',
                                'string (2)',
                                'string (3)'
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/one',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            enum: {
                              id: '#/0/one',
                              items: [
                                'string (1)',
                                'string (2)',
                                'string (3)'
                              ],
                              selectedItems: [],
                              required: false
                            }
                          }
                        },
                        {
                          meta: {
                            type: 'number',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'number',
                              enum: [
                                1,
                                2,
                                3
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/two',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            enum: {
                              id: '#/0/two',
                              items: [
                                1,
                                2,
                                3
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `anyOf` (`items` is an object of `object` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                one: {
                  type: 'string',
                  anyOf: [
                    { const: 'string (1)' },
                    { const: 'string (2)' },
                    { const: 'string (3)' }
                  ]
                },
                two: {
                  type: 'number',
                  anyOf: [
                    { const: 1 },
                    { const: 2 },
                    { const: 3 }
                  ]
                }
              }
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          one: {
                            type: 'string',
                            anyOf: [
                              { const: 'string (1)' },
                              { const: 'string (2)' },
                              { const: 'string (3)' }
                            ]
                          },
                          two: {
                            type: 'number',
                            anyOf: [
                              { const: 1 },
                              { const: 2 },
                              { const: 3 }
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'string',
                            name: 'one',
                            rootSchema: schema,
                            schema: {
                              type: 'string',
                              anyOf: [
                                { const: 'string (1)' },
                                { const: 'string (2)' },
                                { const: 'string (3)' }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/one',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            anyOf: {
                              id: '#/0/one',
                              items: [
                                {
                                  meta: {
                                    type: 'string',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: 'string (1)'
                                    },
                                    parentUri: '#/0/one',
                                    uri: '#/0/one/0',
                                    required: false,
                                    value: 'string (1)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/one/0',
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
                                    parentUri: '#/0/one',
                                    uri: '#/0/one/1',
                                    required: false,
                                    value: 'string (2)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/one/1',
                                      required: false,
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
                                    parentUri: '#/0/one',
                                    uri: '#/0/one/2',
                                    required: false,
                                    value: 'string (3)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/one/2',
                                      required: false,
                                      value: 'string (3)'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
                              required: false
                            }
                          }
                        },
                        {
                          meta: {
                            type: 'number',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'number',
                              anyOf: [
                                { const: 1 },
                                { const: 2 },
                                { const: 3 }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/two',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            anyOf: {
                              id: '#/0/two',
                              items: [
                                {
                                  meta: {
                                    type: 'number',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: 1
                                    },
                                    parentUri: '#/0/two',
                                    uri: '#/0/two/0',
                                    required: false,
                                    value: '1'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/two/0',
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
                                    parentUri: '#/0/two',
                                    uri: '#/0/two/1',
                                    required: false,
                                    value: '2'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/two/1',
                                      required: false,
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
                                    parentUri: '#/0/two',
                                    uri: '#/0/two/2',
                                    required: false,
                                    value: '3'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/two/2',
                                      required: false,
                                      value: '3'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `oneOf` (`items` is an object of `object` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                one: {
                  type: 'string',
                  oneOf: [
                    { const: 'string (1)' },
                    { const: 'string (2)' },
                    { const: 'string (3)' }
                  ]
                },
                two: {
                  type: 'number',
                  oneOf: [
                    { const: 1 },
                    { const: 2 },
                    { const: 3 }
                  ]
                }
              }
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          one: {
                            type: 'string',
                            oneOf: [
                              { const: 'string (1)' },
                              { const: 'string (2)' },
                              { const: 'string (3)' }
                            ]
                          },
                          two: {
                            type: 'number',
                            oneOf: [
                              { const: 1 },
                              { const: 2 },
                              { const: 3 }
                            ]
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'string',
                            name: 'one',
                            rootSchema: schema,
                            schema: {
                              type: 'string',
                              oneOf: [
                                { const: 'string (1)' },
                                { const: 'string (2)' },
                                { const: 'string (3)' }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/one',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            oneOf: {
                              id: '#/0/one',
                              items: [
                                {
                                  meta: {
                                    type: 'string',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: 'string (1)'
                                    },
                                    parentUri: '#/0/one',
                                    uri: '#/0/one/0',
                                    required: false,
                                    value: 'string (1)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/one/0',
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
                                    parentUri: '#/0/one',
                                    uri: '#/0/one/1',
                                    required: false,
                                    value: 'string (2)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/one/1',
                                      required: false,
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
                                    parentUri: '#/0/one',
                                    uri: '#/0/one/2',
                                    required: false,
                                    value: 'string (3)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/one/2',
                                      required: false,
                                      value: 'string (3)'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
                              required: false
                            }
                          }
                        },
                        {
                          meta: {
                            type: 'number',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'number',
                              oneOf: [
                                { const: 1 },
                                { const: 2 },
                                { const: 3 }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/two',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            oneOf: {
                              id: '#/0/two',
                              items: [
                                {
                                  meta: {
                                    type: 'number',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: 1
                                    },
                                    parentUri: '#/0/two',
                                    uri: '#/0/two/0',
                                    required: false,
                                    value: '1'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/two/0',
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
                                    parentUri: '#/0/two',
                                    uri: '#/0/two/1',
                                    required: false,
                                    value: '2'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/two/1',
                                      required: false,
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
                                    parentUri: '#/0/two',
                                    uri: '#/0/two/2',
                                    required: false,
                                    value: '3'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/two/2',
                                      required: false,
                                      value: '3'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `allOf` (`items` is an object of `object` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                one: {
                  type: 'string',
                  allOf: [
                    { minLength: 1 },
                    {
                      const: 'string',
                      maxLength: 100
                    }
                  ]
                },
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          one: {
                            type: 'string',
                            allOf: [
                              { minLength: 1 },
                              {
                                const: 'string',
                                maxLength: 100
                              }
                            ]
                          },
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
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'string',
                            name: 'one',
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
                            parentUri: '#/0',
                            uri: '#/0/one',
                            minLength: 1,
                            maxLength: 100,
                            required: false,
                            value: 'string'
                          },
                          elements: {
                            field: {
                              id: '#/0/one',
                              minLength: 1,
                              maxLength: 100,
                              required: false,
                              value: 'string'
                            }
                          }
                        },
                        {
                          meta: {
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
                            parentUri: '#/0',
                            uri: '#/0/two',
                            min: 1,
                            max: 3,
                            required: false,
                            value: '2'
                          },
                          elements: {
                            field: {
                              id: '#/0/two',
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

        it('transforms `array` type schemas with `enum` (`items` is an object of `object` type with `required`)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                one: {
                  type: 'string',
                  enum: [
                    'string (1)',
                    'string (2)',
                    'string (3)'
                  ]
                },
                two: {
                  type: 'number',
                  enum: [
                    1,
                    2,
                    3
                  ]
                }
              },
              required: [
                'one'
              ]
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          one: {
                            type: 'string',
                            enum: [
                              'string (1)',
                              'string (2)',
                              'string (3)'
                            ]
                          },
                          two: {
                            type: 'number',
                            enum: [
                              1,
                              2,
                              3
                            ]
                          }
                        },
                        required: [
                          'one'
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'string',
                            name: 'one',
                            rootSchema: schema,
                            schema: {
                              type: 'string',
                              enum: [
                                'string (1)',
                                'string (2)',
                                'string (3)'
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/one',
                            selectedItems: [],
                            required: true
                          },
                          elements: {
                            enum: {
                              id: '#/0/one',
                              items: [
                                'string (1)',
                                'string (2)',
                                'string (3)'
                              ],
                              selectedItems: [],
                              required: true
                            }
                          }
                        },
                        {
                          meta: {
                            type: 'number',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'number',
                              enum: [
                                1,
                                2,
                                3
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/two',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            enum: {
                              id: '#/0/two',
                              items: [
                                1,
                                2,
                                3
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `anyOf` (`items` is an object of `object` type with `required`)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                one: {
                  type: 'string',
                  anyOf: [
                    { const: 'string (1)' },
                    { const: 'string (2)' },
                    { const: 'string (3)' }
                  ]
                },
                two: {
                  type: 'number',
                  anyOf: [
                    { const: 1 },
                    { const: 2 },
                    { const: 3 }
                  ]
                }
              },
              required: [
                'one'
              ]
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          one: {
                            type: 'string',
                            anyOf: [
                              { const: 'string (1)' },
                              { const: 'string (2)' },
                              { const: 'string (3)' }
                            ]
                          },
                          two: {
                            type: 'number',
                            anyOf: [
                              { const: 1 },
                              { const: 2 },
                              { const: 3 }
                            ]
                          }
                        },
                        required: [
                          'one'
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'string',
                            name: 'one',
                            rootSchema: schema,
                            schema: {
                              type: 'string',
                              anyOf: [
                                { const: 'string (1)' },
                                { const: 'string (2)' },
                                { const: 'string (3)' }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/one',
                            selectedItems: [],
                            required: true
                          },
                          elements: {
                            anyOf: {
                              id: '#/0/one',
                              items: [
                                {
                                  meta: {
                                    type: 'string',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: 'string (1)'
                                    },
                                    parentUri: '#/0/one',
                                    uri: '#/0/one/0',
                                    required: true,
                                    value: 'string (1)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/one/0',
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
                                    parentUri: '#/0/one',
                                    uri: '#/0/one/1',
                                    required: true,
                                    value: 'string (2)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/one/1',
                                      required: true,
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
                                    parentUri: '#/0/one',
                                    uri: '#/0/one/2',
                                    required: true,
                                    value: 'string (3)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/one/2',
                                      required: true,
                                      value: 'string (3)'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
                              required: true
                            }
                          }
                        },
                        {
                          meta: {
                            type: 'number',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'number',
                              anyOf: [
                                { const: 1 },
                                { const: 2 },
                                { const: 3 }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/two',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            anyOf: {
                              id: '#/0/two',
                              items: [
                                {
                                  meta: {
                                    type: 'number',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: 1
                                    },
                                    parentUri: '#/0/two',
                                    uri: '#/0/two/0',
                                    required: false,
                                    value: '1'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/two/0',
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
                                    parentUri: '#/0/two',
                                    uri: '#/0/two/1',
                                    required: false,
                                    value: '2'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/two/1',
                                      required: false,
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
                                    parentUri: '#/0/two',
                                    uri: '#/0/two/2',
                                    required: false,
                                    value: '3'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/two/2',
                                      required: false,
                                      value: '3'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `oneOf` (`items` is an object of `object` type with `required`)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                one: {
                  type: 'string',
                  oneOf: [
                    { const: 'string (1)' },
                    { const: 'string (2)' },
                    { const: 'string (3)' }
                  ]
                },
                two: {
                  type: 'number',
                  oneOf: [
                    { const: 1 },
                    { const: 2 },
                    { const: 3 }
                  ]
                }
              },
              required: [
                'one'
              ]
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          one: {
                            type: 'string',
                            oneOf: [
                              { const: 'string (1)' },
                              { const: 'string (2)' },
                              { const: 'string (3)' }
                            ]
                          },
                          two: {
                            type: 'number',
                            oneOf: [
                              { const: 1 },
                              { const: 2 },
                              { const: 3 }
                            ]
                          }
                        },
                        required: [
                          'one'
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'string',
                            name: 'one',
                            rootSchema: schema,
                            schema: {
                              type: 'string',
                              oneOf: [
                                { const: 'string (1)' },
                                { const: 'string (2)' },
                                { const: 'string (3)' }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/one',
                            selectedItems: [],
                            required: true
                          },
                          elements: {
                            oneOf: {
                              id: '#/0/one',
                              items: [
                                {
                                  meta: {
                                    type: 'string',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: 'string (1)'
                                    },
                                    parentUri: '#/0/one',
                                    uri: '#/0/one/0',
                                    required: true,
                                    value: 'string (1)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/one/0',
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
                                    parentUri: '#/0/one',
                                    uri: '#/0/one/1',
                                    required: true,
                                    value: 'string (2)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/one/1',
                                      required: true,
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
                                    parentUri: '#/0/one',
                                    uri: '#/0/one/2',
                                    required: true,
                                    value: 'string (3)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/one/2',
                                      required: true,
                                      value: 'string (3)'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
                              required: true
                            }
                          }
                        },
                        {
                          meta: {
                            type: 'number',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'number',
                              oneOf: [
                                { const: 1 },
                                { const: 2 },
                                { const: 3 }
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/two',
                            selectedItems: [],
                            required: false
                          },
                          elements: {
                            oneOf: {
                              id: '#/0/two',
                              items: [
                                {
                                  meta: {
                                    type: 'number',
                                    item: 0,
                                    rootSchema: schema,
                                    schema: {
                                      const: 1
                                    },
                                    parentUri: '#/0/two',
                                    uri: '#/0/two/0',
                                    required: false,
                                    value: '1'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/two/0',
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
                                    parentUri: '#/0/two',
                                    uri: '#/0/two/1',
                                    required: false,
                                    value: '2'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/two/1',
                                      required: false,
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
                                    parentUri: '#/0/two',
                                    uri: '#/0/two/2',
                                    required: false,
                                    value: '3'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/0/two/2',
                                      required: false,
                                      value: '3'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
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

        it('transforms `array` type schemas with `allOf` (`items` is an object of `object` type with `required`)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                one: {
                  type: 'string',
                  allOf: [
                    { minLength: 1 },
                    {
                      const: 'string',
                      maxLength: 100
                    }
                  ]
                },
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
              },
              required: [
                'one'
              ]
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          one: {
                            type: 'string',
                            allOf: [
                              { minLength: 1 },
                              {
                                const: 'string',
                                maxLength: 100
                              }
                            ]
                          },
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
                        },
                        required: [
                          'one'
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'string',
                            name: 'one',
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
                            parentUri: '#/0',
                            uri: '#/0/one',
                            minLength: 1,
                            maxLength: 100,
                            required: true,
                            value: 'string'
                          },
                          elements: {
                            field: {
                              id: '#/0/one',
                              minLength: 1,
                              maxLength: 100,
                              required: true,
                              value: 'string'
                            }
                          }
                        },
                        {
                          meta: {
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
                            parentUri: '#/0',
                            uri: '#/0/two',
                            min: 1,
                            max: 3,
                            required: false,
                            value: '2'
                          },
                          elements: {
                            field: {
                              id: '#/0/two',
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
         *  Boolean
         */
        it('transforms `array` type schemas with `enum` (`items` is an object of `boolean` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'boolean',
              enum: [
                true,
                false
              ]
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'boolean',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'boolean',
                        enum: [
                          true,
                          false
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      selectedItems: [],
                      required: false
                    },
                    elements: {
                      enum: {
                        id: '#/0',
                        items: [
                          true,
                          false
                        ],
                        selectedItems: [],
                        required: false
                      }
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `anyOf` (`items` is an object of `boolean` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'boolean',
              anyOf: [
                { const: true },
                { const: false }
              ]
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'boolean',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'boolean',
                        anyOf: [
                          { const: true },
                          { const: false }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      selectedItems: [],
                      required: false
                    },
                    elements: {
                      anyOf: {
                        id: '#/0',
                        items: [
                          {
                            meta: {
                              type: 'boolean',
                              item: 0,
                              rootSchema: schema,
                              schema: {
                                const: true
                              },
                              parentUri: '#/0',
                              uri: '#/0/0',
                              required: false,
                              value: 'true'
                            },
                            elements: {
                              field: {
                                id: '#/0/0',
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
                              parentUri: '#/0',
                              uri: '#/0/1',
                              required: false,
                              value: 'false'
                            },
                            elements: {
                              field: {
                                id: '#/0/1',
                                required: false,
                                value: 'false'
                              }
                            }
                          }
                        ],
                        selectedItems: [],
                        required: false
                      }
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `oneOf` (`items` is an object of `boolean` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'boolean',
              oneOf: [
                { const: true },
                { const: false }
              ]
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'boolean',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'boolean',
                        oneOf: [
                          { const: true },
                          { const: false }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      selectedItems: [],
                      required: false
                    },
                    elements: {
                      oneOf: {
                        id: '#/0',
                        items: [
                          {
                            meta: {
                              type: 'boolean',
                              item: 0,
                              rootSchema: schema,
                              schema: {
                                const: true
                              },
                              parentUri: '#/0',
                              uri: '#/0/0',
                              required: false,
                              value: 'true'
                            },
                            elements: {
                              field: {
                                id: '#/0/0',
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
                              parentUri: '#/0',
                              uri: '#/0/1',
                              required: false,
                              value: 'false'
                            },
                            elements: {
                              field: {
                                id: '#/0/1',
                                required: false,
                                value: 'false'
                              }
                            }
                          }
                        ],
                        selectedItems: [],
                        required: false
                      }
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `allOf` (`items` is an object of `boolean` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'boolean',
              allOf: [
                { const: true }
              ]
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'boolean',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'boolean',
                        allOf: [
                          { const: true }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false,
                      value: 'true'
                    },
                    elements: {
                      field: {
                        id: '#/0',
                        required: false,
                        value: 'true'
                      }
                    }
                  }
                ]
              }
            })
        })

        /*
         *  Null
         */
        it('transforms `array` type schemas with `enum` (`items` is an object of `null` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'null',
              enum: [
                null
              ]
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'null',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'null',
                        enum: [
                          null
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      selectedItems: [],
                      required: false
                    },
                    elements: {
                      enum: {
                        id: '#/0',
                        items: [
                          null
                        ],
                        selectedItems: [],
                        required: false
                      }
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `anyOf` (`items` is an object of `null` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'null',
              anyOf: [
                { const: null }
              ]
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'null',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'null',
                        anyOf: [
                          { const: null }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      selectedItems: [],
                      required: false
                    },
                    elements: {
                      anyOf: {
                        id: '#/0',
                        items: [
                          {
                            meta: {
                              type: 'null',
                              item: 0,
                              rootSchema: schema,
                              schema: {
                                const: null
                              },
                              parentUri: '#/0',
                              uri: '#/0/0',
                              required: false,
                              value: 'null'
                            },
                            elements: {
                              field: {
                                id: '#/0/0',
                                required: false,
                                value: 'null'
                              }
                            }
                          }
                        ],
                        selectedItems: [],
                        required: false
                      }
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `oneOf` (`items` is an object of `null` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'null',
              oneOf: [
                { const: null }
              ]
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'null',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'null',
                        oneOf: [
                          { const: null }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      selectedItems: [],
                      required: false
                    },
                    elements: {
                      oneOf: {
                        id: '#/0',
                        items: [
                          {
                            meta: {
                              type: 'null',
                              item: 0,
                              rootSchema: schema,
                              schema: {
                                const: null
                              },
                              parentUri: '#/0',
                              uri: '#/0/0',
                              required: false,
                              value: 'null'
                            },
                            elements: {
                              field: {
                                id: '#/0/0',
                                required: false,
                                value: 'null'
                              }
                            }
                          }
                        ],
                        selectedItems: [],
                        required: false
                      }
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas with `allOf` (`items` is an object of `null` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'null',
              allOf: [
                { const: null }
              ]
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'null',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'null',
                        allOf: [
                          { const: null }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false,
                      value: 'null'
                    },
                    elements: {
                      field: {
                        id: '#/0',
                        required: false,
                        value: 'null'
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
        it('transforms `array` type schemas without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an array of `string` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'string'
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'string',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'string'
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      field: {
                        id: '#/0',
                        required: false
                      }
                    }
                  }
                ]
              }
            })
        })

        /*
         *  Number
         */
        it('transforms `array` type schemas without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an array of `number` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'number'
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'number',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'number'
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      field: {
                        id: '#/0',
                        required: false
                      }
                    }
                  }
                ]
              }
            })
        })

        /*
         *  Array
         */
        it('transforms `array` type schemas without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an array and `items` is an array of `string` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: [
                  {
                    type: 'string'
                  }
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'string'
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'string',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'string'
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            field: {
                              id: '#/0/0',
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

        it('transforms `array` type schemas without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an array and `items` is an array of `number` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: [
                  {
                    type: 'number'
                  }
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'number'
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'number',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'number'
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            field: {
                              id: '#/0/0',
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

        it('transforms `array` type schemas without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an array and `items` is an array of `boolean` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: [
                  {
                    type: 'boolean'
                  }
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'boolean'
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'boolean',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'boolean'
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            field: {
                              id: '#/0/0',
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

        it('transforms `array` type schemas without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an array and `items` is an array of `null` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: [
                  {
                    type: 'null'
                  }
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'null'
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'null',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'null'
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            field: {
                              id: '#/0/0',
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

        it('transforms `array` type schemas without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an array and `items` is an array of `object` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: [
                  {
                    type: 'object',
                    properties: {
                      one: {
                        type: 'string'
                      },
                      two: {
                        type: 'number'
                      }
                    }
                  }
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'object',
                            properties: {
                              one: {
                                type: 'string'
                              },
                              two: {
                                type: 'number'
                              }
                            }
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'object',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'object',
                              properties: {
                                one: {
                                  type: 'string'
                                },
                                two: {
                                  type: 'number'
                                }
                              }
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            fields: [
                              {
                                meta: {
                                  type: 'string',
                                  name: 'one',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'string'
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/one',
                                  required: false
                                },
                                elements: {
                                  field: {
                                    id: '#/0/0/one',
                                    required: false
                                  }
                                }
                              },
                              {
                                meta: {
                                  type: 'number',
                                  name: 'two',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'number'
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/two',
                                  required: false
                                },
                                elements: {
                                  field: {
                                    id: '#/0/0/two',
                                    required: false
                                  }
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an array and `items` is an array of `object` type with `required`)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: [
                  {
                    type: 'object',
                    properties: {
                      one: {
                        type: 'string'
                      },
                      two: {
                        type: 'number'
                      }
                    },
                    required: [
                      'one'
                    ]
                  }
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'object',
                            properties: {
                              one: {
                                type: 'string'
                              },
                              two: {
                                type: 'number'
                              }
                            },
                            required: [
                              'one'
                            ]
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'object',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'object',
                              properties: {
                                one: {
                                  type: 'string'
                                },
                                two: {
                                  type: 'number'
                                }
                              },
                              required: [
                                'one'
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            fields: [
                              {
                                meta: {
                                  type: 'string',
                                  name: 'one',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'string'
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/one',
                                  required: true
                                },
                                elements: {
                                  field: {
                                    id: '#/0/0/one',
                                    required: true
                                  }
                                }
                              },
                              {
                                meta: {
                                  type: 'number',
                                  name: 'two',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'number'
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/two',
                                  required: false
                                },
                                elements: {
                                  field: {
                                    id: '#/0/0/two',
                                    required: false
                                  }
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an array and `items` is an object of `string` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: {
                  type: 'string'
                }
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'string'
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'string',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'string'
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            field: {
                              id: '#/0/0',
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

        it('transforms `array` type schemas without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an array and `items` is an object of `number` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: {
                  type: 'number'
                }
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'number'
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'number',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'number'
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            field: {
                              id: '#/0/0',
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

        it('transforms `array` type schemas without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an array and `items` is an object of `boolean` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: {
                  type: 'boolean'
                }
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'boolean'
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'boolean',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'boolean'
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            field: {
                              id: '#/0/0',
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

        it('transforms `array` type schemas without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an array and `items` is an object of `null` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: {
                  type: 'null'
                }
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'null'
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'null',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'null'
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            field: {
                              id: '#/0/0',
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

        it('transforms `array` type schemas without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an array and `items` is an object of `object` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    one: {
                      type: 'string'
                    },
                    two: {
                      type: 'number'
                    }
                  }
                }
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            one: {
                              type: 'string'
                            },
                            two: {
                              type: 'number'
                            }
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'object',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'object',
                              properties: {
                                one: {
                                  type: 'string'
                                },
                                two: {
                                  type: 'number'
                                }
                              }
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            fields: [
                              {
                                meta: {
                                  type: 'string',
                                  name: 'one',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'string'
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/one',
                                  required: false
                                },
                                elements: {
                                  field: {
                                    id: '#/0/0/one',
                                    required: false
                                  }
                                }
                              },
                              {
                                meta: {
                                  type: 'number',
                                  name: 'two',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'number'
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/two',
                                  required: false
                                },
                                elements: {
                                  field: {
                                    id: '#/0/0/two',
                                    required: false
                                  }
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an array and `items` is an object of `object` type with `required`)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    one: {
                      type: 'string'
                    },
                    two: {
                      type: 'number'
                    }
                  },
                  required: [
                    'one'
                  ]
                }
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            one: {
                              type: 'string'
                            },
                            two: {
                              type: 'number'
                            }
                          },
                          required: [
                            'one'
                          ]
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'object',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'object',
                              properties: {
                                one: {
                                  type: 'string'
                                },
                                two: {
                                  type: 'number'
                                }
                              },
                              required: [
                                'one'
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            fields: [
                              {
                                meta: {
                                  type: 'string',
                                  name: 'one',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'string'
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/one',
                                  required: true
                                },
                                elements: {
                                  field: {
                                    id: '#/0/0/one',
                                    required: true
                                  }
                                }
                              },
                              {
                                meta: {
                                  type: 'number',
                                  name: 'two',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'number'
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/two',
                                  required: false
                                },
                                elements: {
                                  field: {
                                    id: '#/0/0/two',
                                    required: false
                                  }
                                }
                              }
                            ]
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
        it('transforms `array` type schemas without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an array of `object` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'object',
                properties: {
                  one: {
                    type: 'string'
                  },
                  two: {
                    type: 'number'
                  }
                }
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          one: {
                            type: 'string'
                          },
                          two: {
                            type: 'number'
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'string',
                            name: 'one',
                            rootSchema: schema,
                            schema: {
                              type: 'string'
                            },
                            parentUri: '#/0',
                            uri: '#/0/one',
                            required: false
                          },
                          elements: {
                            field: {
                              id: '#/0/one',
                              required: false
                            }
                          }
                        },
                        {
                          meta: {
                            type: 'number',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'number'
                            },
                            parentUri: '#/0',
                            uri: '#/0/two',
                            required: false
                          },
                          elements: {
                            field: {
                              id: '#/0/two',
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

        it('transforms `array` type schemas without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an array of `object` type with `required`)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'object',
                properties: {
                  one: {
                    type: 'string'
                  },
                  two: {
                    type: 'number'
                  }
                },
                required: [
                  'one'
                ]
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          one: {
                            type: 'string'
                          },
                          two: {
                            type: 'number'
                          }
                        },
                        required: [
                          'one'
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'string',
                            name: 'one',
                            rootSchema: schema,
                            schema: {
                              type: 'string'
                            },
                            parentUri: '#/0',
                            uri: '#/0/one',
                            required: true
                          },
                          elements: {
                            field: {
                              id: '#/0/one',
                              required: true
                            }
                          }
                        },
                        {
                          meta: {
                            type: 'number',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'number'
                            },
                            parentUri: '#/0',
                            uri: '#/0/two',
                            required: false
                          },
                          elements: {
                            field: {
                              id: '#/0/two',
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

        /*
         *  Boolean
         */
        it('transforms `array` type schemas without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an array of `boolean` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'boolean'
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'boolean',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'boolean'
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      field: {
                        id: '#/0',
                        required: false
                      }
                    }
                  }
                ]
              }
            })
        })

        /*
         *  Null
         */
        it('transforms `array` type schemas without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an array of `null` type)', () => {
          const schema = {
            type: 'array',
            items: [
              {
                type: 'null'
              }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'null',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'null'
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      field: {
                        id: '#/0',
                        required: false
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
        it('transforms `array` type schemas without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an object of `string` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'string'
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'string',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'string'
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      field: {
                        id: '#/0',
                        required: false
                      }
                    }
                  }
                ]
              }
            })
        })

        /*
         *  Number
         */
        it('transforms `array` type schemas without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an object of `number` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'number'
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'number',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'number'
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      field: {
                        id: '#/0',
                        required: false
                      }
                    }
                  }
                ]
              }
            })
        })

        /*
         *  Array
         */
        it('transforms `array` type schemas without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an object and `items` is an array of `string` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: [
                {
                  type: 'string'
                }
              ]
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'string'
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'string',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'string'
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            field: {
                              id: '#/0/0',
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

        it('transforms `array` type schemas without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an object and `items` is an array of `number` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: [
                {
                  type: 'number'
                }
              ]
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'number'
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'number',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'number'
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            field: {
                              id: '#/0/0',
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

        it('transforms `array` type schemas without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an object and `items` is an array of `boolean` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: [
                {
                  type: 'boolean'
                }
              ]
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'boolean'
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'boolean',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'boolean'
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            field: {
                              id: '#/0/0',
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

        it('transforms `array` type schemas without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an object and `items` is an array of `null` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: [
                {
                  type: 'null'
                }
              ]
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'null'
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'null',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'null'
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            field: {
                              id: '#/0/0',
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

        it('transforms `array` type schemas without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an object and `items` is an array of `object` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: [
                {
                  type: 'object',
                  properties: {
                    one: {
                      type: 'string'
                    },
                    two: {
                      type: 'number'
                    }
                  }
                }
              ]
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'object',
                            properties: {
                              one: {
                                type: 'string'
                              },
                              two: {
                                type: 'number'
                              }
                            }
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'object',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'object',
                              properties: {
                                one: {
                                  type: 'string'
                                },
                                two: {
                                  type: 'number'
                                }
                              }
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            fields: [
                              {
                                meta: {
                                  type: 'string',
                                  name: 'one',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'string'
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/one',
                                  required: false
                                },
                                elements: {
                                  field: {
                                    id: '#/0/0/one',
                                    required: false
                                  }
                                }
                              },
                              {
                                meta: {
                                  type: 'number',
                                  name: 'two',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'number'
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/two',
                                  required: false
                                },
                                elements: {
                                  field: {
                                    id: '#/0/0/two',
                                    required: false
                                  }
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an object and `items` is an array of `object` type with `required`)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: [
                {
                  type: 'object',
                  properties: {
                    one: {
                      type: 'string'
                    },
                    two: {
                      type: 'number'
                    }
                  },
                  required: [
                    'one'
                  ]
                }
              ]
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: [
                          {
                            type: 'object',
                            properties: {
                              one: {
                                type: 'string'
                              },
                              two: {
                                type: 'number'
                              }
                            },
                            required: [
                              'one'
                            ]
                          }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'object',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'object',
                              properties: {
                                one: {
                                  type: 'string'
                                },
                                two: {
                                  type: 'number'
                                }
                              },
                              required: [
                                'one'
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            fields: [
                              {
                                meta: {
                                  type: 'string',
                                  name: 'one',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'string'
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/one',
                                  required: true
                                },
                                elements: {
                                  field: {
                                    id: '#/0/0/one',
                                    required: true
                                  }
                                }
                              },
                              {
                                meta: {
                                  type: 'number',
                                  name: 'two',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'number'
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/two',
                                  required: false
                                },
                                elements: {
                                  field: {
                                    id: '#/0/0/two',
                                    required: false
                                  }
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an object and `items` is an object of `string` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'string'
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'string',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'string'
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            field: {
                              id: '#/0/0',
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

        it('transforms `array` type schemas without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an object and `items` is an object of `number` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: {
                type: 'number'
              }
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'number'
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'number',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'number'
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            field: {
                              id: '#/0/0',
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

        it('transforms `array` type schemas without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an object and `items` is an object of `boolean` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: {
                type: 'boolean'
              }
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'boolean'
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'boolean',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'boolean'
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            field: {
                              id: '#/0/0',
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

        it('transforms `array` type schemas without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an object and `items` is an object of `null` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: {
                type: 'null'
              }
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'null'
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'null',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'null'
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            field: {
                              id: '#/0/0',
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

        it('transforms `array` type schemas without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an object and `items` is an object of `object` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  one: {
                    type: 'string'
                  },
                  two: {
                    type: 'number'
                  }
                }
              }
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            one: {
                              type: 'string'
                            },
                            two: {
                              type: 'number'
                            }
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'object',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'object',
                              properties: {
                                one: {
                                  type: 'string'
                                },
                                two: {
                                  type: 'number'
                                }
                              }
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            fields: [
                              {
                                meta: {
                                  type: 'string',
                                  name: 'one',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'string'
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/one',
                                  required: false
                                },
                                elements: {
                                  field: {
                                    id: '#/0/0/one',
                                    required: false
                                  }
                                }
                              },
                              {
                                meta: {
                                  type: 'number',
                                  name: 'two',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'number'
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/two',
                                  required: false
                                },
                                elements: {
                                  field: {
                                    id: '#/0/0/two',
                                    required: false
                                  }
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            })
        })

        it('transforms `array` type schemas without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an object and `items` is an object of `object` type with `required`)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  one: {
                    type: 'string'
                  },
                  two: {
                    type: 'number'
                  }
                },
                required: [
                  'one'
                ]
              }
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'array',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            one: {
                              type: 'string'
                            },
                            two: {
                              type: 'number'
                            }
                          },
                          required: [
                            'one'
                          ]
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'object',
                            item: 0,
                            rootSchema: schema,
                            schema: {
                              type: 'object',
                              properties: {
                                one: {
                                  type: 'string'
                                },
                                two: {
                                  type: 'number'
                                }
                              },
                              required: [
                                'one'
                              ]
                            },
                            parentUri: '#/0',
                            uri: '#/0/0',
                            required: false
                          },
                          elements: {
                            fields: [
                              {
                                meta: {
                                  type: 'string',
                                  name: 'one',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'string'
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/one',
                                  required: true
                                },
                                elements: {
                                  field: {
                                    id: '#/0/0/one',
                                    required: true
                                  }
                                }
                              },
                              {
                                meta: {
                                  type: 'number',
                                  name: 'two',
                                  rootSchema: schema,
                                  schema: {
                                    type: 'number'
                                  },
                                  parentUri: '#/0/0',
                                  uri: '#/0/0/two',
                                  required: false
                                },
                                elements: {
                                  field: {
                                    id: '#/0/0/two',
                                    required: false
                                  }
                                }
                              }
                            ]
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
        it('transforms `array` type schemas without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an object of `object` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                one: {
                  type: 'string'
                },
                two: {
                  type: 'number'
                }
              }
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          one: {
                            type: 'string'
                          },
                          two: {
                            type: 'number'
                          }
                        }
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'string',
                            name: 'one',
                            rootSchema: schema,
                            schema: {
                              type: 'string'
                            },
                            parentUri: '#/0',
                            uri: '#/0/one',
                            required: false
                          },
                          elements: {
                            field: {
                              id: '#/0/one',
                              required: false
                            }
                          }
                        },
                        {
                          meta: {
                            type: 'number',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'number'
                            },
                            parentUri: '#/0',
                            uri: '#/0/two',
                            required: false
                          },
                          elements: {
                            field: {
                              id: '#/0/two',
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

        it('transforms `array` type schemas without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an object of `object` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                one: {
                  type: 'string'
                },
                two: {
                  type: 'number'
                }
              },
              required: [
                'one'
              ]
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'object',
                        properties: {
                          one: {
                            type: 'string'
                          },
                          two: {
                            type: 'number'
                          }
                        },
                        required: [
                          'one'
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'string',
                            name: 'one',
                            rootSchema: schema,
                            schema: {
                              type: 'string'
                            },
                            parentUri: '#/0',
                            uri: '#/0/one',
                            required: true
                          },
                          elements: {
                            field: {
                              id: '#/0/one',
                              required: true
                            }
                          }
                        },
                        {
                          meta: {
                            type: 'number',
                            name: 'two',
                            rootSchema: schema,
                            schema: {
                              type: 'number'
                            },
                            parentUri: '#/0',
                            uri: '#/0/two',
                            required: false
                          },
                          elements: {
                            field: {
                              id: '#/0/two',
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

        /*
         *  Boolean
         */
        it('transforms `array` type schemas without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an object of `boolean` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'boolean'
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'boolean',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'boolean'
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      field: {
                        id: '#/0',
                        required: false
                      }
                    }
                  }
                ]
              }
            })
        })

        /*
         *  Null
         */
        it('transforms `array` type schemas without `enum` or `anyOf` or `oneOf` or `allOf` (`items` is an object of `null` type)', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'null'
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'array',
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'null',
                      item: 0,
                      rootSchema: schema,
                      schema: {
                        type: 'null'
                      },
                      parentUri: '#/',
                      uri: '#/0',
                      required: false
                    },
                    elements: {
                      field: {
                        id: '#/0',
                        required: false
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
