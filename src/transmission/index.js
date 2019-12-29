export const getTitle = ({ title }) => (title ? { title } : {})

export const getDescription = ({ description }) => (description ? { description } : {})

export const getIsReadOnly = ({ readOnly = false }) => (readOnly ? { readOnly } : {})

export const getIsWriteOnly = ({ writeOnly = false }) => (writeOnly ? { writeOnly } : {})

export const getDefaultValue = (schema) => (Reflect.has(schema, 'default') ? { defaultValue: Reflect.get(schema, 'default') } : {})

export const toNumber = (v) => {
  if (typeof v === 'number') return v
  if (typeof v === 'string') return Number(v)
  return NaN
}

export const hasEnum = (schema = {}) => Reflect.has(schema, 'enum')
export const getEnum = (schema = {}) => Reflect.get(schema, 'enum')

export const hasOneOf = (schema = {}) => Reflect.has(schema, 'oneOf')
export const getOneOf = (schema = {}) => Reflect.get(schema, 'oneOf')

export const hasAnyOf = (schema = {}) => Reflect.has(schema, 'anyOf')
export const getAnyOf = (schema = {}) => Reflect.get(schema, 'anyOf')

export const hasAllOf = (schema = {}) => Reflect.has(schema, 'allOf')
export const getAllOf = (schema = {}) => Reflect.get(schema, 'allOf')

export const getUri = (uri = '#', resource = '') => uri.concat('/').concat(resource)

/*
let elements
if (hasEnum(schema)) {

} else {
  if (hasAnyOf(schema)) {

  } else {
    if (hasOneOf(schema)) {

    } else {
      if (hasAllOf(schema)) {

      } else {

      }
    }
  }
}
*/

export const getMin = ({ minimum }) => {
  const value = toNumber(minimum)

  return isNaN(value) ? {} : { min: value }
}

export const getMax = ({ maximum }) => {
  const value = toNumber(maximum)

  return isNaN(value) ? {} : { max: value }
}

export const getMinLength = ({ minLength }) => {
  const value = toNumber(minLength)

  return isNaN(value) ? {} : { minLength: value }
}

export const getMaxLength = ({ maxLength }) => {
  const value = toNumber(maxLength)

  return isNaN(value) ? {} : { maxLength: value }
}

export const getMinItems = ({ minItems }) => {
  const value = toNumber(minItems)

  return isNaN(value) ? {} : { minItems: value }
}

export const getMaxItems = ({ maxItems }) => {
  const value = toNumber(maxItems)

  return isNaN(value) ? {} : { maxItems: value }
}

export const getHasUniqueItems = (schema) => {
  if (Reflect.has(schema, 'uniqueItems')) {
    const value = Reflect.get(schema, 'uniqueItems')

    return (typeof value === 'boolean') ? { hasUniqueItems: value } : {}
  }

  return {}
}

export const getMinContains = ({ minContains }) => {
  const value = toNumber(minContains)

  return isNaN(value) ? {} : { minContains: value }
}

export const getMaxContains = ({ maxContains }) => {
  const value = toNumber(maxContains)

  return isNaN(value) ? {} : { maxContains: value }
}

export const getMinProperties = ({ minProperties }) => {
  const value = toNumber(minProperties)

  return isNaN(value) ? {} : { minProperties: value }
}

export const getMaxProperties = ({ maxProperties }) => {
  const value = toNumber(maxProperties)

  return isNaN(value) ? {} : { maxProperties: value }
}

export const getIsExclusiveMin = (schema) => {
  if (Reflect.has(schema, 'exclusiveMinimum')) {
    const value = Reflect.get(schema, 'exclusiveMinimum')

    return (typeof value === 'boolean') ? { isExclusiveMin: value } : {}
  }

  return {}
}

export const getIsExclusiveMax = (schema) => {
  if (Reflect.has(schema, 'exclusiveMaximum')) {
    const value = Reflect.get(schema, 'exclusiveMaximum')

    return (typeof value === 'boolean') ? { isExclusiveMax: value } : {}
  }

  return {}
}

