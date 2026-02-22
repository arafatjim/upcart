import { type SchemaTypeDefinition } from 'sanity'
import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {blogType} from './postType'
import {authorType} from './authorType'
import {orderType} from './orderType'
import {brandType} from './brandType'
import {productType} from './productType'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, blogType, authorType,orderType, brandType, productType],
  

}
