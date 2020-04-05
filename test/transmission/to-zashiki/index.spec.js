import debug from 'debug'

import { expect } from 'chai'

import transform from 'shinkansen-transmission/transmission/to-zashiki'

debug.disable()

describe('shinkansen-transmission/transmission/to-zashiki', () => {
  it('is a function', () => {
    expect(transform)
      .to.be.a('function')
  })

  describe('With values', () => {
    describe('With params', () => {
      it('transforms', () => {
        const schema = {
          $id: 'https://example.com/geographical-location.schema.json',
          $schema: 'http://json-schema.org/draft-07/schema#',
          title: 'Latitude and Longitude',
          description: 'A geographical coordinate',
          required: ['latitude', 'longitude'],
          type: 'object',
          properties: {
            stringTypeSubSchema: {
              title: 'String type sub schema',
              type: 'string',
              minLength: 1,
              maxLength: 10
            },
            numberTypeSubSchema: {
              title: 'Number type sub schema',
              type: 'number',
              min: 1,
              max: 10
            },
            arrayTypeSubSchema: {
              title: 'Array type sub schema',
              type: 'array',
              items: [
                {
                  type: 'string'
                }
              ]
            },
            objectTypeSubSchema: {
              title: 'Object type sub schema',
              type: 'object',
              properties: {
                one: { type: 'string' },
                two: { type: 'number' }
              }
            },
            booleanTypeSubSchema: {
              title: 'Boolean type sub schema',
              type: 'boolean'
            },
            nullTypeSubSchema: {
              title: 'Null type sub schema',
              type: 'null'
            },
            latitude: {
              title: 'Latitude',
              type: 'number',
              minimum: -90,
              maximum: 90,
              multipleOf: 42.0
            },
            longitude: {
              title: 'Longitude',
              type: 'number',
              minimum: -180,
              maximum: 180,
              exclusiveMinimum: true,
              exclusiveMaximum: true
            }
          }
        }

        const values = {
          '#/stringTypeSubSchema': 'string',
          '#/numberTypeSubSchema': '1',
          '#/arrayTypeSubSchema/0': 'string',
          '#/objectTypeSubSchema/one': 'string',
          '#/objectTypeSubSchema/two': '2',
          '#/booleanTypeSubSchema': 'true',
          '#/nullTypeSubSchema': 'null'
        }

        const params = {
          '#/stringTypeSubSchema': { meta: { component: 'string component' } },
          '#/numberTypeSubSchema': { meta: { component: 'number component' } },
          '#/arrayTypeSubSchema': { meta: { component: 'array component' } },
          '#/arrayTypeSubSchema/0': { meta: { component: 'array type index component' } },
          '#/objectTypeSubSchema': { meta: { component: 'object component' } },
          '#/objectTypeSubSchema/one': { meta: { component: 'object type key component' } },
          '#/objectTypeSubSchema/two': { meta: { component: 'object type key component' } },
          '#/booleanTypeSubSchema': { meta: { component: 'boolean component' } },
          '#/nullTypeSubSchema': { meta: { component: 'null component' } }
        }

        return expect(transform(schema, values, params))
          .to.eql({
            meta: {
              schema,
              type: 'object',
              uri: '#/'
            },
            elements: {
              description: 'A geographical coordinate',
              fields: [
                {
                  meta: {
                    maxLength: 10,
                    minLength: 1,
                    name: 'stringTypeSubSchema',
                    required: false,
                    rootSchema: schema,
                    schema: {
                      maxLength: 10,
                      minLength: 1,
                      title: 'String type sub schema',
                      type: 'string'
                    },
                    type: 'string',
                    uri: '#/stringTypeSubSchema',
                    value: 'string',
                    component: 'string component'
                  },
                  elements: {
                    field: {
                      name: '#/stringTypeSubSchema',
                      maxLength: 10,
                      minLength: 1,
                      required: false,
                      value: 'string'
                    },
                    title: 'String type sub schema'
                  }
                },
                {
                  meta: {
                    name: 'numberTypeSubSchema',
                    required: false,
                    rootSchema: schema,
                    schema: {
                      max: 10,
                      min: 1,
                      title: 'Number type sub schema',
                      type: 'number'
                    },
                    type: 'number',
                    uri: '#/numberTypeSubSchema',
                    value: '1',
                    component: 'number component'
                  },
                  elements: {
                    field: {
                      name: '#/numberTypeSubSchema',
                      required: false,
                      value: '1'
                    },
                    title: 'Number type sub schema'
                  }
                },
                {
                  meta: {
                    name: 'arrayTypeSubSchema',
                    required: false,
                    rootSchema: schema,
                    schema: {
                      items: [
                        {
                          type: 'string'
                        }
                      ],
                      title: 'Array type sub schema',
                      type: 'array'
                    },
                    type: 'array',
                    uri: '#/arrayTypeSubSchema',
                    component: 'array component'
                  },
                  elements: {
                    fields: [
                      {
                        meta: {
                          required: false,
                          rootSchema: schema,
                          schema: {
                            type: 'string'
                          },
                          type: 'string',
                          uri: '#/arrayTypeSubSchema/0',
                          value: 'string',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          field: {
                            name: '#/arrayTypeSubSchema/0',
                            required: false,
                            value: 'string'
                          }
                        }
                      }
                    ],
                    title: 'Array type sub schema'
                  }
                },
                {
                  meta: {
                    name: 'objectTypeSubSchema',
                    required: false,
                    rootSchema: schema,
                    schema: {
                      properties: {
                        one: { type: 'string' },
                        two: { type: 'number' }
                      },
                      title: 'Object type sub schema',
                      type: 'object'
                    },
                    type: 'object',
                    uri: '#/objectTypeSubSchema',
                    component: 'object component'
                  },
                  elements: {
                    fields: [
                      {
                        meta: {
                          name: 'one',
                          required: false,
                          rootSchema: schema,
                          schema: {
                            type: 'string'
                          },
                          type: 'string',
                          uri: '#/objectTypeSubSchema/one',
                          value: 'string',
                          component: 'object type key component'
                        },
                        elements: {
                          field: {
                            name: '#/objectTypeSubSchema/one',
                            required: false,
                            value: 'string'
                          }
                        }
                      },
                      {
                        meta: {
                          name: 'two',
                          required: false,
                          rootSchema: schema,
                          schema: {
                            type: 'number'
                          },
                          type: 'number',
                          uri: '#/objectTypeSubSchema/two',
                          value: '2',
                          component: 'object type key component'
                        },
                        elements: {
                          field: {
                            name: '#/objectTypeSubSchema/two',
                            required: false,
                            value: '2'
                          }
                        }
                      }
                    ],
                    title: 'Object type sub schema'
                  }
                },
                {
                  meta: {
                    name: 'booleanTypeSubSchema',
                    required: false,
                    rootSchema: schema,
                    schema: {
                      title: 'Boolean type sub schema',
                      type: 'boolean'
                    },
                    type: 'boolean',
                    uri: '#/booleanTypeSubSchema',
                    value: 'true',
                    component: 'boolean component'
                  },
                  elements: {
                    field: {
                      name: '#/booleanTypeSubSchema',
                      required: false,
                      value: 'true'
                    },
                    title: 'Boolean type sub schema'
                  }
                },
                {
                  meta: {
                    name: 'nullTypeSubSchema',
                    required: false,
                    rootSchema: schema,
                    schema: {
                      title: 'Null type sub schema',
                      type: 'null'
                    },
                    type: 'null',
                    uri: '#/nullTypeSubSchema',
                    value: 'null',
                    component: 'null component'
                  },
                  elements: {
                    field: {
                      name: '#/nullTypeSubSchema',
                      required: false,
                      value: 'null'
                    },
                    title: 'Null type sub schema'
                  }
                },
                {
                  meta: {
                    max: 90,
                    min: -90,
                    name: 'latitude',
                    required: true,
                    rootSchema: schema,
                    schema: {
                      maximum: 90,
                      minimum: -90,
                      multipleOf: 42,
                      title: 'Latitude',
                      type: 'number'
                    },
                    step: 42,
                    type: 'number',
                    uri: '#/latitude'
                  },
                  elements: {
                    field: {
                      name: '#/latitude',
                      max: 90,
                      min: -90,
                      required: true,
                      step: 42
                    },
                    title: 'Latitude'
                  }
                },
                {
                  meta: {
                    isExclusiveMax: true,
                    isExclusiveMin: true,
                    max: 180,
                    min: -180,
                    name: 'longitude',
                    required: true,
                    rootSchema: schema,
                    schema: {
                      exclusiveMaximum: true,
                      exclusiveMinimum: true,
                      maximum: 180,
                      minimum: -180,
                      title: 'Longitude',
                      type: 'number'
                    },
                    type: 'number',
                    uri: '#/longitude'
                  },
                  elements: {
                    field: {
                      name: '#/longitude',
                      max: 180,
                      min: -180,
                      required: true
                    },
                    title: 'Longitude'
                  }
                }
              ],
              title: 'Latitude and Longitude'
            }
          })
      })

      describe('Transforming `number` type schemas', () => {
        describe('With `enum`', () => {
          it('transforms `number` type schemas', () => {
            const schema = { type: 'number', enum: [1, 2, 3] }

            const values = {
              '#/': '2'
            }

            const params = {
              '#/': { meta: { component: 'number component' } }
            }

            return expect(transform(schema, values, params))
              .to.eql({
                meta: {
                  type: 'number',
                  schema,
                  uri: '#/',
                  selectedIndex: 2,
                  component: 'number component'
                },
                elements: {
                  enum: {
                    items: [1, 2, 3],
                    name: '#/',
                    selectedIndex: 2
                  }
                }
              })
          })
        })

        describe('With `anyOf`', () => {
          it('transforms `number` type schemas', () => {
            const schema = { type: 'number', anyOf: [{ default: 1 }, { default: 2 }, { default: 3 }] }

            const values = {
              '#/': '2'
            }

            const params = {
              '#/': { meta: { component: 'number component' } }
            }

            return expect(transform(schema, values, params))
              .to.eql({
                meta: {
                  type: 'number',
                  schema,
                  uri: '#/',
                  selectedIndex: 2,
                  component: 'number component'
                },
                elements: {
                  anyOf: {
                    items: [
                      {
                        meta: {
                          type: 'number',
                          rootSchema: schema,
                          schema: { default: 1 },
                          item: 0,
                          required: false,
                          defaultValue: '1',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: '1'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'number',
                          rootSchema: schema,
                          schema: { default: 2 },
                          item: 1,
                          required: false,
                          defaultValue: '2',
                          uri: '#/1'
                        },
                        elements: {
                          field: {
                            name: '#/1',
                            required: false,
                            value: '2'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'number',
                          rootSchema: schema,
                          schema: { default: 3 },
                          item: 2,
                          required: false,
                          defaultValue: '3',
                          uri: '#/2'
                        },
                        elements: {
                          field: {
                            name: '#/2',
                            required: false,
                            value: '3'
                          }
                        }
                      }
                    ],
                    name: '#/',
                    selectedIndex: 2
                  }
                }
              })
          })
        })

        describe('With `oneOf`', () => {
          it('transforms `number` type schemas', () => {
            const schema = { type: 'number', oneOf: [{ default: 1 }, { default: 2 }, { default: 3 }] }

            const values = {
              '#/': '2'
            }

            const params = {
              '#/': { meta: { component: 'number component' } }
            }

            return expect(transform(schema, values, params))
              .to.eql({
                meta: {
                  type: 'number',
                  schema,
                  uri: '#/',
                  selectedIndex: 2,
                  component: 'number component'
                },
                elements: {
                  oneOf: {
                    items: [
                      {
                        meta: {
                          type: 'number',
                          rootSchema: schema,
                          schema: { default: 1 },
                          item: 0,
                          required: false,
                          defaultValue: '1',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: '1'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'number',
                          rootSchema: schema,
                          schema: { default: 2 },
                          item: 1,
                          required: false,
                          defaultValue: '2',
                          uri: '#/1'
                        },
                        elements: {
                          field: {
                            name: '#/1',
                            required: false,
                            value: '2'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'number',
                          rootSchema: schema,
                          schema: { default: 3 },
                          item: 2,
                          required: false,
                          defaultValue: '3',
                          uri: '#/2'
                        },
                        elements: {
                          field: {
                            name: '#/2',
                            required: false,
                            value: '3'
                          }
                        }
                      }
                    ],
                    name: '#/',
                    selectedIndex: 2
                  }
                }
              })
          })
        })

        describe('With `allOf`', () => {
          it('transforms `number` type schemas', () => {
            const schema = { type: 'number', allOf: [{ minimum: 1 }, { default: 2 }, { maximum: 3 }] }

            const values = {
              '#/': '1'
            }

            const params = {
              '#/': { meta: { component: 'number component' } }
            }

            return expect(transform(schema, values, params))
              .to.eql({
                meta: {
                  type: 'number',
                  schema,
                  uri: '#/',
                  defaultValue: '2',
                  value: '1',
                  component: 'number component'
                },
                elements: {
                  field: {
                    name: '#/',
                    value: '1'
                  }
                }
              })
          })
        })

        describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
          it('transforms `number` type schemas', () => {
            const schema = { type: 'number' }

            const values = {
              '#/': '1'
            }

            const params = {
              '#/': { meta: { component: 'number component' } }
            }

            return expect(transform(schema, values, params))
              .to.eql({
                meta: {
                  type: 'number',
                  schema,
                  uri: '#/',
                  value: '1',
                  component: 'number component'
                },
                elements: {
                  field: {
                    name: '#/',
                    value: '1'
                  }
                }
              })
          })
        })
      })

      describe('Transforming `string` type schemas', () => {
        describe('With `enum`', () => {
          it('transforms `string` type schemas', () => {
            const schema = { type: 'string', enum: ['string (1)', 'string (2)', 'string (3)'] }

            const values = {
              '#/': '2'
            }

            const params = {
              '#/': { meta: { component: 'string component' } }
            }

            return expect(transform(schema, values, params))
              .to.eql({
                meta: {
                  type: 'string',
                  schema,
                  uri: '#/',
                  selectedIndex: 2,
                  component: 'string component'
                },
                elements: {
                  enum: {
                    items: ['string (1)', 'string (2)', 'string (3)'],
                    name: '#/',
                    selectedIndex: 2
                  }
                }
              })
          })
        })

        describe('With `anyOf`', () => {
          it('transforms `string` type schemas', () => {
            const schema = { type: 'string', anyOf: [{ default: 'string (1)' }, { default: 'string (2)' }, { default: 'string (3)' }] }

            const values = {
              '#/': '2'
            }

            const params = {
              '#/': { meta: { component: 'string component' } }
            }

            return expect(transform(schema, values, params))
              .to.eql({
                meta: {
                  type: 'string',
                  schema,
                  uri: '#/',
                  selectedIndex: 2,
                  component: 'string component'
                },
                elements: {
                  anyOf: {
                    items: [
                      {
                        meta: {
                          type: 'string',
                          rootSchema: schema,
                          schema: { default: 'string (1)' },
                          item: 0,
                          required: false,
                          defaultValue: 'string (1)',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: 'string (1)'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'string',
                          rootSchema: schema,
                          schema: { default: 'string (2)' },
                          item: 1,
                          required: false,
                          defaultValue: 'string (2)',
                          uri: '#/1'
                        },
                        elements: {
                          field: {
                            name: '#/1',
                            required: false,
                            value: 'string (2)'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'string',
                          rootSchema: schema,
                          schema: { default: 'string (3)' },
                          item: 2,
                          required: false,
                          defaultValue: 'string (3)',
                          uri: '#/2'
                        },
                        elements: {
                          field: {
                            name: '#/2',
                            required: false,
                            value: 'string (3)'
                          }
                        }
                      }
                    ],
                    name: '#/',
                    selectedIndex: 2
                  }
                }
              })
          })
        })

        describe('With `oneOf`', () => {
          it('transforms `string` type schemas', () => {
            const schema = { type: 'string', oneOf: [{ default: 'string (1)' }, { default: 'string (2)' }, { default: 'string (3)' }] }

            const values = {
              '#/': '2'
            }

            const params = {
              '#/': { meta: { component: 'string component' } }
            }

            return expect(transform(schema, values, params))
              .to.eql({
                meta: {
                  type: 'string',
                  schema,
                  uri: '#/',
                  selectedIndex: 2,
                  component: 'string component'
                },
                elements: {
                  oneOf: {
                    items: [
                      {
                        meta: {
                          type: 'string',
                          rootSchema: schema,
                          schema: { default: 'string (1)' },
                          item: 0,
                          required: false,
                          defaultValue: 'string (1)',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: 'string (1)'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'string',
                          rootSchema: schema,
                          schema: { default: 'string (2)' },
                          item: 1,
                          required: false,
                          defaultValue: 'string (2)',
                          uri: '#/1'
                        },
                        elements: {
                          field: {
                            name: '#/1',
                            required: false,
                            value: 'string (2)'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'string',
                          rootSchema: schema,
                          schema: { default: 'string (3)' },
                          item: 2,
                          required: false,
                          defaultValue: 'string (3)',
                          uri: '#/2'
                        },
                        elements: {
                          field: {
                            name: '#/2',
                            required: false,
                            value: 'string (3)'
                          }
                        }
                      }
                    ],
                    name: '#/',
                    selectedIndex: 2
                  }
                }
              })
          })
        })

        describe('With `allOf`', () => {
          it('transforms `string` type schemas', () => {
            const schema = { type: 'string', allOf: [{ minLength: 1 }, { default: 'string (1)' }, { maxLength: 20 }] }

            const values = {
              '#/': 'string (2)'
            }

            const params = {
              '#/': { meta: { component: 'string component' } }
            }

            return expect(transform(schema, values, params))
              .to.eql({
                meta: {
                  type: 'string',
                  schema,
                  uri: '#/',
                  defaultValue: 'string (1)',
                  value: 'string (2)',
                  component: 'string component'
                },
                elements: {
                  field: {
                    name: '#/',
                    value: 'string (2)'
                  }
                }
              })
          })
        })

        describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
          it('transforms `string` type schemas', () => {
            const schema = { type: 'string' }

            const values = {
              '#/': 'string'
            }

            const params = {
              '#/': { meta: { component: 'string component' } }
            }

            return expect(transform(schema, values, params))
              .to.eql({
                meta: {
                  type: 'string',
                  schema,
                  uri: '#/',
                  value: 'string',
                  component: 'string component'
                },
                elements: {
                  field: {
                    name: '#/',
                    value: 'string'
                  }
                }
              })
          })
        })
      })

      describe('Transforming `array` type schemas', () => {
        describe('With `items`', () => {
          describe('With `enum`', () => {
            it('transforms `array` type schemas (`items` is `number` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'number',
                    enum: [1, 2, 3]
                  }
                ]
              }

              const values = {
                '#/0': '2'
              }

              const params = {
                '#/0': { meta: { component: 'array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'number',
                          schema: {
                            type: 'number',
                            enum: [1, 2, 3]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          selectedIndex: 2,
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          enum: {
                            items: [1, 2, 3],
                            name: '#/0',
                            required: false,
                            selectedIndex: 2
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `string` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'string',
                    enum: ['string (1)', 'string (2)', 'string (3)']
                  }
                ]
              }

              const values = {
                '#/0': '2'
              }

              const params = {
                '#/0': { meta: { component: 'array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'string',
                          schema: {
                            type: 'string',
                            enum: ['string (1)', 'string (2)', 'string (3)']
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          selectedIndex: 2,
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          enum: {
                            items: ['string (1)', 'string (2)', 'string (3)'],
                            name: '#/0',
                            required: false,
                            selectedIndex: 2
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `number` type)', () => {
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

              const values = {
                '#/0': '2'
              }

              const params = {
                '#/0': { meta: { component: 'array type index component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  meta: {
                    type: 'array',
                    schema,
                    uri: '#/'
                  },
                  elements: {
                    fields: [
                      {
                        elements: {
                          enum: {
                            items: [
                              1,
                              2,
                              3
                            ],
                            name: '#/0',
                            required: false,
                            selectedIndex: 2
                          }
                        },
                        meta: {
                          component: 'array type index component',
                          item: 0,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            enum: [
                              1,
                              2,
                              3
                            ],
                            type: 'number'
                          },
                          selectedIndex: 2,
                          type: 'number',
                          uri: '#/0'
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `string` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'string',
                    enum: [
                      'array type index string type (1)',
                      'array type index string type (2)',
                      'array type index string type (3)'
                    ]
                  }
                ]
              }

              const values = {
                '#/0': '2'
              }

              const params = {
                '#/0': { meta: { component: 'array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          component: 'array type index component',
                          item: 0,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            enum: [
                              'array type index string type (1)',
                              'array type index string type (2)',
                              'array type index string type (3)'
                            ],
                            type: 'string'
                          },
                          selectedIndex: 2,
                          type: 'string',
                          uri: '#/0'
                        },
                        elements: {
                          enum: {
                            items: [
                              'array type index string type (1)',
                              'array type index string type (2)',
                              'array type index string type (3)'
                            ],
                            name: '#/0',
                            required: false,
                            selectedIndex: 2
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `boolean` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'boolean',
                    enum: [true, false]
                  }
                ]
              }

              const values = {
                '#/0': '1'
              }

              const params = {
                '#/0': { meta: { component: 'array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          component: 'array type index component',
                          item: 0,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            enum: [true, false],
                            type: 'boolean'
                          },
                          selectedIndex: 1,
                          type: 'boolean',
                          uri: '#/0'
                        },
                        elements: {
                          enum: {
                            items: [true, false],
                            name: '#/0',
                            required: false,
                            selectedIndex: 1
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `null` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'null',
                    enum: [null]
                  }
                ]
              }

              const values = {
                '#/0': '0'
              }

              const params = {
                '#/0': { meta: { component: 'array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          component: 'array type index component',
                          item: 0,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            enum: [null],
                            type: 'null'
                          },
                          selectedIndex: 0,
                          type: 'null',
                          uri: '#/0'
                        },
                        elements: {
                          enum: {
                            items: [null],
                            name: '#/0',
                            required: false,
                            selectedIndex: 0
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `number` type and `string` type and `boolean` type and `null` type)', () => {
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
                  },
                  {
                    type: 'string',
                    enum: [
                      'array type index string type (1)',
                      'array type index string type (2)',
                      'array type index string type (3)'
                    ]
                  },
                  {
                    type: 'boolean',
                    enum: [true, false]
                  },
                  {
                    type: 'null',
                    enum: [null]
                  }
                ]
              }

              const values = {
                '#/0': '2',
                '#/1': '2',
                '#/2': '1',
                '#/3': '0'
              }

              const params = {
                '#/0': { meta: { component: 'array type index component' } },
                '#/1': { meta: { component: 'array type index component' } },
                '#/2': { meta: { component: 'array type index component' } },
                '#/3': { meta: { component: 'array type index component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  meta: {
                    type: 'array',
                    schema,
                    uri: '#/'
                  },
                  elements: {
                    fields: [
                      {
                        elements: {
                          enum: {
                            items: [
                              1,
                              2,
                              3
                            ],
                            name: '#/0',
                            required: false,
                            selectedIndex: 2
                          }
                        },
                        meta: {
                          component: 'array type index component',
                          item: 0,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            enum: [
                              1,
                              2,
                              3
                            ],
                            type: 'number'
                          },
                          selectedIndex: 2,
                          type: 'number',
                          uri: '#/0'
                        }
                      },
                      {
                        meta: {
                          component: 'array type index component',
                          item: 1,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            enum: [
                              'array type index string type (1)',
                              'array type index string type (2)',
                              'array type index string type (3)'
                            ],
                            type: 'string'
                          },
                          selectedIndex: 2,
                          type: 'string',
                          uri: '#/1'
                        },
                        elements: {
                          enum: {
                            items: [
                              'array type index string type (1)',
                              'array type index string type (2)',
                              'array type index string type (3)'
                            ],
                            name: '#/1',
                            required: false,
                            selectedIndex: 2
                          }
                        }
                      },
                      {
                        meta: {
                          component: 'array type index component',
                          item: 2,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            enum: [true, false],
                            type: 'boolean'
                          },
                          selectedIndex: 1,
                          type: 'boolean',
                          uri: '#/2'
                        },
                        elements: {
                          enum: {
                            items: [true, false],
                            name: '#/2',
                            required: false,
                            selectedIndex: 1
                          }
                        }
                      },
                      {
                        meta: {
                          component: 'array type index component',
                          item: 3,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            enum: [null],
                            type: 'null'
                          },
                          selectedIndex: 0,
                          type: 'null',
                          uri: '#/3'
                        },
                        elements: {
                          enum: {
                            items: [null],
                            name: '#/3',
                            required: false,
                            selectedIndex: 0
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `object` type with `properties`)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'object',
                    properties: {
                      one: {
                        type: 'string',
                        enum: [
                          'array type index string type (1)',
                          'array type index string type (2)',
                          'array type index string type (3)'
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

              const values = {
                '#/0/one': '2',
                '#/0/two': '2'
              }

              const params = {
                '#/0': { meta: { component: 'array type index component' } },
                '#/0/one': { meta: { component: 'array type index object type key component' } },
                '#/0/two': { meta: { component: 'array type index object type key component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'object',
                          schema: {
                            type: 'object',
                            properties: {
                              one: {
                                type: 'string',
                                enum: [
                                  'array type index string type (1)',
                                  'array type index string type (2)',
                                  'array type index string type (3)'
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
                          rootSchema: schema,
                          uri: '#/0',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              elements: {
                                enum: {
                                  items: [
                                    'array type index string type (1)',
                                    'array type index string type (2)',
                                    'array type index string type (3)'
                                  ],
                                  name: '#/0/one',
                                  required: false,
                                  selectedIndex: 2
                                }
                              },
                              meta: {
                                component: 'array type index object type key component',
                                name: 'one',
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  enum: [
                                    'array type index string type (1)',
                                    'array type index string type (2)',
                                    'array type index string type (3)'
                                  ],
                                  type: 'string'
                                },
                                selectedIndex: 2,
                                type: 'string',
                                uri: '#/0/one'
                              }
                            },
                            {
                              elements: {
                                enum: {
                                  items: [
                                    1,
                                    2,
                                    3
                                  ],
                                  name: '#/0/two',
                                  required: false,
                                  selectedIndex: 2
                                }
                              },
                              meta: {
                                component: 'array type index object type key component',
                                name: 'two',
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  enum: [
                                    1,
                                    2,
                                    3
                                  ],
                                  type: 'number'
                                },
                                selectedIndex: 2,
                                type: 'number',
                                uri: '#/0/two'
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `object` type with `properties` and `required`)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'object',
                    properties: {
                      one: {
                        type: 'string',
                        enum: [
                          'array type index string type (1)',
                          'array type index string type (2)',
                          'array type index string type (3)'
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

              const values = {
                '#/0/one': '2',
                '#/0/two': '2'
              }

              const params = {
                '#/0': { meta: { component: 'array type index component' } },
                '#/0/one': { meta: { component: 'array type index object type key component' } },
                '#/0/two': { meta: { component: 'array type index object type key component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'object',
                          schema: {
                            type: 'object',
                            properties: {
                              one: {
                                type: 'string',
                                enum: [
                                  'array type index string type (1)',
                                  'array type index string type (2)',
                                  'array type index string type (3)'
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
                          rootSchema: schema,
                          uri: '#/0',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              elements: {
                                enum: {
                                  items: [
                                    'array type index string type (1)',
                                    'array type index string type (2)',
                                    'array type index string type (3)'
                                  ],
                                  name: '#/0/one',
                                  required: true,
                                  selectedIndex: 2
                                }
                              },
                              meta: {
                                component: 'array type index object type key component',
                                name: 'one',
                                required: true,
                                rootSchema: schema,
                                schema: {
                                  enum: [
                                    'array type index string type (1)',
                                    'array type index string type (2)',
                                    'array type index string type (3)'
                                  ],
                                  type: 'string'
                                },
                                selectedIndex: 2,
                                type: 'string',
                                uri: '#/0/one'
                              }
                            },
                            {
                              elements: {
                                enum: {
                                  items: [
                                    1,
                                    2,
                                    3
                                  ],
                                  name: '#/0/two',
                                  required: false,
                                  selectedIndex: 2
                                }
                              },
                              meta: {
                                component: 'array type index object type key component',
                                name: 'two',
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  enum: [
                                    1,
                                    2,
                                    3
                                  ],
                                  type: 'number'
                                },
                                selectedIndex: 2,
                                type: 'number',
                                uri: '#/0/two'
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `array` type with `items` is `number` type)', () => {
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

              const values = {
                '#/0/0': '2'
              }

              const params = {
                '#/0': { meta: { component: 'array type index component' } },
                '#/0/0': { meta: { component: 'array type index array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'array',
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
                          rootSchema: schema,
                          uri: '#/0',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              elements: {
                                enum: {
                                  items: [
                                    1,
                                    2,
                                    3
                                  ],
                                  name: '#/0/0',
                                  required: false,
                                  selectedIndex: 2
                                }
                              },
                              meta: {
                                component: 'array type index array type index component',
                                item: 0,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  enum: [
                                    1,
                                    2,
                                    3
                                  ],
                                  type: 'number'
                                },
                                selectedIndex: 2,
                                type: 'number',
                                uri: '#/0/0'
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `array` type with `items` is `string` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'array',
                    items: [
                      {
                        type: 'string',
                        enum: [
                          'array type index string type (1)',
                          'array type index string type (2)',
                          'array type index string type (3)'
                        ]
                      }
                    ]
                  }
                ]
              }

              const values = {
                '#/0/0': '2'
              }

              const params = {
                '#/0': { meta: { component: 'array type index component' } },
                '#/0/0': { meta: { component: 'array type index array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'array',
                          schema: {
                            type: 'array',
                            items: [
                              {
                                type: 'string',
                                enum: [
                                  'array type index string type (1)',
                                  'array type index string type (2)',
                                  'array type index string type (3)'
                                ]
                              }
                            ]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              meta: {
                                component: 'array type index array type index component',
                                item: 0,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  enum: [
                                    'array type index string type (1)',
                                    'array type index string type (2)',
                                    'array type index string type (3)'
                                  ],
                                  type: 'string'
                                },
                                selectedIndex: 2,
                                type: 'string',
                                uri: '#/0/0'
                              },
                              elements: {
                                enum: {
                                  items: [
                                    'array type index string type (1)',
                                    'array type index string type (2)',
                                    'array type index string type (3)'
                                  ],
                                  name: '#/0/0',
                                  required: false,
                                  selectedIndex: 2
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

            it('transforms `array` type schemas (`items` is `array` type with `items` is `array` type with `items` is `boolean` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'array',
                    items: [
                      {
                        type: 'boolean',
                        enum: [true, false]
                      }
                    ]
                  }
                ]
              }

              const values = {
                '#/0/0': '1'
              }

              const params = {
                '#/0': { meta: { component: 'array type index component' } },
                '#/0/0': { meta: { component: 'array type index array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'array',
                          schema: {
                            type: 'array',
                            items: [
                              {
                                type: 'boolean',
                                enum: [true, false]
                              }
                            ]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              meta: {
                                component: 'array type index array type index component',
                                item: 0,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  enum: [true, false],
                                  type: 'boolean'
                                },
                                selectedIndex: 1,
                                type: 'boolean',
                                uri: '#/0/0'
                              },
                              elements: {
                                enum: {
                                  items: [true, false],
                                  name: '#/0/0',
                                  required: false,
                                  selectedIndex: 1
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

            it('transforms `array` type schemas (`items` is `array` type with `items` is `array` type with `items` is `null` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'array',
                    items: [
                      {
                        type: 'null',
                        enum: [null]
                      }
                    ]
                  }
                ]
              }

              const values = {
                '#/0/0': '0'
              }

              const params = {
                '#/0': { meta: { component: 'array type index component' } },
                '#/0/0': { meta: { component: 'array type index array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'array',
                          schema: {
                            type: 'array',
                            items: [
                              {
                                type: 'null',
                                enum: [null]
                              }
                            ]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              meta: {
                                component: 'array type index array type index component',
                                item: 0,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  enum: [null],
                                  type: 'null'
                                },
                                selectedIndex: 0,
                                type: 'null',
                                uri: '#/0/0'
                              },
                              elements: {
                                enum: {
                                  items: [null],
                                  name: '#/0/0',
                                  required: false,
                                  selectedIndex: 0
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

            it('transforms `array` type schemas (`items` is `array` type with `items` is `array` type with `items` is `number` type and `string` type and `boolean` type and `null` type)', () => {
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
                      },
                      {
                        type: 'string',
                        enum: [
                          'array type index string type (1)',
                          'array type index string type (2)',
                          'array type index string type (3)'
                        ]
                      },
                      {
                        type: 'boolean',
                        enum: [true, false]
                      },
                      {
                        type: 'null',
                        enum: [null]
                      }
                    ]
                  }
                ]
              }

              const values = {
                '#/0/0': '2',
                '#/0/1': '2',
                '#/0/2': '1',
                '#/0/3': '0'
              }

              const params = {
                '#/0': { meta: { component: 'array type index component' } },
                '#/0/0': { meta: { component: 'array type index array type index component' } },
                '#/0/1': { meta: { component: 'array type index array type index component' } },
                '#/0/2': { meta: { component: 'array type index array type index component' } },
                '#/0/3': { meta: { component: 'array type index array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'array',
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
                              },
                              {
                                type: 'string',
                                enum: [
                                  'array type index string type (1)',
                                  'array type index string type (2)',
                                  'array type index string type (3)'
                                ]
                              },
                              {
                                type: 'boolean',
                                enum: [true, false]
                              },
                              {
                                type: 'null',
                                enum: [null]
                              }
                            ]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              elements: {
                                enum: {
                                  items: [
                                    1,
                                    2,
                                    3
                                  ],
                                  name: '#/0/0',
                                  required: false,
                                  selectedIndex: 2
                                }
                              },
                              meta: {
                                component: 'array type index array type index component',
                                item: 0,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  enum: [
                                    1,
                                    2,
                                    3
                                  ],
                                  type: 'number'
                                },
                                selectedIndex: 2,
                                type: 'number',
                                uri: '#/0/0'
                              }
                            },
                            {
                              meta: {
                                component: 'array type index array type index component',
                                item: 1,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  enum: [
                                    'array type index string type (1)',
                                    'array type index string type (2)',
                                    'array type index string type (3)'
                                  ],
                                  type: 'string'
                                },
                                selectedIndex: 2,
                                type: 'string',
                                uri: '#/0/1'
                              },
                              elements: {
                                enum: {
                                  items: [
                                    'array type index string type (1)',
                                    'array type index string type (2)',
                                    'array type index string type (3)'
                                  ],
                                  name: '#/0/1',
                                  required: false,
                                  selectedIndex: 2
                                }
                              }
                            },
                            {
                              meta: {
                                component: 'array type index array type index component',
                                item: 2,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  enum: [true, false],
                                  type: 'boolean'
                                },
                                selectedIndex: 1,
                                type: 'boolean',
                                uri: '#/0/2'
                              },
                              elements: {
                                enum: {
                                  items: [true, false],
                                  name: '#/0/2',
                                  required: false,
                                  selectedIndex: 1
                                }
                              }
                            },
                            {
                              meta: {
                                component: 'array type index array type index component',
                                item: 3,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  enum: [null],
                                  type: 'null'
                                },
                                selectedIndex: 0,
                                type: 'null',
                                uri: '#/0/3'
                              },
                              elements: {
                                enum: {
                                  items: [null],
                                  name: '#/0/3',
                                  required: false,
                                  selectedIndex: 0
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

            it('transforms `array` type schemas (`items` is `object` type with `properties`)', () => {
              const schema = {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    one: { type: 'string' },
                    two: { type: 'string' }
                  }
                }
              }

              const values = {
                '#/0/one': 'string',
                '#/0/two': 'string'
              }

              const params = {
                '#/0': { meta: { component: 'array type index component' } },
                '#/0/one': { meta: { component: 'array type index object type key component' } },
                '#/0/two': { meta: { component: 'array type index object type key component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'object',
                          schema: {
                            type: 'object',
                            properties: {
                              one: { type: 'string' },
                              two: { type: 'string' }
                            }
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              meta: {
                                name: 'one',
                                required: false,
                                type: 'string',
                                schema: { type: 'string' },
                                rootSchema: schema,
                                uri: '#/0/one',
                                value: 'string',
                                component: 'array type index object type key component'
                              },
                              elements: {
                                field: {
                                  name: '#/0/one',
                                  required: false,
                                  value: 'string'
                                }
                              }
                            },
                            {
                              meta: {
                                name: 'two',
                                required: false,
                                type: 'string',
                                schema: { type: 'string' },
                                rootSchema: schema,
                                uri: '#/0/two',
                                value: 'string',
                                component: 'array type index object type key component'
                              },
                              elements: {
                                field: {
                                  name: '#/0/two',
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

            it('transforms `array` type schemas (`items` is `object` type with `properties` and `required`)', () => {
              const schema = {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    one: { type: 'string' },
                    two: { type: 'string' }
                  },
                  required: [
                    'one'
                  ]
                }
              }

              const values = {
                '#/0/one': 'string',
                '#/0/two': 'string'
              }

              const params = {
                '#/0': { meta: { component: 'array type index component' } },
                '#/0/one': { meta: { component: 'array type index object type key component' } },
                '#/0/two': { meta: { component: 'array type index object type key component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'object',
                          schema: {
                            type: 'object',
                            properties: {
                              one: { type: 'string' },
                              two: { type: 'string' }
                            },
                            required: [
                              'one'
                            ]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              meta: {
                                name: 'one',
                                required: true,
                                type: 'string',
                                schema: { type: 'string' },
                                rootSchema: schema,
                                uri: '#/0/one',
                                value: 'string',
                                component: 'array type index object type key component'
                              },
                              elements: {
                                field: {
                                  name: '#/0/one',
                                  required: true,
                                  value: 'string'
                                }
                              }
                            },
                            {
                              meta: {
                                name: 'two',
                                required: false,
                                type: 'string',
                                schema: { type: 'string' },
                                rootSchema: schema,
                                uri: '#/0/two',
                                value: 'string',
                                component: 'array type index object type key component'
                              },
                              elements: {
                                field: {
                                  name: '#/0/two',
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

            it('transforms `array` type schemas (`items` is `boolean` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'boolean',
                    enum: [true, false]
                  }
                ]
              }

              const values = {
                '#/0': '1'
              }

              const params = {
                '#/0': { meta: { component: 'array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'boolean',
                          schema: {
                            type: 'boolean',
                            enum: [true, false]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          selectedIndex: 1,
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          enum: {
                            items: [true, false],
                            name: '#/0',
                            required: false,
                            selectedIndex: 1
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `null` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'null',
                    enum: [null]
                  }
                ]
              }

              const values = {
                '#/0': '0'
              }

              const params = {
                '#/0': { meta: { component: 'array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'null',
                          schema: {
                            type: 'null',
                            enum: [null]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          selectedIndex: 0,
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          enum: {
                            items: [null],
                            name: '#/0',
                            required: false,
                            selectedIndex: 0
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `number` type and `string` type and `boolean` type and `null` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'number',
                    enum: [1, 2, 3]
                  },
                  {
                    type: 'string',
                    enum: ['string (1)', 'string (2)', 'string (3)']
                  },
                  {
                    type: 'boolean',
                    enum: [true, false]
                  },
                  {
                    type: 'null',
                    enum: [null]
                  }
                ]
              }

              const values = {
                '#/0': '2',
                '#/1': '2',
                '#/2': '1',
                '#/3': '0'
              }

              const params = {
                '#/0': { meta: { component: 'array type index component' } },
                '#/1': { meta: { component: 'array type index component' } },
                '#/2': { meta: { component: 'array type index component' } },
                '#/3': { meta: { component: 'array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'number',
                          schema: {
                            type: 'number',
                            enum: [1, 2, 3]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          selectedIndex: 2,
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          enum: {
                            items: [1, 2, 3],
                            name: '#/0',
                            required: false,
                            selectedIndex: 2
                          }
                        }
                      },
                      {
                        meta: {
                          required: false,
                          type: 'string',
                          schema: {
                            type: 'string',
                            enum: ['string (1)', 'string (2)', 'string (3)']
                          },
                          rootSchema: schema,
                          uri: '#/1',
                          selectedIndex: 2,
                          component: 'array type index component',
                          item: 1
                        },
                        elements: {
                          enum: {
                            items: ['string (1)', 'string (2)', 'string (3)'],
                            name: '#/1',
                            required: false,
                            selectedIndex: 2
                          }
                        }
                      },
                      {
                        meta: {
                          required: false,
                          type: 'boolean',
                          schema: {
                            type: 'boolean',
                            enum: [true, false]
                          },
                          rootSchema: schema,
                          uri: '#/2',
                          selectedIndex: 1,
                          component: 'array type index component',
                          item: 2
                        },
                        elements: {
                          enum: {
                            items: [true, false],
                            name: '#/2',
                            required: false,
                            selectedIndex: 1
                          }
                        }
                      },
                      {
                        meta: {
                          required: false,
                          type: 'null',
                          schema: {
                            type: 'null',
                            enum: [null]
                          },
                          rootSchema: schema,
                          uri: '#/3',
                          selectedIndex: 0,
                          component: 'array type index component',
                          item: 3
                        },
                        elements: {
                          enum: {
                            items: [null],
                            name: '#/3',
                            required: false,
                            selectedIndex: 0
                          }
                        }
                      }
                    ]
                  }
                })
            })
          })

          describe('Without `enum`', () => {
            it('transforms `array` type schemas (`items` is `number` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'number'
                  }
                ]
              }

              const values = {
                '#/0': '1'
              }

              const params = {
                '#/0': { meta: { component: 'array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'number',
                          schema: {
                            type: 'number'
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          value: '1',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: '1'
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `string` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'string'
                  }
                ]
              }

              const values = {
                '#/0': 'string'
              }

              const params = {
                '#/0': { meta: { component: 'array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'string',
                          schema: {
                            type: 'string'
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          value: 'string',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: 'string'
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `object` type with `properties`)', () => {
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

              const values = {
                '#/0/one': 'string',
                '#/0/two': '1'
              }

              const params = {
                '#/0': { meta: { component: 'array type index component' } },
                '#/0/one': { meta: { component: 'array type index object type key component' } },
                '#/0/two': { meta: { component: 'array type index object type key component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'object',
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
                          rootSchema: schema,
                          uri: '#/0',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              elements: {
                                field: {
                                  name: '#/0/one',
                                  required: false,
                                  value: 'string'
                                }
                              },
                              meta: {
                                component: 'array type index object type key component',
                                name: 'one',
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  type: 'string'
                                },
                                value: 'string',
                                type: 'string',
                                uri: '#/0/one'
                              }
                            },
                            {
                              elements: {
                                field: {
                                  name: '#/0/two',
                                  required: false,
                                  value: '1'
                                }
                              },
                              meta: {
                                component: 'array type index object type key component',
                                name: 'two',
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  type: 'number'
                                },
                                value: '1',
                                type: 'number',
                                uri: '#/0/two'
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `object` type with `properties` and `required`)', () => {
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

              const values = {
                '#/0/one': 'string',
                '#/0/two': '1'
              }

              const params = {
                '#/0': { meta: { component: 'array type index component' } },
                '#/0/one': { meta: { component: 'array type index object type key component' } },
                '#/0/two': { meta: { component: 'array type index object type key component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'object',
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
                          rootSchema: schema,
                          uri: '#/0',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              meta: {
                                component: 'array type index object type key component',
                                name: 'one',
                                required: true,
                                rootSchema: schema,
                                schema: {
                                  type: 'string'
                                },
                                value: 'string',
                                type: 'string',
                                uri: '#/0/one'
                              },
                              elements: {
                                field: {
                                  name: '#/0/one',
                                  required: true,
                                  value: 'string'
                                }
                              }
                            },
                            {
                              meta: {
                                component: 'array type index object type key component',
                                name: 'two',
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  type: 'number'
                                },
                                value: '1',
                                type: 'number',
                                uri: '#/0/two'
                              },
                              elements: {
                                field: {
                                  name: '#/0/two',
                                  required: false,
                                  value: '1'
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

            it('transforms `array` type schemas (`items` is `array` type with `items` is `number` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'number'
                  }
                ]
              }

              const values = {
                '#/0': '1'
              }

              const params = {
                '#/0': { meta: { component: 'array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          component: 'array type index component',
                          item: 0,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            type: 'number'
                          },
                          value: '1',
                          type: 'number',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: '1'
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `string` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'string'
                  }
                ]
              }

              const values = {
                '#/0': 'string'
              }

              const params = {
                '#/0': { meta: { component: 'array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          component: 'array type index component',
                          item: 0,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            type: 'string'
                          },
                          value: 'string',
                          type: 'string',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: 'string'
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `boolean` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'boolean'
                  }
                ]
              }

              const values = {
                '#/0': 'false'
              }

              const params = {
                '#/0': { meta: { component: 'array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          component: 'array type index component',
                          item: 0,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            type: 'boolean'
                          },
                          value: 'false',
                          type: 'boolean',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: 'false'
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `null` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'null'
                  }
                ]
              }

              const values = {
                '#/0': 'null'
              }

              const params = {
                '#/0': { meta: { component: 'array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          component: 'array type index component',
                          item: 0,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            type: 'null'
                          },
                          value: 'null',
                          type: 'null',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: 'null'
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `number` type and `string` type and `boolean` type and `null` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'number'
                  },
                  {
                    type: 'string'
                  },
                  {
                    type: 'boolean'
                  },
                  {
                    type: 'null'
                  }
                ]
              }

              const values = {
                '#/0': '1',
                '#/1': 'string',
                '#/2': 'false',
                '#/3': 'null'
              }

              const params = {
                '#/0': { meta: { component: 'array type index component' } },
                '#/1': { meta: { component: 'array type index component' } },
                '#/2': { meta: { component: 'array type index component' } },
                '#/3': { meta: { component: 'array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          component: 'array type index component',
                          item: 0,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            type: 'number'
                          },
                          value: '1',
                          type: 'number',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: '1'
                          }
                        }
                      },
                      {
                        meta: {
                          component: 'array type index component',
                          item: 1,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            type: 'string'
                          },
                          value: 'string',
                          type: 'string',
                          uri: '#/1'
                        },
                        elements: {
                          field: {
                            name: '#/1',
                            required: false,
                            value: 'string'
                          }
                        }
                      },
                      {
                        meta: {
                          component: 'array type index component',
                          item: 2,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            type: 'boolean'
                          },
                          value: 'false',
                          type: 'boolean',
                          uri: '#/2'
                        },
                        elements: {
                          field: {
                            name: '#/2',
                            required: false,
                            value: 'false'
                          }
                        }
                      },
                      {
                        meta: {
                          component: 'array type index component',
                          item: 3,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            type: 'null'
                          },
                          value: 'null',
                          type: 'null',
                          uri: '#/3'
                        },
                        elements: {
                          field: {
                            name: '#/3',
                            required: false,
                            value: 'null'
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `array` type with `items` is `number` type)', () => {
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

              const values = {
                '#/0/0': '1'
              }

              const params = {
                '#/0': { meta: { component: 'array type index component' } },
                '#/0/0': { meta: { component: 'array type index array type index component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  meta: {
                    type: 'array',
                    schema,
                    uri: '#/'
                  },
                  elements: {
                    fields: [
                      {
                        elements: {
                          fields: [
                            {
                              elements: {
                                field: {
                                  name: '#/0/0',
                                  required: false,
                                  value: '1'
                                }
                              },
                              meta: {
                                component: 'array type index array type index component',
                                item: 0,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  type: 'number'
                                },
                                value: '1',
                                type: 'number',
                                uri: '#/0/0'
                              }
                            }
                          ]
                        },
                        meta: {
                          required: false,
                          type: 'array',
                          schema: {
                            type: 'array',
                            items: [
                              {
                                type: 'number'
                              }
                            ]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          component: 'array type index component',
                          item: 0
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `array` type with `items` is `string` type)', () => {
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

              const values = {
                '#/0/0': 'string'
              }

              const params = {
                '#/0': { meta: { component: 'array type index component' } },
                '#/0/0': { meta: { component: 'array type index array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'array',
                          schema: {
                            type: 'array',
                            items: [
                              {
                                type: 'string'
                              }
                            ]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              meta: {
                                component: 'array type index array type index component',
                                item: 0,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  type: 'string'
                                },
                                value: 'string',
                                type: 'string',
                                uri: '#/0/0'
                              },
                              elements: {
                                field: {
                                  name: '#/0/0',
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

            it('transforms `array` type schemas (`items` is `array` type with `items` is `array` type with `items` is `boolean` type)', () => {
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

              const values = {
                '#/0/0': 'false'
              }

              const params = {
                '#/0': { meta: { component: 'array type index component' } },
                '#/0/0': { meta: { component: 'array type index array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'array',
                          schema: {
                            type: 'array',
                            items: [
                              {
                                type: 'boolean'
                              }
                            ]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              meta: {
                                component: 'array type index array type index component',
                                item: 0,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  type: 'boolean'
                                },
                                value: 'false',
                                type: 'boolean',
                                uri: '#/0/0'
                              },
                              elements: {
                                field: {
                                  name: '#/0/0',
                                  required: false,
                                  value: 'false'
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

            it('transforms `array` type schemas (`items` is `array` type with `items` is `array` type with `items` is `null` type)', () => {
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

              const values = {
                '#/0/0': 'null'
              }

              const params = {
                '#/0': { meta: { component: 'array type index component' } },
                '#/0/0': { meta: { component: 'array type index array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'array',
                          schema: {
                            type: 'array',
                            items: [
                              {
                                type: 'null'
                              }
                            ]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              meta: {
                                component: 'array type index array type index component',
                                item: 0,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  type: 'null'
                                },
                                value: 'null',
                                type: 'null',
                                uri: '#/0/0'
                              },
                              elements: {
                                field: {
                                  name: '#/0/0',
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

            it('transforms `array` type schemas (`items` is `array` type with `items` is `array` type with `items` is `number` type and `string` type and `boolean` type and `null` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'array',
                    items: [
                      {
                        type: 'number'
                      },
                      {
                        type: 'string'
                      },
                      {
                        type: 'boolean'
                      },
                      {
                        type: 'null'
                      }
                    ]
                  }
                ]
              }

              const values = {
                '#/0/0': '1',
                '#/0/1': 'string',
                '#/0/2': 'false',
                '#/0/3': 'null'
              }

              const params = {
                '#/0': { meta: { component: 'array type index component' } },
                '#/0/0': { meta: { component: 'array type index array type index component' } },
                '#/0/1': { meta: { component: 'array type index array type index component' } },
                '#/0/2': { meta: { component: 'array type index array type index component' } },
                '#/0/3': { meta: { component: 'array type index array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'array',
                          schema: {
                            type: 'array',
                            items: [
                              {
                                type: 'number'
                              },
                              {
                                type: 'string'
                              },
                              {
                                type: 'boolean'
                              },
                              {
                                type: 'null'
                              }
                            ]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              meta: {
                                component: 'array type index array type index component',
                                item: 0,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  type: 'number'
                                },
                                value: '1',
                                type: 'number',
                                uri: '#/0/0'
                              },
                              elements: {
                                field: {
                                  name: '#/0/0',
                                  required: false,
                                  value: '1'
                                }
                              }
                            },
                            {
                              meta: {
                                component: 'array type index array type index component',
                                item: 1,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  type: 'string'
                                },
                                value: 'string',
                                type: 'string',
                                uri: '#/0/1'
                              },
                              elements: {
                                field: {
                                  name: '#/0/1',
                                  required: false,
                                  value: 'string'
                                }
                              }
                            },
                            {
                              meta: {
                                component: 'array type index array type index component',
                                item: 2,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  type: 'boolean'
                                },
                                value: 'false',
                                type: 'boolean',
                                uri: '#/0/2'
                              },
                              elements: {
                                field: {
                                  name: '#/0/2',
                                  required: false,
                                  value: 'false'
                                }
                              }
                            },
                            {
                              meta: {
                                component: 'array type index array type index component',
                                item: 3,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  type: 'null'
                                },
                                value: 'null',
                                type: 'null',
                                uri: '#/0/3'
                              },
                              elements: {
                                field: {
                                  name: '#/0/3',
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

            it('transforms `array` type schemas (`items` is `object` type with `properties`)', () => {
              const schema = {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    one: { type: 'string' },
                    two: { type: 'string' }
                  }
                }
              }

              const values = {
                '#/0/one': 'string',
                '#/0/two': 'string'
              }

              const params = {
                '#/0': { meta: { component: 'array type index component' } },
                '#/0/one': { meta: { component: 'array type index object type key component' } },
                '#/0/two': { meta: { component: 'array type index object type key component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'object',
                          schema: {
                            type: 'object',
                            properties: {
                              one: { type: 'string' },
                              two: { type: 'string' }
                            }
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              meta: {
                                name: 'one',
                                required: false,
                                type: 'string',
                                schema: { type: 'string' },
                                rootSchema: schema,
                                uri: '#/0/one',
                                value: 'string',
                                component: 'array type index object type key component'
                              },
                              elements: {
                                field: {
                                  name: '#/0/one',
                                  required: false,
                                  value: 'string'
                                }
                              }
                            },
                            {
                              meta: {
                                name: 'two',
                                required: false,
                                type: 'string',
                                schema: { type: 'string' },
                                rootSchema: schema,
                                uri: '#/0/two',
                                value: 'string',
                                component: 'array type index object type key component'
                              },
                              elements: {
                                field: {
                                  name: '#/0/two',
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

            it('transforms `array` type schemas (`items` is `object` type with `properties` and `required`)', () => {
              const schema = {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    one: { type: 'string' },
                    two: { type: 'string' }
                  },
                  required: [
                    'one'
                  ]
                }
              }

              const values = {
                '#/0/one': 'string',
                '#/0/two': 'string'
              }

              const params = {
                '#/0': { meta: { component: 'array type index component' } },
                '#/0/one': { meta: { component: 'array type index object type key component' } },
                '#/0/two': { meta: { component: 'array type index object type key component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'object',
                          schema: {
                            type: 'object',
                            properties: {
                              one: { type: 'string' },
                              two: { type: 'string' }
                            },
                            required: [
                              'one'
                            ]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              meta: {
                                name: 'one',
                                required: true,
                                type: 'string',
                                schema: { type: 'string' },
                                rootSchema: schema,
                                uri: '#/0/one',
                                value: 'string',
                                component: 'array type index object type key component'
                              },
                              elements: {
                                field: {
                                  name: '#/0/one',
                                  required: true,
                                  value: 'string'
                                }
                              }
                            },
                            {
                              meta: {
                                name: 'two',
                                required: false,
                                type: 'string',
                                schema: { type: 'string' },
                                rootSchema: schema,
                                uri: '#/0/two',
                                value: 'string',
                                component: 'array type index object type key component'
                              },
                              elements: {
                                field: {
                                  name: '#/0/two',
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

            it('transforms `array` type schemas (`items` is `boolean` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'boolean'
                  }
                ]
              }

              const values = {
                '#/0': 'true'
              }

              const params = {
                '#/0': { meta: { component: 'array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'boolean',
                          schema: {
                            type: 'boolean'
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          value: 'true',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: 'true'
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `null` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'null'
                  }
                ]
              }

              const values = {
                '#/0': 'null'
              }

              const params = {
                '#/0': { meta: { component: 'array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'null',
                          schema: {
                            type: 'null'
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          value: 'null',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: 'null'
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `number` type and `string` type and `boolean` type and `null` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'number'
                  },
                  {
                    type: 'string'
                  },
                  {
                    type: 'boolean'
                  },
                  {
                    type: 'null'
                  }
                ]
              }

              const values = {
                '#/0': '1',
                '#/1': 'string',
                '#/2': 'true',
                '#/3': 'null'
              }

              const params = {
                '#/0': { meta: { component: 'array type index component' } },
                '#/1': { meta: { component: 'array type index component' } },
                '#/2': { meta: { component: 'array type index component' } },
                '#/3': { meta: { component: 'array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'number',
                          schema: {
                            type: 'number'
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          value: '1',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: '1'
                          }
                        }
                      },
                      {
                        meta: {
                          required: false,
                          type: 'string',
                          schema: {
                            type: 'string'
                          },
                          rootSchema: schema,
                          uri: '#/1',
                          value: 'string',
                          component: 'array type index component',
                          item: 1
                        },
                        elements: {
                          field: {
                            name: '#/1',
                            required: false,
                            value: 'string'
                          }
                        }
                      },
                      {
                        meta: {
                          required: false,
                          type: 'boolean',
                          schema: {
                            type: 'boolean'
                          },
                          rootSchema: schema,
                          uri: '#/2',
                          value: 'true',
                          component: 'array type index component',
                          item: 2
                        },
                        elements: {
                          field: {
                            name: '#/2',
                            required: false,
                            value: 'true'
                          }
                        }
                      },
                      {
                        meta: {
                          required: false,
                          type: 'null',
                          schema: {
                            type: 'null'
                          },
                          rootSchema: schema,
                          uri: '#/3',
                          value: 'null',
                          component: 'array type index component',
                          item: 3
                        },
                        elements: {
                          field: {
                            name: '#/3',
                            required: false,
                            value: 'null'
                          }
                        }
                      }
                    ]
                  }
                })
            })
          })
        })

        describe('Without `items`', () => {
          it('transforms `array` type schemas', () => {
            const schema = { type: 'array' }

            const values = {}

            const params = {
              '#/': { meta: { component: 'array component' } }
            }

            return expect(transform(schema, values, params))
              .to.eql({
                meta: {
                  type: 'array',
                  schema,
                  uri: '#/',
                  component: 'array component'
                },
                elements: {
                  fields: []
                }
              })
          })
        })
      })

      describe('Transforming `object` type schemas', () => {
        describe('With `properties`', () => {
          describe('With `enum`', () => {
            it('transforms `object` type schemas (with `properties`)', () => {
              const schema = {
                type: 'object',
                properties: {
                  one: { type: 'string', enum: ['object type key string (1)', 'object type key string (2)'] },
                  two: { type: 'string', enum: ['object type key string (1)', 'object type key string (2)'] }
                }
              }

              const values = {
                '#/one': '0',
                '#/two': '1'
              }

              const params = {
                '#/': { meta: { component: 'object component' } },
                '#/one': { meta: { component: 'object component' } },
                '#/two': { meta: { component: 'object component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  meta: {
                    type: 'object',
                    schema,
                    uri: '#/',
                    component: 'object component'
                  },
                  elements: {
                    fields: [
                      {
                        meta: {
                          name: 'one',
                          required: false,
                          type: 'string',
                          schema: {
                            type: 'string',
                            enum: ['object type key string (1)', 'object type key string (2)']
                          },
                          rootSchema: schema,
                          uri: '#/one',
                          selectedIndex: 0,
                          component: 'object component'
                        },
                        elements: {
                          enum: {
                            items: ['object type key string (1)', 'object type key string (2)'],
                            name: '#/one',
                            required: false,
                            selectedIndex: 0
                          }
                        }
                      },
                      {
                        meta: {
                          name: 'two',
                          required: false,
                          type: 'string',
                          schema: {
                            type: 'string',
                            enum: ['object type key string (1)', 'object type key string (2)']
                          },
                          rootSchema: schema,
                          uri: '#/two',
                          selectedIndex: 1,
                          component: 'object component'
                        },
                        elements: {
                          enum: {
                            items: ['object type key string (1)', 'object type key string (2)'],
                            name: '#/two',
                            required: false,
                            selectedIndex: 1
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `object` type schemas (with `properties` and `required`)', () => {
              const schema = {
                type: 'object',
                properties: {
                  one: { type: 'string', enum: ['object type key string (1)', 'object type key string (2)'] },
                  two: { type: 'string', enum: ['object type key string (1)', 'object type key string (2)'] }
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
                '#/': { meta: { component: 'object component' } },
                '#/one': { meta: { component: 'object component' } },
                '#/two': { meta: { component: 'object component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  meta: {
                    type: 'object',
                    schema,
                    uri: '#/',
                    component: 'object component'
                  },
                  elements: {
                    fields: [
                      {
                        meta: {
                          name: 'one',
                          required: true,
                          rootSchema: schema,
                          schema: {
                            type: 'string',
                            enum: ['object type key string (1)', 'object type key string (2)']
                          },
                          type: 'string',
                          uri: '#/one',
                          selectedIndex: 0,
                          component: 'object component'
                        },
                        elements: {
                          enum: {
                            items: ['object type key string (1)', 'object type key string (2)'],
                            name: '#/one',
                            required: true,
                            selectedIndex: 0
                          }
                        }
                      },
                      {
                        meta: {
                          name: 'two',
                          required: false,
                          rootSchema: schema,
                          schema: {
                            type: 'string',
                            enum: ['object type key string (1)', 'object type key string (2)']
                          },
                          type: 'string',
                          uri: '#/two',
                          selectedIndex: 1,
                          component: 'object component'
                        },
                        elements: {
                          enum: {
                            items: ['object type key string (1)', 'object type key string (2)'],
                            name: '#/two',
                            required: false,
                            selectedIndex: 1
                          }
                        }
                      }
                    ]
                  }
                })
            })
          })

          describe('Without `enum`', () => {
            it('transforms `object` type schemas (with `properties`)', () => {
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
                '#/': { meta: { component: 'object component' } },
                '#/one': { meta: { component: 'object component' } },
                '#/two': { meta: { component: 'object component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  meta: {
                    type: 'object',
                    schema,
                    uri: '#/',
                    component: 'object component'
                  },
                  elements: {
                    fields: [
                      {
                        meta: {
                          name: 'one',
                          required: false,
                          type: 'string',
                          schema: {
                            type: 'string'
                          },
                          rootSchema: schema,
                          uri: '#/one',
                          value: 'string',
                          component: 'object component'
                        },
                        elements: {
                          field: {
                            name: '#/one',
                            required: false,
                            value: 'string'
                          }
                        }
                      },
                      {
                        meta: {
                          name: 'two',
                          required: false,
                          type: 'string',
                          schema: {
                            type: 'string'
                          },
                          rootSchema: schema,
                          uri: '#/two',
                          value: 'string',
                          component: 'object component'
                        },
                        elements: {
                          field: {
                            name: '#/two',
                            required: false,
                            value: 'string'
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `object` type schemas (with `properties` and `required`)', () => {
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
                '#/': { meta: { component: 'object component' } },
                '#/one': { meta: { component: 'object component' } },
                '#/two': { meta: { component: 'object component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  meta: {
                    type: 'object',
                    schema,
                    uri: '#/',
                    component: 'object component'
                  },
                  elements: {
                    fields: [
                      {
                        meta: {
                          name: 'one',
                          required: true,
                          rootSchema: schema,
                          schema: { type: 'string' },
                          type: 'string',
                          uri: '#/one',
                          value: 'string',
                          component: 'object component'
                        },
                        elements: {
                          field: {
                            name: '#/one',
                            required: true,
                            value: 'string'
                          }
                        }
                      },
                      {
                        meta: {
                          name: 'two',
                          required: false,
                          rootSchema: schema,
                          schema: { type: 'string' },
                          type: 'string',
                          uri: '#/two',
                          value: 'string',
                          component: 'object component'
                        },
                        elements: {
                          field: {
                            name: '#/two',
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

        describe('Without `properties`', () => {
          it('transforms `object` type schemas', () => {
            const schema = { type: 'object' }

            const values = {}

            const params = {
              '#/': { meta: { component: 'object component' } }
            }

            return expect(transform(schema, values, params))
              .to.eql({
                meta: {
                  type: 'object',
                  schema,
                  uri: '#/',
                  component: 'object component'
                },
                elements: {
                  fields: []
                }
              })
          })
        })
      })

      describe('Transforming `boolean` type schemas', () => {
        describe('With `enum`', () => {
          it('transforms `boolean` type schemas', () => {
            const schema = { type: 'boolean', enum: [true, false] }

            const values = {
              '#/': '1'
            }

            const params = {
              '#/': { meta: { component: 'boolean component' } }
            }

            return expect(transform(schema, values, params))
              .to.eql({
                meta: {
                  type: 'boolean',
                  schema,
                  uri: '#/',
                  selectedIndex: 1,
                  component: 'boolean component'
                },
                elements: {
                  enum: {
                    name: '#/',
                    items: [true, false],
                    selectedIndex: 1
                  }
                }
              })
          })
        })

        describe('With `anyOf`', () => {
          it('transforms `boolean` type schemas', () => {
            const schema = { type: 'boolean', anyOf: [{ default: true }, { default: false }, { default: true }] }

            const values = {
              '#/': '2'
            }

            const params = {
              '#/': { meta: { component: 'boolean component' } }
            }

            return expect(transform(schema, values, params))
              .to.eql({
                meta: {
                  type: 'boolean',
                  schema,
                  uri: '#/',
                  selectedIndex: 2,
                  component: 'boolean component'
                },
                elements: {
                  anyOf: {
                    items: [
                      {
                        meta: {
                          type: 'boolean',
                          rootSchema: schema,
                          schema: { default: true },
                          item: 0,
                          required: false,
                          defaultValue: 'true',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: 'true'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'boolean',
                          rootSchema: schema,
                          schema: { default: false },
                          item: 1,
                          required: false,
                          defaultValue: 'false',
                          uri: '#/1'
                        },
                        elements: {
                          field: {
                            name: '#/1',
                            required: false,
                            value: 'false'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'boolean',
                          rootSchema: schema,
                          schema: { default: true },
                          item: 2,
                          required: false,
                          defaultValue: 'true',
                          uri: '#/2'
                        },
                        elements: {
                          field: {
                            name: '#/2',
                            required: false,
                            value: 'true'
                          }
                        }
                      }
                    ],
                    name: '#/',
                    selectedIndex: 2
                  }
                }
              })
          })
        })

        describe('With `oneOf`', () => {
          it('transforms `boolean` type schemas', () => {
            const schema = { type: 'boolean', oneOf: [{ default: true }, { default: false }, { default: true }] }

            const values = {
              '#/': '2'
            }

            const params = {
              '#/': { meta: { component: 'boolean component' } }
            }

            return expect(transform(schema, values, params))
              .to.eql({
                meta: {
                  type: 'boolean',
                  schema,
                  uri: '#/',
                  selectedIndex: 2,
                  component: 'boolean component'
                },
                elements: {
                  oneOf: {
                    items: [
                      {
                        meta: {
                          type: 'boolean',
                          rootSchema: schema,
                          schema: { default: true },
                          item: 0,
                          required: false,
                          defaultValue: 'true',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: 'true'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'boolean',
                          rootSchema: schema,
                          schema: { default: false },
                          item: 1,
                          required: false,
                          defaultValue: 'false',
                          uri: '#/1'
                        },
                        elements: {
                          field: {
                            name: '#/1',
                            required: false,
                            value: 'false'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'boolean',
                          rootSchema: schema,
                          schema: { default: true },
                          item: 2,
                          required: false,
                          defaultValue: 'true',
                          uri: '#/2'
                        },
                        elements: {
                          field: {
                            name: '#/2',
                            required: false,
                            value: 'true'
                          }
                        }
                      }
                    ],
                    name: '#/',
                    selectedIndex: 2
                  }
                }
              })
          })
        })

        describe('With `allOf`', () => {
          it('transforms `boolean` type schemas', () => {
            const schema = { type: 'boolean', allOf: [{ default: true }] }

            const values = {
              '#/': 'true'
            }

            const params = {
              '#/': { meta: { component: 'boolean component' } }
            }

            return expect(transform(schema, values, params))
              .to.eql({
                meta: {
                  type: 'boolean',
                  schema,
                  uri: '#/',
                  defaultValue: 'true',
                  value: 'true',
                  component: 'boolean component'
                },
                elements: {
                  field: {
                    name: '#/',
                    value: 'true'
                  }
                }
              })
          })
        })

        describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
          it('transforms `boolean` type schemas', () => {
            const schema = { type: 'boolean' }

            const values = {
              '#/': 'true'
            }

            const params = {
              '#/': { meta: { component: 'boolean component' } }
            }

            return expect(transform(schema, values, params))
              .to.eql({
                meta: {
                  type: 'boolean',
                  schema,
                  uri: '#/',
                  value: 'true',
                  component: 'boolean component'
                },
                elements: {
                  field: {
                    name: '#/',
                    value: 'true'
                  }
                }
              })
          })
        })
      })

      describe('Transforming `null` type schemas', () => {
        describe('With `enum`', () => {
          it('transforms `null` type schemas', () => {
            const schema = { type: 'null', enum: [null] }

            const values = {
              '#/': '0'
            }

            const params = {
              '#/': { meta: { component: 'null component' } }
            }

            return expect(transform(schema, values, params))
              .to.eql({
                meta: {
                  type: 'null',
                  schema,
                  uri: '#/',
                  selectedIndex: 0,
                  component: 'null component'
                },
                elements: {
                  enum: {
                    name: '#/',
                    items: [null],
                    selectedIndex: 0
                  }
                }
              })
          })
        })

        describe('With `anyOf`', () => {
          it('transforms `null` type schemas', () => {
            const schema = { type: 'null', anyOf: [{ default: null }, { default: null }, { default: null }] }

            const values = {
              '#/': '2'
            }

            const params = {
              '#/': { meta: { component: 'null component' } }
            }

            return expect(transform(schema, values, params))
              .to.eql({
                meta: {
                  type: 'null',
                  schema,
                  uri: '#/',
                  selectedIndex: 2,
                  component: 'null component'
                },
                elements: {
                  anyOf: {
                    items: [
                      {
                        meta: {
                          type: 'null',
                          rootSchema: schema,
                          schema: { default: null },
                          item: 0,
                          required: false,
                          defaultValue: 'null',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: 'null'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'null',
                          rootSchema: schema,
                          schema: { default: null },
                          item: 1,
                          required: false,
                          defaultValue: 'null',
                          uri: '#/1'
                        },
                        elements: {
                          field: {
                            name: '#/1',
                            required: false,
                            value: 'null'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'null',
                          rootSchema: schema,
                          schema: { default: null },
                          item: 2,
                          required: false,
                          defaultValue: 'null',
                          uri: '#/2'
                        },
                        elements: {
                          field: {
                            name: '#/2',
                            required: false,
                            value: 'null'
                          }
                        }
                      }
                    ],
                    name: '#/',
                    selectedIndex: 2
                  }
                }
              })
          })
        })

        describe('With `oneOf`', () => {
          it('transforms `null` type schemas', () => {
            const schema = { type: 'null', oneOf: [{ default: null }, { default: null }, { default: null }] }

            const values = {
              '#/': '2'
            }

            const params = {
              '#/': { meta: { component: 'null component' } }
            }

            return expect(transform(schema, values, params))
              .to.eql({
                meta: {
                  type: 'null',
                  schema,
                  uri: '#/',
                  selectedIndex: 2,
                  component: 'null component'
                },
                elements: {
                  oneOf: {
                    items: [
                      {
                        meta: {
                          type: 'null',
                          rootSchema: schema,
                          schema: { default: null },
                          item: 0,
                          required: false,
                          defaultValue: 'null',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: 'null'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'null',
                          rootSchema: schema,
                          schema: { default: null },
                          item: 1,
                          required: false,
                          defaultValue: 'null',
                          uri: '#/1'
                        },
                        elements: {
                          field: {
                            name: '#/1',
                            required: false,
                            value: 'null'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'null',
                          rootSchema: schema,
                          schema: { default: null },
                          item: 2,
                          required: false,
                          defaultValue: 'null',
                          uri: '#/2'
                        },
                        elements: {
                          field: {
                            name: '#/2',
                            required: false,
                            value: 'null'
                          }
                        }
                      }
                    ],
                    name: '#/',
                    selectedIndex: 2
                  }
                }
              })
          })
        })

        describe('With `allOf`', () => {
          it('transforms `null` type schemas', () => {
            const schema = { type: 'null', allOf: [{ default: null }] }

            const values = {
              '#/': 'null'
            }

            const params = {
              '#/': { meta: { component: 'null component' } }
            }

            return expect(transform(schema, values, params))
              .to.eql({
                meta: {
                  type: 'null',
                  schema,
                  uri: '#/',
                  defaultValue: 'null',
                  value: 'null',
                  component: 'null component'
                },
                elements: {
                  field: {
                    name: '#/',
                    value: 'null'
                  }
                }
              })
          })
        })

        describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
          it('transforms `null` type schemas', () => {
            const schema = { type: 'null' }

            const values = {
              '#/': 'null'
            }

            const params = {
              '#/': { meta: { component: 'null component' } }
            }

            return expect(transform(schema, values, params))
              .to.eql({
                meta: {
                  type: 'null',
                  schema,
                  uri: '#/',
                  value: 'null',
                  component: 'null component'
                },
                elements: {
                  field: {
                    name: '#/',
                    value: 'null'
                  }
                }
              })
          })
        })
      })
    })

    describe('Without params', () => {
      it('transforms', () => {
        const schema = {
          $id: 'https://example.com/geographical-location.schema.json',
          $schema: 'http://json-schema.org/draft-07/schema#',
          title: 'Latitude and Longitude',
          description: 'A geographical coordinate',
          required: ['latitude', 'longitude'],
          type: 'object',
          properties: {
            stringTypeSubSchema: {
              title: 'String type sub schema',
              type: 'string',
              minLength: 1,
              maxLength: 10
            },
            numberTypeSubSchema: {
              title: 'Number type sub schema',
              type: 'number',
              min: 1,
              max: 10
            },
            arrayTypeSubSchema: {
              title: 'Array type sub schema',
              type: 'array',
              items: [
                {
                  type: 'string'
                }
              ]
            },
            objectTypeSubSchema: {
              title: 'Object type sub schema',
              type: 'object',
              properties: {
                one: { type: 'string' },
                two: { type: 'number' }
              }
            },
            booleanTypeSubSchema: {
              title: 'Boolean type sub schema',
              type: 'boolean'
            },
            nullTypeSubSchema: {
              title: 'Null type sub schema',
              type: 'null'
            },
            latitude: {
              title: 'Latitude',
              type: 'number',
              minimum: -90,
              maximum: 90,
              multipleOf: 42.0
            },
            longitude: {
              title: 'Longitude',
              type: 'number',
              minimum: -180,
              maximum: 180,
              exclusiveMinimum: true,
              exclusiveMaximum: true
            }
          }
        }

        const values = {
          '#/stringTypeSubSchema': 'string',
          '#/numberTypeSubSchema': '1',
          '#/arrayTypeSubSchema/0': 'string',
          '#/objectTypeSubSchema/one': 'string',
          '#/objectTypeSubSchema/two': '2',
          '#/booleanTypeSubSchema': 'true',
          '#/nullTypeSubSchema': 'null'
        }

        return expect(transform(schema, values))
          .to.eql({
            meta: {
              schema,
              type: 'object',
              uri: '#/'
            },
            elements: {
              description: 'A geographical coordinate',
              fields: [
                {
                  meta: {
                    maxLength: 10,
                    minLength: 1,
                    name: 'stringTypeSubSchema',
                    required: false,
                    rootSchema: schema,
                    schema: {
                      maxLength: 10,
                      minLength: 1,
                      title: 'String type sub schema',
                      type: 'string'
                    },
                    type: 'string',
                    uri: '#/stringTypeSubSchema',
                    value: 'string'
                  },
                  elements: {
                    field: {
                      name: '#/stringTypeSubSchema',
                      maxLength: 10,
                      minLength: 1,
                      required: false,
                      value: 'string'
                    },
                    title: 'String type sub schema'
                  }
                },
                {
                  meta: {
                    name: 'numberTypeSubSchema',
                    required: false,
                    rootSchema: schema,
                    schema: {
                      max: 10,
                      min: 1,
                      title: 'Number type sub schema',
                      type: 'number'
                    },
                    type: 'number',
                    uri: '#/numberTypeSubSchema',
                    value: '1'
                  },
                  elements: {
                    field: {
                      name: '#/numberTypeSubSchema',
                      required: false,
                      value: '1'
                    },
                    title: 'Number type sub schema'
                  }
                },
                {
                  meta: {
                    name: 'arrayTypeSubSchema',
                    required: false,
                    rootSchema: schema,
                    schema: {
                      items: [
                        {
                          type: 'string'
                        }
                      ],
                      title: 'Array type sub schema',
                      type: 'array'
                    },
                    type: 'array',
                    uri: '#/arrayTypeSubSchema'
                  },
                  elements: {
                    fields: [
                      {
                        meta: {
                          required: false,
                          rootSchema: schema,
                          schema: {
                            type: 'string'
                          },
                          type: 'string',
                          uri: '#/arrayTypeSubSchema/0',
                          value: 'string',
                          item: 0
                        },
                        elements: {
                          field: {
                            name: '#/arrayTypeSubSchema/0',
                            required: false,
                            value: 'string'
                          }
                        }
                      }
                    ],
                    title: 'Array type sub schema'
                  }
                },
                {
                  meta: {
                    name: 'objectTypeSubSchema',
                    required: false,
                    rootSchema: schema,
                    schema: {
                      properties: {
                        one: { type: 'string' },
                        two: { type: 'number' }
                      },
                      title: 'Object type sub schema',
                      type: 'object'
                    },
                    type: 'object',
                    uri: '#/objectTypeSubSchema'
                  },
                  elements: {
                    fields: [
                      {
                        meta: {
                          name: 'one',
                          required: false,
                          rootSchema: schema,
                          schema: {
                            type: 'string'
                          },
                          type: 'string',
                          uri: '#/objectTypeSubSchema/one',
                          value: 'string'
                        },
                        elements: {
                          field: {
                            name: '#/objectTypeSubSchema/one',
                            required: false,
                            value: 'string'
                          }
                        }
                      },
                      {
                        meta: {
                          name: 'two',
                          required: false,
                          rootSchema: schema,
                          schema: {
                            type: 'number'
                          },
                          type: 'number',
                          uri: '#/objectTypeSubSchema/two',
                          value: '2'
                        },
                        elements: {
                          field: {
                            name: '#/objectTypeSubSchema/two',
                            required: false,
                            value: '2'
                          }
                        }
                      }
                    ],
                    title: 'Object type sub schema'
                  }
                },
                {
                  meta: {
                    name: 'booleanTypeSubSchema',
                    required: false,
                    rootSchema: schema,
                    schema: {
                      title: 'Boolean type sub schema',
                      type: 'boolean'
                    },
                    type: 'boolean',
                    uri: '#/booleanTypeSubSchema',
                    value: 'true'
                  },
                  elements: {
                    field: {
                      name: '#/booleanTypeSubSchema',
                      required: false,
                      value: 'true'
                    },
                    title: 'Boolean type sub schema'
                  }
                },
                {
                  meta: {
                    name: 'nullTypeSubSchema',
                    required: false,
                    rootSchema: schema,
                    schema: {
                      title: 'Null type sub schema',
                      type: 'null'
                    },
                    type: 'null',
                    uri: '#/nullTypeSubSchema',
                    value: 'null'
                  },
                  elements: {
                    field: {
                      name: '#/nullTypeSubSchema',
                      required: false,
                      value: 'null'
                    },
                    title: 'Null type sub schema'
                  }
                },
                {
                  meta: {
                    max: 90,
                    min: -90,
                    name: 'latitude',
                    required: true,
                    rootSchema: schema,
                    schema: {
                      maximum: 90,
                      minimum: -90,
                      multipleOf: 42,
                      title: 'Latitude',
                      type: 'number'
                    },
                    step: 42,
                    type: 'number',
                    uri: '#/latitude'
                  },
                  elements: {
                    field: {
                      name: '#/latitude',
                      max: 90,
                      min: -90,
                      required: true,
                      step: 42
                    },
                    title: 'Latitude'
                  }
                },
                {
                  meta: {
                    isExclusiveMax: true,
                    isExclusiveMin: true,
                    max: 180,
                    min: -180,
                    name: 'longitude',
                    required: true,
                    rootSchema: schema,
                    schema: {
                      exclusiveMaximum: true,
                      exclusiveMinimum: true,
                      maximum: 180,
                      minimum: -180,
                      title: 'Longitude',
                      type: 'number'
                    },
                    type: 'number',
                    uri: '#/longitude'
                  },
                  elements: {
                    field: {
                      name: '#/longitude',
                      max: 180,
                      min: -180,
                      required: true
                    },
                    title: 'Longitude'
                  }
                }
              ],
              title: 'Latitude and Longitude'
            }
          })
      })

      describe('Transforming `number` type schemas', () => {
        describe('With `enum`', () => {
          it('transforms `number` type schemas', () => {
            const schema = { type: 'number', enum: [1, 2, 3] }

            const values = {
              '#/': '2'
            }

            return expect(transform(schema, values))
              .to.eql({
                meta: {
                  type: 'number',
                  schema,
                  uri: '#/',
                  selectedIndex: 2
                },
                elements: {
                  enum: {
                    items: [1, 2, 3],
                    name: '#/',
                    selectedIndex: 2
                  }
                }
              })
          })
        })

        describe('With `anyOf`', () => {
          it('transforms `number` type schemas', () => {
            const schema = { type: 'number', anyOf: [{ default: 1 }, { default: 2 }, { default: 3 }] }

            const values = {
              '#/': '2'
            }

            return expect(transform(schema, values))
              .to.eql({
                meta: {
                  type: 'number',
                  schema,
                  uri: '#/',
                  selectedIndex: 2
                },
                elements: {
                  anyOf: {
                    items: [
                      {
                        meta: {
                          type: 'number',
                          rootSchema: schema,
                          schema: { default: 1 },
                          item: 0,
                          required: false,
                          defaultValue: '1',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: '1'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'number',
                          rootSchema: schema,
                          schema: { default: 2 },
                          item: 1,
                          required: false,
                          defaultValue: '2',
                          uri: '#/1'
                        },
                        elements: {
                          field: {
                            name: '#/1',
                            required: false,
                            value: '2'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'number',
                          rootSchema: schema,
                          schema: { default: 3 },
                          item: 2,
                          required: false,
                          defaultValue: '3',
                          uri: '#/2'
                        },
                        elements: {
                          field: {
                            name: '#/2',
                            required: false,
                            value: '3'
                          }
                        }
                      }
                    ],
                    name: '#/',
                    selectedIndex: 2
                  }
                }
              })
          })
        })

        describe('With `oneOf`', () => {
          it('transforms `number` type schemas', () => {
            const schema = { type: 'number', oneOf: [{ default: 1 }, { default: 2 }, { default: 3 }] }

            const values = {
              '#/': '2'
            }

            return expect(transform(schema, values))
              .to.eql({
                meta: {
                  type: 'number',
                  schema,
                  uri: '#/',
                  selectedIndex: 2
                },
                elements: {
                  oneOf: {
                    items: [
                      {
                        meta: {
                          type: 'number',
                          rootSchema: schema,
                          schema: { default: 1 },
                          item: 0,
                          required: false,
                          defaultValue: '1',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: '1'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'number',
                          rootSchema: schema,
                          schema: { default: 2 },
                          item: 1,
                          required: false,
                          defaultValue: '2',
                          uri: '#/1'
                        },
                        elements: {
                          field: {
                            name: '#/1',
                            required: false,
                            value: '2'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'number',
                          rootSchema: schema,
                          schema: { default: 3 },
                          item: 2,
                          required: false,
                          defaultValue: '3',
                          uri: '#/2'
                        },
                        elements: {
                          field: {
                            name: '#/2',
                            required: false,
                            value: '3'
                          }
                        }
                      }
                    ],
                    name: '#/',
                    selectedIndex: 2
                  }
                }
              })
          })
        })

        describe('With `allOf`', () => {
          it('transforms `number` type schemas', () => {
            const schema = { type: 'number', allOf: [{ minimum: 1 }, { default: 2 }, { maximum: 3 }] }

            const values = {
              '#/': '2'
            }

            return expect(transform(schema, values))
              .to.eql({
                meta: {
                  type: 'number',
                  schema,
                  uri: '#/',
                  defaultValue: '2',
                  value: '2'
                },
                elements: {
                  field: {
                    name: '#/',
                    value: '2'
                  }
                }
              })
          })
        })

        describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
          it('transforms `number` type schemas', () => {
            const schema = { type: 'number' }

            const values = {
              '#/': '1'
            }

            return expect(transform(schema, values))
              .to.eql({
                meta: {
                  type: 'number',
                  schema,
                  uri: '#/',
                  value: '1'
                },
                elements: {
                  field: {
                    name: '#/',
                    value: '1'
                  }
                }
              })
          })
        })
      })

      describe('Transforming `string` type schemas', () => {
        describe('With `enum`', () => {
          it('transforms `string` type schemas', () => {
            const schema = { type: 'string', enum: ['string (1)', 'string (2)', 'string (3)'] }

            const values = {
              '#/': '2'
            }

            return expect(transform(schema, values))
              .to.eql({
                meta: {
                  type: 'string',
                  schema,
                  uri: '#/',
                  selectedIndex: 2
                },
                elements: {
                  enum: {
                    items: ['string (1)', 'string (2)', 'string (3)'],
                    name: '#/',
                    selectedIndex: 2
                  }
                }
              })
          })
        })

        describe('With `anyOf`', () => {
          it('transforms `string` type schemas', () => {
            const schema = { type: 'string', anyOf: [{ default: 'string (1)' }, { default: 'string (2)' }, { default: 'string (3)' }] }

            const values = {
              '#/': '2'
            }

            return expect(transform(schema, values))
              .to.eql({
                meta: {
                  type: 'string',
                  schema,
                  uri: '#/',
                  selectedIndex: 2
                },
                elements: {
                  anyOf: {
                    items: [
                      {
                        meta: {
                          type: 'string',
                          rootSchema: schema,
                          schema: { default: 'string (1)' },
                          item: 0,
                          required: false,
                          defaultValue: 'string (1)',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: 'string (1)'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'string',
                          rootSchema: schema,
                          schema: { default: 'string (2)' },
                          item: 1,
                          required: false,
                          defaultValue: 'string (2)',
                          uri: '#/1'
                        },
                        elements: {
                          field: {
                            name: '#/1',
                            required: false,
                            value: 'string (2)'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'string',
                          rootSchema: schema,
                          schema: { default: 'string (3)' },
                          item: 2,
                          required: false,
                          defaultValue: 'string (3)',
                          uri: '#/2'
                        },
                        elements: {
                          field: {
                            name: '#/2',
                            required: false,
                            value: 'string (3)'
                          }
                        }
                      }
                    ],
                    name: '#/',
                    selectedIndex: 2
                  }
                }
              })
          })
        })

        describe('With `oneOf`', () => {
          it('transforms `string` type schemas', () => {
            const schema = { type: 'string', oneOf: [{ default: 'string (1)' }, { default: 'string (2)' }, { default: 'string (3)' }] }

            const values = {
              '#/': '2'
            }

            return expect(transform(schema, values))
              .to.eql({
                meta: {
                  type: 'string',
                  schema,
                  uri: '#/',
                  selectedIndex: 2
                },
                elements: {
                  oneOf: {
                    items: [
                      {
                        meta: {
                          type: 'string',
                          rootSchema: schema,
                          schema: { default: 'string (1)' },
                          item: 0,
                          required: false,
                          defaultValue: 'string (1)',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: 'string (1)'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'string',
                          rootSchema: schema,
                          schema: { default: 'string (2)' },
                          item: 1,
                          required: false,
                          defaultValue: 'string (2)',
                          uri: '#/1'
                        },
                        elements: {
                          field: {
                            name: '#/1',
                            required: false,
                            value: 'string (2)'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'string',
                          rootSchema: schema,
                          schema: { default: 'string (3)' },
                          item: 2,
                          required: false,
                          defaultValue: 'string (3)',
                          uri: '#/2'
                        },
                        elements: {
                          field: {
                            name: '#/2',
                            required: false,
                            value: 'string (3)'
                          }
                        }
                      }
                    ],
                    name: '#/',
                    selectedIndex: 2
                  }
                }
              })
          })
        })

        describe('With `allOf`', () => {
          it('transforms `string` type schemas', () => {
            const schema = { type: 'string', allOf: [{ minLength: 1 }, { default: 'string' }, { maxLength: 20 }] }

            const values = {
              '#/': 'string'
            }

            return expect(transform(schema, values))
              .to.eql({
                meta: {
                  type: 'string',
                  schema,
                  uri: '#/',
                  defaultValue: 'string',
                  value: 'string'
                },
                elements: {
                  field: {
                    name: '#/',
                    value: 'string'
                  }
                }
              })
          })
        })

        describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
          it('transforms `string` type schemas', () => {
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
                    name: '#/',
                    value: 'string'
                  }
                }
              })
          })
        })
      })

      describe('Transforming `array` type schemas', () => {
        describe('With `items`', () => {
          describe('With `enum`', () => {
            it('transforms `array` type schemas (`items` is `number` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'number',
                    enum: [1, 2, 3]
                  }
                ]
              }

              const values = {
                '#/0': '2'
              }

              return expect(transform(schema, values))
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
                          required: false,
                          type: 'number',
                          schema: {
                            type: 'number',
                            enum: [1, 2, 3]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          selectedIndex: 2,
                          item: 0
                        },
                        elements: {
                          enum: {
                            items: [1, 2, 3],
                            name: '#/0',
                            required: false,
                            selectedIndex: 2
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `string` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'string',
                    enum: ['string (1)', 'string (2)', 'string (3)']
                  }
                ]
              }

              const values = {
                '#/0': '2'
              }

              return expect(transform(schema, values))
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
                          required: false,
                          type: 'string',
                          schema: {
                            type: 'string',
                            enum: ['string (1)', 'string (2)', 'string (3)']
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          selectedIndex: 2,
                          item: 0
                        },
                        elements: {
                          enum: {
                            items: ['string (1)', 'string (2)', 'string (3)'],
                            name: '#/0',
                            required: false,
                            selectedIndex: 2
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `object` type with `properties`)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'object',
                    properties: {
                      one: {
                        type: 'string',
                        enum: [
                          'array type index string type (1)',
                          'array type index string type (2)',
                          'array type index string type (3)'
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

              const values = {
                '#/0/one': '2',
                '#/0/two': '2'
              }

              return expect(transform(schema, values))
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
                          required: false,
                          type: 'object',
                          schema: {
                            type: 'object',
                            properties: {
                              one: {
                                type: 'string',
                                enum: [
                                  'array type index string type (1)',
                                  'array type index string type (2)',
                                  'array type index string type (3)'
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
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              elements: {
                                enum: {
                                  items: [
                                    'array type index string type (1)',
                                    'array type index string type (2)',
                                    'array type index string type (3)'
                                  ],
                                  name: '#/0/one',
                                  required: false,
                                  selectedIndex: 2
                                }
                              },
                              meta: {
                                name: 'one',
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  enum: [
                                    'array type index string type (1)',
                                    'array type index string type (2)',
                                    'array type index string type (3)'
                                  ],
                                  type: 'string'
                                },
                                selectedIndex: 2,
                                type: 'string',
                                uri: '#/0/one'
                              }
                            },
                            {
                              elements: {
                                enum: {
                                  items: [
                                    1,
                                    2,
                                    3
                                  ],
                                  name: '#/0/two',
                                  required: false,
                                  selectedIndex: 2
                                }
                              },
                              meta: {
                                name: 'two',
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  enum: [
                                    1,
                                    2,
                                    3
                                  ],
                                  type: 'number'
                                },
                                selectedIndex: 2,
                                type: 'number',
                                uri: '#/0/two'
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `object` type with `properties` and `required`)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'object',
                    properties: {
                      one: {
                        type: 'string',
                        enum: [
                          'array type index string type (1)',
                          'array type index string type (2)',
                          'array type index string type (3)'
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

              const values = {
                '#/0/one': '2',
                '#/0/two': '2'
              }

              return expect(transform(schema, values))
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
                          required: false,
                          type: 'object',
                          schema: {
                            type: 'object',
                            properties: {
                              one: {
                                type: 'string',
                                enum: [
                                  'array type index string type (1)',
                                  'array type index string type (2)',
                                  'array type index string type (3)'
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
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              elements: {
                                enum: {
                                  items: [
                                    'array type index string type (1)',
                                    'array type index string type (2)',
                                    'array type index string type (3)'
                                  ],
                                  name: '#/0/one',
                                  required: true,
                                  selectedIndex: 2
                                }
                              },
                              meta: {
                                name: 'one',
                                required: true,
                                rootSchema: schema,
                                schema: {
                                  enum: [
                                    'array type index string type (1)',
                                    'array type index string type (2)',
                                    'array type index string type (3)'
                                  ],
                                  type: 'string'
                                },
                                selectedIndex: 2,
                                type: 'string',
                                uri: '#/0/one'
                              }
                            },
                            {
                              elements: {
                                enum: {
                                  items: [
                                    1,
                                    2,
                                    3
                                  ],
                                  name: '#/0/two',
                                  required: false,
                                  selectedIndex: 2
                                }
                              },
                              meta: {
                                name: 'two',
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  enum: [
                                    1,
                                    2,
                                    3
                                  ],
                                  type: 'number'
                                },
                                selectedIndex: 2,
                                type: 'number',
                                uri: '#/0/two'
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `number` type)', () => {
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

              const values = {
                '#/0': '2'
              }

              return expect(transform(schema, values))
                .to.eql({
                  meta: {
                    type: 'array',
                    schema,
                    uri: '#/'
                  },
                  elements: {
                    fields: [
                      {
                        elements: {
                          enum: {
                            items: [
                              1,
                              2,
                              3
                            ],
                            name: '#/0',
                            required: false,
                            selectedIndex: 2
                          }
                        },
                        meta: {
                          item: 0,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            enum: [
                              1,
                              2,
                              3
                            ],
                            type: 'number'
                          },
                          selectedIndex: 2,
                          type: 'number',
                          uri: '#/0'
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `string` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'string',
                    enum: [
                      'array type index string type (1)',
                      'array type index string type (2)',
                      'array type index string type (3)'
                    ]
                  }
                ]
              }

              const values = {
                '#/0': '2'
              }

              return expect(transform(schema, values))
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
                          required: false,
                          type: 'string',
                          schema: {
                            type: 'string',
                            enum: [
                              'array type index string type (1)',
                              'array type index string type (2)',
                              'array type index string type (3)'
                            ]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0,
                          selectedIndex: 2
                        },
                        elements: {
                          enum: {
                            items: [
                              'array type index string type (1)',
                              'array type index string type (2)',
                              'array type index string type (3)'
                            ],
                            name: '#/0',
                            required: false,
                            selectedIndex: 2
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `boolean` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'boolean',
                    enum: [true, false]
                  }
                ]
              }

              const values = {
                '#/0': '1'
              }

              return expect(transform(schema, values))
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
                          required: false,
                          type: 'boolean',
                          schema: {
                            type: 'boolean',
                            enum: [true, false]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0,
                          selectedIndex: 1
                        },
                        elements: {
                          enum: {
                            items: [true, false],
                            name: '#/0',
                            required: false,
                            selectedIndex: 1
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `null` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'null',
                    enum: [null]
                  }
                ]
              }

              const values = {
                '#/0': '0'
              }

              return expect(transform(schema, values))
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
                          required: false,
                          type: 'null',
                          schema: {
                            type: 'null',
                            enum: [null]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0,
                          selectedIndex: 0
                        },
                        elements: {
                          enum: {
                            items: [null],
                            name: '#/0',
                            required: false,
                            selectedIndex: 0
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `number` type and `string` type and `boolean` type and `null` type)', () => {
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
                  },
                  {
                    type: 'string',
                    enum: [
                      'array type index string type (1)',
                      'array type index string type (2)',
                      'array type index string type (3)'
                    ]
                  },
                  {
                    type: 'boolean',
                    enum: [true, false]
                  },
                  {
                    type: 'null',
                    enum: [null]
                  }
                ]
              }

              const values = {
                '#/0': '2',
                '#/1': '2',
                '#/2': '1',
                '#/3': '0'
              }

              return expect(transform(schema, values))
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
                          required: false,
                          type: 'number',
                          schema: {
                            type: 'number',
                            enum: [
                              1,
                              2,
                              3
                            ]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0,
                          selectedIndex: 2
                        },
                        elements: {
                          enum: {
                            items: [
                              1,
                              2,
                              3
                            ],
                            name: '#/0',
                            required: false,
                            selectedIndex: 2
                          }
                        }
                      },
                      {
                        meta: {
                          required: false,
                          type: 'string',
                          schema: {
                            type: 'string',
                            enum: [
                              'array type index string type (1)',
                              'array type index string type (2)',
                              'array type index string type (3)'
                            ]
                          },
                          rootSchema: schema,
                          uri: '#/1',
                          item: 1,
                          selectedIndex: 2
                        },
                        elements: {
                          enum: {
                            items: [
                              'array type index string type (1)',
                              'array type index string type (2)',
                              'array type index string type (3)'
                            ],
                            name: '#/1',
                            required: false,
                            selectedIndex: 2
                          }
                        }
                      },
                      {
                        meta: {
                          required: false,
                          type: 'boolean',
                          schema: {
                            type: 'boolean',
                            enum: [true, false]
                          },
                          rootSchema: schema,
                          uri: '#/2',
                          item: 2,
                          selectedIndex: 1
                        },
                        elements: {
                          enum: {
                            items: [true, false],
                            name: '#/2',
                            required: false,
                            selectedIndex: 1
                          }
                        }
                      },
                      {
                        meta: {
                          required: false,
                          type: 'null',
                          schema: {
                            type: 'null',
                            enum: [null]
                          },
                          rootSchema: schema,
                          uri: '#/3',
                          item: 3,
                          selectedIndex: 0
                        },
                        elements: {
                          enum: {
                            items: [null],
                            name: '#/3',
                            required: false,
                            selectedIndex: 0
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `array` type with `items` is `number` type)', () => {
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

              const values = {
                '#/0/0': '2'
              }

              return expect(transform(schema, values))
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
                          required: false,
                          type: 'array',
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
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              elements: {
                                enum: {
                                  items: [
                                    1,
                                    2,
                                    3
                                  ],
                                  name: '#/0/0',
                                  required: false,
                                  selectedIndex: 2
                                }
                              },
                              meta: {
                                item: 0,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  enum: [
                                    1,
                                    2,
                                    3
                                  ],
                                  type: 'number'
                                },
                                selectedIndex: 2,
                                type: 'number',
                                uri: '#/0/0'
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `array` type with `items` is `string` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'array',
                    items: [
                      {
                        type: 'string',
                        enum: [
                          'array type index string type (1)',
                          'array type index string type (2)',
                          'array type index string type (3)'
                        ]
                      }
                    ]
                  }
                ]
              }

              const values = {
                '#/0/0': '2'
              }

              return expect(transform(schema, values))
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
                          required: false,
                          type: 'array',
                          schema: {
                            type: 'array',
                            items: [
                              {
                                type: 'string',
                                enum: [
                                  'array type index string type (1)',
                                  'array type index string type (2)',
                                  'array type index string type (3)'
                                ]
                              }
                            ]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              meta: {
                                item: 0,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  enum: [
                                    'array type index string type (1)',
                                    'array type index string type (2)',
                                    'array type index string type (3)'
                                  ],
                                  type: 'string'
                                },
                                selectedIndex: 2,
                                type: 'string',
                                uri: '#/0/0'
                              },
                              elements: {
                                enum: {
                                  items: [
                                    'array type index string type (1)',
                                    'array type index string type (2)',
                                    'array type index string type (3)'
                                  ],
                                  name: '#/0/0',
                                  required: false,
                                  selectedIndex: 2
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

            it('transforms `array` type schemas (`items` is `array` type with `items` is `array` type with `items` is `boolean` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'array',
                    items: [
                      {
                        type: 'boolean',
                        enum: [true, false]
                      }
                    ]
                  }
                ]
              }

              const values = {
                '#/0/0': '1'
              }

              return expect(transform(schema, values))
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
                          required: false,
                          type: 'array',
                          schema: {
                            type: 'array',
                            items: [
                              {
                                type: 'boolean',
                                enum: [true, false]
                              }
                            ]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              meta: {
                                item: 0,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  enum: [true, false],
                                  type: 'boolean'
                                },
                                selectedIndex: 1,
                                type: 'boolean',
                                uri: '#/0/0'
                              },
                              elements: {
                                enum: {
                                  items: [true, false],
                                  name: '#/0/0',
                                  required: false,
                                  selectedIndex: 1
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

            it('transforms `array` type schemas (`items` is `array` type with `items` is `array` type with `items` is `null` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'array',
                    items: [
                      {
                        type: 'null',
                        enum: [null]
                      }
                    ]
                  }
                ]
              }

              const values = {
                '#/0/0': '0'
              }

              return expect(transform(schema, values))
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
                          required: false,
                          type: 'array',
                          schema: {
                            type: 'array',
                            items: [
                              {
                                type: 'null',
                                enum: [null]
                              }
                            ]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              meta: {
                                item: 0,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  enum: [null],
                                  type: 'null'
                                },
                                selectedIndex: 0,
                                type: 'null',
                                uri: '#/0/0'
                              },
                              elements: {
                                enum: {
                                  items: [null],
                                  name: '#/0/0',
                                  required: false,
                                  selectedIndex: 0
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

            it('transforms `array` type schemas (`items` is `array` type with `items` is `array` type with `items` is `number` type and `string` type and `boolean` type and `null` type)', () => {
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
                      },
                      {
                        type: 'string',
                        enum: [
                          'array type index string type (1)',
                          'array type index string type (2)',
                          'array type index string type (3)'
                        ]
                      },
                      {
                        type: 'boolean',
                        enum: [true, false]
                      },
                      {
                        type: 'null',
                        enum: [null]
                      }
                    ]
                  }
                ]
              }

              const values = {
                '#/0/0': '2',
                '#/0/1': '2',
                '#/0/2': '1',
                '#/0/3': '0'
              }

              return expect(transform(schema, values))
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
                          required: false,
                          type: 'array',
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
                              },
                              {
                                type: 'string',
                                enum: [
                                  'array type index string type (1)',
                                  'array type index string type (2)',
                                  'array type index string type (3)'
                                ]
                              },
                              {
                                type: 'boolean',
                                enum: [true, false]
                              },
                              {
                                type: 'null',
                                enum: [null]
                              }
                            ]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              elements: {
                                enum: {
                                  items: [
                                    1,
                                    2,
                                    3
                                  ],
                                  name: '#/0/0',
                                  required: false,
                                  selectedIndex: 2
                                }
                              },
                              meta: {
                                item: 0,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  enum: [
                                    1,
                                    2,
                                    3
                                  ],
                                  type: 'number'
                                },
                                selectedIndex: 2,
                                type: 'number',
                                uri: '#/0/0'
                              }
                            },
                            {
                              meta: {
                                item: 1,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  enum: [
                                    'array type index string type (1)',
                                    'array type index string type (2)',
                                    'array type index string type (3)'
                                  ],
                                  type: 'string'
                                },
                                selectedIndex: 2,
                                type: 'string',
                                uri: '#/0/1'
                              },
                              elements: {
                                enum: {
                                  items: [
                                    'array type index string type (1)',
                                    'array type index string type (2)',
                                    'array type index string type (3)'
                                  ],
                                  name: '#/0/1',
                                  required: false,
                                  selectedIndex: 2
                                }
                              }
                            },
                            {
                              meta: {
                                item: 2,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  enum: [true, false],
                                  type: 'boolean'
                                },
                                selectedIndex: 1,
                                type: 'boolean',
                                uri: '#/0/2'
                              },
                              elements: {
                                enum: {
                                  items: [true, false],
                                  name: '#/0/2',
                                  required: false,
                                  selectedIndex: 1
                                }
                              }
                            },
                            {
                              meta: {
                                item: 3,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  enum: [null],
                                  type: 'null'
                                },
                                selectedIndex: 0,
                                type: 'null',
                                uri: '#/0/3'
                              },
                              elements: {
                                enum: {
                                  items: [null],
                                  name: '#/0/3',
                                  required: false,
                                  selectedIndex: 0
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

            it('transforms `array` type schemas (`items` is `object` type with `properties`)', () => {
              const schema = {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    one: { type: 'string' },
                    two: { type: 'string' }
                  }
                }
              }

              const values = {
                '#/0/one': 'string',
                '#/0/two': 'string'
              }

              return expect(transform(schema, values))
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
                          required: false,
                          type: 'object',
                          schema: {
                            type: 'object',
                            properties: {
                              one: { type: 'string' },
                              two: { type: 'string' }
                            }
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              meta: {
                                name: 'one',
                                required: false,
                                type: 'string',
                                schema: { type: 'string' },
                                rootSchema: schema,
                                uri: '#/0/one',
                                value: 'string'
                              },
                              elements: {
                                field: {
                                  name: '#/0/one',
                                  required: false,
                                  value: 'string'
                                }
                              }
                            },
                            {
                              meta: {
                                name: 'two',
                                required: false,
                                type: 'string',
                                schema: { type: 'string' },
                                rootSchema: schema,
                                uri: '#/0/two',
                                value: 'string'
                              },
                              elements: {
                                field: {
                                  name: '#/0/two',
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

            it('transforms `array` type schemas (`items` is `object` type with `properties` and `required`)', () => {
              const schema = {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    one: { type: 'string' },
                    two: { type: 'string' }
                  },
                  required: [
                    'one'
                  ]
                }
              }

              const values = {
                '#/0/one': 'string',
                '#/0/two': 'string'
              }

              return expect(transform(schema, values))
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
                          required: false,
                          type: 'object',
                          schema: {
                            type: 'object',
                            properties: {
                              one: { type: 'string' },
                              two: { type: 'string' }
                            },
                            required: [
                              'one'
                            ]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              meta: {
                                name: 'one',
                                required: true,
                                type: 'string',
                                schema: { type: 'string' },
                                rootSchema: schema,
                                uri: '#/0/one',
                                value: 'string'
                              },
                              elements: {
                                field: {
                                  name: '#/0/one',
                                  required: true,
                                  value: 'string'
                                }
                              }
                            },
                            {
                              meta: {
                                name: 'two',
                                required: false,
                                type: 'string',
                                schema: { type: 'string' },
                                rootSchema: schema,
                                uri: '#/0/two',
                                value: 'string'
                              },
                              elements: {
                                field: {
                                  name: '#/0/two',
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

            it('transforms `array` type schemas (`items` is `boolean` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'boolean',
                    enum: [true, false]
                  }
                ]
              }

              const values = {
                '#/0': '1'
              }

              return expect(transform(schema, values))
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
                          required: false,
                          type: 'boolean',
                          schema: {
                            type: 'boolean',
                            enum: [true, false]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          selectedIndex: 1,
                          item: 0
                        },
                        elements: {
                          enum: {
                            items: [true, false],
                            name: '#/0',
                            required: false,
                            selectedIndex: 1
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `null` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'null',
                    enum: [null]
                  }
                ]
              }

              const values = {
                '#/0': '0'
              }

              return expect(transform(schema, values))
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
                          required: false,
                          type: 'null',
                          schema: {
                            type: 'null',
                            enum: [null]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          selectedIndex: 0,
                          item: 0
                        },
                        elements: {
                          enum: {
                            items: [null],
                            name: '#/0',
                            required: false,
                            selectedIndex: 0
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `number` type and `string` type and `boolean` type and `null` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'number',
                    enum: [1, 2, 3]
                  },
                  {
                    type: 'string',
                    enum: ['string (1)', 'string (2)', 'string (3)']
                  },
                  {
                    type: 'boolean',
                    enum: [true, false]
                  },
                  {
                    type: 'null',
                    enum: [null]
                  }
                ]
              }

              const values = {
                '#/0': '2',
                '#/1': '2',
                '#/2': '1',
                '#/3': '0'
              }

              return expect(transform(schema, values))
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
                          required: false,
                          type: 'number',
                          schema: {
                            type: 'number',
                            enum: [1, 2, 3]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          selectedIndex: 2,
                          item: 0
                        },
                        elements: {
                          enum: {
                            items: [1, 2, 3],
                            name: '#/0',
                            required: false,
                            selectedIndex: 2
                          }
                        }
                      },
                      {
                        meta: {
                          required: false,
                          type: 'string',
                          schema: {
                            type: 'string',
                            enum: ['string (1)', 'string (2)', 'string (3)']
                          },
                          rootSchema: schema,
                          uri: '#/1',
                          selectedIndex: 2,
                          item: 1
                        },
                        elements: {
                          enum: {
                            items: ['string (1)', 'string (2)', 'string (3)'],
                            name: '#/1',
                            required: false,
                            selectedIndex: 2
                          }
                        }
                      },
                      {
                        meta: {
                          required: false,
                          type: 'boolean',
                          schema: {
                            type: 'boolean',
                            enum: [true, false]
                          },
                          rootSchema: schema,
                          uri: '#/2',
                          selectedIndex: 1,
                          item: 2
                        },
                        elements: {
                          enum: {
                            items: [true, false],
                            name: '#/2',
                            required: false,
                            selectedIndex: 1
                          }
                        }
                      },
                      {
                        meta: {
                          required: false,
                          type: 'null',
                          schema: {
                            type: 'null',
                            enum: [null]
                          },
                          rootSchema: schema,
                          uri: '#/3',
                          selectedIndex: 0,
                          item: 3
                        },
                        elements: {
                          enum: {
                            items: [null],
                            name: '#/3',
                            required: false,
                            selectedIndex: 0
                          }
                        }
                      }
                    ]
                  }
                })
            })
          })

          describe('Without `enum`', () => {
            it('transforms `array` type schemas (`items` is `number` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'number'
                  }
                ]
              }

              const values = {
                '#/0': '1'
              }

              return expect(transform(schema, values))
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
                          required: false,
                          type: 'number',
                          schema: {
                            type: 'number'
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          value: '1',
                          item: 0
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: '1'
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `string` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'string'
                  }
                ]
              }

              const values = {
                '#/0': 'string'
              }

              return expect(transform(schema, values))
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
                          required: false,
                          type: 'string',
                          schema: {
                            type: 'string'
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          value: 'string',
                          item: 0
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: 'string'
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `number` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'number'
                  }
                ]
              }

              const values = {
                '#/0': '1'
              }

              return expect(transform(schema, values))
                .to.eql({
                  meta: {
                    type: 'array',
                    schema,
                    uri: '#/'
                  },
                  elements: {
                    fields: [
                      {
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: '1'
                          }
                        },
                        meta: {
                          item: 0,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            type: 'number'
                          },
                          value: '1',
                          type: 'number',
                          uri: '#/0'
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `string` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'string'
                  }
                ]
              }

              const values = {
                '#/0': 'string'
              }

              return expect(transform(schema, values))
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
                          item: 0,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            type: 'string'
                          },
                          value: 'string',
                          type: 'string',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: 'string'
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `boolean` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'boolean'
                  }
                ]
              }

              const values = {
                '#/0': 'false'
              }

              return expect(transform(schema, values))
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
                          item: 0,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            type: 'boolean'
                          },
                          value: 'false',
                          type: 'boolean',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: 'false'
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `null` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'null'
                  }
                ]
              }

              const values = {
                '#/0': 'null'
              }

              return expect(transform(schema, values))
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
                          item: 0,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            type: 'null'
                          },
                          value: 'null',
                          type: 'null',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: 'null'
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `number` type and `string` type and `boolean` type and `null` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'number'
                  },
                  {
                    type: 'string'
                  },
                  {
                    type: 'boolean'
                  },
                  {
                    type: 'null'
                  }
                ]
              }

              const values = {
                '#/0': '1',
                '#/1': 'string',
                '#/2': 'false',
                '#/3': 'null'
              }

              return expect(transform(schema, values))
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
                          item: 0,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            type: 'number'
                          },
                          value: '1',
                          type: 'number',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: '1'
                          }
                        }
                      },
                      {
                        meta: {
                          item: 1,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            type: 'string'
                          },
                          value: 'string',
                          type: 'string',
                          uri: '#/1'
                        },
                        elements: {
                          field: {
                            name: '#/1',
                            required: false,
                            value: 'string'
                          }
                        }
                      },
                      {
                        meta: {
                          item: 2,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            type: 'boolean'
                          },
                          value: 'false',
                          type: 'boolean',
                          uri: '#/2'
                        },
                        elements: {
                          field: {
                            name: '#/2',
                            required: false,
                            value: 'false'
                          }
                        }
                      },
                      {
                        meta: {
                          item: 3,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            type: 'null'
                          },
                          value: 'null',
                          type: 'null',
                          uri: '#/3'
                        },
                        elements: {
                          field: {
                            name: '#/3',
                            required: false,
                            value: 'null'
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `object` type with `properties`)', () => {
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

              const values = {
                '#/0/one': 'string',
                '#/0/two': '1'
              }

              return expect(transform(schema, values))
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
                          required: false,
                          type: 'object',
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
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              elements: {
                                field: {
                                  name: '#/0/one',
                                  required: false,
                                  value: 'string'
                                }
                              },
                              meta: {
                                name: 'one',
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  type: 'string'
                                },
                                value: 'string',
                                type: 'string',
                                uri: '#/0/one'
                              }
                            },
                            {
                              elements: {
                                field: {
                                  name: '#/0/two',
                                  required: false,
                                  value: '1'
                                }
                              },
                              meta: {
                                name: 'two',
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  type: 'number'
                                },
                                value: '1',
                                type: 'number',
                                uri: '#/0/two'
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `object` type with `properties` and `required`)', () => {
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

              const values = {
                '#/0/one': 'string',
                '#/0/two': '1'
              }

              return expect(transform(schema, values))
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
                          required: false,
                          type: 'object',
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
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              meta: {
                                name: 'one',
                                required: true,
                                rootSchema: schema,
                                schema: {
                                  type: 'string'
                                },
                                value: 'string',
                                type: 'string',
                                uri: '#/0/one'
                              },
                              elements: {
                                field: {
                                  name: '#/0/one',
                                  required: true,
                                  value: 'string'
                                }
                              }
                            },
                            {
                              meta: {
                                name: 'two',
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  type: 'number'
                                },
                                value: '1',
                                type: 'number',
                                uri: '#/0/two'
                              },
                              elements: {
                                field: {
                                  name: '#/0/two',
                                  required: false,
                                  value: '1'
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

            it('transforms `array` type schemas (`items` is `array` type with `items` is `array` type with `items` is `number` type)', () => {
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

              const values = {
                '#/0/0': '1'
              }

              return expect(transform(schema, values))
                .to.eql({
                  meta: {
                    type: 'array',
                    schema,
                    uri: '#/'
                  },
                  elements: {
                    fields: [
                      {
                        elements: {
                          fields: [
                            {
                              elements: {
                                field: {
                                  name: '#/0/0',
                                  required: false,
                                  value: '1'
                                }
                              },
                              meta: {
                                item: 0,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  type: 'number'
                                },
                                value: '1',
                                type: 'number',
                                uri: '#/0/0'
                              }
                            }
                          ]
                        },
                        meta: {
                          required: false,
                          type: 'array',
                          schema: {
                            type: 'array',
                            items: [
                              {
                                type: 'number'
                              }
                            ]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `array` type with `items` is `string` type)', () => {
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

              const values = {
                '#/0/0': 'string'
              }

              return expect(transform(schema, values))
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
                          required: false,
                          type: 'array',
                          schema: {
                            type: 'array',
                            items: [
                              {
                                type: 'string'
                              }
                            ]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              meta: {
                                item: 0,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  type: 'string'
                                },
                                value: 'string',
                                type: 'string',
                                uri: '#/0/0'
                              },
                              elements: {
                                field: {
                                  name: '#/0/0',
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

            it('transforms `array` type schemas (`items` is `array` type with `items` is `array` type with `items` is `boolean` type)', () => {
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

              const values = {
                '#/0/0': 'false'
              }

              return expect(transform(schema, values))
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
                          required: false,
                          type: 'array',
                          schema: {
                            type: 'array',
                            items: [
                              {
                                type: 'boolean'
                              }
                            ]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              meta: {
                                item: 0,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  type: 'boolean'
                                },
                                value: 'false',
                                type: 'boolean',
                                uri: '#/0/0'
                              },
                              elements: {
                                field: {
                                  name: '#/0/0',
                                  required: false,
                                  value: 'false'
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

            it('transforms `array` type schemas (`items` is `array` type with `items` is `array` type with `items` is `null` type)', () => {
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

              const values = {
                '#/0/0': 'null'
              }

              return expect(transform(schema, values))
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
                          required: false,
                          type: 'array',
                          schema: {
                            type: 'array',
                            items: [
                              {
                                type: 'null'
                              }
                            ]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              meta: {
                                item: 0,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  type: 'null'
                                },
                                value: 'null',
                                type: 'null',
                                uri: '#/0/0'
                              },
                              elements: {
                                field: {
                                  name: '#/0/0',
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

            it('transforms `array` type schemas (`items` is `array` type with `items` is `array` type with `items` is `number` type and `string` type and `boolean` type and `null` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'array',
                    items: [
                      {
                        type: 'number'
                      },
                      {
                        type: 'string'
                      },
                      {
                        type: 'boolean'
                      },
                      {
                        type: 'null'
                      }
                    ]
                  }
                ]
              }

              const values = {
                '#/0/0': '1',
                '#/0/1': 'string',
                '#/0/2': 'false',
                '#/0/3': 'null'
              }

              return expect(transform(schema, values))
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
                          required: false,
                          type: 'array',
                          schema: {
                            type: 'array',
                            items: [
                              {
                                type: 'number'
                              },
                              {
                                type: 'string'
                              },
                              {
                                type: 'boolean'
                              },
                              {
                                type: 'null'
                              }
                            ]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              meta: {
                                item: 0,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  type: 'number'
                                },
                                value: '1',
                                type: 'number',
                                uri: '#/0/0'
                              },
                              elements: {
                                field: {
                                  name: '#/0/0',
                                  required: false,
                                  value: '1'
                                }
                              }
                            },
                            {
                              meta: {
                                item: 1,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  type: 'string'
                                },
                                value: 'string',
                                type: 'string',
                                uri: '#/0/1'
                              },
                              elements: {
                                field: {
                                  name: '#/0/1',
                                  required: false,
                                  value: 'string'
                                }
                              }
                            },
                            {
                              meta: {
                                item: 2,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  type: 'boolean'
                                },
                                value: 'false',
                                type: 'boolean',
                                uri: '#/0/2'
                              },
                              elements: {
                                field: {
                                  name: '#/0/2',
                                  required: false,
                                  value: 'false'
                                }
                              }
                            },
                            {
                              meta: {
                                item: 3,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  type: 'null'
                                },
                                value: 'null',
                                type: 'null',
                                uri: '#/0/3'
                              },
                              elements: {
                                field: {
                                  name: '#/0/3',
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

            it('transforms `array` type schemas (`items` is `object` type with `properties`)', () => {
              const schema = {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    one: { type: 'string' },
                    two: { type: 'string' }
                  }
                }
              }

              const values = {
                '#/0/one': 'string',
                '#/0/two': 'string'
              }

              return expect(transform(schema, values))
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
                          required: false,
                          type: 'object',
                          schema: {
                            type: 'object',
                            properties: {
                              one: { type: 'string' },
                              two: { type: 'string' }
                            }
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              meta: {
                                name: 'one',
                                required: false,
                                type: 'string',
                                schema: { type: 'string' },
                                rootSchema: schema,
                                uri: '#/0/one',
                                value: 'string'
                              },
                              elements: {
                                field: {
                                  name: '#/0/one',
                                  required: false,
                                  value: 'string'
                                }
                              }
                            },
                            {
                              meta: {
                                name: 'two',
                                required: false,
                                type: 'string',
                                schema: { type: 'string' },
                                rootSchema: schema,
                                uri: '#/0/two',
                                value: 'string'
                              },
                              elements: {
                                field: {
                                  name: '#/0/two',
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

            it('transforms `array` type schemas (`items` is `object` type with `properties` and `required`)', () => {
              const schema = {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    one: { type: 'string' },
                    two: { type: 'string' }
                  },
                  required: [
                    'one'
                  ]
                }
              }

              const values = {
                '#/0/one': 'string',
                '#/0/two': 'string'
              }

              return expect(transform(schema, values))
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
                          required: false,
                          type: 'object',
                          schema: {
                            type: 'object',
                            properties: {
                              one: { type: 'string' },
                              two: { type: 'string' }
                            },
                            required: [
                              'one'
                            ]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              meta: {
                                name: 'one',
                                required: true,
                                type: 'string',
                                schema: { type: 'string' },
                                rootSchema: schema,
                                uri: '#/0/one',
                                value: 'string'
                              },
                              elements: {
                                field: {
                                  name: '#/0/one',
                                  required: true,
                                  value: 'string'
                                }
                              }
                            },
                            {
                              meta: {
                                name: 'two',
                                required: false,
                                type: 'string',
                                schema: { type: 'string' },
                                rootSchema: schema,
                                uri: '#/0/two',
                                value: 'string'
                              },
                              elements: {
                                field: {
                                  name: '#/0/two',
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

            it('transforms `array` type schemas (`items` is `boolean` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'boolean'
                  }
                ]
              }

              const values = {
                '#/0': 'true'
              }

              return expect(transform(schema, values))
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
                          required: false,
                          type: 'boolean',
                          schema: {
                            type: 'boolean'
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          value: 'true',
                          item: 0
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: 'true'
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `null` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'null'
                  }
                ]
              }

              const values = {
                '#/0': 'null'
              }

              return expect(transform(schema, values))
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
                          required: false,
                          type: 'null',
                          schema: {
                            type: 'null'
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          value: 'null',
                          item: 0
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: 'null'
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `number` type and `string` type and `boolean` type and `null` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'number'
                  },
                  {
                    type: 'string'
                  },
                  {
                    type: 'boolean'
                  },
                  {
                    type: 'null'
                  }
                ]
              }

              const values = {
                '#/0': '1',
                '#/1': 'string',
                '#/2': 'true',
                '#/3': 'null'
              }

              return expect(transform(schema, values))
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
                          required: false,
                          type: 'number',
                          schema: {
                            type: 'number'
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          value: '1',
                          item: 0
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: '1'
                          }
                        }
                      },
                      {
                        meta: {
                          required: false,
                          type: 'string',
                          schema: {
                            type: 'string'
                          },
                          rootSchema: schema,
                          uri: '#/1',
                          value: 'string',
                          item: 1
                        },
                        elements: {
                          field: {
                            name: '#/1',
                            required: false,
                            value: 'string'
                          }
                        }
                      },
                      {
                        meta: {
                          required: false,
                          type: 'boolean',
                          schema: {
                            type: 'boolean'
                          },
                          rootSchema: schema,
                          uri: '#/2',
                          value: 'true',
                          item: 2
                        },
                        elements: {
                          field: {
                            name: '#/2',
                            required: false,
                            value: 'true'
                          }
                        }
                      },
                      {
                        meta: {
                          required: false,
                          type: 'null',
                          schema: {
                            type: 'null'
                          },
                          rootSchema: schema,
                          uri: '#/3',
                          value: 'null',
                          item: 3
                        },
                        elements: {
                          field: {
                            name: '#/3',
                            required: false,
                            value: 'null'
                          }
                        }
                      }
                    ]
                  }
                })
            })
          })
        })

        describe('Without `items`', () => {
          it('transforms `array` type schemas', () => {
            const schema = { type: 'array' }

            const values = {}

            return expect(transform(schema, values))
              .to.eql({
                meta: {
                  type: 'array',
                  schema,
                  uri: '#/'
                },
                elements: {
                  fields: []
                }
              })
          })
        })
      })

      describe('Transforming `object` type schemas', () => {
        describe('With `properties`', () => {
          describe('With `enum`', () => {
            it('transforms `object` type schemas (with `properties`)', () => {
              const schema = {
                type: 'object',
                properties: {
                  one: { type: 'string', enum: ['object type key string (1)', 'object type key string (2)'] },
                  two: { type: 'string', enum: ['object type key string (1)', 'object type key string (2)'] }
                }
              }

              const values = {
                '#/one': '0',
                '#/two': '1'
              }

              return expect(transform(schema, values))
                .to.eql({
                  meta: {
                    type: 'object',
                    schema,
                    uri: '#/'
                  },
                  elements: {
                    fields: [
                      {
                        meta: {
                          name: 'one',
                          required: false,
                          type: 'string',
                          schema: {
                            type: 'string',
                            enum: ['object type key string (1)', 'object type key string (2)']
                          },
                          rootSchema: schema,
                          uri: '#/one',
                          selectedIndex: 0
                        },
                        elements: {
                          enum: {
                            items: ['object type key string (1)', 'object type key string (2)'],
                            name: '#/one',
                            required: false,
                            selectedIndex: 0
                          }
                        }
                      },
                      {
                        meta: {
                          name: 'two',
                          required: false,
                          type: 'string',
                          schema: {
                            type: 'string',
                            enum: ['object type key string (1)', 'object type key string (2)']
                          },
                          rootSchema: schema,
                          uri: '#/two',
                          selectedIndex: 1
                        },
                        elements: {
                          enum: {
                            items: ['object type key string (1)', 'object type key string (2)'],
                            name: '#/two',
                            required: false,
                            selectedIndex: 1
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `object` type schemas (with `properties` and `required`)', () => {
              const schema = {
                type: 'object',
                properties: {
                  one: { type: 'string', enum: ['object type key string (1)', 'object type key string (2)'] },
                  two: { type: 'string', enum: ['object type key string (1)', 'object type key string (2)'] }
                },
                required: [
                  'one'
                ]
              }

              const values = {
                '#/one': '0',
                '#/two': '1'
              }

              return expect(transform(schema, values))
                .to.eql({
                  meta: {
                    type: 'object',
                    schema,
                    uri: '#/'
                  },
                  elements: {
                    fields: [
                      {
                        meta: {
                          name: 'one',
                          required: true,
                          rootSchema: schema,
                          schema: {
                            type: 'string',
                            enum: ['object type key string (1)', 'object type key string (2)']
                          },
                          type: 'string',
                          uri: '#/one',
                          selectedIndex: 0
                        },
                        elements: {
                          enum: {
                            items: ['object type key string (1)', 'object type key string (2)'],
                            name: '#/one',
                            required: true,
                            selectedIndex: 0
                          }
                        }
                      },
                      {
                        meta: {
                          name: 'two',
                          required: false,
                          rootSchema: schema,
                          schema: {
                            type: 'string',
                            enum: ['object type key string (1)', 'object type key string (2)']
                          },
                          type: 'string',
                          uri: '#/two',
                          selectedIndex: 1
                        },
                        elements: {
                          enum: {
                            items: ['object type key string (1)', 'object type key string (2)'],
                            name: '#/two',
                            required: false,
                            selectedIndex: 1
                          }
                        }
                      }
                    ]
                  }
                })
            })
          })

          describe('Without `enum`', () => {
            it('transforms `object` type schemas (with `properties`)', () => {
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

              return expect(transform(schema, values))
                .to.eql({
                  meta: {
                    type: 'object',
                    schema,
                    uri: '#/'
                  },
                  elements: {
                    fields: [
                      {
                        meta: {
                          name: 'one',
                          required: false,
                          type: 'string',
                          schema: {
                            type: 'string'
                          },
                          rootSchema: schema,
                          uri: '#/one',
                          value: 'string'
                        },
                        elements: {
                          field: {
                            name: '#/one',
                            required: false,
                            value: 'string'
                          }
                        }
                      },
                      {
                        meta: {
                          name: 'two',
                          required: false,
                          type: 'string',
                          schema: {
                            type: 'string'
                          },
                          rootSchema: schema,
                          uri: '#/two',
                          value: 'string'
                        },
                        elements: {
                          field: {
                            name: '#/two',
                            required: false,
                            value: 'string'
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `object` type schemas (with `properties` and `required`)', () => {
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

              return expect(transform(schema, values))
                .to.eql({
                  meta: {
                    type: 'object',
                    schema,
                    uri: '#/'
                  },
                  elements: {
                    fields: [
                      {
                        meta: {
                          name: 'one',
                          required: true,
                          rootSchema: schema,
                          schema: { type: 'string' },
                          type: 'string',
                          uri: '#/one',
                          value: 'string'
                        },
                        elements: {
                          field: {
                            name: '#/one',
                            required: true,
                            value: 'string'
                          }
                        }
                      },
                      {
                        meta: {
                          name: 'two',
                          required: false,
                          rootSchema: schema,
                          schema: { type: 'string' },
                          type: 'string',
                          uri: '#/two',
                          value: 'string'
                        },
                        elements: {
                          field: {
                            name: '#/two',
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

        describe('Without `properties`', () => {
          it('transforms `object` type schemas', () => {
            const schema = { type: 'object' }

            const values = {}

            return expect(transform(schema, values))
              .to.eql({
                meta: {
                  type: 'object',
                  schema,
                  uri: '#/'
                },
                elements: {
                  fields: []
                }
              })
          })
        })
      })

      describe('Transforming `boolean` type schemas', () => {
        describe('With `enum`', () => {
          it('transforms `boolean` type schemas', () => {
            const schema = { type: 'boolean', enum: [true, false] }

            const values = {
              '#/': '1'
            }

            return expect(transform(schema, values))
              .to.eql({
                meta: {
                  type: 'boolean',
                  schema,
                  uri: '#/',
                  selectedIndex: 1
                },
                elements: {
                  enum: {
                    name: '#/',
                    items: [true, false],
                    selectedIndex: 1
                  }
                }
              })
          })
        })

        describe('With `anyOf`', () => {
          it('transforms `boolean` type schemas', () => {
            const schema = { type: 'boolean', anyOf: [{ default: true }, { default: false }, { default: true }] }

            const values = {
              '#/': '2'
            }

            return expect(transform(schema, values))
              .to.eql({
                meta: {
                  type: 'boolean',
                  schema,
                  uri: '#/',
                  selectedIndex: 2
                },
                elements: {
                  anyOf: {
                    items: [
                      {
                        meta: {
                          type: 'boolean',
                          rootSchema: schema,
                          schema: { default: true },
                          item: 0,
                          required: false,
                          defaultValue: 'true',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: 'true'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'boolean',
                          rootSchema: schema,
                          schema: { default: false },
                          item: 1,
                          required: false,
                          defaultValue: 'false',
                          uri: '#/1'
                        },
                        elements: {
                          field: {
                            name: '#/1',
                            required: false,
                            value: 'false'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'boolean',
                          rootSchema: schema,
                          schema: { default: true },
                          item: 2,
                          required: false,
                          defaultValue: 'true',
                          uri: '#/2'
                        },
                        elements: {
                          field: {
                            name: '#/2',
                            required: false,
                            value: 'true'
                          }
                        }
                      }
                    ],
                    name: '#/',
                    selectedIndex: 2
                  }
                }
              })
          })
        })

        describe('With `oneOf`', () => {
          it('transforms `boolean` type schemas', () => {
            const schema = { type: 'boolean', oneOf: [{ default: true }, { default: false }, { default: true }] }

            const values = {
              '#/': '2'
            }

            return expect(transform(schema, values))
              .to.eql({
                meta: {
                  type: 'boolean',
                  schema,
                  uri: '#/',
                  selectedIndex: 2
                },
                elements: {
                  oneOf: {
                    items: [
                      {
                        meta: {
                          type: 'boolean',
                          rootSchema: schema,
                          schema: { default: true },
                          item: 0,
                          required: false,
                          defaultValue: 'true',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: 'true'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'boolean',
                          rootSchema: schema,
                          schema: { default: false },
                          item: 1,
                          required: false,
                          defaultValue: 'false',
                          uri: '#/1'
                        },
                        elements: {
                          field: {
                            name: '#/1',
                            required: false,
                            value: 'false'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'boolean',
                          rootSchema: schema,
                          schema: { default: true },
                          item: 2,
                          required: false,
                          defaultValue: 'true',
                          uri: '#/2'
                        },
                        elements: {
                          field: {
                            name: '#/2',
                            required: false,
                            value: 'true'
                          }
                        }
                      }
                    ],
                    name: '#/',
                    selectedIndex: 2
                  }
                }
              })
          })
        })

        describe('With `allOf`', () => {
          it('transforms `boolean` type schemas', () => {
            const schema = { type: 'boolean', allOf: [{ default: true }] }

            const values = {
              '#/': 'true'
            }

            return expect(transform(schema, values))
              .to.eql({
                meta: {
                  type: 'boolean',
                  schema,
                  uri: '#/',
                  defaultValue: 'true',
                  value: 'true'
                },
                elements: {
                  field: {
                    name: '#/',
                    value: 'true'
                  }
                }
              })
          })
        })

        describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
          it('transforms `boolean` type schemas', () => {
            const schema = { type: 'boolean' }

            const values = {
              '#/': 'true'
            }

            return expect(transform(schema, values))
              .to.eql({
                meta: {
                  type: 'boolean',
                  schema,
                  uri: '#/',
                  value: 'true'
                },
                elements: {
                  field: {
                    name: '#/',
                    value: 'true'
                  }
                }
              })
          })
        })
      })

      describe('Transforming `null` type schemas', () => {
        describe('With `enum`', () => {
          it('transforms `null` type schemas', () => {
            const schema = { type: 'null', enum: [null] }

            const values = {
              '#/': '0'
            }

            return expect(transform(schema, values))
              .to.eql({
                meta: {
                  type: 'null',
                  schema,
                  uri: '#/',
                  selectedIndex: 0
                },
                elements: {
                  enum: {
                    name: '#/',
                    items: [null],
                    selectedIndex: 0
                  }
                }
              })
          })
        })

        describe('With `anyOf`', () => {
          it('transforms `null` type schemas', () => {
            const schema = { type: 'null', anyOf: [{ default: null }, { default: null }, { default: null }] }

            const values = {
              '#/': '2'
            }

            return expect(transform(schema, values))
              .to.eql({
                meta: {
                  type: 'null',
                  schema,
                  uri: '#/',
                  selectedIndex: 2
                },
                elements: {
                  anyOf: {
                    items: [
                      {
                        meta: {
                          type: 'null',
                          rootSchema: schema,
                          schema: { default: null },
                          item: 0,
                          required: false,
                          defaultValue: 'null',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: 'null'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'null',
                          rootSchema: schema,
                          schema: { default: null },
                          item: 1,
                          required: false,
                          defaultValue: 'null',
                          uri: '#/1'
                        },
                        elements: {
                          field: {
                            name: '#/1',
                            required: false,
                            value: 'null'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'null',
                          rootSchema: schema,
                          schema: { default: null },
                          item: 2,
                          required: false,
                          defaultValue: 'null',
                          uri: '#/2'
                        },
                        elements: {
                          field: {
                            name: '#/2',
                            required: false,
                            value: 'null'
                          }
                        }
                      }
                    ],
                    name: '#/',
                    selectedIndex: 2
                  }
                }
              })
          })
        })

        describe('With `oneOf`', () => {
          it('transforms `null` type schemas', () => {
            const schema = { type: 'null', oneOf: [{ default: null }, { default: null }, { default: null }] }

            const values = {
              '#/': '2'
            }

            return expect(transform(schema, values))
              .to.eql({
                meta: {
                  type: 'null',
                  schema,
                  uri: '#/',
                  selectedIndex: 2
                },
                elements: {
                  oneOf: {
                    items: [
                      {
                        meta: {
                          type: 'null',
                          rootSchema: schema,
                          schema: { default: null },
                          item: 0,
                          required: false,
                          defaultValue: 'null',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: 'null'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'null',
                          rootSchema: schema,
                          schema: { default: null },
                          item: 1,
                          required: false,
                          defaultValue: 'null',
                          uri: '#/1'
                        },
                        elements: {
                          field: {
                            name: '#/1',
                            required: false,
                            value: 'null'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'null',
                          rootSchema: schema,
                          schema: { default: null },
                          item: 2,
                          required: false,
                          defaultValue: 'null',
                          uri: '#/2'
                        },
                        elements: {
                          field: {
                            name: '#/2',
                            required: false,
                            value: 'null'
                          }
                        }
                      }
                    ],
                    name: '#/',
                    selectedIndex: 2
                  }
                }
              })
          })
        })

        describe('With `allOf`', () => {
          it('transforms `null` type schemas', () => {
            const schema = { type: 'null', allOf: [{ default: null }] }

            const values = {
              '#/': 'null'
            }

            return expect(transform(schema, values))
              .to.eql({
                meta: {
                  type: 'null',
                  schema,
                  defaultValue: 'null',
                  value: 'null',
                  uri: '#/'
                },
                elements: {
                  field: {
                    name: '#/',
                    value: 'null'
                  }
                }
              })
          })
        })

        describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
          it('transforms `null` type schemas', () => {
            const schema = { type: 'null' }

            const values = {
              '#/': 'null'
            }

            return expect(transform(schema, values))
              .to.eql({
                meta: {
                  type: 'null',
                  schema,
                  uri: '#/',
                  value: 'null'
                },
                elements: {
                  field: {
                    name: '#/',
                    value: 'null'
                  }
                }
              })
          })
        })
      })
    })
  })

  describe('Without values', () => {
    describe('With params', () => {
      it('transforms', () => {
        const schema = {
          $id: 'https://example.com/geographical-location.schema.json',
          $schema: 'http://json-schema.org/draft-07/schema#',
          title: 'Latitude and Longitude',
          description: 'A geographical coordinate',
          required: ['latitude', 'longitude'],
          type: 'object',
          properties: {
            stringTypeSubSchema: {
              title: 'String type sub schema',
              type: 'string',
              minLength: 1,
              maxLength: 10
            },
            numberTypeSubSchema: {
              title: 'Number type sub schema',
              type: 'number',
              min: 1,
              max: 10
            },
            arrayTypeSubSchema: {
              title: 'Array type sub schema',
              type: 'array',
              items: [
                {
                  type: 'string'
                }
              ]
            },
            objectTypeSubSchema: {
              title: 'Object type sub schema',
              type: 'object',
              properties: {
                one: { type: 'string' },
                two: { type: 'number' }
              }
            },
            booleanTypeSubSchema: {
              title: 'Boolean type sub schema',
              type: 'boolean'
            },
            nullTypeSubSchema: {
              title: 'Null type sub schema',
              type: 'null'
            },
            latitude: {
              title: 'Latitude',
              type: 'number',
              minimum: -90,
              maximum: 90,
              multipleOf: 42.0
            },
            longitude: {
              title: 'Longitude',
              type: 'number',
              minimum: -180,
              maximum: 180,
              exclusiveMinimum: true,
              exclusiveMaximum: true
            }
          }
        }

        const values = {}

        const params = {
          '#/stringTypeSubSchema': { meta: { component: 'string component' } },
          '#/numberTypeSubSchema': { meta: { component: 'number component' } },
          '#/arrayTypeSubSchema': { meta: { component: 'array component' } },
          '#/arrayTypeSubSchema/0': { meta: { component: 'array type index component' } },
          '#/objectTypeSubSchema': { meta: { component: 'object component' } },
          '#/objectTypeSubSchema/one': { meta: { component: 'object type key component' } },
          '#/objectTypeSubSchema/two': { meta: { component: 'object type key component' } },
          '#/booleanTypeSubSchema': { meta: { component: 'boolean component' } },
          '#/nullTypeSubSchema': { meta: { component: 'null component' } }
        }

        return expect(transform(schema, values, params))
          .to.eql({
            meta: {
              schema,
              type: 'object',
              uri: '#/'
            },
            elements: {
              description: 'A geographical coordinate',
              fields: [
                {
                  meta: {
                    maxLength: 10,
                    minLength: 1,
                    name: 'stringTypeSubSchema',
                    required: false,
                    rootSchema: schema,
                    schema: {
                      maxLength: 10,
                      minLength: 1,
                      title: 'String type sub schema',
                      type: 'string'
                    },
                    type: 'string',
                    uri: '#/stringTypeSubSchema',
                    component: 'string component'
                  },
                  elements: {
                    field: {
                      name: '#/stringTypeSubSchema',
                      maxLength: 10,
                      minLength: 1,
                      required: false
                    },
                    title: 'String type sub schema'
                  }
                },
                {
                  meta: {
                    name: 'numberTypeSubSchema',
                    required: false,
                    rootSchema: schema,
                    schema: {
                      max: 10,
                      min: 1,
                      title: 'Number type sub schema',
                      type: 'number'
                    },
                    type: 'number',
                    uri: '#/numberTypeSubSchema',
                    component: 'number component'
                  },
                  elements: {
                    field: {
                      name: '#/numberTypeSubSchema',
                      required: false
                    },
                    title: 'Number type sub schema'
                  }
                },
                {
                  meta: {
                    name: 'arrayTypeSubSchema',
                    required: false,
                    rootSchema: schema,
                    schema: {
                      items: [
                        {
                          type: 'string'
                        }
                      ],
                      title: 'Array type sub schema',
                      type: 'array'
                    },
                    type: 'array',
                    uri: '#/arrayTypeSubSchema',
                    component: 'array component'
                  },
                  elements: {
                    fields: [
                      {
                        meta: {
                          required: false,
                          rootSchema: schema,
                          schema: {
                            type: 'string'
                          },
                          type: 'string',
                          uri: '#/arrayTypeSubSchema/0',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          field: {
                            name: '#/arrayTypeSubSchema/0',
                            required: false
                          }
                        }
                      }
                    ],
                    title: 'Array type sub schema'
                  }
                },
                {
                  meta: {
                    name: 'objectTypeSubSchema',
                    required: false,
                    rootSchema: schema,
                    schema: {
                      properties: {
                        one: { type: 'string' },
                        two: { type: 'number' }
                      },
                      title: 'Object type sub schema',
                      type: 'object'
                    },
                    type: 'object',
                    uri: '#/objectTypeSubSchema',
                    component: 'object component'
                  },
                  elements: {
                    fields: [
                      {
                        meta: {
                          name: 'one',
                          required: false,
                          rootSchema: schema,
                          schema: {
                            type: 'string'
                          },
                          type: 'string',
                          uri: '#/objectTypeSubSchema/one',
                          component: 'object type key component'
                        },
                        elements: {
                          field: {
                            name: '#/objectTypeSubSchema/one',
                            required: false
                          }
                        }
                      },
                      {
                        meta: {
                          name: 'two',
                          required: false,
                          rootSchema: schema,
                          schema: {
                            type: 'number'
                          },
                          type: 'number',
                          uri: '#/objectTypeSubSchema/two',
                          component: 'object type key component'
                        },
                        elements: {
                          field: {
                            name: '#/objectTypeSubSchema/two',
                            required: false
                          }
                        }
                      }
                    ],
                    title: 'Object type sub schema'
                  }
                },
                {
                  meta: {
                    name: 'booleanTypeSubSchema',
                    required: false,
                    rootSchema: schema,
                    schema: {
                      title: 'Boolean type sub schema',
                      type: 'boolean'
                    },
                    type: 'boolean',
                    uri: '#/booleanTypeSubSchema',
                    component: 'boolean component'
                  },
                  elements: {
                    field: {
                      name: '#/booleanTypeSubSchema',
                      required: false
                    },
                    title: 'Boolean type sub schema'
                  }
                },
                {
                  meta: {
                    name: 'nullTypeSubSchema',
                    required: false,
                    rootSchema: schema,
                    schema: {
                      title: 'Null type sub schema',
                      type: 'null'
                    },
                    type: 'null',
                    uri: '#/nullTypeSubSchema',
                    component: 'null component'
                  },
                  elements: {
                    field: {
                      name: '#/nullTypeSubSchema',
                      required: false
                    },
                    title: 'Null type sub schema'
                  }
                },
                {
                  meta: {
                    max: 90,
                    min: -90,
                    name: 'latitude',
                    required: true,
                    rootSchema: schema,
                    schema: {
                      maximum: 90,
                      minimum: -90,
                      multipleOf: 42,
                      title: 'Latitude',
                      type: 'number'
                    },
                    step: 42,
                    type: 'number',
                    uri: '#/latitude'
                  },
                  elements: {
                    field: {
                      name: '#/latitude',
                      max: 90,
                      min: -90,
                      required: true,
                      step: 42
                    },
                    title: 'Latitude'
                  }
                },
                {
                  meta: {
                    isExclusiveMax: true,
                    isExclusiveMin: true,
                    max: 180,
                    min: -180,
                    name: 'longitude',
                    required: true,
                    rootSchema: schema,
                    schema: {
                      exclusiveMaximum: true,
                      exclusiveMinimum: true,
                      maximum: 180,
                      minimum: -180,
                      title: 'Longitude',
                      type: 'number'
                    },
                    type: 'number',
                    uri: '#/longitude'
                  },
                  elements: {
                    field: {
                      name: '#/longitude',
                      max: 180,
                      min: -180,
                      required: true
                    },
                    title: 'Longitude'
                  }
                }
              ],
              title: 'Latitude and Longitude'
            }
          })
      })

      describe('Transforming `number` type schemas', () => {
        describe('With `enum`', () => {
          it('transforms `number` type schemas', () => {
            const schema = { type: 'number', enum: [1, 2, 3] }

            const values = {}

            const params = {
              '#/': { meta: { component: 'number component' } }
            }

            return expect(transform(schema, values, params))
              .to.eql({
                meta: {
                  type: 'number',
                  schema,
                  uri: '#/',
                  component: 'number component'
                },
                elements: {
                  enum: {
                    items: [1, 2, 3],
                    name: '#/'
                  }
                }
              })
          })
        })

        describe('With `anyOf`', () => {
          it('transforms `number` type schemas', () => {
            const schema = { type: 'number', anyOf: [{ default: 1 }, { default: 2 }, { default: 3 }] }

            const values = {}

            const params = {
              '#/': { meta: { component: 'number component' } }
            }

            return expect(transform(schema, values, params))
              .to.eql({
                meta: {
                  type: 'number',
                  schema,
                  uri: '#/',
                  component: 'number component'
                },
                elements: {
                  anyOf: {
                    items: [
                      {
                        meta: {
                          type: 'number',
                          rootSchema: schema,
                          schema: { default: 1 },
                          item: 0,
                          required: false,
                          defaultValue: '1',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: '1'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'number',
                          rootSchema: schema,
                          schema: { default: 2 },
                          item: 1,
                          required: false,
                          defaultValue: '2',
                          uri: '#/1'
                        },
                        elements: {
                          field: {
                            name: '#/1',
                            required: false,
                            value: '2'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'number',
                          rootSchema: schema,
                          schema: { default: 3 },
                          item: 2,
                          required: false,
                          defaultValue: '3',
                          uri: '#/2'
                        },
                        elements: {
                          field: {
                            name: '#/2',
                            required: false,
                            value: '3'
                          }
                        }
                      }
                    ],
                    name: '#/'
                  }
                }
              })
          })
        })

        describe('With `oneOf`', () => {
          it('transforms `number` type schemas', () => {
            const schema = { type: 'number', oneOf: [{ default: 1 }, { default: 2 }, { default: 3 }] }

            const values = {}

            const params = {
              '#/': { meta: { component: 'number component' } }
            }

            return expect(transform(schema, values, params))
              .to.eql({
                meta: {
                  type: 'number',
                  schema,
                  uri: '#/',
                  component: 'number component'
                },
                elements: {
                  oneOf: {
                    items: [
                      {
                        meta: {
                          type: 'number',
                          rootSchema: schema,
                          schema: { default: 1 },
                          item: 0,
                          required: false,
                          defaultValue: '1',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: '1'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'number',
                          rootSchema: schema,
                          schema: { default: 2 },
                          item: 1,
                          required: false,
                          defaultValue: '2',
                          uri: '#/1'
                        },
                        elements: {
                          field: {
                            name: '#/1',
                            required: false,
                            value: '2'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'number',
                          rootSchema: schema,
                          schema: { default: 3 },
                          item: 2,
                          required: false,
                          defaultValue: '3',
                          uri: '#/2'
                        },
                        elements: {
                          field: {
                            name: '#/2',
                            required: false,
                            value: '3'
                          }
                        }
                      }
                    ],
                    name: '#/'
                  }
                }
              })
          })
        })

        describe('With `allOf`', () => {
          it('transforms `number` type schemas', () => {
            const schema = { type: 'number', allOf: [{ minimum: 1 }, { default: 2 }, { maximum: 3 }] }

            const values = {}

            const params = {
              '#/': { meta: { component: 'number component' } }
            }

            return expect(transform(schema, values, params))
              .to.eql({
                meta: {
                  type: 'number',
                  schema,
                  uri: '#/',
                  defaultValue: '2',
                  component: 'number component'
                },
                elements: {
                  field: {
                    name: '#/',
                    value: '2'
                  }
                }
              })
          })
        })

        describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
          it('transforms `number` type schemas', () => {
            const schema = { type: 'number' }

            const values = {}

            const params = {
              '#/': { meta: { component: 'number component' } }
            }

            return expect(transform(schema, values, params))
              .to.eql({
                meta: {
                  type: 'number',
                  schema,
                  uri: '#/',
                  component: 'number component'
                },
                elements: {
                  field: {
                    name: '#/'
                  }
                }
              })
          })
        })
      })

      describe('Transforming `string` type schemas', () => {
        describe('With `enum`', () => {
          it('transforms `string` type schemas', () => {
            const schema = { type: 'string', enum: ['string (1)', 'string (2)', 'string (3)'] }

            const values = {}

            const params = {
              '#/': { meta: { component: 'string component' } }
            }

            return expect(transform(schema, values, params))
              .to.eql({
                meta: {
                  type: 'string',
                  schema,
                  uri: '#/',
                  component: 'string component'
                },
                elements: {
                  enum: {
                    items: ['string (1)', 'string (2)', 'string (3)'],
                    name: '#/'
                  }
                }
              })
          })
        })

        describe('With `anyOf`', () => {
          it('transforms `string` type schemas', () => {
            const schema = { type: 'string', anyOf: [{ default: 'string (1)' }, { default: 'string (2)' }, { default: 'string (3)' }] }

            const values = {}

            const params = {
              '#/': { meta: { component: 'string component' } }
            }

            return expect(transform(schema, values, params))
              .to.eql({
                meta: {
                  type: 'string',
                  schema,
                  uri: '#/',
                  component: 'string component'
                },
                elements: {
                  anyOf: {
                    items: [
                      {
                        meta: {
                          type: 'string',
                          rootSchema: schema,
                          schema: { default: 'string (1)' },
                          item: 0,
                          required: false,
                          defaultValue: 'string (1)',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: 'string (1)'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'string',
                          rootSchema: schema,
                          schema: { default: 'string (2)' },
                          item: 1,
                          required: false,
                          defaultValue: 'string (2)',
                          uri: '#/1'
                        },
                        elements: {
                          field: {
                            name: '#/1',
                            required: false,
                            value: 'string (2)'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'string',
                          rootSchema: schema,
                          schema: { default: 'string (3)' },
                          item: 2,
                          required: false,
                          defaultValue: 'string (3)',
                          uri: '#/2'
                        },
                        elements: {
                          field: {
                            name: '#/2',
                            required: false,
                            value: 'string (3)'
                          }
                        }
                      }
                    ],
                    name: '#/'
                  }
                }
              })
          })
        })

        describe('With `oneOf`', () => {
          it('transforms `string` type schemas', () => {
            const schema = { type: 'string', oneOf: [{ default: 'string (1)' }, { default: 'string (2)' }, { default: 'string (3)' }] }

            const values = {}

            const params = {
              '#/': { meta: { component: 'string component' } }
            }

            return expect(transform(schema, values, params))
              .to.eql({
                meta: {
                  type: 'string',
                  schema,
                  uri: '#/',
                  component: 'string component'
                },
                elements: {
                  oneOf: {
                    items: [
                      {
                        meta: {
                          type: 'string',
                          rootSchema: schema,
                          schema: { default: 'string (1)' },
                          item: 0,
                          required: false,
                          defaultValue: 'string (1)',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: 'string (1)'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'string',
                          rootSchema: schema,
                          schema: { default: 'string (2)' },
                          item: 1,
                          required: false,
                          defaultValue: 'string (2)',
                          uri: '#/1'
                        },
                        elements: {
                          field: {
                            name: '#/1',
                            required: false,
                            value: 'string (2)'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'string',
                          rootSchema: schema,
                          schema: { default: 'string (3)' },
                          item: 2,
                          required: false,
                          defaultValue: 'string (3)',
                          uri: '#/2'
                        },
                        elements: {
                          field: {
                            name: '#/2',
                            required: false,
                            value: 'string (3)'
                          }
                        }
                      }
                    ],
                    name: '#/'
                  }
                }
              })
          })
        })

        describe('With `allOf`', () => {
          it('transforms `string` type schemas', () => {
            const schema = { type: 'string', allOf: [{ minLength: 1 }, { default: 'string' }, { maxLength: 20 }] }

            const values = {}

            const params = {
              '#/': { meta: { component: 'string component' } }
            }

            return expect(transform(schema, values, params))
              .to.eql({
                meta: {
                  type: 'string',
                  schema,
                  defaultValue: 'string',
                  uri: '#/',
                  component: 'string component'
                },
                elements: {
                  field: {
                    name: '#/',
                    value: 'string'
                  }
                }
              })
          })
        })

        describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
          it('transforms `string` type schemas', () => {
            const schema = { type: 'string' }

            const values = {}

            const params = {
              '#/': { meta: { component: 'string component' } }
            }

            return expect(transform(schema, values, params))
              .to.eql({
                meta: {
                  type: 'string',
                  schema,
                  uri: '#/',
                  component: 'string component'
                },
                elements: {
                  field: {
                    name: '#/'
                  }
                }
              })
          })
        })
      })

      describe('Transforming `array` type schemas', () => {
        describe('With `items`', () => {
          describe('With `enum`', () => {
            it('transforms `array` type schemas (`items` is `number` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'number',
                    enum: [1, 2, 3]
                  }
                ]
              }

              const values = {}

              const params = {
                '#/0': { meta: { component: 'array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'number',
                          schema: {
                            type: 'number',
                            enum: [1, 2, 3]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          enum: {
                            items: [1, 2, 3],
                            name: '#/0',
                            required: false
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `string` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'string',
                    enum: ['string (1)', 'string (2)', 'string (3)']
                  }
                ]
              }

              const values = {}

              const params = {
                '#/0': { meta: { component: 'array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'string',
                          schema: {
                            type: 'string',
                            enum: ['string (1)', 'string (2)', 'string (3)']
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          enum: {
                            items: ['string (1)', 'string (2)', 'string (3)'],
                            name: '#/0',
                            required: false
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `object` type with `properties`)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'object',
                    properties: {
                      one: {
                        type: 'string',
                        enum: [
                          'array type index string type (1)',
                          'array type index string type (2)',
                          'array type index string type (3)'
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

              const values = {}

              const params = {
                '#/0': { meta: { component: 'array type index component' } },
                '#/0/one': { meta: { component: 'array type index object type key component' } },
                '#/0/two': { meta: { component: 'array type index object type key component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'object',
                          schema: {
                            type: 'object',
                            properties: {
                              one: {
                                type: 'string',
                                enum: [
                                  'array type index string type (1)',
                                  'array type index string type (2)',
                                  'array type index string type (3)'
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
                          rootSchema: schema,
                          uri: '#/0',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              elements: {
                                enum: {
                                  items: [
                                    'array type index string type (1)',
                                    'array type index string type (2)',
                                    'array type index string type (3)'
                                  ],
                                  name: '#/0/one',
                                  required: false
                                }
                              },
                              meta: {
                                component: 'array type index object type key component',
                                name: 'one',
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  enum: [
                                    'array type index string type (1)',
                                    'array type index string type (2)',
                                    'array type index string type (3)'
                                  ],
                                  type: 'string'
                                },
                                type: 'string',
                                uri: '#/0/one'
                              }
                            },
                            {
                              elements: {
                                enum: {
                                  items: [
                                    1,
                                    2,
                                    3
                                  ],
                                  name: '#/0/two',
                                  required: false
                                }
                              },
                              meta: {
                                component: 'array type index object type key component',
                                name: 'two',
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  enum: [
                                    1,
                                    2,
                                    3
                                  ],
                                  type: 'number'
                                },
                                type: 'number',
                                uri: '#/0/two'
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `object` type with `properties` and `required`)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'object',
                    properties: {
                      one: {
                        type: 'string',
                        enum: [
                          'array type index string type (1)',
                          'array type index string type (2)',
                          'array type index string type (3)'
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

              const values = {}

              const params = {
                '#/0': { meta: { component: 'array type index component' } },
                '#/0/one': { meta: { component: 'array type index object type key component' } },
                '#/0/two': { meta: { component: 'array type index object type key component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'object',
                          schema: {
                            type: 'object',
                            properties: {
                              one: {
                                type: 'string',
                                enum: [
                                  'array type index string type (1)',
                                  'array type index string type (2)',
                                  'array type index string type (3)'
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
                          rootSchema: schema,
                          uri: '#/0',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              elements: {
                                enum: {
                                  items: [
                                    'array type index string type (1)',
                                    'array type index string type (2)',
                                    'array type index string type (3)'
                                  ],
                                  name: '#/0/one',
                                  required: true
                                }
                              },
                              meta: {
                                component: 'array type index object type key component',
                                name: 'one',
                                required: true,
                                rootSchema: schema,
                                schema: {
                                  enum: [
                                    'array type index string type (1)',
                                    'array type index string type (2)',
                                    'array type index string type (3)'
                                  ],
                                  type: 'string'
                                },
                                type: 'string',
                                uri: '#/0/one'
                              }
                            },
                            {
                              elements: {
                                enum: {
                                  items: [
                                    1,
                                    2,
                                    3
                                  ],
                                  name: '#/0/two',
                                  required: false
                                }
                              },
                              meta: {
                                component: 'array type index object type key component',
                                name: 'two',
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  enum: [
                                    1,
                                    2,
                                    3
                                  ],
                                  type: 'number'
                                },
                                type: 'number',
                                uri: '#/0/two'
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `number` type)', () => {
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

              const values = {}

              const params = {
                '#/0': { meta: { component: 'array type index component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  meta: {
                    type: 'array',
                    schema,
                    uri: '#/'
                  },
                  elements: {
                    fields: [
                      {
                        elements: {
                          enum: {
                            items: [
                              1,
                              2,
                              3
                            ],
                            name: '#/0',
                            required: false
                          }
                        },
                        meta: {
                          component: 'array type index component',
                          item: 0,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            enum: [
                              1,
                              2,
                              3
                            ],
                            type: 'number'
                          },
                          type: 'number',
                          uri: '#/0'
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `string` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'string',
                    enum: [
                      'array type index string type (1)',
                      'array type index string type (2)',
                      'array type index string type (3)'
                    ]
                  }
                ]
              }

              const values = {}

              const params = {
                '#/0': { meta: { component: 'array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          component: 'array type index component',
                          item: 0,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            enum: [
                              'array type index string type (1)',
                              'array type index string type (2)',
                              'array type index string type (3)'
                            ],
                            type: 'string'
                          },
                          type: 'string',
                          uri: '#/0'
                        },
                        elements: {
                          enum: {
                            items: [
                              'array type index string type (1)',
                              'array type index string type (2)',
                              'array type index string type (3)'
                            ],
                            name: '#/0',
                            required: false
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `boolean` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'boolean',
                    enum: [true, false]
                  }
                ]
              }

              const values = {}

              const params = {
                '#/0': { meta: { component: 'array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          component: 'array type index component',
                          item: 0,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            enum: [true, false],
                            type: 'boolean'
                          },
                          type: 'boolean',
                          uri: '#/0'
                        },
                        elements: {
                          enum: {
                            items: [true, false],
                            name: '#/0',
                            required: false
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `null` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'null',
                    enum: [null]
                  }
                ]
              }

              const values = {}

              const params = {
                '#/0': { meta: { component: 'array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          component: 'array type index component',
                          item: 0,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            enum: [null],
                            type: 'null'
                          },
                          type: 'null',
                          uri: '#/0'
                        },
                        elements: {
                          enum: {
                            items: [null],
                            name: '#/0',
                            required: false
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `number` type and `string` type and `boolean` type and `null` type)', () => {
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
                  },
                  {
                    type: 'string',
                    enum: [
                      'array type index string type (1)',
                      'array type index string type (2)',
                      'array type index string type (3)'
                    ]
                  },
                  {
                    type: 'boolean',
                    enum: [true, false]
                  },
                  {
                    type: 'null',
                    enum: [null]
                  }
                ]
              }

              const values = {}

              const params = {
                '#/0': { meta: { component: 'array type index component' } },
                '#/1': { meta: { component: 'array type index component' } },
                '#/2': { meta: { component: 'array type index component' } },
                '#/3': { meta: { component: 'array type index component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  meta: {
                    type: 'array',
                    schema,
                    uri: '#/'
                  },
                  elements: {
                    fields: [
                      {
                        elements: {
                          enum: {
                            items: [
                              1,
                              2,
                              3
                            ],
                            name: '#/0',
                            required: false
                          }
                        },
                        meta: {
                          component: 'array type index component',
                          item: 0,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            enum: [
                              1,
                              2,
                              3
                            ],
                            type: 'number'
                          },
                          type: 'number',
                          uri: '#/0'
                        }
                      },
                      {
                        meta: {
                          component: 'array type index component',
                          item: 1,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            enum: [
                              'array type index string type (1)',
                              'array type index string type (2)',
                              'array type index string type (3)'
                            ],
                            type: 'string'
                          },
                          type: 'string',
                          uri: '#/1'
                        },
                        elements: {
                          enum: {
                            items: [
                              'array type index string type (1)',
                              'array type index string type (2)',
                              'array type index string type (3)'
                            ],
                            name: '#/1',
                            required: false
                          }
                        }
                      },
                      {
                        meta: {
                          component: 'array type index component',
                          item: 2,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            enum: [true, false],
                            type: 'boolean'
                          },
                          type: 'boolean',
                          uri: '#/2'
                        },
                        elements: {
                          enum: {
                            items: [true, false],
                            name: '#/2',
                            required: false
                          }
                        }
                      },
                      {
                        meta: {
                          component: 'array type index component',
                          item: 3,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            enum: [null],
                            type: 'null'
                          },
                          type: 'null',
                          uri: '#/3'
                        },
                        elements: {
                          enum: {
                            items: [null],
                            name: '#/3',
                            required: false
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `array` type with `items` is `number` type)', () => {
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

              const values = {}

              const params = {
                '#/0': { meta: { component: 'array type index component' } },
                '#/0/0': { meta: { component: 'array type index array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'array',
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
                          rootSchema: schema,
                          uri: '#/0',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              elements: {
                                enum: {
                                  items: [
                                    1,
                                    2,
                                    3
                                  ],
                                  name: '#/0/0',
                                  required: false
                                }
                              },
                              meta: {
                                component: 'array type index array type index component',
                                item: 0,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  enum: [
                                    1,
                                    2,
                                    3
                                  ],
                                  type: 'number'
                                },
                                type: 'number',
                                uri: '#/0/0'
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `array` type with `items` is `string` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'array',
                    items: [
                      {
                        type: 'string',
                        enum: [
                          'array type index string type (1)',
                          'array type index string type (2)',
                          'array type index string type (3)'
                        ]
                      }
                    ]
                  }
                ]
              }

              const values = {}

              const params = {
                '#/0': { meta: { component: 'array type index component' } },
                '#/0/0': { meta: { component: 'array type index array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'array',
                          schema: {
                            type: 'array',
                            items: [
                              {
                                type: 'string',
                                enum: [
                                  'array type index string type (1)',
                                  'array type index string type (2)',
                                  'array type index string type (3)'
                                ]
                              }
                            ]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              meta: {
                                component: 'array type index array type index component',
                                item: 0,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  enum: [
                                    'array type index string type (1)',
                                    'array type index string type (2)',
                                    'array type index string type (3)'
                                  ],
                                  type: 'string'
                                },
                                type: 'string',
                                uri: '#/0/0'
                              },
                              elements: {
                                enum: {
                                  items: [
                                    'array type index string type (1)',
                                    'array type index string type (2)',
                                    'array type index string type (3)'
                                  ],
                                  name: '#/0/0',
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

            it('transforms `array` type schemas (`items` is `array` type with `items` is `array` type with `items` is `boolean` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'array',
                    items: [
                      {
                        type: 'boolean',
                        enum: [true, false]
                      }
                    ]
                  }
                ]
              }

              const values = {}

              const params = {
                '#/0': { meta: { component: 'array type index component' } },
                '#/0/0': { meta: { component: 'array type index array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'array',
                          schema: {
                            type: 'array',
                            items: [
                              {
                                type: 'boolean',
                                enum: [true, false]
                              }
                            ]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              meta: {
                                component: 'array type index array type index component',
                                item: 0,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  enum: [true, false],
                                  type: 'boolean'
                                },
                                type: 'boolean',
                                uri: '#/0/0'
                              },
                              elements: {
                                enum: {
                                  items: [true, false],
                                  name: '#/0/0',
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

            it('transforms `array` type schemas (`items` is `array` type with `items` is `array` type with `items` is `null` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'array',
                    items: [
                      {
                        type: 'null',
                        enum: [null]
                      }
                    ]
                  }
                ]
              }

              const values = {}

              const params = {
                '#/0': { meta: { component: 'array type index component' } },
                '#/0/0': { meta: { component: 'array type index array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'array',
                          schema: {
                            type: 'array',
                            items: [
                              {
                                type: 'null',
                                enum: [null]
                              }
                            ]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              meta: {
                                component: 'array type index array type index component',
                                item: 0,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  enum: [null],
                                  type: 'null'
                                },
                                type: 'null',
                                uri: '#/0/0'
                              },
                              elements: {
                                enum: {
                                  items: [null],
                                  name: '#/0/0',
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

            it('transforms `array` type schemas (`items` is `array` type with `items` is `array` type with `items` is `number` type and `string` type and `boolean` type and `null` type)', () => {
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
                      },
                      {
                        type: 'string',
                        enum: [
                          'array type index string type (1)',
                          'array type index string type (2)',
                          'array type index string type (3)'
                        ]
                      },
                      {
                        type: 'boolean',
                        enum: [true, false]
                      },
                      {
                        type: 'null',
                        enum: [null]
                      }
                    ]
                  }
                ]
              }

              const values = {}

              const params = {
                '#/0': { meta: { component: 'array type index component' } },
                '#/0/0': { meta: { component: 'array type index array type index component' } },
                '#/0/1': { meta: { component: 'array type index array type index component' } },
                '#/0/2': { meta: { component: 'array type index array type index component' } },
                '#/0/3': { meta: { component: 'array type index array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'array',
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
                              },
                              {
                                type: 'string',
                                enum: [
                                  'array type index string type (1)',
                                  'array type index string type (2)',
                                  'array type index string type (3)'
                                ]
                              },
                              {
                                type: 'boolean',
                                enum: [true, false]
                              },
                              {
                                type: 'null',
                                enum: [null]
                              }
                            ]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              elements: {
                                enum: {
                                  items: [
                                    1,
                                    2,
                                    3
                                  ],
                                  name: '#/0/0',
                                  required: false
                                }
                              },
                              meta: {
                                component: 'array type index array type index component',
                                item: 0,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  enum: [
                                    1,
                                    2,
                                    3
                                  ],
                                  type: 'number'
                                },
                                type: 'number',
                                uri: '#/0/0'
                              }
                            },
                            {
                              meta: {
                                component: 'array type index array type index component',
                                item: 1,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  enum: [
                                    'array type index string type (1)',
                                    'array type index string type (2)',
                                    'array type index string type (3)'
                                  ],
                                  type: 'string'
                                },
                                type: 'string',
                                uri: '#/0/1'
                              },
                              elements: {
                                enum: {
                                  items: [
                                    'array type index string type (1)',
                                    'array type index string type (2)',
                                    'array type index string type (3)'
                                  ],
                                  name: '#/0/1',
                                  required: false
                                }
                              }
                            },
                            {
                              meta: {
                                component: 'array type index array type index component',
                                item: 2,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  enum: [true, false],
                                  type: 'boolean'
                                },
                                type: 'boolean',
                                uri: '#/0/2'
                              },
                              elements: {
                                enum: {
                                  items: [true, false],
                                  name: '#/0/2',
                                  required: false
                                }
                              }
                            },
                            {
                              meta: {
                                component: 'array type index array type index component',
                                item: 3,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  enum: [null],
                                  type: 'null'
                                },
                                type: 'null',
                                uri: '#/0/3'
                              },
                              elements: {
                                enum: {
                                  items: [null],
                                  name: '#/0/3',
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

            it('transforms `array` type schemas (`items` is `object` type with `properties`)', () => {
              const schema = {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    one: { type: 'string' },
                    two: { type: 'string' }
                  }
                }
              }

              const values = {}

              const params = {
                '#/0': { meta: { component: 'array type index component' } },
                '#/0/one': { meta: { component: 'array type index object type key component' } },
                '#/0/two': { meta: { component: 'array type index object type key component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'object',
                          schema: {
                            type: 'object',
                            properties: {
                              one: { type: 'string' },
                              two: { type: 'string' }
                            }
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              meta: {
                                name: 'one',
                                required: false,
                                type: 'string',
                                schema: { type: 'string' },
                                rootSchema: schema,
                                uri: '#/0/one',
                                component: 'array type index object type key component'
                              },
                              elements: {
                                field: {
                                  name: '#/0/one',
                                  required: false
                                }
                              }
                            },
                            {
                              meta: {
                                name: 'two',
                                required: false,
                                type: 'string',
                                schema: { type: 'string' },
                                rootSchema: schema,
                                uri: '#/0/two',
                                component: 'array type index object type key component'
                              },
                              elements: {
                                field: {
                                  name: '#/0/two',
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

            it('transforms `array` type schemas (`items` is `object` type with `properties` and `required`)', () => {
              const schema = {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    one: { type: 'string' },
                    two: { type: 'string' }
                  },
                  required: [
                    'one'
                  ]
                }
              }

              const values = {}

              const params = {
                '#/0': { meta: { component: 'array type index component' } },
                '#/0/one': { meta: { component: 'array type index object type key component' } },
                '#/0/two': { meta: { component: 'array type index object type key component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'object',
                          schema: {
                            type: 'object',
                            properties: {
                              one: { type: 'string' },
                              two: { type: 'string' }
                            },
                            required: [
                              'one'
                            ]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              meta: {
                                name: 'one',
                                required: true,
                                type: 'string',
                                schema: { type: 'string' },
                                rootSchema: schema,
                                uri: '#/0/one',
                                component: 'array type index object type key component'
                              },
                              elements: {
                                field: {
                                  name: '#/0/one',
                                  required: true
                                }
                              }
                            },
                            {
                              meta: {
                                name: 'two',
                                required: false,
                                type: 'string',
                                schema: { type: 'string' },
                                rootSchema: schema,
                                uri: '#/0/two',
                                component: 'array type index object type key component'
                              },
                              elements: {
                                field: {
                                  name: '#/0/two',
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

            it('transforms `array` type schemas (`items` is `boolean` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'boolean',
                    enum: [true, false]
                  }
                ]
              }

              const values = {}

              const params = {
                '#/0': { meta: { component: 'array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'boolean',
                          schema: {
                            type: 'boolean',
                            enum: [true, false]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          enum: {
                            items: [true, false],
                            name: '#/0',
                            required: false
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `null` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'null',
                    enum: [null]
                  }
                ]
              }

              const values = {}

              const params = {
                '#/0': { meta: { component: 'array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'null',
                          schema: {
                            type: 'null',
                            enum: [null]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          enum: {
                            items: [null],
                            name: '#/0',
                            required: false
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `number` type and `string` type and `boolean` type and `null` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'number',
                    enum: [1, 2, 3]
                  },
                  {
                    type: 'string',
                    enum: ['string (1)', 'string (2)', 'string (3)']
                  },
                  {
                    type: 'boolean',
                    enum: [true, false]
                  },
                  {
                    type: 'null',
                    enum: [null]
                  }
                ]
              }

              const values = {}

              const params = {
                '#/0': { meta: { component: 'array type index component' } },
                '#/1': { meta: { component: 'array type index component' } },
                '#/2': { meta: { component: 'array type index component' } },
                '#/3': { meta: { component: 'array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'number',
                          schema: {
                            type: 'number',
                            enum: [1, 2, 3]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          enum: {
                            items: [1, 2, 3],
                            name: '#/0',
                            required: false
                          }
                        }
                      },
                      {
                        meta: {
                          required: false,
                          type: 'string',
                          schema: {
                            type: 'string',
                            enum: ['string (1)', 'string (2)', 'string (3)']
                          },
                          rootSchema: schema,
                          uri: '#/1',
                          component: 'array type index component',
                          item: 1
                        },
                        elements: {
                          enum: {
                            items: ['string (1)', 'string (2)', 'string (3)'],
                            name: '#/1',
                            required: false
                          }
                        }
                      },
                      {
                        meta: {
                          required: false,
                          type: 'boolean',
                          schema: {
                            type: 'boolean',
                            enum: [true, false]
                          },
                          rootSchema: schema,
                          uri: '#/2',
                          component: 'array type index component',
                          item: 2
                        },
                        elements: {
                          enum: {
                            items: [true, false],
                            name: '#/2',
                            required: false
                          }
                        }
                      },
                      {
                        meta: {
                          required: false,
                          type: 'null',
                          schema: {
                            type: 'null',
                            enum: [null]
                          },
                          rootSchema: schema,
                          uri: '#/3',
                          component: 'array type index component',
                          item: 3
                        },
                        elements: {
                          enum: {
                            items: [null],
                            name: '#/3',
                            required: false
                          }
                        }
                      }
                    ]
                  }
                })
            })
          })

          describe('Without `enum`', () => {
            it('transforms `array` type schemas (`items` is `number` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'number'
                  }
                ]
              }

              const values = {}

              const params = {
                '#/0': { meta: { component: 'array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'number',
                          schema: {
                            type: 'number'
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `string` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'string'
                  }
                ]
              }

              const values = {}

              const params = {
                '#/0': { meta: { component: 'array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'string',
                          schema: {
                            type: 'string'
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `number` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'number'
                  }
                ]
              }

              const values = {}

              const params = {
                '#/0': { meta: { component: 'array type index component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  meta: {
                    type: 'array',
                    schema,
                    uri: '#/'
                  },
                  elements: {
                    fields: [
                      {
                        elements: {
                          field: {
                            name: '#/0',
                            required: false
                          }
                        },
                        meta: {
                          component: 'array type index component',
                          item: 0,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            type: 'number'
                          },
                          type: 'number',
                          uri: '#/0'
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `string` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'string'
                  }
                ]
              }

              const values = {}

              const params = {
                '#/0': { meta: { component: 'array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          component: 'array type index component',
                          item: 0,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            type: 'string'
                          },
                          type: 'string',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `boolean` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'boolean'
                  }
                ]
              }

              const values = {}

              const params = {
                '#/0': { meta: { component: 'array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          component: 'array type index component',
                          item: 0,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            type: 'boolean'
                          },
                          type: 'boolean',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `null` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'null'
                  }
                ]
              }

              const values = {}

              const params = {
                '#/0': { meta: { component: 'array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          component: 'array type index component',
                          item: 0,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            type: 'null'
                          },
                          type: 'null',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `number` type and `string` type and `boolean` type and `null` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'number'
                  },
                  {
                    type: 'string'
                  },
                  {
                    type: 'boolean'
                  },
                  {
                    type: 'null'
                  }
                ]
              }

              const values = {}

              const params = {
                '#/0': { meta: { component: 'array type index component' } },
                '#/1': { meta: { component: 'array type index component' } },
                '#/2': { meta: { component: 'array type index component' } },
                '#/3': { meta: { component: 'array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          component: 'array type index component',
                          item: 0,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            type: 'number'
                          },
                          type: 'number',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false
                          }
                        }
                      },
                      {
                        meta: {
                          component: 'array type index component',
                          item: 1,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            type: 'string'
                          },
                          type: 'string',
                          uri: '#/1'
                        },
                        elements: {
                          field: {
                            name: '#/1',
                            required: false
                          }
                        }
                      },
                      {
                        meta: {
                          component: 'array type index component',
                          item: 2,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            type: 'boolean'
                          },
                          type: 'boolean',
                          uri: '#/2'
                        },
                        elements: {
                          field: {
                            name: '#/2',
                            required: false
                          }
                        }
                      },
                      {
                        meta: {
                          component: 'array type index component',
                          item: 3,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            type: 'null'
                          },
                          type: 'null',
                          uri: '#/3'
                        },
                        elements: {
                          field: {
                            name: '#/3',
                            required: false
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `object` type with `properties`)', () => {
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

              const values = {}

              const params = {
                '#/0': { meta: { component: 'array type index component' } },
                '#/0/one': { meta: { component: 'array type index object type key component' } },
                '#/0/two': { meta: { component: 'array type index object type key component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'object',
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
                          rootSchema: schema,
                          uri: '#/0',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              elements: {
                                field: {
                                  name: '#/0/one',
                                  required: false
                                }
                              },
                              meta: {
                                component: 'array type index object type key component',
                                name: 'one',
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  type: 'string'
                                },
                                type: 'string',
                                uri: '#/0/one'
                              }
                            },
                            {
                              elements: {
                                field: {
                                  name: '#/0/two',
                                  required: false
                                }
                              },
                              meta: {
                                component: 'array type index object type key component',
                                name: 'two',
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  type: 'number'
                                },
                                type: 'number',
                                uri: '#/0/two'
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `object` type with `properties` and `required`)', () => {
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

              const values = {}

              const params = {
                '#/0': { meta: { component: 'array type index component' } },
                '#/0/one': { meta: { component: 'array type index object type key component' } },
                '#/0/two': { meta: { component: 'array type index object type key component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'object',
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
                          rootSchema: schema,
                          uri: '#/0',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              meta: {
                                component: 'array type index object type key component',
                                name: 'one',
                                required: true,
                                rootSchema: schema,
                                schema: {
                                  type: 'string'
                                },
                                type: 'string',
                                uri: '#/0/one'
                              },
                              elements: {
                                field: {
                                  name: '#/0/one',
                                  required: true
                                }
                              }
                            },
                            {
                              meta: {
                                component: 'array type index object type key component',
                                name: 'two',
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  type: 'number'
                                },
                                type: 'number',
                                uri: '#/0/two'
                              },
                              elements: {
                                field: {
                                  name: '#/0/two',
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

            it('transforms `array` type schemas (`items` is `array` type with `items` is `array` type with `items` is `number` type)', () => {
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

              const values = {}

              const params = {
                '#/0': { meta: { component: 'array type index component' } },
                '#/0/0': { meta: { component: 'array type index array type index component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  meta: {
                    type: 'array',
                    schema,
                    uri: '#/'
                  },
                  elements: {
                    fields: [
                      {
                        elements: {
                          fields: [
                            {
                              elements: {
                                field: {
                                  name: '#/0/0',
                                  required: false
                                }
                              },
                              meta: {
                                component: 'array type index array type index component',
                                item: 0,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  type: 'number'
                                },
                                type: 'number',
                                uri: '#/0/0'
                              }
                            }
                          ]
                        },
                        meta: {
                          required: false,
                          type: 'array',
                          schema: {
                            type: 'array',
                            items: [
                              {
                                type: 'number'
                              }
                            ]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          component: 'array type index component',
                          item: 0
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `array` type with `items` is `string` type)', () => {
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

              const values = {}

              const params = {
                '#/0': { meta: { component: 'array type index component' } },
                '#/0/0': { meta: { component: 'array type index array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'array',
                          schema: {
                            type: 'array',
                            items: [
                              {
                                type: 'string'
                              }
                            ]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              meta: {
                                component: 'array type index array type index component',
                                item: 0,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  type: 'string'
                                },
                                type: 'string',
                                uri: '#/0/0'
                              },
                              elements: {
                                field: {
                                  name: '#/0/0',
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

            it('transforms `array` type schemas (`items` is `array` type with `items` is `array` type with `items` is `boolean` type)', () => {
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

              const values = {}

              const params = {
                '#/0': { meta: { component: 'array type index component' } },
                '#/0/0': { meta: { component: 'array type index array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'array',
                          schema: {
                            type: 'array',
                            items: [
                              {
                                type: 'boolean'
                              }
                            ]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              meta: {
                                component: 'array type index array type index component',
                                item: 0,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  type: 'boolean'
                                },
                                type: 'boolean',
                                uri: '#/0/0'
                              },
                              elements: {
                                field: {
                                  name: '#/0/0',
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

            it('transforms `array` type schemas (`items` is `array` type with `items` is `array` type with `items` is `null` type)', () => {
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

              const values = {}

              const params = {
                '#/0': { meta: { component: 'array type index component' } },
                '#/0/0': { meta: { component: 'array type index array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'array',
                          schema: {
                            type: 'array',
                            items: [
                              {
                                type: 'null'
                              }
                            ]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              meta: {
                                component: 'array type index array type index component',
                                item: 0,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  type: 'null'
                                },
                                type: 'null',
                                uri: '#/0/0'
                              },
                              elements: {
                                field: {
                                  name: '#/0/0',
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

            it('transforms `array` type schemas (`items` is `array` type with `items` is `array` type with `items` is `number` type and `string` type and `boolean` type and `null` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'array',
                    items: [
                      {
                        type: 'number'
                      },
                      {
                        type: 'string'
                      },
                      {
                        type: 'boolean'
                      },
                      {
                        type: 'null'
                      }
                    ]
                  }
                ]
              }

              const values = {}

              const params = {
                '#/0': { meta: { component: 'array type index component' } },
                '#/0/0': { meta: { component: 'array type index array type index component' } },
                '#/0/1': { meta: { component: 'array type index array type index component' } },
                '#/0/2': { meta: { component: 'array type index array type index component' } },
                '#/0/3': { meta: { component: 'array type index array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'array',
                          schema: {
                            type: 'array',
                            items: [
                              {
                                type: 'number'
                              },
                              {
                                type: 'string'
                              },
                              {
                                type: 'boolean'
                              },
                              {
                                type: 'null'
                              }
                            ]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              meta: {
                                component: 'array type index array type index component',
                                item: 0,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  type: 'number'
                                },
                                type: 'number',
                                uri: '#/0/0'
                              },
                              elements: {
                                field: {
                                  name: '#/0/0',
                                  required: false
                                }
                              }
                            },
                            {
                              meta: {
                                component: 'array type index array type index component',
                                item: 1,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  type: 'string'
                                },
                                type: 'string',
                                uri: '#/0/1'
                              },
                              elements: {
                                field: {
                                  name: '#/0/1',
                                  required: false
                                }
                              }
                            },
                            {
                              meta: {
                                component: 'array type index array type index component',
                                item: 2,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  type: 'boolean'
                                },
                                type: 'boolean',
                                uri: '#/0/2'
                              },
                              elements: {
                                field: {
                                  name: '#/0/2',
                                  required: false
                                }
                              }
                            },
                            {
                              meta: {
                                component: 'array type index array type index component',
                                item: 3,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  type: 'null'
                                },
                                type: 'null',
                                uri: '#/0/3'
                              },
                              elements: {
                                field: {
                                  name: '#/0/3',
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

            it('transforms `array` type schemas (`items` is `object` type with `properties`)', () => {
              const schema = {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    one: { type: 'string' },
                    two: { type: 'string' }
                  }
                }
              }

              const values = {}

              const params = {
                '#/0': { meta: { component: 'array type index component' } },
                '#/0/one': { meta: { component: 'array type index object type key component' } },
                '#/0/two': { meta: { component: 'array type index object type key component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'object',
                          schema: {
                            type: 'object',
                            properties: {
                              one: { type: 'string' },
                              two: { type: 'string' }
                            }
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              meta: {
                                name: 'one',
                                required: false,
                                type: 'string',
                                schema: { type: 'string' },
                                rootSchema: schema,
                                uri: '#/0/one',
                                component: 'array type index object type key component'
                              },
                              elements: {
                                field: {
                                  name: '#/0/one',
                                  required: false
                                }
                              }
                            },
                            {
                              meta: {
                                name: 'two',
                                required: false,
                                type: 'string',
                                schema: { type: 'string' },
                                rootSchema: schema,
                                uri: '#/0/two',
                                component: 'array type index object type key component'
                              },
                              elements: {
                                field: {
                                  name: '#/0/two',
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

            it('transforms `array` type schemas (`items` is `object` type with `properties` and `required`)', () => {
              const schema = {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    one: { type: 'string' },
                    two: { type: 'string' }
                  },
                  required: [
                    'one'
                  ]
                }
              }

              const values = {}

              const params = {
                '#/0': { meta: { component: 'array type index component' } },
                '#/0/one': { meta: { component: 'array type index object type key component' } },
                '#/0/two': { meta: { component: 'array type index object type key component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'object',
                          schema: {
                            type: 'object',
                            properties: {
                              one: { type: 'string' },
                              two: { type: 'string' }
                            },
                            required: [
                              'one'
                            ]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              meta: {
                                name: 'one',
                                required: true,
                                type: 'string',
                                schema: { type: 'string' },
                                rootSchema: schema,
                                uri: '#/0/one',
                                component: 'array type index object type key component'
                              },
                              elements: {
                                field: {
                                  name: '#/0/one',
                                  required: true
                                }
                              }
                            },
                            {
                              meta: {
                                name: 'two',
                                required: false,
                                type: 'string',
                                schema: { type: 'string' },
                                rootSchema: schema,
                                uri: '#/0/two',
                                component: 'array type index object type key component'
                              },
                              elements: {
                                field: {
                                  name: '#/0/two',
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

            it('transforms `array` type schemas (`items` is `boolean` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'boolean'
                  }
                ]
              }

              const values = {}

              const params = {
                '#/0': { meta: { component: 'array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'boolean',
                          schema: {
                            type: 'boolean'
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `null` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'null'
                  }
                ]
              }

              const values = {}

              const params = {
                '#/0': { meta: { component: 'array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'null',
                          schema: {
                            type: 'null'
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `number` type and `string` type and `boolean` type and `null` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'number'
                  },
                  {
                    type: 'string'
                  },
                  {
                    type: 'boolean'
                  },
                  {
                    type: 'null'
                  }
                ]
              }

              const values = {}

              const params = {
                '#/0': { meta: { component: 'array type index component' } },
                '#/1': { meta: { component: 'array type index component' } },
                '#/2': { meta: { component: 'array type index component' } },
                '#/3': { meta: { component: 'array type index component' } }
              }

              return expect(transform(schema, values, params))
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
                          required: false,
                          type: 'number',
                          schema: {
                            type: 'number'
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          component: 'array type index component',
                          item: 0
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false
                          }
                        }
                      },
                      {
                        meta: {
                          required: false,
                          type: 'string',
                          schema: {
                            type: 'string'
                          },
                          rootSchema: schema,
                          uri: '#/1',
                          component: 'array type index component',
                          item: 1
                        },
                        elements: {
                          field: {
                            name: '#/1',
                            required: false
                          }
                        }
                      },
                      {
                        meta: {
                          required: false,
                          type: 'boolean',
                          schema: {
                            type: 'boolean'
                          },
                          rootSchema: schema,
                          uri: '#/2',
                          component: 'array type index component',
                          item: 2
                        },
                        elements: {
                          field: {
                            name: '#/2',
                            required: false
                          }
                        }
                      },
                      {
                        meta: {
                          required: false,
                          type: 'null',
                          schema: {
                            type: 'null'
                          },
                          rootSchema: schema,
                          uri: '#/3',
                          component: 'array type index component',
                          item: 3
                        },
                        elements: {
                          field: {
                            name: '#/3',
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

        describe('Without `items`', () => {
          it('transforms `array` type schemas', () => {
            const schema = { type: 'array' }

            const values = {}

            const params = {
              '#/': { meta: { component: 'array component' } }
            }

            return expect(transform(schema, values, params))
              .to.eql({
                meta: {
                  type: 'array',
                  schema,
                  uri: '#/',
                  component: 'array component'
                },
                elements: {
                  fields: []
                }
              })
          })
        })
      })

      describe('Transforming `object` type schemas', () => {
        describe('With `properties`', () => {
          describe('With `enum`', () => {
            it('transforms `object` type schemas (with `properties`)', () => {
              const schema = {
                type: 'object',
                properties: {
                  one: { type: 'string', enum: ['object type key string (1)', 'object type key string (2)'] },
                  two: { type: 'string', enum: ['object type key string (1)', 'object type key string (2)'] }
                }
              }

              const values = {}

              const params = {
                '#/': { meta: { component: 'object component' } },
                '#/one': { meta: { component: 'object component' } },
                '#/two': { meta: { component: 'object component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  meta: {
                    type: 'object',
                    schema,
                    uri: '#/',
                    component: 'object component'
                  },
                  elements: {
                    fields: [
                      {
                        meta: {
                          name: 'one',
                          required: false,
                          type: 'string',
                          schema: {
                            type: 'string',
                            enum: ['object type key string (1)', 'object type key string (2)']
                          },
                          rootSchema: schema,
                          uri: '#/one',
                          component: 'object component'
                        },
                        elements: {
                          enum: {
                            items: ['object type key string (1)', 'object type key string (2)'],
                            name: '#/one',
                            required: false
                          }
                        }
                      },
                      {
                        meta: {
                          name: 'two',
                          required: false,
                          type: 'string',
                          schema: {
                            type: 'string',
                            enum: ['object type key string (1)', 'object type key string (2)']
                          },
                          rootSchema: schema,
                          uri: '#/two',
                          component: 'object component'
                        },
                        elements: {
                          enum: {
                            items: ['object type key string (1)', 'object type key string (2)'],
                            name: '#/two',
                            required: false
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `object` type schemas (with `properties` and `required`)', () => {
              const schema = {
                type: 'object',
                properties: {
                  one: { type: 'string', enum: ['object type key string (1)', 'object type key string (2)'] },
                  two: { type: 'string', enum: ['object type key string (1)', 'object type key string (2)'] }
                },
                required: [
                  'one'
                ]
              }

              const values = {}

              const params = {
                '#/': { meta: { component: 'object component' } },
                '#/one': { meta: { component: 'object component' } },
                '#/two': { meta: { component: 'object component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  meta: {
                    type: 'object',
                    schema,
                    uri: '#/',
                    component: 'object component'
                  },
                  elements: {
                    fields: [
                      {
                        meta: {
                          name: 'one',
                          required: true,
                          rootSchema: schema,
                          schema: {
                            type: 'string',
                            enum: ['object type key string (1)', 'object type key string (2)']
                          },
                          type: 'string',
                          uri: '#/one',
                          component: 'object component'
                        },
                        elements: {
                          enum: {
                            items: ['object type key string (1)', 'object type key string (2)'],
                            name: '#/one',
                            required: true
                          }
                        }
                      },
                      {
                        meta: {
                          name: 'two',
                          required: false,
                          rootSchema: schema,
                          schema: {
                            type: 'string',
                            enum: ['object type key string (1)', 'object type key string (2)']
                          },
                          type: 'string',
                          uri: '#/two',
                          component: 'object component'
                        },
                        elements: {
                          enum: {
                            items: ['object type key string (1)', 'object type key string (2)'],
                            name: '#/two',
                            required: false
                          }
                        }
                      }
                    ]
                  }
                })
            })
          })

          describe('Without `enum`', () => {
            it('transforms `object` type schemas (with `properties`)', () => {
              const schema = {
                type: 'object',
                properties: {
                  one: { type: 'string' },
                  two: { type: 'string' }
                }
              }

              const values = {}

              const params = {
                '#/': { meta: { component: 'object component' } },
                '#/one': { meta: { component: 'object component' } },
                '#/two': { meta: { component: 'object component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  meta: {
                    type: 'object',
                    schema,
                    uri: '#/',
                    component: 'object component'
                  },
                  elements: {
                    fields: [
                      {
                        meta: {
                          name: 'one',
                          required: false,
                          type: 'string',
                          schema: {
                            type: 'string'
                          },
                          rootSchema: schema,
                          uri: '#/one',
                          component: 'object component'
                        },
                        elements: {
                          field: {
                            name: '#/one',
                            required: false
                          }
                        }
                      },
                      {
                        meta: {
                          name: 'two',
                          required: false,
                          type: 'string',
                          schema: {
                            type: 'string'
                          },
                          rootSchema: schema,
                          uri: '#/two',
                          component: 'object component'
                        },
                        elements: {
                          field: {
                            name: '#/two',
                            required: false
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `object` type schemas (with `properties` and `required`)', () => {
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

              const values = {}

              const params = {
                '#/': { meta: { component: 'object component' } },
                '#/one': { meta: { component: 'object component' } },
                '#/two': { meta: { component: 'object component' } }
              }

              return expect(transform(schema, values, params))
                .to.eql({
                  meta: {
                    type: 'object',
                    schema,
                    uri: '#/',
                    component: 'object component'
                  },
                  elements: {
                    fields: [
                      {
                        meta: {
                          name: 'one',
                          required: true,
                          rootSchema: schema,
                          schema: { type: 'string' },
                          type: 'string',
                          uri: '#/one',
                          component: 'object component'
                        },
                        elements: {
                          field: {
                            name: '#/one',
                            required: true
                          }
                        }
                      },
                      {
                        meta: {
                          name: 'two',
                          required: false,
                          rootSchema: schema,
                          schema: { type: 'string' },
                          type: 'string',
                          uri: '#/two',
                          component: 'object component'
                        },
                        elements: {
                          field: {
                            name: '#/two',
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

        describe('Without `properties`', () => {
          it('transforms `object` type schemas', () => {
            const schema = { type: 'object' }

            const values = {}

            const params = {
              '#/': { meta: { component: 'object component' } }
            }

            return expect(transform(schema, values, params))
              .to.eql({
                meta: {
                  type: 'object',
                  schema,
                  uri: '#/',
                  component: 'object component'
                },
                elements: {
                  fields: []
                }
              })
          })
        })
      })

      describe('Transforming `boolean` type schemas', () => {
        describe('With `enum`', () => {
          it('transforms `boolean` type schemas', () => {
            const schema = { type: 'boolean', enum: [true, false] }

            const values = {}

            const params = {
              '#/': { meta: { component: 'boolean component' } }
            }

            return expect(transform(schema, values, params))
              .to.eql({
                meta: {
                  type: 'boolean',
                  schema,
                  uri: '#/',
                  component: 'boolean component'
                },
                elements: {
                  enum: {
                    name: '#/',
                    items: [true, false]
                  }
                }
              })
          })
        })

        describe('With `anyOf`', () => {
          it('transforms `boolean` type schemas', () => {
            const schema = { type: 'boolean', anyOf: [{ default: true }, { default: false }, { default: true }] }

            const values = {}

            const params = {
              '#/': { meta: { component: 'boolean component' } }
            }

            return expect(transform(schema, values, params))
              .to.eql({
                meta: {
                  type: 'boolean',
                  schema,
                  uri: '#/',
                  component: 'boolean component'
                },
                elements: {
                  anyOf: {
                    items: [
                      {
                        meta: {
                          type: 'boolean',
                          rootSchema: schema,
                          schema: { default: true },
                          item: 0,
                          required: false,
                          defaultValue: 'true',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: 'true'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'boolean',
                          rootSchema: schema,
                          schema: { default: false },
                          item: 1,
                          required: false,
                          defaultValue: 'false',
                          uri: '#/1'
                        },
                        elements: {
                          field: {
                            name: '#/1',
                            required: false,
                            value: 'false'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'boolean',
                          rootSchema: schema,
                          schema: { default: true },
                          item: 2,
                          required: false,
                          defaultValue: 'true',
                          uri: '#/2'
                        },
                        elements: {
                          field: {
                            name: '#/2',
                            required: false,
                            value: 'true'
                          }
                        }
                      }
                    ],
                    name: '#/'
                  }
                }
              })
          })
        })

        describe('With `oneOf`', () => {
          it('transforms `boolean` type schemas', () => {
            const schema = { type: 'boolean', oneOf: [{ default: true }, { default: false }, { default: true }] }

            const values = {}

            const params = {
              '#/': { meta: { component: 'boolean component' } }
            }

            return expect(transform(schema, values, params))
              .to.eql({
                meta: {
                  type: 'boolean',
                  schema,
                  uri: '#/',
                  component: 'boolean component'
                },
                elements: {
                  oneOf: {
                    items: [
                      {
                        meta: {
                          type: 'boolean',
                          rootSchema: schema,
                          schema: { default: true },
                          item: 0,
                          required: false,
                          defaultValue: 'true',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: 'true'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'boolean',
                          rootSchema: schema,
                          schema: { default: false },
                          item: 1,
                          required: false,
                          defaultValue: 'false',
                          uri: '#/1'
                        },
                        elements: {
                          field: {
                            name: '#/1',
                            required: false,
                            value: 'false'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'boolean',
                          rootSchema: schema,
                          schema: { default: true },
                          item: 2,
                          required: false,
                          defaultValue: 'true',
                          uri: '#/2'
                        },
                        elements: {
                          field: {
                            name: '#/2',
                            required: false,
                            value: 'true'
                          }
                        }
                      }
                    ],
                    name: '#/'
                  }
                }
              })
          })
        })

        describe('With `allOf`', () => {
          it('transforms `boolean` type schemas', () => {
            const schema = { type: 'boolean', allOf: [{ default: true }] }

            const values = {}

            const params = {
              '#/': { meta: { component: 'boolean component' } }
            }

            return expect(transform(schema, values, params))
              .to.eql({
                meta: {
                  type: 'boolean',
                  schema,
                  uri: '#/',
                  defaultValue: 'true',
                  component: 'boolean component'
                },
                elements: {
                  field: {
                    name: '#/',
                    value: 'true'
                  }
                }
              })
          })
        })

        describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
          it('transforms `boolean` type schemas', () => {
            const schema = { type: 'boolean' }

            const values = {}

            const params = {
              '#/': { meta: { component: 'boolean component' } }
            }

            return expect(transform(schema, values, params))
              .to.eql({
                meta: {
                  type: 'boolean',
                  schema,
                  uri: '#/',
                  component: 'boolean component'
                },
                elements: {
                  field: {
                    name: '#/'
                  }
                }
              })
          })
        })
      })

      describe('Transforming `null` type schemas', () => {
        describe('With `enum`', () => {
          it('transforms `null` type schemas', () => {
            const schema = { type: 'null', enum: [null] }

            const values = {}

            const params = {
              '#/': { meta: { component: 'null component' } }
            }

            return expect(transform(schema, values, params))
              .to.eql({
                meta: {
                  type: 'null',
                  schema,
                  uri: '#/',
                  component: 'null component'
                },
                elements: {
                  enum: {
                    name: '#/',
                    items: [null]
                  }
                }
              })
          })
        })

        describe('With `anyOf`', () => {
          it('transforms `null` type schemas', () => {
            const schema = { type: 'null', anyOf: [{ default: null }, { default: null }, { default: null }] }

            const values = {}

            const params = {
              '#/': { meta: { component: 'null component' } }
            }

            return expect(transform(schema, values, params))
              .to.eql({
                meta: {
                  type: 'null',
                  schema,
                  uri: '#/',
                  component: 'null component'
                },
                elements: {
                  anyOf: {
                    items: [
                      {
                        meta: {
                          type: 'null',
                          rootSchema: schema,
                          schema: { default: null },
                          item: 0,
                          required: false,
                          defaultValue: 'null',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: 'null'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'null',
                          rootSchema: schema,
                          schema: { default: null },
                          item: 1,
                          required: false,
                          defaultValue: 'null',
                          uri: '#/1'
                        },
                        elements: {
                          field: {
                            name: '#/1',
                            required: false,
                            value: 'null'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'null',
                          rootSchema: schema,
                          schema: { default: null },
                          item: 2,
                          required: false,
                          defaultValue: 'null',
                          uri: '#/2'
                        },
                        elements: {
                          field: {
                            name: '#/2',
                            required: false,
                            value: 'null'
                          }
                        }
                      }
                    ],
                    name: '#/'
                  }
                }
              })
          })
        })

        describe('With `oneOf`', () => {
          it('transforms `null` type schemas', () => {
            const schema = { type: 'null', oneOf: [{ default: null }, { default: null }, { default: null }] }

            const values = {}

            const params = {
              '#/': { meta: { component: 'null component' } }
            }

            return expect(transform(schema, values, params))
              .to.eql({
                meta: {
                  type: 'null',
                  schema,
                  uri: '#/',
                  component: 'null component'
                },
                elements: {
                  oneOf: {
                    items: [
                      {
                        meta: {
                          type: 'null',
                          rootSchema: schema,
                          schema: { default: null },
                          item: 0,
                          required: false,
                          defaultValue: 'null',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: 'null'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'null',
                          rootSchema: schema,
                          schema: { default: null },
                          item: 1,
                          required: false,
                          defaultValue: 'null',
                          uri: '#/1'
                        },
                        elements: {
                          field: {
                            name: '#/1',
                            required: false,
                            value: 'null'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'null',
                          rootSchema: schema,
                          schema: { default: null },
                          item: 2,
                          required: false,
                          defaultValue: 'null',
                          uri: '#/2'
                        },
                        elements: {
                          field: {
                            name: '#/2',
                            required: false,
                            value: 'null'
                          }
                        }
                      }
                    ],
                    name: '#/'
                  }
                }
              })
          })
        })

        describe('With `allOf`', () => {
          it('transforms `null` type schemas', () => {
            const schema = { type: 'null', allOf: [{ default: null }] }

            const values = {}

            const params = {
              '#/': { meta: { component: 'null component' } }
            }

            return expect(transform(schema, values, params))
              .to.eql({
                meta: {
                  type: 'null',
                  schema,
                  uri: '#/',
                  defaultValue: 'null',
                  component: 'null component'
                },
                elements: {
                  field: {
                    name: '#/',
                    value: 'null'
                  }
                }
              })
          })
        })

        describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
          it('transforms `null` type schemas', () => {
            const schema = { type: 'null' }

            const values = {}

            const params = {
              '#/': { meta: { component: 'null component' } }
            }

            return expect(transform(schema, values, params))
              .to.eql({
                meta: {
                  type: 'null',
                  schema,
                  uri: '#/',
                  component: 'null component'
                },
                elements: {
                  field: {
                    name: '#/'
                  }
                }
              })
          })
        })
      })
    })

    describe('Without params', () => {
      it('transforms', () => {
        const schema = {
          $id: 'https://example.com/geographical-location.schema.json',
          $schema: 'http://json-schema.org/draft-07/schema#',
          title: 'Latitude and Longitude',
          description: 'A geographical coordinate',
          required: ['latitude', 'longitude'],
          type: 'object',
          properties: {
            stringTypeSubSchema: {
              title: 'String type sub schema',
              type: 'string',
              minLength: 1,
              maxLength: 10
            },
            numberTypeSubSchema: {
              title: 'Number type sub schema',
              type: 'number',
              min: 1,
              max: 10
            },
            arrayTypeSubSchema: {
              title: 'Array type sub schema',
              type: 'array',
              items: [
                {
                  type: 'string'
                }
              ]
            },
            objectTypeSubSchema: {
              title: 'Object type sub schema',
              type: 'object',
              properties: {
                one: { type: 'string' },
                two: { type: 'number' }
              }
            },
            booleanTypeSubSchema: {
              title: 'Boolean type sub schema',
              type: 'boolean'
            },
            nullTypeSubSchema: {
              title: 'Null type sub schema',
              type: 'null'
            },
            latitude: {
              title: 'Latitude',
              type: 'number',
              minimum: -90,
              maximum: 90,
              multipleOf: 42.0
            },
            longitude: {
              title: 'Longitude',
              type: 'number',
              minimum: -180,
              maximum: 180,
              exclusiveMinimum: true,
              exclusiveMaximum: true
            }
          }
        }

        return expect(transform(schema))
          .to.eql({
            meta: {
              schema,
              type: 'object',
              uri: '#/'
            },
            elements: {
              description: 'A geographical coordinate',
              fields: [
                {
                  meta: {
                    maxLength: 10,
                    minLength: 1,
                    name: 'stringTypeSubSchema',
                    required: false,
                    rootSchema: schema,
                    schema: {
                      maxLength: 10,
                      minLength: 1,
                      title: 'String type sub schema',
                      type: 'string'
                    },
                    type: 'string',
                    uri: '#/stringTypeSubSchema'
                  },
                  elements: {
                    field: {
                      name: '#/stringTypeSubSchema',
                      maxLength: 10,
                      minLength: 1,
                      required: false
                    },
                    title: 'String type sub schema'
                  }
                },
                {
                  meta: {
                    name: 'numberTypeSubSchema',
                    required: false,
                    rootSchema: schema,
                    schema: {
                      max: 10,
                      min: 1,
                      title: 'Number type sub schema',
                      type: 'number'
                    },
                    type: 'number',
                    uri: '#/numberTypeSubSchema'
                  },
                  elements: {
                    field: {
                      name: '#/numberTypeSubSchema',
                      required: false
                    },
                    title: 'Number type sub schema'
                  }
                },
                {
                  meta: {
                    name: 'arrayTypeSubSchema',
                    required: false,
                    rootSchema: schema,
                    schema: {
                      items: [
                        {
                          type: 'string'
                        }
                      ],
                      title: 'Array type sub schema',
                      type: 'array'
                    },
                    type: 'array',
                    uri: '#/arrayTypeSubSchema'
                  },
                  elements: {
                    fields: [
                      {
                        meta: {
                          required: false,
                          rootSchema: schema,
                          schema: {
                            type: 'string'
                          },
                          type: 'string',
                          uri: '#/arrayTypeSubSchema/0',
                          item: 0
                        },
                        elements: {
                          field: {
                            name: '#/arrayTypeSubSchema/0',
                            required: false
                          }
                        }
                      }
                    ],
                    title: 'Array type sub schema'
                  }
                },
                {
                  meta: {
                    name: 'objectTypeSubSchema',
                    required: false,
                    rootSchema: schema,
                    schema: {
                      properties: {
                        one: { type: 'string' },
                        two: { type: 'number' }
                      },
                      title: 'Object type sub schema',
                      type: 'object'
                    },
                    type: 'object',
                    uri: '#/objectTypeSubSchema'
                  },
                  elements: {
                    fields: [
                      {
                        meta: {
                          name: 'one',
                          required: false,
                          rootSchema: schema,
                          schema: {
                            type: 'string'
                          },
                          type: 'string',
                          uri: '#/objectTypeSubSchema/one'
                        },
                        elements: {
                          field: {
                            name: '#/objectTypeSubSchema/one',
                            required: false
                          }
                        }
                      },
                      {
                        meta: {
                          name: 'two',
                          required: false,
                          rootSchema: schema,
                          schema: {
                            type: 'number'
                          },
                          type: 'number',
                          uri: '#/objectTypeSubSchema/two'
                        },
                        elements: {
                          field: {
                            name: '#/objectTypeSubSchema/two',
                            required: false
                          }
                        }
                      }
                    ],
                    title: 'Object type sub schema'
                  }
                },
                {
                  meta: {
                    name: 'booleanTypeSubSchema',
                    required: false,
                    rootSchema: schema,
                    schema: {
                      title: 'Boolean type sub schema',
                      type: 'boolean'
                    },
                    type: 'boolean',
                    uri: '#/booleanTypeSubSchema'
                  },
                  elements: {
                    field: {
                      name: '#/booleanTypeSubSchema',
                      required: false
                    },
                    title: 'Boolean type sub schema'
                  }
                },
                {
                  meta: {
                    name: 'nullTypeSubSchema',
                    required: false,
                    rootSchema: schema,
                    schema: {
                      title: 'Null type sub schema',
                      type: 'null'
                    },
                    type: 'null',
                    uri: '#/nullTypeSubSchema'
                  },
                  elements: {
                    field: {
                      name: '#/nullTypeSubSchema',
                      required: false
                    },
                    title: 'Null type sub schema'
                  }
                },
                {
                  meta: {
                    max: 90,
                    min: -90,
                    name: 'latitude',
                    required: true,
                    rootSchema: schema,
                    schema: {
                      maximum: 90,
                      minimum: -90,
                      multipleOf: 42,
                      title: 'Latitude',
                      type: 'number'
                    },
                    step: 42,
                    type: 'number',
                    uri: '#/latitude'
                  },
                  elements: {
                    field: {
                      name: '#/latitude',
                      max: 90,
                      min: -90,
                      required: true,
                      step: 42
                    },
                    title: 'Latitude'
                  }
                },
                {
                  meta: {
                    isExclusiveMax: true,
                    isExclusiveMin: true,
                    max: 180,
                    min: -180,
                    name: 'longitude',
                    required: true,
                    rootSchema: schema,
                    schema: {
                      exclusiveMaximum: true,
                      exclusiveMinimum: true,
                      maximum: 180,
                      minimum: -180,
                      title: 'Longitude',
                      type: 'number'
                    },
                    type: 'number',
                    uri: '#/longitude'
                  },
                  elements: {
                    field: {
                      name: '#/longitude',
                      max: 180,
                      min: -180,
                      required: true
                    },
                    title: 'Longitude'
                  }
                }
              ],
              title: 'Latitude and Longitude'
            }
          })
      })

      describe('Transforming `number` type schemas', () => {
        describe('With `enum`', () => {
          it('transforms `number` type schemas', () => {
            const schema = { type: 'number', enum: [1, 2, 3] }

            return expect(transform(schema))
              .to.eql({
                meta: {
                  type: 'number',
                  schema,
                  uri: '#/'
                },
                elements: {
                  enum: {
                    items: [1, 2, 3],
                    name: '#/'
                  }
                }
              })
          })
        })

        describe('With `anyOf`', () => {
          it('transforms `number` type schemas', () => {
            const schema = { type: 'number', anyOf: [{ default: 1 }, { default: 2 }, { default: 3 }] }

            return expect(transform(schema))
              .to.eql({
                meta: {
                  type: 'number',
                  schema,
                  uri: '#/'
                },
                elements: {
                  anyOf: {
                    items: [
                      {
                        meta: {
                          type: 'number',
                          rootSchema: schema,
                          schema: { default: 1 },
                          item: 0,
                          required: false,
                          defaultValue: '1',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: '1'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'number',
                          rootSchema: schema,
                          schema: { default: 2 },
                          item: 1,
                          required: false,
                          defaultValue: '2',
                          uri: '#/1'
                        },
                        elements: {
                          field: {
                            name: '#/1',
                            required: false,
                            value: '2'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'number',
                          rootSchema: schema,
                          schema: { default: 3 },
                          item: 2,
                          required: false,
                          defaultValue: '3',
                          uri: '#/2'
                        },
                        elements: {
                          field: {
                            name: '#/2',
                            required: false,
                            value: '3'
                          }
                        }
                      }
                    ],
                    name: '#/'
                  }
                }
              })
          })
        })

        describe('With `oneOf`', () => {
          it('transforms `number` type schemas', () => {
            const schema = { type: 'number', oneOf: [{ default: 1 }, { default: 2 }, { default: 3 }] }

            return expect(transform(schema))
              .to.eql({
                meta: {
                  type: 'number',
                  schema,
                  uri: '#/'
                },
                elements: {
                  oneOf: {
                    items: [
                      {
                        meta: {
                          type: 'number',
                          rootSchema: schema,
                          schema: { default: 1 },
                          item: 0,
                          required: false,
                          defaultValue: '1',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: '1'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'number',
                          rootSchema: schema,
                          schema: { default: 2 },
                          item: 1,
                          required: false,
                          defaultValue: '2',
                          uri: '#/1'
                        },
                        elements: {
                          field: {
                            name: '#/1',
                            required: false,
                            value: '2'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'number',
                          rootSchema: schema,
                          schema: { default: 3 },
                          item: 2,
                          required: false,
                          defaultValue: '3',
                          uri: '#/2'
                        },
                        elements: {
                          field: {
                            name: '#/2',
                            required: false,
                            value: '3'
                          }
                        }
                      }
                    ],
                    name: '#/'
                  }
                }
              })
          })
        })

        describe('With `allOf`', () => {
          it('transforms `number` type schemas', () => {
            const schema = { type: 'number', allOf: [{ minimum: 1 }, { default: 2 }, { maximum: 3 }] }

            return expect(transform(schema))
              .to.eql({
                meta: {
                  type: 'number',
                  schema,
                  defaultValue: '2',
                  uri: '#/'
                },
                elements: {
                  field: {
                    name: '#/',
                    value: '2'
                  }
                }
              })
          })
        })

        describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
          it('transforms `number` type schemas', () => {
            const schema = { type: 'number' }

            return expect(transform(schema))
              .to.eql({
                meta: {
                  type: 'number',
                  schema,
                  uri: '#/'
                },
                elements: {
                  field: {
                    name: '#/'
                  }
                }
              })
          })
        })
      })

      describe('Transforming `string` type schemas', () => {
        describe('With `enum`', () => {
          it('transforms `string` type schemas', () => {
            const schema = { type: 'string', enum: ['string (1)', 'string (2)', 'string (3)'] }

            return expect(transform(schema))
              .to.eql({
                meta: {
                  type: 'string',
                  schema,
                  uri: '#/'
                },
                elements: {
                  enum: {
                    items: ['string (1)', 'string (2)', 'string (3)'],
                    name: '#/'
                  }
                }
              })
          })
        })

        describe('With `anyOf`', () => {
          it('transforms `string` type schemas', () => {
            const schema = { type: 'string', anyOf: [{ default: 'string (1)' }, { default: 'string (2)' }, { default: 'string (3)' }] }

            return expect(transform(schema))
              .to.eql({
                meta: {
                  type: 'string',
                  schema,
                  uri: '#/'
                },
                elements: {
                  anyOf: {
                    items: [
                      {
                        meta: {
                          type: 'string',
                          rootSchema: schema,
                          schema: { default: 'string (1)' },
                          item: 0,
                          required: false,
                          defaultValue: 'string (1)',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: 'string (1)'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'string',
                          rootSchema: schema,
                          schema: { default: 'string (2)' },
                          item: 1,
                          required: false,
                          defaultValue: 'string (2)',
                          uri: '#/1'
                        },
                        elements: {
                          field: {
                            name: '#/1',
                            required: false,
                            value: 'string (2)'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'string',
                          rootSchema: schema,
                          schema: { default: 'string (3)' },
                          item: 2,
                          required: false,
                          defaultValue: 'string (3)',
                          uri: '#/2'
                        },
                        elements: {
                          field: {
                            name: '#/2',
                            required: false,
                            value: 'string (3)'
                          }
                        }
                      }
                    ],
                    name: '#/'
                  }
                }
              })
          })
        })

        describe('With `oneOf`', () => {
          it('transforms `string` type schemas', () => {
            const schema = { type: 'string', oneOf: [{ default: 'string (1)' }, { default: 'string (2)' }, { default: 'string (3)' }] }

            return expect(transform(schema))
              .to.eql({
                meta: {
                  type: 'string',
                  schema,
                  uri: '#/'
                },
                elements: {
                  oneOf: {
                    items: [
                      {
                        meta: {
                          type: 'string',
                          rootSchema: schema,
                          schema: { default: 'string (1)' },
                          item: 0,
                          required: false,
                          defaultValue: 'string (1)',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: 'string (1)'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'string',
                          rootSchema: schema,
                          schema: { default: 'string (2)' },
                          item: 1,
                          required: false,
                          defaultValue: 'string (2)',
                          uri: '#/1'
                        },
                        elements: {
                          field: {
                            name: '#/1',
                            required: false,
                            value: 'string (2)'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'string',
                          rootSchema: schema,
                          schema: { default: 'string (3)' },
                          item: 2,
                          required: false,
                          defaultValue: 'string (3)',
                          uri: '#/2'
                        },
                        elements: {
                          field: {
                            name: '#/2',
                            required: false,
                            value: 'string (3)'
                          }
                        }
                      }
                    ],
                    name: '#/'
                  }
                }
              })
          })
        })

        describe('With `allOf`', () => {
          it('transforms `string` type schemas', () => {
            const schema = { type: 'string', allOf: [{ minLength: 1 }, { default: 'string' }, { maxLength: 20 }] }

            return expect(transform(schema))
              .to.eql({
                meta: {
                  type: 'string',
                  schema,
                  defaultValue: 'string',
                  uri: '#/'
                },
                elements: {
                  field: {
                    name: '#/',
                    value: 'string'
                  }
                }
              })
          })
        })

        describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
          it('transforms `string` type schemas', () => {
            const schema = { type: 'string' }

            return expect(transform(schema))
              .to.eql({
                meta: {
                  type: 'string',
                  schema,
                  uri: '#/'
                },
                elements: {
                  field: {
                    name: '#/'
                  }
                }
              })
          })
        })
      })

      describe('Transforming `array` type schemas', () => {
        describe('With `items`', () => {
          describe('With `enum`', () => {
            it('transforms `array` type schemas (`items` is `number` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'number',
                    enum: [1, 2, 3]
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
                          required: false,
                          type: 'number',
                          schema: {
                            type: 'number',
                            enum: [1, 2, 3]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0
                        },
                        elements: {
                          enum: {
                            items: [1, 2, 3],
                            name: '#/0',
                            required: false
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `string` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'string',
                    enum: ['string (1)', 'string (2)', 'string (3)']
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
                          required: false,
                          type: 'string',
                          schema: {
                            type: 'string',
                            enum: ['string (1)', 'string (2)', 'string (3)']
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0
                        },
                        elements: {
                          enum: {
                            items: ['string (1)', 'string (2)', 'string (3)'],
                            name: '#/0',
                            required: false
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `number` type)', () => {
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
                        elements: {
                          enum: {
                            items: [
                              1,
                              2,
                              3
                            ],
                            name: '#/0',
                            required: false
                          }
                        },
                        meta: {
                          item: 0,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            enum: [
                              1,
                              2,
                              3
                            ],
                            type: 'number'
                          },
                          type: 'number',
                          uri: '#/0'
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `string` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'string',
                    enum: [
                      'array type index string type (1)',
                      'array type index string type (2)',
                      'array type index string type (3)'
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
                          item: 0,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            enum: [
                              'array type index string type (1)',
                              'array type index string type (2)',
                              'array type index string type (3)'
                            ],
                            type: 'string'
                          },
                          type: 'string',
                          uri: '#/0'
                        },
                        elements: {
                          enum: {
                            items: [
                              'array type index string type (1)',
                              'array type index string type (2)',
                              'array type index string type (3)'
                            ],
                            name: '#/0',
                            required: false
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `boolean` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'boolean',
                    enum: [true, false]
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
                          item: 0,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            enum: [true, false],
                            type: 'boolean'
                          },
                          type: 'boolean',
                          uri: '#/0'
                        },
                        elements: {
                          enum: {
                            items: [true, false],
                            name: '#/0',
                            required: false
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `null` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'null',
                    enum: [null]
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
                          item: 0,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            enum: [null],
                            type: 'null'
                          },
                          type: 'null',
                          uri: '#/0'
                        },
                        elements: {
                          enum: {
                            items: [null],
                            name: '#/0',
                            required: false
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `number` type and `string` type and `boolean` type and `null` type)', () => {
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
                  },
                  {
                    type: 'string',
                    enum: [
                      'array type index string type (1)',
                      'array type index string type (2)',
                      'array type index string type (3)'
                    ]
                  },
                  {
                    type: 'boolean',
                    enum: [true, false]
                  },
                  {
                    type: 'null',
                    enum: [null]
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
                        elements: {
                          enum: {
                            items: [
                              1,
                              2,
                              3
                            ],
                            name: '#/0',
                            required: false
                          }
                        },
                        meta: {
                          item: 0,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            enum: [
                              1,
                              2,
                              3
                            ],
                            type: 'number'
                          },
                          type: 'number',
                          uri: '#/0'
                        }
                      },
                      {
                        meta: {
                          item: 1,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            enum: [
                              'array type index string type (1)',
                              'array type index string type (2)',
                              'array type index string type (3)'
                            ],
                            type: 'string'
                          },
                          type: 'string',
                          uri: '#/1'
                        },
                        elements: {
                          enum: {
                            items: [
                              'array type index string type (1)',
                              'array type index string type (2)',
                              'array type index string type (3)'
                            ],
                            name: '#/1',
                            required: false
                          }
                        }
                      },
                      {
                        meta: {
                          item: 2,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            enum: [true, false],
                            type: 'boolean'
                          },
                          type: 'boolean',
                          uri: '#/2'
                        },
                        elements: {
                          enum: {
                            items: [true, false],
                            name: '#/2',
                            required: false
                          }
                        }
                      },
                      {
                        meta: {
                          item: 3,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            enum: [null],
                            type: 'null'
                          },
                          type: 'null',
                          uri: '#/3'
                        },
                        elements: {
                          enum: {
                            items: [null],
                            name: '#/3',
                            required: false
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `object` type with `properties`)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'object',
                    properties: {
                      one: {
                        type: 'string',
                        enum: [
                          'array type index string type (1)',
                          'array type index string type (2)',
                          'array type index string type (3)'
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
                          required: false,
                          type: 'object',
                          schema: {
                            type: 'object',
                            properties: {
                              one: {
                                type: 'string',
                                enum: [
                                  'array type index string type (1)',
                                  'array type index string type (2)',
                                  'array type index string type (3)'
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
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              elements: {
                                enum: {
                                  items: [
                                    'array type index string type (1)',
                                    'array type index string type (2)',
                                    'array type index string type (3)'
                                  ],
                                  name: '#/0/one',
                                  required: false
                                }
                              },
                              meta: {
                                name: 'one',
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  enum: [
                                    'array type index string type (1)',
                                    'array type index string type (2)',
                                    'array type index string type (3)'
                                  ],
                                  type: 'string'
                                },
                                type: 'string',
                                uri: '#/0/one'
                              }
                            },
                            {
                              elements: {
                                enum: {
                                  items: [
                                    1,
                                    2,
                                    3
                                  ],
                                  name: '#/0/two',
                                  required: false
                                }
                              },
                              meta: {
                                name: 'two',
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  enum: [
                                    1,
                                    2,
                                    3
                                  ],
                                  type: 'number'
                                },
                                type: 'number',
                                uri: '#/0/two'
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `object` type with `properties` and `required`)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'object',
                    properties: {
                      one: {
                        type: 'string',
                        enum: [
                          'array type index string type (1)',
                          'array type index string type (2)',
                          'array type index string type (3)'
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
                          required: false,
                          type: 'object',
                          schema: {
                            type: 'object',
                            properties: {
                              one: {
                                type: 'string',
                                enum: [
                                  'array type index string type (1)',
                                  'array type index string type (2)',
                                  'array type index string type (3)'
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
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              elements: {
                                enum: {
                                  items: [
                                    'array type index string type (1)',
                                    'array type index string type (2)',
                                    'array type index string type (3)'
                                  ],
                                  name: '#/0/one',
                                  required: true
                                }
                              },
                              meta: {
                                name: 'one',
                                required: true,
                                rootSchema: schema,
                                schema: {
                                  enum: [
                                    'array type index string type (1)',
                                    'array type index string type (2)',
                                    'array type index string type (3)'
                                  ],
                                  type: 'string'
                                },
                                type: 'string',
                                uri: '#/0/one'
                              }
                            },
                            {
                              elements: {
                                enum: {
                                  items: [
                                    1,
                                    2,
                                    3
                                  ],
                                  name: '#/0/two',
                                  required: false
                                }
                              },
                              meta: {
                                name: 'two',
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  enum: [
                                    1,
                                    2,
                                    3
                                  ],
                                  type: 'number'
                                },
                                type: 'number',
                                uri: '#/0/two'
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `array` type with `items` is `number` type)', () => {
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
                          required: false,
                          type: 'array',
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
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              elements: {
                                enum: {
                                  items: [
                                    1,
                                    2,
                                    3
                                  ],
                                  name: '#/0/0',
                                  required: false
                                }
                              },
                              meta: {
                                item: 0,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  enum: [
                                    1,
                                    2,
                                    3
                                  ],
                                  type: 'number'
                                },
                                type: 'number',
                                uri: '#/0/0'
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `array` type with `items` is `string` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'array',
                    items: [
                      {
                        type: 'string',
                        enum: [
                          'array type index string type (1)',
                          'array type index string type (2)',
                          'array type index string type (3)'
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
                          required: false,
                          type: 'array',
                          schema: {
                            type: 'array',
                            items: [
                              {
                                type: 'string',
                                enum: [
                                  'array type index string type (1)',
                                  'array type index string type (2)',
                                  'array type index string type (3)'
                                ]
                              }
                            ]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              meta: {
                                item: 0,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  enum: [
                                    'array type index string type (1)',
                                    'array type index string type (2)',
                                    'array type index string type (3)'
                                  ],
                                  type: 'string'
                                },
                                type: 'string',
                                uri: '#/0/0'
                              },
                              elements: {
                                enum: {
                                  items: [
                                    'array type index string type (1)',
                                    'array type index string type (2)',
                                    'array type index string type (3)'
                                  ],
                                  name: '#/0/0',
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

            it('transforms `array` type schemas (`items` is `array` type with `items` is `array` type with `items` is `boolean` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'array',
                    items: [
                      {
                        type: 'boolean',
                        enum: [true, false]
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
                          required: false,
                          type: 'array',
                          schema: {
                            type: 'array',
                            items: [
                              {
                                type: 'boolean',
                                enum: [true, false]
                              }
                            ]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              meta: {
                                item: 0,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  enum: [true, false],
                                  type: 'boolean'
                                },
                                type: 'boolean',
                                uri: '#/0/0'
                              },
                              elements: {
                                enum: {
                                  items: [true, false],
                                  name: '#/0/0',
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

            it('transforms `array` type schemas (`items` is `array` type with `items` is `array` type with `items` is `null` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'array',
                    items: [
                      {
                        type: 'null',
                        enum: [null]
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
                          required: false,
                          type: 'array',
                          schema: {
                            type: 'array',
                            items: [
                              {
                                type: 'null',
                                enum: [null]
                              }
                            ]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              meta: {
                                item: 0,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  enum: [null],
                                  type: 'null'
                                },
                                type: 'null',
                                uri: '#/0/0'
                              },
                              elements: {
                                enum: {
                                  items: [null],
                                  name: '#/0/0',
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

            it('transforms `array` type schemas (`items` is `array` type with `items` is `array` type with `items` is `number` type and `string` type and `boolean` type and `null` type)', () => {
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
                      },
                      {
                        type: 'string',
                        enum: [
                          'array type index string type (1)',
                          'array type index string type (2)',
                          'array type index string type (3)'
                        ]
                      },
                      {
                        type: 'boolean',
                        enum: [true, false]
                      },
                      {
                        type: 'null',
                        enum: [null]
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
                          required: false,
                          type: 'array',
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
                              },
                              {
                                type: 'string',
                                enum: [
                                  'array type index string type (1)',
                                  'array type index string type (2)',
                                  'array type index string type (3)'
                                ]
                              },
                              {
                                type: 'boolean',
                                enum: [true, false]
                              },
                              {
                                type: 'null',
                                enum: [null]
                              }
                            ]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              elements: {
                                enum: {
                                  items: [
                                    1,
                                    2,
                                    3
                                  ],
                                  name: '#/0/0',
                                  required: false
                                }
                              },
                              meta: {
                                item: 0,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  enum: [
                                    1,
                                    2,
                                    3
                                  ],
                                  type: 'number'
                                },
                                type: 'number',
                                uri: '#/0/0'
                              }
                            },
                            {
                              meta: {
                                item: 1,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  enum: [
                                    'array type index string type (1)',
                                    'array type index string type (2)',
                                    'array type index string type (3)'
                                  ],
                                  type: 'string'
                                },
                                type: 'string',
                                uri: '#/0/1'
                              },
                              elements: {
                                enum: {
                                  items: [
                                    'array type index string type (1)',
                                    'array type index string type (2)',
                                    'array type index string type (3)'
                                  ],
                                  name: '#/0/1',
                                  required: false
                                }
                              }
                            },
                            {
                              meta: {
                                item: 2,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  enum: [true, false],
                                  type: 'boolean'
                                },
                                type: 'boolean',
                                uri: '#/0/2'
                              },
                              elements: {
                                enum: {
                                  items: [true, false],
                                  name: '#/0/2',
                                  required: false
                                }
                              }
                            },
                            {
                              meta: {
                                item: 3,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  enum: [null],
                                  type: 'null'
                                },
                                type: 'null',
                                uri: '#/0/3'
                              },
                              elements: {
                                enum: {
                                  items: [null],
                                  name: '#/0/3',
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

            it('transforms `array` type schemas (`items` is `object` type with `properties`)', () => {
              const schema = {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    one: { type: 'string' },
                    two: { type: 'string' }
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
                          required: false,
                          type: 'object',
                          schema: {
                            type: 'object',
                            properties: {
                              one: { type: 'string' },
                              two: { type: 'string' }
                            }
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              meta: {
                                name: 'one',
                                required: false,
                                type: 'string',
                                schema: { type: 'string' },
                                rootSchema: schema,
                                uri: '#/0/one'
                              },
                              elements: {
                                field: {
                                  name: '#/0/one',
                                  required: false
                                }
                              }
                            },
                            {
                              meta: {
                                name: 'two',
                                required: false,
                                type: 'string',
                                schema: { type: 'string' },
                                rootSchema: schema,
                                uri: '#/0/two'
                              },
                              elements: {
                                field: {
                                  name: '#/0/two',
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

            it('transforms `array` type schemas (`items` is `object` type with `properties` and `required`)', () => {
              const schema = {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    one: { type: 'string' },
                    two: { type: 'string' }
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
                          required: false,
                          type: 'object',
                          schema: {
                            type: 'object',
                            properties: {
                              one: { type: 'string' },
                              two: { type: 'string' }
                            },
                            required: [
                              'one'
                            ]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              meta: {
                                name: 'one',
                                required: true,
                                type: 'string',
                                schema: { type: 'string' },
                                rootSchema: schema,
                                uri: '#/0/one'
                              },
                              elements: {
                                field: {
                                  name: '#/0/one',
                                  required: true
                                }
                              }
                            },
                            {
                              meta: {
                                name: 'two',
                                required: false,
                                type: 'string',
                                schema: { type: 'string' },
                                rootSchema: schema,
                                uri: '#/0/two'
                              },
                              elements: {
                                field: {
                                  name: '#/0/two',
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

            it('transforms `array` type schemas (`items` is `boolean` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'boolean',
                    enum: [true, false]
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
                          required: false,
                          type: 'boolean',
                          schema: {
                            type: 'boolean',
                            enum: [true, false]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0
                        },
                        elements: {
                          enum: {
                            items: [true, false],
                            name: '#/0',
                            required: false
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `null` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'null',
                    enum: [null]
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
                          required: false,
                          type: 'null',
                          schema: {
                            type: 'null',
                            enum: [null]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0
                        },
                        elements: {
                          enum: {
                            items: [null],
                            name: '#/0',
                            required: false
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `number` type and `string` type and `boolean` type and `null` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'number',
                    enum: [1, 2, 3]
                  },
                  {
                    type: 'string',
                    enum: ['string (1)', 'string (2)', 'string (3)']
                  },
                  {
                    type: 'boolean',
                    enum: [true, false]
                  },
                  {
                    type: 'null',
                    enum: [null]
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
                          required: false,
                          type: 'number',
                          schema: {
                            type: 'number',
                            enum: [1, 2, 3]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0
                        },
                        elements: {
                          enum: {
                            items: [1, 2, 3],
                            name: '#/0',
                            required: false
                          }
                        }
                      },
                      {
                        meta: {
                          required: false,
                          type: 'string',
                          schema: {
                            type: 'string',
                            enum: ['string (1)', 'string (2)', 'string (3)']
                          },
                          rootSchema: schema,
                          uri: '#/1',
                          item: 1
                        },
                        elements: {
                          enum: {
                            items: ['string (1)', 'string (2)', 'string (3)'],
                            name: '#/1',
                            required: false
                          }
                        }
                      },
                      {
                        meta: {
                          required: false,
                          type: 'boolean',
                          schema: {
                            type: 'boolean',
                            enum: [true, false]
                          },
                          rootSchema: schema,
                          uri: '#/2',
                          item: 2
                        },
                        elements: {
                          enum: {
                            items: [true, false],
                            name: '#/2',
                            required: false
                          }
                        }
                      },
                      {
                        meta: {
                          required: false,
                          type: 'null',
                          schema: {
                            type: 'null',
                            enum: [null]
                          },
                          rootSchema: schema,
                          uri: '#/3',
                          item: 3
                        },
                        elements: {
                          enum: {
                            items: [null],
                            name: '#/3',
                            required: false
                          }
                        }
                      }
                    ]
                  }
                })
            })
          })

          describe('Without `enum`', () => {
            it('transforms `array` type schemas (`items` is `number` type)', () => {
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
                          required: false,
                          type: 'number',
                          schema: {
                            type: 'number'
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `string` type)', () => {
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
                          required: false,
                          type: 'string',
                          schema: {
                            type: 'string'
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `object` type with `properties`)', () => {
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
                          required: false,
                          type: 'object',
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
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              elements: {
                                field: {
                                  name: '#/0/one',
                                  required: false
                                }
                              },
                              meta: {
                                name: 'one',
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  type: 'string'
                                },
                                type: 'string',
                                uri: '#/0/one'
                              }
                            },
                            {
                              elements: {
                                field: {
                                  name: '#/0/two',
                                  required: false
                                }
                              },
                              meta: {
                                name: 'two',
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  type: 'number'
                                },
                                type: 'number',
                                uri: '#/0/two'
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `object` type with `properties` and `required`)', () => {
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
                          required: false,
                          type: 'object',
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
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              meta: {
                                name: 'one',
                                required: true,
                                rootSchema: schema,
                                schema: {
                                  type: 'string'
                                },
                                type: 'string',
                                uri: '#/0/one'
                              },
                              elements: {
                                field: {
                                  name: '#/0/one',
                                  required: true
                                }
                              }
                            },
                            {
                              meta: {
                                name: 'two',
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  type: 'number'
                                },
                                type: 'number',
                                uri: '#/0/two'
                              },
                              elements: {
                                field: {
                                  name: '#/0/two',
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

            it('transforms `array` type schemas (`items` is `array` type with `items` is `number` type)', () => {
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
                          item: 0,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            type: 'number'
                          },
                          type: 'number',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `string` type)', () => {
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
                          item: 0,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            type: 'string'
                          },
                          type: 'string',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `boolean` type)', () => {
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
                          item: 0,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            type: 'boolean'
                          },
                          type: 'boolean',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `null` type)', () => {
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
                          item: 0,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            type: 'null'
                          },
                          type: 'null',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `number` type and `string` type and `boolean` type and `null` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'number'
                  },
                  {
                    type: 'string'
                  },
                  {
                    type: 'boolean'
                  },
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
                          item: 0,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            type: 'number'
                          },
                          type: 'number',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false
                          }
                        }
                      },
                      {
                        meta: {
                          item: 1,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            type: 'string'
                          },
                          type: 'string',
                          uri: '#/1'
                        },
                        elements: {
                          field: {
                            name: '#/1',
                            required: false
                          }
                        }
                      },
                      {
                        meta: {
                          item: 2,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            type: 'boolean'
                          },
                          type: 'boolean',
                          uri: '#/2'
                        },
                        elements: {
                          field: {
                            name: '#/2',
                            required: false
                          }
                        }
                      },
                      {
                        meta: {
                          item: 3,
                          required: false,
                          rootSchema: schema,
                          schema: {
                            type: 'null'
                          },
                          type: 'null',
                          uri: '#/3'
                        },
                        elements: {
                          field: {
                            name: '#/3',
                            required: false
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `array` type with `items` is `number` type)', () => {
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
                        elements: {
                          fields: [
                            {
                              elements: {
                                field: {
                                  name: '#/0/0',
                                  required: false
                                }
                              },
                              meta: {
                                item: 0,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  type: 'number'
                                },
                                type: 'number',
                                uri: '#/0/0'
                              }
                            }
                          ]
                        },
                        meta: {
                          required: false,
                          type: 'array',
                          schema: {
                            type: 'array',
                            items: [
                              {
                                type: 'number'
                              }
                            ]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `array` type with `items` is `array` type with `items` is `string` type)', () => {
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
                          required: false,
                          type: 'array',
                          schema: {
                            type: 'array',
                            items: [
                              {
                                type: 'string'
                              }
                            ]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              meta: {
                                item: 0,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  type: 'string'
                                },
                                type: 'string',
                                uri: '#/0/0'
                              },
                              elements: {
                                field: {
                                  name: '#/0/0',
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

            it('transforms `array` type schemas (`items` is `array` type with `items` is `array` type with `items` is `boolean` type)', () => {
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
                          required: false,
                          type: 'array',
                          schema: {
                            type: 'array',
                            items: [
                              {
                                type: 'boolean'
                              }
                            ]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              meta: {
                                item: 0,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  type: 'boolean'
                                },
                                type: 'boolean',
                                uri: '#/0/0'
                              },
                              elements: {
                                field: {
                                  name: '#/0/0',
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

            it('transforms `array` type schemas (`items` is `array` type with `items` is `array` type with `items` is `null` type)', () => {
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
                          required: false,
                          type: 'array',
                          schema: {
                            type: 'array',
                            items: [
                              {
                                type: 'null'
                              }
                            ]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              meta: {
                                item: 0,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  type: 'null'
                                },
                                type: 'null',
                                uri: '#/0/0'
                              },
                              elements: {
                                field: {
                                  name: '#/0/0',
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

            it('transforms `array` type schemas (`items` is `array` type with `items` is `array` type with `items` is `number` type and `string` type and `boolean` type and `null` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'array',
                    items: [
                      {
                        type: 'number'
                      },
                      {
                        type: 'string'
                      },
                      {
                        type: 'boolean'
                      },
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
                          required: false,
                          type: 'array',
                          schema: {
                            type: 'array',
                            items: [
                              {
                                type: 'number'
                              },
                              {
                                type: 'string'
                              },
                              {
                                type: 'boolean'
                              },
                              {
                                type: 'null'
                              }
                            ]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              meta: {
                                item: 0,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  type: 'number'
                                },
                                type: 'number',
                                uri: '#/0/0'
                              },
                              elements: {
                                field: {
                                  name: '#/0/0',
                                  required: false
                                }
                              }
                            },
                            {
                              meta: {
                                item: 1,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  type: 'string'
                                },
                                type: 'string',
                                uri: '#/0/1'
                              },
                              elements: {
                                field: {
                                  name: '#/0/1',
                                  required: false
                                }
                              }
                            },
                            {
                              meta: {
                                item: 2,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  type: 'boolean'
                                },
                                type: 'boolean',
                                uri: '#/0/2'
                              },
                              elements: {
                                field: {
                                  name: '#/0/2',
                                  required: false
                                }
                              }
                            },
                            {
                              meta: {
                                item: 3,
                                required: false,
                                rootSchema: schema,
                                schema: {
                                  type: 'null'
                                },
                                type: 'null',
                                uri: '#/0/3'
                              },
                              elements: {
                                field: {
                                  name: '#/0/3',
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

            it('transforms `array` type schemas (`items` is `object` type with `properties`)', () => {
              const schema = {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    one: { type: 'string' },
                    two: { type: 'string' }
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
                          required: false,
                          type: 'object',
                          schema: {
                            type: 'object',
                            properties: {
                              one: { type: 'string' },
                              two: { type: 'string' }
                            }
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              meta: {
                                name: 'one',
                                required: false,
                                type: 'string',
                                schema: { type: 'string' },
                                rootSchema: schema,
                                uri: '#/0/one'
                              },
                              elements: {
                                field: {
                                  name: '#/0/one',
                                  required: false
                                }
                              }
                            },
                            {
                              meta: {
                                name: 'two',
                                required: false,
                                type: 'string',
                                schema: { type: 'string' },
                                rootSchema: schema,
                                uri: '#/0/two'
                              },
                              elements: {
                                field: {
                                  name: '#/0/two',
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

            it('transforms `array` type schemas (`items` is `object` type with `properties` and `required`)', () => {
              const schema = {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    one: { type: 'string' },
                    two: { type: 'string' }
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
                          required: false,
                          type: 'object',
                          schema: {
                            type: 'object',
                            properties: {
                              one: { type: 'string' },
                              two: { type: 'string' }
                            },
                            required: [
                              'one'
                            ]
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0
                        },
                        elements: {
                          fields: [
                            {
                              meta: {
                                name: 'one',
                                required: true,
                                type: 'string',
                                schema: { type: 'string' },
                                rootSchema: schema,
                                uri: '#/0/one'
                              },
                              elements: {
                                field: {
                                  name: '#/0/one',
                                  required: true
                                }
                              }
                            },
                            {
                              meta: {
                                name: 'two',
                                required: false,
                                type: 'string',
                                schema: { type: 'string' },
                                rootSchema: schema,
                                uri: '#/0/two'
                              },
                              elements: {
                                field: {
                                  name: '#/0/two',
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

            it('transforms `array` type schemas (`items` is `boolean` type)', () => {
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
                          required: false,
                          type: 'boolean',
                          schema: {
                            type: 'boolean'
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `null` type)', () => {
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
                          required: false,
                          type: 'null',
                          schema: {
                            type: 'null'
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `array` type schemas (`items` is `number` type and `string` type and `boolean` type and `null` type)', () => {
              const schema = {
                type: 'array',
                items: [
                  {
                    type: 'number'
                  },
                  {
                    type: 'string'
                  },
                  {
                    type: 'boolean'
                  },
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
                          required: false,
                          type: 'number',
                          schema: {
                            type: 'number'
                          },
                          rootSchema: schema,
                          uri: '#/0',
                          item: 0
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false
                          }
                        }
                      },
                      {
                        meta: {
                          required: false,
                          type: 'string',
                          schema: {
                            type: 'string'
                          },
                          rootSchema: schema,
                          uri: '#/1',
                          item: 1
                        },
                        elements: {
                          field: {
                            name: '#/1',
                            required: false
                          }
                        }
                      },
                      {
                        meta: {
                          required: false,
                          type: 'boolean',
                          schema: {
                            type: 'boolean'
                          },
                          rootSchema: schema,
                          uri: '#/2',
                          item: 2
                        },
                        elements: {
                          field: {
                            name: '#/2',
                            required: false
                          }
                        }
                      },
                      {
                        meta: {
                          required: false,
                          type: 'null',
                          schema: {
                            type: 'null'
                          },
                          rootSchema: schema,
                          uri: '#/3',
                          item: 3
                        },
                        elements: {
                          field: {
                            name: '#/3',
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

        describe('Without `items`', () => {
          it('transforms `array` type schemas', () => {
            const schema = { type: 'array' }

            return expect(transform(schema))
              .to.eql({
                meta: {
                  type: 'array',
                  schema,
                  uri: '#/'
                },
                elements: {
                  fields: []
                }
              })
          })
        })
      })

      describe('Transforming `object` type schemas', () => {
        describe('With `properties`', () => {
          describe('With `enum`', () => {
            it('transforms `object` type schemas (with `properties`)', () => {
              const schema = {
                type: 'object',
                properties: {
                  one: { type: 'string', enum: ['object type key string (1)', 'object type key string (2)'] },
                  two: { type: 'string', enum: ['object type key string (1)', 'object type key string (2)'] }
                }
              }

              return expect(transform(schema))
                .to.eql({
                  meta: {
                    type: 'object',
                    schema,
                    uri: '#/'
                  },
                  elements: {
                    fields: [
                      {
                        meta: {
                          name: 'one',
                          required: false,
                          type: 'string',
                          schema: {
                            type: 'string',
                            enum: ['object type key string (1)', 'object type key string (2)']
                          },
                          rootSchema: schema,
                          uri: '#/one'
                        },
                        elements: {
                          enum: {
                            items: ['object type key string (1)', 'object type key string (2)'],
                            name: '#/one',
                            required: false
                          }
                        }
                      },
                      {
                        meta: {
                          name: 'two',
                          required: false,
                          type: 'string',
                          schema: {
                            type: 'string',
                            enum: ['object type key string (1)', 'object type key string (2)']
                          },
                          rootSchema: schema,
                          uri: '#/two'
                        },
                        elements: {
                          enum: {
                            items: ['object type key string (1)', 'object type key string (2)'],
                            name: '#/two',
                            required: false
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `object` type schemas (with `properties` and `required`)', () => {
              const schema = {
                type: 'object',
                properties: {
                  one: { type: 'string', enum: ['object type key string (1)', 'object type key string (2)'] },
                  two: { type: 'string', enum: ['object type key string (1)', 'object type key string (2)'] }
                },
                required: [
                  'one'
                ]
              }

              return expect(transform(schema))
                .to.eql({
                  meta: {
                    type: 'object',
                    schema,
                    uri: '#/'
                  },
                  elements: {
                    fields: [
                      {
                        meta: {
                          name: 'one',
                          required: true,
                          rootSchema: schema,
                          schema: {
                            type: 'string',
                            enum: ['object type key string (1)', 'object type key string (2)']
                          },
                          type: 'string',
                          uri: '#/one'
                        },
                        elements: {
                          enum: {
                            items: ['object type key string (1)', 'object type key string (2)'],
                            name: '#/one',
                            required: true
                          }
                        }
                      },
                      {
                        meta: {
                          name: 'two',
                          required: false,
                          rootSchema: schema,
                          schema: {
                            type: 'string',
                            enum: ['object type key string (1)', 'object type key string (2)']
                          },
                          type: 'string',
                          uri: '#/two'
                        },
                        elements: {
                          enum: {
                            items: ['object type key string (1)', 'object type key string (2)'],
                            name: '#/two',
                            required: false
                          }
                        }
                      }
                    ]
                  }
                })
            })
          })

          describe('Without `enum`', () => {
            it('transforms `object` type schemas (with `properties`)', () => {
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
                    schema,
                    uri: '#/'
                  },
                  elements: {
                    fields: [
                      {
                        meta: {
                          name: 'one',
                          required: false,
                          type: 'string',
                          schema: {
                            type: 'string'
                          },
                          rootSchema: schema,
                          uri: '#/one'
                        },
                        elements: {
                          field: {
                            name: '#/one',
                            required: false
                          }
                        }
                      },
                      {
                        meta: {
                          name: 'two',
                          required: false,
                          type: 'string',
                          schema: {
                            type: 'string'
                          },
                          rootSchema: schema,
                          uri: '#/two'
                        },
                        elements: {
                          field: {
                            name: '#/two',
                            required: false
                          }
                        }
                      }
                    ]
                  }
                })
            })

            it('transforms `object` type schemas (with `properties` and `required`)', () => {
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
                    schema,
                    uri: '#/'
                  },
                  elements: {
                    fields: [
                      {
                        meta: {
                          name: 'one',
                          required: true,
                          rootSchema: schema,
                          schema: { type: 'string' },
                          type: 'string',
                          uri: '#/one'
                        },
                        elements: {
                          field: {
                            name: '#/one',
                            required: true
                          }
                        }
                      },
                      {
                        meta: {
                          name: 'two',
                          required: false,
                          rootSchema: schema,
                          schema: { type: 'string' },
                          type: 'string',
                          uri: '#/two'
                        },
                        elements: {
                          field: {
                            name: '#/two',
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

        describe('Without `properties`', () => {
          it('transforms `object` type schemas', () => {
            const schema = { type: 'object' }

            return expect(transform(schema))
              .to.eql({
                meta: {
                  type: 'object',
                  schema,
                  uri: '#/'
                },
                elements: {
                  fields: []
                }
              })
          })
        })
      })

      describe('Transforming `boolean` type schemas', () => {
        describe('With `enum`', () => {
          it('transforms `boolean` type schemas', () => {
            const schema = { type: 'boolean', enum: [true, false] }

            return expect(transform(schema))
              .to.eql({
                meta: {
                  type: 'boolean',
                  schema,
                  uri: '#/'
                },
                elements: {
                  enum: {
                    name: '#/',
                    items: [true, false]
                  }
                }
              })
          })
        })

        describe('With `anyOf`', () => {
          it('transforms `boolean` type schemas', () => {
            const schema = { type: 'boolean', anyOf: [{ default: true }, { default: false }, { default: true }] }

            return expect(transform(schema))
              .to.eql({
                meta: {
                  type: 'boolean',
                  schema,
                  uri: '#/'
                },
                elements: {
                  anyOf: {
                    items: [
                      {
                        meta: {
                          type: 'boolean',
                          rootSchema: schema,
                          schema: { default: true },
                          item: 0,
                          required: false,
                          defaultValue: 'true',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: 'true'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'boolean',
                          rootSchema: schema,
                          schema: { default: false },
                          item: 1,
                          required: false,
                          defaultValue: 'false',
                          uri: '#/1'
                        },
                        elements: {
                          field: {
                            name: '#/1',
                            required: false,
                            value: 'false'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'boolean',
                          rootSchema: schema,
                          schema: { default: true },
                          item: 2,
                          required: false,
                          defaultValue: 'true',
                          uri: '#/2'
                        },
                        elements: {
                          field: {
                            name: '#/2',
                            required: false,
                            value: 'true'
                          }
                        }
                      }
                    ],
                    name: '#/'
                  }
                }
              })
          })
        })

        describe('With `oneOf`', () => {
          it('transforms `boolean` type schemas', () => {
            const schema = { type: 'boolean', oneOf: [{ default: true }, { default: false }, { default: true }] }

            return expect(transform(schema))
              .to.eql({
                meta: {
                  type: 'boolean',
                  schema,
                  uri: '#/'
                },
                elements: {
                  oneOf: {
                    items: [
                      {
                        meta: {
                          type: 'boolean',
                          rootSchema: schema,
                          schema: { default: true },
                          item: 0,
                          required: false,
                          defaultValue: 'true',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: 'true'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'boolean',
                          rootSchema: schema,
                          schema: { default: false },
                          item: 1,
                          required: false,
                          defaultValue: 'false',
                          uri: '#/1'
                        },
                        elements: {
                          field: {
                            name: '#/1',
                            required: false,
                            value: 'false'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'boolean',
                          rootSchema: schema,
                          schema: { default: true },
                          item: 2,
                          required: false,
                          defaultValue: 'true',
                          uri: '#/2'
                        },
                        elements: {
                          field: {
                            name: '#/2',
                            required: false,
                            value: 'true'
                          }
                        }
                      }
                    ],
                    name: '#/'
                  }
                }
              })
          })
        })

        describe('With `allOf`', () => {
          it('transforms `boolean` type schemas', () => {
            const schema = { type: 'boolean', allOf: [{ default: true }] }

            return expect(transform(schema))
              .to.eql({
                meta: {
                  type: 'boolean',
                  schema,
                  defaultValue: 'true',
                  uri: '#/'
                },
                elements: {
                  field: {
                    name: '#/',
                    value: 'true'
                  }
                }
              })
          })
        })

        describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
          it('transforms `boolean` type schemas', () => {
            const schema = { type: 'boolean' }

            return expect(transform(schema))
              .to.eql({
                meta: {
                  type: 'boolean',
                  schema,
                  uri: '#/'
                },
                elements: {
                  field: {
                    name: '#/'
                  }
                }
              })
          })
        })
      })

      describe('Transforming `null` type schemas', () => {
        describe('With `enum`', () => {
          it('transforms `null` type schemas', () => {
            const schema = { type: 'null', enum: [null] }

            return expect(transform(schema))
              .to.eql({
                meta: {
                  type: 'null',
                  schema,
                  uri: '#/'
                },
                elements: {
                  enum: {
                    name: '#/',
                    items: [null]
                  }
                }
              })
          })
        })

        describe('With `anyOf`', () => {
          it('transforms `null` type schemas', () => {
            const schema = { type: 'null', anyOf: [{ default: null }, { default: null }, { default: null }] }

            return expect(transform(schema))
              .to.eql({
                meta: {
                  type: 'null',
                  schema,
                  uri: '#/'
                },
                elements: {
                  anyOf: {
                    items: [
                      {
                        meta: {
                          type: 'null',
                          rootSchema: schema,
                          schema: { default: null },
                          item: 0,
                          required: false,
                          defaultValue: 'null',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: 'null'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'null',
                          rootSchema: schema,
                          schema: { default: null },
                          item: 1,
                          required: false,
                          defaultValue: 'null',
                          uri: '#/1'
                        },
                        elements: {
                          field: {
                            name: '#/1',
                            required: false,
                            value: 'null'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'null',
                          rootSchema: schema,
                          schema: { default: null },
                          item: 2,
                          required: false,
                          defaultValue: 'null',
                          uri: '#/2'
                        },
                        elements: {
                          field: {
                            name: '#/2',
                            required: false,
                            value: 'null'
                          }
                        }
                      }
                    ],
                    name: '#/'
                  }
                }
              })
          })
        })

        describe('With `oneOf`', () => {
          it('transforms `null` type schemas', () => {
            const schema = { type: 'null', oneOf: [{ default: null }, { default: null }, { default: null }] }

            return expect(transform(schema))
              .to.eql({
                meta: {
                  type: 'null',
                  schema,
                  uri: '#/'
                },
                elements: {
                  oneOf: {
                    items: [
                      {
                        meta: {
                          type: 'null',
                          rootSchema: schema,
                          schema: { default: null },
                          item: 0,
                          required: false,
                          defaultValue: 'null',
                          uri: '#/0'
                        },
                        elements: {
                          field: {
                            name: '#/0',
                            required: false,
                            value: 'null'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'null',
                          rootSchema: schema,
                          schema: { default: null },
                          item: 1,
                          required: false,
                          defaultValue: 'null',
                          uri: '#/1'
                        },
                        elements: {
                          field: {
                            name: '#/1',
                            required: false,
                            value: 'null'
                          }
                        }
                      },
                      {
                        meta: {
                          type: 'null',
                          rootSchema: schema,
                          schema: { default: null },
                          item: 2,
                          required: false,
                          defaultValue: 'null',
                          uri: '#/2'
                        },
                        elements: {
                          field: {
                            name: '#/2',
                            required: false,
                            value: 'null'
                          }
                        }
                      }
                    ],
                    name: '#/'
                  }
                }
              })
          })
        })

        describe('With `allOf`', () => {
          it('transforms `null` type schemas', () => {
            const schema = { type: 'null', allOf: [{ default: null }] }

            return expect(transform(schema))
              .to.eql({
                meta: {
                  type: 'null',
                  schema,
                  defaultValue: 'null',
                  uri: '#/'
                },
                elements: {
                  field: {
                    name: '#/',
                    value: 'null'
                  }
                }
              })
          })
        })

        describe('Without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
          it('transforms `null` type schemas', () => {
            const schema = { type: 'null' }

            return expect(transform(schema))
              .to.eql({
                meta: {
                  type: 'null',
                  schema,
                  uri: '#/'
                },
                elements: {
                  field: {
                    name: '#/'
                  }
                }
              })
          })
        })
      })
    })
  })
})
