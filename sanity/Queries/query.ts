import { defineQuery } from "next-sanity";

const BRAND_QUERY = defineQuery(`*[_type == 'brand'] | order(name asc){
    _id,
    name,
    slug,
    description,
    logo
}`);

export {BRAND_QUERY};