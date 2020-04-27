import debug from 'debug'

import {
  isArray,
  isObject,

  isArraySchema,
  isObjectSchema,

  getSelectedItemsForParentUri,
  getSelectedItemsForUri,

  getTitle,
  getDescription,

  hasEnum,
  getEnum,
  hasAnyOf,
  hasOneOf,
  hasAllOf,

  normaliseUri,

  isParentUri,

  getUri,
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
  getStep,

  getMetaProps,
  getMetaDefaultValue,
  getMetaValue,

  getElementsProps,
  getElementsFieldsProps,
  getElementsFieldPropsForEnum,
  getElementsFieldPropsForAnyOf,
  getElementsFieldPropsForOneOf,
  getElementsFieldPropsForAllOf,
  getElementsFieldProps,
  getElementsFieldValue
} from 'shinkansen-transmission/transmission/common'

const log = debug('shinkansen-transmission:to-zashiki:schema')

export function mapTransformByIndex (rootSchema, values, params) {
  log('mapTransformByIndex')

  return function map (schema, index) {
    return getTransformByIndex(schema, rootSchema, values, { ...params, index })

    /*
    if (hasEnum(schema)) {
      return getTransformByIndexForEnum(schema, rootSchema, values, { ...params, index })
    } else {
      if (hasAnyOf(schema)) {
        return getTransformByIndexForAnyOf(schema, rootSchema, values, { ...params, index })
      } else {
        if (hasOneOf(schema)) {
          return getTransformByIndexForOneOf(schema, rootSchema, values, { ...params, index })
        }
      }
    }

    log('mapTransformByIndex (`value` `defaultValue`)')

    *//*
     *  Schemas without `enum`, `anyOf`, or `oneOf` do not have selected items
     *//*

    *//*
     *  Schemas may be required
     *//*

    *//*
     *  Schemas may have a value
     *//*

    *//*
     *  Array schemas do not have a value
     *//*

    *//*
     *  Object schemas do not have a value
     *//*

    return transformByIndex(schema, rootSchema, values, { ...params, index })
    */
  }
}

export function mapTransformByKey (rootSchema, values, { required = [], ...params }) {
  log('mapTransformByKey')

  return function map ([key, schema]) {
    return getTransformByKey(schema, rootSchema, values, { ...params, isRequired: required.includes(key), key })

    /*
    if (hasEnum(schema)) {
      return getTransformByKeyForEnum(schema, rootSchema, values, { ...params, isRequired, key })
    } else {
      if (hasAnyOf(schema)) {
        return getTransformByKeyForAnyOf(schema, rootSchema, values, { ...params, isRequired, key })
      } else {
        if (hasOneOf(schema)) {
          return getTransformByKeyForOneOf(schema, rootSchema, values, { ...params, isRequired, key })
        }
      }
    }

    log('mapTransformByKey (`value` `defaultValue`)')

    *//*
     *  Schemas without `enum`, `anyOf`, or `oneOf` do not have selected items
     *//*

    *//*
     *  Schemas may be required
     *//*

    *//*
     *  Schemas may have a value
     *//*

    *//*
     *  Array schemas do not have a value
     *//*

    *//*
     *  Object schemas do not have a value
     *//*

    return transformByKey(schema, rootSchema, values, { ...params, key })
    */
  }
}

export function mapTransformNullByIndex (rootSchema, values, params) {
  log('mapTransformNullByIndex')

  return function map (schema, index) {
    return transformNullByIndex(schema, rootSchema, values, { ...params, index })
  }
}

export function mapTransformBooleanByIndex (rootSchema, values, params) {
  log('mapTransformBooleanByIndex')

  return function map (schema, index) {
    return transformBooleanByIndex(schema, rootSchema, values, { ...params, index })
  }
}

export function mapTransformObjectByIndex (rootSchema, values, params) {
  log('mapTransformObjectByIndex')

  return function map (schema, index) {
    return transformObjectByIndex(schema, rootSchema, values, { ...params, index })
  }
}

export function mapTransformArrayByIndex (rootSchema, values, params) {
  log('mapTransformArrayByIndex')

  return function map (schema, index) {
    return transformArrayByIndex(schema, rootSchema, values, { ...params, index })
  }
}

export function mapTransformNumberByIndex (rootSchema, values, params) {
  log('mapTransformNumberByIndex')

  return function map (schema, index) {
    return transformNumberByIndex(schema, rootSchema, values, { ...params, index })
  }
}

export function mapTransformStringByIndex (rootSchema, values, params) {
  log('mapTransformStringByIndex')

  return function map (schema, index) {
    return transformStringByIndex(schema, rootSchema, values, { ...params, index })
  }
}

/*
 *  "enum" is look-up
 *
 *  "enum" gets selected items
 *
 *  "enum" does not get value or default value
 */
export function renderNullForEnum (schema, values, params) {
  log('renderNullForEnum')

  const {
    uri = '#/'
  } = params

  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fieldProps = getElementsFieldPropsForEnum(params, uri)

  return {
    meta: {
      ...(isParentUri(parentUri, uri) ? { parentUri } : {}),
      uri,
      type: 'null',
      ...metaProps
    },
    elements: {
      ...title,
      ...description,
      enum: {
        ...fieldProps,
        id: uri
      }
    }
  }
}

/*
 *  "anyOf" is look-up
 *
 *  "anyOf" gets selected items
 *
 *  "anyOf" does not get value or default value
 */
export function renderNullForAnyOf (schema, values, params) {
  log('renderNullForAnyOf')

  const {
    uri = '#/'
  } = params

  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fieldProps = getElementsFieldPropsForAnyOf(params, uri)

  return {
    meta: {
      ...(isParentUri(parentUri, uri) ? { parentUri } : {}),
      uri,
      type: 'null',
      ...metaProps
    },
    elements: {
      ...title,
      ...description,
      anyOf: {
        ...fieldProps,
        id: uri
      }
    }
  }
}

/*
 *  "oneOf" is look-up
 *
 *  "oneOf" gets selected items
 *
 *  "oneOf" does not get value or default value
 */
export function renderNullForOneOf (schema, values, params) {
  log('renderNullForOneOf')

  const {
    uri = '#/'
  } = params

  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fieldProps = getElementsFieldPropsForOneOf(params, uri)

  return {
    meta: {
      ...(isParentUri(parentUri, uri) ? { parentUri } : {}),
      uri,
      type: 'null',
      ...metaProps
    },
    elements: {
      ...title,
      ...description,
      oneOf: {
        ...fieldProps,
        id: uri
      }
    }
  }
}

/*
 *  "allOf" is not look-up
 *
 *  "allOf" does not get selected items
 *
 *  "allOf" gets value and default value
 */
export function renderNullForAllOf (schema, values, params) {
  log('renderNullForAllOf')

  const {
    uri = '#/'
  } = params

  const metaDefaultValue = getMetaDefaultValue(schema, uri)
  const metaValue = getMetaValue(values, uri, schema)
  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fieldValue = getElementsFieldValue(values, uri, schema)
  const fieldProps = getElementsFieldProps(params, uri)

  let selectedItems
  if (isParentUri(parentUri, uri)) {
    ({
      [parentUri]: {
        meta: {
          selectedItems
        } = {}
      } = {}
    } = params)
  }

  return {
    meta: {
      ...(isParentUri(parentUri, uri) ? { parentUri } : {}),
      uri,
      type: 'null',
      ...(isArray(selectedItems) ? { selectedItems } : {}),
      ...metaDefaultValue,
      ...metaValue,
      ...metaProps
    },
    elements: {
      ...title,
      ...description,
      field: {
        ...(isArray(selectedItems) ? { selectedItems } : {}),
        ...fieldValue,
        ...fieldProps,
        id: uri
      }
    }
  }
}

export function renderNull (schema, values, params) {
  log('renderNull')

  const {
    uri = '#/'
  } = params

  const metaDefaultValue = getMetaDefaultValue(schema, uri)
  const metaValue = getMetaValue(values, uri, schema)
  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fieldValue = getElementsFieldValue(values, uri, schema)
  const fieldProps = getElementsFieldProps(params, uri)

  let selectedItems
  if (isParentUri(parentUri, uri)) {
    ({
      [parentUri]: {
        meta: {
          selectedItems
        } = {}
      } = {}
    } = params)
  }

  return {
    meta: {
      ...(isParentUri(parentUri, uri) ? { parentUri } : {}),
      uri,
      type: 'null',
      ...(isArray(selectedItems) ? { selectedItems } : {}),
      ...metaDefaultValue,
      ...metaValue,
      ...metaProps
    },
    elements: {
      ...title,
      ...description,
      field: {
        ...(isArray(selectedItems) ? { selectedItems } : {}),
        ...fieldValue,
        ...fieldProps,
        id: uri
      }
    }
  }
}

/*
 *  "enum" is look-up
 *
 *  "enum" gets selected items
 *
 *  "enum" does not get value or default value
 */
export function renderBooleanForEnum (schema, values, params) {
  log('renderBooleanForEnum')

  const {
    uri = '#/'
  } = params

  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fieldProps = getElementsFieldPropsForEnum(params, uri)

  return {
    meta: {
      ...(isParentUri(parentUri, uri) ? { parentUri } : {}),
      uri,
      type: 'boolean',
      ...metaProps
    },
    elements: {
      ...title,
      ...description,
      enum: {
        ...fieldProps,
        id: uri
      }
    }
  }
}

/*
 *  "anyOf" is look-up
 *
 *  "anyOf" gets selected items
 *
 *  "anyOf" does not get value or default value
 */
export function renderBooleanForAnyOf (schema, values, params) {
  log('renderBooleanForAnyOf')

  const {
    uri = '#/'
  } = params

  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fieldProps = getElementsFieldPropsForAnyOf(params, uri)

  return {
    meta: {
      ...(isParentUri(parentUri, uri) ? { parentUri } : {}),
      uri,
      type: 'boolean',
      ...metaProps
    },
    elements: {
      ...title,
      ...description,
      anyOf: {
        ...fieldProps,
        id: uri
      }
    }
  }
}

/*
 *  "oneOf" is look-up
 *
 *  "oneOf" gets selected items
 *
 *  "oneOf" does not get value or default value
 */
export function renderBooleanForOneOf (schema, values, params) {
  log('renderBooleanForAnyOf')

  const {
    uri = '#/'
  } = params

  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fieldProps = getElementsFieldPropsForOneOf(params, uri)

  return {
    meta: {
      ...(isParentUri(parentUri, uri) ? { parentUri } : {}),
      uri,
      type: 'boolean',
      ...metaProps
    },
    elements: {
      ...title,
      ...description,
      oneOf: {
        ...fieldProps,
        id: uri
      }
    }
  }
}

/*
 *  "allOf" is not look-up
 *
 *  "allOf" does not get selected items
 *
 *  "allOf" gets value and default value
 */
export function renderBooleanForAllOf (schema, values, params) {
  log('renderBooleanForAllOf')

  const {
    uri = '#/'
  } = params

  const metaDefaultValue = getMetaDefaultValue(schema, uri)
  const metaValue = getMetaValue(values, uri, schema)
  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fieldValue = getElementsFieldValue(values, uri, schema)
  const fieldProps = getElementsFieldProps(params, uri)

  let selectedItems
  if (isParentUri(parentUri, uri)) {
    ({
      [parentUri]: {
        meta: {
          selectedItems
        } = {}
      } = {}
    } = params)
  }

  return {
    meta: {
      ...(isParentUri(parentUri, uri) ? { parentUri } : {}),
      uri,
      type: 'boolean',
      ...(isArray(selectedItems) ? { selectedItems } : {}),
      ...metaDefaultValue,
      ...metaValue,
      ...metaProps
    },
    elements: {
      ...title,
      ...description,
      field: {
        ...(isArray(selectedItems) ? { selectedItems } : {}),
        ...fieldValue,
        ...fieldProps,
        id: uri
      }
    }
  }
}

export function renderBoolean (schema, values, params) {
  log('renderBoolean')

  const {
    uri = '#/'
  } = params

  const metaDefaultValue = getMetaDefaultValue(schema, uri)
  const metaValue = getMetaValue(values, uri, schema)
  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fieldValue = getElementsFieldValue(values, uri, schema)
  const fieldProps = getElementsFieldProps(params, uri)

  let selectedItems
  if (isParentUri(parentUri, uri)) {
    ({
      [parentUri]: {
        meta: {
          selectedItems
        } = {}
      } = {}
    } = params)
  }

  return {
    meta: {
      ...(isParentUri(parentUri, uri) ? { parentUri } : {}),
      uri,
      type: 'boolean',
      ...(isArray(selectedItems) ? { selectedItems } : {}),
      ...metaDefaultValue,
      ...metaValue,
      ...metaProps
    },
    elements: {
      ...title,
      ...description,
      field: {
        ...(isArray(selectedItems) ? { selectedItems } : {}),
        ...fieldValue,
        ...fieldProps,
        id: uri
      }
    }
  }
}

/*
 *  "enum" is look-up
 *
 *  "enum" gets selected items
 *
 *  "enum" does not get value or default value
 */
export function renderObjectForEnum (schema, values, params) {
  log('renderObjectForEnum')

  const {
    uri = '#/'
  } = params

  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  const minProperties = getMinProperties(schema)
  const maxProperties = getMaxProperties(schema)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fieldProps = getElementsFieldPropsForEnum(params, uri)

  return {
    meta: {
      ...(isParentUri(parentUri, uri) ? { parentUri } : {}),
      uri,
      type: 'object',
      ...minProperties,
      ...maxProperties,
      ...metaProps
    },
    elements: {
      ...title,
      ...description,
      enum: {
        ...minProperties,
        ...maxProperties,
        ...fieldProps,
        id: uri
      }
    }
  }
}

/*
 *  "anyOf" is look-up
 *
 *  "anyOf" gets selected items
 *
 *  "anyOf" does not get value or default value
 */
export function renderObjectForAnyOf (schema, values, params) {
  log('renderObjectForAnyOf')

  const {
    uri = '#/'
  } = params

  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  const minProperties = getMinProperties(schema)
  const maxProperties = getMaxProperties(schema)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fieldProps = getElementsFieldPropsForAnyOf(params, uri)

  return {
    meta: {
      ...(isParentUri(parentUri, uri) ? { parentUri } : {}),
      uri,
      type: 'object',
      ...minProperties,
      ...maxProperties,
      ...metaProps
    },
    elements: {
      ...title,
      ...description,
      anyOf: {
        ...minProperties,
        ...maxProperties,
        ...fieldProps,
        id: uri
      }
    }
  }
}

/*
 *  "oneOf" is look-up
 *
 *  "oneOf" gets selected items
 *
 *  "oneOf" does not get value or default value
 */
export function renderObjectForOneOf (schema, values, params) {
  log('renderObjectForOneOf')

  const {
    uri = '#/'
  } = params

  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  const minProperties = getMinProperties(schema)
  const maxProperties = getMaxProperties(schema)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fieldProps = getElementsFieldPropsForOneOf(params, uri)

  return {
    meta: {
      ...(isParentUri(parentUri, uri) ? { parentUri } : {}),
      uri,
      type: 'object',
      ...minProperties,
      ...maxProperties,
      ...metaProps
    },
    elements: {
      ...title,
      ...description,
      oneOf: {
        ...minProperties,
        ...maxProperties,
        ...fieldProps,
        id: uri
      }
    }
  }
}

/*
 *  "allOf" is not look-up
 *
 *  "allOf" does not get selected items
 *
 *  "allOf" gets value and default value
 */
export function renderObjectForAllOf (schema, values, params) {
  log('renderObjectForAllOf')

  const {
    uri = '#/'
  } = params

  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  const minProperties = getMinProperties(schema)
  const maxProperties = getMaxProperties(schema)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fieldProps = getElementsFieldPropsForAllOf(params, uri)

  return {
    meta: {
      ...(isParentUri(parentUri, uri) ? { parentUri } : {}),
      uri,
      type: 'object',
      ...minProperties,
      ...maxProperties,
      ...metaProps
    },
    elements: {
      ...title,
      ...description,
      field: {
        ...minProperties,
        ...maxProperties,
        ...fieldProps,
        id: uri
      }
    }
  }
}

