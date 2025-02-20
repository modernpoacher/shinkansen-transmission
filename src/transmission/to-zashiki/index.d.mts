export type SchemaType = TransmissionTypes.SchemaType
export type ValuesType = TransmissionTypes.ValuesType
export type ParamsType = TransmissionTypes.ParamsType

export type ZashikiType = TransmissionTypes.Zashiki.ZashikiType

export default function toZashiki (rootSchema?: SchemaType, values?: ValuesType, params?: ParamsType): ZashikiType
