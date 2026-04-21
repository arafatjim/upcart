import { homeBanner,  } from '@/assets/banner/banner'
import { Title } from '@/components/ui/Title'
import Link from 'next/link'
import Image from 'next/image'

import React from 'react'
import { ShoppingCart } from 'lucide-react'


const HomeBanner = () => {
  return (
    <div className='bg-bglight rounded-md p-6 flex flex-col md:flex-row items-center justify-between gap-6 w-full'>
      {/* banner left */}
      <div className='flex flex-col items-center md:items-start gap-4 w-full md:w-1/2'>
        <Title className='text-2xl md:text-5xl '>
        <span className=' text-black '>Grab Upto <span className=" font-bold text-4xl text-white bg-success px-2 rounded-md">
  50%
</span> Off On</span><br />  
        
        Selected Headphones & Speakers
      </Title>
      
        <div className='py-2 flex items-center md:items-start gap-4'>
            <Link className='p-1 md:p-2 border-2 border-success/5 font-semibold  text-white rounded-sm cursor-pointer bg-success hover:text-gray-600 hover:bg-warning hoverEffect transition' href={'/shop'}>
                Buy Now
                <ShoppingCart className='w-5 h-5 ml-2 inline-block'/>
                
            </Link>
        </div>

      </div>
      {/* banner right */} 
      
        <div className='hidden md:inline-flex w-70'>
          <Image className='rounded-full bg-none'  src={homeBanner} alt='banner'  />
        </div>
      
    </div>
  )
}

export default HomeBanner

