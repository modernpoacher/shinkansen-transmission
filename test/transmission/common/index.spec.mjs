/**
 *  @typedef {TransmissionTypes.ArrayLiteralType} ArrayLiteralType
 *  @typedef {TransmissionTypes.ObjectLiteralType} ObjectLiteralType
 *  @typedef {TransmissionTypes.SchemaType} SchemaType
 *  @typedef {TransmissionTypes.HashType} HashType
 */

import {
  expect
} from 'chai'

import {
  isArray,
  isObject,
  isPrimitive,
  isSchema,
  isStringSchema,
  isNumberSchema,
  isArraySchema,
  isObjectSchema,
  isBooleanSchema,
  isNullSchema,
  getTitle,
  getDescription,
  getIsReadOnly,
  getIsWriteOnly,
  getSelectedItems,
  isParentUri,
  getMetaProps,
  hasMetaDefaultValue,
  getMetaDefaultValue,
  hasMetaValue,
  getMetaValue,
  transformToValue,
  getFindByKey,
  getFindByIndex,
  getFindByValue,
  getFindByEqual,
  toString,
  getSchemaFromItems,
  getSchemaFromProperties,
  transformIndexToValueByFindValue,
  findIndexByValue,
  transformIndexToValueByFindEqual,
  findIndexByEqual,
  hasValue,
  getValue,
  getElementsProps,
  getElementsFieldPropsForEnum,
  getElementsFieldPropsForAnyOf,
  getElementsFieldPropsForOneOf,
  getElementsFieldPropsForAllOf,
  getElementsFieldProps,
  getElementsFieldValue,
  hasEnum,
  getEnum,
  hasAnyOf,
  getAnyOf,
  hasOneOf,
  getOneOf,
  hasAllOf,
  getAllOf,
  hasConst,
  getConst,
  hasDefault,
  getDefault,
  getUri,
  normaliseUri,
  getMin,
  getMax,
  getMinLength,
  getMaxLength,
  getMinItems,
  getMaxItems,
  getHasUniqueItems,
  getMinContains,
  getMaxContains,
  getMinProperties,
  getMaxProperties,
  getIsExclusiveMin,
  getIsExclusiveMax,
  getPattern,
  getStep
} from '#transmission/transmission/common'