export function renderObject (schema, values, params) {
  log('renderObject')

  const {
    uri = '#/'
  } = params

  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  const minProperties = getMinProperties(schema)
  const maxProperties = getMaxProperties(schema)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fields = getElementsFieldsProps(params, uri)

  return {
    meta: {
      ...(isParentUri(parentUri, uri) ? { parentUri } : {}),
      uri,
      type: 'object',
      ...minProperties,
      ...maxProperties,
      ...metaProps
    },
    elements: {
      ...title,
      ...description,
      fields
    }
  }
}

/*
 *  "enum" is look-up
 *
 *  "enum" gets selected items
 *
 *  "enum" does not get value or default value
 */
export function renderArrayForEnum (schema, values, params) {
  log('renderArrayForEnum')

  const {
    uri = '#/'
  } = params

  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  const minItems = getMinItems(schema)
  const maxItems = getMaxItems(schema)
  const hasUniqueItems = getHasUniqueItems(schema)
  const maxContains = getMaxContains(schema)
  const minContains = getMinContains(schema)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fieldProps = getElementsFieldPropsForEnum(params, uri)

  return {
    meta: {
      ...(isParentUri(parentUri, uri) ? { parentUri } : {}),
      uri,
      type: 'array',
      ...minItems,
      ...maxItems,
      ...hasUniqueItems,
      ...maxContains,
      ...minContains,
      ...metaProps
    },
    elements: {
      ...title,
      ...description,
      enum: {
        ...minItems,
        ...maxItems,
        ...hasUniqueItems,
        ...maxContains,
        ...minContains,
        ...fieldProps,
        id: uri
      }
    }
  }
}

/*
 *  "anyOf" is look-up
 *
 *  "anyOf" gets selected items
 *
 *  "anyOf" does not get value or default value
 */
export function renderArrayForAnyOf (schema, values, params) {
  log('renderArrayForAnyOf')

  const {
    uri = '#/'
  } = params

  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  const minItems = getMinItems(schema)
  const maxItems = getMaxItems(schema)
  const hasUniqueItems = getHasUniqueItems(schema)
  const maxContains = getMaxContains(schema)
  const minContains = getMinContains(schema)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fieldProps = getElementsFieldPropsForAnyOf(params, uri)

  return {
    meta: {
      ...(isParentUri(parentUri, uri) ? { parentUri } : {}),
      uri,
      type: 'array',
      ...minItems,
      ...maxItems,
      ...hasUniqueItems,
      ...maxContains,
      ...minContains,
      ...metaProps
    },
    elements: {
      ...title,
      ...description,
      anyOf: {
        ...minItems,
        ...maxItems,
        ...hasUniqueItems,
        ...maxContains,
        ...minContains,
        ...fieldProps,
        id: uri
      }
    }
  }
}

/*
 *  "oneOf" is look-up
 *
 *  "oneOf" gets selected items
 *
 *  "oneOf" does not get value or default value
 */
export function renderArrayForOneOf (schema, values, params) {
  log('renderArrayForOneOf')

  const {
    uri = '#/'
  } = params

  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  const minItems = getMinItems(schema)
  const maxItems = getMaxItems(schema)
  const hasUniqueItems = getHasUniqueItems(schema)
  const maxContains = getMaxContains(schema)
  const minContains = getMinContains(schema)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fieldProps = getElementsFieldPropsForOneOf(params, uri)

  return {
    meta: {
      ...(isParentUri(parentUri, uri) ? { parentUri } : {}),
      uri,
      type: 'array',
      ...minItems,
      ...maxItems,
      ...hasUniqueItems,
      ...maxContains,
      ...minContains,
      ...metaProps
    },
    elements: {
      ...title,
      ...description,
      oneOf: {
        ...minItems,
        ...maxItems,
        ...hasUniqueItems,
        ...maxContains,
        ...minContains,
        ...fieldProps,
        id: uri
      }
    }
  }
}

/*
 *  "allOf" is not look-up
 *
 *  "allOf" does not get selected items
 *
 *  "allOf" gets value and default value
 */
export function renderArrayForAllOf (schema, values, params) {
  log('renderArrayForAllOf')

  const {
    uri = '#/'
  } = params

  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  const minItems = getMinItems(schema)
  const maxItems = getMaxItems(schema)
  const hasUniqueItems = getHasUniqueItems(schema)
  const maxContains = getMaxContains(schema)
  const minContains = getMinContains(schema)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fieldProps = getElementsFieldPropsForAllOf(params, uri)

  return {
    meta: {
      ...(isParentUri(parentUri, uri) ? { parentUri } : {}),
      uri,
      type: 'array',
      ...minItems,
      ...maxItems,
      ...hasUniqueItems,
      ...maxContains,
      ...minContains,
      ...metaProps
    },
    elements: {
      ...title,
      ...description,
      field: {
        ...minItems,
        ...maxItems,
        ...hasUniqueItems,
        ...maxContains,
        ...minContains,
        ...fieldProps,
        id: uri
      }
    }
  }
}

export function renderArray (schema, values, params) {
  log('renderArray')

  const {
    uri = '#/'
  } = params

  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  const minItems = getMinItems(schema)
  const maxItems = getMaxItems(schema)
  const hasUniqueItems = getHasUniqueItems(schema)
  const maxContains = getMaxContains(schema)
  const minContains = getMinContains(schema)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fields = getElementsFieldsProps(params, uri)

  return {
    meta: {
      ...(isParentUri(parentUri, uri) ? { parentUri } : {}),
      uri,
      type: 'array',
      ...minItems,
      ...maxItems,
      ...hasUniqueItems,
      ...maxContains,
      ...minContains,
      ...metaProps
    },
    elements: {
      ...title,
      ...description,
      fields
    }
  }
}

/*
 *  "enum" is look-up
 *
 *  "enum" gets selected items
 *
 *  "enum" does not get value or default value
 */
export function renderNumberForEnum (schema, values, params) {
  log('renderNumberForEnum')

  const {
    uri = '#/'
  } = params

  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  const isExclusiveMin = getIsExclusiveMin(schema)
  const isExclusiveMax = getIsExclusiveMax(schema)

  const min = getMin(schema)
  const max = getMax(schema)
  const step = getStep(schema)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fieldProps = getElementsFieldPropsForEnum(params, uri)

  return {
    meta: {
      ...(isParentUri(parentUri, uri) ? { parentUri } : {}),
      uri,
      type: 'number',
      ...isExclusiveMin,
      ...isExclusiveMax,
      ...min,
      ...max,
      ...step,
      ...metaProps
    },
    elements: {
      ...title,
      ...description,
      enum: {
        ...min,
        ...max,
        ...step,
        ...fieldProps,
        id: uri
      }
    }
  }
}

/*
 *  "anyOf" is look-up
 *
 *  "anyOf" gets selected items
 *
 *  "anyOf" does not get value or default value
 */
export function renderNumberForAnyOf (schema, values, params) {
  log('renderNumberForAnyOf')

  const {
    uri = '#/'
  } = params

  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  const isExclusiveMin = getIsExclusiveMin(schema)
  const isExclusiveMax = getIsExclusiveMax(schema)

  const min = getMin(schema)
  const max = getMax(schema)
  const step = getStep(schema)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fieldProps = getElementsFieldPropsForAnyOf(params, uri)

  return {
    meta: {
      ...(isParentUri(parentUri, uri) ? { parentUri } : {}),
      uri,
      type: 'number',
      ...isExclusiveMin,
      ...isExclusiveMax,
      ...min,
      ...max,
      ...step,
      ...metaProps
    },
    elements: {
      ...title,
      ...description,
      anyOf: {
        ...min,
        ...max,
        ...step,
        ...fieldProps,
        id: uri
      }
    }
  }
}

/*
 *  "oneOf" is look-up
 *
 *  "oneOf" gets selected items
 *
 *  "oneOf" does not get value or default value
 */
export function renderNumberForOneOf (schema, values, params) {
  log('renderNumberForOneOf')

  const {
    uri = '#/'
  } = params

  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  const isExclusiveMin = getIsExclusiveMin(schema)
  const isExclusiveMax = getIsExclusiveMax(schema)

  const min = getMin(schema)
  const max = getMax(schema)
  const step = getStep(schema)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fieldProps = getElementsFieldPropsForOneOf(params, uri)

  return {
    meta: {
      ...(isParentUri(parentUri, uri) ? { parentUri } : {}),
      uri,
      type: 'number',
      ...isExclusiveMin,
      ...isExclusiveMax,
      ...min,
      ...max,
      ...step,
      ...metaProps
    },
    elements: {
      ...title,
      ...description,
      oneOf: {
        ...min,
        ...max,
        ...step,
        ...fieldProps,
        id: uri
      }
    }
  }
}

/*
 *  "allOf" is not look-up
 *
 *  "allOf" does not get selected items
 *
 *  "allOf" gets value and default value
 */
export function renderNumberForAllOf (schema, values, params) {
  log('renderNumberForAllOf')

  const {
    uri = '#/'
  } = params

  const metaDefaultValue = getMetaDefaultValue(schema, uri)
  const metaValue = getMetaValue(values, uri, schema)
  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  const min = getMin(schema)
  const max = getMax(schema)
  const step = getStep(schema)

  const isExclusiveMin = getIsExclusiveMin(schema)
  const isExclusiveMax = getIsExclusiveMax(schema)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fieldValue = getElementsFieldValue(values, uri, schema)
  const fieldProps = getElementsFieldProps(params, uri)

  let selectedItems
  if (isParentUri(parentUri, uri)) {
    ({
      [parentUri]: {
        meta: {
          selectedItems
        } = {}
      } = {}
    } = params)
  }

  return {
    meta: {
      ...(isParentUri(parentUri, uri) ? { parentUri } : {}),
      uri,
      type: 'number',
      ...isExclusiveMin,
      ...isExclusiveMax,
      ...min,
      ...max,
      ...step,
      ...(isArray(selectedItems) ? { selectedItems } : {}),
      ...metaDefaultValue,
      ...metaValue,
      ...metaProps
    },
    elements: {
      ...title,
      ...description,
      field: {
        ...min,
        ...max,
        ...step,
        ...(isArray(selectedItems) ? { selectedItems } : {}),
        ...fieldValue,
        ...fieldProps,
        id: uri
      }
    }
  }
}

export function renderNumber (schema, values, params) {
  log('renderNumber')

  const {
    uri = '#/'
  } = params

  const metaDefaultValue = getMetaDefaultValue(schema, uri)
  const metaValue = getMetaValue(values, uri, schema)
  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  const min = getMin(schema)
  const max = getMax(schema)
  const step = getStep(schema)

  const isExclusiveMin = getIsExclusiveMin(schema)
  const isExclusiveMax = getIsExclusiveMax(schema)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fieldValue = getElementsFieldValue(values, uri, schema)
  const fieldProps = getElementsFieldProps(params, uri)

  let selectedItems
  if (isParentUri(parentUri, uri)) {
    ({
      [parentUri]: {
        meta: {
          selectedItems
        } = {}
      } = {}
    } = params)
  }

  return {
    meta: {
      ...(isParentUri(parentUri, uri) ? { parentUri } : {}),
      uri,
      type: 'number',
      ...isExclusiveMin,
      ...isExclusiveMax,
      ...min,
      ...max,
      ...step,
      ...(isArray(selectedItems) ? { selectedItems } : {}),
      ...metaDefaultValue,
      ...metaValue,
      ...metaProps
    },
    elements: {
      ...title,
      ...description,
      field: {
        ...min,
        ...max,
        ...step,
        ...(isArray(selectedItems) ? { selectedItems } : {}),
        ...fieldValue,
        ...fieldProps,
        id: uri
      }
    }
  }
}

/*
 *  "enum" is look-up
 *
 *  "enum" gets selected items
 *
 *  "enum" does not get value or default value
 */
export function renderStringForEnum (schema, values, params) {
  log('renderStringForEnum')

  const {
    uri = '#/'
  } = params

  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  const minLength = getMinLength(schema)
  const maxLength = getMaxLength(schema)
  const pattern = getPattern(schema)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fieldProps = getElementsFieldPropsForEnum(params, uri)

  return {
    meta: {
      ...(isParentUri(parentUri, uri) ? { parentUri } : {}),
      uri,
      type: 'string',
      ...minLength,
      ...maxLength,
      ...pattern,
      ...metaProps
    },
    elements: {
      ...title,
      ...description,
      enum: {
        ...minLength,
        ...maxLength,
        ...pattern,
        ...fieldProps,
        id: uri
      }
    }
  }
}

/*
 *  "anyOf" is look-up
 *
 *  "anyOf" gets selected items
 *
 *  "anyOf" does not get value or default value
 */
export function renderStringForAnyOf (schema, values, params) {
  log('renderStringForAnyOf')

  const {
    uri = '#/'
  } = params

  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  const minLength = getMinLength(schema)
  const maxLength = getMaxLength(schema)
  const pattern = getPattern(schema)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fieldProps = getElementsFieldPropsForAnyOf(params, uri)

  return {
    meta: {
      ...(isParentUri(parentUri, uri) ? { parentUri } : {}),
      uri,
      type: 'string',
      ...minLength,
      ...maxLength,
      ...pattern,
      ...metaProps
    },
    elements: {
      ...title,
      ...description,
      anyOf: {
        ...minLength,
        ...maxLength,
        ...pattern,
        ...fieldProps,
        id: uri
      }
    }
  }
}

/*
 *  "oneOf" is look-up
 *
 *  "oneOf" gets selected items
 *
 *  "oneOf" does not get value or default value
 */
export function renderStringForOneOf (schema, values, params) {
  log('renderStringForOneOf')

  const {
    uri = '#/'
  } = params

  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  const minLength = getMinLength(schema)
  const maxLength = getMaxLength(schema)
  const pattern = getPattern(schema)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fieldProps = getElementsFieldPropsForOneOf(params, uri)

  return {
    meta: {
      ...(isParentUri(parentUri, uri) ? { parentUri } : {}),
      uri,
      type: 'string',
      ...minLength,
      ...maxLength,
      ...pattern,
      ...metaProps
    },
    elements: {
      ...title,
      ...description,
      oneOf: {
        ...minLength,
        ...maxLength,
        ...pattern,
        ...fieldProps,
        id: uri
      }
    }
  }
}

/*
 *  "allOf" is not look-up
 *
 *  "allOf" does not get selected items
 *
 *  "allOf" gets value and default value
 */
export function renderStringForAllOf (schema, values, params) {
  log('renderStringForAllOf')

  const {
    uri = '#/'
  } = params

  const metaDefaultValue = getMetaDefaultValue(schema, uri)
  const metaValue = getMetaValue(values, uri, schema)
  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  const minLength = getMinLength(schema)
  const maxLength = getMaxLength(schema)
  const pattern = getPattern(schema)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fieldValue = getElementsFieldValue(values, uri, schema)
  const fieldProps = getElementsFieldProps(params, uri)

  let selectedItems
  if (isParentUri(parentUri, uri)) {
    ({
      [parentUri]: {
        meta: {
          selectedItems
        } = {}
      } = {}
    } = params)
  }

  return {
    meta: {
      ...(isParentUri(parentUri, uri) ? { parentUri } : {}),
      uri,
      type: 'string',
      ...minLength,
      ...maxLength,
      ...pattern,
      ...(isArray(selectedItems) ? { selectedItems } : {}),
      ...metaDefaultValue,
      ...metaValue,
      ...metaProps
    },
    elements: {
      ...title,
      ...description,
      field: {
        ...minLength,
        ...maxLength,
        ...pattern,
        ...(isArray(selectedItems) ? { selectedItems } : {}),
        ...fieldValue,
        ...fieldProps,
        id: uri
      }
    }
  }
}

