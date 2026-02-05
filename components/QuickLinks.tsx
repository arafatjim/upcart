import { Quicklinks } from '@/Constants/data'
import Link from 'next/link'
import React from 'react'

const QuickLinks = () => {
  return (
    <div>
      <h1>Quick Links</h1>
       <div className='grid grid-cols-1 gap-2 text-sm text-gray-400'>
        {
            Quicklinks.map((item)=>(
                <Link key={item?.id} href={item?.href}>
                {item?.title}
                </Link>
            ))
        }
       </div>
    </div>
  )
}

export default QuickLinks