describe('#transmission/transmission/common', () => {
  describe('`isArray`', () => {
    it('is a function', () => {
      expect(isArray)
        .to.be.a('function')
    })
  })

  describe('`isObject`', () => {
    it('is a function', () => {
      expect(isObject)
        .to.be.a('function')
    })
  })

  describe('`isPrimitive`', () => {
    it('is a function', () => {
      expect(isPrimitive)
        .to.be.a('function')
    })
  })

  describe('`isSchema`', () => {
    it('is a function', () => {
      expect(isSchema)
        .to.be.a('function')
    })
  })

  describe('`isStringSchema`', () => {
    it('is a function', () => {
      expect(isStringSchema)
        .to.be.a('function')
    })
  })

  describe('`isNumberSchema`', () => {
    it('is a function', () => {
      expect(isNumberSchema)
        .to.be.a('function')
    })
  })

  describe('`isArraySchema`', () => {
    it('is a function', () => {
      expect(isArraySchema)
        .to.be.a('function')
    })
  })

  describe('`isObjectSchema`', () => {
    it('is a function', () => {
      expect(isObjectSchema)
        .to.be.a('function')
    })
  })

  describe('`isBooleanSchema`', () => {
    it('is a function', () => {
      expect(isBooleanSchema)
        .to.be.a('function')
    })
  })

  describe('`isNullSchema`', () => {
    it('is a function', () => {
      expect(isNullSchema)
        .to.be.a('function')
    })
  })

  describe('`getTitle`', () => {
    it('is a function', () => {
      expect(getTitle)
        .to.be.a('function')
    })
  })

  describe('`getDescription`', () => {
    it('is a function', () => {
      expect(getDescription)
        .to.be.a('function')
    })
  })

  describe('`getIsReadOnly`', () => {
    it('is a function', () => {
      expect(getIsReadOnly)
        .to.be.a('function')
    })
  })

  describe('`getIsWriteOnly`', () => {
    it('is a function', () => {
      expect(getIsWriteOnly)
        .to.be.a('function')
    })
  })

  describe('`getSelectedItems`', () => {
    it('is a function', () => {
      expect(getSelectedItems)
        .to.be.a('function')
    })
  })

  describe('`isParentUri`', () => {
    it('is a function', () => {
      expect(isParentUri)
        .to.be.a('function')
    })
  })

  describe('`getMetaProps`', () => {
    it('is a function', () => {
      expect(getMetaProps)
        .to.be.a('function')
    })
  })

  describe('`hasMetaDefaultValue`', () => {
    it('is a function', () => {
      expect(hasMetaDefaultValue)
        .to.be.a('function')
    })
  })

  describe('`getMetaDefaultValue`', () => {
    it('is a function', () => {
      expect(getMetaDefaultValue)
        .to.be.a('function')
    })
  })

  describe('`hasMetaValue`', () => {
    it('is a function', () => {
      expect(hasMetaValue)
        .to.be.a('function')
    })
  })

  describe('`getMetaValue`', () => {
    it('is a function', () => {
      expect(getMetaValue)
        .to.be.a('function')
    })
  })

  describe('`transformToValue`', () => {
    it('is a function', () => {
      expect(transformToValue)
        .to.be.a('function')
    })
  })

  describe('`getFindByKey`', () => {
    it('is a function', () => {
      expect(getFindByKey)
        .to.be.a('function')
    })
  })

  describe('`getFindByIndex`', () => {
    it('is a function', () => {
      expect(getFindByIndex)
        .to.be.a('function')
    })
  })

  describe('`getFindByValue`', () => {
    it('is a function', () => {
      expect(getFindByValue)
        .to.be.a('function')
    })
  })

  describe('`getFindByEqual`', () => {
    it('is a function', () => {
      expect(getFindByEqual)
        .to.be.a('function')
    })
  })

  describe('`toString`', () => {
    it('is a function', () => {
      expect(toString)
        .to.be.a('function')
    })
  })

  describe('`getSchemaFromItems`', () => {
    it('is a function', () => {
      expect(getSchemaFromItems)
        .to.be.a('function')
    })
  })

  describe('`getSchemaFromProperties`', () => {
    it('is a function', () => {
      expect(getSchemaFromProperties)
        .to.be.a('function')
    })
  })

  describe('`transformIndexToValueByFindValue`', () => {
    it('is a function', () => {
      expect(transformIndexToValueByFindValue)
        .to.be.a('function')
    })
  })

  describe('`findIndexByValue`', () => {
    it('is a function', () => {
      expect(findIndexByValue)
        .to.be.a('function')
    })
  })

  describe('`transformIndexToValueByFindEqual`', () => {
    it('is a function', () => {
      expect(transformIndexToValueByFindEqual)
        .to.be.a('function')
    })
  })

  describe('`findIndexByEqual`', () => {
    it('is a function', () => {
      expect(findIndexByEqual)
        .to.be.a('function')
    })
  })

  describe('`hasValue`', () => {
    it('is a function', () => {
      expect(hasValue)
        .to.be.a('function')
    })
  })

  describe('`getValue`', () => {
    it('is a function', () => {
      expect(getValue)
        .to.be.a('function')
    })
  })

  describe('`getElementsProps`', () => {
    it('is a function', () => {
      expect(getElementsProps)
        .to.be.a('function')
    })
  })

  describe('`getElementsFieldPropsForEnum`', () => {
    it('is a function', () => {
      expect(getElementsFieldPropsForEnum)
        .to.be.a('function')
    })
  })

  describe('`getElementsFieldPropsForAnyOf`', () => {
    it('is a function', () => {
      expect(getElementsFieldPropsForAnyOf)
        .to.be.a('function')
    })
  })

  describe('`getElementsFieldPropsForOneOf`', () => {
    it('is a function', () => {
      expect(getElementsFieldPropsForOneOf)
        .to.be.a('function')
    })
  })

  describe('`getElementsFieldPropsForAllOf`', () => {
    it('is a function', () => {
      expect(getElementsFieldPropsForAllOf)
        .to.be.a('function')
    })
  })

  describe('`getElementsFieldProps`', () => {
    it('is a function', () => {
      expect(getElementsFieldProps)
        .to.be.a('function')
    })
  })

  describe('`getElementsFieldValue`', () => {
    it('is a function', () => {
      expect(getElementsFieldValue)
        .to.be.a('function')
    })
  })

  describe('`hasEnum`', () => {
    it('is a function', () => {
      expect(hasEnum)
        .to.be.a('function')
    })
  })

  describe('`getEnum`', () => {
    it('is a function', () => {
      expect(getEnum)
        .to.be.a('function')
    })
  })

  describe('`hasAnyOf`', () => {
    it('is a function', () => {
      expect(hasAnyOf)
        .to.be.a('function')
    })
  })

  describe('`getAnyOf`', () => {
    it('is a function', () => {
      expect(getAnyOf)
        .to.be.a('function')
    })
  })

  describe('`hasOneOf`', () => {
    it('is a function', () => {
      expect(hasOneOf)
        .to.be.a('function')
    })
  })

  describe('`getOneOf`', () => {
    it('is a function', () => {
      expect(getOneOf)
        .to.be.a('function')
    })
  })

  describe('`hasAllOf`', () => {
    it('is a function', () => {
      expect(hasAllOf)
        .to.be.a('function')
    })
  })

  describe('`getAllOf`', () => {
    it('is a function', () => {
      expect(getAllOf)
        .to.be.a('function')
    })
  })

  describe('`hasConst`', () => {
    it('is a function', () => {
      expect(hasConst)
        .to.be.a('function')
    })
  })

  describe('`getConst`', () => {
    it('is a function', () => {
      expect(getConst)
        .to.be.a('function')
    })
  })

  describe('`hasDefault`', () => {
    it('is a function', () => {
      expect(hasDefault)
        .to.be.a('function')
    })
  })

  describe('`getDefault`', () => {
    it('is a function', () => {
      expect(getDefault)
        .to.be.a('function')
    })
  })

  describe('`getUri`', () => {
    it('is a function', () => {
      expect(getUri)
        .to.be.a('function')
    })
  })

  describe('`normaliseUri`', () => {
    it('is a function', () => {
      expect(normaliseUri)
        .to.be.a('function')
    })
  })

  describe('`getMin`', () => {
    it('is a function', () => {
      expect(getMin)
        .to.be.a('function')
    })
  })

  describe('`getMax`', () => {
    it('is a function', () => {
      expect(getMax)
        .to.be.a('function')
    })
  })

  describe('`getMinLength`', () => {
    it('is a function', () => {
      expect(getMinLength)
        .to.be.a('function')
    })
  })

  describe('`getMaxLength`', () => {
    it('is a function', () => {
      expect(getMaxLength)
        .to.be.a('function')
    })
  })

  describe('`getMinItems`', () => {
    it('is a function', () => {
      expect(getMinItems)
        .to.be.a('function')
    })
  })

  describe('`getMaxItems`', () => {
    it('is a function', () => {
      expect(getMaxItems)
        .to.be.a('function')
    })
  })

  describe('`getHasUniqueItems`', () => {
    it('is a function', () => {
      expect(getHasUniqueItems)
        .to.be.a('function')
    })
  })

  describe('`getMinContains`', () => {
    it('is a function', () => {
      expect(getMinContains)
        .to.be.a('function')
    })
  })

  describe('`getMaxContains`', () => {
    it('is a function', () => {
      expect(getMaxContains)
        .to.be.a('function')
    })
  })

  describe('`getMinProperties`', () => {
    it('is a function', () => {
      expect(getMinProperties)
        .to.be.a('function')
    })
  })

  describe('`getMaxProperties`', () => {
    it('is a function', () => {
      expect(getMaxProperties)
        .to.be.a('function')
    })
  })

  describe('`getIsExclusiveMin`', () => {
    it('is a function', () => {
      expect(getIsExclusiveMin)
        .to.be.a('function')
    })
  })

  describe('`getIsExclusiveMax`', () => {
    it('is a function', () => {
      expect(getIsExclusiveMax)
        .to.be.a('function')
    })
  })

  describe('`getStep`', () => {
    it('is a function', () => {
      expect(getStep)
        .to.be.a('function')
    })
  })

  describe('`getPattern`', () => {
    it('is a function', () => {
      expect(getPattern)
        .to.be.a('function')
    })
  })

  describe('`isArray()`', () => {
    describe('The argument is a string', () => {
      it('returns false', () => (
        expect(isArray(''))
          .to.be.false
      ))
    })

    describe('The argument is a number', () => {
      it('returns false', () => (
        expect(isArray(0))
          .to.be.false
      ))
    })

    describe('The argument is an array', () => {
      it('returns true', () => (
        expect(isArray([]))
          .to.be.true
      ))
    })

    describe('The argument is an object', () => {
      it('returns false', () => (
        expect(isArray({}))
          .to.be.false
      ))
    })

    describe('The argument is a boolean', () => {
      it('returns false', () => (
        expect(isArray(false))
          .to.be.false
      ))
    })

    describe('The argument is null', () => {
      it('returns false', () => (
        expect(isArray(null))
          .to.be.false
      ))
    })

    describe('The argument is undefined', () => {
      it('returns false', () => (
        expect(isArray())
          .to.be.false
      ))
    })
  })

  describe('`isObject()`', () => {
    describe('The argument is a string', () => {
      it('returns false', () => (
        expect(isObject(''))
          .to.be.false
      ))
    })

    describe('The argument is a number', () => {
      it('returns false', () => (
        expect(isObject(0))
          .to.be.false
      ))
    })

    describe('The argument is an array', () => {
      it('returns false', () => (
        expect(isObject([]))
          .to.be.false
      ))
    })

    describe('The argument is an object', () => {
      it('returns true', () => (
        expect(isObject({}))
          .to.be.true
      ))
    })

    describe('The argument is a boolean', () => {
      it('returns false', () => (
        expect(isObject(false))
          .to.be.false
      ))
    })

    describe('The argument is null', () => {
      it('returns false', () => (
        expect(isObject(null))
          .to.be.false
      ))
    })

    describe('The argument is undefined', () => {
      it('returns false', () => (
        expect(isObject())
          .to.be.false
      ))
    })
  })

  describe('`isPrimitive()`', () => {
    describe('The argument is a string', () => {
      it('returns true', () => (
        expect(isPrimitive(''))
          .to.be.true
      ))
    })

    describe('The argument is a number', () => {
      it('returns true', () => (
        expect(isPrimitive(0))
          .to.be.true
      ))
    })

    describe('The argument is an array', () => {
      it('returns false', () => (
        expect(isPrimitive([]))
          .to.be.false
      ))
    })

    describe('The argument is an object', () => {
      it('returns false', () => (
        expect(isPrimitive({}))
          .to.be.false
      ))
    })

    describe('The argument is a boolean', () => {
      it('returns true', () => (
        expect(isPrimitive(false))
          .to.be.true
      ))
    })

    describe('The argument is null', () => {
      it('returns true', () => (
        expect(isPrimitive(null))
          .to.be.true
      ))
    })

    describe('The argument is undefined', () => {
      it('returns true', () => (
        expect(isPrimitive())
          .to.be.true
      ))
    })
  })

  describe('`isSchema()`', () => {
    describe('The argument is an object', () => {
      it('returns false', () => (
        expect(isSchema({}))
          .to.be.false
      ))
    })

    describe('The argument is an object with a `type` field', () => {
      it('returns true', () => (
        expect(isSchema({ type: 'MOCK TYPE' }))
          .to.be.true
      ))
    })
  })

  describe('`isStringSchema()`', () => {
    describe('The argument is an object', () => {
      it('returns false', () => (
        expect(isStringSchema({}))
          .to.be.false
      ))
    })

    describe('The argument is an object with a `type` field of `string`', () => {
      it('returns true', () => (
        expect(isStringSchema({ type: 'string' }))
          .to.be.true
      ))
    })

    describe('The argument is an object with a `type` field of `number`', () => {
      it('returns false', () => (
        expect(isStringSchema({ type: 'number' }))
          .to.be.false
      ))
    })

    describe('The argument is an object with a `type` field of `array`', () => {
      it('returns false', () => (
        expect(isStringSchema({ type: 'array' }))
          .to.be.false
      ))
    })

    describe('The argument is an object with a `type` field of `object`', () => {
      it('returns false', () => (
        expect(isStringSchema({ type: 'object' }))
          .to.be.false
      ))
    })

    describe('The argument is an object with a `type` field of `boolean`', () => {
      it('returns false', () => (
        expect(isStringSchema({ type: 'boolean' }))
          .to.be.false
      ))
    })

    describe('The argument is an object with a `type` field of `null`', () => {
      it('returns false', () => (
        expect(isStringSchema({ type: 'null' }))
          .to.be.false
      ))
    })
  })

  describe('`isNumberSchema()`', () => {
    describe('The argument is an object', () => {
      it('returns false', () => (
        expect(isNumberSchema({}))
          .to.be.false
      ))
    })

    describe('The argument is an object with a `type` field of `string`', () => {
      it('returns false', () => (
        expect(isNumberSchema({ type: 'string' }))
          .to.be.false
      ))
    })

    describe('The argument is an object with a `type` field of `number`', () => {
      it('returns true', () => (
        expect(isNumberSchema({ type: 'number' }))
          .to.be.true
      ))
    })

    describe('The argument is an object with a `type` field of `array`', () => {
      it('returns false', () => (
        expect(isNumberSchema({ type: 'array' }))
          .to.be.false
      ))
    })

    describe('The argument is an object with a `type` field of `object`', () => {
      it('returns false', () => (
        expect(isNumberSchema({ type: 'object' }))
          .to.be.false
      ))
    })

    describe('The argument is an object with a `type` field of `boolean`', () => {
      it('returns false', () => (
        expect(isNumberSchema({ type: 'boolean' }))
          .to.be.false
      ))
    })

    describe('The argument is an object with a `type` field of `null`', () => {
      it('returns false', () => (
        expect(isNumberSchema({ type: 'null' }))
          .to.be.false
      ))
    })
  })

  describe('`isArraySchema()`', () => {
    describe('The argument is an object', () => {
      it('returns false', () => (
        expect(isArraySchema({}))
          .to.be.false
      ))
    })

    describe('The argument is an object with a `type` field of `string`', () => {
      it('returns false', () => (
        expect(isArraySchema({ type: 'string' }))
          .to.be.false
      ))
    })

    describe('The argument is an object with a `type` field of `number`', () => {
      it('returns false', () => (
        expect(isArraySchema({ type: 'number' }))
          .to.be.false
      ))
    })

    describe('The argument is an object with a `type` field of `array`', () => {
      it('returns true', () => (
        expect(isArraySchema({ type: 'array' }))
          .to.be.true
      ))
    })

    describe('The argument is an object with a `type` field of `object`', () => {
      it('returns false', () => (
        expect(isArraySchema({ type: 'object' }))
          .to.be.false
      ))
    })

    describe('The argument is an object with a `type` field of `boolean`', () => {
      it('returns false', () => (
        expect(isArraySchema({ type: 'boolean' }))
          .to.be.false
      ))
    })

    describe('The argument is an object with a `type` field of `null`', () => {
      it('returns false', () => (
        expect(isArraySchema({ type: 'null' }))
          .to.be.false
      ))
    })
  })

  describe('`isObjectSchema()`', () => {
    describe('The argument is an object', () => {
      it('returns false', () => (
        expect(isObjectSchema({}))
          .to.be.false
      ))
    })

    describe('The argument is an object with a `type` field of `string`', () => {
      it('returns false', () => (
        expect(isObjectSchema({ type: 'string' }))
          .to.be.false
      ))
    })

    describe('The argument is an object with a `type` field of `number`', () => {
      it('returns false', () => (
        expect(isObjectSchema({ type: 'number' }))
          .to.be.false
      ))
    })

    describe('The argument is an object with a `type` field of `array`', () => {
      it('returns false', () => (
        expect(isObjectSchema({ type: 'array' }))
          .to.be.false
      ))
    })

    describe('The argument is an object with a `type` field of `object`', () => {
      it('returns true', () => (
        expect(isObjectSchema({ type: 'object' }))
          .to.be.true
      ))
    })

    describe('The argument is an object with a `type` field of `boolean`', () => {
      it('returns false', () => (
        expect(isObjectSchema({ type: 'boolean' }))
          .to.be.false
      ))
    })

    describe('The argument is an object with a `type` field of `null`', () => {
      it('returns false', () => (
        expect(isObjectSchema({ type: 'null' }))
          .to.be.false
      ))
    })
  })

  describe('`isBooleanSchema()`', () => {
    describe('The argument is an object', () => {
      it('returns false', () => (
        expect(isBooleanSchema({}))
          .to.be.false
      ))
    })

    describe('The argument is an object with a `type` field of `string`', () => {
      it('returns false', () => (
        expect(isBooleanSchema({ type: 'string' }))
          .to.be.false
      ))
    })

    describe('The argument is an object with a `type` field of `number`', () => {
      it('returns false', () => (
        expect(isBooleanSchema({ type: 'number' }))
          .to.be.false
      ))
    })

    describe('The argument is an object with a `type` field of `array`', () => {
      it('returns false', () => (
        expect(isBooleanSchema({ type: 'array' }))
          .to.be.false
      ))
    })

    describe('The argument is an object with a `type` field of `object`', () => {
      it('returns false', () => (
        expect(isBooleanSchema({ type: 'object' }))
          .to.be.false
      ))
    })

    describe('The argument is an object with a `type` field of `boolean`', () => {
      it('returns true', () => (
        expect(isBooleanSchema({ type: 'boolean' }))
          .to.be.true
      ))
    })

    describe('The argument is an object with a `type` field of `null`', () => {
      it('returns false', () => (
        expect(isBooleanSchema({ type: 'null' }))
          .to.be.false
      ))
    })
  })

  describe('`isNullSchema()`', () => {
    describe('The argument is an object', () => {
      it('returns false', () => (
        expect(isNullSchema({}))
          .to.be.false
      ))
    })

    describe('The argument is an object with a `type` field of `string`', () => {
      it('returns false', () => (
        expect(isNullSchema({ type: 'string' }))
          .to.be.false
      ))
    })

    describe('The argument is an object with a `type` field of `number`', () => {
      it('returns false', () => (
        expect(isNullSchema({ type: 'number' }))
          .to.be.false
      ))
    })

    describe('The argument is an object with a `type` field of `array`', () => {
      it('returns false', () => (
        expect(isNullSchema({ type: 'array' }))
          .to.be.false
      ))
    })

    describe('The argument is an object with a `type` field of `object`', () => {
      it('returns false', () => (
        expect(isNullSchema({ type: 'object' }))
          .to.be.false
      ))
    })

    describe('The argument is an object with a `type` field of `boolean`', () => {
      it('returns false', () => (
        expect(isNullSchema({ type: 'boolean' }))
          .to.be.false
      ))
    })

    describe('The argument is an object with a `type` field of `null`', () => {
      it('returns true', () => (
        expect(isNullSchema({ type: 'null' }))
          .to.be.true
      ))
    })
  })

  describe('`getTitle()`', () => {
    describe('Schema has a `title` field', () => {
      describe('`title` is truthy', () => {
        it('returns a `title` object', () => {
          expect(getTitle({ title: 'MOCK TITLE' }))
            .to.eql({ title: 'MOCK TITLE' })
        })
      })

      describe('`title` is falsy', () => {
        it('returns an object', () => {
          expect(getTitle({ title: '' }))
            .to.eql({})
        })
      })
    })

    describe('Schema does not have a `title` field', () => {
      it('returns an object', () => {
        expect(getTitle({}))
          .to.eql({})
      })
    })
  })

  describe('`getDescription()`', () => {
    describe('Schema has a `description` field', () => {
      describe('`description` is truthy', () => {
        it('returns a `description` object', () => {
          expect(getDescription({ description: 'MOCK DESCRIPTION' }))
            .to.eql({ description: 'MOCK DESCRIPTION' })
        })
      })

      describe('`description` is falsy', () => {
        it('returns an object', () => {
          expect(getDescription({ description: '' }))
            .to.eql({})
        })
      })
    })

    describe('Schema does not have a `description` field', () => {
      it('returns an object', () => {
        expect(getDescription({}))
          .to.eql({})
      })
    })
  })

  describe('`getIsReadOnly()`', () => {
    describe('Schema has a `readOnly` field', () => {
      describe('`readOnly` is truthy', () => {
        it('returns a `readOnly` object', () => {
          expect(getIsReadOnly({ readOnly: true }))
            .to.eql({ readOnly: true })
        })
      })

      describe('`readOnly` is falsy', () => {
        it('returns an object', () => {
          expect(getIsReadOnly({ readOnly: false }))
            .to.eql({})
        })
      })
    })

    describe('Schema does not have a `readOnly` field', () => {
      it('returns an object', () => {
        expect(getIsReadOnly({}))
          .to.eql({})
      })
    })
  })

  describe('`getIsWriteOnly()`', () => {
    describe('Schema has a `writeOnly` field', () => {
      describe('`writeOnly` is truthy', () => {
        it('returns a `writeOnly` object', () => {
          expect(getIsWriteOnly({ writeOnly: true }))
            .to.eql({ writeOnly: true })
        })
      })

      describe('`writeOnly` is falsy', () => {
        it('returns an object', () => {
          expect(getIsWriteOnly({ writeOnly: false }))
            .to.eql({})
        })
      })
    })

    describe('Schema does not have a `writeOnly` field', () => {
      it('returns an object', () => {
        expect(getIsWriteOnly({}))
          .to.eql({})
      })
    })
  })

  describe('`getSelectedItems()`', () => {
    describe('Values has a field for the uri', () => {
      describe('The field is an array', () => {
        it('returns the array', () => {
          expect(getSelectedItems({
            '#/': [
              '1'
            ]
          }, '#/'))
            .to.eql([
              1
            ])
        })
      })

      describe('The field is not an array', () => {
        it('returns an array', () => {
          expect(getSelectedItems({ '#/': '1' }, '#/'))
            .to.eql([
              1
            ])
        })
      })
    })

    describe('Values does not have a field for the uri', () => {
      describe('Values has fields for the uri pattern', () => {
        it('returns an array', () => {
          expect(getSelectedItems({
            '#/0': '1',
            '#/1': '2',
            '#/2': '3'
          }, '#/'))
            .to.eql([
              1,
              2,
              3
            ])
        })
      })

      describe('Values does not have fields for the uri pattern', () => {
        it('returns an array', () => {
          expect(getSelectedItems({
            '#/one': '1',
            '#/two': '2',
            '#/three': '3'
          }, '#/'))
            .to.eql([])
        })
      })
    })
  })

  describe('`getSchemaFromItems()`', () => {
    describe('The schema has an `items` field', () => {
      describe('`items` is an array', () => {
        describe('The array has an item which matches a uri', () => {
          it('returns the schema', () => {
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
                  type: 'number',
                  enum: [
                    4,
                    5,
                    6
                  ]
                },
                {
                  type: 'number',
                  enum: [
                    7,
                    8,
                    9
                  ]
                }
              ]
            }

            return expect(getSchemaFromItems(schema, '#', '#/1'))
              .to.eql({
                type: 'number',
                enum: [
                  4,
                  5,
                  6
                ]
              })
          })
        })

        describe('The array does not have an item which matches the uri', () => {
          it('returns undefined', () => {
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
                  type: 'number',
                  enum: [
                    4,
                    5,
                    6
                  ]
                },
                {
                  type: 'number',
                  enum: [
                    7,
                    8,
                    9
                  ]
                }
              ]
            }

            return expect(getSchemaFromItems(schema, '#', '#/3'))
              .to.be.undefined
          })
        })
      })

      describe('`items` is an object', () => {
        it('returns the schema', () => {
          const schema = {
            type: 'array',
            items: {
              type: 'number',
              enum: [
                1,
                2,
                3
              ]
            }
          }

          return expect(getSchemaFromItems(schema))
            .to.eql({
              type: 'number',
              enum: [
                1,
                2,
                3
              ]
            })
        })
      })
    })

    describe('The schema does not have an `items` field', () => {
      it('returns undefined', () => {
        return expect(getSchemaFromItems({ type: 'array' }))
          .to.be.undefined
      })
    })
  })

  describe('`getSchemaFromProperties()`', () => {
    describe('The schema has a `properties` field', () => {
      describe('`properties` is an object', () => {
        describe('The object has a field which matches a uri', () => {
          it('returns the schema', () => {
            const schema = {
              type: 'object',
              properties: {
                one: {
                  type: 'number',
                  enum: [
                    1,
                    2,
                    3
                  ]
                },
                two: {
                  type: 'number',
                  enum: [
                    4,
                    5,
                    6
                  ]
                },
                three: {
                  type: 'number',
                  enum: [
                    7,
                    8,
                    9
                  ]
                }
              }
            }

            return expect(getSchemaFromProperties(schema, '#', '#/two'))
              .to.eql({
                type: 'number',
                enum: [
                  4,
                  5,
                  6
                ]
              })
          })
        })

        describe('The object does not have a field which matches the uri', () => {
          it('returns undefined', () => {
            const schema = {
              type: 'object',
              properties: {
                one: {
                  type: 'number',
                  enum: [
                    1,
                    2,
                    3
                  ]
                },
                two: {
                  type: 'number',
                  enum: [
                    4,
                    5,
                    6
                  ]
                },
                three: {
                  type: 'number',
                  enum: [
                    7,
                    8,
                    9
                  ]
                }
              }
            }

            return expect(getSchemaFromProperties(schema, '#', '#/four'))
              .to.be.undefined
          })
        })
      })
    })

    describe('The schema does not have a `properties` field', () => {
      it('returns undefined', () => {
        return expect(getSchemaFromProperties({ type: 'object' }))
          .to.be.undefined
      })
    })
  })

  describe('`getMetaProps()`', () => {
    describe('Params has a field for the uri', () => {
      it('returns an object', () => {
        expect(getMetaProps({ 'mock schema uri': { meta: { mockParamForUri: 'mock param for uri' } } }, 'mock schema uri'))
          .to.eql({ mockParamForUri: 'mock param for uri' })
      })
    })

    describe('Params does not have a field for the uri', () => {
      it('returns an object', () => {
        expect(getMetaProps({}, 'mock schema uri'))
          .to.eql({})
      })
    })
  })

  describe('`hasMetaDefaultValue()`', () => {
    describe('Schema has a `default` field', () => {
      describe('`default` is a primitive', () => {
        it('returns true', () => (
          expect(hasMetaDefaultValue({ default: 'MOCK DEFAULT' }))
            .to.be.true
        ))
      })

      describe('`default` is not a primitive', () => {
        it('returns false', () => (
          expect(hasMetaDefaultValue({ default: {} }))
            .to.be.false
        ))
      })
    })

    describe('Schema does not have a `default` field', () => {
      it('returns false', () => (
        expect(hasMetaDefaultValue({}))
          .to.be.false
      ))
    })
  })

  describe('`getMetaDefaultValue()`', () => {
    describe('Schema has a `default` field', () => {
      describe('`default` is a string', () => {
        it('returns a `defaultValue` object', () => {
          expect(getMetaDefaultValue({ default: 'MOCK DEFAULT' }))
            .to.eql({ defaultValue: 'MOCK DEFAULT' })
        })
      })

      describe('`default` is not a string', () => {
        it('returns a `defaultValue` object', () => {
          expect(getMetaDefaultValue({ default: false }))
            .to.eql({ defaultValue: 'false' })
        })
      })
    })

    describe('Schema does not have a `default` field', () => {
      it('returns an object', () => {
        expect(getMetaDefaultValue({}))
          .to.eql({})
      })
    })
  })

  describe('`hasMetaValue()`', () => {
    describe('Values has a field for the uri', () => {
      describe('The value of the field is a primitive', () => {
        it('returns true', () => (
          expect(hasMetaValue({ '#/': 'MOCK VALUE' }, '#/'))
            .to.be.true
        ))
      })

      describe('The value of the field is not a primitive', () => {
        it('returns false', () => (
          expect(hasMetaValue({ '#/': {} }, '#/'))
            .to.be.false
        ))
      })
    })

    describe('Values does not have a field for the uri', () => {
      describe('Schema has a `const` field', () => {
        describe('`const` is a primitive', () => {
          it('returns true', () => (
            expect(hasMetaValue({}, '#/', { const: 'MOCK CONST' }))
              .to.be.true
          ))
        })

        describe('`const` is not a primitive', () => {
          it('returns false', () => (
            expect(hasMetaValue({}, '#/', { const: {} }))
              .to.be.false
          ))
        })
      })

      describe('Schema does not have a `const` field', () => {
        it('returns an object', () => (
          expect(hasMetaValue({}))
            .to.be.false
        ))
      })
    })
  })

  describe('`getMetaValue()`', () => {
    describe('Values has a field for the uri', () => {
      describe('The value of the field is a string', () => {
        it('returns a `value` object', () => {
          expect(getMetaValue({ '#/': 'MOCK VALUE' }, '#/'))
            .to.eql({ value: 'MOCK VALUE' })
        })
      })

      describe('`value` is not a string', () => {
        it('returns a `value` object', () => {
          expect(getMetaValue({ '#/': 'false' }, '#/'))
            .to.eql({ value: 'false' })
        })
      })
    })

    describe('Values does not have a field for the uri', () => {
      describe('Schema has a `const` field', () => {
        describe('`const` is a primitive', () => {
          it('returns a `value` object', () => {
            expect(getMetaValue({}, '#/', { const: 'MOCK CONST' }))
              .to.eql({ value: 'MOCK CONST' })
          })
        })

        describe('`const` is not a primitive', () => {
          it('returns an object', () => {
            expect(getMetaValue({}, '#/', { const: {} }))
              .to.eql({})
          })
        })
      })

      describe('Schema does not have a `const` field', () => {
        it('returns an object', () => {
          expect(getMetaValue({}))
            .to.eql({})
        })
      })
    })
  })

  describe('`transformToValue()`', () => {
    describe('Schema is undefined', () => {
      it('returns undefined', () => {
        const schema = undefined

        return expect(transformToValue(schema))
          .to.be.undefined
      })
    })

    describe('Schema is a primitive', () => {
      describe('Schema is a string', () => {
        it('returns the string', () => {
          const schema = ''

          return expect(transformToValue(schema))
            .to.equal('')
        })
      })

      describe('Schema is a number', () => {
        it('returns the number', () => {
          const schema = 0

          return expect(transformToValue(schema))
            .to.equal(0)
        })
      })

      describe('Schema is a boolean', () => {
        it('returns the boolean', () => {
          const schema = false

          return expect(transformToValue(schema))
            .to.be.false
        })
      })

      describe('Schema is null', () => {
        it('returns null', () => {
          const schema = null

          return expect(transformToValue(schema))
            .to.be.null
        })
      })
    })

    describe('Schema is an array', () => {
      it('returns the array', () => {
        /**
         *  @type {ArrayLiteralType}
         */
        const schema = []

        expect(transformToValue(schema))
          .to.equal(schema)
      })
    })

    describe('Schema is an object', () => {
      describe('Schema has a `const` field', () => {
        it('returns the value', () => {
          const schema = { const: 'MOCK CONST' }

          expect(transformToValue(schema))
            .to.equal('MOCK CONST')
        })
      })

      describe('Schema does not have a `const` field', () => {
        describe('Schema has a `default` field', () => {
          it('returns the value', () => {
            const schema = { default: 'MOCK DEFAULT' }

            expect(transformToValue(schema))
              .to.equal('MOCK DEFAULT')
          })
        })

        describe('Schema does not have a `default` field', () => {
          it('returns the object', () => {
            const schema = {}

            expect(transformToValue(schema))
              .to.equal(schema)
          })
        })
      })
    })
  })

  describe('`getElementsFieldProps()`', () => {
    describe('Params has a `field` field for the uri', () => {
      it('returns a `field` object', () => {
        expect(getElementsFieldProps({ '#/': { elements: { field: { id: 'MOCK ID' } } } }, '#/'))
          .to.eql({ id: 'MOCK ID' })
      })
    })

    describe('Params does not have a `field` field for the uri', () => {
      it('returns an object', () => {
        expect(getElementsFieldProps({}, '#/'))
          .to.eql({})
      })
    })
  })

  describe('`getElementsFieldValue()`', () => {
    describe('Values has a field for the uri', () => {
      describe('The value of the field is a string', () => {
        it('returns a `value` object', () => {
          expect(getElementsFieldValue({ '#/': 'MOCK VALUE' }, '#/'))
            .to.eql({ value: 'MOCK VALUE' })
        })
      })

      describe('`value` is not a string', () => {
        it('returns a `value` object', () => {
          expect(getElementsFieldValue({ '#/': 'false' }, '#/'))
            .to.eql({ value: 'false' })
        })
      })
    })

    describe('Values does not have a field for the uri', () => {
      describe('Schema has a `const` field', () => {
        describe('`const` is a primitive', () => {
          it('returns a `value` object', () => {
            expect(getElementsFieldValue({}, '#/', { const: 'MOCK CONST' }))
              .to.eql({ value: 'MOCK CONST' })
          })
        })

        describe('`const` is not a primitive', () => {
          it('returns a `value` object', () => {
            expect(getElementsFieldValue({}, '#/', { const: {} }))
              .to.eql({})
          })
        })
      })

      describe('Schema does not have a `const` field', () => {
        describe('Schema has a `default` field', () => {
          describe('`default` is a string', () => {
            it('returns a `value` object', () => {
              expect(getElementsFieldValue({}, '#/', { default: 'MOCK DEFAULT' }))
                .to.eql({ value: 'MOCK DEFAULT' })
            })
          })

          describe('`default` is not a string', () => {
            it('returns a `value` object', () => {
              expect(getElementsFieldValue({}, '#/', { default: 'false' }))
                .to.eql({ value: 'false' })
            })
          })
        })

        describe('Schema does not have a `default` field', () => {
          it('returns an object', () => {
            expect(getElementsFieldValue({}))
              .to.eql({})
          })
        })
      })
    })
  })

  describe('`hasEnum()`', () => {
    describe('Schema has an `enum` field', () => {
      it('returns true', () => (
        expect(hasEnum({ enum: [] }))
          .to.be.true
      ))
    })

    describe('Schema does not have an `enum` field', () => {
      it('returns false', () => (
        expect(hasEnum({}))
          .to.be.false
      ))
    })
  })

  describe('`getEnum()`', () => {
    describe('Schema has an `enum` field', () => {
      it('returns an array', () => (
        expect(getEnum({ enum: [] }))
          .to.eql([])
      ))
    })

    describe('Schema does not have an `enum` field', () => {
      it('returns undefined', () => (
        expect(getEnum({}))
          .to.be.undefined
      ))
    })
  })

  describe('`hasAnyOf()`', () => {
    describe('Schema has an `anyOf` field', () => {
      it('returns true', () => (
        expect(hasAnyOf({ anyOf: [] }))
          .to.be.true
      ))
    })

    describe('Schema does not have an `anyOf` field', () => {
      it('returns false', () => (
        expect(hasAnyOf({}))
          .to.be.false
      ))
    })
  })

  describe('`getAnyOf()`', () => {
    describe('Schema has an `anyOf` field', () => {
      it('returns an array', () => {
        expect(getAnyOf({ anyOf: [] }))
          .to.eql([])
      })
    })

    describe('Schema does not have an `anyOf` field', () => {
      it('returns undefined', () => (
        expect(getAnyOf({}))
          .to.be.undefined
      ))
    })
  })

  describe('`hasOneOf()`', () => {
    describe('Schema has an `oneOf` field', () => {
      it('returns true', () => (
        expect(hasOneOf({ oneOf: [] }))
          .to.be.true
      ))
    })

    describe('Schema does not have an `oneOf` field', () => {
      it('returns false', () => (
        expect(hasOneOf({}))
          .to.be.false
      ))
    })
  })

  describe('`getOneOf()`', () => {
    describe('Schema has an `oneOf` field', () => {
      it('returns an array', () => {
        expect(getOneOf({ oneOf: [] }))
          .to.eql([])
      })
    })

    describe('Schema does not have an `oneOf` field', () => {
      it('returns undefined', () => (
        expect(getOneOf({}))
          .to.be.undefined
      ))
    })
  })

  describe('`hasAllOf()`', () => {
    describe('Schema has an `allOf` field', () => {
      it('returns true', () => (
        expect(hasAllOf({ allOf: [] }))
          .to.be.true
      ))
    })

    describe('Schema does not have an `allOf` field', () => {
      it('returns false', () => (
        expect(hasAllOf({}))
          .to.be.false
      ))
    })
  })

  describe('`getAllOf()`', () => {
    describe('Schema has an `allOf` field', () => {
      it('returns an array', () => {
        expect(getAllOf({ allOf: [] }))
          .to.eql([])
      })
    })

    describe('Schema does not have an `allOf` field', () => {
      it('returns undefined', () => (
        expect(getAllOf({}))
          .to.be.undefined
      ))
    })
  })

  describe('`hasConst()`', () => {
    describe('Schema has a `const` field', () => {
      it('returns true', () => (
        expect(hasConst({ const: 'MOCK CONST' }))
          .to.be.true
      ))
    })

    describe('Schema does not have a `const` field', () => {
      it('returns false', () => (
        expect(hasConst({}))
          .to.be.false
      ))
    })
  })

  describe('`getConst()`', () => {
    describe('Schema has a `const` field', () => {
      it('returns the value of the field', () => (
        expect(getConst({ const: 'MOCK CONST' }))
          .to.equal('MOCK CONST')
      ))
    })

    describe('Schema does not have a `const` field', () => {
      it('returns undefined', () => (
        expect(getConst({}))
          .to.be.undefined
      ))
    })
  })

  describe('`hasDefault()`', () => {
    describe('Schema has a `default` field', () => {
      it('returns true', () => (
        expect(hasDefault({ default: 'MOCK DEFAULT' }))
          .to.be.true
      ))
    })

    describe('Schema does not have a `default` field', () => {
      it('returns false', () => (
        expect(hasDefault({}))
          .to.be.false
      ))
    })
  })

  describe('`getDefault()`', () => {
    describe('Schema has a `default` field', () => {
      it('returns the value of the field', () => (
        expect(getDefault({ default: 'MOCK DEFAULT' }))
          .to.equal('MOCK DEFAULT')
      ))
    })

    describe('Schema does not have a `default` field', () => {
      it('returns undefined', () => (
        expect(getDefault({}))
          .to.be.undefined
      ))
    })
  })

  describe('`getUri()`', () => {
    describe('A `uri` is defined', () => {
      describe('A `resource` is defined', () => {
        it('returns a string', () => {
          expect(getUri('mock uri',
            'mock resource'))
            .to.equal('mock uri/mock resource')
        })
      })

      describe('A `resource` is not defined', () => {
        it('returns a string', () => {
          expect(getUri('mock uri'))
            .to.equal('mock uri/')
        })
      })
    })

    describe('A `uri` is not defined', () => {
      it('returns a string', () => {
        expect(getUri())
          .to.equal('#/')
      })
    })
  })

  describe('`getMin()`', () => {
    describe('Schema has a `minimum` field', () => {
      it('returns a `min` object', () => {
        expect(getMin({ minimum: 1 }))
          .to.eql({ min: 1 })
      })
    })

    describe('Schema does not have a `minimum` field', () => {
      it('returns an object', () => {
        expect(getMin({}))
          .to.eql({})
      })
    })
  })

  describe('`getMax()`', () => {
    describe('Schema has a `maximum` field', () => {
      it('returns a `max` object', () => {
        expect(getMax({ maximum: 1 }))
          .to.eql({ max: 1 })
      })
    })

    describe('Schema does not have a `maximum` field', () => {
      it('returns an object', () => {
        expect(getMax({}))
          .to.eql({})
      })
    })
  })

  describe('`getMinLength()`', () => {
    describe('Schema has a `minLength` field', () => {
      it('returns a `minLength` object', () => {
        expect(getMinLength({ minLength: 1 }))
          .to.eql({ minLength: 1 })
      })
    })

    describe('Schema does not have a `minLength` field', () => {
      it('returns an object', () => {
        expect(getMinLength({}))
          .to.eql({})
      })
    })
  })

  describe('`getMaxLength()`', () => {
    describe('Schema has a `maxLength` field', () => {
      it('returns a `maxLength` object', () => {
        expect(getMaxLength({ maxLength: 1 }))
          .to.eql({ maxLength: 1 })
      })
    })

    describe('Schema does not have a `maxLength` field', () => {
      it('returns an object', () => {
        expect(getMaxLength({}))
          .to.eql({})
      })
    })
  })

  describe('`getMinItems()`', () => {
    describe('Schema has a `minItems` field', () => {
      it('returns a `minItems` object', () => {
        expect(getMinItems({ minItems: 1 }))
          .to.eql({ minItems: 1 })
      })
    })

    describe('Schema does not have a `minItems` field', () => {
      it('returns an object', () => {
        expect(getMinItems({}))
          .to.eql({})
      })
    })
  })

  describe('`getMaxItems()`', () => {
    describe('Schema has a `maxItems` field', () => {
      it('returns a `maxItems` object', () => {
        expect(getMaxItems({ maxItems: 1 }))
          .to.eql({ maxItems: 1 })
      })
    })

    describe('Schema does not have a `maxItems` field', () => {
      it('returns an object', () => {
        expect(getMaxItems({}))
          .to.eql({})
      })
    })
  })

  describe('`getHasUniqueItems()`', () => {
    describe('Schema has an `uniqueItems` field', () => {
      it('returns a `hasUniqueItems` object', () => {
        expect(getHasUniqueItems({ uniqueItems: true }))
          .to.eql({ hasUniqueItems: true })
      })
    })

    describe('Schema does not have an `uniqueItems` field', () => {
      it('returns an object', () => {
        expect(getHasUniqueItems({}))
          .to.eql({})
      })
    })
  })

  describe('`getMinContains()`', () => {
    describe('Schema has a `minContains` field', () => {
      it('returns a `minContains` object', () => {
        expect(getMinContains({ minContains: 1 }))
          .to.eql({ minContains: 1 })
      })
    })

    describe('Schema does not have a `minContains` field', () => {
      it('returns an object', () => {
        expect(getMinContains({}))
          .to.eql({})
      })
    })
  })

  describe('`getMaxContains()`', () => {
    describe('Schema has a `maxContains` field', () => {
      it('returns a `maxContains` object', () => {
        expect(getMaxContains({ maxContains: 1 }))
          .to.eql({ maxContains: 1 })
      })
    })

    describe('Schema does not have a `maxContains` field', () => {
      it('returns an object', () => {
        expect(getMaxContains({}))
          .to.eql({})
      })
    })
  })

  describe('`getMinProperties()`', () => {
    describe('Schema has a `minProperties` field', () => {
      it('returns a `minProperties` object', () => {
        expect(getMinProperties({ minProperties: 1 }))
          .to.eql({ minProperties: 1 })
      })
    })

    describe('Schema does not have a `minProperties` field', () => {
      it('returns an object', () => {
        expect(getMinProperties({}))
          .to.eql({})
      })
    })
  })

  describe('`getMaxProperties()`', () => {
    describe('Schema has a `maxProperties` field', () => {
      it('returns a `maxProperties` object', () => {
        expect(getMaxProperties({ maxProperties: 1 }))
          .to.eql({ maxProperties: 1 })
      })
    })

    describe('Schema does not have a `maxProperties` field', () => {
      it('returns an object', () => {
        expect(getMaxProperties({}))
          .to.eql({})
      })
    })
  })

  describe('`getIsExclusiveMin()`', () => {
    describe('Schema has an `exclusiveMinimum` field', () => {
      it('returns an `isExclusiveMin` object', () => {
        expect(getIsExclusiveMin({ exclusiveMinimum: true }))
          .to.eql({ isExclusiveMin: true })
      })
    })

    describe('Schema does not have an `exclusiveMinimum` field', () => {
      it('returns an object', () => {
        expect(getIsExclusiveMin({}))
          .to.eql({})
      })
    })
  })

  describe('`getIsExclusiveMax()`', () => {
    describe('Schema has an `exclusiveMaximum` field', () => {
      it('returns an `isExclusiveMax` object', () => {
        expect(getIsExclusiveMax({ exclusiveMaximum: true }))
          .to.eql({ isExclusiveMax: true })
      })
    })

    describe('Schema does not have an `exclusiveMaximum` field', () => {
      it('returns an object', () => {
        expect(getIsExclusiveMax({}))
          .to.eql({})
      })
    })
  })

  describe('`getPattern()`', () => {
    describe('Schema has a `pattern` field', () => {
      it('returns a `pattern` object', () => {
        expect(getPattern({ pattern: /.*/ig }))
          .to.eql({ pattern: /.*/ig })
      })
    })

    describe('Schema does not have a `pattern` field', () => {
      it('returns an object', () => {
        expect(getPattern({}))
          .to.eql({})
      })
    })
  })

  describe('`getStep()`', () => {
    describe('Schema has a `multipleOf` field', () => {
      it('returns a `step` object', () => {
        expect(getStep({ multipleOf: 1 }))
          .to.eql({ step: 1 })
      })
    })

    describe('Schema does not have a `multipleOf` field', () => {
      it('returns an object', () => {
        expect(getStep({}))
          .to.eql({})
      })
    })
  })
})
