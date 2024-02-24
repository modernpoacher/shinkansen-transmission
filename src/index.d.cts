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

declare module 'shinkansen-transmission/transmission/common' {
  type ObjectLiteralType = Zashiki.ObjectLiteralType
  type ObjectType = Zashiki.ObjectType
  type ArrayLiteralType = Zashiki.ArrayLiteralType
  type ArrayType = Zashiki.ArrayType

  type SchemaType = Zashiki.SchemaType

  export function isObject (v: unknown): boolean
  export function isArray (v: unknown): boolean
  export function isPrimitive (v: unknown): boolean
  export function isSchema (v: SchemaType | undefined): boolean
  export function isStringSchema (schema: SchemaType | undefined): boolean
  export function isNumberSchema (schema: SchemaType | undefined): boolean
  export function isArraySchema (schema: SchemaType | undefined): boolean
  export function isObjectSchema (schema: SchemaType | undefined): boolean
  export function isBooleanSchema (schema: SchemaType | undefined): boolean
  export function isNullSchema (schema: SchemaType | undefined): boolean

  export function getTitle (schema: SchemaType | undefined): { title: string } | ObjectLiteralType
  export function getDescription (schema: SchemaType | undefined): { description: string } | ObjectLiteralType
  export function getIsReadOnly (schema: SchemaType | undefined): { readOnly: boolean } | ObjectLiteralType
  export function getIsWriteOnly (schema: SchemaType | undefined): { writeOnly: boolean } | ObjectLiteralType

  export function getSelectedItems (values: ObjectType | ObjectLiteralType, uri: string | undefined): ArrayType

  export function isParentUri (parentUri: string | undefined, uri: string | undefined): boolean

  export function getMetaProps (params: ObjectType | ObjectLiteralType, uri: string | undefined): ObjectType
  export function getMetaDefaultValue (schema: SchemaType | undefined): { defaultValue: string } | ObjectLiteralType
  export function hasMetaValue (values: ObjectType | ObjectLiteralType, uri: string | undefined, schema: SchemaType | undefined): boolean
  export function getMetaValue (values: ObjectType | ObjectLiteralType, uri: string | undefined, schema: SchemaType | undefined): { value: string } | ObjectLiteralType

  export function transformValue (schema: SchemaType): SchemaType | unknown

  export function findByKey (parentUri: string | undefined, uri: string | undefined): (key: string) => boolean
  export function findByIndex (parentUri: string | undefined, uri: string | undefined): (schema: SchemaType, index: number) => boolean
  export function findByValue (value: unknown): (schema: SchemaType) => boolean
  export function findByEqual (value: unknown): (schema: SchemaType) => boolean

  export function toString (value: unknown): string

  export function getObject (value: { properties: ObjectType /* object */ }, parentUri: string | undefined, uri: string | undefined): ObjectType
  export function getArray (value: { items: ObjectType | ObjectLiteralType | ArrayType | ArrayLiteralType /* array or object */ }, parentUri: string | undefined, uri: string | undefined): ArrayType
  export function getSchema (schema: SchemaType | ObjectType, parentUri: string | undefined, uri: string | undefined): ObjectType | ObjectLiteralType | ArrayType | ArrayLiteralType | SchemaType

  export function transformValueIndexFor (array: ArrayType, value: unknown): string
  export function transformEqualIndexFor (array: ArrayType, value: unknown): string

  export function hasValue (values: ObjectType | ObjectLiteralType, uri: string | undefined, schema: SchemaType | undefined): boolean
  export function getValue (values: ObjectType | ObjectLiteralType, uri: string | undefined, schema: SchemaType | undefined): string

  export function getValueForEnum (v: string | number, schema: SchemaType): string
  export function getIndexForEnum (values: ObjectType | ObjectLiteralType, parentUri: string | undefined, uri: string | undefined, schema: SchemaType | undefined): number

  export function getValueForAnyOf (v: string | number, schema: SchemaType): string
  export function getIndexForAnyOf (values: ObjectType | ObjectLiteralType, parentUri: string | undefined, uri: string | undefined, schema: SchemaType | undefined): number

  export function getValueForOneOf (v: string | number, schema: SchemaType): string
  export function getIndexForOneOf (values: ObjectType | ObjectLiteralType, parentUri: string | undefined, uri: string | undefined, schema: SchemaType | undefined): number

