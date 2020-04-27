import debug from 'debug'

import {
  isArray,
  isObject,

  // getSelectedItemsForParentUri,
  getSelectedItemsForUri,

  hasEnum,
  getEnum,
  hasAnyOf,
  hasOneOf,
  hasAllOf,

  normaliseUri,

  // getUri,

  getMetaProps,
  getMetaValue,

  getElementsProps,
  getElementsFieldPropsForEnum,
  getElementsFieldPropsForAnyOf,
  getElementsFieldPropsForOneOf,
  getElementsFieldPropsForAllOf,
  // getElementsFieldProps,
  getElementsFieldValue
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

  // getTransformByKeyForEnum,
  // getTransformByKeyForAnyOf,
  // getTransformByKeyForOneOf,
  // getTransformByIndexForEnum,
  // getTransformByIndexForAnyOf,
  // getTransformByIndexForOneOf,

  mapTransformByKey,

  renderStringForEnum,
  renderStringForAnyOf,
  renderStringForOneOf,
  renderStringForAllOf,
  renderString,

  renderNumberForEnum,
  renderNumberForAnyOf,
  renderNumberForOneOf,
  renderNumberForAllOf,
  renderNumber,

  renderBooleanForEnum,
  renderBooleanForAnyOf,
  renderBooleanForOneOf,
  renderBooleanForAllOf,
  renderBoolean,

  renderNullForEnum,
  renderNullForAnyOf,
  renderNullForOneOf,
  renderNullForAllOf,
  renderNull,

  renderArrayForEnum,
  renderArrayForAnyOf,
  renderArrayForOneOf,
  renderArrayForAllOf,
  renderArray,

  renderObjectForEnum,
  renderObjectForAnyOf,
  renderObjectForOneOf,
  renderObjectForAllOf,
  renderObject /* ,

  transformByIndex,
  transformByKey */
} from './transform-schema'

const log = debug('shinkansen-transmission:to-zashiki:root-schema')

/*
 *  Is root schema and "enum" is look-up
 *
 *  "enum" gets selected items
 *
 *  "enum" does not get value or default value
 */
export function transformNullForEnum (rootSchema, values, params) {
  log('transformNullForEnum')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, rootSchema),
    ...metaProps
  } = getMetaProps(params, uri)

  const items = getEnum(rootSchema)

  return renderNullForEnum(rootSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema: rootSchema, parentUri: normaliseUri(parentUri), uri, selectedItems }, elements: { enum: { ...getElementsFieldPropsForEnum(params, uri), selectedItems, items } } } })
}

/*
 *  Is root schema and "anyOf" is look-up
 *
 *  "anyOf" gets selected items
 *
 *  "anyOf" does not get value or default value
 */
export function transformNullForAnyOf (rootSchema, values, params) {
  log('transformNullForAnyOf')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, rootSchema),
    ...metaProps
  } = getMetaProps(params, uri)

  const { anyOf = [] } = rootSchema
  const items = anyOf.map(mapTransformNullByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  return renderNullForAnyOf(rootSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema: rootSchema, parentUri: normaliseUri(parentUri), uri, selectedItems }, elements: { anyOf: { ...getElementsFieldPropsForAnyOf(params, uri), selectedItems, items } } } })
}

/*
 *  Is root schema and "oneOf" is look-up
 *
 *  "oneOf" gets selected items
 *
 *  "oneOf" does not get value or default value
 */
export function transformNullForOneOf (rootSchema, values, params) {
  log('transformNullForOneOf')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, rootSchema),
    ...metaProps
  } = getMetaProps(params, uri)

  const { oneOf = [] } = rootSchema
  const items = oneOf.map(mapTransformNullByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  return renderNullForOneOf(rootSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema: rootSchema, parentUri: normaliseUri(parentUri), uri, selectedItems }, elements: { oneOf: { ...getElementsFieldPropsForOneOf(params, uri), selectedItems, items } } } })
}

/*
 *  Is root schema and "allOf" null is not look-up
 *
 *  "allOf" does not get selected items
 *
 *  "allOf" gets value and default value
 */
