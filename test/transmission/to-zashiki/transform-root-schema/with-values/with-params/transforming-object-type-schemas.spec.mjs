/**
 *  @typedef {TransmissionTypes.SchemaType} SchemaType
 *  @typedef {TransmissionTypes.ValuesType} ValuesType
 */

import {
  expect
} from 'chai'

import transform from '#transmission/transmission/to-zashiki/transform-root-schema'

describe('#transmission/transmission/to-zashiki/transform-root-schema', () => {
  describe('With values', () => {
    describe('With params', () => {
      describe('Transforming `object` type schemas', () => {
        it('transforms `object` type schemas (`properties` is an object of `string` type with `enum`)', () => {
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

          /**
           *  @type {ValuesType}
           */
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
                      items: [
                        'string (1)',
                        'string (2)'
                      ],
                      selectedItems: [
                        0
                      ],
                      isRequired: false
                    },
                    elements: {
                      enum: {
                        id: '#/one',
                        items: [
                          'string (1)',
                          'string (2)'
                        ],
                        selectedItems: [
                          0
                        ],
                        isRequired: false
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
                      items: [
                        'string (1)',
                        'string (2)'
                      ],
                      selectedItems: [
                        1
                      ],
                      isRequired: false
                    },
                    elements: {
                      enum: {
                        id: '#/two',
                        items: [
                          'string (1)',
                          'string (2)'
                        ],
                        selectedItems: [
                          1
                        ],
                        isRequired: false
                      }
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

          /**
           *  @type {ValuesType}
           */
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
                            selectedItems: [
                              0
                            ],
                            value: 'string (1)'
                          },
                          elements: {
                            field: {
                              id: '#/one/0',
                              selectedItems: [
                                0
                              ],
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
                            selectedItems: [
                              0
                            ],
                            value: 'string (2)'
                          },
                          elements: {
                            field: {
                              id: '#/one/1',
                              selectedItems: [
                                0
                              ],
                              value: 'string (2)'
                            }
                          }
                        }
                      ],
                      selectedItems: [
                        0
                      ],
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
                              rootSchema: schema,
                              schema: {
                                const: 'string (1)'
                              },
                              parentUri: '#/one',
                              uri: '#/one/0',
                              selectedItems: [
                                0
                              ],
                              value: 'string (1)'
                            },
                            elements: {
                              field: {
                                id: '#/one/0',
                                selectedItems: [
                                  0
                                ],
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
                              selectedItems: [
                                0
                              ],
                              value: 'string (2)'
                            },
                            elements: {
                              field: {
                                id: '#/one/1',
                                selectedItems: [
                                  0
                                ],
                                value: 'string (2)'
                              }
                            }
                          }
                        ],
                        selectedItems: [
                          0
                        ],
                        isRequired: false
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
                            selectedItems: [
                              1
                            ],
                            value: 'string (1)'
                          },
                          elements: {
                            field: {
                              id: '#/two/0',
                              selectedItems: [
                                1
                              ],
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
                            selectedItems: [
                              1
                            ],
                            value: 'string (2)'
                          },
                          elements: {
                            field: {
                              id: '#/two/1',
                              selectedItems: [
                                1
                              ],
                              value: 'string (2)'
                            }
                          }
                        }
                      ],
                      selectedItems: [
                        1
                      ],
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
                              rootSchema: schema,
                              schema: {
                                const: 'string (1)'
                              },
                              parentUri: '#/two',
                              uri: '#/two/0',
                              selectedItems: [
                                1
                              ],
                              value: 'string (1)'
                            },
                            elements: {
                              field: {
                                id: '#/two/0',
                                selectedItems: [
                                  1
                                ],
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
                              selectedItems: [
                                1
                              ],
                              value: 'string (2)'
                            },
                            elements: {
                              field: {
                                id: '#/two/1',
                                selectedItems: [
                                  1
                                ],
                                value: 'string (2)'
                              }
                            }
                          }
                        ],
                        selectedItems: [
                          1
                        ],
                        isRequired: false
                      }
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

          /**
           *  @type {ValuesType}
           */
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
                            selectedItems: [
                              0
                            ],
                            value: 'string (1)'
                          },
                          elements: {
                            field: {
                              id: '#/one/0',
                              selectedItems: [
                                0
                              ],
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
                            selectedItems: [
                              0
                            ],
                            value: 'string (2)'
                          },
                          elements: {
                            field: {
                              id: '#/one/1',
                              selectedItems: [
                                0
                              ],
                              value: 'string (2)'
                            }
                          }
                        }
                      ],
                      selectedItems: [
                        0
                      ],
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
                              rootSchema: schema,
                              schema: {
                                const: 'string (1)'
                              },
                              parentUri: '#/one',
                              uri: '#/one/0',
                              selectedItems: [
                                0
                              ],
                              value: 'string (1)'
                            },
                            elements: {
                              field: {
                                id: '#/one/0',
                                selectedItems: [
                                  0
                                ],
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
                              selectedItems: [
                                0
                              ],
                              value: 'string (2)'
                            },
                            elements: {
                              field: {
                                id: '#/one/1',
                                selectedItems: [
                                  0
                                ],
                                value: 'string (2)'
                              }
                            }
                          }
                        ],
                        selectedItems: [
                          0
                        ],
                        isRequired: false
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
                            selectedItems: [
                              1
                            ],
                            value: 'string (1)'
                          },
                          elements: {
                            field: {
                              id: '#/two/0',
                              selectedItems: [
                                1
                              ],
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
                            selectedItems: [
                              1
                            ],
                            value: 'string (2)'
                          },
                          elements: {
                            field: {
                              id: '#/two/1',
                              selectedItems: [
                                1
                              ],
                              value: 'string (2)'
                            }
                          }
                        }
                      ],
                      selectedItems: [
                        1
                      ],
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
                              rootSchema: schema,
                              schema: {
                                const: 'string (1)'
                              },
                              parentUri: '#/two',
                              uri: '#/two/0',
                              selectedItems: [
                                1
                              ],
                              value: 'string (1)'
                            },
                            elements: {
                              field: {
                                id: '#/two/0',
                                selectedItems: [
                                  1
                                ],
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
                              selectedItems: [
                                1
                              ],
                              value: 'string (2)'
                            },
                            elements: {
                              field: {
                                id: '#/two/1',
                                selectedItems: [
                                  1
                                ],
                                value: 'string (2)'
                              }
                            }
                          }
                        ],
                        selectedItems: [
                          1
                        ],
                        isRequired: false
                      }
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: false,
                      value: '0'
                    },
                    elements: {
                      field: {
                        id: '#/one',
                        minLength: 1,
                        maxLength: 100,
                        isRequired: false,
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
                      isRequired: false,
                      value: '1'
                    },
                    elements: {
                      field: {
                        id: '#/two',
                        minLength: 1,
                        maxLength: 100,
                        isRequired: false,
                        value: '1'
                      }
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

          /**
           *  @type {ValuesType}
           */
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
                      items: [
                        'string (1)',
                        'string (2)'
                      ],
                      selectedItems: [
                        0
                      ],
                      isRequired: true
                    },
                    elements: {
                      enum: {
                        id: '#/one',
                        items: [
                          'string (1)',
                          'string (2)'
                        ],
                        selectedItems: [
                          0
                        ],
                        isRequired: true
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
                      items: [
                        'string (1)',
                        'string (2)'
                      ],
                      selectedItems: [
                        1
                      ],
                      isRequired: false
                    },
                    elements: {
                      enum: {
                        id: '#/two',
                        items: [
                          'string (1)',
                          'string (2)'
                        ],
                        selectedItems: [
                          1
                        ],
                        isRequired: false
                      }
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

          /**
           *  @type {ValuesType}
           */
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
                            selectedItems: [
                              0
                            ],
                            value: 'string (1)'
                          },
                          elements: {
                            field: {
                              id: '#/one/0',
                              selectedItems: [
                                0
                              ],
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
                            selectedItems: [
                              0
                            ],
                            value: 'string (2)'
                          },
                          elements: {
                            field: {
                              id: '#/one/1',
                              selectedItems: [
                                0
                              ],
                              value: 'string (2)'
                            }
                          }
                        }
                      ],
                      selectedItems: [
                        0
                      ],
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
                              rootSchema: schema,
                              schema: {
                                const: 'string (1)'
                              },
                              parentUri: '#/one',
                              uri: '#/one/0',
                              selectedItems: [
                                0
                              ],
                              value: 'string (1)'
                            },
                            elements: {
                              field: {
                                id: '#/one/0',
                                selectedItems: [
                                  0
                                ],
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
                              selectedItems: [
                                0
                              ],
                              value: 'string (2)'
                            },
                            elements: {
                              field: {
                                id: '#/one/1',
                                selectedItems: [
                                  0
                                ],
                                value: 'string (2)'
                              }
                            }
                          }
                        ],
                        selectedItems: [
                          0
                        ],
                        isRequired: true
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
                            selectedItems: [
                              1
                            ],
                            value: 'string (1)'
                          },
                          elements: {
                            field: {
                              id: '#/two/0',
                              selectedItems: [
                                1
                              ],
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
                            selectedItems: [
                              1
                            ],
                            value: 'string (2)'
                          },
                          elements: {
                            field: {
                              id: '#/two/1',
                              selectedItems: [
                                1
                              ],
                              value: 'string (2)'
                            }
                          }
                        }
                      ],
                      selectedItems: [
                        1
                      ],
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
                              rootSchema: schema,
                              schema: {
                                const: 'string (1)'
                              },
                              parentUri: '#/two',
                              uri: '#/two/0',
                              selectedItems: [
                                1
                              ],
                              value: 'string (1)'
                            },
                            elements: {
                              field: {
                                id: '#/two/0',
                                selectedItems: [
                                  1
                                ],
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
                              selectedItems: [
                                1
                              ],
                              value: 'string (2)'
                            },
                            elements: {
                              field: {
                                id: '#/two/1',
                                selectedItems: [
                                  1
                                ],
                                value: 'string (2)'
                              }
                            }
                          }
                        ],
                        selectedItems: [
                          1
                        ],
                        isRequired: false
                      }
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

          /**
           *  @type {ValuesType}
           */
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
                            selectedItems: [
                              0
                            ],
                            value: 'string (1)'
                          },
                          elements: {
                            field: {
                              id: '#/one/0',
                              selectedItems: [
                                0
                              ],
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
                            selectedItems: [
                              0
                            ],
                            value: 'string (2)'
                          },
                          elements: {
                            field: {
                              id: '#/one/1',
                              selectedItems: [
                                0
                              ],
                              value: 'string (2)'
                            }
                          }
                        }
                      ],
                      selectedItems: [
                        0
                      ],
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
                              rootSchema: schema,
                              schema: {
                                const: 'string (1)'
                              },
                              parentUri: '#/one',
                              uri: '#/one/0',
                              selectedItems: [
                                0
                              ],
                              value: 'string (1)'
                            },
                            elements: {
                              field: {
                                id: '#/one/0',
                                selectedItems: [
                                  0
                                ],
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
                              selectedItems: [
                                0
                              ],
                              value: 'string (2)'
                            },
                            elements: {
                              field: {
                                id: '#/one/1',
                                selectedItems: [
                                  0
                                ],
                                value: 'string (2)'
                              }
                            }
                          }
                        ],
                        selectedItems: [
                          0
                        ],
                        isRequired: true
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
                            selectedItems: [
                              1
                            ],
                            value: 'string (1)'
                          },
                          elements: {
                            field: {
                              id: '#/two/0',
                              selectedItems: [
                                1
                              ],
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
                            selectedItems: [
                              1
                            ],
                            value: 'string (2)'
                          },
                          elements: {
                            field: {
                              id: '#/two/1',
                              selectedItems: [
                                1
                              ],
                              value: 'string (2)'
                            }
                          }
                        }
                      ],
                      selectedItems: [
                        1
                      ],
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
                              rootSchema: schema,
                              schema: {
                                const: 'string (1)'
                              },
                              parentUri: '#/two',
                              uri: '#/two/0',
                              selectedItems: [
                                1
                              ],
                              value: 'string (1)'
                            },
                            elements: {
                              field: {
                                id: '#/two/0',
                                selectedItems: [
                                  1
                                ],
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
                              selectedItems: [
                                1
                              ],
                              value: 'string (2)'
                            },
                            elements: {
                              field: {
                                id: '#/two/1',
                                selectedItems: [
                                  1
                                ],
                                value: 'string (2)'
                              }
                            }
                          }
                        ],
                        selectedItems: [
                          1
                        ],
                        isRequired: false
                      }
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: true,
                      value: '0'
                    },
                    elements: {
                      field: {
                        id: '#/one',
                        minLength: 1,
                        maxLength: 100,
                        isRequired: true,
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
                      isRequired: false,
                      value: '1'
                    },
                    elements: {
                      field: {
                        id: '#/two',
                        minLength: 1,
                        maxLength: 100,
                        isRequired: false,
                        value: '1'
                      }
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas (`properties` is an object of `string` type)', () => {
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: false,
                      value: 'string'
                    },
                    elements: {
                      field: {
                        id: '#/one',
                        isRequired: false,
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
                      isRequired: false,
                      value: 'string'
                    },
                    elements: {
                      field: {
                        id: '#/two',
                        isRequired: false,
                        value: 'string'
                      }
                    }
                  }
                ]
              }
            })
        })

        it('transforms `object` type schemas (`properties` is an object of `string` type) (with `required`)', () => {
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: true,
                      value: 'string'
                    },
                    elements: {
                      field: {
                        id: '#/one',
                        isRequired: true,
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
                      isRequired: false,
                      value: 'string'
                    },
                    elements: {
                      field: {
                        id: '#/two',
                        isRequired: false,
                        value: 'string'
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: false
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
                            items: [
                              'string (1)',
                              'string (2)'
                            ],
                            selectedItems: [
                              0
                            ],
                            isRequired: false
                          },
                          elements: {
                            enum: {
                              id: '#/one/two',
                              items: [
                                'string (1)',
                                'string (2)'
                              ],
                              selectedItems: [
                                0
                              ],
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: false
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
                                  selectedItems: [
                                    0
                                  ],
                                  value: 'string (1)'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/0',
                                    selectedItems: [
                                      0
                                    ],
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
                                  selectedItems: [
                                    0
                                  ],
                                  value: 'string (2)'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/1',
                                    selectedItems: [
                                      0
                                    ],
                                    value: 'string (2)'
                                  }
                                }
                              }
                            ],
                            selectedItems: [
                              0
                            ],
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
                                    rootSchema: schema,
                                    schema: {
                                      const: 'string (1)'
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    selectedItems: [
                                      0
                                    ],
                                    value: 'string (1)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/0',
                                      selectedItems: [
                                        0
                                      ],
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
                                    selectedItems: [
                                      0
                                    ],
                                    value: 'string (2)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/1',
                                      selectedItems: [
                                        0
                                      ],
                                      value: 'string (2)'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [
                                0
                              ],
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: false
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
                                  selectedItems: [
                                    0
                                  ],
                                  value: 'string (1)'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/0',
                                    selectedItems: [
                                      0
                                    ],
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
                                  selectedItems: [
                                    0
                                  ],
                                  value: 'string (2)'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/1',
                                    selectedItems: [
                                      0
                                    ],
                                    value: 'string (2)'
                                  }
                                }
                              }
                            ],
                            selectedItems: [
                              0
                            ],
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
                                    rootSchema: schema,
                                    schema: {
                                      const: 'string (1)'
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    selectedItems: [
                                      0
                                    ],
                                    value: 'string (1)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/0',
                                      selectedItems: [
                                        0
                                      ],
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
                                    selectedItems: [
                                      0
                                    ],
                                    value: 'string (2)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/1',
                                      selectedItems: [
                                        0
                                      ],
                                      value: 'string (2)'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [
                                0
                              ],
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: false
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: true
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
                            items: [
                              'string (1)',
                              'string (2)'
                            ],
                            selectedItems: [
                              0
                            ],
                            isRequired: false
                          },
                          elements: {
                            enum: {
                              id: '#/one/two',
                              items: [
                                'string (1)',
                                'string (2)'
                              ],
                              selectedItems: [
                                0
                              ],
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: true
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
                                  selectedItems: [
                                    0
                                  ],
                                  value: 'string (1)'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/0',
                                    selectedItems: [
                                      0
                                    ],
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
                                  selectedItems: [
                                    0
                                  ],
                                  value: 'string (2)'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/1',
                                    selectedItems: [
                                      0
                                    ],
                                    value: 'string (2)'
                                  }
                                }
                              }
                            ],
                            selectedItems: [
                              0
                            ],
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
                                    rootSchema: schema,
                                    schema: {
                                      const: 'string (1)'
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    selectedItems: [
                                      0
                                    ],
                                    value: 'string (1)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/0',
                                      selectedItems: [
                                        0
                                      ],
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
                                    selectedItems: [
                                      0
                                    ],
                                    value: 'string (2)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/1',
                                      selectedItems: [
                                        0
                                      ],
                                      value: 'string (2)'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [
                                0
                              ],
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: true
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
                                  selectedItems: [
                                    0
                                  ],
                                  value: 'string (1)'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/0',
                                    selectedItems: [
                                      0
                                    ],
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
                                  selectedItems: [
                                    0
                                  ],
                                  value: 'string (2)'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/1',
                                    selectedItems: [
                                      0
                                    ],
                                    value: 'string (2)'
                                  }
                                }
                              }
                            ],
                            selectedItems: [
                              0
                            ],
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
                                    rootSchema: schema,
                                    schema: {
                                      const: 'string (1)'
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    selectedItems: [
                                      0
                                    ],
                                    value: 'string (1)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/0',
                                      selectedItems: [
                                        0
                                      ],
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
                                    selectedItems: [
                                      0
                                    ],
                                    value: 'string (2)'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/1',
                                      selectedItems: [
                                        0
                                      ],
                                      value: 'string (2)'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [
                                0
                              ],
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: true
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
                            isRequired: false,
                            value: '0'
                          },
                          elements: {
                            field: {
                              id: '#/one/two',
                              minLength: 1,
                              maxLength: 100,
                              isRequired: false,
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: false
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
                            items: [
                              1,
                              2
                            ],
                            selectedItems: [
                              0
                            ],
                            isRequired: false
                          },
                          elements: {
                            enum: {
                              id: '#/one/two',
                              items: [
                                1,
                                2
                              ],
                              selectedItems: [
                                0
                              ],
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: false
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
                                  selectedItems: [
                                    0
                                  ],
                                  value: '1'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/0',
                                    selectedItems: [
                                      0
                                    ],
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
                                  selectedItems: [
                                    0
                                  ],
                                  value: '2'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/1',
                                    selectedItems: [
                                      0
                                    ],
                                    value: '2'
                                  }
                                }
                              }
                            ],
                            selectedItems: [
                              0
                            ],
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
                                    rootSchema: schema,
                                    schema: {
                                      const: 1
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    selectedItems: [
                                      0
                                    ],
                                    value: '1'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/0',
                                      selectedItems: [
                                        0
                                      ],
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
                                    selectedItems: [
                                      0
                                    ],
                                    value: '2'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/1',
                                      selectedItems: [
                                        0
                                      ],
                                      value: '2'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [
                                0
                              ],
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: false
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
                                  selectedItems: [
                                    0
                                  ],
                                  value: '1'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/0',
                                    selectedItems: [
                                      0
                                    ],
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
                                  selectedItems: [
                                    0
                                  ],
                                  value: '2'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/1',
                                    selectedItems: [
                                      0
                                    ],
                                    value: '2'
                                  }
                                }
                              }
                            ],
                            selectedItems: [
                              0
                            ],
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
                                    rootSchema: schema,
                                    schema: {
                                      const: 1
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    selectedItems: [
                                      0
                                    ],
                                    value: '1'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/0',
                                      selectedItems: [
                                        0
                                      ],
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
                                    selectedItems: [
                                      0
                                    ],
                                    value: '2'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/1',
                                      selectedItems: [
                                        0
                                      ],
                                      value: '2'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [
                                0
                              ],
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: false
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: true
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
                            items: [
                              1,
                              2
                            ],
                            selectedItems: [
                              0
                            ],
                            isRequired: false
                          },
                          elements: {
                            enum: {
                              id: '#/one/two',
                              items: [
                                1,
                                2
                              ],
                              selectedItems: [
                                0
                              ],
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: true
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
                                  selectedItems: [
                                    0
                                  ],
                                  value: '1'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/0',
                                    selectedItems: [
                                      0
                                    ],
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
                                  selectedItems: [
                                    0
                                  ],
                                  value: '2'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/1',
                                    selectedItems: [
                                      0
                                    ],
                                    value: '2'
                                  }
                                }
                              }
                            ],
                            selectedItems: [
                              0
                            ],
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
                                    rootSchema: schema,
                                    schema: {
                                      const: 1
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    selectedItems: [
                                      0
                                    ],
                                    value: '1'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/0',
                                      selectedItems: [
                                        0
                                      ],
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
                                    selectedItems: [
                                      0
                                    ],
                                    value: '2'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/1',
                                      selectedItems: [
                                        0
                                      ],
                                      value: '2'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [
                                0
                              ],
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: true
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
                                  selectedItems: [
                                    0
                                  ],
                                  value: '1'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/0',
                                    selectedItems: [
                                      0
                                    ],
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
                                  selectedItems: [
                                    0
                                  ],
                                  value: '2'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/1',
                                    selectedItems: [
                                      0
                                    ],
                                    value: '2'
                                  }
                                }
                              }
                            ],
                            selectedItems: [
                              0
                            ],
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
                                    rootSchema: schema,
                                    schema: {
                                      const: 1
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    selectedItems: [
                                      0
                                    ],
                                    value: '1'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/0',
                                      selectedItems: [
                                        0
                                      ],
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
                                    selectedItems: [
                                      0
                                    ],
                                    value: '2'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/1',
                                      selectedItems: [
                                        0
                                      ],
                                      value: '2'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [
                                0
                              ],
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: true
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: false
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
                            items: [
                              [],
                              []
                            ],
                            selectedItems: [
                              0
                            ],
                            isRequired: false
                          },
                          elements: {
                            enum: {
                              id: '#/one/two',
                              items: [
                                [],
                                []
                              ],
                              selectedItems: [
                                0
                              ],
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: false
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
                                  rootSchema: schema,
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
                            selectedItems: [
                              0
                            ],
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
                                    rootSchema: schema,
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
                                    rootSchema: schema,
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
                              selectedItems: [
                                0
                              ],
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: false
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
                                  rootSchema: schema,
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
                            selectedItems: [
                              0
                            ],
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
                                    rootSchema: schema,
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
                                    rootSchema: schema,
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
                              selectedItems: [
                                0
                              ],
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: false
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: true
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
                            items: [
                              [],
                              []
                            ],
                            selectedItems: [
                              0
                            ],
                            isRequired: false
                          },
                          elements: {
                            enum: {
                              id: '#/one/two',
                              items: [
                                [],
                                []
                              ],
                              selectedItems: [
                                0
                              ],
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: true
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
                                  rootSchema: schema,
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
                            selectedItems: [
                              0
                            ],
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
                                    rootSchema: schema,
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
                                    rootSchema: schema,
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
                              selectedItems: [
                                0
                              ],
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: true
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
                                  rootSchema: schema,
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
                            selectedItems: [
                              0
                            ],
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
                                    rootSchema: schema,
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
                                    rootSchema: schema,
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
                              selectedItems: [
                                0
                              ],
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: true
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: false
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
                            items: [
                              {},
                              {}
                            ],
                            selectedItems: [
                              0
                            ],
                            isRequired: false
                          },
                          elements: {
                            enum: {
                              id: '#/one/two',
                              items: [
                                {},
                                {}
                              ],
                              selectedItems: [
                                0
                              ],
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: false
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
                                  rootSchema: schema,
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
                            selectedItems: [
                              0
                            ],
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
                                    rootSchema: schema,
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
                                    rootSchema: schema,
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
                              selectedItems: [
                                0
                              ],
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: false
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
                                  rootSchema: schema,
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
                            selectedItems: [
                              0
                            ],
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
                                    rootSchema: schema,
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
                                    rootSchema: schema,
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
                              selectedItems: [
                                0
                              ],
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: false
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: true
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
                            items: [
                              {},
                              {}
                            ],
                            selectedItems: [
                              0
                            ],
                            isRequired: false
                          },
                          elements: {
                            enum: {
                              id: '#/one/two',
                              items: [
                                {},
                                {}
                              ],
                              selectedItems: [
                                0
                              ],
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: true
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
                                  rootSchema: schema,
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
                            selectedItems: [
                              0
                            ],
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
                                    rootSchema: schema,
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
                                    rootSchema: schema,
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
                              selectedItems: [
                                0
                              ],
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: true
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
                                  rootSchema: schema,
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
                            selectedItems: [
                              0
                            ],
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
                                    rootSchema: schema,
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
                                    rootSchema: schema,
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
                              selectedItems: [
                                0
                              ],
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: true
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: false
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
                            items: [
                              true,
                              false
                            ],
                            selectedItems: [
                              0
                            ],
                            isRequired: false
                          },
                          elements: {
                            enum: {
                              id: '#/one/two',
                              items: [
                                true,
                                false
                              ],
                              selectedItems: [
                                0
                              ],
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: false
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
                                  selectedItems: [
                                    0
                                  ],
                                  value: 'true'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/0',
                                    selectedItems: [
                                      0
                                    ],
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
                                  selectedItems: [
                                    0
                                  ],
                                  value: 'false'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/1',
                                    selectedItems: [
                                      0
                                    ],
                                    value: 'false'
                                  }
                                }
                              }
                            ],
                            selectedItems: [
                              0
                            ],
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
                                    rootSchema: schema,
                                    schema: {
                                      const: true
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    selectedItems: [
                                      0
                                    ],
                                    value: 'true'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/0',
                                      selectedItems: [
                                        0
                                      ],
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
                                    selectedItems: [
                                      0
                                    ],
                                    value: 'false'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/1',
                                      selectedItems: [
                                        0
                                      ],
                                      value: 'false'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [
                                0
                              ],
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: false
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
                                  selectedItems: [
                                    0
                                  ],
                                  value: 'true'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/0',
                                    selectedItems: [
                                      0
                                    ],
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
                                  selectedItems: [
                                    0
                                  ],
                                  value: 'false'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/1',
                                    selectedItems: [
                                      0
                                    ],
                                    value: 'false'
                                  }
                                }
                              }
                            ],
                            selectedItems: [
                              0
                            ],
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
                                    rootSchema: schema,
                                    schema: {
                                      const: true
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    selectedItems: [
                                      0
                                    ],
                                    value: 'true'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/0',
                                      selectedItems: [
                                        0
                                      ],
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
                                    selectedItems: [
                                      0
                                    ],
                                    value: 'false'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/1',
                                      selectedItems: [
                                        0
                                      ],
                                      value: 'false'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [
                                0
                              ],
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: false
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: true
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
                            items: [
                              true,
                              false
                            ],
                            selectedItems: [
                              0
                            ],
                            isRequired: false
                          },
                          elements: {
                            enum: {
                              id: '#/one/two',
                              items: [
                                true,
                                false
                              ],
                              selectedItems: [
                                0
                              ],
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: true
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
                                  selectedItems: [
                                    0
                                  ],
                                  value: 'true'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/0',
                                    selectedItems: [
                                      0
                                    ],
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
                                  selectedItems: [
                                    0
                                  ],
                                  value: 'false'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/1',
                                    selectedItems: [
                                      0
                                    ],
                                    value: 'false'
                                  }
                                }
                              }
                            ],
                            selectedItems: [
                              0
                            ],
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
                                    rootSchema: schema,
                                    schema: {
                                      const: true
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    selectedItems: [
                                      0
                                    ],
                                    value: 'true'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/0',
                                      selectedItems: [
                                        0
                                      ],
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
                                    selectedItems: [
                                      0
                                    ],
                                    value: 'false'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/1',
                                      selectedItems: [
                                        0
                                      ],
                                      value: 'false'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [
                                0
                              ],
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: true
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
                                  selectedItems: [
                                    0
                                  ],
                                  value: 'true'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/0',
                                    selectedItems: [
                                      0
                                    ],
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
                                  selectedItems: [
                                    0
                                  ],
                                  value: 'false'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/1',
                                    selectedItems: [
                                      0
                                    ],
                                    value: 'false'
                                  }
                                }
                              }
                            ],
                            selectedItems: [
                              0
                            ],
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
                                    rootSchema: schema,
                                    schema: {
                                      const: true
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    selectedItems: [
                                      0
                                    ],
                                    value: 'true'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/0',
                                      selectedItems: [
                                        0
                                      ],
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
                                    selectedItems: [
                                      0
                                    ],
                                    value: 'false'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/1',
                                      selectedItems: [
                                        0
                                      ],
                                      value: 'false'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [
                                0
                              ],
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: true
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: false
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
                            items: [
                              null
                            ],
                            selectedItems: [
                              0
                            ],
                            isRequired: false
                          },
                          elements: {
                            enum: {
                              id: '#/one/two',
                              items: [
                                null
                              ],
                              selectedItems: [
                                0
                              ],
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: false
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
                                  selectedItems: [
                                    0
                                  ],
                                  value: 'null'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/0',
                                    selectedItems: [
                                      0
                                    ],
                                    value: 'null'
                                  }
                                }
                              }
                            ],
                            selectedItems: [
                              0
                            ],
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
                                    rootSchema: schema,
                                    schema: {
                                      const: null
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    selectedItems: [
                                      0
                                    ],
                                    value: 'null'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/0',
                                      selectedItems: [
                                        0
                                      ],
                                      value: 'null'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [
                                0
                              ],
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: false
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
                                  selectedItems: [
                                    0
                                  ],
                                  value: 'null'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/0',
                                    selectedItems: [
                                      0
                                    ],
                                    value: 'null'
                                  }
                                }
                              }
                            ],
                            selectedItems: [
                              0
                            ],
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
                                    rootSchema: schema,
                                    schema: {
                                      const: null
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    selectedItems: [
                                      0
                                    ],
                                    value: 'null'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/0',
                                      selectedItems: [
                                        0
                                      ],
                                      value: 'null'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [
                                0
                              ],
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: false
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: true
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
                            items: [
                              null
                            ],
                            selectedItems: [
                              0
                            ],
                            isRequired: false
                          },
                          elements: {
                            enum: {
                              id: '#/one/two',
                              items: [
                                null
                              ],
                              selectedItems: [
                                0
                              ],
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: true
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
                                  selectedItems: [
                                    0
                                  ],
                                  value: 'null'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/0',
                                    selectedItems: [
                                      0
                                    ],
                                    value: 'null'
                                  }
                                }
                              }
                            ],
                            selectedItems: [
                              0
                            ],
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
                                    rootSchema: schema,
                                    schema: {
                                      const: null
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    selectedItems: [
                                      0
                                    ],
                                    value: 'null'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/0',
                                      selectedItems: [
                                        0
                                      ],
                                      value: 'null'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [
                                0
                              ],
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: true
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
                                  selectedItems: [
                                    0
                                  ],
                                  value: 'null'
                                },
                                elements: {
                                  field: {
                                    id: '#/one/two/0',
                                    selectedItems: [
                                      0
                                    ],
                                    value: 'null'
                                  }
                                }
                              }
                            ],
                            selectedItems: [
                              0
                            ],
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
                                    rootSchema: schema,
                                    schema: {
                                      const: null
                                    },
                                    parentUri: '#/one/two',
                                    uri: '#/one/two/0',
                                    selectedItems: [
                                      0
                                    ],
                                    value: 'null'
                                  },
                                  elements: {
                                    field: {
                                      id: '#/one/two/0',
                                      selectedItems: [
                                        0
                                      ],
                                      value: 'null'
                                    }
                                  }
                                }
                              ],
                              selectedItems: [
                                0
                              ],
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

          /**
           *  @type {ValuesType}
           */
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
                      isRequired: true
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
