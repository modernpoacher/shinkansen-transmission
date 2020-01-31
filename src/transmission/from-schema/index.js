import {
  getDefaultValue,
  getValue,
  getSelectedIndex,
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

export function transformObjectSchemaNull (schema, rootSchema, values, params) {
  const {
    required: isRequired = false,
    uri: parentUri,
    key: fieldKey
  } = params

  const uri = getUri(parentUri, fieldKey)

  return {
    meta: {
      uri,
      name: fieldKey,
      type: 'null',
      schema,
      rootSchema,
      required: isRequired,
      ...getDefaultValue(schema, uri),
      ...getValue(values, uri),
      ...getMetaProps(params, uri)
    },
    elements: {
      ...getTitle(schema),
      ...getDescription(schema),
      field: {
        required: isRequired,
        ...getElementsFieldValue(values, uri, schema),
        ...getElementsFieldProps(params, uri),
        name: uri
      }
    }
  }
}

export function transformObjectSchemaBoolean (schema, rootSchema, values, params) {
  const {
    required: isRequired = false,
    uri: parentUri,
    key: fieldKey
  } = params

  const uri = getUri(parentUri, fieldKey)

  return {
    meta: {
      uri,
      name: fieldKey,
      type: 'boolean',
      schema,
      rootSchema,
      required: isRequired,
      ...getDefaultValue(schema, uri),
      ...getValue(values, uri),
      ...getMetaProps(params, uri)
    },
    elements: {
      ...getTitle(schema),
      ...getDescription(schema),
      field: {
        required: isRequired,
        ...getElementsFieldValue(values, uri, schema),
        ...getElementsFieldProps(params, uri),
        name: uri
      }
    }
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

  let meta
  let elements
  if (hasEnum(schema)) {
    meta = {
      uri,
      name: fieldKey,
      type: 'object',
      schema,
      rootSchema,
      ...getMaxProperties(schema),
      ...getMinProperties(schema),
      required: isRequired,
      ...getSelectedIndex(values, uri),
      ...getMetaProps(params, uri)
    }

    const items = getEnum(schema) // `enum` is a reserved word

    elements = {
      ...getTitle(schema),
      ...getDescription(schema),
      enum: {
        items,
        required: isRequired,
        ...getSelectedIndex(values, uri),
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
      ...getMaxProperties(schema),
      ...getMinProperties(schema),
      required: isRequired,
      ...getDefaultValue(schema, uri),
      ...getValue(values, uri),
      ...getMetaProps(params, uri)
    }

    if (hasAnyOf(schema)) {
      const items = getAnyOf(schema)

      elements = {
        ...getTitle(schema),
        ...getDescription(schema),
        anyOf: {
          items: items.reduce((accumulator, schema, index) => (
            accumulator.concat(transformArraySchema(schema, rootSchema, values, { ...params, required: isRequired, uri, index }))
          ), []),
          required: isRequired
        }
      }
    } else {
      if (hasOneOf(schema)) {
        const items = getAnyOf(schema)

        elements = {
          ...getTitle(schema),
          ...getDescription(schema),
          oneOf: {
            items: items.reduce((accumulator, schema, index) => (
              accumulator.concat(transformArraySchema(schema, rootSchema, values, { ...params, required: isRequired, uri, index }))
            ), []),
            required: isRequired
          }
        }
      } else {
        const {
          properties = {},
          required = []
        } = schema

        elements = {
          ...getTitle(schema),
          ...getDescription(schema),
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

  const {
    items = [] // array or object
  } = schema

  const fields = []
    .concat(items)
    .reduce((accumulator, schema, index) => (
      accumulator.concat(transformArraySchema(schema, rootSchema, values, { ...params, required: isRequired, uri, index }))
    ), [])

  return {
    meta: {
      uri,
      name: fieldKey,
      type: 'array',
      schema,
      rootSchema,
      ...getMinItems(schema),
      ...getMaxItems(schema),
      ...getHasUniqueItems(schema),
      ...getMaxContains(schema),
      ...getMinContains(schema),
      required: isRequired,
      ...getDefaultValue(schema, uri),
      ...getValue(values, uri),
      ...getMetaProps(params, uri)
    },
    elements: {
      ...getTitle(schema),
      ...getDescription(schema),
      fields
    }
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

  let meta
  let elements
  if (hasEnum(schema)) {
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
      ...getSelectedIndex(values, uri),
      ...getMetaProps(params, uri)
    }

    const items = getEnum(schema) // `enum` is a reserved word

    elements = {
      ...getTitle(schema),
      ...getDescription(schema),
      enum: {
        items,
        ...minLength,
        ...maxLength,
        ...pattern,
        required: isRequired,
        ...getSelectedIndex(values, uri),
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
      ...getMetaProps(params, uri)
    }

    if (hasAnyOf(schema)) {
      const items = getAnyOf(schema)

      elements = {
        ...getTitle(schema),
        ...getDescription(schema),
        anyOf: {
          items: items.reduce((accumulator, schema, index) => (
            accumulator.concat(transformArraySchema(schema, rootSchema, values, { ...params, required: isRequired, uri, index }))
          ), []),
          ...minLength,
          ...maxLength,
          ...pattern,
          required: isRequired
        }
      }
    } else {
      if (hasOneOf(schema)) {
        const items = getOneOf(schema)

        elements = {
          ...getTitle(schema),
          ...getDescription(schema),
          oneOf: {
            items: items.reduce((accumulator, schema, index) => (
              accumulator.concat(transformArraySchema(schema, rootSchema, values, { ...params, required: isRequired, uri, index }))
            ), []),
            ...minLength,
            ...maxLength,
            ...pattern,
            required: isRequired
          }
        }
      } else {
        elements = {
          ...getTitle(schema),
          ...getDescription(schema),
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

  let meta
  let elements
  if (hasEnum(schema)) {
    meta = {
      uri,
      name: fieldKey,
      type: 'number',
      schema,
      rootSchema,
      ...getIsExclusiveMin(schema),
      ...getIsExclusiveMax(schema),
      ...min,
      ...max,
      ...step,
      required: isRequired,
      ...getSelectedIndex(values, uri),
      ...getMetaProps(params, uri)
    }

    const items = getEnum(schema) // `enum` is a reserved word

    elements = {
      ...getTitle(schema),
      ...getDescription(schema),
      enum: {
        items,
        ...min,
        ...max,
        ...step,
        required: isRequired,
        ...getSelectedIndex(values, uri),
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
      ...getIsExclusiveMin(schema),
      ...getIsExclusiveMax(schema),
      ...min,
      ...max,
      ...step,
      required: isRequired,
      ...getDefaultValue(schema, uri),
      ...getValue(values, uri),
      ...getMetaProps(params, uri)
    }

    if (hasAnyOf(schema)) {
      const items = getAnyOf(schema)

      elements = {
        ...getTitle(schema),
        ...getDescription(schema),
        anyOf: {
          items: items.reduce((accumulator, schema, index) => (
            accumulator.concat(transformArraySchema(schema, rootSchema, values, { ...params, index }))
          ), []),
          ...min,
          ...max,
          ...step,
          required: isRequired
        }
      }
    } else {
      if (hasOneOf(schema)) {
        const items = getOneOf(schema)

        elements = {
          ...getTitle(schema),
          ...getDescription(schema),
          oneOf: {
            items: items.reduce((accumulator, schema, index) => (
              accumulator.concat(transformArraySchema(schema, rootSchema, values, { ...params, index }))
            ), []),
            ...min,
            ...max,
            ...step,
            required: isRequired
          }
        }
      } else {
        elements = {
          ...getTitle(schema),
          ...getDescription(schema),
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

export function transformArraySchemaNull (schema, rootSchema, values, params) {
  const {
    required: isRequired = false,
    uri: parentUri,
    index: arrayIndex
  } = params

  const uri = getUri(parentUri, arrayIndex)

  return {
    meta: {
      uri,
      item: arrayIndex,
      type: 'null',
      schema,
      rootSchema,
      required: isRequired,
      ...getDefaultValue(schema, uri),
      ...getValue(values, uri),
      ...getMetaProps(params, uri)
    },
    elements: {
      ...getTitle(schema),
      ...getDescription(schema),
      field: {
        required: isRequired,
        ...getElementsFieldValue(values, uri, schema),
        ...getElementsFieldProps(params, uri),
        name: uri
      }
    }
  }
}

export function transformArraySchemaBoolean (schema, rootSchema, values, params) {
  const {
    required: isRequired = false,
    uri: parentUri,
    index: arrayIndex
  } = params

  const uri = getUri(parentUri, arrayIndex)

  return {
    meta: {
      uri,
      item: arrayIndex,
      type: 'boolean',
      schema,
      rootSchema,
      required: isRequired,
      ...getDefaultValue(schema, uri),
      ...getValue(values, uri),
      ...getMetaProps(params, uri)
    },
    elements: {
      ...getTitle(schema),
      ...getDescription(schema),
      field: {
        required: isRequired,
        ...getElementsFieldValue(values, uri, schema),
        ...getElementsFieldProps(params, uri),
        name: uri
      }
    }
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

  let meta
  let elements
  if (hasEnum(schema)) {
    meta = {
      uri,
      item: arrayIndex,
      type: 'object',
      schema,
      rootSchema,
      ...getMaxProperties(schema),
      ...getMinProperties(schema),
      required: isRequired,
      ...getSelectedIndex(values, uri),
      ...getMetaProps(params, uri)
    }

    const items = getEnum(schema) // `enum` is a reserved word

    elements = {
      ...getTitle(schema),
      ...getDescription(schema),
      enum: {
        items,
        required: isRequired,
        ...getSelectedIndex(values, uri),
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
      ...getMaxProperties(schema),
      ...getMinProperties(schema),
      required: isRequired,
      ...getDefaultValue(schema, uri),
      ...getValue(values, uri),
      ...getMetaProps(params, uri)
    }

    if (hasAnyOf(schema)) {
      const items = getAnyOf(schema)

      elements = {
        ...getTitle(schema),
        ...getDescription(schema),
        anyOf: {
          items: items.reduce((accumulator, schema, index) => (
            accumulator.concat(transformArraySchema(schema, rootSchema, values, { ...params, uri, index }))
          ), []),
          required: isRequired
        }
      }
    } else {
      if (hasOneOf(schema)) {
        const items = getAnyOf(schema)

        elements = {
          ...getTitle(schema),
          ...getDescription(schema),
          oneOf: {
            items: items.reduce((accumulator, schema, index) => (
              accumulator.concat(transformArraySchema(schema, rootSchema, values, { ...params, uri, index }))
            ), []),
            required: isRequired
          }
        }
      } else {
        const {
          properties = {},
          required = []
        } = schema

        elements = {
          ...getTitle(schema),
          ...getDescription(schema),
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

  const {
    items = [] // array or object
  } = schema

  const fields = []
    .concat(items)
    .reduce((accumulator, schema, index) => (
      accumulator.concat(transformArraySchema(schema, rootSchema, values, { ...params, uri, index }))
    ), [])

  return {
    meta: {
      uri,
      item: arrayIndex,
      type: 'array',
      schema,
      rootSchema,
      ...getMinItems(schema),
      ...getMaxItems(schema),
      ...getHasUniqueItems(schema),
      ...getMaxContains(schema),
      ...getMinContains(schema),
      required: isRequired,
      ...getDefaultValue(schema, uri),
      ...getValue(values, uri),
      ...getMetaProps(params, uri)
    },
    elements: {
      ...getTitle(schema),
      ...getDescription(schema),
      fields
    }
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

  return {
    meta: {
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
      ...getMetaProps(params, uri)
    },
    elements: {
      ...getTitle(schema),
      ...getDescription(schema),
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

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.2
export function transformArraySchemaNumber (schema, rootSchema, values, params) {
  const {
    required: isRequired = false,
    uri: parentUri,
    index: arrayIndex
  } = params

  const uri = getUri(parentUri, arrayIndex)
  const min = getMin(schema)
  const max = getMax(schema)
  const step = getStep(schema)

  return {
    meta: {
      uri,
      item: arrayIndex,
      type: 'number',
      schema,
      rootSchema,
      ...getIsExclusiveMin(schema),
      ...getIsExclusiveMax(schema),
      ...min,
      ...max,
      ...step,
      required: isRequired,
      ...getDefaultValue(schema, uri),
      ...getValue(values, uri),
      ...getMetaProps(params, uri)
    },
    elements: {
      ...getTitle(schema),
      ...getDescription(schema),
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

export function transformNull (rootSchema, values, params) {
  const uri = getUri()

  return {
    meta: {
      uri,
      type: 'null',
      schema: rootSchema,
      ...getDefaultValue(rootSchema, uri),
      ...getValue(values, uri),
      ...getMetaProps(params, uri)
    },
    elements: {
      ...getTitle(rootSchema),
      ...getDescription(rootSchema),
      field: {
        ...getElementsFieldValue(values, uri, rootSchema),
        ...getElementsFieldProps(params, uri),
        name: uri
      }
    }
  }
}

export function transformBoolean (rootSchema, values, params) {
  const uri = getUri()

  return {
    meta: {
      uri,
      type: 'boolean',
      schema: rootSchema,
      ...getDefaultValue(rootSchema, uri),
      ...getValue(values, uri),
      ...getMetaProps(params, uri)
    },
    elements: {
      ...getTitle(rootSchema),
      ...getDescription(rootSchema),
      field: {
        ...getElementsFieldValue(values, uri, rootSchema),
        ...getElementsFieldProps(params, uri),
        name: uri
      }
    }
  }
}

export function transformObject (rootSchema, values, params) {
  const {
    properties = {},
    required = []
  } = rootSchema

  const uri = getUri()

  let meta
  let elements
  if (hasEnum(rootSchema)) {
    meta = {
      uri,
      type: 'object',
      schema: rootSchema,
      ...getSelectedIndex(values, uri),
      ...getMetaProps(params, uri)
    }

    const items = getEnum(rootSchema) // `enum` is a reserved word

    elements = {
      ...getTitle(rootSchema),
      ...getDescription(rootSchema),
      enum: {
        items,
        ...getSelectedIndex(values, uri),
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
      ...getMetaProps(params, uri)
    }

    if (hasAnyOf(rootSchema)) {
      const items = getAnyOf(rootSchema)

      elements = {
        ...getTitle(rootSchema),
        ...getDescription(rootSchema),
        anyOf: {
          items: items.reduce((accumulator, schema, index) => (
            accumulator.concat(transformArraySchema(schema, rootSchema, values, { ...params, index }))
          ), [])
        }
      }
    } else {
      if (hasOneOf(rootSchema)) {
        const items = getOneOf(rootSchema)

        elements = {
          ...getTitle(rootSchema),
          ...getDescription(rootSchema),
          oneOf: {
            items: items.reduce((accumulator, schema, index) => (
              accumulator.concat(transformArraySchema(schema, rootSchema, values, { ...params, index }))
            ), [])
          }
        }
      } else {
        elements = {
          ...getTitle(rootSchema),
          ...getDescription(rootSchema),
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

export function transformArray (rootSchema, values, params) {
  const {
    items = [] // array or object
  } = rootSchema

  const uri = getUri()

  const fields = []
    .concat(items)
    .reduce((accumulator, schema, index) => (
      accumulator.concat(transformArraySchema(schema, rootSchema, values, { ...params, index }))
    ), [])

  return {
    meta: {
      uri,
      type: 'array',
      schema: rootSchema,
      ...getMinItems(rootSchema),
      ...getMaxItems(rootSchema),
      ...getHasUniqueItems(rootSchema),
      ...getMaxContains(rootSchema),
      ...getMinContains(rootSchema),
      ...getDefaultValue(rootSchema, uri),
      ...getValue(values, uri),
      ...getMetaProps(params, uri)
    },
    elements: {
      ...getTitle(rootSchema),
      ...getDescription(rootSchema),
      fields
    }
  }
}

export function transformString (rootSchema, values, params) {
  const uri = getUri()
  const minLength = getMinLength(rootSchema)
  const maxLength = getMaxLength(rootSchema)
  const pattern = getPattern(rootSchema)

  return {
    meta: {
      uri,
      type: 'string',
      schema: rootSchema,
      ...minLength,
      ...maxLength,
      ...pattern,
      ...getDefaultValue(rootSchema, uri),
      ...getValue(values, uri),
      ...getMetaProps(params, uri)
    },
    elements: {
      ...getTitle(rootSchema),
      ...getDescription(rootSchema),
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

export function transformNumber (rootSchema, values, params) {
  const uri = getUri()
  const min = getMin(rootSchema)
  const max = getMax(rootSchema)
  const step = getStep(rootSchema)

  return {
    meta: {
      uri,
      type: 'number',
      schema: rootSchema,
      ...getIsExclusiveMin(rootSchema),
      ...getIsExclusiveMax(rootSchema),
      ...min,
      ...max,
      ...step,
      ...getDefaultValue(rootSchema, uri),
      ...getValue(values, uri),
      ...getMetaProps(params, uri)
    },
    elements: {
      ...getTitle(rootSchema),
      ...getDescription(rootSchema),
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