export function transformNullForAllOf (rootSchema, values, params) {
  log('transformNullForAllOf')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const { allOf = [], ...rest } = rootSchema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  return renderNullForAllOf(itemSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema: rootSchema, parentUri: normaliseUri(parentUri), uri, ...getMetaValue(values, uri, rootSchema) }, elements: { field: { ...getElementsFieldPropsForAllOf(params, uri), ...getElementsFieldValue(values, uri, rootSchema) } } } })
}

/*
 *  Root schema
 */
// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
export function transformNull (rootSchema, values, params) {
  log('transformNull (1)')

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

  log('transformNull (2)')

  return renderNull(rootSchema, values, { ...params, parentUri: '#', uri: '#/', '#/': { meta: { ...getMetaProps(params, '#/'), schema: rootSchema, parentUri: '#', uri: '#/' }, elements: getElementsProps(params, '#/') } })
}

/*
 *  Is root schema and "enum" is look-up
 *
 *  "enum" gets selected items
 *
 *  "enum" does not get value or default value
 */
export function transformBooleanForEnum (rootSchema, values, params) {
  log('transformBooleanForEnum')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, rootSchema),
    ...metaProps
  } = getMetaProps(params, uri)

  const items = getEnum(rootSchema)

  return renderBooleanForEnum(rootSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema: rootSchema, parentUri: normaliseUri(parentUri), uri, selectedItems }, elements: { enum: { ...getElementsFieldPropsForEnum(params, uri), selectedItems, items } } } })
}

/*
 *  Is root schema and "anyOf" is look-up
 *
 *  "anyOf" gets selected items
 *
 *  "anyOf" does not get value or default value
 */
export function transformBooleanForAnyOf (rootSchema, values, params) {
  log('transformBooleanForAnyOf')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, rootSchema),
    ...metaProps
  } = getMetaProps(params, uri)

  const { anyOf = [] } = rootSchema
  const items = anyOf.map(mapTransformBooleanByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  return renderBooleanForAnyOf(rootSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema: rootSchema, parentUri: normaliseUri(parentUri), uri, selectedItems }, elements: { anyOf: { ...getElementsFieldPropsForAnyOf(params, uri), selectedItems, items } } } })
}

/*
 *  Is root schema and "oneOf" is look-up
 *
 *  "oneOf" gets selected items
 *
 *  "oneOf" does not get value or default value
 */
export function transformBooleanForOneOf (rootSchema, values, params) {
  log('transformBooleanForOneOf')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, rootSchema),
    ...metaProps
  } = getMetaProps(params, uri)

  const { oneOf = [] } = rootSchema
  const items = oneOf.map(mapTransformBooleanByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  return renderBooleanForOneOf(rootSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema: rootSchema, parentUri: normaliseUri(parentUri), uri, selectedItems }, elements: { oneOf: { ...getElementsFieldPropsForOneOf(params, uri), selectedItems, items } } } })
}

/*
 *  Is root schema and "allOf" is not look-up
 *
 *  "allOf" does not get selected items
 *
 *  "allOf" gets value and default value
 */
export function transformBooleanForAllOf (rootSchema, values, params) {
  log('transformBooleanForAllOf')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const { allOf = [], ...rest } = rootSchema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  return renderBooleanForAllOf(itemSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema: rootSchema, parentUri: normaliseUri(parentUri), uri, ...getMetaValue(values, uri, rootSchema) }, elements: { field: { ...getElementsFieldPropsForAllOf(params, uri), ...getElementsFieldValue(values, uri, rootSchema) } } } })
}

/*
 *  Root schema
 */
// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
export function transformBoolean (rootSchema, values, params) {
  log('transformBoolean (1)')

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

  log('transformBoolean (2)')

  return renderBoolean(rootSchema, values, { ...params, parentUri: '#', uri: '#/', '#/': { meta: { ...getMetaProps(params, '#/'), schema: rootSchema, parentUri: '#', uri: '#/' }, elements: getElementsProps(params, '#/') } })
}

/*
 *  Is root schema and "enum" is look-up
 *
 *  "enum" gets selected items
 *
 *  "enum" does not get value or default value
 */
export function transformObjectForEnum (rootSchema, values, params) {
  log('renderObjectForEnum')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, rootSchema),
    ...metaProps
  } = getMetaProps(params, uri)

  const items = getEnum(rootSchema)

  return renderObjectForEnum(rootSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema: rootSchema, parentUri: normaliseUri(parentUri), uri, selectedItems }, elements: { enum: { ...getElementsFieldPropsForEnum(params, uri), selectedItems, items } } } })
}

