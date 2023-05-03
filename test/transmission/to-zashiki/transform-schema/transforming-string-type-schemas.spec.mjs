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

  /*
   *  String
   */
  describe('Transforming `string` type schemas', () => {
    it('transforms', () => {
      const schema = { type: 'string' }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'string',
            uri: '#/',
            rootSchema: {},
            schema
          },
          elements: {
            field: {
              id: '#/'
            }
          }
        })
    })

    it('transforms with `enum`', () => {
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
            rootSchema: {},
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

    it('transforms with `anyOf`', () => {
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
            rootSchema: {},
            schema,
            items: [
              {
                meta: {
                  type: 'string',
                  item: 0,
                  parentUri: '#/',
                  uri: '#/0',
                  rootSchema: {},
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
                  rootSchema: {},
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
                  rootSchema: {},
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
                    rootSchema: {},
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
                    rootSchema: {},
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
                    rootSchema: {},
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

    it('transforms with `oneOf`', () => {
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
            rootSchema: {},
            schema,
            items: [
              {
                meta: {
                  type: 'string',
                  item: 0,
                  parentUri: '#/',
                  uri: '#/0',
                  rootSchema: {},
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
                  rootSchema: {},
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
                  rootSchema: {},
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
                    rootSchema: {},
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
                    rootSchema: {},
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
                    rootSchema: {},
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

    it('transforms with `allOf`', () => {
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
            rootSchema: {},
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

    it('transforms without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
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
            rootSchema: {},
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
