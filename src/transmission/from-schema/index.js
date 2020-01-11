import {
  getValue,
  getTitle,
  getDescription,
  getDefaultValue,
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

export function transformObjectSchemaNull (schema, rootSchema, params, values) {
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
        ...getElementsFieldProps(params, uri),
        ...getElementsFieldValue(values, uri, schema),
        name: uri
      }
    }
  }
}

export function transformObjectSchemaBoolean (schema, rootSchema, params, values) {
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
        ...getElementsFieldProps(params, uri),
        ...getElementsFieldValue(values, uri, schema),
        name: uri
      }
    }
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.5
export function transformObjectSchemaObject (schema, rootSchema, params, values) {
  const {
    required: isRequired = false,
    uri: parentUri,
    key: fieldKey
  } = params

  const uri = getUri(parentUri, fieldKey)

  const meta = {
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

  let elements
  if (hasEnum(schema)) {
    const items = getEnum(schema) // `enum` is a reserved word

    elements = {
      ...getTitle(schema),
      ...getDescription(schema),
      enum: {
        items,
        required: isRequired
      }
    }
  } else {
    if (hasAnyOf(schema)) {
      const items = getAnyOf(schema)

      elements = {
        ...getTitle(schema),
        ...getDescription(schema),
        anyOf: {
          items: items.reduce((accumulator, schema, index) => (
            accumulator.concat(transformArraySchema(schema, rootSchema, { ...params, required: isRequired, uri, index }, values))
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
              accumulator.concat(transformArraySchema(schema, rootSchema, { ...params, required: isRequired, uri, index }, values))
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
                accumulator.concat(transformObjectSchema(schema, rootSchema, { ...params, required: required.includes(key), uri, key }, values))
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
export function transformObjectSchemaArray (schema, rootSchema, params, values) {
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
      accumulator.concat(transformArraySchema(schema, rootSchema, { ...params, required: isRequired, uri, index }, values))
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
export function transformObjectSchemaString (schema, rootSchema, params, values) {
  const {
    required: isRequired = false,
    uri: parentUri,
    key: fieldKey
  } = params

  const uri = getUri(parentUri, fieldKey)
  const minLength = getMinLength(schema)
  const maxLength = getMaxLength(schema)
  const pattern = getPattern(schema)

  const meta = {
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

  let elements
  if (hasEnum(schema)) {
    const items = getEnum(schema) // `enum` is a reserved word

    elements = {
      ...getTitle(schema),
      ...getDescription(schema),
      enum: {
        items,
        ...minLength,
        ...maxLength,
        ...pattern,
        required: isRequired
      }
    }
  } else {
    if (hasAnyOf(schema)) {
      const items = getAnyOf(schema)

      elements = {
        ...getTitle(schema),
        ...getDescription(schema),
        anyOf: {
          items: items.reduce((accumulator, schema, index) => (
            accumulator.concat(transformArraySchema(schema, rootSchema, { ...params, required: isRequired, uri, index }, values))
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
              accumulator.concat(transformArraySchema(schema, rootSchema, { ...params, required: isRequired, uri, index }, values))
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
            ...getElementsFieldProps(params, uri),
            ...getElementsFieldValue(values, uri, schema),
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
export function transformObjectSchemaNumber (schema, rootSchema, params, values) {
  const {
    required: isRequired = false,
    uri: parentUri,
    key: fieldKey
  } = params

  const uri = getUri(parentUri, fieldKey)
  const min = getMin(schema)
  const max = getMax(schema)
  const step = getStep(schema)

  const meta = {
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

  let elements
  if (hasEnum(schema)) {
    const items = getEnum(schema) // `enum` is a reserved word

    elements = {
      ...getTitle(schema),
      ...getDescription(schema),
      enum: {
        items,
        ...min,
        ...max,
        ...step,
        required: isRequired
      }
    }
  } else {
    if (hasAnyOf(schema)) {
      const items = getAnyOf(schema)

      elements = {
        ...getTitle(schema),
        ...getDescription(schema),
        anyOf: {
          items: items.reduce((accumulator, schema, index) => (
            accumulator.concat(transformArraySchema(schema, rootSchema, { ...params, index }, values))
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
              accumulator.concat(transformArraySchema(schema, rootSchema, { ...params, index }, values))
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
            ...getElementsFieldProps(params, uri),
            ...getElementsFieldValue(values, uri, schema),
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

export function transformObjectSchema (schema = {}, rootSchema = schema, params = {}, values = {}) {
  const { type } = schema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  switch (type) {
    case 'null':
      return transformObjectSchemaNull(schema, rootSchema, params, values)

    case 'boolean':
      return transformObjectSchemaBoolean(schema, rootSchema, params, values)

    case 'object':
      return transformObjectSchemaObject(schema, rootSchema, params, values)

    case 'array':
      return transformObjectSchemaArray(schema, rootSchema, params, values)

    case 'string':
      return transformObjectSchemaString(schema, rootSchema, params, values)

    case 'number':
      return transformObjectSchemaNumber(schema, rootSchema, params, values)

    default:
      throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
  }
}

export function transformArraySchemaNull (schema, rootSchema, params, values) {
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
        ...getElementsFieldProps(params, uri),
        ...getElementsFieldValue(values, uri, schema),
        name: uri
      }
    }
  }
}

export function transformArraySchemaBoolean (schema, rootSchema, params, values) {
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
        ...getElementsFieldProps(params, uri),
        ...getElementsFieldValue(values, uri, schema),
        name: uri
      }
    }
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.5
export function transformArraySchemaObject (schema, rootSchema, params, values) {
  const {
    required: isRequired = false,
    uri: parentUri,
    index: arrayIndex
  } = params

  const uri = getUri(parentUri, arrayIndex)

  const meta = {
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

  let elements
  if (hasEnum(schema)) {
    const items = getEnum(schema) // `enum` is a reserved word

    elements = {
      ...getTitle(schema),
      ...getDescription(schema),
      enum: {
        items,
        required: isRequired
      }
    }
  } else {
    if (hasAnyOf(schema)) {
      const items = getAnyOf(schema)

      elements = {
        ...getTitle(schema),
        ...getDescription(schema),
        anyOf: {
          items: items.reduce((accumulator, schema, index) => (
            accumulator.concat(transformArraySchema(schema, rootSchema, { ...params, uri, index }, values))
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
              accumulator.concat(transformArraySchema(schema, rootSchema, { ...params, uri, index }, values))
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
                accumulator.concat(transformObjectSchema(schema, rootSchema, { ...params, required: required.includes(key), uri, key }, values))
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
export function transformArraySchemaArray (schema, rootSchema, params, values) {
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
      accumulator.concat(transformArraySchema(schema, rootSchema, { ...params, uri, index }, values))
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
export function transformArraySchemaString (schema, rootSchema, params, values) {
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
        ...getElementsFieldProps(params, uri),
        ...getElementsFieldValue(values, uri, schema),
        name: uri
      }
    }
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.2
export function transformArraySchemaNumber (schema, rootSchema, params, values) {
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
        ...getElementsFieldProps(params, uri),
        ...getElementsFieldValue(values, uri, schema),
        name: uri
      }
    }
  }
}

export function transformArraySchema (schema = {}, rootSchema = schema, params = {}, values = {}) {
  const { type } = schema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  switch (type) {
    case 'null':
      return transformArraySchemaNull(schema, rootSchema, params, values)

    case 'boolean':
      return transformArraySchemaBoolean(schema, rootSchema, params, values)

    case 'object':
      return transformArraySchemaObject(schema, rootSchema, params, values)

    case 'array':
      return transformArraySchemaArray(schema, rootSchema, params, values)

    case 'string':
      return transformArraySchemaString(schema, rootSchema, params, values)

    case 'number':
      return transformArraySchemaNumber(schema, rootSchema, params, values)

    default:
      throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
  }
}

export function transformNull (rootSchema, params, values) {
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
        ...getElementsFieldProps(params, uri),
        ...getElementsFieldValue(values, uri, rootSchema),
        name: uri
      }
    }
  }
}

export function transformBoolean (rootSchema, params, values) {
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
        ...getElementsFieldProps(params, uri),
        ...getElementsFieldValue(values, uri, rootSchema),
        name: uri
      }
    }
  }
}

export function transformObject (rootSchema, params, values) {
  const {
    properties = {},
    required = []
  } = rootSchema

  const uri = getUri()

  const meta = {
    uri,
    type: 'object',
    schema: rootSchema,
    ...getDefaultValue(rootSchema, uri),
    ...getValue(values, uri),
    ...getMetaProps(params, uri)
  }

  let elements
  if (hasEnum(rootSchema)) {
    const items = getEnum(rootSchema) // `enum` is a reserved word

    elements = {
      ...getTitle(rootSchema),
      ...getDescription(rootSchema),
      enum: {
        items
      }
    }
  } else {
    if (hasAnyOf(rootSchema)) {
      const items = getAnyOf(rootSchema)

      elements = {
        ...getTitle(rootSchema),
        ...getDescription(rootSchema),
        anyOf: {
          items: items.reduce((accumulator, schema, index) => (
            accumulator.concat(transformArraySchema(schema, rootSchema, { ...params, index }, values))
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
              accumulator.concat(transformArraySchema(schema, rootSchema, { ...params, index }, values))
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
                accumulator.concat(transformObjectSchema(schema, rootSchema, { ...params, required: required.includes(key), key }, values))
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

export function transformArray (rootSchema, params, values) {
  const {
    items = [] // array or object
  } = rootSchema

  const uri = getUri()

  const fields = []
    .concat(items)
    .reduce((accumulator, schema, index) => (
      accumulator.concat(transformArraySchema(schema, rootSchema, { ...params, index }, values))
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

export function transformString (rootSchema, params, values) {
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
        ...getElementsFieldProps(params, uri),
        ...getElementsFieldValue(values, uri, rootSchema),
        name: uri
      }
    }
  }
}

export function transformNumber (rootSchema, params, values) {
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
        ...getElementsFieldProps(params, uri),
        ...getElementsFieldValue(values, uri, rootSchema),
        name: uri
      }
    }
  }
}

export default function transform (rootSchema = {}, params = {}, values = {}) {
  const { type } = rootSchema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  switch (type) {
    case 'null':
      return transformNull(rootSchema, params, values)

    case 'boolean':
      return transformBoolean(rootSchema, params, values)

    case 'object':
      return transformObject(rootSchema, params, values)

    case 'array':
      return transformArray(rootSchema, params, values)

    case 'number':
      return transformNumber(rootSchema, params, values)

    case 'string':
      return transformString(rootSchema, params, values)

    default:
      throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
  }
}
