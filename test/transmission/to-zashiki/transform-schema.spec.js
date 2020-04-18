import debug from 'debug'

import { expect } from 'chai'

import transform from 'shinkansen-transmission/transmission/to-zashiki'

import {
  transformObjectSchemaNullForEnum,
  transformObjectSchemaNullForAnyOf,
  transformObjectSchemaNullForOneOf,
  transformObjectSchemaNullForAllOf,
  transformObjectSchemaNull,
  transformObjectSchemaBooleanForEnum,
  transformObjectSchemaBooleanForAnyOf,
  transformObjectSchemaBooleanForOneOf,
  transformObjectSchemaBooleanForAllOf,
  transformObjectSchemaBoolean,
  transformObjectSchemaObjectForEnum,
  transformObjectSchemaObjectForAnyOf,
  transformObjectSchemaObjectForOneOf,
  transformObjectSchemaObjectForAllOf,
  transformObjectSchemaObject,
  transformObjectSchemaArrayForEnum,
  transformObjectSchemaArrayForAnyOf,
  transformObjectSchemaArrayForOneOf,
  transformObjectSchemaArrayForAllOf,
  transformObjectSchemaArray,
  transformObjectSchemaNumberForEnum,
  transformObjectSchemaNumberForAnyOf,
  transformObjectSchemaNumberForOneOf,
  transformObjectSchemaNumberForAllOf,
  transformObjectSchemaNumber,
  transformObjectSchemaStringForEnum,
  transformObjectSchemaStringForAnyOf,
  transformObjectSchemaStringForOneOf,
  transformObjectSchemaStringForAllOf,
  transformObjectSchemaString,
  transformObjectSchema,
  transformArraySchemaNullForEnum,
  transformArraySchemaNullForAnyOf,
  transformArraySchemaNullForOneOf,
  transformArraySchemaNullForAllOf,
  transformArraySchemaNull,
  transformArraySchemaBooleanForEnum,
  transformArraySchemaBooleanForAnyOf,
  transformArraySchemaBooleanForOneOf,
  transformArraySchemaBooleanForAllOf,
  transformArraySchemaBoolean,
  transformArraySchemaObjectForEnum,
  transformArraySchemaObjectForAnyOf,
  transformArraySchemaObjectForOneOf,
  transformArraySchemaObjectForAllOf,
  transformArraySchemaObject,
  transformArraySchemaArrayForEnum,
  transformArraySchemaArrayForAnyOf,
  transformArraySchemaArrayForOneOf,
  transformArraySchemaArrayForAllOf,
  transformArraySchemaArray,
  transformArraySchemaNumberForEnum,
  transformArraySchemaNumberForAnyOf,
  transformArraySchemaNumberForOneOf,
  transformArraySchemaNumberForAllOf,
  transformArraySchemaNumber,
  transformArraySchemaStringForEnum,
  transformArraySchemaStringForAnyOf,
  transformArraySchemaStringForOneOf,
  transformArraySchemaStringForAllOf,
  transformArraySchemaString,
  transformArraySchema,
  transformNullForEnum,
  transformNullForAnyOf,
  transformNullForOneOf,
  transformNullForAllOf,
  transformNull,
  transformBooleanForEnum,
  transformBooleanForAnyOf,
  transformBooleanForOneOf,
  transformBooleanForAllOf,
  transformBoolean,
  transformObjectForEnum,
  transformObjectForAnyOf,
  transformObjectForOneOf,
  transformObjectForAllOf,
  transformObject,
  transformArrayForEnum,
  transformArrayForAnyOf,
  transformArrayForOneOf,
  transformArrayForAllOf,
  transformArray,
  transformNumberForEnum,
  transformNumberForAnyOf,
  transformNumberForOneOf,
  transformNumberForAllOf,
  transformNumber,
  transformStringForEnum,
  transformStringForAnyOf,
  transformStringForOneOf,
  transformStringForAllOf,
  transformString
} from 'shinkansen-transmission/transmission/to-zashiki/transform-schema'

