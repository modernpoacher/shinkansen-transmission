import debug from 'debug'

import {
  isArray,
  isObject,

  isPrimitive,

  isArraySchema,
  isObjectSchema,

  getSelectedItems,

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
  getElementsFieldPropsForEnum,
  getElementsFieldPropsForAnyOf,
  getElementsFieldPropsForOneOf,
  getElementsFieldPropsForAllOf,
  getElementsFieldProps,
  getElementsFieldValue
} from 'shinkansen-transmission/transmission/common'

const log = debug('shinkansen-transmission:to-zashiki:schema')

log('`shinkansen-transmission` is awake')

export function mapTransformNullByIndex (rootSchema, values, params) {
  /*
   *  log('mapTransformNullByIndex')
   */

  return function map (schema, index) {
    return transformNullByIndex(schema, rootSchema, values, Object.assign(params, { index }))
  }
}

export function mapTransformBooleanByIndex (rootSchema, values, params) {
  /*
   *  log('mapTransformBooleanByIndex')
   */

  return function map (schema, index) {
    return transformBooleanByIndex(schema, rootSchema, values, Object.assign(params, { index }))
  }
}

export function mapTransformObjectByIndex (rootSchema, values, params) {
  /*
   *  log('mapTransformObjectByIndex')
   */

  return function map (schema, index) {
    return transformObjectByIndex(schema, rootSchema, values, Object.assign(params, { index }))
  }
}

export function mapTransformArrayByIndex (rootSchema, values, params) {
  /*
   *  log('mapTransformArrayByIndex')
   */

  return function map (schema, index) {
    return transformArrayByIndex(schema, rootSchema, values, Object.assign(params, { index }))
  }
}

export function mapTransformNumberByIndex (rootSchema, values, params) {
  /*
   *  log('mapTransformNumberByIndex')
   */

  return function map (schema, index) {
    return transformNumberByIndex(schema, rootSchema, values, Object.assign(params, { index }))
  }
}

export function mapTransformStringByIndex (rootSchema, values, params) {
  /*
   *  log('mapTransformStringByIndex')
   */

  return function map (schema, index) {
    return transformStringByIndex(schema, rootSchema, values, Object.assign(params, { index }))
  }
}

export function mapTransformByIndex (rootSchema, values, params) {
  /*
   *  log('mapTransformByIndex')
   */

  return function map (schema, index) {
    return getTransformByIndex(schema, rootSchema, values, Object.assign(params, { index }))
  }
}

export function mapTransformByKey (rootSchema, values, { required = [], ...params }) {
  /*
   *  log('mapTransformByKey')
   */

  return function map ([key, schema]) {
    return getTransformByKey(schema, rootSchema, values, Object.assign(params, { isRequired: required.includes(key), key }))
  }
}

