export const isObject = (v) => (v || false) instanceof Object && !isArray(v)

export const isArray = (v) => Array.isArray(v)

export const toConstValue = (schema = {}) => Reflect.get(schema, 'const')

export const isConstValue = (schema = {}) => Reflect.has(schema, 'const')

export const toDefaultValue = (schema = {}) => Reflect.get(schema, 'default')

export const isDefaultValue = (schema = {}) => Reflect.has(schema, 'default')

export const getTitle = ({ title } = {}) => (title ? { title } : {})

export const getDescription = ({ description } = {}) => (description ? { description } : {})

export const getIsReadOnly = ({ readOnly = false } = {}) => (readOnly ? { readOnly } : {})

export const getIsWriteOnly = ({ writeOnly = false } = {}) => (writeOnly ? { writeOnly } : {})

export function getDefaultValue (schema = {}) {
  if (Reflect.has(schema, 'default')) {
    const defaultValue = Reflect.get(schema, 'default')

    return { defaultValue: String(defaultValue) }
  }

  return {}
}

export function getValue (values = {}, uri = '#') {
  if (Reflect.has(values, uri)) {
    const value = Reflect.get(values, uri)

    return { value: String(value) }
  }

  return {}
}

export function getSelectedIndex (values = {}, uri = '#') {
  if (Reflect.has(values, uri)) {
    const index = Reflect.get(values, uri)
    const value = Number(index)

    return isNaN(value) ? {} : { selectedIndex: value }
  }

  return {}
}

export function getMetaProps (params = {}, uri = '#') {
  let meta
  if (Reflect.has(params, uri)) {
    ({
      meta
    } = Reflect.get(params, uri))
  }

  return meta || {}
}

export function getElementsTitleProps (params = {}, uri = '#') {
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

export function getElementsDescriptionProps (params = {}, uri = '#') {
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

export function getElementsFieldProps (params = {}, uri = '#') {
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

export function getElementsFieldValue (values = {}, uri = '#', schema) {
  if (Reflect.has(values, uri)) {
    const value = Reflect.get(values, uri)

    return { value: String(value) }
  } else {
    if (Reflect.has(schema, 'default')) {
      const defaultValue = Reflect.get(schema, 'default')

      return { value: String(defaultValue) }
    }
  }

  return {}
}

export const hasEnum = (schema = {}) => Reflect.has(schema, 'enum')
export const getEnum = (schema = {}) => Reflect.get(schema, 'enum')

export const hasConst = (schema = {}) => Reflect.has(schema, 'const')
export const getConst = (schema = {}) => Reflect.get(schema, 'const')

export const hasAnyOf = (schema = {}) => Reflect.has(schema, 'anyOf')
export const getAnyOf = (schema = {}) => Reflect.get(schema, 'anyOf')

export const hasOneOf = (schema = {}) => Reflect.has(schema, 'oneOf')
export const getOneOf = (schema = {}) => Reflect.get(schema, 'oneOf')

export const hasAllOf = (schema = {}) => Reflect.has(schema, 'allOf')
export const getAllOf = (schema = {}) => Reflect.get(schema, 'allOf')

export const getUri = (uri = '', resource = '') => uri.concat('/').concat(resource)

export function getMin ({ minimum } = {}) {
  const value = Number(minimum)

  return isNaN(value) ? {} : { min: value }
}

export function getMax ({ maximum } = {}) {
  const value = Number(maximum)

  return isNaN(value) ? {} : { max: value }
}

export function getMinLength ({ minLength } = {}) {
  const value = Number(minLength)

  return isNaN(value) ? {} : { minLength: value }
}

export function getMaxLength ({ maxLength } = {}) {
  const value = Number(maxLength)

  return isNaN(value) ? {} : { maxLength: value }
}

export function getMinItems ({ minItems } = {}) {
  const value = Number(minItems)

  return isNaN(value) ? {} : { minItems: value }
}

export function getMaxItems ({ maxItems } = {}) {
  const value = Number(maxItems)

  return isNaN(value) ? {} : { maxItems: value }
}

export function getHasUniqueItems (schema = {}) {
  if (Reflect.has(schema, 'uniqueItems')) {
    const value = Reflect.get(schema, 'uniqueItems')

    return (typeof value === 'boolean') ? { hasUniqueItems: value } : {}
  }

  return {}
}

export function getMinContains ({ minContains } = {}) {
  const value = Number(minContains)

  return isNaN(value) ? {} : { minContains: value }
}

export function getMaxContains ({ maxContains } = {}) {
  const value = Number(maxContains)

  return isNaN(value) ? {} : { maxContains: value }
}

export function getMinProperties ({ minProperties } = {}) {
  const value = Number(minProperties)

  return isNaN(value) ? {} : { minProperties: value }
}

export function getMaxProperties ({ maxProperties } = {}) {
  const value = Number(maxProperties)

  return isNaN(value) ? {} : { maxProperties: value }
}

export function getIsExclusiveMin (schema = {}) {
  if (Reflect.has(schema, 'exclusiveMinimum')) {
    const value = Reflect.get(schema, 'exclusiveMinimum')

    return (typeof value === 'boolean') ? { isExclusiveMin: value } : {}
  }

  return {}
}

export function getIsExclusiveMax (schema = {}) {
  if (Reflect.has(schema, 'exclusiveMaximum')) {
    const value = Reflect.get(schema, 'exclusiveMaximum')

    return (typeof value === 'boolean') ? { isExclusiveMax: value } : {}
  }

  return {}
}

export const getPattern = ({ pattern } = {}) => (pattern ? { pattern } : {})

export function getStep ({ multipleOf } = {}) {
  const value = Number(multipleOf)

  return isNaN(value) ? {} : { step: value }
}
