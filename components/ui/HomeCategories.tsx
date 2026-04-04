import React from 'react'
import { Title } from './Title'
import { Category } from '@/sanity.types'
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';

const HomeCategories = ({ categories }:{categories?:Category[]}) => {
    const popularCategories = categories?.slice(0, 4) || [];
    console.log('popular categories:', popularCategories);
  return (
    <div className=' border-2 p-3 border-gray-300 my-2 md:my-6 lg:p-4 rounded-lg bg-green-400/16'>
        <p className='border-b-2 text-lg pb-2'>Popular Categories</p>
      
      <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4'>
        {categories?.map((category) => (
          <div key={category._id} className='mb-4 p-5 flex object-cover text-nowrap items-center gap-4 bg-white border-2 border-gray-300 rounded-lg hover:shadow-md transition-shadow duration-300 group '>
            <Title className='text-sm'>{category?.title}</Title>
            {/* <p className='text-sm text-gray-500'>{category?._updatedAt}</p> */}
            {category?.image && (
              <div className='overflow-hidden border-2 border-gray-300/40 hover:border-orange-700 w-36 h-20 p-1 rounded-lg group'>
                <Link href={`/category/${category?.slug?.current}`}>
                <Image 
              src={urlFor(category?.image).url()} width={500} 
              height={500} 
              alt={category?.title || 'Category Image'}  
              className='w-full h-full object-contain group-hover:scale-110 hoverEffect'/>
                </Link>
              </div>
            )}
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeCategories
