import debug from 'debug'

import { expect } from 'chai'

import transform from 'shinkansen-transmission/transmission/to-zashiki'

import {
  transformNullByKeyForEnum,
  transformNullByKeyForAnyOf,
  transformNullByKeyForOneOf,
  transformNullByKeyForAllOf,
  transformNullByKey,

  transformBooleanByKeyForEnum,
  transformBooleanByKeyForAnyOf,
  transformBooleanByKeyForOneOf,
  transformBooleanByKeyForAllOf,
  transformBooleanByKey,

  transformObjectByKeyForEnum,
  transformObjectByKeyForAnyOf,
  transformObjectByKeyForOneOf,
  transformObjectByKeyForAllOf,
  transformObjectByKey,

  transformArrayByKeyForEnum,
  transformArrayByKeyForAnyOf,
  transformArrayByKeyForOneOf,
  transformArrayByKeyForAllOf,
  transformArrayByKey,

  transformNumberByKeyForEnum,
  transformNumberByKeyForAnyOf,
  transformNumberByKeyForOneOf,
  transformNumberByKeyForAllOf,
  transformNumberByKey,

  transformStringByKeyForEnum,
  transformStringByKeyForAnyOf,
  transformStringByKeyForOneOf,
  transformStringByKeyForAllOf,
  transformStringByKey,

  transformNullByIndexForEnum,
  transformNullByIndexForAnyOf,
  transformNullByIndexForOneOf,
  transformNullByIndexForAllOf,
  transformNullByIndex,

  transformBooleanByIndexForEnum,
  transformBooleanByIndexForAnyOf,
  transformBooleanByIndexForOneOf,
  transformBooleanByIndexForAllOf,
  transformBooleanByIndex,

  transformObjectByIndexForEnum,
  transformObjectByIndexForAnyOf,
  transformObjectByIndexForOneOf,
  transformObjectByIndexForAllOf,
  transformObjectByIndex,

  transformArrayByIndexForEnum,
  transformArrayByIndexForAnyOf,
  transformArrayByIndexForOneOf,
  transformArrayByIndexForAllOf,
  transformArrayByIndex,

  transformNumberByIndexForEnum,
  transformNumberByIndexForAnyOf,
  transformNumberByIndexForOneOf,
  transformNumberByIndexForAllOf,
  transformNumberByIndex,

  transformStringByIndexForEnum,
  transformStringByIndexForAnyOf,
  transformStringByIndexForOneOf,
  transformStringByIndexForAllOf,
  transformStringByIndex,

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
  transformString,

  transformByKey,
  transformByIndex
} from 'shinkansen-transmission/transmission/to-zashiki/transform-schema'

