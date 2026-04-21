import React from 'react'
import { Category } from '@/sanity.types'
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';

type CategoryWithCount = Category & { productCount: number };

const HomeCategories = ({ categories }:{categories?:CategoryWithCount[]}) => {
  return (
    <div className='bg-bglight p-4 my-2 md:my-6 lg:p-4 rounded-lg '>
        <p className='border-b-2 my-2 text-2xl  font-extrabold p-2'>Popular Categories</p>
      
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 mt-2'>
        {categories?.map((category) => (
          <Link className='' href={`/category/${category?.slug?.current}`} key={category._id}>
          <div key={category._id} className='flex flex-col items-center gap-2 p-2 rounded-md border bg-light hover:shadow-lg transition-shadow duration-300 hover:bg-gray-300'>
            
            {/* <p className='text-sm text-gray-500'>{category?._updatedAt}</p> */}
            {category?.image && (
              <div className='w-full h-32 bg-gray-200 rounded-md overflow-hidden flex items-center justify-center'>

                <Image
              src={urlFor(category?.image).url()} width={500}
              height={500}
              alt={category?.title || 'Category Image'}
              className='w-full h-full object-contain'/>

              </div>
            )}
<div>
              <div className='flex items-center gap-2 text-sm font-bold text-gray-400 uppercase'>
                <h3 className='text-md font-semibold text-gray-700'>{category?.title}</h3>
              </div>
              <p className='text-xs md:text-md text-green-600'>
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
