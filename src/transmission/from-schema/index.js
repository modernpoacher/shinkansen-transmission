import {
  getDefaultValue,
  getValue,
  getSelectedIndex,
  getSelectedOneOf,
  getSelectedAnyOf,
  getTitle,
  getDescription,
  hasEnum,
  getEnum,
  hasOneOf,
  getOneOf,
  hasAnyOf,
  getAnyOf,
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

    const items = getEnum(schema)

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
      const selected = getSelectedAnyOf(values, uri)

      meta = {
        uri,
        name: fieldKey,
        type: 'null',
        schema,
        rootSchema,
        required: isRequired,
        ...selected,
        ...metaProps
      }

      const items = getAnyOf(schema)

      elements = {
        ...title,
        ...description,
        anyOf: {
          items: items.reduce((accumulator, schema, index) => (
            accumulator.concat(transformArraySchemaNull(schema, rootSchema, values, { ...params, required: isRequired, uri, index }))
          ), []),
          required: isRequired,
          ...selected,
          name: uri
        }
      }
    } else {
      if (hasOneOf(schema)) {
        const selected = getSelectedOneOf(values, uri)

        meta = {
          uri,
          name: fieldKey,
          type: 'null',
          schema,
          rootSchema,
          required: isRequired,
          ...selected,
          ...metaProps
        }

        const items = getOneOf(schema)

        elements = {
          ...title,
          ...description,
          oneOf: {
            items: items.reduce((accumulator, schema, index) => (
              accumulator.concat(transformArraySchemaNull(schema, rootSchema, values, { ...params, required: isRequired, uri, index }))
            ), []),
            required: isRequired,
            ...selected,
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
          ...getDefaultValue(schema, uri),
          ...getValue(values, uri),
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

    const items = getEnum(schema)

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
      const selected = getSelectedAnyOf(values, uri)

      meta = {
        uri,
        name: fieldKey,
        type: 'boolean',
        schema,
        rootSchema,
        required: isRequired,
        ...selected,
        ...metaProps
      }

      const items = getAnyOf(schema)

      elements = {
        ...title,
        ...description,
        anyOf: {
          items: items.reduce((accumulator, schema, index) => (
            accumulator.concat(transformArraySchemaBoolean(schema, rootSchema, values, { ...params, required: isRequired, uri, index }))
          ), []),
          required: isRequired,
          ...selected,
          name: uri
        }
      }
    } else {
      if (hasOneOf(schema)) {
        const selected = getSelectedOneOf(values, uri)

        meta = {
          uri,
          name: fieldKey,
          type: 'boolean',
          schema,
          rootSchema,
          required: isRequired,
          ...selected,
          ...metaProps
        }

        const items = getOneOf(schema)

        elements = {
          ...title,
          ...description,
          oneOf: {
            items: items.reduce((accumulator, schema, index) => (
              accumulator.concat(transformArraySchemaBoolean(schema, rootSchema, values, { ...params, required: isRequired, uri, index }))
            ), []),
            required: isRequired,
            ...selected,
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
          ...getDefaultValue(schema, uri),
          ...getValue(values, uri),
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

    const items = getEnum(schema) // `enum` is a reserved word

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
      const selected = getSelectedAnyOf(values, uri)

      meta = {
        uri,
        name: fieldKey,
        type: 'object',
        schema,
        rootSchema,
        ...maxProperties,
        ...minProperties,
        required: isRequired,
        ...selected,
        ...metaProps
      }

      const items = getAnyOf(schema)

      elements = {
        ...title,
        ...description,
        anyOf: {
          items: items.reduce((accumulator, schema, index) => (
            accumulator.concat(transformArraySchemaObject(schema, rootSchema, values, { ...params, required: isRequired, uri, index }))
          ), []),
          required: isRequired,
          ...selected,
          name: uri
        }
      }
    } else {
      if (hasOneOf(schema)) {
        const selected = getSelectedOneOf(values, uri)

        meta = {
          uri,
          name: fieldKey,
          type: 'object',
          schema,
          rootSchema,
          ...maxProperties,
          ...minProperties,
          required: isRequired,
          ...selected,
          ...metaProps
        }

        const items = getOneOf(schema)

        elements = {
          ...title,
          ...description,
          oneOf: {
            items: items.reduce((accumulator, schema, index) => (
              accumulator.concat(transformArraySchemaObject(schema, rootSchema, values, { ...params, required: isRequired, uri, index }))
            ), []),
            required: isRequired,
            ...selected,
            name: uri
          }
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
          ...getDefaultValue(schema, uri),
          ...getValue(values, uri),
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
                accumulator.concat(transformObjectSchema(schema, rootSchema, values, { ...params, required: required.includes(key), uri, key }))
              ), [])
          )
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

    const items = getEnum(schema)

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
      const selected = getSelectedAnyOf(values, uri)

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
        ...selected,
        ...metaProps
      }

      const items = getAnyOf(schema)

      elements = {
        ...title,
        ...description,
        anyOf: {
          items: items.reduce((accumulator, schema, index) => (
            accumulator.concat(transformArraySchemaArray(schema, rootSchema, values, { ...params, required: isRequired, uri, index }))
          ), []),
          required: isRequired,
          ...selected,
          name: uri
        }
      }
    } else {
      if (hasOneOf(schema)) {
        const selected = getSelectedOneOf(values, uri)

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
          ...selected,
          ...metaProps
        }

        const items = getOneOf(schema)

        elements = {
          ...title,
          ...description,
          oneOf: {
            items: items.reduce((accumulator, schema, index) => (
              accumulator.concat(transformArraySchemaArray(schema, rootSchema, values, { ...params, required: isRequired, uri, index }))
            ), []),
            required: isRequired,
            ...selected,
            name: uri
          }
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
          ...getDefaultValue(schema, uri),
          ...getValue(values, uri),
          ...metaProps
        }

        const {
          items = [] // array or object
        } = schema

        const fields = []
          .concat(items)
          .reduce((accumulator, schema, index) => (
            accumulator.concat(transformArraySchema(schema, rootSchema, values, { ...params, required: isRequired, uri, index }))
          ), [])

        elements = {
          ...title,
          ...description,
          fields
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

    const items = getEnum(schema) // `enum` is a reserved word

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
      const selected = getSelectedAnyOf(values, uri)

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
        ...selected,
        ...metaProps
      }

      const items = getAnyOf(schema)

      elements = {
        ...title,
        ...description,
        anyOf: {
          items: items.reduce((accumulator, schema, index) => (
            accumulator.concat(transformArraySchemaString(schema, rootSchema, values, { ...params, required: isRequired, uri, index }))
          ), []),
          ...minLength,
          ...maxLength,
          ...pattern,
          required: isRequired,
          ...selected,
          name: uri
        }
      }
    } else {
      if (hasOneOf(schema)) {
        const selected = getSelectedOneOf(values, uri)

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
          ...selected,
          ...metaProps
        }

        const items = getOneOf(schema)

        elements = {
          ...title,
          ...description,
          oneOf: {
            items: items.reduce((accumulator, schema, index) => (
              accumulator.concat(transformArraySchemaString(schema, rootSchema, values, { ...params, required: isRequired, uri, index }))
            ), []),
            ...minLength,
            ...maxLength,
            ...pattern,
            required: isRequired,
            ...selected,
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
          ...getDefaultValue(schema, uri),
          ...getValue(values, uri),
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

    const items = getEnum(schema) // `enum` is a reserved word

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
      const selected = getSelectedAnyOf(values, uri)

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
        ...selected,
        ...metaProps
      }

      const items = getAnyOf(schema)

      elements = {
        ...title,
        ...description,
        anyOf: {
          items: items.reduce((accumulator, schema, index) => (
            accumulator.concat(transformArraySchemaNumber(schema, rootSchema, values, { ...params, index }))
          ), []),
          ...min,
          ...max,
          ...step,
          required: isRequired,
          ...selected,
          name: uri
        }
      }
    } else {
      if (hasOneOf(schema)) {
        const selected = getSelectedOneOf(values, uri)

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
          ...selected,
          ...metaProps
        }

        const items = getOneOf(schema)

        elements = {
          ...title,
          ...description,
          oneOf: {
            items: items.reduce((accumulator, schema, index) => (
              accumulator.concat(transformArraySchemaNumber(schema, rootSchema, values, { ...params, index }))
            ), []),
            ...min,
            ...max,
            ...step,
            required: isRequired,
            ...selected,
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
          ...getDefaultValue(schema, uri),
          ...getValue(values, uri),
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

    const items = getEnum(schema)

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
      const selected = getSelectedAnyOf(values, uri)

      meta = {
        uri,
        item: arrayIndex,
        type: 'null',
        schema,
        rootSchema,
        required: isRequired,
        ...selected,
        ...metaProps
      }

      const items = getAnyOf(schema)

      elements = {
        ...title,
        ...description,
        anyOf: {
          items: items.reduce((accumulator, schema, index) => (
            accumulator.concat(transformArraySchemaNull(schema, rootSchema, values, { ...params, required: isRequired, uri, index }))
          ), []),
          required: isRequired,
          ...selected,
          name: uri
        }
      }
    } else {
      if (hasOneOf(schema)) {
        const selected = getSelectedOneOf(values, uri)

        meta = {
          uri,
          item: arrayIndex,
          type: 'null',
          schema,
          rootSchema,
          required: isRequired,
          ...selected,
          ...metaProps
        }

        const items = getOneOf(schema)

        elements = {
          ...title,
          ...description,
          oneOf: {
            items: items.reduce((accumulator, schema, index) => (
              accumulator.concat(transformArraySchemaNull(schema, rootSchema, values, { ...params, required: isRequired, uri, index }))
            ), []),
            required: isRequired,
            ...selected,
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
          ...getDefaultValue(schema, uri),
          ...getValue(values, uri),
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

    const items = getEnum(schema)

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
      const selected = getSelectedAnyOf(values, uri)

      meta = {
        uri,
        item: arrayIndex,
        type: 'boolean',
        schema,
        rootSchema,
        required: isRequired,
        ...selected,
        ...metaProps
      }

      const items = getAnyOf(schema)

      elements = {
        ...title,
        ...description,
        anyOf: {
          items: items.reduce((accumulator, schema, index) => (
            accumulator.concat(transformArraySchemaBoolean(schema, rootSchema, values, { ...params, required: isRequired, uri, index }))
          ), []),
          required: isRequired,
          ...selected,
          name: uri
        }
      }
    } else {
      if (hasOneOf(schema)) {
        const selected = getSelectedOneOf(values, uri)

        meta = {
          uri,
          item: arrayIndex,
          type: 'boolean',
          schema,
          rootSchema,
          required: isRequired,
          ...selected,
          ...metaProps
        }

        const items = getOneOf(schema)

        elements = {
          ...title,
          ...description,
          oneOf: {
            items: items.reduce((accumulator, schema, index) => (
              accumulator.concat(transformArraySchemaBoolean(schema, rootSchema, values, { ...params, required: isRequired, uri, index }))
            ), []),
            required: isRequired,
            ...selected,
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
          ...getDefaultValue(schema, uri),
          ...getValue(values, uri),
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

    const items = getEnum(schema) // `enum` is a reserved word

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
      const selected = getSelectedAnyOf(values, uri)

      meta = {
        uri,
        item: arrayIndex,
        type: 'object',
        schema,
        rootSchema,
        ...maxProperties,
        ...minProperties,
        required: isRequired,
        ...selected,
        ...metaProps
      }

      const items = getAnyOf(schema)

      elements = {
        ...title,
        ...description,
        anyOf: {
          items: items.reduce((accumulator, schema, index) => (
            accumulator.concat(transformArraySchemaObject(schema, rootSchema, values, { ...params, uri, index }))
          ), []),
          required: isRequired,
          ...selected,
          name: uri
        }
      }
    } else {
      if (hasOneOf(schema)) {
        const selected = getSelectedOneOf(values, uri)

        meta = {
          uri,
          item: arrayIndex,
          type: 'object',
          schema,
          rootSchema,
          ...maxProperties,
          ...minProperties,
          required: isRequired,
          ...selected,
          ...metaProps
        }

        const items = getOneOf(schema)

        elements = {
          ...title,
          ...description,
          oneOf: {
            items: items.reduce((accumulator, schema, index) => (
              accumulator.concat(transformArraySchemaObject(schema, rootSchema, values, { ...params, uri, index }))
            ), []),
            required: isRequired,
            ...selected,
            name: uri
          }
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
          ...getDefaultValue(schema, uri),
          ...getValue(values, uri),
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
                accumulator.concat(transformObjectSchema(schema, rootSchema, values, { ...params, required: required.includes(key), uri, key }))
              ), [])
          )
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

    const items = getEnum(schema)

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
      const selected = getSelectedAnyOf(values, uri)

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
        ...selected,
        ...metaProps
      }

      const items = getAnyOf(schema)

      elements = {
        ...title,
        ...description,
        anyOf: {
          items: items.reduce((accumulator, schema, index) => (
            accumulator.concat(transformArraySchemaArray(schema, rootSchema, values, { ...params, required: isRequired, uri, index }))
          ), []),
          required: isRequired,
          ...selected,
          name: uri
        }
      }
    } else {
      if (hasOneOf(schema)) {
        const selected = getSelectedOneOf(values, uri)

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
          ...selected,
          ...metaProps
        }

        const items = getOneOf(schema)

        elements = {
          ...title,
          ...description,
          oneOf: {
            items: items.reduce((accumulator, schema, index) => (
              accumulator.concat(transformArraySchemaArray(schema, rootSchema, values, { ...params, required: isRequired, uri, index }))
            ), []),
            required: isRequired,
            ...selected,
            name: uri
          }
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
          ...getDefaultValue(schema, uri),
          ...getValue(values, uri),
          ...metaProps
        }

        const {
          items = [] // array or object
        } = schema

        const fields = []
          .concat(items)
          .reduce((accumulator, schema, index) => (
            accumulator.concat(transformArraySchema(schema, rootSchema, values, { ...params, uri, index }))
          ), [])

        elements = {
          ...title,
          ...description,
          fields
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

    const items = getEnum(schema)

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
      const selected = getSelectedAnyOf(values, uri)

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
        ...selected,
        ...metaProps
      }

      const items = getAnyOf(schema)

      elements = {
        ...title,
        ...description,
        anyOf: {
          items: items.reduce((accumulator, schema, index) => (
            accumulator.concat(transformArraySchemaString(schema, rootSchema, values, { ...params, required: isRequired, uri, index }))
          ), []),
          ...minLength,
          ...maxLength,
          ...pattern,
          required: isRequired,
          ...selected,
          name: uri
        }
      }
    } else {
      if (hasOneOf(schema)) {
        const selected = getSelectedOneOf(values, uri)

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
          ...selected,
          ...metaProps
        }

        const items = getOneOf(schema)

        elements = {
          ...title,
          ...description,
          oneOf: {
            items: items.reduce((accumulator, schema, index) => (
              accumulator.concat(transformArraySchemaString(schema, rootSchema, values, { ...params, required: isRequired, uri, index }))
            ), []),
            ...minLength,
            ...maxLength,
            ...pattern,
            required: isRequired,
            ...selected,
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
          ...getDefaultValue(schema, uri),
          ...getValue(values, uri),
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

    const items = getEnum(schema)

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
      const selected = getSelectedAnyOf(values, uri)

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
        ...selected,
        ...metaProps
      }

      const items = getAnyOf(schema)

      elements = {
        ...title,
        ...description,
        anyOf: {
          items: items.reduce((accumulator, schema, index) => (
            accumulator.concat(transformArraySchemaNumber(schema, rootSchema, values, { ...params, required: isRequired, uri, index }))
          ), []),
          ...min,
          ...max,
          ...step,
          required: isRequired,
          ...selected,
          name: uri
        }
      }
    } else {
      if (hasOneOf(schema)) {
        const selected = getSelectedOneOf(values, uri)

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
          ...selected,
          ...metaProps
        }

        const items = getOneOf(schema)

        elements = {
          ...title,
          ...description,
          oneOf: {
            items: items.reduce((accumulator, schema, index) => (
              accumulator.concat(transformArraySchemaNumber(schema, rootSchema, values, { ...params, required: isRequired, uri, index }))
            ), []),
            ...min,
            ...max,
            ...step,
            required: isRequired,
            ...selected,
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
          ...getDefaultValue(schema, uri),
          ...getValue(values, uri),
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
  const uri = getUri()

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(rootSchema)
  const description = getDescription(rootSchema)

  let meta
  let elements
  if (hasEnum(rootSchema)) {
    const selectedIndex = getSelectedIndex(values, uri)

    meta = {
      uri,
      type: 'null',
      schema: rootSchema,
      ...selectedIndex,
      ...metaProps
    }

    const items = getEnum(rootSchema)

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
      const selected = getSelectedAnyOf(values, uri)

      meta = {
        uri,
        type: 'null',
        schema: rootSchema,
        ...selected,
        ...metaProps
      }

      const items = getAnyOf(rootSchema)

      elements = {
        ...title,
        ...description,
        anyOf: {
          items: items.reduce((accumulator, schema, index) => (
            accumulator.concat(transformArraySchemaNull(schema, rootSchema, values, { ...params, index }))
          ), []),
          ...selected,
          name: uri
        }
      }
    } else {
      if (hasOneOf(rootSchema)) {
        const selected = getSelectedOneOf(values, uri)

        meta = {
          uri,
          type: 'null',
          schema: rootSchema,
          ...selected,
          ...metaProps
        }

        const items = getOneOf(rootSchema)

        elements = {
          ...title,
          ...description,
          oneOf: {
            items: items.reduce((accumulator, schema, index) => (
              accumulator.concat(transformArraySchemaNull(schema, rootSchema, values, { ...params, index }))
            ), []),
            ...selected,
            name: uri
          }
        }
      } else {
        meta = {
          uri,
          type: 'null',
          schema: rootSchema,
          ...getDefaultValue(rootSchema, uri),
          ...getValue(values, uri),
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

  return {
    meta,
    elements
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
export function transformBoolean (rootSchema, values, params) {
  const uri = getUri()

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(rootSchema)
  const description = getDescription(rootSchema)

  let meta
  let elements
  if (hasEnum(rootSchema)) {
    const selectedIndex = getSelectedIndex(values, uri)

    meta = {
      uri,
      type: 'boolean',
      schema: rootSchema,
      ...selectedIndex,
      ...metaProps
    }

    const items = getEnum(rootSchema)

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
      const selected = getSelectedAnyOf(values, uri)

      meta = {
        uri,
        type: 'boolean',
        schema: rootSchema,
        ...selected,
        ...metaProps
      }

      const items = getAnyOf(rootSchema)

      elements = {
        ...title,
        ...description,
        anyOf: {
          items: items.reduce((accumulator, schema, index) => (
            accumulator.concat(transformArraySchemaBoolean(schema, rootSchema, values, { ...params, index }))
          ), []),
          ...selected,
          name: uri
        }
      }
    } else {
      if (hasOneOf(rootSchema)) {
        const selected = getSelectedOneOf(values, uri)

        meta = {
          uri,
          type: 'boolean',
          schema: rootSchema,
          ...selected,
          ...metaProps
        }

        const items = getOneOf(rootSchema)

        elements = {
          ...title,
          ...description,
          oneOf: {
            items: items.reduce((accumulator, schema, index) => (
              accumulator.concat(transformArraySchemaBoolean(schema, rootSchema, values, { ...params, index }))
            ), []),
            ...selected,
            name: uri
          }
        }
      } else {
        meta = {
          uri,
          type: 'boolean',
          schema: rootSchema,
          ...getDefaultValue(rootSchema, uri),
          ...getValue(values, uri),
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

  return {
    meta,
    elements
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.5
export function transformObject (rootSchema, values, params) {
  const uri = getUri()

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(rootSchema)
  const description = getDescription(rootSchema)

  let meta
  let elements
  if (hasEnum(rootSchema)) {
    const selectedIndex = getSelectedIndex(values, uri)

    meta = {
      uri,
      type: 'object',
      schema: rootSchema,
      ...selectedIndex,
      ...metaProps
    }

    const items = getEnum(rootSchema) // `enum` is a reserved word

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
      const selected = getSelectedAnyOf(values, uri)

      meta = {
        uri,
        type: 'object',
        schema: rootSchema,
        ...selected,
        ...metaProps
      }

      const items = getAnyOf(rootSchema)

      elements = {
        ...title,
        ...description,
        anyOf: {
          items: items.reduce((accumulator, schema, index) => (
            accumulator.concat(transformArraySchemaObject(schema, rootSchema, values, { ...params, index }))
          ), []),
          ...selected,
          name: uri
        }
      }
    } else {
      if (hasOneOf(rootSchema)) {
        const selected = getSelectedOneOf(values, uri)

        meta = {
          uri,
          type: 'object',
          schema: rootSchema,
          ...selected,
          ...metaProps
        }

        const items = getOneOf(rootSchema)

        elements = {
          ...title,
          ...description,
          oneOf: {
            items: items.reduce((accumulator, schema, index) => (
              accumulator.concat(transformArraySchemaObject(schema, rootSchema, values, { ...params, index }))
            ), []),
            ...selected,
            name: uri
          }
        }
      } else {
        meta = {
          uri,
          type: 'object',
          schema: rootSchema,
          ...getDefaultValue(rootSchema, uri),
          ...getValue(values, uri),
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
                accumulator.concat(transformObjectSchema(schema, rootSchema, values, { ...params, required: required.includes(key), key }))
              ), [])
          )
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
  const uri = getUri()

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

    const items = getEnum(rootSchema) // `enum` is a reserved word

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
      const selected = getSelectedAnyOf(values, uri)

      meta = {
        uri,
        type: 'array',
        schema: rootSchema,
        ...minItems,
        ...maxItems,
        ...hasUniqueItems,
        ...maxContains,
        ...minContains,
        ...selected,
        ...metaProps
      }

      const items = getAnyOf(rootSchema)

      elements = {
        ...title,
        ...description,
        anyOf: {
          items: items.reduce((accumulator, schema, index) => (
            accumulator.concat(transformArraySchemaArray(schema, rootSchema, values, { ...params, index }))
          ), []),
          ...selected,
          name: uri
        }
      }
    } else {
      if (hasOneOf(rootSchema)) {
        const selected = getSelectedOneOf(values, uri)

        meta = {
          uri,
          type: 'array',
          schema: rootSchema,
          ...minItems,
          ...maxItems,
          ...hasUniqueItems,
          ...maxContains,
          ...minContains,
          ...selected,
          ...metaProps
        }

        const items = getOneOf(rootSchema)

        elements = {
          ...title,
          ...description,
          oneOf: {
            items: items.reduce((accumulator, schema, index) => (
              accumulator.concat(transformArraySchemaArray(schema, rootSchema, values, { ...params, index }))
            ), []),
            ...selected,
            name: uri
          }
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
          ...getDefaultValue(rootSchema, uri),
          ...getValue(values, uri),
          ...metaProps
        }

        const {
          items = [] // array or object
        } = rootSchema

        const fields = []
          .concat(items)
          .reduce((accumulator, schema, index) => (
            accumulator.concat(transformArraySchema(schema, rootSchema, values, { ...params, index }))
          ), [])

        elements = {
          ...title,
          ...description,
          fields
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
  const uri = getUri()

  const minLength = getMinLength(rootSchema)
  const maxLength = getMaxLength(rootSchema)
  const pattern = getPattern(rootSchema)

  const metaProps = getMetaProps(params, uri)

  const title = getTitle(rootSchema)
  const description = getDescription(rootSchema)

  let meta
  let elements
  if (hasEnum(rootSchema)) {
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

    const items = getEnum(rootSchema) // `enum` is a reserved word

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
      const selected = getSelectedAnyOf(values, uri)

      meta = {
        uri,
        type: 'string',
        schema: rootSchema,
        ...minLength,
        ...maxLength,
        ...pattern,
        ...selected,
        ...metaProps
      }

      const items = getAnyOf(rootSchema)

      elements = {
        ...title,
        ...description,
        anyOf: {
          items: items.reduce((accumulator, schema, index) => (
            accumulator.concat(transformArraySchemaString(schema, rootSchema, values, { ...params, index }))
          ), []),
          ...selected,
          name: uri
        }
      }
    } else {
      if (hasOneOf(rootSchema)) {
        const selected = getSelectedOneOf(values, uri)

        meta = {
          uri,
          type: 'string',
          schema: rootSchema,
          ...minLength,
          ...maxLength,
          ...pattern,
          ...selected,
          ...metaProps
        }

        const items = getOneOf(rootSchema)

        elements = {
          ...title,
          ...description,
          oneOf: {
            items: items.reduce((accumulator, schema, index) => (
              accumulator.concat(transformArraySchemaString(schema, rootSchema, values, { ...params, index }))
            ), []),
            ...selected,
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
          ...getDefaultValue(rootSchema, uri),
          ...getValue(values, uri),
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

  return {
    meta,
    elements
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.1
export function transformNumber (rootSchema, values, params) {
  const uri = getUri()

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

    const items = getEnum(rootSchema) // `enum` is a reserved word

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
      const selected = getSelectedAnyOf(values, uri)

      meta = {
        uri,
        type: 'number',
        schema: rootSchema,
        ...isExclusiveMin,
        ...isExclusiveMax,
        ...min,
        ...max,
        ...step,
        ...selected,
        ...metaProps
      }

      const items = getAnyOf(rootSchema)

      elements = {
        ...title,
        ...description,
        anyOf: {
          items: items.reduce((accumulator, schema, index) => (
            accumulator.concat(transformArraySchemaNumber(schema, rootSchema, values, { ...params, index }))
          ), []),
          ...selected,
          name: uri
        }
      }
    } else {
      if (hasOneOf(rootSchema)) {
        const selected = getSelectedOneOf(values, uri)

        meta = {
          uri,
          type: 'number',
          schema: rootSchema,
          ...isExclusiveMin,
          ...isExclusiveMax,
          ...min,
          ...max,
          ...step,
          ...selected,
          ...metaProps
        }

        const items = getOneOf(rootSchema)

        elements = {
          ...title,
          ...description,
          oneOf: {
            items: items.reduce((accumulator, schema, index) => (
              accumulator.concat(transformArraySchemaNumber(schema, rootSchema, values, { ...params, index }))
            ), []),
            ...selected,
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
          ...getDefaultValue(rootSchema, uri),
          ...getValue(values, uri),
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

  return {
    meta,
    elements
  }
}

export default function transform (rootSchema = {}, values = {}, params = {}) {
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
