import React from 'react'
import Link from 'next/link'
import { Button } from './button'
import { getAllBrands } from '@/sanity/Queries'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

const ShopByBrands = async () => {
  const brands = await getAllBrands();
  console.log("RAW BRAND DATA:", JSON.stringify(brands[0], null, 2));

  return (
    <div className='my-10 py-4 gap-3 bg-gray-200 justify-between rounded-md px-4 w-full flex-col md:flex-row'>
      
      <div className='flex items-center justify-between py-4 border-b-2 border-gray-100 '>
        <p className='text-xl font-bold text-gray-600'>Shop By Brands</p>
        <Button className='bg-success font-bold text-white px-3 py-4 rounded-md hover:bg-warning hover:text-gray-600 transition-colors duration-300'>
          <Link href={'/brands'}>View All</Link>
        </Button>
      </div>

      <div className='grid grid-cols-2 py-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'>
        {brands?.map((brand: any) => (
          <Link
            href={`/brands/${brand?.slug?.current}`}
            key={brand?._id}
            className='flex items-center justify-center gap-4 p-3 border rounded-md bg-light hover:bg-gray-400 transition-colors duration-300'
          >
             <Image
              src={urlFor(brand?.logo)?.url() || '/placeholder-logo.png'}
              alt={brand?.name}
              width={250}
              height={200}
              className=' h-16 object-contain rounded-2xl group-hover:scale-110 transition-transform duration-300'
            /> 
            {/* <p className='text-lg font-medium text-gray-700'>{brand?.name}</p> */}
          </Link>
        ))}
      </div>

    </div>
  )
}

export default ShopByBrands