function renderNullMetaForEnum (params, uri) {
  /*
   *  log('renderNullMetaForEnum')
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

function renderNullMetaForAnyOf (params, uri) {
  /*
   *  log('renderNullMetaForAnyOf')
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

function renderNullMetaForOneOf (params, uri) {
  /*
   *  log('renderNullMetaForOneOf')
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

function renderNullMetaForAllOf (schema, values, params, uri) {
  /*
   *  log('renderNullMetaForAllOf')
   */

  const metaDefaultValue = getMetaDefaultValue(schema, uri)
  const metaValue = getMetaValue(values, uri, schema)
  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

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

  return (
    Object.assign(
      {
        uri,
        type: 'null'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      metaDefaultValue,
      metaValue,
      metaProps,
      isArray(selectedItems) ? { selectedItems } : {}
    )
  )
}

function renderNullMeta (schema, values, params, uri) {
  /*
   *  log('renderNullMeta')
   */

  const metaDefaultValue = getMetaDefaultValue(schema, uri)
  const metaValue = getMetaValue(values, uri, schema)
  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

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

  return (
    Object.assign(
      {
        uri,
        type: 'null'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      metaDefaultValue,
      metaValue,
      metaProps,
      isArray(selectedItems) ? { selectedItems } : {}
    )
  )
}

function getNullElementsFieldForEnum (field, params, uri) {
  /*
   *  log('getNullElementsFieldForEnum')
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

function getNullElementsFieldForOneOf (field, params, uri) {
  /*
   *  log('getNullElementsFieldForOneOf')
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

function getNullElementsFieldForAnyOf (field, params, uri) {
  /*
   *  log('getNullElementsFieldForAnyOf')
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

function getNullElementsFieldForAllOf (field, schema, values, params, uri) {
  /*
   *  log('getNullElementsFieldForAllOf')
   */

  const {
    parentUri = '#'
  } = params

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

  return (
    Object.assign(
      field,
      fieldValue,
      fieldProps,
      isArray(selectedItems) ? { selectedItems } : {},
      {
        id: uri
      }
    )
  )
}

function getNullElementsField (field, schema, values, params, uri) {
  /*
   *  log('getNullElementsField')
   */

  const {
    parentUri = '#'
  } = params

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

  return (
    Object.assign(
      field,
      fieldValue,
      fieldProps,
      isArray(selectedItems) ? { selectedItems } : {},
      {
        id: uri
      }
    )
  )
}

function getNullElements (elements, schema) {
  /*
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

function renderNullElementsForEnum (schema, params, uri) {
  /*
   *  log('renderNullElementsForEnum')
   */

  const elements = {}
  const field = {}

  return (
    Object.assign(
      getNullElements(elements, schema),
      {
        enum: getNullElementsFieldForEnum(field, params, uri)
      }
    )
  )
}

function renderNullElementsForOneOf (schema, params, uri) {
  /*
   *  log('renderNullElementsForOneOf')
   */

  const elements = {}
  const field = {}

  return (
    Object.assign(
      getNullElements(elements, schema),
      {
        oneOf: getNullElementsFieldForOneOf(field, params, uri)
      }
    )
  )
}

function renderNullElementsForAnyOf (schema, params, uri) {
  /*
   *  log('renderNullElementsForAnyOf')
   */

  const elements = {}
  const field = {}

  return (
    Object.assign(
      getNullElements(elements, schema),
      {
        anyOf: getNullElementsFieldForAnyOf(field, params, uri)
      }
    )
  )
}

function renderNullElementsForAllOf (schema, values, params, uri) {
  /*
   *  log('renderNullElementsForAllOf')
   */

  const elements = {}
  const field = {}

  return (
    Object.assign(
      getNullElements(elements, schema),
      {
        field: getNullElementsFieldForAllOf(field, schema, values, params, uri)
      }
    )
  )
}

function renderNullElements (schema, values, params, uri) {
  /*
   *  log('renderNullElements')
   */

  const elements = {}
  const field = {}

  return (
    Object.assign(
      getNullElements(elements, schema),
      {
        field: getNullElementsField(field, schema, values, params, uri)
      }
    )
  )
}

function renderBooleanMetaForEnum (params, uri) {
  /*
   *  log('renderBooleanMetaForEnum')
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

function renderBooleanMetaForAnyOf (params, uri) {
  /*
   *  log('renderBooleanMetaForAnyOf')
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

function renderBooleanMetaForOneOf (params, uri) {
  /*
   *  log('renderBooleanMetaForOneOf')
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

function renderBooleanMetaForAllOf (schema, values, params, uri) {
  /*
   *  log('renderBooleanMetaForAllOf')
   */

  const metaDefaultValue = getMetaDefaultValue(schema, uri)
  const metaValue = getMetaValue(values, uri, schema)
  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

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

  return (
    Object.assign(
      {
        uri,
        type: 'boolean'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      metaDefaultValue,
      metaValue,
      metaProps,
      isArray(selectedItems) ? { selectedItems } : {}
    )
  )
}

function renderBooleanMeta (schema, values, params, uri) {
  /*
   *  log('renderBooleanMeta')
   */

  const metaDefaultValue = getMetaDefaultValue(schema, uri)
  const metaValue = getMetaValue(values, uri, schema)
  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

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

  return (
    Object.assign(
      {
        uri,
        type: 'boolean'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      metaDefaultValue,
      metaValue,
      metaProps,
      isArray(selectedItems) ? { selectedItems } : {}
    )
  )
}

function getBooleanElementsFieldForEnum (field, params, uri) {
  /*
   *  log('getBooleanElementsFieldForEnum')
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

function getBooleanElementsFieldForAnyOf (field, params, uri) {
  /*
   *  log('getBooleanElementsFieldForAnyOf')
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

function getBooleanElementsFieldForOneOf (field, params, uri) {
  /*
   *  log('getBooleanElementsFieldForOneOf')
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

function getBooleanElementsFieldForAllOf (field, schema, values, params, uri) {
  /*
   *  log('getBooleanElementsFieldForAllOf')
   */

  const {
    parentUri = '#'
  } = params

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

  return (
    Object.assign(
      field,
      fieldValue,
      fieldProps,
      isArray(selectedItems) ? { selectedItems } : {},
      {
        id: uri
      }
    )
  )
}

function getBooleanElementsField (field, schema, values, params, uri) {
  /*
   *  log('getBooleanElementsField')
   */

  const {
    parentUri = '#'
  } = params

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

  return (
    Object.assign(
      field,
      fieldValue,
      fieldProps,
      isArray(selectedItems) ? { selectedItems } : {},
      {
        id: uri
      }
    )
  )
}

function getBooleanElements (elements, schema) {
  /*
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

function renderBooleanElementsForEnum (schema, params, uri) {
  /*
   *  log('renderBooleanElementsForEnum')
   */

  const elements = {}
  const field = {}

  return (
    Object.assign(
      getBooleanElements(elements, schema),
      {
        enum: getBooleanElementsFieldForEnum(field, params, uri)
      }
    )
  )
}

function renderBooleanElementsForAnyOf (schema, params, uri) {
  /*
   *  log('renderBooleanElementsForAnyOf')
   */

  const elements = {}
  const field = {}

  return (
    Object.assign(
      getBooleanElements(elements, schema),
      {
        anyOf: getBooleanElementsFieldForAnyOf(field, params, uri)
      }
    )
  )
}

function renderBooleanElementsForOneOf (schema, params, uri) {
  /*
   *  log('renderBooleanElementsForOneOf')
   */

  const elements = {}
  const field = {}

  return (
    Object.assign(
      getBooleanElements(elements, schema),
      {
        oneOf: getBooleanElementsFieldForOneOf(field, params, uri)
      }
    )
  )
}

function renderBooleanElementsForAllOf (schema, values, params, uri) {
  /*
   *  log('renderBooleanElementsForAllOf')
   */

  const elements = {}
  const field = {}

  return (
    Object.assign(
      getBooleanElements(elements, schema),
      {
        field: getBooleanElementsFieldForAllOf(field, schema, values, params, uri)
      }
    )
  )
}

function renderBooleanElements (schema, values, params, uri) {
  /*
   *  log('renderBooleanElements')
   */

  const elements = {}
  const field = {}

  return (
    Object.assign(
      getBooleanElements(elements, schema),
      {
        field: getBooleanElementsField(field, schema, values, params, uri)
      }
    )
  )
}

function renderObjectMetaForEnum (params, uri, minProperties, maxProperties) {
  /*
   *  log('renderObjectMetaForEnum')
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

function renderObjectMetaForAnyOf (params, uri, minProperties, maxProperties) {
  /*
   *  log('renderObjectMetaForAnyOf')
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

function renderObjectMetaForOneOf (params, uri, minProperties, maxProperties) {
  /*
   *  log('renderObjectMetaForOneOf')
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

function renderObjectMetaForAllOf (params, uri, minProperties, maxProperties) {
  /*
   *  log('renderObjectMetaForAllOf')
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

function renderObjectMeta (params, uri, minProperties, maxProperties) {
  /*
   *  log('renderObjectMeta')
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

function getObjectElementsFieldForEnum (field, params, uri, minProperties, maxProperties) {
  /*
   *  log('getObjectElementsFieldForEnum')
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

function getObjectElementsFieldForAnyOf (field, params, uri, minProperties, maxProperties) {
  /*
   *  log('getObjectElementsFieldForAnyOf')
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

function getObjectElementsFieldForOneOf (field, params, uri, minProperties, maxProperties) {
  /*
   *  log('getObjectElementsFieldForOneOf')
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

function getObjectElementsFieldForAllOf (field, params, uri, minProperties, maxProperties) {
  /*
   *  log('getObjectElementsFieldForAllOf')
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

function getObjectElements (elements, schema) {
  /*
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

function renderObjectElementsForEnum (schema, params, uri, minProperties, maxProperties) {
  /*
   *  log('renderObjectElementsForEnum')
   */

  const elements = {}
  const field = {}

  return (
    Object.assign(
      getObjectElements(elements, schema),
      {
        enum: getObjectElementsFieldForEnum(field, params, uri, minProperties, maxProperties)
      }
    )
  )
}

function renderObjectElementsForAnyOf (schema, params, uri, minProperties, maxProperties) {
  /*
   *  log('renderObjectElementsForAnyOf')
   */

  const elements = {}
  const field = {}

  return (
    Object.assign(
      getObjectElements(elements, schema),
      {
        anyOf: getObjectElementsFieldForAnyOf(field, params, uri, minProperties, maxProperties)
      }
    )
  )
}

function renderObjectElementsForOneOf (schema, params, uri, minProperties, maxProperties) {
  /*
   *  log('renderObjectElementsForOneOf')
   */

  const elements = {}
  const field = {}

  return (
    Object.assign(
      getObjectElements(elements, schema),
      {
        oneOf: getObjectElementsFieldForOneOf(field, params, uri, minProperties, maxProperties)
      }
    )
  )
}

function renderObjectElementsForAllOf (schema, params, uri, minProperties, maxProperties) {
  /*
   *  log('renderObjectElementsForAllOf')
   */

  const elements = {}
  const field = {}

  return (
    Object.assign(
      getObjectElements(elements, schema),
      {
        field: getObjectElementsFieldForAllOf(field, params, uri, minProperties, maxProperties)
      }
    )
  )
}

function renderObjectElements (schema, params) {
  /*
   *  log('renderObjectElements')
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

function renderArrayMetaForEnum (params, uri, minItems, maxItems, hasUniqueItems, maxContains, minContains) {
  /*
   *  log('renderArrayMetaForEnum')
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
      maxContains,
      minContains,
      metaProps
    )
  )
}

function renderArrayMetaForAnyOf (params, uri, minItems, maxItems, hasUniqueItems, maxContains, minContains) {
  /*
   *  log('renderArrayMetaForAnyOf')
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
      maxContains,
      minContains,
      metaProps
    )
  )
}

function renderArrayMetaForOneOf (params, uri, minItems, maxItems, hasUniqueItems, maxContains, minContains) {
  /*
   *  log('renderArrayMetaForOneOf')
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
      maxContains,
      minContains,
      metaProps
    )
  )
}

function renderArrayMetaForAllOf (params, uri, minItems, maxItems, hasUniqueItems, maxContains, minContains) {
  /*
   *  log('renderArrayMetaForAllOf')
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
      maxContains,
      minContains,
      metaProps
    )
  )
}

function renderArrayMeta (params, uri, minItems, maxItems, hasUniqueItems, maxContains, minContains) {
  /*
   *  log('renderArrayMeta')
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
      maxContains,
      minContains,
      metaProps
    )
  )
}

function getArrayElementsFieldForEnum (field, params, uri, minItems, maxItems, hasUniqueItems, maxContains, minContains) {
  /*
   *  log('getArrayElementsFieldForEnum')
   */

  const fieldProps = getElementsFieldPropsForEnum(params, uri)

  return (
    Object.assign(
      field,
      minItems,
      maxItems,
      hasUniqueItems,
      maxContains,
      minContains,
      fieldProps,
      {
        id: uri
      }
    )
  )
}

function getArrayElementsFieldForAnyOf (field, params, uri, minItems, maxItems, hasUniqueItems, maxContains, minContains) {
  /*
   *  log('getArrayElementsFieldForAnyOf')
   */

  const fieldProps = getElementsFieldPropsForAnyOf(params, uri)

  return (
    Object.assign(
      field,
      minItems,
      maxItems,
      hasUniqueItems,
      maxContains,
      minContains,
      fieldProps,
      {
        id: uri
      }
    )
  )
}

function getArrayElementsFieldForOneOf (field, params, uri, minItems, maxItems, hasUniqueItems, maxContains, minContains) {
  /*
   *  log('getArrayElementsFieldForOneOf')
   */

  const fieldProps = getElementsFieldPropsForOneOf(params, uri)

  return (
    Object.assign(
      field,
      minItems,
      maxItems,
      hasUniqueItems,
      maxContains,
      minContains,
      fieldProps,
      {
        id: uri
      }
    )
  )
}

function getArrayElementsFieldForAllOf (field, params, uri, minItems, maxItems, hasUniqueItems, maxContains, minContains) {
  /*
   *  log('getArrayElementsFieldForAllOf')
   */

  const fieldProps = getElementsFieldPropsForAllOf(params, uri)

  return (
    Object.assign(
      field,
      minItems,
      maxItems,
      hasUniqueItems,
      maxContains,
      minContains,
      fieldProps,
      {
        id: uri
      }
    )
  )
}

function getArrayElements (elements, schema) {
  /*
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

function renderArrayElementsForEnum (schema, params, uri, minItems, maxItems, hasUniqueItems, maxContains, minContains) {
  /*
   *  log('renderArrayElementsForEnum')
   */

  const elements = {}
  const field = {}

  return (
    Object.assign(
      getArrayElements(elements, schema),
      {
        enum: getArrayElementsFieldForEnum(field, params, uri, minItems, maxItems, hasUniqueItems, maxContains, minContains)
      }
    )
  )
}

function renderArrayElementsForAnyOf (schema, params, uri, minItems, maxItems, hasUniqueItems, maxContains, minContains) {
  /*
   *  log('renderArrayElementsForAnyOf')
   */

  const elements = {}
  const field = {}

  return (
    Object.assign(
      getArrayElements(elements, schema),
      {
        anyOf: getArrayElementsFieldForAnyOf(field, params, uri, minItems, maxItems, hasUniqueItems, maxContains, minContains)
      }
    )
  )
}

function renderArrayElementsForOneOf (schema, params, uri, minItems, maxItems, hasUniqueItems, maxContains, minContains) {
  /*
   *  log('renderArrayElementsForOneOf')
   */

  const elements = {}
  const field = {}

  return (
    Object.assign(
      getArrayElements(elements, schema),
      {
        oneOf: getArrayElementsFieldForOneOf(field, params, uri, minItems, maxItems, hasUniqueItems, maxContains, minContains)
      }
    )
  )
}

function renderArrayElementsForAllOf (schema, params, uri, minItems, maxItems, hasUniqueItems, maxContains, minContains) {
  /*
   *  log('renderArrayElementsForAllOf')
   */

  const elements = {}
  const field = {}

  return (
    Object.assign(
      getArrayElements(elements, schema),
      {
        field: getArrayElementsFieldForAllOf(field, params, uri, minItems, maxItems, hasUniqueItems, maxContains, minContains)
      }
    )
  )
}

function renderArrayElements (schema, params) {
  /*
   *  log('renderArrayElements')
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

function renderNumberMetaForEnum (schema, params, uri, min, max, step) {
  /*
   *  log('renderNumberMetaForEnum')
   */

  const isExclusiveMin = getIsExclusiveMin(schema)
  const isExclusiveMax = getIsExclusiveMax(schema)

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

function renderNumberMetaForAnyOf (schema, params, uri, min, max, step) {
  /*
   *  log('renderNumberMetaForAnyOf')
   */

  const isExclusiveMin = getIsExclusiveMin(schema)
  const isExclusiveMax = getIsExclusiveMax(schema)

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

function renderNumberMetaForOneOf (schema, params, uri, min, max, step) {
  /*
   *  log('renderNumberMetaForOneOf')
   */

  const isExclusiveMin = getIsExclusiveMin(schema)
  const isExclusiveMax = getIsExclusiveMax(schema)

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

function renderNumberMetaForAllOf (schema, values, params, uri, min, max, step) {
  /*
   *  log('renderNumberMetaForAllOf')
   */

  const isExclusiveMin = getIsExclusiveMin(schema)
  const isExclusiveMax = getIsExclusiveMax(schema)

  const metaDefaultValue = getMetaDefaultValue(schema, uri)
  const metaValue = getMetaValue(values, uri, schema)

  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

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
      metaProps,
      isArray(selectedItems) ? { selectedItems } : {}
    )
  )
}

function renderNumberMeta (schema, values, params, uri, min, max, step) {
  /*
   *  log('renderNumberMeta')
   */

  const isExclusiveMin = getIsExclusiveMin(schema)
  const isExclusiveMax = getIsExclusiveMax(schema)

  const metaDefaultValue = getMetaDefaultValue(schema, uri)
  const metaValue = getMetaValue(values, uri, schema)

  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

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
      metaProps,
      isArray(selectedItems) ? { selectedItems } : {}
    )
  )
}

function getNumberElementsFieldForEnum (field, params, uri, min, max, step) {
  /*
   *  log('getNumberElementsFieldForEnum')
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

function getNumberElementsFieldForAnyOf (field, params, uri, min, max, step) {
  /*
   *  log('getNumberElementsFieldForAnyOf')
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

function getNumberElementsFieldForOneOf (field, params, uri, min, max, step) {
  /*
   *  log('getNumberElementsFieldForOneOf')
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

function getNumberElementsFieldForAllOf (field, schema, values, params, uri, min, max, step) {
  /*
   *  log('getNumberElementsFieldForAllOf')
   */

  const {
    parentUri = '#'
  } = params

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

  return (
    Object.assign(
      field,
      min,
      max,
      step,
      fieldValue,
      fieldProps,
      isArray(selectedItems) ? { selectedItems } : {},
      {
        id: uri
      }
    )
  )
}

function getNumberElementsField (field, schema, values, params, uri, min, max, step) {
  /*
   *  log('getNumberElementsField')
   */

  const {
    parentUri = '#'
  } = params

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

  return (
    Object.assign(
      field,
      min,
      max,
      step,
      fieldValue,
      fieldProps,
      isArray(selectedItems) ? { selectedItems } : {},
      {
        id: uri
      }
    )
  )
}

function getNumberElements (elements, schema) {
  /*
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

function renderNumberElementsForEnum (schema, params, uri, min, max, step) {
  /*
   *  log('renderNumberElementsForEnum')
   */

  const elements = {}
  const field = {}

  return (
    Object.assign(
      getNumberElements(elements, schema),
      {
        enum: getNumberElementsFieldForEnum(field, params, uri, min, max, step)
      }
    )
  )
}

function renderNumberElementsForAnyOf (schema, params, uri, min, max, step) {
  /*
   *  log('renderNumberElementsForAnyOf')
   */

  const elements = {}
  const field = {}

  return (
    Object.assign(
      getNumberElements(elements, schema),
      {
        anyOf: getNumberElementsFieldForAnyOf(field, params, uri, min, max, step)
      }
    )
  )
}

function renderNumberElementsForOneOf (schema, params, uri, min, max, step) {
  /*
   *  log('renderNumberElementsForOneOf')
   */

  const elements = {}
  const field = {}

  return (
    Object.assign(
      getNumberElements(elements, schema),
      {
        oneOf: getNumberElementsFieldForOneOf(field, params, uri, min, max, step)
      }
    )
  )
}

function renderNumberElementsForAllOf (schema, values, params, uri, min, max, step) {
  /*
   *  log('renderNumberElementsForAllOf')
   */

  const elements = {}
  const field = {}

  return (
    Object.assign(
      getNumberElements(elements, schema),
      {
        field: getNumberElementsFieldForAllOf(field, schema, values, params, uri, min, max, step)
      }
    )
  )
}

function renderNumberElements (schema, values, params, uri, min, max, step) {
  /*
   *  log('renderNumberElements')
   */

  const elements = {}
  const field = {}

  return (
    Object.assign(
      getNumberElements(elements, schema),
      {
        field: getNumberElementsField(field, schema, values, params, uri, min, max, step)
      }
    )
  )
}

function renderStringMetaForEnum (params, uri, minLength, maxLength, pattern) {
  /*
   *  log('renderStringMetaForEnum')
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

function renderStringMetaForAnyOf (params, uri, minLength, maxLength, pattern) {
  /*
   *  log('renderStringMetaForAnyOf')
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

function renderStringMetaForOneOf (params, uri, minLength, maxLength, pattern) {
  /*
   *  log('renderStringMetaForOneOf')
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

function renderStringMetaForAllOf (schema, values, params, uri, minLength, maxLength, pattern) {
  /*
   *  log('renderStringMetaForAllOf')
   */

  const metaDefaultValue = getMetaDefaultValue(schema, uri)
  const metaValue = getMetaValue(values, uri, schema)
  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

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
      metaProps,
      isArray(selectedItems) ? { selectedItems } : {}
    )
  )
}

function renderStringMeta (schema, values, params, uri, minLength, maxLength, pattern) {
  /*
   *  log('renderStringMeta')
   */

  const metaDefaultValue = getMetaDefaultValue(schema, uri)
  const metaValue = getMetaValue(values, uri, schema)
  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

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
      metaProps,
      isArray(selectedItems) ? { selectedItems } : {}
    )
  )
}

