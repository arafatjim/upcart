import React from 'react'
import { Title } from './Title'
import { Category } from '@/sanity.types'
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';

const HomeCategories = ({ categories }:{categories?:Category[]}) => {
    const popularCategories = categories?.slice(0, 4) || [];
    // console.log('popular categories:', popularCategories);
  return (
    <div className='bg-gray-300 p-3 my-2 md:my-6 lg:p-4 rounded-lg '>
        <p className='border-b-2 text-lg text-gray-600 font-extrabold pb-2'>Popular Categories</p>
      
      <div className='grid grid-cols-1 items-center  justify-between md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4'>
        {categories?.map((category) => (
          <Link className='' href={`/category/${category?.slug?.current}`} key={category._id}>
          <div key={category._id} className='mb-4 p-5 flex flex-row-reverse bg-light  justify-between object-cover text-nowrap items-center gap-4  border-2 rounded-lg hover:bg-gray-400 hover:shadow-md transition-shadow duration-300 group'>
            
            {/* <p className='text-sm text-gray-500'>{category?._updatedAt}</p> */}
            {category?.image && (
              <div className='flex items-center  justify-center overflow-hidden w-full  border-2  hover:border-amber-300 h-20 p-1 rounded-lg group'>

                <Image
              src={urlFor(category?.image).url()} width={500}
              height={500}
              alt={category?.title || 'Category Image'}
              className='w-2/3 h-full  object-contain group-hover:scale-110 hoverEffect rounded-md'/>

              </div>
            )}
<div>
              <div className='space-y-1.5'>
                <h3 className='text-md font-semibold text-gray-500'>{category?.title}</h3>
              </div>
              <p className='text-xs text-green-600'>
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
