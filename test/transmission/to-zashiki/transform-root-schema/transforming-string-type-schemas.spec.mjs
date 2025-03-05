/**
 *  @typedef {TransmissionTypes.SchemaType} SchemaType
 */

import {
  expect
} from 'chai'

import transform from '#transmission/transmission/to-zashiki/transform-root-schema'

describe('#transmission/transmission/to-zashiki/transform-root-schema', () => {
  /**
   *  String
   */
  describe('Transforming `string` type schemas', () => {
    it('transforms `string` type schemas', () => {
      /**
       *  @type {SchemaType}
       */
      const schema = { type: 'string' }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'string',
            uri: '#/',
            schema
          },
          elements: {
            field: {
              id: '#/'
            }
          }
        })
    })

    it('transforms `string` type schemas with `enum`', () => {
      /**
       *  @type {SchemaType}
       */
      const schema = {
        type: 'string',
        enum: [
          'One',
          'Two',
          'Three'
        ],
        minLength: 1,
        maxLength: 9,
        pattern: /.*/
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'string',
            uri: '#/',
            schema,
            minLength: 1,
            maxLength: 9,
            pattern: /.*/,
            items: [
              'One',
              'Two',
              'Three'
            ],
            selectedItems: []
          },
          elements: {
            enum: {
              id: '#/',
              minLength: 1,
              maxLength: 9,
              pattern: /.*/,
              items: [
                'One',
                'Two',
                'Three'
              ],
              selectedItems: []
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
          { const: 'One' },
          { const: 'Two' },
          { const: 'Three' }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'string',
            uri: '#/',
            schema,
            items: [
              {
                meta: {
                  type: 'string',
                  item: 0,
                  parentUri: '#/',
                  uri: '#/0',
                  rootSchema: schema,
                  schema: {
                    const: 'One'
                  },
                  value: 'One'
                },
                elements: {
                  field: {
                    id: '#/0',
                    value: 'One'
                  }
                }
              },
              {
                meta: {
                  type: 'string',
                  item: 1,
                  parentUri: '#/',
                  uri: '#/1',
                  rootSchema: schema,
                  schema: {
                    const: 'Two'
                  },
                  value: 'Two'
                },
                elements: {
                  field: {
                    id: '#/1',
                    value: 'Two'
                  }
                }
              },
              {
                meta: {
                  type: 'string',
                  item: 2,
                  parentUri: '#/',
                  uri: '#/2',
                  rootSchema: schema,
                  schema: {
                    const: 'Three'
                  },
                  value: 'Three'
                },
                elements: {
                  field: {
                    id: '#/2',
                    value: 'Three'
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
                    parentUri: '#/',
                    uri: '#/0',
                    rootSchema: schema,
                    schema: {
                      const: 'One'
                    },
                    value: 'One'
                  },
                  elements: {
                    field: {
                      id: '#/0',
                      value: 'One'
                    }
                  }
                },
                {
                  meta: {
                    type: 'string',
                    item: 1,
                    parentUri: '#/',
                    uri: '#/1',
                    rootSchema: schema,
                    schema: {
                      const: 'Two'
                    },
                    value: 'Two'
                  },
                  elements: {
                    field: {
                      id: '#/1',
                      value: 'Two'
                    }
                  }
                },
                {
                  meta: {
                    type: 'string',
                    item: 2,
                    parentUri: '#/',
                    uri: '#/2',
                    rootSchema: schema,
                    schema: {
                      const: 'Three'
                    },
                    value: 'Three'
                  },
                  elements: {
                    field: {
                      id: '#/2',
                      value: 'Three'
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
      /**
       *  @type {SchemaType}
       */
      const schema = {
        type: 'string',
        oneOf: [
          { const: 'One', minLength: 1, maxLength: 9, pattern: /.*/ },
          { const: 'Two', minLength: 1, maxLength: 9, pattern: /.*/ },
          { const: 'Three', minLength: 1, maxLength: 9, pattern: /.*/ }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'string',
            uri: '#/',
            schema,
            items: [
              {
                meta: {
                  type: 'string',
                  item: 0,
                  parentUri: '#/',
                  uri: '#/0',
                  rootSchema: schema,
                  schema: {
                    const: 'One',
                    minLength: 1,
                    maxLength: 9,
                    pattern: /.*/
                  },
                  value: 'One',
                  minLength: 1,
                  maxLength: 9,
                  pattern: /.*/
                },
                elements: {
                  field: {
                    id: '#/0',
                    value: 'One',
                    minLength: 1,
                    maxLength: 9,
                    pattern: /.*/
                  }
                }
              },
              {
                meta: {
                  type: 'string',
                  item: 1,
                  parentUri: '#/',
                  uri: '#/1',
                  rootSchema: schema,
                  schema: {
                    const: 'Two',
                    minLength: 1,
                    maxLength: 9,
                    pattern: /.*/
                  },
                  value: 'Two',
                  minLength: 1,
                  maxLength: 9,
                  pattern: /.*/
                },
                elements: {
                  field: {
                    id: '#/1',
                    value: 'Two',
                    minLength: 1,
                    maxLength: 9,
                    pattern: /.*/
                  }
                }
              },
              {
                meta: {
                  type: 'string',
                  item: 2,
                  parentUri: '#/',
                  uri: '#/2',
                  rootSchema: schema,
                  schema: {
                    const: 'Three',
                    minLength: 1,
                    maxLength: 9,
                    pattern: /.*/
                  },
                  value: 'Three',
                  minLength: 1,
                  maxLength: 9,
                  pattern: /.*/
                },
                elements: {
                  field: {
                    id: '#/2',
                    value: 'Three',
                    minLength: 1,
                    maxLength: 9,
                    pattern: /.*/
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
                    parentUri: '#/',
                    uri: '#/0',
                    rootSchema: schema,
                    schema: {
                      const: 'One',
                      minLength: 1,
                      maxLength: 9,
                      pattern: /.*/
                    },
                    value: 'One',
                    minLength: 1,
                    maxLength: 9,
                    pattern: /.*/
                  },
                  elements: {
                    field: {
                      id: '#/0',
                      value: 'One',
                      minLength: 1,
                      maxLength: 9,
                      pattern: /.*/
                    }
                  }
                },
                {
                  meta: {
                    type: 'string',
                    item: 1,
                    parentUri: '#/',
                    uri: '#/1',
                    rootSchema: schema,
                    schema: {
                      const: 'Two',
                      minLength: 1,
                      maxLength: 9,
                      pattern: /.*/
                    },
                    value: 'Two',
                    minLength: 1,
                    maxLength: 9,
                    pattern: /.*/
                  },
                  elements: {
                    field: {
                      id: '#/1',
                      value: 'Two',
                      minLength: 1,
                      maxLength: 9,
                      pattern: /.*/
                    }
                  }
                },
                {
                  meta: {
                    type: 'string',
                    item: 2,
                    parentUri: '#/',
                    uri: '#/2',
                    rootSchema: schema,
                    schema: {
                      const: 'Three',
                      minLength: 1,
                      maxLength: 9,
                      pattern: /.*/
                    },
                    value: 'Three',
                    minLength: 1,
                    maxLength: 9,
                    pattern: /.*/
                  },
                  elements: {
                    field: {
                      id: '#/2',
                      value: 'Three',
                      minLength: 1,
                      maxLength: 9,
                      pattern: /.*/
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
      /**
       *  @type {SchemaType}
       */
      const schema = {
        type: 'string',
        allOf: [
          { minLength: 1 },
          { const: 'Value' },
          { maxLength: 9 },
          { pattern: /.*/ }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'string',
            uri: '#/',
            schema,
            value: 'Value',
            minLength: 1,
            maxLength: 9,
            pattern: /.*/
          },
          elements: {
            field: {
              id: '#/',
              value: 'Value',
              minLength: 1,
              maxLength: 9,
              pattern: /.*/
            }
          }
        })
    })

    it('transforms `string` type schemas', () => {
      /**
       *  @type {SchemaType}
       */
      const schema = {
        type: 'string',
        minLength: 1,
        const: 'Value',
        maxLength: 9,
        pattern: /.*/
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'string',
            uri: '#/',
            schema,
            value: 'Value',
            minLength: 1,
            maxLength: 9,
            pattern: /.*/
          },
          elements: {
            field: {
              id: '#/',
              value: 'Value',
              minLength: 1,
              maxLength: 9,
              pattern: /.*/
            }
          }
        })
    })
  })
})
