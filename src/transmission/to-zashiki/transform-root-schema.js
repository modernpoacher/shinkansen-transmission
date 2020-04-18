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
  getElementsFieldValue
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

const log = debug('shinkansen-transmission:to-zashiki:root-schema')

export function transformNullForEnum (rootSchema, values, params) {
  /*
   *  log('transformNullForEnum')
   */
  const metaProps = getMetaProps(params, '#/')

  const title = getTitle(rootSchema)
  const description = getDescription(rootSchema)

  const items = getEnum(rootSchema)
  const selectedItems = getSelectedItems(values, '#/')

  const meta = {
    uri: '#/',
    type: 'null',
    schema: rootSchema,
    selectedItems,
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    enum: {
      items,
      selectedItems,
      id: '#/'
    }
  }

  return {
    meta,
    elements
  }
}

export function transformNullForAnyOf (rootSchema, values, params) {
  /*
   *  log('transformNullForAnyOf')
   */
  const metaProps = getMetaProps(params, '#/')

  const title = getTitle(rootSchema)
  const description = getDescription(rootSchema)

  const { anyOf } = rootSchema
  const items = anyOf.map((schema, index) => transformArraySchemaNull(schema, rootSchema, values, { ...params, parentUri: '#', index }))
  const selectedItems = getSelectedItems(values, '#/')

  const meta = {
    uri: '#/',
    type: 'null',
    schema: rootSchema,
    selectedItems,
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    anyOf: {
      items,
      selectedItems,
      id: '#/'
    }
  }

  return {
    meta,
    elements
  }
}

export function transformNullForOneOf (rootSchema, values, params) {
  /*
   *  log('transformNullForOneOf')
   */
  const metaProps = getMetaProps(params, '#/')

  const title = getTitle(rootSchema)
  const description = getDescription(rootSchema)

  const { oneOf } = rootSchema
  const items = oneOf.map((schema, index) => transformArraySchemaNull(schema, rootSchema, values, { ...params, parentUri: '#', index }))
  const selectedItems = getSelectedItems(values, '#/')

  const meta = {
    uri: '#/',
    type: 'null',
    schema: rootSchema,
    selectedItems,
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    oneOf: {
      items,
      selectedItems,
      id: '#/'
    }
  }

  return {
    meta,
    elements
  }
}