export function renderString (schema, values, params) {
  log('renderString')

  const {
    uri = '#/'
  } = params

  const metaDefaultValue = getMetaDefaultValue(schema, uri)
  const metaValue = getMetaValue(values, uri, schema)
  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  const minLength = getMinLength(schema)
  const maxLength = getMaxLength(schema)
  const pattern = getPattern(schema)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fieldValue = getElementsFieldValue(values, uri, schema)
  const fieldProps = getElementsFieldProps(params, uri)

  let selectedItems
  if (isParentUri(parentUri, uri)) {
    ({
      [parentUri]: {
        meta: {
          selectedItems
        } = {}
      } = {}
    } = params)
  }

  return {
    meta: {
      ...(isParentUri(parentUri, uri) ? { parentUri } : {}),
      uri,
      type: 'string',
      ...minLength,
      ...maxLength,
      ...pattern,
      ...(isArray(selectedItems) ? { selectedItems } : {}),
      ...metaDefaultValue,
      ...metaValue,
      ...metaProps
    },
    elements: {
      ...title,
      ...description,
      field: {
        ...minLength,
        ...maxLength,
        ...pattern,
        ...(isArray(selectedItems) ? { selectedItems } : {}),
        ...fieldValue,
        ...fieldProps,
        id: uri
      }
    }
  }
}

/*
 *  "enum" is look-up
 *
 *  "enum" gets selected items
 *
 *  "enum" does not get value or default value
 */
export function transformNullByKeyForEnum (schema, rootSchema, values, params) {
  log('transformNullByKeyForEnum')

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const parentUri = normaliseUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const items = getEnum(schema)

  return renderNullForEnum(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri: normaliseUri(parentUri), uri, selectedItems, name: fieldKey }, elements: { enum: { ...getElementsFieldPropsForEnum(params, uri), selectedItems, items } } } })
}

/*
 *  "anyOf" is look-up
 *
 *  "anyOf" gets selected items
 *
 *  "anyOf" does not get value or default value
 */
export function transformNullByKeyForAnyOf (schema, rootSchema, values, params) {
  log('transformNullByKeyForAnyOf')

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const parentUri = normaliseUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformNullByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  return renderNullForAnyOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri: normaliseUri(parentUri), uri, selectedItems, name: fieldKey }, elements: { anyOf: { ...getElementsFieldPropsForAnyOf(params, uri), selectedItems, items } } } })
}

/*
 *  "oneOf" is look-up
 *
 *  "oneOf" gets selected items
 *
 *  "oneOf" does not get value or default value
 */
export function transformNullByKeyForOneOf (schema, rootSchema, values, params) {
  log('transformNullByKeyForOneOf')

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const parentUri = normaliseUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformNullByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  return renderNullForOneOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri: normaliseUri(parentUri), uri, selectedItems, name: fieldKey }, elements: { oneOf: { ...getElementsFieldPropsForOneOf(params, uri), selectedItems, items } } } })
}

/*
 *  "allOf" is not look-up
 *
 *  "allOf" does not get selected items
 *
 *  "allOf" gets value and default value
 */
export function transformNullByKeyForAllOf (schema, rootSchema, values, params) {
  log('transformNullByKeyForAllOf')

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const parentUri = normaliseUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const { allOf = [], ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  return renderNullForAllOf(itemSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema, rootSchema, parentUri, uri, ...getMetaValue(values, uri, schema), name: fieldKey }, elements: { field: { ...getElementsFieldPropsForAllOf(params, uri), ...getElementsFieldValue(values, uri, schema) } } } })
}

/*
 *  "enum" is look-up
 *
 *  "enum" gets selected items
 *
 *  "enum" does not get value or default value
 */
export function transformNullByIndexForEnum (schema, rootSchema, values, params) {
  log('transformNullByIndexForEnum')

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const parentUri = normaliseUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const items = getEnum(schema)

  return renderNullForEnum(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri, uri, selectedItems, item: arrayIndex }, elements: { enum: { ...getElementsFieldPropsForEnum(params, uri), selectedItems, items } } } })
}

/*
 *  "anyOf" is look-up
 *
 *  "anyOf" gets selected items
 *
 *  "anyOf" does not get value or default value
 */
export function transformNullByIndexForAnyOf (schema, rootSchema, values, params) {
  log('transformNullByIndexForAnyOf')

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const parentUri = normaliseUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformNullByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  return renderNullForAnyOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri, uri, selectedItems, item: arrayIndex }, elements: { anyOf: { ...getElementsFieldPropsForAnyOf(params, uri), selectedItems, items } } } })
}

/*
 *  "oneOf" is look-up
 *
 *  "oneOf" gets selected items
 *
 *  "oneOf" does not get value or default value
 */
export function transformNullByIndexForOneOf (schema, rootSchema, values, params) {
  log('transformNullByIndexForOneOf')

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const parentUri = normaliseUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  log({ uri, parentUri })

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformNullByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  return renderNullForOneOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri, uri, selectedItems, item: arrayIndex }, elements: { oneOf: { ...getElementsFieldPropsForOneOf(params, uri), selectedItems, items } } } })
}

/*
 *  "allOf" is not look-up
 *
 *  "allOf" does not get selected items
 *
 *  "allOf" gets value and default value
 */
export function transformNullByIndexForAllOf (schema, rootSchema, values, params) {
  log('transformNullByIndexForAllOf')

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const parentUri = normaliseUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const { allOf = [], ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  return renderNullForAllOf(itemSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema, rootSchema, parentUri, uri, ...getMetaValue(values, uri, schema), item: arrayIndex }, elements: { field: { ...getElementsFieldPropsForAllOf(params, uri), ...getElementsFieldValue(values, uri, schema) } } } })
}

/*
 *  "enum" is look-up
 *
 *  "enum" gets selected items
 *
 *  "enum" does not get value or default value
 */
export function transformNullForEnum (schema, rootSchema, values, params) {
  log('transformNullForEnum')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const items = getEnum(schema)

  return renderNullForEnum(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri: normaliseUri(parentUri), uri, selectedItems }, elements: { field: { ...getElementsFieldPropsForOneOf(params, uri), selectedItems, items } } } })
}

/*
 *  "anyOf" is look-up
 *
 *  "anyOf" gets selected items
 *
 *  "anyOf" does not get value or default value
 */
export function transformNullForAnyOf (schema, rootSchema, values, params) {
  log('transformNullForAnyOf')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformNullByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  return renderNullForAnyOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri: normaliseUri(parentUri), uri, selectedItems }, elements: { anyOf: { ...getElementsFieldPropsForAnyOf(params, uri), selectedItems, items } } } })
}

/*
 *  "oneOf" is look-up
 *
 *  "oneOf" gets selected items
 *
 *  "oneOf" does not get value or default value
 */
export function transformNullForOneOf (schema, rootSchema, values, params) {
  log('transformNullForOneOf')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformNullByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  return renderNullForOneOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri: normaliseUri(parentUri), uri, selectedItems }, elements: { oneOf: { ...getElementsFieldPropsForOneOf(params, uri), selectedItems, items } } } })
}

/*
 *  "allOf" is not look-up
 *
 *  "allOf" does not get selected items
 *
 *  "allOf" gets value and default value
 */
export function transformNullForAllOf (schema, rootSchema, values, params) {
  log('transformNullForAllOf')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const { allOf = [], ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  return renderNullForAllOf(itemSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema, rootSchema, parentUri: normaliseUri(parentUri), uri, ...getMetaValue(values, uri, schema) }, elements: { field: { ...getElementsFieldPropsForAllOf(params, uri), ...getElementsFieldValue(values, uri, schema) } } } })
}

/*
 *  "enum" is look-up
 *
 *  "enum" gets selected items
 *
 *  "enum" does not get value or default value
 */
export function transformBooleanByKeyForEnum (schema, rootSchema, values, params) {
  log('transformBooleanByKeyForEnum')

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const parentUri = normaliseUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const items = getEnum(schema)

  return renderBooleanForEnum(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri, uri, selectedItems, name: fieldKey }, elements: { enum: { ...getElementsFieldPropsForEnum(params, uri), selectedItems, items } } } })
}

/*
 *  "anyOf" is look-up
 *
 *  "anyOf" gets selected items
 *
 *  "anyOf" does not get value or default value
 */
export function transformBooleanByKeyForAnyOf (schema, rootSchema, values, params) {
  log('transformBooleanByKeyForAnyOf')

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const parentUri = normaliseUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformBooleanByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  return renderBooleanForAnyOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri, uri, selectedItems, name: fieldKey }, elements: { anyOf: { ...getElementsFieldPropsForAnyOf(params, uri), selectedItems, items } } } })
}

/*
 *  "oneOf" is look-up
 *
 *  "oneOf" gets selected items
 *
 *  "oneOf" does not get value or default value
 */
export function transformBooleanByKeyForOneOf (schema, rootSchema, values, params) {
  log('transformBooleanByKeyForOneOf')

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const parentUri = normaliseUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformBooleanByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  return renderBooleanForOneOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri, uri, selectedItems, name: fieldKey }, elements: { oneOf: { ...getElementsFieldPropsForOneOf(params, uri), selectedItems, items } } } })
}

/*
 *  "allOf" is not look-up
 *
 *  "allOf" does not get selected items
 *
 *  "allOf" gets value and default value
 */
export function transformBooleanByKeyForAllOf (schema, rootSchema, values, params) {
  log('transformBooleanByKeyForAllOf')

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const parentUri = normaliseUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const { allOf = [], ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  return renderBooleanForAllOf(itemSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema, rootSchema, parentUri, uri, ...getMetaValue(values, uri, schema), name: fieldKey }, elements: { field: { ...getElementsFieldPropsForAllOf(params, uri), ...getElementsFieldValue(values, uri, schema) } } } })
}

/*
 *  "enum" is look-up
 *
 *  "enum" gets selected items
 *
 *  "enum" does not get value or default value
 */
export function transformBooleanByIndexForEnum (schema, rootSchema, values, params) {
  log('transformBooleanByIndexForEnum')

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const parentUri = normaliseUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const items = getEnum(schema)

  return renderBooleanForEnum(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri, uri, selectedItems, item: arrayIndex }, elements: { enum: { ...getElementsFieldPropsForEnum(params, uri), selectedItems, items } } } })
}

/*
 *  "anyOf" is look-up
 *
 *  "anyOf" gets selected items
 *
 *  "anyOf" does not get value or default value
 */
export function transformBooleanByIndexForAnyOf (schema, rootSchema, values, params) {
  log('transformBooleanByIndexForAnyOf')

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const parentUri = normaliseUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformBooleanByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  return renderBooleanForAnyOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri, uri, selectedItems, item: arrayIndex }, elements: { anyOf: { ...getElementsFieldPropsForAnyOf(params, uri), selectedItems, items } } } })
}

/*
 *  "oneOf" is look-up
 *
 *  "oneOf" gets selected items
 *
 *  "oneOf" does not get value or default value
 */
export function transformBooleanByIndexForOneOf (schema, rootSchema, values, params) {
  log('transformBooleanByIndexForOneOf')

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const parentUri = normaliseUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformBooleanByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  return renderBooleanForOneOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri, uri, selectedItems, item: arrayIndex }, elements: { oneOf: { ...getElementsFieldPropsForOneOf(params, uri), selectedItems, items } } } })
}

/*
 *  "allOf" is not look-up
 *
 *  "allOf" does not get selected items
 *
 *  "allOf" gets value and default value
 */
export function transformBooleanByIndexForAllOf (schema, rootSchema, values, params) {
  log('transformBooleanByIndexForAllOf')

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const parentUri = normaliseUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const { allOf = [], ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  return renderBooleanForAllOf(itemSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema, rootSchema, parentUri, uri, ...getMetaValue(values, uri, schema), item: arrayIndex }, elements: { field: { ...getElementsFieldPropsForAllOf(params, uri), ...getElementsFieldValue(values, uri, schema) } } } })
}

/*
 *  "enum" is look-up
 *
 *  "enum" gets selected items
 *
 *  "enum" does not get value or default value
 */
export function transformBooleanForEnum (schema, rootSchema, values, params) {
  log('transformBooleanForEnum')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const items = getEnum(schema)

  return renderBooleanForEnum(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri: normaliseUri(parentUri), uri, selectedItems }, elements: { enum: { ...getElementsFieldPropsForEnum(params, uri), selectedItems, items } } } })
}

/*
 *  "anyOf" is look-up
 *
 *  "anyOf" gets selected items
 *
 *  "anyOf" does not get value or default value
 */
export function transformBooleanForAnyOf (schema, rootSchema, values, params) {
  log('transformBooleanForAnyOf')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformBooleanByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  return renderBooleanForAnyOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri: normaliseUri(parentUri), uri, selectedItems }, elements: { anyOf: { ...getElementsFieldPropsForAnyOf(params, uri), selectedItems, items } } } })
}

/*
 *  "oneOf" is look-up
 *
 *  "oneOf" gets selected items
 *
 *  "oneOf" does not get value or default value
 */
export function transformBooleanForOneOf (schema, rootSchema, values, params) {
  log('transformBooleanForOneOf')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformBooleanByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  return renderBooleanForOneOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri: normaliseUri(parentUri), uri, selectedItems }, elements: { oneOf: { ...getElementsFieldPropsForOneOf(params, uri), selectedItems, items } } } })
}

/*
 *  "allOf" is not look-up
 *
 *  "allOf" does not get selected items
 *
 *  "allOf" gets value and default value
 */
export function transformBooleanForAllOf (schema, rootSchema, values, params) {
  log('transformBooleanForAllOf')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const { allOf = [], ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  return renderBooleanForAllOf(itemSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema, rootSchema, parentUri: normaliseUri(parentUri), uri, ...getMetaValue(values, uri, schema) }, elements: { field: { ...getElementsFieldPropsForAllOf(params, uri), ...getElementsFieldValue(values, uri, schema) } } } })
}

/*
 *  "enum" is look-up
 *
 *  "enum" gets selected items
 *
 *  "enum" does not get value or default value
 */
export function transformObjectByKeyForEnum (schema, rootSchema, values, params) {
  log('transformObjectByKeyForEnum')

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const parentUri = normaliseUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const items = getEnum(schema)

  return renderObjectForEnum(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri, uri, selectedItems, name: fieldKey }, elements: { enum: { ...getElementsFieldPropsForEnum(params, uri), selectedItems, items } } } })
}

/*
 *  "anyOf" is look-up
 *
 *  "anyOf" gets selected items
 *
 *  "anyOf" does not get value or default value
 */
export function transformObjectByKeyForAnyOf (schema, rootSchema, values, params) {
  log('transformObjectByKeyForAnyOf')

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const parentUri = normaliseUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformObjectByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  return renderObjectForAnyOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri, uri, selectedItems, name: fieldKey }, elements: { anyOf: { ...getElementsFieldPropsForAnyOf(params, uri), selectedItems, items } } } })
}

/*
 *  "oneOf" is look-up
 *
 *  "oneOf" gets selected items
 *
 *  "oneOf" does not get value or default value
 */
export function transformObjectByKeyForOneOf (schema, rootSchema, values, params) {
  log('transformObjectByKeyForOneOf')

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const parentUri = normaliseUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformObjectByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  return renderObjectForOneOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri, uri, selectedItems, name: fieldKey }, elements: { oneOf: { ...getElementsFieldPropsForOneOf(params, uri), selectedItems, items } } } })
}

/*
 *  "allOf" is not look-up
 *
 *  "allOf" does not get selected items
 *
 *  "allOf" gets value and default value
 */
export function transformObjectByKeyForAllOf (schema, rootSchema, values, params) {
  log('transformObjectByKeyForAllOf')

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const parentUri = normaliseUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const { allOf = [], ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  return renderObjectForAllOf(itemSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema, rootSchema, parentUri, uri, name: fieldKey }, elements: getElementsProps(params, uri) } })
}

/*
 *  "enum" is look-up
 *
 *  "enum" gets selected items
 *
 *  "enum" does not get value or default value
 */
export function transformObjectByIndexForEnum (schema, rootSchema, values, params) {
  log('transformObjectByIndexForEnum')

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const parentUri = normaliseUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const items = getEnum(schema)

  return renderObjectForEnum(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri, uri, selectedItems, item: arrayIndex }, elements: { enum: { ...getElementsFieldPropsForEnum(params, uri), selectedItems, items } } } })
}