describe('shinkansen-transmission/transmission/to-zashiki', () => {
  before(() => {
    const {
      env: {
        DEBUG
      }
    } = process

    if (DEBUG) debug.enable(DEBUG)
  })

  it('is a function', () => {
    expect(transform)
      .to.be.a('function')
  })

  describe('`transformObjectSchemaNullForEnum`', () => {
    it('is a function', () => {
      expect(transformObjectSchemaNullForEnum)
        .to.be.a('function')
    })
  })

  describe('`transformObjectSchemaNullForAnyOf`', () => {
    it('is a function', () => {
      expect(transformObjectSchemaNullForAnyOf)
        .to.be.a('function')
    })
  })

  describe('`transformObjectSchemaNullForOneOf`', () => {
    it('is a function', () => {
      expect(transformObjectSchemaNullForOneOf)
        .to.be.a('function')
    })
  })

  describe('`transformObjectSchemaNullForAllOf`', () => {
    it('is a function', () => {
      expect(transformObjectSchemaNullForAllOf)
        .to.be.a('function')
    })
  })

  describe('`transformObjectSchemaNull`', () => {
    it('is a function', () => {
      expect(transformObjectSchemaNull)
        .to.be.a('function')
    })
  })

  describe('`transformObjectSchemaBooleanForEnum`', () => {
    it('is a function', () => {
      expect(transformObjectSchemaBooleanForEnum)
        .to.be.a('function')
    })
  })

  describe('`transformObjectSchemaBooleanForAnyOf`', () => {
    it('is a function', () => {
      expect(transformObjectSchemaBooleanForAnyOf)
        .to.be.a('function')
    })
  })

  describe('`transformObjectSchemaBooleanForOneOf`', () => {
    it('is a function', () => {
      expect(transformObjectSchemaBooleanForOneOf)
        .to.be.a('function')
    })
  })

  describe('`transformObjectSchemaBooleanForAllOf`', () => {
    it('is a function', () => {
      expect(transformObjectSchemaBooleanForAllOf)
        .to.be.a('function')
    })
  })

  describe('`transformObjectSchemaBoolean`', () => {
    it('is a function', () => {
      expect(transformObjectSchemaBoolean)
        .to.be.a('function')
    })
  })

  describe('`transformObjectSchemaObjectForEnum`', () => {
    it('is a function', () => {
      expect(transformObjectSchemaObjectForEnum)
        .to.be.a('function')
    })
  })

  describe('`transformObjectSchemaObjectForAnyOf`', () => {
    it('is a function', () => {
      expect(transformObjectSchemaObjectForAnyOf)
        .to.be.a('function')
    })
  })

  describe('`transformObjectSchemaObjectForOneOf`', () => {
    it('is a function', () => {
      expect(transformObjectSchemaObjectForOneOf)
        .to.be.a('function')
    })
  })

  describe('`transformObjectSchemaObjectForAllOf`', () => {
    it('is a function', () => {
      expect(transformObjectSchemaObjectForAllOf)
        .to.be.a('function')
    })
  })

  describe('`transformObjectSchemaObject`', () => {
    it('is a function', () => {
      expect(transformObjectSchemaObject)
        .to.be.a('function')
    })
  })

  describe('`transformObjectSchemaArrayForEnum`', () => {
    it('is a function', () => {
      expect(transformObjectSchemaArrayForEnum)
        .to.be.a('function')
    })
  })

  describe('`transformObjectSchemaArrayForAnyOf`', () => {
    it('is a function', () => {
      expect(transformObjectSchemaArrayForAnyOf)
        .to.be.a('function')
    })
  })

  describe('`transformObjectSchemaArrayForOneOf`', () => {
    it('is a function', () => {
      expect(transformObjectSchemaArrayForOneOf)
        .to.be.a('function')
    })
  })

  describe('`transformObjectSchemaArrayForAllOf`', () => {
    it('is a function', () => {
      expect(transformObjectSchemaArrayForAllOf)
        .to.be.a('function')
    })
  })

  describe('`transformObjectSchemaArray`', () => {
    it('is a function', () => {
      expect(transformObjectSchemaArray)
        .to.be.a('function')
    })
  })

  describe('`transformObjectSchemaNumberForEnum`', () => {
    it('is a function', () => {
      expect(transformObjectSchemaNumberForEnum)
        .to.be.a('function')
    })
  })

  describe('`transformObjectSchemaNumberForAnyOf`', () => {
    it('is a function', () => {
      expect(transformObjectSchemaNumberForAnyOf)
        .to.be.a('function')
    })
  })

  describe('`transformObjectSchemaNumberForOneOf`', () => {
    it('is a function', () => {
      expect(transformObjectSchemaNumberForOneOf)
        .to.be.a('function')
    })
  })

  describe('`transformObjectSchemaNumberForAllOf`', () => {
    it('is a function', () => {
      expect(transformObjectSchemaNumberForAllOf)
        .to.be.a('function')
    })
  })

  describe('`transformObjectSchemaNumber`', () => {
    it('is a function', () => {
      expect(transformObjectSchemaNumber)
        .to.be.a('function')
    })
  })

  describe('`transformObjectSchemaStringForEnum`', () => {
    it('is a function', () => {
      expect(transformObjectSchemaStringForEnum)
        .to.be.a('function')
    })
  })

  describe('`transformObjectSchemaStringForAnyOf`', () => {
    it('is a function', () => {
      expect(transformObjectSchemaStringForAnyOf)
        .to.be.a('function')
    })
  })

  describe('`transformObjectSchemaStringForOneOf`', () => {
    it('is a function', () => {
      expect(transformObjectSchemaStringForOneOf)
        .to.be.a('function')
    })
  })

  describe('`transformObjectSchemaStringForAllOf`', () => {
    it('is a function', () => {
      expect(transformObjectSchemaStringForAllOf)
        .to.be.a('function')
    })
  })

  describe('`transformObjectSchemaString`', () => {
    it('is a function', () => {
      expect(transformObjectSchemaString)
        .to.be.a('function')
    })
  })

  describe('`transformObjectSchema`', () => {
    it('is a function', () => {
      expect(transformObjectSchema)
        .to.be.a('function')
    })
  })

  describe('`transformArraySchemaNullForEnum`', () => {
    it('is a function', () => {
      expect(transformArraySchemaNullForEnum)
        .to.be.a('function')
    })
  })

  describe('`transformArraySchemaNullForAnyOf`', () => {
    it('is a function', () => {
      expect(transformArraySchemaNullForAnyOf)
        .to.be.a('function')
    })
  })

  describe('`transformArraySchemaNullForOneOf`', () => {
    it('is a function', () => {
      expect(transformArraySchemaNullForOneOf)
        .to.be.a('function')
    })
  })

  describe('`transformArraySchemaNullForAllOf`', () => {
    it('is a function', () => {
      expect(transformArraySchemaNullForAllOf)
        .to.be.a('function')
    })
  })

  describe('`transformArraySchemaNull`', () => {
    it('is a function', () => {
      expect(transformArraySchemaNull)
        .to.be.a('function')
    })
  })

  describe('`transformArraySchemaBooleanForEnum`', () => {
    it('is a function', () => {
      expect(transformArraySchemaBooleanForEnum)
        .to.be.a('function')
    })
  })

  describe('`transformArraySchemaBooleanForAnyOf`', () => {
    it('is a function', () => {
      expect(transformArraySchemaBooleanForAnyOf)
        .to.be.a('function')
    })
  })

  describe('`transformArraySchemaBooleanForOneOf`', () => {
    it('is a function', () => {
      expect(transformArraySchemaBooleanForOneOf)
        .to.be.a('function')
    })
  })

  describe('`transformArraySchemaBooleanForAllOf`', () => {
    it('is a function', () => {
      expect(transformArraySchemaBooleanForAllOf)
        .to.be.a('function')
    })
  })

  describe('`transformArraySchemaBoolean`', () => {
    it('is a function', () => {
      expect(transformArraySchemaBoolean)
        .to.be.a('function')
    })
  })

  describe('`transformArraySchemaObjectForEnum`', () => {
    it('is a function', () => {
      expect(transformArraySchemaObjectForEnum)
        .to.be.a('function')
    })
  })

  describe('`transformArraySchemaObjectForAnyOf`', () => {
    it('is a function', () => {
      expect(transformArraySchemaObjectForAnyOf)
        .to.be.a('function')
    })
  })

  describe('`transformArraySchemaObjectForOneOf`', () => {
    it('is a function', () => {
      expect(transformArraySchemaObjectForOneOf)
        .to.be.a('function')
    })
  })

  describe('`transformArraySchemaObjectForAllOf`', () => {
    it('is a function', () => {
      expect(transformArraySchemaObjectForAllOf)
        .to.be.a('function')
    })
  })

  describe('`transformArraySchemaObject`', () => {
    it('is a function', () => {
      expect(transformArraySchemaObject)
        .to.be.a('function')
    })
  })

  describe('`transformArraySchemaArrayForEnum`', () => {
    it('is a function', () => {
      expect(transformArraySchemaArrayForEnum)
        .to.be.a('function')
    })
  })

  describe('`transformArraySchemaArrayForAnyOf`', () => {
    it('is a function', () => {
      expect(transformArraySchemaArrayForAnyOf)
        .to.be.a('function')
    })
  })

  describe('`transformArraySchemaArrayForOneOf`', () => {
    it('is a function', () => {
      expect(transformArraySchemaArrayForOneOf)
        .to.be.a('function')
    })
  })

  describe('`transformArraySchemaArrayForAllOf`', () => {
    it('is a function', () => {
      expect(transformArraySchemaArrayForAllOf)
        .to.be.a('function')
    })
  })

  describe('`transformArraySchemaArray`', () => {
    it('is a function', () => {
      expect(transformArraySchemaArray)
        .to.be.a('function')
    })
  })

  describe('`transformArraySchemaNumberForEnum`', () => {
    it('is a function', () => {
      expect(transformArraySchemaNumberForEnum)
        .to.be.a('function')
    })
  })

  describe('`transformArraySchemaNumberForAnyOf`', () => {
    it('is a function', () => {
      expect(transformArraySchemaNumberForAnyOf)
        .to.be.a('function')
    })
  })

  describe('`transformArraySchemaNumberForOneOf`', () => {
    it('is a function', () => {
      expect(transformArraySchemaNumberForOneOf)
        .to.be.a('function')
    })
  })

  describe('`transformArraySchemaNumberForAllOf`', () => {
    it('is a function', () => {
      expect(transformArraySchemaNumberForAllOf)
        .to.be.a('function')
    })
  })

  describe('`transformArraySchemaNumber`', () => {
    it('is a function', () => {
      expect(transformArraySchemaNumber)
        .to.be.a('function')
    })
  })

  describe('`transformArraySchemaStringForEnum`', () => {
    it('is a function', () => {
      expect(transformArraySchemaStringForEnum)
        .to.be.a('function')
    })
  })

  describe('`transformArraySchemaStringForAnyOf`', () => {
    it('is a function', () => {
      expect(transformArraySchemaStringForAnyOf)
        .to.be.a('function')
    })
  })

  describe('`transformArraySchemaStringForOneOf`', () => {
    it('is a function', () => {
      expect(transformArraySchemaStringForOneOf)
        .to.be.a('function')
    })
  })

  describe('`transformArraySchemaStringForAllOf`', () => {
    it('is a function', () => {
      expect(transformArraySchemaStringForAllOf)
        .to.be.a('function')
    })
  })

  describe('`transformArraySchemaString`', () => {
    it('is a function', () => {
      expect(transformArraySchemaString)
        .to.be.a('function')
    })
  })

  describe('`transformArraySchema`', () => {
    it('is a function', () => {
      expect(transformArraySchema)
        .to.be.a('function')
    })
  })

  describe('`transformNullForEnum`', () => {
    it('is a function', () => {
      expect(transformNullForEnum)
        .to.be.a('function')
    })
  })

  describe('`transformNullForAnyOf`', () => {
    it('is a function', () => {
      expect(transformNullForAnyOf)
        .to.be.a('function')
    })
  })

  describe('`transformNullForOneOf`', () => {
    it('is a function', () => {
      expect(transformNullForOneOf)
        .to.be.a('function')
    })
  })

  describe('`transformNullForAllOf`', () => {
    it('is a function', () => {
      expect(transformNullForAllOf)
        .to.be.a('function')
    })
  })

  describe('`transformNull`', () => {
    it('is a function', () => {
      expect(transformNull)
        .to.be.a('function')
    })
  })

  describe('`transformBooleanForEnum`', () => {
    it('is a function', () => {
      expect(transformBooleanForEnum)
        .to.be.a('function')
    })
  })

  describe('`transformBooleanForAnyOf`', () => {
    it('is a function', () => {
      expect(transformBooleanForAnyOf)
        .to.be.a('function')
    })
  })

  describe('`transformBooleanForOneOf`', () => {
    it('is a function', () => {
      expect(transformBooleanForOneOf)
        .to.be.a('function')
    })
  })

  describe('`transformBooleanForAllOf`', () => {
    it('is a function', () => {
      expect(transformBooleanForAllOf)
        .to.be.a('function')
    })
  })

  describe('`transformBoolean`', () => {
    it('is a function', () => {
      expect(transformBoolean)
        .to.be.a('function')
    })
  })

  describe('`transformObjectForEnum`', () => {
    it('is a function', () => {
      expect(transformObjectForEnum)
        .to.be.a('function')
    })
  })

  describe('`transformObjectForAnyOf`', () => {
    it('is a function', () => {
      expect(transformObjectForAnyOf)
        .to.be.a('function')
    })
  })

  describe('`transformObjectForOneOf`', () => {
    it('is a function', () => {
      expect(transformObjectForOneOf)
        .to.be.a('function')
    })
  })

  describe('`transformObjectForAllOf`', () => {
    it('is a function', () => {
      expect(transformObjectForAllOf)
        .to.be.a('function')
    })
  })

  describe('`transformObject`', () => {
    it('is a function', () => {
      expect(transformObject)
        .to.be.a('function')
    })
  })

  describe('`transformArrayForEnum`', () => {
    it('is a function', () => {
      expect(transformArrayForEnum)
        .to.be.a('function')
    })
  })

  describe('`transformArrayForAnyOf`', () => {
    it('is a function', () => {
      expect(transformArrayForAnyOf)
        .to.be.a('function')
    })
  })

  describe('`transformArrayForOneOf`', () => {
    it('is a function', () => {
      expect(transformArrayForOneOf)
        .to.be.a('function')
    })
  })

  describe('`transformArrayForAllOf`', () => {
    it('is a function', () => {
      expect(transformArrayForAllOf)
        .to.be.a('function')
    })
  })

  describe('`transformArray`', () => {
    it('is a function', () => {
      expect(transformArray)
        .to.be.a('function')
    })
  })

  describe('`transformNumberForEnum`', () => {
    it('is a function', () => {
      expect(transformNumberForEnum)
        .to.be.a('function')
    })
  })

  describe('`transformNumberForAnyOf`', () => {
    it('is a function', () => {
      expect(transformNumberForAnyOf)
        .to.be.a('function')
    })
  })

  describe('`transformNumberForOneOf`', () => {
    it('is a function', () => {
      expect(transformNumberForOneOf)
        .to.be.a('function')
    })
  })

  describe('`transformNumberForAllOf`', () => {
    it('is a function', () => {
      expect(transformNumberForAllOf)
        .to.be.a('function')
    })
  })

  describe('`transformNumber`', () => {
    it('is a function', () => {
      expect(transformNumber)
        .to.be.a('function')
    })
  })

  describe('`transformStringForEnum`', () => {
    it('is a function', () => {
      expect(transformStringForEnum)
        .to.be.a('function')
    })
  })

  describe('`transformStringForAnyOf`', () => {
    it('is a function', () => {
      expect(transformStringForAnyOf)
        .to.be.a('function')
    })
  })

  describe('`transformStringForOneOf`', () => {
    it('is a function', () => {
      expect(transformStringForOneOf)
        .to.be.a('function')
    })
  })

  describe('`transformStringForAllOf`', () => {
    it('is a function', () => {
      expect(transformStringForAllOf)
        .to.be.a('function')
    })
  })

  describe('`transformString`', () => {
    it('is a function', () => {
      expect(transformString)
        .to.be.a('function')
    })
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
            schema,
            minLength: 1,
            maxLength: 9,
            pattern: /.*/,
            selectedItems: []
          },
          elements: {
            enum: {
              id: '#/',
              items: [
                'One',
                'Two',
                'Three'
              ],
              minLength: 1,
              maxLength: 9,
              pattern: /.*/,
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
            schema,
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
                    required: false,
                    value: 'One'
                  },
                  elements: {
                    field: {
                      id: '#/0',
                      required: false,
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
                    required: false,
                    value: 'Two'
                  },
                  elements: {
                    field: {
                      id: '#/1',
                      required: false,
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
                    required: false,
                    value: 'Three'
                  },
                  elements: {
                    field: {
                      id: '#/2',
                      required: false,
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
            schema,
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
                    pattern: /.*/,
                    required: false
                  },
                  elements: {
                    field: {
                      id: '#/0',
                      value: 'One',
                      minLength: 1,
                      maxLength: 9,
                      pattern: /.*/,
                      required: false
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
                    pattern: /.*/,
                    required: false
                  },
                  elements: {
                    field: {
                      id: '#/1',
                      value: 'Two',
                      minLength: 1,
                      maxLength: 9,
                      pattern: /.*/,
                      required: false
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
                    pattern: /.*/,
                    required: false
                  },
                  elements: {
                    field: {
                      id: '#/2',
                      value: 'Three',
                      minLength: 1,
                      maxLength: 9,
                      pattern: /.*/,
                      required: false
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

  /*
   *  Number
   */
  describe('Transforming `number` type schemas', () => {
    it('transforms', () => {
      const schema = { type: 'number' }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'number',
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

    it('transforms with `enum`', () => {
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
            schema,
            min: 1,
            max: 9,
            isExclusiveMin: true,
            isExclusiveMax: true,
            step: 1,
            selectedItems: []
          },
          elements: {
            enum: {
              id: '#/',
              items: [
                1,
                2,
                3
              ],
              min: 1,
              max: 9,
              step: 1,
              selectedItems: []
            }
          }
        })
    })

    it('transforms with `anyOf`', () => {
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
            schema,
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
                    rootSchema: schema,
                    schema: {
                      const: 1
                    },
                    required: false,
                    value: '1'
                  },
                  elements: {
                    field: {
                      id: '#/0',
                      required: false,
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
                    rootSchema: schema,
                    schema: {
                      const: 2
                    },
                    required: false,
                    value: '2'
                  },
                  elements: {
                    field: {
                      id: '#/1',
                      required: false,
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
                    rootSchema: schema,
                    schema: {
                      const: 3
                    },
                    required: false,
                    value: '3'
                  },
                  elements: {
                    field: {
                      id: '#/2',
                      required: false,
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

    it('transforms with `oneOf`', () => {
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
            schema,
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
                    rootSchema: schema,
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
                    step: 1,
                    required: false
                  },
                  elements: {
                    field: {
                      id: '#/0',
                      value: '1',
                      min: 1,
                      max: 9,
                      step: 1,
                      required: false
                    }
                  }
                },
                {
                  meta: {
                    type: 'number',
                    item: 1,
                    parentUri: '#/',
                    uri: '#/1',
                    rootSchema: schema,
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
                    step: 1,
                    required: false
                  },
                  elements: {
                    field: {
                      id: '#/1',
                      value: '2',
                      min: 1,
                      max: 9,
                      step: 1,
                      required: false
                    }
                  }
                },
                {
                  meta: {
                    type: 'number',
                    item: 2,
                    parentUri: '#/',
                    uri: '#/2',
                    rootSchema: schema,
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
                    step: 1,
                    required: false
                  },
                  elements: {
                    field: {
                      id: '#/2',
                      value: '3',
                      min: 1,
                      max: 9,
                      step: 1,
                      required: false
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

    it('transforms without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
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

  /*
   *  Array
   */
  describe('Transforming `array` type schemas', () => {
    it('transforms', () => {
      const schema = { type: 'array' }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'array',
            uri: '#/',
            schema
          },
          elements: {
            fields: []
          }
        })
    })

    /*
     *
     *  Item at array index must be of type at schema item index
     *
     *    [ 'string', 1, true, null ]
     *
     */
    it('transforms (x1)', () => {
      const schema = {
        type: 'array',
        items: [
          {
            type: 'string'
          },
          {
            type: 'number'
          },
          {
            type: 'boolean'
          },
          {
            type: 'null'
          }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'array',
            uri: '#/',
            schema
          },
          elements: {
            fields: [
              {
                meta: {
                  type: 'string',
                  item: 0,
                  parentUri: '#/',
                  uri: '#/0',
                  rootSchema: schema,
                  schema: {
                    type: 'string'
                  },
                  required: false
                },
                elements: {
                  field: {
                    id: '#/0',
                    required: false
                  }
                }
              },
              {
                meta: {
                  type: 'number',
                  item: 1,
                  parentUri: '#/',
                  uri: '#/1',
                  rootSchema: schema,
                  schema: {
                    type: 'number'
                  },
                  required: false
                },
                elements: {
                  field: {
                    id: '#/1',
                    required: false
                  }
                }
              },
              {
                meta: {
                  type: 'boolean',
                  item: 2,
                  parentUri: '#/',
                  uri: '#/2',
                  rootSchema: schema,
                  schema: {
                    type: 'boolean'
                  },
                  required: false
                },
                elements: {
                  field: {
                    id: '#/2',
                    required: false
                  }
                }
              },
              {
                meta: {
                  type: 'null',
                  item: 3,
                  parentUri: '#/',
                  uri: '#/3',
                  rootSchema: schema,
                  schema: {
                    type: 'null'
                  },
                  required: false
                },
                elements: {
                  field: {
                    id: '#/3',
                    required: false
                  }
                }
              }
            ]
          }
        })
    })

    /*
     *  Item at each index must be type of schema item
     *
     *  [ 'string' ]
     *
     */
    it('transforms (x1)', () => {
      const schema = {
        type: 'array',
        items: {
          type: 'string'
        }
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'array',
            uri: '#/',
            schema
          },
          elements: {
            fields: [
              {
                meta: {
                  type: 'string',
                  item: 0,
                  parentUri: '#/', // ?
                  uri: '#/0',
                  rootSchema: schema,
                  schema: {
                    type: 'string'
                  },
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
     *
     *  Item at array index must be of type at schema item index
     *
     *    [
     *      [ 'string', 1, true, null ]
     *    ]
     *
     */
    it('transforms (x2)', () => {
      const schema = {
        type: 'array',
        items: [
          {
            type: 'array',
            items: [
              {
                type: 'string'
              },
              {
                type: 'number'
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

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'array',
            uri: '#/',
            schema
          },
          elements: {
            fields: [
              {
                meta: {
                  type: 'array',
                  item: 0,
                  parentUri: '#/',
                  uri: '#/0',
                  rootSchema: schema,
                  schema: {
                    type: 'array',
                    items: [
                      {
                        type: 'string'
                      },
                      {
                        type: 'number'
                      },
                      {
                        type: 'boolean'
                      },
                      {
                        type: 'null'
                      }
                    ]
                  },
                  required: false
                },
                elements: {
                  fields: [
                    {
                      meta: {
                        type: 'string',
                        item: 0,
                        parentUri: '#/0',
                        uri: '#/0/0',
                        rootSchema: schema,
                        schema: {
                          type: 'string'
                        },
                        required: false
                      },
                      elements: {
                        field: {
                          id: '#/0/0',
                          required: false
                        }
                      }
                    },
                    {
                      meta: {
                        type: 'number',
                        item: 1,
                        parentUri: '#/0',
                        uri: '#/0/1',
                        rootSchema: schema,
                        schema: {
                          type: 'number'
                        },
                        required: false
                      },
                      elements: {
                        field: {
                          id: '#/0/1',
                          required: false
                        }
                      }
                    },
                    {
                      meta: {
                        type: 'boolean',
                        item: 2,
                        parentUri: '#/0',
                        uri: '#/0/2',
                        rootSchema: schema,
                        schema: {
                          type: 'boolean'
                        },
                        required: false
                      },
                      elements: {
                        field: {
                          id: '#/0/2',
                          required: false
                        }
                      }
                    },
                    {
                      meta: {
                        type: 'null',
                        item: 3,
                        parentUri: '#/0',
                        uri: '#/0/3',
                        rootSchema: schema,
                        schema: {
                          type: 'null'
                        },
                        required: false
                      },
                      elements: {
                        field: {
                          id: '#/0/3',
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
     *  Item at each index must be type of schema item
     *
     *  [
     *    [ 'string' ]
     *  ]
     *
     */
    it('transforms (x2)', () => {
      const schema = {
        type: 'array',
        items: {
          type: 'array',
          items: {
            type: 'string'
          }
        }
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'array',
            uri: '#/',
            schema
          },
          elements: {
            fields: [
              {
                meta: {
                  type: 'array',
                  item: 0,
                  parentUri: '#/',
                  uri: '#/0',
                  rootSchema: schema,
                  schema: {
                    type: 'array',
                    items: {
                      type: 'string'
                    }
                  },
                  required: false
                },
                elements: {
                  fields: [
                    {
                      meta: {
                        type: 'string',
                        item: 0,
                        parentUri: '#/0',
                        uri: '#/0/0',
                        rootSchema: schema,
                        schema: {
                          type: 'string'
                        },
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

    /*
     *
     *  Item at array index must be of type at schema item index
     *
     *    [
     *      [
     *        [ 'string', 1, true, null ]
     *      ]
     *    ]
     *
     */
    it('transforms (x3)', () => {
      const schema = {
        type: 'array',
        items: [
          {
            type: 'array',
            items: [
              {
                type: 'array',
                items: [
                  {
                    type: 'string'
                  },
                  {
                    type: 'number'
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
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'array',
            uri: '#/',
            schema
          },
          elements: {
            fields: [
              {
                meta: {
                  type: 'array',
                  item: 0,
                  parentUri: '#/',
                  uri: '#/0',
                  rootSchema: schema,
                  schema: {
                    type: 'array',
                    items: [
                      {
                        type: 'array',
                        items: [
                          {
                            type: 'string'
                          },
                          {
                            type: 'number'
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
                  },
                  required: false
                },
                elements: {
                  fields: [
                    {
                      meta: {
                        type: 'array',
                        item: 0,
                        parentUri: '#/0',
                        uri: '#/0/0',
                        rootSchema: schema,
                        schema: {
                          type: 'array',
                          items: [
                            {
                              type: 'string'
                            },
                            {
                              type: 'number'
                            },
                            {
                              type: 'boolean'
                            },
                            {
                              type: 'null'
                            }
                          ]
                        },
                        required: false
                      },
                      elements: {
                        fields: [
                          {
                            meta: {
                              type: 'string',
                              item: 0,
                              parentUri: '#/0/0',
                              uri: '#/0/0/0',
                              rootSchema: schema,
                              schema: {
                                type: 'string'
                              },
                              required: false
                            },
                            elements: {
                              field: {
                                id: '#/0/0/0',
                                required: false
                              }
                            }
                          },
                          {
                            meta: {
                              type: 'number',
                              item: 1,
                              parentUri: '#/0/0',
                              uri: '#/0/0/1',
                              rootSchema: schema,
                              schema: {
                                type: 'number'
                              },
                              required: false
                            },
                            elements: {
                              field: {
                                id: '#/0/0/1',
                                required: false
                              }
                            }
                          },
                          {
                            meta: {
                              type: 'boolean',
                              item: 2,
                              parentUri: '#/0/0',
                              uri: '#/0/0/2',
                              rootSchema: schema,
                              schema: {
                                type: 'boolean'
                              },
                              required: false
                            },
                            elements: {
                              field: {
                                id: '#/0/0/2',
                                required: false
                              }
                            }
                          },
                          {
                            meta: {
                              type: 'null',
                              item: 3,
                              parentUri: '#/0/0',
                              uri: '#/0/0/3',
                              rootSchema: schema,
                              schema: {
                                type: 'null'
                              },
                              required: false
                            },
                            elements: {
                              field: {
                                id: '#/0/0/3',
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
     *  Item at each index must be type of schema item
     *
     *  [
     *    [
     *      [ 'string' ]
     *    ]
     *  ]
     *
     */
    it('transforms (x3)', () => {
      const schema = {
        type: 'array',
        items: {
          type: 'array',
          items: {
            type: 'array',
            items: {
              type: 'string'
            }
          }
        }
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'array',
            uri: '#/',
            schema
          },
          elements: {
            fields: [
              {
                meta: {
                  type: 'array',
                  item: 0,
                  parentUri: '#/',
                  uri: '#/0',
                  rootSchema: schema,
                  schema: {
                    type: 'array',
                    items: {
                      type: 'array',
                      items: {
                        type: 'string'
                      }
                    }
                  },
                  required: false
                },
                elements: {
                  fields: [
                    {
                      meta: {
                        type: 'array',
                        item: 0,
                        parentUri: '#/0',
                        uri: '#/0/0',
                        rootSchema: schema,
                        schema: {
                          type: 'array',
                          items: {
                            type: 'string'
                          }
                        },
                        required: false
                      },
                      elements: {
                        fields: [
                          {
                            meta: {
                              type: 'string',
                              item: 0,
                              parentUri: '#/0/0',
                              uri: '#/0/0/0',
                              rootSchema: schema,
                              schema: {
                                type: 'string'
                              },
                              required: false
                            },
                            elements: {
                              field: {
                                id: '#/0/0/0',
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

    it('transforms with `enum`', () => {
      const schema = {
        type: 'array',
        enum: [
          [],
          [],
          []
        ],
        minItems: 1,
        maxItems: 9,
        uniqueItems: true,
        minContains: 1,
        maxContains: 9
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'array',
            uri: '#/',
            schema,
            minItems: 1,
            maxItems: 9,
            hasUniqueItems: true,
            minContains: 1,
            maxContains: 9,
            selectedItems: []
          },
          elements: {
            enum: {
              id: '#/',
              items: [
                [],
                [],
                []
              ],
              minItems: 1,
              maxItems: 9,
              hasUniqueItems: true,
              minContains: 1,
              maxContains: 9,
              selectedItems: []
            }
          }
        })
    })

    it('transforms with `anyOf`', () => {
      const schema = {
        type: 'array',
        anyOf: [
          { const: [] },
          { const: [] },
          { const: [] }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'array',
            uri: '#/',
            schema,
            selectedItems: []
          },
          elements: {
            anyOf: {
              id: '#/',
              items: [
                {
                  meta: {
                    type: 'array',
                    item: 0,
                    parentUri: '#/',
                    uri: '#/0',
                    rootSchema: schema,
                    schema: {
                      const: []
                    },
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
                    parentUri: '#/',
                    uri: '#/1',
                    rootSchema: schema,
                    schema: {
                      const: []
                    },
                    required: false
                  },
                  elements: {
                    fields: []
                  }
                },
                {
                  meta: {
                    type: 'array',
                    item: 2,
                    parentUri: '#/',
                    uri: '#/2',
                    rootSchema: schema,
                    schema: {
                      const: []
                    },
                    required: false
                  },
                  elements: {
                    fields: []
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
        type: 'array',
        oneOf: [
          {
            const: [],
            minItems: 1,
            maxItems: 9,
            uniqueItems: true,
            minContains: 1,
            maxContains: 9
          },
          {
            const: [],
            minItems: 1,
            maxItems: 9,
            uniqueItems: true,
            minContains: 1,
            maxContains: 9
          },
          {
            const: [],
            minItems: 1,
            maxItems: 9,
            uniqueItems: true,
            minContains: 1,
            maxContains: 9
          }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'array',
            uri: '#/',
            schema,
            selectedItems: []
          },
          elements: {
            oneOf: {
              id: '#/',
              items: [
                {
                  meta: {
                    type: 'array',
                    item: 0,
                    parentUri: '#/',
                    uri: '#/0',
                    rootSchema: schema,
                    schema: {
                      const: [],
                      minItems: 1,
                      maxItems: 9,
                      uniqueItems: true,
                      minContains: 1,
                      maxContains: 9
                    },
                    minItems: 1,
                    maxItems: 9,
                    hasUniqueItems: true,
                    minContains: 1,
                    maxContains: 9,
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
                    parentUri: '#/',
                    uri: '#/1',
                    rootSchema: schema,
                    schema: {
                      const: [],
                      minItems: 1,
                      maxItems: 9,
                      uniqueItems: true,
                      minContains: 1,
                      maxContains: 9
                    },
                    minItems: 1,
                    maxItems: 9,
                    hasUniqueItems: true,
                    minContains: 1,
                    maxContains: 9,
                    required: false
                  },
                  elements: {
                    fields: []
                  }
                },
                {
                  meta: {
                    type: 'array',
                    item: 2,
                    parentUri: '#/',
                    uri: '#/2',
                    rootSchema: schema,
                    schema: {
                      const: [],
                      minItems: 1,
                      maxItems: 9,
                      uniqueItems: true,
                      minContains: 1,
                      maxContains: 9
                    },
                    minItems: 1,
                    maxItems: 9,
                    hasUniqueItems: true,
                    minContains: 1,
                    maxContains: 9,
                    required: false
                  },
                  elements: {
                    fields: []
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
        type: 'array',
        allOf: [
          { const: [] },
          { minItems: 1 },
          { maxItems: 9 },
          { uniqueItems: true },
          { minContains: 1 },
          { maxContains: 9 }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'array',
            uri: '#/',
            schema,
            minItems: 1,
            maxItems: 9,
            hasUniqueItems: true,
            minContains: 1,
            maxContains: 9
          },
          elements: {
            fields: []
          }
        })
    })

    it('transforms without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
      const schema = {
        type: 'array',
        const: [],
        minItems: 1,
        maxItems: 9,
        uniqueItems: true,
        minContains: 1,
        maxContains: 9
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'array',
            uri: '#/',
            schema,
            minItems: 1,
            maxItems: 9,
            hasUniqueItems: true,
            minContains: 1,
            maxContains: 9
          },
          elements: {
            fields: []
          }
        })
    })
  })

  /*
   *  Object
   */
  describe('Transforming `object` type schemas', () => {
    it('transforms', () => {
      const schema = { type: 'object' }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'object',
            uri: '#/',
            schema
          },
          elements: {
            fields: []
          }
        })
    })

    it('transforms with `enum`', () => {
      const schema = {
        type: 'object',
        enum: [
          {},
          {},
          {}
        ],
        minProperties: 1,
        maxProperties: 9
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'object',
            uri: '#/',
            schema,
            minProperties: 1,
            maxProperties: 9,
            selectedItems: []
          },
          elements: {
            enum: {
              id: '#/',
              items: [
                {},
                {},
                {}
              ],
              minProperties: 1,
              maxProperties: 9,
              selectedItems: []
            }
          }
        })
    })

    it('transforms with `anyOf`', () => {
      const schema = {
        type: 'object',
        anyOf: [
          { const: {} },
          { const: {} },
          { const: {} }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'object',
            uri: '#/',
            schema,
            selectedItems: []
          },
          elements: {
            anyOf: {
              id: '#/',
              items: [
                {
                  meta: {
                    type: 'object',
                    item: 0,
                    parentUri: '#/',
                    uri: '#/0',
                    rootSchema: schema,
                    schema: {
                      const: {}
                    },
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
                    parentUri: '#/',
                    uri: '#/1',
                    rootSchema: schema,
                    schema: {
                      const: {}
                    },
                    required: false
                  },
                  elements: {
                    fields: []
                  }
                },
                {
                  meta: {
                    type: 'object',
                    item: 2,
                    parentUri: '#/',
                    uri: '#/2',
                    rootSchema: schema,
                    schema: {
                      const: {}
                    },
                    required: false
                  },
                  elements: {
                    fields: []
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
        type: 'object',
        oneOf: [
          {
            const: {},
            minProperties: 1,
            maxProperties: 9
          },
          {
            const: {},
            minProperties: 1,
            maxProperties: 9
          },
          {
            const: {},
            minProperties: 1,
            maxProperties: 9
          }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'object',
            uri: '#/',
            schema,
            selectedItems: []
          },
          elements: {
            oneOf: {
              id: '#/',
              items: [
                {
                  meta: {
                    type: 'object',
                    item: 0,
                    parentUri: '#/',
                    uri: '#/0',
                    rootSchema: schema,
                    schema: {
                      const: {},
                      minProperties: 1,
                      maxProperties: 9
                    },
                    minProperties: 1,
                    maxProperties: 9,
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
                    parentUri: '#/',
                    uri: '#/1',
                    rootSchema: schema,
                    schema: {
                      const: {},
                      minProperties: 1,
                      maxProperties: 9
                    },
                    minProperties: 1,
                    maxProperties: 9,
                    required: false
                  },
                  elements: {
                    fields: []
                  }
                },
                {
                  meta: {
                    type: 'object',
                    item: 2,
                    parentUri: '#/',
                    uri: '#/2',
                    rootSchema: schema,
                    schema: {
                      const: {},
                      minProperties: 1,
                      maxProperties: 9
                    },
                    minProperties: 1,
                    maxProperties: 9,
                    required: false
                  },
                  elements: {
                    fields: []
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
        type: 'object',
        allOf: [
          { const: {} },
          { minProperties: 1 },
          { maxProperties: 9 }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'object',
            uri: '#/',
            schema,
            minProperties: 1,
            maxProperties: 9
          },
          elements: {
            fields: []
          }
        })
    })

    it('transforms without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
      const schema = {
        type: 'object',
        const: {},
        minProperties: 1,
        maxProperties: 9
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'object',
            uri: '#/',
            schema,
            minProperties: 1,
            maxProperties: 9
          },
          elements: {
            fields: []
          }
        })
    })
  })

  /*
   *  Boolean
   */
  describe('Transforming `boolean` type schemas', () => {
    it('transforms', () => {
      const schema = { type: 'boolean' }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'boolean',
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

    it('transforms with `enum`', () => {
      const schema = {
        type: 'boolean',
        enum: [
          true,
          false
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'boolean',
            uri: '#/',
            schema,
            selectedItems: []
          },
          elements: {
            enum: {
              id: '#/',
              items: [
                true,
                false
              ],
              selectedItems: []
            }
          }
        })
    })

    it('transforms with `anyOf`', () => {
      const schema = {
        type: 'boolean',
        anyOf: [
          { const: true },
          { const: false }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'boolean',
            uri: '#/',
            schema,
            selectedItems: []
          },
          elements: {
            anyOf: {
              id: '#/',
              items: [
                {
                  meta: {
                    type: 'boolean',
                    item: 0,
                    parentUri: '#/',
                    uri: '#/0',
                    rootSchema: schema,
                    schema: {
                      const: true
                    },
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
                },
                {
                  meta: {
                    type: 'boolean',
                    item: 1,
                    parentUri: '#/',
                    uri: '#/1',
                    rootSchema: schema,
                    schema: {
                      const: false
                    },
                    required: false,
                    value: 'false'
                  },
                  elements: {
                    field: {
                      id: '#/1',
                      required: false,
                      value: 'false'
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
        type: 'boolean',
        oneOf: [
          { const: true },
          { const: false }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'boolean',
            uri: '#/',
            schema,
            selectedItems: []
          },
          elements: {
            oneOf: {
              id: '#/',
              items: [
                {
                  meta: {
                    type: 'boolean',
                    item: 0,
                    parentUri: '#/',
                    uri: '#/0',
                    rootSchema: schema,
                    schema: {
                      const: true
                    },
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
                },
                {
                  meta: {
                    type: 'boolean',
                    item: 1,
                    parentUri: '#/',
                    uri: '#/1',
                    rootSchema: schema,
                    schema: {
                      const: false
                    },
                    required: false,
                    value: 'false'
                  },
                  elements: {
                    field: {
                      id: '#/1',
                      required: false,
                      value: 'false'
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
        type: 'boolean',
        allOf: [
          { const: true }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'boolean',
            uri: '#/',
            schema,
            value: 'true'
          },
          elements: {
            field: {
              id: '#/',
              value: 'true'
            }
          }
        })
    })

    it('transforms without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
      const schema = {
        type: 'boolean',
        const: true
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'boolean',
            uri: '#/',
            schema,
            value: 'true'
          },
          elements: {
            field: {
              id: '#/',
              value: 'true'
            }
          }
        })
    })
  })

  /*
   *  Null
   */
  describe('Transforming `null` type schemas', () => {
    it('transforms', () => {
      const schema = { type: 'null' }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'null',
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

    it('transforms with `enum`', () => {
      const schema = {
        type: 'null',
        enum: [
          null
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'null',
            uri: '#/',
            schema,
            selectedItems: []
          },
          elements: {
            enum: {
              id: '#/',
              items: [
                null
              ],
              selectedItems: []
            }
          }
        })
    })

    it('transforms with `anyOf`', () => {
      const schema = {
        type: 'null',
        anyOf: [
          { const: null }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'null',
            uri: '#/',
            schema,
            selectedItems: []
          },
          elements: {
            anyOf: {
              id: '#/',
              items: [
                {
                  meta: {
                    type: 'null',
                    item: 0,
                    parentUri: '#/',
                    uri: '#/0',
                    rootSchema: schema,
                    schema: {
                      const: null
                    },
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
              ],
              selectedItems: []
            }
          }
        })
    })

    it('transforms with `oneOf`', () => {
      const schema = {
        type: 'null',
        oneOf: [
          { const: null }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'null',
            uri: '#/',
            schema,
            selectedItems: []
          },
          elements: {
            oneOf: {
              id: '#/',
              items: [
                {
                  meta: {
                    type: 'null',
                    item: 0,
                    rootSchema: schema,
                    schema: {
                      const: null
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
              ],
              selectedItems: []
            }
          }
        })
    })

    it('transforms with `allOf`', () => {
      const schema = {
        type: 'null',
        allOf: [
          { const: null }
        ]
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'null',
            uri: '#/',
            schema,
            value: 'null'
          },
          elements: {
            field: {
              id: '#/',
              value: 'null'
            }
          }
        })
    })

    it('transforms without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
      const schema = {
        type: 'null',
        const: null
      }

      expect(transform(schema))
        .to.eql({
          meta: {
            type: 'null',
            uri: '#/',
            schema,
            value: 'null'
          },
          elements: {
            field: {
              id: '#/',
              value: 'null'
            }
          }
        })
    })
  })

  describe('With values', () => {
    describe('With params', () => {
      describe('Transforming `string` type schemas', () => {
        it('transforms with `enum`', () => {
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

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'string',
                schema,
                uri: '#/',
                selectedItems: [2]
              },
              elements: {
                enum: {
                  id: '#/',
                  items: [
                    'string (1)',
                    'string (2)',
                    'string (3)'
                  ],
                  selectedItems: [2]
                }
              }
            })
        })

        it('transforms with `anyOf`', () => {
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

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'string',
                schema,
                uri: '#/',
                selectedItems: [2]
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
                        required: false,
                        value: 'string (1)'
                      },
                      elements: {
                        field: {
                          id: '#/0',
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
                        parentUri: '#/',
                        uri: '#/1',
                        required: false,
                        value: 'string (2)'
                      },
                      elements: {
                        field: {
                          id: '#/1',
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
                        parentUri: '#/',
                        uri: '#/2',
                        required: false,
                        value: 'string (3)'
                      },
                      elements: {
                        field: {
                          id: '#/2',
                          required: false,
                          value: 'string (3)'
                        }
                      }
                    }
                  ],
                  selectedItems: [2]
                }
              }
            })
        })

        it('transforms with `oneOf`', () => {
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

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'string',
                schema,
                uri: '#/',
                selectedItems: [2]
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
                        required: false,
                        value: 'string (1)'
                      },
                      elements: {
                        field: {
                          id: '#/0',
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
                        parentUri: '#/',
                        uri: '#/1',
                        required: false,
                        value: 'string (2)'
                      },
                      elements: {
                        field: {
                          id: '#/1',
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
                        parentUri: '#/',
                        uri: '#/2',
                        required: false,
                        value: 'string (3)'
                      },
                      elements: {
                        field: {
                          id: '#/2',
                          required: false,
                          value: 'string (3)'
                        }
                      }
                    }
                  ],
                  selectedItems: [2]
                }
              }
            })
        })

        it('transforms with `allOf`', () => {
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

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
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

        it('transforms without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
          const schema = { type: 'string' }

          const values = {
            '#/': 'string'
          }

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
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

      describe('Transforming `number` type schemas', () => {
        it('transforms with `enum`', () => {
          const schema = {
            type: 'number',
            enum: [
              1,
              2,
              3
            ]
          }

          const values = {
            '#/': '2'
          }

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'number',
                schema,
                uri: '#/',
                selectedItems: [2]
              },
              elements: {
                enum: {
                  id: '#/',
                  items: [
                    1,
                    2,
                    3
                  ],
                  selectedItems: [2]
                }
              }
            })
        })

        it('transforms with `anyOf`', () => {
          const schema = {
            type: 'number',
            anyOf: [
              { const: 1 },
              { const: 2 },
              { const: 3 }
            ]
          }

          const values = {
            '#/': '2'
          }

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'number',
                schema,
                uri: '#/',
                selectedItems: [2]
              },
              elements: {
                anyOf: {
                  id: '#/',
                  items: [
                    {
                      meta: {
                        type: 'number',
                        item: 0,
                        rootSchema: schema,
                        schema: {
                          const: 1
                        },
                        parentUri: '#/',
                        uri: '#/0',
                        required: false,
                        value: '1'
                      },
                      elements: {
                        field: {
                          id: '#/0',
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
                        parentUri: '#/',
                        uri: '#/1',
                        required: false,
                        value: '2'
                      },
                      elements: {
                        field: {
                          id: '#/1',
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
                        parentUri: '#/',
                        uri: '#/2',
                        required: false,
                        value: '3'
                      },
                      elements: {
                        field: {
                          id: '#/2',
                          required: false,
                          value: '3'
                        }
                      }
                    }
                  ],
                  selectedItems: [2]
                }
              }
            })
        })

        it('transforms with `oneOf`', () => {
          const schema = {
            type: 'number',
            oneOf: [
              { const: 1 },
              { const: 2 },
              { const: 3 }
            ]
          }

          const values = {
            '#/': '2'
          }

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'number',
                schema,
                uri: '#/',
                selectedItems: [2]
              },
              elements: {
                oneOf: {
                  id: '#/',
                  items: [
                    {
                      meta: {
                        type: 'number',
                        item: 0,
                        rootSchema: schema,
                        schema: {
                          const: 1
                        },
                        parentUri: '#/',
                        uri: '#/0',
                        required: false,
                        value: '1'
                      },
                      elements: {
                        field: {
                          id: '#/0',
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
                        parentUri: '#/',
                        uri: '#/1',
                        required: false,
                        value: '2'
                      },
                      elements: {
                        field: {
                          id: '#/1',
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
                        parentUri: '#/',
                        uri: '#/2',
                        required: false,
                        value: '3'
                      },
                      elements: {
                        field: {
                          id: '#/2',
                          required: false,
                          value: '3'
                        }
                      }
                    }
                  ],
                  selectedItems: [2]
                }
              }
            })
        })

        it('transforms with `allOf`', () => {
          const schema = {
            type: 'number',
            allOf: [
              { minimum: 1 },
              { const: 2 },
              { maximum: 3 }
            ]
          }

          const values = {
            '#/': '1'
          }

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'number',
                schema,
                min: 1,
                max: 3,
                uri: '#/',
                value: '1'
              },
              elements: {
                field: {
                  id: '#/',
                  min: 1,
                  max: 3,
                  value: '1'
                }
              }
            })
        })

        it('transforms without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
          const schema = { type: 'number' }

          const values = {
            '#/': '1'
          }

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'number',
                schema,
                uri: '#/',
                value: '1'
              },
              elements: {
                field: {
                  id: '#/',
                  value: '1'
                }
              }
            })
        })
      })

      describe('Transforming `boolean` type schemas', () => {
        it('transforms `boolean` type schemas with `enum`', () => {
          const schema = {
            type: 'boolean',
            enum: [
              true,
              false
            ]
          }

          const values = {
            '#/': '1'
          }

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'boolean',
                schema,
                uri: '#/',
                selectedItems: [1]
              },
              elements: {
                enum: {
                  id: '#/',
                  items: [
                    true,
                    false
                  ],
                  selectedItems: [1]
                }
              }
            })
        })

        it('transforms `boolean` type schemas with `anyOf`', () => {
          const schema = {
            type: 'boolean',
            anyOf: [
              { const: true },
              { const: false }
            ]
          }

          const values = {
            '#/': '1'
          }

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'boolean',
                schema,
                uri: '#/',
                selectedItems: [1]
              },
              elements: {
                anyOf: {
                  id: '#/',
                  items: [
                    {
                      meta: {
                        type: 'boolean',
                        item: 0,
                        rootSchema: schema,
                        schema: {
                          const: true
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
                    },
                    {
                      meta: {
                        type: 'boolean',
                        item: 1,
                        rootSchema: schema,
                        schema: {
                          const: false
                        },
                        parentUri: '#/',
                        uri: '#/1',
                        required: false,
                        value: 'false'
                      },
                      elements: {
                        field: {
                          id: '#/1',
                          required: false,
                          value: 'false'
                        }
                      }
                    }
                  ],
                  selectedItems: [1]
                }
              }
            })
        })

        it('transforms `boolean` type schemas with `oneOf`', () => {
          const schema = {
            type: 'boolean',
            oneOf: [
              { const: true },
              { const: false }
            ]
          }

          const values = {
            '#/': '1'
          }

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'boolean',
                schema,
                uri: '#/',
                selectedItems: [1]
              },
              elements: {
                oneOf: {
                  id: '#/',
                  items: [
                    {
                      meta: {
                        type: 'boolean',
                        item: 0,
                        rootSchema: schema,
                        schema: {
                          const: true
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
                    },
                    {
                      meta: {
                        type: 'boolean',
                        item: 1,
                        rootSchema: schema,
                        schema: {
                          const: false
                        },
                        parentUri: '#/',
                        uri: '#/1',
                        required: false,
                        value: 'false'
                      },
                      elements: {
                        field: {
                          id: '#/1',
                          required: false,
                          value: 'false'
                        }
                      }
                    }
                  ],
                  selectedItems: [1]
                }
              }
            })
        })

        it('transforms `boolean` type schemas with `allOf`', () => {
          const schema = {
            type: 'boolean',
            allOf: [
              { const: true }
            ]
          }

          const values = {
            '#/': 'true'
          }

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'boolean',
                schema,
                uri: '#/',
                value: 'true'
              },
              elements: {
                field: {
                  id: '#/',
                  value: 'true'
                }
              }
            })
        })

        it('transforms `boolean` type schemas without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
          const schema = { type: 'boolean' }

          const values = {
            '#/': 'true'
          }

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'boolean',
                schema,
                uri: '#/',
                value: 'true'
              },
              elements: {
                field: {
                  id: '#/',
                  value: 'true'
                }
              }
            })
        })
      })

      describe('Transforming `null` type schemas', () => {
        it('transforms `null` type schemas with `enum`', () => {
          const schema = {
            type: 'null',
            enum: [
              null
            ]
          }

          const values = {
            '#/': '0'
          }

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'null',
                schema,
                uri: '#/',
                selectedItems: [0]
              },
              elements: {
                enum: {
                  id: '#/',
                  items: [
                    null
                  ],
                  selectedItems: [0]
                }
              }
            })
        })

        it('transforms `null` type schemas with `anyOf`', () => {
          const schema = {
            type: 'null',
            anyOf: [
              { const: null },
              { const: null },
              { const: null }
            ]
          }

          const values = {
            '#/': '2'
          }

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'null',
                schema,
                uri: '#/',
                selectedItems: [2]
              },
              elements: {
                anyOf: {
                  id: '#/',
                  items: [
                    {
                      meta: {
                        type: 'null',
                        item: 0,
                        rootSchema: schema,
                        schema: {
                          const: null
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
                    },
                    {
                      meta: {
                        type: 'null',
                        item: 1,
                        rootSchema: schema,
                        schema: {
                          const: null
                        },
                        parentUri: '#/',
                        uri: '#/1',
                        required: false,
                        value: 'null'
                      },
                      elements: {
                        field: {
                          id: '#/1',
                          required: false,
                          value: 'null'
                        }
                      }
                    },
                    {
                      meta: {
                        type: 'null',
                        item: 2,
                        rootSchema: schema,
                        schema: {
                          const: null
                        },
                        parentUri: '#/',
                        uri: '#/2',
                        required: false,
                        value: 'null'
                      },
                      elements: {
                        field: {
                          id: '#/2',
                          required: false,
                          value: 'null'
                        }
                      }
                    }
                  ],
                  selectedItems: [2]
                }
              }
            })
        })

        it('transforms `null` type schemas with `oneOf`', () => {
          const schema = {
            type: 'null',
            oneOf: [
              { const: null }
            ]
          }

          const values = {
            '#/': '2'
          }

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'null',
                schema,
                uri: '#/',
                selectedItems: [2]
              },
              elements: {
                oneOf: {
                  id: '#/',
                  items: [
                    {
                      meta: {
                        type: 'null',
                        item: 0,
                        rootSchema: schema,
                        schema: {
                          const: null
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
                  ],
                  selectedItems: [2]
                }
              }
            })
        })

        it('transforms `null` type schemas with `allOf`', () => {
          const schema = {
            type: 'null',
            allOf: [
              { const: null }
            ]
          }

          const values = {
            '#/': 'null'
          }

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'null',
                schema,
                uri: '#/',
                value: 'null'
              },
              elements: {
                field: {
                  id: '#/',
                  value: 'null'
                }
              }
            })
        })

        it('transforms `null` type schemas without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
          const schema = { type: 'null' }

          const values = {
            '#/': 'null'
          }

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'null',
                schema,
                uri: '#/',
                value: 'null'
              },
              elements: {
                field: {
                  id: '#/',
                  value: 'null'
                }
              }
            })
        })
      })
    })

    describe('Without params', () => {
      describe('Transforming `string` type schemas', () => {
        it('transforms `string` type schemas with `enum`', () => {
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
                selectedItems: [2]
              },
              elements: {
                enum: {
                  id: '#/',
                  items: [
                    'string (1)',
                    'string (2)',
                    'string (3)'
                  ],
                  selectedItems: [2]
                }
              }
            })
        })

        it('transforms `string` type schemas with `anyOf`', () => {
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
                selectedItems: [2]
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
                        required: false,
                        value: 'string (1)'
                      },
                      elements: {
                        field: {
                          id: '#/0',
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
                        parentUri: '#/',
                        uri: '#/1',
                        required: false,
                        value: 'string (2)'
                      },
                      elements: {
                        field: {
                          id: '#/1',
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
                        parentUri: '#/',
                        uri: '#/2',
                        required: false,
                        value: 'string (3)'
                      },
                      elements: {
                        field: {
                          id: '#/2',
                          required: false,
                          value: 'string (3)'
                        }
                      }
                    }
                  ],
                  selectedItems: [2]
                }
              }
            })
        })

        it('transforms `string` type schemas with `oneOf`', () => {
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
                selectedItems: [2]
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
                        required: false,
                        value: 'string (1)'
                      },
                      elements: {
                        field: {
                          id: '#/0',
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
                        parentUri: '#/',
                        uri: '#/1',
                        required: false,
                        value: 'string (2)'
                      },
                      elements: {
                        field: {
                          id: '#/1',
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
                        parentUri: '#/',
                        uri: '#/2',
                        required: false,
                        value: 'string (3)'
                      },
                      elements: {
                        field: {
                          id: '#/2',
                          required: false,
                          value: 'string (3)'
                        }
                      }
                    }
                  ],
                  selectedItems: [2]
                }
              }
            })
        })

        it('transforms `string` type schemas with `allOf`', () => {
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

        it('transforms `string` type schemas without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
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

      describe('Transforming `number` type schemas', () => {
        it('transforms `number` type schemas with `enum`', () => {
          const schema = {
            type: 'number',
            enum: [
              1,
              2,
              3
            ]
          }

          const values = {
            '#/': '2'
          }

          return expect(transform(schema, values))
            .to.eql({
              meta: {
                type: 'number',
                schema,
                uri: '#/',
                selectedItems: [2]
              },
              elements: {
                enum: {
                  id: '#/',
                  items: [
                    1,
                    2,
                    3
                  ],
                  selectedItems: [2]
                }
              }
            })
        })

        it('transforms `number` type schemas with `anyOf`', () => {
          const schema = {
            type: 'number',
            anyOf: [
              { const: 1 },
              { const: 2 },
              { const: 3 }
            ]
          }

          const values = {
            '#/': '2'
          }

          return expect(transform(schema, values))
            .to.eql({
              meta: {
                type: 'number',
                schema,
                uri: '#/',
                selectedItems: [2]
              },
              elements: {
                anyOf: {
                  id: '#/',
                  items: [
                    {
                      meta: {
                        type: 'number',
                        item: 0,
                        rootSchema: schema,
                        schema: {
                          const: 1
                        },
                        parentUri: '#/',
                        uri: '#/0',
                        required: false,
                        value: '1'
                      },
                      elements: {
                        field: {
                          id: '#/0',
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
                        parentUri: '#/',
                        uri: '#/1',
                        required: false,
                        value: '2'
                      },
                      elements: {
                        field: {
                          id: '#/1',
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
                        parentUri: '#/',
                        uri: '#/2',
                        required: false,
                        value: '3'
                      },
                      elements: {
                        field: {
                          id: '#/2',
                          required: false,
                          value: '3'
                        }
                      }
                    }
                  ],
                  selectedItems: [2]
                }
              }
            })
        })

        it('transforms `number` type schemas with `oneOf`', () => {
          const schema = {
            type: 'number',
            oneOf: [
              { const: 1 },
              { const: 2 },
              { const: 3 }
            ]
          }

          const values = {
            '#/': '2'
          }

          return expect(transform(schema, values))
            .to.eql({
              meta: {
                type: 'number',
                schema,
                uri: '#/',
                selectedItems: [2]
              },
              elements: {
                oneOf: {
                  id: '#/',
                  items: [
                    {
                      meta: {
                        type: 'number',
                        item: 0,
                        rootSchema: schema,
                        schema: {
                          const: 1
                        },
                        parentUri: '#/',
                        uri: '#/0',
                        required: false,
                        value: '1'
                      },
                      elements: {
                        field: {
                          id: '#/0',
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
                        parentUri: '#/',
                        uri: '#/1',
                        required: false,
                        value: '2'
                      },
                      elements: {
                        field: {
                          id: '#/1',
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
                        parentUri: '#/',
                        uri: '#/2',
                        required: false,
                        value: '3'
                      },
                      elements: {
                        field: {
                          id: '#/2',
                          required: false,
                          value: '3'
                        }
                      }
                    }
                  ],
                  selectedItems: [2]
                }
              }
            })
        })

        it('transforms `number` type schemas with `allOf`', () => {
          const schema = {
            type: 'number',
            allOf: [
              { minimum: 1 },
              { const: 2 },
              { maximum: 3 }
            ]
          }

          const values = {
            '#/': '2'
          }

          return expect(transform(schema, values))
            .to.eql({
              meta: {
                type: 'number',
                schema,
                min: 1,
                max: 3,
                uri: '#/',
                value: '2'
              },
              elements: {
                field: {
                  id: '#/',
                  min: 1,
                  max: 3,
                  value: '2'
                }
              }
            })
        })

        it('transforms `number` type schemas without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
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
                  id: '#/',
                  value: '1'
                }
              }
            })
        })
      })

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
                  {
                    minLength: 1
                  },
                  {
                    const: 'string (one)',
                    maxLength: 100
                  }
                ]
              },
              two: {
                type: 'string',
                allOf: [
                  {
                    minLength: 1
                  },
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

        it('transforms `object` type schemas with `allOf` (with `required`)', () => {
          const schema = {
            type: 'object',
            properties: {
              one: {
                type: 'string',
                allOf: [
                  {
                    minLength: 1
                  },
                  {
                    const: 'string (one)',
                    maxLength: 100
                  }
                ]
              },
              two: {
                type: 'string',
                allOf: [
                  {
                    minLength: 1
                  },
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

      describe('Transforming `boolean` type schemas', () => {
        it('transforms `boolean` type schemas with `enum`', () => {
          const schema = {
            type: 'boolean',
            enum: [
              true,
              false
            ]
          }

          const values = {
            '#/': '1'
          }

          return expect(transform(schema, values))
            .to.eql({
              meta: {
                type: 'boolean',
                schema,
                uri: '#/',
                selectedItems: [1]
              },
              elements: {
                enum: {
                  id: '#/',
                  items: [
                    true,
                    false
                  ],
                  selectedItems: [1]
                }
              }
            })
        })

        it('transforms `boolean` type schemas with `anyOf`', () => {
          const schema = {
            type: 'boolean',
            anyOf: [
              { const: true },
              { const: false }
            ]
          }

          const values = {
            '#/': '1'
          }

          return expect(transform(schema, values))
            .to.eql({
              meta: {
                type: 'boolean',
                schema,
                uri: '#/',
                selectedItems: [1]
              },
              elements: {
                anyOf: {
                  id: '#/',
                  items: [
                    {
                      meta: {
                        type: 'boolean',
                        item: 0,
                        rootSchema: schema,
                        schema: {
                          const: true
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
                    },
                    {
                      meta: {
                        type: 'boolean',
                        item: 1,
                        rootSchema: schema,
                        schema: {
                          const: false
                        },
                        parentUri: '#/',
                        uri: '#/1',
                        required: false,
                        value: 'false'
                      },
                      elements: {
                        field: {
                          id: '#/1',
                          required: false,
                          value: 'false'
                        }
                      }
                    }
                  ],
                  selectedItems: [1]
                }
              }
            })
        })

        it('transforms `boolean` type schemas with `oneOf`', () => {
          const schema = {
            type: 'boolean',
            oneOf: [
              { const: true },
              { const: false }
            ]
          }

          const values = {
            '#/': '1'
          }

          return expect(transform(schema, values))
            .to.eql({
              meta: {
                type: 'boolean',
                schema,
                uri: '#/',
                selectedItems: [1]
              },
              elements: {
                oneOf: {
                  id: '#/',
                  items: [
                    {
                      meta: {
                        type: 'boolean',
                        item: 0,
                        rootSchema: schema,
                        schema: {
                          const: true
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
                    },
                    {
                      meta: {
                        type: 'boolean',
                        item: 1,
                        rootSchema: schema,
                        schema: {
                          const: false
                        },
                        parentUri: '#/',
                        uri: '#/1',
                        required: false,
                        value: 'false'
                      },
                      elements: {
                        field: {
                          id: '#/1',
                          required: false,
                          value: 'false'
                        }
                      }
                    }
                  ],
                  selectedItems: [1]
                }
              }
            })
        })

        it('transforms `boolean` type schemas with `allOf`', () => {
          const schema = {
            type: 'boolean',
            allOf: [
              { const: true }
            ]
          }

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
                  id: '#/',
                  value: 'true'
                }
              }
            })
        })

        it('transforms `boolean` type schemas without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
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
                  id: '#/',
                  value: 'true'
                }
              }
            })
        })
      })

      describe('Transforming `null` type schemas', () => {
        it('transforms `null` type schemas with `enum`', () => {
          const schema = {
            type: 'null',
            enum: [
              null
            ]
          }

          const values = {
            '#/': '0'
          }

          return expect(transform(schema, values))
            .to.eql({
              meta: {
                type: 'null',
                schema,
                uri: '#/',
                selectedItems: [0]
              },
              elements: {
                enum: {
                  id: '#/',
                  items: [
                    null
                  ],
                  selectedItems: [0]
                }
              }
            })
        })

        it('transforms `null` type schemas with `anyOf`', () => {
          const schema = {
            type: 'null',
            anyOf: [
              { const: null },
              { const: null },
              { const: null }
            ]
          }

          const values = {
            '#/': '2'
          }

          return expect(transform(schema, values))
            .to.eql({
              meta: {
                type: 'null',
                schema,
                uri: '#/',
                selectedItems: [2]
              },
              elements: {
                anyOf: {
                  id: '#/',
                  items: [
                    {
                      meta: {
                        type: 'null',
                        item: 0,
                        rootSchema: schema,
                        schema: {
                          const: null
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
                    },
                    {
                      meta: {
                        type: 'null',
                        item: 1,
                        rootSchema: schema,
                        schema: {
                          const: null
                        },
                        parentUri: '#/',
                        uri: '#/1',
                        required: false,
                        value: 'null'
                      },
                      elements: {
                        field: {
                          id: '#/1',
                          required: false,
                          value: 'null'
                        }
                      }
                    },
                    {
                      meta: {
                        type: 'null',
                        item: 2,
                        rootSchema: schema,
                        schema: {
                          const: null
                        },
                        parentUri: '#/',
                        uri: '#/2',
                        required: false,
                        value: 'null'
                      },
                      elements: {
                        field: {
                          id: '#/2',
                          required: false,
                          value: 'null'
                        }
                      }
                    }
                  ],
                  selectedItems: [2]
                }
              }
            })
        })

        it('transforms `null` type schemas with `oneOf`', () => {
          const schema = {
            type: 'null',
            oneOf: [
              { const: null }
            ]
          }

          const values = {
            '#/': '2'
          }

          return expect(transform(schema, values))
            .to.eql({
              meta: {
                type: 'null',
                schema,
                uri: '#/',
                selectedItems: [2]
              },
              elements: {
                oneOf: {
                  id: '#/',
                  items: [
                    {
                      meta: {
                        type: 'null',
                        item: 0,
                        rootSchema: schema,
                        schema: {
                          const: null
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
                  ],
                  selectedItems: [2]
                }
              }
            })
        })

        it('transforms `null` type schemas with `allOf`', () => {
          const schema = {
            type: 'null',
            allOf: [
              { const: null }
            ]
          }

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
                  id: '#/',
                  value: 'null'
                }
              }
            })
        })

        it('transforms `null` type schemas without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
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
                  id: '#/',
                  value: 'null'
                }
              }
            })
        })
      })
    })
  })

  describe('Without values', () => {
    describe('With params', () => {
      describe('Transforming `string` type schemas', () => {
        it('transforms `string` type schemas with `enum`', () => {
          const schema = {
            type: 'string',
            enum: [
              'string (1)',
              'string (2)',
              'string (3)'
            ]
          }

          const values = undefined

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'string',
                schema,
                uri: '#/',
                selectedItems: []
              },
              elements: {
                enum: {
                  id: '#/',
                  items: [
                    'string (1)',
                    'string (2)',
                    'string (3)'
                  ],
                  selectedItems: []
                }
              }
            })
        })

        it('transforms `string` type schemas with `anyOf`', () => {
          const schema = {
            type: 'string',
            anyOf: [
              { const: 'string (1)' },
              { const: 'string (2)' },
              { const: 'string (3)' }
            ]
          }

          const values = undefined

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'string',
                schema,
                uri: '#/',
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
                        rootSchema: schema,
                        schema: {
                          const: 'string (1)'
                        },
                        parentUri: '#/',
                        uri: '#/0',
                        required: false,
                        value: 'string (1)'
                      },
                      elements: {
                        field: {
                          id: '#/0',
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
                        parentUri: '#/',
                        uri: '#/1',
                        required: false,
                        value: 'string (2)'
                      },
                      elements: {
                        field: {
                          id: '#/1',
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
                        parentUri: '#/',
                        uri: '#/2',
                        required: false,
                        value: 'string (3)'
                      },
                      elements: {
                        field: {
                          id: '#/2',
                          required: false,
                          value: 'string (3)'
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
          const schema = {
            type: 'string',
            oneOf: [
              { const: 'string (1)' },
              { const: 'string (2)' },
              { const: 'string (3)' }
            ]
          }

          const values = undefined

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'string',
                schema,
                uri: '#/',
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
                        rootSchema: schema,
                        schema: {
                          const: 'string (1)'
                        },
                        parentUri: '#/',
                        uri: '#/0',
                        required: false,
                        value: 'string (1)'
                      },
                      elements: {
                        field: {
                          id: '#/0',
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
                        parentUri: '#/',
                        uri: '#/1',
                        required: false,
                        value: 'string (2)'
                      },
                      elements: {
                        field: {
                          id: '#/1',
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
                        parentUri: '#/',
                        uri: '#/2',
                        required: false,
                        value: 'string (3)'
                      },
                      elements: {
                        field: {
                          id: '#/2',
                          required: false,
                          value: 'string (3)'
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
          const schema = {
            type: 'string',
            allOf: [
              { minLength: 1 },
              { const: 'string' },
              { maxLength: 20 }
            ]
          }

          const values = undefined

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
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

        it('transforms `string` type schemas without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
          const schema = { type: 'string' }

          const values = undefined

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'string',
                schema,
                uri: '#/'
              },
              elements: {
                field: {
                  id: '#/'
                }
              }
            })
        })
      })

      describe('Transforming `number` type schemas', () => {
        it('transforms `number` type schemas with `enum`', () => {
          const schema = {
            type: 'number',
            enum: [
              1,
              2,
              3
            ]
          }

          const values = undefined

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'number',
                schema,
                uri: '#/',
                selectedItems: []
              },
              elements: {
                enum: {
                  id: '#/',
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

        it('transforms `number` type schemas with `anyOf`', () => {
          const schema = {
            type: 'number',
            anyOf: [
              { const: 1 },
              { const: 2 },
              { const: 3 }
            ]
          }

          const values = undefined

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'number',
                schema,
                uri: '#/',
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
                        rootSchema: schema,
                        schema: {
                          const: 1
                        },
                        parentUri: '#/',
                        uri: '#/0',
                        required: false,
                        value: '1'
                      },
                      elements: {
                        field: {
                          id: '#/0',
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
                        parentUri: '#/',
                        uri: '#/1',
                        required: false,
                        value: '2'
                      },
                      elements: {
                        field: {
                          id: '#/1',
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
                        parentUri: '#/',
                        uri: '#/2',
                        required: false,
                        value: '3'
                      },
                      elements: {
                        field: {
                          id: '#/2',
                          required: false,
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

        it('transforms `number` type schemas with `oneOf`', () => {
          const schema = {
            type: 'number',
            oneOf: [
              { const: 1 },
              { const: 2 },
              { const: 3 }
            ]
          }

          const values = undefined

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'number',
                schema,
                uri: '#/',
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
                        rootSchema: schema,
                        schema: {
                          const: 1
                        },
                        parentUri: '#/',
                        uri: '#/0',
                        required: false,
                        value: '1'
                      },
                      elements: {
                        field: {
                          id: '#/0',
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
                        parentUri: '#/',
                        uri: '#/1',
                        required: false,
                        value: '2'
                      },
                      elements: {
                        field: {
                          id: '#/1',
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
                        parentUri: '#/',
                        uri: '#/2',
                        required: false,
                        value: '3'
                      },
                      elements: {
                        field: {
                          id: '#/2',
                          required: false,
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

        it('transforms `number` type schemas with `allOf`', () => {
          const schema = {
            type: 'number',
            allOf: [
              { minimum: 1 },
              { const: 2 },
              { maximum: 3 }
            ]
          }

          const values = undefined

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'number',
                schema,
                min: 1,
                max: 3,
                uri: '#/',
                value: '2'
              },
              elements: {
                field: {
                  id: '#/',
                  min: 1,
                  max: 3,
                  value: '2'
                }
              }
            })
        })

        it('transforms `number` type schemas without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
          const schema = { type: 'number' }

          const values = undefined

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'number',
                schema,
                uri: '#/'
              },
              elements: {
                field: {
                  id: '#/'
                }
              }
            })
        })
      })

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

          const values = undefined

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
                      selectedItems: [],
                      required: false
                    },
                    elements: {
                      enum: {
                        id: '#/one',
                        items: [
                          'string (1)',
                          'string (2)'
                        ],
                        selectedItems: [],
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
                      selectedItems: [],
                      required: false
                    },
                    elements: {
                      enum: {
                        id: '#/two',
                        items: [
                          'string (1)',
                          'string (2)'
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

          const values = undefined

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
                      selectedItems: [],
                      required: true
                    },
                    elements: {
                      enum: {
                        id: '#/one',
                        items: [
                          'string (1)',
                          'string (2)'
                        ],
                        selectedItems: [],
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
                      selectedItems: [],
                      required: false
                    },
                    elements: {
                      enum: {
                        id: '#/two',
                        items: [
                          'string (1)',
                          'string (2)'
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

          const values = undefined

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
                      selectedItems: [],
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
                        selectedItems: [],
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
                      selectedItems: [],
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
                        selectedItems: [],
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

          const values = undefined

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
                      selectedItems: [],
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
                        selectedItems: [],
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
                      selectedItems: [],
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
                        selectedItems: [],
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

          const values = undefined

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
                      selectedItems: [],
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
                        selectedItems: [],
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
                      selectedItems: [],
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
                        selectedItems: [],
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

          const values = undefined

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
                      selectedItems: [],
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
                        selectedItems: [],
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
                      selectedItems: [],
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
                        selectedItems: [],
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

          const values = undefined

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
                      value: 'string (one)'
                    },
                    elements: {
                      field: {
                        id: '#/one',
                        minLength: 1,
                        maxLength: 100,
                        required: false,
                        value: 'string (one)'
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
                      value: 'string (two)'
                    },
                    elements: {
                      field: {
                        id: '#/two',
                        minLength: 1,
                        maxLength: 100,
                        required: false,
                        value: 'string (two)'
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

          const values = undefined

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
                      value: 'string (one)'
                    },
                    elements: {
                      field: {
                        id: '#/one',
                        minLength: 1,
                        maxLength: 100,
                        required: true,
                        value: 'string (one)'
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
                      value: 'string (two)'
                    },
                    elements: {
                      field: {
                        id: '#/two',
                        minLength: 1,
                        maxLength: 100,
                        required: false,
                        value: 'string (two)'
                      }
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

          const values = undefined

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
                      required: false
                    },
                    elements: {
                      field: {
                        id: '#/one',
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
                        type: 'string'
                      },
                      parentUri: '#/',
                      uri: '#/two',
                      required: false
                    },
                    elements: {
                      field: {
                        id: '#/two',
                        required: false
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

          const values = undefined

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
                      required: true
                    },
                    elements: {
                      field: {
                        id: '#/one',
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
                        type: 'string'
                      },
                      parentUri: '#/',
                      uri: '#/two',
                      required: false
                    },
                    elements: {
                      field: {
                        id: '#/two',
                        required: false
                      }
                    }
                  }
                ]
              }
            })
        })
      })

      describe('Transforming `boolean` type schemas', () => {
        it('transforms `boolean` type schemas with `enum`', () => {
          const schema = {
            type: 'boolean',
            enum: [
              true,
              false
            ]
          }

          const values = undefined

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'boolean',
                schema,
                uri: '#/',
                selectedItems: []
              },
              elements: {
                enum: {
                  id: '#/',
                  items: [
                    true,
                    false
                  ],
                  selectedItems: []
                }
              }
            })
        })

        it('transforms `boolean` type schemas with `anyOf`', () => {
          const schema = {
            type: 'boolean',
            anyOf: [
              { const: true },
              { const: false }
            ]
          }

          const values = undefined

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'boolean',
                schema,
                uri: '#/',
                selectedItems: []
              },
              elements: {
                anyOf: {
                  id: '#/',
                  items: [
                    {
                      meta: {
                        type: 'boolean',
                        item: 0,
                        rootSchema: schema,
                        schema: {
                          const: true
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
                    },
                    {
                      meta: {
                        type: 'boolean',
                        item: 1,
                        rootSchema: schema,
                        schema: {
                          const: false
                        },
                        parentUri: '#/',
                        uri: '#/1',
                        required: false,
                        value: 'false'
                      },
                      elements: {
                        field: {
                          id: '#/1',
                          required: false,
                          value: 'false'
                        }
                      }
                    }
                  ],
                  selectedItems: []
                }
              }
            })
        })

        it('transforms `boolean` type schemas with `oneOf', () => {
          const schema = {
            type: 'boolean',
            oneOf: [
              { const: true },
              { const: false }
            ]
          }

          const values = undefined

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'boolean',
                schema,
                uri: '#/',
                selectedItems: []
              },
              elements: {
                oneOf: {
                  id: '#/',
                  items: [
                    {
                      meta: {
                        type: 'boolean',
                        item: 0,
                        rootSchema: schema,
                        schema: {
                          const: true
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
                    },
                    {
                      meta: {
                        type: 'boolean',
                        item: 1,
                        rootSchema: schema,
                        schema: {
                          const: false
                        },
                        parentUri: '#/',
                        uri: '#/1',
                        required: false,
                        value: 'false'
                      },
                      elements: {
                        field: {
                          id: '#/1',
                          required: false,
                          value: 'false'
                        }
                      }
                    }
                  ],
                  selectedItems: []
                }
              }
            })
        })

        it('transforms `boolean` type schemas with `allOf`', () => {
          const schema = {
            type: 'boolean',
            allOf: [
              { const: true }
            ]
          }

          const values = undefined

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'boolean',
                schema,
                uri: '#/',
                value: 'true'
              },
              elements: {
                field: {
                  id: '#/',
                  value: 'true'
                }
              }
            })
        })

        it('transforms `boolean` type schemas without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
          const schema = { type: 'boolean' }

          const values = undefined

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'boolean',
                schema,
                uri: '#/'
              },
              elements: {
                field: {
                  id: '#/'
                }
              }
            })
        })
      })

      describe('Transforming `null` type schemas', () => {
        it('transforms `null` type schemas with `enum`', () => {
          const schema = {
            type: 'null',
            enum: [
              null
            ]
          }

          const values = undefined

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'null',
                schema,
                uri: '#/',
                selectedItems: []
              },
              elements: {
                enum: {
                  id: '#/',
                  items: [
                    null
                  ],
                  selectedItems: []
                }
              }
            })
        })

        it('transforms `null` type schemas with `anyOf`', () => {
          const schema = {
            type: 'null',
            anyOf: [
              { const: null },
              { const: null },
              { const: null }
            ]
          }

          const values = undefined

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'null',
                schema,
                uri: '#/',
                selectedItems: []
              },
              elements: {
                anyOf: {
                  id: '#/',
                  items: [
                    {
                      meta: {
                        type: 'null',
                        item: 0,
                        rootSchema: schema,
                        schema: {
                          const: null
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
                    },
                    {
                      meta: {
                        type: 'null',
                        item: 1,
                        rootSchema: schema,
                        schema: {
                          const: null
                        },
                        parentUri: '#/',
                        uri: '#/1',
                        required: false,
                        value: 'null'
                      },
                      elements: {
                        field: {
                          id: '#/1',
                          required: false,
                          value: 'null'
                        }
                      }
                    },
                    {
                      meta: {
                        type: 'null',
                        item: 2,
                        rootSchema: schema,
                        schema: {
                          const: null
                        },
                        parentUri: '#/',
                        uri: '#/2',
                        required: false,
                        value: 'null'
                      },
                      elements: {
                        field: {
                          id: '#/2',
                          required: false,
                          value: 'null'
                        }
                      }
                    }
                  ],
                  selectedItems: []
                }
              }
            })
        })

        it('transforms `null` type schemas with `oneOf`', () => {
          const schema = {
            type: 'null',
            oneOf: [
              { const: null }
            ]
          }

          const values = undefined

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'null',
                schema,
                uri: '#/',
                selectedItems: []
              },
              elements: {
                oneOf: {
                  id: '#/',
                  items: [
                    {
                      meta: {
                        type: 'null',
                        item: 0,
                        rootSchema: schema,
                        schema: {
                          const: null
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
                  ],
                  selectedItems: []
                }
              }
            })
        })

        it('transforms `null` type schemas with `allOf`', () => {
          const schema = {
            type: 'null',
            allOf: [
              { const: null }
            ]
          }

          const values = undefined

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'null',
                schema,
                uri: '#/',
                value: 'null'
              },
              elements: {
                field: {
                  id: '#/',
                  value: 'null'
                }
              }
            })
        })

        it('transforms `null` type schemas without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
          const schema = { type: 'null' }

          const values = undefined

          const params = {
            '#/': { meta: { component: 'component' } }
          }

          return expect(transform(schema, values, params))
            .to.eql({
              meta: {
                component: 'component',
                type: 'null',
                schema,
                uri: '#/'
              },
              elements: {
                field: {
                  id: '#/'
                }
              }
            })
        })
      })
    })

    describe('Without params', () => {
      describe('Transforming `string` type schemas', () => {
        it('transforms `string` type schemas with `enum`', () => {
          const schema = {
            type: 'string',
            enum: [
              'string (1)',
              'string (2)',
              'string (3)']
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'string',
                schema,
                uri: '#/',
                selectedItems: []
              },
              elements: {
                enum: {
                  id: '#/',
                  items: [
                    'string (1)',
                    'string (2)',
                    'string (3)'
                  ],
                  selectedItems: []
                }
              }
            })
        })

        it('transforms `string` type schemas with `anyOf`', () => {
          const schema = {
            type: 'string',
            anyOf: [
              { const: 'string (1)' },
              { const: 'string (2)' },
              { const: 'string (3)' }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'string',
                schema,
                uri: '#/',
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
                        rootSchema: schema,
                        schema: {
                          const: 'string (1)'
                        },
                        parentUri: '#/',
                        uri: '#/0',
                        required: false,
                        value: 'string (1)'
                      },
                      elements: {
                        field: {
                          id: '#/0',
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
                        parentUri: '#/',
                        uri: '#/1',
                        required: false,
                        value: 'string (2)'
                      },
                      elements: {
                        field: {
                          id: '#/1',
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
                        parentUri: '#/',
                        uri: '#/2',
                        required: false,
                        value: 'string (3)'
                      },
                      elements: {
                        field: {
                          id: '#/2',
                          required: false,
                          value: 'string (3)'
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
          const schema = {
            type: 'string',
            oneOf: [
              { const: 'string (1)' },
              { const: 'string (2)' },
              { const: 'string (3)' }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'string',
                schema,
                uri: '#/',
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
                        rootSchema: schema,
                        schema: {
                          const: 'string (1)'
                        },
                        parentUri: '#/',
                        uri: '#/0',
                        required: false,
                        value: 'string (1)'
                      },
                      elements: {
                        field: {
                          id: '#/0',
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
                        parentUri: '#/',
                        uri: '#/1',
                        required: false,
                        value: 'string (2)'
                      },
                      elements: {
                        field: {
                          id: '#/1',
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
                        parentUri: '#/',
                        uri: '#/2',
                        required: false,
                        value: 'string (3)'
                      },
                      elements: {
                        field: {
                          id: '#/2',
                          required: false,
                          value: 'string (3)'
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
          const schema = {
            type: 'string',
            allOf: [
              { minLength: 1 },
              { const: 'string' },
              { maxLength: 20 }
            ]
          }

          return expect(transform(schema))
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

        it('transforms `string` type schemas without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
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
                  id: '#/'
                }
              }
            })
        })
      })

      describe('Transforming `number` type schemas', () => {
        it('transforms `number` type schemas with `enum`', () => {
          const schema = {
            type: 'number',
            enum: [
              1,
              2,
              3
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'number',
                schema,
                uri: '#/',
                selectedItems: []
              },
              elements: {
                enum: {
                  id: '#/',
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

        it('transforms `number` type schemas with `anyOf`', () => {
          const schema = {
            type: 'number',
            anyOf: [
              { const: 1 },
              { const: 2 },
              { const: 3 }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'number',
                schema,
                uri: '#/',
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
                        rootSchema: schema,
                        schema: {
                          const: 1
                        },
                        parentUri: '#/',
                        uri: '#/0',
                        required: false,
                        value: '1'
                      },
                      elements: {
                        field: {
                          id: '#/0',
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
                        parentUri: '#/',
                        uri: '#/1',
                        required: false,
                        value: '2'
                      },
                      elements: {
                        field: {
                          id: '#/1',
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
                        parentUri: '#/',
                        uri: '#/2',
                        required: false,
                        value: '3'
                      },
                      elements: {
                        field: {
                          id: '#/2',
                          required: false,
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

        it('transforms `number` type schemas with `oneOf`', () => {
          const schema = {
            type: 'number',
            oneOf: [
              { const: 1 },
              { const: 2 },
              { const: 3 }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'number',
                schema,
                uri: '#/',
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
                        rootSchema: schema,
                        schema: {
                          const: 1
                        },
                        parentUri: '#/',
                        uri: '#/0',
                        required: false,
                        value: '1'
                      },
                      elements: {
                        field: {
                          id: '#/0',
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
                        parentUri: '#/',
                        uri: '#/1',
                        required: false,
                        value: '2'
                      },
                      elements: {
                        field: {
                          id: '#/1',
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
                        parentUri: '#/',
                        uri: '#/2',
                        required: false,
                        value: '3'
                      },
                      elements: {
                        field: {
                          id: '#/2',
                          required: false,
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

        it('transforms `number` type schemas with `allOf`', () => {
          const schema = {
            type: 'number',
            allOf: [
              { minimum: 1 },
              { const: 2 },
              { maximum: 3 }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'number',
                schema,
                min: 1,
                max: 3,
                uri: '#/',
                value: '2'
              },
              elements: {
                field: {
                  id: '#/',
                  min: 1,
                  max: 3,
                  value: '2'
                }
              }
            })
        })

        it('transforms `number` type schemas without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
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
                  id: '#/'
                }
              }
            })
        })
      })

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
                      selectedItems: [],
                      required: false
                    },
                    elements: {
                      enum: {
                        id: '#/one',
                        items: [
                          'string (1)',
                          'string (2)'
                        ],
                        selectedItems: [],
                        required: false
                      }
                    }
                  },
                  {
                    meta: {
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
                      selectedItems: [],
                      required: false
                    },
                    elements: {
                      enum: {
                        id: '#/two',
                        items: [
                          'string (1)',
                          'string (2)'
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
                      selectedItems: [],
                      required: true
                    },
                    elements: {
                      enum: {
                        id: '#/one',
                        items: [
                          'string (1)',
                          'string (2)'
                        ],
                        selectedItems: [],
                        required: true
                      }
                    }
                  },
                  {
                    meta: {
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
                      selectedItems: [],
                      required: false
                    },
                    elements: {
                      enum: {
                        id: '#/two',
                        items: [
                          'string (1)',
                          'string (2)'
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
                      selectedItems: [],
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
                        selectedItems: [],
                        required: false
                      }
                    }
                  },
                  {
                    meta: {
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
                      selectedItems: [],
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
                        selectedItems: [],
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
                      selectedItems: [],
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
                        selectedItems: [],
                        required: true
                      }
                    }
                  },
                  {
                    meta: {
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
                      selectedItems: [],
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
                        selectedItems: [],
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
                      selectedItems: [],
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
                        selectedItems: [],
                        required: false
                      }
                    }
                  },
                  {
                    meta: {
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
                      selectedItems: [],
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
                        selectedItems: [],
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
                      selectedItems: [],
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
                        selectedItems: [],
                        required: true
                      }
                    }
                  },
                  {
                    meta: {
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
                      selectedItems: [],
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
                        selectedItems: [],
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
                      value: 'string (one)'
                    },
                    elements: {
                      field: {
                        id: '#/one',
                        minLength: 1,
                        maxLength: 100,
                        required: false,
                        value: 'string (one)'
                      }
                    }
                  },
                  {
                    meta: {
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
                      value: 'string (two)'
                    },
                    elements: {
                      field: {
                        id: '#/two',
                        minLength: 1,
                        maxLength: 100,
                        required: false,
                        value: 'string (two)'
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
                      value: 'string (one)'
                    },
                    elements: {
                      field: {
                        id: '#/one',
                        minLength: 1,
                        maxLength: 100,
                        required: true,
                        value: 'string (one)'
                      }
                    }
                  },
                  {
                    meta: {
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
                      value: 'string (two)'
                    },
                    elements: {
                      field: {
                        id: '#/two',
                        minLength: 1,
                        maxLength: 100,
                        required: false,
                        value: 'string (two)'
                      }
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
                      type: 'string',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'string'
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: false
                    },
                    elements: {
                      field: {
                        id: '#/one',
                        required: false
                      }
                    }
                  },
                  {
                    meta: {
                      type: 'string',
                      name: 'two',
                      rootSchema: schema,
                      schema: {
                        type: 'string'
                      },
                      parentUri: '#/',
                      uri: '#/two',
                      required: false
                    },
                    elements: {
                      field: {
                        id: '#/two',
                        required: false
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
                      type: 'string',
                      name: 'one',
                      rootSchema: schema,
                      schema: {
                        type: 'string'
                      },
                      parentUri: '#/',
                      uri: '#/one',
                      required: true
                    },
                    elements: {
                      field: {
                        id: '#/one',
                        required: true
                      }
                    }
                  },
                  {
                    meta: {
                      type: 'string',
                      name: 'two',
                      rootSchema: schema,
                      schema: {
                        type: 'string'
                      },
                      parentUri: '#/',
                      uri: '#/two',
                      required: false
                    },
                    elements: {
                      field: {
                        id: '#/two',
                        required: false
                      }
                    }
                  }
                ]
              }
            })
        })
      })

      describe('Transforming `boolean` type schemas', () => {
        it('transforms `boolean` type schemas with `enum`', () => {
          const schema = {
            type: 'boolean',
            enum: [
              true,
              false
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'boolean',
                schema,
                uri: '#/',
                selectedItems: []
              },
              elements: {
                enum: {
                  id: '#/',
                  items: [
                    true,
                    false
                  ],
                  selectedItems: []
                }
              }
            })
        })

        it('transforms `boolean` type schemas with `anyOf`', () => {
          const schema = {
            type: 'boolean',
            anyOf: [
              { const: true },
              { const: false }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'boolean',
                schema,
                uri: '#/',
                selectedItems: []
              },
              elements: {
                anyOf: {
                  id: '#/',
                  items: [
                    {
                      meta: {
                        type: 'boolean',
                        item: 0,
                        rootSchema: schema,
                        schema: {
                          const: true
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
                    },
                    {
                      meta: {
                        type: 'boolean',
                        item: 1,
                        rootSchema: schema,
                        schema: {
                          const: false
                        },
                        parentUri: '#/',
                        uri: '#/1',
                        required: false,
                        value: 'false'
                      },
                      elements: {
                        field: {
                          id: '#/1',
                          required: false,
                          value: 'false'
                        }
                      }
                    }
                  ],
                  selectedItems: []
                }
              }
            })
        })

        it('transforms `boolean` type schemas with `oneOf`', () => {
          const schema = {
            type: 'boolean',
            oneOf: [
              { const: true },
              { const: false }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'boolean',
                schema,
                uri: '#/',
                selectedItems: []
              },
              elements: {
                oneOf: {
                  id: '#/',
                  items: [
                    {
                      meta: {
                        type: 'boolean',
                        item: 0,
                        rootSchema: schema,
                        schema: {
                          const: true
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
                    },
                    {
                      meta: {
                        type: 'boolean',
                        item: 1,
                        rootSchema: schema,
                        schema: {
                          const: false
                        },
                        parentUri: '#/',
                        uri: '#/1',
                        required: false,
                        value: 'false'
                      },
                      elements: {
                        field: {
                          id: '#/1',
                          required: false,
                          value: 'false'
                        }
                      }
                    }
                  ],
                  selectedItems: []
                }
              }
            })
        })

        it('transforms `boolean` type schemas with `allOf`', () => {
          const schema = {
            type: 'boolean',
            allOf: [
              { const: true }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'boolean',
                schema,
                uri: '#/',
                value: 'true'
              },
              elements: {
                field: {
                  id: '#/',
                  value: 'true'
                }
              }
            })
        })

        it('transforms `boolean` type schemas without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
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
                  id: '#/'
                }
              }
            })
        })
      })

      describe('Transforming `null` type schemas', () => {
        it('transforms `null` type schemas with `enum`', () => {
          const schema = {
            type: 'null',
            enum: [
              null
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'null',
                schema,
                uri: '#/',
                selectedItems: []
              },
              elements: {
                enum: {
                  id: '#/',
                  items: [
                    null
                  ],
                  selectedItems: []
                }
              }
            })
        })

        it('transforms `null` type schemas with `anyOf`', () => {
          const schema = {
            type: 'null',
            anyOf: [
              { const: null },
              { const: null },
              { const: null }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'null',
                schema,
                uri: '#/',
                selectedItems: []
              },
              elements: {
                anyOf: {
                  id: '#/',
                  items: [
                    {
                      meta: {
                        type: 'null',
                        item: 0,
                        rootSchema: schema,
                        schema: {
                          const: null
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
                    },
                    {
                      meta: {
                        type: 'null',
                        item: 1,
                        rootSchema: schema,
                        schema: {
                          const: null
                        },
                        parentUri: '#/',
                        uri: '#/1',
                        required: false,
                        value: 'null'
                      },
                      elements: {
                        field: {
                          id: '#/1',
                          required: false,
                          value: 'null'
                        }
                      }
                    },
                    {
                      meta: {
                        type: 'null',
                        item: 2,
                        rootSchema: schema,
                        schema: {
                          const: null
                        },
                        parentUri: '#/',
                        uri: '#/2',
                        required: false,
                        value: 'null'
                      },
                      elements: {
                        field: {
                          id: '#/2',
                          required: false,
                          value: 'null'
                        }
                      }
                    }
                  ],
                  selectedItems: []
                }
              }
            })
        })

        it('transforms `null` type schemas with `oneOf`', () => {
          const schema = {
            type: 'null',
            oneOf: [
              { const: null }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'null',
                schema,
                uri: '#/',
                selectedItems: []
              },
              elements: {
                oneOf: {
                  id: '#/',
                  items: [
                    {
                      meta: {
                        type: 'null',
                        item: 0,
                        rootSchema: schema,
                        schema: {
                          const: null
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
                  ],
                  selectedItems: []
                }
              }
            })
        })

        it('transforms `null` type schemas with `allOf`', () => {
          const schema = {
            type: 'null',
            allOf: [
              { const: null }
            ]
          }

          return expect(transform(schema))
            .to.eql({
              meta: {
                type: 'null',
                schema,
                uri: '#/',
                value: 'null'
              },
              elements: {
                field: {
                  id: '#/',
                  value: 'null'
                }
              }
            })
        })

        it('transforms `null` type schemas without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
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
                  id: '#/'
                }
              }
            })
        })
      })
    })
  })
})