export const getPattern = ({ pattern }) => (pattern ? { pattern } : {})

export const getStep = ({ multipleOf }) => {
  const value = toNumber(multipleOf)

  return isNaN(value) ? {} : { step: value }
}

export function transformObjectSchemaNull (schema, rootSchema, isRequired, parentUri, fieldKey) {
  return {
    meta: {
      uri: getUri(parentUri, fieldKey),
      name: fieldKey,
      type: 'null',
      schema,
      rootSchema,
      required: isRequired
    },
    elements: {
      ...getTitle(schema),
      ...getDescription(schema),
      field: {
        name: fieldKey,
        type: 'null',
        required: isRequired
      }
    }
  }
}

export function transformObjectSchemaBoolean (schema, rootSchema, isRequired, parentUri, fieldKey) {
  return {
    meta: {
      uri: getUri(parentUri, fieldKey),
      name: fieldKey,
      type: 'boolean',
      schema,
      rootSchema,
      required: isRequired
    },
    elements: {
      ...getTitle(schema),
      ...getDescription(schema),
      field: {
        name: fieldKey,
        type: 'boolean',
        required: isRequired
      }
    }
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.5
export function transformObjectSchemaObject (schema, rootSchema, isRequired, parentUri, fieldKey) {
  const uri = getUri(parentUri, fieldKey)

  const meta = {
    uri,
    name: fieldKey,
    type: 'object',
    schema,
    rootSchema,
    ...getMaxProperties(schema),
    ...getMinProperties(schema),
    required: isRequired
  }

  let elements
  if (hasEnum(schema)) {
    const items = getEnum(schema) // `enum` is a reserved word

    elements = {
      ...getTitle(schema),
      ...getDescription(schema),
      enum: {
        items,
        type: 'object',
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
          items: items.reduce((accumulator, schema, index) => accumulator.concat(transformArraySchema(schema, rootSchema, isRequired, uri, index)), []),
          name: fieldKey,
          type: 'object',
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
            items: items.reduce((accumulator, schema, index) => accumulator.concat(transformArraySchema(schema, rootSchema, isRequired, uri, index)), []),
            name: fieldKey,
            type: 'object',
            required: isRequired
          }
        }
      } else {
        if (hasAllOf(schema)) {
          // getAllOf(schema)
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
                .reduce((accumulator, [fieldKey, schema]) => accumulator.concat(transformObjectSchema(schema, rootSchema, required.includes(fieldKey), uri, fieldKey)), [])
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
export function transformObjectSchemaArray (schema, rootSchema, isRequired, parentUri, fieldKey) {
  const uri = getUri(parentUri, fieldKey)

  const {
    items = [] // array or object
  } = schema

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
      required: isRequired
    },
    elements: {
      ...getTitle(schema),
      ...getDescription(schema),
      fields: [].concat(items).reduce((accumulator, schema, index) => accumulator.concat(transformArraySchema(schema, rootSchema, isRequired, uri, index)), [])
    }
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.3
export function transformObjectSchemaString (schema, rootSchema, isRequired, parentUri, fieldKey) {
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
    required: isRequired
  }
  let elements
  if (hasEnum(schema)) {
    const items = getEnum(schema) // `enum` is a reserved word

    elements = {
      ...getTitle(schema),
      ...getDescription(schema),
      enum: {
        items,
        name: fieldKey,
        type: 'string',
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
          items: items.reduce((accumulator, schema, index) => accumulator.concat(transformArraySchema(schema, rootSchema, isRequired, uri, index)), []),
          name: fieldKey,
          type: 'string',
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
            items: items.reduce((accumulator, schema, index) => accumulator.concat(transformArraySchema(schema, rootSchema, isRequired, uri, index)), []),
            name: fieldKey,
            type: 'string',
            ...minLength,
            ...maxLength,
            ...pattern,
            required: isRequired
          }
        }
      } else {
        if (hasAllOf(schema)) {
          // getAllOf(schema)
        } else {
          elements = {
            ...getTitle(schema),
            ...getDescription(schema),
            field: {
              name: fieldKey,
              type: 'string',
              ...minLength,
              ...maxLength,
              ...pattern,
              required: isRequired
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

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.2
export function transformObjectSchemaNumber (schema, rootSchema, isRequired, parentUri, fieldKey) {
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
    required: isRequired
  }

  let elements
  if (hasEnum(schema)) {
    const items = getEnum(schema) // `enum` is a reserved word

    elements = {
      ...getTitle(schema),
      ...getDescription(schema),
      enum: {
        items,
        name: fieldKey,
        type: 'number',
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
          items: items.reduce((accumulator, schema, index) => accumulator.concat(transformArraySchema(schema, rootSchema, isRequired, uri, index)), []),
          name: fieldKey,
          type: 'number',
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
            items: items.reduce((accumulator, schema, index) => accumulator.concat(transformArraySchema(schema, rootSchema, isRequired, uri, index)), []),
            name: fieldKey,
            type: 'number',
            ...min,
            ...max,
            ...step,
            required: isRequired
          }
        }
      } else {
        if (hasAllOf(schema)) {
          // getAllOf(schema)
        } else {
          elements = {
            ...getTitle(schema),
            ...getDescription(schema),
            field: {
              name: fieldKey,
              type: 'number',
              ...min,
              ...max,
              ...step,
              required: isRequired
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

export function transformObjectSchema (schema = {}, rootSchema = schema, isRequired = false, parentUri = '#', fieldKey = '') {
  const { type } = schema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  switch (type) {
    case 'null':
      return transformObjectSchemaNull(schema, rootSchema, isRequired, parentUri, fieldKey)

    case 'boolean':
      return transformObjectSchemaBoolean(schema, rootSchema, isRequired, parentUri, fieldKey)

    case 'object':
      return transformObjectSchemaObject(schema, rootSchema, isRequired, parentUri, fieldKey)

    case 'array':
      return transformObjectSchemaArray(schema, rootSchema, isRequired, parentUri, fieldKey)

    case 'string':
      return transformObjectSchemaString(schema, rootSchema, isRequired, parentUri, fieldKey)

    case 'number':
      return transformObjectSchemaNumber(schema, rootSchema, isRequired, parentUri, fieldKey)

    default:
      throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
  }
}

export function transformArraySchemaNull (schema, rootSchema, isRequired, parentUri, arrayIndex) {
  return {
    meta: {
      uri: getUri(parentUri, arrayIndex),
      item: arrayIndex,
      type: 'null',
      schema,
      rootSchema,
      required: isRequired
    },
    elements: {
      ...getTitle(schema),
      ...getDescription(schema),
      field: {
        type: 'null',
        required: isRequired
      }
    }
  }
}

export function transformArraySchemaBoolean (schema, rootSchema, isRequired, parentUri, arrayIndex) {
  return {
    meta: {
      uri: getUri(parentUri, arrayIndex),
      item: arrayIndex,
      type: 'boolean',
      schema,
      rootSchema,
      required: isRequired
    },
    elements: {
      ...getTitle(schema),
      ...getDescription(schema),
      field: {
        type: 'boolean',
        required: isRequired
      }
    }
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.5
export function transformArraySchemaObject (schema, rootSchema, isRequired, parentUri, arrayIndex) {
  const uri = getUri(parentUri, arrayIndex)

  const meta = {
    uri,
    item: arrayIndex,
    type: 'object',
    schema,
    rootSchema,
    ...getMaxProperties(schema),
    ...getMinProperties(schema),
    required: isRequired
  }

  let elements
  if (hasEnum(schema)) {
    const items = getEnum(schema) // `enum` is a reserved word

    elements = {
      ...getTitle(schema),
      ...getDescription(schema),
      enum: {
        items,
        type: 'object',
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
          items: items.reduce((accumulator, schema, index) => accumulator.concat(transformArraySchema(schema, rootSchema, isRequired, uri, index)), []),
          type: 'object',
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
            items: items.reduce((accumulator, schema, index) => accumulator.concat(transformArraySchema(schema, rootSchema, isRequired, uri, index)), []),
            type: 'object',
            required: isRequired
          }
        }
      } else {
        if (hasAllOf(schema)) {
          // getAllOf(schema)
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
                .reduce((accumulator, [fieldKey, schema]) => accumulator.concat(transformObjectSchema(schema, rootSchema, required.includes(fieldKey), uri, fieldKey)), [])
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
export function transformArraySchemaArray (schema, rootSchema, isRequired, parentUri, arrayIndex) {
  const uri = getUri(parentUri, arrayIndex)

  const {
    items = [] // array or object
  } = schema

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
      required: isRequired
    },
    elements: {
      ...getTitle(schema),
      ...getDescription(schema),
      fields: [].concat(items).reduce((accumulator, schema, index) => accumulator.concat(transformArraySchema(schema, rootSchema, isRequired, uri, index)), [])
    }
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.3
export function transformArraySchemaString (schema, rootSchema, isRequired, parentUri, arrayIndex) {
  const minLength = getMinLength(schema)
  const maxLength = getMaxLength(schema)
  const pattern = getPattern(schema)

  return {
    meta: {
      uri: getUri(parentUri, arrayIndex),
      item: arrayIndex,
      type: 'string',
      schema,
      rootSchema,
      ...minLength,
      ...maxLength,
      ...pattern,
      required: isRequired
    },
    elements: {
      ...getTitle(schema),
      ...getDescription(schema),
      field: {
        type: 'string',
        ...minLength,
        ...maxLength,
        ...pattern,
        required: isRequired
      }
    }
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.2
export function transformArraySchemaNumber (schema, rootSchema, isRequired, parentUri, arrayIndex) {
  const min = getMin(schema)
  const max = getMax(schema)
  const step = getStep(schema)

  return {
    meta: {
      uri: getUri(parentUri, arrayIndex),
      item: arrayIndex,
      type: 'number',
      schema,
      rootSchema,
      ...getIsExclusiveMin(schema),
      ...getIsExclusiveMax(schema),
      ...min,
      ...max,
      ...step,
      required: isRequired
    },
    elements: {
      ...getTitle(schema),
      ...getDescription(schema),
      field: {
        type: 'number',
        ...min,
        ...max,
        ...step,
        required: isRequired
      }
    }
  }
}

export function transformArraySchema (schema = {}, rootSchema = schema, isRequired = false, parentUri = '#', arrayIndex = 0) {
  const { type } = schema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  switch (type) {
    case 'null':
      return transformArraySchemaNull(schema, rootSchema, isRequired, parentUri, arrayIndex)

    case 'boolean':
      return transformArraySchemaBoolean(schema, rootSchema, isRequired, parentUri, arrayIndex)

    case 'object':
      return transformArraySchemaObject(schema, rootSchema, isRequired, parentUri, arrayIndex)

    case 'array':
      return transformArraySchemaArray(schema, rootSchema, isRequired, parentUri, arrayIndex)

    case 'string':
      return transformArraySchemaString(schema, rootSchema, isRequired, parentUri, arrayIndex)

    case 'number':
      return transformArraySchemaNumber(schema, rootSchema, isRequired, parentUri, arrayIndex)

    default:
      throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
  }
}

export function transformNull (rootSchema) {
  return {
    meta: {
      uri: getUri(),
      type: 'null',
      schema: rootSchema
    },
    elements: {
      ...getTitle(rootSchema),
      ...getDescription(rootSchema),
      field: {
        type: 'null'
      }
    }
  }
}

export function transformBoolean (rootSchema) {
  return {
    meta: {
      uri: getUri(),
      type: 'boolean',
      schema: rootSchema
    },
    elements: {
      ...getTitle(rootSchema),
      ...getDescription(rootSchema),
      field: {
        type: 'boolean'
      }
    }
  }
}

export function transformObject (rootSchema) {
  const {
    properties = {},
    required = []
  } = rootSchema

  const meta = {
    uri: getUri(),
    type: 'object',
    schema: rootSchema
  }

  let elements
  if (hasEnum(rootSchema)) {
    const items = getEnum(rootSchema) // `enum` is a reserved word

    elements = {
      ...getTitle(rootSchema),
      ...getDescription(rootSchema),
      enum: {
        items,
        type: 'object'
      }
    }
  } else {
    if (hasAnyOf(rootSchema)) {
      const items = getAnyOf(rootSchema)

      elements = {
        ...getTitle(rootSchema),
        ...getDescription(rootSchema),
        anyOf: {
          items: items.reduce((accumulator, schema, index) => accumulator.concat(transformArraySchema(schema, rootSchema, undefined, undefined, index)), []),
          type: 'object'
        }
      }
    } else {
      if (hasOneOf(rootSchema)) {
        const items = getOneOf(rootSchema)

        elements = {
          ...getTitle(rootSchema),
          ...getDescription(rootSchema),
          oneOf: {
            items: items.reduce((accumulator, schema, index) => accumulator.concat(transformArraySchema(schema, rootSchema, undefined, undefined, index)), []),
            type: 'object'
          }
        }
      } else {
        if (hasAllOf(rootSchema)) {

        } else {
          elements = {
            ...getTitle(rootSchema),
            ...getDescription(rootSchema),
            fields: (
              Object
                .entries(properties)
                .reduce((accumulator, [fieldKey, schema]) => accumulator.concat(transformObjectSchema(schema, rootSchema, required.includes(fieldKey), undefined, fieldKey)), [])
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

export function transformArray (rootSchema) {
  const {
    items = [] // array or object
  } = rootSchema

  return {
    meta: {
      uri: getUri(),
      type: 'array',
      schema: rootSchema,
      ...getMinItems(rootSchema),
      ...getMaxItems(rootSchema),
      ...getHasUniqueItems(rootSchema),
      ...getMaxContains(rootSchema),
      ...getMinContains(rootSchema)
    },
    elements: {
      ...getTitle(rootSchema),
      ...getDescription(rootSchema),
      fields: [].concat(items).reduce((accumulator, schema, index) => accumulator.concat(transformArraySchema(schema, rootSchema, undefined, undefined, index)), [])
    }
  }
}

export function transformString (rootSchema) {
  const minLength = getMinLength(rootSchema)
  const maxLength = getMaxLength(rootSchema)
  const pattern = getPattern(rootSchema)

  return {
    meta: {
      uri: getUri(),
      type: 'string',
      schema: rootSchema,
      ...minLength,
      ...maxLength,
      ...pattern
    },
    elements: {
      ...getTitle(rootSchema),
      ...getDescription(rootSchema),
      field: {
        type: 'string',
        ...minLength,
        ...maxLength,
        ...pattern
      }
    }
  }
}

export function transformNumber (rootSchema) {
  const min = getMin(rootSchema)
  const max = getMax(rootSchema)
  const step = getStep(rootSchema)

  return {
    meta: {
      uri: getUri(),
      type: 'number',
      schema: rootSchema,
      ...getIsExclusiveMin(rootSchema),
      ...getIsExclusiveMax(rootSchema),
      ...min,
      ...max,
      ...step
    },
    elements: {
      ...getTitle(rootSchema),
      ...getDescription(rootSchema),
      field: {
        type: 'number',
        ...min,
        ...max,
        ...step
      }
    }
  }
}

export default function transform (rootSchema = {}) {
  const { type } = rootSchema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  switch (type) {
    case 'null':
      return transformNull(rootSchema)

    case 'boolean':
      return transformBoolean(rootSchema)

    case 'object':
      return transformObject(rootSchema)

    case 'array':
      return transformArray(rootSchema)

    case 'number':
      return transformNumber(rootSchema)

    case 'string':
      return transformString(rootSchema)

    default:
      throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
  }
}