/*
 *  "anyOf" is look-up
 *
 *  "anyOf" gets selected items
 *
 *  "anyOf" does not get value or default value
 */
export function transformObjectByIndexForAnyOf (schema, rootSchema, values, params) {
  log('transformObjectByIndexForAnyOf')

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const parentUri = normaliseUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformObjectByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  return renderObjectForAnyOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri, uri, selectedItems, item: arrayIndex }, elements: { anyOf: { ...getElementsFieldPropsForAnyOf(params, uri), selectedItems, items } } } })
}

/*
 *  "oneOf" is look-up
 *
 *  "oneOf" gets selected items
 *
 *  "oneOf" does not get value or default value
 */
export function transformObjectByIndexForOneOf (schema, rootSchema, values, params) {
  log('transformObjectByIndexForOneOf')

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const parentUri = normaliseUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformObjectByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  return renderObjectForOneOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri, uri, selectedItems, item: arrayIndex }, elements: { oneOf: { ...getElementsFieldPropsForOneOf(params, uri), selectedItems, items } } } })
}

/*
 *  "allOf" is not look-up
 *
 *  "allOf" does not get selected items
 *
 *  "allOf" gets value and default value
 */
export function transformObjectByIndexForAllOf (schema, rootSchema, values, params) {
  log('transformObjectByIndexForAllOf')

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const parentUri = normaliseUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const { allOf = [], ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  return renderObjectForAllOf(itemSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema, rootSchema, parentUri, uri, item: arrayIndex }, elements: getElementsProps(params, uri) } })
}

/*
 *  "enum" value is look-up
 *
 *  "enum" gets selected items
 *
 *  "enum" does not get value or default value
 */
export function transformObjectForEnum (schema, rootSchema, values, params) {
  log('transformObjectForEnum')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const items = getEnum(schema)

  return renderObjectForEnum(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri: normaliseUri(parentUri), uri, selectedItems }, elements: { field: { ...getElementsFieldPropsForEnum(params, uri), selectedItems, items } } } })
}

/*
 *  "anyOf" is look-up
 *
 *  "anyOf" gets selected items
 *
 *  "anyOf" does not get value or default value
 */
export function transformObjectForAnyOf (schema, rootSchema, values, params) {
  log('transformObjectForAnyOf')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformObjectByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  return renderObjectForAnyOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri: normaliseUri(parentUri), uri, selectedItems }, elements: { anyOf: { ...getElementsFieldPropsForAnyOf(params, uri), selectedItems, items } } } })
}

/*
 *  "oneOf" is look-up
 *
 *  "oneOf" gets selected items
 *
 *  "oneOf" does not get value or default value
 */
export function transformObjectForOneOf (schema, rootSchema, values, params) {
  log('transformObjectForOneOf')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformObjectByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  return renderObjectForOneOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri: normaliseUri(parentUri), uri, selectedItems }, elements: { oneOf: { ...getElementsFieldPropsForOneOf(params, uri), selectedItems, items } } } })
}

/*
 *  "allOf" is not look-up
 *
 *  "allOf" does not get selected items
 *
 *  "allOf" gets value and default value
 */
export function transformObjectForAllOf (schema, rootSchema, values, params) { // As-is
  log('transformObjectForAllOf')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const { allOf = [], ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  const {
    properties = {},
    required = []
  } = itemSchema

  const fields = (
    Object
      .entries(properties)
      .map(mapTransformByKey(rootSchema, values, { ...params, parentUri: uri, required }))
  )

  /*
  const fields = (
    Object
      .entries(properties)
      .map(([key, schema]) => {
        return getTransformByKey(schema, rootSchema, values, { ...params, parentUri: uri, isRequired: required.includes(key), key })

        *//*
        if (hasEnum(schema)) {
          log('transformObjectForAllOf (`enum`)')

          return getTransformByKeyForEnum(schema, rootSchema, values, { ...params, parentUri: uri, key, isRequired: required.includes(key) })

          *//*
           *  Get selected items for the uri
           *//*
          const schemaUri = getUri(uri, key)
          const selectedItems = getSelectedItemsForUri(values, uri, schemaUri, schema)
          const isRequired = required.includes(key)

          // log(getValueForEnum(index, schema))

          return transformByKey(schema, rootSchema, values, { ...params, parentUri: uri, uri: schemaUri, [schemaUri]: { meta: { ...getMetaProps(params, schemaUri), selectedItems, isRequired }, elements: { enum: { ...getElementsFieldPropsForEnum(params, schemaUri), selectedItems, isRequired } } }, key })
          *//*
        } else {
          if (hasAnyOf(schema)) {
            log('transformObjectForAllOf (`anyOf`)')

            return getTransformByKeyForAnyOf(schema, rootSchema, values, { ...params, parentUri: uri, key, isRequired: required.includes(key) })

            /*
             *  Get selected items for the uri
             *//*
            const schemaUri = getUri(uri, key)
            const selectedItems = getSelectedItemsForUri(values, uri, schemaUri, schema)
            const isRequired = required.includes(key)

            // log(getValueForAnyOf(index, schema))

            return transformByKey(schema, rootSchema, values, { ...params, parentUri: uri, uri: schemaUri, [schemaUri]: { meta: { ...getMetaProps(params, schemaUri), selectedItems, isRequired }, elements: { anyOf: { ...getElementsFieldPropsForAnyOf(params, schemaUri), selectedItems, isRequired } } }, key })
            *//*
          } else {
            if (hasOneOf(schema)) {
              log('transformObjectForAllOf (`oneOf`)')

              return getTransformByKeyForOneOf(schema, rootSchema, values, { ...params, parentUri: uri, key, isRequired: required.includes(key) })

              *//*
               *  Get selected items for the uri
               *//*
              const schemaUri = getUri(uri, key)
              const selectedItems = getSelectedItemsForUri(values, uri, schemaUri, schema)
              const isRequired = required.includes(key)

              // log(getValueForOneOf(index, schema))

              return transformByKey(schema, rootSchema, values, { ...params, parentUri: uri, uri: schemaUri, [schemaUri]: { meta: { ...getMetaProps(params, schemaUri), selectedItems, isRequired }, elements: { oneOf: { ...getElementsFieldPropsForOneOf(params, schemaUri), selectedItems, isRequired } } }, key })
              *//*
            }
          }
        }

        log('transformObjectForAllOf (`value` `defaultValue`)')

        *//*
         *  Schemas without `enum`, `anyOf`, or `oneOf` do not have selected items
         *//*
        const schemaUri = getUri(uri, key)
        const isRequired = required.includes(key)

        return transformByKey(schema, rootSchema, values, { ...params, parentUri: uri, uri: schemaUri, [schemaUri]: { meta: { ...getMetaProps(params, schemaUri), isRequired }, elements: { field: { ...getElementsFieldPropsForAllOf(params, schemaUri), isRequired } } }, key })
        *//*
      })
  )
  */

  return renderObjectForAllOf(itemSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema, rootSchema, parentUri: normaliseUri(parentUri), uri }, elements: { ...getElementsProps(params, uri), fields } } })
}

/*
 *  "enum" is look-up
 *
 *  "enum" gets selected items
 *
 *  "enum" does not get value or default value
 */
export function transformArrayByKeyForEnum (schema, rootSchema, values, params) {
  log('transformArrayByKeyForEnum')

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const parentUri = normaliseUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const items = getEnum(schema)

  return renderArrayForEnum(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri: normaliseUri(parentUri), uri, selectedItems, name: fieldKey }, elements: { enum: { ...getElementsFieldPropsForEnum(params, uri), selectedItems, items } } } })
}

/*
 *  "anyOf" is look-up
 *
 *  "anyOf" gets selected items
 *
 *  "anyOf" does not get value or default value
 */
export function transformArrayByKeyForAnyOf (schema, rootSchema, values, params) {
  log('transformArrayByKeyForAnyOf')

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const parentUri = normaliseUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformArrayByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  return renderArrayForAnyOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri: normaliseUri(parentUri), uri, selectedItems, name: fieldKey }, elements: { anyOf: { ...getElementsFieldPropsForAnyOf(params, uri), selectedItems, items } } } })
}

/*
 *  "oneOf" is look-up
 *
 *  "oneOf" gets selected items
 *
 *  "oneOf" does not get value or default value
 */
export function transformArrayByKeyForOneOf (schema, rootSchema, values, params) {
  log('transformArrayByKeyForOneOf')

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const parentUri = normaliseUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformArrayByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  return renderArrayForOneOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri: normaliseUri(parentUri), uri, selectedItems, name: fieldKey }, elements: { oneOf: { ...getElementsFieldPropsForOneOf(params, uri), selectedItems, items } } } })
}

/*
 *  "allOf" is not look-up
 *
 *  "allOf" does not get selected items
 *
 *  "allOf" gets value and default value
 */
export function transformArrayByKeyForAllOf (schema, rootSchema, values, params) {
  log('transformArrayByKeyForAllOf')

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const parentUri = normaliseUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const { allOf = [], ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  return renderArrayForAllOf(itemSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema, rootSchema, parentUri, uri, name: fieldKey }, elements: getElementsProps(params, uri) } })
}

/*
 *  "enum" is look-up
 *
 *  "enum" gets selected items
 *
 *  "enum" does not get value or default value
 */
export function transformArrayByIndexForEnum (schema, rootSchema, values, params) {
  log('transformArrayByIndexForEnum')

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const parentUri = normaliseUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const items = getEnum(schema)

  return renderArrayForEnum(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri: normaliseUri(parentUri), uri, selectedItems, item: arrayIndex }, elements: { enum: { ...getElementsFieldPropsForEnum(params, uri), selectedItems, items } } } })
}

/*
 *  "anyOf" is look-up
 *
 *  "anyOf" gets selected items
 *
 *  "anyOf" does not get value or default value
 */
export function transformArrayByIndexForAnyOf (schema, rootSchema, values, params) {
  log('transformArrayByIndexForAnyOf')

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const parentUri = normaliseUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformArrayByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  return renderArrayForAnyOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri: normaliseUri(parentUri), uri, selectedItems, item: arrayIndex }, elements: { anyOf: { ...getElementsFieldPropsForAnyOf(params, uri), selectedItems, items } } } })
}

/*
 *  "oneOf" is look-up
 *
 *  "oneOf" gets selected items
 *
 *  "oneOf" does not get value or default value
 */
export function transformArrayByIndexForOneOf (schema, rootSchema, values, params) {
  log('transformArrayByIndexForOneOf')

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const parentUri = normaliseUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformArrayByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  return renderArrayForOneOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri: normaliseUri(parentUri), uri, selectedItems, item: arrayIndex }, elements: { oneOf: { ...getElementsFieldPropsForOneOf(params, uri), selectedItems, items } } } })
}

/*
 *  "allOf" is not look-up
 *
 *  "allOf" does not get selected items
 *
 *  "allOf" gets value and default value
 */
export function transformArrayByIndexForAllOf (schema, rootSchema, values, params) {
  log('transformArrayByIndexForAllOf')

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const parentUri = normaliseUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const { allOf = [], ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  return renderArrayForAllOf(itemSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema, rootSchema, parentUri, uri, item: arrayIndex }, elements: getElementsProps(params, uri) } })
}

/*
 *  "enum" is look-up
 *
 *  "enum" gets selected items
 *
 *  "enum" does not get value or default value
 */
export function transformArrayForEnum (schema, rootSchema, values, params) {
  log('transformArrayForEnum')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const items = getEnum(schema)

  return renderArrayForEnum(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri: normaliseUri(parentUri), uri, selectedItems }, elements: { enum: { ...getElementsFieldPropsForEnum(params, uri), selectedItems, items } } } })
}

/*
 *  "anyOf" is look-up
 *
 *  "anyOf" gets selected items
 *
 *  "anyOf" does not get value or default value
 */
export function transformArrayForAnyOf (schema, rootSchema, values, params) {
  log('transformArrayForAnyOf')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformArrayByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  return renderArrayForAnyOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri: normaliseUri(parentUri), uri, selectedItems }, elements: { anyOf: { ...getElementsFieldPropsForAnyOf(params, uri), selectedItems, items } } } })
}

/*
 *  "oneOf" is look-up
 *
 *  "oneOf" gets selected items
 *
 *  "oneOf" does not get value or default value
 */
export function transformArrayForOneOf (schema, rootSchema, values, params) {
  log('transformArrayForOneOf')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformArrayByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  return renderArrayForOneOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri: normaliseUri(parentUri), uri, selectedItems }, elements: { oneOf: { ...getElementsFieldPropsForOneOf(params, uri), selectedItems, items } } } })
}

/*
 *  "allOf" is not look-up
 *
 *  "allOf" does not get selected items
 *
 *  "allOf" gets value and default value
 */
export function transformArrayForAllOf (schema, rootSchema, values, params) {
  log('transformArrayForAllOf')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const { allOf = [], ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  const {
    items = [] // array or object
  } = itemSchema

  if (isArray(items)) {
    log(`

  Array with "items" array

    `)

    const fields = items.map(mapTransformByIndex(rootSchema, values, { ...params, parentUri: uri }))

    return renderArrayForAllOf(itemSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema, rootSchema, parentUri: normaliseUri(parentUri), uri }, elements: { ...getElementsProps(params, uri), fields } } })
  } else {
    if (isObject(items)) {
      log(`

  Array with "items" object

      `)

      const fields = [
        getTransformByIndex(items, rootSchema, values, { ...params, parentUri: uri })
      ]

      return renderArrayForAllOf(itemSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema, rootSchema, parentUri: normaliseUri(parentUri), uri }, elements: { ...getElementsProps(params, uri), fields } } })

      /*
      let fields
      if (hasEnum(items)) {
        log('transformArrayForAllOf (`enum`)')

        *//*
         *  Get selected items for the parent uri
         *//*
        const schemaUri = getUri(uri, 0)
        const selectedItems = getSelectedItemsForParentUri(values, uri, schemaUri, items)

        // log(getValueForEnum(0, items))

        fields = [
          transformByIndex(items, rootSchema, values, { ...params, parentUri: uri, uri: schemaUri, [schemaUri]: { meta: { ...getMetaProps(params, schemaUri), selectedItems }, elements: { enum: { ...getElementsFieldPropsForEnum(params, schemaUri), selectedItems } } } })
        ]
      } else {
        if (hasAnyOf(items)) {
          log('transformArrayForAllOf (`anyOf`)')

          *//*
           *  Get selected items for the parent uri
           *//*
          const schemaUri = getUri(uri, 0)
          const selectedItems = getSelectedItemsForParentUri(values, uri, schemaUri, items)

          // log(getValueForAnyOf(0, items))

          fields = [
            transformByIndex(items, rootSchema, values, { ...params, parentUri: uri, uri: schemaUri, [schemaUri]: { meta: { ...getMetaProps(params, schemaUri), selectedItems }, elements: { anyOf: { ...getElementsFieldPropsForAnyOf(params, schemaUri), selectedItems } } } })
          ]
        } else {
          if (hasOneOf(items)) {
            log('transformArrayForAllOf (`oneOf`)')

            *//*
             *  Get selected items for the parent uri
             *//*
            const schemaUri = getUri(uri, 0)
            const selectedItems = getSelectedItemsForParentUri(values, uri, schemaUri, items)

            // log(getValueForOneOf(0, items))

            fields = [
              transformByIndex(items, rootSchema, values, { ...params, parentUri: uri, uri: schemaUri, [schemaUri]: { meta: { ...getMetaProps(params, schemaUri), selectedItems }, elements: { oneOf: { ...getElementsFieldPropsForOneOf(params, schemaUri), selectedItems } } } })
            ]
          } else {
            log('transformArrayForAllOf (`value` `defaultValue`)')

            const schemaUri = getUri(uri, 0)

            *//*
             *  Schemas without `enum`, `anyOf`, or `oneOf` do not have selected items
             *//*

            *//*
             *  Schemas may have a value
             *//*

            *//*
             *  Array schemas do not have a value
             *//*

            *//*
             *  Object schemas do not have a value
             *//*

            fields = [
              transformByIndex(items, rootSchema, values, { ...params, parentUri: uri, uri: schemaUri, [schemaUri]: { meta: getMetaProps(params, schemaUri), elements: getElementsProps(params, schemaUri) } })
            ]
          }
        }
      }

      return renderArrayForAllOf(itemSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema, rootSchema, parentUri: normaliseUri(parentUri), uri }, elements: { ...getElementsProps(params, uri), fields } } })
      */
    }
  }
}

