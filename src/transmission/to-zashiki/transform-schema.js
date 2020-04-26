import debug from 'debug'

import {
  isArray,
  isObject,

  isArraySchema,
  isObjectSchema,

  hasMetaValue, // eslint-disable-line
  getMetaValue,

  hasValue,
  getValue,

  getMetaDefaultValue,

  getSelectedItemsForParentUri,
  getSelectedItemsForUri,

  getTitle,
  getDescription,

  hasEnum,
  getEnum,
  hasAnyOf,
  hasOneOf,
  hasAllOf,
  getParentUri,
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
  getElementsFieldPropsForEnum,
  getElementsFieldPropsForAnyOf,
  getElementsFieldPropsForOneOf,
  getElementsFieldPropsForAllOf,
  getElementsFieldProps,
  getElementsFieldValue
} from 'shinkansen-transmission/transmission/common'

const log = debug('shinkansen-transmission:to-zashiki:schema')

export function mapTransformByIndex (rootSchema, values, { selectedItems, parentUri, ...params }) {
  log('mapTransformByIndex')

  return function map (schema, index) {
    if (hasEnum(schema)) {
      log('mapTransformByIndex (`enum`)')

      const uri = getUri(parentUri, index)
      const selectedItems = getSelectedItemsForParentUri(values, parentUri, uri, schema)

      // log(getValueForEnum(index, schema))

      const {
        [uri]: {
          meta = {},
          elements: {
            enum: field = {}
          } = {}
        } = {}
      } = params

      return transformByIndex(schema, rootSchema, values, { ...params, [uri]: { meta: { ...meta, selectedItems }, elements: { enum: { ...field, selectedItems } } }, parentUri, index })
    } else {
      if (hasAnyOf(schema)) {
        log('mapTransformByIndex (`anyOf`)')

        const uri = getUri(parentUri, index)
        const selectedItems = getSelectedItemsForParentUri(values, parentUri, uri, schema)

        // log(getValueForAnyOf(index, schema))

        const {
          [uri]: {
            meta = {},
            elements: {
              anyOf: field = {}
            } = {}
          } = {}
        } = params

        return transformByIndex(schema, rootSchema, values, { ...params, [uri]: { meta: { ...meta, selectedItems }, elements: { anyOf: { ...field, selectedItems } } }, parentUri, index })
      } else {
        if (hasOneOf(schema)) {
          log('mapTransformByIndex (`oneOf`)')

          const uri = getUri(parentUri, index)
          const selectedItems = getSelectedItemsForParentUri(values, parentUri, uri, schema)

          // log(getValueForOneOf(index, schema))

          const {
            [uri]: {
              meta = {},
              elements: {
                oneOf: field = {}
              } = {}
            } = {}
          } = params

          return transformByIndex(schema, rootSchema, values, { ...params, [uri]: { meta: { ...meta, selectedItems }, elements: { oneOf: { ...field, selectedItems } } }, parentUri, index })
        }
      }
    }

    log('mapTransformByIndex (`value` `defaultValue`)')

    /*
     *  Schemas without `enum`, `anyOf`, or `oneOf` do not have selected items
     */

    /*
     *  Schemas may be required
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

    return transformByIndex(schema, rootSchema, values, { ...params, parentUri, index })
  }
}

/*
export function mapTransformNullByIndex (rootSchema, values, { parentUri, ...params }) {
  log('mapTransformNullByIndex')

  return function map (schema, index) {
    const uri = getUri(parentUri, index)
    const value = getValueForUri(values, parentUri, uri, schema)

    return transformNullByIndex(schema, rootSchema, values, { ...params, parentUri, index, value })
  }
}
*/

export function mapTransformNullByIndex (rootSchema, values, params) {
  log('mapTransformNullByIndex')

  return function map (schema, index) {
    return transformNullByIndex(schema, rootSchema, values, { ...params, index })
  }
}

/*
export function mapTransformBooleanByIndex (rootSchema, values, { parentUri, ...params }) {
  log('mapTransformBooleanByIndex')

  return function map (schema, index) {
    const uri = getUri(parentUri, index)
    const value = getValueForUri(values, parentUri, uri, schema)

    return transformBooleanByIndex(schema, rootSchema, values, { ...params, parentUri, index, value })
  }
}
*/

export function mapTransformBooleanByIndex (rootSchema, values, params) {
  log('mapTransformBooleanByIndex')

  return function map (schema, index) {
    return transformBooleanByIndex(schema, rootSchema, values, { ...params, index })
  }
}

/*
export function mapTransformObjectByIndex (rootSchema, values, { parentUri, ...params }) {
  log('mapTransformObjectByIndex')

  return function map (schema, index) {
    const uri = getUri(parentUri, index)
    const value = getValueForUri(values, parentUri, uri, schema)

    return transformObjectByIndex(schema, rootSchema, values, { ...params, parentUri, index, value })
  }
}
*/

export function mapTransformObjectByIndex (rootSchema, values, params) {
  log('mapTransformObjectByIndex')

  return function map (schema, index) {
    return transformObjectByIndex(schema, rootSchema, values, { ...params, index })
  }
}

/*
export function mapTransformArrayByIndex (rootSchema, values, { parentUri, ...params }) {
  log('mapTransformArrayByIndex')

  return function map (schema, index) {
    const uri = getUri(parentUri, index)
    const value = getValueForUri(values, parentUri, uri, schema)

    return transformArrayByIndex(schema, rootSchema, values, { ...params, parentUri, index, value })
  }
}
*/

export function mapTransformArrayByIndex (rootSchema, values, params) {
  log('mapTransformArrayByIndex')

  return function map (schema, index) {
    return transformArrayByIndex(schema, rootSchema, values, { ...params, index })
  }
}

/*
export function mapTransformNumberByIndex (rootSchema, values, { parentUri, ...params }) {
  log('mapTransformNumberByIndex')

  return function map (schema, index) {
    const uri = getUri(parentUri, index)
    const value = getValueForUri(values, parentUri, uri, schema)

    return transformNumberByIndex(schema, rootSchema, values, { ...params, parentUri, index, value })
  }
}
*/

export function mapTransformNumberByIndex (rootSchema, values, params) {
  log('mapTransformNumberByIndex')

  return function map (schema, index) {
    return transformNumberByIndex(schema, rootSchema, values, { ...params, index })
  }
}

/*
export function mapTransformStringByIndex (rootSchema, values, { parentUri, ...params }) {
  log('mapTransformStringByIndex')

  return function map (schema, index) {
    const uri = getUri(parentUri, index)
    const value = getValueForUri(values, parentUri, uri, schema)

    return transformStringByIndex(schema, rootSchema, values, { ...params, parentUri, index, value })
  }
}
*/

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
    uri
  } = params

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fieldProps = getElementsFieldPropsForEnum(params, uri)

  return {
    meta: {
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
    uri
  } = params

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fieldProps = getElementsFieldPropsForAnyOf(params, uri)

  return {
    meta: {
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
    uri
  } = params

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fieldProps = getElementsFieldPropsForOneOf(params, uri)

  return {
    meta: {
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
    uri,
    meta: {
      parentUri,
      ...meta
    } = {},
    elements: {
      field = {}
    } = {}
  } = params

  let selectedItems
  if (parentUri) {
    ({
      [parentUri]: {
        meta: {
          selectedItems
        } = {}
      } = {}
    } = params)
  }

  // log({ parentUri, selectedItems })

  const metaDefaultValue = getMetaDefaultValue(schema, uri)
  const metaValue = getMetaValue(values, uri, schema) // getMetaValueForUri(values, uri, schema)
  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fieldValue = getElementsFieldValue(values, uri, schema)
  const fieldProps = getElementsFieldProps(params, uri)

  log({ metaValue, fieldValue })

  return {
    meta: {
      ...meta,
      ...(parentUri ? { parentUri } : {}),
      uri,
      type: 'null',
      ...(selectedItems ? { selectedItems } : {}),
      ...metaDefaultValue,
      ...metaValue,
      ...metaProps
    },
    elements: {
      ...title,
      ...description,
      field: {
        ...field,
        ...(selectedItems ? { selectedItems } : {}),
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
    uri,
    meta: {
      parentUri,
      ...meta
    } = {},
    elements: {
      field = {}
    } = {}
  } = params

  let selectedItems
  if (parentUri) {
    ({
      [parentUri]: {
        meta: {
          selectedItems
        } = {}
      } = {}
    } = params)
  }

  // log({ parentUri, selectedItems })

  const metaDefaultValue = getMetaDefaultValue(schema, uri)
  const metaValue = getMetaValue(values, uri, schema) // getMetaValueForUri(values, uri, schema)
  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fieldValue = getElementsFieldValue(values, uri, schema)
  const fieldProps = getElementsFieldProps(params, uri)

  log({ metaValue, fieldValue })

  return {
    meta: {
      ...meta,
      ...(parentUri ? { parentUri } : {}),
      uri,
      type: 'null',
      ...(selectedItems ? { selectedItems } : {}),
      ...metaDefaultValue,
      ...metaValue,
      ...metaProps
    },
    elements: {
      ...title,
      ...description,
      field: {
        ...field,
        ...(selectedItems ? { selectedItems } : {}),
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
    uri
  } = params

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fieldProps = getElementsFieldPropsForEnum(params, uri)

  return {
    meta: {
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
    uri
  } = params

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fieldProps = getElementsFieldPropsForAnyOf(params, uri)

  return {
    meta: {
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
    uri
  } = params

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fieldProps = getElementsFieldPropsForOneOf(params, uri)

  return {
    meta: {
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
    uri,
    meta: {
      parentUri,
      ...meta
    } = {},
    elements: {
      field = {}
    } = {}
  } = params

  let selectedItems
  if (parentUri) {
    ({
      [parentUri]: {
        meta: {
          selectedItems
        } = {}
      } = {}
    } = params)
  }

  const metaDefaultValue = getMetaDefaultValue(schema, uri)
  const metaValue = getMetaValue(values, uri, schema) // getMetaValueForUri(values, uri, schema)
  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fieldValue = getElementsFieldValue(values, uri, schema)
  const fieldProps = getElementsFieldProps(params, uri)

  log({ metaValue, fieldValue })

  return {
    meta: {
      ...meta,
      ...(parentUri ? { parentUri } : {}),
      uri,
      type: 'boolean',
      ...(selectedItems ? { selectedItems } : {}),
      ...metaDefaultValue,
      ...metaValue,
      ...metaProps
    },
    elements: {
      ...title,
      ...description,
      field: {
        ...field,
        ...(selectedItems ? { selectedItems } : {}),
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
    uri,
    meta: {
      parentUri,
      ...meta
    } = {},
    elements: {
      field = {}
    } = {}
  } = params

  let selectedItems
  if (parentUri) {
    ({
      [parentUri]: {
        meta: {
          selectedItems
        } = {}
      } = {}
    } = params)
  }

  // log({ parentUri, selectedItems })

  const metaDefaultValue = getMetaDefaultValue(schema, uri)
  const metaValue = getMetaValue(values, uri, schema) // getMetaValueForUri(values, uri, schema)
  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fieldValue = getElementsFieldValue(values, uri, schema)
  const fieldProps = getElementsFieldProps(params, uri)

  log({ metaValue, fieldValue })

  return {
    meta: {
      ...meta,
      ...(parentUri ? { parentUri } : {}),
      uri,
      type: 'boolean',
      ...(selectedItems ? { selectedItems } : {}),
      ...metaDefaultValue,
      ...metaValue,
      ...metaProps
    },
    elements: {
      ...title,
      ...description,
      field: {
        ...field,
        ...(selectedItems ? { selectedItems } : {}),
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
    uri
  } = params

  const metaProps = getMetaProps(params, uri)

  const minProperties = getMinProperties(schema)
  const maxProperties = getMaxProperties(schema)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fieldProps = getElementsFieldPropsForEnum(params, uri)

  return {
    meta: {
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
        ...fieldProps
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
    uri
  } = params

  const metaProps = getMetaProps(params, uri)

  const minProperties = getMinProperties(schema)
  const maxProperties = getMaxProperties(schema)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fieldProps = getElementsFieldPropsForAnyOf(params, uri)

  return {
    meta: {
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
        ...fieldProps
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
    uri
  } = params

  const metaProps = getMetaProps(params, uri)

  const minProperties = getMinProperties(schema)
  const maxProperties = getMaxProperties(schema)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fieldProps = getElementsFieldPropsForOneOf(params, uri)

  return {
    meta: {
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
        ...fieldProps
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
    uri
  } = params

  const metaProps = getMetaProps(params, uri)

  const minProperties = getMinProperties(schema)
  const maxProperties = getMaxProperties(schema)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fieldProps = getElementsFieldPropsForAllOf(params, uri)

  return {
    meta: {
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
        ...fieldProps
      }
    }
  }
}

export function renderObject (schema, values, params) {
  log('renderObject')

  const {
    uri,
    meta: {
      parentUri,
      ...meta
    } = {},
    elements: {
      fields = []
    } = {}
  } = params

  const metaValue = getMetaValue(params, uri)
  const metaProps = getMetaProps(params, uri)

  const minProperties = getMinProperties(schema)
  const maxProperties = getMaxProperties(schema)

  const title = getTitle(schema)
  const description = getDescription(schema)

  log({ parentUri, metaValue })

  return {
    meta: {
      ...meta,
      ...(parentUri ? { parentUri } : {}),
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
    uri
  } = params

  const metaProps = getMetaProps(params, uri)

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
        ...fieldProps
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
    uri
  } = params

  const metaProps = getMetaProps(params, uri)

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
        ...fieldProps
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
    uri
  } = params

  const metaProps = getMetaProps(params, uri)

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
        ...fieldProps
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
    uri
  } = params

  const metaProps = getMetaProps(params, uri)

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
        ...fieldProps
      }
    }
  }
}

export function renderArray (schema, values, params) {
  log('renderArray')

  const {
    uri,
    meta: {
      parentUri,
      ...meta
    } = {},
    elements: {
      fields = []
    } = {}
  } = params

  const metaProps = getMetaProps(params, uri)

  const minItems = getMinItems(schema)
  const maxItems = getMaxItems(schema)
  const hasUniqueItems = getHasUniqueItems(schema)
  const maxContains = getMaxContains(schema)
  const minContains = getMinContains(schema)

  const title = getTitle(schema)
  const description = getDescription(schema)

  log({ parentUri })

  return {
    meta: {
      ...meta,
      ...(parentUri ? { parentUri } : {}),
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
    uri
  } = params

  const metaProps = getMetaProps(params, uri)

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
    uri
  } = params

  const metaProps = getMetaProps(params, uri)

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
    uri
  } = params

  const metaProps = getMetaProps(params, uri)

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

  log('renderNumber')

  const {
    uri,
    meta: {
      parentUri,
      ...meta
    } = {},
    elements: {
      field = {}
    } = {}
  } = params

  let selectedItems
  if (parentUri) {
    ({
      [parentUri]: {
        meta: {
          selectedItems
        } = {}
      } = {}
    } = params)
  }

  // log({ parentUri, selectedItems })

  const metaDefaultValue = getMetaDefaultValue(schema, uri)
  const metaValue = getMetaValue(values, uri, schema) // getMetaValueForUri(values, uri, schema)
  const metaProps = getMetaProps(params, uri)

  const min = getMin(schema)
  const max = getMax(schema)
  const step = getStep(schema)

  const isExclusiveMin = getIsExclusiveMin(schema)
  const isExclusiveMax = getIsExclusiveMax(schema)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fieldValue = getElementsFieldValue(values, uri, schema)
  const fieldProps = getElementsFieldProps(params, uri)

  log({ metaValue, fieldValue })

  return {
    meta: {
      ...meta,
      ...(parentUri ? { parentUri } : {}),
      uri,
      type: 'number',
      ...isExclusiveMin,
      ...isExclusiveMax,
      ...min,
      ...max,
      ...step,
      ...(selectedItems ? { selectedItems } : {}),
      ...metaDefaultValue,
      ...metaValue,
      ...metaProps
    },
    elements: {
      ...title,
      ...description,
      field: {
        ...field,
        ...min,
        ...max,
        ...step,
        ...(selectedItems ? { selectedItems } : {}),
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
    uri,
    meta: {
      parentUri,
      ...meta
    } = {},
    elements: {
      field = {}
    } = {}
  } = params

  let selectedItems
  if (parentUri) {
    ({
      [parentUri]: {
        meta: {
          selectedItems
        } = {}
      } = {}
    } = params)
  }

  // log({ parentUri, selectedItems })

  const metaDefaultValue = getMetaDefaultValue(schema, uri)
  const metaValue = getMetaValue(values, uri, schema) // getMetaValueForUri(values, uri, schema)
  const metaProps = getMetaProps(params, uri)

  const min = getMin(schema)
  const max = getMax(schema)
  const step = getStep(schema)

  const isExclusiveMin = getIsExclusiveMin(schema)
  const isExclusiveMax = getIsExclusiveMax(schema)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fieldValue = getElementsFieldValue(values, uri, schema)
  const fieldProps = getElementsFieldProps(params, uri)

  log({ metaValue, fieldValue })

  return {
    meta: {
      ...meta,
      ...(parentUri ? { parentUri } : {}),
      uri,
      type: 'number',
      ...isExclusiveMin,
      ...isExclusiveMax,
      ...min,
      ...max,
      ...step,
      ...(selectedItems ? { selectedItems } : {}),
      ...metaDefaultValue,
      ...metaValue,
      ...metaProps
    },
    elements: {
      ...title,
      ...description,
      field: {
        ...field,
        ...min,
        ...max,
        ...step,
        ...(selectedItems ? { selectedItems } : {}),
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
    uri
  } = params

  const metaProps = getMetaProps(params, uri)

  const minLength = getMinLength(schema)
  const maxLength = getMaxLength(schema)
  const pattern = getPattern(schema)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fieldProps = getElementsFieldPropsForEnum(params, uri)

  return {
    meta: {
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
    uri
  } = params

  const metaProps = getMetaProps(params, uri)

  const minLength = getMinLength(schema)
  const maxLength = getMaxLength(schema)
  const pattern = getPattern(schema)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fieldProps = getElementsFieldPropsForAnyOf(params, uri)

  return {
    meta: {
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
    uri
  } = params

  const metaProps = getMetaProps(params, uri)

  const minLength = getMinLength(schema)
  const maxLength = getMaxLength(schema)
  const pattern = getPattern(schema)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fieldProps = getElementsFieldPropsForOneOf(params, uri)

  return {
    meta: {
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
    uri,
    meta: {
      parentUri,
      ...meta
    } = {},
    elements: {
      field = {}
    } = {}
  } = params

  let selectedItems
  if (parentUri) {
    ({
      [parentUri]: {
        meta: {
          selectedItems
        } = {}
      } = {}
    } = params)
  }

  // log({ parentUri, selectedItems })

  const metaDefaultValue = getMetaDefaultValue(schema, uri)
  const metaValue = getMetaValue(values, uri, schema) // getMetaValueForUri(values, uri, schema)
  const metaProps = getMetaProps(params, uri)

  const minLength = getMinLength(schema)
  const maxLength = getMaxLength(schema)
  const pattern = getPattern(schema)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fieldValue = getElementsFieldValue(values, uri, schema)
  const fieldProps = getElementsFieldProps(params, uri)

  log({ metaValue, fieldValue })

  return {
    meta: {
      ...meta,
      ...(parentUri ? { parentUri } : {}),
      uri,
      type: 'string',
      ...minLength,
      ...maxLength,
      ...pattern,
      ...(selectedItems ? { selectedItems } : {}),
      ...metaDefaultValue,
      ...metaValue,
      ...metaProps
    },
    elements: {
      ...title,
      ...description,
      field: {
        ...field,
        ...minLength,
        ...maxLength,
        ...pattern,
        ...(selectedItems ? { selectedItems } : {}),
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
    uri,
    meta: {
      parentUri,
      ...meta
    } = {},
    elements: {
      field = {}
    } = {}
  } = params

  let selectedItems
  if (parentUri) {
    ({
      [parentUri]: {
        meta: {
          selectedItems
        } = {}
      } = {}
    } = params)
  }

  // log({ parentUri, selectedItems })

  const metaDefaultValue = getMetaDefaultValue(schema, uri)
  const metaValue = getMetaValue(values, uri, schema) // getMetaValueForUri(values, uri, schema)
  const metaProps = getMetaProps(params, uri)

  const minLength = getMinLength(schema)
  const maxLength = getMaxLength(schema)
  const pattern = getPattern(schema)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const fieldValue = getElementsFieldValue(values, uri, schema)
  const fieldProps = getElementsFieldProps(params, uri)

  log({ metaValue, fieldValue })

  return {
    meta: {
      ...meta,
      ...(parentUri ? { parentUri } : {}),
      uri,
      type: 'string',
      ...minLength,
      ...maxLength,
      ...pattern,
      ...(selectedItems ? { selectedItems } : {}),
      ...metaDefaultValue,
      ...metaValue,
      ...metaProps
    },
    elements: {
      ...title,
      ...description,
      field: {
        ...field,
        ...minLength,
        ...maxLength,
        ...pattern,
        ...(selectedItems ? { selectedItems } : {}),
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

  const parentUri = getParentUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const {
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const items = getEnum(schema)

  const {
    [uri]: {
      meta = {},
      elements: {
        enum: field = {}
      } = {}
    } = {}
  } = params

  return renderNullForEnum(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri: getParentUri(parentUri), uri, selectedItems, name: fieldKey }, elements: { enum: { ...field, selectedItems, items } } } })
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

  const parentUri = getParentUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const {
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformNullByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  const {
    [uri]: {
      meta = {},
      elements: {
        anyOf: field = {}
      } = {}
    } = {}
  } = params

  return renderNullForAnyOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri: getParentUri(parentUri), uri, selectedItems, name: fieldKey }, elements: { anyOf: { ...field, selectedItems, items } } } })
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

  const parentUri = getParentUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const {
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformNullByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  const {
    [uri]: {
      meta = {},
      elements: {
        oneOf: field = {}
      } = {}
    } = {}
  } = params

  return renderNullForOneOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri: getParentUri(parentUri), uri, selectedItems, name: fieldKey }, elements: { oneOf: { ...field, selectedItems, items } } } })
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

  const parentUri = getParentUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const { allOf = [], ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  const {
    [uri]: {
      meta = {},
      elements: {
        field
      } = {}
    } = {}
  } = params

  return renderNullForAllOf(itemSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri, uri, ...(hasValue(values, uri, schema) ? { value: getValue(values, uri, schema) } : {}), name: fieldKey }, elements: { field: { ...field, ...(hasValue(values, uri, schema) ? { value: getValue(values, uri, schema) } : {}) } } } })
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

  const parentUri = getParentUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const items = getEnum(schema)

  const {
    [uri]: {
      meta = {},
      elements: {
        enum: field = {}
      } = {}
    } = {}
  } = params

  return renderNullForEnum(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri, uri, selectedItems, item: arrayIndex }, elements: { enum: { ...field, selectedItems, items } } } })
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

  const parentUri = getParentUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformNullByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  const {
    [uri]: {
      meta = {},
      elements: {
        anyOf: field = {}
      } = {}
    } = {}
  } = params

  return renderNullForAnyOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri, uri, selectedItems, item: arrayIndex }, elements: { anyOf: { ...field, selectedItems, items } } } })
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

  const parentUri = getParentUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformNullByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  const {
    [uri]: {
      meta = {},
      elements: {
        oneOf: field = {}
      } = {}
    } = {}
  } = params

  return renderNullForOneOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri, uri, selectedItems, item: arrayIndex }, elements: { oneOf: { ...field, selectedItems, items } } } })
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

  const parentUri = getParentUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const { allOf = [], ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  const {
    [uri]: {
      meta = {},
      elements: {
        field
      } = {}
    } = {}
  } = params

  return renderNullForAllOf(itemSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri, uri, ...(hasValue(values, uri, schema) ? { value: getValue(values, uri, schema) } : {}), item: arrayIndex }, elements: { field: { ...field, ...(hasValue(values, uri, schema) ? { value: getValue(values, uri, schema) } : {}) } } } })
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
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const items = getEnum(schema)

  const {
    [uri]: {
      meta = {},
      elements: {
        oneOf: field = {}
      } = {}
    } = {}
  } = params

  return renderNullForEnum(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri: getParentUri(parentUri), uri, selectedItems }, elements: { field: { ...field, selectedItems, items } } } })
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
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformNullByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  const {
    [uri]: {
      meta = {},
      elements: {
        anyOf: field = {}
      } = {}
    } = {}
  } = params

  return renderNullForAnyOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri: getParentUri(parentUri), uri, selectedItems }, elements: { anyOf: { ...field, selectedItems, items } } } })
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
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformNullByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  const {
    [uri]: {
      meta = {},
      elements: {
        anyOf: field = {}
      } = {}
    } = {}
  } = params

  return renderNullForOneOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri: getParentUri(parentUri), uri, selectedItems }, elements: { oneOf: { ...field, selectedItems, items } } } })
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

  const {
    [uri]: {
      meta = {},
      elements: {
        field
      } = {}
    } = {}
  } = params

  return renderNullForAllOf(itemSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri: getParentUri(parentUri), uri, ...(hasValue(values, uri, schema) ? { value: getValue(values, uri, schema) } : {}) }, elements: { field: { ...field, ...(hasValue(values, uri, schema) ? { value: getValue(values, uri, schema) } : {}) } } } })
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

  const parentUri = getParentUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const {
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const items = getEnum(schema)

  const {
    [uri]: {
      meta = {},
      elements: {
        enum: field = {}
      } = {}
    } = {}
  } = params

  return renderBooleanForEnum(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri, uri, selectedItems, name: fieldKey }, elements: { enum: { ...field, selectedItems, items } } } })
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

  const parentUri = getParentUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const {
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformBooleanByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  const {
    [uri]: {
      meta = {},
      elements: {
        anyOf: field = {}
      } = {}
    } = {}
  } = params

  return renderBooleanForAnyOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri, uri, selectedItems, name: fieldKey }, elements: { anyOf: { ...field, selectedItems, items } } } })
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

  const parentUri = getParentUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const {
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformBooleanByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  const {
    [uri]: {
      meta = {},
      elements: {
        oneOf: field = {}
      } = {}
    } = {}
  } = params

  return renderBooleanForOneOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri, uri, selectedItems, name: fieldKey }, elements: { oneOf: { ...field, selectedItems, items } } } })
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

  const parentUri = getParentUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const { allOf = [], ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  const {
    [uri]: {
      meta = {},
      elements: {
        field
      } = {}
    } = {}
  } = params

  return renderBooleanForAllOf(itemSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri, uri, ...(hasValue(values, uri, schema) ? { value: getValue(values, uri, schema) } : {}), name: fieldKey }, elements: { field: { ...field, ...(hasValue(values, uri, schema) ? { value: getValue(values, uri, schema) } : {}) } } } })
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

  const parentUri = getParentUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const items = getEnum(schema)

  const {
    [uri]: {
      meta = {},
      elements: {
        enum: field = {}
      } = {}
    } = {}
  } = params

  return renderBooleanForEnum(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri, uri, selectedItems, item: arrayIndex }, elements: { enum: { ...field, selectedItems, items } } } })
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

  const parentUri = getParentUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformBooleanByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  const {
    [uri]: {
      meta = {},
      elements: {
        anyOf: field = {}
      } = {}
    } = {}
  } = params

  return renderBooleanForAnyOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri, uri, selectedItems, item: arrayIndex }, elements: { anyOf: { ...field, selectedItems, items } } } })
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

  const parentUri = getParentUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformBooleanByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  const {
    [uri]: {
      meta = {},
      elements: {
        oneOf: field = {}
      } = {}
    } = {}
  } = params

  return renderBooleanForOneOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri, uri, selectedItems, item: arrayIndex }, elements: { oneOf: { ...field, selectedItems, items } } } })
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

  const parentUri = getParentUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const { allOf = [], ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  const {
    [uri]: {
      meta = {},
      elements: {
        field
      } = {}
    } = {}
  } = params

  return renderBooleanForAllOf(itemSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri, uri, ...(hasValue(values, uri, schema) ? { value: getValue(values, uri, schema) } : {}), item: arrayIndex }, elements: { field: { ...field, ...(hasValue(values, uri, schema) ? { value: getValue(values, uri, schema) } : {}) } } } })
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
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const items = getEnum(schema)

  const {
    [uri]: {
      meta = {},
      elements: {
        enum: field = {}
      } = {}
    } = {}
  } = params

  return renderBooleanForEnum(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri: getParentUri(parentUri), uri, selectedItems }, elements: { enum: { ...field, selectedItems, items } } } })
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
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformBooleanByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  const {
    [uri]: {
      meta = {},
      elements: {
        anyOf: field = {}
      } = {}
    } = {}
  } = params

  return renderBooleanForAnyOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri: getParentUri(parentUri), uri, selectedItems }, elements: { anyOf: { ...field, selectedItems, items } } } })
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
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformBooleanByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  const {
    [uri]: {
      meta = {},
      elements: {
        oneOf: field = {}
      } = {}
    } = {}
  } = params

  return renderBooleanForOneOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri: getParentUri(parentUri), uri, selectedItems }, elements: { oneOf: { ...field, selectedItems, items } } } })
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

  const {
    [uri]: {
      meta = {},
      elements: {
        field
      } = {}
    } = {}
  } = params

  return renderBooleanForAllOf(itemSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri: getParentUri(parentUri), uri, ...(hasValue(values, uri, schema) ? { value: getValue(values, uri, schema) } : {}) }, elements: { field: { ...field, ...(hasValue(values, uri, schema) ? { value: getValue(values, uri, schema) } : {}) } } } })
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

  const parentUri = getParentUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const {
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const items = getEnum(schema)

  const {
    [uri]: {
      meta = {},
      elements: {
        enum: field = {}
      } = {}
    } = {}
  } = params

  return renderObjectForEnum(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri, uri, selectedItems, name: fieldKey }, elements: { enum: { ...field, selectedItems, items } } } })
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

  const parentUri = getParentUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const {
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformObjectByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  const {
    [uri]: {
      meta = {},
      elements: {
        anyOf: field = {}
      } = {}
    } = {}
  } = params

  return renderObjectForAnyOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri, uri, selectedItems, name: fieldKey }, elements: { anyOf: { ...field, selectedItems, items } } } })
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

  const parentUri = getParentUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const {
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformObjectByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  const {
    [uri]: {
      meta = {},
      elements: {
        oneOf: field = {}
      } = {}
    } = {}
  } = params

  return renderObjectForOneOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri, uri, selectedItems, name: fieldKey }, elements: { oneOf: { ...field, selectedItems, items } } } })
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

  const parentUri = getParentUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const { allOf = [], ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  const {
    [uri]: {
      meta = {},
      elements = {}
    } = {}
  } = params

  return renderObjectForAllOf(itemSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri, uri, name: fieldKey }, elements } })
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

  const parentUri = getParentUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const items = getEnum(schema)

  const {
    [uri]: {
      meta = {},
      elements: {
        enum: field = {}
      } = {}
    } = {}
  } = params

  return renderObjectForEnum(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri, uri, selectedItems, item: arrayIndex }, elements: { enum: { ...field, selectedItems, items } } } })
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

  const parentUri = getParentUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformObjectByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  const {
    [uri]: {
      meta = {},
      elements: {
        anyOf: field = {}
      } = {}
    } = {}
  } = params

  return renderObjectForAnyOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri, uri, selectedItems, item: arrayIndex }, elements: { anyOf: { ...field, selectedItems, items } } } })
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

  const parentUri = getParentUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformObjectByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  const {
    [uri]: {
      meta = {},
      elements: {
        oneOf: field = {}
      } = {}
    } = {}
  } = params

  return renderObjectForOneOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri, uri, selectedItems, item: arrayIndex }, elements: { oneOf: { ...field, selectedItems, items } } } })
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

  const parentUri = getParentUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const { allOf = [], ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  const {
    [uri]: {
      meta = {},
      elements = {}
    } = {}
  } = params

  return renderObjectForAllOf(itemSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri, uri, item: arrayIndex }, elements } })
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
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const items = getEnum(schema)

  const {
    [uri]: {
      meta = {},
      elements: {
        enum: field = {}
      } = {}
    } = {}
  } = params

  return renderObjectForEnum(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri: getParentUri(parentUri), uri, selectedItems }, elements: { field: { ...field, selectedItems, items } } } })
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
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformObjectByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  const {
    [uri]: {
      meta = {},
      elements: {
        anyOf: field = {}
      } = {}
    } = {}
  } = params

  return renderObjectForAnyOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri: getParentUri(parentUri), uri, selectedItems }, elements: { anyOf: { ...field, selectedItems, items } } } })
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
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformObjectByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  const {
    [uri]: {
      meta = {},
      elements: {
        oneOf: field = {}
      } = {}
    } = {}
  } = params

  return renderObjectForOneOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri: getParentUri(parentUri), uri, selectedItems }, elements: { oneOf: { ...field, selectedItems, items } } } })
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
      .map(([key, schema], index) => {
        if (hasEnum(schema)) {
          log('transformObjectForAllOf (`enum`)')

          /*
           *  Get selected items for the uri
           */
          const schemaUri = getUri(uri, key)
          const selectedItems = getSelectedItemsForUri(values, uri, schemaUri, schema)
          const isRequired = required.includes(key)

          // log(getValueForEnum(index, schema))

          const {
            [schemaUri]: {
              meta = {},
              elements: {
                enum: field = {}
              } = {}
            } = {}
          } = params

          // log({ key, schemaUri }, selectedItems, isRequired)

          return transformByKey(schema, rootSchema, values, { ...params, [schemaUri]: { meta: { ...meta, selectedItems, isRequired }, elements: { enum: { ...field, selectedItems, isRequired } } }, parentUri, key })
        } else {
          if (hasAnyOf(schema)) {
            log('transformObjectForAllOf (`anyOf`)')

            /*
             *  Get selected items for the uri
             */
            const schemaUri = getUri(uri, key)
            const selectedItems = getSelectedItemsForUri(values, uri, schemaUri, schema)
            const isRequired = required.includes(key)

            // log(getValueForAnyOf(index, schema))

            const {
              [schemaUri]: {
                meta = {},
                elements: {
                  anyOf: field = {}
                } = {}
              } = {}
            } = params

            // log({ key, schemaUri }, selectedItems, isRequired)

            return transformByKey(schema, rootSchema, values, { ...params, [schemaUri]: { meta: { ...meta, selectedItems, isRequired }, elements: { anyOf: { ...field, selectedItems, isRequired } } }, parentUri, key })
          } else {
            if (hasOneOf(schema)) {
              log('transformObjectForAllOf (`oneOf`)')

              /*
               *  Get selected items for the uri
               */
              const schemaUri = getUri(uri, key)
              const selectedItems = getSelectedItemsForUri(values, uri, schemaUri, schema)
              const isRequired = required.includes(key)

              // log(getValueForOneOf(index, schema))

              const {
                [schemaUri]: {
                  meta = {},
                  elements: {
                    oneOf: field = {}
                  } = {}
                } = {}
              } = params

              // log({ key, schemaUri }, selectedItems, isRequired)

              return transformByKey(schema, rootSchema, values, { ...params, [schemaUri]: { meta: { ...meta, selectedItems, isRequired }, elements: { oneOf: { ...field, selectedItems, isRequired } } }, parentUri, key })
            }
          }
        }

        log('transformObjectForAllOf (`value` `defaultValue`)')

        /*
         *  Schemas without `enum`, `anyOf`, or `oneOf` do not have selected items
         */
        const schemaUri = getUri(uri, key)
        const isRequired = required.includes(key)

        const {
          [schemaUri]: {
            meta = {},
            elements: {
              field = {}
            } = {}
          } = {}
        } = params

        return transformByKey(schema, rootSchema, values, { ...params, [schemaUri]: { meta: { ...meta, isRequired }, elements: { field: { ...field, isRequired } } }, parentUri, key })
      })
  )

  const {
    [uri]: {
      meta = {},
      elements = {}
    } = {}
  } = params

  return renderObjectForAllOf(itemSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri: getParentUri(parentUri), uri }, elements: { ...elements, fields } } })
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

  const parentUri = getParentUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const {
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const items = getEnum(schema)

  const {
    [uri]: {
      meta = {},
      elements: {
        enum: field = {}
      } = {}
    } = {}
  } = params

  return renderArrayForEnum(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri: getParentUri(parentUri), uri, selectedItems, name: fieldKey }, elements: { enum: { ...field, selectedItems, items } } } })
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

  const parentUri = getParentUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const {
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformArrayByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  const {
    [uri]: {
      meta = {},
      elements: {
        anyOf: field = {}
      } = {}
    } = {}
  } = params

  return renderArrayForAnyOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri: getParentUri(parentUri), uri, selectedItems, name: fieldKey }, elements: { anyOf: { ...field, selectedItems, items } } } })
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

  const parentUri = getParentUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const {
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformArrayByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  const {
    [uri]: {
      meta = {},
      elements: {
        oneOf: field = {}
      } = {}
    } = {}
  } = params

  return renderArrayForOneOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri: getParentUri(parentUri), uri, selectedItems, name: fieldKey }, elements: { oneOf: { ...field, selectedItems, items } } } })
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

  const parentUri = getParentUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const { allOf = [], ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  const {
    [uri]: {
      meta = {},
      elements = {}
    } = {}
  } = params

  return renderArrayForAllOf(itemSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri, uri, name: fieldKey }, elements } })
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

  const parentUri = getParentUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const items = getEnum(schema)

  const {
    [uri]: {
      meta = {},
      elements: {
        enum: field = {}
      } = {}
    } = {}
  } = params

  return renderArrayForEnum(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri: getParentUri(parentUri), uri, selectedItems, item: arrayIndex }, elements: { enum: { ...field, selectedItems, items } } } })
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

  const parentUri = getParentUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformArrayByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  const {
    [uri]: {
      meta = {},
      elements: {
        anyOf: field = {}
      } = {}
    } = {}
  } = params

  return renderArrayForAnyOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri: getParentUri(parentUri), uri, selectedItems, item: arrayIndex }, elements: { anyOf: { ...field, selectedItems, items } } } })
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

  const parentUri = getParentUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformArrayByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  const {
    [uri]: {
      meta = {},
      elements: {
        oneOf: field = {}
      } = {}
    } = {}
  } = params

  return renderArrayForOneOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri: getParentUri(parentUri), uri, selectedItems, item: arrayIndex }, elements: { oneOf: { ...field, selectedItems, items } } } })
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

  const parentUri = getParentUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const { allOf = [], ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  const {
    [uri]: {
      meta = {},
      elements = {}
    } = {}
  } = params

  return renderArrayForAllOf(itemSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri, uri, item: arrayIndex }, elements } })
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
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const items = getEnum(schema)

  const {
    [uri]: {
      meta = {},
      elements: {
        enum: field = {}
      } = {}
    } = {}
  } = params

  return renderArrayForEnum(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri: getParentUri(parentUri), uri, selectedItems }, elements: { field: { ...field, selectedItems, items } } } })
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
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformArrayByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  const {
    [uri]: {
      meta = {},
      elements: {
        anyOf: field = {}
      } = {}
    } = {}
  } = params

  return renderArrayForAnyOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri: getParentUri(parentUri), uri, selectedItems }, elements: { anyOf: { ...field, selectedItems, items } } } })
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
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformArrayByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  const {
    [uri]: {
      meta = {},
      elements: {
        oneOf: field = {}
      } = {}
    } = {}
  } = params

  return renderArrayForOneOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri: getParentUri(parentUri), uri, selectedItems }, elements: { oneOf: { ...field, selectedItems, items } } } })
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
  /*
   *  Array with "items" array
   */
    `)

    const fields = items.map(mapTransformByIndex(rootSchema, values, { ...params, parentUri: uri }))

    const {
      [uri]: {
        meta = {},
        elements = {}
      } = {}
    } = params

    return renderArrayForAllOf(itemSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri: getParentUri(parentUri), uri }, elements: { ...elements, fields } } })
  }

  let fields
  if (hasEnum(items)) {
    log('transformArrayForAllOf (`enum`)')

    /*
     *  Get selected items for the parent uri
     */
    const schemaUri = getUri(uri, 0)
    const selectedItems = getSelectedItemsForParentUri(values, uri, schemaUri, items)

    // log(getValueForEnum(0, items))

    const {
      [schemaUri]: {
        meta = {},
        elements: {
          enum: field = {}
        } = {}
      } = {}
    } = params

    fields = [
      transformByIndex(items, rootSchema, values, { ...params, [schemaUri]: { meta: { ...meta, selectedItems }, elements: { enum: { ...field, selectedItems } } }, parentUri: uri })
    ]
  } else {
    if (hasAnyOf(items)) {
      log('transformArrayForAllOf (`anyOf`)')

      /*
       *  Get selected items for the parent uri
       */
      const schemaUri = getUri(uri, 0)
      const selectedItems = getSelectedItemsForParentUri(values, uri, schemaUri, items)

      // log(getValueForAnyOf(0, items))

      const {
        [schemaUri]: {
          meta = {},
          elements: {
            anyOf: field = {}
          } = {}
        } = {}
      } = params

      fields = [
        transformByIndex(items, rootSchema, values, { ...params, [schemaUri]: { meta: { ...meta, selectedItems }, elements: { anyOf: { ...field, selectedItems } } }, parentUri: uri })
      ]
    } else {
      if (hasOneOf(items)) {
        log('transformArrayForAllOf (`oneOf`)')

        /*
         *  Get selected items for the parent uri
         */
        const schemaUri = getUri(uri, 0)
        const selectedItems = getSelectedItemsForParentUri(values, uri, schemaUri, items)

        // log(getValueForOneOf(0, items))

        const {
          [schemaUri]: {
            meta = {},
            elements: {
              oneOf: field = {}
            } = {}
          } = {}
        } = params

        fields = [
          transformByIndex(items, rootSchema, values, { ...params, [schemaUri]: { meta: { ...meta, selectedItems }, elements: { oneOf: { ...field, selectedItems } } }, parentUri: uri })
        ]
      } else {
        log('transformArrayForAllOf (`value` `defaultValue`)')

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

        fields = [
          transformByIndex(items, rootSchema, values, { ...params, parentUri: uri }) //, value })
        ]
      }
    }
  }

  const {
    [uri]: {
      meta = {},
      elements = {}
    } = {}
  } = params

  return renderArrayForAllOf(itemSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri: getParentUri(parentUri), uri }, elements: { ...elements, fields } } })
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

  const parentUri = getParentUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const {
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  // log(selectedItems, getSelectedItemsForUri(values, parentUri, uri, schema), getSelectedItemsForParentUri(values, parentUri, uri, schema))

  const items = getEnum(schema)

  const {
    [uri]: {
      meta = {},
      elements: {
        enum: field = {}
      } = {}
    } = {}
  } = params

  return renderNumberForEnum(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri: getParentUri(parentUri), uri, selectedItems, name: fieldKey }, elements: { enum: { ...field, selectedItems, items } } } })
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

  const parentUri = getParentUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const {
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  // log(selectedItems, getSelectedItemsForUri(values, parentUri, uri, schema))

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformNumberByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  const {
    [uri]: {
      meta = {},
      elements: {
        anyOf: field = {}
      } = {}
    } = {}
  } = params

  return renderNumberForAnyOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri: getParentUri(parentUri), uri, selectedItems, name: fieldKey }, elements: { anyOf: { ...field, selectedItems, items } } } })
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

  const parentUri = getParentUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const {
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformNumberByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  const {
    [uri]: {
      meta = {},
      elements: {
        oneOf: field = {}
      } = {}
    } = {}
  } = params

  return renderNumberForOneOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri: getParentUri(parentUri), uri, selectedItems, name: fieldKey }, elements: { oneOf: { ...field, selectedItems, items } } } })
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

  const parentUri = getParentUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const { allOf = [], ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  // log({ parentUri, uri })

  const {
    [uri]: {
      meta = {},
      elements: {
        field
      } = {}
    } = {}
  } = params

  return renderNumberForAllOf(itemSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri, uri, ...(hasValue(values, uri, schema) ? { value: getValue(values, uri, schema) } : {}), name: fieldKey }, elements: { field: { ...field, ...(hasValue(values, uri, schema) ? { value: getValue(values, uri, schema) } : {}) } } } })
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

  const parentUri = getParentUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const items = getEnum(schema)

  const {
    [uri]: {
      meta = {},
      elements: {
        enum: field = {}
      } = {}
    } = {}
  } = params

  return renderNumberForEnum(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri, uri, selectedItems, item: arrayIndex }, elements: { enum: { ...field, selectedItems, items } } } })
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

  const parentUri = getParentUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformNumberByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  const {
    [uri]: {
      meta = {},
      elements: {
        anyOf: field = {}
      } = {}
    } = {}
  } = params

  return renderNumberForAnyOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri, uri, selectedItems, item: arrayIndex }, elements: { anyOf: { ...field, selectedItems, items } } } })
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

  const parentUri = getParentUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformNumberByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  const {
    [uri]: {
      meta = {},
      elements: {
        oneOf: field = {}
      } = {}
    } = {}
  } = params

  return renderNumberForOneOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri, uri, selectedItems, item: arrayIndex }, elements: { oneOf: { ...field, selectedItems, items } } } })
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

  const parentUri = getParentUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const { allOf = [], ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  const {
    [uri]: {
      meta = {},
      elements: {
        field
      } = {}
    } = {}
  } = params

  return renderNumberForAllOf(itemSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri, uri, ...(hasValue(values, uri, schema) ? { value: getValue(values, uri, schema) } : {}), item: arrayIndex }, elements: { field: { ...field, ...(hasValue(values, uri, schema) ? { value: getValue(values, uri, schema) } : {}) } } } })
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
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const items = getEnum(schema)

  const {
    [uri]: {
      meta = {},
      elements: {
        enum: field = {}
      } = {}
    } = {}
  } = params

  return renderNumberForEnum(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri: getParentUri(parentUri), uri, selectedItems }, elements: { enum: { ...field, selectedItems, items } } } })
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
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformNumberByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  const {
    [uri]: {
      meta = {},
      elements: {
        anyOf: field = {}
      } = {}
    } = {}
  } = params

  return renderNumberForAnyOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri: getParentUri(parentUri), uri, selectedItems }, elements: { anyOf: { ...field, selectedItems, items } } } })
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
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformNumberByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  const {
    [uri]: {
      meta = {},
      elements: {
        oneOf: field = {}
      } = {}
    } = {}
  } = params

  return renderNumberForOneOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri: getParentUri(parentUri), uri, selectedItems }, elements: { oneOf: { ...field, selectedItems, items } } } })
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

  const {
    [uri]: {
      meta = {},
      elements: {
        field
      } = {}
    } = {}
  } = params

  return renderNumberForAllOf(itemSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri: getParentUri(parentUri), uri, ...(hasValue(values, uri, schema) ? { value: getValue(values, uri, schema) } : {}) }, elements: { field: { ...field, ...(hasValue(values, uri, schema) ? { value: getValue(values, uri, schema) } : {}) } } } })
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

  const parentUri = getParentUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const {
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const items = getEnum(schema)

  const {
    [uri]: {
      meta = {},
      elements: {
        enum: field = {}
      } = {}
    } = {}
  } = params

  return renderStringForEnum(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri, uri, selectedItems, name: fieldKey }, elements: { enum: { ...field, selectedItems, items } } } })
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

  const parentUri = getParentUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const {
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformStringByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  const {
    [uri]: {
      meta = {},
      elements: {
        anyOf: field = {}
      } = {}
    } = {}
  } = params

  return renderStringForAnyOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri, uri, selectedItems, name: fieldKey }, elements: { anyOf: { ...field, selectedItems, items } } } })
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

  const parentUri = getParentUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const {
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformStringByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  const {
    [uri]: {
      meta = {},
      elements: {
        oneOf: field = {}
      } = {}
    } = {}
  } = params

  return renderStringForOneOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri, uri, selectedItems, name: fieldKey }, elements: { oneOf: { ...field, selectedItems, items } } } })
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

  const parentUri = getParentUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const { allOf = [], ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  const {
    [uri]: {
      meta = {},
      elements: {
        field
      } = {}
    } = {}
  } = params

  return renderStringForAllOf(itemSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri, uri, ...(hasValue(values, uri, schema) ? { value: getValue(values, uri, schema) } : {}), name: fieldKey }, elements: { field: { ...field, ...(hasValue(values, uri, schema) ? { value: getValue(values, uri, schema) } : {}) } } } })
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

  const parentUri = getParentUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const items = getEnum(schema)

  const {
    [uri]: {
      meta = {},
      elements: {
        enum: field = {}
      } = {}
    } = {}
  } = params

  return renderStringForEnum(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri, uri, selectedItems, item: arrayIndex }, elements: { enum: { ...field, selectedItems, items } } } })
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

  const parentUri = getParentUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformStringByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  const {
    [uri]: {
      meta = {},
      elements: {
        anyOf: field = {}
      } = {}
    } = {}
  } = params

  return renderStringForAnyOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri, uri, selectedItems, item: arrayIndex }, elements: { anyOf: { ...field, selectedItems, items } } } })
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

  const parentUri = getParentUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformStringByIndex(rootSchema, values, { ...params, parentUri: uri }))

  const {
    [uri]: {
      meta = {},
      elements: {
        oneOf: field = {}
      } = {}
    } = {}
  } = params

  return renderStringForOneOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri, uri, selectedItems, item: arrayIndex }, elements: { oneOf: { ...field, selectedItems, items } } } })
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

  const parentUri = getParentUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const { allOf = [], ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  const {
    [uri]: {
      meta = {},
      elements: {
        field
      } = {}
    } = {}
  } = params

  return renderStringForAllOf(itemSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri, uri, ...(hasValue(values, uri, schema) ? { value: getValue(values, uri, schema) } : {}), item: arrayIndex }, elements: { field: { ...field, ...(hasValue(values, uri, schema) ? { value: getValue(values, uri, schema) } : {}) } } } })
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
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const items = getEnum(schema)

  const {
    [uri]: {
      meta = {},
      elements: {
        enum: field = {}
      } = {}
    } = {}
  } = params

  return renderStringForEnum(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri: getParentUri(parentUri), uri, selectedItems }, elements: { enum: { ...field, selectedItems, items } } } })
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
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformStringByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  const {
    [uri]: {
      meta = {},
      elements: {
        anyOf: field = {}
      } = {}
    } = {}
  } = params

  return renderStringForAnyOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri: getParentUri(parentUri), uri, selectedItems }, elements: { anyOf: { ...field, selectedItems, items } } } })
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
    [uri]: {
      meta: {
        selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema)
      } = {}
    } = {}
  } = params

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformStringByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  const {
    [uri]: {
      meta = {},
      elements: {
        oneOf: field = {}
      } = {}
    } = {}
  } = params

  return renderStringForOneOf(schema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri: getParentUri(parentUri), uri, selectedItems }, elements: { oneOf: { ...field, selectedItems, items } } } })
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

  const {
    [uri]: {
      meta = {},
      elements: {
        field
      } = {}
    } = {}
  } = params

  return renderStringForAllOf(itemSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...meta, schema, rootSchema, parentUri: getParentUri(parentUri), uri, ...(hasValue(values, uri, schema) ? { value: getValue(values, uri, schema) } : {}) }, elements: { field: { ...field, ...(hasValue(values, uri, schema) ? { value: getValue(values, uri, schema) } : {}) } } } })
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

  const parentUri = getParentUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const {
    [uri]: {
      meta = {},
      elements = {}
    } = {}
  } = params

  /*
   *  Do not get the value
   */

  return renderNull(schema, values, { ...params, parentUri, uri, meta: { ...meta, schema, rootSchema, parentUri, uri, name: fieldKey }, elements })
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

  const parentUri = getParentUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    [uri]: {
      meta = {},
      elements = {}
    } = {}
  } = params

  /*
   *  Do not get the value
   */

  return renderNull(schema, values, { ...params, parentUri, uri, meta: { ...meta, schema, rootSchema, parentUri, uri, item: arrayIndex }, elements })
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
  const parentUri = getParentUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const {
    [uri]: {
      meta = {},
      elements = {}
    } = {}
  } = params

  /*
   *  Do not get the value
   */

  return renderBoolean(schema, values, { ...params, parentUri, uri, meta: { ...meta, schema, rootSchema, parentUri, uri, name: fieldKey }, elements })
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
  const parentUri = getParentUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    [uri]: {
      meta = {},
      elements = {}
    } = {}
  } = params

  /*
   *  Do not get the value
   */

  return renderBoolean(schema, values, { ...params, parentUri, uri, meta: { ...meta, schema, rootSchema, parentUri, uri, item: arrayIndex }, elements })
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

  const parentUri = getParentUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const {
    properties = {},
    required = []
  } = schema

  const fields = (
    Object
      .entries(properties)
      .map(([key, schema], index) => {
        if (hasEnum(schema)) {
          log('transformObjectByKey (`enum`)')

          /*
           *  Get selected items for the uri
           */
          const schemaUri = getUri(uri, key)
          const selectedItems = getSelectedItemsForUri(values, uri, schemaUri, schema)
          const isRequired = required.includes(key)

          // log(getValueForEnum(index, schema))

          const {
            [schemaUri]: {
              meta = {},
              elements: {
                enum: field = {}
              } = {}
            } = {}
          } = params

          // log({ key, schemaUri }, selectedItems, isRequired)

          return transformByKey(schema, rootSchema, values, { ...params, [schemaUri]: { meta: { ...meta, selectedItems, isRequired }, elements: { enum: { ...field, selectedItems, isRequired } } }, parentUri: uri, key })
        } else {
          if (hasAnyOf(schema)) {
            log('transformObjectByKey (`anyOf`)')

            /*
             *  Get selected items for the uri
             */
            const schemaUri = getUri(uri, key)
            const selectedItems = getSelectedItemsForUri(values, uri, schemaUri, schema)
            const isRequired = required.includes(key)

            // log(getValueForAnyOf(index, schema))

            const {
              [schemaUri]: {
                meta = {},
                elements: {
                  anyOf: field = {}
                } = {}
              } = {}
            } = params

            // log({ key, schemaUri }, selectedItems, isRequired)

            return transformByKey(schema, rootSchema, values, { ...params, [schemaUri]: { meta: { ...meta, selectedItems, isRequired }, elements: { anyOf: { ...field, selectedItems, isRequired } } }, parentUri: uri, key })
          } else {
            if (hasOneOf(schema)) {
              log('transformObjectByKey (`oneOf`)')

              /*
               *  Get selected items for the uri
               */
              const schemaUri = getUri(uri, key)
              const selectedItems = getSelectedItemsForUri(values, uri, schemaUri, schema)
              const isRequired = required.includes(key)

              // log(getValueForOneOf(index, schema))

              const {
                [schemaUri]: {
                  meta = {},
                  elements: {
                    oneOf: field = {}
                  } = {}
                } = {}
              } = params

              // log({ key, schemaUri }, selectedItems, isRequired)

              return transformByKey(schema, rootSchema, values, { ...params, [schemaUri]: { meta: { ...meta, selectedItems, isRequired }, elements: { oneOf: { ...field, selectedItems, isRequired } } }, parentUri: uri, key })
            }
          }
        }

        log('transformObjectByKey (`value` `defaultValue`)')

        /*
         *  Schemas without `enum`, `anyOf`, or `oneOf` do not have selected items
         */

        /*
         *  Schemas may be required
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

        const schemaUri = getUri(uri, key)
        const isRequired = required.includes(key)

        const {
          [schemaUri]: {
            meta = {},
            elements: {
              field = {}
            } = {}
          } = {}
        } = params

        /*
         *  Do not get the value
         */

        return transformByKey(schema, rootSchema, values, { ...params, [schemaUri]: { meta: { ...meta, isRequired }, elements: { field: { ...field, isRequired } } }, parentUri: uri, key })
      })
  )

  const {
    [uri]: {
      meta = {},
      elements = {}
    } = {}
  } = params

  return renderObject(schema, values, { ...params, parentUri, uri, meta: { ...meta, schema, rootSchema, parentUri, uri, name: fieldKey }, elements: { ...elements, fields } })
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

  const parentUri = getParentUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    properties = {},
    required = []
  } = schema

  const fields = (
    Object
      .entries(properties)
      .map(([key, schema], index) => {
        if (hasEnum(schema)) {
          log('transformObjectByIndex (`enum`)')

          /*
           *  Get selected items for the uri
           */
          const schemaUri = getUri(uri, key)
          const selectedItems = getSelectedItemsForUri(values, uri, schemaUri, schema)
          const isRequired = required.includes(key)

          // log(getValueForEnum(index, schema))

          const {
            [schemaUri]: {
              meta = {},
              elements: {
                enum: field = {}
              } = {}
            } = {}
          } = params

          // log({ key, schemaUri }, selectedItems, isRequired)

          return transformByKey(schema, rootSchema, values, { ...params, [schemaUri]: { meta: { ...meta, selectedItems, isRequired }, elements: { enum: { ...field, selectedItems, isRequired } } }, parentUri: uri, key })
        } else {
          if (hasAnyOf(schema)) {
            log('transformObjectByIndex (`anyOf`)')

            /*
             *  Get selected items for the uri
             */
            const schemaUri = getUri(uri, key)
            const selectedItems = getSelectedItemsForUri(values, uri, schemaUri, schema)
            const isRequired = required.includes(key)

            // log(getValueForAnyOf(index, schema))

            const {
              [schemaUri]: {
                meta = {},
                elements: {
                  anyOf: field = {}
                } = {}
              } = {}
            } = params

            // log({ key, schemaUri }, selectedItems, isRequired)

            return transformByKey(schema, rootSchema, values, { ...params, [schemaUri]: { meta: { ...meta, selectedItems, isRequired }, elements: { anyOf: { ...field, selectedItems, isRequired } } }, parentUri: uri, key })
          } else {
            if (hasOneOf(schema)) {
              log('transformObjectByIndex (`oneOf`)')

              /*
               *  Get selected items for the uri
               */
              const schemaUri = getUri(uri, key)
              const selectedItems = getSelectedItemsForUri(values, uri, schemaUri, schema)
              const isRequired = required.includes(key)

              // log(getValueForOneOf(index, schema))

              const {
                [schemaUri]: {
                  meta = {},
                  elements: {
                    oneOf: field = {}
                  } = {}
                } = {}
              } = params

              // log({ key, schemaUri }, selectedItems, isRequired)

              return transformByKey(schema, rootSchema, values, { ...params, [schemaUri]: { meta: { ...meta, selectedItems, isRequired }, elements: { oneOf: { ...field, selectedItems, isRequired } } }, parentUri: uri, key })
            }
          }
        }

        log('transformObjectByIndex (`value` `defaultValue`)')

        /*
         *  Schemas without `enum`, `anyOf`, or `oneOf` do not have selected items
         */

        /*
         *  Schemas may be required
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

        const schemaUri = getUri(uri, key)
        const isRequired = required.includes(key)

        const {
          [schemaUri]: {
            meta = {},
            elements: {
              field = {}
            } = {}
          } = {}
        } = params

        /*
         *  Do not get the value
         */

        return transformByKey(schema, rootSchema, values, { ...params, [schemaUri]: { meta: { ...meta, isRequired }, elements: { field: { ...field, isRequired } } }, parentUri: uri, key })
      })
  )

  const {
    [uri]: {
      meta = {},
      elements = {}
    } = {}
  } = params

  return renderObject(schema, values, { ...params, parentUri, uri, meta: { ...meta, schema, rootSchema, parentUri, uri, item: arrayIndex }, elements: { ...elements, fields } })
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

  const parentUri = getParentUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const {
    items = [] // array or object
  } = schema

  if (isArray(items)) {
    log('transformArrayByKey (2 - 1)')

    log(`
  /*
   *  Array with "items" array
   */
    `)

    const fields = items.map(mapTransformByIndex(rootSchema, values, { ...params, parentUri: uri }))

    return renderArray(schema, values, { ...params, parentUri, uri, meta: { schema, rootSchema, parentUri, uri, name: fieldKey }, elements: { fields } })
  }

  log('transformArrayByKey (2 - 2)')

  log(`
  /*
   *  Array with "items" object
   */
  `)

  let fields
  if (hasEnum(items)) {
    log('transformArrayByKey (`enum`)')

    /*
     *  Get selected items for the parent uri
     */
    const schemaUri = getUri(uri, 0)
    const selectedItems = getSelectedItemsForParentUri(values, uri, schemaUri, items)

    // log(getValueForEnum(getIndexForEnum(values, uri, schemaUri, items), items))

    const {
      [schemaUri]: {
        meta = {},
        elements: {
          enum: field = {}
        } = {}
      } = {}
    } = params

    fields = [
      transformByIndex(items, rootSchema, values, { ...params, [schemaUri]: { meta: { ...meta, selectedItems }, elements: { enum: { ...field, selectedItems } } }, parentUri: uri })
    ]
  } else {
    if (hasAnyOf(items)) {
      log('transformArrayByKey (`anyOf`)')

      /*
       *  Get selected items for the parent uri
       */
      const schemaUri = getUri(uri, 0)
      const selectedItems = getSelectedItemsForParentUri(values, uri, schemaUri, items)

      // log(getValueForAnyOf(0, items))

      const {
        [schemaUri]: {
          meta = {},
          elements: {
            anyOf: field = {}
          } = {}
        } = {}
      } = params

      fields = [
        transformByIndex(items, rootSchema, values, { ...params, [schemaUri]: { meta: { ...meta, selectedItems }, elements: { anyOf: { ...field, selectedItems } } }, parentUri: uri })
      ]
    } else {
      if (hasOneOf(items)) {
        log('`oneOf`')

        /*
         *  Get selected items for the parent uri
         */
        const schemaUri = getUri(uri, 0)
        const selectedItems = getSelectedItemsForParentUri(values, uri, schemaUri, items)

        // log(getValueForOneOf(0, items))

        const {
          [schemaUri]: {
            meta = {},
            elements: {
              oneOf: field = {}
            } = {}
          } = {}
        } = params

        fields = [
          transformByIndex(items, rootSchema, values, { ...params, [schemaUri]: { meta: { ...meta, selectedItems }, elements: { oneOf: { ...field, selectedItems } } }, parentUri: uri })
        ]
      } else {
        log('transformArrayByKey (`value` `defaultValue`)')

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

        fields = [
          transformByIndex(items, rootSchema, values, { ...params, parentUri: uri })
        ]
      }
    }
  }

  const {
    [uri]: {
      meta = {},
      elements = {}
    } = {}
  } = params

  return renderArray(schema, values, { ...params, parentUri, uri, meta: { ...meta, schema, rootSchema, parentUri, uri, name: fieldKey }, elements: { ...elements, fields } })
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

  const parentUri = getParentUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    items = [] // array or object
  } = schema

  if (isArray(items)) {
    log('transformArrayByIndex (2 - 1)')

    log(`
  /*
   *  Array with "items" array
   */
    `)

    const fields = items.map(mapTransformByIndex(rootSchema, values, { ...params, parentUri: uri }))

    const {
      [uri]: {
        meta = {},
        elements = {}
      } = {}
    } = params

    return renderArray(schema, values, { ...params, parentUri, uri, meta: { ...meta, schema, rootSchema, parentUri, uri, item: arrayIndex }, elements: { ...elements, fields } })
  }

  log('transformArrayByIndex (2 - 2)')

  // log({ arrayParentUri, arrayIndex })

  log(`
  /*
   *  Array with "items" object
   */
  `)

  let fields
  if (hasEnum(items)) {
    log('transformArrayByIndex (`enum`)')

    /*
     *  Get selected items for the parent uri
     */
    const schemaUri = getUri(uri, 0)
    const selectedItems = getSelectedItemsForParentUri(values, uri, schemaUri, items)

    // log(getValueForEnum(getIndexForEnum(values, uri, schemaUri, items), items))

    const {
      [schemaUri]: {
        meta = {},
        elements: {
          enum: field = {}
        } = {}
      } = {}
    } = params

    fields = [
      transformByIndex(items, rootSchema, values, { ...params, [schemaUri]: { meta: { ...meta, selectedItems }, elements: { enum: { ...field, selectedItems } } }, parentUri: uri })
    ]
  } else {
    if (hasAnyOf(items)) {
      log('transformArrayByIndex (`anyOf`)')

      /*
       *  Get selected items for the parent uri
       */
      const schemaUri = getUri(uri, 0)
      const selectedItems = getSelectedItemsForParentUri(values, uri, schemaUri, items)

      // log(getValueForAnyOf(getIndexForAnyOf(values, uri, schemaUri, items), items))

      const {
        [schemaUri]: {
          meta = {},
          elements: {
            anyOf: field = {}
          } = {}
        } = {}
      } = params

      fields = [
        transformByIndex(items, rootSchema, values, { ...params, [schemaUri]: { meta: { ...meta, selectedItems }, elements: { anyOf: { ...field, selectedItems } } }, parentUri: uri })
      ]
    } else {
      if (hasOneOf(items)) {
        log('transformArrayByIndex (`oneOf`)')

        /*
         *  Get selected items for the parent uri
         */
        const schemaUri = getUri(uri, 0)
        const selectedItems = getSelectedItemsForParentUri(values, uri, schemaUri, items)

        // log(getValueForOneOf(0, items))

        const {
          [schemaUri]: {
            meta = {},
            elements: {
              oneOf: field = {}
            } = {}
          } = {}
        } = params

        fields = [
          transformByIndex(items, rootSchema, values, { ...params, [schemaUri]: { meta: { ...meta, selectedItems }, elements: { oneOf: { ...field, selectedItems } } }, parentUri: uri })
        ]
      } else {
        log('transformArrayByIndex (`value` `defaultValue`)')

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

        const schemaUri = getUri(uri, 0)

        if (isArraySchema(items)) {
          log(`

  Array. Do not get the value

          `)

          fields = [
            transformByIndex(items, rootSchema, values, { ...params, parentUri: uri })
          ]
        } else {
          if (isObjectSchema(items)) {
            log(`

  Object. Do not get the value

            `)

            fields = [
              transformByIndex(items, rootSchema, values, { ...params, parentUri: uri })
            ]
          } else {
            log(`

  Get the value

            `)

            if (Reflect.has(values, uri)) {
              const value = Reflect.get(values, uri)

              if (isArray(values[uri])) {
                log(`

  value is array

                `)

                const v = Reflect.get(value, 0)

                const {
                  [schemaUri]: {
                    meta = {},
                    elements: {
                      field = {}
                    } = {}
                  } = {}
                } = params

                fields = [
                  transformByIndex(items, rootSchema, values, { ...params, parentUri: uri, uri: schemaUri, [schemaUri]: { meta: { ...meta, value: String(v) }, elements: { field: { ...field, value: String(v) } } } })
                ]
              } else {
                if (isObject(values[uri])) {
                  log(`

  value is object

                  `)

                  const v = Reflect.get(value, 0)

                  const {
                    [schemaUri]: {
                      meta = {},
                      elements: {
                        field = {}
                      } = {}
                    } = {}
                  } = params

                  fields = [
                    transformByIndex(items, rootSchema, values, { ...params, parentUri: uri, uri: schemaUri, [schemaUri]: { meta: { ...meta, value: String(v) }, elements: { field: { ...field, value: String(v) } } } })
                  ]
                } else {
                  log(`

  value is neither an array nor an object

                  `)

                  const {
                    [uri]: {
                      meta = {},
                      elements: {
                        field = {}
                      } = {}
                    } = {}
                  } = params

                  fields = [
                    transformByIndex(items, rootSchema, values, { ...params, parentUri: uri, uri: schemaUri, [schemaUri]: { meta: { ...meta, value: String(value) }, elements: { field: { ...field, value: String(value) } } } })
                  ]
                }
              }
            } else {
              fields = [
                transformByIndex(items, rootSchema, values, { ...params, parentUri: uri })
              ]
            }
          }
        }
      }
    }
  }

  const {
    [uri]: {
      meta = {},
      elements = {}
    } = {}
  } = params

  // log({ meta: { ...meta, schema, rootSchema, parentUri, uri, item: arrayIndex }, elements: { ...elements, fields } })

  return renderArray(schema, values, { ...params, parentUri, uri, meta: { ...meta, schema, rootSchema, parentUri, uri, item: arrayIndex }, elements: { ...elements, fields } })
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
  const parentUri = getParentUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const {
    [uri]: {
      meta = {},
      elements = {}
    } = {}
  } = params

  /*
   *  Do not get the value
   */

  return renderNumber(schema, values, { ...params, parentUri, uri, meta: { ...meta, schema, rootSchema, parentUri, uri, name: fieldKey }, elements })
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

  // log({ arrayParentUri, arrayIndex })

  /*
   *  Resolve `parentUri` and `uri`
   */
  const parentUri = getParentUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    [uri]: {
      meta = {},
      elements = {}
    } = {}
  } = params

  /*
   *  Do not get the value
   */

  return renderNumber(schema, values, { ...params, parentUri, uri, meta: { ...meta, schema, rootSchema, parentUri, uri, item: arrayIndex }, elements })
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
  const parentUri = getParentUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const {
    [uri]: {
      meta = {},
      elements = {}
    } = {}
  } = params

  /*
   *  Do not get the value
   */

  return renderString(schema, values, { ...params, parentUri, uri, meta: { ...meta, schema, rootSchema, parentUri, uri, name: fieldKey }, elements })
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

  // log({ arrayParentUri, arrayIndex })

  /*
   *  Resolve `parentUri` and `uri`
   */
  const parentUri = getParentUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    [uri]: {
      meta = {},
      elements = {}
    } = {}
  } = params

  /*
   *  Do not get the value
   */

  return renderString(schema, values, { ...params, parentUri, uri, meta: { ...meta, schema, rootSchema, parentUri, uri, item: arrayIndex }, elements })
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

  const {
    [uri]: {
      meta = {},
      elements = {}
    } = {}
  } = params

  /*
   *  Do not get the value
   */

  return renderNull(schema, values, { ...params, parentUri, uri, meta: { ...meta, schema, rootSchema }, elements })
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

  const {
    [uri]: {
      meta = {},
      elements = {}
    } = {}
  } = params

  /*
   *  Do not get the value
   */

  return renderBoolean(schema, values, { ...params, parentUri, uri, meta: { ...meta, schema, rootSchema }, elements })
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
      .map(([key, schema], index) => {
        if (hasEnum(schema)) {
          log('transformObject (`enum`)')

          /*
           *  Get selected items for the uri
           */
          const schemaUri = getUri(uri, key)
          const selectedItems = getSelectedItemsForUri(values, uri, schemaUri, schema)
          const isRequired = required.includes(key)

          // log(getValueForEnum(index, schema))

          const {
            [schemaUri]: {
              meta = {},
              elements: {
                enum: field = {}
              } = {}
            } = {}
          } = params

          // log({ key, schemaUri }, selectedItems, isRequired)

          return transformByKey(schema, rootSchema, values, { ...params, [schemaUri]: { meta: { ...meta, selectedItems, isRequired }, elements: { enum: { ...field, selectedItems, isRequired } } }, parentUri: uri, key }) // ??
        } else {
          if (hasAnyOf(schema)) {
            log('transformObject (`anyOf`)')

            /*
             *  Get selected items for the uri
             */
            const schemaUri = getUri(uri, key)
            const selectedItems = getSelectedItemsForUri(values, uri, schemaUri, schema)
            const isRequired = required.includes(key)

            // log(getValueForAnyOf(index, schema))

            const {
              [schemaUri]: {
                meta = {},
                elements: {
                  anyOf: field = {}
                } = {}
              } = {}
            } = params

            // log({ key, schemaUri }, selectedItems, isRequired)

            return transformByKey(schema, rootSchema, values, { ...params, [schemaUri]: { meta: { ...meta, selectedItems, isRequired }, elements: { anyOf: { ...field, selectedItems, isRequired } } }, parentUri: uri, key }) // ??
          } else {
            if (hasOneOf(schema)) {
              log('transformObject (`oneOf`)')

              /*
               *  Get selected items for the uri
               */
              const schemaUri = getUri(uri, key)
              const selectedItems = getSelectedItemsForUri(values, uri, schemaUri, schema)
              const isRequired = required.includes(key)

              // log(getValueForOneOf(index, schema))

              const {
                [schemaUri]: {
                  meta = {},
                  elements: {
                    oneOf: field = {}
                  } = {}
                } = {}
              } = params

              // log({ key, schemaUri }, selectedItems, isRequired)

              return transformByKey(schema, rootSchema, values, { ...params, [schemaUri]: { meta: { ...meta, selectedItems, isRequired }, elements: { oneOf: { ...field, selectedItems, isRequired } } }, parentUri: uri, key }) // ??
            }
          }
        }

        log('transformObject (`value` `defaultValue`)')

        /*
         *  Schemas without `enum`, `anyOf`, or `oneOf` do not have selected items
         */

        /*
         *  Schemas may be required
         */

        /*
         *  Schemas may have a value
         */

        const schemaUri = getUri(uri, key)
        const isRequired = required.includes(key)

        const {
          [schemaUri]: {
            meta = {},
            elements: {
              field = {}
            } = {}
          } = {}
        } = params

        /*
         *  Do not get the value
         */

        return transformByKey(schema, rootSchema, values, { ...params, [schemaUri]: { meta: { ...meta, isRequired }, elements: { field: { ...field, isRequired } } }, parentUri: uri, key })
      })
  )

  const {
    [uri]: {
      meta = {},
      elements = {}
    } = {}
  } = params

  return renderObject(schema, values, { ...params, parentUri, uri, meta: { ...meta, schema, rootSchema, parentUri }, elements: { ...elements, fields } })
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

    return renderArray(schema, values, { ...params, parentUri, uri, meta: { schema, rootSchema, parentUri }, elements: { fields } })
  }

  log('transformArray (2 - 2)')

  log(`

  Array with "items" object

  `)

  let fields
  if (hasEnum(items)) {
    log('transformArray (`enum`)')

    /*
     *  Get selected items for the parent uri
     */
    const schemaUri = getUri(uri, 0)
    const selectedItems = getSelectedItemsForParentUri(values, uri, schemaUri, items)

    // log(getValueForEnum(0, schema))

    const {
      [schemaUri]: {
        meta = {},
        elements: {
          enum: field = {}
        } = {}
      } = {}
    } = params

    fields = [
      transformByIndex(items, rootSchema, values, { ...params, [schemaUri]: { meta: { ...meta, selectedItems }, elements: { enum: { ...field, selectedItems } } }, parentUri: uri })
    ]
  } else {
    if (hasAnyOf(items)) {
      log('transformArray (`anyOf`)')

      /*
       *  Get selected items for the parent uri
       */
      const schemaUri = getUri(uri, 0)
      const selectedItems = getSelectedItemsForParentUri(values, uri, schemaUri, items)

      // log(getValueForAnyOf(0, schema))

      const {
        [schemaUri]: {
          meta = {},
          elements: {
            anyOf: field = {}
          } = {}
        } = {}
      } = params

      fields = [
        transformByIndex(items, rootSchema, values, { ...params, [schemaUri]: { meta: { ...meta, selectedItems }, elements: { anyOf: { ...field, selectedItems } } }, parentUri: uri })
      ]
    } else {
      if (hasOneOf(items)) {
        log('transformArray (`oneOf`)')

        /*
         *  Get selected items for the parent uri
         */
        const schemaUri = getUri(uri, 0)
        const selectedItems = getSelectedItemsForParentUri(values, uri, schemaUri, items)

        // log(getValueForOneOf(0, schema))

        const {
          [schemaUri]: {
            meta = {},
            elements: {
              oneOf: field = {}
            } = {}
          } = {}
        } = params

        fields = [
          transformByIndex(items, rootSchema, values, { ...params, [schemaUri]: { meta: { ...meta, selectedItems }, elements: { anyOf: { ...field, selectedItems } } }, parentUri: uri })
        ]
      } else {
        log('transformArray (`value` `defaultValue`)')

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

        fields = [
          transformByIndex(items, rootSchema, values, { ...params, parentUri: uri })
        ]
      }
    }
  }

  const {
    [uri]: {
      meta = {},
      elements = {}
    } = {}
  } = params

  return renderArray(schema, values, { ...params, parentUri, uri, meta: { ...meta, schema, rootSchema, parentUri }, elements: { ...elements, fields } })
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

  const {
    [uri]: {
      meta = {},
      elements = {}
    } = {}
  } = params

  /*
   *  Do not get the value
   */

  return renderNumber(schema, values, { ...params, parentUri, uri, meta: { ...meta, schema, rootSchema }, elements })
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

  const {
    [uri]: {
      meta = {},
      elements = {}
    } = {}
  } = params

  /*
   *  Do not get the value
   */

  return renderString(schema, values, { ...params, parentUri, uri, meta: { ...meta, schema, rootSchema }, elements })
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
