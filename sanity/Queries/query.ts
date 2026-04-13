// import { defineQuery } from "next-sanity";

// const BRAND_QUERY = defineQuery(`*[_type == 'brand'] | order(name asc){
//     _id,
//     name,
//     slug,
//     description,
//     logo
// }`);

// const LATEST_BLOGS_QUERY = defineQuery(`*[_type == 'post'] {
//   _id,
//   title,
//   slug,
//   publishedAt,
//   mainImage {
//     asset,
//     alt
//   },
//   categories[]-> {
//     _id,
//     title
//   },
//   author-> {
//     _id,
//     name,
//     slug,
//     image,
//     bio
//   },
//   body
// }`);



// export {BRAND_QUERY, LATEST_BLOGS_QUERY,};
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

const PRODUCT_QUERY = defineQuery(`*[_type == 'product'] | order(_createdAt desc){
  _id,
  name,
  slug,
  description,
  price,
  discount,
  stock,
  status,
  rating,
  productType,
  featured,
  releaseDate,
  image[]{
    asset,
    hotspot
  },
  specifications[]{
    key,
    value
  },
  reviews[]{
    reviewer,
    comment,
    rating
  },
  category->{
    _id,
    title,
    slug
  },
  brand->{
    _id,
    name,
    slug,
    logo
  }
}`);

const PRODUCT_BY_SLUG_QUERY = defineQuery(`*[_type == 'product' && slug.current == $slug][0]{
  _id,
  name,
  slug,
  description,
  price,
  discount,
  stock,
  status,
  rating,
  productType,
  featured,
  releaseDate,
  image[]{
    asset,
    hotspot
  },
  specifications[]{
    key,
    value
  },
  reviews[]{
    reviewer,
    comment,
    rating
  },
  category->{
    _id,
    title,
    slug
  },
  brand->{
    _id,
    name,
    slug,
    logo
  }
}`);

const FEATURED_PRODUCT_QUERY = defineQuery(`*[_type == 'product' && featured == true] | order(_createdAt desc){
  _id,
  name,
  slug,
  price,
  discount,
  stock,
  status,
  rating,
  productType,
  featured,
  image[]{
    asset,
    hotspot
  },
  category->{
    _id,
    title,
    slug
  },
  brand->{
    _id,
    name,
    slug
  }
}`);

const PRODUCT_BY_CATEGORY_QUERY = defineQuery(`*[_type == 'product' && category->slug.current == $slug] | order(_createdAt desc){
  _id,
  name,
  slug,
  price,
  discount,
  stock,
  status,
  rating,
  productType,
  featured,
  image[]{
    asset,
    hotspot
  },
  category->{
    _id,
    title,
    slug
  },
  brand->{
    _id,
    name,
    slug
  }
}`);

const PRODUCT_BY_BRAND_QUERY = defineQuery(`*[_type == 'product' && brand->slug.current == $slug] | order(_createdAt desc){
  _id,
  name,
  slug,
  price,
  discount,
  stock,
  status,
  rating,
  productType,
  featured,
  image[]{
    asset,
    hotspot
  },
  category->{
    _id,
    title,
    slug
  },
  brand->{
    _id,
    name,
    slug
  }
}`);

export {
  BRAND_QUERY,
  LATEST_BLOGS_QUERY,
  PRODUCT_QUERY,
  PRODUCT_BY_SLUG_QUERY,
  FEATURED_PRODUCT_QUERY,
  PRODUCT_BY_CATEGORY_QUERY,
  PRODUCT_BY_BRAND_QUERY,
};