/*
 *  "enum" is look-up
 *
 *  "enum" gets selected items
 *
 *  "enum" does not get value or default value
 */
export function transformNumberByKeyForEnum (schema, rootSchema, values, params) {
  log('transformNumberByKeyForEnum')

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const parentUri = normaliseUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const items = getEnum(schema)

  return renderNumberForEnum(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri: normaliseUri(parentUri), uri, selectedItems, name: fieldKey }, elements: { enum: { ...getElementsFieldPropsForEnum(params, uri), selectedItems, items } } } })
}

/*
 *  "anyOf" is look-up
 *
 *  "anyOf" gets selected items
 *
 *  "anyOf" does not get value or default value
 */
export function transformNumberByKeyForAnyOf (schema, rootSchema, values, params) {
  log('transformNumberByKeyForAnyOf')

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const parentUri = normaliseUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformNumberByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  return renderNumberForAnyOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri: normaliseUri(parentUri), uri, selectedItems, name: fieldKey }, elements: { anyOf: { ...getElementsFieldPropsForAnyOf(params, uri), selectedItems, items } } } })
}

/*
 *  "oneOf" is look-up
 *
 *  "oneOf" gets selected items
 *
 *  "oneOf" does not get value or default value
 */
export function transformNumberByKeyForOneOf (schema, rootSchema, values, params) {
  log('transformNumberByKeyForOneOf')

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const parentUri = normaliseUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformNumberByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  return renderNumberForOneOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri: normaliseUri(parentUri), uri, selectedItems, name: fieldKey }, elements: { oneOf: { ...getElementsFieldPropsForOneOf(params, uri), selectedItems, items } } } })
}

/*
 *  "allOf" is not look-up
 *
 *  "allOf" does not get selected items
 *
 *  "allOf" gets value and default value
 */
export function transformNumberByKeyForAllOf (schema, rootSchema, values, params) {
  log('transformNumberByKeyForAllOf')

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const parentUri = normaliseUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const { allOf = [], ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  return renderNumberForAllOf(itemSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema, rootSchema, parentUri, uri, ...getMetaValue(values, uri, schema), name: fieldKey }, elements: { field: { ...getElementsFieldPropsForAllOf(params, uri), ...getElementsFieldValue(values, uri, schema) } } } })
}

/*
 *  "enum" is look-up
 *
 *  "enum" gets selected items
 *
 *  "enum" does not get value or default value
 */
export function transformNumberByIndexForEnum (schema, rootSchema, values, params) {
  log('transformNumberByIndexForEnum')

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const parentUri = normaliseUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const items = getEnum(schema)

  return renderNumberForEnum(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri, uri, selectedItems, item: arrayIndex }, elements: { enum: { ...getElementsFieldPropsForEnum(params, uri), selectedItems, items } } } })
}

/*
 *  "anyOf" is look-up
 *
 *  "anyOf" gets selected items
 *
 *  "anyOf" does not get value or default value
 */
export function transformNumberByIndexForAnyOf (schema, rootSchema, values, params) {
  log('transformNumberByIndexForAnyOf')

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const parentUri = normaliseUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformNumberByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  return renderNumberForAnyOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri, uri, selectedItems, item: arrayIndex }, elements: { anyOf: { ...getElementsFieldPropsForAnyOf(params, uri), selectedItems, items } } } })
}

/*
 *  "oneOf" is look-up
 *
 *  "oneOf" gets selected items
 *
 *  "oneOf" does not get value or default value
 */
export function transformNumberByIndexForOneOf (schema, rootSchema, values, params) {
  log('transformNumberByIndexForOneOf')

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const parentUri = normaliseUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformNumberByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  return renderNumberForOneOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri, uri, selectedItems, item: arrayIndex }, elements: { oneOf: { ...getElementsFieldPropsForOneOf(params, uri), selectedItems, items } } } })
}

/*
 *  "allOf" is not look-up
 *
 *  "allOf" does not get selected items
 *
 *  "allOf" gets value and default value
 */
export function transformNumberByIndexForAllOf (schema, rootSchema, values, params) {
  log('transformNumberByIndexForAllOf')

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const parentUri = normaliseUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const { allOf = [], ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  return renderNumberForAllOf(itemSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema, rootSchema, parentUri, uri, ...getMetaValue(values, uri, schema), item: arrayIndex }, elements: { field: { ...getElementsFieldPropsForAllOf(params, uri), ...getElementsFieldValue(values, uri, schema) } } } })
}

/*
 *  "enum" is look-up
 *
 *  "enum" gets selected items
 *
 *  "enum" does not get value or default value
 */
export function transformNumberForEnum (schema, rootSchema, values, params) {
  log('transformNumberForEnum')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const items = getEnum(schema)

  return renderNumberForEnum(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri: normaliseUri(parentUri), uri, selectedItems }, elements: { enum: { ...getElementsFieldPropsForEnum(params, uri), selectedItems, items } } } })
}

/*
 *  "anyOf" is look-up
 *
 *  "anyOf" gets selected items
 *
 *  "anyOf" does not get value or default value
 */
export function transformNumberForAnyOf (schema, rootSchema, values, params) {
  log('transformNumberForAnyOf')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformNumberByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  return renderNumberForAnyOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri: normaliseUri(parentUri), uri, selectedItems }, elements: { anyOf: { ...getElementsFieldPropsForAnyOf(params, uri), selectedItems, items } } } })
}

/*
 *  "oneOf" is look-up
 *
 *  "oneOf" gets selected items
 *
 *  "oneOf" does not get value or default value
 */
export function transformNumberForOneOf (schema, rootSchema, values, params) {
  log('transformNumberForOneOf')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformNumberByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  return renderNumberForOneOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri: normaliseUri(parentUri), uri, selectedItems }, elements: { oneOf: { ...getElementsFieldPropsForOneOf(params, uri), selectedItems, items } } } })
}

/*
 *  "allOf" is not look-up
 *
 *  "allOf" does not get selected items
 *
 *  "allOf" gets value and default value
 */
export function transformNumberForAllOf (schema, rootSchema, values, params) {
  log('transformNumberForAllOf')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const { allOf = [], ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  return renderNumberForAllOf(itemSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema, rootSchema, parentUri: normaliseUri(parentUri), uri, ...getMetaValue(values, uri, schema) }, elements: { field: { ...getElementsFieldPropsForAllOf(params, uri), ...getElementsFieldValue(values, uri, schema) } } } })
}

/*
 *  "enum" is look-up
 *
 *  "enum" gets selected items
 *
 *  "enum" does not get value or default value
 */
export function transformStringByKeyForEnum (schema, rootSchema, values, params) {
  log('transformStringByKeyForEnum')

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const parentUri = normaliseUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const items = getEnum(schema)

  return renderStringForEnum(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri, uri, selectedItems, name: fieldKey }, elements: { enum: { ...getElementsFieldPropsForEnum(params, uri), selectedItems, items } } } })
}

/*
 *  "anyOf" is look-up
 *
 *  "anyOf" gets selected items
 *
 *  "anyOf" does not get value or default value
 */
export function transformStringByKeyForAnyOf (schema, rootSchema, values, params) {
  log('transformStringByKeyForAnyOf')

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const parentUri = normaliseUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformStringByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  return renderStringForAnyOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri, uri, selectedItems, name: fieldKey }, elements: { anyOf: { ...getElementsFieldPropsForAnyOf(params, uri), selectedItems, items } } } })
}

/*
 *  "oneOf" is look-up
 *
 *  "oneOf" gets selected items
 *
 *  "oneOf" does not get value or default value
 */
export function transformStringByKeyForOneOf (schema, rootSchema, values, params) {
  log('transformStringByKeyForOneOf')

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const parentUri = normaliseUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformStringByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  return renderStringForOneOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri, uri, selectedItems, name: fieldKey }, elements: { oneOf: { ...getElementsFieldPropsForOneOf(params, uri), selectedItems, items } } } })
}

/*
 *  "allOf" is not look-up
 *
 *  "allOf" does not get selected items
 *
 *  "allOf" gets value and default value
 */
export function transformStringByKeyForAllOf (schema, rootSchema, values, params) {
  log('transformStringByKeyForAllOf')

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const parentUri = normaliseUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const { allOf = [], ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  return renderStringForAllOf(itemSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema, rootSchema, parentUri, uri, ...getMetaValue(values, uri, schema), name: fieldKey }, elements: { field: { ...getElementsFieldPropsForAllOf(params, uri), ...getElementsFieldValue(values, uri, schema) } } } })
}

/*
 *  "enum" is look-up
 *
 *  "enum" gets selected items
 *
 *  "enum" does not get value or default value
 */
export function transformStringByIndexForEnum (schema, rootSchema, values, params) {
  log('transformStringByIndexForEnum')

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const parentUri = normaliseUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const items = getEnum(schema)

  return renderStringForEnum(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri, uri, selectedItems, item: arrayIndex }, elements: { enum: { ...getElementsFieldPropsForEnum(params, uri), selectedItems, items } } } })
}

/*
 *  "anyOf" is look-up
 *
 *  "anyOf" gets selected items
 *
 *  "anyOf" does not get value or default value
 */
export function transformStringByIndexForAnyOf (schema, rootSchema, values, params) {
  log('transformStringByIndexForAnyOf')

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const parentUri = normaliseUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformStringByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  return renderStringForAnyOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri, uri, selectedItems, item: arrayIndex }, elements: { anyOf: { ...getElementsFieldPropsForAnyOf(params, uri), selectedItems, items } } } })
}

/*
 *  "oneOf" is look-up
 *
 *  "oneOf" gets selected items
 *
 *  "oneOf" does not get value or default value
 */
export function transformStringByIndexForOneOf (schema, rootSchema, values, params) {
  log('transformStringByIndexForOneOf')

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const parentUri = normaliseUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformStringByIndex(rootSchema, values, { ...params, parentUri: uri }))

  return renderStringForOneOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri, uri, selectedItems, item: arrayIndex }, elements: { oneOf: { ...getElementsFieldPropsForOneOf(params, uri), selectedItems, items } } } })
}

/*
 *  "allOf" is not look-up
 *
 *  "allOf" does not get selected items
 *
 *  "allOf" gets value and default value
 */
export function transformStringByIndexForAllOf (schema, rootSchema, values, params) {
  log('transformStringByIndexForAllOf')

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const parentUri = normaliseUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const { allOf = [], ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  return renderStringForAllOf(itemSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema, rootSchema, parentUri, uri, ...getMetaValue(values, uri, schema), item: arrayIndex }, elements: { field: { ...getElementsFieldPropsForAllOf(params, uri), ...getElementsFieldValue(values, uri, schema) } } } })
}

/*
 *  "enum" is look-up
 *
 *  "enum" gets selected items
 *
 *  "enum" does not get value or default value
 */
export function transformStringForEnum (schema, rootSchema, values, params) {
  log('transformStringForEnum')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const items = getEnum(schema)

  return renderStringForEnum(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri: normaliseUri(parentUri), uri, selectedItems }, elements: { enum: { ...getElementsFieldPropsForEnum(params, uri), selectedItems, items } } } })
}

/*
 *  "anyOf" is look-up
 *
 *  "anyOf" gets selected items
 *
 *  "anyOf" does not get value or default value
 */
export function transformStringForAnyOf (schema, rootSchema, values, params) {
  log('transformStringForAnyOf')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformStringByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  return renderStringForAnyOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri: normaliseUri(parentUri), uri, selectedItems }, elements: { anyOf: { ...getElementsFieldPropsForAnyOf(params, uri), selectedItems, items } } } })
}

/*
 *  "oneOf" is look-up
 *
 *  "oneOf" gets selected items
 *
 *  "oneOf" does not get value or default value
 */
export function transformStringForOneOf (schema, rootSchema, values, params) {
  log('transformStringForOneOf')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformStringByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  return renderStringForOneOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema, rootSchema, parentUri: normaliseUri(parentUri), uri, selectedItems }, elements: { oneOf: { ...getElementsFieldPropsForOneOf(params, uri), selectedItems, items } } } })
}

/*
 *  "allOf" is not look-up
 *
 *  "allOf" does not get selected items
 *
 *  "allOf" gets value and default value
 */
