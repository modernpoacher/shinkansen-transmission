export const getTitle = ({ title } = {}) => (title ? { title } : {})

export const getDescription = ({ description } = {}) => (description ? { description } : {})

export const getIsReadOnly = ({ readOnly = false } = {}) => (readOnly ? { readOnly } : {})

export const getIsWriteOnly = ({ writeOnly = false } = {}) => (writeOnly ? { writeOnly } : {})

export const getDefaultValue = (schema = {}) => (Reflect.has(schema, 'default') ? { defaultValue: Reflect.get(schema, 'default') } : {})

export const getValue = (values = {}, uri = '#') => (Reflect.has(values, uri) ? { value: Reflect.get(values, uri) } : {})

export const getMetaProps = (params = {}, uri = '#') => {
  let meta
  if (Reflect.has(params, uri)) {
    ({
      meta
    } = Reflect.get(params, uri))
  }

  return meta || {}
}

export const getElementsTitleProps = (params = {}, uri = '#') => {
  let title
  if (Reflect.has(params, uri)) {
    ({
      elements: {
        title
      } = {}
    } = Reflect.get(params, uri))
  }

  return title || {}
}

export const getElementsDescriptionProps = (params = {}, uri = '#') => {
  let description
  if (Reflect.has(params, uri)) {
    ({
      elements: {
        description
      } = {}
    } = Reflect.get(params, uri))
  }

  return description || {}
}

export const getElementsFieldProps = (params = {}, uri = '#') => {
  let field
  if (Reflect.has(params, uri)) {
    ({
      elements: {
        field
      } = {}
    } = Reflect.get(params, uri))
  }

  return field || {}
}

export const getElementsFieldValue = (values = {}, uri = '#', schema) => (Reflect.has(values, uri) ? { value: Reflect.get(values, uri) } : Reflect.has(schema, 'default') ? { value: Reflect.get(schema, 'default') } : {})

export const toNull = (v) => {
  if (v === null || v === 'null') return null

  throw new Error('Invalid `null`')
}

export const toBoolean = (v) => {
  if (typeof v === 'boolean') return v
  if (v === 'true') return true
  if (v === 'false') return false

  throw new Error('Invalid `boolean`')
}

export const toString = (v) => {
  if (typeof v === 'string') return v
  if (typeof v === 'number') return String(v)

  return JSON.stringify(v)
}

export const toNumber = (v) => {
  if (typeof v === 'number') return v

  const n = Number(v) // +v // unary operator
  if (!isNaN(n)) return n

  throw new Error('Invalid `number`')
}

export const hasEnum = (schema = {}) => Reflect.has(schema, 'enum')
export const getEnum = (schema = {}) => Reflect.get(schema, 'enum')

export const hasOneOf = (schema = {}) => Reflect.has(schema, 'oneOf')
export const getOneOf = (schema = {}) => Reflect.get(schema, 'oneOf')

export const hasAnyOf = (schema = {}) => Reflect.has(schema, 'anyOf')
export const getAnyOf = (schema = {}) => Reflect.get(schema, 'anyOf')

export const getUri = (uri = '#/', resource = '') => (uri === '#/' ? uri : uri.concat('/')).concat(resource)

export const getMin = ({ minimum } = {}) => {
  const value = toNumber(minimum)

  return isNaN(value) ? {} : { min: value }
}

export const getMax = ({ maximum } = {}) => {
  const value = toNumber(maximum)

  return isNaN(value) ? {} : { max: value }
}

export const getMinLength = ({ minLength } = {}) => {
  const value = toNumber(minLength)

  return isNaN(value) ? {} : { minLength: value }
}

export const getMaxLength = ({ maxLength } = {}) => {
  const value = toNumber(maxLength)

  return isNaN(value) ? {} : { maxLength: value }
}

export const getMinItems = ({ minItems } = {}) => {
  const value = toNumber(minItems)

  return isNaN(value) ? {} : { minItems: value }
}

export const getMaxItems = ({ maxItems } = {}) => {
  const value = toNumber(maxItems)

  return isNaN(value) ? {} : { maxItems: value }
}

export const getHasUniqueItems = (schema = {}) => {
  if (Reflect.has(schema, 'uniqueItems')) {
    const value = Reflect.get(schema, 'uniqueItems')

    return (typeof value === 'boolean') ? { hasUniqueItems: value } : {}
  }

  return {}
}

export const getMinContains = ({ minContains } = {}) => {
  const value = toNumber(minContains)

  return isNaN(value) ? {} : { minContains: value }
}

export const getMaxContains = ({ maxContains } = {}) => {
  const value = toNumber(maxContains)

  return isNaN(value) ? {} : { maxContains: value }
}

export const getMinProperties = ({ minProperties } = {}) => {
  const value = toNumber(minProperties)

  return isNaN(value) ? {} : { minProperties: value }
}

export const getMaxProperties = ({ maxProperties } = {}) => {
  const value = toNumber(maxProperties)

  return isNaN(value) ? {} : { maxProperties: value }
}

export const getIsExclusiveMin = (schema = {}) => {
  if (Reflect.has(schema, 'exclusiveMinimum')) {
    const value = Reflect.get(schema, 'exclusiveMinimum')

    return (typeof value === 'boolean') ? { isExclusiveMin: value } : {}
  }

  return {}
}

export const getIsExclusiveMax = (schema = {}) => {
  if (Reflect.has(schema, 'exclusiveMaximum')) {
    const value = Reflect.get(schema, 'exclusiveMaximum')

    return (typeof value === 'boolean') ? { isExclusiveMax: value } : {}
  }

  return {}
}

export const getPattern = ({ pattern } = {}) => (pattern ? { pattern } : {})

export const getStep = ({ multipleOf } = {}) => {
  const value = toNumber(multipleOf)

  return isNaN(value) ? {} : { step: value }
}
