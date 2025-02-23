export type ObjectLiteralType = TransmissionTypes.ObjectLiteralType
export type ObjectType = TransmissionTypes.ObjectType
export type ArrayLiteralType = TransmissionTypes.ArrayLiteralType
export type ArrayType = TransmissionTypes.ArrayType

export type SchemaType = TransmissionTypes.SchemaType
export type DocumentType = TransmissionTypes.DocumentType
export type HashType = TransmissionTypes.HashType

export function toNull (v: unknown): null
export function toBoolean (v: unknown): boolean
export function toString (v: unknown): string
export function toNumber (v: unknown): number

export function transformValueFor (document: DocumentType, array?: ArrayLiteralType | ArrayType): DocumentType

export function getArrayFor (hash: HashType, array?: ArrayLiteralType | ArrayType, uri?: string): ArrayLiteralType | ArrayType

export function transformArrayFor (hash: HashType, schema: SchemaType, parentUri?: string, uri?: string): ArrayLiteralType | ArrayType
export function transformObjectFor (hash: HashType, schema: SchemaType, parentUri?: string, uri?: string): ObjectLiteralType | ObjectType

export function transformItemsArrayFor (hash: HashType, items?: ArrayLiteralType | ArrayType, parentUri?: string, uri?: string): ArrayLiteralType | ArrayType | undefined
export function transformItemsObjectFor (hash: HashType, items?: ObjectLiteralType | ObjectType, parentUri?: string, uri?: string): ArrayLiteralType | ArrayType | undefined

export function transformNull (hash: HashType, schema: SchemaType, parentUri: string, uri: string): null | undefined
export function transformBoolean (hash: HashType, schema: SchemaType, parentUri: string, uri: string): boolean | undefined
export function transformObject (hash: HashType, schema: SchemaType, parentUri: string, uri: string): ObjectLiteralType | ObjectType
export function transformArray (hash: HashType, schema: SchemaType, parentUri: string, uri: string): ArrayLiteralType | ArrayType
export function transformNumber (hash: HashType, schema: SchemaType, parentUri: string, uri: string): number | undefined
export function transformString (hash: HashType, schema: SchemaType, parentUri: string, uri: string): string | undefined

export default function transform (hash?: HashType, rootSchema?: SchemaType, parentUri?: string, uri?: string): DocumentType | undefined