export function transformStringForAllOf (schema, rootSchema, values, params) {
  log('transformStringForAllOf')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const { allOf = [], ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  return renderStringForAllOf(itemSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema, rootSchema, parentUri: normaliseUri(parentUri), uri, ...getMetaValue(values, uri, schema) }, elements: { field: { ...getElementsFieldPropsForAllOf(params, uri), ...getElementsFieldValue(values, uri, schema) } } } })
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
export function transformNullByKey (schema, rootSchema, values, params) {
  log('transformNullByKey (1)')

  if (hasEnum(schema)) {
    return transformNullByKeyForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformNullByKeyForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformNullByKeyForOneOf(schema, rootSchema, values, params)
      } else {
        if (hasAllOf(schema)) {
          return transformNullByKeyForAllOf(schema, rootSchema, values, params)
        }
      }
    }
  }

  log('transformNullByKey (2)')

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const parentUri = normaliseUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  /*
   *  Do not get the value
   */
  return renderNull(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema, rootSchema, parentUri, uri, name: fieldKey }, elements: getElementsProps(params, uri) } })
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
export function transformNullByIndex (schema, rootSchema, values, params) {
  log('transformNullByIndex (1)')

  if (hasEnum(schema)) {
    return transformNullByIndexForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformNullByIndexForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformNullByIndexForOneOf(schema, rootSchema, values, params)
      } else {
        if (hasAllOf(schema)) {
          return transformNullByIndexForAllOf(schema, rootSchema, values, params)
        }
      }
    }
  }

  log('transformNullByIndex (2)')

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const parentUri = normaliseUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  /*
   *  Do not get the value
   */
  return renderNull(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema, rootSchema, parentUri, uri, item: arrayIndex }, elements: getElementsProps(params, uri) } })
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
export function transformBooleanByKey (schema, rootSchema, values, params) {
  log('transformBooleanByKey (1)')

  if (hasEnum(schema)) {
    return transformBooleanByKeyForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformBooleanByKeyForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformBooleanByKeyForOneOf(schema, rootSchema, values, params)
      } else {
        if (hasAllOf(schema)) {
          return transformBooleanByKeyForAllOf(schema, rootSchema, values, params)
        }
      }
    }
  }

  log('transformBooleanByKey (2)')

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  /*
   *  Resolve `parentUri` and `uri`
   */
  const parentUri = normaliseUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  /*
   *  Do not get the value
   */
  return renderBoolean(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema, rootSchema, parentUri, uri, name: fieldKey }, elements: getElementsProps(params, uri) } })
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
export function transformBooleanByIndex (schema, rootSchema, values, params) {
  log('transformBooleanByIndex (1)')

  if (hasEnum(schema)) {
    return transformBooleanByIndexForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformBooleanByIndexForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformBooleanByIndexForOneOf(schema, rootSchema, values, params)
      } else {
        if (hasAllOf(schema)) {
          return transformBooleanByIndexForAllOf(schema, rootSchema, values, params)
        }
      }
    }
  }

  log('transformBooleanByIndex (2)')

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  /*
   *  Resolve `parentUri` and `uri`
   */
  const parentUri = normaliseUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  /*
   *  Do not get the value
   */
  return renderBoolean(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema, rootSchema, parentUri, uri, item: arrayIndex }, elements: getElementsProps(params, uri) } })
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.5
export function transformObjectByKey (schema, rootSchema, values, params) {
  log('transformObjectByKey (1)')

  if (hasEnum(schema)) {
    return transformObjectByKeyForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformObjectByKeyForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformObjectByKeyForOneOf(schema, rootSchema, values, params)
      } else {
        if (hasAllOf(schema)) {
          return transformObjectByKeyForAllOf(schema, rootSchema, values, params)
        }
      }
    }
  }

  log('transformObjectByKey (2)')

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey
  } = params

  const parentUri = normaliseUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const {
    properties = {},
    required = []
  } = schema

  const fields = (
    Object
      .entries(properties)
      .map(mapTransformByKey(rootSchema, values, { ...params, parentUri: uri, required }))
  )

  /*
  const fields = (
    Object
      .entries(properties)
      .map(([key, schema]) => {
        return getTransformByKey(schema, rootSchema, values, { ...params, parentUri: uri, isRequired: required.includes(key), key })

        *//*
        if (hasEnum(schema)) {
          log('transformObjectByKey (`enum`)')

          return getTransformByKeyForEnum(schema, rootSchema, values, { ...params, parentUri: uri, key, isRequired: required.includes(key) })

          *//*
           *  Get selected items for the uri
           *//*
          const schemaUri = getUri(uri, key)
          const selectedItems = getSelectedItemsForUri(values, uri, schemaUri, schema)
          const isRequired = required.includes(key)

          // log(getValueForEnum(index, schema))

          return transformByKey(schema, rootSchema, values, { ...params, parentUri: uri, uri: schemaUri, [schemaUri]: { meta: { ...getMetaProps(params, schemaUri), selectedItems, isRequired }, elements: { enum: { ...getElementsFieldPropsForEnum(params, schemaUri), selectedItems, isRequired } } }, key })
          *//*
        } else {
          if (hasAnyOf(schema)) {
            log('transformObjectByKey (`anyOf`)')

            return getTransformByKeyForAnyOf(schema, rootSchema, values, { ...params, parentUri: uri, key, isRequired: required.includes(key) })

            *//*
             *  Get selected items for the uri
             *//*
            const schemaUri = getUri(uri, key)
            const selectedItems = getSelectedItemsForUri(values, uri, schemaUri, schema)
            const isRequired = required.includes(key)

            // log(getValueForAnyOf(index, schema))

            return transformByKey(schema, rootSchema, values, { ...params, parentUri: uri, uri: schemaUri, [schemaUri]: { meta: { ...getMetaProps(params, schemaUri), selectedItems, isRequired }, elements: { anyOf: { ...getElementsFieldPropsForAnyOf(params, schemaUri), selectedItems, isRequired } } }, key })
            *//*
          } else {
            if (hasOneOf(schema)) {
              log('transformObjectByKey (`oneOf`)')

              return getTransformByKeyForOneOf(schema, rootSchema, values, { ...params, parentUri: uri, key, isRequired: required.includes(key) })

              /*
               *  Get selected items for the uri
               *//*
              const schemaUri = getUri(uri, key)
              const selectedItems = getSelectedItemsForUri(values, uri, schemaUri, schema)
              const isRequired = required.includes(key)

              // log(getValueForOneOf(index, schema))

              return transformByKey(schema, rootSchema, values, { ...params, parentUri: uri, uri: schemaUri, [schemaUri]: { meta: { ...getMetaProps(params, schemaUri), selectedItems, isRequired }, elements: { oneOf: { ...getElementsFieldPropsForOneOf(params, schemaUri), selectedItems, isRequired } } }, key })
              *//*
            }
          }
        }

        log('transformObjectByKey (`value` `defaultValue`)')

        *//*
         *  Schemas without `enum`, `anyOf`, or `oneOf` do not have selected items
         *//*

        *//*
         *  Schemas may be required
         *//*

        *//*
         *  Schemas may have a value
         *//*

        *//*
         *  Array schemas do not have a value
         *//*

        *//*
         *  Object schemas do not have a value
         *//*

        const schemaUri = getUri(uri, key)
        const isRequired = required.includes(key)

        *//*
         *  Do not get the value
         *//*

        return transformByKey(schema, rootSchema, values, { ...params, parentUri: uri, uri: schemaUri, [schemaUri]: { meta: { ...getMetaProps(params, schemaUri), isRequired }, elements: { field: { ...getElementsFieldProps(params, schemaUri), isRequired } } }, key })
        *//*
      })
  )
  */

  return renderObject(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema, rootSchema, parentUri, uri, name: fieldKey }, elements: { ...getElementsProps(params, uri), fields } } })
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.5
export function transformObjectByIndex (schema, rootSchema, values, params) {
  log('transformObjectByIndex (1)')

  if (hasEnum(schema)) {
    return transformObjectByIndexForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformObjectByIndexForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformObjectByIndexForOneOf(schema, rootSchema, values, params)
      } else {
        if (hasAllOf(schema)) {
          return transformObjectByIndexForAllOf(schema, rootSchema, values, params)
        }
      }
    }
  }

  log('transformObjectByIndex (2)')

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const parentUri = normaliseUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    properties = {},
    required = []
  } = schema

  const fields = (
    Object
      .entries(properties)
      .map(mapTransformByKey(rootSchema, values, { ...params, parentUri: uri, required }))
  )

  /*
  const fields = (
    Object
      .entries(properties)
      .map(([key, schema]) => {
        return getTransformByKey(schema, rootSchema, values, { ...params, parentUri: uri, isRequired: required.includes(key), key })

        *//*
        if (hasEnum(schema)) {
          log('transformObjectByIndex (`enum`)')

          return getTransformByKeyForEnum(schema, rootSchema, values, { ...params, parentUri: uri, key, isRequired: required.includes(key) })

          *//*
           *  Get selected items for the uri
           *//*
          const schemaUri = getUri(uri, key)
          const selectedItems = getSelectedItemsForUri(values, uri, schemaUri, schema)
          const isRequired = required.includes(key)

          // log(getValueForEnum(index, schema))

          return transformByKey(schema, rootSchema, values, { ...params, parentUri: uri, uri: schemaUri, [schemaUri]: { meta: { ...getMetaProps(params, schemaUri), selectedItems, isRequired }, elements: { enum: { ...getElementsFieldPropsForEnum(params, schemaUri), selectedItems, isRequired } } }, key })
          *//*
        } else {
          if (hasAnyOf(schema)) {
            log('transformObjectByIndex (`anyOf`)')

            return getTransformByKeyForAnyOf(schema, rootSchema, values, { ...params, parentUri: uri, key, isRequired: required.includes(key) })

            /*
             *  Get selected items for the uri
             *//*
            const schemaUri = getUri(uri, key)
            const selectedItems = getSelectedItemsForUri(values, uri, schemaUri, schema)
            const isRequired = required.includes(key)

            // log(getValueForAnyOf(index, schema))

            return transformByKey(schema, rootSchema, values, { ...params, parentUri: uri, uri: schemaUri, [schemaUri]: { meta: { ...getMetaProps(params, schemaUri), selectedItems, isRequired }, elements: { anyOf: { ...getElementsFieldPropsForAnyOf(params, schemaUri), selectedItems, isRequired } } }, key })
            *//*
          } else {
            if (hasOneOf(schema)) {
              log('transformObjectByIndex (`oneOf`)')

              return getTransformByKeyForOneOf(schema, rootSchema, values, { ...params, parentUri: uri, key, isRequired: required.includes(key) })

              *//*
               *  Get selected items for the uri
               *//*
              const schemaUri = getUri(uri, key)
              const selectedItems = getSelectedItemsForUri(values, uri, schemaUri, schema)
              const isRequired = required.includes(key)

              // log(getValueForOneOf(index, schema))

              return transformByKey(schema, rootSchema, values, { ...params, parentUri: uri, uri: schemaUri, [schemaUri]: { meta: { ...getMetaProps(params, schemaUri), selectedItems, isRequired }, elements: { oneOf: { ...getElementsFieldPropsForOneOf(params, schemaUri), selectedItems, isRequired } } }, key })
              *//*
            }
          }
        }

        log('transformObjectByIndex (`value` `defaultValue`)')

        *//*
         *  Schemas without `enum`, `anyOf`, or `oneOf` do not have selected items
         *//*

        *//*
         *  Schemas may be required
         *//*

        *//*
         *  Schemas may have a value
         *//*

        *//*
         *  Array schemas do not have a value
         *//*

        *//*
         *  Object schemas do not have a value
         *//*

        const schemaUri = getUri(uri, key)
        const isRequired = required.includes(key)

        *//*
         *  Do not get the value
         *//*

        return transformByKey(schema, rootSchema, values, { ...params, parentUri: uri, uri: schemaUri, [schemaUri]: { meta: { ...getMetaProps(params, schemaUri), isRequired }, elements: { field: { ...getElementsFieldProps(params, schemaUri), isRequired } } }, key })
        *//*
      })
  )
  */

  return renderObject(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema, rootSchema, parentUri, uri, item: arrayIndex }, elements: { ...getElementsProps(params, uri), fields } } })
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.4
export function transformArrayByKey (schema, rootSchema, values, params) {
  log('transformArrayByKey (1)')

  if (hasEnum(schema)) {
    return transformArrayByKeyForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformArrayByKeyForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformArrayByKeyForOneOf(schema, rootSchema, values, params)
      } else {
        if (hasAllOf(schema)) {
          return transformArrayByKeyForAllOf(schema, rootSchema, values, params)
        }
      }
    }
  }

  log('transformArrayByKey (2)')

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const parentUri = normaliseUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const {
    items = [] // array or object
  } = schema

  if (isArray(items)) {
    log('transformArrayByKey (2 - 1)')

    log(`

Array with "items" array

    `)

    const fields = items.map(mapTransformByIndex(rootSchema, values, { ...params, parentUri: uri }))

    return renderArray(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema, rootSchema, parentUri, uri, name: fieldKey }, elements: { ...getElementsProps(params, uri), fields } } })
  } else {
    if (isObject(items)) {
      log('transformArrayByKey (2 - 2)')

      log(`

Array with "items" object

      `)

      const fields = [
        getTransformByIndex(items, rootSchema, values, { ...params, parentUri: uri })
      ]

      return renderArray(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema, rootSchema, parentUri, uri, name: fieldKey }, elements: { ...getElementsProps(params, uri), fields } } })

      /*
      let fields
      if (hasEnum(items)) {
        log('transformArrayByKey (`enum`)')

        fields = [
          getTransformByIndexForEnum(items, rootSchema, values, { ...params, parentUri: uri })
        ]

        *//*
         *  Get selected items for the parent uri
         *//*
        const schemaUri = getUri(uri, 0)
        const selectedItems = getSelectedItemsForParentUri(values, uri, schemaUri, items)

        // log(getValueForEnum(getIndexForEnum(values, uri, schemaUri, items), items))

        fields = [
          transformByIndex(items, rootSchema, values, { ...params, parentUri: uri, uri: schemaUri, [schemaUri]: { meta: { ...getMetaProps(params, schemaUri), selectedItems }, elements: { enum: { ...getElementsFieldPropsForEnum(params, schemaUri), selectedItems } } } })
        ]
        *//*
      } else {
        if (hasAnyOf(items)) {
          log('transformArrayByKey (`anyOf`)')

          fields = [
            getTransformByIndexForAnyOf(items, rootSchema, values, { ...params, parentUri: uri })
          ]

          *//*
           *  Get selected items for the parent uri
           *//*
          const schemaUri = getUri(uri, 0)
          const selectedItems = getSelectedItemsForParentUri(values, uri, schemaUri, items)

          // log(getValueForAnyOf(0, items))

          fields = [
            transformByIndex(items, rootSchema, values, { ...params, parentUri: uri, uri: schemaUri, [schemaUri]: { meta: { ...getMetaProps(params, schemaUri), selectedItems }, elements: { anyOf: { ...getElementsFieldPropsForAnyOf(params, schemaUri), selectedItems } } } })
          ]
          *//*
        } else {
          if (hasOneOf(items)) {
            log('transformArrayByKey (`oneOf`)')

            fields = [
              getTransformByIndexForOneOf(items, rootSchema, values, { ...params, parentUri: uri })
            ]

            *//*
             *  Get selected items for the parent uri
             *//*
            const schemaUri = getUri(uri, 0)
            const selectedItems = getSelectedItemsForParentUri(values, uri, schemaUri, items)

            // log(getValueForOneOf(0, items))

            fields = [
              transformByIndex(items, rootSchema, values, { ...params, parentUri: uri, uri: schemaUri, [schemaUri]: { meta: { ...getMetaProps(params, schemaUri), selectedItems }, elements: { oneOf: { ...getElementsFieldPropsForOneOf(params, schemaUri), selectedItems } } } })
            ]
            *//*
          } else {
            log('transformArrayByKey (`value` `defaultValue`)')

            const schemaUri = getUri(uri, 0)

            *//*
             *  Schemas without `enum`, `anyOf`, or `oneOf` do not have selected items
             *//*

            *//*
             *  Schemas may have a value
             *//*

            *//*
             *  Array schemas do not have a value
             *//*

            *//*
             *  Object schemas do not have a value
             *//*

            log(`

Get the value

            `)

            fields = [
              transformByIndex(items, rootSchema, values, { ...params, parentUri: uri, uri: schemaUri, [schemaUri]: { meta: getMetaProps(params, schemaUri), elements: getElementsProps(params, schemaUri) } })
            ]
          }
        }
      }

      return renderArray(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema, rootSchema, parentUri, uri, name: fieldKey }, elements: { ...getElementsProps(params, uri), fields } } })
      */
    }
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.4
export function transformArrayByIndex (schema, rootSchema, values, params) {
  log('transformArrayByIndex (1)')

  if (hasEnum(schema)) {
    return transformArrayByIndexForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformArrayByIndexForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformArrayByIndexForOneOf(schema, rootSchema, values, params)
      } else {
        if (hasAllOf(schema)) {
          return transformArrayByIndexForAllOf(schema, rootSchema, values, params)
        }
      }
    }
  }

  log('transformArrayByIndex (2)')

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const parentUri = normaliseUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    items = [] // array or object
  } = schema

  if (isArray(items)) {
    log('transformArrayByIndex (2 - 1)')

    log(`

  Array with "items" array

    `)

    const fields = items.map(mapTransformByIndex(rootSchema, values, { ...params, parentUri: uri }))

    return renderArray(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema, rootSchema, parentUri, uri, item: arrayIndex }, elements: { ...getElementsProps(params, uri), fields } } })
  } else {
    if (isObject(items)) {
      log('transformArrayByIndex (2 - 2)')

      log(`

Array with "items" object

      `)

      const fields = [
        getTransformByIndex(items, rootSchema, values, { ...params, parentUri: uri })
      ]

      return renderArray(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema, rootSchema, parentUri, uri, item: arrayIndex }, elements: { ...getElementsProps(params, uri), fields } } })

      /*
      let fields
      if (hasEnum(items)) {
        log('transformArrayByIndex (`enum`)')

        fields = [
          getTransformByIndexForEnum(items, rootSchema, values, { ...params, parentUri: uri })
        ]

        *//*
         *  Get selected items for the parent uri
         *//*
        const schemaUri = getUri(uri, 0)
        const selectedItems = getSelectedItemsForParentUri(values, uri, schemaUri, items)

        // log(getValueForEnum(getIndexForEnum(values, uri, schemaUri, items), items))

        fields = [
          transformByIndex(items, rootSchema, values, { ...params, parentUri: uri, uri: schemaUri, [schemaUri]: { meta: { ...getMetaProps(params, schemaUri), selectedItems }, elements: { enum: { ...getElementsFieldPropsForEnum(params, schemaUri), selectedItems } } } })
        ]
        *//*
      } else {
        if (hasAnyOf(items)) {
          log('transformArrayByIndex (`anyOf`)')

          fields = [
            getTransformByIndexForAnyOf(items, rootSchema, values, { ...params, parentUri: uri })
          ]

          /*
           *  Get selected items for the parent uri
           *//*
          const schemaUri = getUri(uri, 0)
          const selectedItems = getSelectedItemsForParentUri(values, uri, schemaUri, items)

          // log(getValueForAnyOf(getIndexForAnyOf(values, uri, schemaUri, items), items))

          fields = [
            transformByIndex(items, rootSchema, values, { ...params, parentUri: uri, uri: schemaUri, [schemaUri]: { meta: { ...getMetaProps(params, schemaUri), selectedItems }, elements: { anyOf: { ...getElementsFieldPropsForAnyOf(params, schemaUri), selectedItems } } } })
          ]
          *//*
        } else {
          if (hasOneOf(items)) {
            log('transformArrayByIndex (`oneOf`)')

            fields = [
              getTransformByIndexForOneOf(items, rootSchema, values, { ...params, parentUri: uri })
            ]

            *//*
             *  Get selected items for the parent uri
             *//*
            const schemaUri = getUri(uri, 0)
            const selectedItems = getSelectedItemsForParentUri(values, uri, schemaUri, items)

            // log(getValueForOneOf(0, items))

            fields = [
              transformByIndex(items, rootSchema, values, { ...params, parentUri: uri, uri: schemaUri, [schemaUri]: { meta: { ...getMetaProps(params, schemaUri), selectedItems }, elements: { oneOf: { ...getElementsFieldPropsForOneOf(params, schemaUri), selectedItems } } } })
            ]
            *//*
          } else {
            log('transformArrayByIndex (`value` `defaultValue`)')

            *//*
             *  Schemas without `enum`, `anyOf`, or `oneOf` do not have selected items
             *//*

            *//*
             *  Schemas may have a value
             *//*

            *//*
             *  Array schemas do not have a value
             *//*

            *//*
             *  Object schemas do not have a value
             *//*

            const schemaUri = getUri(uri, 0)

            if (isArraySchema(items)) {
              log(`

  Array. Do not get the value

              `)

              fields = [
                transformByIndex(items, rootSchema, values, { ...params, parentUri: uri, uri: schemaUri, [schemaUri]: { meta: getMetaProps(params, schemaUri), elements: getElementsProps(params, schemaUri) } })
              ]
            } else {
              if (isObjectSchema(items)) {
                log(`

  Object. Do not get the value

                `)

                fields = [
                  transformByIndex(items, rootSchema, values, { ...params, parentUri: uri, uri: schemaUri, [schemaUri]: { meta: getMetaProps(params, schemaUri), elements: getElementsProps(params, schemaUri) } })
                ]
              } else {
                log(`

  Get the value

                `)

                if (Reflect.has(values, uri)) {
                  const value = Reflect.get(values, uri)

                  if (isArray(value)) {
                    log(`

  value is array

                    `)

                    const v = Reflect.get(value, 0)

                    fields = [
                      transformByIndex(items, rootSchema, values, { ...params, parentUri: uri, uri: schemaUri, [schemaUri]: { meta: { ...getMetaProps(params, schemaUri), value: String(v) }, elements: { field: { ...getElementsFieldProps(params, schemaUri), value: String(v) } } } })
                    ]
                  } else {
                    if (isObject(value)) {
                      log(`

  value is object

                      `)

                      const v = Reflect.get(value, 0)

                      fields = [
                        transformByIndex(items, rootSchema, values, { ...params, parentUri: uri, uri: schemaUri, [schemaUri]: { meta: { ...getMetaProps(params, schemaUri), value: String(v) }, elements: { field: { ...getElementsFieldProps(params, schemaUri), value: String(v) } } } })
                      ]
                    } else {
                      log(`

  value is neither an array nor an object

                      `)

                      fields = [
                        transformByIndex(items, rootSchema, values, { ...params, parentUri: uri, uri: schemaUri, [schemaUri]: { meta: { ...getMetaProps(params, schemaUri), value: String(value) }, elements: { field: { ...getElementsFieldProps(params, schemaUri), value: String(value) } } } })
                      ]
                    }
                  }
                } else {
                  fields = [
                    transformByIndex(items, rootSchema, values, { ...params, parentUri: uri, uri: schemaUri, [schemaUri]: { meta: getMetaProps(params, schemaUri), elements: getElementsProps(params, schemaUri) } })
                  ]
                }
              }
            }
          }
        }
      }

      return renderArray(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema, rootSchema, parentUri, uri, item: arrayIndex }, elements: { ...getElementsProps(params, uri), fields } } })
      */
    }
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.2
export function transformNumberByKey (schema, rootSchema, values, params) {
  log('transformNumberByKey (1)')

  if (hasEnum(schema)) {
    return transformNumberByKeyForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformNumberByKeyForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformNumberByKeyForOneOf(schema, rootSchema, values, params)
      } else {
        if (hasAllOf(schema)) {
          return transformNumberByKeyForAllOf(schema, rootSchema, values, params)
        }
      }
    }
  }

  log('transformNumberByKey (2)')

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  /*
   *  Resolve `parentUri` and `uri`
   */
  const parentUri = normaliseUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  /*
   *  Do not get the value
   */
  return renderNumber(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema, rootSchema, parentUri, uri, name: fieldKey }, elements: getElementsProps(params, uri) } })
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.2
export function transformNumberByIndex (schema, rootSchema, values, params) {
  log('transformNumberByIndex (1)')

  if (hasEnum(schema)) {
    return transformNumberByIndexForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformNumberByIndexForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformNumberByIndexForOneOf(schema, rootSchema, values, params)
      } else {
        if (hasAllOf(schema)) {
          return transformNumberByIndexForAllOf(schema, rootSchema, values, params)
        }
      }
    }
  }

  log('transformNumberByIndex (2)')

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  /*
   *  Resolve `parentUri` and `uri`
   */
  const parentUri = normaliseUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  /*
   *  Do not get the value
   */
  return renderNumber(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema, rootSchema, parentUri, uri, item: arrayIndex }, elements: getElementsProps(params, uri) } })
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.3
export function transformStringByKey (schema, rootSchema, values, params) {
  log('transformStringByKey (1)')

  if (hasEnum(schema)) {
    return transformStringByKeyForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformStringByKeyForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformStringByKeyForOneOf(schema, rootSchema, values, params)
      } else {
        if (hasAllOf(schema)) {
          return transformStringByKeyForAllOf(schema, rootSchema, values, params)
        }
      }
    }
  }

  log('transformStringByKey (2)')

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  /*
   *  Resolve `parentUri` and `uri`
   */
  const parentUri = normaliseUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  /*
   *  Do not get the value
   */
  return renderString(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema, rootSchema, parentUri, uri, name: fieldKey }, elements: getElementsProps(params, uri) } })
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.3
export function transformStringByIndex (schema, rootSchema, values, params) {
  log('transformStringByIndex (1)')

  if (hasEnum(schema)) {
    return transformStringByIndexForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformStringByIndexForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformStringByIndexForOneOf(schema, rootSchema, values, params)
      } else {
        if (hasAllOf(schema)) {
          return transformStringByIndexForAllOf(schema, rootSchema, values, params)
        }
      }
    }
  }

  log('transformStringByIndex (2)')

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  /*
   *  Resolve `parentUri` and `uri`
   */
  const parentUri = normaliseUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  /*
   *  Do not get the value
   */
  return renderString(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema, rootSchema, parentUri, uri, item: arrayIndex }, elements: getElementsProps(params, uri) } })
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
export function transformNull (schema, rootSchema, values, params) {
  log('transformNull (1)')

  if (hasEnum(schema)) {
    return transformNullForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformNullForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformNullForOneOf(schema, rootSchema, values, params)
      } else {
        if (hasAllOf(schema)) {
          return transformNullForAllOf(schema, rootSchema, values, params)
        }
      }
    }
  }

  log('transformNull (2)')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  /*
   *  Do not get the value
   */
  return renderNull(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema, rootSchema, parentUri, uri }, elements: getElementsProps(params, uri) } })
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
export function transformBoolean (schema, rootSchema, values, params) {
  log('transformBoolean (1)')

  if (hasEnum(schema)) {
    return transformBooleanForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformBooleanForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformBooleanForOneOf(schema, rootSchema, values, params)
      } else {
        if (hasAllOf(schema)) {
          return transformBooleanForAllOf(schema, rootSchema, values, params)
        }
      }
    }
  }

  log('transformBoolean (2)')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  /*
   *  Do not get the value
   */
  return renderBoolean(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema, rootSchema, parentUri, uri }, elements: getElementsProps(params, uri) } })
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.5
export function transformObject (schema, rootSchema, values, params) {
  log('transformObject (1)')

  if (hasEnum(schema)) {
    return transformObjectForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformObjectForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformObjectForOneOf(schema, rootSchema, values, params)
      } else {
        if (hasAllOf(schema)) {
          return transformObjectForAllOf(schema, rootSchema, values, params)
        }
      }
    }
  }

  log('transformObject (2)')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const {
    properties = {},
    required = []
  } = schema

  const fields = (
    Object
      .entries(properties)
      .map(mapTransformByKey(rootSchema, values, { ...params, parentUri: uri, required }))
  )

  /*
  const fields = (
    Object
      .entries(properties)
      .map(([key, schema], index) => {
        return getTransformByKey(schema, rootSchema, values, { ...params, parentUri: uri, isRequired: required.includes(key), key, index })

        *//*
        if (hasEnum(schema)) {
          log('transformObject (`enum`)')

          return getTransformByKeyForEnum(schema, rootSchema, values, { ...params, parentUri: uri, key, isRequired: required.includes(key) })

          *//*
           *  Get selected items for the uri
           *//*
          const schemaUri = getUri(uri, key)
          const {
            selectedItems = getSelectedItemsForUri(values, uri, schemaUri, schema),
            ...metaProps
          } = getMetaProps(params, schemaUri)

          const isRequired = required.includes(key)

          // log(getValueForEnum(index, schema))

          return transformByKey(schema, rootSchema, values, { ...params, parentUri: uri, uri: schemaUri, [schemaUri]: { meta: { ...metaProps, selectedItems, isRequired }, elements: { enum: { ...getElementsFieldPropsForEnum(params, schemaUri), selectedItems, isRequired } } }, key })
          *//*
        } else {
          if (hasAnyOf(schema)) {
            log('transformObject (`anyOf`)')

            return getTransformByKeyForAnyOf(schema, rootSchema, values, { ...params, parentUri: uri, key, isRequired: required.includes(key) })

            *//*
             *  Get selected items for the uri
             *//*
            const schemaUri = getUri(uri, key)
            const {
              selectedItems = getSelectedItemsForUri(values, uri, schemaUri, schema),
              ...metaProps
            } = getMetaProps(params, schemaUri)
            const isRequired = required.includes(key)

            // log(getValueForAnyOf(index, schema))

            return transformByKey(schema, rootSchema, values, { ...params, parentUri: uri, uri: schemaUri, [schemaUri]: { meta: { ...metaProps, selectedItems, isRequired }, elements: { anyOf: { ...getElementsFieldPropsForAnyOf(params, schemaUri), selectedItems, isRequired } } }, key })
            *//*
          } else {
            if (hasOneOf(schema)) {
              log('transformObject (`oneOf`)')

              return getTransformByKeyForOneOf(schema, rootSchema, values, { ...params, parentUri: uri, key, isRequired: required.includes(key) })

              *//*
               *  Get selected items for the uri
               *//*
              const schemaUri = getUri(uri, key)
              const {
                selectedItems = getSelectedItemsForUri(values, uri, schemaUri, schema),
                ...metaProps
              } = getMetaProps(params, schemaUri)
              const isRequired = required.includes(key)

              // log(getValueForOneOf(index, schema))

              return transformByKey(schema, rootSchema, values, { ...params, parentUri: uri, uri: schemaUri, [schemaUri]: { meta: { ...metaProps, selectedItems, isRequired }, elements: { oneOf: { ...getElementsFieldPropsForOneOf(params, schemaUri), selectedItems, isRequired } } }, key })
              *//*
            }
          }
        }

        log('transformObject (`value` `defaultValue`)')

        *//*
         *  Schemas without `enum`, `anyOf`, or `oneOf` do not have selected items
         *//*

        *//*
         *  Schemas may be required
         *//*

        *//*
         *  Schemas may have a value
         *//*

        const schemaUri = getUri(uri, key)
        const isRequired = required.includes(key)

        *//*
         *  Do not get the value
         *//*
        return transformByKey(schema, rootSchema, values, { ...params, parentUri: uri, uri: schemaUri, [schemaUri]: { meta: { ...getMetaProps(params, schemaUri), isRequired }, elements: { field: { ...getElementsFieldProps(params, schemaUri), isRequired } } }, key })
        *//*
      })
  )
  */

  return renderObject(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema, rootSchema, parentUri, uri }, elements: { ...getElementsProps(params, uri), fields } } })
}

