import { defineQuery } from "next-sanity";

const BRAND_QUERY = defineQuery(`*[_type == 'brand'] | order(name asc){
    _id,
    name,
    slug,
    description,
    logo
}`);

const LATEST_BLOGS_QUERY = defineQuery(`*[_type == 'post'] {
  _id,
  title,
  slug,
  publishedAt,
  mainImage {
    asset,
    alt
  },
  categories[]-> {
    _id,
    title
  },
  author-> {
    _id,
    name,
    slug,
    image,
    bio
  },
  body
}`);



export {BRAND_QUERY, LATEST_BLOGS_QUERY,};