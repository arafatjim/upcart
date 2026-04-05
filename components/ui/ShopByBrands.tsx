import React from 'react'
import { Title } from './Title'
import Link from 'next/link'
import { Button } from './button'
import { ShoppingCart } from 'lucide-react'

const ShopByBrands = () => {
  return (
    <div className='bg-gray-500 border-2 py-3 border-gray-400 flex items-center gap-3 justify-between rounded-md px-4 w-full flex-col md:flex-row'>
        
        <div className='border-b-2 w-full md:border-0 text-center md:text-left py-2 '>
            
            <p className='text-xl font-bold text-gray-600'>Shop By Brands</p>
            
        </div>
        <Link href={'/brands'} className='pb-2'>
            <Button>View All</Button>
        </Link>
    </div>
  )
}

export default ShopByBrands
