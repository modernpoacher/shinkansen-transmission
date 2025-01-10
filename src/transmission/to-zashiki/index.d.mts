declare module '#transmission/transmission/to-zashiki' {
  type SchemaType = ZashikiTypes.SchemaType

  type ObjectLiteralType = ZashikiTypes.ObjectLiteralType
  type ObjectType = ZashikiTypes.ObjectType

  type ZashikiType = ZashikiTypes.ZashikiType

  export default function toZashiki (rootSchema: SchemaType | undefined, values: ObjectType | ObjectLiteralType | undefined, params: ObjectType | ObjectLiteralType | undefined): ZashikiType | undefined
}

declare module 'shinkansen-transmission/transmission/to-zashiki' {
  export { default } from '#transmission/transmission/to-zashiki'
  export * from '#transmission/transmission/to-zashiki'
}
