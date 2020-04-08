import debug from 'debug'

import {
  getMetaDefaultValue,
  getMetaValue,
  getSelectedIndex,
  getTitle,
  getDescription,
  hasEnum,
  getEnum,
  hasAnyOf,
  getAnyOf,
  hasOneOf,
  getOneOf,
  hasAllOf,
  getAllOf,
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

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
export function transformObjectSchemaNull (schema, rootSchema, values, params) {
  const {
    required: isRequired = false,
    uri: parentUri,
    key: fieldKey
  } = params

  const uri = getUri(parentUri, fieldKey)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  let meta
  let elements
  if (hasEnum(schema)) {
    const items = getEnum(schema)
    const selectedIndex = getSelectedIndex(values, uri)

    meta = {
      uri,
      name: fieldKey,
      type: 'null',
      schema,
      rootSchema,
      required: isRequired,
      ...selectedIndex,
      ...metaProps
    }

    elements = {
      ...title,
      ...description,
      enum: {
        items,
        required: isRequired,
        ...selectedIndex,
        name: uri
      }
    }
  } else {
    if (hasAnyOf(schema)) {
      const anyOf = getAnyOf(schema)
      const items = (
        anyOf.reduce((accumulator, schema, index) => (
          accumulator.concat(transformArraySchemaNull(schema, rootSchema, values, { ...params, required: isRequired, parentUri, uri, index }))
        ), [])
      )
      const selectedIndex = getSelectedIndex(values, uri)

      meta = {
        uri,
        name: fieldKey,
        type: 'null',
        schema,
        rootSchema,
        required: isRequired,
        ...selectedIndex,
        ...metaProps
      }

      elements = {
        ...title,
        ...description,
        anyOf: {
          items,
          required: isRequired,
          ...selectedIndex,
          name: uri
        }
      }
    } else {
      if (hasOneOf(schema)) {
        const oneOf = getOneOf(schema)
        const items = (
          oneOf.reduce((accumulator, schema, index) => (
            accumulator.concat(transformArraySchemaNull(schema, rootSchema, values, { ...params, required: isRequired, parentUri, uri, index }))
          ), [])
        )
        const selectedIndex = getSelectedIndex(values, uri)

        meta = {
          uri,
          name: fieldKey,
          type: 'null',
          schema,
          rootSchema,
          required: isRequired,
          ...selectedIndex,
          ...metaProps
        }

        elements = {
          ...title,
          ...description,
          oneOf: {
            items,
            required: isRequired,
            ...selectedIndex,
            name: uri
          }
        }
      } else {
        if (hasAllOf(schema)) {
          const allOf = getAllOf(schema)
          const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), {})

          // log(itemSchema)

          meta = {
            uri,
            name: fieldKey,
            type: 'null',
            schema,
            rootSchema,
            required: isRequired,
            ...getMetaDefaultValue(itemSchema, uri),
            ...getMetaValue(values, uri),
            ...metaProps
          }

          elements = {
            ...title,
            ...description,
            field: {
              required: isRequired,
              ...getElementsFieldValue(values, uri, itemSchema),
              ...getElementsFieldProps(params, uri),
              name: uri
            }
          }
        } else {
          meta = {
            uri,
            name: fieldKey,
            type: 'null',
            schema,
            rootSchema,
            required: isRequired,
            ...getMetaDefaultValue(schema, uri),
            ...getMetaValue(values, uri),
            ...metaProps
          }

          elements = {
            ...title,
            ...description,
            field: {
              required: isRequired,
              ...getElementsFieldValue(values, uri, schema),
              ...getElementsFieldProps(params, uri),
              name: uri
            }
          }
        }
      }
    }
  }

  return {
    meta,
    elements
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
export function transformObjectSchemaBoolean (schema, rootSchema, values, params) {
  const {
    required: isRequired = false,
    uri: parentUri,
    key: fieldKey
  } = params

  const uri = getUri(parentUri, fieldKey)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  let meta
  let elements
  if (hasEnum(schema)) {
    const items = getEnum(schema)
    const selectedIndex = getSelectedIndex(values, uri)

    meta = {
      uri,
      name: fieldKey,
      type: 'boolean',
      schema,
      rootSchema,
      required: isRequired,
      ...selectedIndex,
      ...metaProps
    }

    elements = {
      ...title,
      ...description,
      enum: {
        items,
        required: isRequired,
        ...selectedIndex,
        name: uri
      }
    }
  } else {
    if (hasAnyOf(schema)) {
      const anyOf = getAnyOf(schema)
      const items = (
        anyOf.reduce((accumulator, schema, index) => (
          accumulator.concat(transformArraySchemaBoolean(schema, rootSchema, values, { ...params, required: isRequired, parentUri, uri, index }))
        ), [])
      )
      const selectedIndex = getSelectedIndex(values, uri)

      meta = {
        uri,
        name: fieldKey,
        type: 'boolean',
        schema,
        rootSchema,
        required: isRequired,
        ...selectedIndex,
        ...metaProps
      }

      elements = {
        ...title,
        ...description,
        anyOf: {
          items,
          required: isRequired,
          ...selectedIndex,
          name: uri
        }
      }
    } else {
      if (hasOneOf(schema)) {
        const oneOf = getOneOf(schema)
        const items = (
          oneOf.reduce((accumulator, schema, index) => (
            accumulator.concat(transformArraySchemaBoolean(schema, rootSchema, values, { ...params, required: isRequired, parentUri, uri, index }))
          ), [])
        )
        const selectedIndex = getSelectedIndex(values, uri)

        meta = {
          uri,
          name: fieldKey,
          type: 'boolean',
          schema,
          rootSchema,
          required: isRequired,
          ...selectedIndex,
          ...metaProps
        }

        elements = {
          ...title,
          ...description,
          oneOf: {
            items,
            required: isRequired,
            ...selectedIndex,
            name: uri
          }
        }
      } else {
        if (hasAllOf(schema)) {
          const allOf = getAllOf(schema)
          const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), {})

          // log(itemSchema)

          meta = {
            uri,
            name: fieldKey,
            type: 'boolean',
            schema,
            rootSchema,
            required: isRequired,
            ...getMetaDefaultValue(itemSchema, uri),
            ...getMetaValue(values, uri),
            ...metaProps
          }

          elements = {
            ...title,
            ...description,
            field: {
              required: isRequired,
              ...getElementsFieldValue(values, uri, itemSchema),
              ...getElementsFieldProps(params, uri),
              name: uri
            }
          }
        } else {
          meta = {
            uri,
            name: fieldKey,
            type: 'boolean',
            schema,
            rootSchema,
            required: isRequired,
            ...getMetaDefaultValue(schema, uri),
            ...getMetaValue(values, uri),
            ...metaProps
          }

          elements = {
            ...title,
            ...description,
            field: {
              required: isRequired,
              ...getElementsFieldValue(values, uri, schema),
              ...getElementsFieldProps(params, uri),
              name: uri
            }
          }
        }
      }
    }
  }

  return {
    meta,
    elements
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.5
export function transformObjectSchemaObject (schema, rootSchema, values, params) {
  const {
    required: isRequired = false,
    uri: parentUri,
    key: fieldKey
  } = params

  const uri = getUri(parentUri, fieldKey)

  const maxProperties = getMaxProperties(schema)
  const minProperties = getMinProperties(schema)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  let meta
  let elements
  if (hasEnum(schema)) {
    const items = getEnum(schema) // `enum` is a reserved word
    const selectedIndex = getSelectedIndex(values, uri)

    meta = {
      uri,
      name: fieldKey,
      type: 'object',
      schema,
      rootSchema,
      ...maxProperties,
      ...minProperties,
      required: isRequired,
      ...selectedIndex,
      ...metaProps
    }

    elements = {
      ...title,
      ...description,
      enum: {
        items,
        required: isRequired,
        ...selectedIndex,
        name: uri
      }
    }
  } else {
    if (hasAnyOf(schema)) {
      const anyOf = getAnyOf(schema)
      const items = (
        anyOf.reduce((accumulator, schema, index) => (
          accumulator.concat(transformArraySchemaObject(schema, rootSchema, values, { ...params, required: isRequired, parentUri, uri, index }))
        ), [])
      )
      const selectedIndex = getSelectedIndex(values, uri)

      meta = {
        uri,
        name: fieldKey,
        type: 'object',
        schema,
        rootSchema,
        ...maxProperties,
        ...minProperties,
        required: isRequired,
        ...selectedIndex,
        ...metaProps
      }

      elements = {
        ...title,
        ...description,
        anyOf: {
          items,
          required: isRequired,
          ...selectedIndex,
          name: uri
        }
      }
    } else {
      if (hasOneOf(schema)) {
        const oneOf = getOneOf(schema)
        const items = (
          oneOf.reduce((accumulator, schema, index) => (
            accumulator.concat(transformArraySchemaObject(schema, rootSchema, values, { ...params, required: isRequired, parentUri, uri, index }))
          ), [])
        )
        const selectedIndex = getSelectedIndex(values, uri)

        meta = {
          uri,
          name: fieldKey,
          type: 'object',
          schema,
          rootSchema,
          ...maxProperties,
          ...minProperties,
          required: isRequired,
          ...selectedIndex,
          ...metaProps
        }

        elements = {
          ...title,
          ...description,
          oneOf: {
            items,
            required: isRequired,
            ...selectedIndex,
            name: uri
          }
        }
      } else {
        if (hasAllOf(schema)) {
          const allOf = getAllOf(schema)
          const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), {})

          // log(itemSchema)

          meta = {
            uri,
            name: fieldKey,
            type: 'object',
            schema,
            rootSchema,
            ...maxProperties,
            ...minProperties,
            required: isRequired,
            ...getMetaDefaultValue(itemSchema, uri),
            ...getMetaValue(values, uri),
            ...metaProps
          }

          const {
            properties = {},
            required = []
          } = itemSchema

          elements = {
            ...title,
            ...description,
            fields: (
              Object
                .entries(properties)
                .reduce((accumulator, [key, schema]) => (
                  accumulator.concat(transformObjectSchema(schema, rootSchema, values, { ...params, required: required.includes(key), parentUri, uri, key }))
                ), [])
            )
          }
        } else {
          meta = {
            uri,
            name: fieldKey,
            type: 'object',
            schema,
            rootSchema,
            ...maxProperties,
            ...minProperties,
            required: isRequired,
            ...getMetaDefaultValue(schema, uri),
            ...getMetaValue(values, uri),
            ...metaProps
          }

          const {
            properties = {},
            required = []
          } = schema

          elements = {
            ...title,
            ...description,
            fields: (
              Object
                .entries(properties)
                .reduce((accumulator, [key, schema]) => (
                  accumulator.concat(transformObjectSchema(schema, rootSchema, values, { ...params, required: required.includes(key), parentUri, uri, key }))
                ), [])
            )
          }
        }
      }
    }
  }

  return {
    meta,
    elements
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.4
export function transformObjectSchemaArray (schema, rootSchema, values, params) {
  const {
    required: isRequired = false,
    uri: parentUri,
    key: fieldKey
  } = params

  const uri = getUri(parentUri, fieldKey)

  const minItems = getMinItems(schema)
  const maxItems = getMaxItems(schema)
  const hasUniqueItems = getHasUniqueItems(schema)
  const maxContains = getMaxContains(schema)
  const minContains = getMinContains(schema)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  let meta
  let elements
  if (hasEnum(schema)) {
    const items = getEnum(schema)
    const selectedIndex = getSelectedIndex(values, uri)

    meta = {
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
      ...selectedIndex,
      ...metaProps
    }

    elements = {
      ...title,
      ...description,
      enum: {
        items,
        ...selectedIndex,
        name: uri
      }
    }
  } else {
    if (hasAnyOf(schema)) {
      const anyOf = getAnyOf(schema)
      const items = (
        anyOf.reduce((accumulator, schema, index) => (
          accumulator.concat(transformArraySchemaArray(schema, rootSchema, values, { ...params, required: isRequired, parentUri, uri, index }))
        ), [])
      )
      const selectedIndex = getSelectedIndex(values, uri)

      meta = {
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
        ...selectedIndex,
        ...metaProps
      }

      elements = {
        ...title,
        ...description,
        anyOf: {
          items,
          required: isRequired,
          ...selectedIndex,
          name: uri
        }
      }
    } else {
      if (hasOneOf(schema)) {
        const oneOf = getOneOf(schema)
        const items = (
          oneOf.reduce((accumulator, schema, index) => (
            accumulator.concat(transformArraySchemaArray(schema, rootSchema, values, { ...params, required: isRequired, parentUri, uri, index }))
          ), [])
        )
        const selectedIndex = getSelectedIndex(values, uri)

        meta = {
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
          ...selectedIndex,
          ...metaProps
        }

        elements = {
          ...title,
          ...description,
          oneOf: {
            items,
            required: isRequired,
            ...selectedIndex,
            name: uri
          }
        }
      } else {
        if (hasAllOf(schema)) {
          const allOf = getAllOf(schema)
          const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), {})

          // log(itemSchema)

          meta = {
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
            ...getMetaValue(values, uri),
            ...metaProps
          }

          const {
            items = [] // array or object
          } = itemSchema

          const fields = []
            .concat(items)
            .reduce((accumulator, schema, index) => (
              accumulator.concat(transformArraySchema(schema, rootSchema, values, { ...params, required: isRequired, parentUri, uri, index }))
            ), [])

          elements = {
            ...title,
            ...description,
            fields
          }
        } else {
          meta = {
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
            ...getMetaValue(values, uri),
            ...metaProps
          }

          const {
            items = [] // array or object
          } = schema

          const fields = []
            .concat(items)
            .reduce((accumulator, schema, index) => (
              accumulator.concat(transformArraySchema(schema, rootSchema, values, { ...params, required: isRequired, parentUri, uri, index }))
            ), [])

          elements = {
            ...title,
            ...description,
            fields
          }
        }
      }
    }
  }

  return {
    meta,
    elements
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.2
export function transformObjectSchemaNumber (schema, rootSchema, values, params) {
  const {
    required: isRequired = false,
    uri: parentUri,
    key: fieldKey
  } = params

  const uri = getUri(parentUri, fieldKey)

  const min = getMin(schema)
  const max = getMax(schema)
  const step = getStep(schema)

  const isExclusiveMin = getIsExclusiveMin(schema)
  const isExclusiveMax = getIsExclusiveMax(schema)
  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  let meta
  let elements
  if (hasEnum(schema)) {
    const items = getEnum(schema) // `enum` is a reserved word
    const selectedIndex = getSelectedIndex(values, uri)

    meta = {
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
      ...selectedIndex,
      ...metaProps
    }

    elements = {
      ...title,
      ...description,
      enum: {
        items,
        ...min,
        ...max,
        ...step,
        required: isRequired,
        ...selectedIndex,
        name: uri
      }
    }
  } else {
    if (hasAnyOf(schema)) {
      const anyOf = getAnyOf(schema)
      const items = (
        anyOf.reduce((accumulator, schema, index) => (
          accumulator.concat(transformArraySchemaNumber(schema, rootSchema, values, { ...params, required: isRequired, parentUri, uri, index }))
        ), [])
      )
      const selectedIndex = getSelectedIndex(values, uri)

      meta = {
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
        ...selectedIndex,
        ...metaProps
      }

      elements = {
        ...title,
        ...description,
        anyOf: {
          items,
          ...min,
          ...max,
          ...step,
          required: isRequired,
          ...selectedIndex,
          name: uri
        }
      }
    } else {
      if (hasOneOf(schema)) {
        const oneOf = getOneOf(schema)
        const items = (
          oneOf.reduce((accumulator, schema, index) => (
            accumulator.concat(transformArraySchemaNumber(schema, rootSchema, values, { ...params, required: isRequired, parentUri, uri, index }))
          ), [])
        )
        const selectedIndex = getSelectedIndex(values, uri)

        meta = {
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
          ...selectedIndex,
          ...metaProps
        }

        elements = {
          ...title,
          ...description,
          oneOf: {
            items,
            ...min,
            ...max,
            ...step,
            required: isRequired,
            ...selectedIndex,
            name: uri
          }
        }
      } else {
        if (hasAllOf(schema)) {
          const allOf = getAllOf(schema)
          const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), {})

          // log(itemSchema)

          meta = {
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
            ...getMetaValue(values, uri),
            ...metaProps
          }

          elements = {
            ...title,
            ...description,
            field: {
              ...min,
              ...max,
              ...step,
              required: isRequired,
              ...getElementsFieldValue(values, uri, itemSchema),
              ...getElementsFieldProps(params, uri),
              name: uri
            }
          }
        } else {
          meta = {
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
            ...getMetaValue(values, uri),
            ...metaProps
          }

          elements = {
            ...title,
            ...description,
            field: {
              ...min,
              ...max,
              ...step,
              required: isRequired,
              ...getElementsFieldValue(values, uri, schema),
              ...getElementsFieldProps(params, uri),
              name: uri
            }
          }
        }
      }
    }
  }

  return {
    meta,
    elements
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.3
export function transformObjectSchemaString (schema, rootSchema, values, params) {
  const {
    required: isRequired = false,
    uri: parentUri,
    key: fieldKey
  } = params

  const uri = getUri(parentUri, fieldKey)

  const minLength = getMinLength(schema)
  const maxLength = getMaxLength(schema)
  const pattern = getPattern(schema)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  let meta
  let elements
  if (hasEnum(schema)) {
    const items = getEnum(schema) // `enum` is a reserved word
    const selectedIndex = getSelectedIndex(values, uri)

    meta = {
      uri,
      name: fieldKey,
      type: 'string',
      schema,
      rootSchema,
      ...minLength,
      ...maxLength,
      ...pattern,
      required: isRequired,
      ...selectedIndex,
      ...metaProps
    }

    elements = {
      ...title,
      ...description,
      enum: {
        items,
        ...minLength,
        ...maxLength,
        ...pattern,
        required: isRequired,
        ...selectedIndex,
        name: uri
      }
    }
  } else {
    if (hasAnyOf(schema)) {
      const anyOf = getAnyOf(schema)
      const items = (
        anyOf.reduce((accumulator, schema, index) => (
          accumulator.concat(transformArraySchemaString(schema, rootSchema, values, { ...params, required: isRequired, parentUri, uri, index }))
        ), [])
      )
      const selectedIndex = getSelectedIndex(values, uri)

      meta = {
        uri,
        name: fieldKey,
        type: 'string',
        schema,
        rootSchema,
        ...minLength,
        ...maxLength,
        ...pattern,
        required: isRequired,
        ...selectedIndex,
        ...metaProps
      }

      elements = {
        ...title,
        ...description,
        anyOf: {
          items,
          ...minLength,
          ...maxLength,
          ...pattern,
          required: isRequired,
          ...selectedIndex,
          name: uri
        }
      }
    } else {
      if (hasOneOf(schema)) {
        const oneOf = getOneOf(schema)
        const items = (
          oneOf.reduce((accumulator, schema, index) => (
            accumulator.concat(transformArraySchemaString(schema, rootSchema, values, { ...params, required: isRequired, parentUri, uri, index }))
          ), [])
        )
        const selectedIndex = getSelectedIndex(values, uri)

        meta = {
          uri,
          name: fieldKey,
          type: 'string',
          schema,
          rootSchema,
          ...minLength,
          ...maxLength,
          ...pattern,
          required: isRequired,
          ...selectedIndex,
          ...metaProps
        }

        elements = {
          ...title,
          ...description,
          oneOf: {
            items,
            ...minLength,
            ...maxLength,
            ...pattern,
            required: isRequired,
            ...selectedIndex,
            name: uri
          }
        }
      } else {
        if (hasAllOf(schema)) {
          const allOf = getAllOf(schema)
          const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), {})

          // log(itemSchema)

          meta = {
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
            ...getMetaValue(values, uri),
            ...metaProps
          }

          elements = {
            ...title,
            ...description,
            field: {
              ...minLength,
              ...maxLength,
              ...pattern,
              required: isRequired,
              ...getElementsFieldValue(values, uri, itemSchema),
              ...getElementsFieldProps(params, uri),
              name: uri
            }
          }
        } else {
          meta = {
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
            ...getMetaValue(values, uri),
            ...metaProps
          }

          elements = {
            ...title,
            ...description,
            field: {
              ...minLength,
              ...maxLength,
              ...pattern,
              required: isRequired,
              ...getElementsFieldValue(values, uri, schema),
              ...getElementsFieldProps(params, uri),
              name: uri
            }
          }
        }
      }
    }
  }

  return {
    meta,
    elements
  }
}

