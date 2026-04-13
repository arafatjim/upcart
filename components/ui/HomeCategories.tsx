import React from 'react'
import { Title } from './Title'
import { Category } from '@/sanity.types'
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';

const HomeCategories = ({ categories }:{categories?:Category[]}) => {
    // const popularCategories = categories?.slice(0, 4) || [];
    // console.log('popular categories:', popularCategories);
  return (
    <div className='bg-bglight p-1 my-2 md:my-6 lg:p-4 rounded-lg '>
        <p className='border-b-2 text-lg text-gray-600 font-extrabold pb-2'>Popular Categories</p>
      
      <div className='w-full py-4 gap-3 justify-between rounded-md px-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
        {categories?.map((category) => (
          <Link className='' href={`/category/${category?.slug?.current}`} key={category._id}>
          <div key={category._id} className='flex flex-col items-center justify-center gap-2 p-2 border rounded-md bg-light hover:bg-gray-400 transition-colors duration-300 '>
            
            {/* <p className='text-sm text-gray-500'>{category?._updatedAt}</p> */}
            {category?.image && (
              <div className='w-full h-20 flex items-center justify-center'>

                <Image
              src={urlFor(category?.image).url()} width={500}
              height={500}
              alt={category?.title || 'Category Image'}
              className='w-full h-full object-contain'/>

              </div>
            )}
<div>
              <div className='space-y-1.5'>
                <h3 className='text-lg font-semibold text-gray-700'>{category?.title}</h3>
              </div>
              <p className='text-sm text-green-600'>
                <span className='text-bold'>{`(${category?.productCount})`}</span>{" "} Availabel Items
              </p>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default HomeCategories