  export function getElementsProps (params: ObjectType | ObjectLiteralType, uri: string | undefined): ObjectType | ObjectLiteralType
  export function getElementsTitleProps (params: ObjectType | ObjectLiteralType, uri: string | undefined): ObjectType | ObjectLiteralType
  export function getElementsDescriptionProps (params: ObjectType | ObjectLiteralType, uri: string | undefined): ObjectType | ObjectLiteralType

  export function getElementsFieldPropsForEnum (params: ObjectType | ObjectLiteralType, uri: string | undefined): ObjectType | ObjectLiteralType
  export function getElementsFieldPropsForOneOf (params: ObjectType | ObjectLiteralType, uri: string | undefined): ObjectType | ObjectLiteralType
  export function getElementsFieldPropsForAnyOf (params: ObjectType | ObjectLiteralType, uri: string | undefined): ObjectType | ObjectLiteralType
  export function getElementsFieldPropsForAllOf (params: ObjectType | ObjectLiteralType, uri: string | undefined): ObjectType | ObjectLiteralType

  export function getElementsFieldProps (params: ObjectType | ObjectLiteralType, uri: string | undefined): ObjectType | ObjectLiteralType
  export function getElementsFieldValue (values: ObjectType | ObjectLiteralType, uri: string | undefined, schema: SchemaType | undefined): { value: string } | ObjectLiteralType

  export function hasEnum (schema: SchemaType | undefined): boolean
  export function getEnum (schema: SchemaType | undefined): ObjectType | ObjectLiteralType | ArrayType | ArrayLiteralType

  export function hasConst (schema: SchemaType | undefined): boolean
  export function getConst (schema: SchemaType | undefined): unknown

  export function hasDefault (schema: SchemaType | undefined): boolean
  export function getDefault (schema: SchemaType | undefined): unknown

  export function hasAnyOf (schema: SchemaType | undefined): boolean
  export function getAnyOf (schema: SchemaType | undefined): ObjectType | ObjectLiteralType | ArrayType | ArrayLiteralType

  export function hasOneOf (schema: SchemaType | undefined): boolean
  export function getOneOf (schema: SchemaType | undefined): ObjectType | ObjectLiteralType | ArrayType | ArrayLiteralType

  export function hasAllOf (schema: SchemaType | undefined): boolean
  export function getAllOf (schema: SchemaType | undefined): ObjectType | ObjectLiteralType | ArrayType | ArrayLiteralType

  export function getUri (uri: string | undefined, resource: string | undefined): string

  export function normaliseUri (uri: string | undefined): string

  export function getMin (schema: SchemaType | undefined): { min: number } | ObjectLiteralType
  export function getMax (schema: SchemaType | undefined): { max: number } | ObjectLiteralType

  export function getMinLength (schema: SchemaType | undefined): { minLength: number } | ObjectLiteralType
  export function getMaxLength (schema: SchemaType | undefined): { maxLength: number } | ObjectLiteralType

  export function getMinItems (schema: SchemaType | undefined): { minItems: number } | ObjectLiteralType
  export function getMaxItems (schema: SchemaType | undefined): { maxItems: number } | ObjectLiteralType

  export function getHasUniqueItems (schema: SchemaType | undefined): { hasUniqueItems: boolean } | ObjectLiteralType

  export function getMinContains (schema: SchemaType | undefined): { minContains: number } | ObjectLiteralType
  export function getMaxContains (schema: SchemaType | undefined): { maxContains: number } | ObjectLiteralType

  export function getMinProperties (schema: SchemaType | undefined): { minProperties: number } | ObjectLiteralType
  export function getMaxProperties (schema: SchemaType | undefined): { maxProperties: number } | ObjectLiteralType

  export function getIsExclusiveMin (schema: SchemaType | undefined): { isExclusiveMin: boolean } | ObjectLiteralType
  export function getIsExclusiveMax (schema: SchemaType | undefined): { isExclusiveMax: boolean } | ObjectLiteralType

  export function getPattern (schema: SchemaType | undefined): { pattern: string } | ObjectLiteralType

  export function getStep (schema: SchemaType | undefined): { step: number } | ObjectLiteralType
}

declare module 'shinkansen-transmission/transmission/from-document-to-hash' {
  type ObjectLiteralType = Zashiki.ObjectLiteralType
  type ObjectType = Zashiki.ObjectType

  type SchemaType = Zashiki.SchemaType