export function getTransformByKey (schema, rootSchema, values, params) {
  if (hasEnum(schema)) {
    log('getTransformByKey (`enum`)')

    return getTransformByKeyForEnum(schema, rootSchema, values, params) // { ...params, parentUri: uri, key, isRequired: required.includes(key) })

    /*
     *  Get selected items for the uri
     *//*
    const schemaUri = getUri(uri, key)
    const selectedItems = getSelectedItemsForUri(values, uri, schemaUri, schema)
    const isRequired = required.includes(key)

    // log(getValueForEnum(index, schema))

    return transformByKey(schema, rootSchema, values, { ...params, parentUri: uri, uri: schemaUri, [schemaUri]: { meta: { ...getMetaProps(params, schemaUri), selectedItems, isRequired }, elements: { enum: { ...getElementsFieldPropsForEnum(params, schemaUri), selectedItems, isRequired } } }, key })
    */
  } else {
    if (hasAnyOf(schema)) {
      log('getTransformByKey (`anyOf`)')

      return getTransformByKeyForAnyOf(schema, rootSchema, values, params) // { ...params, parentUri: uri, key, isRequired: required.includes(key) })

      /*
       *  Get selected items for the uri
       *//*
      const schemaUri = getUri(uri, key)
      const selectedItems = getSelectedItemsForUri(values, uri, schemaUri, schema)
      const isRequired = required.includes(key)

      // log(getValueForAnyOf(index, schema))

      return transformByKey(schema, rootSchema, values, { ...params, parentUri: uri, uri: schemaUri, [schemaUri]: { meta: { ...getMetaProps(params, schemaUri), selectedItems, isRequired }, elements: { anyOf: { ...getElementsFieldPropsForAnyOf(params, schemaUri), selectedItems, isRequired } } }, key })
      */
    } else {
      if (hasOneOf(schema)) {
        log('getTransformByKey (`oneOf`)')

        return getTransformByKeyForOneOf(schema, rootSchema, values, params) // { ...params, parentUri: uri, key, isRequired: required.includes(key) })

        /*
         *  Get selected items for the uri
         *//*
        const schemaUri = getUri(uri, key)
        const selectedItems = getSelectedItemsForUri(values, uri, schemaUri, schema)
        const isRequired = required.includes(key)

        // log(getValueForOneOf(index, schema))

        return transformByKey(schema, rootSchema, values, { ...params, parentUri: uri, uri: schemaUri, [schemaUri]: { meta: { ...getMetaProps(params, schemaUri), selectedItems, isRequired }, elements: { oneOf: { ...getElementsFieldPropsForOneOf(params, schemaUri), selectedItems, isRequired } } }, key })
        */
      }
    }
  }

  log('getTransformByKey (`value` `defaultValue`)')

  const {
    parentUri,
    key = '',
    isRequired = false
  } = params

  const uri = getUri(parentUri, key)

  log({ parentUri, uri, key, isRequired })

  return transformByKey(schema, rootSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), isRequired }, elements: { field: { ...getElementsFieldPropsForAllOf(params, uri), isRequired } } }, key }) // { ...params, parentUri: uri, uri: schemaUri, [schemaUri]: { meta: { ...getMetaProps(params, schemaUri), isRequired }, elements: { field: { ...getElementsFieldPropsForAllOf(params, schemaUri), isRequired } } }, key })
}