/*
 *  Is root schema and "anyOf" is look-up
 *
 *  "anyOf" gets selected items
 *
 *  "anyOf" does not get value or default value
 */
export function transformObjectForAnyOf (rootSchema, values, params) {
  log('transformObjectForAnyOf')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, rootSchema),
    ...metaProps
  } = getMetaProps(params, uri)

  const { anyOf = [] } = rootSchema
  const items = anyOf.map(mapTransformObjectByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  return renderObjectForAnyOf(rootSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema: rootSchema, parentUri: normaliseUri(parentUri), uri, selectedItems }, elements: { anyOf: { ...getElementsFieldPropsForAnyOf(params, uri), selectedItems, items } } } })
}

/*
 *  Is root schema and "oneOf" is look-up
 *
 *  "oneOf" gets selected items
 *
 *  "oneOf" does not get value or default value
 */
export function transformObjectForOneOf (rootSchema, values, params) {
  log('transformObjectForOneOf')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, rootSchema),
    ...metaProps
  } = getMetaProps(params, uri)

  const { oneOf = [] } = rootSchema
  const items = oneOf.map(mapTransformObjectByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  return renderObjectForOneOf(rootSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema: rootSchema, parentUri: normaliseUri(parentUri), uri, selectedItems }, elements: { oneOf: { ...getElementsFieldPropsForOneOf(params, uri), selectedItems, items } } } })
}

/*
 *  Is root schema and "allOf" is not look-up
 *
 *  "allOf" does not get selected items
 *
 *  "allOf" gets value and default value
 */
export function transformObjectForAllOf (rootSchema, values, params) {
  log('transformObjectForAllOf')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const { allOf = [], ...rest } = rootSchema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  return renderObjectForAllOf(itemSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema: rootSchema, parentUri, uri }, elements: getElementsProps(params, uri) } })
}

/*
 *  Root schema
 */
// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.5
export function transformObject (rootSchema, values, params) {
  log('transformObject (1)')

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

  log('transformObject (2)')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const {
    properties = {},
    required = []
  } = rootSchema

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

          return transformByKey(schema, rootSchema, values, { ...params, parentUri: '#', [schemaUri]: { meta: { ...metaProps, selectedItems, isRequired }, elements: { enum: { ...getElementsFieldPropsForEnum(params, schemaUri), selectedItems, isRequired } } }, key })
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

            return transformByKey(schema, rootSchema, values, { ...params, parentUri: '#', [schemaUri]: { meta: { ...metaProps, selectedItems, isRequired }, elements: { anyOf: { ...getElementsFieldPropsForAnyOf(params, schemaUri), selectedItems, isRequired } } }, key })
            *//*
          } else {
            if (hasOneOf(schema)) {
              log('transformObject (`oneOf`)')

              return getTransformByKeyForOneOf(schema, rootSchema, values, { ...params, parentUri: uri, key, isRequired: required.includes(key) })

              /*
               *  Get selected items for the uri
               *//*
              const schemaUri = getUri(uri, key)
              const {
                selectedItems = getSelectedItemsForUri(values, uri, schemaUri, schema),
                ...metaProps
              } = getMetaProps(params, schemaUri)

              const isRequired = required.includes(key)

              // log(getValueForOneOf(index, schema))

              return transformByKey(schema, rootSchema, values, { ...params, parentUri: '#', [schemaUri]: { meta: { ...metaProps, selectedItems, isRequired }, elements: { oneOf: { ...getElementsFieldPropsForOneOf(params, schemaUri), selectedItems, isRequired } } }, key })
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

        return transformByKey(schema, rootSchema, values, { ...params, [schemaUri]: { meta: { ...getMetaProps(params, schemaUri), isRequired }, elements: { field: { ...getElementsFieldProps(params, uri), isRequired } } }, key })
      })
  )
  */

  return renderObject(rootSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema: rootSchema, parentUri: '#' }, elements: { ...getElementsProps(params, uri), fields } } })
}

