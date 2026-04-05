import { homeBanner,  } from '@/assets/banner/banner'
import { Title } from '@/components/ui/Title'
import Link from 'next/link'
import Image from 'next/image'

import React from 'react'
import { ShoppingCart } from 'lucide-react'


const HomeBanner = () => {
  return (
    <div className='flex bg-green-400/16 flex-col p-4 justify-between items-center rounded-md md:flex-row'>
      {/* banner left */}
      <div className='flex flex-col w-full  justify-center items-center gap-6 mx-auto space-y-5 md:space-y-0 md:gap-2 md:items-start md:w-3/5'>
        <Title className=''>
        <span className='mask-b-from-neutral-800 text-[#000000] '>Grab Upto <span className="text-6xl font-extrabold text-[#00c02a] inline-block animate-out-in">
  50%
</span> Off On</span><br />  
        
        <span className='text-blue-800'>Selected Headphone</span>
      </Title>
      
        <div className='py-2 flex items-center gap-4'>
            <Link className='p-2  font-semibold  text-white rounded-sm cursor-pointer bg-success hover:text-gray-600 hover:bg-warning hoverEffect transition' href={'/shop'}>
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

