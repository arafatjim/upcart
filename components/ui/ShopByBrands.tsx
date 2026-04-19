import React from 'react'
import Link from 'next/link'
import { Button } from './button'
import { getAllBrands } from '@/sanity/Queries'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { BadgeCheck,  Headset, Package,  RotateCcw, ShieldCheck, Truck, } from 'lucide-react'


const deliveryOptions = [
  {
    title: 'Fast Delivery',
    description: 'Quick & reliable delivery to your door.',
    icon: <Truck size={45} />
  },
  {
    title: 'Free Shipping',
    description: 'Free shipping on all orders over $50.',
    icon: <Package size={45} />
  },
  {
    title: 'Easy Returns',
    description: 'Hassle-free returns within 30 days.',
    icon: <RotateCcw size={45} />
  },
  {
    title: '24/7 Customer Support',
    description: 'We\'re here to help you anytime.',
    icon: <Headset size={45} />
  },
  {
    title: 'Secure Payment',
    description: 'Your payment is always safe & protected.',
    icon: <ShieldCheck size={45} />
  },
  {
    title: 'Quality Assurance',
    description: 'Only the best products for our customers.',
    icon: <BadgeCheck size={45} />
  },
]

const ShopByBrands = async () => {
  const brands = await getAllBrands();
  console.log("RAW BRAND DATA:", JSON.stringify(brands[0], null, 2));

  return (
    <div className='mb-10 py-4 gap-3 bg-bglight justify-between rounded-md px-4 w-full flex-col md:flex-row'>
      
      <div className='flex items-center justify-between py-4  border-gray-200 border-b-2 '>
        <p className='text-2xl font-extrabold '>Shop By Brands</p>
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
              height={250}
              className='w-34 h-16 object-contain rounded-2xl group-hover:scale-110 transition-transform duration-300'
            /> 
            {/* <p className='text-lg font-medium text-gray-700'>{brand?.name}</p> */}
          </Link>
        ))}
      </div>

        {/* Delivery Options */}
        <div className='mt-10 py-4 gap-3 bg-bglight hover:cursor-pointer hover:text-warning justify-between rounded-md px-1 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6'>
          {
            deliveryOptions?.map((Option, index)=>{
              return (
                <div key={index} className='flex flex-col md:flex-row items-center gap-4 p-3 border rounded-md bg-light hover:bg-gray-400 transition-colors duration-300'>
                  
                  <div className='text-success scale-100 group-hover:scale-110 hover:text-warning transition-colors duration-300 '>
                    {Option?.icon}
                  </div>
                  <div className='space-y-1.5'>
                    <h3 className='font-semibold text-gray-700 '>{Option?.title}</h3>
                    <p className='text-gray-600 text-xs'>{Option?.description}</p>
                  </div>
                </div>
              )
            })
          }
        </div>

    </div>
  )
}

export default ShopByBrands