/*
 *  Is root schema and "enum" is look-up
 *
 *  "enum" gets selected items
 *
 *  "enum" does not get value or default value
 */
export function transformArrayForEnum (rootSchema, values, params) {
  log('renderArrayForEnum')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, rootSchema),
    ...metaProps
  } = getMetaProps(params, uri)

  const items = getEnum(rootSchema)

  return renderArrayForEnum(rootSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema: rootSchema, parentUri: normaliseUri(parentUri), uri, selectedItems }, elements: { enum: { ...getElementsFieldPropsForEnum(params, uri), selectedItems, items } } } })
}

/*
 *  Is root schema and "anyOf" is look-up
 *
 *  "anyOf" gets selected items
 *
 *  "anyOf" does not get value or default value
 */
export function transformArrayForAnyOf (rootSchema, values, params) {
  log('transformArrayForAnyOf')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, rootSchema),
    ...metaProps
  } = getMetaProps(params, uri)

  const { anyOf = [] } = rootSchema
  const items = anyOf.map(mapTransformArrayByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  return renderArrayForAnyOf(rootSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema: rootSchema, parentUri: normaliseUri(parentUri), uri, selectedItems }, elements: { anyOf: { ...getElementsFieldPropsForAnyOf(params, uri), selectedItems, items } } } })
}

/*
 *  Is root schema and "oneOf" is look-up
 *
 *  "oneOf" gets selected items
 *
 *  "oneOf" does not get value or default value
 */
export function transformArrayForOneOf (rootSchema, values, params) {
  log('transformArrayForOneOf')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, rootSchema),
    ...metaProps
  } = getMetaProps(params, uri)

  const { oneOf = [] } = rootSchema
  const items = oneOf.map(mapTransformArrayByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  return renderArrayForOneOf(rootSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema: rootSchema, parentUri: normaliseUri(parentUri), uri, selectedItems }, elements: { oneOf: { ...getElementsFieldPropsForOneOf(params, uri), selectedItems, items } } } })
}

/*
 *  Is root schema and "allOf" is not look-up
 *
 *  "allOf" does not get selected items
 *
 *  "allOf" gets value and default value
 */
export function transformArrayForAllOf (rootSchema, values, params) {
  log('transformArrayForAllOf')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const { allOf = [], ...rest } = rootSchema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  return renderArrayForAllOf(itemSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema: rootSchema, parentUri, uri }, elements: getElementsProps(params, uri) } })
}

