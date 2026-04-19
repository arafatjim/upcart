import Container from '@/components/Container';
import CategoryProducts from '@/components/ui/CategoryProducts';
import { getCategories } from '@/sanity/Queries'
import React from 'react'

const CategoryPage = async ({params}:{params:Promise<{slug:string}>}) => {
  const categories = await getCategories();
  console.log('categories are', categories);
  const {slug} = await params;
  return (
    <div className='py-4  bg-white mx-2 border-2 rounded-md'>
      <Container >
        <h1 className='text-xl  font-bold'>
          Products by Category: {" "}
          <span className='text-success'>{slug && slug.charAt(0).toUpperCase() + slug.slice(1)}</span>
        </h1>

        <CategoryProducts categories= {categories} />
      </Container>
    </div>
  )
}

export default CategoryPage
