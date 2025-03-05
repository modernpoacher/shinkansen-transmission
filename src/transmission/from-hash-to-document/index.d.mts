export type ObjectLiteralType = TransmissionTypes.ObjectLiteralType
export type ObjectType = TransmissionTypes.ObjectType
export type ArrayLiteralType = TransmissionTypes.ArrayLiteralType
export type ArrayType = TransmissionTypes.ArrayType

export type SchemaType = TransmissionTypes.SchemaType
export type ParamsType = TransmissionTypes.ParamsType
export type DocumentType = TransmissionTypes.DocumentType
export type HashType = TransmissionTypes.HashType

export function transformArrayFor (hash: HashType, schema: SchemaType, parentUri?: string, uri?: string): ArrayLiteralType | ArrayType
export function transformArray (hash: HashType, schema: SchemaType, parentUri: string, uri: string): DocumentType | undefined
export function transformArraySchema (hash?: HashType, schema?: SchemaType, params?: ParamsType): DocumentType | undefined

export function transformObjectFor (hash: HashType, schema: SchemaType, parentUri?: string, uri?: string): ObjectLiteralType | ObjectType
export function transformObject (hash: HashType, schema: SchemaType, parentUri: string, uri: string): DocumentType | undefined
export function transformObjectSchema (hash?: HashType, schema?: SchemaType, params?: ParamsType): DocumentType | undefined

export {
  transformString,
  default as transformStringSchema
} from '#transmission/transmission/from-hash-to-document/string'

export {
  transformNumber,
  default as transformNumberSchema
} from '#transmission/transmission/from-hash-to-document/number'

export {
  transformBoolean,
  default as transformBooleanSchema
} from '#transmission/transmission/from-hash-to-document/boolean'

export {
  transformNull,
  default as transformNullSchema
} from '#transmission/transmission/from-hash-to-document/null'

export default function fromHashToDocument (hash?: HashType, rootSchema?: SchemaType, parentUri?: string, uri?: string): DocumentType | undefined