export function transformObjectSchema (schema = {}, rootSchema = schema, values = {}, params = {}) {
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

    case 'string':
      return transformObjectSchemaString(schema, rootSchema, values, params)

    case 'number':
      return transformObjectSchemaNumber(schema, rootSchema, values, params)

    default:
      throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
export function transformArraySchemaNull (schema, rootSchema, values, params) {
  const {
    required: isRequired = false,
    uri: parentUri,
    index: arrayIndex
  } = params

  const uri = getUri(parentUri, arrayIndex)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  let meta
  let elements
  if (hasEnum(schema)) {
    const items = getEnum(schema)
    const selectedIndex = getSelectedIndex(values, uri)

    meta = {
      uri,
      item: arrayIndex,
      type: 'null',
      schema,
      rootSchema,
      required: isRequired,
      ...selectedIndex,
      ...metaProps
    }

    elements = {
      ...title,
      ...description,
      enum: {
        items,
        required: isRequired,
        ...selectedIndex,
        name: uri
      }
    }
  } else {
    if (hasAnyOf(schema)) {
      const anyOf = getAnyOf(schema)
      const items = (
        anyOf.reduce((accumulator, schema, index) => (
          accumulator.concat(transformArraySchemaNull(schema, rootSchema, values, { ...params, required: isRequired, parentUri, uri, index }))
        ), [])
      )
      const selectedIndex = getSelectedIndex(values, uri)

      meta = {
        uri,
        item: arrayIndex,
        type: 'null',
        schema,
        rootSchema,
        required: isRequired,
        ...selectedIndex,
        ...metaProps
      }

      elements = {
        ...title,
        ...description,
        anyOf: {
          items,
          required: isRequired,
          ...selectedIndex,
          name: uri
        }
      }
    } else {
      if (hasOneOf(schema)) {
        const oneOf = getOneOf(schema)
        const items = (
          oneOf.reduce((accumulator, schema, index) => (
            accumulator.concat(transformArraySchemaNull(schema, rootSchema, values, { ...params, required: isRequired, parentUri, uri, index }))
          ), [])
        )
        const selectedIndex = getSelectedIndex(values, uri)

        meta = {
          uri,
          item: arrayIndex,
          type: 'null',
          schema,
          rootSchema,
          required: isRequired,
          ...selectedIndex,
          ...metaProps
        }

        elements = {
          ...title,
          ...description,
          oneOf: {
            items,
            required: isRequired,
            ...selectedIndex,
            name: uri
          }
        }
      } else {
        if (hasAllOf(schema)) {
          const allOf = getAllOf(schema)
          const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), {})

          // log(itemSchema)

          meta = {
            uri,
            item: arrayIndex,
            type: 'null',
            schema,
            rootSchema,
            required: isRequired,
            ...getMetaDefaultValue(itemSchema, uri),
            ...getMetaValue(values, uri),
            ...metaProps
          }

          elements = {
            ...title,
            ...description,
            field: {
              required: isRequired,
              ...getElementsFieldValue(values, uri, itemSchema),
              ...getElementsFieldProps(params, uri),
              name: uri
            }
          }
        } else {
          meta = {
            uri,
            item: arrayIndex,
            type: 'null',
            schema,
            rootSchema,
            required: isRequired,
            ...getMetaDefaultValue(schema, uri),
            ...getMetaValue(values, uri),
            ...metaProps
          }

          elements = {
            ...title,
            ...description,
            field: {
              required: isRequired,
              ...getElementsFieldValue(values, uri, schema),
              ...getElementsFieldProps(params, uri),
              name: uri
            }
          }
        }
      }
    }
  }

  return {
    meta,
    elements
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
export function transformArraySchemaBoolean (schema, rootSchema, values, params) {
  const {
    required: isRequired = false,
    uri: parentUri,
    index: arrayIndex
  } = params

  const uri = getUri(parentUri, arrayIndex)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  let meta
  let elements
  if (hasEnum(schema)) {
    const items = getEnum(schema)
    const selectedIndex = getSelectedIndex(values, uri)

    meta = {
      uri,
      item: arrayIndex,
      type: 'boolean',
      schema,
      rootSchema,
      required: isRequired,
      ...selectedIndex,
      ...metaProps
    }

    elements = {
      ...title,
      ...description,
      enum: {
        items,
        required: isRequired,
        ...selectedIndex,
        name: uri
      }
    }
  } else {
    if (hasAnyOf(schema)) {
      const anyOf = getAnyOf(schema)
      const items = (
        anyOf.reduce((accumulator, schema, index) => (
          accumulator.concat(transformArraySchemaBoolean(schema, rootSchema, values, { ...params, required: isRequired, parentUri, uri, index }))
        ), [])
      )
      const selectedIndex = getSelectedIndex(values, uri)

      meta = {
        uri,
        item: arrayIndex,
        type: 'boolean',
        schema,
        rootSchema,
        required: isRequired,
        ...selectedIndex,
        ...metaProps
      }

      elements = {
        ...title,
        ...description,
        anyOf: {
          items,
          required: isRequired,
          ...selectedIndex,
          name: uri
        }
      }
    } else {
      if (hasOneOf(schema)) {
        const oneOf = getOneOf(schema)
        const items = (
          oneOf.reduce((accumulator, schema, index) => (
            accumulator.concat(transformArraySchemaBoolean(schema, rootSchema, values, { ...params, required: isRequired, parentUri, uri, index }))
          ), [])
        )
        const selectedIndex = getSelectedIndex(values, uri)

        meta = {
          uri,
          item: arrayIndex,
          type: 'boolean',
          schema,
          rootSchema,
          required: isRequired,
          ...selectedIndex,
          ...metaProps
        }

        elements = {
          ...title,
          ...description,
          oneOf: {
            items,
            required: isRequired,
            ...selectedIndex,
            name: uri
          }
        }
      } else {
        if (hasAllOf(schema)) {
          const allOf = getAllOf(schema)
          const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), {})

          // log(itemSchema)

          meta = {
            uri,
            item: arrayIndex,
            type: 'boolean',
            schema,
            rootSchema,
            required: isRequired,
            ...getMetaDefaultValue(itemSchema, uri),
            ...getMetaValue(values, uri),
            ...metaProps
          }

          elements = {
            ...title,
            ...description,
            field: {
              required: isRequired,
              ...getElementsFieldValue(values, uri, itemSchema),
              ...getElementsFieldProps(params, uri),
              name: uri
            }
          }
        } else {
          meta = {
            uri,
            item: arrayIndex,
            type: 'boolean',
            schema,
            rootSchema,
            required: isRequired,
            ...getMetaDefaultValue(schema, uri),
            ...getMetaValue(values, uri),
            ...metaProps
          }

          elements = {
            ...title,
            ...description,
            field: {
              required: isRequired,
              ...getElementsFieldValue(values, uri, schema),
              ...getElementsFieldProps(params, uri),
              name: uri
            }
          }
        }
      }
    }
  }

  return {
    meta,
    elements
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.5
export function transformArraySchemaObject (schema, rootSchema, values, params) {
  const {
    required: isRequired = false,
    uri: parentUri,
    index: arrayIndex
  } = params

  const uri = getUri(parentUri, arrayIndex)

  const maxProperties = getMaxProperties(schema)
  const minProperties = getMinProperties(schema)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  let meta
  let elements
  if (hasEnum(schema)) {
    const items = getEnum(schema) // `enum` is a reserved word
    const selectedIndex = getSelectedIndex(values, uri)

    meta = {
      uri,
      item: arrayIndex,
      type: 'object',
      schema,
      rootSchema,
      ...maxProperties,
      ...minProperties,
      required: isRequired,
      ...selectedIndex,
      ...metaProps
    }

    elements = {
      ...title,
      ...description,
      enum: {
        items,
        required: isRequired,
        ...selectedIndex,
        name: uri
      }
    }
  } else {
    if (hasAnyOf(schema)) {
      const anyOf = getAnyOf(schema)
      const items = (
        anyOf.reduce((accumulator, schema, index) => (
          accumulator.concat(transformArraySchemaObject(schema, rootSchema, values, { ...params, parentUri, uri, index }))
        ), [])
      )
      const selectedIndex = getSelectedIndex(values, uri)

      meta = {
        uri,
        item: arrayIndex,
        type: 'object',
        schema,
        rootSchema,
        ...maxProperties,
        ...minProperties,
        required: isRequired,
        ...selectedIndex,
        ...metaProps
      }

      elements = {
        ...title,
        ...description,
        anyOf: {
          items,
          required: isRequired,
          ...selectedIndex,
          name: uri
        }
      }
    } else {
      if (hasOneOf(schema)) {
        const oneOf = getOneOf(schema)
        const items = (
          oneOf.reduce((accumulator, schema, index) => (
            accumulator.concat(transformArraySchemaObject(schema, rootSchema, values, { ...params, parentUri, uri, index }))
          ), [])
        )
        const selectedIndex = getSelectedIndex(values, uri)

        meta = {
          uri,
          item: arrayIndex,
          type: 'object',
          schema,
          rootSchema,
          ...maxProperties,
          ...minProperties,
          required: isRequired,
          ...selectedIndex,
          ...metaProps
        }

        elements = {
          ...title,
          ...description,
          oneOf: {
            items,
            required: isRequired,
            ...selectedIndex,
            name: uri
          }
        }
      } else {
        if (hasAllOf(schema)) {
          const allOf = getAllOf(schema)
          const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), {})

          // log(itemSchema)

          meta = {
            uri,
            item: arrayIndex,
            type: 'object',
            schema,
            rootSchema,
            ...maxProperties,
            ...minProperties,
            required: isRequired,
            ...getMetaDefaultValue(itemSchema, uri),
            ...getMetaValue(values, uri),
            ...metaProps
          }

          const {
            properties = {},
            required = []
          } = itemSchema

          elements = {
            ...title,
            ...description,
            fields: (
              Object
                .entries(properties)
                .reduce((accumulator, [key, schema]) => (
                  accumulator.concat(transformObjectSchema(schema, rootSchema, values, { ...params, required: required.includes(key), parentUri, uri, key }))
                ), [])
            )
          }
        } else {
          meta = {
            uri,
            item: arrayIndex,
            type: 'object',
            schema,
            rootSchema,
            ...maxProperties,
            ...minProperties,
            required: isRequired,
            ...getMetaDefaultValue(schema, uri),
            ...getMetaValue(values, uri),
            ...metaProps
          }

          const {
            properties = {},
            required = []
          } = schema

          elements = {
            ...title,
            ...description,
            fields: (
              Object
                .entries(properties)
                .reduce((accumulator, [key, schema]) => (
                  accumulator.concat(transformObjectSchema(schema, rootSchema, values, { ...params, required: required.includes(key), parentUri, uri, key }))
                ), [])
            )
          }
        }
      }
    }
  }

  return {
    meta,
    elements
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.4
export function transformArraySchemaArray (schema, rootSchema, values, params) {
  const {
    required: isRequired = false,
    uri: parentUri,
    index: arrayIndex
  } = params

  const uri = getUri(parentUri, arrayIndex)

  const minItems = getMinItems(schema)
  const maxItems = getMaxItems(schema)
  const hasUniqueItems = getHasUniqueItems(schema)
  const maxContains = getMaxContains(schema)
  const minContains = getMinContains(schema)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  let meta
  let elements
  if (hasEnum(schema)) {
    const items = getEnum(schema)
    const selectedIndex = getSelectedIndex(values, uri)

    meta = {
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
      ...selectedIndex,
      ...metaProps
    }

    elements = {
      ...title,
      ...description,
      enum: {
        items,
        required: isRequired,
        ...selectedIndex,
        name: uri
      }
    }
  } else {
    if (hasAnyOf(schema)) {
      const anyOf = getAnyOf(schema)
      const items = (
        anyOf.reduce((accumulator, schema, index) => (
          accumulator.concat(transformArraySchemaArray(schema, rootSchema, values, { ...params, required: isRequired, parentUri, uri, index }))
        ), [])
      )
      const selectedIndex = getSelectedIndex(values, uri)

      meta = {
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
        ...selectedIndex,
        ...metaProps
      }

      elements = {
        ...title,
        ...description,
        anyOf: {
          items,
          required: isRequired,
          ...selectedIndex,
          name: uri
        }
      }
    } else {
      if (hasOneOf(schema)) {
        const oneOf = getOneOf(schema)
        const items = (
          oneOf.reduce((accumulator, schema, index) => (
            accumulator.concat(transformArraySchemaArray(schema, rootSchema, values, { ...params, required: isRequired, parentUri, uri, index }))
          ), [])
        )
        const selectedIndex = getSelectedIndex(values, uri)

        meta = {
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
          ...selectedIndex,
          ...metaProps
        }

        elements = {
          ...title,
          ...description,
          oneOf: {
            items,
            required: isRequired,
            ...selectedIndex,
            name: uri
          }
        }
      } else {
        if (hasAllOf(schema)) {
          const allOf = getAllOf(schema)
          const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), {})

          // log(itemSchema)

          meta = {
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
            ...getMetaValue(values, uri),
            ...metaProps
          }

          const {
            items = [] // array or object
          } = itemSchema

          const fields = []
            .concat(items)
            .reduce((accumulator, schema, index) => (
              accumulator.concat(transformArraySchema(schema, rootSchema, values, { ...params, parentUri, uri, index }))
            ), [])

          elements = {
            ...title,
            ...description,
            fields
          }
        } else {
          meta = {
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
            ...getMetaValue(values, uri),
            ...metaProps
          }

          const {
            items = [] // array or object
          } = schema

          const fields = []
            .concat(items)
            .reduce((accumulator, schema, index) => (
              accumulator.concat(transformArraySchema(schema, rootSchema, values, { ...params, parentUri, uri, index }))
            ), [])

          elements = {
            ...title,
            ...description,
            fields
          }
        }
      }
    }
  }

  return {
    meta,
    elements
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.2
export function transformArraySchemaNumber (schema, rootSchema, values, params) {
  const {
    required: isRequired = false,
    uri: parentUri,
    index: arrayIndex
  } = params

  const uri = getUri(parentUri, arrayIndex)

  const isExclusiveMin = getIsExclusiveMin(schema)
  const isExclusiveMax = getIsExclusiveMax(schema)

  const min = getMin(schema)
  const max = getMax(schema)
  const step = getStep(schema)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  let meta
  let elements
  if (hasEnum(schema)) {
    const items = getEnum(schema)
    const selectedIndex = getSelectedIndex(values, uri)

    meta = {
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
      ...selectedIndex,
      ...metaProps
    }

    elements = {
      ...title,
      ...description,
      enum: {
        items,
        ...min,
        ...max,
        ...step,
        required: isRequired,
        ...selectedIndex,
        name: uri
      }
    }
  } else {
    if (hasAnyOf(schema)) {
      const anyOf = getAnyOf(schema)
      const items = (
        anyOf.reduce((accumulator, schema, index) => (
          accumulator.concat(transformArraySchemaNumber(schema, rootSchema, values, { ...params, required: isRequired, parentUri, uri, index }))
        ), [])
      )
      const selectedIndex = getSelectedIndex(values, uri)

      meta = {
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
        ...selectedIndex,
        ...metaProps
      }

      elements = {
        ...title,
        ...description,
        anyOf: {
          items,
          ...min,
          ...max,
          ...step,
          required: isRequired,
          ...selectedIndex,
          name: uri
        }
      }
    } else {
      if (hasOneOf(schema)) {
        const oneOf = getOneOf(schema)
        const items = (
          oneOf.reduce((accumulator, schema, index) => (
            accumulator.concat(transformArraySchemaNumber(schema, rootSchema, values, { ...params, required: isRequired, parentUri, uri, index }))
          ), [])
        )
        const selectedIndex = getSelectedIndex(values, uri)

        meta = {
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
          ...selectedIndex,
          ...metaProps
        }

        elements = {
          ...title,
          ...description,
          oneOf: {
            items,
            ...min,
            ...max,
            ...step,
            required: isRequired,
            ...selectedIndex,
            name: uri
          }
        }
      } else {
        if (hasAllOf(schema)) {
          const allOf = getAllOf(schema)
          const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), {})

          // log(itemSchema)

          meta = {
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
            ...getMetaValue(values, uri),
            ...metaProps
          }

          elements = {
            ...title,
            ...description,
            field: {
              ...min,
              ...max,
              ...step,
              required: isRequired,
              ...getElementsFieldValue(values, uri, itemSchema),
              ...getElementsFieldProps(params, uri),
              name: uri
            }
          }
        } else {
          meta = {
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
            ...getMetaValue(values, uri),
            ...metaProps
          }

          elements = {
            ...title,
            ...description,
            field: {
              ...min,
              ...max,
              ...step,
              required: isRequired,
              ...getElementsFieldValue(values, uri, schema),
              ...getElementsFieldProps(params, uri),
              name: uri
            }
          }
        }
      }
    }
  }

  return {
    meta,
    elements
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.3
export function transformArraySchemaString (schema, rootSchema, values, params) {
  const {
    required: isRequired = false,
    uri: parentUri,
    index: arrayIndex
  } = params

  const uri = getUri(parentUri, arrayIndex)

  const minLength = getMinLength(schema)
  const maxLength = getMaxLength(schema)
  const pattern = getPattern(schema)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(schema)
  const description = getDescription(schema)

  let meta
  let elements
  if (hasEnum(schema)) {
    const items = getEnum(schema)
    const selectedIndex = getSelectedIndex(values, uri)

    meta = {
      uri,
      item: arrayIndex,
      type: 'string',
      schema,
      rootSchema,
      ...minLength,
      ...maxLength,
      ...pattern,
      required: isRequired,
      ...selectedIndex,
      ...metaProps
    }

    elements = {
      ...title,
      ...description,
      enum: {
        items,
        ...minLength,
        ...maxLength,
        ...pattern,
        required: isRequired,
        ...selectedIndex,
        name: uri
      }
    }
  } else {
    if (hasAnyOf(schema)) {
      const anyOf = getAnyOf(schema)
      const items = (
        anyOf.reduce((accumulator, schema, index) => (
          accumulator.concat(transformArraySchemaString(schema, rootSchema, values, { ...params, required: isRequired, parentUri, uri, index }))
        ), [])
      )
      const selectedIndex = getSelectedIndex(values, uri)

      meta = {
        uri,
        item: arrayIndex,
        type: 'string',
        schema,
        rootSchema,
        ...minLength,
        ...maxLength,
        ...pattern,
        required: isRequired,
        ...selectedIndex,
        ...metaProps
      }

      elements = {
        ...title,
        ...description,
        anyOf: {
          items,
          ...minLength,
          ...maxLength,
          ...pattern,
          required: isRequired,
          ...selectedIndex,
          name: uri
        }
      }
    } else {
      if (hasOneOf(schema)) {
        const oneOf = getOneOf(schema)
        const items = (
          oneOf.reduce((accumulator, schema, index) => (
            accumulator.concat(transformArraySchemaString(schema, rootSchema, values, { ...params, required: isRequired, parentUri, uri, index }))
          ), [])
        )
        const selectedIndex = getSelectedIndex(values, uri)

        meta = {
          uri,
          item: arrayIndex,
          type: 'string',
          schema,
          rootSchema,
          ...minLength,
          ...maxLength,
          ...pattern,
          required: isRequired,
          ...selectedIndex,
          ...metaProps
        }

        elements = {
          ...title,
          ...description,
          oneOf: {
            items,
            ...minLength,
            ...maxLength,
            ...pattern,
            required: isRequired,
            ...selectedIndex,
            name: uri
          }
        }
      } else {
        if (hasAllOf(schema)) {
          const allOf = getAllOf(schema)
          const itemSchema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), {})

          // log(itemSchema)

          meta = {
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
            ...getMetaValue(values, uri),
            ...metaProps
          }

          elements = {
            ...title,
            ...description,
            field: {
              ...minLength,
              ...maxLength,
              ...pattern,
              required: isRequired,
              ...getElementsFieldValue(values, uri, itemSchema),
              ...getElementsFieldProps(params, uri),
              name: uri
            }
          }
        } else {
          meta = {
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
            ...getMetaValue(values, uri),
            ...metaProps
          }

          elements = {
            ...title,
            ...description,
            field: {
              ...minLength,
              ...maxLength,
              ...pattern,
              required: isRequired,
              ...getElementsFieldValue(values, uri, schema),
              ...getElementsFieldProps(params, uri),
              name: uri
            }
          }
        }
      }
    }
  }

  return {
    meta,
    elements
  }
}