function getStringElementsFieldForEnum (field, params, uri, minLength, maxLength, pattern) {
  /*
   *  log('getStringElementsFieldForEnum')
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

function getStringElementsFieldForAnyOf (field, params, uri, minLength, maxLength, pattern) {
  /*
   *  log('getStringElementsFieldForAnyOf')
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

function getStringElementsFieldForOneOf (field, params, uri, minLength, maxLength, pattern) {
  /*
   *  log('getStringElementsFieldForOneOf')
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

function getStringElementsFieldForAllOf (field, schema, values, params, uri, minLength, maxLength, pattern) {
  /*
   *  log('getStringElementsFieldForAllOf')
   */

  const {
    parentUri = '#'
  } = params

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

  return (
    Object.assign(
      field,
      minLength,
      maxLength,
      pattern,
      fieldValue,
      fieldProps,
      isArray(selectedItems) ? { selectedItems } : {},
      {
        id: uri
      }
    )
  )
}

function getStringElementsField (field, schema, values, params, uri, minLength, maxLength, pattern) {
  /*
   *  log('getStringElementsField')
   */

  const {
    parentUri = '#'
  } = params

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

  return (
    Object.assign(
      field,
      minLength,
      maxLength,
      pattern,
      fieldValue,
      fieldProps,
      isArray(selectedItems) ? { selectedItems } : {},
      {
        id: uri
      }
    )
  )
}

function getStringElements (elements, schema) {
  /*
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

function renderStringElementsForEnum (schema, params, uri, minLength, maxLength, pattern) {
  /*
   *  log('renderStringElementsForEnum')
   */

  const elements = {}
  const field = {}

  return (
    Object.assign(
      getStringElements(elements, schema),
      {
        enum: getStringElementsFieldForEnum(field, params, uri, minLength, maxLength, pattern)
      }
    )
  )
}

function renderStringElementsForAnyOf (schema, params, uri, minLength, maxLength, pattern) {
  /*
   *  log('renderStringElementsForAnyOf')
   */

  const elements = {}
  const field = {}

  return (
    Object.assign(
      getStringElements(elements, schema),
      {
        anyOf: getStringElementsFieldForAnyOf(field, params, uri, minLength, maxLength, pattern)
      }
    )
  )
}

function renderStringElementsForOneOf (schema, params, uri, minLength, maxLength, pattern) {
  /*
   *  log('renderStringElementsForOneOf')
   */

  const elements = {}
  const field = {}

  return (
    Object.assign(
      getStringElements(elements, schema),
      {
        oneOf: getStringElementsFieldForOneOf(field, params, uri, minLength, maxLength, pattern)
      }
    )
  )
}

function renderStringElementsForAllOf (schema, values, params, uri, minLength, maxLength, pattern) {
  /*
   *  log('renderStringElementsForAllOf')
   */

  const elements = {}
  const field = {}

  return (
    Object.assign(
      getStringElements(elements, schema),
      {
        field: getStringElementsFieldForAllOf(field, schema, values, params, uri, minLength, maxLength, pattern)
      }
    )
  )
}

function renderStringElements (schema, values, params, uri, minLength, maxLength, pattern) {
  /*
   *  log('renderStringElements')
   */

  const elements = {}
  const field = {}

  return (
    Object.assign(
      getStringElements(elements, schema),
      {
        field: getStringElementsField(field, schema, values, params, uri, minLength, maxLength, pattern)
      }
    )
  )
}

/*
 *  "enum"
 */