export function transformNullForAllOf (rootSchema, values, params) {
  /*
   *  log('transformNullForAllOf')
   */
  const { allOf, ...rest } = rootSchema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  const metaProps = getMetaProps(params, '#/')

  const title = getTitle(rootSchema)
  const description = getDescription(rootSchema)

  const meta = {
    uri: '#/',
    type: 'null',
    schema: rootSchema,
    ...getMetaDefaultValue(itemSchema, '#/'),
    ...getMetaValue(values, '#/', itemSchema),
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    field: {
      ...getElementsFieldValue(values, '#/', itemSchema),
      ...getElementsFieldProps(params, '#/'),
      id: '#/'
    }
  }

  return {
    meta,
    elements
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
export function transformNull (rootSchema, values, params) {
  /*
   *  log('transformNull (1)')
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
        } else {
          /*
           *  log('transformNull (2)')
           */
          const metaProps = getMetaProps(params, '#/')

          const title = getTitle(rootSchema)
          const description = getDescription(rootSchema)

          const meta = {
            uri: '#/',
            type: 'null',
            schema: rootSchema,
            ...getMetaDefaultValue(rootSchema, '#/'),
            ...getMetaValue(values, '#/', rootSchema),
            ...metaProps
          }

          const elements = {
            ...title,
            ...description,
            field: {
              ...getElementsFieldValue(values, '#/', rootSchema),
              ...getElementsFieldProps(params, '#/'),
              id: '#/'
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

export function transformBooleanForEnum (rootSchema, values, params) {
  /*
   *  log('transformBooleanForEnum')
   */
  const metaProps = getMetaProps(params, '#/')

  const title = getTitle(rootSchema)
  const description = getDescription(rootSchema)
  const items = getEnum(rootSchema)

  const selectedItems = getSelectedItems(values, '#/')

  const meta = {
    uri: '#/',
    type: 'boolean',
    schema: rootSchema,
    selectedItems,
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    enum: {
      items,
      selectedItems,
      id: '#/'
    }
  }

  return {
    meta,
    elements
  }
}

export function transformBooleanForAnyOf (rootSchema, values, params) {
  /*
   *  log('transformBooleanForAnyOf')
   */
  const metaProps = getMetaProps(params, '#/')

  const title = getTitle(rootSchema)
  const description = getDescription(rootSchema)

  const { anyOf } = rootSchema
  const items = anyOf.map((schema, index) => transformArraySchemaBoolean(schema, rootSchema, values, { ...params, parentUri: '#', index }))
  const selectedItems = getSelectedItems(values, '#/')

  const meta = {
    uri: '#/',
    type: 'boolean',
    schema: rootSchema,
    selectedItems,
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    anyOf: {
      items,
      selectedItems,
      id: '#/'
    }
  }

  return {
    meta,
    elements
  }
}

export function transformBooleanForOneOf (rootSchema, values, params) {
  /*
   *  log('transformBooleanForOneOf')
   */
  const metaProps = getMetaProps(params, '#/')

  const title = getTitle(rootSchema)
  const description = getDescription(rootSchema)

  const { oneOf } = rootSchema
  const items = oneOf.map((schema, index) => transformArraySchemaBoolean(schema, rootSchema, values, { ...params, parentUri: '#', index }))
  const selectedItems = getSelectedItems(values, '#/')

  const meta = {
    uri: '#/',
    type: 'boolean',
    schema: rootSchema,
    selectedItems,
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    oneOf: {
      items,
      selectedItems,
      id: '#/'
    }
  }

  return {
    meta,
    elements
  }
}

export function transformBooleanForAllOf (rootSchema, values, params) {
  /*
   *  log('transformBooleanForAllOf')
   */
  const { allOf, ...rest } = rootSchema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  const metaProps = getMetaProps(params, '#/')

  const title = getTitle(rootSchema)
  const description = getDescription(rootSchema)

  const meta = {
    uri: '#/',
    type: 'boolean',
    schema: rootSchema,
    ...getMetaDefaultValue(itemSchema, '#/'),
    ...getMetaValue(values, '#/', itemSchema),
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    field: {
      ...getElementsFieldValue(values, '#/', itemSchema),
      ...getElementsFieldProps(params, '#/'),
      id: '#/'
    }
  }

  return {
    meta,
    elements
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
export function transformBoolean (rootSchema, values, params) {
  /*
   *  log('transformBoolean (1)')
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
        } else {
          /*
           *  log('transformBoolean (2)')
           */
          const metaProps = getMetaProps(params, '#/')

          const title = getTitle(rootSchema)
          const description = getDescription(rootSchema)

          const meta = {
            uri: '#/',
            type: 'boolean',
            schema: rootSchema,
            ...getMetaDefaultValue(rootSchema, '#/'),
            ...getMetaValue(values, '#/', rootSchema),
            ...metaProps
          }

          const elements = {
            ...title,
            ...description,
            field: {
              ...getElementsFieldValue(values, '#/', rootSchema),
              ...getElementsFieldProps(params, '#/'),
              id: '#/'
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

export function transformObjectForEnum (rootSchema, values, params) {
  /*
   *  log('transformObjectForEnum')
   */
  const metaProps = getMetaProps(params, '#/')

  const title = getTitle(rootSchema)
  const description = getDescription(rootSchema)

  const items = getEnum(rootSchema) // `enum` is a reserved word
  const selectedItems = getSelectedItems(values, '#/')

  const minProperties = getMinProperties(rootSchema)
  const maxProperties = getMaxProperties(rootSchema)

  const meta = {
    uri: '#/',
    type: 'object',
    schema: rootSchema,
    ...minProperties,
    ...maxProperties,
    ...getMetaDefaultValue(rootSchema, '#/'),
    ...getMetaValue(values, '#/', rootSchema),
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
      id: '#/'
    }
  }

  return {
    meta,
    elements
  }
}

export function transformObjectForAnyOf (rootSchema, values, params) {
  /*
   *  log('transformObjectForAnyOf')
   */
  const metaProps = getMetaProps(params, '#/')

  const title = getTitle(rootSchema)
  const description = getDescription(rootSchema)

  const { anyOf } = rootSchema
  const items = anyOf.map((schema, index) => transformArraySchemaObject(schema, rootSchema, values, { ...params, parentUri: '#', index }))
  const selectedItems = getSelectedItems(values, '#/')

  const minProperties = getMinProperties(rootSchema)
  const maxProperties = getMaxProperties(rootSchema)

  const meta = {
    uri: '#/',
    type: 'object',
    schema: rootSchema,
    ...minProperties,
    ...maxProperties,
    ...getMetaDefaultValue(rootSchema, '#/'),
    ...getMetaValue(values, '#/', rootSchema),
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
      id: '#/'
    }
  }

  return {
    meta,
    elements
  }
}

export function transformObjectForOneOf (rootSchema, values, params) {
  /*
   *  log('transformObjectForOneOf')
   */
  const metaProps = getMetaProps(params, '#/')

  const title = getTitle(rootSchema)
  const description = getDescription(rootSchema)

  const { oneOf } = rootSchema
  const items = oneOf.map((schema, index) => transformArraySchemaObject(schema, rootSchema, values, { ...params, parentUri: '#', index }))
  const selectedItems = getSelectedItems(values, '#/')

  const minProperties = getMinProperties(rootSchema)
  const maxProperties = getMaxProperties(rootSchema)

  const meta = {
    uri: '#/',
    type: 'object',
    schema: rootSchema,
    ...minProperties,
    ...maxProperties,
    ...getMetaDefaultValue(rootSchema, '#/'),
    ...getMetaValue(values, '#/', rootSchema),
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
      id: '#/'
    }
  }

  return {
    meta,
    elements
  }
}

export function transformObjectForAllOf (rootSchema, values, params) { // As-is
  /*
   *  log('transformObjectForAllOf')
   */
  const { allOf, ...rest } = rootSchema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  const metaProps = getMetaProps(params, '#/')

  const title = getTitle(rootSchema)
  const description = getDescription(rootSchema)

  const minProperties = getMinProperties(itemSchema)
  const maxProperties = getMaxProperties(itemSchema)

  const meta = {
    uri: '#/',
    type: 'object',
    schema: rootSchema,
    ...minProperties,
    ...maxProperties,
    ...getMetaDefaultValue(itemSchema, '#/'),
    ...getMetaValue(values, '#/', itemSchema),
    ...metaProps
  }

  const {
    properties = {},
    required = []
  } = itemSchema

  const elements = {
    ...title,
    ...description,
    fields: (
      Object
        .entries(properties)
        .map(([key, schema]) => transformObjectSchema(schema, rootSchema, values, { ...params, required: required.includes(key), parentUri: '#', key }))
    )
  }

  return {
    meta,
    elements
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.5
export function transformObject (rootSchema, values, params) {
  /*
   *  log('transformObject (1)')
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
        } else {
          /*
           *  log('transformObject (2)')
           */
          const metaProps = getMetaProps(params, '#/')

          const title = getTitle(rootSchema)
          const description = getDescription(rootSchema)

          const minProperties = getMinProperties(rootSchema)
          const maxProperties = getMaxProperties(rootSchema)

          const meta = {
            uri: '#/',
            type: 'object',
            schema: rootSchema,
            ...minProperties,
            ...maxProperties,
            ...getMetaDefaultValue(rootSchema, '#/'),
            ...getMetaValue(values, '#/', rootSchema),
            ...metaProps
          }

          const {
            properties = {},
            required = []
          } = rootSchema

          const elements = {
            ...title,
            ...description,
            fields: (
              Object
                .entries(properties)
                .map(([key, schema]) => transformObjectSchema(schema, rootSchema, values, { ...params, required: required.includes(key), parentUri: '#', key }))
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

export function transformArrayForEnum (rootSchema, values, params) {
  /*
   *  log('transformArrayForEnum')
   */
  const metaProps = getMetaProps(params, '#/')

  const title = getTitle(rootSchema)
  const description = getDescription(rootSchema)

  const items = getEnum(rootSchema) // `enum` is a reserved word
  const selectedItems = getSelectedItems(values, '#/')

  const minItems = getMinItems(rootSchema)
  const maxItems = getMaxItems(rootSchema)
  const hasUniqueItems = getHasUniqueItems(rootSchema)
  const maxContains = getMaxContains(rootSchema)
  const minContains = getMinContains(rootSchema)

  const meta = {
    uri: '#/',
    type: 'array',
    schema: rootSchema,
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
      id: '#/'
    }
  }

  return {
    meta,
    elements
  }
}

export function transformArrayForAnyOf (rootSchema, values, params) {
  /*
   *  log('transformArrayForAnyOf')
   */
  const metaProps = getMetaProps(params, '#/')

  const title = getTitle(rootSchema)
  const description = getDescription(rootSchema)

  const { anyOf } = rootSchema
  const items = anyOf.map((schema, index) => transformArraySchemaArray(schema, rootSchema, values, { ...params, parentUri: '#', index }))
  const selectedItems = getSelectedItems(values, '#/')

  const minItems = getMinItems(rootSchema)
  const maxItems = getMaxItems(rootSchema)
  const hasUniqueItems = getHasUniqueItems(rootSchema)
  const maxContains = getMaxContains(rootSchema)
  const minContains = getMinContains(rootSchema)

  const meta = {
    uri: '#/',
    type: 'array',
    schema: rootSchema,
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
      id: '#/'
    }
  }

  return {
    meta,
    elements
  }
}

export function transformArrayForOneOf (rootSchema, values, params) {
  /*
   *  log('transformArrayForOneOf')
   */
  const metaProps = getMetaProps(params, '#/')

  const title = getTitle(rootSchema)
  const description = getDescription(rootSchema)

  const { oneOf } = rootSchema
  const items = oneOf.map((schema, index) => transformArraySchemaArray(schema, rootSchema, values, { ...params, parentUri: '#', index }))
  const selectedItems = getSelectedItems(values, '#/')

  const minItems = getMinItems(rootSchema)
  const maxItems = getMaxItems(rootSchema)
  const hasUniqueItems = getHasUniqueItems(rootSchema)
  const maxContains = getMaxContains(rootSchema)
  const minContains = getMinContains(rootSchema)

  const meta = {
    uri: '#/',
    type: 'array',
    schema: rootSchema,
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
      id: '#/'
    }
  }

  return {
    meta,
    elements
  }
}

export function transformArrayForAllOf (rootSchema, values, params) {
  /*
   *  log('transformArrayForAllOf')
   */
  const { allOf, ...rest } = rootSchema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  const metaProps = getMetaProps(params, '#/')

  const title = getTitle(rootSchema)
  const description = getDescription(rootSchema)

  const minItems = getMinItems(itemSchema)
  const maxItems = getMaxItems(itemSchema)
  const hasUniqueItems = getHasUniqueItems(itemSchema)
  const maxContains = getMaxContains(itemSchema)
  const minContains = getMinContains(itemSchema)

  const meta = {
    uri: '#/',
    type: 'array',
    schema: rootSchema,
    ...minItems,
    ...maxItems,
    ...hasUniqueItems,
    ...maxContains,
    ...minContains,
    ...getMetaDefaultValue(itemSchema, '#/'),
    ...getMetaValue(values, '#/', itemSchema),
    ...metaProps
  }

  const {
    items = [] // array or object
  } = itemSchema

  if (isArray(items)) {
    const elements = {
      ...title,
      ...description,
      fields: items.map((schema, index) => transformArraySchema(schema, rootSchema, values, { ...params, parentUri: '#', index }))
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
      transformArraySchema(items, rootSchema, values, { ...params, parentUri: '#' })
    ]
  }

  return {
    meta,
    elements
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.4
export function transformArray (rootSchema, values, params) {
  /*
   *  log('transformArray (1)')
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
        } else {
          /*
           *  log('transformArray (2)')
           */
          const metaProps = getMetaProps(params, '#/')

          const title = getTitle(rootSchema)
          const description = getDescription(rootSchema)

          const minItems = getMinItems(rootSchema)
          const maxItems = getMaxItems(rootSchema)
          const hasUniqueItems = getHasUniqueItems(rootSchema)
          const maxContains = getMaxContains(rootSchema)
          const minContains = getMinContains(rootSchema)

          const meta = {
            uri: '#/',
            type: 'array',
            schema: rootSchema,
            ...minItems,
            ...maxItems,
            ...hasUniqueItems,
            ...maxContains,
            ...minContains,
            ...getMetaDefaultValue(rootSchema, '#/'),
            ...getMetaValue(values, '#/', rootSchema),
            ...metaProps
          }

          const {
            items = [] // array or object
          } = rootSchema

          if (isArray(items)) {
            const elements = {
              ...title,
              ...description,
              fields: items.map((schema, index) => transformArraySchema(schema, rootSchema, values, { ...params, parentUri: '#', index }))
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
              transformArraySchema(items, rootSchema, values, { ...params, parentUri: '#' })
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

export function transformNumberForEnum (rootSchema, values, params) {
  /*
   *  log('transformNumberForEnum')
   */
  const metaProps = getMetaProps(params, '#/')

  const title = getTitle(rootSchema)
  const description = getDescription(rootSchema)

  const items = getEnum(rootSchema) // `enum` is a reserved word
  const selectedItems = getSelectedItems(values, '#/')

  const isExclusiveMin = getIsExclusiveMin(rootSchema)
  const isExclusiveMax = getIsExclusiveMax(rootSchema)

  const min = getMin(rootSchema)
  const max = getMax(rootSchema)
  const step = getStep(rootSchema)

  const meta = {
    uri: '#/',
    type: 'number',
    schema: rootSchema,
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
      id: '#/'
    }
  }

  return {
    meta,
    elements
  }
}

export function transformNumberForAnyOf (rootSchema, values, params) {
  /*
   *  log('transformNumberForAnyOf')
   */
  const metaProps = getMetaProps(params, '#/')

  const title = getTitle(rootSchema)
  const description = getDescription(rootSchema)

  const { anyOf } = rootSchema
  const items = anyOf.map((schema, index) => transformArraySchemaNumber(schema, rootSchema, values, { ...params, parentUri: '#', index }))
  const selectedItems = getSelectedItems(values, '#/')

  const isExclusiveMin = getIsExclusiveMin(rootSchema)
  const isExclusiveMax = getIsExclusiveMax(rootSchema)

  const min = getMin(rootSchema)
  const max = getMax(rootSchema)
  const step = getStep(rootSchema)

  const meta = {
    uri: '#/',
    type: 'number',
    schema: rootSchema,
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
      id: '#/'
    }
  }

  return {
    meta,
    elements
  }
}

export function transformNumberForOneOf (rootSchema, values, params) {
  /*
   *  log('transformNumberForOneOf')
   */
  const metaProps = getMetaProps(params, '#/')

  const title = getTitle(rootSchema)
  const description = getDescription(rootSchema)

  const { oneOf } = rootSchema
  const items = oneOf.map((schema, index) => transformArraySchemaNumber(schema, rootSchema, values, { ...params, parentUri: '#', index }))
  const selectedItems = getSelectedItems(values, '#/')

  const isExclusiveMin = getIsExclusiveMin(rootSchema)
  const isExclusiveMax = getIsExclusiveMax(rootSchema)

  const min = getMin(rootSchema)
  const max = getMax(rootSchema)
  const step = getStep(rootSchema)

  const meta = {
    uri: '#/',
    type: 'number',
    schema: rootSchema,
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
      id: '#/'
    }
  }

  return {
    meta,
    elements
  }
}

export function transformNumberForAllOf (rootSchema, values, params) {
  /*
   *  log('transformNumberForAllOf')
   */
  const { allOf, ...rest } = rootSchema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  const metaProps = getMetaProps(params, '#/')

  const title = getTitle(rootSchema)
  const description = getDescription(rootSchema)

  const isExclusiveMin = getIsExclusiveMin(itemSchema)
  const isExclusiveMax = getIsExclusiveMax(itemSchema)

  const min = getMin(itemSchema)
  const max = getMax(itemSchema)
  const step = getStep(itemSchema)

  const meta = {
    uri: '#/',
    type: 'number',
    schema: rootSchema,
    ...isExclusiveMin,
    ...isExclusiveMax,
    ...min,
    ...max,
    ...step,
    ...getMetaDefaultValue(itemSchema, '#/'),
    ...getMetaValue(values, '#/', itemSchema),
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    field: {
      ...min,
      ...max,
      ...step,
      ...getElementsFieldValue(values, '#/', itemSchema),
      ...getElementsFieldProps(params, '#/'),
      id: '#/'
    }
  }

  return {
    meta,
    elements
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.1
export function transformNumber (rootSchema, values, params) {
  /*
   *  log('transformNumber (1)')
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
        } else {
          /*
           *  log('transformNumber (2)')
           */
          const metaProps = getMetaProps(params, '#/')

          const title = getTitle(rootSchema)
          const description = getDescription(rootSchema)

          const isExclusiveMin = getIsExclusiveMin(rootSchema)
          const isExclusiveMax = getIsExclusiveMax(rootSchema)

          const min = getMin(rootSchema)
          const max = getMax(rootSchema)
          const step = getStep(rootSchema)

          const meta = {
            uri: '#/',
            type: 'number',
            schema: rootSchema,
            ...isExclusiveMin,
            ...isExclusiveMax,
            ...min,
            ...max,
            ...step,
            ...getMetaDefaultValue(rootSchema, '#/'),
            ...getMetaValue(values, '#/', rootSchema),
            ...metaProps
          }

          const elements = {
            ...title,
            ...description,
            field: {
              ...min,
              ...max,
              ...step,
              ...getElementsFieldValue(values, '#/', rootSchema),
              ...getElementsFieldProps(params, '#/'),
              id: '#/'
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

export function transformStringForEnum (rootSchema, values, params) {
  /*
   *  log('transformStringForEnum')
   */
  const metaProps = getMetaProps(params, '#/')

  const title = getTitle(rootSchema)
  const description = getDescription(rootSchema)

  const items = getEnum(rootSchema) // `enum` is a reserved word
  const selectedItems = getSelectedItems(values, '#/')

  const minLength = getMinLength(rootSchema)
  const maxLength = getMaxLength(rootSchema)
  const pattern = getPattern(rootSchema)

  const meta = {
    uri: '#/',
    type: 'string',
    schema: rootSchema,
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
      id: '#/'
    }
  }

  return {
    meta,
    elements
  }
}

export function transformStringForAnyOf (rootSchema, values, params) {
  /*
   *  log('transformStringForAnyOf')
   */
  const metaProps = getMetaProps(params, '#/')

  const title = getTitle(rootSchema)
  const description = getDescription(rootSchema)

  const { anyOf } = rootSchema
  const items = anyOf.map((schema, index) => transformArraySchemaString(schema, rootSchema, values, { ...params, parentUri: '#', index }))
  const selectedItems = getSelectedItems(values, '#/')

  const minLength = getMinLength(rootSchema)
  const maxLength = getMaxLength(rootSchema)
  const pattern = getPattern(rootSchema)

  const meta = {
    uri: '#/',
    type: 'string',
    schema: rootSchema,
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
      id: '#/'
    }
  }

  return {
    meta,
    elements
  }
}

export function transformStringForOneOf (rootSchema, values, params) {
  /*
   *  log('transformStringForOneOf')
   */
  const metaProps = getMetaProps(params, '#/')

  const title = getTitle(rootSchema)
  const description = getDescription(rootSchema)

  const { oneOf } = rootSchema
  const items = oneOf.map((schema, index) => transformArraySchemaString(schema, rootSchema, values, { ...params, parentUri: '#', index }))
  const selectedItems = getSelectedItems(values, '#/')

  const minLength = getMinLength(rootSchema)
  const maxLength = getMaxLength(rootSchema)
  const pattern = getPattern(rootSchema)

  const meta = {
    uri: '#/',
    type: 'string',
    schema: rootSchema,
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
      id: '#/'
    }
  }

  return {
    meta,
    elements
  }
}

export function transformStringForAllOf (rootSchema, values, params) {
  /*
   *  log('transformStringForAllOf')
   */
  const { allOf, ...rest } = rootSchema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  const metaProps = getMetaProps(params, '#/')

  const title = getTitle(rootSchema)
  const description = getDescription(rootSchema)

  const minLength = getMinLength(itemSchema)
  const maxLength = getMaxLength(itemSchema)
  const pattern = getPattern(itemSchema)

  const meta = {
    uri: '#/',
    type: 'string',
    schema: rootSchema,
    ...minLength,
    ...maxLength,
    ...pattern,
    ...getMetaDefaultValue(itemSchema, '#/'),
    ...getMetaValue(values, '#/', itemSchema),
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    field: {
      ...minLength,
      ...maxLength,
      ...pattern,
      ...getElementsFieldValue(values, '#/', itemSchema),
      ...getElementsFieldProps(params, '#/'),
      id: '#/'
    }
  }

  return {
    meta,
    elements
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.3
export function transformString (rootSchema, values, params) {
  /*
   *  log('transformString (1)')
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
        } else {
          /*
           *  log('transformString (2)')
           */
          const metaProps = getMetaProps(params, '#/')

          const title = getTitle(rootSchema)
          const description = getDescription(rootSchema)

          const minLength = getMinLength(rootSchema)
          const maxLength = getMaxLength(rootSchema)
          const pattern = getPattern(rootSchema)

          const meta = {
            uri: '#/',
            type: 'string',
            schema: rootSchema,
            ...minLength,
            ...maxLength,
            ...pattern,
            ...getMetaDefaultValue(rootSchema, '#/'),
            ...getMetaValue(values, '#/', rootSchema),
            ...metaProps
          }

          const elements = {
            ...title,
            ...description,
            field: {
              ...minLength,
              ...maxLength,
              ...pattern,
              ...getElementsFieldValue(values, '#/', rootSchema),
              ...getElementsFieldProps(params, '#/'),
              id: '#/'
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
