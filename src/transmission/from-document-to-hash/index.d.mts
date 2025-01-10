declare module '#transmission/transmission/from-document-to-hash' {
  type ObjectLiteralType = ZashikiTypes.ObjectLiteralType
  type ObjectType = ZashikiTypes.ObjectType

  type SchemaType = ZashikiTypes.SchemaType

  type DocumentType = ZashikiTypes.DocumentType
  type HashType = ZashikiTypes.HashType

  export function transformArrayFor (document: DocumentType | undefined, schema: SchemaType | undefined, values: ObjectType | ObjectLiteralType | undefined, parentUri: string | undefined, uri: string | undefined): HashType | undefined
  export function transformObjectFor (document: DocumentType | undefined, schema: SchemaType | undefined, values: ObjectType | ObjectLiteralType | undefined, parentUri: string | undefined, uri: string | undefined): HashType | undefined

  export function transformArray (document: DocumentType | undefined, schema: SchemaType | undefined, values: ObjectType | ObjectLiteralType | undefined, parentUri: string | undefined, uri: string | undefined): HashType | undefined
  export function transformObject (document: DocumentType | undefined, schema: SchemaType | undefined, values: ObjectType | ObjectLiteralType | undefined, parentUri: string | undefined, uri: string | undefined): HashType | undefined

  export default function transform (document: DocumentType | undefined, schema: SchemaType | undefined, values: ObjectType | ObjectLiteralType | undefined, parentUri: string | undefined, uri: string | undefined): HashType | undefined
}

declare module 'shinkansen-transmission/transmission/from-document-to-hash' {
  export { default } from '#transmission/transmission/from-document-to-hash'
  export * from '#transmission/transmission/from-document-to-hash'
}
