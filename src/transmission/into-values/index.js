import {
  getUri
} from 'shinkansen-transmission/transmission/common'

export const isArray = (v) => Array.isArray(v)

export const isObject = (v) => (v || false) instanceof Object

export default function transform (response, params = {}, values = {}, uri = '#/') {
  if (isArray(response)) {
    return response.reduce((accumulator, v, i) => ({ ...accumulator, ...transform(v, params, values, getUri(uri, i)) }), values)
  } else {
    if (isObject(response)) {
      return Object.entries(response).reduce((accumulator, [k, v]) => ({ ...accumulator, ...transform(v, params, values, getUri(uri, k)) }), values)
    } else {
      return { ...values, [uri]: String(response) }
    }
  }
}
