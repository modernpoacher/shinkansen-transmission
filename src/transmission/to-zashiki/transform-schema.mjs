/**
 *  @typedef {TransmissionTypes.ObjectLiteralType} ObjectLiteralType
 *  @typedef {TransmissionTypes.ObjectType} ObjectType
 *
 *  @typedef {TransmissionTypes.EnumType} EnumType
 *  @typedef {TransmissionTypes.AnyOfType} AnyOfType
 *  @typedef {TransmissionTypes.OneOfType} OneOfType
 *  @typedef {TransmissionTypes.FieldType} FieldType
 *
 *  @typedef {TransmissionTypes.SchemaType} SchemaType
 *  @typedef {TransmissionTypes.ValuesType} ValuesType
 *  @typedef {TransmissionTypes.ParamsType} ParamsType
 *
 *  @typedef {TransmissionTypes.Zashiki.ZashikiType} ZashikiType
 *
 *  @typedef {TransmissionTypes.Zashiki.StringMetaType} ZashikiStringMetaType
 *  @typedef {TransmissionTypes.Zashiki.NumberMetaType} ZashikiNumberMetaType
 *  @typedef {TransmissionTypes.Zashiki.ArrayMetaType} ZashikiArrayMetaType
 *  @typedef {TransmissionTypes.Zashiki.ObjectMetaType} ZashikiObjectMetaType
 *  @typedef {TransmissionTypes.Zashiki.BooleanMetaType} ZashikiBooleanMetaType
 *  @typedef {TransmissionTypes.Zashiki.NullMetaType} ZashikiNullMetaType
 *
 *  @typedef {TransmissionTypes.Zashiki.StringElementsType} ZashikiStringElementsType
 *  @typedef {TransmissionTypes.Zashiki.NumberElementsType} ZashikiNumberElementsType
 *  @typedef {TransmissionTypes.Zashiki.ArrayElementsType} ZashikiArrayElementsType
 *  @typedef {TransmissionTypes.Zashiki.ObjectElementsType} ZashikiObjectElementsType
 *  @typedef {TransmissionTypes.Zashiki.BooleanElementsType} ZashikiBooleanElementsType
 *  @typedef {TransmissionTypes.Zashiki.NullElementsType} ZashikiNullElementsType
 */

import debug from 'debug'

import {
  isArray,
  isObject,

  isPrimitive,

  isArraySchema,
  isObjectSchema,

  getTitle,
  getDescription,

  getSelectedItems,

  hasEnum,
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
  getElementsFieldPropsForEnum,
  getElementsFieldPropsForAnyOf,
  getElementsFieldPropsForOneOf,
  getElementsFieldPropsForAllOf,
  getElementsFieldProps,
  getElementsFieldValue
} from '#transmission/transmission/common'

const log = debug('shinkansen-transmission/to-zashiki/schema')

log('`shinkansen` is awake')

/**
 *  @param {SchemaType} schemaProps
 *  @param {SchemaType} item
 *  @returns {SchemaType}
 */
function toSchema (schemaProps, item) {
  return Object.assign(schemaProps, item)
}

/**
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {(schema: SchemaType, index: number) => ZashikiType}
 */
export function mapTransformNullByIndex (rootSchema, values, params) {
  /**
   *  log('mapTransformNullByIndex')
   */

  return function map (schema, index) {
    /**
     *  log('map)
     */
    params.index = index

    return (
      transformNullByIndex(schema, rootSchema, values, params)
    )
  }
}

/**
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {(schema: SchemaType, index: number) => ZashikiType}
 */
export function mapTransformBooleanByIndex (rootSchema, values, params) {
  /**
   *  log('mapTransformBooleanByIndex')
   */

  return function map (schema, index) {
    /**
     *  log('map')
     */
    params.index = index

    return (
      transformBooleanByIndex(schema, rootSchema, values, params)
    )
  }
}

/**
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {(schema: SchemaType, index: number) => ZashikiType}
 */
export function mapTransformObjectByIndex (rootSchema, values, params) {
  /**
   *  log('mapTransformObjectByIndex')
   */

  return function map (schema, index) {
    /**
     *  log('map')
     */
    params.index = index

    return (
      transformObjectByIndex(schema, rootSchema, values, params)
    )
  }
}

/**
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {(schema: SchemaType, index: number) => ZashikiType}
 */
export function mapTransformArrayByIndex (rootSchema, values, params) {
  /**
   *  log('mapTransformArrayByIndex')
   */

  return function map (schema, index) {
    /**
     *  log('map')
     */
    params.index = index

    return (
      transformArrayByIndex(schema, rootSchema, values, params)
    )
  }
}

/**
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {(schema: SchemaType, index: number) => ZashikiType}
 */
export function mapTransformNumberByIndex (rootSchema, values, params) {
  /**
   *  log('mapTransformNumberByIndex')
   */

  return function map (schema, index) {
    /**
     *  log('map')
     */
    params.index = index

    return (
      transformNumberByIndex(schema, rootSchema, values, params)
    )
  }
}

/**
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {(schema: SchemaType, index: number) => ZashikiType}
 */
export function mapTransformStringByIndex (rootSchema, values, params) {
  /**
   *  log('mapTransformStringByIndex')
   */

  return function map (schema, index) {
    /**
     *  log('map')
     */
    params.index = index

    return (
      transformStringByIndex(schema, rootSchema, values, params)
    )
  }
}

/**
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {(schema: SchemaType, index: number) => ZashikiType}
 */
export function mapTransformByIndex (rootSchema, values, params) {
  /**
   *  log('mapTransformByIndex')
   */

  return function map (schema, index) {
    /**
     *  log('map')
     */
    params.index = index

    return (
      getTransformByIndex(schema, rootSchema, values, params)
    )
  }
}

/**
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {(entries: [key: string, schema: SchemaType]) => ZashikiType}
 */
