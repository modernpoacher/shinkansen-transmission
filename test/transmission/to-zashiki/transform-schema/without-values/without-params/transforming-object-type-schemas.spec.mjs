/**
 *  @typedef {TransmissionTypes.SchemaType} SchemaType
 */

import debug from 'debug'

import {
  expect
} from 'chai'

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
      /**
       *  Object
       */
      describe('Transforming `object` type schemas', () => {
        it('transforms `object` type schemas with `enum`', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'string',
                      name: 'one',
                      rootSchema: {},
                      schema: {
                        type: 'string',
                        enum: [
                          'string (1)',
                          'string (2)'
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      items: [
                        'string (1)',
                        'string (2)'
                      ],
                      selectedItems: [],
                      isRequired: false
                    },
                    elements: {
                      enum: {
                        id: '#/one',
                        items: [
                          'string (1)',
                          'string (2)'
                        ],
                        selectedItems: [],
                        isRequired: false
                      }
                    }
                  },
                  {
                    meta: {
                      type: 'string',
                      name: 'two',
                      rootSchema: {},
                      schema: {
                        type: 'string',
                        enum: [
                          'string (1)',
                          'string (2)'
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/two',
                      items: [
                        'string (1)',
                        'string (2)'
                      ],
                      selectedItems: [],
                      isRequired: false
                    },
                    elements: {
                      enum: {
                        id: '#/two',
                        items: [
                          'string (1)',
                          'string (2)'
                        ],
                        selectedItems: [],
                        isRequired: false
                      }
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `anyOf`', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'string',
                      name: 'one',
                      rootSchema: {},
                      schema: {
                        type: 'string',
                        anyOf: [
                          { const: 'string (1)' },
                          { const: 'string (2)' }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      items: [
                        {
                          meta: {
                            type: 'string',
                            item: 0,
                            rootSchema: {},
                            schema: {
                              const: 'string (1)'
                            },
                            parentUri: '#/one',
                            uri: '#/one/0',
                            selectedItems: [],
                            value: 'string (1)'
                          },
                          elements: {
                            field: {
                              id: '#/one/0',
                              selectedItems: [],
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
                            parentUri: '#/one',
                            uri: '#/one/1',
                            selectedItems: [],
                            value: 'string (2)'
                          },
                          elements: {
                            field: {
                              id: '#/one/1',
                              selectedItems: [],
                              value: 'string (2)'
                            }
                          }
                        }
                      ],
                      selectedItems: [],
                      isRequired: false
                    },
                    elements: {
                      anyOf: {
                        id: '#/one',
                        items: [
                          {
                            meta: {
                              type: 'string',
                              item: 0,
                              rootSchema: {},
                              schema: {
                                const: 'string (1)'
                              },
                              parentUri: '#/one',
                              uri: '#/one/0',
                              selectedItems: [],
                              value: 'string (1)'
                            },
                            elements: {
                              field: {
                                id: '#/one/0',
                                selectedItems: [],
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
                              parentUri: '#/one',
                              uri: '#/one/1',
                              selectedItems: [],
                              value: 'string (2)'
                            },
                            elements: {
                              field: {
                                id: '#/one/1',
                                selectedItems: [],
                                value: 'string (2)'
                              }
                            }
                          }
                        ],
                        selectedItems: [],
                        isRequired: false
                      }
                    }
                  },
                  {
                    meta: {
                      type: 'string',
                      name: 'two',
                      rootSchema: {},
                      schema: {
                        type: 'string',
                        anyOf: [
                          { const: 'string (1)' },
                          { const: 'string (2)' }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/two',
                      items: [
                        {
                          meta: {
                            type: 'string',
                            item: 0,
                            rootSchema: {},
                            schema: {
                              const: 'string (1)'
                            },
                            parentUri: '#/two',
                            uri: '#/two/0',
                            selectedItems: [],
                            value: 'string (1)'
                          },
                          elements: {
                            field: {
                              id: '#/two/0',
                              selectedItems: [],
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
                            parentUri: '#/two',
                            uri: '#/two/1',
                            selectedItems: [],
                            value: 'string (2)'
                          },
                          elements: {
                            field: {
                              id: '#/two/1',
                              selectedItems: [],
                              value: 'string (2)'
                            }
                          }
                        }
                      ],
                      selectedItems: [],
                      isRequired: false
                    },
                    elements: {
                      anyOf: {
                        id: '#/two',
                        items: [
                          {
                            meta: {
                              type: 'string',
                              item: 0,
                              rootSchema: {},
                              schema: {
                                const: 'string (1)'
                              },
                              parentUri: '#/two',
                              uri: '#/two/0',
                              selectedItems: [],
                              value: 'string (1)'
                            },
                            elements: {
                              field: {
                                id: '#/two/0',
                                selectedItems: [],
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
                              parentUri: '#/two',
                              uri: '#/two/1',
                              selectedItems: [],
                              value: 'string (2)'
                            },
                            elements: {
                              field: {
                                id: '#/two/1',
                                selectedItems: [],
                                value: 'string (2)'
                              }
                            }
                          }
                        ],
                        selectedItems: [],
                        isRequired: false
                      }
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `oneOf`', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'string',
                      name: 'one',
                      rootSchema: {},
                      schema: {
                        type: 'string',
                        oneOf: [
                          { const: 'string (1)' },
                          { const: 'string (2)' }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      items: [
                        {
                          meta: {
                            type: 'string',
                            item: 0,
                            rootSchema: {},
                            schema: {
                              const: 'string (1)'
                            },
                            parentUri: '#/one',
                            uri: '#/one/0',
                            selectedItems: [],
                            value: 'string (1)'
                          },
                          elements: {
                            field: {
                              id: '#/one/0',
                              selectedItems: [],
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
                            parentUri: '#/one',
                            uri: '#/one/1',
                            selectedItems: [],
                            value: 'string (2)'
                          },
                          elements: {
                            field: {
                              id: '#/one/1',
                              selectedItems: [],
                              value: 'string (2)'
                            }
                          }
                        }
                      ],
                      selectedItems: [],
                      isRequired: false
                    },
                    elements: {
                      oneOf: {
                        id: '#/one',
                        items: [
                          {
                            meta: {
                              type: 'string',
                              item: 0,
                              rootSchema: {},
                              schema: {
                                const: 'string (1)'
                              },
                              parentUri: '#/one',
                              uri: '#/one/0',
                              selectedItems: [],
                              value: 'string (1)'
                            },
                            elements: {
                              field: {
                                id: '#/one/0',
                                selectedItems: [],
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
                              parentUri: '#/one',
                              uri: '#/one/1',
                              selectedItems: [],
                              value: 'string (2)'
                            },
                            elements: {
                              field: {
                                id: '#/one/1',
                                selectedItems: [],
                                value: 'string (2)'
                              }
                            }
                          }
                        ],
                        selectedItems: [],
                        isRequired: false
                      }
                    }
                  },
                  {
                    meta: {
                      type: 'string',
                      name: 'two',
                      rootSchema: {},
                      schema: {
                        type: 'string',
                        oneOf: [
                          { const: 'string (1)' },
                          { const: 'string (2)' }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/two',
                      items: [
                        {
                          meta: {
                            type: 'string',
                            item: 0,
                            rootSchema: {},
                            schema: {
                              const: 'string (1)'
                            },
                            parentUri: '#/two',
                            uri: '#/two/0',
                            selectedItems: [],
                            value: 'string (1)'
                          },
                          elements: {
                            field: {
                              id: '#/two/0',
                              selectedItems: [],
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
                            parentUri: '#/two',
                            uri: '#/two/1',
                            selectedItems: [],
                            value: 'string (2)'
                          },
                          elements: {
                            field: {
                              id: '#/two/1',
                              selectedItems: [],
                              value: 'string (2)'
                            }
                          }
                        }
                      ],
                      selectedItems: [],
                      isRequired: false
                    },
                    elements: {
                      oneOf: {
                        id: '#/two',
                        items: [
                          {
                            meta: {
                              type: 'string',
                              item: 0,
                              rootSchema: {},
                              schema: {
                                const: 'string (1)'
                              },
                              parentUri: '#/two',
                              uri: '#/two/0',
                              selectedItems: [],
                              value: 'string (1)'
                            },
                            elements: {
                              field: {
                                id: '#/two/0',
                                selectedItems: [],
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
                              parentUri: '#/two',
                              uri: '#/two/1',
                              selectedItems: [],
                              value: 'string (2)'
                            },
                            elements: {
                              field: {
                                id: '#/two/1',
                                selectedItems: [],
                                value: 'string (2)'
                              }
                            }
                          }
                        ],
                        selectedItems: [],
                        isRequired: false
                      }
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `allOf`', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'string',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: false,
                      value: 'string (one)'
                    },
                    elements: {
                      field: {
                        id: '#/one',
                        minLength: 1,
                        maxLength: 100,
                        isRequired: false,
                        value: 'string (one)'
                      }
                    }
                  },
                  {
                    meta: {
                      type: 'string',
                      name: 'two',
                      rootSchema: {},
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
                      isRequired: false,
                      value: 'string (two)'
                    },
                    elements: {
                      field: {
                        id: '#/two',
                        minLength: 1,
                        maxLength: 100,
                        isRequired: false,
                        value: 'string (two)'
                      }
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `enum` (with `required`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'string',
                      name: 'one',
                      rootSchema: {},
                      schema: {
                        type: 'string',
                        enum: [
                          'string (1)',
                          'string (2)'
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      items: [
                        'string (1)',
                        'string (2)'
                      ],
                      selectedItems: [],
                      isRequired: true
                    },
                    elements: {
                      enum: {
                        id: '#/one',
                        items: [
                          'string (1)',
                          'string (2)'
                        ],
                        selectedItems: [],
                        isRequired: true
                      }
                    }
                  },
                  {
                    meta: {
                      type: 'string',
                      name: 'two',
                      rootSchema: {},
                      schema: {
                        type: 'string',
                        enum: [
                          'string (1)',
                          'string (2)'
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/two',
                      items: [
                        'string (1)',
                        'string (2)'
                      ],
                      selectedItems: [],
                      isRequired: false
                    },
                    elements: {
                      enum: {
                        id: '#/two',
                        items: [
                          'string (1)',
                          'string (2)'
                        ],
                        selectedItems: [],
                        isRequired: false
                      }
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `anyOf` (with `required`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'string',
                      name: 'one',
                      rootSchema: {},
                      schema: {
                        type: 'string',
                        anyOf: [
                          { const: 'string (1)' },
                          { const: 'string (2)' }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      items: [
                        {
                          meta: {
                            type: 'string',
                            item: 0,
                            rootSchema: {},
                            schema: {
                              const: 'string (1)'
                            },
                            parentUri: '#/one',
                            uri: '#/one/0',
                            selectedItems: [],
                            value: 'string (1)'
                          },
                          elements: {
                            field: {
                              id: '#/one/0',
                              selectedItems: [],
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
                            parentUri: '#/one',
                            uri: '#/one/1',
                            selectedItems: [],
                            value: 'string (2)'
                          },
                          elements: {
                            field: {
                              id: '#/one/1',
                              selectedItems: [],
                              value: 'string (2)'
                            }
                          }
                        }
                      ],
                      selectedItems: [],
                      isRequired: true
                    },
                    elements: {
                      anyOf: {
                        id: '#/one',
                        items: [
                          {
                            meta: {
                              type: 'string',
                              item: 0,
                              rootSchema: {},
                              schema: {
                                const: 'string (1)'
                              },
                              parentUri: '#/one',
                              uri: '#/one/0',
                              selectedItems: [],
                              value: 'string (1)'
                            },
                            elements: {
                              field: {
                                id: '#/one/0',
                                selectedItems: [],
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
                              parentUri: '#/one',
                              uri: '#/one/1',
                              selectedItems: [],
                              value: 'string (2)'
                            },
                            elements: {
                              field: {
                                id: '#/one/1',
                                selectedItems: [],
                                value: 'string (2)'
                              }
                            }
                          }
                        ],
                        selectedItems: [],
                        isRequired: true
                      }
                    }
                  },
                  {
                    meta: {
                      type: 'string',
                      name: 'two',
                      rootSchema: {},
                      schema: {
                        type: 'string',
                        anyOf: [
                          { const: 'string (1)' },
                          { const: 'string (2)' }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/two',
                      items: [
                        {
                          meta: {
                            type: 'string',
                            item: 0,
                            rootSchema: {},
                            schema: {
                              const: 'string (1)'
                            },
                            parentUri: '#/two',
                            uri: '#/two/0',
                            selectedItems: [],
                            value: 'string (1)'
                          },
                          elements: {
                            field: {
                              id: '#/two/0',
                              selectedItems: [],
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
                            parentUri: '#/two',
                            uri: '#/two/1',
                            selectedItems: [],
                            value: 'string (2)'
                          },
                          elements: {
                            field: {
                              id: '#/two/1',
                              selectedItems: [],
                              value: 'string (2)'
                            }
                          }
                        }
                      ],
                      selectedItems: [],
                      isRequired: false
                    },
                    elements: {
                      anyOf: {
                        id: '#/two',
                        items: [
                          {
                            meta: {
                              type: 'string',
                              item: 0,
                              rootSchema: {},
                              schema: {
                                const: 'string (1)'
                              },
                              parentUri: '#/two',
                              uri: '#/two/0',
                              selectedItems: [],
                              value: 'string (1)'
                            },
                            elements: {
                              field: {
                                id: '#/two/0',
                                selectedItems: [],
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
                              parentUri: '#/two',
                              uri: '#/two/1',
                              selectedItems: [],
                              value: 'string (2)'
                            },
                            elements: {
                              field: {
                                id: '#/two/1',
                                selectedItems: [],
                                value: 'string (2)'
                              }
                            }
                          }
                        ],
                        selectedItems: [],
                        isRequired: false
                      }
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `oneOf` (with `required`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'string',
                      name: 'one',
                      rootSchema: {},
                      schema: {
                        type: 'string',
                        oneOf: [
                          { const: 'string (1)' },
                          { const: 'string (2)' }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      items: [
                        {
                          meta: {
                            type: 'string',
                            item: 0,
                            rootSchema: {},
                            schema: {
                              const: 'string (1)'
                            },
                            parentUri: '#/one',
                            uri: '#/one/0',
                            selectedItems: [],
                            value: 'string (1)'
                          },
                          elements: {
                            field: {
                              id: '#/one/0',
                              selectedItems: [],
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
                            parentUri: '#/one',
                            uri: '#/one/1',
                            selectedItems: [],
                            value: 'string (2)'
                          },
                          elements: {
                            field: {
                              id: '#/one/1',
                              selectedItems: [],
                              value: 'string (2)'
                            }
                          }
                        }
                      ],
                      selectedItems: [],
                      isRequired: true
                    },
                    elements: {
                      oneOf: {
                        id: '#/one',
                        items: [
                          {
                            meta: {
                              type: 'string',
                              item: 0,
                              rootSchema: {},
                              schema: {
                                const: 'string (1)'
                              },
                              parentUri: '#/one',
                              uri: '#/one/0',
                              selectedItems: [],
                              value: 'string (1)'
                            },
                            elements: {
                              field: {
                                id: '#/one/0',
                                selectedItems: [],
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
                              parentUri: '#/one',
                              uri: '#/one/1',
                              selectedItems: [],
                              value: 'string (2)'
                            },
                            elements: {
                              field: {
                                id: '#/one/1',
                                selectedItems: [],
                                value: 'string (2)'
                              }
                            }
                          }
                        ],
                        selectedItems: [],
                        isRequired: true
                      }
                    }
                  },
                  {
                    meta: {
                      type: 'string',
                      name: 'two',
                      rootSchema: {},
                      schema: {
                        type: 'string',
                        oneOf: [
                          { const: 'string (1)' },
                          { const: 'string (2)' }
                        ]
                      },
                      parentUri: '#/',
                      uri: '#/two',
                      items: [
                        {
                          meta: {
                            type: 'string',
                            item: 0,
                            rootSchema: {},
                            schema: {
                              const: 'string (1)'
                            },
                            parentUri: '#/two',
                            uri: '#/two/0',
                            selectedItems: [],
                            value: 'string (1)'
                          },
                          elements: {
                            field: {
                              id: '#/two/0',
                              selectedItems: [],
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
                            parentUri: '#/two',
                            uri: '#/two/1',
                            selectedItems: [],
                            value: 'string (2)'
                          },
                          elements: {
                            field: {
                              id: '#/two/1',
                              selectedItems: [],
                              value: 'string (2)'
                            }
                          }
                        }
                      ],
                      selectedItems: [],
                      isRequired: false
                    },
                    elements: {
                      oneOf: {
                        id: '#/two',
                        items: [
                          {
                            meta: {
                              type: 'string',
                              item: 0,
                              rootSchema: {},
                              schema: {
                                const: 'string (1)'
                              },
                              parentUri: '#/two',
                              uri: '#/two/0',
                              selectedItems: [],
                              value: 'string (1)'
                            },
                            elements: {
                              field: {
                                id: '#/two/0',
                                selectedItems: [],
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
                              parentUri: '#/two',
                              uri: '#/two/1',
                              selectedItems: [],
                              value: 'string (2)'
                            },
                            elements: {
                              field: {
                                id: '#/two/1',
                                selectedItems: [],
                                value: 'string (2)'
                              }
                            }
                          }
                        ],
                        selectedItems: [],
                        isRequired: false
                      }
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas with `allOf` (with `required`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'string',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: true,
                      value: 'string (one)'
                    },
                    elements: {
                      field: {
                        id: '#/one',
                        minLength: 1,
                        maxLength: 100,
                        isRequired: true,
                        value: 'string (one)'
                      }
                    }
                  },
                  {
                    meta: {
                      type: 'string',
                      name: 'two',
                      rootSchema: {},
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
                      isRequired: false,
                      value: 'string (two)'
                    },
                    elements: {
                      field: {
                        id: '#/two',
                        minLength: 1,
                        maxLength: 100,
                        isRequired: false,
                        value: 'string (two)'
                      }
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas', () => {
          /**
           *  @type {SchemaType}
           */
          const schema = {
            type: 'object',
            properties: {
              one: { type: 'string' },
              two: { type: 'string' }
            }
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'string',
                      name: 'one',
                      rootSchema: {},
                      schema: {
                        type: 'string'
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      isRequired: false
                    },
                    elements: {
                      field: {
                        id: '#/one',
                        isRequired: false
                      }
                    }
                  },
                  {
                    meta: {
                      type: 'string',
                      name: 'two',
                      rootSchema: {},
                      schema: {
                        type: 'string'
                      },
                      parentUri: '#/',
                      uri: '#/two',
                      isRequired: false
                    },
                    elements: {
                      field: {
                        id: '#/two',
                        isRequired: false
                      }
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas (with `required`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'string',
                      name: 'one',
                      rootSchema: {},
                      schema: {
                        type: 'string'
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      isRequired: true
                    },
                    elements: {
                      field: {
                        id: '#/one',
                        isRequired: true
                      }
                    }
                  },
                  {
                    meta: {
                      type: 'string',
                      name: 'two',
                      rootSchema: {},
                      schema: {
                        type: 'string'
                      },
                      parentUri: '#/',
                      uri: '#/two',
                      isRequired: false
                    },
                    elements: {
                      field: {
                        id: '#/two',
                        isRequired: false
                      }
                    }
                  }
                ]
              }
            })
        })

        /**
         *  String
         */
        it('transforms `object` type schemas (`properties` is an object of `string` type with `enum`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'string',
                            name: 'two',
                            rootSchema: {},
                            schema: {
                              type: 'string',
                              enum: [
                                'string (1)',
                                'string (2)'
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            items: [
                              'string (1)',
                              'string (2)'
                            ],
                            selectedItems: [],
                            isRequired: false
                          },
                          elements: {
                            enum: {
                              id: '#/one/two',
                              items: [
                                'string (1)',
                                'string (2)'
                              ],
                              selectedItems: [],
                              isRequired: false
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

        it('transforms `object` type schemas (`properties` is an object of `string` type with `anyOf`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'string',
                            name: 'two',
                            rootSchema: {},
                            schema: {
                              type: 'string',
                              anyOf: [
                                { const: 'string (1)' },
                                { const: 'string (2)' }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            items: [
                              {
                                meta: {
                                  type: 'string',
                                  item: 0,
                                  rootSchema: {},
                                  schema: {
                                    const: 'string (1)'
                                  },
                                  parentUri: '#/one/two',
                                  uri: '#/one/two/0',
                                  selectedItems: [],
                                  value: 'string (1)'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/0',
                                    selectedItems: [],
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
                                  parentUri: '#/one/two',
                                  uri: '#/one/two/1',
                                  selectedItems: [],
                                  value: 'string (2)'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/1',
                                    selectedItems: [],
                                    value: 'string (2)'
                                  }
                                }
                              }
                            ],
                            selectedItems: [],
                            isRequired: false
                          },
                          elements: {
                            anyOf: {
                              id: '#/one/two',
                              items: [
                                {
                                  meta: {
                                    type: 'string',
                                    item: 0,
                                    rootSchema: {},
                                    schema: {
                                      const: 'string (1)'
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    selectedItems: [],
                                    value: 'string (1)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/0',
                                      selectedItems: [],
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
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/1',
                                    selectedItems: [],
                                    value: 'string (2)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/1',
                                      selectedItems: [],
                                      value: 'string (2)'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
                              isRequired: false
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

        it('transforms `object` type schemas (`properties` is an object of `string` type with `oneOf`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'string',
                            name: 'two',
                            rootSchema: {},
                            schema: {
                              type: 'string',
                              oneOf: [
                                { const: 'string (1)' },
                                { const: 'string (2)' }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            items: [
                              {
                                meta: {
                                  type: 'string',
                                  item: 0,
                                  rootSchema: {},
                                  schema: {
                                    const: 'string (1)'
                                  },
                                  parentUri: '#/one/two',
                                  uri: '#/one/two/0',
                                  selectedItems: [],
                                  value: 'string (1)'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/0',
                                    selectedItems: [],
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
                                  parentUri: '#/one/two',
                                  uri: '#/one/two/1',
                                  selectedItems: [],
                                  value: 'string (2)'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/1',
                                    selectedItems: [],
                                    value: 'string (2)'
                                  }
                                }
                              }
                            ],
                            selectedItems: [],
                            isRequired: false
                          },
                          elements: {
                            oneOf: {
                              id: '#/one/two',
                              items: [
                                {
                                  meta: {
                                    type: 'string',
                                    item: 0,
                                    rootSchema: {},
                                    schema: {
                                      const: 'string (1)'
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    selectedItems: [],
                                    value: 'string (1)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/0',
                                      selectedItems: [],
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
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/1',
                                    selectedItems: [],
                                    value: 'string (2)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/1',
                                      selectedItems: [],
                                      value: 'string (2)'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
                              isRequired: false
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

        it('transforms `object` type schemas (`properties` is an object of `string` type with `allOf`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'string',
                            name: 'two',
                            rootSchema: {},
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
                            isRequired: false,
                            value: 'string'
                          },
                          elements: {
                            field: {
                              id: '#/one/two',
                              minLength: 1,
                              maxLength: 100,
                              isRequired: false,
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

        it('transforms `object` type schemas (`properties` is an object of `string` type with `enum`) (with `required`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: true
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'string',
                            name: 'two',
                            rootSchema: {},
                            schema: {
                              type: 'string',
                              enum: [
                                'string (1)',
                                'string (2)'
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            items: [
                              'string (1)',
                              'string (2)'
                            ],
                            selectedItems: [],
                            isRequired: false
                          },
                          elements: {
                            enum: {
                              id: '#/one/two',
                              items: [
                                'string (1)',
                                'string (2)'
                              ],
                              selectedItems: [],
                              isRequired: false
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

        it('transforms `object` type schemas (`properties` is an object of `string` type with `anyOf`) (with `required`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: true
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'string',
                            name: 'two',
                            rootSchema: {},
                            schema: {
                              type: 'string',
                              anyOf: [
                                { const: 'string (1)' },
                                { const: 'string (2)' }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            items: [
                              {
                                meta: {
                                  type: 'string',
                                  item: 0,
                                  rootSchema: {},
                                  schema: {
                                    const: 'string (1)'
                                  },
                                  parentUri: '#/one/two',
                                  uri: '#/one/two/0',
                                  selectedItems: [],
                                  value: 'string (1)'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/0',
                                    selectedItems: [],
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
                                  parentUri: '#/one/two',
                                  uri: '#/one/two/1',
                                  selectedItems: [],
                                  value: 'string (2)'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/1',
                                    selectedItems: [],
                                    value: 'string (2)'
                                  }
                                }
                              }
                            ],
                            selectedItems: [],
                            isRequired: false
                          },
                          elements: {
                            anyOf: {
                              id: '#/one/two',
                              items: [
                                {
                                  meta: {
                                    type: 'string',
                                    item: 0,
                                    rootSchema: {},
                                    schema: {
                                      const: 'string (1)'
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    selectedItems: [],
                                    value: 'string (1)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/0',
                                      selectedItems: [],
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
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/1',
                                    selectedItems: [],
                                    value: 'string (2)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/1',
                                      selectedItems: [],
                                      value: 'string (2)'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
                              isRequired: false
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

        it('transforms `object` type schemas (`properties` is an object of `string` type with `oneOf`) (with `required`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: true
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'string',
                            name: 'two',
                            rootSchema: {},
                            schema: {
                              type: 'string',
                              oneOf: [
                                { const: 'string (1)' },
                                { const: 'string (2)' }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            items: [
                              {
                                meta: {
                                  type: 'string',
                                  item: 0,
                                  rootSchema: {},
                                  schema: {
                                    const: 'string (1)'
                                  },
                                  parentUri: '#/one/two',
                                  uri: '#/one/two/0',
                                  selectedItems: [],
                                  value: 'string (1)'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/0',
                                    selectedItems: [],
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
                                  parentUri: '#/one/two',
                                  uri: '#/one/two/1',
                                  selectedItems: [],
                                  value: 'string (2)'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/1',
                                    selectedItems: [],
                                    value: 'string (2)'
                                  }
                                }
                              }
                            ],
                            selectedItems: [],
                            isRequired: false
                          },
                          elements: {
                            oneOf: {
                              id: '#/one/two',
                              items: [
                                {
                                  meta: {
                                    type: 'string',
                                    item: 0,
                                    rootSchema: {},
                                    schema: {
                                      const: 'string (1)'
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    selectedItems: [],
                                    value: 'string (1)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/0',
                                      selectedItems: [],
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
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/1',
                                    selectedItems: [],
                                    value: 'string (2)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/1',
                                      selectedItems: [],
                                      value: 'string (2)'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
                              isRequired: false
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

        it('transforms `object` type schemas (`properties` is an object of `string` type with `allOf`) (with `required`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: true
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'string',
                            name: 'two',
                            rootSchema: {},
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
                            isRequired: false,
                            value: 'string'
                          },
                          elements: {
                            field: {
                              id: '#/one/two',
                              minLength: 1,
                              maxLength: 100,
                              isRequired: false,
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

        /**
         *  Number
         */
        it('transforms `object` type schemas (`properties` is an object of `number` type with `enum`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'number',
                            name: 'two',
                            rootSchema: {},
                            schema: {
                              type: 'number',
                              enum: [
                                1,
                                2
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            items: [
                              1,
                              2
                            ],
                            selectedItems: [],
                            isRequired: false
                          },
                          elements: {
                            enum: {
                              id: '#/one/two',
                              items: [
                                1,
                                2
                              ],
                              selectedItems: [],
                              isRequired: false
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

        it('transforms `object` type schemas (`properties` is an object of `number` type with `anyOf`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'number',
                            name: 'two',
                            rootSchema: {},
                            schema: {
                              type: 'number',
                              anyOf: [
                                { const: 1 },
                                { const: 2 }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            items: [
                              {
                                meta: {
                                  type: 'number',
                                  item: 0,
                                  rootSchema: {},
                                  schema: {
                                    const: 1
                                  },
                                  parentUri: '#/one/two',
                                  uri: '#/one/two/0',
                                  selectedItems: [],
                                  value: '1'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/0',
                                    selectedItems: [],
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
                                  parentUri: '#/one/two',
                                  uri: '#/one/two/1',
                                  selectedItems: [],
                                  value: '2'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/1',
                                    selectedItems: [],
                                    value: '2'
                                  }
                                }
                              }
                            ],
                            selectedItems: [],
                            isRequired: false
                          },
                          elements: {
                            anyOf: {
                              id: '#/one/two',
                              items: [
                                {
                                  meta: {
                                    type: 'number',
                                    item: 0,
                                    rootSchema: {},
                                    schema: {
                                      const: 1
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    selectedItems: [],
                                    value: '1'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/0',
                                      selectedItems: [],
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
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/1',
                                    selectedItems: [],
                                    value: '2'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/1',
                                      selectedItems: [],
                                      value: '2'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
                              isRequired: false
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

        it('transforms `object` type schemas (`properties` is an object of `number` type with `oneOf`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'number',
                            name: 'two',
                            rootSchema: {},
                            schema: {
                              type: 'number',
                              oneOf: [
                                { const: 1 },
                                { const: 2 }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            items: [
                              {
                                meta: {
                                  type: 'number',
                                  item: 0,
                                  rootSchema: {},
                                  schema: {
                                    const: 1
                                  },
                                  parentUri: '#/one/two',
                                  uri: '#/one/two/0',
                                  selectedItems: [],
                                  value: '1'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/0',
                                    selectedItems: [],
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
                                  parentUri: '#/one/two',
                                  uri: '#/one/two/1',
                                  selectedItems: [],
                                  value: '2'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/1',
                                    selectedItems: [],
                                    value: '2'
                                  }
                                }
                              }
                            ],
                            selectedItems: [],
                            isRequired: false
                          },
                          elements: {
                            oneOf: {
                              id: '#/one/two',
                              items: [
                                {
                                  meta: {
                                    type: 'number',
                                    item: 0,
                                    rootSchema: {},
                                    schema: {
                                      const: 1
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    selectedItems: [],
                                    value: '1'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/0',
                                      selectedItems: [],
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
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/1',
                                    selectedItems: [],
                                    value: '2'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/1',
                                      selectedItems: [],
                                      value: '2'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
                              isRequired: false
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

        it('transforms `object` type schemas (`properties` is an object of `number` type with `allOf`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'number',
                            name: 'two',
                            rootSchema: {},
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
                            isRequired: false,
                            value: '2'
                          },
                          elements: {
                            field: {
                              id: '#/one/two',
                              min: 1,
                              max: 3,
                              isRequired: false,
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

        it('transforms `object` type schemas (`properties` is an object of `number` type with `enum`) (with `required`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: true
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'number',
                            name: 'two',
                            rootSchema: {},
                            schema: {
                              type: 'number',
                              enum: [
                                1,
                                2
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            items: [
                              1,
                              2
                            ],
                            selectedItems: [],
                            isRequired: false
                          },
                          elements: {
                            enum: {
                              id: '#/one/two',
                              items: [
                                1,
                                2
                              ],
                              selectedItems: [],
                              isRequired: false
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

        it('transforms `object` type schemas (`properties` is an object of `number` type with `anyOf`) (with `required`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: true
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'number',
                            name: 'two',
                            rootSchema: {},
                            schema: {
                              type: 'number',
                              anyOf: [
                                { const: 1 },
                                { const: 2 }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            items: [
                              {
                                meta: {
                                  type: 'number',
                                  item: 0,
                                  rootSchema: {},
                                  schema: {
                                    const: 1
                                  },
                                  parentUri: '#/one/two',
                                  uri: '#/one/two/0',
                                  selectedItems: [],
                                  value: '1'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/0',
                                    selectedItems: [],
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
                                  parentUri: '#/one/two',
                                  uri: '#/one/two/1',
                                  selectedItems: [],
                                  value: '2'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/1',
                                    selectedItems: [],
                                    value: '2'
                                  }
                                }
                              }
                            ],
                            selectedItems: [],
                            isRequired: false
                          },
                          elements: {
                            anyOf: {
                              id: '#/one/two',
                              items: [
                                {
                                  meta: {
                                    type: 'number',
                                    item: 0,
                                    rootSchema: {},
                                    schema: {
                                      const: 1
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    selectedItems: [],
                                    value: '1'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/0',
                                      selectedItems: [],
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
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/1',
                                    selectedItems: [],
                                    value: '2'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/1',
                                      selectedItems: [],
                                      value: '2'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
                              isRequired: false
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

        it('transforms `object` type schemas (`properties` is an object of `number` type with `oneOf`) (with `required`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: true
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'number',
                            name: 'two',
                            rootSchema: {},
                            schema: {
                              type: 'number',
                              oneOf: [
                                { const: 1 },
                                { const: 2 }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            items: [
                              {
                                meta: {
                                  type: 'number',
                                  item: 0,
                                  rootSchema: {},
                                  schema: {
                                    const: 1
                                  },
                                  parentUri: '#/one/two',
                                  uri: '#/one/two/0',
                                  selectedItems: [],
                                  value: '1'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/0',
                                    selectedItems: [],
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
                                  parentUri: '#/one/two',
                                  uri: '#/one/two/1',
                                  selectedItems: [],
                                  value: '2'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/1',
                                    selectedItems: [],
                                    value: '2'
                                  }
                                }
                              }
                            ],
                            selectedItems: [],
                            isRequired: false
                          },
                          elements: {
                            oneOf: {
                              id: '#/one/two',
                              items: [
                                {
                                  meta: {
                                    type: 'number',
                                    item: 0,
                                    rootSchema: {},
                                    schema: {
                                      const: 1
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    selectedItems: [],
                                    value: '1'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/0',
                                      selectedItems: [],
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
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/1',
                                    selectedItems: [],
                                    value: '2'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/1',
                                      selectedItems: [],
                                      value: '2'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
                              isRequired: false
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

        it('transforms `object` type schemas (`properties` is an object of `number` type with `allOf`) (with `required`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: true
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'number',
                            name: 'two',
                            rootSchema: {},
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
                            isRequired: false,
                            value: '2'
                          },
                          elements: {
                            field: {
                              id: '#/one/two',
                              min: 1,
                              max: 3,
                              isRequired: false,
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

        /**
         *  Array
         */
        it('transforms `object` type schemas (`properties` is an object of `array` type with `enum`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'array',
                            name: 'two',
                            rootSchema: {},
                            schema: {
                              type: 'array',
                              enum: [
                                [],
                                []
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            items: [
                              [],
                              []
                            ],
                            selectedItems: [],
                            isRequired: false
                          },
                          elements: {
                            enum: {
                              id: '#/one/two',
                              items: [
                                [],
                                []
                              ],
                              selectedItems: [],
                              isRequired: false
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

        it('transforms `object` type schemas (`properties` is an object of `array` type with `anyOf`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'array',
                            name: 'two',
                            rootSchema: {},
                            schema: {
                              type: 'array',
                              anyOf: [
                                { const: [] },
                                { const: [] }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            items: [
                              {
                                meta: {
                                  type: 'array',
                                  item: 0,
                                  rootSchema: {},
                                  schema: {
                                    const: []
                                  },
                                  parentUri: '#/one/two',
                                  uri: '#/one/two/0'
                                },
                                elements: {
                                  fields: []
                                }
                              },
                              {
                                meta: {
                                  type: 'array',
                                  item: 1,
                                  rootSchema: {},
                                  schema: {
                                    const: []
                                  },
                                  parentUri: '#/one/two',
                                  uri: '#/one/two/1'
                                },
                                elements: {
                                  fields: []
                                }
                              }
                            ],
                            selectedItems: [],
                            isRequired: false
                          },
                          elements: {
                            anyOf: {
                              id: '#/one/two',
                              items: [
                                {
                                  meta: {
                                    type: 'array',
                                    item: 0,
                                    rootSchema: {},
                                    schema: {
                                      const: []
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0'
                                  },
                                  elements: {
                                    fields: []
                                  }
                                },
                                {
                                  meta: {
                                    type: 'array',
                                    item: 1,
                                    rootSchema: {},
                                    schema: {
                                      const: []
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/1'
                                  },
                                  elements: {
                                    fields: []
                                  }
                                }
                              ],
                              selectedItems: [],
                              isRequired: false
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

        it('transforms `object` type schemas (`properties` is an object of `array` type with `oneOf`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'array',
                            name: 'two',
                            rootSchema: {},
                            schema: {
                              type: 'array',
                              oneOf: [
                                { const: [] },
                                { const: [] }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            items: [
                              {
                                meta: {
                                  type: 'array',
                                  item: 0,
                                  rootSchema: {},
                                  schema: {
                                    const: []
                                  },
                                  parentUri: '#/one/two',
                                  uri: '#/one/two/0'
                                },
                                elements: {
                                  fields: []
                                }
                              },
                              {
                                meta: {
                                  type: 'array',
                                  item: 1,
                                  rootSchema: {},
                                  schema: {
                                    const: []
                                  },
                                  parentUri: '#/one/two',
                                  uri: '#/one/two/1'
                                },
                                elements: {
                                  fields: []
                                }
                              }
                            ],
                            selectedItems: [],
                            isRequired: false
                          },
                          elements: {
                            oneOf: {
                              id: '#/one/two',
                              items: [
                                {
                                  meta: {
                                    type: 'array',
                                    item: 0,
                                    rootSchema: {},
                                    schema: {
                                      const: []
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0'
                                  },
                                  elements: {
                                    fields: []
                                  }
                                },
                                {
                                  meta: {
                                    type: 'array',
                                    item: 1,
                                    rootSchema: {},
                                    schema: {
                                      const: []
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/1'
                                  },
                                  elements: {
                                    fields: []
                                  }
                                }
                              ],
                              selectedItems: [],
                              isRequired: false
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

        it('transforms `object` type schemas (`properties` is an object of `array` type with `allOf`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'array',
                            name: 'two',
                            rootSchema: {},
                            schema: {
                              type: 'array',
                              allOf: [
                                { const: [] }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            isRequired: false
                          },
                          elements: {
                            field: {
                              id: '#/one/two',
                              isRequired: false
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

        it('transforms `object` type schemas (`properties` is an object of `array` type with `enum`) (with `required`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: true
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'array',
                            name: 'two',
                            rootSchema: {},
                            schema: {
                              type: 'array',
                              enum: [
                                [],
                                []
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            items: [
                              [],
                              []
                            ],
                            selectedItems: [],
                            isRequired: false
                          },
                          elements: {
                            enum: {
                              id: '#/one/two',
                              items: [
                                [],
                                []
                              ],
                              selectedItems: [],
                              isRequired: false
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

        it('transforms `object` type schemas (`properties` is an object of `array` type with `anyOf`) (with `required`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: true
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'array',
                            name: 'two',
                            rootSchema: {},
                            schema: {
                              type: 'array',
                              anyOf: [
                                { const: [] },
                                { const: [] }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            items: [
                              {
                                meta: {
                                  type: 'array',
                                  item: 0,
                                  rootSchema: {},
                                  schema: {
                                    const: []
                                  },
                                  parentUri: '#/one/two',
                                  uri: '#/one/two/0'
                                },
                                elements: {
                                  fields: []
                                }
                              },
                              {
                                meta: {
                                  type: 'array',
                                  item: 1,
                                  rootSchema: {},
                                  schema: {
                                    const: []
                                  },
                                  parentUri: '#/one/two',
                                  uri: '#/one/two/1'
                                },
                                elements: {
                                  fields: []
                                }
                              }
                            ],
                            selectedItems: [],
                            isRequired: false
                          },
                          elements: {
                            anyOf: {
                              id: '#/one/two',
                              items: [
                                {
                                  meta: {
                                    type: 'array',
                                    item: 0,
                                    rootSchema: {},
                                    schema: {
                                      const: []
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0'
                                  },
                                  elements: {
                                    fields: []
                                  }
                                },
                                {
                                  meta: {
                                    type: 'array',
                                    item: 1,
                                    rootSchema: {},
                                    schema: {
                                      const: []
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/1'
                                  },
                                  elements: {
                                    fields: []
                                  }
                                }
                              ],
                              selectedItems: [],
                              isRequired: false
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

        it('transforms `object` type schemas (`properties` is an object of `array` type with `oneOf`) (with `required`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: true
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'array',
                            name: 'two',
                            rootSchema: {},
                            schema: {
                              type: 'array',
                              oneOf: [
                                { const: [] },
                                { const: [] }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            items: [
                              {
                                meta: {
                                  type: 'array',
                                  item: 0,
                                  rootSchema: {},
                                  schema: {
                                    const: []
                                  },
                                  parentUri: '#/one/two',
                                  uri: '#/one/two/0'
                                },
                                elements: {
                                  fields: []
                                }
                              },
                              {
                                meta: {
                                  type: 'array',
                                  item: 1,
                                  rootSchema: {},
                                  schema: {
                                    const: []
                                  },
                                  parentUri: '#/one/two',
                                  uri: '#/one/two/1'
                                },
                                elements: {
                                  fields: []
                                }
                              }
                            ],
                            selectedItems: [],
                            isRequired: false
                          },
                          elements: {
                            oneOf: {
                              id: '#/one/two',
                              items: [
                                {
                                  meta: {
                                    type: 'array',
                                    item: 0,
                                    rootSchema: {},
                                    schema: {
                                      const: []
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0'
                                  },
                                  elements: {
                                    fields: []
                                  }
                                },
                                {
                                  meta: {
                                    type: 'array',
                                    item: 1,
                                    rootSchema: {},
                                    schema: {
                                      const: []
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/1'
                                  },
                                  elements: {
                                    fields: []
                                  }
                                }
                              ],
                              selectedItems: [],
                              isRequired: false
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

        it('transforms `object` type schemas (`properties` is an object of `array` type with `allOf`) (with `required`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: true
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'array',
                            name: 'two',
                            rootSchema: {},
                            schema: {
                              type: 'array',
                              allOf: [
                                { const: [] }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            isRequired: false
                          },
                          elements: {
                            field: {
                              id: '#/one/two',
                              isRequired: false
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

        /**
         *  Object
         */
        it('transforms `object` type schemas (`properties` is an object of `object` type with `enum`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'object',
                            name: 'two',
                            rootSchema: {},
                            schema: {
                              type: 'object',
                              enum: [
                                {},
                                {}
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            items: [
                              {},
                              {}
                            ],
                            selectedItems: [],
                            isRequired: false
                          },
                          elements: {
                            enum: {
                              id: '#/one/two',
                              items: [
                                {},
                                {}
                              ],
                              selectedItems: [],
                              isRequired: false
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

        it('transforms `object` type schemas (`properties` is an object of `object` type with `anyOf`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'object',
                            name: 'two',
                            rootSchema: {},
                            schema: {
                              type: 'object',
                              anyOf: [
                                { const: {} },
                                { const: {} }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            items: [
                              {
                                meta: {
                                  type: 'object',
                                  item: 0,
                                  rootSchema: {},
                                  schema: {
                                    const: {}
                                  },
                                  parentUri: '#/one/two',
                                  uri: '#/one/two/0'
                                },
                                elements: {
                                  fields: []
                                }
                              },
                              {
                                meta: {
                                  type: 'object',
                                  item: 1,
                                  rootSchema: {},
                                  schema: {
                                    const: {}
                                  },
                                  parentUri: '#/one/two',
                                  uri: '#/one/two/1'
                                },
                                elements: {
                                  fields: []
                                }
                              }
                            ],
                            selectedItems: [],
                            isRequired: false
                          },
                          elements: {
                            anyOf: {
                              id: '#/one/two',
                              items: [
                                {
                                  meta: {
                                    type: 'object',
                                    item: 0,
                                    rootSchema: {},
                                    schema: {
                                      const: {}
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0'
                                  },
                                  elements: {
                                    fields: []
                                  }
                                },
                                {
                                  meta: {
                                    type: 'object',
                                    item: 1,
                                    rootSchema: {},
                                    schema: {
                                      const: {}
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/1'
                                  },
                                  elements: {
                                    fields: []
                                  }
                                }
                              ],
                              selectedItems: [],
                              isRequired: false
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

        it('transforms `object` type schemas (`properties` is an object of `object` type with `oneOf`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'object',
                            name: 'two',
                            rootSchema: {},
                            schema: {
                              type: 'object',
                              oneOf: [
                                { const: {} },
                                { const: {} }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            items: [
                              {
                                meta: {
                                  type: 'object',
                                  item: 0,
                                  rootSchema: {},
                                  schema: {
                                    const: {}
                                  },
                                  parentUri: '#/one/two',
                                  uri: '#/one/two/0'
                                },
                                elements: {
                                  fields: []
                                }
                              },
                              {
                                meta: {
                                  type: 'object',
                                  item: 1,
                                  rootSchema: {},
                                  schema: {
                                    const: {}
                                  },
                                  parentUri: '#/one/two',
                                  uri: '#/one/two/1'
                                },
                                elements: {
                                  fields: []
                                }
                              }
                            ],
                            selectedItems: [],
                            isRequired: false
                          },
                          elements: {
                            oneOf: {
                              id: '#/one/two',
                              items: [
                                {
                                  meta: {
                                    type: 'object',
                                    item: 0,
                                    rootSchema: {},
                                    schema: {
                                      const: {}
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0'
                                  },
                                  elements: {
                                    fields: []
                                  }
                                },
                                {
                                  meta: {
                                    type: 'object',
                                    item: 1,
                                    rootSchema: {},
                                    schema: {
                                      const: {}
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/1'
                                  },
                                  elements: {
                                    fields: []
                                  }
                                }
                              ],
                              selectedItems: [],
                              isRequired: false
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

        it('transforms `object` type schemas (`properties` is an object of `object` type with `allOf`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'object',
                            name: 'two',
                            rootSchema: {},
                            schema: {
                              type: 'object',
                              allOf: [
                                { const: {} }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            isRequired: false
                          },
                          elements: {
                            field: {
                              id: '#/one/two',
                              isRequired: false
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

        it('transforms `object` type schemas (`properties` is an object of `object` type with `enum`) (with `required`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: true
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'object',
                            name: 'two',
                            rootSchema: {},
                            schema: {
                              type: 'object',
                              enum: [
                                {},
                                {}
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            items: [
                              {},
                              {}
                            ],
                            selectedItems: [],
                            isRequired: false
                          },
                          elements: {
                            enum: {
                              id: '#/one/two',
                              items: [
                                {},
                                {}
                              ],
                              selectedItems: [],
                              isRequired: false
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

        it('transforms `object` type schemas (`properties` is an object of `object` type with `anyOf`) (with `required`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: true
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'object',
                            name: 'two',
                            rootSchema: {},
                            schema: {
                              type: 'object',
                              anyOf: [
                                { const: {} },
                                { const: {} }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            items: [
                              {
                                meta: {
                                  type: 'object',
                                  item: 0,
                                  rootSchema: {},
                                  schema: {
                                    const: {}
                                  },
                                  parentUri: '#/one/two',
                                  uri: '#/one/two/0'
                                },
                                elements: {
                                  fields: []
                                }
                              },
                              {
                                meta: {
                                  type: 'object',
                                  item: 1,
                                  rootSchema: {},
                                  schema: {
                                    const: {}
                                  },
                                  parentUri: '#/one/two',
                                  uri: '#/one/two/1'
                                },
                                elements: {
                                  fields: []
                                }
                              }
                            ],
                            selectedItems: [],
                            isRequired: false
                          },
                          elements: {
                            anyOf: {
                              id: '#/one/two',
                              items: [
                                {
                                  meta: {
                                    type: 'object',
                                    item: 0,
                                    rootSchema: {},
                                    schema: {
                                      const: {}
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0'
                                  },
                                  elements: {
                                    fields: []
                                  }
                                },
                                {
                                  meta: {
                                    type: 'object',
                                    item: 1,
                                    rootSchema: {},
                                    schema: {
                                      const: {}
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/1'
                                  },
                                  elements: {
                                    fields: []
                                  }
                                }
                              ],
                              selectedItems: [],
                              isRequired: false
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

        it('transforms `object` type schemas (`properties` is an object of `object` type with `oneOf`) (with `required`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: true
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'object',
                            name: 'two',
                            rootSchema: {},
                            schema: {
                              type: 'object',
                              oneOf: [
                                { const: {} },
                                { const: {} }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            items: [
                              {
                                meta: {
                                  type: 'object',
                                  item: 0,
                                  rootSchema: {},
                                  schema: {
                                    const: {}
                                  },
                                  parentUri: '#/one/two',
                                  uri: '#/one/two/0'
                                },
                                elements: {
                                  fields: []
                                }
                              },
                              {
                                meta: {
                                  type: 'object',
                                  item: 1,
                                  rootSchema: {},
                                  schema: {
                                    const: {}
                                  },
                                  parentUri: '#/one/two',
                                  uri: '#/one/two/1'
                                },
                                elements: {
                                  fields: []
                                }
                              }
                            ],
                            selectedItems: [],
                            isRequired: false
                          },
                          elements: {
                            oneOf: {
                              id: '#/one/two',
                              items: [
                                {
                                  meta: {
                                    type: 'object',
                                    item: 0,
                                    rootSchema: {},
                                    schema: {
                                      const: {}
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0'
                                  },
                                  elements: {
                                    fields: []
                                  }
                                },
                                {
                                  meta: {
                                    type: 'object',
                                    item: 1,
                                    rootSchema: {},
                                    schema: {
                                      const: {}
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/1'
                                  },
                                  elements: {
                                    fields: []
                                  }
                                }
                              ],
                              selectedItems: [],
                              isRequired: false
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

        it('transforms `object` type schemas (`properties` is an object of `object` type with `allOf`) (with `required`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: true
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'object',
                            name: 'two',
                            rootSchema: {},
                            schema: {
                              type: 'object',
                              allOf: [
                                { const: {} }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            isRequired: false
                          },
                          elements: {
                            field: {
                              id: '#/one/two',
                              isRequired: false
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

        /**
         *  Boolean
         */
        it('transforms `object` type schemas (`properties` is an object of `boolean` type with `enum`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'boolean',
                            name: 'two',
                            rootSchema: {},
                            schema: {
                              type: 'boolean',
                              enum: [
                                true,
                                false
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            items: [
                              true,
                              false
                            ],
                            selectedItems: [],
                            isRequired: false
                          },
                          elements: {
                            enum: {
                              id: '#/one/two',
                              items: [
                                true,
                                false
                              ],
                              selectedItems: [],
                              isRequired: false
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

        it('transforms `object` type schemas (`properties` is an object of `boolean` type with `anyOf`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'boolean',
                            name: 'two',
                            rootSchema: {},
                            schema: {
                              type: 'boolean',
                              anyOf: [
                                { const: true },
                                { const: false }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            items: [
                              {
                                meta: {
                                  type: 'boolean',
                                  item: 0,
                                  rootSchema: {},
                                  schema: {
                                    const: true
                                  },
                                  parentUri: '#/one/two',
                                  uri: '#/one/two/0',
                                  selectedItems: [],
                                  value: 'true'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/0',
                                    selectedItems: [],
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
                                  parentUri: '#/one/two',
                                  uri: '#/one/two/1',
                                  selectedItems: [],
                                  value: 'false'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/1',
                                    selectedItems: [],
                                    value: 'false'
                                  }
                                }
                              }
                            ],
                            selectedItems: [],
                            isRequired: false
                          },
                          elements: {
                            anyOf: {
                              id: '#/one/two',
                              items: [
                                {
                                  meta: {
                                    type: 'boolean',
                                    item: 0,
                                    rootSchema: {},
                                    schema: {
                                      const: true
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    selectedItems: [],
                                    value: 'true'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/0',
                                      selectedItems: [],
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
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/1',
                                    selectedItems: [],
                                    value: 'false'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/1',
                                      selectedItems: [],
                                      value: 'false'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
                              isRequired: false
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

        it('transforms `object` type schemas (`properties` is an object of `boolean` type with `oneOf`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'boolean',
                            name: 'two',
                            rootSchema: {},
                            schema: {
                              type: 'boolean',
                              oneOf: [
                                { const: true },
                                { const: false }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            items: [
                              {
                                meta: {
                                  type: 'boolean',
                                  item: 0,
                                  rootSchema: {},
                                  schema: {
                                    const: true
                                  },
                                  parentUri: '#/one/two',
                                  uri: '#/one/two/0',
                                  selectedItems: [],
                                  value: 'true'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/0',
                                    selectedItems: [],
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
                                  parentUri: '#/one/two',
                                  uri: '#/one/two/1',
                                  selectedItems: [],
                                  value: 'false'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/1',
                                    selectedItems: [],
                                    value: 'false'
                                  }
                                }
                              }
                            ],
                            selectedItems: [],
                            isRequired: false
                          },
                          elements: {
                            oneOf: {
                              id: '#/one/two',
                              items: [
                                {
                                  meta: {
                                    type: 'boolean',
                                    item: 0,
                                    rootSchema: {},
                                    schema: {
                                      const: true
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    selectedItems: [],
                                    value: 'true'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/0',
                                      selectedItems: [],
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
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/1',
                                    selectedItems: [],
                                    value: 'false'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/1',
                                      selectedItems: [],
                                      value: 'false'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
                              isRequired: false
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

        it('transforms `object` type schemas (`properties` is an object of `boolean` type with `allOf`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'boolean',
                            name: 'two',
                            rootSchema: {},
                            schema: {
                              type: 'boolean',
                              allOf: [
                                { const: true }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            isRequired: false,
                            value: 'true'
                          },
                          elements: {
                            field: {
                              id: '#/one/two',
                              isRequired: false,
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

        it('transforms `object` type schemas (`properties` is an object of `boolean` type with `enum`) (with `required`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: true
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'boolean',
                            name: 'two',
                            rootSchema: {},
                            schema: {
                              type: 'boolean',
                              enum: [
                                true,
                                false
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            items: [
                              true,
                              false
                            ],
                            selectedItems: [],
                            isRequired: false
                          },
                          elements: {
                            enum: {
                              id: '#/one/two',
                              items: [
                                true,
                                false
                              ],
                              selectedItems: [],
                              isRequired: false
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

        it('transforms `object` type schemas (`properties` is an object of `boolean` type with `anyOf`) (with `required`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: true
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'boolean',
                            name: 'two',
                            rootSchema: {},
                            schema: {
                              type: 'boolean',
                              anyOf: [
                                { const: true },
                                { const: false }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            items: [
                              {
                                meta: {
                                  type: 'boolean',
                                  item: 0,
                                  rootSchema: {},
                                  schema: {
                                    const: true
                                  },
                                  parentUri: '#/one/two',
                                  uri: '#/one/two/0',
                                  selectedItems: [],
                                  value: 'true'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/0',
                                    selectedItems: [],
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
                                  parentUri: '#/one/two',
                                  uri: '#/one/two/1',
                                  selectedItems: [],
                                  value: 'false'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/1',
                                    selectedItems: [],
                                    value: 'false'
                                  }
                                }
                              }
                            ],
                            selectedItems: [],
                            isRequired: false
                          },
                          elements: {
                            anyOf: {
                              id: '#/one/two',
                              items: [
                                {
                                  meta: {
                                    type: 'boolean',
                                    item: 0,
                                    rootSchema: {},
                                    schema: {
                                      const: true
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    selectedItems: [],
                                    value: 'true'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/0',
                                      selectedItems: [],
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
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/1',
                                    selectedItems: [],
                                    value: 'false'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/1',
                                      selectedItems: [],
                                      value: 'false'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
                              isRequired: false
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

        it('transforms `object` type schemas (`properties` is an object of `boolean` type with `oneOf`) (with `required`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: true
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'boolean',
                            name: 'two',
                            rootSchema: {},
                            schema: {
                              type: 'boolean',
                              oneOf: [
                                { const: true },
                                { const: false }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            items: [
                              {
                                meta: {
                                  type: 'boolean',
                                  item: 0,
                                  rootSchema: {},
                                  schema: {
                                    const: true
                                  },
                                  parentUri: '#/one/two',
                                  uri: '#/one/two/0',
                                  selectedItems: [],
                                  value: 'true'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/0',
                                    selectedItems: [],
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
                                  parentUri: '#/one/two',
                                  uri: '#/one/two/1',
                                  selectedItems: [],
                                  value: 'false'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/1',
                                    selectedItems: [],
                                    value: 'false'
                                  }
                                }
                              }
                            ],
                            selectedItems: [],
                            isRequired: false
                          },
                          elements: {
                            oneOf: {
                              id: '#/one/two',
                              items: [
                                {
                                  meta: {
                                    type: 'boolean',
                                    item: 0,
                                    rootSchema: {},
                                    schema: {
                                      const: true
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    selectedItems: [],
                                    value: 'true'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/0',
                                      selectedItems: [],
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
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/1',
                                    selectedItems: [],
                                    value: 'false'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/1',
                                      selectedItems: [],
                                      value: 'false'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
                              isRequired: false
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

        it('transforms `object` type schemas (`properties` is an object of `boolean` type with `allOf`) (with `required`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: true
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'boolean',
                            name: 'two',
                            rootSchema: {},
                            schema: {
                              type: 'boolean',
                              allOf: [
                                { const: true }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            isRequired: false,
                            value: 'true'
                          },
                          elements: {
                            field: {
                              id: '#/one/two',
                              isRequired: false,
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

        /**
         *  Null
         */
        it('transforms `object` type schemas (`properties` is an object of `null` type with `enum`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'null',
                            name: 'two',
                            rootSchema: {},
                            schema: {
                              type: 'null',
                              enum: [
                                null
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            items: [
                              null
                            ],
                            selectedItems: [],
                            isRequired: false
                          },
                          elements: {
                            enum: {
                              id: '#/one/two',
                              items: [
                                null
                              ],
                              selectedItems: [],
                              isRequired: false
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

        it('transforms `object` type schemas (`properties` is an object of `null` type with `anyOf`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'null',
                            name: 'two',
                            rootSchema: {},
                            schema: {
                              type: 'null',
                              anyOf: [
                                { const: null }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            items: [
                              {
                                meta: {
                                  type: 'null',
                                  item: 0,
                                  rootSchema: {},
                                  schema: {
                                    const: null
                                  },
                                  parentUri: '#/one/two',
                                  uri: '#/one/two/0',
                                  selectedItems: [],
                                  value: 'null'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/0',
                                    selectedItems: [],
                                    value: 'null'
                                  }
                                }
                              }
                            ],
                            selectedItems: [],
                            isRequired: false
                          },
                          elements: {
                            anyOf: {
                              id: '#/one/two',
                              items: [
                                {
                                  meta: {
                                    type: 'null',
                                    item: 0,
                                    rootSchema: {},
                                    schema: {
                                      const: null
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    selectedItems: [],
                                    value: 'null'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/0',
                                      selectedItems: [],
                                      value: 'null'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
                              isRequired: false
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

        it('transforms `object` type schemas (`properties` is an object of `null` type with `oneOf`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'null',
                            name: 'two',
                            rootSchema: {},
                            schema: {
                              type: 'null',
                              oneOf: [
                                { const: null }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            items: [
                              {
                                meta: {
                                  type: 'null',
                                  item: 0,
                                  rootSchema: {},
                                  schema: {
                                    const: null
                                  },
                                  parentUri: '#/one/two',
                                  uri: '#/one/two/0',
                                  selectedItems: [],
                                  value: 'null'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/0',
                                    selectedItems: [],
                                    value: 'null'
                                  }
                                }
                              }
                            ],
                            selectedItems: [],
                            isRequired: false
                          },
                          elements: {
                            oneOf: {
                              id: '#/one/two',
                              items: [
                                {
                                  meta: {
                                    type: 'null',
                                    item: 0,
                                    rootSchema: {},
                                    schema: {
                                      const: null
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    selectedItems: [],
                                    value: 'null'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/0',
                                      selectedItems: [],
                                      value: 'null'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
                              isRequired: false
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

        it('transforms `object` type schemas (`properties` is an object of `null` type with `allOf`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: false
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'null',
                            name: 'two',
                            rootSchema: {},
                            schema: {
                              type: 'null',
                              allOf: [
                                { const: null }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            isRequired: false,
                            value: 'null'
                          },
                          elements: {
                            field: {
                              id: '#/one/two',
                              isRequired: false,
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

        it('transforms `object` type schemas (`properties` is an object of `null` type with `enum`) (with `required`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: true
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'null',
                            name: 'two',
                            rootSchema: {},
                            schema: {
                              type: 'null',
                              enum: [
                                null
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            items: [
                              null
                            ],
                            selectedItems: [],
                            isRequired: false
                          },
                          elements: {
                            enum: {
                              id: '#/one/two',
                              items: [
                                null
                              ],
                              selectedItems: [],
                              isRequired: false
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

        it('transforms `object` type schemas (`properties` is an object of `null` type with `anyOf`) (with `required`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: true
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'null',
                            name: 'two',
                            rootSchema: {},
                            schema: {
                              type: 'null',
                              anyOf: [
                                { const: null }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            items: [
                              {
                                meta: {
                                  type: 'null',
                                  item: 0,
                                  rootSchema: {},
                                  schema: {
                                    const: null
                                  },
                                  parentUri: '#/one/two',
                                  uri: '#/one/two/0',
                                  selectedItems: [],
                                  value: 'null'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/0',
                                    selectedItems: [],
                                    value: 'null'
                                  }
                                }
                              }
                            ],
                            selectedItems: [],
                            isRequired: false
                          },
                          elements: {
                            anyOf: {
                              id: '#/one/two',
                              items: [
                                {
                                  meta: {
                                    type: 'null',
                                    item: 0,
                                    rootSchema: {},
                                    schema: {
                                      const: null
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    selectedItems: [],
                                    value: 'null'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/0',
                                      selectedItems: [],
                                      value: 'null'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
                              isRequired: false
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

        it('transforms `object` type schemas (`properties` is an object of `null` type with `oneOf`) (with `required`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: true
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'null',
                            name: 'two',
                            rootSchema: {},
                            schema: {
                              type: 'null',
                              oneOf: [
                                { const: null }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            items: [
                              {
                                meta: {
                                  type: 'null',
                                  item: 0,
                                  rootSchema: {},
                                  schema: {
                                    const: null
                                  },
                                  parentUri: '#/one/two',
                                  uri: '#/one/two/0',
                                  selectedItems: [],
                                  value: 'null'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/0',
                                    selectedItems: [],
                                    value: 'null'
                                  }
                                }
                              }
                            ],
                            selectedItems: [],
                            isRequired: false
                          },
                          elements: {
                            oneOf: {
                              id: '#/one/two',
                              items: [
                                {
                                  meta: {
                                    type: 'null',
                                    item: 0,
                                    rootSchema: {},
                                    schema: {
                                      const: null
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    selectedItems: [],
                                    value: 'null'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/0',
                                      selectedItems: [],
                                      value: 'null'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [],
                              isRequired: false
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

        it('transforms `object` type schemas (`properties` is an object of `null` type with `allOf`) (with `required`)', () => {
          /**
           *  @type {SchemaType}
           */
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

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'object',
                rootSchema: {},
                schema,
                uri: '#/'
              },
              elements: {
                fields: [
                  {
                    meta: {
                      type: 'object',
                      name: 'one',
                      rootSchema: {},
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
                      isRequired: true
                    },
                    elements: {
                      fields: [
                        {
                          meta: {
                            type: 'null',
                            name: 'two',
                            rootSchema: {},
                            schema: {
                              type: 'null',
                              allOf: [
                                { const: null }
                              ]
                            },
                            parentUri: '#/one',
                            uri: '#/one/two',
                            isRequired: false,
                            value: 'null'
                          },
                          elements: {
                            field: {
                              id: '#/one/two',
                              isRequired: false,
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
      })
    })
  })
})