export function transformArraySchema (schema = {}, rootSchema = schema, values = {}, params = {}) {
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

    case 'string':
      return transformArraySchemaString(schema, rootSchema, values, params)

    case 'number':
      return transformArraySchemaNumber(schema, rootSchema, values, params)

    default:
      throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
export function transformNull (rootSchema, values, params) {
  const {
    parentUri = '#',
    uri = getUri(parentUri)
  } = params

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(rootSchema)
  const description = getDescription(rootSchema)

  let meta
  let elements
  if (hasEnum(rootSchema)) {
    const items = getEnum(rootSchema)
    const selectedIndex = getSelectedIndex(values, uri)

    meta = {
      uri,
      type: 'null',
      schema: rootSchema,
      ...selectedIndex,
      ...metaProps
    }

    elements = {
      ...title,
      ...description,
      enum: {
        items,
        ...selectedIndex,
        name: uri
      }
    }
  } else {
    if (hasAnyOf(rootSchema)) {
      const anyOf = getAnyOf(rootSchema)
      const items = (
        anyOf.reduce((accumulator, schema, index) => (
          accumulator.concat(transformArraySchemaNull(schema, rootSchema, values, { ...params, parentUri, uri: parentUri, index }))
        ), [])
      )
      const selectedIndex = getSelectedIndex(values, uri)

      meta = {
        uri,
        type: 'null',
        schema: rootSchema,
        ...selectedIndex,
        ...metaProps
      }

      elements = {
        ...title,
        ...description,
        anyOf: {
          items,
          ...selectedIndex,
          name: uri
        }
      }
    } else {
      if (hasOneOf(rootSchema)) {
        const oneOf = getOneOf(rootSchema)
        const items = (
          oneOf.reduce((accumulator, schema, index) => (
            accumulator.concat(transformArraySchemaNull(schema, rootSchema, values, { ...params, parentUri, uri: parentUri, index }))
          ), [])
        )
        const selectedIndex = getSelectedIndex(values, uri)

        meta = {
          uri,
          type: 'null',
          schema: rootSchema,
          ...selectedIndex,
          ...metaProps
        }

        elements = {
          ...title,
          ...description,
          oneOf: {
            items,
            ...selectedIndex,
            name: uri
          }
        }
      } else {
        if (hasAllOf(rootSchema)) {
          const allOf = getAllOf(rootSchema)
          const schema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), {})

          // log(schema)

          meta = {
            uri,
            type: 'null',
            schema: rootSchema,
            ...getMetaDefaultValue(schema, uri),
            ...getMetaValue(values, uri),
            ...metaProps
          }

          elements = {
            ...title,
            ...description,
            field: {
              ...getElementsFieldValue(values, uri, schema),
              ...getElementsFieldProps(params, uri),
              name: uri
            }
          }
        } else {
          meta = {
            uri,
            type: 'null',
            schema: rootSchema,
            ...getMetaDefaultValue(rootSchema, uri),
            ...getMetaValue(values, uri),
            ...metaProps
          }

          elements = {
            ...title,
            ...description,
            field: {
              ...getElementsFieldValue(values, uri, rootSchema),
              ...getElementsFieldProps(params, uri),
              name: uri
            }
          }
        }
      }
    }
  }

  return {
    meta,
    elements
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
export function transformBoolean (rootSchema, values, params) {
  const {
    parentUri = '#',
    uri = getUri(parentUri)
  } = params

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(rootSchema)
  const description = getDescription(rootSchema)

  let meta
  let elements
  if (hasEnum(rootSchema)) {
    const items = getEnum(rootSchema)
    const selectedIndex = getSelectedIndex(values, uri)

    meta = {
      uri,
      type: 'boolean',
      schema: rootSchema,
      ...selectedIndex,
      ...metaProps
    }

    elements = {
      ...title,
      ...description,
      enum: {
        items,
        ...selectedIndex,
        name: uri
      }
    }
  } else {
    if (hasAnyOf(rootSchema)) {
      const anyOf = getAnyOf(rootSchema)
      const items = (
        anyOf.reduce((accumulator, schema, index) => (
          accumulator.concat(transformArraySchemaBoolean(schema, rootSchema, values, { ...params, parentUri, uri: parentUri, index }))
        ), [])
      )
      const selectedIndex = getSelectedIndex(values, uri)

      meta = {
        uri,
        type: 'boolean',
        schema: rootSchema,
        ...selectedIndex,
        ...metaProps
      }

      elements = {
        ...title,
        ...description,
        anyOf: {
          items,
          ...selectedIndex,
          name: uri
        }
      }
    } else {
      if (hasOneOf(rootSchema)) {
        const oneOf = getOneOf(rootSchema)
        const items = (
          oneOf.reduce((accumulator, schema, index) => (
            accumulator.concat(transformArraySchemaBoolean(schema, rootSchema, values, { ...params, parentUri, uri: parentUri, index }))
          ), [])
        )
        const selectedIndex = getSelectedIndex(values, uri)

        meta = {
          uri,
          type: 'boolean',
          schema: rootSchema,
          ...selectedIndex,
          ...metaProps
        }

        elements = {
          ...title,
          ...description,
          oneOf: {
            items,
            ...selectedIndex,
            name: uri
          }
        }
      } else {
        if (hasAllOf(rootSchema)) {
          const allOf = getAllOf(rootSchema)
          const schema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), {})

          // log(schema)

          meta = {
            uri,
            type: 'boolean',
            schema: rootSchema,
            ...getMetaDefaultValue(schema, uri),
            ...getMetaValue(values, uri),
            ...metaProps
          }

          elements = {
            ...title,
            ...description,
            field: {
              ...getElementsFieldValue(values, uri, schema),
              ...getElementsFieldProps(params, uri),
              name: uri
            }
          }
        } else {
          meta = {
            uri,
            type: 'boolean',
            schema: rootSchema,
            ...getMetaDefaultValue(rootSchema, uri),
            ...getMetaValue(values, uri),
            ...metaProps
          }

          elements = {
            ...title,
            ...description,
            field: {
              ...getElementsFieldValue(values, uri, rootSchema),
              ...getElementsFieldProps(params, uri),
              name: uri
            }
          }
        }
      }
    }
  }

  return {
    meta,
    elements
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.5
export function transformObject (rootSchema, values, params) {
  const {
    parentUri = '#',
    uri = getUri(parentUri)
  } = params

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(rootSchema)
  const description = getDescription(rootSchema)

  let meta
  let elements
  if (hasEnum(rootSchema)) {
    const items = getEnum(rootSchema) // `enum` is a reserved word
    const selectedIndex = getSelectedIndex(values, uri)

    meta = {
      uri,
      type: 'object',
      schema: rootSchema,
      ...selectedIndex,
      ...metaProps
    }

    elements = {
      ...title,
      ...description,
      enum: {
        items,
        ...selectedIndex,
        name: uri
      }
    }
  } else {
    if (hasAnyOf(rootSchema)) {
      const anyOf = getAnyOf(rootSchema)
      const items = (
        anyOf.reduce((accumulator, schema, index) => (
          accumulator.concat(transformArraySchemaObject(schema, rootSchema, values, { ...params, parentUri, uri: parentUri, index }))
        ), [])
      )
      const selectedIndex = getSelectedIndex(values, uri)

      meta = {
        uri,
        type: 'object',
        schema: rootSchema,
        ...selectedIndex,
        ...metaProps
      }

      elements = {
        ...title,
        ...description,
        anyOf: {
          items,
          ...selectedIndex,
          name: uri
        }
      }
    } else {
      if (hasOneOf(rootSchema)) {
        const oneOf = getOneOf(rootSchema)
        const items = (
          oneOf.reduce((accumulator, schema, index) => (
            accumulator.concat(transformArraySchemaObject(schema, rootSchema, values, { ...params, parentUri, uri: parentUri, index }))
          ), [])
        )
        const selectedIndex = getSelectedIndex(values, uri)

        meta = {
          uri,
          type: 'object',
          schema: rootSchema,
          ...selectedIndex,
          ...metaProps
        }

        elements = {
          ...title,
          ...description,
          oneOf: {
            items,
            ...selectedIndex,
            name: uri
          }
        }
      } else {
        if (hasAllOf(rootSchema)) {
          const allOf = getAllOf(rootSchema)
          const schema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), {})

          // log(schema)

          meta = {
            uri,
            type: 'object',
            schema: rootSchema,
            ...getMetaDefaultValue(schema, uri),
            ...getMetaValue(values, uri),
            ...metaProps
          }

          const {
            properties = {},
            required = []
          } = schema

          elements = {
            ...title,
            ...description,
            fields: (
              Object
                .entries(properties)
                .reduce((accumulator, [key, schema]) => (
                  accumulator.concat(transformObjectSchema(schema, rootSchema, values, { ...params, required: required.includes(key), parentUri, uri: parentUri, key }))
                ), [])
            )
          }
        } else {
          meta = {
            uri,
            type: 'object',
            schema: rootSchema,
            ...getMetaDefaultValue(rootSchema, uri),
            ...getMetaValue(values, uri),
            ...metaProps
          }

          const {
            properties = {},
            required = []
          } = rootSchema

          elements = {
            ...title,
            ...description,
            fields: (
              Object
                .entries(properties)
                .reduce((accumulator, [key, schema]) => (
                  accumulator.concat(transformObjectSchema(schema, rootSchema, values, { ...params, required: required.includes(key), parentUri, uri: parentUri, key }))
                ), [])
            )
          }
        }
      }
    }
  }

  return {
    meta,
    elements
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.4
export function transformArray (rootSchema, values, params) {
  const {
    parentUri = '#',
    uri = getUri(parentUri)
  } = params

  const minItems = getMinItems(rootSchema)
  const maxItems = getMaxItems(rootSchema)
  const hasUniqueItems = getHasUniqueItems(rootSchema)
  const maxContains = getMaxContains(rootSchema)
  const minContains = getMinContains(rootSchema)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(rootSchema)
  const description = getDescription(rootSchema)

  let meta
  let elements
  if (hasEnum(rootSchema)) {
    const items = getEnum(rootSchema) // `enum` is a reserved word
    const selectedIndex = getSelectedIndex(values, uri)

    meta = {
      uri,
      type: 'array',
      schema: rootSchema,
      ...minItems,
      ...maxItems,
      ...hasUniqueItems,
      ...maxContains,
      ...minContains,
      ...selectedIndex,
      ...metaProps
    }

    elements = {
      ...title,
      ...description,
      enum: {
        items,
        ...selectedIndex,
        name: uri
      }
    }
  } else {
    if (hasAnyOf(rootSchema)) {
      const anyOf = getAnyOf(rootSchema)
      const items = (
        anyOf.reduce((accumulator, schema, index) => (
          accumulator.concat(transformArraySchemaArray(schema, rootSchema, values, { ...params, parentUri, uri: parentUri, index }))
        ), [])
      )
      const selectedIndex = getSelectedIndex(values, uri)

      meta = {
        uri,
        type: 'array',
        schema: rootSchema,
        ...minItems,
        ...maxItems,
        ...hasUniqueItems,
        ...maxContains,
        ...minContains,
        ...selectedIndex,
        ...metaProps
      }

      elements = {
        ...title,
        ...description,
        anyOf: {
          items,
          ...selectedIndex,
          name: uri
        }
      }
    } else {
      if (hasOneOf(rootSchema)) {
        const oneOf = getOneOf(rootSchema)
        const items = (
          oneOf.reduce((accumulator, schema, index) => (
            accumulator.concat(transformArraySchemaArray(schema, rootSchema, values, { ...params, parentUri, uri: parentUri, index }))
          ), [])
        )
        const selectedIndex = getSelectedIndex(values, uri)

        meta = {
          uri,
          type: 'array',
          schema: rootSchema,
          ...minItems,
          ...maxItems,
          ...hasUniqueItems,
          ...maxContains,
          ...minContains,
          ...selectedIndex,
          ...metaProps
        }

        elements = {
          ...title,
          ...description,
          oneOf: {
            items,
            ...selectedIndex,
            name: uri
          }
        }
      } else {
        if (hasAllOf(rootSchema)) {
          const allOf = getAllOf(rootSchema)
          const schema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), {})

          // log(schema)

          meta = {
            uri,
            type: 'array',
            schema: rootSchema,
            ...minItems,
            ...maxItems,
            ...hasUniqueItems,
            ...maxContains,
            ...minContains,
            ...getMetaDefaultValue(schema, uri),
            ...getMetaValue(values, uri),
            ...metaProps
          }

          const {
            items = [] // array or object
          } = schema

          const fields = []
            .concat(items)
            .reduce((accumulator, schema, index) => (
              accumulator.concat(transformArraySchema(schema, rootSchema, values, { ...params, parentUri, uri: parentUri, index }))
            ), [])

          elements = {
            ...title,
            ...description,
            fields
          }
        } else {
          meta = {
            uri,
            type: 'array',
            schema: rootSchema,
            ...minItems,
            ...maxItems,
            ...hasUniqueItems,
            ...maxContains,
            ...minContains,
            ...getMetaDefaultValue(rootSchema, uri),
            ...getMetaValue(values, uri),
            ...metaProps
          }

          const {
            items = [] // array or object
          } = rootSchema

          const fields = []
            .concat(items)
            .reduce((accumulator, schema, index) => (
              accumulator.concat(transformArraySchema(schema, rootSchema, values, { ...params, parentUri, uri: parentUri, index }))
            ), [])

          elements = {
            ...title,
            ...description,
            fields
          }
        }
      }
    }
  }

  return {
    meta,
    elements
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.1
export function transformNumber (rootSchema, values, params) {
  const {
    parentUri = '#',
    uri = getUri(parentUri)
  } = params

  const isExclusiveMin = getIsExclusiveMin(rootSchema)
  const isExclusiveMax = getIsExclusiveMax(rootSchema)

  const min = getMin(rootSchema)
  const max = getMax(rootSchema)
  const step = getStep(rootSchema)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(rootSchema)
  const description = getDescription(rootSchema)

  let meta
  let elements
  if (hasEnum(rootSchema)) {
    const items = getEnum(rootSchema) // `enum` is a reserved word
    const selectedIndex = getSelectedIndex(values, uri)

    meta = {
      uri,
      type: 'number',
      schema: rootSchema,
      ...isExclusiveMin,
      ...isExclusiveMax,
      ...min,
      ...max,
      ...step,
      ...selectedIndex,
      ...metaProps
    }

    elements = {
      ...title,
      ...description,
      enum: {
        items,
        ...min,
        ...max,
        ...step,
        ...selectedIndex,
        name: uri
      }
    }
  } else {
    if (hasAnyOf(rootSchema)) {
      const anyOf = getAnyOf(rootSchema)
      const items = (
        anyOf.reduce((accumulator, schema, index) => (
          accumulator.concat(transformArraySchemaNumber(schema, rootSchema, values, { ...params, parentUri, uri: parentUri, index }))
        ), [])
      )
      const selectedIndex = getSelectedIndex(values, uri)

      meta = {
        uri,
        type: 'number',
        schema: rootSchema,
        ...isExclusiveMin,
        ...isExclusiveMax,
        ...min,
        ...max,
        ...step,
        ...selectedIndex,
        ...metaProps
      }

      elements = {
        ...title,
        ...description,
        anyOf: {
          items,
          ...selectedIndex,
          name: uri
        }
      }
    } else {
      if (hasOneOf(rootSchema)) {
        const oneOf = getOneOf(rootSchema)
        const items = (
          oneOf.reduce((accumulator, schema, index) => (
            accumulator.concat(transformArraySchemaNumber(schema, rootSchema, values, { ...params, parentUri, uri: parentUri, index }))
          ), [])
        )
        const selectedIndex = getSelectedIndex(values, uri)

        meta = {
          uri,
          type: 'number',
          schema: rootSchema,
          ...isExclusiveMin,
          ...isExclusiveMax,
          ...min,
          ...max,
          ...step,
          ...selectedIndex,
          ...metaProps
        }

        elements = {
          ...title,
          ...description,
          oneOf: {
            items,
            ...selectedIndex,
            name: uri
          }
        }
      } else {
        if (hasAllOf(rootSchema)) {
          const allOf = getAllOf(rootSchema)
          const schema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), {})

          // log(schema)

          meta = {
            uri,
            type: 'number',
            schema: rootSchema,
            ...isExclusiveMin,
            ...isExclusiveMax,
            ...min,
            ...max,
            ...step,
            ...getMetaDefaultValue(schema, uri),
            ...getMetaValue(values, uri),
            ...metaProps
          }

          elements = {
            ...title,
            ...description,
            field: {
              ...min,
              ...max,
              ...step,
              ...getElementsFieldValue(values, uri, schema),
              ...getElementsFieldProps(params, uri),
              name: uri
            }
          }
        } else {
          meta = {
            uri,
            type: 'number',
            schema: rootSchema,
            ...isExclusiveMin,
            ...isExclusiveMax,
            ...min,
            ...max,
            ...step,
            ...getMetaDefaultValue(rootSchema, uri),
            ...getMetaValue(values, uri),
            ...metaProps
          }

          elements = {
            ...title,
            ...description,
            field: {
              ...min,
              ...max,
              ...step,
              ...getElementsFieldValue(values, uri, rootSchema),
              ...getElementsFieldProps(params, uri),
              name: uri
            }
          }
        }
      }
    }
  }

  return {
    meta,
    elements
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.3
export function transformString (rootSchema, values, params) {
  const {
    parentUri = '#',
    uri = getUri(parentUri)
  } = params

  const minLength = getMinLength(rootSchema)
  const maxLength = getMaxLength(rootSchema)
  const pattern = getPattern(rootSchema)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(rootSchema)
  const description = getDescription(rootSchema)

  let meta
  let elements
  if (hasEnum(rootSchema)) {
    const items = getEnum(rootSchema) // `enum` is a reserved word
    const selectedIndex = getSelectedIndex(values, uri)

    meta = {
      uri,
      type: 'string',
      schema: rootSchema,
      ...minLength,
      ...maxLength,
      ...pattern,
      ...selectedIndex,
      ...metaProps
    }

    elements = {
      ...title,
      ...description,
      enum: {
        items,
        ...minLength,
        ...maxLength,
        ...pattern,
        ...selectedIndex,
        name: uri
      }
    }
  } else {
    if (hasAnyOf(rootSchema)) {
      const anyOf = getAnyOf(rootSchema)
      const items = (
        anyOf.reduce((accumulator, schema, index) => (
          accumulator.concat(transformArraySchemaString(schema, rootSchema, values, { ...params, parentUri, uri: parentUri, index }))
        ), [])
      )
      const selectedIndex = getSelectedIndex(values, uri)

      meta = {
        uri,
        type: 'string',
        schema: rootSchema,
        ...minLength,
        ...maxLength,
        ...pattern,
        ...selectedIndex,
        ...metaProps
      }

      elements = {
        ...title,
        ...description,
        anyOf: {
          items,
          ...selectedIndex,
          name: uri
        }
      }
    } else {
      if (hasOneOf(rootSchema)) {
        const oneOf = getOneOf(rootSchema)
        const items = (
          oneOf.reduce((accumulator, schema, index) => (
            accumulator.concat(transformArraySchemaString(schema, rootSchema, values, { ...params, parentUri, uri: parentUri, index }))
          ), [])
        )
        const selectedIndex = getSelectedIndex(values, uri)

        meta = {
          uri,
          type: 'string',
          schema: rootSchema,
          ...minLength,
          ...maxLength,
          ...pattern,
          ...selectedIndex,
          ...metaProps
        }

        elements = {
          ...title,
          ...description,
          oneOf: {
            items,
            ...selectedIndex,
            name: uri
          }
        }
      } else {
        if (hasAllOf(rootSchema)) {
          const allOf = getAllOf(rootSchema)
          const schema = allOf.reduce((accumulator, schema) => ({ ...accumulator, ...schema }), {})

          // log(schema)

          meta = {
            uri,
            type: 'string',
            schema: rootSchema,
            ...minLength,
            ...maxLength,
            ...pattern,
            ...getMetaDefaultValue(schema, uri),
            ...getMetaValue(values, uri),
            ...metaProps
          }

          elements = {
            ...title,
            ...description,
            field: {
              ...minLength,
              ...maxLength,
              ...pattern,
              ...getElementsFieldValue(values, uri, schema),
              ...getElementsFieldProps(params, uri),
              name: uri
            }
          }
        } else {
          meta = {
            uri,
            type: 'string',
            schema: rootSchema,
            ...minLength,
            ...maxLength,
            ...pattern,
            ...getMetaDefaultValue(rootSchema, uri),
            ...getMetaValue(values, uri),
            ...metaProps
          }

          elements = {
            ...title,
            ...description,
            field: {
              ...minLength,
              ...maxLength,
              ...pattern,
              ...getElementsFieldValue(values, uri, rootSchema),
              ...getElementsFieldProps(params, uri),
              name: uri
            }
          }
        }
      }
    }
  }

  return {
    meta,
    elements
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
