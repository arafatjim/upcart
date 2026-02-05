import React from 'react'
import { Subtext, SubTitle } from './Title'
import { CategoriesData } from '@/Constants/data'
import Link from 'next/link'

const Categories = () => {
  return (
    <div>
      <SubTitle>Categories</SubTitle>
      <div className='grid grid-cols-1 gap-2 text-sm text-gray-400' >
        {
            CategoriesData.map(item => { 
                return <Link className='hover:text-warning' href={item?.href} key={ item?.id }>{ item.title }</Link> 
            })
        }
      </div>
    </div>
  )
}

export default Categories