describe.only('shinkansen-transmission/transmission/to-zashiki', () => {
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

  describe('`transformNullByKeyForEnum`', () => {
    it('is a function', () => {
      expect(transformNullByKeyForEnum)
        .to.be.a('function')
    })
  })

  describe('`transformNullByKeyForAnyOf`', () => {
    it('is a function', () => {
      expect(transformNullByKeyForAnyOf)
        .to.be.a('function')
    })
  })

  describe('`transformNullByKeyForOneOf`', () => {
    it('is a function', () => {
      expect(transformNullByKeyForOneOf)
        .to.be.a('function')
    })
  })

  describe('`transformNullByKeyForAllOf`', () => {
    it('is a function', () => {
      expect(transformNullByKeyForAllOf)
        .to.be.a('function')
    })
  })

  describe('`transformNullByKey`', () => {
    it('is a function', () => {
      expect(transformNullByKey)
        .to.be.a('function')
    })
  })

  describe('`transformBooleanByKeyForEnum`', () => {
    it('is a function', () => {
      expect(transformBooleanByKeyForEnum)
        .to.be.a('function')
    })
  })

  describe('`transformBooleanByKeyForAnyOf`', () => {
    it('is a function', () => {
      expect(transformBooleanByKeyForAnyOf)
        .to.be.a('function')
    })
  })

  describe('`transformBooleanByKeyForOneOf`', () => {
    it('is a function', () => {
      expect(transformBooleanByKeyForOneOf)
        .to.be.a('function')
    })
  })

  describe('`transformBooleanByKeyForAllOf`', () => {
    it('is a function', () => {
      expect(transformBooleanByKeyForAllOf)
        .to.be.a('function')
    })
  })

  describe('`transformBooleanByKey`', () => {
    it('is a function', () => {
      expect(transformBooleanByKey)
        .to.be.a('function')
    })
  })

  describe('`transformObjectByKeyForEnum`', () => {
    it('is a function', () => {
      expect(transformObjectByKeyForEnum)
        .to.be.a('function')
    })
  })

  describe('`transformObjectByKeyForAnyOf`', () => {
    it('is a function', () => {
      expect(transformObjectByKeyForAnyOf)
        .to.be.a('function')
    })
  })

  describe('`transformObjectByKeyForOneOf`', () => {
    it('is a function', () => {
      expect(transformObjectByKeyForOneOf)
        .to.be.a('function')
    })
  })

  describe('`transformObjectByKeyForAllOf`', () => {
    it('is a function', () => {
      expect(transformObjectByKeyForAllOf)
        .to.be.a('function')
    })
  })

  describe('`transformObjectByKey`', () => {
    it('is a function', () => {
      expect(transformObjectByKey)
        .to.be.a('function')
    })
  })

  describe('`transformArrayByKeyForEnum`', () => {
    it('is a function', () => {
      expect(transformArrayByKeyForEnum)
        .to.be.a('function')
    })
  })

  describe('`transformArrayByKeyForAnyOf`', () => {
    it('is a function', () => {
      expect(transformArrayByKeyForAnyOf)
        .to.be.a('function')
    })
  })

  describe('`transformArrayByKeyForOneOf`', () => {
    it('is a function', () => {
      expect(transformArrayByKeyForOneOf)
        .to.be.a('function')
    })
  })

  describe('`transformArrayByKeyForAllOf`', () => {
    it('is a function', () => {
      expect(transformArrayByKeyForAllOf)
        .to.be.a('function')
    })
  })

  describe('`transformArrayByKey`', () => {
    it('is a function', () => {
      expect(transformArrayByKey)
        .to.be.a('function')
    })
  })

  describe('`transformNumberByKeyForEnum`', () => {
    it('is a function', () => {
      expect(transformNumberByKeyForEnum)
        .to.be.a('function')
    })
  })

  describe('`transformNumberByKeyForAnyOf`', () => {
    it('is a function', () => {
      expect(transformNumberByKeyForAnyOf)
        .to.be.a('function')
    })
  })

  describe('`transformNumberByKeyForOneOf`', () => {
    it('is a function', () => {
      expect(transformNumberByKeyForOneOf)
        .to.be.a('function')
    })
  })

  describe('`transformNumberByKeyForAllOf`', () => {
    it('is a function', () => {
      expect(transformNumberByKeyForAllOf)
        .to.be.a('function')
    })
  })

  describe('`transformNumberByKey`', () => {
    it('is a function', () => {
      expect(transformNumberByKey)
        .to.be.a('function')
    })
  })

  describe('`transformStringByKeyForEnum`', () => {
    it('is a function', () => {
      expect(transformStringByKeyForEnum)
        .to.be.a('function')
    })
  })

  describe('`transformStringByKeyForAnyOf`', () => {
    it('is a function', () => {
      expect(transformStringByKeyForAnyOf)
        .to.be.a('function')
    })
  })

  describe('`transformStringByKeyForOneOf`', () => {
    it('is a function', () => {
      expect(transformStringByKeyForOneOf)
        .to.be.a('function')
    })
  })

  describe('`transformStringByKeyForAllOf`', () => {
    it('is a function', () => {
      expect(transformStringByKeyForAllOf)
        .to.be.a('function')
    })
  })

  describe('`transformStringByKey`', () => {
    it('is a function', () => {
      expect(transformStringByKey)
        .to.be.a('function')
    })
  })

  describe('`transformNullByIndexForEnum`', () => {
    it('is a function', () => {
      expect(transformNullByIndexForEnum)
        .to.be.a('function')
    })
  })

  describe('`transformNullByIndexForAnyOf`', () => {
    it('is a function', () => {
      expect(transformNullByIndexForAnyOf)
        .to.be.a('function')
    })
  })

  describe('`transformNullByIndexForOneOf`', () => {
    it('is a function', () => {
      expect(transformNullByIndexForOneOf)
        .to.be.a('function')
    })
  })

  describe('`transformNullByIndexForAllOf`', () => {
    it('is a function', () => {
      expect(transformNullByIndexForAllOf)
        .to.be.a('function')
    })
  })

  describe('`transformNullByIndex`', () => {
    it('is a function', () => {
      expect(transformNullByIndex)
        .to.be.a('function')
    })
  })

  describe('`transformBooleanByIndexForEnum`', () => {
    it('is a function', () => {
      expect(transformBooleanByIndexForEnum)
        .to.be.a('function')
    })
  })

  describe('`transformBooleanByIndexForAnyOf`', () => {
    it('is a function', () => {
      expect(transformBooleanByIndexForAnyOf)
        .to.be.a('function')
    })
  })

  describe('`transformBooleanByIndexForOneOf`', () => {
    it('is a function', () => {
      expect(transformBooleanByIndexForOneOf)
        .to.be.a('function')
    })
  })

  describe('`transformBooleanByIndexForAllOf`', () => {
    it('is a function', () => {
      expect(transformBooleanByIndexForAllOf)
        .to.be.a('function')
    })
  })

  describe('`transformBooleanByIndex`', () => {
    it('is a function', () => {
      expect(transformBooleanByIndex)
        .to.be.a('function')
    })
  })

  describe('`transformObjectByIndexForEnum`', () => {
    it('is a function', () => {
      expect(transformObjectByIndexForEnum)
        .to.be.a('function')
    })
  })

  describe('`transformObjectByIndexForAnyOf`', () => {
    it('is a function', () => {
      expect(transformObjectByIndexForAnyOf)
        .to.be.a('function')
    })
  })

  describe('`transformObjectByIndexForOneOf`', () => {
    it('is a function', () => {
      expect(transformObjectByIndexForOneOf)
        .to.be.a('function')
    })
  })

  describe('`transformObjectByIndexForAllOf`', () => {
    it('is a function', () => {
      expect(transformObjectByIndexForAllOf)
        .to.be.a('function')
    })
  })

  describe('`transformObjectByIndex`', () => {
    it('is a function', () => {
      expect(transformObjectByIndex)
        .to.be.a('function')
    })
  })

  describe('`transformArrayByIndexForEnum`', () => {
    it('is a function', () => {
      expect(transformArrayByIndexForEnum)
        .to.be.a('function')
    })
  })

  describe('`transformArrayByIndexForAnyOf`', () => {
    it('is a function', () => {
      expect(transformArrayByIndexForAnyOf)
        .to.be.a('function')
    })
  })

  describe('`transformArrayByIndexForOneOf`', () => {
    it('is a function', () => {
      expect(transformArrayByIndexForOneOf)
        .to.be.a('function')
    })
  })

  describe('`transformArrayByIndexForAllOf`', () => {
    it('is a function', () => {
      expect(transformArrayByIndexForAllOf)
        .to.be.a('function')
    })
  })

  describe('`transformArrayByIndex`', () => {
    it('is a function', () => {
      expect(transformArrayByIndex)
        .to.be.a('function')
    })
  })

  describe('`transformNumberByIndexForEnum`', () => {
    it('is a function', () => {
      expect(transformNumberByIndexForEnum)
        .to.be.a('function')
    })
  })

  describe('`transformNumberByIndexForAnyOf`', () => {
    it('is a function', () => {
      expect(transformNumberByIndexForAnyOf)
        .to.be.a('function')
    })
  })

  describe('`transformNumberByIndexForOneOf`', () => {
    it('is a function', () => {
      expect(transformNumberByIndexForOneOf)
        .to.be.a('function')
    })
  })

  describe('`transformNumberByIndexForAllOf`', () => {
    it('is a function', () => {
      expect(transformNumberByIndexForAllOf)
        .to.be.a('function')
    })
  })

  describe('`transformNumberByIndex`', () => {
    it('is a function', () => {
      expect(transformNumberByIndex)
        .to.be.a('function')
    })
  })

  describe('`transformStringByIndexForEnum`', () => {
    it('is a function', () => {
      expect(transformStringByIndexForEnum)
        .to.be.a('function')
    })
  })

  describe('`transformStringByIndexForAnyOf`', () => {
    it('is a function', () => {
      expect(transformStringByIndexForAnyOf)
        .to.be.a('function')
    })
  })

  describe('`transformStringByIndexForOneOf`', () => {
    it('is a function', () => {
      expect(transformStringByIndexForOneOf)
        .to.be.a('function')
    })
  })

  describe('`transformStringByIndexForAllOf`', () => {
    it('is a function', () => {
      expect(transformStringByIndexForAllOf)
        .to.be.a('function')
    })
  })

  describe('`transformStringByIndex`', () => {
    it('is a function', () => {
      expect(transformStringByIndex)
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

  describe('`transformByIndex`', () => {
    it('is a function', () => {
      expect(transformByIndex)
        .to.be.a('function')
    })
  })

  describe('`transformByKey`', () => {
    it('is a function', () => {
      expect(transformByKey)
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

    /*
     *  `parentUri`
     */
    xit('transforms with `enum`', () => {
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

    /*
     *  `parentUri`
     */
    xit('transforms with `anyOf`', () => {
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

    /*
     *  `parentUri`
     */
    xit('transforms with `oneOf`', () => {
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

    /*
     *  `parentUri`
     */
    xit('transforms with `allOf`', () => {
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

    /*
     *  `parentUri`
     */
    xit('transforms with `enum`', () => {
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

    /*
     *  `parentUri`
     */
    xit('transforms with `anyOf`', () => {
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
                    rootSchema: schema,
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
                    rootSchema: schema,
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

    /*
     *  `parentUri`
     */
    xit('transforms with `oneOf`', () => {
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

    /*
     *  `parentUri`
     */
    xit('transforms with `allOf`', () => {
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
     *  `parentUri`
     */
    xit('transforms with `enum`', () => {
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

    /*
     *  `parentUri`
     */
    xit('transforms with `anyOf`', () => {
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
                    }
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
                    }
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
                    }
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

    /*
     *  `parentUri`
     */
    xit('transforms with `oneOf`', () => {
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
                    maxContains: 9
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
                    maxContains: 9
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
                    maxContains: 9
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

    /*
     *  `parentUri` `field`
     */
    xit('transforms with `allOf`', () => {
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

    /*
     *  `parentUri`
     */
    xit('transforms with `enum`', () => {
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

    /*
     *  `parentUri`
     */
    xit('transforms with `anyOf`', () => {
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
                    }
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
                    }
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
                    }
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

    /*
     *  `parentUri`
     */
    xit('transforms with `oneOf`', () => {
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
                    maxProperties: 9
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
                    maxProperties: 9
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
                    maxProperties: 9
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

    /*
     *  `parentUri` `field`
     */
    xit('transforms with `allOf`', () => {
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

    /*
     *  `parentUri`
     */
    xit('transforms with `enum`', () => {
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

    /*
     *  `parentUri`
     */
    xit('transforms with `anyOf`', () => {
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
                    value: 'true'
                  },
                  elements: {
                    field: {
                      id: '#/0',
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
                    value: 'false'
                  },
                  elements: {
                    field: {
                      id: '#/1',
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

    /*
     *  `parentUri`
     */
    xit('transforms with `oneOf`', () => {
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
                    value: 'true'
                  },
                  elements: {
                    field: {
                      id: '#/0',
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
                    value: 'false'
                  },
                  elements: {
                    field: {
                      id: '#/1',
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

    /*
     *  `parentUri`
     */
    xit('transforms with `allOf`', () => {
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

    /*
     *  `parentUri`
     */
    xit('transforms with `enum`', () => {
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

    /*
     *  `parentUri`
     */
    xit('transforms with `anyOf`', () => {
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
                    value: 'null'
                  },
                  elements: {
                    field: {
                      id: '#/0',
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

    /*
     *  `parentUri`
     */
    xit('transforms with `oneOf`', () => {
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
                    value: 'null'
                  },
                  elements: {
                    field: {
                      id: '#/0',
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

    /*
     *  `parentUri`
     */
    xit('transforms with `allOf`', () => {
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
        /*
         *  `parentUri`
         */
        xit('transforms with `enum`', () => {
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

        /*
         *  `parentUri`
         */
        xit('transforms with `anyOf`', () => {
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
                        value: 'string (1)'
                      },
                      elements: {
                        field: {
                          id: '#/0',
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
                        value: 'string (2)'
                      },
                      elements: {
                        field: {
                          id: '#/1',
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
                        value: 'string (3)'
                      },
                      elements: {
                        field: {
                          id: '#/2',
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

        /*
         *  `parentUri`
         */
        xit('transforms with `oneOf`', () => {
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
                        value: 'string (1)'
                      },
                      elements: {
                        field: {
                          id: '#/0',
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
                        value: 'string (2)'
                      },
                      elements: {
                        field: {
                          id: '#/1',
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
                        value: 'string (3)'
                      },
                      elements: {
                        field: {
                          id: '#/2',
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

        /*
         *  `parentUri`
         */
        xit('transforms with `allOf`', () => {
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
        /*
         *  `parentUri`
         */
        xit('transforms with `enum`', () => {
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

        /*
         *  `parentUri`
         */
        xit('transforms with `anyOf`', () => {
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
                        rootSchema: schema,
                        schema: {
                          const: 2
                        },
                        parentUri: '#/',
                        uri: '#/1',
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
                        rootSchema: schema,
                        schema: {
                          const: 3
                        },
                        parentUri: '#/',
                        uri: '#/2',
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
                  selectedItems: [2]
                }
              }
            })
        })

        /*
         *  `parentUri`
         */
        xit('transforms with `oneOf`', () => {
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
                        rootSchema: schema,
                        schema: {
                          const: 2
                        },
                        parentUri: '#/',
                        uri: '#/1',
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
                        rootSchema: schema,
                        schema: {
                          const: 3
                        },
                        parentUri: '#/',
                        uri: '#/2',
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
                  selectedItems: [2]
                }
              }
            })
        })

        /*
         *  `parentUri`
         */
        xit('transforms with `allOf`', () => {
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
        /*
         *  `parentUri`
         */
        xit('transforms `boolean` type schemas with `enum`', () => {
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

        /*
         *  `parentUri`
         */
        xit('transforms `boolean` type schemas with `anyOf`', () => {
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
                        value: 'true'
                      },
                      elements: {
                        field: {
                          id: '#/0',
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
                        value: 'false'
                      },
                      elements: {
                        field: {
                          id: '#/1',
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

        /*
         *  `parentUri`
         */
        xit('transforms `boolean` type schemas with `oneOf`', () => {
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
                        value: 'true'
                      },
                      elements: {
                        field: {
                          id: '#/0',
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
                        value: 'false'
                      },
                      elements: {
                        field: {
                          id: '#/1',
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

        /*
         *  `parentUri`
         */
        xit('transforms `boolean` type schemas with `allOf`', () => {
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
        /*
         *  `parentUri`
         */
        xit('transforms `null` type schemas with `enum`', () => {
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

        /*
         *  `parentUri`
         */
        xit('transforms `null` type schemas with `anyOf`', () => {
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
                        value: 'null'
                      },
                      elements: {
                        field: {
                          id: '#/0',
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
                        value: 'null'
                      },
                      elements: {
                        field: {
                          id: '#/1',
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
                        value: 'null'
                      },
                      elements: {
                        field: {
                          id: '#/2',
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

        /*
         *  `parentUri`
         */
        xit('transforms `null` type schemas with `oneOf`', () => {
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
                        value: 'null'
                      },
                      elements: {
                        field: {
                          id: '#/0',
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

        /*
         *  `parentUri`
         */
        xit('transforms `null` type schemas with `allOf`', () => {
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

        /*
         *  `parentUri`
         */
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
        /*
         *  `parentUri`
         */
        xit('transforms `string` type schemas with `enum`', () => {
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

        /*
         *  `parentUri`
         */
        xit('transforms `string` type schemas with `anyOf`', () => {
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
                        value: 'string (1)'
                      },
                      elements: {
                        field: {
                          id: '#/0',
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
                        value: 'string (2)'
                      },
                      elements: {
                        field: {
                          id: '#/1',
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
                        value: 'string (3)'
                      },
                      elements: {
                        field: {
                          id: '#/2',
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

        /*
         *  `parentUri`
         */
        xit('transforms `string` type schemas with `oneOf`', () => {
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
                        value: 'string (1)'
                      },
                      elements: {
                        field: {
                          id: '#/0',
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
                        value: 'string (2)'
                      },
                      elements: {
                        field: {
                          id: '#/1',
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
                        value: 'string (3)'
                      },
                      elements: {
                        field: {
                          id: '#/2',
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

        /*
         *  `parentUri`
         */
        xit('transforms `string` type schemas with `allOf`', () => {
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
        /*
         *  `parentUri`
         */
        xit('transforms `number` type schemas with `enum`', () => {
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

        /*
         *  `parentUri`
         */
        xit('transforms `number` type schemas with `anyOf`', () => {
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
                        rootSchema: schema,
                        schema: {
                          const: 2
                        },
                        parentUri: '#/',
                        uri: '#/1',
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
                        rootSchema: schema,
                        schema: {
                          const: 3
                        },
                        parentUri: '#/',
                        uri: '#/2',
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
                  selectedItems: [2]
                }
              }
            })
        })

        /*
         *  `parentUri`
         */
        xit('transforms `number` type schemas with `oneOf`', () => {
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
                        rootSchema: schema,
                        schema: {
                          const: 2
                        },
                        parentUri: '#/',
                        uri: '#/1',
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
                        rootSchema: schema,
                        schema: {
                          const: 3
                        },
                        parentUri: '#/',
                        uri: '#/2',
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
                  selectedItems: [2]
                }
              }
            })
        })

        /*
         *  `parentUri`
         */
        xit('transforms `number` type schemas with `allOf`', () => {
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

      describe('Transforming `boolean` type schemas', () => {
        /*
         *  `parentUri`
         */
        xit('transforms `boolean` type schemas with `enum`', () => {
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

        /*
         *  `parentUri`
         */
        xit('transforms `boolean` type schemas with `anyOf`', () => {
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
                        value: 'true'
                      },
                      elements: {
                        field: {
                          id: '#/0',
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
                        value: 'false'
                      },
                      elements: {
                        field: {
                          id: '#/1',
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

        /*
         *  `parentUri`
         */
        xit('transforms `boolean` type schemas with `oneOf`', () => {
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
                        value: 'true'
                      },
                      elements: {
                        field: {
                          id: '#/0',
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
                        value: 'false'
                      },
                      elements: {
                        field: {
                          id: '#/1',
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

        /*
         *  `parentUri`
         */
        xit('transforms `boolean` type schemas with `allOf`', () => {
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
        /*
         *  `parentUri`
         */
        xit('transforms `null` type schemas with `enum`', () => {
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

        /*
         *  `parentUri`
         */
        xit('transforms `null` type schemas with `anyOf`', () => {
          const schema = {
            type: 'null',
            anyOf: [
              { const: null }
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
                        value: 'null'
                      },
                      elements: {
                        field: {
                          id: '#/0',
                          value: 'null'
                        }
                      }
                    }
                  ],
                  selectedItems: [0]
                }
              }
            })
        })

        /*
         *  `parentUri`
         */
        xit('transforms `null` type schemas with `oneOf`', () => {
          const schema = {
            type: 'null',
            oneOf: [
              { const: null }
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
                        value: 'null'
                      },
                      elements: {
                        field: {
                          id: '#/0',
                          value: 'null'
                        }
                      }
                    }
                  ],
                  selectedItems: [0]
                }
              }
            })
        })

        /*
         *  `parentUri`
         */
        xit('transforms `null` type schemas with `allOf`', () => {
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
        /*
         *  `parentUri`
         */
        xit('transforms `string` type schemas with `enum`', () => {
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

        /*
         *  `parentUri`
         */
        xit('transforms `string` type schemas with `anyOf`', () => {
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
                        value: 'string (1)'
                      },
                      elements: {
                        field: {
                          id: '#/0',
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
                        value: 'string (2)'
                      },
                      elements: {
                        field: {
                          id: '#/1',
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
                        value: 'string (3)'
                      },
                      elements: {
                        field: {
                          id: '#/2',
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

        /*
         *  `parentUri`
         */
        xit('transforms `string` type schemas with `oneOf`', () => {
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
                        value: 'string (1)'
                      },
                      elements: {
                        field: {
                          id: '#/0',
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
                        value: 'string (2)'
                      },
                      elements: {
                        field: {
                          id: '#/1',
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
                        value: 'string (3)'
                      },
                      elements: {
                        field: {
                          id: '#/2',
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

        /*
         *  `parentUri`
         */
        xit('transforms `string` type schemas with `allOf`', () => {
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

        /*
         *  `parentUri`
         */
        xit('transforms `string` type schemas without `enum` or `anyOf` or `oneOf` or `allOf`', () => {
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
        /*
         *  `parentUri`
         */
        xit('transforms `number` type schemas with `enum`', () => {
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

        /*
         *  `parentUri`
         */
        xit('transforms `number` type schemas with `anyOf`', () => {
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
                        rootSchema: schema,
                        schema: {
                          const: 2
                        },
                        parentUri: '#/',
                        uri: '#/1',
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
                        rootSchema: schema,
                        schema: {
                          const: 3
                        },
                        parentUri: '#/',
                        uri: '#/2',
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

        /*
         *  `parentUri`
         */
        xit('transforms `number` type schemas with `oneOf`', () => {
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
                        rootSchema: schema,
                        schema: {
                          const: 2
                        },
                        parentUri: '#/',
                        uri: '#/1',
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
                        rootSchema: schema,
                        schema: {
                          const: 3
                        },
                        parentUri: '#/',
                        uri: '#/2',
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

        /*
         *  `parentUri`
         */
        xit('transforms `number` type schemas with `allOf`', () => {
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

      describe('Transforming `boolean` type schemas', () => {
        /*
         *  `parentUri`
         */
        xit('transforms `boolean` type schemas with `enum`', () => {
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

        /*
         *  `parentUri`
         */
        xit('transforms `boolean` type schemas with `anyOf`', () => {
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
                        value: 'true'
                      },
                      elements: {
                        field: {
                          id: '#/0',
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
                        value: 'false'
                      },
                      elements: {
                        field: {
                          id: '#/1',
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

        /*
         *  `parentUri`
         */
        xit('transforms `boolean` type schemas with `oneOf', () => {
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
                        value: 'true'
                      },
                      elements: {
                        field: {
                          id: '#/0',
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
                        value: 'false'
                      },
                      elements: {
                        field: {
                          id: '#/1',
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

        /*
         *  `parentUri`
         */
        xit('transforms `boolean` type schemas with `allOf`', () => {
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
        /*
         *  `parentUri`
         */
        xit('transforms `null` type schemas with `enum`', () => {
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

        /*
         *  `parentUri`
         */
        xit('transforms `null` type schemas with `anyOf`', () => {
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
                        value: 'null'
                      },
                      elements: {
                        field: {
                          id: '#/0',
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
                        value: 'null'
                      },
                      elements: {
                        field: {
                          id: '#/1',
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
                        value: 'null'
                      },
                      elements: {
                        field: {
                          id: '#/2',
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

        /*
         *  `parentUri`
         */
        xit('transforms `null` type schemas with `oneOf`', () => {
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
                        value: 'null'
                      },
                      elements: {
                        field: {
                          id: '#/0',
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

        /*
         *  `parentUri`
         */
        xit('transforms `null` type schemas with `allOf`', () => {
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
        /*
         *  `parentUri`
         */
        xit('transforms `string` type schemas with `enum`', () => {
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

        /*
         *  `parentUri`
         */
        xit('transforms `string` type schemas with `anyOf`', () => {
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
                        value: 'string (1)'
                      },
                      elements: {
                        field: {
                          id: '#/0',
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
                        value: 'string (2)'
                      },
                      elements: {
                        field: {
                          id: '#/1',
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
                        value: 'string (3)'
                      },
                      elements: {
                        field: {
                          id: '#/2',
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

        /*
         *  `parentUri`
         */
        xit('transforms `string` type schemas with `oneOf`', () => {
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
                        value: 'string (1)'
                      },
                      elements: {
                        field: {
                          id: '#/0',
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
                        value: 'string (2)'
                      },
                      elements: {
                        field: {
                          id: '#/1',
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
                        value: 'string (3)'
                      },
                      elements: {
                        field: {
                          id: '#/2',
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

        /*
         *  `parentUri`
         */
        xit('transforms `string` type schemas with `allOf`', () => {
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
        /*
         *  `parentUri`
         */
        xit('transforms `number` type schemas with `enum`', () => {
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

        /*
         *  `parentUri`
         */
        xit('transforms `number` type schemas with `anyOf`', () => {
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
                        rootSchema: schema,
                        schema: {
                          const: 2
                        },
                        parentUri: '#/',
                        uri: '#/1',
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
                        rootSchema: schema,
                        schema: {
                          const: 3
                        },
                        parentUri: '#/',
                        uri: '#/2',
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

        /*
         *  `parentUri`
         */
        xit('transforms `number` type schemas with `oneOf`', () => {
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
                        rootSchema: schema,
                        schema: {
                          const: 2
                        },
                        parentUri: '#/',
                        uri: '#/1',
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
                        rootSchema: schema,
                        schema: {
                          const: 3
                        },
                        parentUri: '#/',
                        uri: '#/2',
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

        /*
         *  `parentUri`
         */
        xit('transforms `number` type schemas with `allOf`', () => {
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

      describe('Transforming `boolean` type schemas', () => {
        /*
         *  `parentUri`
         */
        xit('transforms `boolean` type schemas with `enum`', () => {
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

        /*
         *  `parentUri`
         */
        xit('transforms `boolean` type schemas with `anyOf`', () => {
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
                        value: 'true'
                      },
                      elements: {
                        field: {
                          id: '#/0',
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
                        value: 'false'
                      },
                      elements: {
                        field: {
                          id: '#/1',
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

        /*
         *  `parentUri`
         */
        xit('transforms `boolean` type schemas with `oneOf`', () => {
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
                        value: 'true'
                      },
                      elements: {
                        field: {
                          id: '#/0',
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
                        value: 'false'
                      },
                      elements: {
                        field: {
                          id: '#/1',
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

        /*
         *  `parentUri`
         */
        xit('transforms `boolean` type schemas with `allOf`', () => {
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
        /*
         *  `parentUri`
         */
        xit('transforms `null` type schemas with `enum`', () => {
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

        /*
         *  `parentUri`
         */
        xit('transforms `null` type schemas with `anyOf`', () => {
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
                        value: 'null'
                      },
                      elements: {
                        field: {
                          id: '#/0',
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
                        value: 'null'
                      },
                      elements: {
                        field: {
                          id: '#/1',
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
                        value: 'null'
                      },
                      elements: {
                        field: {
                          id: '#/2',
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

        /*
         *  `parentUri`
         */
        xit('transforms `null` type schemas with `oneOf`', () => {
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
                        value: 'null'
                      },
                      elements: {
                        field: {
                          id: '#/0',
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

        /*
         *  `parentUri`
         */
        xit('transforms `null` type schemas with `allOf`', () => {
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
