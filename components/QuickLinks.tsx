import { Quicklinks } from '@/Constants/data'
import Link from 'next/link'
import React from 'react'
import { SubTitle } from './ui/Title'

const QuickLinks = () => {
  return (
    <div>
      <SubTitle className='pb-2'>Quick Links</SubTitle>
       <div className='grid grid-cols-1 gap-2 text-sm text-gray-400'>
        {
            Quicklinks.map((item)=>(
                <Link className='hover:text-warning' key={item?.id} href={item?.href}>
                {item?.title}
                </Link>
            ))
        }
       </div>
    </div>
  )
}

export default QuickLinks