export function renderNullForEnum (schema, values, params) {
  /*
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

/*
 *  "anyOf"
 */
export function renderNullForAnyOf (schema, values, params) {
  /*
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

/*
 *  "oneOf"
 */
export function renderNullForOneOf (schema, values, params) {
  /*
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

/*
 *  "allOf"
 */
export function renderNullForAllOf (schema, values, params) {
  /*
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

export function renderNull (schema, values, params) {
  /*
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

/*
 *  "enum"
 */
export function renderBooleanForEnum (schema, values, params) {
  /*
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

/*
 *  "anyOf"
 */
export function renderBooleanForAnyOf (schema, values, params) {
  /*
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

/*
 *  "oneOf"
 */
export function renderBooleanForOneOf (schema, values, params) {
  /*
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

/*
 *  "allOf"
 */
export function renderBooleanForAllOf (schema, values, params) {
  /*
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

export function renderBoolean (schema, values, params) {
  /*
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

/*
 *  "enum"
 */
export function renderObjectForEnum (schema, values, params) {
  /*
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

/*
 *  "anyOf"
 */
export function renderObjectForAnyOf (schema, values, params) {
  /*
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

/*
 *  "oneOf"
 */
export function renderObjectForOneOf (schema, values, params) {
  /*
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

/*
 *  "allOf"
 */
export function renderObjectForAllOf (schema, values, params) {
  /*
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

export function renderObject (schema, values, params) {
  /*
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

/*
 *  "enum"
 */
export function renderArrayForEnum (schema, values, params) {
  /*
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

  const meta = renderArrayMetaForEnum(params, uri, minItems, maxItems, hasUniqueItems, maxContains, minContains)
  const elements = renderArrayElementsForEnum(schema, params, uri, minItems, maxItems, hasUniqueItems, maxContains, minContains)

  return {
    meta,
    elements
  }
}

/*
 *  "anyOf"
 */
export function renderArrayForAnyOf (schema, values, params) {
  /*
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

  const meta = renderArrayMetaForAnyOf(params, uri, minItems, maxItems, hasUniqueItems, maxContains, minContains)
  const elements = renderArrayElementsForAnyOf(schema, params, uri, minItems, maxItems, hasUniqueItems, maxContains, minContains)

  return {
    meta,
    elements
  }
}

/*
 *  "oneOf"
 */
export function renderArrayForOneOf (schema, values, params) {
  /*
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

  const meta = renderArrayMetaForOneOf(params, uri, minItems, maxItems, hasUniqueItems, maxContains, minContains)
  const elements = renderArrayElementsForOneOf(schema, params, uri, minItems, maxItems, hasUniqueItems, maxContains, minContains)

  return {
    meta,
    elements
  }
}

/*
 *  "allOf"
 */
export function renderArrayForAllOf (schema, values, params) {
  /*
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

  const meta = renderArrayMetaForAllOf(params, uri, minItems, maxItems, hasUniqueItems, maxContains, minContains)
  const elements = renderArrayElementsForAllOf(schema, params, uri, minItems, maxItems, hasUniqueItems, maxContains, minContains)

  return {
    meta,
    elements
  }
}

export function renderArray (schema, values, params) {
  /*
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

  const meta = renderArrayMeta(params, uri, minItems, maxItems, hasUniqueItems, maxContains, minContains)
  const elements = renderArrayElements(schema, params)

  return {
    meta,
    elements
  }
}

/*
 *  "enum"
 */
export function renderNumberForEnum (schema, values, params) {
  /*
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

/*
 *  "anyOf"
 */
export function renderNumberForAnyOf (schema, values, params) {
  /*
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

/*
 *  "oneOf"
 */
export function renderNumberForOneOf (schema, values, params) {
  /*
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

/*
 *  "allOf"
 */
export function renderNumberForAllOf (schema, values, params) {
  /*
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

export function renderNumber (schema, values, params) {
  /*
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

/*
 *  "enum"
 */
export function renderStringForEnum (schema, values, params) {
  /*
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

/*
 *  "anyOf"
 */
export function renderStringForAnyOf (schema, values, params) {
  /*
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

/*
 *  "oneOf"
 */
export function renderStringForOneOf (schema, values, params) {
  /*
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

/*
 *  "allOf"
 */
export function renderStringForAllOf (schema, values, params) {
  /*
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

export function renderString (schema, values, params) {
  /*
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

export function getRenderParamsByKeyForEnum (schema, rootSchema, values, { parentUri: fieldParentUri = '#', key: fieldKey = '', selectedItems = [], items = [], ...params }) {
  /*
   *  log('getRenderParamsByKeyForEnum')
   */
  /*
   *  Resolve `parentUri` and `uri`
   */
  const parentUri = normaliseUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const meta = Object.assign(
    getMetaProps(params, uri),
    {
      schema,
      rootSchema,
      parentUri,
      uri,
      selectedItems,
      items,
      name: fieldKey
    }
  )
  const elements = {
    enum: Object.assign(
      getElementsFieldPropsForEnum(params, uri),
      {
        selectedItems,
        items
      }
    )
  }

  return Object.assign(
    params,
    {
      parentUri,
      uri,
      [uri]: {
        meta,
        elements
      }
    }
  )
}

export function getRenderParamsByKeyForAnyOf (schema, rootSchema, values, { parentUri: fieldParentUri = '#', key: fieldKey = '', selectedItems = [], items = [], ...params }) {
  /*
   *  log('getRenderParamsByKeyForAnyOf')
   */
  /*
   *  Resolve `parentUri` and `uri`
   */
  const parentUri = normaliseUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const meta = Object.assign(
    getMetaProps(params, uri),
    {
      schema,
      rootSchema,
      parentUri,
      uri,
      selectedItems,
      items,
      name: fieldKey
    }
  )
  const elements = {
    anyOf: Object.assign(
      getElementsFieldPropsForAnyOf(params, uri),
      {
        selectedItems,
        items
      }
    )
  }

  return Object.assign(
    params,
    {
      parentUri,
      uri,
      [uri]: {
        meta,
        elements
      }
    }
  )
}

export function getRenderParamsByKeyForOneOf (schema, rootSchema, values, { parentUri: fieldParentUri = '#', key: fieldKey = '', selectedItems = [], items = [], ...params }) {
  /*
   *  log('getRenderParamsByKeyForOneOf')
   */
  /*
   *  Resolve `parentUri` and `uri`
   */
  const parentUri = normaliseUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const meta = Object.assign(
    getMetaProps(params, uri),
    {
      schema,
      rootSchema,
      parentUri,
      uri,
      selectedItems,
      items,
      name: fieldKey
    }
  )
  const elements = {
    oneOf: Object.assign(
      getElementsFieldPropsForOneOf(params, uri),
      {
        selectedItems,
        items
      }
    )
  }

  return Object.assign(
    params,
    {
      parentUri,
      uri,
      [uri]: {
        meta,
        elements
      }
    }
  )
}

export function getRenderParamsByKeyForAllOf (schema, rootSchema, values, { parentUri: fieldParentUri = '#', key: fieldKey = '', ...params }) {
  /*
   *  log('getRenderParamsByKeyForAllOf')
   */
  /*
   *  Resolve `parentUri` and `uri`
   */
  const parentUri = normaliseUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const meta = Object.assign(
    getMetaProps(params, uri),
    {
      schema,
      rootSchema,
      parentUri,
      uri,
      name: fieldKey
    }
  )

  return Object.assign(
    params,
    {
      parentUri,
      uri,
      [uri]: {
        meta,
        elements: getElementsProps(params, uri)
      }
    }
  )
}

export function getRenderParamsByKey (schema, rootSchema, values, { parentUri: fieldParentUri = '#', key: fieldKey = '', ...params }) {
  /*
   *  log('getRenderParamsByKey')
   */
  /*
   *  Resolve `parentUri` and `uri`
   */
  const parentUri = normaliseUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const meta = Object.assign(
    getMetaProps(params, uri),
    {
      schema,
      rootSchema,
      parentUri,
      uri,
      name: fieldKey
    }
  )
  const elements = {
    field: getElementsFieldProps(params, uri)
  }

  return Object.assign(
    params,
    {
      parentUri,
      uri,
      [uri]: {
        meta,
        elements
      }
    }
  )
}

export function getRenderParamsByIndexForEnum (schema, rootSchema, values, { parentUri: arrayParentUri = '#', index: arrayIndex = 0, selectedItems = [], items = [], ...params }) {
  /*
   *  log('getRenderParamsByIndexForEnum')
   */
  /*
   *  Resolve `parentUri` and `uri`
   */
  const parentUri = normaliseUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const meta = Object.assign(
    getMetaProps(params, uri),
    {
      schema,
      rootSchema,
      parentUri,
      uri,
      selectedItems,
      items,
      item: arrayIndex
    }
  )
  const elements = {
    enum: Object.assign(
      getElementsFieldPropsForEnum(params, uri),
      {
        selectedItems,
        items
      }
    )
  }

  return Object.assign(
    params,
    {
      parentUri,
      uri,
      [uri]: {
        meta,
        elements
      }
    }
  )
}

export function getRenderParamsByIndexForAnyOf (schema, rootSchema, values, { parentUri: arrayParentUri = '#', index: arrayIndex = 0, selectedItems = [], items = [], ...params }) {
  /*
   *  log('getRenderParamsByIndexForAnyOf')
   */
  /*
   *  Resolve `parentUri` and `uri`
   */
  const parentUri = normaliseUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const meta = Object.assign(
    getMetaProps(params, uri),
    {
      schema,
      rootSchema,
      parentUri,
      uri,
      selectedItems,
      items,
      item: arrayIndex
    }
  )
  const elements = {
    anyOf: Object.assign(
      getElementsFieldPropsForAnyOf(params, uri),
      {
        selectedItems,
        items
      }
    )
  }

  return Object.assign(
    params,
    {
      parentUri,
      uri,
      [uri]: {
        meta,
        elements
      }
    }
  )
}

export function getRenderParamsByIndexForOneOf (schema, rootSchema, values, { parentUri: arrayParentUri = '#', index: arrayIndex = 0, selectedItems = [], items = [], ...params }) {
  /*
   *  log('getRenderParamsByIndexForOneOf')
   */
  /*
   *  Resolve `parentUri` and `uri`
   */
  const parentUri = normaliseUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const meta = Object.assign(
    getMetaProps(params, uri),
    {
      schema,
      rootSchema,
      parentUri,
      uri,
      selectedItems,
      items,
      item: arrayIndex
    }
  )
  const elements = {
    oneOf: Object.assign(
      getElementsFieldPropsForOneOf(params, uri),
      {
        selectedItems,
        items
      }
    )
  }

  return Object.assign(
    params,
    {
      parentUri,
      uri,
      [uri]: {
        meta,
        elements
      }
    }
  )
}

export function getRenderParamsByIndexForAllOf (schema, rootSchema, values, { parentUri: arrayParentUri = '#', index: arrayIndex = 0, ...params }) {
  /*
   *  log('getRenderParamsByIndexForAllOf')
   */
  /*
   *  Resolve `parentUri` and `uri`
   */
  const parentUri = normaliseUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const meta = Object.assign(
    getMetaProps(params, uri),
    {
      schema,
      rootSchema,
      parentUri,
      uri,
      item: arrayIndex
    }
  )
  const elements = {
    field: getElementsFieldPropsForAllOf(params, uri)
  }

  return Object.assign(
    params,
    {
      parentUri,
      uri,
      [uri]: {
        meta,
        elements
      }
    }
  )
}

export function getRenderParamsByIndex (schema, rootSchema, values, { parentUri: arrayParentUri = '#', index: arrayIndex = 0, ...params }) {
  /*
   *  log('getRenderParamsByIndex')
   */
  /*
   *  Resolve `parentUri` and `uri`
   */
  const parentUri = normaliseUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const meta = Object.assign(
    getMetaProps(params, uri),
    {
      schema,
      rootSchema,
      parentUri,
      uri,
      item: arrayIndex
    }
  )
  const elements = {
    field: getElementsFieldProps(params, uri)
  }

  return Object.assign(
    params,
    {
      parentUri,
      uri,
      [uri]: {
        meta,
        elements
      }
    }
  )
}

export function getRenderParamsForEnum (schema, rootSchema, values, { parentUri = '#', uri = '#/', selectedItems = [], items = [], ...params }) {
  /*
   *  log('getRenderParamsForEnum')
   */

  const meta = Object.assign(
    getMetaProps(params, uri),
    {
      schema,
      rootSchema,
      parentUri: normaliseUri(parentUri),
      uri,
      selectedItems,
      items
    }
  )
  const elements = {
    enum: Object.assign(
      getElementsFieldPropsForEnum(params, uri),
      {
        selectedItems,
        items
      }
    )
  }

  return Object.assign(
    params,
    {
      parentUri,
      uri,
      [uri]: {
        meta,
        elements
      }
    }
  )
}

export function getRenderParamsForAnyOf (schema, rootSchema, values, { parentUri = '#', uri = '#/', selectedItems = [], items = [], ...params }) {
  /*
   *  log('getRenderParamsForAnyOf')
   */

  const meta = Object.assign(
    getMetaProps(params, uri),
    {
      schema,
      rootSchema,
      parentUri: normaliseUri(parentUri),
      uri,
      selectedItems,
      items
    }
  )
  const elements = {
    anyOf: Object.assign(
      getElementsFieldPropsForAnyOf(params, uri),
      {
        selectedItems,
        items
      }
    )
  }

  return Object.assign(
    params,
    {
      parentUri,
      uri,
      [uri]: {
        meta,
        elements
      }
    }
  )
}

export function getRenderParamsForOneOf (schema, rootSchema, values, { parentUri = '#', uri = '#/', selectedItems = [], items = [], ...params }) {
  /*
   *  log('getRenderParamsForOneOf')
   */

  const meta = Object.assign(
    getMetaProps(params, uri),
    {
      schema,
      rootSchema,
      parentUri: normaliseUri(parentUri),
      uri,
      selectedItems,
      items
    }
  )
  const elements = {
    oneOf: Object.assign(
      getElementsFieldPropsForOneOf(params, uri),
      {
        selectedItems,
        items
      }
    )
  }

  return Object.assign(
    params,
    {
      parentUri,
      uri,
      [uri]: {
        meta,
        elements
      }
    }
  )
}

export function getRenderParamsForAllOf (schema, rootSchema, values, { parentUri = '#', uri = '#/', ...params }) {
  /*
   *  log('getRenderParamsForAllOf')
   */

  const meta = Object.assign(
    getMetaProps(params, uri),
    {
      schema,
      rootSchema,
      parentUri: normaliseUri(parentUri),
      uri
    }
  )
  const elements = {
    field: getElementsFieldPropsForAllOf(params, uri)
  }

  return Object.assign(
    params,
    {
      parentUri,
      uri,
      [uri]: {
        meta,
        elements
      }
    }
  )
}

export function getRenderParams (schema, rootSchema, values, { parentUri = '#', uri = '#/', fields = [], ...params }) {
  /*
   *  log('getRenderParams')
   */

  const meta = Object.assign(
    getMetaProps(params, uri),
    {
      schema,
      rootSchema,
      parentUri: normaliseUri(parentUri),
      uri
    }
  )
  const elements = Object.assign(
    getElementsFieldProps(params, uri),
    {
      fields
    }
  )

  return Object.assign(
    params,
    {
      fields // yep!
    },
    {
      parentUri,
      uri,
      [uri]: {
        meta,
        elements
      }
    }
  )
}

/*
 *  "enum"
 */
export function transformNullByKeyForEnum (schema, rootSchema, values, params) {
  /*
   *  log('transformNullByKeyForEnum')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const items = getEnum(schema)

  return renderNullForEnum(schema, values, getRenderParamsByKeyForEnum(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "anyOf"
 */
export function transformNullByKeyForAnyOf (schema, rootSchema, values, params) {
  /*
   *  log('transformNullByKeyForAnyOf')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformNullByIndex(rootSchema, values, { ...params, parentUri: uri, selectedItems }))

  return renderNullForAnyOf(schema, values, getRenderParamsByKeyForAnyOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "oneOf"
 */
export function transformNullByKeyForOneOf (schema, rootSchema, values, params) {
  /*
   *  log('transformNullByKeyForOneOf')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformNullByIndex(rootSchema, values, { ...params, parentUri: uri, selectedItems }))

  return renderNullForOneOf(schema, values, getRenderParamsByKeyForOneOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "allOf"
 */
export function transformNullByKeyForAllOf (schema, rootSchema, values, params) {
  /*
   *  log('transformNullByKeyForAllOf')
   */

  const { allOf = [], ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => Object.assign(accumulator, schema), rest) // initialise with `rest`

  return renderNullForAllOf(itemSchema, values, getRenderParamsByKeyForAllOf(schema, rootSchema, values, params))
}

/*
 *  "enum"
 */
export function transformNullByIndexForEnum (schema, rootSchema, values, params) {
  /*
   *  log('transformNullByIndexForEnum')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const items = getEnum(schema)

  return renderNullForEnum(schema, values, getRenderParamsByIndexForEnum(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "anyOf"
 */
export function transformNullByIndexForAnyOf (schema, rootSchema, values, params) {
  /*
   *  log('transformNullByIndexForAnyOf')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformNullByIndex(rootSchema, values, { ...params, parentUri: uri, selectedItems }))

  return renderNullForAnyOf(schema, values, getRenderParamsByIndexForAnyOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "oneOf"
 */
export function transformNullByIndexForOneOf (schema, rootSchema, values, params) {
  /*
   *  log('transformNullByIndexForOneOf')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformNullByIndex(rootSchema, values, { ...params, parentUri: uri, selectedItems }))

  return renderNullForOneOf(schema, values, getRenderParamsByIndexForOneOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "allOf"
 */
export function transformNullByIndexForAllOf (schema, rootSchema, values, params) {
  /*
   *  log('transformNullByIndexForAllOf')
   */

  const { allOf = [], ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => Object.assign(accumulator, schema), rest) // initialise with `rest`

  return renderNullForAllOf(itemSchema, values, getRenderParamsByIndexForAllOf(schema, rootSchema, values, params))
}

/*
 *  "enum"
 */
export function transformNullForEnum (schema, rootSchema, values, params) {
  /*
   *  log('transformNullForEnum')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const items = getEnum(schema)

  return renderNullForEnum(schema, values, getRenderParamsForEnum(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "anyOf"
 */
export function transformNullForAnyOf (schema, rootSchema, values, params) {
  /*
   *  log('transformNullForAnyOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformNullByIndex(rootSchema, values, { ...params, parentUri: uri, selectedItems }))

  return renderNullForAnyOf(schema, values, getRenderParamsForAnyOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "oneOf"
 */
export function transformNullForOneOf (schema, rootSchema, values, params) {
  /*
   *  log('transformNullForOneOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformNullByIndex(rootSchema, values, { ...params, parentUri: uri, selectedItems }))

  return renderNullForOneOf(schema, values, getRenderParamsForOneOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "allOf"
 */
export function transformNullForAllOf (schema, rootSchema, values, params) {
  /*
   *  log('transformNullForAllOf')
   */

  const { allOf = [], ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => Object.assign(accumulator, schema), rest) // initialise with `rest`

  return renderNullForAllOf(itemSchema, values, getRenderParamsForAllOf(schema, rootSchema, values, params))
}

/*
 *  "enum"
 */
export function transformBooleanByKeyForEnum (schema, rootSchema, values, params) {
  /*
   *  log('transformBooleanByKeyForEnum')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const items = getEnum(schema)

  return renderBooleanForEnum(schema, values, getRenderParamsByKeyForEnum(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "anyOf"
 */
export function transformBooleanByKeyForAnyOf (schema, rootSchema, values, params) {
  /*
   *  log('transformBooleanByKeyForAnyOf')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformBooleanByIndex(rootSchema, values, { ...params, parentUri: uri, selectedItems }))

  return renderBooleanForAnyOf(schema, values, getRenderParamsByKeyForAnyOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "oneOf"
 */
export function transformBooleanByKeyForOneOf (schema, rootSchema, values, params) {
  /*
   *  log('transformBooleanByKeyForOneOf')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformBooleanByIndex(rootSchema, values, { ...params, parentUri: uri, selectedItems }))

  return renderBooleanForOneOf(schema, values, getRenderParamsByKeyForOneOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "allOf"
 */
export function transformBooleanByKeyForAllOf (schema, rootSchema, values, params) {
  /*
   *  log('transformBooleanByKeyForAllOf')
   */

  const { allOf = [], ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => Object.assign(accumulator, schema), rest) // initialise with `rest`

  return renderBooleanForAllOf(itemSchema, values, getRenderParamsByKeyForAllOf(schema, rootSchema, values, params))
}

/*
 *  "enum"
 */
export function transformBooleanByIndexForEnum (schema, rootSchema, values, params) {
  /*
   *  log('transformBooleanByIndexForEnum')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const items = getEnum(schema)

  return renderBooleanForEnum(schema, values, getRenderParamsByIndexForEnum(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "anyOf"
 */
export function transformBooleanByIndexForAnyOf (schema, rootSchema, values, params) {
  /*
   *  log('transformBooleanByIndexForAnyOf')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformBooleanByIndex(rootSchema, values, { ...params, parentUri: uri, selectedItems }))

  return renderBooleanForAnyOf(schema, values, getRenderParamsByIndexForAnyOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "oneOf"
 */
export function transformBooleanByIndexForOneOf (schema, rootSchema, values, params) {
  /*
   *  log('transformBooleanByIndexForOneOf')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformBooleanByIndex(rootSchema, values, { ...params, parentUri: uri, selectedItems }))

  return renderBooleanForOneOf(schema, values, getRenderParamsByIndexForOneOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "allOf"
 */
export function transformBooleanByIndexForAllOf (schema, rootSchema, values, params) {
  /*
   *  log('transformBooleanByIndexForAllOf')
   */

  const { allOf = [], ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => Object.assign(accumulator, schema), rest) // initialise with `rest`

  return renderBooleanForAllOf(itemSchema, values, getRenderParamsByIndexForAllOf(schema, rootSchema, values, params))
}

/*
 *  "enum"
 */
export function transformBooleanForEnum (schema, rootSchema, values, params) {
  /*
   *  log('transformBooleanForEnum')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const items = getEnum(schema)

  return renderBooleanForEnum(schema, values, getRenderParamsForEnum(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "anyOf"
 */
export function transformBooleanForAnyOf (schema, rootSchema, values, params) {
  /*
   *  log('transformBooleanForAnyOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformBooleanByIndex(rootSchema, values, { ...params, parentUri: uri, selectedItems }))

  return renderBooleanForAnyOf(schema, values, getRenderParamsForAnyOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "oneOf"
 */
export function transformBooleanForOneOf (schema, rootSchema, values, params) {
  /*
   *  log('transformBooleanForOneOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformBooleanByIndex(rootSchema, values, { ...params, parentUri: uri, selectedItems }))

  return renderBooleanForOneOf(schema, values, getRenderParamsForOneOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "allOf"
 */
export function transformBooleanForAllOf (schema, rootSchema, values, params) {
  /*
   *  log('transformBooleanForAllOf')
   */

  const { allOf = [], ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => Object.assign(accumulator, schema), rest) // initialise with `rest`

  return renderBooleanForAllOf(itemSchema, values, getRenderParamsForAllOf(schema, rootSchema, values, params))
}

/*
 *  "enum"
 */
export function transformObjectByKeyForEnum (schema, rootSchema, values, params) {
  /*
   *  log('transformObjectByKeyForEnum')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const items = getEnum(schema)

  return renderObjectForEnum(schema, values, getRenderParamsByKeyForEnum(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "anyOf"
 */
export function transformObjectByKeyForAnyOf (schema, rootSchema, values, params) {
  /*
   *  log('transformObjectByKeyForAnyOf')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformObjectByIndex(rootSchema, values, { ...params, parentUri: uri, selectedItems }))

  return renderObjectForAnyOf(schema, values, getRenderParamsByKeyForAnyOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "oneOf"
 */
export function transformObjectByKeyForOneOf (schema, rootSchema, values, params) {
  /*
   *  log('transformObjectByKeyForOneOf')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformObjectByIndex(rootSchema, values, { ...params, parentUri: uri, selectedItems }))

  return renderObjectForOneOf(schema, values, getRenderParamsByKeyForOneOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "allOf"
 */
export function transformObjectByKeyForAllOf (schema, rootSchema, values, params) {
  /*
   *  log('transformObjectByKeyForAllOf')
   */

  const { allOf = [], ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => Object.assign(accumulator, schema), rest) // initialise with `rest`

  return renderObjectForAllOf(itemSchema, values, getRenderParamsByKeyForAllOf(schema, rootSchema, values, params))
}

/*
 *  "enum"
 */
export function transformObjectByIndexForEnum (schema, rootSchema, values, params) {
  /*
   *  log('transformObjectByIndexForEnum')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const items = getEnum(schema)

  return renderObjectForEnum(schema, values, getRenderParamsByIndexForEnum(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "anyOf"
 */
export function transformObjectByIndexForAnyOf (schema, rootSchema, values, params) {
  /*
   *  log('transformObjectByIndexForAnyOf')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformObjectByIndex(rootSchema, values, { ...params, parentUri: uri, selectedItems }))

  return renderObjectForAnyOf(schema, values, getRenderParamsByIndexForAnyOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "oneOf"
 */
export function transformObjectByIndexForOneOf (schema, rootSchema, values, params) {
  /*
   *  log('transformObjectByIndexForOneOf')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformObjectByIndex(rootSchema, values, { ...params, parentUri: uri, selectedItems }))

  return renderObjectForOneOf(schema, values, getRenderParamsByIndexForOneOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "allOf"
 */
export function transformObjectByIndexForAllOf (schema, rootSchema, values, params) {
  /*
   *  log('transformObjectByIndexForAllOf')
   */

  const { allOf = [], ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => Object.assign(accumulator, schema), rest) // initialise with `rest`

  return renderObjectForAllOf(itemSchema, values, getRenderParamsByIndexForAllOf(schema, rootSchema, values, params))
}

/*
 *  "enum"
 */
export function transformObjectForEnum (schema, rootSchema, values, params) {
  /*
   *  log('transformObjectForEnum')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const items = getEnum(schema)

  return renderObjectForEnum(schema, values, getRenderParamsForEnum(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "anyOf"
 */
export function transformObjectForAnyOf (schema, rootSchema, values, params) {
  /*
   *  log('transformObjectForAnyOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformObjectByIndex(rootSchema, values, { ...params, parentUri: uri, selectedItems }))

  return renderObjectForAnyOf(schema, values, getRenderParamsForAnyOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "oneOf"
 */
export function transformObjectForOneOf (schema, rootSchema, values, params) {
  /*
   *  log('transformObjectForOneOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformObjectByIndex(rootSchema, values, { ...params, parentUri: uri, selectedItems }))

  return renderObjectForOneOf(schema, values, getRenderParamsForOneOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "allOf"
 */
export function transformObjectForAllOf (schema, rootSchema, values, params) { // As-is
  /*
   *  log('transformObjectForAllOf')
   */

  const { allOf = [], ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => Object.assign(accumulator, schema), rest) // initialise with `rest`

  const {
    properties = {},
    required = []
  } = itemSchema

  const {
    uri = '#/'
  } = params

  const fields = (
    Object
      .entries(properties)
      .map(mapTransformByKey(rootSchema, values, { ...params, parentUri: uri, required }))
  )

  return renderObjectForAllOf(itemSchema, values, getRenderParamsForAllOf(schema, rootSchema, values, { ...params, fields }))
}

/*
 *  "enum"
 */
export function transformArrayByKeyForEnum (schema, rootSchema, values, params) {
  /*
   *  log('transformArrayByKeyForEnum')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const items = getEnum(schema)

  return renderArrayForEnum(schema, values, getRenderParamsByKeyForEnum(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "anyOf"
 */
export function transformArrayByKeyForAnyOf (schema, rootSchema, values, params) {
  /*
   *  log('transformArrayByKeyForAnyOf')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformArrayByIndex(rootSchema, values, { ...params, parentUri: uri, selectedItems }))

  return renderArrayForAnyOf(schema, values, getRenderParamsByKeyForAnyOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "oneOf"
 */
export function transformArrayByKeyForOneOf (schema, rootSchema, values, params) {
  /*
   *  log('transformArrayByKeyForOneOf')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformArrayByIndex(rootSchema, values, { ...params, parentUri: uri, selectedItems }))

  return renderArrayForOneOf(schema, values, getRenderParamsByKeyForOneOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "allOf"
 */
export function transformArrayByKeyForAllOf (schema, rootSchema, values, params) {
  /*
   *  log('transformArrayByKeyForAllOf')
   */

  const { allOf = [], ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => Object.assign(accumulator, schema), rest) // initialise with `rest`

  return renderArrayForAllOf(itemSchema, values, getRenderParamsByKeyForAllOf(schema, rootSchema, values, params))
}

/*
 *  "enum"
 */
export function transformArrayByIndexForEnum (schema, rootSchema, values, params) {
  /*
   *  log('transformArrayByIndexForEnum')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const items = getEnum(schema)

  return renderArrayForEnum(schema, values, getRenderParamsByIndexForEnum(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "anyOf"
 */
export function transformArrayByIndexForAnyOf (schema, rootSchema, values, params) {
  /*
   *  log('transformArrayByIndexForAnyOf')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformArrayByIndex(rootSchema, values, { ...params, parentUri: uri, selectedItems }))

  return renderArrayForAnyOf(schema, values, getRenderParamsByIndexForAnyOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "oneOf"
 */
export function transformArrayByIndexForOneOf (schema, rootSchema, values, params) {
  /*
   *  log('transformArrayByIndexForOneOf')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformArrayByIndex(rootSchema, values, { ...params, parentUri: uri, selectedItems }))

  return renderArrayForOneOf(schema, values, getRenderParamsByIndexForOneOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "allOf"
 */
export function transformArrayByIndexForAllOf (schema, rootSchema, values, params) {
  /*
   *  log('transformArrayByIndexForAllOf')
   */

  const { allOf = [], ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => Object.assign(accumulator, schema), rest) // initialise with `rest`

  return renderArrayForAllOf(itemSchema, values, getRenderParamsByIndexForAllOf(schema, rootSchema, values, params))
}

/*
 *  "enum"
 */
export function transformArrayForEnum (schema, rootSchema, values, params) {
  /*
   *  log('transformArrayForEnum')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const items = getEnum(schema)

  return renderArrayForEnum(schema, values, getRenderParamsForEnum(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "anyOf"
 */
export function transformArrayForAnyOf (schema, rootSchema, values, params) {
  /*
   *  log('transformArrayForAnyOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformArrayByIndex(rootSchema, values, { ...params, parentUri: uri, selectedItems }))

  return renderArrayForAnyOf(schema, values, getRenderParamsForAnyOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "oneOf"
 */
export function transformArrayForOneOf (schema, rootSchema, values, params) {
  /*
   *  log('transformArrayForOneOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformArrayByIndex(rootSchema, values, { ...params, parentUri: uri, selectedItems }))

  return renderArrayForOneOf(schema, values, getRenderParamsForOneOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "allOf"
 */
export function transformArrayForAllOf (schema, rootSchema, values, params) {
  /*
   *  log('transformArrayForAllOf')
   */

  const { allOf = [], ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => Object.assign(accumulator, schema), rest) // initialise with `rest`

  const {
    items = [] // array or object
  } = itemSchema

  if (isArray(items)) {
    const {
      uri = '#/'
    } = params

    const fields = (
      items.map(mapTransformByIndex(rootSchema, values, { ...params, parentUri: uri }))
    )

    return renderArrayForAllOf(itemSchema, values, getRenderParamsForAllOf(schema, rootSchema, values, { ...params, fields }))
  } else {
    if (isObject(items)) {
      const {
        uri = '#/'
      } = params

      const fields = [
        getTransformByIndex(items, rootSchema, values, { ...params, parentUri: uri })
      ]

      return renderArrayForAllOf(itemSchema, values, getRenderParamsForAllOf(schema, rootSchema, values, { ...params, fields }))
    }
  }
}

/*
 *  "enum"
 */
export function transformNumberByKeyForEnum (schema, rootSchema, values, params) {
  /*
   *  log('transformNumberByKeyForEnum')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const items = getEnum(schema)

  return renderNumberForEnum(schema, values, getRenderParamsByKeyForEnum(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "anyOf"
 */
export function transformNumberByKeyForAnyOf (schema, rootSchema, values, params) {
  /*
   *  log('transformNumberByKeyForAnyOf')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformNumberByIndex(rootSchema, values, { ...params, parentUri: uri, selectedItems }))

  return renderNumberForAnyOf(schema, values, getRenderParamsByKeyForAnyOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "oneOf"
 */
export function transformNumberByKeyForOneOf (schema, rootSchema, values, params) {
  /*
   *  log('transformNumberByKeyForOneOf')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformNumberByIndex(rootSchema, values, { ...params, parentUri: uri, selectedItems }))

  return renderNumberForOneOf(schema, values, getRenderParamsByKeyForOneOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "allOf"
 */
export function transformNumberByKeyForAllOf (schema, rootSchema, values, params) {
  /*
   *  log('transformNumberByKeyForAllOf')
   */

  const { allOf = [], ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => Object.assign(accumulator, schema), rest) // initialise with `rest`

  return renderNumberForAllOf(itemSchema, values, getRenderParamsByKeyForAllOf(schema, rootSchema, values, params))
}

/*
 *  "enum"
 */
export function transformNumberByIndexForEnum (schema, rootSchema, values, params) {
  /*
   *  log('transformNumberByIndexForEnum')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const items = getEnum(schema)

  return renderNumberForEnum(schema, values, getRenderParamsByIndexForEnum(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "anyOf"
 */
export function transformNumberByIndexForAnyOf (schema, rootSchema, values, params) {
  /*
   *  log('transformNumberByIndexForAnyOf')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformNumberByIndex(rootSchema, values, { ...params, parentUri: uri, selectedItems }))

  return renderNumberForAnyOf(schema, values, getRenderParamsByIndexForAnyOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "oneOf"
 */
export function transformNumberByIndexForOneOf (schema, rootSchema, values, params) {
  /*
   *  log('transformNumberByIndexForOneOf')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformNumberByIndex(rootSchema, values, { ...params, parentUri: uri, selectedItems }))

  return renderNumberForOneOf(schema, values, getRenderParamsByIndexForOneOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "allOf"
 */
export function transformNumberByIndexForAllOf (schema, rootSchema, values, params) {
  /*
   *  log('transformNumberByIndexForAllOf')
   */

  const { allOf = [], ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => Object.assign(accumulator, schema), rest) // initialise with `rest`

  return renderNumberForAllOf(itemSchema, values, getRenderParamsByIndexForAllOf(schema, rootSchema, values, params))
}

/*
 *  "enum"
 */
export function transformNumberForEnum (schema, rootSchema, values, params) {
  /*
   *  log('transformNumberForEnum')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const items = getEnum(schema)

  return renderNumberForEnum(schema, values, getRenderParamsForEnum(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "anyOf"
 */
export function transformNumberForAnyOf (schema, rootSchema, values, params) {
  /*
   *  log('transformNumberForAnyOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformNumberByIndex(rootSchema, values, { ...params, parentUri: uri, selectedItems }))

  return renderNumberForAnyOf(schema, values, getRenderParamsForAnyOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "oneOf"
 */
export function transformNumberForOneOf (schema, rootSchema, values, params) {
  /*
   *  log('transformNumberForOneOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformNumberByIndex(rootSchema, values, { ...params, parentUri: uri, selectedItems }))

  return renderNumberForOneOf(schema, values, getRenderParamsForOneOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "allOf"
 */
export function transformNumberForAllOf (schema, rootSchema, values, params) {
  /*
   *  log('transformNumberForAllOf')
   */

  const { allOf = [], ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => Object.assign(accumulator, schema), rest) // initialise with `rest`

  return renderNumberForAllOf(itemSchema, values, getRenderParamsForAllOf(schema, rootSchema, values, params))
}

/*
 *  "enum"
 */
export function transformStringByKeyForEnum (schema, rootSchema, values, params) {
  /*
   *  log('transformStringByKeyForEnum')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const items = getEnum(schema)

  return renderStringForEnum(schema, values, getRenderParamsByKeyForEnum(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "anyOf"
 */
export function transformStringByKeyForAnyOf (schema, rootSchema, values, params) {
  /*
   *  log('transformStringByKeyForAnyOf')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformStringByIndex(rootSchema, values, { ...params, parentUri: uri, selectedItems }))

  return renderStringForAnyOf(schema, values, getRenderParamsByKeyForAnyOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "oneOf"
 */
export function transformStringByKeyForOneOf (schema, rootSchema, values, params) {
  /*
   *  log('transformStringByKeyForOneOf')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformStringByIndex(rootSchema, values, { ...params, parentUri: uri, selectedItems }))

  return renderStringForOneOf(schema, values, getRenderParamsByKeyForOneOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "allOf"
 */
export function transformStringByKeyForAllOf (schema, rootSchema, values, params) {
  /*
   *  log('transformStringByKeyForAllOf')
   */

  const { allOf = [], ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => Object.assign(accumulator, schema), rest) // initialise with `rest`

  return renderStringForAllOf(itemSchema, values, getRenderParamsByKeyForAllOf(schema, rootSchema, values, params))
}

/*
 *  "enum"
 */
export function transformStringByIndexForEnum (schema, rootSchema, values, params) {
  /*
   *  log('transformStringByIndexForEnum')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const items = getEnum(schema)

  return renderStringForEnum(schema, values, getRenderParamsByIndexForEnum(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "anyOf"
 */
export function transformStringByIndexForAnyOf (schema, rootSchema, values, params) {
  /*
   *  log('transformStringByIndexForAnyOf')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformStringByIndex(rootSchema, values, { ...params, parentUri: uri, selectedItems }))

  return renderStringForAnyOf(schema, values, getRenderParamsByIndexForAnyOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "oneOf"
 */
export function transformStringByIndexForOneOf (schema, rootSchema, values, params) {
  /*
   *  log('transformStringByIndexForOneOf')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformStringByIndex(rootSchema, values, { ...params, parentUri: uri }))

  return renderStringForOneOf(schema, values, getRenderParamsByIndexForOneOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "allOf"
 */
export function transformStringByIndexForAllOf (schema, rootSchema, values, params) {
  /*
   *  log('transformStringByIndexForAllOf')
   */

  const { allOf = [], ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => Object.assign(accumulator, schema), rest) // initialise with `rest`

  return renderStringForAllOf(itemSchema, values, getRenderParamsByIndexForAllOf(schema, rootSchema, values, params))
}

/*
 *  "enum"
 */
export function transformStringForEnum (schema, rootSchema, values, params) {
  /*
   *  log('transformStringForEnum')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const items = getEnum(schema)

  return renderStringForEnum(schema, values, getRenderParamsForEnum(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "anyOf"
 */
export function transformStringForAnyOf (schema, rootSchema, values, params) {
  /*
   *  log('transformStringForAnyOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.map(mapTransformStringByIndex(rootSchema, values, { ...params, parentUri: uri, selectedItems }))

  return renderStringForAnyOf(schema, values, getRenderParamsForAnyOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "oneOf"
 */
export function transformStringForOneOf (schema, rootSchema, values, params) {
  /*
   *  log('transformStringForOneOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.map(mapTransformStringByIndex(rootSchema, values, { ...params, parentUri: uri, selectedItems }))

  return renderStringForOneOf(schema, values, getRenderParamsForOneOf(schema, rootSchema, values, Object.assign(params, { selectedItems, items })))
}

/*
 *  "allOf"
 */
export function transformStringForAllOf (schema, rootSchema, values, params) {
  /*
   *  log('transformStringForAllOf')
   */

  const { allOf = [], ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => Object.assign(accumulator, schema), rest) // initialise with `rest`

  return renderStringForAllOf(itemSchema, values, getRenderParamsForAllOf(schema, rootSchema, values, params))
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
export function transformNullByKey (schema, rootSchema, values, params) {
  /*
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

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
export function transformNullByIndex (schema, rootSchema, values, params) {
  /*
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

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
export function transformBooleanByKey (schema, rootSchema, values, params) {
  /*
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

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
export function transformBooleanByIndex (schema, rootSchema, values, params) {
  /*
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

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.5
export function transformObjectByKey (schema, rootSchema, values, params) {
  /*
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

  const uri = getUri(fieldParentUri, fieldKey)

  const fields = (
    Object
      .entries(properties)
      .map(mapTransformByKey(rootSchema, values, { ...params, parentUri: uri, required }))
  )

  return renderObject(schema, values, getRenderParamsByKey(schema, rootSchema, values, Object.assign(params, { fields })))
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.5
export function transformObjectByIndex (schema, rootSchema, values, params) {
  /*
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

  const uri = getUri(arrayParentUri, arrayIndex)

  const fields = (
    Object
      .entries(properties)
      .map(mapTransformByKey(rootSchema, values, { ...params, parentUri: uri, required }))
  )

  return renderObject(schema, values, getRenderParamsByIndex(schema, rootSchema, values, Object.assign(params, { fields })))
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.4
export function transformArrayByKey (schema, rootSchema, values, params) {
  /*
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

    const uri = getUri(fieldParentUri, fieldKey)

    const fields = (
      items.map(mapTransformByIndex(rootSchema, values, { ...params, parentUri: uri }))
    )

    return renderArray(schema, values, getRenderParamsByKey(schema, rootSchema, values, Object.assign(params, { fields })))
  } else {
    if (isObject(items)) {
      const {
        parentUri: fieldParentUri = '#',
        key: fieldKey = ''
      } = params

      const uri = getUri(fieldParentUri, fieldKey)

      const fields = [
        getTransformByIndex(items, rootSchema, values, { ...params, parentUri: uri })
      ]

      return renderArray(schema, values, getRenderParamsByKey(schema, rootSchema, values, Object.assign(params, { fields })))
    }
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.4
export function transformArrayByIndex (schema, rootSchema, values, params) {
  /*
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

    const uri = getUri(arrayParentUri, arrayIndex)

    const fields = (
      items.map(mapTransformByIndex(rootSchema, values, { ...params, parentUri: uri }))
    )

    return renderArray(schema, values, getRenderParamsByIndex(schema, rootSchema, values, Object.assign(params, { fields })))
  } else {
    if (isObject(items)) {
      const {
        parentUri: arrayParentUri = '#',
        index: arrayIndex = 0
      } = params

      const uri = getUri(arrayParentUri, arrayIndex)

      const fields = [
        getTransformByIndex(items, rootSchema, values, { ...params, parentUri: uri })
      ]

      return renderArray(schema, values, getRenderParamsByIndex(schema, rootSchema, values, Object.assign(params, { fields })))
    }
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.2
export function transformNumberByKey (schema, rootSchema, values, params) {
  /*
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

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.2
export function transformNumberByIndex (schema, rootSchema, values, params) {
  /*
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

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.3
export function transformStringByKey (schema, rootSchema, values, params) {
  /*
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

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.3
export function transformStringByIndex (schema, rootSchema, values, params) {
  /*
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

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
export function transformNull (schema, rootSchema, values, params) {
  /*
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

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
export function transformBoolean (schema, rootSchema, values, params) {
  /*
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

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.5
export function transformObject (schema, rootSchema, values, params) {
  /*
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

  const fields = (
    Object
      .entries(properties)
      .map(mapTransformByKey(rootSchema, values, { ...params, parentUri: uri, required }))
  )

  return renderObject(schema, values, getRenderParams(schema, rootSchema, values, Object.assign(params, { fields })))
}

export function getTransformByKey (schema, rootSchema, values, params) {
  /*
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

export function getTransformByIndex (schema, rootSchema, values, params) {
  /*
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

          const meta = Object.assign(
            getMetaProps(params, uri),
            {
              parentUri,
              uri,
              value: String(value)
            }
          )
          const elements = {
            field: Object.assign(
              getElementsFieldProps(params, uri),
              {
                value: String(value)
              }
            )
          }

          return transformByIndex(schema, rootSchema, values, { ...params, parentUri, uri, [uri]: { meta, elements } })
        } else {
          const {
            index = 0
          } = params

          if (Reflect.has(value, index)) {
            const v = Reflect.get(value, index)

            const uri = getUri(parentUri, index)

            const meta = Object.assign(
              getMetaProps(params, uri),
              {
                parentUri,
                uri,
                value: String(v)
              }
            )
            const elements = {
              field: Object.assign(
                getElementsFieldProps(params, uri),
                {
                  value: String(v)
                }
              )
            }

            return transformByIndex(schema, rootSchema, values, { ...params, parentUri, uri, [uri]: { meta, elements } })
          }
        }
      }
    }
  }

  // getParamsByIndex

  return transformByIndex(schema, rootSchema, values, getParamsByIndex(schema, rootSchema, values, params))
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.4
export function transformArray (schema, rootSchema, values, params) {
  /*
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

    const fields = (
      items.map(mapTransformByIndex(rootSchema, values, { ...params, parentUri: uri }))
    )

    return renderArray(schema, values, getRenderParams(schema, rootSchema, values, Object.assign(params, { fields })))
  } else {
    if (isObject(items)) {
      const {
        uri = '#/'
      } = params

      const fields = [
        getTransformByIndex(items, rootSchema, values, { ...params, parentUri: uri })
      ]

      return renderArray(schema, values, getRenderParams(schema, rootSchema, values, Object.assign(params, { fields })))
    }
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.1
export function transformNumber (schema, rootSchema, values, params) {
  /*
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

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.3
export function transformString (schema, rootSchema, values, params) {
  /*
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

export function getParamsByKeyForEnum (schema, rootSchema, values, { parentUri = '#', key = '', isRequired = false, ...params }) {
  const uri = getUri(parentUri, key)

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const meta = Object.assign(
    getMetaProps(params, uri),
    {
      schema,
      rootSchema,
      parentUri: normaliseUri(parentUri),
      uri,
      selectedItems,
      isRequired
    }
  )
  const elements = {
    enum: Object.assign(
      getElementsFieldPropsForEnum(params, uri),
      {
        selectedItems,
        isRequired
      }
    )
  }

  return Object.assign(
    params,
    {
      parentUri,
      uri,
      key,
      [uri]: {
        meta,
        elements
      }
    }
  )
}

export function getParamsByKeyForAnyOf (schema, rootSchema, values, { parentUri = '#', key = '', isRequired = false, ...params }) {
  /*
   *  log('getParamsByKeyForAnyOf')
   */

  const uri = getUri(parentUri, key)

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const meta = Object.assign(
    getMetaProps(params, uri),
    {
      schema,
      rootSchema,
      parentUri: normaliseUri(parentUri),
      uri,
      selectedItems,
      isRequired
    }
  )
  const elements = {
    anyOf: Object.assign(
      getElementsFieldPropsForAnyOf(params, uri),
      {
        selectedItems,
        isRequired
      }
    )
  }

  return Object.assign(
    params,
    {
      parentUri,
      uri,
      key,
      [uri]: {
        meta,
        elements
      }
    }
  )
}

export function getParamsByKeyForOneOf (schema, rootSchema, values, { parentUri = '#', key = '', isRequired = false, ...params }) {
  /*
   *  log('getParamsByKeyForOneOf')
   */

  const uri = getUri(parentUri, key)

  const {
    selectedItems = getSelectedItems(values, uri)
  } = getMetaProps(params, uri)

  const meta = Object.assign(
    getMetaProps(params, uri),
    {
      schema,
      rootSchema,
      parentUri: normaliseUri(parentUri),
      uri,
      selectedItems,
      isRequired
    }
  )
  const elements = {
    oneOf: Object.assign(
      getElementsFieldPropsForOneOf(params, uri),
      {
        selectedItems,
        isRequired
      }
    )
  }

  return Object.assign(
    params,
    {
      parentUri,
      uri,
      key,
      [uri]: {
        meta,
        elements
      }
    }
  )
}

export function getParamsByKey (schema, rootSchema, values, { parentUri = '#', key = '', isRequired = false, ...params }) {
  /*
   *  log('getParamsByKey')
   */

  const uri = getUri(parentUri, key)

  const meta = Object.assign(
    getMetaProps(params, uri),
    {
      schema,
      rootSchema,
      parentUri: normaliseUri(parentUri),
      uri,
      isRequired
    }
  )
  const elements = {
    field: Object.assign(
      getElementsFieldPropsForAllOf(params, uri),
      {
        isRequired
      }
    )
  }

  return Object.assign(
    params,
    {
      parentUri,
      uri,
      key,
      [uri]: {
        meta,
        elements
      }
    }
  )
}

export function getParamsByIndexForEnum (schema, rootSchema, values, { parentUri = '#', index = 0, ...params }) {
  /*
   *  log('getParamsByIndexForEnum')
   */

  const uri = getUri(parentUri, index)

  const {
    selectedItems = getSelectedItems(values, parentUri), // parent uri,
    ...metaProps
  } = getMetaProps(params, uri)

  const meta = Object.assign(
    metaProps,
    {
      schema,
      rootSchema,
      parentUri: normaliseUri(parentUri),
      uri,
      selectedItems
    }
  )
  const elements = {
    enum: Object.assign(
      getElementsFieldPropsForEnum(params, uri),
      {
        selectedItems
      }
    )
  }

  return Object.assign(
    params,
    {
      parentUri,
      uri,
      index,
      [uri]: {
        meta,
        elements
      }
    }
  )
}

export function getParamsByIndexForAnyOf (schema, rootSchema, values, { parentUri = '#', index = 0, ...params }) {
  /*
   *  log('getParamsByIndexForAnyOf')
   */

  const uri = getUri(parentUri, index)

  const {
    selectedItems = getSelectedItems(values, parentUri), // parent uri,
    ...metaProps
  } = getMetaProps(params, uri)

  const meta = Object.assign(
    metaProps,
    {
      schema,
      rootSchema,
      parentUri: normaliseUri(parentUri),
      uri,
      selectedItems
    }
  )
  const elements = {
    anyOf: Object.assign(
      getElementsFieldPropsForAnyOf(params, uri),
      {
        selectedItems
      }
    )
  }

  return Object.assign(
    params,
    {
      parentUri,
      uri,
      index,
      [uri]: {
        meta,
        elements
      }
    }
  )
}

export function getParamsByIndexForOneOf (schema, rootSchema, values, { parentUri = '#', index = 0, ...params }) {
  /*
   *  log('getParamsByIndexForOneOf')
   */

  const uri = getUri(parentUri, index)

  const {
    selectedItems = getSelectedItems(values, parentUri), // parent uri,
    ...metaProps
  } = getMetaProps(params, uri)

  const meta = Object.assign(
    metaProps,
    {
      schema,
      rootSchema,
      parentUri: normaliseUri(parentUri),
      uri,
      selectedItems
    }
  )
  const elements = {
    oneOf: Object.assign(
      getElementsFieldPropsForOneOf(params, uri),
      {
        selectedItems
      }
    )
  }

  return Object.assign(
    params,
    {
      parentUri,
      uri,
      index,
      [uri]: {
        meta,
        elements
      }
    }
  )
}

export function getParamsByIndex (schema, rootSchema, values, { parentUri = '#', index = 0, ...params }) {
  /*
   *  log('getParamsByIndex')
   */

  const uri = getUri(parentUri, index)

  const meta = Object.assign(
    getMetaProps(params, uri),
    {
      schema,
      rootSchema,
      parentUri: normaliseUri(parentUri),
      uri
    }
  )

  return Object.assign(
    params,
    {
      parentUri,
      uri,
      index,
      [uri]: {
        meta,
        elements: getElementsProps(params, uri)
      }
    }
  )
}

export function transformByKeyForEnum (schema, rootSchema, values, params) {
  /*
   *  log('transformByKeyForEnum')
   */

  const { type } = schema

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

export function transformByKeyForAnyOf (schema, rootSchema, values, params) {
  /*
   *  log('transformByKeyForAnyOf')
   */

  const { type } = schema

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

export function transformByKeyForOneOf (schema, rootSchema, values, params) {
  /*
   *  log('transformByKeyForOneOf')
   */

  const { type } = schema

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

export function transformByIndexForEnum (schema, rootSchema, values, params) {
  /*
   *  log('transformByIndexForEnum')
   */

  const { type } = schema

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

export function transformByIndexForAnyOf (schema, rootSchema, values, params) {
  /*
   *  log('transformByIndexForAnyOf')
   */

  const { type } = schema

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

export function transformByIndexForOneOf (schema, rootSchema, values, params) {
  /*
   *  log('transformByIndexForOneOf')
   */

  const { type } = schema

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

export function transformByKey (schema = {}, rootSchema = schema, values = {}, params = {}) {
  /*
   *  log('transformByKey')
   */

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
  /*
   *  log('transformByIndex')
   */

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
