import debug from 'debug'

import { expect } from 'chai'

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

  /*
   *  Number
   */
  describe('Transforming `number` type schemas', () => {
    it('transforms `number` type', () => {
      const schema = { type: 'number' }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'number',
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

    it('transforms `number` type with `enum`', () => {
      const schema = {
        type: 'number',
        enum: [
          1,
          2,
          3
        ],
        minimum: 1,
        maximum: 9,
        exclusiveMinimum: true,
        exclusiveMaximum: true,
        multipleOf: 1
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'number',
            uri: '#/',
            rootSchema: {},
            schema,
            min: 1,
            max: 9,
            isExclusiveMin: true,
            isExclusiveMax: true,
            step: 1,
            items: [
              1,
              2,
              3
            ],
            selectedItems: []
          },
          elements: {
            enum: {
              id: '#/',
              min: 1,
              max: 9,
              step: 1,
              items: [
                1,
                2,
                3
              ],
              selectedItems: []
            }
          }
        })
    })

    it('transforms `number` type with `anyOf`', () => {
      const schema = {
        type: 'number',
        anyOf: [
          { const: 1 },
          { const: 2 },
          { const: 3 }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'number',
            uri: '#/',
            rootSchema: {},
            schema,
            items: [
              {
                meta: {
                  type: 'number',
                  item: 0,
                  parentUri: '#/',
                  uri: '#/0',
                  rootSchema: {},
                  schema: {
                    const: 1
                  },
                  value: '1'
                },
                elements: {
                  field: {
                    id: '#/0',
                    value: '1'
                  }
                }
              },
              {
                meta: {
                  type: 'number',
                  item: 1,
                  parentUri: '#/',
                  uri: '#/1',
                  rootSchema: {},
                  schema: {
                    const: 2
                  },
                  value: '2'
                },
                elements: {
                  field: {
                    id: '#/1',
                    value: '2'
                  }
                }
              },
              {
                meta: {
                  type: 'number',
                  item: 2,
                  parentUri: '#/',
                  uri: '#/2',
                  rootSchema: {},
                  schema: {
                    const: 3
                  },
                  value: '3'
                },
                elements: {
                  field: {
                    id: '#/2',
                    value: '3'
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
                    type: 'number',
                    item: 0,
                    parentUri: '#/',
                    uri: '#/0',
                    rootSchema: {},
                    schema: {
                      const: 1
                    },
                    value: '1'
                  },
                  elements: {
                    field: {
                      id: '#/0',
                      value: '1'
                    }
                  }
                },
                {
                  meta: {
                    type: 'number',
                    item: 1,
                    parentUri: '#/',
                    uri: '#/1',
                    rootSchema: {},
                    schema: {
                      const: 2
                    },
                    value: '2'
                  },
                  elements: {
                    field: {
                      id: '#/1',
                      value: '2'
                    }
                  }
                },
                {
                  meta: {
                    type: 'number',
                    item: 2,
                    parentUri: '#/',
                    uri: '#/2',
                    rootSchema: {},
                    schema: {
                      const: 3
                    },
                    value: '3'
                  },
                  elements: {
                    field: {
                      id: '#/2',
                      value: '3'
                    }
                  }
                }
              ],
              selectedItems: []
            }
          }
        })
    })

    it('transforms `number` type with `oneOf`', () => {
      const schema = {
        type: 'number',
        oneOf: [
          {
            const: 1,
            minimum: 1,
            maximum: 9,
            exclusiveMinimum: true,
            exclusiveMaximum: true,
            multipleOf: 1
          },
          {
            const: 2,
            minimum: 1,
            maximum: 9,
            exclusiveMinimum: true,
            exclusiveMaximum: true,
            multipleOf: 1
          },
          {
            const: 3,
            minimum: 1,
            maximum: 9,
            exclusiveMinimum: true,
            exclusiveMaximum: true,
            multipleOf: 1
          }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'number',
            uri: '#/',
            rootSchema: {},
            schema,
            items: [
              {
                meta: {
                  type: 'number',
                  item: 0,
                  parentUri: '#/',
                  uri: '#/0',
                  rootSchema: {},
                  schema: {
                    const: 1,
                    minimum: 1,
                    maximum: 9,
                    exclusiveMinimum: true,
                    exclusiveMaximum: true,
                    multipleOf: 1
                  },
                  value: '1',
                  min: 1,
                  max: 9,
                  isExclusiveMin: true,
                  isExclusiveMax: true,
                  step: 1
                },
                elements: {
                  field: {
                    id: '#/0',
                    value: '1',
                    min: 1,
                    max: 9,
                    step: 1
                  }
                }
              },
              {
                meta: {
                  type: 'number',
                  item: 1,
                  parentUri: '#/',
                  uri: '#/1',
                  rootSchema: {},
                  schema: {
                    const: 2,
                    minimum: 1,
                    maximum: 9,
                    exclusiveMinimum: true,
                    exclusiveMaximum: true,
                    multipleOf: 1
                  },
                  value: '2',
                  min: 1,
                  max: 9,
                  isExclusiveMin: true,
                  isExclusiveMax: true,
                  step: 1
                },
                elements: {
                  field: {
                    id: '#/1',
                    value: '2',
                    min: 1,
                    max: 9,
                    step: 1
                  }
                }
              },
              {
                meta: {
                  type: 'number',
                  item: 2,
                  parentUri: '#/',
                  uri: '#/2',
                  rootSchema: {},
                  schema: {
                    const: 3,
                    minimum: 1,
                    maximum: 9,
                    exclusiveMinimum: true,
                    exclusiveMaximum: true,
                    multipleOf: 1
                  },
                  value: '3',
                  min: 1,
                  max: 9,
                  isExclusiveMin: true,
                  isExclusiveMax: true,
                  step: 1
                },
                elements: {
                  field: {
                    id: '#/2',
                    value: '3',
                    min: 1,
                    max: 9,
                    step: 1
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
                    type: 'number',
                    item: 0,
                    parentUri: '#/',
                    uri: '#/0',
                    rootSchema: {},
                    schema: {
                      const: 1,
                      minimum: 1,
                      maximum: 9,
                      exclusiveMinimum: true,
                      exclusiveMaximum: true,
                      multipleOf: 1
                    },
                    value: '1',
                    min: 1,
                    max: 9,
                    isExclusiveMin: true,
                    isExclusiveMax: true,
                    step: 1
                  },
                  elements: {
                    field: {
                      id: '#/0',
                      value: '1',
                      min: 1,
                      max: 9,
                      step: 1
                    }
                  }
                },
                {
                  meta: {
                    type: 'number',
                    item: 1,
                    parentUri: '#/',
                    uri: '#/1',
                    rootSchema: {},
                    schema: {
                      const: 2,
                      minimum: 1,
                      maximum: 9,
                      exclusiveMinimum: true,
                      exclusiveMaximum: true,
                      multipleOf: 1
                    },
                    value: '2',
                    min: 1,
                    max: 9,
                    isExclusiveMin: true,
                    isExclusiveMax: true,
                    step: 1
                  },
                  elements: {
                    field: {
                      id: '#/1',
                      value: '2',
                      min: 1,
                      max: 9,
                      step: 1
                    }
                  }
                },
                {
                  meta: {
                    type: 'number',
                    item: 2,
                    parentUri: '#/',
                    uri: '#/2',
                    rootSchema: {},
                    schema: {
                      const: 3,
                      minimum: 1,
                      maximum: 9,
                      exclusiveMinimum: true,
                      exclusiveMaximum: true,
                      multipleOf: 1
                    },
                    value: '3',
                    min: 1,
                    max: 9,
                    isExclusiveMin: true,
                    isExclusiveMax: true,
                    step: 1
                  },
                  elements: {
                    field: {
                      id: '#/2',
                      value: '3',
                      min: 1,
                      max: 9,
                      step: 1
                    }
                  }
                }
              ],
              selectedItems: []
            }
          }
        })
    })

    it('transforms `number` type with `allOf`', () => {
      const schema = {
        type: 'number',
        allOf: [
          {
            minimum: 1
          },
          {
            const: 0
          },
          {
            maximum: 9
          },
          {
            exclusiveMinimum: true
          },
          {
            exclusiveMaximum: true
          },
          {
            multipleOf: 1
          }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'number',
            uri: '#/',
            rootSchema: {},
            schema,
            value: '0',
            min: 1,
            max: 9,
            isExclusiveMin: true,
            isExclusiveMax: true,
            step: 1
          },
          elements: {
            field: {
              id: '#/',
              value: '0',
              min: 1,
              max: 9,
              step: 1
            }
          }
        })
    })

    it('transforms `number` type', () => {
      const schema = {
        type: 'number',
        minimum: 1,
        const: 0,
        maximum: 9,
        exclusiveMinimum: true,
        exclusiveMaximum: true,
        multipleOf: 1
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'number',
            uri: '#/',
            rootSchema: {},
            schema,
            value: '0',
            min: 1,
            max: 9,
            isExclusiveMin: true,
            isExclusiveMax: true,
            step: 1
          },
          elements: {
            field: {
              id: '#/',
              value: '0',
              min: 1,
              max: 9,
              step: 1
            }
          }
        })
    })
  })
})
