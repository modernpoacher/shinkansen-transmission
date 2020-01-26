import { expect } from 'chai'

import transform from 'shinkansen-transmission/transmission/from-schema'

describe('shinkansen-transmission/transmission/from-schema', () => {
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
          '#/stringTypeSubSchema': 'mock string',
          '#/numberTypeSubSchema': 1,
          '#/arrayTypeSubSchema/0': 'mock string',
          '#/objectTypeSubSchema/one': 'mock string',
          '#/objectTypeSubSchema/two': 1,
          '#/booleanTypeSubSchema': true,
          '#/nullTypeSubSchema': null
        }

        const params = {
          '#/stringTypeSubSchema': { meta: { component: 'mock string component' } },
          '#/numberTypeSubSchema': { meta: { component: 'mock number component' } },
          '#/arrayTypeSubSchema': { meta: { component: 'mock array component' } },
          '#/arrayTypeSubSchema/0': { meta: { component: 'mock array type index component' } },
          '#/objectTypeSubSchema': { meta: { component: 'mock object component' } },
          '#/objectTypeSubSchema/one': { meta: { component: 'mock object type key component' } },
          '#/objectTypeSubSchema/two': { meta: { component: 'mock object type key component' } },
          '#/booleanTypeSubSchema': { meta: { component: 'mock boolean component' } },
          '#/nullTypeSubSchema': { meta: { component: 'mock null component' } }
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
                    value: 'mock string',
                    component: 'mock string component'
                  },
                  elements: {
                    field: {
                      name: '#/stringTypeSubSchema',
                      maxLength: 10,
                      minLength: 1,
                      required: false,
                      value: 'mock string'
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
                    value: 1,
                    component: 'mock number component'
                  },
                  elements: {
                    field: {
                      name: '#/numberTypeSubSchema',
                      required: false,
                      value: 1
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
                    component: 'mock array component'
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
                          value: 'mock string',
                          component: 'mock array type index component',
                          item: 0
                        },
                        elements: {
                          field: {
                            name: '#/arrayTypeSubSchema/0',
                            required: false,
                            value: 'mock string'
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
                    component: 'mock object component'
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
                          value: 'mock string',
                          component: 'mock object type key component'
                        },
                        elements: {
                          field: {
                            name: '#/objectTypeSubSchema/one',
                            required: false,
                            value: 'mock string'
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
                          value: 1,
                          component: 'mock object type key component'
                        },
                        elements: {
                          field: {
                            name: '#/objectTypeSubSchema/two',
                            required: false,
                            value: 1
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
                    value: true,
                    component: 'mock boolean component'
                  },
                  elements: {
                    field: {
                      name: '#/booleanTypeSubSchema',
                      required: false,
                      value: true
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
                    value: null,
                    component: 'mock null component'
                  },
                  elements: {
                    field: {
                      name: '#/nullTypeSubSchema',
                      required: false,
                      value: null
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

      it('transforms `number` schemas', () => {
        const schema = { type: 'number' }

        const values = {
          '#/': 1
        }

        const params = {
          '#/': { meta: { component: 'mock number component' } }
        }

        return expect(transform(schema, values, params))
          .to.eql({
            meta: {
              type: 'number',
              schema,
              uri: '#/',
              value: 1,
              component: 'mock number component'
            },
            elements: {
              field: {
                name: '#/',
                value: 1
              }
            }
          })
      })

      it('transforms `string` schemas', () => {
        const schema = { type: 'string' }

        const values = {
          '#/': 'mock string'
        }

        const params = {
          '#/': { meta: { component: 'mock string component' } }
        }

        return expect(transform(schema, values, params))
          .to.eql({
            meta: {
              type: 'string',
              schema,
              uri: '#/',
              value: 'mock string',
              component: 'mock string component'
            },
            elements: {
              field: {
                name: '#/',
                value: 'mock string'
              }
            }
          })
      })

      describe('Transforming `array` schemas', () => {
        describe('With `items`', () => {
          it('transforms `array` schemas (`items` is type `number`)', () => {
            const schema = {
              type: 'array',
              items: [
                {
                  type: 'number'
                }
              ]
            }

            const values = {
              '#/0': 1
            }

            const params = {
              '#/0': { meta: { component: 'mock array type index component' } }
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
                        value: 1,
                        component: 'mock array type index component',
                        item: 0
                      },
                      elements: {
                        field: {
                          name: '#/0',
                          required: false,
                          value: 1
                        }
                      }
                    }
                  ]
                }
              })
          })

          it('transforms `array` schemas (`items` is type `string`)', () => {
            const schema = {
              type: 'array',
              items: [
                {
                  type: 'string'
                }
              ]
            }

            const values = {
              '#/0': 'mock string'
            }

            const params = {
              '#/0': { meta: { component: 'mock array type index component' } }
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
                        value: 'mock string',
                        component: 'mock array type index component',
                        item: 0
                      },
                      elements: {
                        field: {
                          name: '#/0',
                          required: false,
                          value: 'mock string'
                        }
                      }
                    }
                  ]
                }
              })
          })

          it('transforms `array` schemas (`items` is type `array`)', () => {
            const schema = {
              type: 'array',
              items: [
                {
                  type: 'array'
                }
              ]
            }

            const values = {
              '#/0': []
            }

            const params = {
              '#/0': { meta: { component: 'mock array type index component' } }
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
                          type: 'array'
                        },
                        rootSchema: schema,
                        uri: '#/0',
                        value: [],
                        component: 'mock array type index component',
                        item: 0
                      },
                      elements: {
                        fields: []
                      }
                    }
                  ]
                }
              })
          })

          it('transforms `array` schemas (`items` is type `object`)', () => {
            const schema = {
              type: 'array',
              items: [
                {
                  type: 'object'
                }
              ]
            }

            const values = {
              '#/0': {}
            }

            const params = {
              '#/0': { meta: { component: 'mock array type index component' } }
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
                          type: 'object'
                        },
                        rootSchema: schema,
                        uri: '#/0',
                        value: {},
                        component: 'mock array type index component',
                        item: 0
                      },
                      elements: {
                        fields: []
                      }
                    }
                  ]
                }
              })
          })

          it('transforms `array` schemas (`items` is type `object` with `properties`)', () => {
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
              '#/0/one': 'mock string',
              '#/0/two': 'mock string'
            }

            const params = {
              '#/0': { meta: { component: 'mock array type index component' } },
              '#/0/one': { meta: { component: 'mock array type index object type key component' } },
              '#/0/two': { meta: { component: 'mock array type index object type key component' } }
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
                        component: 'mock array type index component',
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
                              value: 'mock string',
                              component: 'mock array type index object type key component'
                            },
                            elements: {
                              field: {
                                name: '#/0/one',
                                required: false,
                                value: 'mock string'
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
                              value: 'mock string',
                              component: 'mock array type index object type key component'
                            },
                            elements: {
                              field: {
                                name: '#/0/two',
                                required: false,
                                value: 'mock string'
                              }
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              })
          })

          it('transforms `array` schemas (`items` is type `object` with `properties` and `required`)', () => {
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
              '#/0/one': 'mock string',
              '#/0/two': 'mock string'
            }

            const params = {
              '#/0': { meta: { component: 'mock array type index component' } },
              '#/0/one': { meta: { component: 'mock array type index object type key component' } },
              '#/0/two': { meta: { component: 'mock array type index object type key component' } }
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
                        component: 'mock array type index component',
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
                              value: 'mock string',
                              component: 'mock array type index object type key component'
                            },
                            elements: {
                              field: {
                                name: '#/0/one',
                                required: true,
                                value: 'mock string'
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
                              value: 'mock string',
                              component: 'mock array type index object type key component'
                            },
                            elements: {
                              field: {
                                name: '#/0/two',
                                required: false,
                                value: 'mock string'
                              }
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              })
          })

          it('transforms `array` schemas (`items` is type `boolean`)', () => {
            const schema = {
              type: 'array',
              items: [
                {
                  type: 'boolean'
                }
              ]
            }

            const values = {
              '#/0': true
            }

            const params = {
              '#/0': { meta: { component: 'mock array type index component' } }
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
                        value: true,
                        component: 'mock array type index component',
                        item: 0
                      },
                      elements: {
                        field: {
                          name: '#/0',
                          required: false,
                          value: true
                        }
                      }
                    }
                  ]
                }
              })
          })

          it('transforms `array` schemas (`items` is type `null`)', () => {
            const schema = {
              type: 'array',
              items: [
                {
                  type: 'null'
                }
              ]
            }

            const values = {
              '#/0': null
            }

            const params = {
              '#/0': { meta: { component: 'mock array type index component' } }
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
                        value: null,
                        component: 'mock array type index component',
                        item: 0
                      },
                      elements: {
                        field: {
                          name: '#/0',
                          required: false,
                          value: null
                        }
                      }
                    }
                  ]
                }
              })
          })
        })

        describe('Without `items`', () => {
          it('transforms `array` schemas', () => {
            const schema = { type: 'array' }

            const values = {
              '#/': []
            }

            const params = {
              '#/': { meta: { component: 'mock array component' } }
            }

            return expect(transform(schema, values, params))
              .to.eql({
                meta: {
                  type: 'array',
                  schema,
                  uri: '#/',
                  value: [],
                  component: 'mock array component'
                },
                elements: {
                  fields: []
                }
              })
          })
        })
      })

      describe('Transforming `object` schemas', () => {
        describe('With `properties`', () => {
          it('transforms `object` schemas (with `properties`)', () => {
            const schema = {
              type: 'object',
              properties: {
                one: { type: 'string' },
                two: { type: 'string' }
              }
            }

            const values = {
              '#/one': 'mock string',
              '#/two': 'mock string'
            }

            const params = {
              '#/': { meta: { component: 'mock object component' } },
              '#/one': { meta: { component: 'mock object component' } },
              '#/two': { meta: { component: 'mock object component' } }
            }

            return expect(transform(schema, values, params))
              .to.eql({
                meta: {
                  type: 'object',
                  schema,
                  uri: '#/',
                  component: 'mock object component'
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
                        value: 'mock string',
                        component: 'mock object component'
                      },
                      elements: {
                        field: {
                          name: '#/one',
                          required: false,
                          value: 'mock string'
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
                        value: 'mock string',
                        component: 'mock object component'
                      },
                      elements: {
                        field: {
                          name: '#/two',
                          required: false,
                          value: 'mock string'
                        }
                      }
                    }
                  ]
                }
              })
          })

          it('transforms `object` schemas (with `properties` and `required`)', () => {
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
              '#/one': 'mock string',
              '#/two': 'mock string'
            }

            const params = {
              '#/': { meta: { component: 'mock object component' } },
              '#/one': { meta: { component: 'mock object component' } },
              '#/two': { meta: { component: 'mock object component' } }
            }

            return expect(transform(schema, values, params))
              .to.eql({
                meta: {
                  type: 'object',
                  schema,
                  uri: '#/',
                  component: 'mock object component'
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
                        value: 'mock string',
                        component: 'mock object component'
                      },
                      elements: {
                        field: {
                          name: '#/one',
                          required: true,
                          value: 'mock string'
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
                        value: 'mock string',
                        component: 'mock object component'
                      },
                      elements: {
                        field: {
                          name: '#/two',
                          required: false,
                          value: 'mock string'
                        }
                      }
                    }
                  ]
                }
              })
          })
        })

        describe('Without `properties`', () => {
          it('transforms `object` schemas', () => {
            const schema = { type: 'object' }

            const values = {
              '#/': {}
            }

            const params = {
              '#/': { meta: { component: 'mock object component' } }
            }

            return expect(transform(schema, values, params))
              .to.eql({
                meta: {
                  type: 'object',
                  schema,
                  uri: '#/',
                  value: {},
                  component: 'mock object component'
                },
                elements: {
                  fields: []
                }
              })
          })
        })
      })

      it('transforms `boolean` schemas', () => {
        const schema = { type: 'boolean' }

        const values = {
          '#/': true
        }

        const params = {
          '#/': { meta: { component: 'mock boolean component' } }
        }

        return expect(transform(schema, values, params))
          .to.eql({
            meta: {
              type: 'boolean',
              schema,
              uri: '#/',
              value: true,
              component: 'mock boolean component'
            },
            elements: {
              field: {
                name: '#/',
                value: true
              }
            }
          })
      })

      it('transforms `null` schemas', () => {
        const schema = { type: 'null' }

        const values = {
          '#/': null
        }

        const params = {
          '#/': { meta: { component: 'mock null component' } }
        }

        return expect(transform(schema, values, params))
          .to.eql({
            meta: {
              type: 'null',
              schema,
              uri: '#/',
              value: null,
              component: 'mock null component'
            },
            elements: {
              field: {
                name: '#/',
                value: null
              }
            }
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
          '#/stringTypeSubSchema': 'mock string',
          '#/numberTypeSubSchema': 1,
          '#/arrayTypeSubSchema/0': 'mock string',
          '#/objectTypeSubSchema/one': 'mock string',
          '#/objectTypeSubSchema/two': 1,
          '#/booleanTypeSubSchema': true,
          '#/nullTypeSubSchema': null
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
                    value: 'mock string'
                  },
                  elements: {
                    field: {
                      name: '#/stringTypeSubSchema',
                      maxLength: 10,
                      minLength: 1,
                      required: false,
                      value: 'mock string'
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
                    value: 1
                  },
                  elements: {
                    field: {
                      name: '#/numberTypeSubSchema',
                      required: false,
                      value: 1
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
                          value: 'mock string',
                          item: 0
                        },
                        elements: {
                          field: {
                            name: '#/arrayTypeSubSchema/0',
                            required: false,
                            value: 'mock string'
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
                          value: 'mock string'
                        },
                        elements: {
                          field: {
                            name: '#/objectTypeSubSchema/one',
                            required: false,
                            value: 'mock string'
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
                          value: 1
                        },
                        elements: {
                          field: {
                            name: '#/objectTypeSubSchema/two',
                            required: false,
                            value: 1
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
                    value: true
                  },
                  elements: {
                    field: {
                      name: '#/booleanTypeSubSchema',
                      required: false,
                      value: true
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
                    value: null
                  },
                  elements: {
                    field: {
                      name: '#/nullTypeSubSchema',
                      required: false,
                      value: null
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

      it('transforms `number` schemas', () => {
        const schema = { type: 'number' }

        const values = {
          '#/': 1
        }

        return expect(transform(schema, values))
          .to.eql({
            meta: {
              type: 'number',
              schema,
              uri: '#/',
              value: 1
            },
            elements: {
              field: {
                name: '#/',
                value: 1
              }
            }
          })
      })

      it('transforms `string` schemas', () => {
        const schema = { type: 'string' }

        const values = {
          '#/': 'mock string'
        }

        return expect(transform(schema, values))
          .to.eql({
            meta: {
              type: 'string',
              schema,
              uri: '#/',
              value: 'mock string'
            },
            elements: {
              field: {
                name: '#/',
                value: 'mock string'
              }
            }
          })
      })

      describe('Transforming `array` schemas', () => {
        describe('With `items`', () => {
          it('transforms `array` schemas (`items` is type `number`)', () => {
            const schema = {
              type: 'array',
              items: [
                {
                  type: 'number'
                }
              ]
            }

            const values = {
              '#/0': 1
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
                        value: 1,
                        item: 0
                      },
                      elements: {
                        field: {
                          name: '#/0',
                          required: false,
                          value: 1
                        }
                      }
                    }
                  ]
                }
              })
          })

          it('transforms `array` schemas (`items` is type `string`)', () => {
            const schema = {
              type: 'array',
              items: [
                {
                  type: 'string'
                }
              ]
            }

            const values = {
              '#/0': 'mock string'
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
                        value: 'mock string',
                        item: 0
                      },
                      elements: {
                        field: {
                          name: '#/0',
                          required: false,
                          value: 'mock string'
                        }
                      }
                    }
                  ]
                }
              })
          })

          it('transforms `array` schemas (`items` is type `array`)', () => {
            const schema = {
              type: 'array',
              items: [
                {
                  type: 'array'
                }
              ]
            }

            const values = {
              '#/0': []
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
                          type: 'array'
                        },
                        rootSchema: schema,
                        uri: '#/0',
                        value: [],
                        item: 0
                      },
                      elements: {
                        fields: []
                      }
                    }
                  ]
                }
              })
          })

          it('transforms `array` schemas (`items` is type `object`)', () => {
            const schema = {
              type: 'array',
              items: [
                {
                  type: 'object'
                }
              ]
            }

            const values = {
              '#/0': {}
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
                          type: 'object'
                        },
                        rootSchema: schema,
                        uri: '#/0',
                        value: {},
                        item: 0
                      },
                      elements: {
                        fields: []
                      }
                    }
                  ]
                }
              })
          })

          it('transforms `array` schemas (`items` is type `object` with `properties`)', () => {
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
              '#/0/one': 'mock string',
              '#/0/two': 'mock string'
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
                              value: 'mock string'
                            },
                            elements: {
                              field: {
                                name: '#/0/one',
                                required: false,
                                value: 'mock string'
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
                              value: 'mock string'
                            },
                            elements: {
                              field: {
                                name: '#/0/two',
                                required: false,
                                value: 'mock string'
                              }
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              })
          })

          it('transforms `array` schemas (`items` is type `object` with `properties` and `required`)', () => {
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
              '#/0/one': 'mock string',
              '#/0/two': 'mock string'
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
                              value: 'mock string'
                            },
                            elements: {
                              field: {
                                name: '#/0/one',
                                required: true,
                                value: 'mock string'
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
                              value: 'mock string'
                            },
                            elements: {
                              field: {
                                name: '#/0/two',
                                required: false,
                                value: 'mock string'
                              }
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              })
          })

          it('transforms `array` schemas (`items` is type `boolean`)', () => {
            const schema = {
              type: 'array',
              items: [
                {
                  type: 'boolean'
                }
              ]
            }

            const values = {
              '#/0': true
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
                        value: true,
                        item: 0
                      },
                      elements: {
                        field: {
                          name: '#/0',
                          required: false,
                          value: true
                        }
                      }
                    }
                  ]
                }
              })
          })

          it('transforms `array` schemas (`items` is type `null`)', () => {
            const schema = {
              type: 'array',
              items: [
                {
                  type: 'null'
                }
              ]
            }

            const values = {
              '#/0': null
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
                        value: null,
                        item: 0
                      },
                      elements: {
                        field: {
                          name: '#/0',
                          required: false,
                          value: null
                        }
                      }
                    }
                  ]
                }
              })
          })
        })

        describe('Without `items`', () => {
          it('transforms `array` schemas', () => {
            const schema = { type: 'array' }

            const values = {
              '#/': []
            }

            return expect(transform(schema, values))
              .to.eql({
                meta: {
                  type: 'array',
                  schema,
                  uri: '#/',
                  value: []
                },
                elements: {
                  fields: []
                }
              })
          })
        })
      })

      describe('Transforming `object` schemas', () => {
        describe('With `properties`', () => {
          it('transforms `object` schemas (with `properties`)', () => {
            const schema = {
              type: 'object',
              properties: {
                one: { type: 'string' },
                two: { type: 'string' }
              }
            }

            const values = {
              '#/one': 'mock string',
              '#/two': 'mock string'
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
                        value: 'mock string'
                      },
                      elements: {
                        field: {
                          name: '#/one',
                          required: false,
                          value: 'mock string'
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
                        value: 'mock string'
                      },
                      elements: {
                        field: {
                          name: '#/two',
                          required: false,
                          value: 'mock string'
                        }
                      }
                    }
                  ]
                }
              })
          })

          it('transforms `object` schemas (with `properties` and `required`)', () => {
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
              '#/one': 'mock string',
              '#/two': 'mock string'
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
                        value: 'mock string'
                      },
                      elements: {
                        field: {
                          name: '#/one',
                          required: true,
                          value: 'mock string'
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
                        value: 'mock string'
                      },
                      elements: {
                        field: {
                          name: '#/two',
                          required: false,
                          value: 'mock string'
                        }
                      }
                    }
                  ]
                }
              })
          })
        })

        describe('Without `properties`', () => {
          it('transforms `object` schemas', () => {
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

      it('transforms `boolean` schemas', () => {
        const schema = { type: 'boolean' }

        const values = {
          '#/': true
        }

        return expect(transform(schema, values))
          .to.eql({
            meta: {
              type: 'boolean',
              schema,
              uri: '#/',
              value: true
            },
            elements: {
              field: {
                name: '#/',
                value: true
              }
            }
          })
      })

      it('transforms `null` schemas', () => {
        const schema = { type: 'null' }

        const values = {
          '#/': null
        }

        return expect(transform(schema, values))
          .to.eql({
            meta: {
              type: 'null',
              schema,
              uri: '#/',
              value: null
            },
            elements: {
              field: {
                name: '#/',
                value: null
              }
            }
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

        const params = {
          '#/stringTypeSubSchema': { meta: { component: 'mock string component' } },
          '#/numberTypeSubSchema': { meta: { component: 'mock number component' } },
          '#/arrayTypeSubSchema': { meta: { component: 'mock array component' } },
          '#/arrayTypeSubSchema/0': { meta: { component: 'mock array type index component' } },
          '#/objectTypeSubSchema': { meta: { component: 'mock object component' } },
          '#/objectTypeSubSchema/one': { meta: { component: 'mock object type key component' } },
          '#/objectTypeSubSchema/two': { meta: { component: 'mock object type key component' } },
          '#/booleanTypeSubSchema': { meta: { component: 'mock boolean component' } },
          '#/nullTypeSubSchema': { meta: { component: 'mock null component' } }
        }

        return expect(transform(schema, {}, params))
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
                    component: 'mock string component'
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
                    component: 'mock number component'
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
                    component: 'mock array component'
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
                          component: 'mock array type index component',
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
                    component: 'mock object component'
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
                          component: 'mock object type key component'
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
                          component: 'mock object type key component'
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
                    component: 'mock boolean component'
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
                    component: 'mock null component'
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

      it('transforms `number` schemas', () => {
        const schema = { type: 'number' }

        const params = {
          '#/': { meta: { component: 'mock number component' } }
        }

        return expect(transform(schema, {}, params))
          .to.eql({
            meta: {
              type: 'number',
              schema,
              uri: '#/',
              component: 'mock number component'
            },
            elements: {
              field: {
                name: '#/'
              }
            }
          })
      })

      it('transforms `string` schemas', () => {
        const schema = { type: 'string' }

        const params = {
          '#/': { meta: { component: 'mock string component' } }
        }

        return expect(transform(schema, {}, params))
          .to.eql({
            meta: {
              type: 'string',
              schema,
              uri: '#/',
              component: 'mock string component'
            },
            elements: {
              field: {
                name: '#/'
              }
            }
          })
      })

      describe('Transforming `array` schemas', () => {
        describe('With `items`', () => {
          it('transforms `array` schemas (`items` is type `number`)', () => {
            const schema = {
              type: 'array',
              items: [
                {
                  type: 'number'
                }
              ]
            }

            const params = {
              '#/0': { meta: { component: 'mock array type index component' } }
            }

            return expect(transform(schema, {}, params))
              .to.eql({
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
                        component: 'mock array type index component',
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

          it('transforms `array` schemas (`items` is type `string`)', () => {
            const schema = {
              type: 'array',
              items: [
                {
                  type: 'string'
                }
              ]
            }

            const params = {
              '#/0': { meta: { component: 'mock array type index component' } }
            }

            return expect(transform(schema, {}, params))
              .to.eql({
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
                        component: 'mock array type index component',
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

          it('transforms `array` schemas (`items` is type `array`)', () => {
            const schema = {
              type: 'array',
              items: [
                {
                  type: 'array'
                }
              ]
            }

            const params = {
              '#/0': { meta: { component: 'mock array type index component' } }
            }

            return expect(transform(schema, {}, params))
              .to.eql({
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
                          type: 'array'
                        },
                        rootSchema: schema,
                        uri: '#/0',
                        component: 'mock array type index component',
                        item: 0
                      },
                      elements: {
                        fields: []
                      }
                    }
                  ]
                }
              })
          })

          it('transforms `array` schemas (`items` is type `object`)', () => {
            const schema = {
              type: 'array',
              items: [
                {
                  type: 'object'
                }
              ]
            }

            const params = {
              '#/0': { meta: { component: 'mock array type index component' } }
            }

            return expect(transform(schema, {}, params))
              .to.eql({
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
                          type: 'object'
                        },
                        rootSchema: schema,
                        uri: '#/0',
                        component: 'mock array type index component',
                        item: 0
                      },
                      elements: {
                        fields: []
                      }
                    }
                  ]
                }
              })
          })

          it('transforms `array` schemas (`items` is type `object` with `properties`)', () => {
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

            const params = {
              '#/0': { meta: { component: 'mock array type index component' } },
              '#/0/one': { meta: { component: 'mock array type index object type key component' } },
              '#/0/two': { meta: { component: 'mock array type index object type key component' } }
            }

            return expect(transform(schema, {}, params))
              .to.eql({
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
                        component: 'mock array type index component',
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
                              component: 'mock array type index object type key component'
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
                              component: 'mock array type index object type key component'
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

          it('transforms `array` schemas (`items` is type `object` with `properties` and `required`)', () => {
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

            const params = {
              '#/0': { meta: { component: 'mock array type index component' } },
              '#/0/one': { meta: { component: 'mock array type index object type key component' } },
              '#/0/two': { meta: { component: 'mock array type index object type key component' } }
            }

            return expect(transform(schema, {}, params))
              .to.eql({
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
                        component: 'mock array type index component',
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
                              component: 'mock array type index object type key component'
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
                              component: 'mock array type index object type key component'
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

          it('transforms `array` schemas (`items` is type `boolean`)', () => {
            const schema = {
              type: 'array',
              items: [
                {
                  type: 'boolean'
                }
              ]
            }

            const params = {
              '#/0': { meta: { component: 'mock array type index component' } }
            }

            return expect(transform(schema, {}, params))
              .to.eql({
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
                        component: 'mock array type index component',
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

          it('transforms `array` schemas (`items` is type `null`)', () => {
            const schema = {
              type: 'array',
              items: [
                {
                  type: 'null'
                }
              ]
            }

            const params = {
              '#/0': { meta: { component: 'mock array type index component' } }
            }

            return expect(transform(schema, {}, params))
              .to.eql({
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
                        component: 'mock array type index component',
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
        })

        describe('Without `items`', () => {
          it('transforms `array` schemas', () => {
            const schema = { type: 'array' }

            const values = {
              '#/': []
            }

            const params = {
              '#/': { meta: { component: 'mock array component' } }
            }

            return expect(transform(schema, values, params))
              .to.eql({
                meta: {
                  type: 'array',
                  schema,
                  uri: '#/',
                  value: [],
                  component: 'mock array component'
                },
                elements: {
                  fields: []
                }
              })
          })
        })
      })

      describe('Transforming `object` schemas', () => {
        describe('With `properties`', () => {
          it('transforms `object` schemas (with `properties`)', () => {
            const schema = {
              type: 'object',
              properties: {
                one: { type: 'string' },
                two: { type: 'string' }
              }
            }

            const params = {
              '#/': { meta: { component: 'mock object component' } },
              '#/one': { meta: { component: 'mock object component' } },
              '#/two': { meta: { component: 'mock object component' } }
            }

            return expect(transform(schema, {}, params))
              .to.eql({
                meta: {
                  type: 'object',
                  schema,
                  uri: '#/',
                  component: 'mock object component'
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
                        component: 'mock object component'
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
                        component: 'mock object component'
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

          it('transforms `object` schemas (with `properties` and `required`)', () => {
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

            const params = {
              '#/': { meta: { component: 'mock object component' } },
              '#/one': { meta: { component: 'mock object component' } },
              '#/two': { meta: { component: 'mock object component' } }
            }

            return expect(transform(schema, {}, params))
              .to.eql({
                meta: {
                  type: 'object',
                  schema,
                  uri: '#/',
                  component: 'mock object component'
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
                        component: 'mock object component'
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
                        component: 'mock object component'
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

        describe('Without `properties`', () => {
          it('transforms `object` schemas', () => {
            const schema = { type: 'object' }

            const params = {
              '#/': { meta: { component: 'mock object component' } }
            }

            return expect(transform(schema, {}, params))
              .to.eql({
                meta: {
                  type: 'object',
                  schema,
                  uri: '#/',
                  component: 'mock object component'
                },
                elements: {
                  fields: []
                }
              })
          })
        })
      })

      it('transforms `boolean` schemas', () => {
        const schema = { type: 'boolean' }

        const params = {
          '#/': { meta: { component: 'mock boolean component' } }
        }

        return expect(transform(schema, {}, params))
          .to.eql({
            meta: {
              type: 'boolean',
              schema,
              uri: '#/',
              component: 'mock boolean component'
            },
            elements: {
              field: {
                name: '#/'
              }
            }
          })
      })

      it('transforms `null` schemas', () => {
        const schema = { type: 'null' }

        const params = {
          '#/': { meta: { component: 'mock null component' } }
        }

        return expect(transform(schema, {}, params))
          .to.eql({
            meta: {
              type: 'null',
              schema,
              uri: '#/',
              component: 'mock null component'
            },
            elements: {
              field: {
                name: '#/'
              }
            }
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

      it('transforms `number` schemas', () => {
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

      it('transforms `string` schemas', () => {
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

      describe('Transforming `array` schemas', () => {
        describe('With `items`', () => {
          it('transforms `array` schemas (`items` is type `number`)', () => {
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

          it('transforms `array` schemas (`items` is type `string`)', () => {
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

          it('transforms `array` schemas (`items` is type `array`)', () => {
            const schema = {
              type: 'array',
              items: [
                {
                  type: 'array'
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
                          type: 'array'
                        },
                        rootSchema: schema,
                        uri: '#/0',
                        item: 0
                      },
                      elements: {
                        fields: []
                      }
                    }
                  ]
                }
              })
          })

          it('transforms `array` schemas (`items` is type `object`)', () => {
            const schema = {
              type: 'array',
              items: [
                {
                  type: 'object'
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
                          type: 'object'
                        },
                        rootSchema: schema,
                        uri: '#/0',
                        item: 0
                      },
                      elements: {
                        fields: []
                      }
                    }
                  ]
                }
              })
          })

          it('transforms `array` schemas (`items` is type `object` with `properties`)', () => {
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

          it('transforms `array` schemas (`items` is type `object` with `properties` and `required`)', () => {
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

          it('transforms `array` schemas (`items` is type `boolean`)', () => {
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

          it('transforms `array` schemas (`items` is type `null`)', () => {
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
        })

        describe('Without `items`', () => {
          it('transforms `array` schemas', () => {
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

      describe('Transforming `object` schemas', () => {
        describe('With `properties`', () => {
          it('transforms `object` schemas (with `properties`)', () => {
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

          it('transforms `object` schemas (with `properties` and `required`)', () => {
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

        describe('Without `properties`', () => {
          it('transforms `object` schemas', () => {
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

      it('transforms `boolean` schemas', () => {
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

      it('transforms `null` schemas', () => {
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
