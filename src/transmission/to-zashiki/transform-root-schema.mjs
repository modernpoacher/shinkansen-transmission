import debug from 'debug'

import {
  isArray,
  isObject,

  getSelectedItems,

  hasEnum,
  getEnum,
  hasAnyOf,
  hasOneOf,
  hasAllOf,

  normaliseUri,

  getMetaProps,

  getElementsProps,
  getElementsFieldPropsForEnum,
  getElementsFieldPropsForAnyOf,
  getElementsFieldPropsForOneOf,
  getElementsFieldPropsForAllOf
} from 'shinkansen-transmission/transmission/common'

import {
  mapTransformStringByIndex,
  mapTransformNumberByIndex,
  mapTransformBooleanByIndex,
  mapTransformNullByIndex,
  mapTransformArrayByIndex,
  mapTransformObjectByIndex,

  mapTransformByIndex,
  getTransformByIndex,

  mapTransformByKey,

  renderNullForEnum,
  renderNullForAnyOf,
  renderNullForOneOf,
  renderNullForAllOf,
  renderNull,

  renderBooleanForEnum,
  renderBooleanForAnyOf,
  renderBooleanForOneOf,
  renderBooleanForAllOf,
  renderBoolean,

  renderObjectForEnum,
  renderObjectForAnyOf,
  renderObjectForOneOf,
  renderObjectForAllOf,
  renderObject,

  renderArrayForEnum,
  renderArrayForAnyOf,
  renderArrayForOneOf,
  renderArrayForAllOf,
  renderArray,

  renderNumberForEnum,
  renderNumberForAnyOf,
  renderNumberForOneOf,
  renderNumberForAllOf,
  renderNumber,

  renderStringForEnum,
  renderStringForAnyOf,
  renderStringForOneOf,
  renderStringForAllOf,
  renderString
} from './transform-schema.mjs'

const log = debug('shinkansen-transmission/to-zashiki:root-schema')

log('`shinkansen` is awake')