/*
function getTransformByKeyForEnum (schema, rootSchema, values, { parentUri, key = '', isRequired = false, ...params }) {
  log('getTransformByKeyForEnum')

  *//*
   *  Get selected items for the uri
   *//*
  const uri = getUri(parentUri, key)

  log({ parentUri, uri })

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  // log(getValueForEnum(index, schema))

  return transformByKey(schema, rootSchema, values, { ...params, parentUri, [uri]: { meta: { ...metaProps, selectedItems, isRequired }, elements: { enum: { ...getElementsFieldPropsForEnum(params, uri), selectedItems, isRequired } } }, key })
}

function getTransformByKeyForAnyOf (schema, rootSchema, values, { parentUri, key = '', isRequired = false, ...params }) {
  log('getTransformByKeyForAnyOf')

  *//*
   *  Get selected items for the uri
   *//*
  const uri = getUri(parentUri, key)
  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  // log(getValueForAnyOf(index, schema))

  return transformByKey(schema, rootSchema, values, { ...params, parentUri, [uri]: { meta: { ...metaProps, selectedItems, isRequired }, elements: { anyOf: { ...getElementsFieldPropsForAnyOf(params, uri), selectedItems, isRequired } } }, key })
}

function getTransformByKeyForOneOf (schema, rootSchema, values, { parentUri, key = '', isRequired = false, ...params }) {
  log('getTransformByKeyForOneOf')

  *//*
   *  Get selected items for the uri
   *//*
  const uri = getUri(parentUri, key)
  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  // log(getValueForOneOf(index, schema))

  return transformByKey(schema, rootSchema, values, { ...params, parentUri: '#', [uri]: { meta: { ...metaProps, selectedItems, isRequired }, elements: { oneOf: { ...getElementsFieldPropsForOneOf(params, uri), selectedItems, isRequired } } }, key })
}

function getTransformByIndexForEnum (schema, rootSchema, values, { parentUri, index = 0, ...params }) {
  log('getTransformByIndexForEnum')

  *//*
   *  Get selected items for the parent uri
   *//*
  const uri = getUri(parentUri, index)
  const {
    selectedItems = getSelectedItemsForParentUri(values, parentUri, uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  return transformByIndex(schema, rootSchema, values, { ...params, parentUri, [uri]: { meta: { ...metaProps, selectedItems }, elements: { enum: { ...getElementsFieldPropsForEnum(params, uri), selectedItems } } } })
}

function getTransformByIndexForAnyOf (schema, rootSchema, values, { parentUri, index = 0, ...params }) {
  log('getTransformByIndexForAnyOf')

  *//*
   *  Get selected items for the parent uri
   *//*
  const uri = getUri(parentUri, index)
  const {
    selectedItems = getSelectedItemsForParentUri(values, '#/', uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  return transformByIndex(schema, rootSchema, values, { ...params, parentUri: '#', [uri]: { meta: { ...metaProps, selectedItems }, elements: { anyOf: { ...getElementsFieldPropsForAnyOf(params, uri), selectedItems } } } })
}

function getTransformByIndexForOneOf (schema, rootSchema, values, { parentUri, index = 0, ...params }) {
  log('getTransformByIndexForOneOf')

  *//*
   *  Get selected items for the parent uri
   *//*
  const uri = getUri(parentUri, index)
  const {
    selectedItems = getSelectedItemsForParentUri(values, '#/', uri, schema),
    ...metaProps
  } = getMetaProps(params, uri)

  return transformByIndex(schema, rootSchema, values, { ...params, parentUri: '#', [uri]: { meta: { ...metaProps, selectedItems }, elements: { oneOf: { ...getElementsFieldPropsForOneOf(params, uri), selectedItems } } } })
}
*/

/*
 *  Root schema
 */
// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.4
export function transformArray (rootSchema, values, params) {
  log('transformArray (1)')

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

  log('transformArray (2)')

  const {
    items = [] // array or object
  } = rootSchema

  if (isArray(items)) {
    log('transformArray (2 - 1)')

    log(`

  Array with "items" array

    `)

    const fields = items.map(mapTransformByIndex(rootSchema, values, { ...params, parentUri: '#' }))

    return renderArray(rootSchema, values, { ...params, parentUri: '#', uri: '#/', '#/': { meta: { ...getMetaProps(params, '#/'), schema: rootSchema, parentUri: '#', uri: '#/' }, elements: { ...getElementsProps(params, '#/'), fields } } })
  } else {
    if (isObject(items)) {
      log('transformArray (2 - 2)')

      log(`

  Array with "items" object

  `)

      const fields = [
        getTransformByIndex(items, rootSchema, values, { ...params, parentUri: '#/' })
      ]

      return renderArray(rootSchema, values, { ...params, parentUri: '#', uri: '#/', '#/': { meta: { ...getMetaProps(params, '#/'), schema: rootSchema, parentUri: '#', uri: '#/' }, elements: { ...getElementsProps(params, '#/'), fields } } })

      /*
      let fields
      if (hasEnum(items)) {
        log('transformArray (`enum`)')

        fields = [
          getTransformByIndexForEnum(items, rootSchema, values, { parentUri: '#/', ...params })
        ]

        *//*
         *  Get selected items for the parent uri
         *//*
        const schemaUri = getUri('#/', 0)
        const {
          selectedItems = getSelectedItemsForParentUri(values, '#/', schemaUri, items),
          ...metaProps
        } = getMetaProps(params, schemaUri)

        fields = [
          transformByIndex(items, rootSchema, values, { ...params, parentUri: '#', [schemaUri]: { meta: { ...metaProps, selectedItems }, elements: { enum: { ...getElementsFieldPropsForEnum(params, schemaUri), selectedItems } } } })
        ]
        *//*
      } else {
        if (hasAnyOf(items)) {
          log('transformArray (`anyOf`)')

          fields = [
            getTransformByIndexForAnyOf(items, rootSchema, values, { parentUri: '#/', ...params })
          ]

          *//*
           *  Get selected items for the parent uri
           *//*
          const schemaUri = getUri('#/', 0)
          const {
            selectedItems = getSelectedItemsForParentUri(values, '#/', schemaUri, items),
            ...metaProps
          } = getMetaProps(params, schemaUri)

          fields = [
            transformByIndex(items, rootSchema, values, { ...params, parentUri: '#', [schemaUri]: { meta: { ...metaProps, selectedItems }, elements: { anyOf: { ...getElementsFieldPropsForAnyOf(params, schemaUri), selectedItems } } } })
          ]
          *//*
        } else {
          if (hasOneOf(items)) {
            log('transformArray (`oneOf`)')

            fields = [
              getTransformByIndexForOneOf(items, rootSchema, values, { parentUri: '#/', ...params })
            ]

            *//*
             *  Get selected items for the parent uri
             *//*
            const schemaUri = getUri('#/', 0)
            const {
              selectedItems = getSelectedItemsForParentUri(values, '#/', schemaUri, items),
              ...metaProps
            } = getMetaProps(params, schemaUri)

            fields = [
              transformByIndex(items, rootSchema, values, { ...params, parentUri: '#', [schemaUri]: { meta: { ...metaProps, selectedItems }, elements: { oneOf: { ...getElementsFieldPropsForOneOf(params, schemaUri), selectedItems } } } })
            ]
            *//*
          } else {
            log('transformArray (`value` `defaultValue`)')

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

            *//*
             *  Do not get the value
             *//*

            fields = [
              transformByIndex(items, rootSchema, values, { ...params, parentUri: '#', uri: '#/', '#/': { meta: { ...getMetaProps(params, '#/'), schema: rootSchema, parentUri: '#', uri: '#/' }, elements: getElementsProps(params, '#/') } })
            ]
          }
        }
      }

      return renderArray(rootSchema, values, { ...params, parentUri: '#', uri: '#/', '#/': { meta: { ...getMetaProps(params, '#/'), schema: rootSchema, parentUri: '#', uri: '#/' }, elements: { ...getElementsProps(params, '#/'), fields } } })
      */
    }
  }
}

