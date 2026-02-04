import { Button } from '@/components/ui/button'
import { Title } from '@/components/ui/Title'
import Link from 'next/link'

import React from 'react'

const HomeBanner = () => {
  return (
    <div className='flex flex-col justify-between items-center p-4 md:flex-row '>
      {/* banner left */}
      

      <div >
        <Title>
        Grab Upto 50% off On
        <br />
         Selected Headphone
      </Title>
      
        <div className='py-6'>
          <Link className='px-2 py-2 text-bold bg-warning text-black rounded-sm cursor-pointer hover:text-white hover:bg-success hoverEffect transition' href={'/shop'}>
        Buy Now
      </Link>
        </div>

      </div>
      {/* banner right */}
      <div>
        <p>home banner</p>
      </div>
    </div>
  )
}

export default HomeBanner
