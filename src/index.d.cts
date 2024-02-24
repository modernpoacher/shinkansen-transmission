declare namespace Zashiki {
  export type ObjectLiteralType = Record<PropertyKey, never>
  export type ObjectType = Record<PropertyKey, unknown>
  export type ArrayLiteralType = never[]
  export type ArrayType = unknown[]

  export interface SchemaType {
    type: string
    title?: string
    description?: string
    readOnly?: boolean
    writeOnly?: boolean
    const?: unknown
    default?: unknown
    enum?: ObjectType | ObjectLiteralType | ArrayType | ArrayLiteralType
    anyOf?: ObjectType | ObjectLiteralType | ArrayType | ArrayLiteralType
    oneOf?: ObjectType | ObjectLiteralType | ArrayType | ArrayLiteralType
    allOf: ObjectType | ObjectLiteralType | ArrayType | ArrayLiteralType
    minimum?: number
    maximum?: number
    minLength?: number
    maxLength?: number
    minItems?: number
    maxItems?: number
    hasUniqueItems?: boolean
    minContains?: number
    maxContains?: number
    minProperties?: number
    maxProperties?: number
    isExclusiveMin?: boolean
    isExclusiveMax?: boolean
    multipleOf?: number
  }

  export type DocumentType = string | number | boolean | null | ObjectType | ObjectLiteralType | ArrayType | ArrayLiteralType | ObjectLiteralType | undefined
  export type HashType = Record<PropertyKey, string> | Record<PropertyKey, never>

  export interface ZashikiType {
    meta: ObjectType | ObjectLiteralType
    elements: ObjectType | ObjectLiteralType
  }
}

declare module 'shinkansen-transmission/transmission' {
  export * as common from 'shinkansen-transmission/transmission/common'
  export { default as fromDocumentToHash } from 'shinkansen-transmission/transmission/from-document-to-hash'
  export { default as fromHashToDocument } from 'shinkansen-transmission/transmission/from-hash-to-document'
  export { default as toZashiki } from 'shinkansen-transmission/transmission/to-zashiki'
}