/*
 *  Is root schema and "enum" is look-up
 *
 *  "enum" gets selected items
 *
 *  "enum" does not get value or default value
 */
export function transformNumberForEnum (rootSchema, values, params) {
  log('transformNumberForEnum')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, rootSchema),
    ...metaProps
  } = getMetaProps(params, uri)

  const items = getEnum(rootSchema)

  return renderNumberForEnum(rootSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema: rootSchema, parentUri: normaliseUri(parentUri), uri, selectedItems }, elements: { enum: { ...getElementsFieldPropsForEnum(params, uri), selectedItems, items } } } })
}

/*
 *  Is root schema and "anyOf" is look-up
 *
 *  "anyOf" gets selected items
 *
 *  "anyOf" does not get value or default value
 */
export function transformNumberForAnyOf (rootSchema, values, params) {
  log('transformNumberForAnyOf')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, rootSchema),
    ...metaProps
  } = getMetaProps(params, uri)

  const { anyOf = [] } = rootSchema
  const items = anyOf.map(mapTransformNumberByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  return renderNumberForAnyOf(rootSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema: rootSchema, parentUri: normaliseUri(parentUri), uri, selectedItems }, elements: { anyOf: { ...getElementsFieldPropsForAnyOf(params, uri), selectedItems, items } } } })
}

/*
 *  Is root schema and "oneOf" is look-up
 *
 *  "oneOf" gets selected items
 *
 *  "oneOf" does not get value or default value
 */
export function transformNumberForOneOf (rootSchema, values, params) {
  log('transformNumberForOneOf')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, rootSchema),
    ...metaProps
  } = getMetaProps(params, uri)

  const { oneOf = [] } = rootSchema
  const items = oneOf.map(mapTransformNumberByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  return renderNumberForOneOf(rootSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema: rootSchema, parentUri: normaliseUri(parentUri), uri, selectedItems }, elements: { oneOf: { ...getElementsFieldPropsForOneOf(params, uri), selectedItems, items } } } })
}

/*
 *  Is root schema and "allOf" is not look-up
 *
 *  "allOf" does not get selected items
 *
 *  "allOf" gets value and default value
 */
