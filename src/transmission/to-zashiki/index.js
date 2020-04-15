import debug from 'debug'

import {
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
  getElementsFieldProps,
  getElementsFieldValue
} from 'shinkansen-transmission/transmission/common'

const {
  env: {
    DEBUG = 'shinkansen-transmission:*'
  }
} = process

debug.enable(DEBUG)

const log = debug('shinkansen-transmission:to-zashiki')

const getParentUri = (parentUri = '#') => parentUri === '#' ? '#/' : parentUri

export function transformObjectSchemaNullForEnum (schema, rootSchema, values, params) {
  // log('transformObjectSchemaNullForEnum')

  const {
    required: isRequired = false,
    parentUri,
    key: fieldKey
  } = params

  const uri = getUri(parentUri, fieldKey)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const items = getEnum(schema)
  const selectedItems = getSelectedItems(values, uri)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    name: fieldKey,
    type: 'null',
    schema,
    rootSchema,
    required: isRequired,
    selectedItems,
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    enum: {
      items,
      required: isRequired,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformObjectSchemaNullForAnyOf (schema, rootSchema, values, params) {
  // log('transformObjectSchemaNullForAnyOf')

  const {
    required: isRequired = false,
    parentUri,
    key: fieldKey
  } = params

  const uri = getUri(parentUri, fieldKey)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const { anyOf } = schema
  const items = anyOf.map((schema, index) => transformArraySchemaNull(schema, rootSchema, values, { ...params, parentUri: uri, index }))
  const selectedItems = getSelectedItems(values, uri)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    name: fieldKey,
    type: 'null',
    schema,
    rootSchema,
    required: isRequired,
    selectedItems,
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    anyOf: {
      items,
      required: isRequired,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformObjectSchemaNullForOneOf (schema, rootSchema, values, params) {
  // log('transformObjectSchemaNullForOneOf')

  const {
    required: isRequired = false,
    parentUri,
    key: fieldKey
  } = params

  const uri = getUri(parentUri, fieldKey)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const { oneOf } = schema
  const items = oneOf.map((schema, index) => transformArraySchemaNull(schema, rootSchema, values, { ...params, parentUri: uri, index }))
  const selectedItems = getSelectedItems(values, uri)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    name: fieldKey,
    type: 'null',
    schema,
    rootSchema,
    required: isRequired,
    selectedItems,
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    oneOf: {
      items,
      required: isRequired,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformObjectSchemaNullForAllOf (schema, rootSchema, values, params) {
  // log('transformObjectSchemaNullForAllOf')

  const { allOf, ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  // log(itemSchema, schema)

  const {
    required: isRequired = false,
    parentUri,
    key: fieldKey
  } = params

  const uri = getUri(parentUri, fieldKey)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    name: fieldKey,
    type: 'null',
    schema,
    rootSchema,
    required: isRequired,
    ...getMetaDefaultValue(itemSchema, uri),
    ...getMetaValue(values, uri, itemSchema),
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    field: {
      required: isRequired,
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

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
export function transformObjectSchemaNull (schema, rootSchema, values, params) {
  // log('transformObjectSchemaNull')

  if (hasEnum(schema)) {
    return transformObjectSchemaNullForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformObjectSchemaNullForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformObjectSchemaNullForOneOf(schema, rootSchema, values, params)
      } else {
        if (hasAllOf(schema)) {
          return transformObjectSchemaNullForAllOf(schema, rootSchema, values, params)
        } else {
          const {
            required: isRequired = false,
            parentUri,
            key: fieldKey
          } = params

          const uri = getUri(parentUri, fieldKey)

          const metaProps = getMetaProps(params, uri)

          const title = getTitle(schema)
          const description = getDescription(schema)

          const meta = {
            parentUri: getParentUri(parentUri),
            uri,
            name: fieldKey,
            type: 'null',
            schema,
            rootSchema,
            required: isRequired,
            ...getMetaDefaultValue(schema, uri),
            ...getMetaValue(values, uri, schema),
            ...metaProps
          }

          const elements = {
            ...title,
            ...description,
            field: {
              required: isRequired,
              ...getElementsFieldValue(values, uri, schema),
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

export function transformObjectSchemaBooleanForEnum (schema, rootSchema, values, params) {
  // log('transformObjectSchemaBooleanForEnum')

  const {
    required: isRequired = false,
    parentUri,
    key: fieldKey
  } = params

  const uri = getUri(parentUri, fieldKey)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const items = getEnum(schema)
  const selectedItems = getSelectedItems(values, uri)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    name: fieldKey,
    type: 'boolean',
    schema,
    rootSchema,
    required: isRequired,
    selectedItems,
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    enum: {
      items,
      required: isRequired,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformObjectSchemaBooleanForAnyOf (schema, rootSchema, values, params) {
  // log('transformObjectSchemaBooleanForAnyOf')

  const {
    required: isRequired = false,
    parentUri,
    key: fieldKey
  } = params

  const uri = getUri(parentUri, fieldKey)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const { anyOf } = schema
  const items = anyOf.map((schema, index) => transformArraySchemaBoolean(schema, rootSchema, values, { ...params, parentUri: uri, index }))
  const selectedItems = getSelectedItems(values, uri)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    name: fieldKey,
    type: 'boolean',
    schema,
    rootSchema,
    required: isRequired,
    selectedItems,
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    anyOf: {
      items,
      required: isRequired,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformObjectSchemaBooleanForOneOf (schema, rootSchema, values, params) {
  // log('transformObjectSchemaBooleanForOneOf')

  const {
    required: isRequired = false,
    parentUri,
    key: fieldKey
  } = params

  const uri = getUri(parentUri, fieldKey)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const { oneOf } = schema
  const items = oneOf.map((schema, index) => transformArraySchemaBoolean(schema, rootSchema, values, { ...params, parentUri: uri, index }))
  const selectedItems = getSelectedItems(values, uri)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    name: fieldKey,
    type: 'boolean',
    schema,
    rootSchema,
    required: isRequired,
    selectedItems,
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    oneOf: {
      items,
      required: isRequired,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformObjectSchemaBooleanForAllOf (schema, rootSchema, values, params) {
  // log('transformObjectSchemaBooleanForAllOf')

  const { allOf, ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  // log(itemSchema, schema)

  const {
    required: isRequired = false,
    parentUri,
    key: fieldKey
  } = params

  const uri = getUri(parentUri, fieldKey)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    name: fieldKey,
    type: 'boolean',
    schema,
    rootSchema,
    required: isRequired,
    ...getMetaDefaultValue(itemSchema, uri),
    ...getMetaValue(values, uri, itemSchema),
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    field: {
      required: isRequired,
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

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
export function transformObjectSchemaBoolean (schema, rootSchema, values, params) {
  // log('transformObjectSchemaBoolean')

  if (hasEnum(schema)) {
    return transformObjectSchemaBooleanForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformObjectSchemaBooleanForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformObjectSchemaBooleanForOneOf(schema, rootSchema, values, params)
      } else {
        if (hasAllOf(schema)) {
          return transformObjectSchemaBooleanForAllOf(schema, rootSchema, values, params)
        } else {
          const {
            required: isRequired = false,
            parentUri,
            key: fieldKey
          } = params

          const uri = getUri(parentUri, fieldKey)

          const metaProps = getMetaProps(params, uri)

          const title = getTitle(schema)
          const description = getDescription(schema)

          const meta = {
            parentUri: getParentUri(parentUri),
            uri,
            name: fieldKey,
            type: 'boolean',
            schema,
            rootSchema,
            required: isRequired,
            ...getMetaDefaultValue(schema, uri),
            ...getMetaValue(values, uri, schema),
            ...metaProps
          }

          const elements = {
            ...title,
            ...description,
            field: {
              required: isRequired,
              ...getElementsFieldValue(values, uri, schema),
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

export function transformObjectSchemaObjectForEnum (schema, rootSchema, values, params) {
  // log('transformObjectSchemaObjectForEnum')

  const {
    required: isRequired = false,
    parentUri,
    key: fieldKey
  } = params

  const uri = getUri(parentUri, fieldKey)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const items = getEnum(schema) // `enum` is a reserved word
  const selectedItems = getSelectedItems(values, uri)

  const minProperties = getMinProperties(schema)
  const maxProperties = getMaxProperties(schema)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    name: fieldKey,
    type: 'object',
    schema,
    rootSchema,
    ...minProperties,
    ...maxProperties,
    required: isRequired,
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
      required: isRequired,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformObjectSchemaObjectForAnyOf (schema, rootSchema, values, params) {
  // log('transformObjectSchemaObjectForAnyOf')

  const {
    required: isRequired = false,
    parentUri,
    key: fieldKey
  } = params

  const uri = getUri(parentUri, fieldKey)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const { anyOf } = schema
  const items = anyOf.map((schema, index) => transformArraySchemaObject(schema, rootSchema, values, { ...params, parentUri: uri, index }))
  const selectedItems = getSelectedItems(values, uri)

  const minProperties = getMinProperties(schema)
  const maxProperties = getMaxProperties(schema)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    name: fieldKey,
    type: 'object',
    schema,
    rootSchema,
    ...minProperties,
    ...maxProperties,
    required: isRequired,
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
      required: isRequired,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformObjectSchemaObjectForOneOf (schema, rootSchema, values, params) {
  // log('transformObjectSchemaObjectForOneOf')

  const {
    required: isRequired = false,
    parentUri,
    key: fieldKey
  } = params

  const uri = getUri(parentUri, fieldKey)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const { oneOf } = schema
  const items = oneOf.map((schema, index) => transformArraySchemaObject(schema, rootSchema, values, { ...params, parentUri: uri, index }))
  const selectedItems = getSelectedItems(values, uri)

  const minProperties = getMinProperties(schema)
  const maxProperties = getMaxProperties(schema)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    name: fieldKey,
    type: 'object',
    schema,
    rootSchema,
    ...minProperties,
    ...maxProperties,
    required: isRequired,
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
      required: isRequired,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformObjectSchemaObjectForAllOf (schema, rootSchema, values, params) {
  // log('transformObjectSchemaObjectForAllOf')

  const { allOf, ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  // log(itemSchema, schema)

  const {
    required: isRequired = false,
    parentUri,
    key: fieldKey
  } = params

  const uri = getUri(parentUri, fieldKey)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const minProperties = getMinProperties(itemSchema)
  const maxProperties = getMaxProperties(itemSchema)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    name: fieldKey,
    type: 'object',
    schema,
    rootSchema,
    ...minProperties,
    ...maxProperties,
    required: isRequired,
    ...getMetaDefaultValue(itemSchema, uri),
    ...getMetaValue(values, uri, itemSchema),
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
        .map(([key, schema]) => transformObjectSchema(schema, rootSchema, values, { ...params, required: required.includes(key), parentUri: uri, key }))
    )
  }

  return {
    meta,
    elements
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.5
export function transformObjectSchemaObject (schema, rootSchema, values, params) {
  // log('transformObjectSchemaObject')

  if (hasEnum(schema)) {
    return transformObjectSchemaObjectForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformObjectSchemaObjectForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformObjectSchemaObjectForOneOf(schema, rootSchema, values, params)
      } else {
        if (hasAllOf(schema)) {
          return transformObjectSchemaObjectForAllOf(schema, rootSchema, values, params)
        } else {
          const {
            required: isRequired = false,
            parentUri,
            key: fieldKey
          } = params

          const uri = getUri(parentUri, fieldKey)

          const metaProps = getMetaProps(params, uri)

          const title = getTitle(schema)
          const description = getDescription(schema)

          const minProperties = getMinProperties(schema)
          const maxProperties = getMaxProperties(schema)

          const meta = {
            parentUri: getParentUri(parentUri),
            uri,
            name: fieldKey,
            type: 'object',
            schema,
            rootSchema,
            ...maxProperties,
            ...minProperties,
            required: isRequired,
            ...getMetaDefaultValue(schema, uri),
            ...getMetaValue(values, uri, schema),
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
                .map(([key, schema]) => transformObjectSchema(schema, rootSchema, values, { ...params, required: required.includes(key), parentUri: uri, key }))
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

export function transformObjectSchemaArrayForEnum (schema, rootSchema, values, params) {
  // log('transformObjectSchemaArrayForEnum')

  const {
    required: isRequired = false,
    parentUri,
    key: fieldKey
  } = params

  const uri = getUri(parentUri, fieldKey)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const items = getEnum(schema)
  const selectedItems = getSelectedItems(values, uri)

  const minItems = getMinItems(schema)
  const maxItems = getMaxItems(schema)
  const hasUniqueItems = getHasUniqueItems(schema)
  const maxContains = getMaxContains(schema)
  const minContains = getMinContains(schema)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    name: fieldKey,
    type: 'array',
    schema,
    rootSchema,
    ...minItems,
    ...maxItems,
    ...hasUniqueItems,
    ...maxContains,
    ...minContains,
    required: isRequired,
    selectedItems,
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    enum: {
      items,
      required: isRequired,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformObjectSchemaArrayForAnyOf (schema, rootSchema, values, params) {
  // log('transformObjectSchemaArrayForAnyOf')

  const {
    required: isRequired = false,
    parentUri,
    key: fieldKey
  } = params

  const uri = getUri(parentUri, fieldKey)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const { anyOf } = schema
  const items = anyOf.map((schema, index) => transformArraySchemaArray(schema, rootSchema, values, { ...params, parentUri: uri, index }))
  const selectedItems = getSelectedItems(values, uri)

  const minItems = getMinItems(schema)
  const maxItems = getMaxItems(schema)
  const hasUniqueItems = getHasUniqueItems(schema)
  const maxContains = getMaxContains(schema)
  const minContains = getMinContains(schema)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    name: fieldKey,
    type: 'array',
    schema,
    rootSchema,
    ...minItems,
    ...maxItems,
    ...hasUniqueItems,
    ...maxContains,
    ...minContains,
    required: isRequired,
    selectedItems,
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    anyOf: {
      items,
      required: isRequired,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformObjectSchemaArrayForOneOf (schema, rootSchema, values, params) {
  // log('transformObjectSchemaArrayForOneOf')

  const {
    required: isRequired = false,
    parentUri,
    key: fieldKey
  } = params

  const uri = getUri(parentUri, fieldKey)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const { oneOf } = schema
  const items = oneOf.map((schema, index) => transformArraySchemaArray(schema, rootSchema, values, { ...params, parentUri: uri, index }))
  const selectedItems = getSelectedItems(values, uri)

  const minItems = getMinItems(schema)
  const maxItems = getMaxItems(schema)
  const hasUniqueItems = getHasUniqueItems(schema)
  const maxContains = getMaxContains(schema)
  const minContains = getMinContains(schema)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    name: fieldKey,
    type: 'array',
    schema,
    rootSchema,
    ...minItems,
    ...maxItems,
    ...hasUniqueItems,
    ...maxContains,
    ...minContains,
    required: isRequired,
    selectedItems,
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    oneOf: {
      items,
      required: isRequired,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformObjectSchemaArrayForAllOf (schema, rootSchema, values, params) {
  // log('transformObjectSchemaArrayForAllOf')

  const { allOf, ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  // log(itemSchema, schema)

  const {
    required: isRequired = false,
    parentUri,
    key: fieldKey
  } = params

  const uri = getUri(parentUri, fieldKey)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const minItems = getMinItems(itemSchema)
  const maxItems = getMaxItems(itemSchema)
  const hasUniqueItems = getHasUniqueItems(itemSchema)
  const maxContains = getMaxContains(itemSchema)
  const minContains = getMinContains(itemSchema)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    name: fieldKey,
    type: 'array',
    schema,
    rootSchema,
    ...minItems,
    ...maxItems,
    ...hasUniqueItems,
    ...maxContains,
    ...minContains,
    required: isRequired,
    ...getMetaDefaultValue(itemSchema, uri),
    ...getMetaValue(values, uri, itemSchema),
    ...metaProps
  }

  const {
    items = [] // array or object
  } = itemSchema

  const fields = []
    .concat(items)
    .map((schema, index) => transformArraySchema(schema, rootSchema, values, { ...params, parentUri: uri, index }))

  const elements = {
    ...title,
    ...description,
    fields
  }

  return {
    meta,
    elements
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.4
export function transformObjectSchemaArray (schema, rootSchema, values, params) {
  // log('transformObjectSchemaArray')

  if (hasEnum(schema)) {
    return transformObjectSchemaArrayForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformObjectSchemaArrayForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformObjectSchemaArrayForOneOf(schema, rootSchema, values, params)
      } else {
        if (hasAllOf(schema)) {
          return transformObjectSchemaArrayForAllOf(schema, rootSchema, values, params)
        } else {
          const {
            required: isRequired = false,
            parentUri,
            key: fieldKey
          } = params

          const uri = getUri(parentUri, fieldKey)

          const metaProps = getMetaProps(params, uri)

          const title = getTitle(schema)
          const description = getDescription(schema)

          const minItems = getMinItems(schema)
          const maxItems = getMaxItems(schema)
          const hasUniqueItems = getHasUniqueItems(schema)
          const maxContains = getMaxContains(schema)
          const minContains = getMinContains(schema)

          const meta = {
            parentUri: getParentUri(parentUri),
            uri,
            name: fieldKey,
            type: 'array',
            schema,
            rootSchema,
            ...minItems,
            ...maxItems,
            ...hasUniqueItems,
            ...maxContains,
            ...minContains,
            required: isRequired,
            ...getMetaDefaultValue(schema, uri),
            ...getMetaValue(values, uri, schema),
            ...metaProps
          }

          const {
            items = [] // array or object
          } = schema

          const fields = []
            .concat(items)
            .map((schema, index) => transformArraySchema(schema, rootSchema, values, { ...params, parentUri: uri, index }))

          const elements = {
            ...title,
            ...description,
            fields
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

export function transformObjectSchemaNumberForEnum (schema, rootSchema, values, params) {
  // log('transformObjectSchemaNumberForEnum')

  const {
    required: isRequired = false,
    parentUri,
    key: fieldKey
  } = params

  const uri = getUri(parentUri, fieldKey)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const items = getEnum(schema) // `enum` is a reserved word
  const selectedItems = getSelectedItems(values, uri)

  const min = getMin(schema)
  const max = getMax(schema)
  const step = getStep(schema)

  const isExclusiveMin = getIsExclusiveMin(schema)
  const isExclusiveMax = getIsExclusiveMax(schema)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    name: fieldKey,
    type: 'number',
    schema,
    rootSchema,
    ...isExclusiveMin,
    ...isExclusiveMax,
    ...min,
    ...max,
    ...step,
    required: isRequired,
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
      required: isRequired,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformObjectSchemaNumberForAnyOf (schema, rootSchema, values, params) {
  // log('transformObjectSchemaNumberForAnyOf')

  const {
    required: isRequired = false,
    parentUri,
    key: fieldKey
  } = params

  const uri = getUri(parentUri, fieldKey)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const { anyOf } = schema
  const items = anyOf.map((schema, index) => transformArraySchemaNumber(schema, rootSchema, values, { ...params, parentUri: uri, index }))
  const selectedItems = getSelectedItems(values, uri)

  const min = getMin(schema)
  const max = getMax(schema)
  const step = getStep(schema)

  const isExclusiveMin = getIsExclusiveMin(schema)
  const isExclusiveMax = getIsExclusiveMax(schema)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    name: fieldKey,
    type: 'number',
    schema,
    rootSchema,
    ...isExclusiveMin,
    ...isExclusiveMax,
    ...min,
    ...max,
    ...step,
    required: isRequired,
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
      required: isRequired,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformObjectSchemaNumberForOneOf (schema, rootSchema, values, params) {
  // log('transformObjectSchemaNumberForOneOf')

  const {
    required: isRequired = false,
    parentUri,
    key: fieldKey
  } = params

  const uri = getUri(parentUri, fieldKey)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const { oneOf } = schema
  const items = oneOf.map((schema, index) => transformArraySchemaNumber(schema, rootSchema, values, { ...params, parentUri: uri, index }))
  const selectedItems = getSelectedItems(values, uri)

  const min = getMin(schema)
  const max = getMax(schema)
  const step = getStep(schema)

  const isExclusiveMin = getIsExclusiveMin(schema)
  const isExclusiveMax = getIsExclusiveMax(schema)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    name: fieldKey,
    type: 'number',
    schema,
    rootSchema,
    ...isExclusiveMin,
    ...isExclusiveMax,
    ...min,
    ...max,
    ...step,
    required: isRequired,
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
      required: isRequired,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformObjectSchemaNumberForAllOf (schema, rootSchema, values, params) {
  // log('transformObjectSchemaNumberForAllOf')

  const { allOf, ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  // log(itemSchema, schema)

  const {
    required: isRequired = false,
    parentUri,
    key: fieldKey
  } = params

  const uri = getUri(parentUri, fieldKey)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const min = getMin(itemSchema)
  const max = getMax(itemSchema)
  const step = getStep(itemSchema)

  const isExclusiveMin = getIsExclusiveMin(itemSchema)
  const isExclusiveMax = getIsExclusiveMax(itemSchema)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    name: fieldKey,
    type: 'number',
    schema,
    rootSchema,
    ...isExclusiveMin,
    ...isExclusiveMax,
    ...min,
    ...max,
    ...step,
    required: isRequired,
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
      required: isRequired,
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

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.2
export function transformObjectSchemaNumber (schema, rootSchema, values, params) {
  // log('transformObjectSchemaNumber')

  if (hasEnum(schema)) {
    return transformObjectSchemaNumberForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformObjectSchemaNumberForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformObjectSchemaNumberForOneOf(schema, rootSchema, values, params)
      } else {
        if (hasAllOf(schema)) {
          return transformObjectSchemaNumberForAllOf(schema, rootSchema, values, params)
        } else {
          const {
            required: isRequired = false,
            parentUri,
            key: fieldKey
          } = params

          const uri = getUri(parentUri, fieldKey)

          const metaProps = getMetaProps(params, uri)

          const title = getTitle(schema)
          const description = getDescription(schema)

          const min = getMin(schema)
          const max = getMax(schema)
          const step = getStep(schema)

          const isExclusiveMin = getIsExclusiveMin(schema)
          const isExclusiveMax = getIsExclusiveMax(schema)

          const meta = {
            parentUri: getParentUri(parentUri),
            uri,
            name: fieldKey,
            type: 'number',
            schema,
            rootSchema,
            ...isExclusiveMin,
            ...isExclusiveMax,
            ...min,
            ...max,
            ...step,
            required: isRequired,
            ...getMetaDefaultValue(schema, uri),
            ...getMetaValue(values, uri, schema),
            ...metaProps
          }

          const elements = {
            ...title,
            ...description,
            field: {
              ...min,
              ...max,
              ...step,
              required: isRequired,
              ...getElementsFieldValue(values, uri, schema),
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

export function transformObjectSchemaStringForEnum (schema, rootSchema, values, params) {
  // log('transformObjectSchemaStringForEnum')

  const {
    required: isRequired = false,
    parentUri,
    key: fieldKey
  } = params

  const uri = getUri(parentUri, fieldKey)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const items = getEnum(schema) // `enum` is a reserved word
  const selectedItems = getSelectedItems(values, uri)

  const minLength = getMinLength(schema)
  const maxLength = getMaxLength(schema)
  const pattern = getPattern(schema)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    name: fieldKey,
    type: 'string',
    schema,
    rootSchema,
    ...minLength,
    ...maxLength,
    ...pattern,
    required: isRequired,
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
      required: isRequired,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformObjectSchemaStringForAnyOf (schema, rootSchema, values, params) {
  // log('transformObjectSchemaStringForAnyOf')

  const {
    required: isRequired = false,
    parentUri,
    key: fieldKey
  } = params

  const uri = getUri(parentUri, fieldKey)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const { anyOf } = schema
  const items = anyOf.map((schema, index) => transformArraySchemaString(schema, rootSchema, values, { ...params, parentUri: uri, index }))
  const selectedItems = getSelectedItems(values, uri)

  const minLength = getMinLength(schema)
  const maxLength = getMaxLength(schema)
  const pattern = getPattern(schema)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    name: fieldKey,
    type: 'string',
    schema,
    rootSchema,
    ...minLength,
    ...maxLength,
    ...pattern,
    required: isRequired,
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
      required: isRequired,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformObjectSchemaStringForOneOf (schema, rootSchema, values, params) {
  // log('transformObjectSchemaStringForOneOf')

  const {
    required: isRequired = false,
    parentUri,
    key: fieldKey
  } = params

  const uri = getUri(parentUri, fieldKey)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const { oneOf } = schema
  const items = oneOf.map((schema, index) => transformArraySchemaString(schema, rootSchema, values, { ...params, parentUri: uri, index }))
  const selectedItems = getSelectedItems(values, uri)

  const minLength = getMinLength(schema)
  const maxLength = getMaxLength(schema)
  const pattern = getPattern(schema)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    name: fieldKey,
    type: 'string',
    schema,
    rootSchema,
    ...minLength,
    ...maxLength,
    ...pattern,
    required: isRequired,
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
      required: isRequired,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformObjectSchemaStringForAllOf (schema, rootSchema, values, params) {
  // log('transformObjectSchemaStringForAllOf')

  const { allOf, ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  // log(itemSchema, schema)

  const {
    required: isRequired = false,
    parentUri,
    key: fieldKey
  } = params

  const uri = getUri(parentUri, fieldKey)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const minLength = getMinLength(itemSchema)
  const maxLength = getMaxLength(itemSchema)
  const pattern = getPattern(itemSchema)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    name: fieldKey,
    type: 'string',
    schema,
    rootSchema,
    ...minLength,
    ...maxLength,
    ...pattern,
    required: isRequired,
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
      required: isRequired,
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

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.3
export function transformObjectSchemaString (schema, rootSchema, values, params) {
  // log('transformObjectSchemaString')

  if (hasEnum(schema)) {
    return transformObjectSchemaStringForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformObjectSchemaStringForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformObjectSchemaStringForOneOf(schema, rootSchema, values, params)
      } else {
        if (hasAllOf(schema)) {
          return transformObjectSchemaStringForAllOf(schema, rootSchema, values, params)
        } else {
          const {
            required: isRequired = false,
            parentUri,
            key: fieldKey
          } = params

          const uri = getUri(parentUri, fieldKey)

          const metaProps = getMetaProps(params, uri)

          const title = getTitle(schema)
          const description = getDescription(schema)

          const minLength = getMinLength(schema)
          const maxLength = getMaxLength(schema)
          const pattern = getPattern(schema)

          const meta = {
            parentUri: getParentUri(parentUri),
            uri,
            name: fieldKey,
            type: 'string',
            schema,
            rootSchema,
            ...minLength,
            ...maxLength,
            ...pattern,
            required: isRequired,
            ...getMetaDefaultValue(schema, uri),
            ...getMetaValue(values, uri, schema),
            ...metaProps
          }

          const elements = {
            ...title,
            ...description,
            field: {
              ...minLength,
              ...maxLength,
              ...pattern,
              required: isRequired,
              ...getElementsFieldValue(values, uri, schema),
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

export function transformObjectSchema (schema = {}, rootSchema = schema, values = {}, params = {}) {
  // log('transformObjectSchema')

  const { type } = schema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  switch (type) {
    case 'null':
      return transformObjectSchemaNull(schema, rootSchema, values, params)

    case 'boolean':
      return transformObjectSchemaBoolean(schema, rootSchema, values, params)

    case 'object':
      return transformObjectSchemaObject(schema, rootSchema, values, params)

    case 'array':
      return transformObjectSchemaArray(schema, rootSchema, values, params)

    case 'number':
      return transformObjectSchemaNumber(schema, rootSchema, values, params)

    case 'string':
      return transformObjectSchemaString(schema, rootSchema, values, params)

    default:
      throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
  }
}

export function transformArraySchemaNullForEnum (schema, rootSchema, values, params) {
  // log('transformArraySchemaNullForEnum')

  const {
    required: isRequired = false,
    parentUri,
    index: arrayIndex
  } = params

  const uri = getUri(parentUri, arrayIndex)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const items = getEnum(schema)
  const selectedItems = getSelectedItems(values, uri)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    item: arrayIndex,
    type: 'null',
    schema,
    rootSchema,
    required: isRequired,
    selectedItems,
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    enum: {
      items,
      required: isRequired,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformArraySchemaNullForAnyOf (schema, rootSchema, values, params) {
  // log('transformArraySchemaNullForAnyOf')

  const {
    required: isRequired = false,
    parentUri,
    index: arrayIndex
  } = params

  const uri = getUri(parentUri, arrayIndex)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const { anyOf } = schema
  const items = anyOf.map((schema, index) => transformArraySchemaNull(schema, rootSchema, values, { ...params, parentUri: uri, index }))
  const selectedItems = getSelectedItems(values, uri)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    item: arrayIndex,
    type: 'null',
    schema,
    rootSchema,
    required: isRequired,
    selectedItems,
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    anyOf: {
      items,
      required: isRequired,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformArraySchemaNullForOneOf (schema, rootSchema, values, params) {
  // log('transformArraySchemaNullForOneOf')

  const {
    required: isRequired = false,
    parentUri,
    index: arrayIndex
  } = params

  const uri = getUri(parentUri, arrayIndex)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const { oneOf } = schema
  const items = oneOf.map((schema, index) => transformArraySchemaNull(schema, rootSchema, values, { ...params, parentUri: uri, index }))
  const selectedItems = getSelectedItems(values, uri)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    item: arrayIndex,
    type: 'null',
    schema,
    rootSchema,
    required: isRequired,
    selectedItems,
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    oneOf: {
      items,
      required: isRequired,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformArraySchemaNullForAllOf (schema, rootSchema, values, params) {
  // log('transformArraySchemaNullForAllOf')

  const { allOf, ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  // log(itemSchema, schema)

  const {
    required: isRequired = false,
    parentUri,
    index: arrayIndex
  } = params

  const uri = getUri(parentUri, arrayIndex)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    item: arrayIndex,
    type: 'null',
    schema,
    rootSchema,
    required: isRequired,
    ...getMetaDefaultValue(itemSchema, uri),
    ...getMetaValue(values, uri, itemSchema),
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    field: {
      required: isRequired,
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

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
export function transformArraySchemaNull (schema, rootSchema, values, params) {
  // log('transformArraySchemaNull')

  if (hasEnum(schema)) {
    return transformArraySchemaNullForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformArraySchemaNullForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformArraySchemaNullForOneOf(schema, rootSchema, values, params)
      } else {
        if (hasAllOf(schema)) {
          return transformArraySchemaNullForAllOf(schema, rootSchema, values, params)
        } else {
          const {
            required: isRequired = false,
            parentUri,
            index: arrayIndex
          } = params

          const uri = getUri(parentUri, arrayIndex)

          const metaProps = getMetaProps(params, uri)

          const title = getTitle(schema)
          const description = getDescription(schema)

          const meta = {
            parentUri: getParentUri(parentUri),
            uri,
            item: arrayIndex,
            type: 'null',
            schema,
            rootSchema,
            required: isRequired,
            ...getMetaDefaultValue(schema, uri),
            ...getMetaValue(values, uri, schema),
            ...metaProps
          }

          const elements = {
            ...title,
            ...description,
            field: {
              required: isRequired,
              ...getElementsFieldValue(values, uri, schema),
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

export function transformArraySchemaBooleanForEnum (schema, rootSchema, values, params) {
  // log('transformArraySchemaBooleanForEnum')

  const {
    required: isRequired = false,
    parentUri,
    index: arrayIndex
  } = params

  const uri = getUri(parentUri, arrayIndex)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const items = getEnum(schema)
  const selectedItems = getSelectedItems(values, uri)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    item: arrayIndex,
    type: 'boolean',
    schema,
    rootSchema,
    required: isRequired,
    selectedItems,
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    enum: {
      items,
      required: isRequired,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformArraySchemaBooleanForAnyOf (schema, rootSchema, values, params) {
  // log('transformArraySchemaBooleanForAnyOf')

  const {
    required: isRequired = false,
    parentUri,
    index: arrayIndex
  } = params

  const uri = getUri(parentUri, arrayIndex)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const { anyOf } = schema
  const items = anyOf.map((schema, index) => transformArraySchemaBoolean(schema, rootSchema, values, { ...params, parentUri: uri, index }))
  const selectedItems = getSelectedItems(values, uri)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    item: arrayIndex,
    type: 'boolean',
    schema,
    rootSchema,
    required: isRequired,
    selectedItems,
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    anyOf: {
      items,
      required: isRequired,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformArraySchemaBooleanForOneOf (schema, rootSchema, values, params) {
  // log('transformArraySchemaBooleanForOneOf')

  const {
    required: isRequired = false,
    parentUri,
    index: arrayIndex
  } = params

  const uri = getUri(parentUri, arrayIndex)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const { oneOf } = schema
  const items = oneOf.map((schema, index) => transformArraySchemaBoolean(schema, rootSchema, values, { ...params, parentUri: uri, index }))
  const selectedItems = getSelectedItems(values, uri)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    item: arrayIndex,
    type: 'boolean',
    schema,
    rootSchema,
    required: isRequired,
    selectedItems,
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    oneOf: {
      items,
      required: isRequired,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformArraySchemaBooleanForAllOf (schema, rootSchema, values, params) {
  // log('transformArraySchemaBooleanForAllOf')

  const { allOf, ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  // log(itemSchema, schema)

  const {
    required: isRequired = false,
    parentUri,
    index: arrayIndex
  } = params

  const uri = getUri(parentUri, arrayIndex)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    item: arrayIndex,
    type: 'boolean',
    schema,
    rootSchema,
    required: isRequired,
    ...getMetaDefaultValue(itemSchema, uri),
    ...getMetaValue(values, uri, itemSchema),
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    field: {
      required: isRequired,
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

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
export function transformArraySchemaBoolean (schema, rootSchema, values, params) {
  // log('transformArraySchemaBoolean')

  if (hasEnum(schema)) {
    return transformArraySchemaBooleanForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformArraySchemaBooleanForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformArraySchemaBooleanForOneOf(schema, rootSchema, values, params)
      } else {
        if (hasAllOf(schema)) {
          return transformArraySchemaBooleanForAllOf(schema, rootSchema, values, params)
        } else {
          const {
            required: isRequired = false,
            parentUri,
            index: arrayIndex
          } = params

          const uri = getUri(parentUri, arrayIndex)

          const metaProps = getMetaProps(params, uri)

          const title = getTitle(schema)
          const description = getDescription(schema)

          const meta = {
            parentUri: getParentUri(parentUri),
            uri,
            item: arrayIndex,
            type: 'boolean',
            schema,
            rootSchema,
            required: isRequired,
            ...getMetaDefaultValue(schema, uri),
            ...getMetaValue(values, uri, schema),
            ...metaProps
          }

          const elements = {
            ...title,
            ...description,
            field: {
              required: isRequired,
              ...getElementsFieldValue(values, uri, schema),
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

export function transformArraySchemaObjectForEnum (schema, rootSchema, values, params) {
  // log('transformArraySchemaObjectForEnum')

  const {
    required: isRequired = false,
    parentUri,
    index: arrayIndex
  } = params

  const uri = getUri(parentUri, arrayIndex)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const items = getEnum(schema) // `enum` is a reserved word
  const selectedItems = getSelectedItems(values, uri)

  const minProperties = getMinProperties(schema)
  const maxProperties = getMaxProperties(schema)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    item: arrayIndex,
    type: 'object',
    schema,
    rootSchema,
    ...minProperties,
    ...maxProperties,
    required: isRequired,
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
      required: isRequired,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformArraySchemaObjectForAnyOf (schema, rootSchema, values, params) {
  // log('transformArraySchemaObjectForAnyOf')

  const {
    required: isRequired = false,
    parentUri,
    index: arrayIndex
  } = params

  const uri = getUri(parentUri, arrayIndex)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const { anyOf } = schema
  const items = anyOf.map((schema, index) => transformArraySchemaObject(schema, rootSchema, values, { ...params, parentUri: uri, index }))
  const selectedItems = getSelectedItems(values, uri)

  const minProperties = getMinProperties(schema)
  const maxProperties = getMaxProperties(schema)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    item: arrayIndex,
    type: 'object',
    schema,
    rootSchema,
    ...minProperties,
    ...maxProperties,
    required: isRequired,
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
      required: isRequired,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformArraySchemaObjectForOneOf (schema, rootSchema, values, params) {
  // log('transformArraySchemaObjectForOneOf')

  const {
    required: isRequired = false,
    parentUri,
    index: arrayIndex
  } = params

  const uri = getUri(parentUri, arrayIndex)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const { oneOf } = schema
  const items = oneOf.map((schema, index) => transformArraySchemaObject(schema, rootSchema, values, { ...params, parentUri: uri, index }))
  const selectedItems = getSelectedItems(values, uri)

  const minProperties = getMinProperties(schema)
  const maxProperties = getMaxProperties(schema)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    item: arrayIndex,
    type: 'object',
    schema,
    rootSchema,
    ...maxProperties,
    ...minProperties,
    required: isRequired,
    selectedItems,
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    oneOf: {
      items,
      ...maxProperties,
      ...minProperties,
      required: isRequired,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformArraySchemaObjectForAllOf (schema, rootSchema, values, params) {
  // log('transformArraySchemaObjectForAllOf')

  const { allOf, ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  // log(itemSchema, schema)

  const {
    required: isRequired = false,
    parentUri,
    index: arrayIndex
  } = params

  const uri = getUri(parentUri, arrayIndex)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const minProperties = getMinProperties(schema)
  const maxProperties = getMaxProperties(schema)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    item: arrayIndex,
    type: 'object',
    schema,
    rootSchema,
    ...maxProperties,
    ...minProperties,
    required: isRequired,
    ...getMetaDefaultValue(itemSchema, uri),
    ...getMetaValue(values, uri, itemSchema),
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
        .map(([key, schema]) => transformObjectSchema(schema, rootSchema, values, { ...params, required: required.includes(key), parentUri: uri, key }))
    )
  }

  return {
    meta,
    elements
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.5
export function transformArraySchemaObject (schema, rootSchema, values, params) {
  // log('transformArraySchemaObject')

  if (hasEnum(schema)) {
    return transformArraySchemaObjectForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformArraySchemaObjectForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformArraySchemaObjectForOneOf(schema, rootSchema, values, params)
      } else {
        if (hasAllOf(schema)) {
          return transformArraySchemaObjectForAllOf(schema, rootSchema, values, params)
        } else {
          const {
            required: isRequired = false,
            parentUri,
            index: arrayIndex
          } = params

          const uri = getUri(parentUri, arrayIndex)

          const metaProps = getMetaProps(params, uri)

          const title = getTitle(schema)
          const description = getDescription(schema)

          const minProperties = getMinProperties(schema)
          const maxProperties = getMaxProperties(schema)

          const meta = {
            parentUri: getParentUri(parentUri),
            uri,
            item: arrayIndex,
            type: 'object',
            schema,
            rootSchema,
            ...maxProperties,
            ...minProperties,
            required: isRequired,
            ...getMetaDefaultValue(schema, uri),
            ...getMetaValue(values, uri, schema),
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
                .map(([key, schema]) => transformObjectSchema(schema, rootSchema, values, { ...params, required: required.includes(key), parentUri: uri, key }))
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

export function transformArraySchemaArrayForEnum (schema, rootSchema, values, params) {
  // log('transformArraySchemaArrayForEnum')

  const {
    required: isRequired = false,
    parentUri,
    index: arrayIndex
  } = params

  const uri = getUri(parentUri, arrayIndex)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const items = getEnum(schema)
  const selectedItems = getSelectedItems(values, uri)

  const minItems = getMinItems(schema)
  const maxItems = getMaxItems(schema)
  const hasUniqueItems = getHasUniqueItems(schema)
  const maxContains = getMaxContains(schema)
  const minContains = getMinContains(schema)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    item: arrayIndex,
    type: 'array',
    schema,
    rootSchema,
    ...minItems,
    ...maxItems,
    ...hasUniqueItems,
    ...maxContains,
    ...minContains,
    required: isRequired,
    selectedItems,
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    enum: {
      items,
      required: isRequired,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformArraySchemaArrayForAnyOf (schema, rootSchema, values, params) {
  // log('transformArraySchemaArrayForAnyOf')

  const {
    required: isRequired = false,
    parentUri,
    index: arrayIndex
  } = params

  const uri = getUri(parentUri, arrayIndex)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const { anyOf } = schema
  const items = anyOf.map((schema, index) => transformArraySchemaArray(schema, rootSchema, values, { ...params, parentUri: uri, index }))
  const selectedItems = getSelectedItems(values, uri)

  const minItems = getMinItems(schema)
  const maxItems = getMaxItems(schema)
  const hasUniqueItems = getHasUniqueItems(schema)
  const maxContains = getMaxContains(schema)
  const minContains = getMinContains(schema)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    item: arrayIndex,
    type: 'array',
    schema,
    rootSchema,
    ...minItems,
    ...maxItems,
    ...hasUniqueItems,
    ...maxContains,
    ...minContains,
    required: isRequired,
    selectedItems,
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    anyOf: {
      items,
      required: isRequired,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformArraySchemaArrayForOneOf (schema, rootSchema, values, params) {
  // log('transformArraySchemaArrayForOneOf')

  const {
    required: isRequired = false,
    parentUri,
    index: arrayIndex
  } = params

  const uri = getUri(parentUri, arrayIndex)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const { oneOf } = schema
  const items = oneOf.map((schema, index) => transformArraySchemaArray(schema, rootSchema, values, { ...params, parentUri: uri, index }))
  const selectedItems = getSelectedItems(values, uri)

  const minItems = getMinItems(schema)
  const maxItems = getMaxItems(schema)
  const hasUniqueItems = getHasUniqueItems(schema)
  const maxContains = getMaxContains(schema)
  const minContains = getMinContains(schema)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    item: arrayIndex,
    type: 'array',
    schema,
    rootSchema,
    ...minItems,
    ...maxItems,
    ...hasUniqueItems,
    ...maxContains,
    ...minContains,
    required: isRequired,
    selectedItems,
    ...metaProps
  }

  const elements = {
    ...title,
    ...description,
    oneOf: {
      items,
      required: isRequired,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformArraySchemaArrayForAllOf (schema, rootSchema, values, params) { // As-is
  // log('transformArraySchemaArrayForAllOf')

  const { allOf, ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  // log(itemSchema, schema)

  const {
    required: isRequired = false,
    parentUri,
    index: arrayIndex
  } = params

  const uri = getUri(parentUri, arrayIndex)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const minItems = getMinItems(itemSchema)
  const maxItems = getMaxItems(itemSchema)
  const hasUniqueItems = getHasUniqueItems(itemSchema)
  const maxContains = getMaxContains(itemSchema)
  const minContains = getMinContains(itemSchema)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    item: arrayIndex,
    type: 'array',
    schema,
    rootSchema,
    ...minItems,
    ...maxItems,
    ...hasUniqueItems,
    ...maxContains,
    ...minContains,
    required: isRequired,
    ...getMetaDefaultValue(itemSchema, uri),
    ...getMetaValue(values, uri, itemSchema),
    ...metaProps
  }

  const {
    items = [] // array or object
  } = itemSchema

  const fields = []
    .concat(items)
    .map((schema, index) => transformArraySchema(schema, rootSchema, values, { ...params, parentUri: uri, index }))

  const elements = {
    ...title,
    ...description,
    fields
  }

  return {
    meta,
    elements
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.4
export function transformArraySchemaArray (schema, rootSchema, values, params) {
  // log('transformArraySchemaArray')

  if (hasEnum(schema)) {
    return transformArraySchemaArrayForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformArraySchemaArrayForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformArraySchemaArrayForOneOf(schema, rootSchema, values, params)
      } else {
        if (hasAllOf(schema)) {
          return transformArraySchemaArrayForAllOf(schema, rootSchema, values, params)
        } else {
          const {
            required: isRequired = false,
            parentUri,
            index: arrayIndex
          } = params

          const uri = getUri(parentUri, arrayIndex)

          const metaProps = getMetaProps(params, uri)

          const title = getTitle(schema)
          const description = getDescription(schema)

          const minItems = getMinItems(schema)
          const maxItems = getMaxItems(schema)
          const hasUniqueItems = getHasUniqueItems(schema)
          const maxContains = getMaxContains(schema)
          const minContains = getMinContains(schema)

          const meta = {
            parentUri: getParentUri(parentUri),
            uri,
            item: arrayIndex,
            type: 'array',
            schema,
            rootSchema,
            ...minItems,
            ...maxItems,
            ...hasUniqueItems,
            ...maxContains,
            ...minContains,
            required: isRequired,
            ...getMetaDefaultValue(schema, uri),
            ...getMetaValue(values, uri, schema),
            ...metaProps
          }

          const {
            items = [] // array or object
          } = schema

          const fields = []
            .concat(items)
            .map((schema, index) => transformArraySchema(schema, rootSchema, values, { ...params, parentUri: uri, index }))

          const elements = {
            ...title,
            ...description,
            fields
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

export function transformArraySchemaNumberForEnum (schema, rootSchema, values, params) {
  // log('transformArraySchemaNumberForEnum')

  const {
    required: isRequired = false,
    parentUri,
    index: arrayIndex
  } = params

  const uri = getUri(parentUri, arrayIndex)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const items = getEnum(schema)
  const selectedItems = getSelectedItems(values, uri)

  const isExclusiveMin = getIsExclusiveMin(schema)
  const isExclusiveMax = getIsExclusiveMax(schema)

  const min = getMin(schema)
  const max = getMax(schema)
  const step = getStep(schema)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    item: arrayIndex,
    type: 'number',
    schema,
    rootSchema,
    ...isExclusiveMin,
    ...isExclusiveMax,
    ...min,
    ...max,
    ...step,
    required: isRequired,
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
      required: isRequired,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformArraySchemaNumberForAnyOf (schema, rootSchema, values, params) {
  // log('transformArraySchemaNumberForAnyOf')

  const {
    required: isRequired = false,
    parentUri,
    index: arrayIndex
  } = params

  const uri = getUri(parentUri, arrayIndex)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const { anyOf } = schema
  const items = anyOf.map((schema, index) => transformArraySchemaNumber(schema, rootSchema, values, { ...params, parentUri: uri, index }))
  const selectedItems = getSelectedItems(values, uri)

  const isExclusiveMin = getIsExclusiveMin(schema)
  const isExclusiveMax = getIsExclusiveMax(schema)

  const min = getMin(schema)
  const max = getMax(schema)
  const step = getStep(schema)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    item: arrayIndex,
    type: 'number',
    schema,
    rootSchema,
    ...isExclusiveMin,
    ...isExclusiveMax,
    ...min,
    ...max,
    ...step,
    required: isRequired,
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
      required: isRequired,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformArraySchemaNumberForOneOf (schema, rootSchema, values, params) {
  // log('transformArraySchemaNumberForOneOf')

  const {
    required: isRequired = false,
    parentUri,
    index: arrayIndex
  } = params

  const uri = getUri(parentUri, arrayIndex)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const { oneOf } = schema
  const items = oneOf.map((schema, index) => transformArraySchemaNumber(schema, rootSchema, values, { ...params, parentUri: uri, index }))
  const selectedItems = getSelectedItems(values, uri)

  const isExclusiveMin = getIsExclusiveMin(schema)
  const isExclusiveMax = getIsExclusiveMax(schema)

  const min = getMin(schema)
  const max = getMax(schema)
  const step = getStep(schema)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    item: arrayIndex,
    type: 'number',
    schema,
    rootSchema,
    ...isExclusiveMin,
    ...isExclusiveMax,
    ...min,
    ...max,
    ...step,
    required: isRequired,
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
      required: isRequired,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformArraySchemaNumberForAllOf (schema, rootSchema, values, params) {
  // log('transformArraySchemaNumberForAllOf')

  const { allOf, ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  // log(itemSchema, schema)

  const {
    required: isRequired = false,
    parentUri,
    index: arrayIndex
  } = params

  const uri = getUri(parentUri, arrayIndex)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const isExclusiveMin = getIsExclusiveMin(itemSchema)
  const isExclusiveMax = getIsExclusiveMax(itemSchema)

  const min = getMin(itemSchema)
  const max = getMax(itemSchema)
  const step = getStep(itemSchema)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    item: arrayIndex,
    type: 'number',
    schema,
    rootSchema,
    ...isExclusiveMin,
    ...isExclusiveMax,
    ...min,
    ...max,
    ...step,
    required: isRequired,
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
      required: isRequired,
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

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.2
export function transformArraySchemaNumber (schema, rootSchema, values, params) {
  // log('transformArraySchemaNumber')

  if (hasEnum(schema)) {
    return transformArraySchemaNumberForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformArraySchemaNumberForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformArraySchemaNumberForOneOf(schema, rootSchema, values, params)
      } else {
        if (hasAllOf(schema)) {
          return transformArraySchemaNumberForAllOf(schema, rootSchema, values, params)
        } else {
          const {
            required: isRequired = false,
            parentUri,
            index: arrayIndex
          } = params

          const uri = getUri(parentUri, arrayIndex)

          const metaProps = getMetaProps(params, uri)

          const title = getTitle(schema)
          const description = getDescription(schema)

          const isExclusiveMin = getIsExclusiveMin(schema)
          const isExclusiveMax = getIsExclusiveMax(schema)

          const min = getMin(schema)
          const max = getMax(schema)
          const step = getStep(schema)

          const meta = {
            parentUri: getParentUri(parentUri),
            uri,
            item: arrayIndex,
            type: 'number',
            schema,
            rootSchema,
            ...isExclusiveMin,
            ...isExclusiveMax,
            ...min,
            ...max,
            ...step,
            required: isRequired,
            ...getMetaDefaultValue(schema, uri),
            ...getMetaValue(values, uri, schema),
            ...metaProps
          }

          const elements = {
            ...title,
            ...description,
            field: {
              ...min,
              ...max,
              ...step,
              required: isRequired,
              ...getElementsFieldValue(values, uri, schema),
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

export function transformArraySchemaStringForEnum (schema, rootSchema, values, params) {
  // log('transformArraySchemaStringForEnum')

  const {
    required: isRequired = false,
    parentUri,
    index: arrayIndex
  } = params

  const uri = getUri(parentUri, arrayIndex)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const items = getEnum(schema)
  const selectedItems = getSelectedItems(values, uri)

  const minLength = getMinLength(schema)
  const maxLength = getMaxLength(schema)
  const pattern = getPattern(schema)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    item: arrayIndex,
    type: 'string',
    schema,
    rootSchema,
    ...minLength,
    ...maxLength,
    ...pattern,
    required: isRequired,
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
      required: isRequired,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformArraySchemaStringForAnyOf (schema, rootSchema, values, params) {
  // log('transformArraySchemaStringForAnyOf')

  const {
    required: isRequired = false,
    parentUri,
    index: arrayIndex
  } = params

  const uri = getUri(parentUri, arrayIndex)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const { anyOf } = schema
  const items = anyOf.map((schema, index) => transformArraySchemaString(schema, rootSchema, values, { ...params, parentUri: uri, index }))
  const selectedItems = getSelectedItems(values, uri)

  const minLength = getMinLength(schema)
  const maxLength = getMaxLength(schema)
  const pattern = getPattern(schema)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    item: arrayIndex,
    type: 'string',
    schema,
    rootSchema,
    ...minLength,
    ...maxLength,
    ...pattern,
    required: isRequired,
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
      required: isRequired,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformArraySchemaStringForOneOf (schema, rootSchema, values, params) {
  // log('transformArraySchemaStringForOneOf')

  const {
    required: isRequired = false,
    parentUri,
    index: arrayIndex
  } = params

  const uri = getUri(parentUri, arrayIndex)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const { oneOf } = schema
  const items = oneOf.map((schema, index) => transformArraySchemaString(schema, rootSchema, values, { ...params, parentUri: uri, index }))
  const selectedItems = getSelectedItems(values, uri)

  const minLength = getMinLength(schema)
  const maxLength = getMaxLength(schema)
  const pattern = getPattern(schema)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    item: arrayIndex,
    type: 'string',
    schema,
    rootSchema,
    ...minLength,
    ...maxLength,
    ...pattern,
    required: isRequired,
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
      required: isRequired,
      selectedItems,
      id: uri
    }
  }

  return {
    meta,
    elements
  }
}

export function transformArraySchemaStringForAllOf (schema, rootSchema, values, params) {
  // log('transformArraySchemaStringForAllOf')

  const { allOf, ...rest } = schema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  // log(itemSchema, schema)

  const {
    required: isRequired = false,
    parentUri,
    index: arrayIndex
  } = params

  const uri = getUri(parentUri, arrayIndex)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  const minLength = getMinLength(itemSchema)
  const maxLength = getMaxLength(itemSchema)
  const pattern = getPattern(itemSchema)

  const meta = {
    parentUri: getParentUri(parentUri),
    uri,
    item: arrayIndex,
    type: 'string',
    schema,
    rootSchema,
    ...minLength,
    ...maxLength,
    ...pattern,
    required: isRequired,
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
      required: isRequired,
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

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.3
export function transformArraySchemaString (schema, rootSchema, values, params) {
  // log('transformArraySchemaString')

  if (hasEnum(schema)) {
    return transformArraySchemaStringForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformArraySchemaStringForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformArraySchemaStringForOneOf(schema, rootSchema, values, params)
      } else {
        if (hasAllOf(schema)) {
          return transformArraySchemaStringForAllOf(schema, rootSchema, values, params)
        } else {
          const {
            required: isRequired = false,
            parentUri,
            index: arrayIndex
          } = params

          const uri = getUri(parentUri, arrayIndex)

          const metaProps = getMetaProps(params, uri)

          const title = getTitle(schema)
          const description = getDescription(schema)

          const minLength = getMinLength(schema)
          const maxLength = getMaxLength(schema)
          const pattern = getPattern(schema)

          const meta = {
            parentUri: getParentUri(parentUri),
            uri,
            item: arrayIndex,
            type: 'string',
            schema,
            rootSchema,
            ...minLength,
            ...maxLength,
            ...pattern,
            required: isRequired,
            ...getMetaDefaultValue(schema, uri),
            ...getMetaValue(values, uri, schema),
            ...metaProps
          }

          const elements = {
            ...title,
            ...description,
            field: {
              ...minLength,
              ...maxLength,
              ...pattern,
              required: isRequired,
              ...getElementsFieldValue(values, uri, schema),
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

export function transformArraySchema (schema = {}, rootSchema = schema, values = {}, params = {}) {
  // log('transformArraySchema')

  const { type } = schema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  switch (type) {
    case 'null':
      return transformArraySchemaNull(schema, rootSchema, values, params)

    case 'boolean':
      return transformArraySchemaBoolean(schema, rootSchema, values, params)

    case 'object':
      return transformArraySchemaObject(schema, rootSchema, values, params)

    case 'array':
      return transformArraySchemaArray(schema, rootSchema, values, params)

    case 'number':
      return transformArraySchemaNumber(schema, rootSchema, values, params)

    case 'string':
      return transformArraySchemaString(schema, rootSchema, values, params)

    default:
      throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
  }
}

export function transformNullForEnum (rootSchema, values, params) {
  // log('transformNullForEnum')

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
  // log('transformNullForAnyOf')

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
  // log('transformNullForOneOf')

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
  // log('transformNullForAllOf')

  const { allOf, ...rest } = rootSchema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  // log(itemSchema, rootSchema)

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
  // log('transformNull')

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
  // log('transformBooleanForEnum')

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
  // log('transformBooleanForAnyOf')

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
  // log('transformBooleanForOneOf')

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
  // log('transformBooleanForAllOf')

  const { allOf, ...rest } = rootSchema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  // log(itemSchema, rootSchema)

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
  // log('transformBoolean')

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
  // log('transformObjectForEnum')

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
  // log('transformObjectForAnyOf')

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
  // log('transformObjectForOneOf')

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
  // log('transformObjectForAllOf')

  const { allOf, ...rest } = rootSchema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  // log(itemSchema, rootSchema)

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
  // log('transformObject')

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
  // log('transformArrayForEnum')

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
  // log('transformArrayForAnyOf')

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
  // log('transformArrayForOneOf')

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
  // log('transformArrayForAllOf')

  const { allOf, ...rest } = rootSchema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  // log(itemSchema, rootSchema)

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

  const fields = []
    .concat(items)
    .map((schema, index) => transformArraySchema(schema, rootSchema, values, { ...params, parentUri: '#', index }))

  const elements = {
    ...title,
    ...description,
    fields
  }

  return {
    meta,
    elements
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.4
export function transformArray (rootSchema, values, params) {
  // log('transformArray')

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

          const fields = []
            .concat(items)
            .map((schema, index) => transformArraySchema(schema, rootSchema, values, { ...params, parentUri: '#', index }))

          const elements = {
            ...title,
            ...description,
            fields
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
  // log('transformNumberForEnum')

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
  // log('transformNumberForAnyOf')

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
  // log('transformNumberForOneOf')

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
  // log('transformNumberForAllOf')

  const { allOf, ...rest } = rootSchema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  // log(itemSchema, rootSchema)

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
  // log('transformNumber')

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
  // log('transformStringForEnum')

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
  // log('transformStringForAnyOf')

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
  // log('transformStringForOneOf')

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
  // log('transformStringForAllOf')

  const { allOf, ...rest } = rootSchema
  const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), rest) // initialise with `rest`

  // log(itemSchema, rootSchema)

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
  // log('transformString')

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

export default function transform (rootSchema = {}, values = {}, params = {}) {
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
