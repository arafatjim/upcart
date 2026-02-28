import { productType } from '@/Constants/data'
import Link from 'next/link'
import React from 'react'
import { Button } from './button'
import { log } from 'console';
interface Props{
    selectedTab?: string;
    onTabSelect?: (tab: string) => void;
}

const HomeTabBar = ({selectedTab, onTabSelect}: Props) => {
  return (
    <div className='flex justify-between items-center py-4 gap-5 text-sm'>
      {/* left Tab-bar */}
      <div className='flex gap-6 font-semibold flex-wrap '>
        {productType?.map((item)=>(
        <button onClick={()=> onTabSelect?.(item?.title)} key={item?.title} className={`border px-2 py-1.5 rounded-2xl bg-green-200/50 border-gray-400 cursor-pointer md:px-6 md:py-2  hover:bg-success hover:text-white transition-colors duration-300 ${selectedTab === item?.title ? 'bg-success text-white' : ''}`} >{item?.title}</button>
      ))}
      </div>
      
        {/* right Tab-bar */}
        <Link href={'/shop'} className='border px-2 py-1.5 bg-green-200/50 rounded-2xl border-gray-400 md:px-6 md:py-2  hover:bg-success hover:text-white transition-colors duration-300'>Sell All</Link>
    </div>
  )
}

export default HomeTabBar
