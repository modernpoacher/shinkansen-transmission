import {
  expect
} from 'chai'

import transform, {
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

describe('shinkansen-transmission/transmission/to-zashiki', () => {
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
})
