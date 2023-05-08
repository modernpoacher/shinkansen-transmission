import debug from 'debug'

import {
  toString,
  hasEnum,
  getEnum,
  hasAnyOf,
  getAnyOf,
  hasOneOf,
  getOneOf,
  getUri,
  transformValueIndexFor
} from 'shinkansen-transmission/transmission/common'

const log = debug('shinkansen-transmission/from-document-to-hash/string')

log('`shinkansen` is awake')

export default function transformStringSchema (document, schema = {}, values = {}, parentUri = '#', uri = getUri(parentUri)) {
  log('transformStringSchema')

  if (hasEnum(schema)) {
    const items = getEnum(schema)

    values[uri] = transformValueIndexFor(items, document)

    return values
  } else {
    if (hasAnyOf(schema)) {
      const items = getAnyOf(schema)

      values[uri] = transformValueIndexFor(items, document)

      return values
    } else {
      if (hasOneOf(schema)) {
        const items = getOneOf(schema)

        values[uri] = transformValueIndexFor(items, document)

        return values
      }
    }
  }

  /*
   *  The hash should contain only strings
   */
  values[uri] = toString(document)

  return values
}
