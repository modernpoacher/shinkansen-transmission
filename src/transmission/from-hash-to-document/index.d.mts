  type ObjectLiteralType = TransmissionTypes.ObjectLiteralType
  type ObjectType = TransmissionTypes.ObjectType
  type ArrayLiteralType = TransmissionTypes.ArrayLiteralType
  type ArrayType = TransmissionTypes.ArrayType

  type SchemaType = TransmissionTypes.SchemaType

  type DocumentType = TransmissionTypes.DocumentType
  type HashType = TransmissionTypes.HashType

export function toNull (v: unknown): null
export function toBoolean (v: unknown): boolean
export function toString (v: unknown): string
export function toNumber (v: unknown): number

export function transformValueFor (document: DocumentType, array: ArrayLiteralType | ArrayType | undefined): DocumentType

export function getArrayFor (hash: HashType, array: ArrayLiteralType | ArrayType | undefined, uri?: string): ArrayLiteralType | ArrayType

export function transformArrayFor (hash: HashType, schema: SchemaType, parentUri?: string, uri?: string): ArrayLiteralType | ArrayType
export function transformObjectFor (hash: HashType, schema: SchemaType, parentUri?: string, uri?: string): ObjectLiteralType | ObjectType

export function transformItemsArrayFor (hash: HashType, items: ArrayLiteralType | ArrayType | undefined, parentUri?: string, uri?: string): ArrayLiteralType | ArrayType | undefined
export function transformItemsObjectFor (hash: HashType, items: ObjectLiteralType | ObjectType | undefined, parentUri?: string, uri?: string): ArrayLiteralType | ArrayType | undefined

export function transformNull (hash: HashType, schema: SchemaType, parentUri: string, uri: string): null | undefined
export function transformBoolean (hash: HashType, schema: SchemaType, parentUri: string, uri: string): boolean | undefined
export function transformObject (hash: HashType, schema: SchemaType, parentUri: string, uri: string): ObjectLiteralType | ObjectType
export function transformArray (hash: HashType, schema: SchemaType, parentUri: string, uri: string): ArrayLiteralType | ArrayType
export function transformNumber (hash: HashType, schema: SchemaType, parentUri: string, uri: string): number | undefined
export function transformString (hash: HashType, schema: SchemaType, parentUri: string, uri: string): string | undefined

export default function transform (hash?: HashType, rootSchema?: SchemaType, parentUri?: string, uri?: string): DocumentType | undefined
