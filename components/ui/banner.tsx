import { homeBanner, runLogo } from '@/assets/banner/banner'
import { Button } from '@/components/ui/button'
import { Title } from '@/components/ui/Title'
import Link from 'next/link'
import Image from 'next/image'

import React from 'react'
import { ShoppingCart } from 'lucide-react'


const HomeBanner = () => {
  return (
    <div className='flex flex-col justify-between items-center px-0 md:px-4 md:py-0 md:flex-row'>
      {/* banner left */}
      <div className='flex flex-col gap-6 space-y-5 md:space-y-0 md:gap-2 md:w-3/5'>
        <Title>
        <span className='mask-b-from-neutral-800 text-success'>Grab Upto <span className='text-6xl font-extrabold text-blue-900'>50%</span> Off On</span><br />  
        
        <span className='text-blue-800'>Selected Headphone</span>
      </Title>
      
        <div className='py-2 flex items-center gap-4'>
            <Link className='p-2  font-semibold  text-white rounded-sm cursor-pointer bg-success hover:text-gray-600 hover:bg-warning hoverEffect transition' href={'/shop'}>
                Buy Now
                <ShoppingCart className='w-5 h-5 ml-2 inline-block'/>
                {/* <Image src={runLogo} alt='banner' className='w-5 h-5 inline-block ml-2 text-white'/> */}
            </Link>
        </div>

      </div>
      {/* banner right */} 
      
        <div className='hidden md:inline-flex w-2/5'>
          <Image  src={homeBanner} alt='banner'  />
        </div>
      
    </div>
  )
}

export default HomeBanner