export function getRenderParamsForEnum (rootSchema, values, params) {
  /*
   *  log('getRenderParamsForEnum')
   */

  const {
    parentUri = '#',
    uri = '#/',
    selectedItems = [],
    items = []
  } = params

  const meta = Object.assign(getMetaProps(params, uri), {
    schema: rootSchema,
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

export function getRenderParamsForAnyOf (rootSchema, values, params) {
  /*
   *  log('getRenderParamsForAnyOf')
   */

  const {
    parentUri = '#',
    uri = '#/',
    selectedItems = [],
    items = []
  } = params

  const meta = Object.assign(getMetaProps(params, uri), {
    schema: rootSchema,
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

export function getRenderParamsForOneOf (rootSchema, values, params) {
  /*
   *  log('getRenderParamsForOneOf')
   */

  const {
    parentUri = '#',
    uri = '#/',
    selectedItems = [],
    items = []
  } = params

  const meta = Object.assign(getMetaProps(params, uri), {
    schema: rootSchema,
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

export function getRenderParamsForAllOf (rootSchema, values, params) {
  /*
   *  log('getRenderParamsForAllOf')
   */

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const meta = Object.assign(getMetaProps(params, uri), {
    schema: rootSchema
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

export function getRenderParams (rootSchema, values, params) {
  /*
   *  log('getRenderParams')
   */

  const {
    parentUri = '#',
    uri = '#/',
    fields = []
  } = params

  const meta = Object.assign(getMetaProps(params, uri), {
    schema: rootSchema,
    parentUri: normaliseUri(parentUri),
    uri
  })

  const elements = Object.assign(getElementsProps(params, uri), {
    fields
  })

  return Object.assign(params, {
    parentUri,
    uri,
    [uri]: {
      meta,
      elements
    }
  })
}

/*
 *  Root schema
 *
 *  "enum"
 */
export function transformNullForEnum (rootSchema, values, params) {
  /*
   *  log('transformNullForEnum')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const items = getEnum(rootSchema)

  return renderNullForEnum(rootSchema, values, getRenderParamsForEnum(rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  Root schema
 *
 *  "anyOf"
 */
export function transformNullForAnyOf (rootSchema, values, params) {
  /*
   *  log('transformNullForAnyOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { anyOf = [] } = rootSchema
  const items = anyOf.map(mapTransformNullByIndex(rootSchema, values, Object.assign(params, { selectedItems, parentUri: uri })))

  return renderNullForAnyOf(rootSchema, values, getRenderParamsForAnyOf(rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  Root schema
 *
 *  "oneOf"
 */
export function transformNullForOneOf (rootSchema, values, params) {
  /*
   *  log('transformNullForOneOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { oneOf = [] } = rootSchema
  const items = oneOf.map(mapTransformNullByIndex(rootSchema, values, Object.assign(params, { selectedItems, parentUri: uri })))

  return renderNullForOneOf(rootSchema, values, getRenderParamsForOneOf(rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  Root schema
 *
 *  "allOf"
 */
export function transformNullForAllOf (rootSchema, values, params) {
  /*
   *  log('transformNullForAllOf')
   */

  const { allOf = [], ...rest } = rootSchema
  const itemSchema = allOf.reduce((accumulator, schema) => Object.assign(accumulator, schema), rest) // initialise with `rest`

  return renderNullForAllOf(itemSchema, values, getRenderParamsForAllOf(rootSchema, values, params))
}

/*
 *  Root schema
 */
// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
export function transformNull (rootSchema, values, params) {
  /*
   *  log('transformNull')
   */

  if (hasEnum(rootSchema)) {
    return transformNullForEnum(rootSchema, values, params)
  } else {
    if (hasAnyOf(rootSchema)) {
      return transformNullForAnyOf(rootSchema, values, params)
    } else {
      if (hasOneOf(rootSchema)) {
        return transformNullForOneOf(rootSchema, values, params)
      } else {
        if (hasAllOf(rootSchema)) {
          return transformNullForAllOf(rootSchema, values, params)
        }
      }
    }
  }

  return renderNull(rootSchema, values, getRenderParams(rootSchema, values, params))
}

/*
 *  Root schema
 *
 *  "enum"
 */
export function transformBooleanForEnum (rootSchema, values, params) {
  /*
   *  log('transformBooleanForEnum')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const items = getEnum(rootSchema)

  return renderBooleanForEnum(rootSchema, values, getRenderParamsForEnum(rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  Root schema
 *
 *  "anyOf"
 */
export function transformBooleanForAnyOf (rootSchema, values, params) {
  /*
   *  log('transformBooleanForAnyOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { anyOf = [] } = rootSchema
  const items = anyOf.map(mapTransformBooleanByIndex(rootSchema, values, Object.assign(params, { selectedItems, parentUri: uri })))

  return renderBooleanForAnyOf(rootSchema, values, getRenderParamsForAnyOf(rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  Root schema
 *
 *  "oneOf"
 */
export function transformBooleanForOneOf (rootSchema, values, params) {
  /*
   *  log('transformBooleanForOneOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { oneOf = [] } = rootSchema
  const items = oneOf.map(mapTransformBooleanByIndex(rootSchema, values, Object.assign(params, { selectedItems, parentUri: uri })))

  return renderBooleanForOneOf(rootSchema, values, getRenderParamsForOneOf(rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  Root schema
 *
 *  "allOf"
 */
export function transformBooleanForAllOf (rootSchema, values, params) {
  /*
   *  log('transformBooleanForAllOf')
   */

  const { allOf = [], ...rest } = rootSchema
  const itemSchema = allOf.reduce((accumulator, schema) => Object.assign(accumulator, schema), rest) // initialise with `rest`

  return renderBooleanForAllOf(itemSchema, values, getRenderParamsForAllOf(rootSchema, values, params))
}

/*
 *  Root schema
 */
// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
export function transformBoolean (rootSchema, values, params) {
  /*
   *  log('transformBoolean')
   */

  if (hasEnum(rootSchema)) {
    return transformBooleanForEnum(rootSchema, values, params)
  } else {
    if (hasAnyOf(rootSchema)) {
      return transformBooleanForAnyOf(rootSchema, values, params)
    } else {
      if (hasOneOf(rootSchema)) {
        return transformBooleanForOneOf(rootSchema, values, params)
      } else {
        if (hasAllOf(rootSchema)) {
          return transformBooleanForAllOf(rootSchema, values, params)
        }
      }
    }
  }

  return renderBoolean(rootSchema, values, getRenderParams(rootSchema, values, params))
}

/*
 *  Root schema
 *
 *  "enum"
 */
export function transformObjectForEnum (rootSchema, values, params) {
  /*
   *  log('renderObjectForEnum')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const items = getEnum(rootSchema)

  return renderObjectForEnum(rootSchema, values, getRenderParamsForEnum(rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  Root schema
 *
 *  "anyOf"
 */
export function transformObjectForAnyOf (rootSchema, values, params) {
  /*
   *  log('transformObjectForAnyOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { anyOf = [] } = rootSchema
  const items = anyOf.map(mapTransformObjectByIndex(rootSchema, values, Object.assign(params, { selectedItems, parentUri: uri })))

  return renderObjectForAnyOf(rootSchema, values, getRenderParamsForAnyOf(rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  Root schema
 *
 *  "oneOf"
 */
export function transformObjectForOneOf (rootSchema, values, params) {
  /*
   *  log('transformObjectForOneOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { oneOf = [] } = rootSchema
  const items = oneOf.map(mapTransformObjectByIndex(rootSchema, values, Object.assign(params, { selectedItems, parentUri: uri })))

  return renderObjectForOneOf(rootSchema, values, getRenderParamsForOneOf(rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  Root schema
 *
 *  "allOf"
 */
export function transformObjectForAllOf (rootSchema, values, params) {
  /*
   *  log('transformObjectForAllOf')
   */

  const { allOf = [], ...rest } = rootSchema
  const itemSchema = allOf.reduce((accumulator, schema) => Object.assign(accumulator, schema), rest) // initialise with `rest`

  return renderObjectForAllOf(itemSchema, values, getRenderParamsForAllOf(rootSchema, values, params))
}

/*
 *  Root schema
 */
// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.5
export function transformObject (rootSchema, values, params) {
  /*
   *  log('transformObject')
   */

  if (hasEnum(rootSchema)) {
    return transformObjectForEnum(rootSchema, values, params)
  } else {
    if (hasAnyOf(rootSchema)) {
      return transformObjectForAnyOf(rootSchema, values, params)
    } else {
      if (hasOneOf(rootSchema)) {
        return transformObjectForOneOf(rootSchema, values, params)
      } else {
        if (hasAllOf(rootSchema)) {
          return transformObjectForAllOf(rootSchema, values, params)
        }
      }
    }
  }

  const {
    properties = {},
    required = []
  } = rootSchema

  const {
    uri = '#/'
  } = params

  const fields = (
    Object
      .entries(properties)
      .map(mapTransformByKey(rootSchema, values, Object.assign(params, { parentUri: uri, required })))
  )

  return renderObject(rootSchema, values, getRenderParams(rootSchema, values, Object.assign(params, { fields })))
}

/*
 *  Root schema
 *
 *  "enum"
 */
export function transformArrayForEnum (rootSchema, values, params) {
  /*
   *  log('renderArrayForEnum')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const items = getEnum(rootSchema)

  return renderArrayForEnum(rootSchema, values, getRenderParamsForEnum(rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  Root schema
 *
 *  "anyOf"
 */
export function transformArrayForAnyOf (rootSchema, values, params) {
  /*
   *  log('transformArrayForAnyOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { anyOf = [] } = rootSchema
  const items = anyOf.map(mapTransformArrayByIndex(rootSchema, values, Object.assign(params, { selectedItems, parentUri: uri })))

  return renderArrayForAnyOf(rootSchema, values, getRenderParamsForAnyOf(rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  Root schema
 *
 *  "oneOf"
 */
export function transformArrayForOneOf (rootSchema, values, params) {
  /*
   *  log('transformArrayForOneOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { oneOf = [] } = rootSchema
  const items = oneOf.map(mapTransformArrayByIndex(rootSchema, values, Object.assign(params, { selectedItems, parentUri: uri })))

  return renderArrayForOneOf(rootSchema, values, getRenderParamsForOneOf(rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  Root schema
 *
 *  "allOf"
 */
export function transformArrayForAllOf (rootSchema, values, params) {
  /*
   *  log('transformArrayForAllOf')
   */

  const { allOf = [], ...rest } = rootSchema
  const itemSchema = allOf.reduce((accumulator, schema) => Object.assign(accumulator, schema), rest) // initialise with `rest`

  return renderArrayForAllOf(itemSchema, values, getRenderParamsForAllOf(rootSchema, values, params))
}

/*
 *  Root schema
 */
// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.4
export function transformArray (rootSchema, values, params) {
  /*
   *  log('transformArray')
   */

  if (hasEnum(rootSchema)) {
    return transformArrayForEnum(rootSchema, values, params)
  } else {
    if (hasAnyOf(rootSchema)) {
      return transformArrayForAnyOf(rootSchema, values, params)
    } else {
      if (hasOneOf(rootSchema)) {
        return transformArrayForOneOf(rootSchema, values, params)
      } else {
        if (hasAllOf(rootSchema)) {
          return transformArrayForAllOf(rootSchema, values, params)
        }
      }
    }
  }

  const {
    items = [] // array or object
  } = rootSchema

  if (isArray(items)) {
    const fields = (
      items.map(mapTransformByIndex(rootSchema, values, Object.assign(params, { parentUri: '#/' })))
    )

    return renderArray(rootSchema, values, getRenderParams(rootSchema, values, Object.assign(params, { fields })))
  } else {
    if (isObject(items)) {
      const fields = [
        getTransformByIndex(items, rootSchema, values, Object.assign(params, { parentUri: '#/' }))
      ]

      return renderArray(rootSchema, values, getRenderParams(rootSchema, values, Object.assign(params, { fields })))
    }
  }
}

/*
 *  Root schema
 *
 *  "enum"
 */
export function transformNumberForEnum (rootSchema, values, params) {
  /*
   *  log('transformNumberForEnum')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const items = getEnum(rootSchema)

  return renderNumberForEnum(rootSchema, values, getRenderParamsForEnum(rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  Root schema
 *
 *  "anyOf"
 */
export function transformNumberForAnyOf (rootSchema, values, params) {
  /*
   *  log('transformNumberForAnyOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { anyOf = [] } = rootSchema
  const items = anyOf.map(mapTransformNumberByIndex(rootSchema, values, Object.assign(params, { selectedItems, parentUri: uri })))

  return renderNumberForAnyOf(rootSchema, values, getRenderParamsForAnyOf(rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  Root schema
 *
 *  "oneOf"
 */
export function transformNumberForOneOf (rootSchema, values, params) {
  /*
   *  log('transformNumberForOneOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { oneOf = [] } = rootSchema
  const items = oneOf.map(mapTransformNumberByIndex(rootSchema, values, Object.assign(params, { selectedItems, parentUri: uri })))

  return renderNumberForOneOf(rootSchema, values, getRenderParamsForOneOf(rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  Root schema
 *
 *  "allOf"
 */
export function transformNumberForAllOf (rootSchema, values, params) {
  /*
   *  log('transformNumberForAllOf')
   */

  const { allOf = [], ...rest } = rootSchema
  const itemSchema = allOf.reduce((accumulator, schema) => Object.assign(accumulator, schema), rest) // initialise with `rest`

  return renderNumberForAllOf(itemSchema, values, getRenderParamsForAllOf(rootSchema, values, params))
}

/*
 *  Root schema
 */
// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.1
export function transformNumber (rootSchema, values, params) {
  /*
   *  log('transformNumber')
   */

  if (hasEnum(rootSchema)) {
    return transformNumberForEnum(rootSchema, values, params)
  } else {
    if (hasAnyOf(rootSchema)) {
      return transformNumberForAnyOf(rootSchema, values, params)
    } else {
      if (hasOneOf(rootSchema)) {
        return transformNumberForOneOf(rootSchema, values, params)
      } else {
        if (hasAllOf(rootSchema)) {
          return transformNumberForAllOf(rootSchema, values, params)
        }
      }
    }
  }

  return renderNumber(rootSchema, values, getRenderParams(rootSchema, values, params))
}

/*
 *  Root schema
 *
 *  "enum"
 */
export function transformStringForEnum (rootSchema, values, params) {
  /*
   *  log('transformStringForEnum')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const items = getEnum(rootSchema)

  return renderStringForEnum(rootSchema, values, getRenderParamsForEnum(rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  Root schema
 *
 *  "anyOf"
 */
export function transformStringForAnyOf (rootSchema, values, params) {
  /*
   *  log('transformStringForAnyOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { anyOf = [] } = rootSchema
  const items = anyOf.map(mapTransformStringByIndex(rootSchema, values, Object.assign(params, { selectedItems, parentUri: uri })))

  return renderStringForAnyOf(rootSchema, values, getRenderParamsForAnyOf(rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  Root schema
 *
 *  "oneOf"
 */
export function transformStringForOneOf (rootSchema, values, params) {
  /*
   *  log('transformStringForOneOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { oneOf = [] } = rootSchema
  const items = oneOf.map(mapTransformStringByIndex(rootSchema, values, Object.assign(params, { selectedItems, parentUri: uri })))

  return renderStringForOneOf(rootSchema, values, getRenderParamsForOneOf(rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  Root schema
 *
 *  "allOf"
 */
export function transformStringForAllOf (rootSchema, values, params) {
  /*
   *  log('transformStringForAllOf')
   */

  const { allOf = [], ...rest } = rootSchema
  const itemSchema = allOf.reduce((accumulator, schema) => Object.assign(accumulator, schema), rest) // initialise with `rest`

  return renderStringForAllOf(itemSchema, values, getRenderParamsForAllOf(rootSchema, values, params))
}

/*
 *  Root schema
 */
// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.3
export function transformString (rootSchema, values, params) {
  /*
   *  log('transformString')
   */

  if (hasEnum(rootSchema)) {
    return transformStringForEnum(rootSchema, values, params)
  } else {
    if (hasAnyOf(rootSchema)) {
      return transformStringForAnyOf(rootSchema, values, params)
    } else {
      if (hasOneOf(rootSchema)) {
        return transformStringForOneOf(rootSchema, values, params)
      } else {
        if (hasAllOf(rootSchema)) {
          return transformStringForAllOf(rootSchema, values, params)
        }
      }
    }
  }

  return renderString(rootSchema, values, getRenderParams(rootSchema, values, params))
}

export default function toZashiki (rootSchema = {}, values = {}, params = {}) {
  log('toZashiki')

  const { type } = rootSchema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  switch (type) {
    case 'null':
      return transformNull(rootSchema, values, params)

    case 'boolean':
      return transformBoolean(rootSchema, values, params)

    case 'object':
      return transformObject(rootSchema, values, params)

    case 'array':
      return transformArray(rootSchema, values, params)

    case 'number':
      return transformNumber(rootSchema, values, params)

    case 'string':
      return transformString(rootSchema, values, params)

    default:
      throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
  }
}
