declare global {
  namespace TransmissionTypes {
    export type ObjectLiteralType = Record<PropertyKey, never>
    export type ObjectType = Record<PropertyKey, unknown>
    export type ArrayLiteralType = never[]
    export type ArrayType = unknown[]

    export type ItemsType = string[] | number[] | object[] | boolean[] | null[]

    export type SelectedItemsType = Array<string | number | boolean | null>

    export interface EnumType {
      id: string
      name?: string
      items?: ItemsType
      selectedItems?: SelectedItemsType
    }

    export interface AnyOfType {
      id: string
      name?: string
      items?: ItemsType
      selectedItems?: SelectedItemsType
    }

    export interface OneOfType {
      id: string
      name?: string
      items?: ItemsType
      selectedItems?: SelectedItemsType
    }

    export interface FieldType {
      id: string
      name?: string
      items?: ItemsType
      selectedItems?: SelectedItemsType
      value?: string | number | boolean | null | object | ItemsType
      defaultValue?: string | number | boolean | null | object | ItemsType
    }

    export interface SchemaType {
      $id?: string
      $schema?: string
      type?: string
      title?: string
      description?: string
      required?: string[]
      readOnly?: boolean
      writeOnly?: boolean
      const?: string | number | object | boolean | null
      default?: string | number | object | boolean | null
      enum?: ItemsType
      anyOf?: ItemsType
      oneOf?: ItemsType
      allOf?: ItemsType
      minimum?: number
      maximum?: number
      minLength?: number
      maxLength?: number
      minItems?: number
      maxItems?: number
      uniqueItems?: boolean
      minContains?: number
      maxContains?: number
      minProperties?: number
      maxProperties?: number
      exclusiveMinimum?: boolean
      exclusiveMaximum?: boolean
      multipleOf?: number
      items?: SchemaType | SchemaType[]
      properties?: Record<string, SchemaType>
      pattern?: RegExp
    }

    export interface StringSchemaType extends SchemaType {
      type?: 'string'
    }

    export interface NumberSchemaType extends SchemaType {
      type?: 'number'
    }

    export interface ArraySchemaType extends SchemaType {
      type?: 'array'
    }

    export interface ObjectSchemaType extends SchemaType {
      type?: 'object'
    }

    export interface BooleanSchemaType extends SchemaType {
      type?: 'boolean'
    }

    export interface NullSchemaType extends SchemaType {
      type?: 'null'
    }

    /**
     *  String keys with string or string array values
     */
    export type ValuesType = Record<string, string | string[]> | Record<string, never>

    interface MetaType extends ObjectType {
      parentUri?: string
      uri?: string
      schema?: SchemaType
      rootSchema?: SchemaType
      value?: string
      defaultValue?: string
      item?: number
      name?: string
      selectedItems?: SelectedItemsType
      items?: ItemsType
      isRequired?: boolean
      component?: string
    }

    interface ElementsType extends ObjectType {
      title?: string
      description?: string
    }

    export namespace Transmission {
      interface TransmissionMetaType extends MetaType {}

      interface TransmissionElementsType extends ElementsType {
        field?: FieldType
        enum?: EnumType
        anyOf?: AnyOfType
        oneOf?: OneOfType
        fields?: Array<{
          meta?: TransmissionMetaType
          elements?: TransmissionElementsType
        }>
      }

      export interface StringMetaType extends TransmissionMetaType {
        minLength?: number
        maxLength?: number
        pattern?: RegExp
      }

      export interface NumberMetaType extends TransmissionMetaType {
        min?: number
        max?: number
        step?: number
        isExclusiveMin?: boolean
        isExclusiveMax?: boolean
      }

      export interface ArrayMetaType extends TransmissionMetaType {
        minItems?: number
        maxItems?: number
        hasUniqueItems?: boolean
        minContains?: number
        maxContains?: number
      }

      export interface ObjectMetaType extends TransmissionMetaType {
        minProperties?: number
        maxProperties?: number
      }

      export interface BooleanMetaType extends TransmissionMetaType {}

      export interface NullMetaType extends TransmissionMetaType {}

      export interface StringElementsType extends TransmissionElementsType {}

      export interface NumberElementsType extends TransmissionElementsType {}

      export interface ArrayElementsType extends TransmissionElementsType {}

      export interface ObjectElementsType extends TransmissionElementsType {}

      export interface BooleanElementsType extends TransmissionElementsType {}

      export interface NullElementsType extends TransmissionElementsType {}

      interface TransmissionType {
        meta?: StringMetaType
        elements?: StringElementsType
      }

      export interface StringType {
        meta?: StringMetaType
        elements?: StringElementsType
      }

      export interface NumberType {
        meta?: NumberMetaType
        elements?: NumberElementsType
      }

      export interface ArrayType {
        meta?: ArrayMetaType
        elements?: ArrayElementsType
      }

      export interface ObjectType {
        meta?: ObjectMetaType
        elements?: ObjectElementsType
      }

      export interface BooleanType {
        meta?: BooleanMetaType
        elements?: BooleanElementsType
      }

      export interface NullType {
        meta?: NullMetaType
        elements?: NullElementsType
      }
    }

    export namespace Zashiki {
      interface ZashikiMetaType extends MetaType {
        type?: string
      }

      interface ZashikiElementsType extends ElementsType {
        field?: FieldType
        fields?: Array<{
          meta?: ZashikiMetaType
          elements?: ZashikiElementsType
        }>
      }

      export interface StringMetaType extends ZashikiMetaType {
        minLength?: number
        maxLength?: number
        pattern?: RegExp
      }

      export interface NumberMetaType extends ZashikiMetaType {
        min?: number
        max?: number
        step?: number
        isExclusiveMin?: boolean
        isExclusiveMax?: boolean
      }

      export interface ArrayMetaType extends ZashikiMetaType {
        minItems?: number
        maxItems?: number
        hasUniqueItems?: boolean
        minContains?: number
        maxContains?: number
      }

      export interface ObjectMetaType extends ZashikiMetaType {
        minProperties?: number
        maxProperties?: number
      }

      export interface BooleanMetaType extends ZashikiMetaType {}

      export interface NullMetaType extends ZashikiMetaType {}

      export interface StringElementsType extends ZashikiElementsType {}

      export interface NumberElementsType extends ZashikiElementsType {}

      export interface ArrayElementsType extends ZashikiElementsType {}

      export interface ObjectElementsType extends ZashikiElementsType {}

      export interface BooleanElementsType extends ZashikiElementsType {}

      export interface NullElementsType extends ZashikiElementsType {}

      interface ZashikiType {
        meta?: ZashikiMetaType
        elements?: ZashikiElementsType
      }

      export interface StringType {
        meta?: StringMetaType
        elements?: StringElementsType
      }

      export interface NumberType {
        meta?: NumberMetaType
        elements?: NumberElementsType
      }

      export interface ArrayType {
        meta?: ArrayMetaType
        elements?: ArrayElementsType
      }

      export interface ObjectType {
        meta?: ObjectMetaType
        elements?: ObjectElementsType
      }

      export interface BooleanType {
        meta?: BooleanMetaType
        elements?: BooleanElementsType
      }

      export interface NullType {
        meta?: NullMetaType
        elements?: NullElementsType
      }
    }

    export type ParamsType = Record<string, Transmission.StringType | Transmission.NumberType | Transmission.ArrayType | Transmission.ObjectType | Transmission.BooleanType | Transmission.NullType> & {
      parentUri?: string
      uri?: string
      key?: string
      index?: number
      required?: string[]
      fields?: Array<Transmission.StringType | Transmission.NumberType | Transmission.ArrayType | Transmission.ObjectType | Transmission.BooleanType | Transmission.NullType>
    }

    /**
     *  A JSON Schema document
     */
    export type DocumentType = string | number | object | boolean | null | string[] | number[] | object[] | boolean[] | null[]

    /**
     *  String keys with string or string array values
     */
    export type HashType = Record<string, string | string[]> | Record<string, never>
  }
}

export {}