  type DocumentType = Zashiki.DocumentType
  type HashType = Zashiki.HashType

  export function transformArrayFor (document: DocumentType | undefined, schema: SchemaType | undefined, values: ObjectType | ObjectLiteralType | undefined, parentUri: string | undefined, uri: string | undefined): HashType | undefined
  export function transformObjectFor (document: DocumentType | undefined, schema: SchemaType | undefined, values: ObjectType | ObjectLiteralType | undefined, parentUri: string | undefined, uri: string | undefined): HashType | undefined

  export function transformArray (document: DocumentType | undefined, schema: SchemaType | undefined, values: ObjectType | ObjectLiteralType | undefined, parentUri: string | undefined, uri: string | undefined): HashType | undefined
  export function transformObject (document: DocumentType | undefined, schema: SchemaType | undefined, values: ObjectType | ObjectLiteralType | undefined, parentUri: string | undefined, uri: string | undefined): HashType | undefined

  export default function transform (document: DocumentType | undefined, schema: SchemaType | undefined, values: ObjectType | ObjectLiteralType | undefined, parentUri: string | undefined, uri: string | undefined): HashType | undefined
}

declare module 'shinkansen-transmission/transmission/from-hash-to-document' {
  type ObjectLiteralType = Zashiki.ObjectLiteralType
  type ObjectType = Zashiki.ObjectType
  type ArrayLiteralType = Zashiki.ArrayLiteralType
  type ArrayType = Zashiki.ArrayType

  type SchemaType = Zashiki.SchemaType

  type DocumentType = Zashiki.DocumentType
  type HashType = Zashiki.HashType

  export function transformValueFor (document: DocumentType, array: ArrayType | ArrayLiteralType | undefined): DocumentType

  export function getArrayFor (hash: HashType, array: ArrayType | ArrayLiteralType | undefined, uri: string | undefined): ArrayType | ArrayLiteralType

  export function transformArrayFor (hash: HashType, schema: SchemaType, parentUri: string | undefined, uri: string | undefined): ArrayType | ArrayLiteralType
  export function transformObjectFor (hash: HashType, schema: SchemaType, parentUri: string | undefined, uri: string | undefined): ObjectType | ObjectLiteralType

  export function transformItemsArrayFor (hash: HashType, items: ArrayType | ArrayLiteralType | undefined, parentUri: string | undefined, uri: string | undefined): ArrayType | ArrayLiteralType | undefined
  export function transformItemsObjectFor (hash: HashType, items: ObjectType | ObjectLiteralType | undefined, parentUri: string | undefined, uri: string | undefined): ArrayType | ArrayLiteralType | undefined

  export function transformNull (hash: HashType, schema: SchemaType, parentUri: string, uri: string): null | undefined
  export function transformBoolean (hash: HashType, schema: SchemaType, parentUri: string, uri: string): boolean | undefined
  export function transformObject (hash: HashType, schema: SchemaType, parentUri: string, uri: string): ObjectType | ObjectLiteralType
  export function transformArray (hash: HashType, schema: SchemaType, parentUri: string, uri: string): ArrayType | ArrayLiteralType
  export function transformNumber (hash: HashType, schema: SchemaType, parentUri: string, uri: string): number | undefined
  export function transformString (hash: HashType, schema: SchemaType, parentUri: string, uri: string): string | undefined

  export default function transform (hash: HashType | undefined, rootSchema: SchemaType | undefined, parentUri: string | undefined, uri: string | undefined): DocumentType | undefined
}

declare module 'shinkansen-transmission/transmission/to-zashiki' {
  type SchemaType = Zashiki.SchemaType

  type ObjectLiteralType = Zashiki.ObjectLiteralType
  type ObjectType = Zashiki.ObjectType

  type ZashikiType = Zashiki.ZashikiType

  export default function toZashiki (rootSchema: SchemaType | undefined, values: ObjectType | ObjectLiteralType | undefined, params: ObjectType | ObjectLiteralType | undefined): ZashikiType | undefined
}

declare module 'shinkansen-transmission/transmission' {
  export * as common from 'shinkansen-transmission/transmission/common'
  export { default as fromDocumentToHash } from 'shinkansen-transmission/transmission/from-document-to-hash'
  export { default as fromHashToDocument } from 'shinkansen-transmission/transmission/from-hash-to-document'
  export { default as toZashiki } from 'shinkansen-transmission/transmission/to-zashiki'
}