export function transformNumberForAllOf (rootSchema, values, params) {
  log('transformNumberForAllOf')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const { allOf = [], ...rest } = rootSchema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  return renderNumberForAllOf(itemSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema: rootSchema, parentUri: normaliseUri(parentUri), uri, ...getMetaValue(values, uri, rootSchema) }, elements: { field: { ...getElementsFieldPropsForAllOf(params, uri), ...getElementsFieldValue(values, uri, rootSchema) } } } })
}

/*
 *  Root schema
 */
// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.1
export function transformNumber (rootSchema, values, params) {
  log('transformNumber (1)')

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

  log('transformNumber (2)')

  return renderNumber(rootSchema, values, { ...params, parentUri: '#', uri: '#/', '#/': { meta: { ...getMetaProps(params, '#/'), schema: rootSchema, parentUri: '#', uri: '#/' }, elements: getElementsProps(params, '#/') } })
}

/*
 *  Is root schema and "enum" is look-up
 *
 *  "enum" gets selected items
 *
 *  "enum" does not get value or default value
 */
export function transformStringForEnum (rootSchema, values, params) {
  log('transformStringForEnum')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, rootSchema),
    ...metaProps
  } = getMetaProps(params, uri)

  const items = getEnum(rootSchema)

  return renderStringForEnum(rootSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema: rootSchema, parentUri: normaliseUri(parentUri), uri, selectedItems }, elements: { enum: { ...getElementsFieldPropsForEnum(params, uri), selectedItems, items } } } })
}

/*
 *  Is root schema and "anyOf" is look-up
 *
 *  "anyOf" gets selected items
 *
 *  "anyOf" does not get value or default value
 */
export function transformStringForAnyOf (rootSchema, values, params) {
  log('transformStringForAnyOf')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, rootSchema),
    ...metaProps
  } = getMetaProps(params, uri)

  const { anyOf = [] } = rootSchema
  const items = anyOf.map(mapTransformStringByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  return renderStringForAnyOf(rootSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema: rootSchema, parentUri: normaliseUri(parentUri), uri, selectedItems }, elements: { anyOf: { ...getElementsFieldPropsForAnyOf(params, uri), selectedItems, items } } } })
}

/*
 *  Is root schema and "oneOf" is look-up
 *
 *  "oneOf" gets selected items
 *
 *  "oneOf" does not get value or default value
 */
export function transformStringForOneOf (rootSchema, values, params) {
  log('transformStringForOneOf')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItemsForUri(values, parentUri, uri, rootSchema),
    ...metaProps
  } = getMetaProps(params, uri)

  const { oneOf = [] } = rootSchema
  const items = oneOf.map(mapTransformStringByIndex(rootSchema, values, { ...params, selectedItems, parentUri: uri }))

  return renderStringForOneOf(rootSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...metaProps, schema: rootSchema, parentUri: normaliseUri(parentUri), uri, selectedItems }, elements: { oneOf: { ...getElementsFieldPropsForOneOf(params, uri), selectedItems, items } } } })
}

/*
 *  Is root schema and "allOf" is not look-up
 *
 *  "allOf" does not get selected items
 *
 *  "allOf" gets value and default value
 */
export function transformStringForAllOf (rootSchema, values, params) {
  log('transformStringForAllOf')

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const { allOf = [], ...rest } = rootSchema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  return renderStringForAllOf(itemSchema, values, { ...params, parentUri, uri, [uri]: { meta: { ...getMetaProps(params, uri), schema: rootSchema, parentUri: normaliseUri(parentUri), uri, ...getMetaValue(values, uri, rootSchema) }, elements: { field: { ...getElementsFieldPropsForAllOf(params, uri), ...getElementsFieldValue(values, uri, rootSchema) } } } })
}

/*
 *  Root schema
 */
// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.3
export function transformString (rootSchema, values, params) {
  log('transformString (1)')

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

  log('transformString (2)')

  return renderString(rootSchema, values, { ...params, parentUri: '#', uri: '#/', '#/': { meta: { ...getMetaProps(params, '#/'), schema: rootSchema, parentUri: '#', uri: '#/' }, elements: getElementsProps(params, '#/') } })
}

export default function toZashiki (rootSchema = {}, values = {}, params = {}) {
  log('toZashiki', values)

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
