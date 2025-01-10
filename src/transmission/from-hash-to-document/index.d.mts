declare module '#transmission/transmission/from-hash-to-document' {
  type ObjectLiteralType = ZashikiTypes.ObjectLiteralType
  type ObjectType = ZashikiTypes.ObjectType
  type ArrayLiteralType = ZashikiTypes.ArrayLiteralType
  type ArrayType = ZashikiTypes.ArrayType

  type SchemaType = ZashikiTypes.SchemaType

  type DocumentType = ZashikiTypes.DocumentType
  type HashType = ZashikiTypes.HashType

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

declare module 'shinkansen-transmission/transmission/from-hash-to-document' {
  export { default } from '#transmission/transmission/from-hash-to-document'
  export * from '#transmission/transmission/from-hash-to-document'
}
