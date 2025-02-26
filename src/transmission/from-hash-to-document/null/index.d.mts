export type SchemaType = TransmissionTypes.SchemaType
export type ParamsType = TransmissionTypes.ParamsType
export type DocumentType = TransmissionTypes.DocumentType
export type HashType = TransmissionTypes.HashType

export function transformNull (hash: HashType, schema: SchemaType, parentUri: string, uri: string): null | undefined

export default function transformNullSchema (hash?: HashType, schema?: SchemaType, params?: ParamsType): DocumentType | undefined
