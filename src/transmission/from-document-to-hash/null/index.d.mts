type DocumentType = TransmissionTypes.DocumentType
type SchemaType = TransmissionTypes.SchemaType
type HashType = TransmissionTypes.HashType

export default function transformNullSchema (document?: DocumentType, schema?: SchemaType, hash?: HashType, parentUri?: string, uri?: string): HashType