export function mapTransformByKey (rootSchema, values, params) {
  /**
   *  log('mapTransformByKey')
   */

  return function map ([key, schema]) {
    /**
     *  log('map')
     */
    params.key = key

    return (
      getTransformByKey(schema, rootSchema, values, params)
    )
  }
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function getTransformByKey (schema, rootSchema, values, params) {
  /**
   *  log('getTransformByKey')
   */

  if (hasEnum(schema)) {
    return transformByKeyForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformByKeyForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformByKeyForOneOf(schema, rootSchema, values, params)
      }
    }
  }

  return transformByKey(schema, rootSchema, values, getParamsByKey(schema, rootSchema, values, params))
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function getTransformByIndex (schema, rootSchema, values, params) {
  /**
   *  log('getTransformByIndex')
   */

  if (hasEnum(schema)) {
    return transformByIndexForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformByIndexForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformByIndexForOneOf(schema, rootSchema, values, params)
      }
    }
  }

  if (isArraySchema(schema)) { // getParamsByIndex
    /*
     *  log('isArraySchema')
     */

    return transformByIndex(schema, rootSchema, values, getParamsByIndex(schema, rootSchema, values, params))
  } else {
    if (isObjectSchema(schema)) { // getParamsByIndex
      /*
       *  log('isObjectSchema')
       */

      return transformByIndex(schema, rootSchema, values, getParamsByIndex(schema, rootSchema, values, params))
    } else {
      const {
        parentUri = '#/'
      } = params

      if (Reflect.has(values, parentUri)) {
        const value = Reflect.get(values, parentUri)

        if (isPrimitive(value)) {
          const {
            index = 0
          } = params

          const uri = getUri(parentUri, index)

          const s = String(value)

          const meta = Object.assign(getMetaProps(params, uri), {
            parentUri,
            uri,
            value: s
          })
          const elements = {
            field: Object.assign(getElementsFieldProps(params, uri), {
              value: s
            })
          }

          return transformByIndex(schema, rootSchema, values, Object.assign(structuredClone(params), { parentUri, uri, [uri]: { meta, elements } }))
        } else {
          const {
            index = 0
          } = params

          if (index in value) { // Reflect.has(value, index)) {
            const v = value[index] // Reflect.get(value, index)

            const uri = getUri(parentUri, index)

            const s = String(v)

            const meta = Object.assign(getMetaProps(params, uri), {
              parentUri,
              uri,
              value: s
            })
            const elements = {
              field: Object.assign(getElementsFieldProps(params, uri), {
                value: s
              })
            }

            return transformByIndex(schema, rootSchema, values, Object.assign(structuredClone(params), { parentUri, uri, [uri]: { meta, elements } }))
          }
        }
      }
    }
  }

  // getParamsByIndex

  return transformByIndex(schema, rootSchema, values, getParamsByIndex(schema, rootSchema, values, params))
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getRenderParamsByKeyForEnum (schema, rootSchema, values, params) {
  /**
   *  log('getRenderParamsByKeyForEnum')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = '',
    required = [],
    selectedItems = [],
    items = []
  } = params

  /*
   *  Resolve `parentUri` and `uri`
   */
  const parentUri = normaliseUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const meta = Object.assign(getMetaProps(params, uri), {
    schema,
    rootSchema,
    parentUri,
    uri,
    selectedItems,
    items,
    name: fieldKey,
    isRequired: required.includes(fieldKey)
  })
  const elements = {
    enum: Object.assign(getElementsFieldPropsForEnum(params, uri), {
      selectedItems,
      items
    })
  }

  return Object.assign(params, {
    parentUri,
    uri,
    [uri]: {
      meta,
      elements
    }
  })
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getRenderParamsByKeyForAnyOf (schema, rootSchema, values, params) {
  /**
   *  log('getRenderParamsByKeyForAnyOf')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = '',
    required = [],
    selectedItems = [],
    items = []
  } = params

  /*
   *  Resolve `parentUri` and `uri`
   */
  const parentUri = normaliseUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const meta = Object.assign(getMetaProps(params, uri), {
    schema,
    rootSchema,
    parentUri,
    uri,
    selectedItems,
    items,
    name: fieldKey,
    isRequired: required.includes(fieldKey)
  })
  const elements = {
    anyOf: Object.assign(getElementsFieldPropsForAnyOf(params, uri), {
      selectedItems,
      items
    })
  }

  return Object.assign(params, {
    parentUri,
    uri,
    [uri]: {
      meta,
      elements
    }
  })
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getRenderParamsByKeyForOneOf (schema, rootSchema, values, params) {
  /**
   *  log('getRenderParamsByKeyForOneOf')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = '',
    required = [],
    selectedItems = [],
    items = []
  } = params

  /*
   *  Resolve `parentUri` and `uri`
   */
  const parentUri = normaliseUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const meta = Object.assign(getMetaProps(params, uri), {
    schema,
    rootSchema,
    parentUri,
    uri,
    selectedItems,
    items,
    name: fieldKey,
    isRequired: required.includes(fieldKey)
  })
  const elements = {
    oneOf: Object.assign(getElementsFieldPropsForOneOf(params, uri), {
      selectedItems,
      items
    })
  }

  return Object.assign(params, {
    parentUri,
    uri,
    [uri]: {
      meta,
      elements
    }
  })
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getRenderParamsByKeyForAllOf (schema, rootSchema, values, params) {
  /**
   *  log('getRenderParamsByKeyForAllOf')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = '',
    required = []
  } = params

  /*
   *  Resolve `parentUri` and `uri`
   */
  const parentUri = normaliseUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const meta = Object.assign(getMetaProps(params, uri), {
    schema,
    rootSchema,
    parentUri,
    uri,
    name: fieldKey,
    isRequired: required.includes(fieldKey)
  })

  return Object.assign(params, {
    parentUri,
    uri,
    [uri]: {
      meta,
      elements: getElementsProps(params, uri)
    }
  })
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getRenderParamsByKey (schema, rootSchema, values, params) {
  /**
   *  log('getRenderParamsByKey')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = '',
    required = []
  } = params

  /*
   *  Resolve `parentUri` and `uri`
   */
  const parentUri = normaliseUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const meta = Object.assign(getMetaProps(params, uri), {
    schema,
    rootSchema,
    parentUri,
    uri,
    name: fieldKey,
    isRequired: required.includes(fieldKey)
  })
  const elements = {
    field: getElementsFieldProps(params, uri)
  }

  return Object.assign(params, {
    parentUri,
    uri,
    [uri]: {
      meta,
      elements
    }
  })
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getRenderParamsByIndexForEnum (schema, rootSchema, values, params) {
  /**
   *  log('getRenderParamsByIndexForEnum')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0,
    selectedItems = [],
    items = []
  } = params

  /*
   *  Resolve `parentUri` and `uri`
   */
  const parentUri = normaliseUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const meta = Object.assign(getMetaProps(params, uri), {
    schema,
    rootSchema,
    parentUri,
    uri,
    selectedItems,
    items,
    item: arrayIndex
  })
  const elements = {
    enum: Object.assign(getElementsFieldPropsForEnum(params, uri), {
      selectedItems,
      items
    })
  }

  return Object.assign(params, {
    parentUri,
    uri,
    [uri]: {
      meta,
      elements
    }
  })
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getRenderParamsByIndexForAnyOf (schema, rootSchema, values, params) {
  /**
   *  log('getRenderParamsByIndexForAnyOf')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0,
    selectedItems = [],
    items = []
  } = params

  /*
   *  Resolve `parentUri` and `uri`
   */
  const parentUri = normaliseUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const meta = Object.assign(getMetaProps(params, uri), {
    schema,
    rootSchema,
    parentUri,
    uri,
    selectedItems,
    items,
    item: arrayIndex
  })
  const elements = {
    anyOf: Object.assign(getElementsFieldPropsForAnyOf(params, uri), {
      selectedItems,
      items
    })
  }

  return Object.assign(params, {
    parentUri,
    uri,
    [uri]: {
      meta,
      elements
    }
  })
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getRenderParamsByIndexForOneOf (schema, rootSchema, values, params) {
  /**
   *  log('getRenderParamsByIndexForOneOf')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0,
    selectedItems = [],
    items = []
  } = params

  /*
   *  Resolve `parentUri` and `uri`
   */
  const parentUri = normaliseUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const meta = Object.assign(getMetaProps(params, uri), {
    schema,
    rootSchema,
    parentUri,
    uri,
    selectedItems,
    items,
    item: arrayIndex
  })
  const elements = {
    oneOf: Object.assign(getElementsFieldPropsForOneOf(params, uri), {
      selectedItems,
      items
    })
  }

  return Object.assign(params, {
    parentUri,
    uri,
    [uri]: {
      meta,
      elements
    }
  })
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getRenderParamsByIndexForAllOf (schema, rootSchema, values, params) {
  /**
   *  log('getRenderParamsByIndexForAllOf')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  /*
   *  Resolve `parentUri` and `uri`
   */
  const parentUri = normaliseUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const meta = Object.assign(getMetaProps(params, uri), {
    schema,
    rootSchema,
    parentUri,
    uri,
    item: arrayIndex
  })
  const elements = {
    field: getElementsFieldPropsForAllOf(params, uri)
  }

  return Object.assign(params, {
    parentUri,
    uri,
    [uri]: {
      meta,
      elements
    }
  })
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getRenderParamsByIndex (schema, rootSchema, values, params) {
  /**
   *  log('getRenderParamsByIndex')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  /*
   *  Resolve `parentUri` and `uri`
   */
  const parentUri = normaliseUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const meta = Object.assign(getMetaProps(params, uri), {
    schema,
    rootSchema,
    parentUri,
    uri,
    item: arrayIndex
  })
  const elements = {
    field: getElementsFieldProps(params, uri)
  }

  return Object.assign(params, {
    parentUri,
    uri,
    [uri]: {
      meta,
      elements
    }
  })
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getRenderParamsForEnum (schema, rootSchema, values, params) {
  /**
   *  log('getRenderParamsForEnum')
   */

  const {
    parentUri = '#',
    uri = '#/',
    selectedItems = [],
    items = []
  } = params

  const meta = Object.assign(getMetaProps(params, uri), {
    schema,
    rootSchema,
    parentUri: normaliseUri(parentUri),
    uri,
    selectedItems,
    items
  })
  const elements = {
    enum: Object.assign(getElementsFieldPropsForEnum(params, uri), {
      selectedItems,
      items
    })
  }

  return Object.assign(params, {
    parentUri,
    uri,
    [uri]: {
      meta,
      elements
    }
  })
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getRenderParamsForAnyOf (schema, rootSchema, values, params) {
  /**
   *  log('getRenderParamsForAnyOf')
   */

  const {
    parentUri = '#',
    uri = '#/',
    selectedItems = [],
    items = []
  } = params

  const meta = Object.assign(getMetaProps(params, uri), {
    schema,
    rootSchema,
    parentUri: normaliseUri(parentUri),
    uri,
    selectedItems,
    items
  })
  const elements = {
    anyOf: Object.assign(getElementsFieldPropsForAnyOf(params, uri), {
      selectedItems,
      items
    })
  }

  return Object.assign(params, {
    parentUri,
    uri,
    [uri]: {
      meta,
      elements
    }
  })
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getRenderParamsForOneOf (schema, rootSchema, values, params) {
  /**
   *  log('getRenderParamsForOneOf')
   */

  const {
    parentUri = '#',
    uri = '#/',
    selectedItems = [],
    items = []
  } = params

  const meta = Object.assign(getMetaProps(params, uri), {
    schema,
    rootSchema,
    parentUri: normaliseUri(parentUri),
    uri,
    selectedItems,
    items
  })
  const elements = {
    oneOf: Object.assign(getElementsFieldPropsForOneOf(params, uri), {
      selectedItems,
      items
    })
  }

  return Object.assign(params, {
    parentUri,
    uri,
    [uri]: {
      meta,
      elements
    }
  })
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getRenderParamsForAllOf (schema, rootSchema, values, params) {
  /**
   *  log('getRenderParamsForAllOf')
   */

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const meta = Object.assign(getMetaProps(params, uri), {
    schema,
    rootSchema,
    parentUri: normaliseUri(parentUri),
    uri
  })
  const elements = {
    field: getElementsFieldPropsForAllOf(params, uri)
  }

  return Object.assign(params, {
    parentUri,
    uri,
    [uri]: {
      meta,
      elements
    }
  })
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getRenderParams (schema, rootSchema, values, params) {
  /**
   *  log('getRenderParams')
   */

  const {
    parentUri = '#',
    uri = '#/',
    fields = []
  } = params

  const meta = Object.assign(getMetaProps(params, uri), {
    schema,
    rootSchema,
    parentUri: normaliseUri(parentUri),
    uri
  })
  const elements = Object.assign(getElementsFieldProps(params, uri), {
    fields
  })

  return Object.assign(params, {
    fields // yep!
  },
  {
    parentUri,
    uri,
    [uri]: {
      meta,
      elements
    }
  })
}

/**
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {ZashikiNullMetaType}
 */
export function renderNullMetaForEnum (params, uri) {
  /**
   *  log('renderNullMetaForEnum')
   */

  /**
   *  @type {{ parentUri?: string }}
   */
  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  return (
    Object.assign(
      {
        uri,
        type: 'null'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      metaProps
    )
  )
}

/**
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {ZashikiNullMetaType}
 */
export function renderNullMetaForAnyOf (params, uri) {
  /**
   *  log('renderNullMetaForAnyOf')
   */

  /**
   *  @type {{ parentUri?: string }}
   */
  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  return (
    Object.assign(
      {
        uri,
        type: 'null'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      metaProps
    )
  )
}

/**
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {ZashikiNullMetaType}
 */
export function renderNullMetaForOneOf (params, uri) {
  /**
   *  log('renderNullMetaForOneOf')
   */

  /**
   *  @type {{ parentUri?: string }}
   */
  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  return (
    Object.assign(
      {
        uri,
        type: 'null'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      metaProps
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {ZashikiNullMetaType}
 */
export function getNullMetaForAllOf (schema, values, params, uri) {
  /**
   *  log('getNullMetaForAllOf')
   */

  const metaDefaultValue = getMetaDefaultValue(schema) // , uri)
  const metaValue = getMetaValue(values, uri, schema)

  /**
   *  @type {{ parentUri?: string }}
   */
  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  return (
    Object.assign(
      {
        uri,
        type: 'null'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      metaDefaultValue,
      metaValue,
      metaProps
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {ZashikiNullMetaType}
 */
export function renderNullMetaForAllOf (schema, values, params, uri) {
  /**
   *  log('renderNullMetaForAllOf')
   */

  /**
   *  @type {{ parentUri?: string }}
   */
  const {
    parentUri = '#'
  } = getMetaProps(params, uri)

  if (isParentUri(parentUri, uri)) {
    const {
      selectedItems
    } = getMetaProps(params, parentUri)

    return (
      Object.assign(
        getNullMetaForAllOf(schema, values, params, uri),
        isArray(selectedItems) ? { selectedItems } : {}
      )
    )
  }

  return (
    getNullMetaForAllOf(schema, values, params, uri)
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {ZashikiNullMetaType}
 */
export function getNullMeta (schema, values, params, uri) {
  /**
   *  log('getNullMeta')
   */

  const metaDefaultValue = getMetaDefaultValue(schema) // , uri)
  const metaValue = getMetaValue(values, uri, schema)

  /**
   *  @type {{ parentUri?: string }}
   */
  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  return (
    Object.assign(
      {
        uri,
        type: 'null'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      metaDefaultValue,
      metaValue,
      metaProps
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {ZashikiNullMetaType}
 */
export function renderNullMeta (schema, values, params, uri) {
  /**
   *  log('renderNullMeta')
   */

  /**
   *  @type {{ parentUri?: string }}
   */
  const {
    parentUri = '#'
  } = getMetaProps(params, uri)

  if (isParentUri(parentUri, uri)) {
    const {
      selectedItems
    } = getMetaProps(params, parentUri)

    return (
      Object.assign(
        getNullMeta(schema, values, params, uri),
        isArray(selectedItems) ? { selectedItems } : {}
      )
    )
  }

  return (
    getNullMeta(schema, values, params, uri)
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} field
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {EnumType}
 */
export function renderNullElementsFieldForEnum (field, params, uri) {
  /**
   *  log('renderNullElementsFieldForEnum')
   */

  return (
    Object.assign(
      field,
      getElementsFieldPropsForEnum(params, uri),
      {
        id: uri
      }
    )
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} field
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {AnyOfType}
 */
export function renderNullElementsFieldForAnyOf (field, params, uri) {
  /**
   *  log('renderNullElementsFieldForAnyOf')
   */

  return (
    Object.assign(
      field,
      getElementsFieldPropsForAnyOf(params, uri),
      {
        id: uri
      }
    )
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} field
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {OneOfType}
 */
export function renderNullElementsFieldForOneOf (field, params, uri) {
  /**
   *  log('renderNullElementsFieldForOneOf')
   */

  return (
    Object.assign(
      field,
      getElementsFieldPropsForOneOf(params, uri),
      {
        id: uri
      }
    )
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} field
 *  @param {ParamsType} params
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {string} uri
 *  @returns {ObjectLiteralType | ObjectType}
 */
export function getNullElementsFieldForAllOf (field, schema, values, params, uri) {
  /**
   *  log('getNullElementsFieldForAllOf')
   */

  const fieldValue = getElementsFieldValue(values, uri, schema)
  const fieldProps = getElementsFieldProps(params, uri)

  return (
    Object.assign(
      field,
      fieldValue,
      fieldProps
    )
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} field
 *  @param {ParamsType} params
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {string} uri
 *  @returns {FieldType}
 */
export function renderNullElementsFieldForAllOf (field, schema, values, params, uri) {
  /**
   *  log('renderNullElementsFieldForAllOf')
   */

  const {
    parentUri = '#'
  } = params

  if (isParentUri(parentUri, uri)) {
    const {
      selectedItems
    } = getMetaProps(params, parentUri)

    return (
      Object.assign(
        getNullElementsFieldForAllOf(field, schema, values, params, uri),
        isArray(selectedItems) ? { selectedItems } : {},
        {
          id: uri
        }
      )
    )
  }

  return (
    Object.assign(
      getNullElementsFieldForAllOf(field, schema, values, params, uri),
      {
        id: uri
      }
    )
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} field
 *  @param {ParamsType} params
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {string} uri
 *  @returns {ObjectLiteralType | ObjectType}
 */
export function getNullElementsField (field, schema, values, params, uri) {
  /**
   *  log('getNullElementsField')
   */

  const fieldValue = getElementsFieldValue(values, uri, schema)
  const fieldProps = getElementsFieldProps(params, uri)

  return (
    Object.assign(
      field,
      fieldValue,
      fieldProps
    )
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} field
 *  @param {ParamsType} params
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {string} uri
 *  @returns {FieldType}
 */
export function renderNullElementsField (field, schema, values, params, uri) {
  /**
   *  log('renderNullElementsField')
   */

  const {
    parentUri = '#'
  } = params

  if (isParentUri(parentUri, uri)) {
    const {
      selectedItems
    } = getMetaProps(params, parentUri)

    return (
      Object.assign(
        getNullElementsField(field, schema, values, params, uri),
        isArray(selectedItems) ? { selectedItems } : {},
        {
          id: uri
        }
      )
    )
  }

  return (
    Object.assign(
      getNullElementsField(field, schema, values, params, uri),
      {
        id: uri
      }
    )
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} elements
 *  @param {SchemaType} schema
 *  @returns {ObjectLiteralType | ObjectType}
 */
export function getNullElements (elements, schema) {
  /**
   *  log('getNullElements')
   */

  return (
    Object.assign(
      elements,
      getTitle(schema),
      getDescription(schema)
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {ZashikiNullElementsType}
 */
export function renderNullElementsForEnum (schema, params, uri) {
  /**
   *  log('renderNullElementsForEnum')
   */

  /**
   *  @type {ObjectLiteralType}
   */
  const elements = {}

  /**
   *  @type {ObjectLiteralType}
   */
  const field = {}

  return (
    Object.assign(
      getNullElements(elements, schema),
      {
        enum: renderNullElementsFieldForEnum(field, params, uri)
      }
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {ZashikiNullElementsType}
 */
export function renderNullElementsForOneOf (schema, params, uri) {
  /**
   *  log('renderNullElementsForOneOf')
   */

  /**
   *  @type {ObjectLiteralType}
   */
  const elements = {}

  /**
   *  @type {ObjectLiteralType}
   */
  const field = {}

  return (
    Object.assign(
      getNullElements(elements, schema),
      {
        oneOf: renderNullElementsFieldForOneOf(field, params, uri)
      }
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {ZashikiNullElementsType}
 */
export function renderNullElementsForAnyOf (schema, params, uri) {
  /**
   *  log('renderNullElementsForAnyOf')
   */

  /**
   *  @type {ObjectLiteralType}
   */
  const elements = {}

  /**
   *  @type {ObjectLiteralType}
   */
  const field = {}

  return (
    Object.assign(
      getNullElements(elements, schema),
      {
        anyOf: renderNullElementsFieldForAnyOf(field, params, uri)
      }
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {ZashikiNullElementsType}
 */
export function renderNullElementsForAllOf (schema, values, params, uri) {
  /**
   *  log('renderNullElementsForAllOf')
   */

  /**
   *  @type {ObjectLiteralType}
   */
  const elements = {}

  /**
   *  @type {ObjectLiteralType}
   */
  const field = {}

  return (
    Object.assign(
      getNullElements(elements, schema),
      {
        field: renderNullElementsFieldForAllOf(field, schema, values, params, uri)
      }
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {ZashikiNullElementsType}
 */
export function renderNullElements (schema, values, params, uri) {
  /**
   *  log('renderNullElements')
   */

  /**
   *  @type {ObjectLiteralType}
   */
  const elements = {}

  /**
   *  @type {ObjectLiteralType}
   */
  const field = {}

  return (
    Object.assign(
      getNullElements(elements, schema),
      {
        field: renderNullElementsField(field, schema, values, params, uri)
      }
    )
  )
}

/**
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {ZashikiBooleanMetaType}
 */
export function renderBooleanMetaForEnum (params, uri) {
  /**
   *  log('renderBooleanMetaForEnum')
   */

  /**
   *  @type {{ parentUri?: string }}
   */
  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  return (
    Object.assign(
      {
        uri,
        type: 'boolean'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      metaProps
    )
  )
}

/**
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {ZashikiBooleanMetaType}
 */
export function renderBooleanMetaForAnyOf (params, uri) {
  /**
   *  log('renderBooleanMetaForAnyOf')
   */

  /**
   *  @type {{ parentUri?: string }}
   */
  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  return (
    Object.assign(
      {
        uri,
        type: 'boolean'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      metaProps
    )
  )
}

/**
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {ZashikiBooleanMetaType}
 */
export function renderBooleanMetaForOneOf (params, uri) {
  /**
   *  log('renderBooleanMetaForOneOf')
   */

  /**
   *  @type {{ parentUri?: string }}
   */
  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  return (
    Object.assign(
      {
        uri,
        type: 'boolean'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      metaProps
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {ZashikiBooleanMetaType}
 */
export function getBooleanMetaForAllOf (schema, values, params, uri) {
  /**
   *  log('renderBooleanMetaForAllOf')
   */

  const metaDefaultValue = getMetaDefaultValue(schema) // , uri)
  const metaValue = getMetaValue(values, uri, schema)

  /**
   *  @type {{ parentUri?: string }}
   */
  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  return (
    Object.assign(
      {
        uri,
        type: 'boolean'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      metaDefaultValue,
      metaValue,
      metaProps
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {ZashikiBooleanMetaType}
 */
export function renderBooleanMetaForAllOf (schema, values, params, uri) {
  /**
   *  log('renderBooleanMetaForAllOf')
   */

  /**
   *  @type {{ parentUri?: string }}
   */
  const {
    parentUri = '#'
  } = getMetaProps(params, uri)

  if (isParentUri(parentUri, uri)) {
    const {
      selectedItems
    } = getMetaProps(params, parentUri)

    return (
      Object.assign(
        getBooleanMetaForAllOf(schema, values, params, uri),
        isArray(selectedItems) ? { selectedItems } : {}
      )
    )
  }

  return (
    getBooleanMetaForAllOf(schema, values, params, uri)
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {ZashikiBooleanMetaType}
 */
export function getBooleanMeta (schema, values, params, uri) {
  /**
   *  log('getBooleanMeta')
   */

  const metaDefaultValue = getMetaDefaultValue(schema) // , uri)
  const metaValue = getMetaValue(values, uri, schema)

  /**
   *  @type {{ parentUri?: string }}
   */
  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  return (
    Object.assign(
      {
        uri,
        type: 'boolean'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      metaDefaultValue,
      metaValue,
      metaProps
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {ZashikiBooleanMetaType}
 */
export function renderBooleanMeta (schema, values, params, uri) {
  /**
   *  log('renderBooleanMeta')
   */

  /**
   *  @type {{ parentUri?: string }}
   */
  const {
    parentUri = '#'
  } = getMetaProps(params, uri)

  if (isParentUri(parentUri, uri)) {
    const {
      selectedItems
    } = getMetaProps(params, parentUri)

    return (
      Object.assign(
        getBooleanMeta(schema, values, params, uri),
        isArray(selectedItems) ? { selectedItems } : {}
      )
    )
  }

  return (
    getBooleanMeta(schema, values, params, uri)
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} field
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {EnumType}
 */
export function renderBooleanElementsFieldForEnum (field, params, uri) {
  /**
   *  log('renderBooleanElementsFieldForEnum')
   */

  return (
    Object.assign(
      field,
      getElementsFieldPropsForEnum(params, uri),
      {
        id: uri
      }
    )
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} field
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {AnyOfType}
 */
export function renderBooleanElementsFieldForAnyOf (field, params, uri) {
  /**
   *  log('renderBooleanElementsFieldForAnyOf')
   */

  return (
    Object.assign(
      field,
      getElementsFieldPropsForAnyOf(params, uri),
      {
        id: uri
      }
    )
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} field
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {OneOfType}
 */
export function renderBooleanElementsFieldForOneOf (field, params, uri) {
  /**
   *  log('renderBooleanElementsFieldForOneOf')
   */

  return (
    Object.assign(
      field,
      getElementsFieldPropsForOneOf(params, uri),
      {
        id: uri
      }
    )
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} field
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {ObjectLiteralType | ObjectType}
 */
export function getBooleanElementsFieldForAllOf (field, schema, values, params, uri) {
  /**
   *  log('getBooleanElementsFieldForAllOf')
   */

  const fieldValue = getElementsFieldValue(values, uri, schema)
  const fieldProps = getElementsFieldProps(params, uri)

  return (
    Object.assign(
      field,
      fieldValue,
      fieldProps
    )
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} field
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {FieldType}
 */
export function renderBooleanElementsFieldForAllOf (field, schema, values, params, uri) {
  /**
   *  log('renderBooleanElementsFieldForAllOf')
   */

  const {
    parentUri = '#'
  } = params

  if (isParentUri(parentUri, uri)) {
    const {
      selectedItems
    } = getMetaProps(params, parentUri)

    return (
      Object.assign(
        getBooleanElementsFieldForAllOf(field, schema, values, params, uri),
        isArray(selectedItems) ? { selectedItems } : {},
        {
          id: uri
        }
      )
    )
  }

  return (
    Object.assign(
      getBooleanElementsFieldForAllOf(field, schema, values, params, uri),
      {
        id: uri
      }
    )
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} field
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {ObjectLiteralType | ObjectType}
 */
export function getBooleanElementsField (field, schema, values, params, uri) {
  /**
   *  log('getBooleanElementsField')
   */

  const fieldValue = getElementsFieldValue(values, uri, schema)
  const fieldProps = getElementsFieldProps(params, uri)

  return (
    Object.assign(
      field,
      fieldValue,
      fieldProps
    )
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} field
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {FieldType}
 */
export function renderBooleanElementsField (field, schema, values, params, uri) {
  /**
   *  log('renderBooleanElementsField')
   */

  const {
    parentUri = '#'
  } = params

  if (isParentUri(parentUri, uri)) {
    const {
      selectedItems
    } = getMetaProps(params, parentUri)

    return (
      Object.assign(
        getBooleanElementsField(field, schema, values, params, uri),
        isArray(selectedItems) ? { selectedItems } : {},
        {
          id: uri
        }
      )
    )
  }

  return (
    Object.assign(
      getBooleanElementsField(field, schema, values, params, uri),
      {
        id: uri
      }
    )
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} elements
 *  @param {SchemaType} schema
 *  @returns {ObjectLiteralType | ObjectType}
 */
export function getBooleanElements (elements, schema) {
  /**
   *  log('getBooleanElements')
   */

  return (
    Object.assign(
      elements,
      getTitle(schema),
      getDescription(schema)
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {ZashikiBooleanElementsType}
 */
export function renderBooleanElementsForEnum (schema, params, uri) {
  /**
   *  log('renderBooleanElementsForEnum')
   */

  /**
   *  @type {ObjectLiteralType}
   */
  const elements = {}

  /**
   *  @type {ObjectLiteralType}
   */
  const field = {}

  return (
    Object.assign(
      getBooleanElements(elements, schema),
      {
        enum: renderBooleanElementsFieldForEnum(field, params, uri)
      }
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {ZashikiBooleanElementsType}
 */
export function renderBooleanElementsForAnyOf (schema, params, uri) {
  /**
   *  log('renderBooleanElementsForAnyOf')
   */

  /**
   *  @type {ObjectLiteralType}
   */
  const elements = {}

  /**
   *  @type {ObjectLiteralType}
   */
  const field = {}

  return (
    Object.assign(
      getBooleanElements(elements, schema),
      {
        anyOf: renderBooleanElementsFieldForAnyOf(field, params, uri)
      }
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {ZashikiBooleanElementsType}
 */
export function renderBooleanElementsForOneOf (schema, params, uri) {
  /**
   *  log('renderBooleanElementsForOneOf')
   */

  /**
   *  @type {ObjectLiteralType}
   */
  const elements = {}

  /**
   *  @type {ObjectLiteralType}
   */
  const field = {}

  return (
    Object.assign(
      getBooleanElements(elements, schema),
      {
        oneOf: renderBooleanElementsFieldForOneOf(field, params, uri)
      }
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {ZashikiBooleanElementsType}
 */
export function renderBooleanElementsForAllOf (schema, values, params, uri) {
  /**
   *  log('renderBooleanElementsForAllOf')
   */

  /**
   *  @type {ObjectLiteralType}
   */
  const elements = {}

  /**
   *  @type {ObjectLiteralType}
   */
  const field = {}

  return (
    Object.assign(
      getBooleanElements(elements, schema),
      {
        field: renderBooleanElementsFieldForAllOf(field, schema, values, params, uri)
      }
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {ZashikiBooleanElementsType}
 */
export function renderBooleanElements (schema, values, params, uri) {
  /**
   *  log('renderBooleanElements')
   */

  /**
   *  @type {ObjectLiteralType}
   */
  const elements = {}

  /**
   *  @type {ObjectLiteralType}
   */
  const field = {}

  return (
    Object.assign(
      getBooleanElements(elements, schema),
      {
        field: renderBooleanElementsField(field, schema, values, params, uri)
      }
    )
  )
}

/**
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minProperties?: number }} minProperties
 *  @param {{ maxProperties?: number }} maxProperties
 *  @returns {ZashikiObjectMetaType}
 */
export function renderObjectMetaForEnum (params, uri, minProperties, maxProperties) {
  /**
   *  log('renderObjectMetaForEnum')
   */

  /**
   *  @type {{ parentUri?: string }}
   */
  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  return (
    Object.assign(
      {
        uri,
        type: 'object'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      minProperties,
      maxProperties,
      metaProps
    )
  )
}

/**
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minProperties?: number }} minProperties
 *  @param {{ maxProperties?: number }} maxProperties
 *  @returns {ZashikiObjectMetaType}
 */
export function renderObjectMetaForAnyOf (params, uri, minProperties, maxProperties) {
  /**
   *  log('renderObjectMetaForAnyOf')
   */

  /**
   *  @type {{ parentUri?: string }}
   */
  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  return (
    Object.assign(
      {
        uri,
        type: 'object'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      minProperties,
      maxProperties,
      metaProps
    )
  )
}

/**
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minProperties?: number }} minProperties
 *  @param {{ maxProperties?: number }} maxProperties
 *  @returns {ZashikiObjectMetaType}
 */
export function renderObjectMetaForOneOf (params, uri, minProperties, maxProperties) {
  /**
   *  log('renderObjectMetaForOneOf')
   */

  /**
   *  @type {{ parentUri?: string }}
   */
  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  return (
    Object.assign(
      {
        uri,
        type: 'object'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      minProperties,
      maxProperties,
      metaProps
    )
  )
}

/**
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minProperties?: number }} minProperties
 *  @param {{ maxProperties?: number }} maxProperties
 *  @returns {ZashikiObjectMetaType}
 */
export function renderObjectMetaForAllOf (params, uri, minProperties, maxProperties) {
  /**
   *  log('renderObjectMetaForAllOf')
   */

  /**
   *  @type {{ parentUri?: string }}
   */
  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  return (
    Object.assign(
      {
        uri,
        type: 'object'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      minProperties,
      maxProperties,
      metaProps
    )
  )
}

/**
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minProperties?: number }} minProperties
 *  @param {{ maxProperties?: number }} maxProperties
 *  @returns {ZashikiObjectMetaType}
 */
export function renderObjectMeta (params, uri, minProperties, maxProperties) {
  /**
   *  log('renderObjectMeta')
   */

  /**
   *  @type {{ parentUri?: string }}
   */
  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  return (
    Object.assign(
      {
        uri,
        type: 'object'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      minProperties,
      maxProperties,
      metaProps
    )
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} field
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minProperties?: number }} minProperties
 *  @param {{ maxProperties?: number }} maxProperties
 *  @returns {EnumType}
 */
export function renderObjectElementsFieldForEnum (field, params, uri, minProperties, maxProperties) {
  /**
   *  log('renderObjectElementsFieldForEnum')
   */

  const fieldProps = getElementsFieldPropsForEnum(params, uri)

  return (
    Object.assign(
      field,
      minProperties,
      maxProperties,
      fieldProps,
      {
        id: uri
      }
    )
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} field
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minProperties?: number }} minProperties
 *  @param {{ maxProperties?: number }} maxProperties
 *  @returns {AnyOfType}
 */
export function renderObjectElementsFieldForAnyOf (field, params, uri, minProperties, maxProperties) {
  /**
   *  log('renderObjectElementsFieldForAnyOf')
   */

  const fieldProps = getElementsFieldPropsForAnyOf(params, uri)

  return (
    Object.assign(
      field,
      minProperties,
      maxProperties,
      fieldProps,
      {
        id: uri
      }
    )
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} field
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minProperties?: number }} minProperties
 *  @param {{ maxProperties?: number }} maxProperties
 *  @returns {OneOfType}
 */
export function renderObjectElementsFieldForOneOf (field, params, uri, minProperties, maxProperties) {
  /**
   *  log('renderObjectElementsFieldForOneOf')
   */

  const fieldProps = getElementsFieldPropsForOneOf(params, uri)

  return (
    Object.assign(
      field,
      minProperties,
      maxProperties,
      fieldProps,
      {
        id: uri
      }
    )
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} field
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minProperties?: number }} minProperties
 *  @param {{ maxProperties?: number }} maxProperties
 *  @returns {FieldType}
 */
export function renderObjectElementsFieldForAllOf (field, params, uri, minProperties, maxProperties) {
  /**
   *  log('renderObjectElementsFieldForAllOf')
   */

  const fieldProps = getElementsFieldPropsForAllOf(params, uri)

  return (
    Object.assign(
      field,
      minProperties,
      maxProperties,
      fieldProps,
      {
        id: uri
      }
    )
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} elements
 *  @param {SchemaType} schema
 *  @returns {ObjectLiteralType | ObjectType}
 */
export function getObjectElements (elements, schema) {
  /**
   *  log('getObjectElements')
   */

  return (
    Object.assign(
      elements,
      getTitle(schema),
      getDescription(schema)
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minProperties?: number }} minProperties
 *  @param {{ maxProperties?: number }} maxProperties
 *  @returns {ZashikiObjectElementsType}
 */
export function renderObjectElementsForEnum (schema, params, uri, minProperties, maxProperties) {
  /**
   *  log('renderObjectElementsForEnum')
   */

  /**
   *  @type {ObjectLiteralType}
   */
  const elements = {}

  /**
   *  @type {ObjectLiteralType}
   */
  const field = {}

  return (
    Object.assign(
      getObjectElements(elements, schema),
      {
        enum: renderObjectElementsFieldForEnum(field, params, uri, minProperties, maxProperties)
      }
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minProperties?: number }} minProperties
 *  @param {{ maxProperties?: number }} maxProperties
 *  @returns {ZashikiObjectElementsType}
 */
export function renderObjectElementsForAnyOf (schema, params, uri, minProperties, maxProperties) {
  /**
   *  log('renderObjectElementsForAnyOf')
   */

  /**
   *  @type {ObjectLiteralType}
   */
  const elements = {}

  /**
   *  @type {ObjectLiteralType}
   */
  const field = {}

  return (
    Object.assign(
      getObjectElements(elements, schema),
      {
        anyOf: renderObjectElementsFieldForAnyOf(field, params, uri, minProperties, maxProperties)
      }
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minProperties?: number }} minProperties
 *  @param {{ maxProperties?: number }} maxProperties
 *  @returns {ZashikiObjectElementsType}
 */
export function renderObjectElementsForOneOf (schema, params, uri, minProperties, maxProperties) {
  /**
   *  log('renderObjectElementsForOneOf')
   */

  /**
   *  @type {ObjectLiteralType}
   */
  const elements = {}

  /**
   *  @type {ObjectLiteralType}
   */
  const field = {}

  return (
    Object.assign(
      getObjectElements(elements, schema),
      {
        oneOf: renderObjectElementsFieldForOneOf(field, params, uri, minProperties, maxProperties)
      }
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minProperties?: number }} minProperties
 *  @param {{ maxProperties?: number }} maxProperties
 *  @returns {ZashikiObjectElementsType}
 */
export function renderObjectElementsForAllOf (schema, params, uri, minProperties, maxProperties) {
  /**
   *  log('renderObjectElementsForAllOf')
   */

  /**
   *  @type {ObjectLiteralType}
   */
  const elements = {}

  /**
   *  @type {ObjectLiteralType}
   */
  const field = {}

  return (
    Object.assign(
      getObjectElements(elements, schema),
      {
        field: renderObjectElementsFieldForAllOf(field, params, uri, minProperties, maxProperties)
      }
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ParamsType} params
 *  @returns {ZashikiObjectElementsType}
 */
export function renderObjectElements (schema, params) {
  /**
   *  log('renderObjectElements')
   */

  /**
   *  @type {ObjectLiteralType}
   */
  const elements = {}

  const {
    fields = []
  } = params

  return (
    Object.assign(
      getObjectElements(elements, schema),
      {
        fields
      }
    )
  )
}

/**
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minItems?: number }} minItems
 *  @param {{ maxItems?: number }} maxItems
 *  @param {{ hasUniqueItems?: boolean }} hasUniqueItems
 *  @param {{ minContains?: number }} minContains
 *  @param {{ maxContains?: number }} maxContains
 *  @returns {ZashikiArrayMetaType}
 */
export function renderArrayMetaForEnum (params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains) {
  /**
   *  log('renderArrayMetaForEnum')
   */

  /**
   *  @type {{ parentUri?: string }}
   */
  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  return (
    Object.assign(
      {
        uri,
        type: 'array'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      minItems,
      maxItems,
      hasUniqueItems,
      minContains,
      maxContains,
      metaProps
    )
  )
}

/**
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minItems?: number }} minItems
 *  @param {{ maxItems?: number }} maxItems
 *  @param {{ hasUniqueItems?: boolean }} hasUniqueItems
 *  @param {{ minContains?: number }} minContains
 *  @param {{ maxContains?: number }} maxContains
 *  @returns {ZashikiArrayMetaType}
 */
export function renderArrayMetaForAnyOf (params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains) {
  /**
   *  log('renderArrayMetaForAnyOf')
   */

  /**
   *  @type {{ parentUri?: string }}
   */
  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  return (
    Object.assign(
      {
        uri,
        type: 'array'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      minItems,
      maxItems,
      hasUniqueItems,
      minContains,
      maxContains,
      metaProps
    )
  )
}

/**
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minItems?: number }} minItems
 *  @param {{ maxItems?: number }} maxItems
 *  @param {{ hasUniqueItems?: boolean }} hasUniqueItems
 *  @param {{ minContains?: number }} minContains
 *  @param {{ maxContains?: number }} maxContains
 *  @returns {ZashikiArrayMetaType}
 */
export function renderArrayMetaForOneOf (params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains) {
  /**
   *  log('renderArrayMetaForOneOf')
   */

  /**
   *  @type {{ parentUri?: string }}
   */
  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  return (
    Object.assign(
      {
        uri,
        type: 'array'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      minItems,
      maxItems,
      hasUniqueItems,
      minContains,
      maxContains,
      metaProps
    )
  )
}

/**
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minItems?: number }} minItems
 *  @param {{ maxItems?: number }} maxItems
 *  @param {{ hasUniqueItems?: boolean }} hasUniqueItems
 *  @param {{ minContains?: number }} minContains
 *  @param {{ maxContains?: number }} maxContains
 *  @returns {ZashikiArrayMetaType}
 */
export function renderArrayMetaForAllOf (params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains) {
  /**
   *  log('renderArrayMetaForAllOf')
   */

  /**
   *  @type {{ parentUri?: string }}
   */
  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  return (
    Object.assign(
      {
        uri,
        type: 'array'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      minItems,
      maxItems,
      hasUniqueItems,
      minContains,
      maxContains,
      metaProps
    )
  )
}

/**
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minItems?: number }} minItems
 *  @param {{ maxItems?: number }} maxItems
 *  @param {{ hasUniqueItems?: boolean }} hasUniqueItems
 *  @param {{ minContains?: number }} minContains
 *  @param {{ maxContains?: number }} maxContains
 *  @returns {ZashikiArrayMetaType}
 */
export function renderArrayMeta (params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains) {
  /**
   *  log('renderArrayMeta')
   */

  /**
   *  @type {{ parentUri?: string }}
   */
  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  return (
    Object.assign(
      {
        uri,
        type: 'array'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      minItems,
      maxItems,
      hasUniqueItems,
      minContains,
      maxContains,
      metaProps
    )
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} field
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minItems?: number }} minItems
 *  @param {{ maxItems?: number }} maxItems
 *  @param {{ hasUniqueItems?: boolean }} hasUniqueItems
 *  @param {{ minContains?: number }} minContains
 *  @param {{ maxContains?: number }} maxContains
 *  @returns {EnumType}
 */
export function renderArrayElementsFieldForEnum (field, params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains) {
  /**
   *  log('renderArrayElementsFieldForEnum')
   */

  const fieldProps = getElementsFieldPropsForEnum(params, uri)

  return (
    Object.assign(
      field,
      minItems,
      maxItems,
      hasUniqueItems,
      minContains,
      maxContains,
      fieldProps,
      {
        id: uri
      }
    )
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} field
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minItems?: number }} minItems
 *  @param {{ maxItems?: number }} maxItems
 *  @param {{ hasUniqueItems?: boolean }} hasUniqueItems
 *  @param {{ minContains?: number }} minContains
 *  @param {{ maxContains?: number }} maxContains
 *  @returns {AnyOfType}
 */
export function renderArrayElementsFieldForAnyOf (field, params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains) {
  /**
   *  log('renderArrayElementsFieldForAnyOf')
   */

  const fieldProps = getElementsFieldPropsForAnyOf(params, uri)

  return (
    Object.assign(
      field,
      minItems,
      maxItems,
      hasUniqueItems,
      minContains,
      maxContains,
      fieldProps,
      {
        id: uri
      }
    )
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} field
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minItems?: number }} minItems
 *  @param {{ maxItems?: number }} maxItems
 *  @param {{ hasUniqueItems?: boolean }} hasUniqueItems
 *  @param {{ minContains?: number }} minContains
 *  @param {{ maxContains?: number }} maxContains
 *  @returns {OneOfType}
 */
export function renderArrayElementsFieldForOneOf (field, params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains) {
  /**
   *  log('renderArrayElementsFieldForOneOf')
   */

  const fieldProps = getElementsFieldPropsForOneOf(params, uri)

  return (
    Object.assign(
      field,
      minItems,
      maxItems,
      hasUniqueItems,
      minContains,
      maxContains,
      fieldProps,
      {
        id: uri
      }
    )
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} field
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minItems?: number }} minItems
 *  @param {{ maxItems?: number }} maxItems
 *  @param {{ hasUniqueItems?: boolean }} hasUniqueItems
 *  @param {{ minContains?: number }} minContains
 *  @param {{ maxContains?: number }} maxContains
 *  @returns {FieldType}
 */
export function renderArrayElementsFieldForAllOf (field, params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains) {
  /**
   *  log('renderArrayElementsFieldForAllOf')
   */

  const fieldProps = getElementsFieldPropsForAllOf(params, uri)

  return (
    Object.assign(
      field,
      minItems,
      maxItems,
      hasUniqueItems,
      minContains,
      maxContains,
      fieldProps,
      {
        id: uri
      }
    )
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} elements
 *  @param {SchemaType} schema
 *  @returns {ObjectLiteralType | ObjectType}
 */
export function getArrayElements (elements, schema) {
  /**
   *  log('getArrayElements')
   */

  return (
    Object.assign(
      elements,
      getTitle(schema),
      getDescription(schema)
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minItems?: number }} minItems
 *  @param {{ maxItems?: number }} maxItems
 *  @param {{ hasUniqueItems?: boolean }} hasUniqueItems
 *  @param {{ minContains?: number }} minContains
 *  @param {{ maxContains?: number }} maxContains
 *  @returns {ZashikiArrayElementsType}
 */
export function renderArrayElementsForEnum (schema, params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains) {
  /**
   *  log('renderArrayElementsForEnum')
   */

  /**
   *  @type {ObjectLiteralType}
   */
  const elements = {}

  /**
   *  @type {ObjectLiteralType}
   */
  const field = {}

  return (
    Object.assign(
      getArrayElements(elements, schema),
      {
        enum: renderArrayElementsFieldForEnum(field, params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains)
      }
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minItems?: number }} minItems
 *  @param {{ maxItems?: number }} maxItems
 *  @param {{ hasUniqueItems?: boolean }} hasUniqueItems
 *  @param {{ minContains?: number }} minContains
 *  @param {{ maxContains?: number }} maxContains
 *  @returns {ZashikiArrayElementsType}
 */
export function renderArrayElementsForAnyOf (schema, params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains) {
  /**
   *  log('renderArrayElementsForAnyOf')
   */

  /**
   *  @type {ObjectLiteralType}
   */
  const elements = {}

  /**
   *  @type {ObjectLiteralType}
   */
  const field = {}

  return (
    Object.assign(
      getArrayElements(elements, schema),
      {
        anyOf: renderArrayElementsFieldForAnyOf(field, params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains)
      }
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minItems?: number }} minItems
 *  @param {{ maxItems?: number }} maxItems
 *  @param {{ hasUniqueItems?: boolean }} hasUniqueItems
 *  @param {{ minContains?: number }} minContains
 *  @param {{ maxContains?: number }} maxContains
 *  @returns {ZashikiArrayElementsType}
 */
export function renderArrayElementsForOneOf (schema, params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains) {
  /**
   *  log('renderArrayElementsForOneOf')
   */

  /**
   *  @type {ObjectLiteralType}
   */
  const elements = {}

  /**
   *  @type {ObjectLiteralType}
   */
  const field = {}

  return (
    Object.assign(
      getArrayElements(elements, schema),
      {
        oneOf: renderArrayElementsFieldForOneOf(field, params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains)
      }
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minItems?: number }} minItems
 *  @param {{ maxItems?: number }} maxItems
 *  @param {{ hasUniqueItems?: boolean }} hasUniqueItems
 *  @param {{ minContains?: number }} minContains
 *  @param {{ maxContains?: number }} maxContains
 *  @returns {ZashikiArrayElementsType}
 */
export function renderArrayElementsForAllOf (schema, params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains) {
  /**
   *  log('renderArrayElementsForAllOf')
   */

  /**
   *  @type {ObjectLiteralType}
   */
  const elements = {}

  /**
   *  @type {ObjectLiteralType}
   */
  const field = {}

  return (
    Object.assign(
      getArrayElements(elements, schema),
      {
        field: renderArrayElementsFieldForAllOf(field, params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains)
      }
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ParamsType} params
 *  @returns {ZashikiArrayElementsType}
 */
export function renderArrayElements (schema, params) {
  /**
   *  log('renderArrayElements')
   */

  /**
   *  @type {ObjectLiteralType}
   */
  const elements = {}

  const {
    fields = []
  } = params

  return (
    Object.assign(
      getArrayElements(elements, schema),
      {
        fields
      }
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ min?: number }} min
 *  @param {{ max?: number }} max
 *  @param {{ step?: number }} step
 *  @returns {ZashikiNumberMetaType}
 */
export function renderNumberMetaForEnum (schema, params, uri, min, max, step) {
  /**
   *  log('renderNumberMetaForEnum')
   */

  const isExclusiveMin = getIsExclusiveMin(schema)
  const isExclusiveMax = getIsExclusiveMax(schema)

  /**
   *  @type {{ parentUri?: string }}
   */
  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  return (
    Object.assign(
      {
        uri,
        type: 'number'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      min,
      max,
      step,
      isExclusiveMin,
      isExclusiveMax,
      metaProps
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ min?: number }} min
 *  @param {{ max?: number }} max
 *  @param {{ step?: number }} step
 *  @returns {ZashikiNumberMetaType}
 */
export function renderNumberMetaForAnyOf (schema, params, uri, min, max, step) {
  /**
   *  log('renderNumberMetaForAnyOf')
   */

  const isExclusiveMin = getIsExclusiveMin(schema)
  const isExclusiveMax = getIsExclusiveMax(schema)

  /**
   *  @type {{ parentUri?: string }}
   */
  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  return (
    Object.assign(
      {
        uri,
        type: 'number'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      min,
      max,
      step,
      isExclusiveMin,
      isExclusiveMax,
      metaProps
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ min?: number }} min
 *  @param {{ max?: number }} max
 *  @param {{ step?: number }} step
 *  @returns {ZashikiNumberMetaType}
 */
export function renderNumberMetaForOneOf (schema, params, uri, min, max, step) {
  /**
   *  log('renderNumberMetaForOneOf')
   */

  const isExclusiveMin = getIsExclusiveMin(schema)
  const isExclusiveMax = getIsExclusiveMax(schema)

  /**
   *  @type {{ parentUri?: string }}
   */
  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  return (
    Object.assign(
      {
        uri,
        type: 'number'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      min,
      max,
      step,
      isExclusiveMin,
      isExclusiveMax,
      metaProps
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ min?: number }} min
 *  @param {{ max?: number }} max
 *  @param {{ step?: number }} step
 *  @returns {ZashikiNumberMetaType}
 */
export function getNumberMetaForAllOf (schema, values, params, uri, min, max, step) {
  /**
   *  log('getNumberMetaForAllOf')
   */

  const isExclusiveMin = getIsExclusiveMin(schema)
  const isExclusiveMax = getIsExclusiveMax(schema)

  const metaDefaultValue = getMetaDefaultValue(schema) // , uri)
  const metaValue = getMetaValue(values, uri, schema)

  /**
   *  @type {{ parentUri?: string }}
   */
  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  return (
    Object.assign(
      {
        uri,
        type: 'number'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      min,
      max,
      step,
      isExclusiveMin,
      isExclusiveMax,
      metaDefaultValue,
      metaValue,
      metaProps
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ min?: number }} min
 *  @param {{ max?: number }} max
 *  @param {{ step?: number }} step
 *  @returns {ZashikiNumberMetaType}
 */
export function renderNumberMetaForAllOf (schema, values, params, uri, min, max, step) {
  /**
   *  log('renderNumberMetaForAllOf')
   */

  /**
   *  @type {{ parentUri?: string }}
   */
  const {
    parentUri = '#'
  } = getMetaProps(params, uri)

  if (isParentUri(parentUri, uri)) {
    const {
      selectedItems
    } = getMetaProps(params, parentUri)

    return (
      Object.assign(
        getNumberMetaForAllOf(schema, values, params, uri, min, max, step),
        isArray(selectedItems) ? { selectedItems } : {}
      )
    )
  }

  return (
    getNumberMetaForAllOf(schema, values, params, uri, min, max, step)
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ min?: number }} min
 *  @param {{ max?: number }} max
 *  @param {{ step?: number }} step
 *  @returns {ZashikiNumberMetaType}
 */
export function getNumberMeta (schema, values, params, uri, min, max, step) {
  /**
   *  log('getNumberMeta')
   */

  const isExclusiveMin = getIsExclusiveMin(schema)
  const isExclusiveMax = getIsExclusiveMax(schema)

  const metaDefaultValue = getMetaDefaultValue(schema) // , uri)
  const metaValue = getMetaValue(values, uri, schema)

  /**
   *  @type {{ parentUri?: string }}
   */
  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  return (
    Object.assign(
      {
        uri,
        type: 'number'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      min,
      max,
      step,
      isExclusiveMin,
      isExclusiveMax,
      metaDefaultValue,
      metaValue,
      metaProps
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ min?: number }} min
 *  @param {{ max?: number }} max
 *  @param {{ step?: number }} step
 *  @returns {ZashikiNumberMetaType}
 */
export function renderNumberMeta (schema, values, params, uri, min, max, step) {
  /**
   *  log('renderNumberMeta')
   */

  /**
   *  @type {{ parentUri?: string }}
   */
  const {
    parentUri = '#'
  } = getMetaProps(params, uri)

  if (isParentUri(parentUri, uri)) {
    const {
      selectedItems
    } = getMetaProps(params, parentUri)

    return (
      Object.assign(
        getNumberMeta(schema, values, params, uri, min, max, step),
        isArray(selectedItems) ? { selectedItems } : {}
      )
    )
  }

  return (
    getNumberMeta(schema, values, params, uri, min, max, step)
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} field
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ min?: number }} min
 *  @param {{ max?: number }} max
 *  @param {{ step?: number }} step
 *  @returns {EnumType}
 */
export function renderNumberElementsFieldForEnum (field, params, uri, min, max, step) {
  /**
   *  log('renderNumberElementsFieldForEnum')
   */

  const fieldProps = getElementsFieldPropsForEnum(params, uri)

  return (
    Object.assign(
      field,
      min,
      max,
      step,
      fieldProps,
      {
        id: uri
      }
    )
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} field
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ min?: number }} min
 *  @param {{ max?: number }} max
 *  @param {{ step?: number }} step
 *  @returns {AnyOfType}
 */
export function renderNumberElementsFieldForAnyOf (field, params, uri, min, max, step) {
  /**
   *  log('renderNumberElementsFieldForAnyOf')
   */

  const fieldProps = getElementsFieldPropsForAnyOf(params, uri)

  return (
    Object.assign(
      field,
      min,
      max,
      step,
      fieldProps,
      {
        id: uri
      }
    )
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} field
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ min?: number }} min
 *  @param {{ max?: number }} max
 *  @param {{ step?: number }} step
 *  @returns {OneOfType}
 */
export function renderNumberElementsFieldForOneOf (field, params, uri, min, max, step) {
  /**
   *  log('renderNumberElementsFieldForOneOf')
   */

  const fieldProps = getElementsFieldPropsForOneOf(params, uri)

  return (
    Object.assign(
      field,
      min,
      max,
      step,
      fieldProps,
      {
        id: uri
      }
    )
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} field
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ min?: number }} min
 *  @param {{ max?: number }} max
 *  @param {{ step?: number }} step
 *  @returns {ObjectLiteralType | ObjectType}
 */
export function getNumberElementsFieldForAllOf (field, schema, values, params, uri, min, max, step) {
  /**
   *  log('getNumberElementsFieldForAllOf')
   */

  const fieldValue = getElementsFieldValue(values, uri, schema)
  const fieldProps = getElementsFieldProps(params, uri)

  return (
    Object.assign(
      field,
      min,
      max,
      step,
      fieldValue,
      fieldProps
    )
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} field
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ min?: number }} min
 *  @param {{ max?: number }} max
 *  @param {{ step?: number }} step
 *  @returns {FieldType}
 */
export function renderNumberElementsFieldForAllOf (field, schema, values, params, uri, min, max, step) {
  /**
   *  log('renderNumberElementsFieldForAllOf')
   */

  const {
    parentUri = '#'
  } = params

  if (isParentUri(parentUri, uri)) {
    const {
      selectedItems
    } = getMetaProps(params, parentUri)

    return (
      Object.assign(
        getNumberElementsFieldForAllOf(field, schema, values, params, uri, min, max, step),
        isArray(selectedItems) ? { selectedItems } : {},
        {
          id: uri
        }
      )
    )
  }

  return (
    Object.assign(
      getNumberElementsFieldForAllOf(field, schema, values, params, uri, min, max, step),
      {
        id: uri
      }
    )
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} field
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ min?: number }} min
 *  @param {{ max?: number }} max
 *  @param {{ step?: number }} step
 *  @returns {ObjectLiteralType | ObjectType}
 */
export function getNumberElementsField (field, schema, values, params, uri, min, max, step) {
  /**
   *  log('getNumberElementsField')
   */

  const fieldValue = getElementsFieldValue(values, uri, schema)
  const fieldProps = getElementsFieldProps(params, uri)

  return (
    Object.assign(
      field,
      min,
      max,
      step,
      fieldValue,
      fieldProps
    )
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} field
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ min?: number }} min
 *  @param {{ max?: number }} max
 *  @param {{ step?: number }} step
 *  @returns {FieldType}
 */
export function renderNumberElementsField (field, schema, values, params, uri, min, max, step) {
  /**
   *  log('renderNumberElementsField')
   */

  const {
    parentUri = '#'
  } = params

  if (isParentUri(parentUri, uri)) {
    const {
      selectedItems
    } = getMetaProps(params, parentUri)

    return (
      Object.assign(
        getNumberElementsField(field, schema, values, params, uri, min, max, step),
        isArray(selectedItems) ? { selectedItems } : {},
        {
          id: uri
        }
      )
    )
  }

  return (
    Object.assign(
      getNumberElementsField(field, schema, values, params, uri, min, max, step),
      {
        id: uri
      }
    )
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} elements
 *  @param {SchemaType} schema
 *  @returns {ObjectLiteralType | ObjectType}
 */
export function getNumberElements (elements, schema) {
  /**
   *  log('getNumberElements')
   */

  return (
    Object.assign(
      elements,
      getTitle(schema),
      getDescription(schema)
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ min?: number }} min
 *  @param {{ max?: number }} max
 *  @param {{ step?: number }} step
 *  @returns {ZashikiNumberElementsType}
 */
export function renderNumberElementsForEnum (schema, params, uri, min, max, step) {
  /**
   *  log('renderNumberElementsForEnum')
   */

  /**
   *  @type {ObjectLiteralType}
   */
  const elements = {}

  /**
   *  @type {ObjectLiteralType}
   */
  const field = {}

  return (
    Object.assign(
      getNumberElements(elements, schema),
      {
        enum: renderNumberElementsFieldForEnum(field, params, uri, min, max, step)
      }
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ min?: number }} min
 *  @param {{ max?: number }} max
 *  @param {{ step?: number }} step
 *  @returns {ZashikiNumberElementsType}
 */
export function renderNumberElementsForAnyOf (schema, params, uri, min, max, step) {
  /**
   *  log('renderNumberElementsForAnyOf')
   */

  /**
   *  @type {ObjectLiteralType}
   */
  const elements = {}

  /**
   *  @type {ObjectLiteralType}
   */
  const field = {}

  return (
    Object.assign(
      getNumberElements(elements, schema),
      {
        anyOf: renderNumberElementsFieldForAnyOf(field, params, uri, min, max, step)
      }
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ min?: number }} min
 *  @param {{ max?: number }} max
 *  @param {{ step?: number }} step
 *  @returns {ZashikiNumberElementsType}
 */
export function renderNumberElementsForOneOf (schema, params, uri, min, max, step) {
  /**
   *  log('renderNumberElementsForOneOf')
   */

  /**
   *  @type {ObjectLiteralType}
   */
  const elements = {}

  /**
   *  @type {ObjectLiteralType}
   */
  const field = {}

  return (
    Object.assign(
      getNumberElements(elements, schema),
      {
        oneOf: renderNumberElementsFieldForOneOf(field, params, uri, min, max, step)
      }
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ min?: number }} min
 *  @param {{ max?: number }} max
 *  @param {{ step?: number }} step
 *  @returns {ZashikiNumberElementsType}
 */
export function renderNumberElementsForAllOf (schema, values, params, uri, min, max, step) {
  /**
   *  log('renderNumberElementsForAllOf')
   */

  /**
   *  @type {ObjectLiteralType}
   */
  const elements = {}

  /**
   *  @type {ObjectLiteralType}
   */
  const field = {}

  return (
    Object.assign(
      getNumberElements(elements, schema),
      {
        field: renderNumberElementsFieldForAllOf(field, schema, values, params, uri, min, max, step)
      }
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ min?: number }} min
 *  @param {{ max?: number }} max
 *  @param {{ step?: number }} step
 *  @returns {ZashikiNumberElementsType}
 */
export function renderNumberElements (schema, values, params, uri, min, max, step) {
  /**
   *  log('renderNumberElements')
   */

  /**
   *  @type {ObjectLiteralType}
   */
  const elements = {}

  /**
   *  @type {ObjectLiteralType}
   */
  const field = {}

  return (
    Object.assign(
      getNumberElements(elements, schema),
      {
        field: renderNumberElementsField(field, schema, values, params, uri, min, max, step)
      }
    )
  )
}

/**
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minLength?: number }} minLength
 *  @param {{ maxLength?: number }} maxLength
 *  @param {{ pattern?: RegExp }} pattern
 *  @returns {ZashikiStringMetaType}
 */
export function renderStringMetaForEnum (params, uri, minLength, maxLength, pattern) {
  /**
   *  log('renderStringMetaForEnum')
   */

  /**
   *  @type {{ parentUri?: string }}
   */
  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  return (
    Object.assign(
      {
        uri,
        type: 'string'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      minLength,
      maxLength,
      pattern,
      metaProps
    )
  )
}

/**
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minLength?: number }} minLength
 *  @param {{ maxLength?: number }} maxLength
 *  @param {{ pattern?: RegExp }} pattern
 *  @returns {ZashikiStringMetaType}
 */
export function renderStringMetaForAnyOf (params, uri, minLength, maxLength, pattern) {
  /**
   *  log('renderStringMetaForAnyOf')
   */

  /**
   *  @type {{ parentUri?: string }}
   */
  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  return (
    Object.assign(
      {
        uri,
        type: 'string'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      minLength,
      maxLength,
      pattern,
      metaProps
    )
  )
}

/**
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minLength?: number }} minLength
 *  @param {{ maxLength?: number }} maxLength
 *  @param {{ pattern?: RegExp }} pattern
 *  @returns {ZashikiStringMetaType}
 */
export function renderStringMetaForOneOf (params, uri, minLength, maxLength, pattern) {
  /**
   *  log('renderStringMetaForOneOf')
   */

  /**
   *  @type {{ parentUri?: string }}
   */
  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  return (
    Object.assign(
      {
        uri,
        type: 'string'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      minLength,
      maxLength,
      pattern,
      metaProps
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minLength?: number }} minLength
 *  @param {{ maxLength?: number }} maxLength
 *  @param {{ pattern?: RegExp }} pattern
 *  @returns {ZashikiStringMetaType}
 */
export function getStringMetaForAllOf (schema, values, params, uri, minLength, maxLength, pattern) {
  /**
   *  log('getStringMetaForAllOf)
   */

  const metaDefaultValue = getMetaDefaultValue(schema) // , uri)
  const metaValue = getMetaValue(values, uri, schema)

  /**
   *  @type {{ parentUri?: string }}
   */
  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  return (
    Object.assign(
      {
        uri,
        type: 'string'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      minLength,
      maxLength,
      pattern,
      metaDefaultValue,
      metaValue,
      metaProps
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minLength?: number }} minLength
 *  @param {{ maxLength?: number }} maxLength
 *  @param {{ pattern?: RegExp }} pattern
 *  @returns {ZashikiStringMetaType}
 */
export function renderStringMetaForAllOf (schema, values, params, uri, minLength, maxLength, pattern) {
  /**
   *  log('renderStringMetaForAllOf')
   */

  /**
   *  @type {{ parentUri?: string }}
   */
  const {
    parentUri = '#'
  } = getMetaProps(params, uri)

  if (isParentUri(parentUri, uri)) {
    const {
      selectedItems
    } = getMetaProps(params, parentUri)

    return (
      Object.assign(
        getStringMetaForAllOf(schema, values, params, uri, minLength, maxLength, pattern),
        isArray(selectedItems) ? { selectedItems } : {}
      )
    )
  }

  return (
    getStringMetaForAllOf(schema, values, params, uri, minLength, maxLength, pattern)
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minLength?: number }} minLength
 *  @param {{ maxLength?: number }} maxLength
 *  @param {{ pattern?: RegExp }} pattern
 *  @returns {ZashikiStringMetaType}
 */
export function getStringMeta (schema, values, params, uri, minLength, maxLength, pattern) {
  /**
   *  log('getStringMeta')
   */

  const metaDefaultValue = getMetaDefaultValue(schema) // , uri)
  const metaValue = getMetaValue(values, uri, schema)

  /**
   *  @type {{ parentUri?: string }}
   */
  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  return (
    Object.assign(
      {
        uri,
        type: 'string'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      minLength,
      maxLength,
      pattern,
      metaDefaultValue,
      metaValue,
      metaProps
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minLength?: number }} minLength
 *  @param {{ maxLength?: number }} maxLength
 *  @param {{ pattern?: RegExp }} pattern
 *  @returns {ZashikiStringMetaType}
 */
export function renderStringMeta (schema, values, params, uri, minLength, maxLength, pattern) {
  /**
   *  log('renderStringMeta')
   */

  /**
   *  @type {{ parentUri?: string }}
   */
  const {
    parentUri = '#'
  } = getMetaProps(params, uri)

  if (isParentUri(parentUri, uri)) {
    const {
      selectedItems
    } = getMetaProps(params, parentUri)

    return (
      Object.assign(
        getStringMeta(schema, values, params, uri, minLength, maxLength, pattern),
        isArray(selectedItems) ? { selectedItems } : {}
      )
    )
  }

  return (
    getStringMeta(schema, values, params, uri, minLength, maxLength, pattern)
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} field
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minLength?: number }} minLength
 *  @param {{ maxLength?: number }} maxLength
 *  @param {{ pattern?: RegExp }} pattern
 *  @returns {EnumType}
 */
export function renderStringElementsFieldForEnum (field, params, uri, minLength, maxLength, pattern) {
  /**
   *  log('renderStringElementsFieldForEnum')
   */

  const fieldProps = getElementsFieldPropsForEnum(params, uri)

  return (
    Object.assign(
      field,
      minLength,
      maxLength,
      pattern,
      fieldProps,
      {
        id: uri
      }
    )
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} field
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minLength?: number }} minLength
 *  @param {{ maxLength?: number }} maxLength
 *  @param {{ pattern?: RegExp }} pattern
 *  @returns {AnyOfType}
 */
export function renderStringElementsFieldForAnyOf (field, params, uri, minLength, maxLength, pattern) {
  /**
   *  log('renderStringElementsFieldForAnyOf')
   */

  const fieldProps = getElementsFieldPropsForAnyOf(params, uri)

  return (
    Object.assign(
      field,
      minLength,
      maxLength,
      pattern,
      fieldProps,
      {
        id: uri
      }
    )
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} field
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minLength?: number }} minLength
 *  @param {{ maxLength?: number }} maxLength
 *  @param {{ pattern?: RegExp }} pattern
 *  @returns {OneOfType}
 */
export function renderStringElementsFieldForOneOf (field, params, uri, minLength, maxLength, pattern) {
  /**
   *  log('renderStringElementsFieldForOneOf')
   */

  const fieldProps = getElementsFieldPropsForOneOf(params, uri)

  return (
    Object.assign(
      field,
      minLength,
      maxLength,
      pattern,
      fieldProps,
      {
        id: uri
      }
    )
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} field
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minLength?: number }} minLength
 *  @param {{ maxLength?: number }} maxLength
 *  @param {{ pattern?: RegExp }} pattern
 *  @returns {ObjectLiteralType | ObjectType}
 */
export function getStringElementsFieldForAllOf (field, schema, values, params, uri, minLength, maxLength, pattern) {
  /**
   *  log('getStringElementsFieldForAllOf')
   */

  const fieldValue = getElementsFieldValue(values, uri, schema)
  const fieldProps = getElementsFieldProps(params, uri)

  return (
    Object.assign(
      field,
      minLength,
      maxLength,
      pattern,
      fieldValue,
      fieldProps
    )
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} field
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minLength?: number }} minLength
 *  @param {{ maxLength?: number }} maxLength
 *  @param {{ pattern?: RegExp }} pattern
 *  @returns {FieldType}
 */
export function renderStringElementsFieldForAllOf (field, schema, values, params, uri, minLength, maxLength, pattern) {
  /**
   *  log('renderStringElementsFieldForAllOf')
   */

  const {
    parentUri = '#'
  } = params

  if (isParentUri(parentUri, uri)) {
    const {
      selectedItems
    } = getMetaProps(params, parentUri)

    return (
      Object.assign(
        getStringElementsFieldForAllOf(field, schema, values, params, uri, minLength, maxLength, pattern),
        isArray(selectedItems) ? { selectedItems } : {},
        {
          id: uri
        }
      )
    )
  }

  return (
    Object.assign(
      getStringElementsFieldForAllOf(field, schema, values, params, uri, minLength, maxLength, pattern),
      {
        id: uri
      }
    )
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} field
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minLength?: number }} minLength
 *  @param {{ maxLength?: number }} maxLength
 *  @param {{ pattern?: RegExp }} pattern
 *  @returns {ObjectLiteralType | ObjectType}
 */
export function getStringElementsField (field, schema, values, params, uri, minLength, maxLength, pattern) {
  /**
   *  log('getStringElementsField')
   */

  const fieldValue = getElementsFieldValue(values, uri, schema)
  const fieldProps = getElementsFieldProps(params, uri)

  return (
    Object.assign(
      field,
      minLength,
      maxLength,
      pattern,
      fieldValue,
      fieldProps
    )
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} field
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minLength?: number }} minLength
 *  @param {{ maxLength?: number }} maxLength
 *  @param {{ pattern?: RegExp }} pattern
 *  @returns {FieldType}
 */
export function renderStringElementsField (field, schema, values, params, uri, minLength, maxLength, pattern) {
  /**
   *  log('renderStringElementsField')
   */

  const {
    parentUri = '#'
  } = params

  if (isParentUri(parentUri, uri)) {
    const {
      selectedItems
    } = getMetaProps(params, parentUri)

    return (
      Object.assign(
        getStringElementsField(field, schema, values, params, uri, minLength, maxLength, pattern),
        isArray(selectedItems) ? { selectedItems } : {},
        {
          id: uri
        }
      )
    )
  }

  return (
    Object.assign(
      getStringElementsField(field, schema, values, params, uri, minLength, maxLength, pattern),
      {
        id: uri
      }
    )
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} elements
 *  @param {SchemaType} schema
 *  @returns {ObjectLiteralType | ObjectType}
 */
export function getStringElements (elements, schema) {
  /**
   *  log('getStringElements')
   */

  return (
    Object.assign(
      elements,
      getTitle(schema),
      getDescription(schema)
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minLength?: number }} minLength
 *  @param {{ maxLength?: number }} maxLength
 *  @param {{ pattern?: RegExp }} pattern
 *  @returns {ZashikiStringElementsType}
 */
export function renderStringElementsForEnum (schema, params, uri, minLength, maxLength, pattern) {
  /**
   *  log('renderStringElementsForEnum')
   */

  /**
   *  @type {ObjectLiteralType}
   */
  const elements = {}

  /**
   *  @type {ObjectLiteralType}
   */
  const field = {}

  return (
    Object.assign(
      getStringElements(elements, schema),
      {
        enum: renderStringElementsFieldForEnum(field, params, uri, minLength, maxLength, pattern)
      }
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minLength?: number }} minLength
 *  @param {{ maxLength?: number }} maxLength
 *  @param {{ pattern?: RegExp }} pattern
 *  @returns {ZashikiStringElementsType}
 */
export function renderStringElementsForAnyOf (schema, params, uri, minLength, maxLength, pattern) {
  /**
   *  log('renderStringElementsForAnyOf')
   */

  /**
   *  @type {ObjectLiteralType}
   */
  const elements = {}

  /**
   *  @type {ObjectLiteralType}
   */
  const field = {}

  return (
    Object.assign(
      getStringElements(elements, schema),
      {
        anyOf: renderStringElementsFieldForAnyOf(field, params, uri, minLength, maxLength, pattern)
      }
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minLength?: number }} minLength
 *  @param {{ maxLength?: number }} maxLength
 *  @param {{ pattern?: RegExp }} pattern
 *  @returns {ZashikiStringElementsType}
 */
export function renderStringElementsForOneOf (schema, params, uri, minLength, maxLength, pattern) {
  /**
   *  log('renderStringElementsForOneOf')
   */

  /**
   *  @type {ObjectLiteralType}
   */
  const elements = {}

  /**
   *  @type {ObjectLiteralType}
   */
  const field = {}

  return (
    Object.assign(
      getStringElements(elements, schema),
      {
        oneOf: renderStringElementsFieldForOneOf(field, params, uri, minLength, maxLength, pattern)
      }
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minLength?: number }} minLength
 *  @param {{ maxLength?: number }} maxLength
 *  @param {{ pattern?: RegExp }} pattern
 *  @returns {ZashikiStringElementsType}
 */
export function renderStringElementsForAllOf (schema, values, params, uri, minLength, maxLength, pattern) {
  /**
   *  log('renderStringElementsForAllOf')
   */

  /**
   *  @type {ObjectLiteralType}
   */
  const elements = {}

  /**
   *  @type {ObjectLiteralType}
   */
  const field = {}

  return (
    Object.assign(
      getStringElements(elements, schema),
      {
        field: renderStringElementsFieldForAllOf(field, schema, values, params, uri, minLength, maxLength, pattern)
      }
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minLength?: number }} minLength
 *  @param {{ maxLength?: number }} maxLength
 *  @param {{ pattern?: RegExp }} pattern
 *  @returns {ZashikiStringElementsType}
 */
export function renderStringElements (schema, values, params, uri, minLength, maxLength, pattern) {
  /**
   *  log('renderStringElements')
   */

  /**
   *  @type {ObjectLiteralType}
   */
  const elements = {}

  /**
   *  @type {ObjectLiteralType}
   */
  const field = {}

  return (
    Object.assign(
      getStringElements(elements, schema),
      {
        field: renderStringElementsField(field, schema, values, params, uri, minLength, maxLength, pattern)
      }
    )
  )
}

/**
 *  "enum"
 *
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function renderNullForEnum (schema, values, params) {
  /**
   *  log('renderNullForEnum')
   */

  const {
    uri = '#/'
  } = params

  const meta = renderNullMetaForEnum(params, uri)
  const elements = renderNullElementsForEnum(schema, params, uri)

  return {
    meta,
    elements
  }
}

/**
 *  "anyOf"
 *
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function renderNullForAnyOf (schema, values, params) {
  /**
   *  log('renderNullForAnyOf')
   */

  const {
    uri = '#/'
  } = params

  const meta = renderNullMetaForAnyOf(params, uri)
  const elements = renderNullElementsForAnyOf(schema, params, uri)

  return {
    meta,
    elements
  }
}

/**
 *  "oneOf"
 *
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function renderNullForOneOf (schema, values, params) {
  /**
   *  log('renderNullForOneOf')
   */

  const {
    uri = '#/'
  } = params

  const meta = renderNullMetaForOneOf(params, uri)
  const elements = renderNullElementsForOneOf(schema, params, uri)

  return {
    meta,
    elements
  }
}

/**
 *  "allOf"
 *
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function renderNullForAllOf (schema, values, params) {
  /**
   *  log('renderNullForAllOf')
   */

  const {
    uri = '#/'
  } = params

  const meta = renderNullMetaForAllOf(schema, values, params, uri)
  const elements = renderNullElementsForAllOf(schema, values, params, uri)

  return {
    meta,
    elements
  }
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function renderNull (schema, values, params) {
  /**
   *  log('renderNull')
   */

  const {
    uri = '#/'
  } = params

  const meta = renderNullMeta(schema, values, params, uri)
  const elements = renderNullElements(schema, values, params, uri)

  return {
    meta,
    elements
  }
}

/**
 *  "enum"
 *
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function renderBooleanForEnum (schema, values, params) {
  /**
   *  log('renderBooleanForEnum')
   */

  const {
    uri = '#/'
  } = params

  const meta = renderBooleanMetaForEnum(params, uri)
  const elements = renderBooleanElementsForEnum(schema, params, uri)

  return {
    meta,
    elements
  }
}

/**
 *  "anyOf"
 *
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function renderBooleanForAnyOf (schema, values, params) {
  /**
   *  log('renderBooleanForAnyOf')
   */

  const {
    uri = '#/'
  } = params

  const meta = renderBooleanMetaForAnyOf(params, uri)
  const elements = renderBooleanElementsForAnyOf(schema, params, uri)

  return {
    meta,
    elements
  }
}

/**
 *  "oneOf"
 *
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function renderBooleanForOneOf (schema, values, params) {
  /**
   *  log('renderBooleanForAnyOf')
   */

  const {
    uri = '#/'
  } = params

  const meta = renderBooleanMetaForOneOf(params, uri)
  const elements = renderBooleanElementsForOneOf(schema, params, uri)

  return {
    meta,
    elements
  }
}

/**
 *  "allOf"
 *
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function renderBooleanForAllOf (schema, values, params) {
  /**
   *  log('renderBooleanForAllOf')
   */

  const {
    uri = '#/'
  } = params

  const meta = renderBooleanMetaForAllOf(schema, values, params, uri)
  const elements = renderBooleanElementsForAllOf(schema, values, params, uri)

  return {
    meta,
    elements
  }
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function renderBoolean (schema, values, params) {
  /**
   *  log('renderBoolean')
   */

  const {
    uri = '#/'
  } = params

  const meta = renderBooleanMeta(schema, values, params, uri)
  const elements = renderBooleanElements(schema, values, params, uri)

  return {
    meta,
    elements
  }
}

/**
 *  "enum"
 *
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function renderObjectForEnum (schema, values, params) {
  /**
   *  log('renderObjectForEnum')
   */

  const {
    uri = '#/'
  } = params

  const minProperties = getMinProperties(schema)
  const maxProperties = getMaxProperties(schema)

  const meta = renderObjectMetaForEnum(params, uri, minProperties, maxProperties)
  const elements = renderObjectElementsForEnum(schema, params, uri, minProperties, maxProperties)

  return {
    meta,
    elements
  }
}

/**
 *  "anyOf"
 *
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function renderObjectForAnyOf (schema, values, params) {
  /**
   *  log('renderObjectForAnyOf')
   */

  const {
    uri = '#/'
  } = params

  const minProperties = getMinProperties(schema)
  const maxProperties = getMaxProperties(schema)

  const meta = renderObjectMetaForAnyOf(params, uri, minProperties, maxProperties)
  const elements = renderObjectElementsForAnyOf(schema, params, uri, minProperties, maxProperties)

  return {
    meta,
    elements
  }
}

/**
 *  "oneOf"
 *
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function renderObjectForOneOf (schema, values, params) {
  /**
   *  log('renderObjectForOneOf')
   */

  const {
    uri = '#/'
  } = params

  const minProperties = getMinProperties(schema)
  const maxProperties = getMaxProperties(schema)

  const meta = renderObjectMetaForOneOf(params, uri, minProperties, maxProperties)
  const elements = renderObjectElementsForOneOf(schema, params, uri, minProperties, maxProperties)

  return {
    meta,
    elements
  }
}

/**
 *  "allOf"
 *
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function renderObjectForAllOf (schema, values, params) {
  /**
   *  log('renderObjectForAllOf')
   */

  const {
    uri = '#/'
  } = params

  const minProperties = getMinProperties(schema)
  const maxProperties = getMaxProperties(schema)

  const meta = renderObjectMetaForAllOf(params, uri, minProperties, maxProperties)
  const elements = renderObjectElementsForAllOf(schema, params, uri, minProperties, maxProperties)

  return {
    meta,
    elements
  }
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function renderObject (schema, values, params) {
  /**
   *  log('renderObject')
   */

  const {
    uri = '#/'
  } = params

  const minProperties = getMinProperties(schema)
  const maxProperties = getMaxProperties(schema)

  const meta = renderObjectMeta(params, uri, minProperties, maxProperties)
  const elements = renderObjectElements(schema, params)

  return {
    meta,
    elements
  }
}

/**
 *  "enum"
 *
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function renderArrayForEnum (schema, values, params) {
  /**
   *  log('renderArrayForEnum')
   */

  const {
    uri = '#/'
  } = params

  const minItems = getMinItems(schema)
  const maxItems = getMaxItems(schema)
  const hasUniqueItems = getHasUniqueItems(schema)
  const maxContains = getMaxContains(schema)
  const minContains = getMinContains(schema)

  const meta = renderArrayMetaForEnum(params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains)
  const elements = renderArrayElementsForEnum(schema, params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains)

  return {
    meta,
    elements
  }
}

/**
 *  "anyOf"
 *
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function renderArrayForAnyOf (schema, values, params) {
  /**
   *  log('renderArrayForAnyOf')
   */

  const {
    uri = '#/'
  } = params

  const minItems = getMinItems(schema)
  const maxItems = getMaxItems(schema)
  const hasUniqueItems = getHasUniqueItems(schema)
  const maxContains = getMaxContains(schema)
  const minContains = getMinContains(schema)

  const meta = renderArrayMetaForAnyOf(params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains)
  const elements = renderArrayElementsForAnyOf(schema, params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains)

  return {
    meta,
    elements
  }
}

/**
 *  "oneOf"
 *
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function renderArrayForOneOf (schema, values, params) {
  /**
   *  log('renderArrayForOneOf')
   */

  const {
    uri = '#/'
  } = params

  const minItems = getMinItems(schema)
  const maxItems = getMaxItems(schema)
  const hasUniqueItems = getHasUniqueItems(schema)
  const maxContains = getMaxContains(schema)
  const minContains = getMinContains(schema)

  const meta = renderArrayMetaForOneOf(params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains)
  const elements = renderArrayElementsForOneOf(schema, params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains)

  return {
    meta,
    elements
  }
}

/**
 *  "allOf"
 *
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function renderArrayForAllOf (schema, values, params) {
  /**
   *  log('renderArrayForAllOf')
   */

  const {
    uri = '#/'
  } = params

  const minItems = getMinItems(schema)
  const maxItems = getMaxItems(schema)
  const hasUniqueItems = getHasUniqueItems(schema)
  const maxContains = getMaxContains(schema)
  const minContains = getMinContains(schema)

  const meta = renderArrayMetaForAllOf(params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains)
  const elements = renderArrayElementsForAllOf(schema, params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains)

  return {
    meta,
    elements
  }
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function renderArray (schema, values, params) {
  /**
   *  log('renderArray')
   */

  const {
    uri = '#/'
  } = params

  const minItems = getMinItems(schema)
  const maxItems = getMaxItems(schema)
  const hasUniqueItems = getHasUniqueItems(schema)
  const maxContains = getMaxContains(schema)
  const minContains = getMinContains(schema)

  const meta = renderArrayMeta(params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains)
  const elements = renderArrayElements(schema, params)

  return {
    meta,
    elements
  }
}

/**
 *  "enum"
 *
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function renderNumberForEnum (schema, values, params) {
  /**
   *  log('renderNumberForEnum')
   */

  const {
    uri = '#/'
  } = params

  const min = getMin(schema)
  const max = getMax(schema)
  const step = getStep(schema)

  const meta = renderNumberMetaForEnum(schema, params, uri, min, max, step)
  const elements = renderNumberElementsForEnum(schema, params, uri, min, max, step)

  return {
    meta,
    elements
  }
}

/**
 *  "anyOf"
 *
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function renderNumberForAnyOf (schema, values, params) {
  /**
   *  log('renderNumberForAnyOf')
   */

  const {
    uri = '#/'
  } = params

  const min = getMin(schema)
  const max = getMax(schema)
  const step = getStep(schema)

  const meta = renderNumberMetaForAnyOf(schema, params, uri, min, max, step)
  const elements = renderNumberElementsForAnyOf(schema, params, uri, min, max, step)

  return {
    meta,
    elements
  }
}

/**
 *  "oneOf"
 *
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function renderNumberForOneOf (schema, values, params) {
  /**
   *  log('renderNumberForOneOf')
   */

  const {
    uri = '#/'
  } = params

  const min = getMin(schema)
  const max = getMax(schema)
  const step = getStep(schema)

  const meta = renderNumberMetaForOneOf(schema, params, uri, min, max, step)
  const elements = renderNumberElementsForOneOf(schema, params, uri, min, max, step)

  return {
    meta,
    elements
  }
}

/**
 *  "allOf"
 *
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function renderNumberForAllOf (schema, values, params) {
  /**
   *  log('renderNumberForAllOf')
   */

  const {
    uri = '#/'
  } = params

  const min = getMin(schema)
  const max = getMax(schema)
  const step = getStep(schema)

  const meta = renderNumberMetaForAllOf(schema, values, params, uri, min, max, step)
  const elements = renderNumberElementsForAllOf(schema, values, params, uri, min, max, step)

  return {
    meta,
    elements
  }
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function renderNumber (schema, values, params) {
  /**
   *  log('renderNumber')
   */

  const {
    uri = '#/'
  } = params

  const min = getMin(schema)
  const max = getMax(schema)
  const step = getStep(schema)

  const meta = renderNumberMeta(schema, values, params, uri, min, max, step)
  const elements = renderNumberElements(schema, values, params, uri, min, max, step)

  return {
    meta,
    elements
  }
}

/**
 *  "enum"
 *
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function renderStringForEnum (schema, values, params) {
  /**
   *  log('renderStringForEnum')
   */

  const {
    uri = '#/'
  } = params

  const minLength = getMinLength(schema)
  const maxLength = getMaxLength(schema)
  const pattern = getPattern(schema)

  const meta = renderStringMetaForEnum(params, uri, minLength, maxLength, pattern)
  const elements = renderStringElementsForEnum(schema, params, uri, minLength, maxLength, pattern)

  return {
    meta,
    elements
  }
}

/**
 *  "anyOf"
 *
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function renderStringForAnyOf (schema, values, params) {
  /**
   *  log('renderStringForAnyOf')
   */

  const {
    uri = '#/'
  } = params

  const minLength = getMinLength(schema)
  const maxLength = getMaxLength(schema)
  const pattern = getPattern(schema)

  const meta = renderStringMetaForAnyOf(params, uri, minLength, maxLength, pattern)
  const elements = renderStringElementsForAnyOf(schema, params, uri, minLength, maxLength, pattern)

  return {
    meta,
    elements
  }
}

/**
 *  "oneOf"
 *
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function renderStringForOneOf (schema, values, params) {
  /**
   *  log('renderStringForOneOf')
   */

  const {
    uri = '#/'
  } = params

  const minLength = getMinLength(schema)
  const maxLength = getMaxLength(schema)
  const pattern = getPattern(schema)

  const meta = renderStringMetaForOneOf(params, uri, minLength, maxLength, pattern)
  const elements = renderStringElementsForOneOf(schema, params, uri, minLength, maxLength, pattern)

  return {
    meta,
    elements
  }
}

/**
 *  "allOf"
 *
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function renderStringForAllOf (schema, values, params) {
  /**
   *  log('renderStringForAllOf')
   */

  const {
    uri = '#/'
  } = params

  const minLength = getMinLength(schema)
  const maxLength = getMaxLength(schema)
  const pattern = getPattern(schema)

  const meta = renderStringMetaForAllOf(schema, values, params, uri, minLength, maxLength, pattern)
  const elements = renderStringElementsForAllOf(schema, values, params, uri, minLength, maxLength, pattern)

  return {
    meta,
    elements
  }
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function renderString (schema, values, params) {
  /**
   *  log('renderString')
   */

  const {
    uri = '#/'
  } = params

  const minLength = getMinLength(schema)
  const maxLength = getMaxLength(schema)
  const pattern = getPattern(schema)

  const meta = renderStringMeta(schema, values, params, uri, minLength, maxLength, pattern)
  const elements = renderStringElements(schema, values, params, uri, minLength, maxLength, pattern)

  return {
    meta,
    elements
  }
}

/**
 *  "enum"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNullByKeyForEnum (schema, rootSchema, values, params) {
  /**
   *  log('transformNullByKeyForEnum')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { enum: items = [] } = schema // const items = getEnum(schema)

  return renderNullForEnum(schema, values, getRenderParamsByKeyForEnum(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "anyOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNullByKeyForAnyOf (schema, rootSchema, values, params) {
  /**
   *  log('transformNullByKeyForAnyOf')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.filter(isObject).map(mapTransformNullByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderNullForAnyOf(schema, values, getRenderParamsByKeyForAnyOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "oneOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNullByKeyForOneOf (schema, rootSchema, values, params) {
  /**
   *  log('transformNullByKeyForOneOf')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.filter(isObject).map(mapTransformNullByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderNullForOneOf(schema, values, getRenderParamsByKeyForOneOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "allOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNullByKeyForAllOf (schema, rootSchema, values, params) {
  /**
   *  log('transformNullByKeyForAllOf')
   */

  const {
    allOf = [],
    ...schemaProps
  } = schema

  /**
   *  @type {SchemaType}
   */
  const itemSchema = allOf.filter(isObject).reduce(toSchema, structuredClone(schemaProps)) // initialise with `rest`

  return renderNullForAllOf(itemSchema, values, getRenderParamsByKeyForAllOf(schema, rootSchema, values, params))
}

/**
 *  "enum"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNullByIndexForEnum (schema, rootSchema, values, params) {
  /**
   *  log('transformNullByIndexForEnum')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { enum: items = [] } = schema // const items = getEnum(schema)

  return renderNullForEnum(schema, values, getRenderParamsByIndexForEnum(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "anyOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNullByIndexForAnyOf (schema, rootSchema, values, params) {
  /**
   *  log('transformNullByIndexForAnyOf')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.filter(isObject).map(mapTransformNullByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderNullForAnyOf(schema, values, getRenderParamsByIndexForAnyOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "oneOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNullByIndexForOneOf (schema, rootSchema, values, params) {
  /**
   *  log('transformNullByIndexForOneOf')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.filter(isObject).map(mapTransformNullByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderNullForOneOf(schema, values, getRenderParamsByIndexForOneOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "allOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNullByIndexForAllOf (schema, rootSchema, values, params) {
  /**
   *  log('transformNullByIndexForAllOf')
   */

  const {
    allOf = [],
    ...schemaProps
  } = schema

  /**
   *  @type {SchemaType}
   */
  const itemSchema = allOf.filter(isObject).reduce(toSchema, structuredClone(schemaProps)) // initialise with `rest`

  return renderNullForAllOf(itemSchema, values, getRenderParamsByIndexForAllOf(schema, rootSchema, values, params))
}

/**
 *  "enum"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNullForEnum (schema, rootSchema, values, params) {
  /**
   *  log('transformNullForEnum')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { enum: items = [] } = schema // const items = getEnum(schema)

  return renderNullForEnum(schema, values, getRenderParamsForEnum(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "anyOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNullForAnyOf (schema, rootSchema, values, params) {
  /**
   *  log('transformNullForAnyOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.filter(isObject).map(mapTransformNullByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderNullForAnyOf(schema, values, getRenderParamsForAnyOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "oneOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNullForOneOf (schema, rootSchema, values, params) {
  /**
   *  log('transformNullForOneOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.filter(isObject).map(mapTransformNullByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderNullForOneOf(schema, values, getRenderParamsForOneOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "allOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNullForAllOf (schema, rootSchema, values, params) {
  /**
   *  log('transformNullForAllOf')
   */

  const {
    allOf = [],
    ...schemaProps
  } = schema

  /**
   *  @type {SchemaType}
   */
  const itemSchema = allOf.filter(isObject).reduce(toSchema, structuredClone(schemaProps)) // initialise with `rest`

  return renderNullForAllOf(itemSchema, values, getRenderParamsForAllOf(schema, rootSchema, values, params))
}

/**
 *  "enum"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformBooleanByKeyForEnum (schema, rootSchema, values, params) {
  /**
   *  log('transformBooleanByKeyForEnum')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { enum: items = [] } = schema // const items = getEnum(schema)

  return renderBooleanForEnum(schema, values, getRenderParamsByKeyForEnum(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "anyOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformBooleanByKeyForAnyOf (schema, rootSchema, values, params) {
  /**
   *  log('transformBooleanByKeyForAnyOf')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.filter(isObject).map(mapTransformBooleanByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderBooleanForAnyOf(schema, values, getRenderParamsByKeyForAnyOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "oneOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformBooleanByKeyForOneOf (schema, rootSchema, values, params) {
  /**
   *  log('transformBooleanByKeyForOneOf')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.filter(isObject).map(mapTransformBooleanByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderBooleanForOneOf(schema, values, getRenderParamsByKeyForOneOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "allOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformBooleanByKeyForAllOf (schema, rootSchema, values, params) {
  /**
   *  log('transformBooleanByKeyForAllOf')
   */

  const {
    allOf = [],
    ...schemaProps
  } = schema

  /**
   *  @type {SchemaType}
   */
  const itemSchema = allOf.filter(isObject).reduce(toSchema, structuredClone(schemaProps)) // initialise with `rest`

  return renderBooleanForAllOf(itemSchema, values, getRenderParamsByKeyForAllOf(schema, rootSchema, values, params))
}

/**
 *  "enum"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformBooleanByIndexForEnum (schema, rootSchema, values, params) {
  /**
   *  log('transformBooleanByIndexForEnum')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { enum: items = [] } = schema // const items = getEnum(schema)

  return renderBooleanForEnum(schema, values, getRenderParamsByIndexForEnum(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "anyOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformBooleanByIndexForAnyOf (schema, rootSchema, values, params) {
  /**
   *  log('transformBooleanByIndexForAnyOf')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.filter(isObject).map(mapTransformBooleanByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderBooleanForAnyOf(schema, values, getRenderParamsByIndexForAnyOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "oneOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformBooleanByIndexForOneOf (schema, rootSchema, values, params) {
  /**
   *  log('transformBooleanByIndexForOneOf')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.filter(isObject).map(mapTransformBooleanByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderBooleanForOneOf(schema, values, getRenderParamsByIndexForOneOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "allOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformBooleanByIndexForAllOf (schema, rootSchema, values, params) {
  /**
   *  log('transformBooleanByIndexForAllOf')
   */

  const {
    allOf = [],
    ...schemaProps
  } = schema

  /**
   *  @type {SchemaType}
   */
  const itemSchema = allOf.filter(isObject).reduce(toSchema, structuredClone(schemaProps)) // initialise with `rest`

  return renderBooleanForAllOf(itemSchema, values, getRenderParamsByIndexForAllOf(schema, rootSchema, values, params))
}

/**
 *  "enum"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformBooleanForEnum (schema, rootSchema, values, params) {
  /**
   *  log('transformBooleanForEnum')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { enum: items = [] } = schema // const items = getEnum(schema)

  return renderBooleanForEnum(schema, values, getRenderParamsForEnum(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "anyOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformBooleanForAnyOf (schema, rootSchema, values, params) {
  /**
   *  log('transformBooleanForAnyOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.filter(isObject).map(mapTransformBooleanByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderBooleanForAnyOf(schema, values, getRenderParamsForAnyOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "oneOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformBooleanForOneOf (schema, rootSchema, values, params) {
  /**
   *  log('transformBooleanForOneOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.filter(isObject).map(mapTransformBooleanByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderBooleanForOneOf(schema, values, getRenderParamsForOneOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "allOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformBooleanForAllOf (schema, rootSchema, values, params) {
  /**
   *  log('transformBooleanForAllOf')
   */

  const {
    allOf = [],
    ...schemaProps
  } = schema

  /**
   *  @type {SchemaType}
   */
  const itemSchema = allOf.filter(isObject).reduce(toSchema, structuredClone(schemaProps)) // initialise with `rest`

  return renderBooleanForAllOf(itemSchema, values, getRenderParamsForAllOf(schema, rootSchema, values, params))
}

/**
 *  "enum"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformObjectByKeyForEnum (schema, rootSchema, values, params) {
  /**
   *  log('transformObjectByKeyForEnum')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { enum: items = [] } = schema // const items = getEnum(schema)

  return renderObjectForEnum(schema, values, getRenderParamsByKeyForEnum(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "anyOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformObjectByKeyForAnyOf (schema, rootSchema, values, params) {
  /**
   *  log('transformObjectByKeyForAnyOf')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.filter(isObject).map(mapTransformObjectByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderObjectForAnyOf(schema, values, getRenderParamsByKeyForAnyOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "oneOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformObjectByKeyForOneOf (schema, rootSchema, values, params) {
  /**
   *  log('transformObjectByKeyForOneOf')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.filter(isObject).map(mapTransformObjectByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderObjectForOneOf(schema, values, getRenderParamsByKeyForOneOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "allOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformObjectByKeyForAllOf (schema, rootSchema, values, params) {
  /**
   *  log('transformObjectByKeyForAllOf')
   */

  const {
    allOf = [],
    ...schemaProps
  } = schema

  /**
   *  @type {SchemaType}
   */
  const itemSchema = allOf.filter(isObject).reduce(toSchema, structuredClone(schemaProps)) // initialise with `rest`

  return renderObjectForAllOf(itemSchema, values, getRenderParamsByKeyForAllOf(schema, rootSchema, values, params))
}

/**
 *  "enum"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformObjectByIndexForEnum (schema, rootSchema, values, params) {
  /**
   *  log('transformObjectByIndexForEnum')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { enum: items = [] } = schema // const items = getEnum(schema)

  return renderObjectForEnum(schema, values, getRenderParamsByIndexForEnum(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "anyOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformObjectByIndexForAnyOf (schema, rootSchema, values, params) {
  /**
   *  log('transformObjectByIndexForAnyOf')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.filter(isObject).map(mapTransformObjectByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderObjectForAnyOf(schema, values, getRenderParamsByIndexForAnyOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "oneOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformObjectByIndexForOneOf (schema, rootSchema, values, params) {
  /**
   *  log('transformObjectByIndexForOneOf')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.filter(isObject).map(mapTransformObjectByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderObjectForOneOf(schema, values, getRenderParamsByIndexForOneOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "allOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformObjectByIndexForAllOf (schema, rootSchema, values, params) {
  /**
   *  log('transformObjectByIndexForAllOf')
   */

  const {
    allOf = [],
    ...schemaProps
  } = schema

  /**
   *  @type {SchemaType}
   */
  const itemSchema = allOf.filter(isObject).reduce(toSchema, structuredClone(schemaProps)) // initialise with `rest`

  return renderObjectForAllOf(itemSchema, values, getRenderParamsByIndexForAllOf(schema, rootSchema, values, params))
}

/**
 *  "enum"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformObjectForEnum (schema, rootSchema, values, params) {
  /**
   *  log('transformObjectForEnum')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { enum: items = [] } = schema // const items = getEnum(schema)

  return renderObjectForEnum(schema, values, getRenderParamsForEnum(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "anyOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformObjectForAnyOf (schema, rootSchema, values, params) {
  /**
   *  log('transformObjectForAnyOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.filter(isObject).map(mapTransformObjectByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderObjectForAnyOf(schema, values, getRenderParamsForAnyOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "oneOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformObjectForOneOf (schema, rootSchema, values, params) {
  /**
   *  log('transformObjectForOneOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.filter(isObject).map(mapTransformObjectByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderObjectForOneOf(schema, values, getRenderParamsForOneOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "allOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformObjectForAllOf (schema, rootSchema, values, params) { // As-is
  /**
   *  log('transformObjectForAllOf')
   */

  const {
    allOf = [],
    ...schemaProps
  } = schema

  /**
   *  @type {SchemaType}
   */
  const itemSchema = allOf.filter(isObject).reduce(toSchema, structuredClone(schemaProps)) // initialise with `rest`

  const {
    properties = {},
    required = []
  } = itemSchema

  const {
    uri = '#/'
  } = params

  params.fields = (
    Object
      .entries(properties)
      .map(mapTransformByKey(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, required })))
  )

  return renderObjectForAllOf(itemSchema, values, getRenderParamsForAllOf(schema, rootSchema, values, params))
}

/**
 *  "enum"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformArrayByKeyForEnum (schema, rootSchema, values, params) {
  /**
   *  log('transformArrayByKeyForEnum')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { enum: items = [] } = schema // const items = getEnum(schema)

  return renderArrayForEnum(schema, values, getRenderParamsByKeyForEnum(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "anyOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformArrayByKeyForAnyOf (schema, rootSchema, values, params) {
  /**
   *  log('transformArrayByKeyForAnyOf')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.filter(isObject).map(mapTransformArrayByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderArrayForAnyOf(schema, values, getRenderParamsByKeyForAnyOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "oneOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformArrayByKeyForOneOf (schema, rootSchema, values, params) {
  /**
   *  log('transformArrayByKeyForOneOf')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.filter(isObject).map(mapTransformArrayByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderArrayForOneOf(schema, values, getRenderParamsByKeyForOneOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "allOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformArrayByKeyForAllOf (schema, rootSchema, values, params) {
  /**
   *  log('transformArrayByKeyForAllOf')
   */

  const {
    allOf = [],
    ...schemaProps
  } = schema

  /**
   *  @type {SchemaType}
   */
  const itemSchema = allOf.filter(isObject).reduce(toSchema, structuredClone(schemaProps)) // initialise with `rest`

  return renderArrayForAllOf(itemSchema, values, getRenderParamsByKeyForAllOf(schema, rootSchema, values, params))
}

/**
 *  "enum"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformArrayByIndexForEnum (schema, rootSchema, values, params) {
  /**
   *  log('transformArrayByIndexForEnum')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { enum: items = [] } = schema // const items = getEnum(schema)

  return renderArrayForEnum(schema, values, getRenderParamsByIndexForEnum(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "anyOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformArrayByIndexForAnyOf (schema, rootSchema, values, params) {
  /**
   *  log('transformArrayByIndexForAnyOf')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.filter(isObject).map(mapTransformArrayByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderArrayForAnyOf(schema, values, getRenderParamsByIndexForAnyOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "oneOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformArrayByIndexForOneOf (schema, rootSchema, values, params) {
  /**
   *  log('transformArrayByIndexForOneOf')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.filter(isObject).map(mapTransformArrayByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderArrayForOneOf(schema, values, getRenderParamsByIndexForOneOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "allOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformArrayByIndexForAllOf (schema, rootSchema, values, params) {
  /**
   *  log('transformArrayByIndexForAllOf')
   */

  const {
    allOf = [],
    ...schemaProps
  } = schema

  /**
   *  @type {SchemaType}
   */
  const itemSchema = allOf.filter(isObject).reduce(toSchema, structuredClone(schemaProps)) // initialise with `rest`

  return renderArrayForAllOf(itemSchema, values, getRenderParamsByIndexForAllOf(schema, rootSchema, values, params))
}

/**
 *  "enum"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformArrayForEnum (schema, rootSchema, values, params) {
  /**
   *  log('transformArrayForEnum')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { enum: items = [] } = schema // const items = getEnum(schema)

  return renderArrayForEnum(schema, values, getRenderParamsForEnum(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "anyOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformArrayForAnyOf (schema, rootSchema, values, params) {
  /**
   *  log('transformArrayForAnyOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.filter(isObject).map(mapTransformArrayByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderArrayForAnyOf(schema, values, getRenderParamsForAnyOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "oneOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformArrayForOneOf (schema, rootSchema, values, params) {
  /**
   *  log('transformArrayForOneOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.filter(isObject).map(mapTransformArrayByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderArrayForOneOf(schema, values, getRenderParamsForOneOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "allOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformArrayForAllOf (schema, rootSchema, values, params) {
  /**
   *  log('transformArrayForAllOf')
   */

  const {
    allOf = [],
    ...schemaProps
  } = schema

  /**
   *  @type {SchemaType}
   */
  const itemSchema = allOf.filter(isObject).reduce(toSchema, structuredClone(schemaProps)) // initialise with `rest`

  const {
    items = [] // array or object
  } = itemSchema

  if (isArray(items)) {
    const {
      uri = '#/'
    } = params

    params.fields = (
      items.map(mapTransformByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri })))
    )

    return renderArrayForAllOf(itemSchema, values, getRenderParamsForAllOf(schema, rootSchema, values, params))
  } else {
    if (isObject(items)) {
      const {
        uri = '#/'
      } = params

      params.fields = [
        getTransformByIndex(items, rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri }))
      ]

      return renderArrayForAllOf(itemSchema, values, getRenderParamsForAllOf(schema, rootSchema, values, params))
    }
  }

  throw new Error('Invalid `array`')
}

/**
 *  "enum"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNumberByKeyForEnum (schema, rootSchema, values, params) {
  /**
   *  log('transformNumberByKeyForEnum')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { enum: items = [] } = schema // const items = getEnum(schema)

  return renderNumberForEnum(schema, values, getRenderParamsByKeyForEnum(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "anyOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNumberByKeyForAnyOf (schema, rootSchema, values, params) {
  /**
   *  log('transformNumberByKeyForAnyOf')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.filter(isObject).map(mapTransformNumberByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderNumberForAnyOf(schema, values, getRenderParamsByKeyForAnyOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "oneOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNumberByKeyForOneOf (schema, rootSchema, values, params) {
  /**
   *  log('transformNumberByKeyForOneOf')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.filter(isObject).map(mapTransformNumberByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderNumberForOneOf(schema, values, getRenderParamsByKeyForOneOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "allOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNumberByKeyForAllOf (schema, rootSchema, values, params) {
  /**
   *  log('transformNumberByKeyForAllOf')
   */

  const {
    allOf = [],
    ...schemaProps
  } = schema

  /**
   *  @type {SchemaType}
   */
  const itemSchema = allOf.filter(isObject).reduce(toSchema, structuredClone(schemaProps)) // initialise with `rest`

  return renderNumberForAllOf(itemSchema, values, getRenderParamsByKeyForAllOf(schema, rootSchema, values, params))
}

/**
 *  "enum"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNumberByIndexForEnum (schema, rootSchema, values, params) {
  /**
   *  log('transformNumberByIndexForEnum')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { enum: items = [] } = schema // const items = getEnum(schema)

  return renderNumberForEnum(schema, values, getRenderParamsByIndexForEnum(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "anyOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNumberByIndexForAnyOf (schema, rootSchema, values, params) {
  /**
   *  log('transformNumberByIndexForAnyOf')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.filter(isObject).map(mapTransformNumberByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderNumberForAnyOf(schema, values, getRenderParamsByIndexForAnyOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "oneOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNumberByIndexForOneOf (schema, rootSchema, values, params) {
  /**
   *  log('transformNumberByIndexForOneOf')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.filter(isObject).map(mapTransformNumberByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderNumberForOneOf(schema, values, getRenderParamsByIndexForOneOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "allOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNumberByIndexForAllOf (schema, rootSchema, values, params) {
  /**
   *  log('transformNumberByIndexForAllOf')
   */

  const {
    allOf = [],
    ...schemaProps
  } = schema

  /**
   *  @type {SchemaType}
   */
  const itemSchema = allOf.filter(isObject).reduce(toSchema, structuredClone(schemaProps)) // initialise with `rest`

  return renderNumberForAllOf(itemSchema, values, getRenderParamsByIndexForAllOf(schema, rootSchema, values, params))
}

/**
 *  "enum"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNumberForEnum (schema, rootSchema, values, params) {
  /**
   *  log('transformNumberForEnum')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { enum: items = [] } = schema // const items = getEnum(schema)

  return renderNumberForEnum(schema, values, getRenderParamsForEnum(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "anyOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNumberForAnyOf (schema, rootSchema, values, params) {
  /**
   *  log('transformNumberForAnyOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.filter(isObject).map(mapTransformNumberByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderNumberForAnyOf(schema, values, getRenderParamsForAnyOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "oneOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNumberForOneOf (schema, rootSchema, values, params) {
  /**
   *  log('transformNumberForOneOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.filter(isObject).map(mapTransformNumberByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderNumberForOneOf(schema, values, getRenderParamsForOneOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "allOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNumberForAllOf (schema, rootSchema, values, params) {
  /**
   *  log('transformNumberForAllOf')
   */

  const {
    allOf = [],
    ...schemaProps
  } = schema

  /**
   *  @type {SchemaType}
   */
  const itemSchema = allOf.filter(isObject).reduce(toSchema, structuredClone(schemaProps)) // initialise with `rest`

  return renderNumberForAllOf(itemSchema, values, getRenderParamsForAllOf(schema, rootSchema, values, params))
}

/**
 *  "enum"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformStringByKeyForEnum (schema, rootSchema, values, params) {
  /**
   *  log('transformStringByKeyForEnum')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { enum: items = [] } = schema // const items = getEnum(schema)

  return renderStringForEnum(schema, values, getRenderParamsByKeyForEnum(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "anyOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformStringByKeyForAnyOf (schema, rootSchema, values, params) {
  /**
   *  log('transformStringByKeyForAnyOf')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema

  /**
   *  @type {ZashikiType[]}
   */
  const items = anyOf.filter(isObject).map(mapTransformStringByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderStringForAnyOf(schema, values, getRenderParamsByKeyForAnyOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "oneOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformStringByKeyForOneOf (schema, rootSchema, values, params) {
  /**
   *  log('transformStringByKeyForOneOf')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.filter(isObject).map(mapTransformStringByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderStringForOneOf(schema, values, getRenderParamsByKeyForOneOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "allOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformStringByKeyForAllOf (schema, rootSchema, values, params) {
  /**
   *  log('transformStringByKeyForAllOf')
   */

  const {
    allOf = [],
    ...schemaProps
  } = schema

  /**
   *  @type {SchemaType}
   */
  const itemSchema = allOf.filter(isObject).reduce(toSchema, structuredClone(schemaProps)) // initialise with `rest`

  return renderStringForAllOf(itemSchema, values, getRenderParamsByKeyForAllOf(schema, rootSchema, values, params))
}

/**
 *  "enum"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformStringByIndexForEnum (schema, rootSchema, values, params) {
  /**
   *  log('transformStringByIndexForEnum')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { enum: items = [] } = schema // const items = getEnum(schema)

  return renderStringForEnum(schema, values, getRenderParamsByIndexForEnum(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "anyOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformStringByIndexForAnyOf (schema, rootSchema, values, params) {
  /**
   *  log('transformStringByIndexForAnyOf')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.filter(isObject).map(mapTransformStringByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderStringForAnyOf(schema, values, getRenderParamsByIndexForAnyOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "oneOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformStringByIndexForOneOf (schema, rootSchema, values, params) {
  /**
   *  log('transformStringByIndexForOneOf')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.filter(isObject).map(mapTransformStringByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri })))

  return renderStringForOneOf(schema, values, getRenderParamsByIndexForOneOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "allOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformStringByIndexForAllOf (schema, rootSchema, values, params) {
  /**
   *  log('transformStringByIndexForAllOf')
   */

  const {
    allOf = [],
    ...schemaProps
  } = schema

  /**
   *  @type {SchemaType}
   */
  const itemSchema = allOf.filter(isObject).reduce(toSchema, structuredClone(schemaProps)) // initialise with `rest`

  return renderStringForAllOf(itemSchema, values, getRenderParamsByIndexForAllOf(schema, rootSchema, values, params))
}

/**
 *  "enum"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformStringForEnum (schema, rootSchema, values, params) {
  /**
   *  log('transformStringForEnum')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { enum: items = [] } = schema // const items = getEnum(schema)

  return renderStringForEnum(schema, values, getRenderParamsForEnum(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "anyOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformStringForAnyOf (schema, rootSchema, values, params) {
  /**
   *  log('transformStringForAnyOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.filter(isObject).map(mapTransformStringByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderStringForAnyOf(schema, values, getRenderParamsForAnyOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "oneOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformStringForOneOf (schema, rootSchema, values, params) {
  /**
   *  log('transformStringForOneOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.filter(isObject).map(mapTransformStringByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderStringForOneOf(schema, values, getRenderParamsForOneOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/**
 *  "allOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformStringForAllOf (schema, rootSchema, values, params) {
  /**
   *  log('transformStringForAllOf')
   */

  const {
    allOf = [],
    ...schemaProps
  } = schema

  /**
   *  @type {SchemaType}
   */
  const itemSchema = allOf.filter(isObject).reduce(toSchema, structuredClone(schemaProps)) // initialise with `rest`

  return renderStringForAllOf(itemSchema, values, getRenderParamsForAllOf(schema, rootSchema, values, params))
}

/**
 *  @link https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNullByKey (schema, rootSchema, values, params) {
  /**
   *  log('transformNullByKey')
   */

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

  return renderNull(schema, values, getRenderParamsByKey(schema, rootSchema, values, params))
}

/**
 *  @link https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNullByIndex (schema, rootSchema, values, params) {
  /**
   *  log('transformNullByIndex')
   */

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

  return renderNull(schema, values, getRenderParamsByIndex(schema, rootSchema, values, params))
}

/**
 *  @link https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformBooleanByKey (schema, rootSchema, values, params) {
  /**
   *  log('transformBooleanByKey')
   */

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

  return renderBoolean(schema, values, getRenderParamsByKey(schema, rootSchema, values, params))
}

/**
 *  @link https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformBooleanByIndex (schema, rootSchema, values, params) {
  /**
   *  log('transformBooleanByIndex')
   */

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

  return renderBoolean(schema, values, getRenderParamsByIndex(schema, rootSchema, values, params))
}

/**
 *  @link https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.5
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformObjectByKey (schema, rootSchema, values, params) {
  /**
   *  log('transformObjectByKey')
   */

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

  const {
    properties = {},
    required = []
  } = schema

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey
  } = params

  params.fields = (
    Object
      .entries(properties)
      .map(mapTransformByKey(rootSchema, values, Object.assign(structuredClone(params), { parentUri: getUri(fieldParentUri, fieldKey), required })))
  )

  return renderObject(schema, values, getRenderParamsByKey(schema, rootSchema, values, params))
}

/**
 *  @link https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.5
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformObjectByIndex (schema, rootSchema, values, params) {
  /**
   *  log('transformObjectByIndex')
   */

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

  const {
    properties = {},
    required = []
  } = schema

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  params.fields = (
    Object
      .entries(properties)
      .map(mapTransformByKey(rootSchema, values, Object.assign(structuredClone(params), { parentUri: getUri(arrayParentUri, arrayIndex), required })))
  )

  return renderObject(schema, values, getRenderParamsByIndex(schema, rootSchema, values, params))
}

/**
 *  @link https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.4
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformArrayByKey (schema, rootSchema, values, params) {
  /**
   *  log('transformArrayByKey')
   */

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

  const {
    items = [] // array or object
  } = schema

  if (isArray(items)) {
    const {
      parentUri: fieldParentUri = '#',
      key: fieldKey = ''
    } = params

    params.fields = (
      items.map(mapTransformByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: getUri(fieldParentUri, fieldKey) })))
    )

    return renderArray(schema, values, getRenderParamsByKey(schema, rootSchema, values, params))
  } else {
    if (isObject(items)) {
      const {
        parentUri: fieldParentUri = '#',
        key: fieldKey = ''
      } = params

      params.fields = [
        getTransformByIndex(items, rootSchema, values, Object.assign(structuredClone(params), { parentUri: getUri(fieldParentUri, fieldKey) }))
      ]

      return renderArray(schema, values, getRenderParamsByKey(schema, rootSchema, values, params))
    }
  }

  throw new Error('Invalid `array`')
}

/**
 *  @link https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.4
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformArrayByIndex (schema, rootSchema, values, params) {
  /**
   *  log('transformArrayByIndex')
   */

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

  const {
    items = [] // array or object
  } = schema

  if (isArray(items)) {
    const {
      parentUri: arrayParentUri = '#/',
      index: arrayIndex = 0
    } = params

    params.fields = (
      items.map(mapTransformByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: getUri(arrayParentUri, arrayIndex) })))
    )

    return renderArray(schema, values, getRenderParamsByIndex(schema, rootSchema, values, params))
  } else {
    if (isObject(items)) {
      const {
        parentUri: arrayParentUri = '#',
        index: arrayIndex = 0
      } = params

      params.fields = [
        getTransformByIndex(items, rootSchema, values, Object.assign(structuredClone(params), { parentUri: getUri(arrayParentUri, arrayIndex) }))
      ]

      return renderArray(schema, values, getRenderParamsByIndex(schema, rootSchema, values, params))
    }
  }

  throw new Error('Invalid `array`')
}

/**
 *  @link https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.2
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNumberByKey (schema, rootSchema, values, params) {
  /**
   *  log('transformNumberByKey')
   */

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

  return renderNumber(schema, values, getRenderParamsByKey(schema, rootSchema, values, params))
}

/**
 *  @link https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.2
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNumberByIndex (schema, rootSchema, values, params) {
  /**
   *  log('transformNumberByIndex')
   */

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

  return renderNumber(schema, values, getRenderParamsByIndex(schema, rootSchema, values, params))
}

/**
 *  @link https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.3
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformStringByKey (schema, rootSchema, values, params) {
  /**
   *  log('transformStringByKey')
   */

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

  return renderString(schema, values, getRenderParamsByKey(schema, rootSchema, values, params))
}

/**
 *  @link https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.3
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformStringByIndex (schema, rootSchema, values, params) {
  /**
   *  log('transformStringByIndex')
   */

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

  return renderString(schema, values, getRenderParamsByIndex(schema, rootSchema, values, params))
}

/**
 *  @link https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNull (schema, rootSchema, values, params) {
  /**
   *  log('transformNull')
   */

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

  return renderNull(schema, values, getRenderParams(schema, rootSchema, values, params))
}

/**
 *  @link https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformBoolean (schema, rootSchema, values, params) {
  /**
   *  log('transformBoolean')
   */

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

  return renderBoolean(schema, values, getRenderParams(schema, rootSchema, values, params))
}

/**
 *  @link https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.5
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformObject (schema, rootSchema, values, params) {
  /**
   *  log('transformObject')
   */

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

  const {
    properties = {},
    required = []
  } = schema

  const {
    uri = '#/'
  } = params

  params.fields = (
    Object
      .entries(properties)
      .map(mapTransformByKey(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, required })))
  )

  return renderObject(schema, values, getRenderParams(schema, rootSchema, values, params))
}

/**
 *  @link https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.4
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformArray (schema, rootSchema, values, params) {
  /**
   *  log('transformArray')
   */

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

  const {
    items = [] // array or object
  } = schema

  if (isArray(items)) {
    const {
      uri = '#/'
    } = params

    params.fields = (
      items.map(mapTransformByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri })))
    )

    return renderArray(schema, values, getRenderParams(schema, rootSchema, values, params))
  } else {
    if (isObject(items)) {
      const {
        uri = '#/'
      } = params

      params.fields = [
        getTransformByIndex(items, rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri }))
      ]

      return renderArray(schema, values, getRenderParams(schema, rootSchema, values, params))
    }
  }

  throw new Error('Invalid `array`')
}

/**
 *  @link https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.1
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNumber (schema, rootSchema, values, params) {
  /**
   *  log('transformNumber')
   */

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

  return renderNumber(schema, values, getRenderParams(schema, rootSchema, values, params))
}

/**
 *  @link https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.3
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformString (schema, rootSchema, values, params) {
  /**
   *  log('transformString')
   */

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

  return renderString(schema, values, getRenderParams(schema, rootSchema, values, params))
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getParamsByKeyForEnum (schema, rootSchema, values, params) {
  /**
   *  log('getParamsByKeyForAnyOf')
   */

  const {
    parentUri = '#',
    key = '',
    required = []
  } = params

  const isRequired = key ? required.includes(key) : false

  const uri = getUri(parentUri, key)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const meta = Object.assign(getMetaProps(params, uri), {
    schema,
    rootSchema,
    parentUri: normaliseUri(parentUri),
    uri,
    selectedItems,
    isRequired
  })
  const elements = {
    enum: Object.assign(getElementsFieldPropsForEnum(params, uri), {
      selectedItems,
      isRequired
    })
  }

  return Object.assign(params, {
    parentUri,
    uri,
    key,
    [uri]: {
      meta,
      elements
    }
  })
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getParamsByKeyForAnyOf (schema, rootSchema, values, params) {
  /**
   *  log('getParamsByKeyForAnyOf')
   */

  const {
    parentUri = '#',
    key = '',
    required = []
  } = params

  const isRequired = key ? required.includes(key) : false

  const uri = getUri(parentUri, key)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const meta = Object.assign(getMetaProps(params, uri), {
    schema,
    rootSchema,
    parentUri: normaliseUri(parentUri),
    uri,
    selectedItems,
    isRequired
  })
  const elements = {
    anyOf: Object.assign(getElementsFieldPropsForAnyOf(params, uri), {
      selectedItems,
      isRequired
    })
  }

  return Object.assign(params, {
    parentUri,
    uri,
    key,
    [uri]: {
      meta,
      elements
    }
  })
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getParamsByKeyForOneOf (schema, rootSchema, values, params) {
  /**
   *  log('getParamsByKeyForOneOf')
   */

  const {
    parentUri = '#',
    key = '',
    required = []
  } = params

  const isRequired = key ? required.includes(key) : false

  const uri = getUri(parentUri, key)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const meta = Object.assign(getMetaProps(params, uri), {
    schema,
    rootSchema,
    parentUri: normaliseUri(parentUri),
    uri,
    selectedItems,
    isRequired
  })
  const elements = {
    oneOf: Object.assign(getElementsFieldPropsForOneOf(params, uri), {
      selectedItems,
      isRequired
    })
  }

  return Object.assign(params, {
    parentUri,
    uri,
    key,
    [uri]: {
      meta,
      elements
    }
  })
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getParamsByKey (schema, rootSchema, values, params) {
  /**
   *  log('getParamsByKey')
   */

  const {
    parentUri = '#',
    key = '',
    required = []
  } = params

  const isRequired = key ? required.includes(key) : false

  const uri = getUri(parentUri, key)

  const meta = Object.assign(getMetaProps(params, uri), {
    schema,
    rootSchema,
    parentUri: normaliseUri(parentUri),
    uri,
    isRequired
  })
  const elements = {
    field: Object.assign(getElementsFieldPropsForAllOf(params, uri), {
      isRequired
    })
  }

  return Object.assign(params, {
    parentUri,
    uri,
    key,
    [uri]: {
      meta,
      elements
    }
  })
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getParamsByIndexForEnum (schema, rootSchema, values, params) {
  /**
   *  log('getParamsByIndexForEnum')
   */

  const {
    parentUri = '#',
    index = 0
  } = params

  const uri = getUri(parentUri, index)

  const {
    selectedItems = getSelectedItems(values, parentUri), // parent uri,
    ...metaProps
  } = getMetaProps(params, uri)

  const meta = Object.assign(metaProps, {
    schema,
    rootSchema,
    parentUri: normaliseUri(parentUri),
    uri,
    selectedItems
  })
  const elements = {
    enum: Object.assign(getElementsFieldPropsForEnum(params, uri), {
      selectedItems
    })
  }

  return Object.assign(params, {
    parentUri,
    uri,
    index,
    [uri]: {
      meta,
      elements
    }
  })
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getParamsByIndexForAnyOf (schema, rootSchema, values, params) {
  /**
   *  log('getParamsByIndexForAnyOf')
   */

  const {
    parentUri = '#',
    index = 0
  } = params

  const uri = getUri(parentUri, index)

  const {
    selectedItems = getSelectedItems(values, parentUri), // parent uri,
    ...metaProps
  } = getMetaProps(params, uri)

  const meta = Object.assign(metaProps, {
    schema,
    rootSchema,
    parentUri: normaliseUri(parentUri),
    uri,
    selectedItems
  })
  const elements = {
    anyOf: Object.assign(getElementsFieldPropsForAnyOf(params, uri), {
      selectedItems
    })
  }

  return Object.assign(params, {
    parentUri,
    uri,
    index,
    [uri]: {
      meta,
      elements
    }
  })
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getParamsByIndexForOneOf (schema, rootSchema, values, params) {
  /**
   *  log('getParamsByIndexForOneOf')
   */

  const {
    parentUri = '#',
    index = 0
  } = params

  const uri = getUri(parentUri, index)

  const {
    selectedItems = getSelectedItems(values, parentUri), // parent uri,
    ...metaProps
  } = getMetaProps(params, uri)

  const meta = Object.assign(metaProps, {
    schema,
    rootSchema,
    parentUri: normaliseUri(parentUri),
    uri,
    selectedItems
  })
  const elements = {
    oneOf: Object.assign(getElementsFieldPropsForOneOf(params, uri), {
      selectedItems
    })
  }

  return Object.assign(params, {
    parentUri,
    uri,
    index,
    [uri]: {
      meta,
      elements
    }
  })
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getParamsByIndex (schema, rootSchema, values, params) {
  /**
   *  log('getParamsByIndex')
   */

  const {
    parentUri = '#',
    index = 0
  } = params

  const uri = getUri(parentUri, index)

  const meta = Object.assign(getMetaProps(params, uri), {
    schema,
    rootSchema,
    parentUri: normaliseUri(parentUri),
    uri
  })

  return Object.assign(params, {
    parentUri,
    uri,
    index,
    [uri]: {
      meta,
      elements: getElementsProps(params, uri)
    }
  })
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformByKeyForEnum (schema, rootSchema, values, params) {
  /**
   *  log('transformByKeyForEnum')
   */

  const {
    type
  } = schema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  switch (type) {
    case 'null':
      return transformNullByKeyForEnum(schema, rootSchema, values, getParamsByKeyForEnum(schema, rootSchema, values, params))

    case 'boolean':
      return transformBooleanByKeyForEnum(schema, rootSchema, values, getParamsByKeyForEnum(schema, rootSchema, values, params))

    case 'object':
      return transformObjectByKeyForEnum(schema, rootSchema, values, getParamsByKeyForEnum(schema, rootSchema, values, params))

    case 'array':
      return transformArrayByKeyForEnum(schema, rootSchema, values, getParamsByKeyForEnum(schema, rootSchema, values, params))

    case 'number':
      return transformNumberByKeyForEnum(schema, rootSchema, values, getParamsByKeyForEnum(schema, rootSchema, values, params))

    case 'string':
      return transformStringByKeyForEnum(schema, rootSchema, values, getParamsByKeyForEnum(schema, rootSchema, values, params))

    default:
      throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
  }
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformByKeyForAnyOf (schema, rootSchema, values, params) {
  /**
   *  log('transformByKeyForAnyOf')
   */

  const {
    type
  } = schema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  switch (type) {
    case 'null':
      return transformNullByKeyForAnyOf(schema, rootSchema, values, getParamsByKeyForAnyOf(schema, rootSchema, values, params))

    case 'boolean':
      return transformBooleanByKeyForAnyOf(schema, rootSchema, values, getParamsByKeyForAnyOf(schema, rootSchema, values, params))

    case 'object':
      return transformObjectByKeyForAnyOf(schema, rootSchema, values, getParamsByKeyForAnyOf(schema, rootSchema, values, params))

    case 'array':
      return transformArrayByKeyForAnyOf(schema, rootSchema, values, getParamsByKeyForAnyOf(schema, rootSchema, values, params))

    case 'number':
      return transformNumberByKeyForAnyOf(schema, rootSchema, values, getParamsByKeyForAnyOf(schema, rootSchema, values, params))

    case 'string':
      return transformStringByKeyForAnyOf(schema, rootSchema, values, getParamsByKeyForAnyOf(schema, rootSchema, values, params))

    default:
      throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
  }
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformByKeyForOneOf (schema, rootSchema, values, params) {
  /**
   *  log('transformByKeyForOneOf')
   */

  const {
    type
  } = schema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  switch (type) {
    case 'null':
      return transformNullByKeyForOneOf(schema, rootSchema, values, getParamsByKeyForOneOf(schema, rootSchema, values, params))

    case 'boolean':
      return transformBooleanByKeyForOneOf(schema, rootSchema, values, getParamsByKeyForOneOf(schema, rootSchema, values, params))

    case 'object':
      return transformObjectByKeyForOneOf(schema, rootSchema, values, getParamsByKeyForOneOf(schema, rootSchema, values, params))

    case 'array':
      return transformArrayByKeyForOneOf(schema, rootSchema, values, getParamsByKeyForOneOf(schema, rootSchema, values, params))

    case 'number':
      return transformNumberByKeyForOneOf(schema, rootSchema, values, getParamsByKeyForOneOf(schema, rootSchema, values, params))

    case 'string':
      return transformStringByKeyForOneOf(schema, rootSchema, values, getParamsByKeyForOneOf(schema, rootSchema, values, params))

    default:
      throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
  }
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformByIndexForEnum (schema, rootSchema, values, params) {
  /**
   *  log('transformByIndexForEnum')
   */

  const {
    type
  } = schema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  switch (type) {
    case 'null':
      return transformNullByIndexForEnum(schema, rootSchema, values, getParamsByIndexForEnum(schema, rootSchema, values, params))

    case 'boolean':
      return transformBooleanByIndexForEnum(schema, rootSchema, values, getParamsByIndexForEnum(schema, rootSchema, values, params))

    case 'object':
      return transformObjectByIndexForEnum(schema, rootSchema, values, getParamsByIndexForEnum(schema, rootSchema, values, params))

    case 'array':
      return transformArrayByIndexForEnum(schema, rootSchema, values, getParamsByIndexForEnum(schema, rootSchema, values, params))

    case 'number':
      return transformNumberByIndexForEnum(schema, rootSchema, values, getParamsByIndexForEnum(schema, rootSchema, values, params))

    case 'string':
      return transformStringByIndexForEnum(schema, rootSchema, values, getParamsByIndexForEnum(schema, rootSchema, values, params))

    default:
      throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
  }
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformByIndexForAnyOf (schema, rootSchema, values, params) {
  /**
   *  log('transformByIndexForAnyOf')
   */

  const {
    type
  } = schema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  switch (type) {
    case 'null':
      return transformNullByIndexForAnyOf(schema, rootSchema, values, getParamsByIndexForAnyOf(schema, rootSchema, values, params))

    case 'boolean':
      return transformBooleanByIndexForAnyOf(schema, rootSchema, values, getParamsByIndexForAnyOf(schema, rootSchema, values, params))

    case 'object':
      return transformObjectByIndexForAnyOf(schema, rootSchema, values, getParamsByIndexForAnyOf(schema, rootSchema, values, params))

    case 'array':
      return transformArrayByIndexForAnyOf(schema, rootSchema, values, getParamsByIndexForAnyOf(schema, rootSchema, values, params))

    case 'number':
      return transformNumberByIndexForAnyOf(schema, rootSchema, values, getParamsByIndexForAnyOf(schema, rootSchema, values, params))

    case 'string':
      return transformStringByIndexForAnyOf(schema, rootSchema, values, getParamsByIndexForAnyOf(schema, rootSchema, values, params))

    default:
      throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
  }
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformByIndexForOneOf (schema, rootSchema, values, params) {
  /**
   *  log('transformByIndexForOneOf')
   */

  const {
    type
  } = schema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  switch (type) {
    case 'null':
      return transformNullByIndexForOneOf(schema, rootSchema, values, getParamsByIndexForOneOf(schema, rootSchema, values, params))

    case 'boolean':
      return transformBooleanByIndexForOneOf(schema, rootSchema, values, getParamsByIndexForOneOf(schema, rootSchema, values, params))

    case 'object':
      return transformObjectByIndexForOneOf(schema, rootSchema, values, getParamsByIndexForOneOf(schema, rootSchema, values, params))

    case 'array':
      return transformArrayByIndexForOneOf(schema, rootSchema, values, getParamsByIndexForOneOf(schema, rootSchema, values, params))

    case 'number':
      return transformNumberByIndexForOneOf(schema, rootSchema, values, getParamsByIndexForOneOf(schema, rootSchema, values, params))

    case 'string':
      return transformStringByIndexForOneOf(schema, rootSchema, values, getParamsByIndexForOneOf(schema, rootSchema, values, params))

    default:
      throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
  }
}

/**
 *  @param {SchemaType} [schema]
 *  @param {SchemaType} [rootSchema]
 *  @param {ValuesType} [values]
 *  @param {ParamsType} [params]
 *  @returns {ZashikiType}
 */
export function transformByKey (schema = {}, rootSchema = schema, values = {}, params = {}) {
  /**
   *  log('transformByKey')
   */

  const {
    type
  } = schema

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

/**
 *  @param {SchemaType} [schema]
 *  @param {SchemaType} [rootSchema]
 *  @param {ValuesType} [values]
 *  @param {ParamsType} [params]
 *  @returns {ZashikiType}
 */
export function transformByIndex (schema = {}, rootSchema = schema, values = {}, params = {}) {
  /**
   *  log('transformByIndex')
   */

  const {
    type
  } = schema

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

/**
 *  @param {SchemaType} [schema]
 *  @param {SchemaType} [rootSchema]
 *  @param {ValuesType} [values]
 *  @param {ParamsType} [params]
 *  @returns {ZashikiType}
 */
export default function toZashiki (schema = {}, rootSchema = {}, values = {}, params = {}) {
  log('toZashiki')

  const {
    type
  } = schema

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