export function getTransformByIndex (schema, rootSchema, values, params) {
  if (hasEnum(schema)) {
    log('getTransformByIndex (`enum`)')

    return getTransformByIndexForEnum(schema, rootSchema, values, params)

    /*
     *  Get selected items for the parent uri
     *//*
    const uri = getUri(parentUri, index)
    const selectedItems = getSelectedItemsForParentUri(values, parentUri, uri, schema)

    // log(getValueForEnum(index, schema))

    fields = [
      transformByIndex(schema, rootSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), parentUri, uri, selectedItems }, elements: { enum: { ...getElementsFieldPropsForEnum(params, uri), selectedItems } } } })
    ]
    */
  } else {
    if (hasAnyOf(schema)) {
      log('getTransformByIndex (`anyOf`)')

      return getTransformByIndexForAnyOf(schema, rootSchema, values, params)

      /*
       *  Get selected items for the parent uri
       *//*
      const uri = getUri(parentUri, index)
      const selectedItems = getSelectedItemsForParentUri(values, parentUri, uri, schema)

      // log(getValueForAnyOf(index, schema))

      fields = [
        transformByIndex(schema, rootSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), parentUri, uri, selectedItems }, elements: { anyOf: { ...getElementsFieldPropsForAnyOf(params, uri), selectedItems } } } })
      ]
      */
    } else {
      if (hasOneOf(schema)) {
        log('getTransformByIndex (`oneOf`)')

        return getTransformByIndexForOneOf(schema, rootSchema, values, params)

        /*
         *  Get selected items for the parent uri
         *//*
        const uri = getUri(parentUri, index)
        const selectedItems = getSelectedItemsForParentUri(values, parentUri, uri, schema)

        // log(getValueForOneOf(index, schema))

        fields = [
          transformByIndex(schema, rootSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), parentUri, uri, selectedItems }, elements: { anyOf: { ...getElementsFieldPropsForAnyOf(params, uri), selectedItems } } } })
        ]
        */
      }
    }
  }

  log('getTransformByIndex (`value` `defaultValue`)')

  const {
    parentUri,
    index = 0
  } = params

  const uri = getUri(parentUri, index)

  /*
   *  Schemas without `enum`, `anyOf`, or `oneOf` do not have selected items
   */

  /*
   *  Schemas may have a value
   */

  /*
   *  Array schemas do not have a value
   */

  /*
   *  Object schemas do not have a value
   */

  log(`

Get the value

  `)

  if (isArraySchema(schema)) {
    log(`

Array. Do not get the value

    `)

    return transformByIndex(schema, rootSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), parentUri, uri }, elements: getElementsProps(params, uri) } })
  } else {
    if (isObjectSchema(schema)) {
      log(`

Object. Do not get the value

      `)

      return transformByIndex(schema, rootSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), parentUri, uri }, elements: getElementsProps(params, uri) } })
    } else {
      log(`

Get the value

      `)

      if (Reflect.has(values, parentUri)) {
        const value = Reflect.get(values, parentUri)

        if (isArray(value)) {
          log(`

value is array

          `)

          if (Reflect.has(value, index)) {
            const v = Reflect.get(value, index)

            return transformByIndex(schema, rootSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), parentUri, uri, value: String(v) }, elements: { field: { ...getElementsFieldProps(params, uri), value: String(v) } } } })
          }
        } else {
          if (isObject(value)) {
            log(`

value is object

            `)

            if (Reflect.has(value, index)) {
              const v = Reflect.get(value, index)

              return transformByIndex(schema, rootSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), parentUri, uri, value: String(v) }, elements: { field: { ...getElementsFieldProps(params, uri), value: String(v) } } } })
            }
          } else {
            log(`

value is neither an array nor an object

            `)

            return transformByIndex(schema, rootSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), parentUri, uri, value: String(value) }, elements: { field: { ...getElementsFieldProps(params, uri), value: String(value) } } } })
          }
        }
      }
    }
  }

  return transformByIndex(schema, rootSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), parentUri, uri }, elements: { field: { ...getElementsFieldProps(params, uri) } } } })
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.4
export function transformArray (schema, rootSchema, values, params) {
  log('transformArray (1)')

  if (hasEnum(schema)) {
    return transformArrayForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformArrayForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformArrayForOneOf(schema, rootSchema, values, params)
      } else {
        if (hasAllOf(schema)) {
          return transformArrayForAllOf(schema, rootSchema, values, params)
        }
      }
    }
  }

  log('transformArray (2)')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const {
    items = [] // array or object
  } = schema

  if (isArray(items)) {
    log('transformArray (2 - 1)')

    log(`

  Array with "items" array

    `)

    const fields = items.map(mapTransformByIndex(rootSchema, values, { ...params, parentUri: uri }))

    return renderArray(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema, rootSchema, parentUri, uri }, elements: { ...getElementsProps(params, uri), fields } } })
  } else {
    if (isObject(items)) {
      log('transformArray (2 - 2)')

      log(`

  Array with "items" object

      `)

      const fields = [
        getTransformByIndex(items, rootSchema, values, { ...params, parentUri: uri })
      ]

      return renderArray(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema, rootSchema, parentUri, uri }, elements: { ...getElementsProps(params, uri), fields } } })

      /*
      let fields
      if (hasEnum(items)) {
        log('transformArray (`enum`)')

        fields = [
          getTransformByIndexForEnum(items, rootSchema, values, { ...params, parentUri: uri })
        ]

        *//*
         *  Get selected items for the parent uri
         *//*
        const schemaUri = getUri(uri, 0)
        const selectedItems = getSelectedItemsForParentUri(values, uri, schemaUri, items)

        // log(getValueForEnum(0, schema))

        fields = [
          transformByIndex(items, rootSchema, values, { ...params, parentUri: uri, uri: schemaUri, [schemaUri]: { meta: { ...getMetaProps(params, schemaUri), selectedItems }, elements: { enum: { ...getElementsFieldPropsForEnum(params, schemaUri), selectedItems } } } })
        ]
        *//*
      } else {
        if (hasAnyOf(items)) {
          log('transformArray (`anyOf`)')

          fields = [
            getTransformByIndexForAnyOf(items, rootSchema, values, { ...params, parentUri: uri })
          ]

          *//*
           *  Get selected items for the parent uri
           *//*
          const schemaUri = getUri(uri, 0)
          const selectedItems = getSelectedItemsForParentUri(values, uri, schemaUri, items)

          // log(getValueForAnyOf(0, schema))

          fields = [
            transformByIndex(items, rootSchema, values, { ...params, parentUri: uri, uri: schemaUri, [schemaUri]: { meta: { ...getMetaProps(params, schemaUri), selectedItems }, elements: { anyOf: { ...getElementsFieldPropsForAnyOf(params, schemaUri), selectedItems } } } })
          ]
          *//*
        } else {
          if (hasOneOf(items)) {
            log('transformArray (`oneOf`)')

            fields = [
              getTransformByIndexForOneOf(items, rootSchema, values, { ...params, parentUri: uri })
            ]

            /*
             *  Get selected items for the parent uri
             *//*
            const schemaUri = getUri(uri, 0)
            const selectedItems = getSelectedItemsForParentUri(values, uri, schemaUri, items)

            // log(getValueForOneOf(0, schema))

            fields = [
              transformByIndex(items, rootSchema, values, { ...params, parentUri: uri, uri: schemaUri, [schemaUri]: { meta: { ...getMetaProps(params, schemaUri), selectedItems }, elements: { anyOf: { ...getElementsFieldPropsForAnyOf(params, schemaUri), selectedItems } } } })
            ]
            *//*
          } else {
            log('transformArray (`value` `defaultValue`)')

            const schemaUri = getUri(uri, 0)

            *//*
             *  Schemas without `enum`, `anyOf`, or `oneOf` do not have selected items
             *//*

            *//*
             *  Schemas may have a value
             *//*

            *//*
             *  Array schemas do not have a value
             *//*

            *//*
             *  Object schemas do not have a value
             *//*

            log(`

  Get the value

            `)

            fields = [
              transformByIndex(items, rootSchema, values, { ...params, parentUri: uri, uri: schemaUri, [schemaUri]: { meta: getMetaProps(params, schemaUri), elements: getElementsProps(params, schemaUri) } })
            ]
          }
        }
      }

      return renderArray(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema, rootSchema, parentUri, uri }, elements: { ...getElementsProps(params, uri), fields } } })
      */
    }
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.1
export function transformNumber (schema, rootSchema, values, params) {
  log('transformNumber (1)')

  if (hasEnum(schema)) {
    return transformNumberForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformNumberForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformNumberForOneOf(schema, rootSchema, values, params)
      } else {
        if (hasAllOf(schema)) {
          return transformNumberForAllOf(schema, rootSchema, values, params)
        }
      }
    }
  }

  log('transformNumber (2)')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  /*
   *  Do not get the value
   */
  return renderNumber(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema, rootSchema, parentUri, uri }, elements: getElementsProps(params, uri) } })
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.3
export function transformString (schema, rootSchema, values, params) {
  log('transformString (1)')

  if (hasEnum(schema)) {
    return transformStringForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformStringForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformStringForOneOf(schema, rootSchema, values, params)
      } else {
        if (hasAllOf(schema)) {
          return transformStringForAllOf(schema, rootSchema, values, params)
        }
      }
    }
  }

  log('transformString (2)')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  /*
   *  Do not get the value
   */
  return renderString(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema, rootSchema, parentUri, uri }, elements: getElementsProps(params, uri) } })
}

export function transformByKey (schema = {}, rootSchema = schema, values = {}, params = {}) {
  log('transformByKey')

  const { type } = schema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  switch (type) {
    case 'null':
      return transformNullByKey(schema, rootSchema, values, params)

    case 'boolean':
      return transformBooleanByKey(schema, rootSchema, values, params)

    case 'object':
      return transformObjectByKey(schema, rootSchema, values, params)

    case 'array':
      return transformArrayByKey(schema, rootSchema, values, params)

    case 'number':
      return transformNumberByKey(schema, rootSchema, values, params)

    case 'string':
      return transformStringByKey(schema, rootSchema, values, params)

    default:
      throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
  }
}

export function getTransformByKeyForEnum (schema, rootSchema, values, { parentUri, key = '', isRequired = false, ...params }) {
  log('getTransformByKeyForEnum')

  /*
   *  Get selected items for the uri
   */
  const uri = getUri(parentUri, key)
  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  // log(getValueForEnum(index, schema))

  return transformByKey(schema, rootSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, parentUri, uri, selectedItems, isRequired }, elements: { enum: { ...getElementsFieldPropsForEnum(params, uri), selectedItems, isRequired } } }, key })
}

export function getTransformByKeyForAnyOf (schema, rootSchema, values, { parentUri, key = '', isRequired = false, ...params }) {
  log('getTransformByKeyForAnyOf')

  /*
   *  Get selected items for the uri
   */
  const uri = getUri(parentUri, key)
  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  // log(getValueForAnyOf(index, schema))

  return transformByKey(schema, rootSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, parentUri, uri, selectedItems, isRequired }, elements: { anyOf: { ...getElementsFieldPropsForAnyOf(params, uri), selectedItems, isRequired } } }, key })
}

export function getTransformByKeyForOneOf (schema, rootSchema, values, { parentUri, key = '', isRequired = false, ...params }) {
  log('getTransformByKeyForOneOf')

  /*
   *  Get selected items for the uri
   */
  const uri = getUri(parentUri, key)
  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  // log(getValueForOneOf(index, schema))

  return transformByKey(schema, rootSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, parentUri, uri, selectedItems, isRequired }, elements: { oneOf: { ...getElementsFieldPropsForOneOf(params, uri), selectedItems, isRequired } } }, key })
}

export function getTransformByIndexForEnum (schema, rootSchema, values, { parentUri, index = 0, ...params }) {
  log('getTransformByIndexForEnum')

  /*
   *  Get selected items for the parent uri
   */
  const uri = getUri(parentUri, index)
  const {
    selectedItems = getSelectedItemsForParentUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  // log(getValueForEnum(index, schema))

  return transformByIndex(schema, rootSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, parentUri, uri, selectedItems }, elements: { enum: { ...getElementsFieldPropsForEnum(params, uri), selectedItems } } }, index })
}

export function getTransformByIndexForAnyOf (schema, rootSchema, values, { parentUri, index = 0, ...params }) {
  log('getTransformByIndexForAnyOf')

  /*
   *  Get selected items for the parent uri
   */
  const uri = getUri(parentUri, index)
  const {
    selectedItems = getSelectedItemsForParentUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  // log(getValueForAnyOf(index, schema))

  return transformByIndex(schema, rootSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, parentUri, uri, selectedItems }, elements: { anyOf: { ...getElementsFieldPropsForAnyOf(params, uri), selectedItems } } }, index })
}

export function getTransformByIndexForOneOf (schema, rootSchema, values, { parentUri, index = 0, ...params }) {
  log('getTransformByIndexForOneOf')

  /*
   *  Get selected items for the parent uri
   */
  const uri = getUri(parentUri, index)
  const {
    selectedItems = getSelectedItemsForParentUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  // log(getValueForOneOf(index, schema))

  return transformByIndex(schema, rootSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, parentUri, uri, selectedItems }, elements: { oneOf: { ...getElementsFieldPropsForOneOf(params, uri), selectedItems } } }, index })
}

/*
export function transformByIndexForEnum (schema, rootSchema, values, { index = 0, parentUri, ...params }) {
  log('transformByIndexForEnum')

  const uri = getUri(parentUri, index)
  const {
    selectedItems = getSelectedItemsForParentUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  // log(getValueForEnum(index, schema))

  return transformByIndex(schema, rootSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, parentUri, uri, selectedItems }, elements: { enum: { ...getElementsFieldPropsForEnum(params, uri), selectedItems } } }, index })
}

export function transformByIndexForAnyOf (schema, rootSchema, values, { index = 0, parentUri, ...params }) {
  log('transformByIndexForAnyOf')

  const uri = getUri(parentUri, index)
  const {
    selectedItems = getSelectedItemsForParentUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  // log(getValueForAnyOf(index, schema))

  return transformByIndex(schema, rootSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, parentUri, uri, selectedItems }, elements: { anyOf: { ...getElementsFieldPropsForAnyOf(params, uri), selectedItems } } }, index })
}

export function transformByIndexForOneOf (schema, rootSchema, values, { index = 0, parentUri, ...params }) {
  log('transformByIndexForOneOf')

  const uri = getUri(parentUri, index)
  const {
    selectedItems = getSelectedItemsForParentUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  // log(getValueForOneOf(index, schema))

  return transformByIndex(schema, rootSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, parentUri, uri, selectedItems }, elements: { oneOf: { ...getElementsFieldPropsForOneOf(params, uri), selectedItems } } }, index })
}
*/

export function transformByIndex (schema = {}, rootSchema = schema, values = {}, params = {}) {
  log('transformByIndex')

  const { type } = schema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  switch (type) {
    case 'null':
      return transformNullByIndex(schema, rootSchema, values, params)

    case 'boolean':
      return transformBooleanByIndex(schema, rootSchema, values, params)

    case 'object':
      return transformObjectByIndex(schema, rootSchema, values, params)

    case 'array':
      return transformArrayByIndex(schema, rootSchema, values, params)

    case 'number':
      return transformNumberByIndex(schema, rootSchema, values, params)

    case 'string':
      return transformStringByIndex(schema, rootSchema, values, params)

    default:
      throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
  }
}

export default function toZashiki (schema = {}, rootSchema = {}, values = {}, params = {}) {
  log('toZashiki')

  const { type } = schema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  switch (type) {
    case 'null':
      return transformNull(schema, rootSchema, values, params)

    case 'boolean':
      return transformBoolean(schema, rootSchema, values, params)

    case 'object':
      return transformObject(schema, rootSchema, values, params)

    case 'array':
      return transformArray(schema, rootSchema, values, params)

    case 'number':
      return transformNumber(schema, rootSchema, values, params)

    case 'string':
      return transformString(schema, rootSchema, values, params)

    default:
      throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
  }
}
