import { type SchemaTypeDefinition } from 'sanity'

import { collectionType } from './collection'
import { productType } from './product'
import { roomType } from './room'
import { siteSettings } from './siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [roomType, collectionType, productType, siteSettings],
}
