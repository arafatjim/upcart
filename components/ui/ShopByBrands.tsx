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
    <div className='my-10 lg:mb-20 py-8 gap-3 bg-bglight justify-between rounded-md px-6 w-full flex flex-col'>
      
      <div className='flex items-center justify-between py-4  border-gray-200 border-b-2 '>
        <p className='text-2xl font-extrabold '>Shop By Brands</p>
        <Button className='bg-success font-bold text-white px-3 py-4 rounded-md hover:bg-warning hover:text-gray-600 transition-colors duration-300'>
          <Link href={'/brands'}>View All</Link>
        </Button>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10'>
        {brands?.map((brand: any) => (
          <Link
            href={`/brands/${brand?.slug?.current}`}
            key={brand?._id}
            className='flex flex-col items-center gap-2 p-4 border rounded-md bg-white hover:shadow-lg transition-shadow duration-300 group'
          >
             <Image
              src={urlFor(brand?.logo)?.url() || '/placeholder-logo.png'}
              alt={brand?.name}
              width={250}
              height={250}
              className='w-full h-16 object-contain group-hover:scale-105 transition-transform duration-300'
            /> 
            <p className='text-center font-medium text-gray-700'>{brand?.name}</p>
          </Link>
        ))}
      </div>

        {/* Delivery Options */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 hover:shadow-lg transition-shadow duration-300 '>
          {
            deliveryOptions?.map((Option, index)=>{
              return (
                <div key={index} className='flex items-center gap-4 p-4 border rounded-md bg-light  hover:shadow-lg transition-shadow duration-300 hover:bg-gray-300 group'>
                  
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