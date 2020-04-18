import debug from 'debug'

import {
  isArray,
  getMetaDefaultValue,
  getMetaValue,
  getSelectedItems,
  getTitle,
  getDescription,
  hasEnum,
  getEnum,
  hasAnyOf,
  hasOneOf,
  hasAllOf,
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
  getElementsFieldProps,
  getElementsFieldValue,
  getParentUri
} from 'shinkansen-transmission/transmission/common'

import {
  transformArraySchema,
  transformArraySchemaString,
  transformArraySchemaNumber,
  transformArraySchemaArray,
  transformArraySchemaObject,
  transformArraySchemaBoolean,
  transformArraySchemaNull,
  transformObjectSchema
} from './transform-schema'

const log = debug('shinkansen-transmission:to-zashiki:item-schema')

export function transformNullForEnum (itemSchema, schema, rootSchema, values, { parentUri = '#', uri = '#/', ...params }) {
  /*
   *  log('transformNullForEnum')
   */
  const metaProps = getMetaProps(params, uri)

  const title = getTitle(itemSchema)
  const description = getDescription(itemSchema)

  const items = getEnum(itemSchema)
  const selectedItems = getSelectedItems(values, uri)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    type: 'null',
    itemSchema,
    rootSchema,
    schema,
    selectedItems,
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    enum: {
      items,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformNullForAnyOf (itemSchema, schema, rootSchema, values, { parentUri = '#', uri = '#/', ...params }) {
  /*
   *  log('transformNullForAnyOf')
   */
  const metaProps = getMetaProps(params, uri)

  const title = getTitle(itemSchema)
  const description = getDescription(itemSchema)

  const { anyOf } = itemSchema
  const items = anyOf.map((schema, index) => transformArraySchemaNull(itemSchema, rootSchema, values, { ...params, parentUri, index }))
  const selectedItems = getSelectedItems(values, uri)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    type: 'null',
    itemSchema,
    rootSchema,
    schema,
    selectedItems,
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    anyOf: {
      items,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformNullForOneOf (itemSchema, schema, rootSchema, values, { parentUri = '#', uri = '#/', ...params }) {
  /*
   *  log('transformNullForOneOf')
   */
  const metaProps = getMetaProps(params, uri)

  const title = getTitle(itemSchema)
  const description = getDescription(itemSchema)

  const { oneOf } = itemSchema
  const items = oneOf.map((schema, index) => transformArraySchemaNull(itemSchema, rootSchema, values, { ...params, parentUri, index }))
  const selectedItems = getSelectedItems(values, uri)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    type: 'null',
    itemSchema,
    rootSchema,
    schema,
    selectedItems,
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    oneOf: {
      items,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformNullForAllOf (itemSchema, schema, rootSchema, values, { parentUri = '#', uri = '#/', ...params }) {
  /*
   *  log('transformNullForAllOf')
   */
  const { allOf, ...rest } = itemSchema
  const item = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(item)
  const description = getDescription(item)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    type: 'null',
    itemSchema,
    rootSchema,
    schema,
    ...getMetaDefaultValue(item, uri),
    ...getMetaValue(values, uri, item),
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    field: {
      ...getElementsFieldValue(values, uri, item),
      ...getElementsFieldProps(params, uri),
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
export function transformNull (itemSchema, schema, rootSchema, values, { parentUri = '#', uri = '#/', ...params }) {
  /*
   *  log('transformNull (1)')
   */
  if (hasEnum(itemSchema)) {
    return transformNullForEnum(itemSchema, schema, rootSchema, values, { parentUri, ...params })
  } else {
    if (hasAnyOf(itemSchema)) {
      return transformNullForAnyOf(itemSchema, schema, rootSchema, values, { parentUri, ...params })
    } else {
      if (hasOneOf(itemSchema)) {
        return transformNullForOneOf(itemSchema, schema, rootSchema, values, { parentUri, ...params })
      } else {
        if (hasAllOf(itemSchema)) {
          return transformNullForAllOf(itemSchema, schema, rootSchema, values, { parentUri, ...params })
        } else {
          /*
           *  log('transformNull (2)')
           */
          const metaProps = getMetaProps(params, uri)

          const title = getTitle(itemSchema)
          const description = getDescription(itemSchema)

          const meta = {
            parentUri: getParentUri(parentUri),
            uri,
            type: 'null',
            itemSchema,
            rootSchema,
            schema,
            ...getMetaDefaultValue(itemSchema, uri),
            ...getMetaValue(values, uri, itemSchema),
            ...metaProps
          }

          const elements = {
            ...title,
            ...description,
            field: {
              ...getElementsFieldValue(values, uri, itemSchema),
              ...getElementsFieldProps(params, uri),
              id: uri
            }
          }

          return {
            meta,
            elements
          }
        }
      }
    }
  }
}

export function transformBooleanForEnum (itemSchema, schema, rootSchema, values, { parentUri = '#', uri = '#/', ...params }) {
  /*
   *  log('transformBooleanForEnum')
   */
  const metaProps = getMetaProps(params, uri)

  const title = getTitle(itemSchema)
  const description = getDescription(itemSchema)
  const items = getEnum(itemSchema)

  const selectedItems = getSelectedItems(values, uri)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    type: 'boolean',
    itemSchema,
    rootSchema,
    schema,
    selectedItems,
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    enum: {
      items,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformBooleanForAnyOf (itemSchema, schema, rootSchema, values, { parentUri = '#', uri = '#/', ...params }) {
  /*
   *  log('transformBooleanForAnyOf')
   */
  const metaProps = getMetaProps(params, uri)

  const title = getTitle(itemSchema)
  const description = getDescription(itemSchema)

  const { anyOf } = itemSchema
  const items = anyOf.map((schema, index) => transformArraySchemaBoolean(itemSchema, rootSchema, values, { ...params, parentUri, index }))
  const selectedItems = getSelectedItems(values, uri)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    type: 'boolean',
    itemSchema,
    rootSchema,
    schema,
    selectedItems,
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    anyOf: {
      items,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformBooleanForOneOf (itemSchema, schema, rootSchema, values, { parentUri = '#', uri = '#/', ...params }) {
  /*
   *  log('transformBooleanForOneOf')
   */
  const metaProps = getMetaProps(params, uri)

  const title = getTitle(itemSchema)
  const description = getDescription(itemSchema)

  const { oneOf } = itemSchema
  const items = oneOf.map((schema, index) => transformArraySchemaBoolean(itemSchema, rootSchema, values, { ...params, parentUri, index }))
  const selectedItems = getSelectedItems(values, uri)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    type: 'boolean',
    itemSchema,
    rootSchema,
    schema,
    selectedItems,
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    oneOf: {
      items,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformBooleanForAllOf (itemSchema, schema, rootSchema, values, { parentUri = '#', uri = '#/', ...params }) {
  /*
   *  log('transformBooleanForAllOf')
   */
  const { allOf, ...rest } = itemSchema
  const item = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(item)
  const description = getDescription(item)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    type: 'boolean',
    itemSchema,
    rootSchema,
    schema,
    ...getMetaDefaultValue(item, uri),
    ...getMetaValue(values, uri, item),
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    field: {
      ...getElementsFieldValue(values, uri, item),
      ...getElementsFieldProps(params, uri),
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
export function transformBoolean (itemSchema, schema, rootSchema, values, { parentUri = '#', uri = '#/', ...params }) {
  /*
   *  log('transformBoolean (1)')
   */
  if (hasEnum(itemSchema)) {
    return transformBooleanForEnum(itemSchema, schema, rootSchema, values, { parentUri, ...params })
  } else {
    if (hasAnyOf(itemSchema)) {
      return transformBooleanForAnyOf(itemSchema, schema, rootSchema, values, { parentUri, ...params })
    } else {
      if (hasOneOf(itemSchema)) {
        return transformBooleanForOneOf(itemSchema, schema, rootSchema, values, { parentUri, ...params })
      } else {
        if (hasAllOf(itemSchema)) {
          return transformBooleanForAllOf(itemSchema, schema, rootSchema, values, { parentUri, ...params })
        } else {
          /*
           *  log('transformBoolean (2)')
           */
          const metaProps = getMetaProps(params, uri)

          const title = getTitle(itemSchema)
          const description = getDescription(itemSchema)

          const meta = {
            parentUri: getParentUri(parentUri),
            uri,
            type: 'boolean',
            itemSchema,
            rootSchema,
            schema,
            ...getMetaDefaultValue(itemSchema, uri),
            ...getMetaValue(values, uri, itemSchema),
            ...metaProps
          }

          const elements = {
            ...title,
            ...description,
            field: {
              ...getElementsFieldValue(values, uri, itemSchema),
              ...getElementsFieldProps(params, uri),
              id: uri
            }
          }

          return {
            meta,
            elements
          }
        }
      }
    }
  }
}

export function transformObjectForEnum (itemSchema, schema, rootSchema, values, { parentUri = '#', uri = '#/', ...params }) {
  /*
   *  log('transformObjectForEnum')
   */
  const metaProps = getMetaProps(params, uri)

  const title = getTitle(itemSchema)
  const description = getDescription(itemSchema)

  const items = getEnum(itemSchema) // `enum` is a reserved word
  const selectedItems = getSelectedItems(values, uri)

  const minProperties = getMinProperties(itemSchema)
  const maxProperties = getMaxProperties(itemSchema)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    type: 'object',
    itemSchema,
    rootSchema,
    schema,
    ...minProperties,
    ...maxProperties,
    ...getMetaDefaultValue(itemSchema, uri),
    ...getMetaValue(values, uri, itemSchema),
    selectedItems,
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    enum: {
      items,
      ...minProperties,
      ...maxProperties,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformObjectForAnyOf (itemSchema, schema, rootSchema, values, { parentUri = '#', uri = '#/', ...params }) {
  /*
   *  log('transformObjectForAnyOf')
   */
  const metaProps = getMetaProps(params, uri)

  const title = getTitle(itemSchema)
  const description = getDescription(itemSchema)

  const { anyOf } = itemSchema
  const items = anyOf.map((schema, index) => transformArraySchemaObject(itemSchema, rootSchema, values, { ...params, parentUri, index }))
  const selectedItems = getSelectedItems(values, uri)

  const minProperties = getMinProperties(itemSchema)
  const maxProperties = getMaxProperties(itemSchema)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    type: 'object',
    itemSchema,
    rootSchema,
    schema,
    ...minProperties,
    ...maxProperties,
    ...getMetaDefaultValue(itemSchema, uri),
    ...getMetaValue(values, uri, itemSchema),
    selectedItems,
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    anyOf: {
      items,
      ...minProperties,
      ...maxProperties,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformObjectForOneOf (itemSchema, schema, rootSchema, values, { parentUri = '#', uri = '#/', ...params }) {
  /*
   *  log('transformObjectForOneOf')
   */
  const metaProps = getMetaProps(params, uri)

  const title = getTitle(itemSchema)
  const description = getDescription(itemSchema)

  const { oneOf } = itemSchema
  const items = oneOf.map((schema, index) => transformArraySchemaObject(itemSchema, rootSchema, values, { ...params, parentUri, index }))
  const selectedItems = getSelectedItems(values, uri)

  const minProperties = getMinProperties(itemSchema)
  const maxProperties = getMaxProperties(itemSchema)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    type: 'object',
    itemSchema,
    rootSchema,
    schema,
    ...minProperties,
    ...maxProperties,
    ...getMetaDefaultValue(itemSchema, uri),
    ...getMetaValue(values, uri, itemSchema),
    selectedItems,
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    oneOf: {
      items,
      ...minProperties,
      ...maxProperties,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformObjectForAllOf (itemSchema, schema, rootSchema, values, { parentUri = '#', uri = '#/', ...params }) { // As-is
  /*
   *  log('transformObjectForAllOf')
   */
  const { allOf, ...rest } = itemSchema
  const item = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(item)
  const description = getDescription(item)

  const minProperties = getMinProperties(item)
  const maxProperties = getMaxProperties(item)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    type: 'object',
    itemSchema,
    rootSchema,
    schema,
    ...minProperties,
    ...maxProperties,
    ...getMetaDefaultValue(item, uri),
    ...getMetaValue(values, uri, item),
    ...metaProps
  }

  const {
    properties = {},
    required = []
  } = item

  const elements = {
    ...title,
    ...description,
    fields: (
      Object
        .entries(properties)
        .map(([key, schema]) => transformObjectSchema(item, rootSchema, values, { ...params, required: required.includes(key), parentUri, key }))
    )
  }

  return {
    meta,
    elements
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.5
export function transformObject (itemSchema, schema, rootSchema, values, { parentUri = '#', uri = '#/', ...params }) {
  /*
   *  log('transformObject (1)')
   */
  if (hasEnum(itemSchema)) {
    return transformObjectForEnum(itemSchema, schema, rootSchema, values, { parentUri, ...params })
  } else {
    if (hasAnyOf(itemSchema)) {
      return transformObjectForAnyOf(itemSchema, schema, rootSchema, values, { parentUri, ...params })
    } else {
      if (hasOneOf(itemSchema)) {
        return transformObjectForOneOf(itemSchema, schema, rootSchema, values, { parentUri, ...params })
      } else {
        if (hasAllOf(itemSchema)) {
          return transformObjectForAllOf(itemSchema, schema, rootSchema, values, { parentUri, ...params })
        } else {
          /*
           *  log('transformObject (2)')
           */
          const metaProps = getMetaProps(params, uri)

          const title = getTitle(itemSchema)
          const description = getDescription(itemSchema)

          const minProperties = getMinProperties(itemSchema)
          const maxProperties = getMaxProperties(itemSchema)

          const meta = {
            parentUri: getParentUri(parentUri),
            uri,
            type: 'object',
            itemSchema,
            rootSchema,
            schema,
            ...minProperties,
            ...maxProperties,
            ...getMetaDefaultValue(itemSchema, uri),
            ...getMetaValue(values, uri, itemSchema),
            ...metaProps
          }

          const {
            properties = {},
            required = []
          } = schema

          const elements = {
            ...title,
            ...description,
            fields: (
              Object
                .entries(properties)
                .map(([key, schema]) => transformObjectSchema(itemSchema, rootSchema, values, { ...params, required: required.includes(key), parentUri, key }))
            )
          }

          return {
            meta,
            elements
          }
        }
      }
    }
  }
}

export function transformArrayForEnum (itemSchema, schema, rootSchema, values, { parentUri = '#', uri = '#/', ...params }) {
  /*
   *  log('transformArrayForEnum')
   */
  const metaProps = getMetaProps(params, uri)

  const title = getTitle(itemSchema)
  const description = getDescription(itemSchema)

  const items = getEnum(itemSchema) // `enum` is a reserved word
  const selectedItems = getSelectedItems(values, uri)

  const minItems = getMinItems(schema)
  const maxItems = getMaxItems(schema)
  const hasUniqueItems = getHasUniqueItems(schema)
  const maxContains = getMaxContains(schema)
  const minContains = getMinContains(schema)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    type: 'array',
    itemSchema,
    rootSchema,
    schema,
    ...minItems,
    ...maxItems,
    ...hasUniqueItems,
    ...maxContains,
    ...minContains,
    selectedItems,
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    enum: {
      items,
      ...minItems,
      ...maxItems,
      ...hasUniqueItems,
      ...maxContains,
      ...minContains,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformArrayForAnyOf (itemSchema, schema, rootSchema, values, { parentUri = '#', uri = '#/', ...params }) {
  /*
   *  log('transformArrayForAnyOf')
   */
  const metaProps = getMetaProps(params, uri)

  const title = getTitle(itemSchema)
  const description = getDescription(itemSchema)

  const { anyOf } = itemSchema
  const items = anyOf.map((schema, index) => transformArraySchemaArray(itemSchema, rootSchema, values, { ...params, parentUri, index }))
  const selectedItems = getSelectedItems(values, uri)

  const minItems = getMinItems(schema)
  const maxItems = getMaxItems(schema)
  const hasUniqueItems = getHasUniqueItems(schema)
  const maxContains = getMaxContains(schema)
  const minContains = getMinContains(schema)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    type: 'array',
    itemSchema,
    rootSchema,
    schema,
    ...minItems,
    ...maxItems,
    ...hasUniqueItems,
    ...maxContains,
    ...minContains,
    selectedItems,
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    anyOf: {
      items,
      ...minItems,
      ...maxItems,
      ...hasUniqueItems,
      ...maxContains,
      ...minContains,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformArrayForOneOf (itemSchema, schema, rootSchema, values, { parentUri = '#', uri = '#/', ...params }) {
  /*
   *  log('transformArrayForOneOf')
   */
  const metaProps = getMetaProps(params, uri)

  const title = getTitle(itemSchema)
  const description = getDescription(itemSchema)

  const { oneOf } = itemSchema
  const items = oneOf.map((schema, index) => transformArraySchemaArray(itemSchema, rootSchema, values, { ...params, parentUri, index }))
  const selectedItems = getSelectedItems(values, uri)

  const minItems = getMinItems(schema)
  const maxItems = getMaxItems(schema)
  const hasUniqueItems = getHasUniqueItems(schema)
  const maxContains = getMaxContains(schema)
  const minContains = getMinContains(schema)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    type: 'array',
    itemSchema,
    rootSchema,
    schema,
    ...minItems,
    ...maxItems,
    ...hasUniqueItems,
    ...maxContains,
    ...minContains,
    selectedItems,
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    oneOf: {
      items,
      ...minItems,
      ...maxItems,
      ...hasUniqueItems,
      ...maxContains,
      ...minContains,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformArrayForAllOf (itemSchema, schema, rootSchema, values, { parentUri = '#', uri = '#/', ...params }) {
  /*
   *  log('transformArrayForAllOf')
   */
  const { allOf, ...rest } = itemSchema
  const item = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(item)
  const description = getDescription(item)

  const minItems = getMinItems(item)
  const maxItems = getMaxItems(item)
  const hasUniqueItems = getHasUniqueItems(item)
  const maxContains = getMaxContains(item)
  const minContains = getMinContains(item)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    type: 'array',
    itemSchema,
    rootSchema,
    schema,
    ...minItems,
    ...maxItems,
    ...hasUniqueItems,
    ...maxContains,
    ...minContains,
    ...getMetaDefaultValue(item, uri),
    ...getMetaValue(values, uri, item),
    ...metaProps
  }

  const {
    items = [] // array or object
  } = item

  if (isArray(items)) {
    const elements = {
      ...title,
      ...description,
      fields: items.map((schema, index) => transformArraySchema(item, rootSchema, values, { ...params, parentUri: uri, index }))
    }

    return {
      meta,
      elements
    }
  }

  const elements = {
    ...title,
    ...description,
    fields: [
      transformArraySchema(item, rootSchema, values, { ...params, parentUri: uri })
    ]
  }

  return {
    meta,
    elements
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.4
export function transformArray (itemSchema, schema, rootSchema, values, { parentUri = '#', uri = '#/', ...params }) {
  /*
   *  log('transformArray (1)')
   */
  if (hasEnum(itemSchema)) {
    return transformArrayForEnum(itemSchema, schema, rootSchema, values, { parentUri, ...params })
  } else {
    if (hasAnyOf(itemSchema)) {
      return transformArrayForAnyOf(itemSchema, schema, rootSchema, values, { parentUri, ...params })
    } else {
      if (hasOneOf(itemSchema)) {
        return transformArrayForOneOf(itemSchema, schema, rootSchema, values, { parentUri, ...params })
      } else {
        if (hasAllOf(itemSchema)) {
          return transformArrayForAllOf(itemSchema, schema, rootSchema, values, { parentUri, ...params })
        } else {
          /*
           *  log('transformArray (2)')
           */
          const metaProps = getMetaProps(params, uri)

          const title = getTitle(itemSchema)
          const description = getDescription(itemSchema)

          const minItems = getMinItems(schema)
          const maxItems = getMaxItems(schema)
          const hasUniqueItems = getHasUniqueItems(schema)
          const maxContains = getMaxContains(schema)
          const minContains = getMinContains(schema)

          const meta = {
            parentUri: getParentUri(parentUri),
            uri,
            type: 'array',
            itemSchema,
            rootSchema,
            schema,
            ...minItems,
            ...maxItems,
            ...hasUniqueItems,
            ...maxContains,
            ...minContains,
            ...getMetaDefaultValue(itemSchema, uri),
            ...getMetaValue(values, uri, itemSchema),
            ...metaProps
          }

          const {
            items = [] // array or object
          } = schema

          if (isArray(items)) {
            const elements = {
              ...title,
              ...description,
              fields: items.map((schema, index) => transformArraySchema(itemSchema, rootSchema, values, { ...params, parentUri: uri, index }))
            }

            return {
              meta,
              elements
            }
          }

          const elements = {
            ...title,
            ...description,
            fields: [
              transformArraySchema(itemSchema, rootSchema, values, { ...params, parentUri: uri })
            ]
          }

          return {
            meta,
            elements
          }
        }
      }
    }
  }
}

export function transformNumberForEnum (itemSchema, schema, rootSchema, values, { parentUri = '#', uri = '#/', ...params }) {
  /*
   *  log('transformNumberForEnum')
   */
  const metaProps = getMetaProps(params, uri)

  const title = getTitle(itemSchema)
  const description = getDescription(itemSchema)

  const items = getEnum(itemSchema) // `enum` is a reserved word
  const selectedItems = getSelectedItems(values, uri)

  const isExclusiveMin = getIsExclusiveMin(schema)
  const isExclusiveMax = getIsExclusiveMax(schema)

  const min = getMin(schema)
  const max = getMax(schema)
  const step = getStep(schema)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    type: 'number',
    itemSchema,
    rootSchema,
    schema,
    ...isExclusiveMin,
    ...isExclusiveMax,
    ...min,
    ...max,
    ...step,
    selectedItems,
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    enum: {
      items,
      ...min,
      ...max,
      ...step,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformNumberForAnyOf (itemSchema, schema, rootSchema, values, { parentUri = '#', uri = '#/', ...params }) {
  /*
   *  log('transformNumberForAnyOf')
   */
  const metaProps = getMetaProps(params, uri)

  const title = getTitle(itemSchema)
  const description = getDescription(itemSchema)

  const { anyOf } = itemSchema
  const items = anyOf.map((schema, index) => transformArraySchemaNumber(itemSchema, rootSchema, values, { ...params, parentUri, index }))
  const selectedItems = getSelectedItems(values, uri)

  const isExclusiveMin = getIsExclusiveMin(schema)
  const isExclusiveMax = getIsExclusiveMax(schema)

  const min = getMin(schema)
  const max = getMax(schema)
  const step = getStep(schema)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    type: 'number',
    itemSchema,
    rootSchema,
    schema,
    ...isExclusiveMin,
    ...isExclusiveMax,
    ...min,
    ...max,
    ...step,
    selectedItems,
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    anyOf: {
      items,
      ...min,
      ...max,
      ...step,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformNumberForOneOf (itemSchema, schema, rootSchema, values, { parentUri = '#', uri = '#/', ...params }) {
  /*
   *  log('transformNumberForOneOf')
   */
  const metaProps = getMetaProps(params, uri)

  const title = getTitle(itemSchema)
  const description = getDescription(itemSchema)

  const { oneOf } = itemSchema
  const items = oneOf.map((schema, index) => transformArraySchemaNumber(itemSchema, rootSchema, values, { ...params, parentUri, index }))
  const selectedItems = getSelectedItems(values, uri)

  const isExclusiveMin = getIsExclusiveMin(schema)
  const isExclusiveMax = getIsExclusiveMax(schema)

  const min = getMin(schema)
  const max = getMax(schema)
  const step = getStep(schema)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    type: 'number',
    itemSchema,
    rootSchema,
    schema,
    ...isExclusiveMin,
    ...isExclusiveMax,
    ...min,
    ...max,
    ...step,
    selectedItems,
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    oneOf: {
      items,
      ...min,
      ...max,
      ...step,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformNumberForAllOf (itemSchema, schema, rootSchema, values, { parentUri = '#', uri = '#/', ...params }) {
  /*
   *  log('transformNumberForAllOf')
   */
  const { allOf, ...rest } = itemSchema
  const item = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(item)
  const description = getDescription(item)

  const isExclusiveMin = getIsExclusiveMin(item)
  const isExclusiveMax = getIsExclusiveMax(item)

  const min = getMin(item)
  const max = getMax(item)
  const step = getStep(item)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    type: 'number',
    itemSchema,
    rootSchema,
    schema,
    ...isExclusiveMin,
    ...isExclusiveMax,
    ...min,
    ...max,
    ...step,
    ...getMetaDefaultValue(item, uri),
    ...getMetaValue(values, uri, item),
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    field: {
      ...min,
      ...max,
      ...step,
      ...getElementsFieldValue(values, uri, item),
      ...getElementsFieldProps(params, uri),
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.1
export function transformNumber (itemSchema, schema, rootSchema, values, { parentUri = '#', uri = '#/', ...params }) {
  /*
   *  log('transformNumber (1)')
   */
  if (hasEnum(itemSchema)) {
    return transformNumberForEnum(itemSchema, schema, rootSchema, values, { parentUri, ...params })
  } else {
    if (hasAnyOf(itemSchema)) {
      return transformNumberForAnyOf(itemSchema, schema, rootSchema, values, { parentUri, ...params })
    } else {
      if (hasOneOf(itemSchema)) {
        return transformNumberForOneOf(itemSchema, schema, rootSchema, values, { parentUri, ...params })
      } else {
        if (hasAllOf(itemSchema)) {
          return transformNumberForAllOf(itemSchema, schema, rootSchema, values, { parentUri, ...params })
        } else {
          /*
           *  log('transformNumber (2)')
           */
          const metaProps = getMetaProps(params, uri)

          const title = getTitle(itemSchema)
          const description = getDescription(itemSchema)

          const isExclusiveMin = getIsExclusiveMin(schema)
          const isExclusiveMax = getIsExclusiveMax(schema)

          const min = getMin(schema)
          const max = getMax(schema)
          const step = getStep(schema)

          const meta = {
            parentUri: getParentUri(parentUri),
            uri,
            type: 'number',
            itemSchema,
            rootSchema,
            schema,
            ...isExclusiveMin,
            ...isExclusiveMax,
            ...min,
            ...max,
            ...step,
            ...getMetaDefaultValue(itemSchema, uri),
            ...getMetaValue(values, uri, itemSchema),
            ...metaProps
          }

          const elements = {
            ...title,
            ...description,
            field: {
              ...min,
              ...max,
              ...step,
              ...getElementsFieldValue(values, uri, itemSchema),
              ...getElementsFieldProps(params, uri),
              id: uri
            }
          }

          return {
            meta,
            elements
          }
        }
      }
    }
  }
}

export function transformStringForEnum (itemSchema, schema, rootSchema, values, { parentUri = '#', uri = '#/', ...params }) {
  /*
   *  log('transformStringForEnum')
   */
  const metaProps = getMetaProps(params, uri)

  const title = getTitle(itemSchema)
  const description = getDescription(itemSchema)

  const items = getEnum(itemSchema) // `enum` is a reserved word
  const selectedItems = getSelectedItems(values, uri)

  const minLength = getMinLength(schema)
  const maxLength = getMaxLength(schema)
  const pattern = getPattern(schema)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    type: 'string',
    itemSchema,
    rootSchema,
    schema,
    ...minLength,
    ...maxLength,
    ...pattern,
    selectedItems,
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    enum: {
      items,
      ...minLength,
      ...maxLength,
      ...pattern,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformStringForAnyOf (itemSchema, schema, rootSchema, values, { parentUri = '#', uri = '#/', ...params }) {
  /*
   *  log('transformStringForAnyOf')
   */
  const metaProps = getMetaProps(params, uri)

  const title = getTitle(itemSchema)
  const description = getDescription(itemSchema)

  const { anyOf } = itemSchema
  const items = anyOf.map((schema, index) => transformArraySchemaString(itemSchema, rootSchema, values, { ...params, parentUri, index }))
  const selectedItems = getSelectedItems(values, uri)

  const minLength = getMinLength(schema)
  const maxLength = getMaxLength(schema)
  const pattern = getPattern(schema)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    type: 'string',
    itemSchema,
    rootSchema,
    schema,
    ...minLength,
    ...maxLength,
    ...pattern,
    selectedItems,
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    anyOf: {
      items,
      ...minLength,
      ...maxLength,
      ...pattern,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformStringForOneOf (itemSchema, schema, rootSchema, values, { parentUri = '#', uri = '#/', ...params }) {
  /*
   *  log('transformStringForOneOf')
   */
  const metaProps = getMetaProps(params, uri)

  const title = getTitle(itemSchema)
  const description = getDescription(itemSchema)

  const { oneOf } = itemSchema
  const items = oneOf.map((schema, index) => transformArraySchemaString(itemSchema, rootSchema, values, { ...params, parentUri, index }))
  const selectedItems = getSelectedItems(values, uri)

  const minLength = getMinLength(schema)
  const maxLength = getMaxLength(schema)
  const pattern = getPattern(schema)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    type: 'string',
    itemSchema,
    rootSchema,
    schema,
    ...minLength,
    ...maxLength,
    ...pattern,
    selectedItems,
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    oneOf: {
      items,
      ...minLength,
      ...maxLength,
      ...pattern,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformStringForAllOf (itemSchema, schema, rootSchema, values, { parentUri = '#', uri = '#/', ...params }) {
  /*
   *  log('transformStringForAllOf')
   */
  const { allOf, ...rest } = itemSchema
  const item = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(item)
  const description = getDescription(item)

  const minLength = getMinLength(item)
  const maxLength = getMaxLength(item)
  const pattern = getPattern(item)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    type: 'string',
    itemSchema,
    rootSchema,
    schema,
    ...minLength,
    ...maxLength,
    ...pattern,
    ...getMetaDefaultValue(item, uri),
    ...getMetaValue(values, uri, item),
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    field: {
      ...minLength,
      ...maxLength,
      ...pattern,
      ...getElementsFieldValue(values, uri, item),
      ...getElementsFieldProps(params, uri),
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.3
export function transformString (itemSchema, schema, rootSchema, values, { parentUri = '#', uri = '#/', ...params }) {
  /*
   *  log('transformString (1)')
   */
  if (hasEnum(itemSchema)) {
    return transformStringForEnum(itemSchema, schema, rootSchema, values, { parentUri, ...params })
  } else {
    if (hasAnyOf(itemSchema)) {
      return transformStringForAnyOf(itemSchema, schema, rootSchema, values, { parentUri, ...params })
    } else {
      if (hasOneOf(itemSchema)) {
        return transformStringForOneOf(itemSchema, schema, rootSchema, values, { parentUri, ...params })
      } else {
        if (hasAllOf(itemSchema)) {
          return transformStringForAllOf(itemSchema, schema, rootSchema, values, { parentUri, ...params })
        } else {
          /*
           *  log('transformString (2)')
           */
          const metaProps = getMetaProps(params, uri)

          const title = getTitle(itemSchema)
          const description = getDescription(itemSchema)

          const minLength = getMinLength(schema)
          const maxLength = getMaxLength(schema)
          const pattern = getPattern(schema)

          const meta = {
            parentUri: getParentUri(parentUri),
            uri,
            type: 'string',
            itemSchema,
            rootSchema,
            schema,
            ...minLength,
            ...maxLength,
            ...pattern,
            ...getMetaDefaultValue(itemSchema, uri),
            ...getMetaValue(values, uri, itemSchema),
            ...metaProps
          }

          const elements = {
            ...title,
            ...description,
            field: {
              ...minLength,
              ...maxLength,
              ...pattern,
              ...getElementsFieldValue(values, uri, itemSchema),
              ...getElementsFieldProps(params, uri),
              id: uri
            }
          }

          return {
            meta,
            elements
          }
        }
      }
    }
  }
}

export default function toZashiki (itemSchema = {}, schema = {}, rootSchema = {}, values = {}, params = {}) {
  log('toZashiki')

  const { type } = schema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  switch (type) {
    case 'null':
      return transformNull(itemSchema, schema, rootSchema, values, params)

    case 'boolean':
      return transformBoolean(itemSchema, schema, rootSchema, values, params)

    case 'object':
      return transformObject(itemSchema, schema, rootSchema, values, params)

    case 'array':
      return transformArray(itemSchema, schema, rootSchema, values, params)

    case 'number':
      return transformNumber(itemSchema, schema, rootSchema, values, params)

    case 'string':
      return transformString(itemSchema, schema, rootSchema, values, params)

    default:
      throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
  }
}
