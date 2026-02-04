import { homeBanner } from '@/assets/banner/banner'
import { Button } from '@/components/ui/button'
import { Title } from '@/components/ui/Title'
import Link from 'next/link'
import Image from 'next/image'

import React from 'react'

const HomeBanner = () => {
  return (
    <div className='flex flex-col justify-between items-center px-0 md:px-4 md:py-0 md:flex-row '>
      {/* banner left */}
      <div className='flex flex-col gap-6 space-y-5 md:space-y-0 md:gap-8  md:w-3/5'>
        <Title>
        Grab Upto 50% Off On<br />  
        
        Selected Headphone
      </Title>
      
        <div >
            <Link className='p-2 font-semibold bg-warning text-black rounded-sm cursor-pointer hover:text-white hover:bg-success hoverEffect transition' href={'/shop'}>
                Buy Now
            </Link>
        </div>

      </div>
      {/* banner right */}
      
        <Image className='hidden md:inline-flex w-2/5' src={homeBanner} alt='banner'  />
      
    </div>
  )
}

export default HomeBanner
